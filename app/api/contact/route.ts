import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Required Vercel environment variables:
//   SMTP_HOST   – e.g. smtp.strato.de or smtp.gmail.com
//   SMTP_PORT   – e.g. 465 (SSL) or 587 (STARTTLS)
//   SMTP_SECURE – "true" for port 465, "false" for port 587
//   SMTP_USER   – your sending address, e.g. office@mypraxis.at
//   SMTP_PASS   – the email account password / app password

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, fachrichtung, message } = body as Record<string, string>

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const safePhone = phone?.trim() ? escapeHtml(phone.trim()) : null
  const safeFach = fachrichtung?.trim() ? escapeHtml(fachrichtung.trim()) : null
  const safeMsg = message?.trim()
    ? escapeHtml(message.trim()).replace(/\n/g, '<br>')
    : null

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:linear-gradient(135deg,#112080,#1e3ab8);padding:24px 28px;">
        <h1 style="margin:0;color:white;font-size:20px;font-weight:700;">Neue Anfrage über mypraxis.at</h1>
        <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">Kontaktformular-Eingang</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:10px 0;color:#6b7280;width:130px;font-weight:600;">Name</td>
            <td style="padding:10px 0;color:#111827;font-weight:700;">${escapeHtml(name.trim())}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:10px 0;color:#6b7280;font-weight:600;">E-Mail</td>
            <td style="padding:10px 0;">
              <a href="mailto:${escapeHtml(email.trim())}" style="color:#1e3ab8;text-decoration:none;">${escapeHtml(email.trim())}</a>
            </td>
          </tr>
          ${safePhone ? `<tr style="border-bottom:1px solid #e5e7eb;"><td style="padding:10px 0;color:#6b7280;font-weight:600;">Telefon</td><td style="padding:10px 0;"><a href="tel:${safePhone}" style="color:#1e3ab8;text-decoration:none;">${safePhone}</a></td></tr>` : ''}
          ${safeFach ? `<tr style="border-bottom:1px solid #e5e7eb;"><td style="padding:10px 0;color:#6b7280;font-weight:600;">Fachrichtung</td><td style="padding:10px 0;color:#111827;">${safeFach}</td></tr>` : ''}
          ${safeMsg ? `<tr><td style="padding:10px 0;color:#6b7280;font-weight:600;vertical-align:top;">Nachricht</td><td style="padding:10px 0;color:#374151;line-height:1.6;">${safeMsg}</td></tr>` : ''}
        </table>
        <div style="margin-top:20px;padding:14px;background:#eff6ff;border-radius:8px;font-size:12px;color:#6b7280;line-height:1.5;">
          Eingegangen via mypraxis.at Kontaktformular<br>
          Direkt antworten:
          <a href="mailto:${escapeHtml(email.trim())}" style="color:#1e3ab8;">${escapeHtml(email.trim())}</a>
        </div>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"mypraxis.at Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'office@mypraxis.at',
      replyTo: email.trim(),
      subject: `Anfrage: ${name.trim()}${safeFach ? ` – ${safeFach}` : ''} via mypraxis.at`,
      html,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact/route] sendMail error:', error)
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
  }
}
