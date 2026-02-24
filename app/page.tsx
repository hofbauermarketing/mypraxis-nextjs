import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { getSortedPostsData } from '@/lib/blog'
import BlogCarousel from '@/components/BlogCarousel'
import KiSystemeMarquee from '@/components/KiSystemeMarquee'

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
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc]">

        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.webp" alt="" fill priority className="object-cover opacity-20" sizes="100vw" />
        </div>
        <div className="absolute inset-0 hero-pattern" />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid opacity-30" />

        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 right-[15%] w-80 h-80 rounded-full bg-white/5 blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/3 left-[8%] w-56 h-56 rounded-full bg-[#ff8a00]/10 blur-2xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-[35%] w-36 h-36 rounded-full bg-blue-300/10 blur-xl animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Angular corner accent – top right */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-60">
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="220,0 220,220 0,0" fill="rgba(255,255,255,0.025)" />
            <polyline points="90,0 220,0 220,130" stroke="rgba(255,138,0,0.18)" strokeWidth="1.5" fill="none" />
            <polyline points="150,0 220,0 220,70" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Angular corner accent – bottom left */}
        <div className="absolute bottom-14 left-0 pointer-events-none opacity-50">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 0,160 160,160" fill="rgba(255,255,255,0.02)" />
            <polyline points="0,100 0,160 60,160" stroke="rgba(255,138,0,0.12)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-28">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              Österreichs Spezialist für digitale Positionierung von Ärzt:innen
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-100">
            <span className="gradient-text">Ihre Ordination.</span>
            <br />
            <span className="text-white">Digital positioniert.</span>
            <br />
            <span className="text-[#ff8a00]">Von KI empfohlen.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Wir machen niedergelassene Ärztinnen und Ärzte dort sichtbar, wo Patienten heute und morgen suchen – in Suchmaschinen und KI-Systemen wie ChatGPT.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-300">
            {['✓ ÖÄK- & DSGVO-konform', '✓ Bis zu 30 % KMU.DIGITAL Förderung', '✓ KI-Readiness inklusive'].map(
              (badge) => (
                <span key={badge} className="glass-card text-white text-sm px-4 py-2 rounded-full">
                  {badge}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href="#kontakt"
              className="bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-orange-500/40 hover:scale-105 animate-glow-orange"
            >
              Erstberatung vereinbaren
            </a>
            <a
              href="#demos"
              className="glass-card hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all"
            >
              Demoseiten ansehen
            </a>
          </div>

          <p className="mt-5 text-blue-300 text-sm animate-fade-in-up delay-500">Mo–Fr, 09:00–18:00 Uhr erreichbar</p>

          {/* KI systems text strip */}
          <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in-up delay-600">
            <p className="text-blue-400/50 text-xs tracking-[0.2em] uppercase">Wir optimieren für</p>
            <div className="flex items-center justify-center gap-2 flex-wrap max-w-lg mx-auto">
              {['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Copilot', 'Siri', 'Meta AI', 'Alexa'].map((name) => (
                <span key={name} className="text-white/55 text-xs px-2.5 py-1 border border-white/10 rounded-full">
                  {name}
                </span>
              ))}
              <span className="text-white/30 text-xs">& mehr</span>
            </div>
          </div>
        </div>

        {/* Zigzag divider – 3 wide gentle peaks */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            style={{ height: '70px' }}
          >
            <polygon
              points="0,70 0,52 240,12 480,52 720,12 960,52 1200,12 1440,52 1440,70"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <KiSystemeMarquee />

      {/* ===== PROBLEMVERSTÄNDNIS ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Das Problem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary leading-tight">
            Sie sind Experte in Ihrem Fach.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="shimmer-text">Online merkt man das nicht.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Sie haben sich als Wahlärztin oder Wahlarzt selbstständig gemacht – für mehr Autonomie, mehr Zeit pro
            Patient, bessere Medizin. Ihre Expertise spricht für sich, Ihre Patienten empfehlen Sie weiter.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Aber: Wer Sie noch nicht kennt, findet Sie nicht. Nicht auf Google, nicht bei ChatGPT, nicht bei
            Perplexity. Und die nächste Generation an Patienten sucht genau dort.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Gleichzeitig stehen Sie vor einem regulatorischen Minenfeld: ÖÄK-Werberichtlinien, DSGVO,
            Impressumspflicht, Barrierefreiheitsgesetz. Eine Website aufzusetzen, die nicht nur gut aussieht, sondern
            auch rechtskonform ist – das braucht Spezialwissen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-medium text-primary leading-relaxed">
            Wir bringen beides zusammen: Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination nicht nur
            existiert, sondern gefunden wird.
          </p>

          {/* Kevin's photo – person card */}
          <div className="mt-12 bg-gray-50 border border-gray-100 overflow-hidden shadow-md"
            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="sm:w-52 lg:w-64 relative overflow-hidden flex-shrink-0" style={{ minHeight: '220px' }}>
                <Image
                  src="/kevin.webp"
                  alt="Kevin Hofbauer – Gründer mypraxis.at"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/80 hidden sm:block" />
              </div>
              {/* Info */}
              <div className="flex-1 px-6 py-6 sm:py-8 flex flex-col justify-center">
                <div className="text-[#ff8a00] text-3xl font-serif leading-none mb-3 select-none">"</div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic mb-5">
                  Wir bringen beides zusammen – Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination
                  nicht nur existiert, sondern gefunden wird.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Kevin Hofbauer</p>
                    <p className="text-xs text-gray-500">
                      Gründer & Geschäftsführer ·{' '}
                      <span className="text-primary font-medium">
                        <Mp />
                      </span>
                    </p>
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

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Was uns unterscheidet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-primary">
            Nicht einfach eine Website.
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
            <span className="shimmer-text">Eine digitale Positionierung.</span>
          </h2>
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">
            Vier Gründe, warum Ärzte uns wählen
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Tiefenrecherche statt Template',
                text: 'Wir analysieren Ihr Fachgebiet, Ihren Werdegang, Ihre Region und Ihre Mitbewerber. Jeder Text auf Ihrer Website basiert auf echten Daten – nicht auf Platzhaltern.',
              },
              {
                icon: '🤖',
                title: 'KI-Sichtbarkeit statt nur Google',
                text: 'Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Wir implementieren strukturierte Daten, semantische Inhalte und llms.txt – damit Ihre Ordination in KI-Antworten genannt wird.',
              },
              {
                icon: '⚖️',
                title: 'Rechtskonform ohne Ihr Zutun',
                text: 'ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz – wir kennen die Anforderungen und setzen sie um. Sie konzentrieren sich auf Ihre Patienten.',
              },
              {
                icon: '🎯',
                title: 'Wunschpatienten statt Laufkundschaft',
                text: 'Durch gezielte Positionierung erreichen Sie genau die Patienten, die zu Ihrer Spezialisierung passen. Nicht mehr Patienten – die richtigen Patienten.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100 card-hover angular-clip"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-blue-50 text-2xl flex-shrink-0"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAKETE ===== */}
      <section className="py-20 px-6 bg-white" id="leistungen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Leistungen & Preise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Zwei Wege zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">
            Transparente Festpreise. Bis zu 30 % über KMU.DIGITAL förderbar.
          </p>

          {/* Praxis-Website & Digitale Positionierung – nebeneinander */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Paket 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 card-hover flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Praxis-Website</h3>
              <p className="text-gray-500 mb-3 text-sm">Ihre professionelle Online-Präsenz.</p>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – sauber umgesetzt,
                ohne Kompromisse bei Qualität und Compliance.
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-1">€ 3.900</p>
              <p className="text-xs text-gray-400 mb-6">netto, einmalig</p>
              <ul className="space-y-2 text-gray-700 mb-8 flex-1 text-xs sm:text-sm">
                {[
                  'Bis 5 Seiten (Home, Über mich, Leistungen, Kontakt, Impressum)',
                  'Individuelles Design (kein Template)',
                  'Local SEO & Google Maps',
                  'DSGVO- & ÖÄK-konform',
                  'Basis Schema Markup',
                  'Mobile-Optimierung & SSL',
                  'Online-Terminbuchung (Anbindung)',
                  'Cookie-Banner & Impressum',
                  'Einschulung (Inhalte selbst ändern)',
                  'Domain-Verbindung & Hosting-Setup',
                  '12 Monate technische Betreuung',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-600">Paketpreis: € 3.900</p>
                <p className="text-xs text-orange-700 font-medium">KMU.DIGITAL (30 %): − € 1.170</p>
                <p className="text-sm font-bold text-orange-800">Ihr Eigenanteil: € 2.730</p>
              </div>
              <p className="text-xs text-gray-400 mb-4 italic">
                Ideal für Kassenärzte und Wahlärzte, die eine solide digitale Visitenkarte brauchen.
              </p>
              <a
                href="#kontakt"
                className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
              >
                Erstberatung anfordern
              </a>
            </div>

            {/* Paket 2 – Empfohlen */}
            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-2xl p-6 sm:p-8 relative card-hover flex flex-col neon-border-orange">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff8a00] text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                EMPFOHLEN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Digitale Positionierung</h3>
              <p className="text-blue-200 mb-3 text-sm">Gefunden werden, wo Patienten suchen.</p>
              <p className="text-xs text-blue-200/90 mb-4 leading-relaxed">
                Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen. Wir recherchieren Ihr
                Fachgebiet, analysieren Ihren Wettbewerb und positionieren Sie in Google UND KI-Systemen.
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-1">€ 7.500</p>
              <p className="text-xs text-blue-300 mb-6">netto, einmalig</p>
              <ul className="space-y-2 text-blue-100 mb-8 flex-1 text-xs sm:text-sm">
                {[
                  'Alles aus Praxis-Website, plus:',
                  'Bis 10 Seiten (inkl. FAQ, Spezialisierungen, Ablauf)',
                  'Tiefenrecherche: Fachgebiet, Werdegang, Wettbewerber, Region',
                  'Zielgruppenanalyse (Wunschpatienten-Profil)',
                  'Maßgeschneiderte Texte (basierend auf Recherche)',
                  'Suchbegriff-Verifizierung (nur belegbare Aussagen)',
                  'KI-Readiness: Erweiterte strukturierte Daten (Schema Markup)',
                  'llms.txt Implementierung',
                  'KI-Telefonassistent (Setup & Konfiguration)',
                  'KI-Sichtbarkeitsanalyse (Vorher/Nachher)',
                  'FAQ-System (reduziert Routine-Anrufe)',
                  '12 Monate technische Betreuung inkl. Updates',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
                <p className="text-xs text-blue-200">Paketpreis: € 7.500</p>
                <p className="text-xs text-[#ffaa40] font-medium">KMU.DIGITAL (30 %): − € 2.250</p>
                <p className="text-sm font-bold text-white">Ihr Eigenanteil: € 5.250</p>
              </div>
              <p className="text-xs text-blue-300 mb-4 italic">
                Nicht einfach eine Website – eine Strategie. Für Wahlärzte, die online die richtigen Patienten
                erreichen wollen.
              </p>
              <a
                href="#kontakt"
                className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
              >
                Erstberatung anfordern
              </a>
            </div>
          </div>

          {/* Paket 3 – Ärztezentren & PVEs (volle Breite, horizontal) */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Links: Titel, Beschreibung, Preis, CTA */}
              <div className="lg:w-72 xl:w-80 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-blue-50/30 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Ärztezentren &amp; PVEs</h3>
                  <p className="text-gray-500 mb-3 text-sm">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                    Für interdisziplinäre Ärztezentren, Gruppenpraxen und PVEs. Wir entwickeln eine digitale
                    Infrastruktur, die alle Fachrichtungen verbindet – und jedem einzelnen Arzt maximale
                    KI-Sichtbarkeit verschafft.
                  </p>
                  <p className="text-xl sm:text-2xl font-extrabold text-primary mb-1">Individuelles Konzept</p>
                  <p className="text-xs text-gray-400 mb-2">auf Anfrage</p>
                </div>
                <div>
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                    <p className="text-xs text-gray-600">Pro Arzt förderbar: bis € 6.000</p>
                    <p className="text-sm font-bold text-orange-800">Bei 10 Ärzten: bis € 60.000 Förderung</p>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 italic">
                    Jeder niedergelassene Arzt ist ein eigenständiges KMU und kann die Förderung individuell
                    beantragen.
                  </p>
                  <a
                    href="#kontakt"
                    className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
                  >
                    Projekt besprechen
                  </a>
                </div>
              </div>

              {/* Rechts: Features in 2 Spalten */}
              <div className="flex-1 p-6 sm:p-8 flex items-center">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-xs sm:text-sm w-full">
                  {[
                    'Analyse & Strategiekonzept fürs Zentrum',
                    'Interdisziplinäre Schema-Architektur',
                    'KI-Readiness für alle Fachrichtungen',
                    'Individuelle Arzt-Profilseiten',
                    'Gemeinsame llms.txt',
                    'KMU.DIGITAL Förderberatung (jeder Arzt förderbar)',
                    'Recruiting & Mehrsprachigkeit (optional)',
                    'Laufende technische Betreuung',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            Alle Preise verstehen sich als unverbindliche Richtpreise (netto, zzgl. USt.). Hosting und laufende Kosten
            individuell.
          </p>
        </div>
      </section>

      {/* ===== KI-SICHTBARKEIT ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden" id="ki">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 tech-grid opacity-20" />

        {/* Decorative SVG elements */}
        <div className="absolute top-10 left-10 pointer-events-none opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="118" height="118" stroke="white" strokeWidth="1" fill="none" />
            <rect x="20" y="20" width="80" height="80" stroke="rgba(255,138,0,0.6)" strokeWidth="0.8" fill="none" />
            <line x1="1" y1="60" x2="119" y2="60" stroke="white" strokeWidth="0.5" />
            <line x1="60" y1="1" x2="60" y2="119" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 pointer-events-none opacity-20 animate-spin-slow">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,2 78,60 2,60" stroke="rgba(255,138,0,0.8)" strokeWidth="1.5" fill="none" />
            <polygon points="40,20 64,58 16,58" stroke="white" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full">
              Ihr entscheidender Vorteil
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Werden Sie von ChatGPT empfohlen?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Testen Sie es selbst: Fragen Sie ChatGPT nach einem Facharzt Ihrer Richtung in Ihrer Stadt. Werden Sie
            genannt? Falls nicht – und das betrifft über 90 % aller Ordinationen in Österreich – dann ist Ihre
            Online-Präsenz für KI-Systeme unsichtbar.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold mb-10 text-center">
            Unser Drei-Schichten-Ansatz für KI-Sichtbarkeit
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                nr: '1',
                title: 'Strukturierte Daten',
                text: 'Maschinenlesbare Informationen über Ihre Fachrichtung, Leistungen und Standort. Google, Bing und KI-Systeme lesen diese Daten direkt aus.',
              },
              {
                nr: '2',
                title: 'Semantische Inhalte',
                text: 'Texte, die so formuliert sind, dass KI Ihre Expertise korrekt einordnen kann. Nicht SEO-Texte für Google – Antwort-optimierte Inhalte für KI.',
              },
              {
                nr: '3',
                title: 'llms.txt',
                text: 'Eine spezielle Datei, die KI-Crawler von OpenAI, Anthropic und Perplexity gezielt auslesen. Ihr digitales Profil für die KI-Suche.',
              },
            ].map((item) => (
              <div key={item.nr} className="glass-card rounded-2xl p-6 sm:p-8 text-center card-hover angular-clip-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ff8a00]/20 border border-[#ff8a00]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#ff8a00]">{item.nr}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-white">{item.title}</h4>
                <p className="text-blue-200 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              Wenn ein Patient ChatGPT fragt{' '}
              <em>„Welcher Hautarzt in St. Pölten hat gute Bewertungen?"</em>, wird Ihre Ordination in der Antwort
              genannt – mit Ihrem Namen, Ihrer Fachrichtung und Ihrem Standort.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FÖRDERUNG ===== */}
      <section className="py-20 px-6 bg-gray-50" id="foerderung">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-orange-50 text-[#cc6600] text-sm font-semibold px-4 py-1.5 rounded-full">
              KMU.DIGITAL Förderung
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            Bis zu 30 % Ihrer Investition kommt zurück.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Über das österreichische Förderprogramm KMU.DIGITAL erhalten niedergelassene Ärztinnen und Ärzte bis zu
            30 % der Investitionskosten als Förderung zurück. Maximal € 6.000 pro Unternehmen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">
            Voraussetzung ist eine einmalige Strategieberatung durch einen zertifizierten Digital Consultant (CDC).
            Kosten: ca. € 500 – davon werden 50 % (€ 250) ebenfalls gefördert. Wir arbeiten mit einem erfahrenen,
            externen Förderberater zusammen, der die gesamte Beratung und Antragstellung für Sie übernimmt.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 sm:p-5 text-gray-500 font-medium text-sm sm:text-base"></th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">
                    Praxis-Website
                  </th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">
                    Digitale Positionierung
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Paketpreis', v1: '€ 3.900', v2: '€ 7.500', bold: false },
                  { label: 'Förderung (30 %)', v1: '− € 1.170', v2: '− € 2.250', orange: true },
                  { label: 'Ihr Eigenanteil', v1: '€ 2.730', v2: '€ 5.250', bold: true },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <td
                      className={`p-4 sm:p-5 text-sm sm:text-base ${row.bold ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                    >
                      {row.label}
                    </td>
                    <td
                      className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}
                    >
                      {row.v1}
                    </td>
                    <td
                      className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}
                    >
                      {row.v2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">
            Strategieberatung (CDC): ca. € 500, davon € 250 gefördert. Netto-Aufwand für Sie: ca. € 250.
          </p>
        </div>
      </section>

      {/* ===== PROZESS ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Ablauf
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-16 text-center text-primary">
            In vier Schritten zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            {[
              {
                nr: '1',
                title: 'Erstgespräch (30 Min, kostenlos)',
                text: 'Wir lernen Ihre Ordination kennen: Fachrichtung, Positionierung, Ziele. Sie erzählen – wir hören zu.',
              },
              {
                nr: '2',
                title: 'Förderberatung & Freigabe',
                text: 'Unser externer Förderberater führt die KMU.DIGITAL Strategieberatung durch. Erst nach Förderzusage starten wir.',
              },
              {
                nr: '3',
                title: 'Recherche, Strategie & Umsetzung',
                text: 'Analyse Ihres Fachgebiets, Wettbewerbs und Ihrer Region – daraus entstehen Texte, Design, Technik und KI-Readiness.',
              },
              {
                nr: '4',
                title: 'Launch & Betreuung',
                text: 'Ihre Website geht online. Wir überwachen die KI-Sichtbarkeit und halten 12 Monate lang alles aktuell.',
              },
            ].map((step) => (
              <div key={step.nr} className="text-center relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white flex items-center justify-center mx-auto mb-5 text-lg sm:text-xl font-extrabold shadow-lg relative z-10"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                  {step.nr}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WER STECKT HINTER MYPRAXIS.AT ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Über uns
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            Wer steckt hinter <Mp />?
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich.
              Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Wir erstellen rechtssichere Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für
              medizinische Einrichtungen und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie
              ChatGPT, Perplexity und Google AI Overviews.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Unsere Leistungen reichen von der Praxis-Website für Einzelordinationen über die komplette digitale
              Positionierung mit KI-Readiness bis zur interdisziplinären Infrastruktur für Ärztezentren und PVEs.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🇦🇹', label: 'Österreichisches Unternehmen' },
                { icon: '✅', label: 'Förderfähiger Digitalisierungspartner' },
                { icon: '🏛️', label: 'WKÖ / AWS akkreditiert' },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-blue-50 text-primary text-sm font-medium px-4 py-2 rounded-full border border-blue-100"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEMO-SEITEN ===== */}
      <section className="py-20 px-6 bg-white" id="demos">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block bg-orange-50 text-[#cc6600] text-sm font-semibold px-4 py-1.5 rounded-full">
              Referenzen
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">Demoseiten ansehen</h2>
          <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sehen Sie, wie eine professionelle Praxis-Website für verschiedene Fachrichtungen aussieht. Unsere
            Demoseiten zeigen reale Umsetzungen – von der Allgemeinmedizin bis zur Dermatologie.
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 sm:p-16">
            <div className="text-5xl mb-4">🚧</div>
            <p className="text-gray-500 font-medium text-base sm:text-lg mb-2">Demoseiten werden gerade aufgebaut.</p>
            <p className="text-gray-400 text-sm sm:text-base">
              Sprechen Sie uns direkt an – wir zeigen Ihnen bestehende Projekte im persönlichen Gespräch.
            </p>
            <a
              href="#kontakt"
              className="inline-block mt-6 bg-primary hover:bg-[#162890] text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm sm:text-base"
            >
              Erstberatung vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 px-6 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-primary">
            Häufige Fragen
          </h2>
          <div className="space-y-2">
            {[
              {
                q: 'Was kostet eine Website für Ärzte in Österreich?',
                a: 'Unsere Praxis-Website liegt bei € 3.900 netto, die Digitale Positionierung mit Tiefenrecherche und KI-Readiness bei € 7.500 netto. Für Ärztezentren und PVEs erstellen wir individuelle Konzepte. Über KMU.DIGITAL sind bis zu 30 % förderbar.',
              },
              {
                q: 'Was ist KI-Readiness und warum braucht meine Ordination das?',
                a: 'KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in diesen Antworten nicht genannt.',
              },
              {
                q: 'Was sind strukturierte Daten (Schema Markup)?',
                a: 'Maschinenlesbare Informationen im Hintergrund Ihrer Website, die Google, Bing und KI-Systemen mitteilen: Wer Sie sind, welche Fachrichtung Sie haben, welche Leistungen Sie anbieten, wo Ihre Ordination liegt und wie Sie erreichbar sind.',
              },
              {
                q: 'Was ist ein KI-Telefonassistent?',
                a: 'Ein KI-Telefonassistent beantwortet eingehende Anrufe automatisch – auf natürlichem österreichischem Deutsch. Er gibt Auskunft über Ordinationszeiten, nimmt Terminwünsche entgegen und entlastet Ihr Team spürbar bei Routineanfragen.',
              },
              {
                q: 'Wie funktioniert die KMU.DIGITAL Förderung?',
                a: 'Niedergelassene Ärztinnen und Ärzte mit eigener Ordination sind als KMU förderbar. Die Umsetzungsförderung beträgt 30 % der Investitionskosten (max. € 6.000). Voraussetzung ist eine Strategieberatung durch einen zertifizierten Digital Consultant (CDC) – Kosten ca. € 500, davon € 250 gefördert.',
              },
              {
                q: 'Können Ärztezentren die Förderung mehrfach nutzen?',
                a: 'Ja – jeder niedergelassene Arzt ist ein eigenständiges Unternehmen und kann die Förderung individuell beantragen. Bei einem Ärztezentrum mit 16 Ärzten können bis zu 16 separate Förderanträge gestellt werden.',
              },
              {
                q: 'Was bedeutet llms.txt?',
                a: 'Eine strukturierte Datei auf Ihrer Website, die KI-Crawler gezielt auslesen – ähnlich wie robots.txt für Suchmaschinen, aber speziell für KI-Systeme. Sie enthält eine maschinenoptimierte Zusammenfassung Ihrer Praxis und Leistungen.',
              },
              {
                q: 'Wie lange dauert die Umsetzung?',
                a: 'Praxis-Website: 2–3 Wochen. Digitale Positionierung: 4–6 Wochen. Ärztezentren: 8–12 Wochen. Dazu kommt vorab die Förderabwicklung (ca. 2–4 Wochen).',
              },
              {
                q: 'Brauche ich technisches Wissen?',
                a: 'Nein. Wir übernehmen alles – von der Recherche über die Förderabwicklung bis zum Launch. Nach der Fertigstellung erhalten Sie eine Einschulung, damit Sie einfache Änderungen selbst vornehmen können.',
              },
              {
                q: 'Was passiert nach den 12 Monaten Betreuung?',
                a: 'Nach den inkludierten 12 Monaten können Sie die technische Betreuung jederzeit zu günstigen Konditionen verlängern. Viele unserer Kunden entscheiden sich für ein laufendes Wartungspaket – alternativ übergeben wir alles vollständig in Ihre Hände.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm group overflow-hidden"
              >
                <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 text-sm">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-secondary font-bold text-sm group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 px-4 sm:px-5 pb-4 sm:pb-5 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm sm:text-base mb-3">Noch eine Frage, die hier nicht beantwortet wurde?</p>
            <a
              href="#kontakt"
              className="text-secondary hover:text-primary font-semibold text-sm sm:text-base underline underline-offset-2 transition-colors"
            >
              Kontaktieren Sie uns – wir antworten ehrlich und verständlich
            </a>
            <p className="text-gray-400 text-xs mt-2">Mo–Fr, 09:00–18:00 Uhr erreichbar</p>
          </div>
        </div>
      </section>

      {/* ===== BLOG VORSCHAU ===== */}
      <BlogCarousel posts={blogPosts} />

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
              <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Kostenloses Erstgespräch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Bereit für Ihre<br />rechtssichere Praxis-Website?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-10 leading-relaxed">
                Vereinbaren Sie ein kostenloses Erstgespräch. 30 Minuten. Unverbindlich. Wir zeigen Ihnen, wie Ihre
                Ordination in KI-Systemen sichtbar wird.
              </p>

              <div className="space-y-4">
                {/* Phone Kevin */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+436641915447" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      +43 664 191 5447
                    </a>
                    <p className="text-blue-300 text-xs">Kevin Hofbauer</p>
                  </div>
                </div>

                {/* Phone Jenny */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+436703019798" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      +43 670 301 9798
                    </a>
                    <p className="text-blue-300 text-xs">Jenny</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-[#ff8a00]/20 border border-[#ff8a00]/30 flex items-center justify-center flex-shrink-0"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}
                  >
                    <svg className="w-5 h-5 text-[#ff8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:office@mypraxis.at" className="text-white font-semibold hover:text-[#ff8a00] transition-colors">
                      office@mypraxis.at
                    </a>
                    <p className="text-blue-300 text-xs">Mo–Fr, 09:00–18:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap gap-3">
                {['✓ Kostenlos & unverbindlich', '✓ 30 Min. Erstgespräch', '✓ Antwort innerhalb 1 Werktag'].map(
                  (b) => (
                    <span key={b} className="text-blue-200 text-xs bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                      {b}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 angular-clip-sm">
              <h3 className="text-white font-bold text-xl mb-6">Anfrage senden</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 bg-[#111827] text-gray-400">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 text-xs sm:text-sm leading-relaxed">
            <Mp /> ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich.
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
            <span>
              Jenny:{' '}
              <a href="tel:+436703019798" className="hover:text-gray-400 transition-colors">
                +43 670 301 9798
              </a>
            </span>
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
            <span className="sm:ml-auto">© {new Date().getFullYear()} Kevin Hofbauer e.U.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
