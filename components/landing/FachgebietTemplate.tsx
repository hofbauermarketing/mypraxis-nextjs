'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { FachgebietContent } from '@/lib/content-types'
import UnterseiteHero from './UnterseiteHero'
import UnterseiteFaq from './UnterseiteFaq'

type Props = {
  data: FachgebietContent
}

// Akzent-Paletten für Persona-Karten
const AKZENT: Record<string, { bg: string; border: string; avatar: string; tag: string }> = {
  blau:       { bg: 'linear-gradient(135deg, #eef4ff 0%, #fdfbf7 100%)', border: '#3a5acc', avatar: '#3a5acc', tag: '#1e3ab8' },
  graublau:   { bg: 'linear-gradient(135deg, #eef1f5 0%, #fbfaf6 100%)', border: '#4a5a70', avatar: '#4a5a70', tag: '#2d3e55' },
  terracotta: { bg: 'linear-gradient(135deg, #f9ede4 0%, #fdfbf7 100%)', border: '#c08464', avatar: '#a36c4e', tag: '#8a5536' },
  gruen:      { bg: 'linear-gradient(135deg, #eef4ec 0%, #fdfbf7 100%)', border: '#7a9e6d', avatar: '#628654', tag: '#4a6b3f' },
  violett:    { bg: 'linear-gradient(135deg, #f0eef5 0%, #fdfbf7 100%)', border: '#8878a8', avatar: '#6b5c8a', tag: '#534470' },
  sand:       { bg: 'linear-gradient(135deg, #f6efe3 0%, #fdfbf7 100%)', border: '#b59a6b', avatar: '#947a4e', tag: '#6f5a35' },
  petrol:     { bg: 'linear-gradient(135deg, #e4eff0 0%, #fdfbf7 100%)', border: '#3a7a7e', avatar: '#2a6467', tag: '#1e4d50' },
}
const defaultAkzent = AKZENT.blau

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

// Begriffe, die im Fließtext fett hervorgehoben werden sollen.
// Reihenfolge: lange Varianten zuerst (damit "Anti-Magician" nicht an "Magician" gematcht wird).
// Zusätzlich werden alle **X**-Markdown-Bold-Markierungen erkannt — Authoren können also
// jeden beliebigen Begriff direkt im Text fett setzen, auch wenn er nicht in der Liste steht.
const HIGHLIGHT_TERMS = [
  'Anti-Elitismus', 'Anti-Magician', 'Anti-Ruler', 'Anti-Lover',
  'Anti-Scham', 'Anti-Angst', 'Anti-Anbiedern', 'Anti-Chaos',
  'Hero-Einschlag', 'Lover-Akzent', 'Innocent-Einschlag', 'Everyman-Einschlag', 'Ruler-Einschlag',
  'Caregiver', 'Sage', 'Magician', 'Ruler', 'Hero', 'Lover', 'Innocent', 'Everyman', 'Explorer', 'Creator', 'Jester',
  'MIA Social Chronicles', 'Margaret Mark', 'Carol S. Pearson', 'Baulig-Prinzip', 'Baulig',
  'Geodaten', 'Einzugsgebiet', 'telefonischen Erstgespräch', 'E-Mail-Zusammenfassung',
  'Psychiater:in', 'Psychotherapeut:in',
]

function renderWithHighlights(text: string, variant: 'light' | 'dark' = 'light'): React.ReactNode {
  if (!text) return text
  const boldClass = variant === 'dark' ? 'font-bold text-[#ffb347]' : 'font-bold text-[#112080]'
  const escTerms = HIGHLIGHT_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  // Pattern: erst **X** Markdown-Bold, dann HIGHLIGHT_TERMS
  const pattern = new RegExp(`(\\*\\*[^*]+?\\*\\*)|(${escTerms})`, 'g')
  const out: React.ReactNode[] = []
  let lastIndex = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > lastIndex) {
      out.push(<span key={key++}>{text.slice(lastIndex, m.index)}</span>)
    }
    if (m[1]) {
      // **X**-Markdown — Sterne entfernen
      const inner = m[1].slice(2, -2)
      out.push(<strong key={key++} className={boldClass}>{inner}</strong>)
    } else if (m[2]) {
      out.push(<strong key={key++} className={boldClass}>{m[2]}</strong>)
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex < text.length) {
    out.push(<span key={key++}>{text.slice(lastIndex)}</span>)
  }
  return out
}

