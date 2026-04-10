#!/usr/bin/env node
/**
 * extract-translations.mjs
 *
 * Sammelt alle sichtbaren DE-Texte aus dem mypraxis-nextjs Projekt
 * und schreibt sie als public/translations/de.json raus.
 *
 * Ansatz: Wir holen String-Literale aus tsx/ts Files die JSX-Content
 * sein könnten, plus die Frontmatter und den Plain-Text aus den
 * Blog-Markdowns in content/blog/.
 *
 * Schema: { "Originaltext DE": "Originaltext DE" }
 * (Der Wert ist erstmal die Kopie – wird später pro Sprache übersetzt.)
 */

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const TARGET_DIRS = ['app', 'components', 'content']
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'pdf_pages', 'public'])
const EXTS = new Set(['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx'])

// Strings die NIE übersetzt werden sollen
const BLACKLIST_PATTERNS = [
  /^\s*$/,
  /^[0-9.,\-+*/%()€$£¥]+$/, // Nur Zahlen/Math
  /^[#/&!@$%^*().:;{}[\]<>]+$/, // Nur Symbole
  /^[A-Za-z0-9_-]+\.(png|jpg|jpeg|webp|avif|svg|mp4|mp3|pdf|json|css|js|tsx|ts)$/i, // Dateinamen
  /^https?:\/\//, // URLs
  /^\/[a-z0-9/_-]*$/i, // Pfade
  /^[A-Z_]+$/, // CONSTANT_CASE
  /^[a-z][a-zA-Z0-9]*$/, // camelCase identifier
  /^[a-z]+(-[a-z]+)+$/, // kebab-case
  /^rgb[a]?\(.*\)$/, // Farben
  /^#[0-9a-fA-F]{3,8}$/, // Hex-Farben
  /^\d+(\.\d+)?(px|rem|em|%|vh|vw|s|ms)$/, // CSS-Werte
  /^[a-z-]+:[a-z0-9\s,'"-]+$/i, // CSS property:value
  /^(true|false|null|undefined)$/i,
]

// Strings die zu kurz oder rein technisch sind
function shouldSkip(s) {
  if (!s || s.length < 3) return true
  if (s.length > 600) return true // wahrscheinlich Code-Block

  // JS/TS/CSS code-like heuristics
  if (/[=><{}[\]`]/.test(s) && /[a-z]+\(/.test(s)) return true // function calls
  if (/\b(const|let|var|function|return|import|export|from|useState|useEffect|useRef|useCallback|async|await)\b/.test(s)) return true
  if (/=>/.test(s)) return true
  if (/\b[a-zA-Z_]+\s*:\s*[a-z]+\(/.test(s)) return true // property: func(
  if (/\b(div|span|p|h[1-6]|button|a|img|section|article|nav|header|footer|main|aside)>/.test(s)) return true // HTML tags
  if (/^\s*[,;{}()[\]]/.test(s)) return true // startet mit Syntax-Zeichen
  if (/['"`]\s*[,;}\])]/.test(s)) return true // Quote gefolgt von Syntax
  if (/className=|style=|href=|src=|onClick=|onChange=/.test(s)) return true
  if (/\.(tsx|ts|jsx|js|css|mjs|cjs)(\s|$|[^a-z])/.test(s)) return true
  if (/^[a-zA-Z0-9_-]+\([^)]*\)$/.test(s)) return true // function() call
  if (/^\.[a-zA-Z-]+$/.test(s)) return true // CSS class
  if (/rgba?\(|hsl\(/.test(s)) return true
  if (/\bbg-|text-|border-|rounded-|flex-|grid-|items-|justify-|from-|to-|via-|ring-/.test(s)) return true

  for (const p of BLACKLIST_PATTERNS) {
    if (p.test(s)) return true
  }
  // Muss mindestens zwei deutsche Buchstaben-Wörter haben (oder ein langes Wort)
  const words = s.match(/[a-zA-ZäöüÄÖÜß]{2,}/g) || []
  if (words.length < 1) return true
  // Mindestens 40% der Chars müssen Letter oder Whitespace sein (nicht Symbole)
  const letterChars = (s.match(/[a-zA-ZäöüÄÖÜß\s.,:;?!€$%'"„""–\-()]/g) || []).length
  if (letterChars / s.length < 0.75) return true
  // Keine reinen Tailwind-Klassen
  if (/^(sm|md|lg|xl|2xl):/i.test(s) || /^(bg|text|border|rounded|flex|grid|p[xyltrbm]?|m[xyltrbm]?|w|h|gap|space)-/.test(s)) return true
  // Keine reinen class-Listen
  const tailwindLike = s.split(/\s+/).filter(w => /^[a-z]+([-:/][a-z0-9.[\]]+)+$/.test(w)).length
  if (tailwindLike > 2 && tailwindLike >= s.split(/\s+/).length * 0.6) return true
  return false
}

async function walk(dir, acc = []) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return acc
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, acc)
    } else if (EXTS.has(path.extname(entry.name))) {
      acc.push(full)
    }
  }
  return acc
}

