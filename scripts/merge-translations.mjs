#!/usr/bin/env node
/**
 * merge-translations.mjs
 *
 * Nimmt die Chunks pro Sprache aus public/translations/_chunks/
 * und merged sie zu public/translations/{lang}.json
 *
 * Erwartet: _chunks/{lang}_chunk1.json ... {lang}_chunk5.json
 */

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const LANGUAGES = ['en', 'ru', 'tr', 'ar', 'ro', 'pl', 'hu', 'uk', 'cs']
const NUM_CHUNKS = 14

async function main() {
  const chunkDir = path.join(ROOT, 'public', 'translations', '_chunks')
  const outDir = path.join(ROOT, 'public', 'translations')

  // Master-Dict aus de.json (für Verify + Keys-Reihenfolge)
  const dePath = path.join(outDir, 'de.json')
  const deDict = JSON.parse(await fs.readFile(dePath, 'utf-8'))
  const expectedKeys = Object.keys(deDict)

  for (const lang of LANGUAGES) {
    const merged = {}
    let foundChunks = 0
    let totalKeys = 0
    for (let i = 1; i <= NUM_CHUNKS; i++) {
      const chunkPath = path.join(chunkDir, `${lang}_chunk${i}.json`)
      try {
        const raw = await fs.readFile(chunkPath, 'utf-8')
        const chunk = JSON.parse(raw)
        Object.assign(merged, chunk)
        foundChunks++
        totalKeys += Object.keys(chunk).length
      } catch (e) {
        console.warn(`  ⚠ ${lang}_chunk${i}.json fehlt oder ungültig`)
      }
    }

    // Nur Keys behalten die aktuell in de.json existieren (Altlasten aus alten Chunks entfernen)
    const cleaned = {}
    for (const k of expectedKeys) {
      if (k in merged) cleaned[k] = merged[k]
    }
    const translatedCount = Object.keys(cleaned).length

    // Fallback: Für fehlende Keys verwende den Deutsch-Original (Identity)
    const missingKeys = expectedKeys.filter((k) => !(k in cleaned))
    missingKeys.forEach((k) => {
      cleaned[k] = deDict[k]
    })

    const outPath = path.join(outDir, `${lang}.json`)
    await fs.writeFile(outPath, JSON.stringify(cleaned, null, 2), 'utf-8')

    const pctDone = Math.round((translatedCount / expectedKeys.length) * 100)
    const dropped = totalKeys - translatedCount
    console.log(
      `✓ ${lang.toUpperCase()}: ${foundChunks}/${NUM_CHUNKS} Chunks, ${translatedCount}/${expectedKeys.length} übersetzt (${pctDone}%)${missingKeys.length > 0 ? `, ${missingKeys.length} Fallbacks` : ''}${dropped > 0 ? `, ${dropped} Altlasten entfernt` : ''}`
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
