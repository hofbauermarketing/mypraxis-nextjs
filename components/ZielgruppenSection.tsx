'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    title: 'Kassenärzte',
    subtitle: 'Für GKK-Vertragsärzte',
    text: 'Überfüllte Ordination, zu wenig Zeit pro Patient – und trotzdem kommen viele schlecht informiert an. Sprachbarrieren machen es noch schwerer. Was, wenn Ihre Patienten schon vorbereitet ankommen und Sie sich auf Medizin konzentrieren können?',
    color: 'bg-blue-50 border-blue-100',
    rotate: '-rotate-2',
    pinColor: '#3b82f6',
    img: '/zielgruppen/kassenarzt.jpg',
    stats: [{ val: '15', label: 'Sprachen inklusive' }, { val: '97%', label: 'suchen online' }],
  },
  {
    title: 'Privatärzte & Wahlärzte',
    subtitle: 'Für Wahlarzt-Ordinationen',
    text: 'Sie haben die Expertise – aber Wunschpatienten mit Zahlungsbereitschaft finden Sie nicht. Google, ChatGPT und Perplexity zeigen stattdessen Ihre Mitbewerber. Wer online unsichtbar ist, existiert für diese Zielgruppe schlicht nicht.',
    color: 'bg-orange-50 border-orange-100',
    rotate: 'rotate-1',
    pinColor: '#f97316',
    img: '/zielgruppen/privatarzt.jpg',
    stats: [{ val: '3×', label: 'mehr Sichtbarkeit' }, { val: 'Nr.1', label: 'Eindruck zählt' }],
  },
  {
    title: 'Ärztezentren & PVEs',
    subtitle: 'Für Gruppen & Zentren',
    text: 'Patienten wissen oft nicht, welche Fachrichtungen unter einem Dach sind. Wer wegen des Rückens kommt, bräuchte vielleicht auch den Neurologen nebenan. Eine schwache Online-Präsenz kostet alle Kollegen Patienten – obwohl das Angebot längst vorhanden ist.',
    color: 'bg-indigo-50 border-indigo-100',
    rotate: '-rotate-1',
    pinColor: '#6366f1',
    img: '/zielgruppen/aerztezentrum.jpg',
    stats: [{ val: '3', label: 'Plätze im Programm' }, { val: '12', label: 'Mo. Betreuung' }],
  },
]

export default function ZielgruppenSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="relative px-6 py-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f3f6ff 0%, #eef2ff 50%, #f5f7fe 100%)' }}
    >
      {/* Strukturhintergrund */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-[#1e3ab8] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Für wen ist mypraxis.at?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#112080]">
            Drei Zielgruppen. Eine Lösung.
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 items-start pt-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`relative rounded-sm border shadow-lg transition-all duration-700 ${c.color} ${c.rotate}`}
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
                opacity: visible ? 1 : 0,
                transform: visible ? `${c.rotate === '-rotate-2' ? 'rotate(-2deg)' : c.rotate === 'rotate-1' ? 'rotate(1deg)' : 'rotate(-1deg)'} translateY(0)` : `${c.rotate === '-rotate-2' ? 'rotate(-2deg)' : c.rotate === 'rotate-1' ? 'rotate(1deg)' : 'rotate(-1deg)'} translateY(32px)`,
                transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
              }}
            >
              {/* Push-Pin */}
              <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div
                  className="w-6 h-6 rounded-full border border-white/30"
                  style={{
                    background: `radial-gradient(circle at 35% 32%, ${c.pinColor}cc 0%, ${c.pinColor}88 45%, ${c.pinColor}44 100%)`,
                    boxShadow: '0 3px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.35)',
                  }}
                />
                <div className="w-[3px] h-3 rounded-b-full" style={{ background: 'linear-gradient(to bottom, #bbb, #888)' }} />
              </div>

              {/* Card image */}
              <div className="h-36 overflow-hidden rounded-t-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} className="w-full h-full object-cover object-center" />
              </div>

              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{c.subtitle}</p>
                <h3 className="font-bold text-[#112080] text-lg mb-2 leading-snug">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.text}</p>

                {/* Mini stats */}
                <div className="flex gap-3">
                  {c.stats.map((s) => (
                    <div key={s.label} className="flex-1 text-center bg-white/70 rounded-lg py-2 border border-white/80">
                      <p className="text-lg font-black text-[#1e3ab8] leading-none">{s.val}</p>
                      <p className="text-[9px] text-gray-500 uppercase tracking-wide mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
