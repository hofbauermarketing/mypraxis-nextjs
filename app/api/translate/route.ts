import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { texts, targetLang } = await req.json()

  if (!texts || !targetLang) {
    return NextResponse.json({ error: 'Missing params' }, { status: 400 })
  }

  const apiKey = process.env.DEEPL_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'No API key' }, { status: 500 })
  }

  const body = new URLSearchParams()
  body.append('target_lang', targetLang)
  body.append('source_lang', 'DE')
  texts.forEach((t: string) => body.append('text', t))

  const res = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })

  if (!res.ok) {
    const err = await res.text()
    return NextResponse.json({ error: err }, { status: res.status })
  }

  const data = await res.json()
  const translations = data.translations.map((t: { text: string }) => t.text)
  return NextResponse.json({ translations })
}
