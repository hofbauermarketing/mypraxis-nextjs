'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function DankePage() {
  useEffect(() => {
    // Google Ads Conversion – Danke-Seite als primärer Trigger
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-18019658217/rfAdCKPnwokcEOnTuJBD',
        value: 3950.0,
        currency: 'EUR',
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#112080] to-[#0a0f1e] flex items-center justify-center px-6">
      <div className="relative max-w-lg w-full text-center">

        {/* Checkmark */}
        <div
          className="w-20 h-20 bg-green-500/20 border border-green-400/40 flex items-center justify-center mx-auto mb-8"
          style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}
        >
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-[#ff8a00] text-sm font-bold uppercase tracking-widest mb-3">Anfrage erhalten</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Danke – wir melden uns<br />innerhalb eines Werktags.
        </h1>
        <p className="text-blue-200 text-base leading-relaxed mb-10">
          Kevin Hofbauer meldet sich persönlich bei Ihnen. Das vollständige KI-Check-Ergebnis
          besprechen wir im Ersttelefonat – und senden es Ihnen danach per Mail.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Kostenlos & unverbindlich', 'Persönlicher Rückruf', 'Auswertung per Mail'].map((b) => (
            <span
              key={b}
              className="text-blue-200/80 text-xs border border-white/15 bg-white/5 px-4 py-2"
              style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
            >
              ✓ {b}
            </span>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3.5 text-sm transition-all hover:scale-105"
          style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  )
}
