'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AI_QUESTION =
  'Was genau sind die Spezialisierungen von mypraxis.at? Erkläre mir in einfachen und ausführlichen Worten, wie mypraxis.at niedergelassenen Ärztinnen und Ärzten in Österreich bei ihrer digitalen Sichtbarkeit weiterhilft. Lies außerdem, falls vorhanden, das llms.txt sowie die Schema.org-strukturierten Daten der Website aus.'

const BUTTONS = [
  {
    label: 'ChatGPT fragen',
    method: 'url' as const,
    url: `https://chatgpt.com/?q=${encodeURIComponent(AI_QUESTION)}`,
    color: '#10a37f',
    bg: 'bg-[#0a2319]',
    activeBg: 'bg-[#10a37f]/10',
    border: 'border-[#10a37f]',
    glow: 'shadow-[0_0_18px_rgba(16,163,127,0.3)] hover:shadow-[0_0_32px_rgba(16,163,127,0.6)]',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" />
      </svg>
    ),
  },
  {
    label: 'Perplexity fragen',
    method: 'url' as const,
    url: `https://www.perplexity.ai/?q=${encodeURIComponent(AI_QUESTION)}`,
    color: '#a78bfa',
    bg: 'bg-[#150d28]',
    activeBg: 'bg-purple-500/10',
    border: 'border-purple-400',
    glow: 'shadow-[0_0_18px_rgba(167,139,250,0.25)] hover:shadow-[0_0_32px_rgba(167,139,250,0.55)]',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </svg>
    ),
  },
  {
    label: 'Claude fragen',
    method: 'clipboard' as const,
    url: 'https://claude.ai',
    color: '#d97706',
    bg: 'bg-[#1a1000]',
    border: 'border-amber-500/35 hover:border-amber-400/70',
    glow: 'hover:shadow-[0_0_18px_rgba(217,119,6,0.2)]',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
        <path d="M13.827 3.52h3.603l-7.43 16.96H6.397L13.827 3.52zm-7.258 0h3.767L4.31 12l6.026 8.48H6.57L.543 12l6.026-8.48zm14.747 0L23.457 12l-6.141 8.48h-3.768l6.025-8.48-6.025-8.48h3.768z"/>
      </svg>
    ),
  },
  {
    label: 'Gemini fragen',
    method: 'clipboard' as const,
    url: 'https://gemini.google.com',
    color: '#4285f4',
    bg: 'bg-[#0d1a35]',
    border: 'border-blue-400/35 hover:border-blue-400/70',
    glow: 'hover:shadow-[0_0_18px_rgba(66,133,244,0.2)]',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
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
  { label: 'KI-Readiness', desc: 'Vorher/Nachher Analyse' },
  { label: 'Semantic Content', desc: 'Maschinenlesbare Inhalte' },
]

