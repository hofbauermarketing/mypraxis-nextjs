import Image from 'next/image'
import MainPageFunnel from '@/components/MainPageFunnel'
import { getSortedPostsData } from '@/lib/blog'
import BlogCarousel from '@/components/BlogCarousel'
import KiSystemeMarquee from '@/components/KiSystemeMarquee'
import KiSichtbarkeitSection from '@/components/KiSichtbarkeitSection'
import ReferenzkundenSection from '@/components/ReferenzkundenSection'
import ZielgruppenSection from '@/components/ZielgruppenSection'

export const metadata = {
  alternates: {
    canonical: '/',
    languages: { 'de-AT': '/' },
  },
}

/** Inline brand helper: "my" always orange, "praxis.at" inherits parent color */
function Mp() {
  return (
    <>
      <span className="text-[#ff8a00]">my</span>praxis.at
    </>
  )
}

export default function HomePage() {
  const blogPosts = getSortedPostsData()

  const howToSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        '@id': 'https://www.mypraxis.at/#howto',
        name: 'In vier Schritten zur KI-sichtbaren Arzt-Website',
        description: 'So läuft die Zusammenarbeit mit mypraxis.at ab – von der ersten Analyse bis zur 12-monatigen Betreuung nach dem Launch.',
        totalTime: 'P4W',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Erstcheck', text: 'Kostenloses 15-minütiges Erstgespräch: Fachrichtung, Ziele und aktuelle Online-Präsenz werden besprochen. Unverbindlich.', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 2, name: 'Strategiegespräch', text: '30-minütige Tiefenanalyse der Ordination, des Wettbewerbs und der Zielgruppe. Ergebnis: konkretes Positionierungskonzept.', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 3, name: 'Umsetzung', text: '100 % individuelle Entwicklung: Texte, Design, Technik und vollständige KI-Readiness – kein Template, kein Baukasten.', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 4, name: 'Launch & Betreuung', text: 'Website geht online. 12 Monate technische Betreuung: KI-Sichtbarkeitsmonitoring, Updates, Sicherheits-Patches inklusive.', url: 'https://www.mypraxis.at/#kontakt' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'mypraxis.at', item: 'https://www.mypraxis.at' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main>
      {/* ===== HERO ===== */}
      <section className="relative text-white px-6 py-14 md:py-20 text-center overflow-hidden min-h-[500px] flex items-center" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)' }}>
        {/* Hero Background */}
        <Image
          src="/lp-hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
        />
        {/* Overlay – Blau dominant, Bild scheint dezent durch */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/85 via-[#112080]/75 to-[#0a0f1e]/85" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto w-full pt-10 pb-8">

          {/* Urgency Badge */}
          <div className="inline-flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2.5 bg-[#ff8a00]/20 border border-[#ff8a00]/40 text-[#ffb347] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Referenzkunden-Programm 2026 – noch 7 Plätze verfügbar
            </div>
            <div className="flex items-center gap-1.5">
              {[0,1,2,3,4,5,6,7,8].map((i) => (
                <div
                  key={i}
                  className={i < 2
                    ? 'w-3 h-3 rounded-full bg-white/20 border border-white/15'
                    : 'w-3 h-3 rounded-full bg-[#ff8a00] animate-pulse'}
                  style={i >= 2 ? { boxShadow: '0 0 7px rgba(255,138,0,0.7)' } : undefined}
                />
              ))}
              <span className="text-[10px] text-white/35 ml-2 uppercase tracking-wider">2 vergeben · 7 frei</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="block text-xs sm:text-sm font-semibold text-[#ff8a00]/75 uppercase tracking-[0.22em] mb-3">
              Praxis-Website &amp; KI-Sichtbarkeit für Ärzte in Österreich &amp; Deutschland
            </span>
            Was, wenn Ihre Wunschpatienten Sie finden –
            <span className="text-[#ff8a00]"><br className="hidden sm:block" /> während Sie behandeln?</span>
          </h1>

          <p className="text-base md:text-xl text-blue-100 mb-3 max-w-2xl mx-auto leading-relaxed">
            Ärzte, die von uns betreut werden, werden von genau jenen Patienten gefunden, die zu ihnen passen –
            nicht weil sie Glück hatten, sondern weil ihre Website für sie arbeitet.
          </p>

          <p className="text-blue-300/80 text-sm mb-10 max-w-lg mx-auto">
            Rechtssicher nach ÖÄK & DSGVO · Individuell entwickelt · Kein Template
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 transition-all shadow-xl hover:shadow-orange-500/40 border border-orange-300/40 hover:-translate-y-0.5"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Gratis KI-Check anfordern →</span>
            </a>
            <a
              href="/preise"
              className="glass-card hover:bg-white/20 text-white font-semibold px-8 py-3 sm:py-4 text-base sm:text-lg transition-all border border-white/35 hover:border-white/60 hover:-translate-y-0.5"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Demo-Websites ansehen</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span
              className="text-white text-xs font-semibold px-3 py-1.5 border border-white/25 bg-white/8 hover:-translate-y-0.5 transition-all duration-200"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Hier mit mir persönlich Kontakt aufnehmen →</span>
            </span>
            <a
              href="https://www.linkedin.com/in/kevin-hofbauer-b2660b274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#005f93] text-white text-xs font-semibold px-4 py-2 transition-all duration-200 shadow-md shadow-black/20 hover:-translate-y-0.5 border border-[#0099e0]/50"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)' }}
              aria-label="LinkedIn"
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }} className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100035353760113"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877f2] hover:bg-[#1464d8] text-white text-xs font-semibold px-4 py-2 transition-all duration-200 shadow-md shadow-black/20 hover:-translate-y-0.5 border border-[#4a9fff]/50"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)' }}
              aria-label="Facebook"
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }} className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/hofbauer.mypraxis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 transition-all duration-200 shadow-md shadow-black/20 hover:-translate-y-0.5 border border-pink-400/40"
              style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)', transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)' }}
              aria-label="Instagram"
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }} className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </span>
            </a>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '-62px', position: 'relative', zIndex: 1 }}>
        <KiSystemeMarquee />
      </div>

      <ZielgruppenSection />

      {/* ===== PROBLEMVERSTÄNDNIS ===== */}
      <section className="py-14 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(30,58,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Problem text */}
            <div>
              <div className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 mb-4">
                Das Problem
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-primary leading-tight">
                Sie sind Experte in Ihrem Fach.
              </h2>
              <p className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                <span className="shimmer-text">Online merkt man das nicht.</span>
              </p>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                <strong className="text-primary">97 % der Patienten recherchieren online</strong> – bevor sie anrufen. Wunschpatienten suchen genau dort nach Ihnen. Wer Sie noch nicht kennt, findet Sie nicht: nicht auf Google, nicht bei ChatGPT, nicht bei Perplexity.{' '}
                <strong className="text-primary">Während Ihre Mitbewerber bereits sichtbar sind.</strong>
              </p>
              <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                Dazu kommt das regulatorische Minenfeld: ÖÄK-Richtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz. Eine Website, die gut aussieht <em>und</em> rechtskonform ist, braucht Spezialwissen.
              </p>
              <p className="text-sm font-semibold text-primary leading-relaxed">
                Wir bringen beides zusammen – damit Ihre Ordination nicht nur existiert, sondern gefunden wird.
              </p>
            </div>

            {/* Right: Kevin card */}
            <div className="bg-gray-50 border border-gray-100 overflow-hidden shadow-md"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-44 lg:w-52 relative overflow-hidden flex-shrink-0" style={{ minHeight: '200px' }}>
                  <Image
                    src="/kevin.webp"
                    alt="Kevin Hofbauer – Gründer mypraxis.at"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 208px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/80 hidden sm:block" />
                </div>
                <div className="flex-1 px-5 py-5 flex flex-col justify-center">
                  <div className="text-[#ff8a00] text-2xl font-serif leading-none mb-2 select-none">"</div>
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                    Ärzte haben täglich genug Fachjargon. Mit uns reden Sie auf Augenhöhe – direkt, transparent, ohne Agentur-Blabla. Das Ergebnis: eine Ordination, die online so wirkt wie Sie offline.
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-primary flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">Kevin Hofbauer</p>
                      <p className="text-[10px] text-gray-500">Gründer & GF · <span className="text-primary font-medium"><Mp /></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WAS UNS UNTERSCHEIDET ===== */}

      <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
        {/* Decorative angled accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-orange-50/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8 gap-6">
            <div>
              <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                Was uns unterscheidet
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                Nicht einfach eine Website.{' '}
                <span className="shimmer-text">Eine digitale Positionierung.</span>
              </h2>
            </div>
            <p className="hidden sm:block text-gray-400 text-sm text-right flex-shrink-0">Vier Gründe,<br />warum Ärzte uns wählen</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                img: '/features/tiefenrecherche.jpg',
                title: 'Tiefenrecherche statt Template',
                text: 'Jeder Text basiert auf echten Daten – Fachgebiet, Werdegang, Region, Mitbewerber.',
              },
              {
                img: '/features/ki-sichtbarkeit.jpg',
                title: 'KI-Sichtbarkeit statt nur Google',
                text: 'Schema Markup, semantische Inhalte und llms.txt – damit KI-Assistenten Ihre Ordination nennen.',
              },
              {
                img: '/features/rechtskonform.jpg',
                title: 'Rechtskonform ohne Ihr Zutun',
                text: 'ÖÄK, DSGVO, Impressum, Barrierefreiheit – wir kennen die Anforderungen und setzen sie um.',
              },
              {
                img: '/features/wunschpatienten.jpg',
                title: 'Wunschpatienten statt Laufkundschaft',
                text: 'Nicht mehr Patienten – die richtigen Patienten für Ihre Spezialisierung.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white shadow-sm border border-gray-100 card-hover overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <div className="relative h-28 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 25vw" quality={70} />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1.5 text-primary leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Killer-Vergleich */}
          <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm text-center">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Der Unterschied in einem Satz</p>
            <p className="text-primary font-bold text-lg sm:text-xl leading-snug">
              Andere Agenturen bauen Ihnen eine Website.
            </p>
            <p className="text-[#ff8a00] font-bold text-lg sm:text-xl leading-snug mt-1">
              Wir erhöhen die Chance deutlich, dass ChatGPT Ihre Ordination kennt und nennt.
            </p>
          </div>
        </div>
      </section>

      <KiSichtbarkeitSection />

      {/* ===== REFERENZKUNDEN-PROGRAMM ===== */}
      <section className="py-20 px-6 bg-white relative overflow-hidden" id="leistungen">
        {/* Strukturhintergrund: diagonale Punkte orange, sehr dezent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,138,0,0.045) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        {/* Ecken-Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50/60 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">

          {/* Referenzkunden-Banner – animated */}
          <ReferenzkundenSection />

          {/* Was Sie bekommen – Features ohne Preise */}
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-4 py-1.5">
              Was Sie bekommen
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-3 text-primary">
              Handgemacht. Kein Template. Kein Baukasten.
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Jede Ordination ist anders – deshalb wird jede Website individuell entwickelt.
            </p>
          </div>

          {/* Feature Cards – kein Preis, nur Wert */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Karte 1: Praxis-Website */}
            <div className="bg-white shadow-md p-5 border border-gray-200 card-hover flex flex-col" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
              <h3 className="text-lg font-bold text-primary mb-1.5">Praxis-Website</h3>
              <p className="text-gray-500 mb-3 text-xs leading-relaxed">
                Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – individuell
                entwickelt, ohne Kompromisse bei Qualität und Compliance.
              </p>
              <ul className="space-y-1.5 text-gray-700 flex-1 text-xs">
                {[
                  'Bis 5 Seiten (Home, Über mich, Leistungen, Kontakt, Impressum)',
                  'Individuelles Design – kein Template, kein Baukasten',
                  'Local SEO & Google Maps Einbindung',
                  'DSGVO- & ÖÄK-konform',
                  'Basis Schema Markup (strukturierte Daten)',
                  'Mobile-Optimierung & SSL',
                  'Online-Terminbuchung (Anbindung)',
                  'Cookie-Banner & Impressum',
                  'Einschulung – Inhalte selbst ändern',
                  'Domain-Verbindung & Hosting-Setup',
                  '12 Monate technische Betreuung inklusive',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3 transition-all hover:scale-105 text-sm mt-5">
                Jetzt anfragen
              </a>
            </div>

            {/* Karte 2: Digitale Positionierung */}
            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] shadow-2xl p-5 relative card-hover flex flex-col neon-border-orange overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
              {/* EMPFOHLEN shield – top-right, within clip-path bounds */}
              <div className="absolute top-3 right-5 bg-[#ff8a00] text-white text-[9px] font-black px-3 py-1.5 shadow-lg tracking-[0.2em] whitespace-nowrap" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)' }}>
                ★ EMPFOHLEN
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5 pr-16 sm:pr-28">Digitale Positionierung</h3>
              <p className="text-blue-200 mb-3 text-xs leading-relaxed">
                Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen – in Google
                UND in KI-Systemen wie ChatGPT und Perplexity.
              </p>
              <ul className="space-y-1.5 text-blue-100 flex-1 text-xs">
                {[
                  'Alles aus Praxis-Website, plus:',
                  'Bis 10 Seiten (inkl. FAQ, Spezialisierungen, Ablauf)',
                  'Tiefenrecherche: Fachgebiet, Wettbewerber, Region',
                  'Zielgruppenanalyse (Wunschpatienten-Profil)',
                  'Maßgeschneiderte Texte basierend auf Recherche',
                  'KI-Readiness: Erweiterte strukturierte Daten',
                  'llms.txt Implementierung',
                  'KI-Sichtbarkeitsanalyse (Vorher / Nachher)',
                  'FAQ-System (reduziert Routine-Anrufe)',
                  '12 Monate technische Betreuung inklusive',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 border border-white/20 p-3 mt-3 mb-3 text-xs text-blue-200 flex items-start gap-2">
                <span className="text-[#ffaa40] flex-shrink-0 mt-0.5">＋</span>
                <span><span className="text-[#ffaa40] font-semibold">Optional:</span> KI-Telefonassistent zubuchbar</span>
              </div>
              <a href="#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3 transition-all hover:scale-105 text-sm">
                Jetzt anfragen
              </a>
            </div>
          </div>

          {/* Ärztezentren Strip */}
          <div className="overflow-hidden border border-slate-200 bg-[#0f1623] relative" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              <div className="p-4 sm:w-48 lg:w-56 bg-gradient-to-br from-[#1a2845] to-[#0f1623] border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center gap-1.5">
                <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-[0.3em]">3 Plätze im Programm</span>
                <h3 className="text-base font-bold text-white leading-snug">Ärztezentren &amp; PVEs</h3>
                <p className="text-white/40 text-xs leading-relaxed">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
              </div>
              <div className="flex-1 p-4 flex items-center">
                <div className="flex flex-wrap gap-1.5">
                  {['Zentrum-Strategie', 'Schema-Architektur', 'KI-Readiness', 'Arzt-Profilseiten', 'llms.txt', 'Mehrsprachigkeit (opt.)', 'Technische Betreuung'].map((f) => (
                    <span key={f} className="text-xs text-white/60 bg-white/5 border border-white/10 px-2.5 py-1">{f}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 sm:w-44 lg:w-52 border-t sm:border-t-0 sm:border-l border-white/10 flex flex-col justify-center gap-3 text-center">
                <a href="#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-2.5 transition-all text-sm">
                  Jetzt bewerben
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROZESS ===== */}
      <section className="py-12 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(30,58,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 mb-2">
                Ablauf
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                In vier Schritten zu Ihrer digitalen Praxis-Präsenz.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            {[
              { nr: '01', title: 'Erstcheck', sub: '15 Min, kostenlos', text: 'Wir klären, ob wir zueinander passen – Fachrichtung, Ziele. Unverbindlich.', stat: '15', statLabel: 'Min.', bg: 'from-blue-900 to-[#0a0f1e]' },
              { nr: '02', title: 'Strategiegespräch', sub: '30 Min', text: 'Analyse Ihrer Ordination, Wettbewerb und Zielgruppe. Daraus entsteht ein konkretes Konzept.', stat: '30', statLabel: 'Min.', bg: 'from-[#112080] to-[#0a0f1e]' },
              { nr: '03', title: 'Umsetzung', sub: '100 % individuell', text: 'Texte, Design, Technik und KI-Readiness – individuell entwickelt. Kein Template.', stat: '100', statLabel: '%', bg: 'from-[#1e3ab8] to-[#0a0f1e]' },
              { nr: '04', title: 'Launch & Betreuung', sub: '12 Monate', text: 'Ihre Website geht online. Wir überwachen die KI-Sichtbarkeit und halten alles aktuell.', stat: '12', statLabel: 'Mo.', bg: 'from-[#ff8a00]/80 to-[#0a0f1e]' },
            ].map((step) => (
              <div key={step.nr} className="relative flex flex-col">
                {/* Stat card */}
                <div
                  className={`relative h-24 overflow-hidden mb-3 bg-gradient-to-br ${step.bg} shadow-md`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <div className="absolute top-2 left-2 bg-white/10 border border-white/20 text-white text-[9px] font-bold px-1.5 py-0.5">
                    {step.nr}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-white leading-none">{step.stat}</span>
                    <span className="text-white/55 text-[9px] uppercase tracking-wider mt-0.5">{step.statLabel}</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-primary leading-snug">{step.title}</h3>
                <p className="text-[#ff8a00] text-[10px] font-medium mb-1">{step.sub}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KONTAKT / CTA ===== */}
      <section
        className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden"
        id="kontakt"
      >
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 tech-grid opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff8a00]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/3 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Info */}
            <div>
              <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 mb-6" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                100 % kostenlos · kein Konto nötig
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Wie sichtbar ist Ihre Ordination<br />für ChatGPT & Perplexity?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 leading-relaxed">
                Wir analysieren kostenlos, ob Ihre Ordination in KI-Systemen gefunden wird.
                Das Ergebnis besprechen wir im Ersttelefonat – und Sie erhalten die vollständige Auswertung danach per Mail.
              </p>

              {/* Hardfacts – kantige skewed badges mit Hover-Float */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  { icon: '✓', label: 'Kostenlos & unverbindlich' },
                  { icon: '✓', label: 'Auswertung per Mail' },
                  { icon: '✓', label: 'Antwort in 1 Werktag' },
                ].map((t) => (
                  <div key={t.label} className="group cursor-default transition-transform duration-200 hover:-translate-y-0.5">
                    <span
                      className="inline-block bg-white/10 border border-white/25 text-white/90 text-xs font-semibold px-4 py-2 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-200"
                      style={{ transform: 'skewX(-10deg)', display: 'inline-block' }}
                    >
                      <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>
                        <span className="text-[#ff8a00] mr-1.5">{t.icon}</span>{t.label}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {/* Phone Kevin */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+436641915447" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">+43 664 191 5447</a>
                    <p className="text-blue-300 text-xs">Kevin Hofbauer</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:office@mypraxis.at" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">office@mypraxis.at</a>
                    <p className="text-blue-300 text-xs">Mo–Fr, 09:00–18:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Trust badges – kantig skewed */}
              <div className="mt-10 flex flex-wrap gap-2.5">
                {[
                  { label: 'Kostenlos & unverbindlich' },
                  { label: '30 Min. Erstgespräch' },
                  { label: 'Antwort innerhalb 1 Werktag' },
                ].map((b) => (
                  <div key={b.label} className="group cursor-default transition-transform duration-200 hover:-translate-y-0.5">
                    <span
                      className="inline-block text-blue-200 text-xs bg-white/8 border border-white/15 px-3 py-1.5 group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-md transition-all duration-200"
                      style={{ transform: 'skewX(-8deg)', display: 'inline-block' }}
                    >
                      <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>✓ {b.label}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Funnel */}
            <div className="relative">
              {/* Adler-Badge – oben rechts */}
              <div className="absolute -top-6 -right-3 z-20 pointer-events-none select-none">
                <div className="relative w-[88px] h-[88px] overflow-hidden shadow-2xl shadow-black/40" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)', border: '2px solid rgba(255,138,0,0.55)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/contact/adler.jpg" alt="Adler mit Brief" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
                </div>
                <div className="mt-1 text-center">
                  <span className="inline-block bg-[#ff8a00] text-white text-[9px] font-black px-2 py-0.5 tracking-wide" style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}>
                    KONTAKT
                  </span>
                </div>
              </div>

            <div className="border border-white/30 bg-white shadow-2xl overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}>
              {/* Card Header */}
              <div className="bg-[#1e3ab8] px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg leading-none">Kontaktformular</p>
                  <p className="text-white/65 text-xs mt-0.5">Kostenlos & unverbindlich · Antwort in 1 Werktag</p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-gray-900 font-bold text-xl mb-6">Gratis KI-Check anfordern</h3>
                {/* Persönlicher Brief von Kevin */}
                <div className="relative mb-6 overflow-hidden border border-[#1e3ab8]/20 bg-[#f5f7ff]" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#1e3ab8]/50 font-semibold mb-3">Persönliche Nachricht</p>
                    <p className="text-gray-700 text-sm leading-relaxed italic mb-4" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                      „Ich nehme mir für jede Anfrage persönlich Zeit – nicht weil ich muss, sondern weil ich nur so verstehen kann, was Ihre Ordination wirklich braucht. Kein Verkaufsgespräch. Nur ein ehrliches Gespräch."
                    </p>
                    <div className="flex items-center gap-3">
                      <Image src="/kevin.webp" alt="Kevin Hofbauer" width={36} height={36} className="object-cover flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }} />
                      <div>
                        <p className="text-gray-900 text-sm font-semibold leading-none" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>Kevin Hofbauer</p>
                        <p className="text-gray-500 text-[10px] mt-0.5">Gründer · mypraxis.at</p>
                      </div>
                    </div>
                  </div>
                </div>
                <MainPageFunnel />
              </div>
            </div>
            </div>{/* end relative wrapper for Adler-badge */}
          </div>
        </div>
      </section>

      {/* ===== FAQ + ÜBER UNS (2 Spalten) ===== */}
      <section className="py-14 px-6 bg-gray-50 relative overflow-hidden" id="faq">
        {/* Strukturhintergrund: feines Kreuzgitter, blau dezent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(30,58,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.04) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        {/* Diagonaler Akzent oben-links */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* LEFT: FAQ – 2/3 */}
            <div className="lg:col-span-2">
              <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 mb-3">
                FAQ
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-5 text-primary">
                Häufige Fragen
              </h2>
              <div className="space-y-2">
                {[
                  {
                    q: 'Was kostet eine Website für Ärzte in Österreich?',
                    a: 'Die Konditionen besprechen wir im kostenlosen Erstgespräch – individuell, ohne Standardpreisliste. Jede Ordination ist anders, und das spiegelt sich auch in der Investition wider.',
                  },
                  {
                    q: 'Was ist KI-Readiness und warum brauche ich das?',
                    a: 'KI-Readiness beschreibt, wie gut Ihre Website für KI-Systeme wie ChatGPT und Perplexity aufbereitet ist. Saubere Struktur und strukturierte Daten erhöhen die Chance deutlich, dass Ihre Ordination dort korrekt genannt wird.',
                  },
                  {
                    q: 'Wie lange dauert es, bis meine Website bei Google sichtbar ist?',
                    a: 'Zwischen 2 und 12 Wochen, abhängig von Fachrichtung, Region und Wettbewerb. KI-Systeme lesen strukturierte Daten oft innerhalb weniger Tage aus.',
                  },
                  {
                    q: 'Was bedeutet Referenzkunde konkret?',
                    a: 'Als Referenzkunde erhalten Sie vergünstigte Konditionen und enge Begleitung. Im Gegenzug geben Sie die Zusammenarbeit später als Referenz frei – z. B. durch ein Testimonial oder eine Fallstudie. Details besprechen wir im Erstgespräch.',
                  },
                  {
                    q: 'Ist die Website DSGVO-konform und ÖÄK-konform?',
                    a: 'Ja. Cookiebanner, Datenschutzerklärung, EU-Hosting, ÖÄK-konforme Texte ohne marktschreierische Werbung. Unsere Kunden hatten bisher keine Beanstandungen.',
                  },
                ].map((faq, i) => (
                  <details key={i} className="bg-white border border-gray-200 shadow-sm group overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
                    <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center p-4 text-sm">
                      {faq.q}
                      <span className="ml-4 flex-shrink-0 w-5 h-5 bg-blue-50 flex items-center justify-center text-secondary font-bold text-sm group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="text-gray-600 px-4 pb-4 leading-relaxed text-sm">{faq.a}</p>
                  </details>
                ))}
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a href="/faq" className="inline-flex items-center gap-2 text-[#1e3ab8] hover:text-[#1a33a8] font-semibold text-sm border border-[#1e3ab8]/20 hover:border-[#1e3ab8]/40 bg-white px-4 py-2 transition-all" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                  📋 Alle Fragen & Antworten →
                </a>
                <a href="#kontakt" className="inline-flex items-center gap-2 text-[#ff8a00] hover:text-[#e67a00] font-semibold text-sm transition-colors">
                  Frage nicht dabei? Schreiben Sie uns →
                </a>
              </div>
            </div>

            {/* RIGHT: Über uns – 1/3, kompakt */}
            <div>
              <span className="inline-block bg-blue-50 text-secondary text-xs font-semibold px-3 py-1 mb-3">
                Über uns
              </span>
              <h3 className="text-lg font-bold mb-4 text-primary leading-snug">
                Wer steckt hinter <Mp />?
              </h3>
              <div className="bg-white border border-gray-100 shadow-sm p-5 mb-4" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff8a00] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Auf niedergelassene Ärzte spezialisierte Digitalagentur in Österreich & Deutschland</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff8a00] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Kevin Hofbauer e.U., Sitz in Niederösterreich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff8a00] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Rechtssichere Websites nach ÖÄK & DSGVO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff8a00] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>KI-Sichtbarkeit in ChatGPT, Perplexity & Google AI</span>
                  </li>
                </ul>
              </div>
              {/* Kevin mini card */}
              <div className="bg-white border border-gray-100 shadow-sm overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <div className="flex items-center gap-3 p-4">
                  <Image
                    src="/kevin.webp"
                    alt="Kevin Hofbauer"
                    width={48}
                    height={48}
                    className="object-cover object-top flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Kevin Hofbauer</p>
                    <p className="text-xs text-gray-500">Gründer & GF · <span className="text-primary font-medium"><Mp /></span></p>
                    <a href="tel:+436641915447" className="text-xs text-[#ff8a00] hover:underline mt-0.5 block">+43 664 191 5447</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BLOG VORSCHAU ===== */}
      <BlogCarousel posts={blogPosts} />

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 bg-[#111827] text-gray-400">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 text-xs sm:text-sm leading-relaxed">
            <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich und Deutschland.
            Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich. Wir erstellen rechtssichere
            Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen
            und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI
            Overviews.
          </p>
          <p className="mb-4 text-xs text-gray-600 leading-relaxed">
            Wir betreuen Ärztinnen und Ärzte aller Fachrichtungen: Allgemeinmedizin, Innere Medizin, Orthopädie,
            Kardiologie, Dermatologie, Gynäkologie, HNO, Urologie, Neurologie, Chirurgie, Augenheilkunde,
            Kinderheilkunde, Zahnmedizin, Alternativmedizin und alle weiteren Fachrichtungen.
          </p>
          <div className="text-xs text-gray-600 mb-6">
            <span>Hauptplatz 12, TOP 24, 3902 Vitis</span>
            <span className="mx-2">·</span>
            <a href="tel:+436641915447" className="hover:text-gray-400 transition-colors">
              +43 664 191 5447
            </a>
            <span className="mx-2">·</span>
            <span>Mo–Fr, 09:00–18:00 Uhr</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm border-t border-gray-800 pt-6">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="mailto:office@mypraxis.at" className="hover:text-white transition-colors">
              office@mypraxis.at
            </a>
            <div className="flex items-center gap-3 sm:ml-auto">
              <a
                href="https://www.linkedin.com/in/kevin-hofbauer-b2660b274/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kevin Hofbauer auf LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100035353760113"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kevin Hofbauer auf Facebook"
                className="hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <span className="text-gray-600">© {new Date().getFullYear()} Kevin Hofbauer e.U.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
