'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AI_QUESTION =
  'Was genau sind die Spezialisierungen von mypraxis.at? Erkläre mir in einfachen und ausführlichen Worten, wie mypraxis.at niedergelassenen Ärztinnen und Ärzten in Österreich bei ihrer digitalen Sichtbarkeit weiterhilft. Lies außerdem, falls vorhanden, das llms.txt sowie die Schema.org-strukturierten Daten der Website aus.'

const BUTTONS = [
  {
    label: 'ChatGPT',
    method: 'url' as const,
    url: `https://chatgpt.com/?q=${encodeURIComponent(AI_QUESTION)}`,
    color: '#10a37f',
    bg: 'bg-[#0a2319]',
    border: 'border-[#10a37f]/40 hover:border-[#10a37f]',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494z" />
      </svg>
    ),
  },
  {
    label: 'Perplexity',
    method: 'url' as const,
    url: `https://www.perplexity.ai/?q=${encodeURIComponent(AI_QUESTION)}`,
    color: '#a78bfa',
    bg: 'bg-[#150d28]',
    border: 'border-purple-400/40 hover:border-purple-400',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896z" />
      </svg>
    ),
  },
  {
    label: 'Claude',
    method: 'clipboard' as const,
    url: 'https://claude.ai',
    color: '#d97706',
    bg: 'bg-[#1a1000]',
    border: 'border-amber-500/35 hover:border-amber-400/70',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M13.827 3.52h3.603l-7.43 16.96H6.397L13.827 3.52zm-7.258 0h3.767L4.31 12l6.026 8.48H6.57L.543 12l6.026-8.48zm14.747 0L23.457 12l-6.141 8.48h-3.768l6.025-8.48-6.025-8.48h3.768z" />
      </svg>
    ),
  },
  {
    label: 'Gemini',
    method: 'clipboard' as const,
    url: 'https://gemini.google.com',
    color: '#4285f4',
    bg: 'bg-[#0d1a35]',
    border: 'border-blue-400/35 hover:border-blue-400/70',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12" />
      </svg>
    ),
  },
]

const techStack = [
  { label: 'llms.txt', desc: 'KI-Leseanweisung' },
  { label: 'Schema Markup', desc: 'MedicalBusiness JSON-LD' },
  { label: 'robots.txt', desc: 'KI-Crawler optimiert' },
  { label: 'Structured Data', desc: 'Erweiterte Schemata' },
  { label: 'KI-Readiness', desc: 'Vorher/Nachher-Analyse' },
  { label: 'Semantic Content', desc: 'Maschinenlesbar' },
]

