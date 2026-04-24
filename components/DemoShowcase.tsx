'use client'

import { useEffect, useRef, useState } from 'react'

type Demo = {
  title: string
  subtitle: string
  description: string
  image: string
  href: string
}

const demos: Demo[] = [
  {
    title: 'CLASSIC',
    subtitle: 'Privatarzt · zurückhaltend',
    description: 'Seriöses Design für etablierte Ordinationen. Klare Typografie, viel Weißraum, Fokus auf Vertrauen.',
    image: '/demo-preview-classic.jpg',
    href: '/demo/privatarzt-classic',
  },
  {
    title: 'MODERN',
    subtitle: 'Privatarzt · frisch & klar',
    description: 'Mut zur Reduktion. Großzügige Layouts, moderne Akzente, für junge Ordinationen mit Wachstumsambitionen.',
    image: '/demo-preview-modern.jpg',
    href: '/demo/privatarzt-modern',
  },
  {
    title: 'WARM',
    subtitle: 'Privatarzt · menschlich',
    description: 'Einladende Farbwelten, persönliche Ansprache. Für Ordinationen, bei denen die Chemie zählt.',
    image: '/demo-preview-warm.jpg',
    href: '/demo/privatarzt-warm',
  },
  {
    title: 'ÄZ CLASSIC',
    subtitle: 'Ärztezentrum · strukturiert',
    description: 'Mehrere Fachrichtungen unter einem Dach. Arzt-Profilseiten, Team-Übersicht, klare Navigation.',
    image: '/demo-preview-aerztezentrum.jpg',
    href: '/demo/aerztezentrum-classic',
  },
  {
    title: 'ÄZ PREMIUM',
    subtitle: 'Ärztezentrum · exklusiv',
    description: 'Premium-Positionierung für Privatkliniken und PVEs. Hochwertige Bildsprache, differenzierte Fachbereiche.',
    image: '/demo-preview-premium.jpg',
    href: '/demo/aerztezentrum-premium',
  },
]

export default function DemoShowcase() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="demos" className="relative py-12 md:py-14 bg-[#0a0f1e] overflow-hidden scroll-mt-20">
      {/* Grid-Hintergrund */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,58,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Ambient-Glow oben */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(30,58,184,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — kompakt, im Stil der anderen Sektionen */}
        <div className="text-center mb-8 px-6">
          <span className="inline-block text-[10px] uppercase tracking-widest text-[#ffaa40] font-bold mb-2">
            Demo-Galerie
          </span>
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug max-w-2xl mx-auto">
            Fünf Stile als Orientierung — Ihre Website entsteht individuell.
          </h2>
          <p className="text-white/55 text-sm mt-2 max-w-xl mx-auto">
            Klassisch, warm, modern, strukturiert oder premium — die Beispiele zeigen Richtungen, keine fertigen Entwürfe.
          </p>
        </div>

        {/* Card-Grid: Desktop 5 Spalten, Mobile/Tablet horizontaler Snap-Scroll */}
        <div
          ref={ref}
          className="flex gap-4 lg:grid lg:grid-cols-5 lg:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-6 lg:px-6 pb-4 lg:pb-0 scroll-px-6 -mx-[1px] lg:mx-0"
          style={{ scrollbarWidth: 'thin' }}
        >
          {demos.map((demo, i) => (
            <a
              key={demo.title}
              href={demo.href}
              className="flip-card group relative block flex-shrink-0 w-[85%] sm:w-[55%] md:w-[40%] lg:w-auto aspect-[16/10] snap-center focus:outline-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms`,
                perspective: '1200px',
              }}
            >
              {/* 3D-Flipper: dreht sich um Y-Achse on hover */}
              <div className="flip-inner relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.0,0.2,1)]">
                {/* FRONT – Bild + Titel */}
                <div className="flip-face flip-front absolute inset-0 border border-dashed border-[#1e3ab8] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-top"
                    style={{ backgroundImage: `url(${demo.image})` }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-[rgba(10,15,30,0.92)] via-[rgba(10,15,30,0.35)] to-transparent p-3 sm:p-4">
                    <span className="text-[#ffaa40] text-[9px] font-bold uppercase tracking-[0.2em] mb-0.5 text-center">
                      {demo.subtitle}
                    </span>
                    <h3 className="font-bold text-white text-sm sm:text-base tracking-wide text-center">
                      {demo.title}
                    </h3>
                  </div>
                </div>

                {/* BACK – Beschreibung + CTA */}
                <div className="flip-face flip-back absolute inset-0 border border-solid border-[#ff8a00] bg-[#0f1623] overflow-hidden">
                  <div
                    className="flex h-full w-full flex-col items-center justify-center p-3 sm:p-4 text-center"
                    style={{ boxShadow: 'inset 0 0 0 6px #1a2845' }}
                  >
                    <span className="text-[#ffaa40] text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                      {demo.subtitle}
                    </span>
                    <h3 className="font-bold text-[#ff8a00] text-sm sm:text-base mb-2 tracking-wide">
                      {demo.title}
                    </h3>
                    <p className="text-white/75 text-[11px] sm:text-xs leading-relaxed mb-3 line-clamp-3 px-1">
                      {demo.description}
                    </p>
                    <span className="inline-block border-b border-[#ff8a00] text-[#ff8a00] text-[10px] font-bold uppercase tracking-wider pb-0.5">
                      Demo ansehen →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Swipe-Hinweis auf Mobile */}
        <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.2em] mt-3 lg:hidden">
          ← Wischen →
        </p>

        {/* Footer-CTA */}
        <div className="text-center mt-10 px-6">
          <a
            href="#kontakt"
            className="inline-block text-white/60 hover:text-white text-sm transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
          >
            Ihre individuelle Demo im Erstgespräch besprechen →
          </a>
          <p className="text-white/40 text-xs mt-3">
            Klick auf eine Demo öffnet die jeweilige Detail-Ansicht.
          </p>
        </div>
      </div>

      {/* 3D-Flip-Mechanik + Mobile-Fallback */}
      <style jsx>{`
        .flip-inner {
          transform-style: preserve-3d;
          will-change: transform;
        }
        .flip-face {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0);
        }
        .flip-back {
          -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
        }
        .flip-card:hover .flip-inner,
        .flip-card:focus .flip-inner {
          -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
        }
        @media (hover: none) {
          /* Touch-Devices: kein Hover → beide Seiten alternierend zeigen via Tap-Toggle ist zu komplex,
             deshalb permanent Front zeigen (Bild + Titel), Back nur per Klick erreichbar */
          .flip-card .flip-inner {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
