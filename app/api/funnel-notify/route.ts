import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Q_LABELS: Record<string, Record<string, string>> = {
  q1: {
    eigen:       'Ja – eigene Domain',
    verzeichnis: 'Ja – nur Verzeichnis (docfinder etc.)',
    keine:       'Nein, noch keine',
  },
  q2: {
    nicht_genannt: 'Wird wahrscheinlich nicht genannt',
    weiss_nicht:   'Weiß es ehrlich gesagt nicht',
    sichtbar:      'Bin bereits sichtbar',
  },
  q3: {
    erklaerung: 'Patienten immer wieder erklären',
    auslastung: 'Neue Patienten / Auslastung steigern',
    sprache:    'Sprachbarrieren mit internationalen Patienten',
    anderes:    'Etwas anderes',
  },
  q4: {
    sofort:  '🟢 Innerhalb der nächsten 14 Tage',
    bald:    '🟡 In 2–4 Wochen',
    spaeter: '🔴 Erst in über einem Monat',
  },
}

export async function POST(request: NextRequest) {
  const body = await request.json() as Record<string, string>
  const { name, phone, fachrichtung, ort, q1, q2, q3, q4, method } = body

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: 'Name und Telefon fehlen' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST  ?? 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT  ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const row = (label: string, value: string) => `
    <tr style="border-bottom:1px solid #e5e7eb;">
      <td style="padding:9px 0;color:#6b7280;font-weight:600;width:160px;font-size:13px;">${label}</td>
      <td style="padding:9px 0;color:#111827;font-size:13px;font-weight:700;">${value}</td>
    </tr>`

  const methodLabel = method === 'jenny' ? '📞 Jenny-Anruf angefordert' : '📅 Termin mit Kevin gebucht'

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:linear-gradient(135deg,#112080,#1e3ab8);padding:22px 28px;">
        <h1 style="margin:0;color:white;font-size:19px;font-weight:700;">🎯 Neue Funnel-Bewerbung · mypraxis.at</h1>
        <p style="margin:5px 0 0;color:rgba(255,255,255,0.75);font-size:12px;">${new Date().toLocaleString('de-AT', { timeZone: 'Europe/Vienna' })} · ${esc(methodLabel)}</p>
      </div>
      <div style="padding:22px 28px;">
        <h2 style="margin:0 0 14px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:0.05em;">Kontaktdaten</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row('Name', esc(name.trim()))}
          ${row('Telefon', `<a href="tel:${esc(phone.trim())}" style="color:#1e3ab8;text-decoration:none;">${esc(phone.trim())}</a>`)}
          ${fachrichtung?.trim() ? row('Fachrichtung', esc(fachrichtung.trim())) : ''}
          ${ort?.trim()         ? row('Stadt / Ort',  esc(ort.trim()))         : ''}
        </table>

        <h2 style="margin:22px 0 14px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:0.05em;">Antworten im Qualifizierungs-Funnel</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row('Website vorhanden?',    esc(Q_LABELS.q1[q1] ?? q1 ?? '–'))}
          ${row('KI-Sichtbarkeit?',      esc(Q_LABELS.q2[q2] ?? q2 ?? '–'))}
          ${row('Größtes Problem?',      esc(Q_LABELS.q3[q3] ?? q3 ?? '–'))}
          ${row('Startzeitpunkt?',       Q_LABELS.q4[q4] ?? q4 ?? '–')}
        </table>

        <div style="margin-top:20px;padding:14px 16px;background:${method === 'jenny' ? '#fff7ed' : '#eff6ff'};border-radius:8px;font-size:13px;color:#374151;line-height:1.6;border-left:3px solid ${method === 'jenny' ? '#ff8a00' : '#112080'};">
          <strong>Nächster Schritt:</strong><br>
          ${method === 'jenny'
            ? `Jenny wurde angewiesen, <strong>${esc(name.trim())}</strong> unter <strong>${esc(phone.trim())}</strong> anzurufen.`
            : `<strong>${esc(name.trim())}</strong> hat den Cal.com-Termin-Link geklickt – Buchung vermutlich in Kürze.`
          }
        </div>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from:    `"mypraxis.at Funnel" <${process.env.SMTP_USER}>`,
      to:      'office@mypraxis.at',
      subject: `🎯 Neue Bewerbung: ${name.trim()}${fachrichtung?.trim() ? ` – ${fachrichtung.trim()}` : ''} (${method === 'jenny' ? 'Jenny' : 'Termin'})`,
      html,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[funnel-notify] sendMail error:', error)
    // Don't block the user flow — return ok even if mail fails
    return NextResponse.json({ success: true, mailError: true })
  }
}
