import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

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
  // Rate-Limit: max 5 Funnel-Submits pro IP pro 10 Minuten
  const ip = getClientIp(request)
  const limited = rateLimit(ip, 'funnel', 5, 600)
  if (limited) {
    return NextResponse.json({ error: limited }, { status: 429 })
  }

  const body = await request.json() as Record<string, string>
  const { name, phone, fachrichtung, ort, email, q1, q2, q3, q4 } = body

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

  // ── Internal notification email (to office@mypraxis.at) ──────────────────
  const internalHtml = `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:linear-gradient(135deg,#112080,#1e3ab8);padding:22px 28px;">
        <h1 style="margin:0;color:white;font-size:19px;font-weight:700;">🎯 Neue Funnel-Bewerbung · mypraxis.at</h1>
        <p style="margin:5px 0 0;color:rgba(255,255,255,0.75);font-size:12px;">${new Date().toLocaleString('de-AT', { timeZone: 'Europe/Vienna' })} · 📅 Termin mit Kevin</p>
      </div>
      <div style="padding:22px 28px;">
        <h2 style="margin:0 0 14px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:0.05em;">Kontaktdaten</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row('Name', esc(name.trim()))}
          ${row('Telefon', `<a href="tel:${esc(phone.trim())}" style="color:#1e3ab8;text-decoration:none;">${esc(phone.trim())}</a>`)}
          ${email?.trim() ? row('E-Mail', `<a href="mailto:${esc(email.trim())}" style="color:#1e3ab8;text-decoration:none;">${esc(email.trim())}</a>`) : ''}
          ${fachrichtung?.trim() ? row('Fachrichtung', esc(fachrichtung.trim())) : ''}
          ${ort?.trim()          ? row('Stadt / Ort',  esc(ort.trim()))          : ''}
        </table>

        <h2 style="margin:22px 0 14px;font-size:14px;color:#374151;text-transform:uppercase;letter-spacing:0.05em;">Antworten im Qualifizierungs-Funnel</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${row('Website vorhanden?', esc(Q_LABELS.q1[q1] ?? q1 ?? '–'))}
          ${row('KI-Sichtbarkeit?',   esc(Q_LABELS.q2[q2] ?? q2 ?? '–'))}
          ${row('Größtes Problem?',   esc(Q_LABELS.q3[q3] ?? q3 ?? '–'))}
          ${row('Startzeitpunkt?',    Q_LABELS.q4[q4] ?? q4 ?? '–')}
        </table>

        <div style="margin-top:20px;padding:14px 16px;background:#eff6ff;border-radius:8px;font-size:13px;color:#374151;line-height:1.6;border-left:3px solid #112080;">
          <strong>Nächster Schritt:</strong><br>
          <strong>${esc(name.trim())}</strong> hat den Cal.com-Termin-Link geklickt – Buchung vermutlich in Kürze.
        </div>
      </div>
    </div>
  `

  // ── Confirmation email (to the applicant, if email provided) ─────────────
  const confirmHtml = email?.trim() ? `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:linear-gradient(135deg,#112080,#1e3ab8);padding:28px 32px;text-align:center;">
        <h1 style="margin:0;color:white;font-size:22px;font-weight:700;">mypraxis.at</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">Ihre Nachricht ist bei uns eingegangen</p>
      </div>
      <div style="padding:28px 32px;">
        <p style="font-size:16px;color:#111827;font-weight:600;margin:0 0 8px;">Liebe/r ${esc(name.trim())},</p>
        <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 20px;">
          danke für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen — telefonisch unter <strong>${esc(phone.trim())}</strong>.
        </p>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#166534;">✅ Ihre Angaben auf einen Blick</p>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            ${row('Name', esc(name.trim()))}
            ${row('Telefon', esc(phone.trim()))}
            ${fachrichtung?.trim() ? row('Fachrichtung', esc(fachrichtung.trim())) : ''}
            ${ort?.trim() ? row('Stadt', esc(ort.trim())) : ''}
          </table>
        </div>

        <div style="text-align:center;margin-bottom:24px;">
          <a href="https://cal.com/kevin-hofbauer-marketing/mypraxis.at" style="display:inline-block;background:#ff8a00;color:white;font-weight:700;font-size:14px;padding:14px 28px;border-radius:12px;text-decoration:none;">
            📅 Termin mit Kevin buchen
          </a>
          <p style="font-size:11px;color:#9ca3af;margin-top:8px;">Falls Sie noch keinen Termin gebucht haben</p>
        </div>

        <p style="font-size:12px;color:#6b7280;line-height:1.6;margin:0;">
          Mit freundlichen Grüßen,<br>
          <strong>Kevin Hofbauer</strong><br>
          mypraxis.at · <a href="https://mypraxis.at" style="color:#112080;">mypraxis.at</a>
        </p>
      </div>
      <div style="background:#f9fafb;padding:14px 32px;border-top:1px solid #e5e7eb;text-align:center;">
        <p style="font-size:11px;color:#9ca3af;margin:0;">
          Diese E-Mail wurde automatisch versandt. ·
          <a href="https://mypraxis.at/datenschutz" style="color:#9ca3af;">Datenschutz</a>
        </p>
      </div>
    </div>
  ` : null

  try {
    // Send internal notification
    await transporter.sendMail({
      from:    `"mypraxis.at Funnel" <${process.env.SMTP_USER}>`,
      to:      'office@mypraxis.at',
      subject: `🎯 Neue Bewerbung: ${name.trim()}${fachrichtung?.trim() ? ` – ${fachrichtung.trim()}` : ''}`,
      html:    internalHtml,
    })

    // Send confirmation to applicant if email provided
    if (confirmHtml && email?.trim()) {
      await transporter.sendMail({
        from:    `"mypraxis.at" <${process.env.SMTP_USER}>`,
        to:      email.trim(),
        subject: `Ihre Bewerbung bei mypraxis.at – Bestätigung`,
        html:    confirmHtml,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[funnel-notify] sendMail error:', error)
    // Don't block the user flow — return ok even if mail fails
    return NextResponse.json({ success: true, mailError: true })
  }
}