// Decode HTML entities to match browser DOM textContent
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

// Extrahiert String-Literale aus TSX/TS die als JSX-Text oder Props
// verwendet werden. Strenger Ansatz: nur echte User-facing Strings.
function extractFromTsx(code) {
  const strings = new Set()

  // Zuerst: Import-Statements, Comments, Type-Definitionen entfernen
  let cleaned = code
  cleaned = cleaned.replace(/\/\*[\s\S]*?\*\//g, '') // Block comments
  cleaned = cleaned.replace(/\/\/.*$/gm, '') // Line comments
  cleaned = cleaned.replace(/^import .*$/gm, '') // imports
  cleaned = cleaned.replace(/^export .*$/gm, '') // single-line exports
  cleaned = cleaned.replace(/\btype\s+\w+\s*=.*$/gm, '') // type aliases

  // 1) JSX-Text zwischen >< Tags (multiline-fähig)
  //    Matcht alles zwischen > und < das kein JSX-Attribut-Syntax enthält
  const jsxTextRe = />([^<>={}]+)</g
  let m
  while ((m = jsxTextRe.exec(cleaned)) !== null) {
    const raw = m[1]
    // Muss natürlichen Text enthalten
    if (!/[a-zA-ZäöüÄÖÜß]{2,}/.test(raw)) continue
    // Keine JSX-Attribute-Fragmente
    if (/["'=]/.test(raw)) continue
    const s = decodeEntities(raw.trim().replace(/\s+/g, ' '))
    if (!shouldSkip(s)) strings.add(s)
  }

  // 2) Props mit User-facing Keys
  const propRe = /\b(label|title|placeholder|alt|aria-label|description|subtitle|heading|headline|caption)\s*=\s*["']([^"'<>\n]+)["']/g
  while ((m = propRe.exec(cleaned)) !== null) {
    const s = decodeEntities(m[2].trim().replace(/\s+/g, ' '))
    if (!shouldSkip(s)) strings.add(s)
  }

  // 3) Plain Strings als JSX children via expression: {'Text'} oder {"Text"}
  const exprStringRe = /\{\s*["']([^"'{}<>\n]{5,})["']\s*\}/g
  while ((m = exprStringRe.exec(cleaned)) !== null) {
    const s = decodeEntities(m[1].trim().replace(/\s+/g, ' '))
    if (/[a-zA-ZäöüÄÖÜß]{3,}\s+[a-zA-ZäöüÄÖÜß]{2,}/.test(s)) { // mind. 2 Wörter
      if (!shouldSkip(s)) strings.add(s)
    }
  }

  // 4) Object-Literals mit spezifischen Keys: { label: 'Text', title: 'Text' }
  //    Nur sehr restriktiv – muss in einer Zeile sein und Text klar erkennbar
  const objRe = /\b(label|title|headline|description|subtitle|question|answer|frage|antwort|heading|caption|cta|ctaText|placeholder|buttonText|buttonLabel|text|name|sub)\s*:\s*["']([^"'\n]{5,})["']/g
  while ((m = objRe.exec(cleaned)) !== null) {
    const s = decodeEntities(m[2].trim().replace(/\s+/g, ' '))
    // Mind. 2 Wörter ODER enthält Umlaute (dann vermutlich Deutsch)
    const hasTwoWords = /[a-zA-ZäöüÄÖÜß]{2,}\s+[a-zA-ZäöüÄÖÜß]{2,}/.test(s)
    const hasUmlaut = /[äöüÄÖÜß]/.test(s)
    if (!hasTwoWords && !hasUmlaut) continue
    if (!shouldSkip(s)) strings.add(s)
  }

  // 5) Array-Elemente im String-Array-Stil: ['Item', 'Item', 'Item']
  //    Wenn sie in einem Block mit Text stehen (Liste von Labels etc.)
  //    Nur matchen wenn die Strings ein Arrays von Textsätzen sind
  //    Zu riskant – lieber weglassen

  return strings
}

// Markdown: ganzes File ohne Frontmatter + code fences
function extractFromMarkdown(code) {
  const strings = new Set()

  // Frontmatter entfernen
  let body = code.replace(/^---\n[\s\S]*?\n---\n/, '')

  // Code-Blocks entfernen
  body = body.replace(/```[\s\S]*?```/g, '')
  body = body.replace(/`[^`]*`/g, '')

  // Frontmatter title/description extrahieren
  const frontRe = /^(title|description|imageAlt|excerpt|category):\s*["']?(.+?)["']?\s*$/gm
  let m
  while ((m = frontRe.exec(code)) !== null) {
    const s = m[2].trim()
    if (!shouldSkip(s)) strings.add(s)
  }

  // Paragraphen in prose
  const lines = body.split('\n')
  for (let line of lines) {
    line = line.trim()
    if (!line) continue
    // Markdown-Syntax entfernen
    line = line.replace(/^#+\s+/, '') // Headers
    line = line.replace(/^[-*+]\s+/, '') // Listen
    line = line.replace(/^\d+\.\s+/, '') // Nummerierte Listen
    line = line.replace(/^>\s+/, '') // Blockquotes
    line = line.replace(/!\[.*?\]\(.*?\)/g, '') // Bilder
    line = line.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Links zu Text
    line = line.replace(/\*\*([^*]+)\*\*/g, '$1') // Bold
    line = line.replace(/\*([^*]+)\*/g, '$1') // Italic
    line = line.trim()
    if (line.length < 3) continue
    if (shouldSkip(line)) continue
    // Lange Paragraphen in Sätze splitten
    if (line.length > 200) {
      const sentences = line.match(/[^.!?]+[.!?]+/g) || [line]
      for (const s of sentences) {
        const t = s.trim()
        if (t && !shouldSkip(t)) strings.add(t)
      }
    } else {
      strings.add(line)
    }
  }
  return strings
}

async function main() {
  const all = new Set()
  let filesProcessed = 0
  let tsxCount = 0
  let mdCount = 0

  for (const dir of TARGET_DIRS) {
    const files = await walk(path.join(ROOT, dir))
    for (const file of files) {
      filesProcessed++
      try {
        const content = await fs.readFile(file, 'utf-8')
        const ext = path.extname(file)
        let strings
        if (ext === '.md' || ext === '.mdx') {
          strings = extractFromMarkdown(content)
          mdCount++
        } else {
          strings = extractFromTsx(content)
          tsxCount++
        }
        strings.forEach((s) => all.add(s))
      } catch (e) {
        console.warn(`Fehler beim Lesen von ${file}: ${e.message}`)
      }
    }
  }

  // Sortieren für reproduzierbaren Output
  const sorted = [...all].sort((a, b) => a.localeCompare(b, 'de'))

  // Als { "key": "key" } schreiben (Identity-Map als Seed)
  const output = {}
  sorted.forEach((s) => {
    output[s] = s
  })

  const outPath = path.join(ROOT, 'public', 'translations', 'de.json')
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(output, null, 2), 'utf-8')

  console.log(`✓ ${sorted.length} DE-Strings extrahiert`)
  console.log(`  aus ${filesProcessed} Files (${tsxCount} TSX/TS, ${mdCount} MD)`)
  console.log(`  geschrieben nach public/translations/de.json`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
