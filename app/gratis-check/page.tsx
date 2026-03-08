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
      {/* Subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-[#1e3ab8] via-[#ff8a00] to-[#1e3ab8]" />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#ff8a00]/10 border border-[#ff8a00]/25 text-[#ff8a00] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            100 % kostenlos · kein Konto nötig
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Gratis Website-Analyse<br />
            <span className="text-[#1e3ab8]">für Ihre Ordination</span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Zwei kostenlose Checks: Wie sichtbar sind Sie für KI-Systeme wie ChatGPT?
            Und ist Ihre Website wirklich barrierefrei?
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 bg-white border border-gray-200 rounded-2xl p-1.5 mb-8 shadow-sm">
          <button
            onClick={() => setActiveTab('ki')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'ki'
                ? 'bg-[#ff8a00] text-white shadow-md'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            <span>🤖</span>
            <span>KI-Sichtbarkeit</span>
          </button>
          <button
            onClick={() => setActiveTab('wcag')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'wcag'
                ? 'bg-[#ff8a00] text-white shadow-md'
                : 'text-gray-400 hover:text-gray-700'
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
            {/* WCAG Scanner needs dark background for its glass cards */}
            <div className="bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] rounded-2xl p-6">
              <WcagScanner embedded />
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-2">Nächster Schritt</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Ergebnisse besprechen?</h3>
          <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
            In einem kostenlosen 15-Minuten-Gespräch gehen wir gemeinsam durch Ihre Analyse
            und zeigen konkret, was sich ändern muss.
          </p>
          <a
            href="/#kontakt"
            className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:scale-[1.02]"
          >
            Gratis Beratung anfragen →
          </a>
          <p className="text-gray-400 text-xs mt-3">Kostenlos & unverbindlich · Antwort innerhalb eines Werktags</p>
        </div>

      </div>
    </main>
  )
}
