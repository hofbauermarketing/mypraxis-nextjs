import Link from 'next/link'

export default function FoerderungSection() {
  return (
    <section
      id="foerderung"
      className="scroll-mt-24 mb-8"
    >
      {/* Orange Glow oben rechts */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,138,0,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Blauer Glow unten links */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(30,58,184,0.35) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Dot-Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 px-6 sm:px-10 md:px-14 py-12 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8a00]/40 bg-[#ff8a00]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-[#ff8a00] uppercase">
              Förderprogramme — individuell geprüft
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            <span className="text-[#ff8a00]">Förderung prüfen.</span>
            <br className="hidden sm:block" />
            <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-semibold">
              Persönlich, nicht pauschal.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Förderprogramme wie <strong className="text-white">KMU.DIGITAL</strong> können für
            Ordinationen in Frage kommen. Welche Programme + welche Quoten konkret für Ihre Praxis
            möglich sind, prüft unser <strong className="text-white">externer, zertifizierter
            Förderpartner</strong> individuell. Im Erstgespräch klären wir das gemeinsam — ohne
            Pauschal-Versprechen.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            {[
              { icon: '🤝', title: 'Externer Förderpartner', sub: 'Zertifiziert, prüft Ihre konkrete Situation' },
              { icon: '🔗', title: 'Programme kombinieren', sub: 'Mehrere Töpfe clever stapeln – wo sinnvoll' },
              { icon: '🎯', title: 'Individuell statt pauschal', sub: 'Was passt — wird mit Ihnen besprochen' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 text-left"
              >
                <div className="text-2xl mb-1.5">{item.icon}</div>
                <div className="text-white text-sm font-bold mb-0.5">{item.title}</div>
                <div className="text-white/50 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-xl shadow-[#ff8a00]/20 transition-all hover:scale-[1.02]"
          >
            Erstberatung vereinbaren
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <p className="text-white/40 text-xs mt-4">
            Unverbindliches Erstgespräch · Wir prüfen Ihre individuellen Förderhebel
          </p>
        </div>
      </div>
    </section>
  )
}
