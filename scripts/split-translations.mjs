#!/usr/bin/env node
/**
 * split-translations.mjs
 *
 * Nimmt public/translations/de.json (Identity-Map)
 * und splittet die Keys in 5 Chunks.
 *
 * Output: public/translations/_chunks/de_chunk1.json ... de_chunk5.json
 * Pro Chunk ca. 290-300 Keys.
 */

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const NUM_CHUNKS = 5

async function main() {
  const inputPath = path.join(ROOT, 'public', 'translations', 'de.json')
  const raw = await fs.readFile(inputPath, 'utf-8')
  const dict = JSON.parse(raw)
  const keys = Object.keys(dict).sort((a, b) => a.localeCompare(b, 'de'))

  const chunkDir = path.join(ROOT, 'public', 'translations', '_chunks')
  await fs.mkdir(chunkDir, { recursive: true })

  const chunkSize = Math.ceil(keys.length / NUM_CHUNKS)
  console.log(`Total keys: ${keys.length}`)
  console.log(`Chunk size: ${chunkSize}`)

  for (let i = 0; i < NUM_CHUNKS; i++) {
    const start = i * chunkSize
    const end = Math.min(start + chunkSize, keys.length)
    const chunkKeys = keys.slice(start, end)
    const chunkObj = {}
    chunkKeys.forEach((k) => {
      chunkObj[k] = dict[k]
    })
    const outPath = path.join(chunkDir, `de_chunk${i + 1}.json`)
    await fs.writeFile(outPath, JSON.stringify(chunkObj, null, 2), 'utf-8')
    console.log(`✓ Chunk ${i + 1}: ${chunkKeys.length} keys → ${path.relative(ROOT, outPath)}`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
