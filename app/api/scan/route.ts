import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { url } = await req.json()

  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'URL fehlt' }, { status: 400 })
  }

  const apiKey = process.env.WAVE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API-Key fehlt' }, { status: 500 })
  }

  // Normalize URL
  let target = url.trim()
  if (!target.startsWith('http')) target = 'https://' + target

  try {
    const waveUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${encodeURIComponent(target)}&reporttype=1`
    const res = await fetch(waveUrl, { next: { revalidate: 0 } })
    const data = await res.json()

    if (data.status?.error) {
      return NextResponse.json({ error: data.status.description ?? 'Seite konnte nicht geladen werden.' }, { status: 422 })
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Scan fehlgeschlagen. Bitte prüfen Sie die URL.' }, { status: 500 })
  }
}
