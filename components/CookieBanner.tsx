'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'mypraxis_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function save(c: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, timestamp: new Date().toISOString() }))
    setVisible(false)
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, marketing: true })
  }

  function declineAll() {
    save({ necessary: true, analytics: false, marketing: false })
  }

  function saveSelection() {
    save(consent)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-[998] backdrop-blur-sm" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-3 sm:p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="bg-[#1e3ab8] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🍪</span>
              <div>
                <p className="font-bold text-white text-sm">Datenschutz & Cookies</p>
                <p className="text-blue-200 text-xs">Diese Website verwendet Cookies</p>
              </div>
            </div>
            <span className="text-blue-300 text-xs">DSGVO-konform</span>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Website-Erlebnis zu bieten und unsere Inhalte kontinuierlich zu verbessern. Einige Cookies sind technisch notwendig, andere helfen uns, die Website zu analysieren oder Ihnen relevante Inhalte anzuzeigen.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Sie können Ihre Einwilligung jederzeit widerrufen oder anpassen. Mehr Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-[#1e3ab8] underline hover:no-underline">Datenschutzerklärung</Link>.
            </p>

            {/* Details toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs font-semibold text-[#1e3ab8] hover:underline mb-4 flex items-center gap-1"
            >
              <span>{showDetails ? '▾' : '▸'}</span>
              {showDetails ? 'Details ausblenden' : 'Cookie-Einstellungen anpassen'}
            </button>

            {/* Detail categories */}
            {showDetails && (
              <div className="space-y-3 mb-5 border border-gray-100 rounded-xl p-4 bg-gray-50">

                {/* Necessary */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">Notwendige Cookies</span>
                      <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">Immer aktiv</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten. Beispiele: Session-Cookies, Cookie-Einwilligung.
                    </p>
                  </div>
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-5 bg-green-500 rounded-full cursor-not-allowed opacity-70" />
                  </div>
                </div>

                <div className="border-t border-gray-200" />

                {/* Analytics */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Analyse-Cookies (Statistik)</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Helfen uns zu verstehen, wie Besucher mit der Website interagieren – anonymisiert. Wir verwenden diese Daten ausschließlich zur Verbesserung unserer Inhalte. Anbieter: Google Analytics (mit IP-Anonymisierung) oder Plausible Analytics (datenschutzfreundlich, keine Weitergabe an Dritte).
                    </p>
                  </div>
                  <button
                    onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                    className={`shrink-0 mt-1 w-10 h-5 rounded-full transition-colors ${consent.analytics ? 'bg-[#1e3ab8]' : 'bg-gray-300'}`}
                    aria-label="Analyse-Cookies umschalten"
                  >
                    <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform mx-0.5 ${consent.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="border-t border-gray-200" />

                {/* Marketing */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">Marketing- & Tracking-Cookies</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Werden verwendet, um Besuchern auf anderen Websites personalisierte Werbung anzuzeigen. Anbieter: Google Ads, Meta Pixel. Die über diese Cookies gesammelten Daten werden mit Dritten geteilt. Für medizinische Websites empfehlen wir, diese zu deaktivieren.
                    </p>
                  </div>
                  <button
                    onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                    className={`shrink-0 mt-1 w-10 h-5 rounded-full transition-colors ${consent.marketing ? 'bg-[#1e3ab8]' : 'bg-gray-300'}`}
                    aria-label="Marketing-Cookies umschalten"
                  >
                    <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform mx-0.5 ${consent.marketing ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-3">
                  <p className="text-gray-400 text-[10px] leading-relaxed">
                    Ihre Einwilligung gilt für diese Domain. Sie können Ihre Einstellungen jederzeit über den Link „Cookie-Einstellungen" im Footer ändern oder über die Einstellungen Ihres Browsers alle Cookies löschen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 bg-[#1e3ab8] hover:bg-[#1a33a8] text-white font-bold py-3 px-5 rounded-xl text-sm transition-colors"
              >
                Alle akzeptieren
              </button>
              {showDetails ? (
                <button
                  onClick={saveSelection}
                  className="flex-1 bg-blue-50 hover:bg-blue-100 text-[#1e3ab8] font-semibold py-3 px-5 rounded-xl text-sm transition-colors"
                >
                  Auswahl speichern
                </button>
              ) : (
                <button
                  onClick={declineAll}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-5 rounded-xl text-sm transition-colors"
                >
                  Nur notwendige
                </button>
              )}
            </div>

            <p className="text-center text-gray-400 text-[10px] mt-3">
              © mypraxis.at ·{' '}
              <Link href="/impressum" className="hover:underline">Impressum</Link>
              {' · '}
              <Link href="/datenschutz" className="hover:underline">Datenschutzerklärung</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