export default function KiSichtbarkeitSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [toast, setToast] = useState<{ label: string; url: string } | null>(null)
  const [techOpen, setTechOpen] = useState(false)
  const [questionOpen, setQuestionOpen] = useState(false)

  function handleClick(btn: (typeof BUTTONS)[0]) {
    if (btn.method === 'url') {
      window.open(btn.url, '_blank', 'noopener,noreferrer')
    } else {
      navigator.clipboard.writeText(AI_QUESTION).then(() => {
        setToast({ label: btn.label, url: btn.url })
        setTimeout(() => setToast(null), 7000)
      })
    }
  }

  return (
    <section ref={ref} className="py-12 md:py-14 px-6 bg-[#060b18] relative overflow-hidden">
      {/* dezenter Background-Glow */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#1e3ab8]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-[#10a37f]/8 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header dezent */}
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block bg-[#10a37f]/15 border border-[#10a37f]/30 text-[#10a37f] text-[10px] font-bold px-3 py-1 mb-3 tracking-widest uppercase"
          >
            KI-Sichtbarkeit live testen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-lg md:text-xl font-bold text-white mb-2 leading-snug"
          >
            Fragen Sie <span style={{ color: '#10a37f' }}>ChatGPT</span> oder{' '}
            <span style={{ color: '#a78bfa' }}>Perplexity</span> direkt über{' '}
            <span className="text-[#ff8a00]">my</span>praxis.at
          </motion.h2>
          <p className="text-white/45 text-xs max-w-xl mx-auto">
            Eine vorbereitete Frage — vier KI-Systeme. Sehen Sie selbst, wie wir uns positionieren.
          </p>
        </div>

        {/* 4 Buttons-Grid kompakt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {BUTTONS.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleClick(btn)}
              className={`flex items-center gap-2 ${btn.bg} border ${btn.border} px-3 py-2.5 transition-all hover:-translate-y-0.5`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
            >
              <span style={{ color: btn.color }}>{btn.logo}</span>
              <span className="text-white text-xs font-semibold flex-1 text-left">{btn.label}</span>
              <span className="text-[9px]" style={{ color: btn.color, opacity: 0.7 }}>
                {btn.method === 'url' ? '↗' : '📋'}
              </span>
            </button>
          ))}
        </div>

        {/* Mini-Hinweise als 2 Zeilen */}
        <div className="text-center space-y-1 mb-4">
          <p className="text-white/35 text-[10px]">
            <span className="text-[#10a37f]">↗</span> ChatGPT &amp; Perplexity öffnen direkt mit Frage
            {' · '}
            <span className="text-[#ff8a00]">📋</span> Claude &amp; Gemini: Frage kopiert, dann ⌘V im Chat
          </p>
          <p className="text-white/30 text-[10px]">
            <span className="text-amber-400">⚠</span> Webmodus aktivieren: ChatGPT → Suche ☰, Perplexity → automatisch
          </p>
        </div>

        {/* Vorbereitete Frage — aufklappbar */}
        <button
          onClick={() => setQuestionOpen(!questionOpen)}
          className="w-full flex items-center justify-between text-white/50 hover:text-white/80 text-[11px] uppercase tracking-widest font-semibold py-2 border-t border-white/10 transition-colors"
        >
          <span>Vorbereitete Frage ansehen</span>
          <span className={`text-[#ff8a00] text-sm transition-transform ${questionOpen ? 'rotate-180' : ''}`}>↓</span>
        </button>
        {questionOpen && (
          <div className="bg-[#0c1220] border border-white/10 p-4 mb-3" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
            <p className="text-white/65 text-xs leading-relaxed italic">
              &bdquo;{AI_QUESTION}&ldquo;
            </p>
          </div>
        )}

        {/* Tech-Stack — aufklappbar */}
        <button
          onClick={() => setTechOpen(!techOpen)}
          className="w-full flex items-center justify-between text-white/50 hover:text-white/80 text-[11px] uppercase tracking-widest font-semibold py-2 border-t border-white/10 transition-colors"
        >
          <span>Wie wir das technisch umsetzen</span>
          <span className={`text-[#ff8a00] text-sm transition-transform ${techOpen ? 'rotate-180' : ''}`}>↓</span>
        </button>
        {techOpen && (
          <div className="pt-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-3">
              {techStack.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 bg-[#0c1220] border border-white/7 px-3 py-2 hover:border-[#ff8a00]/40 transition-colors"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
                >
                  <span className="text-[#ff8a00] font-bold text-xs flex-shrink-0">✓</span>
                  <div>
                    <p className="text-white/80 text-[10px] font-mono font-semibold leading-none">{t.label}</p>
                    <p className="text-white/25 text-[9px] mt-0.5 leading-none">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed">
              Diese Grundlagen ermöglichen KI-Systemen, Ihre Ordination korrekt zu erfassen — bei aktiver KI-Readiness steigt die Chance messbar, in ChatGPT, Perplexity &amp; Co. genannt zu werden.
            </p>
          </div>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0f1623] border border-[#ff8a00]/40 text-white text-sm px-5 py-3 shadow-2xl flex items-center gap-3" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
          <span className="text-[#ff8a00]">✓</span>
          <span className="text-white/80 text-xs">Frage kopiert –</span>
          <a
            href={toast.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff8a00] text-xs font-semibold hover:underline"
          >
            {toast.label} öffnen ↗
          </a>
          <span className="text-white/35 text-xs">dann ⌘V</span>
          <button onClick={() => setToast(null)} className="ml-2 text-white/30 hover:text-white text-sm">✕</button>
        </div>
      )}
    </section>
  )
}
