'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScannerEmbed from '@/components/ScannerEmbed'
import WcagScanner from '@/components/WcagScanner'

type Tab = 'ki' | 'wcag'

export default function GratisCheckPage() {
  const [activeTab, setActiveTab] = useState<Tab>('ki')

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc]">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            100 % kostenlos · kein Konto nötig
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Gratis Website-Analyse<br />
            <span className="text-[#ff8a00]">für Ihre Ordination</span>
          </h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed">
            Zwei kostenlose Checks: Wie sichtbar sind Sie für KI-Systeme wie ChatGPT?
            Und ist Ihre Website wirklich barrierefrei?
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 mb-8">
          <button
            onClick={() => setActiveTab('ki')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'ki'
                ? 'bg-[#ff8a00] text-white shadow-lg'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span>🤖</span>
            <span>KI-Sichtbarkeit</span>
          </button>
          <button
            onClick={() => setActiveTab('wcag')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'wcag'
                ? 'bg-[#ff8a00] text-white shadow-lg'
                : 'text-white/60 hover:text-white'
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
              <h2 className="text-xl font-bold text-white mb-2">KI-Sichtbarkeits-Check</h2>
              <p className="text-blue-200 text-sm max-w-md mx-auto">
                Wird Ihre Ordination von ChatGPT, Perplexity & Co. gefunden?
                Unser Scanner prüft Ihre Online-Präsenz in 2 Minuten.
              </p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <ScannerEmbed />
            </div>
            <p className="text-center text-slate-400 text-xs mt-4">
              Der Bericht wird direkt an Sie gesendet – kein Anruf nötig, keine Verpflichtung.
            </p>
          </div>
        )}

        {/* WCAG Tab */}
        {activeTab === 'wcag' && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-2">Barrierefreiheits-Check</h2>
              <p className="text-blue-200 text-sm max-w-md mx-auto">
                Seit 28.06.2025 gilt das Barrierefreiheitsgesetz (BaFG).
                Prüfen Sie jetzt, ob Ihre Website WCAG 2.1 entspricht.
              </p>
            </div>
            <WcagScanner embedded />
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-2">Nächster Schritt</p>
          <h3 className="text-lg font-bold text-white mb-2">Ergebnisse besprechen?</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            In einem kostenlosen 15-Minuten-Gespräch gehen wir gemeinsam durch Ihre Analyse
            und zeigen konkret, was sich ändern muss.
          </p>
          <a
            href="/#kontakt"
            className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:scale-[1.02] animate-glow-orange"
          >
            Gratis Beratung anfragen →
          </a>
          <p className="text-blue-400 text-xs mt-3">Kostenlos & unverbindlich · Antwort innerhalb eines Werktags</p>
        </div>

      </div>
    </main>
  )
}
