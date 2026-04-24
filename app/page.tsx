import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MainPageFunnel from '@/components/MainPageFunnel'
import { getSortedPostsData } from '@/lib/blog'
import BlogCarousel from '@/components/BlogCarousel'
import KiSystemeMarquee from '@/components/KiSystemeMarquee'
import KiSichtbarkeitSectionV2 from '@/components/KiSichtbarkeitSectionV2'
import ZielgruppenSection from '@/components/ZielgruppenSection'
import DemoShowcase from '@/components/DemoShowcase'
import QrCode from '@/components/QrCode'

export const metadata: Metadata = {
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
        name: 'In vier Schritten zur fachgebiet-spezifischen Arzt-Website',
        description: 'So läuft die Zusammenarbeit mit mypraxis.at ab – von der ersten Analyse bis zur 12-monatigen Betreuung nach dem Launch.',
        totalTime: 'P4W',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Erstgespräch', text: 'Kostenloses 30-minütiges Erstgespräch mit Kevin: Arbeitsweise, Patient:innen-Konstellation, Positionierung — auf Basis eines Fachgebiet-Strategiepapiers (17-40 Seiten).', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 2, name: 'Kurz-Konzept', text: 'Individualisiertes Kurz-Konzept: Patient:innen-Personas, Wettbewerb im Einzugsgebiet, Content-Struktur, technische Empfehlung. Ergebnis liegt typischerweise innerhalb von 24 Stunden vor.', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 3, name: 'Produktion', text: 'Website-Produktion in 5 bis 7 Tagen. Technisch sauber, BFSG-konform, fachgebiet-spezifisch positioniert. Texte nach Patient-Persona. Demo oft schon nach 4-5 Tagen sichtbar.', url: 'https://www.mypraxis.at/#kontakt' },
          { '@type': 'HowToStep', position: 4, name: 'Begleitung', text: '12 Monate technische Betreuung inklusive nach Launch — Updates, Sicherheit, kleine Inhalts-Änderungen. Auf Wunsch länger verlängerbar. Kein Abo-Zwang.', url: 'https://www.mypraxis.at/#kontakt' },
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

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5" style={{ lineHeight: '1.2' }}>
            <span className="block text-xs sm:text-sm font-semibold text-[#ff8a00]/75 uppercase tracking-[0.22em] mb-3">
              Praxis-Websites für Ärzt:innen in Österreich &amp; Deutschland
            </span>
            Sichtbar für die Patient:innen,
            <span className="text-[#ff8a00]"><br className="hidden sm:block" /> die zu Ihnen passen.</span>
          </h1>

          <p className="text-base md:text-xl text-blue-100 mb-2 max-w-2xl mx-auto leading-relaxed">
            Sie sind Ärzt:in — und online zugleich Dienstleister:in für Ihre Patient:innen. Wir helfen Ihnen,
            gefunden zu werden — Fachgebiet für Fachgebiet, auf Basis eigener Strategiepapiere.
          </p>

          <p className="text-blue-300/80 text-sm mb-6 max-w-lg mx-auto">
            Damit Ihre Zeit bei den Patient:innen bleibt.
          </p>

          {/* Mobile: Buttons untereinander */}
          <div className="flex flex-col sm:flex-row lg:hidden justify-center items-center gap-4 mb-8">
            <a
              href="#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-orange-600 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 transition-all shadow-xl hover:shadow-orange-500/40 border border-orange-300/40 hover:-translate-y-0.5"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Erstgespräch mit Kevin anfragen ↓</span>
            </a>
            <a
              href="#demos"
              className="glass-card hover:bg-white/20 text-white font-semibold px-8 py-3 sm:py-4 text-base sm:text-lg transition-all border border-white/35 hover:border-white/60 hover:-translate-y-0.5"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Demo-Stile ansehen</span>
            </a>
          </div>

          {/* Desktop: CTA-Button + QR-Code nebeneinander mit Abstand */}
          <div className="hidden lg:flex justify-center items-center gap-12 mb-8">
            <a
              href="#kontakt"
              className="inline-block bg-[#ff8a00] hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 transition-all shadow-xl hover:shadow-orange-500/40 border border-orange-300/40 hover:-translate-y-0.5"
              style={{ transform: 'skewX(-8deg)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>Erstgespräch mit Kevin anfragen ↓</span>
            </a>
            <QrCode />
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
              <div className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-3">
                Das Problem
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-primary leading-tight">
                Sie sind Experte in Ihrem Fach.
              </h2>
              <p className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                <span className="shimmer-text">Online merkt man das nicht.</span>
              </p>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Patient:innen suchen heute mit Google, ChatGPT und Perplexity — <em>bevor</em> sie das erste Mal zum Hörer greifen. Wer Sie noch nicht kennt, entscheidet in <strong className="text-primary">drei Sekunden online</strong>. Und nicht immer für die beste Ordination, sondern für die sichtbare.
              </p>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Sie wollen, dass Patient:innen <strong className="text-primary">gut informiert</strong> zu Ihnen kommen — und verstehen, was Ihre Arbeit einzigartig macht. Dass sie sich <strong className="text-primary">in einer Geschichte wiederfinden</strong>, nicht in einer Leistungsliste. Dass sie beim Lesen denken: <em>„Genau hier bin ich richtig."</em>
              </p>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Stattdessen konkurrieren Sie online mit Template-Websites: Standardtexte ohne Fachgebiet-Tiefe, austauschbare Stockfotos, keine Persönlichkeit. Sie gewinnen oft — weil sie gefunden werden. Nicht weil sie überzeugen.
              </p>
              <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                Und dann die Pflichten: <strong>ÖÄK-Werberichtlinie, DSGVO, Barrierefreiheitsgesetz</strong> seit Juni 2025. Wichtig für Patient:innen-Schutz. Zusätzlicher Aufwand neben dem Praxis-Alltag.
              </p>
              <p className="text-sm font-semibold text-primary leading-relaxed">
                Sie haben Medizin studiert — nicht Online-Marketing. Wir bringen das zusammen: Fachgebiet-Tiefe, damit Ihre Expertise online sichtbar wird. Rechtssicher, damit Sie ruhig schlafen. Genau auf Ihr Budget zugeschnitten.
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
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-2">
              Was uns unterscheidet
            </span>
            <h2 className="text-lg md:text-xl font-bold text-[#112080] leading-snug max-w-2xl mx-auto">
              Nicht einfach eine Website. Eine digitale Positionierung.
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Vier Gründe, warum Ärzt:innen uns wählen — alle vier basieren auf unserem Fachgebiet-Strategiepapier (17 bis 40 Seiten).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                img: '/features/tiefenrecherche.jpg',
                title: 'Tiefenrecherche statt Template',
                text: 'Aus dem Strategiepapier: Personas, Werdegang, Region, Mitbewerber — jeder Text basiert auf echten Daten.',
              },
              {
                img: '/features/ki-sichtbarkeit.jpg',
                title: 'KI-Sichtbarkeit statt nur Google',
                text: 'Schema Markup, semantische Inhalte und llms.txt — damit ChatGPT, Perplexity & Co. Ihre Ordination nennen.',
              },
              {
                img: '/features/rechtskonform.jpg',
                title: 'Rechtskonform ohne Ihr Zutun',
                text: 'ÖÄK, DSGVO, BFSG, Impressum, Barrierefreiheit — kennen wir, setzen wir um, kein Aufpreis.',
              },
              {
                img: '/features/wunschpatienten.jpg',
                title: 'Wunschpatient:innen statt Laufkundschaft',
                text: 'Aus dem Strategiepapier abgeleitet: die richtigen Patient:innen für Ihre Spezialisierung — nicht alle, nur die passenden.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all overflow-hidden flex flex-col" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <div className="relative h-28 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 25vw" quality={70} />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-sm font-bold mb-1.5 text-[#112080] leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statt Killer-Vergleich: nur dezenter Link zu allen Fachgebieten */}
          <div className="mt-6 flex justify-center">
            <a
              href="/fachgebiete"
              className="inline-flex items-center gap-1.5 text-[#1e3ab8] hover:text-[#112080] text-xs font-semibold border-b border-[#1e3ab8]/40 hover:border-[#1e3ab8] pb-0.5 transition-colors"
            >
              Alle 12 Fachgebiete im Detail →
            </a>
          </div>
        </div>
      </section>

      {/* ===== §4 VERGLEICHE — Praxis-Metapher, aufklappbar, nebeneinander, kantiger Stil ===== */}
      <section className="py-12 md:py-14 px-6 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto">
          {/* Header dezent */}
          <div className="text-center mb-8">
            <p className="text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-2">
              Zwei Vergleiche
            </p>
            <h2 className="text-lg md:text-xl font-bold text-[#112080] leading-snug max-w-2xl mx-auto">
              Was Ärzt:innen aus dem Alltag kennen — und warum Websites genauso funktionieren.
            </h2>
            <p className="text-[12px] text-gray-500 mt-2 italic">Klicken zum Aufklappen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Vergleich 1 — Ordination als Metapher */}
            <div className="bg-white border-2 border-[#112080]/15 overflow-hidden shadow-[6px_6px_0_rgba(17,32,128,0.08)] flex flex-col">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/lp-vgl-praxis-leer.jpg" alt="Leerer Behandlungsraum ohne Ausstattung" className="w-full h-40 md:h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-2">
                    <span className="text-[9px] uppercase tracking-widest text-red-300 font-bold block leading-none">Was Sie kennen</span>
                    <div className="text-xs md:text-sm font-bold text-white leading-tight mt-0.5">Praxis ohne Ausstattung</div>
                  </div>
                </div>
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/lp-vgl-praxis-einladend.jpg" alt="Einladende, warm eingerichtete Arztpraxis" className="w-full h-40 md:h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-2">
                    <span className="text-[9px] uppercase tracking-widest text-[#ffaa40] font-bold block leading-none">Was Patient:innen brauchen</span>
                    <div className="text-xs md:text-sm font-bold text-white leading-tight mt-0.5">Einladende Ordination</div>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold mb-1.5">Vergleich 1</p>
                <h3 className="text-base md:text-lg font-bold text-[#112080] leading-snug mb-2">Eine Website ist wie eine Ordination</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                  Vier Wände und Schild wirken vollständig. Aber sobald jemand reinkommt — kein Empfang, keine Geräte, keine warme Atmosphäre. Eine Website ohne Struktur ist genauso: sie existiert, aber sie behandelt niemanden. Was wirklich drin sein muss:
                </p>
                <ul className="space-y-1.5 text-[13px] text-gray-700 flex-1">
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Empfang + Hero</strong> — erster Eindruck. In 3 Sekunden: sind Patient:innen richtig hier?</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Behandlungsräume</strong> — Leistungen + Fachgebiet-Tiefe statt Einheits-Template.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Rezeption</strong> — Kontakt + Terminbuchung. Kommen Anfragen an oder versickern sie?</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Diagnostik</strong> — Personas + Strategie. Was googeln Ihre Patient:innen wirklich?</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Stromversorgung</strong> — SEO + KI-Sichtbarkeit. Findet Google Sie? Empfiehlt ChatGPT Sie oder jemand anderen?</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Hygiene + Zulassung</strong> — BFSG, DSGVO, ÖÄK-Werberichtlinie ab Tag 1 dicht.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Praxisleitung</strong> — 12 Monate Betreuung inklusive. Kein Abo-Zwang.</span></li>
                </ul>
                <p className="text-[12px] text-gray-500 leading-relaxed mt-4 pt-3 border-t border-gray-100 italic">
                  Ohne Ausstattung behandelt eine Praxis niemanden. Ohne Struktur eine Website auch nicht.
                </p>
              </div>
            </div>

            {/* Vergleich 2 — Onlineauftritt + Sichtbarkeit */}
            <div className="bg-white border-2 border-[#112080]/15 overflow-hidden shadow-[6px_6px_0_rgba(17,32,128,0.08)] flex flex-col">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/lp-vgl-website-alt.jpg" alt="Veraltete Website aus 2010 auf altem Desktop-Monitor" className="w-full h-40 md:h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-2">
                    <span className="text-[9px] uppercase tracking-widest text-red-300 font-bold block leading-none">Heute oft</span>
                    <div className="text-xs md:text-sm font-bold text-white leading-tight mt-0.5">Website aus 2010 ohne Substanz</div>
                  </div>
                </div>
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/lp-vgl-patienten-smartphone.jpg" alt="Lächelnde Patient:innen mit Smartphone und Laptop auf schöner Praxis-Website" className="w-full h-40 md:h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-2">
                    <span className="text-[9px] uppercase tracking-widest text-[#ffaa40] font-bold block leading-none">Ihr Onlineauftritt</span>
                    <div className="text-xs md:text-sm font-bold text-white leading-tight mt-0.5">Sichtbar. Einladend. Auffindbar.</div>
                  </div>
                </div>
              </div>
              <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold mb-1.5">Vergleich 2</p>
                <h3 className="text-base md:text-lg font-bold text-[#112080] leading-snug mb-2">Ihr Onlineauftritt — was Patient:innen 2026 erwarten</h3>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                  Viele Arzt-Websites sind technisch aus 2010, optisch aus 2015 — und unsichtbar für Google und ChatGPT. Patient:innen in 2026 suchen am Smartphone, fragen KI-Systeme und entscheiden binnen 3 Sekunden. Was heute dabei sein muss:
                </p>
                <ul className="space-y-1.5 text-[13px] text-gray-700 flex-1">
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Mobil-First</strong> — 70 % suchen am Smartphone. Ihre Seite muss dort überzeugen.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>In Google-Maps + Rich-Results sichtbar</strong> — Schema-Markup sorgt dafür, dass Google Sie als Arztpraxis erkennt.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>KI-Sichtbarkeit</strong> — llms.txt + strukturierte Daten, damit ChatGPT &amp; Perplexity Sie korrekt empfehlen.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Online-Terminbuchung 24/7</strong> — auf Wunsch integrierbar. Patient:innen buchen selbst.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Online-Rezept-Bestellung</strong> — wenn gewünscht. Entlastung bei Dauer-Medikamenten.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>FAQ mit 15 häufigsten Fragen</strong> — signifikant weniger Standardfragen, mehr Zeit fürs Wesentliche.</span></li>
                  <li className="flex gap-3"><span className="text-[#ff8a00] font-bold flex-shrink-0">·</span><span><strong>Mehrsprachige Info-Seiten</strong> — Patient:innen verstehen, was Sie anbieten, bevor sie kommen.</span></li>
                </ul>
                <p className="text-[12px] text-gray-500 leading-relaxed mt-4 pt-3 border-t border-gray-100 italic">
                  Mehr Sichtbarkeit für Sie — und bessere Erfahrung für Ihre Patient:innen. Das eine bedingt das andere.
                </p>
              </div>
            </div>

          </div>

          {/* Closing dezent */}
          <p className="text-center text-gray-600 text-xs italic mt-6 max-w-xl mx-auto">
            Online entscheidet sich, ob die richtigen Patient:innen Sie finden — und ob Sie entlastet starten oder im Telefon-Marathon.
          </p>
        </div>
      </section>

      {/* V2: Demo-Galerie zuerst — User sieht erst die Form, dann die 3 Wege */}
      <DemoShowcase />

      {/* ===== REFERENZKUNDEN-PROGRAMM (Zielgruppen-Karten) ===== */}
      <section className="py-12 md:py-14 px-6 bg-white relative overflow-hidden" id="leistungen">
        {/* Strukturhintergrund: diagonale Punkte orange, sehr dezent */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,138,0,0.045) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        {/* Ecken-Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50/70 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50/60 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">

          {/* Was Sie bekommen – 3 Zielgruppen-Pakete, gleichberechtigt, alle Budget-Anfrage */}
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold">
              Was Sie bekommen
            </span>
            <h2 className="text-lg md:text-xl font-bold mt-3 text-[#112080]">
              Drei Wege. Eine Qualität. Maßgeschneidert nach Budget.
            </h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Wir machen keine Pauschalpreise. Jedes Angebot wird im persönlichen Erstgespräch nach Ihrem Budget und Ihren Zielen erstellt.
            </p>
          </div>

          {/* 3 Zielgruppen-Karten — Budget-orientiert, keine festen Pakete */}
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              {
                title: 'Kassenärzt:innen',
                href: '/fuer-kassenaerzte',
                sub: 'Entlastung für die volle Ordination — Patient:innen kommen vorbereitet, Sie konzentrieren sich auf Medizin.',
                themen: 'Sprechzeiten · Rezept-Bestellung · Mehrsprachigkeit · Impfservice · BFSG-konform · Telefon-Entlastung',
              },
              {
                title: 'Privat- und Wahlärzt:innen',
                href: '/fuer-privatarzt',
                sub: 'Positionierung, die Wunschpatient:innen anzieht — Fachgebiet-spezifisch, mit Tiefe statt Hochglanz.',
                themen: 'Positionierung · Persona-Tiefe · Honorar-Transparenz · Erstgespräch-Block · KI-Sichtbarkeit · Mehrsprachig',
              },
              {
                title: 'Ärztezentren & PVEs',
                href: '/fuer-aerztezentren',
                sub: 'Digitale Infrastruktur für mehrere Ärzt:innen unter einem Dach — Patient:innen-Reisen sichtbar gemacht.',
                themen: 'Einzel-Profile · Fachrichtungs-Matrix · Patient:innen-Reisen · Überweiser-Bereich · Schema-Architektur · KMU.DIGITAL',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white shadow-md p-5 border border-[#1e3ab8]/20 hover:border-[#1e3ab8]/50 flex flex-col transition-all hover:shadow-xl"
                style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}
              >
                <h3 className="text-lg font-bold text-primary mb-1.5">{card.title}</h3>
                <p className="text-gray-500 mb-4 text-xs leading-relaxed">{card.sub}</p>

                <div className="bg-[#f3f1ec] border-l-2 border-[#ff8a00]/60 pl-3 py-2 mb-4 flex-1">
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Mögliche Themen
                  </div>
                  <p className="text-[11px] text-gray-700 leading-relaxed">{card.themen}</p>
                </div>

                <p className="text-[11px] text-gray-500 italic mb-3 leading-snug">
                  Was davon konkret in Frage kommt, hängt von Ihrem Budget und Ihren Zielen ab — das klären wir persönlich.
                </p>

                <a
                  href="#kontakt"
                  className="inline-block text-center bg-[#112080] hover:bg-[#1e3ab8] text-white font-semibold text-xs px-4 py-2.5 transition-all w-full mb-2"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                >
                  Budget besprechen →
                </a>
                <Link
                  href={card.href}
                  className="text-center text-[11px] text-gray-500 hover:text-[#112080] font-semibold transition-colors"
                >
                  Mehr Details ansehen
                </Link>
              </div>
            ))}
          </div>

          {/* Erklär-Block + dezenter CTA rechts daneben */}
          <div className="bg-white border border-gray-200 px-6 py-5 max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
            <p className="text-sm text-gray-700 leading-relaxed md:flex-1">
              <span className="font-semibold text-[#112080]">Warum kein Pakete-System:</span>{' '}
              Eine Kassenordination in Wien-Floridsdorf braucht andere Inhalte als ein Ärztezentrum in Salzburg. Wir besprechen
              im Erstgespräch Ihr Budget, Ihre Ziele und Ihren Praxis-Alltag — daraus erstellen wir Ihr individuelles Angebot.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-1.5 text-[#1e3ab8] hover:text-[#112080] text-xs font-semibold border-b border-[#1e3ab8]/40 hover:border-[#1e3ab8] pb-0.5 whitespace-nowrap flex-shrink-0 transition-colors"
            >
              Erstgespräch vereinbaren →
            </a>
          </div>
        </div>
      </section>

      {/* V2: KI-Sichtbarkeit als finaler Beweis direkt vor Kontakt — mit Customer-Test als Default */}
      <KiSichtbarkeitSectionV2 />

      {/* ===== PROZESS ===== */}
      <section className="py-12 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(30,58,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="max-w-5xl mx-auto relative z-10">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-2">
                Ablauf
              </span>
              <h2 className="text-lg md:text-xl font-bold text-[#112080] leading-tight">
                Vier Schritte — schnell, intensiv, persönlich begleitet.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            {[
              { nr: '01', title: 'Erstgespräch', sub: '30 Min · kostenlos', text: 'Persönliches Gespräch mit Kevin. Wir verstehen Ihre Arbeitsweise, Ihre Patient:innen-Konstellation, Ihre Positionierung. Grundlage: Ihr Fachgebiet-Strategiepapier.', stat: '30', statLabel: 'Min.', bg: 'from-blue-900 to-[#0a0f1e]' },
              { nr: '02', title: 'Kurz-Konzept', sub: 'innerhalb 24 Stunden', text: 'Ihr individualisiertes Kurz-Konzept — Patient:innen-Personas, Wettbewerbs-Ausschnitt aus Ihrem Einzugsgebiet, Content-Struktur, technische Empfehlung. Bevor eine Zeile Code entsteht.', stat: '24', statLabel: 'Std.', bg: 'from-[#112080] to-[#0a0f1e]' },
              { nr: '03', title: 'Produktion', sub: '5–7 Tage', text: 'Website-Bau. Technisch sauber, BFSG-konform, positioniert auf Ihr Fachgebiet. Texte nach Patient-Persona, nicht nach Schema. Demo oft schon nach 4-5 Tagen sichtbar.', stat: '5–7', statLabel: 'Tage', bg: 'from-[#1e3ab8] to-[#0a0f1e]' },
              { nr: '04', title: 'Begleitung', sub: '12 Monate inkl.', text: 'Nach dem Launch 12 Monate technische Betreuung ohne Aufpreis — Updates, Sicherheit, kleine Inhalte. Länger auf Wunsch jederzeit. Kein Abo-Zwang.', stat: '12+', statLabel: 'Mo.', bg: 'from-[#ff8a00]/80 to-[#0a0f1e]' },
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
        className="py-12 md:py-16 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden"
        id="kontakt"
      >
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 tech-grid opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ff8a00]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/3 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left: Info — kompakt im Stil der anderen Sektionen */}
            <div>
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#ffaa40] font-bold mb-3">
                30 Min · kostenlos · persönlich
              </span>
              <h2 className="text-lg md:text-xl font-bold leading-snug mb-3">
                Erreichen Sie schon heute die Patient:innen, die zu Ihnen passen?
              </h2>
              <p className="text-sm text-blue-100/90 mb-5 leading-relaxed">
                Wir sprechen über Ihre Ordination, Ihre Patient:innen und was Ihre Website in Ihrem Fachgebiet leisten müsste. Grundlage: unser Fachgebiet-Strategiepapier, individualisiert auf Ihre Geodaten und Ihr Einzugsgebiet. Kein Verkaufsgespräch — ein ehrliches Gespräch mit Kevin.
              </p>

              {/* Hardfacts — schlanke Liste statt fette Skew-Badges */}
              <ul className="space-y-1.5 text-sm text-white/85 mb-6">
                <li className="flex gap-2"><span className="text-[#ffaa40] font-bold">✓</span><span>Kostenlos &amp; unverbindlich</span></li>
                <li className="flex gap-2"><span className="text-[#ffaa40] font-bold">✓</span><span>Fachgebiet-spezifisch — kein Standard-Pitch</span></li>
                <li className="flex gap-2"><span className="text-[#ffaa40] font-bold">✓</span><span>Antwort innerhalb 1 Werktag</span></li>
              </ul>

              {/* Kontakt-Direktdaten kompakt */}
              <div className="space-y-2.5 border-t border-white/15 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                    <svg className="w-3.5 h-3.5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm leading-tight">
                    <a href="tel:+436641915447" className="text-white font-semibold hover:text-[#ffaa40] transition-colors">+43 664 191 5447</a>
                    <p className="text-blue-300/70 text-[11px]">Kevin Hofbauer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                    <svg className="w-3.5 h-3.5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm leading-tight">
                    <a href="mailto:office@mypraxis.at" className="text-white font-semibold hover:text-[#ffaa40] transition-colors">office@mypraxis.at</a>
                    <p className="text-blue-300/70 text-[11px]">Mo–Fr, 09:00–18:00 Uhr</p>
                  </div>
                </div>
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

            <div className="border border-white/30 bg-white shadow-xl overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
              {/* Card Header — kompakt */}
              <div className="bg-[#1e3ab8] px-5 py-3 flex items-center gap-2.5">
                <div className="w-7 h-7 bg-white/20 flex items-center justify-center flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white font-bold text-sm leading-none">Erstgespräch anfragen</p>
              </div>

              <div className="p-5">
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                  30 Min · kostenlos · persönlich. Auch wenn die Antwort am Ende ist, dass wir nicht zusammenpassen.
                </p>
                {/* Persönlicher Brief von Kevin — kompakt */}
                <div className="relative mb-4 overflow-hidden border border-[#1e3ab8]/15 bg-[#f5f7ff]" style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                  <div className="p-4 flex items-start gap-3">
                    <Image src="/kevin.webp" alt="Kevin Hofbauer" width={40} height={40} className="object-cover flex-shrink-0" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-700 text-xs leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
                        „Ich nehme mir für jede Anfrage persönlich Zeit. Kein Verkaufsgespräch — nur ein ehrliches Gespräch."
                      </p>
                      <p className="text-gray-500 text-[10px] mt-1.5">— Kevin Hofbauer · Gründer mypraxis.at</p>
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
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-3">
                FAQ
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-5 text-primary">
                Häufige Fragen
              </h2>
              <div className="space-y-2">
                {[
                  {
                    q: 'Was unterscheidet mypraxis.at von einer normalen Web-Agentur?',
                    a: 'Wir arbeiten fachgebiet-spezifisch. Pro Fachgebiet haben wir ein eigenes Strategiepapier mit 17 bis 40 Seiten Recherche geschrieben — Psychiatrie, Dermatologie, Orthopädie und acht weitere. Daraus leiten wir Patient:innen-Personas, Tonalität, Website-Struktur ab. Bevor eine Zeile Code entsteht.',
                  },
                  {
                    q: 'Warum nicht einfach ein Template wie Jimdo oder Wix?',
                    a: 'Template-Websites sehen aus wie die von Ihren Kolleg:innen. Patient:innen erkennen nicht, wofür Sie stehen. Wir bauen keine Templates — wir arbeiten pro Fachgebiet an Tonalität, Personas und Conversion-Pfaden. Das merkt man nicht auf den ersten Blick, aber bei den Anrufen, die tatsächlich kommen.',
                  },
                  {
                    q: 'Wie lange dauert der Bau einer Arzt-Website?',
                    a: 'Wir arbeiten schnell und intensiv. Erstgespräch 30 Minuten, Kurz-Konzept typisch innerhalb von 24 Stunden, Website-Produktion 5 bis 7 Tage. Eine erste Demo-Version ist oft schon nach 4-5 Tagen sichtbar. Ihr eigener Zeitaufwand: rund 2-3 Stunden verteilt auf Erstgespräch, Text-Input und Freigabe.',
                  },
                  {
                    q: 'Wie läuft das Ganze konkret ab?',
                    a: 'Vier Schritte: 1. Erstgespräch (30 Min, kostenlos) — wir verstehen Ihre Arbeitsweise und Ihre Patient:innen. 2. Kurz-Konzept (innerhalb 24 Stunden) — individualisiert auf Ihr Fachgebiet und Ihr Einzugsgebiet. 3. Produktion (5-7 Tage) — Website-Bau auf Basis des Konzepts. 4. Begleitung (12 Monate inklusive) — technische Betreuung ohne Aufpreis. Auf Wunsch länger verlängerbar, kein Abo-Zwang.',
                  },
                  {
                    q: 'Patient:innen suchen nicht nach "Urologe Wien" — was heißt das?',
                    a: 'Die wenigsten googeln "Urologe Wien" oder "Psychiater 1040". Sie googeln: "blut im urin was bedeutet das", "kann nicht schlafen seit wochen", "mutter vergisst immer mehr". Wir optimieren Ihre Website auf diese echten Suchen — fachgebiet-spezifisch, nicht generisch. Das steht auf jeder unserer Fachgebiet-Unterseiten im Detail.',
                  },
                  {
                    q: 'Was bedeutet Referenzkunde konkret?',
                    a: 'Als Referenzkunde erhalten Sie vergünstigte Konditionen und enge Begleitung. Im Gegenzug geben Sie die Zusammenarbeit später als Referenz frei — durch Testimonial oder Fallstudie, immer mit Ihrer schriftlichen Freigabe. Details besprechen wir im Erstgespräch.',
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
              <span className="inline-block text-[11px] uppercase tracking-widest text-[#ff8a00] font-bold mb-3">
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
    </main>
    </>
  )
}
