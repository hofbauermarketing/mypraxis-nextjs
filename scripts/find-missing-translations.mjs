#!/usr/bin/env node
/**
 * Identifiziert pro Sprache welche Keys noch auf DE-Fallback stehen
 * und schreibt sie nach tmp/missing-{lang}.json
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const LANGS = ['en', 'ru', 'tr', 'ar', 'ro', 'pl', 'hu', 'uk', 'cs']

async function main() {
  const outDir = path.join(ROOT, 'tmp-translations')
  await fs.mkdir(outDir, { recursive: true })

  const de = JSON.parse(await fs.readFile(path.join(ROOT, 'public/translations/de.json'), 'utf-8'))
  const deKeys = Object.keys(de)

  console.log(`Master: ${deKeys.length} DE-Keys\n`)

  for (const lang of LANGS) {
    const langPath = path.join(ROOT, 'public/translations', `${lang}.json`)
    let langDict = {}
    try {
      langDict = JSON.parse(await fs.readFile(langPath, 'utf-8'))
    } catch {
      console.log(`⚠ ${lang}.json nicht gefunden`)
    }

    const missing = {}
    for (const k of deKeys) {
      const v = langDict[k]
      if (!v || v === k || v === de[k]) {
        missing[k] = k
      }
    }

    const outFile = path.join(outDir, `missing-${lang}.json`)
    await fs.writeFile(outFile, JSON.stringify(missing, null, 2), 'utf-8')
    const missingCount = Object.keys(missing).length
    const pct = Math.round(((deKeys.length - missingCount) / deKeys.length) * 100)
    console.log(`${lang.toUpperCase()}: ${missingCount} fehlen (${pct}% übersetzt)`)
  }
  console.log(`\n→ Files in ${outDir}/`)
}

main().catch((e) => { console.error(e); process.exit(1) })