export default function KiSichtbarkeitSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [toast, setToast] = useState<{ label: string; url: string } | null>(null)

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
    <section ref={ref} className="py-20 px-6 bg-[#060b18] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#1e3ab8]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#10a37f]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#10a37f]/15 border border-[#10a37f]/30 text-[#10a37f] text-xs font-bold px-4 py-1.5 mb-4 tracking-wider uppercase"
          >
            KI-Sichtbarkeit live
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Fragen Sie{' '}
            <span style={{ color: '#10a37f' }}>ChatGPT</span> oder{' '}
            <span style={{ color: '#a78bfa' }}>Perplexity</span>
            <br className="hidden sm:block" /> direkt über{' '}
            <span className="text-[#ff8a00]">my</span>praxis.at
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Testen Sie jetzt live, wie KI-Systeme mypraxis.at kennen – inklusive Spezialisierungen,
            llms.txt und strukturierten Daten.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Tech Stack ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-white/35 text-[10px] uppercase tracking-[0.3em] mb-4">
              Technische Umsetzung
            </p>
            <div className="grid grid-cols-2 gap-1.5 mb-8">
              {techStack.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-2 bg-[#0c1220] border border-white/7 px-3 py-2.5 hover:border-[#ff8a00]/40 hover:bg-[#0f1628] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)' }}
                >
                  <span className="text-[#ff8a00] font-bold text-xs flex-shrink-0">✓</span>
                  <div>
                    <p className="text-white/80 text-[10px] font-mono font-semibold leading-none">{t.label}</p>
                    <p className="text-white/25 text-[9px] mt-0.5 leading-none">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Explanation */}
            <div
              className="bg-[#0c1220] border border-white/8 p-5"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <p className="text-white/40 text-xs leading-relaxed mb-3">
                Diese technischen Grundlagen ermöglichen es KI-Systemen, Ihre Ordination
                korrekt zu verstehen und bei passenden Patientenanfragen zu nennen.
              </p>
              <p className="text-white/25 text-[10px]">
                Bei Ärztinnen und Ärzten mit aktiver KI-Readiness steigt die Chance messbar,
                in ChatGPT, Perplexity &amp; Co. genannt zu werden.
              </p>
            </div>
          </motion.div>

          {/* ── Right: Interactive Demo ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            {/* CTA label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-[#ff8a00] text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                ↓ Hier klicken und ausprobieren
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Question box */}
            <div
              className="bg-[#0c1220] border border-white/10 p-4 mb-5"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <p className="text-white/30 text-[9px] uppercase tracking-[0.25em] font-semibold mb-2">
                Vorbereitete Frage
              </p>
              <p className="text-white/65 text-xs leading-relaxed italic">
                &bdquo;{AI_QUESTION}&ldquo;
              </p>
            </div>

            {/* Group 1: Direkt öffnen */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white/35 text-[9px] uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#10a37f] flex-shrink-0" />
                  Direkt öffnen – Frage ist vorausgefüllt
                </p>
              </div>
              {/* Webmodus-Hinweis */}
              <div className="flex items-center gap-2 mb-3 bg-amber-500/8 border border-amber-500/20 px-3 py-2" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                <span className="text-amber-400 text-[11px] flex-shrink-0">⚠</span>
                <p className="text-amber-300/70 text-[10px] leading-snug">
                  <span className="font-semibold text-amber-300/90">Webmodus aktivieren:</span>{' '}
                  In ChatGPT → Suche ☰, in Perplexity → ist immer aktiv
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {BUTTONS.filter(b => b.method === 'url').map((btn, i) => (
                  <motion.div
                    key={btn.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: [0, -6, 0] } : { opacity: 0, y: 10 }}
                    transition={isInView ? {
                      opacity: { duration: 0.4, delay: 0.55 + i * 0.1 },
                      y: {
                        duration: 2.8,
                        delay: 0.55 + i * 0.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    } : { duration: 0.4, delay: 0.55 + i * 0.1 }}
                  >
                    <button
                      onClick={() => handleClick(btn)}
                      className={`flex items-center gap-2.5 ${'activeBg' in btn ? btn.activeBg : 'bg-white/6'} border ${btn.border} ${btn.glow} px-3.5 py-3 hover:-translate-y-1 active:scale-95 transition-all duration-200 text-left w-full group`}
                      style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
                    >
                      <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 ${btn.bg}`} style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}>
                        <span style={{ color: btn.color }}>{btn.logo}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold leading-none">{btn.label}</p>
                        <p className="text-[9px] mt-0.5 font-medium" style={{ color: btn.color, opacity: 0.7 }}>↗ jetzt ausprobieren</p>
                      </div>
                      <svg className="w-3 h-3 flex-shrink-0" style={{ color: btn.color, opacity: 0.7 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-3">
              <div className="h-px flex-1 bg-white/8" />
              <p className="text-white/20 text-[9px] uppercase tracking-widest whitespace-nowrap">oder</p>
              <div className="h-px flex-1 bg-white/8" />
            </div>

            {/* Group 2: Clipboard */}
            <div className="mb-4">
              <p className="text-white/35 text-[9px] uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                <span className="text-[#ff8a00] text-[10px]">📋</span>
                Frage kopieren, dann im Chat einfügen (⌘V)
              </p>
              <div className="grid grid-cols-2 gap-2">
                {BUTTONS.filter(b => b.method === 'clipboard').map((btn, i) => (
                  <motion.button
                    key={btn.label}
                    onClick={() => handleClick(btn)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.71 + i * 0.08 }}
                    className={`flex items-center gap-2.5 bg-[#ff8a00]/5 border border-dashed ${btn.border} px-3.5 py-3 hover:-translate-y-0.5 hover:bg-[#ff8a00]/10 transition-all duration-200 text-left w-full group`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
                  >
                    <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 ${btn.bg}`} style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}>
                      <span style={{ color: btn.color }}>{btn.logo}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold leading-none">{btn.label}</p>
                      <p className="text-[#ff8a00]/70 text-[9px] mt-0.5 font-medium">📋 Frage kopieren</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
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
