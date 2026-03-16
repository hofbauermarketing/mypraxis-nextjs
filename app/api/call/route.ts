import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { phone, name, fachrichtung, ort } = await req.json()

    if (!phone || !name) {
      return NextResponse.json({ error: 'Name und Telefonnummer erforderlich' }, { status: 400 })
    }

    const FONIO_API_KEY = process.env.FONIO_API_KEY
    const FONIO_FROM_NUMBER = process.env.FONIO_FROM_NUMBER
    const FONIO_AGENT_ID = process.env.FONIO_AGENT_ID

    if (!FONIO_API_KEY || !FONIO_FROM_NUMBER || !FONIO_AGENT_ID) {
      return NextResponse.json({ error: 'Konfigurationsfehler' }, { status: 500 })
    }

    const res = await fetch('https://app.fonio.ai/api/public/v1/outbound_call', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${FONIO_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromNumber: FONIO_FROM_NUMBER,
        toNumber: phone,
        agentId: FONIO_AGENT_ID,
        context: {
          name,
          fachrichtung: fachrichtung || '',
          ort: ort || '',
        },
      }),
    })

    if (res.ok) {
      return NextResponse.json({ success: true })
    }

    const err = await res.text()
    console.error('Fonio error:', err)
    return NextResponse.json({ error: 'Anruf konnte nicht ausgelöst werden' }, { status: 500 })
  } catch (e) {
    console.error('Call route error:', e)
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 })
  }
}
