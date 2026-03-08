'use client'

import { useState } from 'react'

const QUESTION = 'Was macht mypraxis.at und welche Leistungen bieten sie für niedergelassene Ärzte in Österreich an?'

const AI_SERVICES = [
  {
    name: 'Perplexity',
    url: (q: string) => `https://www.perplexity.ai/search?q=${encodeURIComponent(q)}`,
    prefill: true,
    bg: '#1B1B1F',
    border: '#2d2d35',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fillOpacity=".15"/>
        <path d="M8.5 7.5h7M8.5 12h7M8.5 16.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'ChatGPT',
    url: (q: string) => `https://chatgpt.com/?q=${encodeURIComponent(q)}`,
    prefill: true,
    bg: '#0d0d0d',
    border: '#2a2a2a',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.5 11.5a8.5 8.5 0 1 0-8.5 8.5 8.46 8.46 0 0 0 4.6-1.35l3.25.95-.95-3.25A8.46 8.46 0 0 0 20.5 11.5z"/>
      </svg>
    ),
  },
  {
    name: 'Claude',
    url: () => 'https://claude.ai/new',
    prefill: false,
    bg: '#1a0f0a',
    border: '#3d2016',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <circle cx="12" cy="12" r="9" fillOpacity=".15"/>
        <path d="M9 8l3 8 3-8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Gemini',
    url: () => 'https://gemini.google.com/',
    prefill: false,
    bg: '#050d1f',
    border: '#1a2d5a',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fillOpacity=".15"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
]

export default function AskAiSection() {
  const [toast, setToast] = useState<{ name: string; prefill: boolean } | null>(null)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(QUESTION)
    } catch {
      // clipboard not available (e.g. http) – continue anyway
    }
  }

  const handleClick = async (service: typeof AI_SERVICES[0]) => {
    await copyToClipboard()
    setToast({ name: service.name, prefill: service.prefill })
    setTimeout(() => setToast(null), 4500)
    window.open(service.url(QUESTION), '_blank', 'noopener')
  }

  const handleCopy = async () => {
    await copyToClipboard()
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="py-16 px-6 bg-[#07090f]">
      <div className="max-w-3xl mx-auto text-center">

        <span className="inline-block bg-white/5 border border-white/10 text-white/60 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider">
          Kein eigener Chatbot nötig
        </span>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Fragen Sie einfach eine KI.
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Weil mypraxis.at für KI-Systeme lesbar aufgebaut ist, kennen ChatGPT, Perplexity, Claude und Gemini
          unsere Leistungen, Preise und Expertise bereits. Klicken Sie – und fragen Sie direkt.
        </p>

        {/* AI Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {AI_SERVICES.map((service) => (
            <button
              key={service.name}
              onClick={() => handleClick(service)}
              className="group flex flex-col items-center gap-2.5 rounded-2xl px-4 py-5 border transition-all hover:scale-[1.04] hover:brightness-110 active:scale-[0.98]"
              style={{ background: service.bg, borderColor: service.border }}
            >
              <span className="text-white/80 group-hover:text-white transition-colors">
                {service.icon}
              </span>
              <span className="text-white/80 group-hover:text-white text-xs font-semibold transition-colors">
                {service.name}
              </span>
              {service.prefill
                ? <span className="text-green-400/70 text-[10px]">Einfügen &amp; Enter ✓</span>
                : <span className="text-yellow-400/70 text-[10px]">Kopieren · Einfügen · Enter</span>
              }
            </button>
          ))}
        </div>

        {/* Standalone copy button */}
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white/90 text-xs font-medium px-5 py-2.5 rounded-xl transition-all mb-6"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Kopiert!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Frage kopieren – in beliebiger KI einfügen &amp; Enter drücken
            </>
          )}
        </button>

        {/* Question preview */}
        <div className="bg-white/3 border border-white/8 rounded-xl px-5 py-3 text-white/40 text-xs italic text-left max-w-xl mx-auto">
          &ldquo;{QUESTION}&rdquo;
        </div>

      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
          <div className="bg-gray-900 border border-white/15 text-white text-sm px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 whitespace-nowrap">
            {toast.prefill ? (
              <>
                <span className="text-green-400">✓</span>
                <span><strong>{toast.name}</strong> öffnet – Frage bereits eingefügt, einfach Enter drücken.</span>
              </>
            ) : (
              <>
                <span className="text-yellow-400">📋</span>
                <span>Frage kopiert! In <strong>{toast.name}</strong> einfügen <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">⌘V</kbd> / <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">Strg+V</kbd> und Enter drücken.</span>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
