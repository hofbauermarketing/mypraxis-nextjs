'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScannerEmbed from '@/components/ScannerEmbed'
import WcagScanner from '@/components/WcagScanner'

type Tab = 'ki' | 'wcag'

export default function GratisCheckPage() {
  const [activeTab, setActiveTab] = useState<Tab>('ki')

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Dark Hero */}
      <div className="relative overflow-hidden text-white pt-28 pb-16 px-6" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#112080] to-[#0a0f1e]" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-300/70 hover:text-white text-sm font-medium transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
          <span className="inline-block bg-[#ff8a00]/20 border border-[#ff8a00]/40 text-[#ffb347] text-xs font-semibold px-4 py-1.5 mb-5 uppercase tracking-wider block w-fit mx-auto">
            100 % kostenlos · kein Konto nötig
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Gratis Website-Analyse<br />
            <span className="text-[#ff8a00]">für Ihre Ordination</span>
          </h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed">
            Zwei kostenlose Checks: Wie sichtbar sind Sie für KI-Systeme wie ChatGPT?
            Und ist Ihre Website wirklich barrierefrei?
          </p>
        </div>
      </div>

      {/* Content area with structural background */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-3xl mx-auto px-6 pt-10 pb-20 relative z-10">

          {/* Tab Switcher – angular */}
          <div className="flex gap-1.5 bg-white border border-blue-100 p-1.5 mb-8 shadow-sm" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
            <button
              onClick={() => setActiveTab('ki')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all ${
                activeTab === 'ki'
                  ? 'bg-[#ff8a00] text-white shadow-md'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>🤖</span>
              <span>KI-Sichtbarkeit</span>
            </button>
            <button
              onClick={() => setActiveTab('wcag')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all ${
                activeTab === 'wcag'
                  ? 'bg-[#ff8a00] text-white shadow-md'
                  : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>♿</span>
              <span>Barrierefreiheit</span>
            </button>
          </div>

          {/* KI Tab */}
          {activeTab === 'ki' && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">KI-Sichtbarkeits-Check</h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Wird Ihre Ordination von ChatGPT, Perplexity & Co. gefunden?
                  Unser Scanner prüft Ihre Online-Präsenz in 2 Minuten.
                </p>
              </div>
              <div className="bg-white overflow-hidden shadow-lg border border-blue-100/60" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
                <ScannerEmbed />
              </div>
              <p className="text-center text-gray-400 text-xs mt-4">
                Der Bericht wird direkt an Sie gesendet – kein Anruf nötig, keine Verpflichtung.
              </p>
            </div>
          )}

          {/* WCAG Tab */}
          {activeTab === 'wcag' && (
            <div className="animate-fade-in">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Barrierefreiheits-Check</h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Seit 28.06.2025 gilt das Barrierefreiheitsgesetz (BaFG).
                  Prüfen Sie jetzt, ob Ihre Website WCAG 2.1 entspricht.
                </p>
              </div>
              <div className="relative overflow-hidden p-6" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #112080 50%, #0a0f1e 100%)', clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative z-10">
                  <WcagScanner embedded />
                </div>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 relative bg-white border border-blue-100/60 p-6 text-center shadow-sm overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10">
              <p className="text-[#1e3ab8]/60 text-xs uppercase tracking-[0.2em] font-semibold mb-2">Nächster Schritt</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ergebnisse besprechen?</h3>
              <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
                In einem kostenlosen 15-Minuten-Gespräch gehen wir gemeinsam durch Ihre Analyse
                und zeigen konkret, was sich ändern muss.
              </p>
              <a
                href="/#kontakt"
                className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3 text-sm transition-all hover:scale-[1.02]"
              >
                Gratis Beratung anfragen →
              </a>
              <p className="text-gray-400 text-xs mt-3">Kostenlos & unverbindlich · Antwort innerhalb eines Werktags</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