export default function FachgebietTemplate({ data }: Props) {
  const bg = data.backgrounds ?? {}

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* §1 Hero */}
      <UnterseiteHero
        pille={data.hero.pille}
        h1={data.hero.h1}
        sub={data.hero.sub}
        ctaHref={data.naechsterSchritt.cta.href}
        ctaLabel={data.naechsterSchritt.cta.label}
        image={data.hero.image}
      />

      {/* §2 Verständnis */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-6 leading-snug">
            {data.verstaendnis.title}
          </h2>
          <div className="space-y-5">
            {data.verstaendnis.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-justify hyphens-auto">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* §3 Szene-Simulation — Dialog-Layout (2 Personen) oder Legacy */}
      {data.szene && (
        <section className="relative px-6 py-20 overflow-hidden">
          {bg.szene && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bg.szene} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f2]/96 via-[#faf7f2]/93 to-[#fdfbf7]/96" />
            </>
          )}
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-12 text-center leading-snug drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] [text-shadow:_0_1px_0_white,_0_-1px_0_white,_1px_0_0_white,_-1px_0_0_white]">
              {data.szene.title}
            </h2>

            {data.szene.person1 && data.szene.person2 ? (
              <>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Person 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/60"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.szene.person1.image}
                      alt={data.szene.person1.name}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold mb-1">
                        Person A
                      </div>
                      <h3 className="font-bold text-[#112080] text-lg mb-1">
                        {data.szene.person1.name}
                      </h3>
                      <div className="text-xs text-gray-500 mb-4">
                        {data.szene.person1.rolle}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify hyphens-auto mb-4">
                        {data.szene.person1.text}
                      </p>
                      {data.szene.person1.zitat && (
                        <div className="bg-[#fffaf3] border-l-4 border-[#ff8a00] px-4 py-3 rounded-r-md">
                          <p className="text-sm text-[#112080] italic leading-snug">
                            „{data.szene.person1.zitat}"
                          </p>
                          {data.szene.person1.zitatAttr && (
                            <p className="text-[11px] text-gray-500 italic mt-1">
                              {data.szene.person1.zitatAttr}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Person 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/60"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.szene.person2.image}
                      alt={data.szene.person2.name}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <div className="text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold mb-1">
                        Person B
                      </div>
                      <h3 className="font-bold text-[#112080] text-lg mb-1">
                        {data.szene.person2.name}
                      </h3>
                      <div className="text-xs text-gray-500 mb-4">
                        {data.szene.person2.rolle}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify hyphens-auto mb-4">
                        {data.szene.person2.text}
                      </p>
                      {data.szene.person2.zitat && (
                        <div className="bg-[#fffaf3] border-l-4 border-[#ff8a00] px-4 py-3 rounded-r-md">
                          <p className="text-sm text-[#112080] italic leading-snug font-mono">
                            „{data.szene.person2.zitat}"
                          </p>
                          {data.szene.person2.zitatAttr && (
                            <p className="text-[11px] text-gray-500 italic mt-1">
                              {data.szene.person2.zitatAttr}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {data.szene.verbindung && (
                  <div className="text-center my-8">
                    <span className="inline-block bg-white/80 backdrop-blur-sm border border-[#112080]/15 text-[11px] uppercase tracking-widest text-[#112080] italic font-semibold px-4 py-2 rounded-full shadow-sm">
                      {data.szene.verbindung}
                    </span>
                  </div>
                )}

                {data.szene.abschluss && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                  >
                    <div className="bg-white/90 backdrop-blur-sm border-l-4 border-[#ff8a00] rounded-r-lg shadow-md px-6 py-5">
                      <p className="text-center text-[#112080] text-base md:text-lg font-semibold italic leading-snug">
                        {data.szene.abschluss}
                      </p>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="bg-white/85 backdrop-blur-sm border-l-4 border-[#ff8a00] rounded-r-lg p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-justify hyphens-auto text-base md:text-lg italic">
                  {data.szene.text}
                </p>
              </div>
            )}

            <div className="mt-8 text-center">
              <p className="inline-block bg-white/75 backdrop-blur-sm border border-gray-200 text-xs text-gray-700 italic max-w-2xl mx-auto px-4 py-2 rounded-md leading-relaxed">
                {data.szene.disclaimer}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* §4 Persona-Galerie · farbige Akzent-Gradients + Avatare */}
      <section className="px-6 py-12 md:py-14 bg-gradient-to-b from-[#faf7f2] to-[#f3f1ec]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
              Wer bei Ihnen ankommt
            </div>
            <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-3 leading-snug">
              Nicht Demografie — konkrete Menschen.
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Die Patient:innen-Typen aus unserem {data.paperPages}-Seiten-Strategiepapier {data.name}.
            </p>
          </div>
          {data.personasDisclaimer && (
            <div className="max-w-2xl mx-auto mt-6 mb-10">
              <p className="text-xs text-gray-500 italic text-center bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2.5">
                {data.personasDisclaimer}
              </p>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.personas.map((persona) => {
              const a = (persona.akzent && AKZENT[persona.akzent]) || defaultAkzent
              const initials = getInitials(persona.vollerName || persona.name)
              return (
                <div
                  key={persona.vollerName || persona.name}
                  className="relative rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{
                    background: a.bg,
                    borderLeft: `4px solid ${a.border}`,
                  }}
                >
                  {/* dezenter Decor-Kreis rechts oben */}
                  <div
                    className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.08] pointer-events-none"
                    style={{ background: a.border }}
                  />

                  {/* Avatar/Portrait + Name */}
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    {persona.image ? (
                      <div
                        className="shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-md ring-2"
                        style={{ boxShadow: `0 0 0 3px white, 0 0 0 5px ${a.border}` }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={persona.image}
                          alt={persona.vollerName || persona.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md"
                        style={{ background: a.avatar }}
                        aria-hidden="true"
                      >
                        {initials}
                      </div>
                    )}
                    <div className="min-w-0 flex-1 pt-1">
                      <div className="font-bold text-[#1a1a1a] text-base leading-tight">
                        {persona.vollerName || persona.name}
                        {persona.alter > 0 && (
                          <span className="text-gray-400 font-normal ml-1">· {persona.alter}</span>
                        )}
                      </div>
                      {persona.fachContext && (
                        <div
                          className="text-[10px] uppercase tracking-widest font-bold mt-1"
                          style={{ color: a.tag }}
                        >
                          {persona.fachContext}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed text-justify hyphens-auto mb-5 relative z-10">
                    {persona.kontext}
                  </p>

                  <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-lg p-4 space-y-3 relative z-10">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Stille Frage
                      </div>
                      <div className="text-sm text-[#1a1a1a] italic leading-snug">
                        „{persona.stilleFrage}"
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        So sucht sie/er bei Google
                      </div>
                      <div className="text-sm font-mono leading-snug" style={{ color: a.tag }}>
                        {persona.suchanfrage}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* §5 Sieben Schritte · floating Scroll-Reveal-Karten */}
      {data.siebenSchritte && (
        <section className="relative px-6 py-20 overflow-hidden bg-white">
          {bg.siebenSchritte && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bg.siebenSchritte}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
            </>
          )}
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
                Unser Prozess
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-3 leading-snug max-w-3xl mx-auto">
                {data.siebenSchritte.title}
              </h2>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">{data.siebenSchritte.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {data.siebenSchritte.items.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative"
                  style={{
                    animation: `floatMicro ${5 + (i % 3) * 0.7}s ease-in-out ${i * 0.4}s infinite`,
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm border border-[#112080]/15 rounded-xl pl-5 pr-5 py-4 shadow-sm group-hover:shadow-md group-hover:border-[#112080]/40 transition-all flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white flex items-center justify-center text-base font-bold font-mono shadow-lg ring-4 ring-white">
                      {step.num}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="font-bold text-[#112080] text-sm md:text-base mb-1 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-[13px] leading-relaxed">{renderWithHighlights(step.text)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* §6 Archetyp */}
      {data.archetyp && (
        <section className="px-6 py-12 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold mb-2">Tonalität</div>
            <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-6 leading-snug">
              {data.archetyp.triade}
            </h2>
            <div className="space-y-4">
              {data.archetyp.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed text-justify hyphens-auto">{renderWithHighlights(p)}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* §7 Vier Kern-Sätze · mit Struktur-Hintergrund */}
      {data.vierKernsaetze && (
        <section className="relative px-6 py-20 bg-[#0a0f1e] text-white overflow-hidden">
          {/* Dezentes Dot-Grid */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          {/* Diagonal Lines */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,138,0,0.4) 40px, rgba(255,138,0,0.4) 41px)',
            }}
            aria-hidden="true"
          />
          {/* Orange Glow rechts oben */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />
          {/* Blue Glow links unten */}
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(30,58,184,0.25) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-[10px] uppercase tracking-widest text-[#ffb347] font-bold mb-3">
              Marketing-Thesis, destilliert
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-3">{data.vierKernsaetze.title}</h2>
            <p className="text-gray-400 text-sm mb-10 max-w-xl">{data.vierKernsaetze.sub}</p>
            <div className="grid md:grid-cols-2 gap-5">
              {data.vierKernsaetze.items.map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white/[0.06] hover:bg-white/[0.08] border border-white/10 hover:border-[#ff8a00]/40 backdrop-blur-sm rounded-xl p-5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl text-[#ff8a00] font-serif leading-none pt-1">„</span>
                    <h3 className="text-lg font-bold text-[#ffb347] leading-snug flex-1">
                      {k.satz}"
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed text-justify hyphens-auto mt-3 pl-7">{renderWithHighlights(k.begruendung, 'dark')}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* §8 Credibility · dezentes Bibliotheks-Hintergrundbild */}
      {data.credibility && (
        <section className="relative px-6 py-16 overflow-hidden bg-[#f3f1ec]">
          {bg.credibility && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bg.credibility} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.12]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#f3f1ec]/80 via-[#f3f1ec]/70 to-[#f3f1ec]/90" />
            </>
          )}
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
              Methodik
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#112080] mb-5 leading-snug">
              {data.credibility.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify hyphens-auto">{data.credibility.text}</p>
          </div>
        </section>
      )}

      {/* §9 Anti-Muster */}
      {data.antiMuster && (
        <section className="px-6 py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold text-[#112080] mb-8 leading-snug">
              {data.antiMuster.title}
            </h2>
            <ul className="space-y-3">
              {data.antiMuster.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-sm mt-0.5">
                    ✗
                  </span>
                  <span className="text-gray-700 leading-relaxed text-justify hyphens-auto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* §10 Design-Richtung */}
      {data.designRichtung && (
        <section className="px-6 py-14 bg-[#faf7f2]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#112080] mb-4 leading-snug">
              {data.designRichtung.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify hyphens-auto">{data.designRichtung.text}</p>
          </div>
        </section>
      )}

      {/* §11 Neun Blöcke · farbige Akzente pro Block */}
      {data.neunBloecke && (() => {
        const blockAkzente: Array<keyof typeof AKZENT> = [
          'blau', 'terracotta', 'gruen', 'graublau', 'petrol', 'sand', 'violett', 'blau', 'terracotta'
        ]
        return (
          <section className="relative px-6 py-20 bg-gradient-to-b from-white via-[#faf7f2] to-white overflow-hidden">
            {/* Dezente Dots-Struktur */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(17,32,128,0.5) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block text-[10px] tracking-widest uppercase text-[#ff8a00] font-bold mb-3">
                  Website-Architektur
                </div>
                <h2 className="text-lg md:text-xl font-bold text-[#112080] leading-snug max-w-3xl mx-auto">
                  {data.neunBloecke.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.neunBloecke.items.map((b, i) => {
                  const a = AKZENT[blockAkzente[i] || 'blau']
                  return (
                    <motion.div
                      key={b.nr}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="group relative rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                      style={{
                        background: a.bg,
                        borderLeft: `4px solid ${a.border}`,
                      }}
                    >
                      {/* dezenter Decor-Kreis rechts oben */}
                      <div
                        className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-[0.10] pointer-events-none group-hover:opacity-[0.16] transition-opacity"
                        style={{ background: a.border }}
                        aria-hidden="true"
                      />
                      {/* Number Badge */}
                      <div className="relative z-10 flex items-baseline gap-3 mb-3">
                        <div
                          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-mono shadow-md ring-4 ring-white"
                          style={{ background: a.avatar }}
                        >
                          {b.nr}
                        </div>
                        <div
                          className="text-[10px] uppercase tracking-widest font-bold"
                          style={{ color: a.tag }}
                        >
                          Block {b.nr}
                        </div>
                      </div>
                      <h3 className="font-bold text-[#1a1a1a] text-base mb-2 leading-snug relative z-10">
                        {b.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify hyphens-auto relative z-10">
                        {b.text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      })()}

      {/* §11b Angehörigen-Pfad · mit Hintergrundbild (Abend-Küchenlicht) */}
      {data.angehoerigenPfad && data.angehoerigenPfad.active && (
        <section className="relative px-6 py-20 text-white overflow-hidden">
          {bg.angehoerige && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={bg.angehoerige} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/95 via-[#0a0f1e]/88 to-[#1a2530]/90" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-[10px] uppercase tracking-widest text-[#ffb347] font-bold mb-2">
              Eigener Zugang
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-4 leading-snug">
              {data.angehoerigenPfad.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify hyphens-auto mb-6">{data.angehoerigenPfad.intro}</p>
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 mb-6">
              <div className="text-[10px] uppercase tracking-widest text-[#ffb347] font-bold mb-3">
                Typische Suchen, die wir hier abdecken
              </div>
              <ul className="space-y-1.5">
                {data.angehoerigenPfad.fragen.map((f) => (
                  <li key={f} className="text-sm text-gray-200 font-mono">„{f}"</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify hyphens-auto mb-6">{data.angehoerigenPfad.text}</p>
            <a
              href={data.naechsterSchritt.cta.href}
              className="inline-block bg-[#ff8a00] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              {data.angehoerigenPfad.ctaLabel} →
            </a>
          </div>
        </section>
      )}

      {/* Typische Suchen · 2-spaltig */}
      <section className="px-6 py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#112080] mb-3 leading-snug">
            So suchen {data.shortName}-Patient:innen bei Google
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Nicht nach Fachbegriffen. Nach dem, was sie plagt.
          </p>
          <div className="grid md:grid-cols-2 gap-2 md:gap-3">
            {data.typischeSuchen.map((s, i) => (
              <div key={i} className="bg-[#fffaf3] border-l-4 border-[#ff8a00] px-5 py-3 text-sm font-mono text-[#112080]">
                „{s}"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §12 FAQ — Katalog möglicher Patient:innen-Fragen */}
      <UnterseiteFaq
        items={data.faq}
        title={`Mögliche Fragen Ihrer ${data.shortName}-Patient:innen`}
        sub="Die Antworten sind keine fertigen Texte. Sie zeigen, welche Themen auf Ihrer Praxis-Website abgedeckt sein sollten — aus unserer Strategiepapier-Recherche."
      />

      {/* §13 Abschluss-CTA — kompakt + kantig im Stil der Startseite */}
      <section className="px-6 py-10 md:py-12 bg-[#112080] text-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold leading-snug mb-1.5">{data.naechsterSchritt.title}</h2>
            <p className="text-blue-100 text-sm leading-relaxed">{data.naechsterSchritt.text}</p>
          </div>
          <Link
            href={data.naechsterSchritt.cta.href}
            className="inline-flex items-center justify-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold text-sm px-7 py-3 transition-all whitespace-nowrap shadow-md hover:shadow-orange-500/30 flex-shrink-0"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
          >
            {data.naechsterSchritt.cta.label} →
          </Link>
        </div>
      </section>
    </main>
  )
}
