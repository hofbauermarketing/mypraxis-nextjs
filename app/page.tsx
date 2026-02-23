import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc]">
        {/* Hero background image – semi-transparent */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
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
            {['✓ ÖÄK- & DSGVO-konform', '✓ Bis zu 30 % KMU.DIGITAL Förderung', '✓ KI-Readiness inklusive'].map((badge) => (
              <span key={badge} className="glass-card text-white text-sm px-4 py-2 rounded-full">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <a
              href="#kontakt"
              className="bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:shadow-orange-500/30 hover:scale-105"
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
          <p className="mt-5 text-blue-300 text-sm animate-fade-in-up delay-500">
            Mo–Fr, 09:00–18:00 Uhr erreichbar
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== PROBLEMVERSTÄNDNIS ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Das Problem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary">
            Sie sind Experte in Ihrem Fach. Online merkt man das nicht.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Sie haben sich als Wahlärztin oder Wahlarzt selbstständig gemacht – für mehr Autonomie, mehr Zeit pro Patient, bessere Medizin. Ihre Expertise spricht für sich, Ihre Patienten empfehlen Sie weiter.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Aber: Wer Sie noch nicht kennt, findet Sie nicht. Nicht auf Google, nicht bei ChatGPT, nicht bei Perplexity. Und die nächste Generation an Patienten sucht genau dort.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
            Gleichzeitig stehen Sie vor einem regulatorischen Minenfeld: ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz. Eine Website aufzusetzen, die nicht nur gut aussieht, sondern auch rechtskonform ist – das braucht Spezialwissen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Wir bringen beides zusammen: Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination nicht nur existiert, sondern gefunden wird.
          </p>
        </div>
      </section>

      {/* ===== WAS UNS UNTERSCHEIDET ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              Was uns unterscheidet
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Nicht einfach eine Website. Eine digitale Positionierung.
          </h2>
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">Vier Gründe, warum Ärzte uns wählen</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: '🔍', title: 'Tiefenrecherche statt Template', text: 'Wir analysieren Ihr Fachgebiet, Ihren Werdegang, Ihre Region und Ihre Mitbewerber. Jeder Text auf Ihrer Website basiert auf echten Daten – nicht auf Platzhaltern.' },
              { icon: '🤖', title: 'KI-Sichtbarkeit statt nur Google', text: 'Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Wir implementieren strukturierte Daten, semantische Inhalte und llms.txt – damit Ihre Ordination in KI-Antworten genannt wird.' },
              { icon: '⚖️', title: 'Rechtskonform ohne Ihr Zutun', text: 'ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz – wir kennen die Anforderungen und setzen sie um. Sie konzentrieren sich auf Ihre Patienten.' },
              { icon: '🎯', title: 'Wunschpatienten statt Laufkundschaft', text: 'Durch gezielte Positionierung erreichen Sie genau die Patienten, die zu Ihrer Spezialisierung passen. Nicht mehr Patienten – die richtigen Patienten.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.text}</p>
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
          <p className="text-center text-gray-500 mb-12 text-base sm:text-lg">Transparente Festpreise. Bis zu 30 % über KMU.DIGITAL förderbar.</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Paket 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 card-hover flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Praxis-Website</h3>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">Ihre professionelle Online-Präsenz.</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – sauber umgesetzt, ohne Kompromisse bei Qualität und Compliance.</p>
              <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-1">€ 3.900</p>
              <p className="text-sm text-gray-400 mb-6">netto, einmalig</p>
              <ul className="space-y-2.5 text-gray-700 mb-8 flex-1 text-sm sm:text-base">
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
                    <span className="text-[#ff8a00] mt-0.5 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600">Paketpreis: € 3.900</p>
                <p className="text-sm text-orange-700 font-medium">KMU.DIGITAL (30 %): − € 1.170</p>
                <p className="text-base sm:text-lg font-bold text-orange-800">Ihr Eigenanteil: € 2.730</p>
              </div>
              <p className="text-xs text-gray-400 mb-4 italic">Ideal für Kassenärzte und Wahlärzte, die eine solide digitale Visitenkarte brauchen.</p>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm sm:text-base">
                Erstberatung anfordern
              </a>
            </div>

            {/* Paket 2 - Empfohlen */}
            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-2xl p-6 sm:p-8 relative card-hover flex flex-col">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff8a00] text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                EMPFOHLEN
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Digitale Positionierung</h3>
              <p className="text-blue-200 mb-4 text-sm sm:text-base">Gefunden werden, wo Patienten suchen.</p>
              <p className="text-sm text-blue-200 mb-4 leading-relaxed">Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen. Wir recherchieren Ihr Fachgebiet, analysieren Ihren Wettbewerb und positionieren Sie in Google UND KI-Systemen.</p>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-1">€ 7.500</p>
              <p className="text-sm text-blue-300 mb-6">netto, einmalig</p>
              <ul className="space-y-2.5 text-blue-100 mb-8 flex-1 text-sm sm:text-base">
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
                    <span className="text-[#ff8a00] mt-0.5 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
                <p className="text-sm text-blue-200">Paketpreis: € 7.500</p>
                <p className="text-sm text-[#ffaa40] font-medium">KMU.DIGITAL (30 %): − € 2.250</p>
                <p className="text-base sm:text-lg font-bold text-white">Ihr Eigenanteil: € 5.250</p>
              </div>
              <p className="text-xs text-blue-300 mb-4 italic">Nicht einfach eine Website – eine Strategie. Für Wahlärzte, die online die richtigen Patienten erreichen wollen.</p>
              <a href="#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm sm:text-base">
                Erstberatung anfordern
              </a>
            </div>

            {/* Paket 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 card-hover flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Ärztezentren &amp; PVEs</h3>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">Für interdisziplinäre Ärztezentren, Gruppenpraxen und PVEs. Wir entwickeln eine digitale Infrastruktur, die alle Fachrichtungen verbindet – und jedem einzelnen Arzt maximale KI-Sichtbarkeit verschafft.</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">Individuelles Konzept</p>
              <p className="text-sm text-gray-400 mb-6">auf Anfrage</p>
              <ul className="space-y-2.5 text-gray-700 mb-8 flex-1 text-sm sm:text-base">
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
                    <span className="text-[#ff8a00] mt-0.5 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-600">Pro Arzt förderbar: bis € 6.000</p>
                <p className="text-base sm:text-lg font-bold text-orange-800">Bei 10 Ärzten: bis € 60.000 Förderung</p>
              </div>
              <p className="text-xs text-gray-400 mb-4 italic">Jeder niedergelassene Arzt ist ein eigenständiges KMU und kann die Förderung individuell beantragen.</p>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm sm:text-base">
                Projekt besprechen
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">Alle Preise verstehen sich als unverbindliche Richtpreise (netto, zzgl. USt.). Hosting und laufende Kosten individuell.</p>
        </div>
      </section>

      {/* ===== KI-SICHTBARKEIT ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white" id="ki">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full">
              Ihr entscheidender Vorteil
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Werden Sie von ChatGPT empfohlen?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Testen Sie es selbst: Fragen Sie ChatGPT nach einem Facharzt Ihrer Richtung in Ihrer Stadt. Werden Sie genannt? Falls nicht – und das betrifft über 90 % aller Ordinationen in Österreich – dann ist Ihre Online-Präsenz für KI-Systeme unsichtbar.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold mb-10 text-center">Unser Drei-Schichten-Ansatz für KI-Sichtbarkeit</h3>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { nr: '1', title: 'Strukturierte Daten', text: 'Maschinenlesbare Informationen über Ihre Fachrichtung, Leistungen und Standort. Google, Bing und KI-Systeme lesen diese Daten direkt aus.' },
              { nr: '2', title: 'Semantische Inhalte', text: 'Texte, die so formuliert sind, dass KI Ihre Expertise korrekt einordnen kann. Nicht SEO-Texte für Google – Antwort-optimierte Inhalte für KI.' },
              { nr: '3', title: 'llms.txt', text: 'Eine spezielle Datei, die KI-Crawler von OpenAI, Anthropic und Perplexity gezielt auslesen. Ihr digitales Profil für die KI-Suche.' },
            ].map((item) => (
              <div key={item.nr} className="glass-card rounded-2xl p-6 sm:p-8 text-center card-hover">
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
              Wenn ein Patient ChatGPT fragt <em>„Welcher Hautarzt in St. Pölten hat gute Bewertungen?"</em>, wird Ihre Ordination in der Antwort genannt – mit Ihrem Namen, Ihrer Fachrichtung und Ihrem Standort.
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
            Über das österreichische Förderprogramm KMU.DIGITAL erhalten niedergelassene Ärztinnen und Ärzte bis zu 30 % der Investitionskosten als Förderung zurück. Maximal € 6.000 pro Unternehmen.
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-10 leading-relaxed">
            Voraussetzung ist eine einmalige Strategieberatung durch einen zertifizierten Digital Consultant (CDC). Kosten: ca. € 500 – davon werden 50 % (€ 250) ebenfalls gefördert. Wir arbeiten mit einem erfahrenen, externen Förderberater zusammen, der die gesamte Beratung und Antragstellung für Sie übernimmt.
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 sm:p-5 text-gray-500 font-medium text-sm sm:text-base"></th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">Praxis-Website</th>
                  <th className="text-center p-4 sm:p-5 text-primary font-bold text-sm sm:text-base">Digitale Positionierung</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Paketpreis', v1: '€ 3.900', v2: '€ 7.500', bold: false },
                  { label: 'Förderung (30 %)', v1: '− € 1.170', v2: '− € 2.250', orange: true },
                  { label: 'Ihr Eigenanteil', v1: '€ 2.730', v2: '€ 5.250', bold: true },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <td className={`p-4 sm:p-5 text-sm sm:text-base ${row.bold ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</td>
                    <td className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}>{row.v1}</td>
                    <td className={`p-4 sm:p-5 text-center text-sm sm:text-base ${row.bold ? 'font-bold text-base sm:text-lg' : ''} ${row.orange ? 'text-[#cc6600] font-medium' : ''}`}>{row.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 text-center">Strategieberatung (CDC): ca. € 500, davon € 250 gefördert. Netto-Aufwand für Sie: ca. € 250.</p>
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nr: '1', title: 'Erstgespräch (30 Min, kostenlos)', text: 'Wir lernen Ihre Ordination kennen: Fachrichtung, Positionierung, Ziele. Sie erzählen – wir hören zu. Wir erklären den Ablauf und die Fördermöglichkeiten.' },
              { nr: '2', title: 'Förderberatung & Freigabe', text: 'Unser externer Förderberater führt die verpflichtende KMU.DIGITAL Strategieberatung durch und stellt den Förderantrag. Erst nach Förderzusage starten wir.' },
              { nr: '3', title: 'Recherche, Strategie & Umsetzung', text: 'Wir analysieren Ihr Fachgebiet, Ihren Wettbewerb und Ihre Region. Daraus entstehen maßgeschneiderte Texte, Design, Technik, Schema Markup und KI-Readiness.' },
              { nr: '4', title: 'Launch & Betreuung', text: 'Ihre Website geht online. Wir überwachen die KI-Sichtbarkeit und halten 12 Monate lang alles technisch aktuell.' },
            ].map((step) => (
              <div key={step.nr} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-5 text-lg sm:text-xl font-extrabold shadow-lg">
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
            Wer steckt hinter mypraxis.at?
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              mypraxis.at ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich. Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Wir erstellen rechtssichere Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              Unsere Leistungen reichen von der Praxis-Website für Einzelordinationen über die komplette digitale Positionierung mit KI-Readiness bis zur interdisziplinären Infrastruktur für Ärztezentren und PVEs.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🇦🇹', label: 'Österreichisches Unternehmen' },
                { icon: '✅', label: 'Förderfähiger Digitalisierungspartner' },
                { icon: '🏛️', label: 'WKÖ / AWS akkreditiert' },
              ].map((badge) => (
                <span key={badge.label} className="inline-flex items-center gap-2 bg-blue-50 text-primary text-sm font-medium px-4 py-2 rounded-full border border-blue-100">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">
            Demoseiten ansehen
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sehen Sie, wie eine professionelle Praxis-Website für verschiedene Fachrichtungen aussieht. Unsere Demoseiten zeigen reale Umsetzungen – von der Allgemeinmedizin bis zur Dermatologie.
          </p>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 sm:p-16">
            <div className="text-5xl mb-4">🚧</div>
            <p className="text-gray-500 font-medium text-base sm:text-lg mb-2">Demoseiten werden gerade aufgebaut.</p>
            <p className="text-gray-400 text-sm sm:text-base">Sprechen Sie uns direkt an – wir zeigen Ihnen bestehende Projekte im persönlichen Gespräch.</p>
            <a href="#kontakt" className="inline-block mt-6 bg-primary hover:bg-[#162890] text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm sm:text-base">
              Erstberatung vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-6 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block bg-blue-50 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Häufige Fragen</h2>
          <div className="space-y-4">
            {[
              { q: 'Was kostet eine Website für Ärzte in Österreich?', a: 'Unsere Praxis-Website liegt bei € 3.900 netto, die Digitale Positionierung mit Tiefenrecherche und KI-Readiness bei € 7.500 netto. Für Ärztezentren und PVEs erstellen wir individuelle Konzepte. Über KMU.DIGITAL sind bis zu 30 % förderbar.' },
              { q: 'Was ist KI-Readiness und warum braucht meine Ordination das?', a: 'KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in diesen Antworten nicht genannt.' },
              { q: 'Was sind strukturierte Daten (Schema Markup)?', a: 'Maschinenlesbare Informationen im Hintergrund Ihrer Website, die Google, Bing und KI-Systemen mitteilen: Wer Sie sind, welche Fachrichtung Sie haben, welche Leistungen Sie anbieten, wo Ihre Ordination liegt und wie Sie erreichbar sind.' },
              { q: 'Was ist ein KI-Telefonassistent?', a: 'Ein KI-Telefonassistent beantwortet eingehende Anrufe automatisch – auf natürlichem österreichischem Deutsch. Er gibt Auskunft über Ordinationszeiten, nimmt Terminwünsche entgegen und entlastet Ihr Team spürbar bei Routineanfragen.' },
              { q: 'Wie funktioniert die KMU.DIGITAL Förderung?', a: 'Niedergelassene Ärztinnen und Ärzte mit eigener Ordination sind als KMU förderbar. Die Umsetzungsförderung beträgt 30 % der Investitionskosten (max. € 6.000). Voraussetzung ist eine Strategieberatung durch einen zertifizierten Digital Consultant (CDC) – Kosten ca. € 500, davon € 250 gefördert.' },
              { q: 'Können Ärztezentren die Förderung mehrfach nutzen?', a: 'Ja – jeder niedergelassene Arzt ist ein eigenständiges Unternehmen und kann die Förderung individuell beantragen. Bei einem Ärztezentrum mit 16 Ärzten können bis zu 16 separate Förderanträge gestellt werden.' },
              { q: 'Was bedeutet llms.txt?', a: 'Eine strukturierte Datei auf Ihrer Website, die KI-Crawler gezielt auslesen – ähnlich wie robots.txt für Suchmaschinen, aber speziell für KI-Systeme. Sie enthält eine maschinenoptimierte Zusammenfassung Ihrer Praxis und Leistungen.' },
              { q: 'Wie lange dauert die Umsetzung?', a: 'Praxis-Website: 2–3 Wochen. Digitale Positionierung: 4–6 Wochen. Ärztezentren: 8–12 Wochen. Dazu kommt vorab die Förderabwicklung (ca. 2–4 Wochen).' },
              { q: 'Brauche ich technisches Wissen?', a: 'Nein. Wir übernehmen alles – von der Recherche über die Förderabwicklung bis zum Launch. Nach der Fertigstellung erhalten Sie eine Einschulung, damit Sie einfache Änderungen selbst vornehmen können.' },
              { q: 'Was passiert nach den 12 Monaten Betreuung?', a: 'Nach den inkludierten 12 Monaten können Sie die technische Betreuung jederzeit zu günstigen Konditionen verlängern. Viele unserer Kunden entscheiden sich für ein laufendes Wartungspaket – alternativ übergeben wir alles vollständig in Ihre Hände.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm group overflow-hidden">
                <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center p-5 sm:p-6 text-sm sm:text-base">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-secondary font-bold text-sm group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 px-5 sm:px-6 pb-5 sm:pb-6 leading-relaxed text-sm sm:text-base">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm sm:text-base mb-3">Noch eine Frage, die hier nicht beantwortet wurde?</p>
            <a href="#kontakt" className="text-secondary hover:text-primary font-semibold text-sm sm:text-base underline underline-offset-2 transition-colors">
              Kontaktieren Sie uns – wir antworten ehrlich und verständlich
            </a>
            <p className="text-gray-400 text-xs mt-2">Mo–Fr, 09:00–18:00 Uhr erreichbar</p>
          </div>
        </div>
      </section>

      {/* ===== KONTAKT / CTA ===== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc] text-white relative overflow-hidden" id="kontakt">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Kostenloses Erstgespräch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Bereit für Ihre rechtssichere Praxis-Website?</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-10 leading-relaxed">
            Vereinbaren Sie ein kostenloses Erstgespräch. 30 Minuten. Unverbindlich. Wir zeigen Ihnen, wie Ihre Ordination in KI-Systemen sichtbar wird.
          </p>
          <a
            href="mailto:office@mypraxis.at"
            className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg transition-all hover:scale-105 shadow-lg"
          >
            Erstberatung vereinbaren
          </a>
          <div className="mt-8 space-y-2">
            <p className="text-blue-300 text-sm sm:text-base">
              Rufen Sie an:{' '}
              <a href="tel:+436641915447" className="text-white hover:text-[#ff8a00] transition-colors font-semibold">
                +43 664 191 5447
              </a>
              {' '}|{' '}
              Jenny:{' '}
              <a href="tel:+436703019798" className="text-white hover:text-[#ff8a00] transition-colors font-semibold">
                +43 670 301 9798
              </a>
            </p>
            <p className="text-blue-400 text-xs sm:text-sm">Mo–Fr, 09:00–18:00 Uhr erreichbar</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 bg-[#111827] text-gray-400">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4 text-xs sm:text-sm leading-relaxed">
            mypraxis.at ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich. Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich. Wir erstellen rechtssichere Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews.
          </p>
          <p className="mb-4 text-xs text-gray-600 leading-relaxed">
            Wir betreuen Ärztinnen und Ärzte aller Fachrichtungen: Allgemeinmedizin, Innere Medizin, Orthopädie, Kardiologie, Dermatologie, Gynäkologie, HNO, Urologie, Neurologie, Chirurgie, Augenheilkunde, Kinderheilkunde, Zahnmedizin, Alternativmedizin und alle weiteren Fachrichtungen.
          </p>
          <div className="text-xs text-gray-600 mb-6">
            <span>Hauptplatz 12, TOP 24, 3902 Vitis</span>
            <span className="mx-2">·</span>
            <a href="tel:+436641915447" className="hover:text-gray-400 transition-colors">+43 664 191 5447</a>
            <span className="mx-2">·</span>
            <span>Jenny: <a href="tel:+436703019798" className="hover:text-gray-400 transition-colors">+43 670 301 9798</a></span>
            <span className="mx-2">·</span>
            <span>Mo–Fr, 09:00–18:00 Uhr</span>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm border-t border-gray-800 pt-6">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="mailto:office@mypraxis.at" className="hover:text-white transition-colors">office@mypraxis.at</a>
            <span className="sm:ml-auto">© {new Date().getFullYear()} Kevin Hofbauer e.U.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
