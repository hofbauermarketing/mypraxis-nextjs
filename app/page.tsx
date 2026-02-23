export default function HomePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ihre Ordination. Digital positioniert. Von KI empfohlen.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Wir machen niedergelassene Ärztinnen und Ärzte dort sichtbar, wo Patienten heute und morgen suchen – in Suchmaschinen und KI-Systemen wie ChatGPT.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ ÖÄK- &amp; DSGVO-konform</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ Bis zu 30 % KMU.DIGITAL Förderung</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✓ KI-Readiness inklusive</span>
          </div>
          <a href="#kontakt" className="inline-block bg-accent hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Erstberatung vereinbaren
          </a>
        </div>
      </section>

      {/* ===== PROBLEMVERSTÄNDNIS ===== */}
      <section className="py-20 px-6 bg-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Sie sind Experte in Ihrem Fach. Online merkt man das nicht.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Sie haben sich als Wahlärztin oder Wahlarzt selbstständig gemacht – für mehr Autonomie, mehr Zeit pro Patient, bessere Medizin. Ihre Expertise spricht für sich, Ihre Patienten empfehlen Sie weiter.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Aber: Wer Sie noch nicht kennt, findet Sie nicht. Nicht auf Google, nicht bei ChatGPT, nicht bei Perplexity. Und die nächste Generation an Patienten sucht genau dort.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Gleichzeitig stehen Sie vor einem regulatorischen Minenfeld: ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz. Eine Website aufzusetzen, die nicht nur gut aussieht, sondern auch rechtskonform ist – das braucht Spezialwissen.
          </p>
          <p className="text-lg text-gray-700">
            Wir bringen beides zusammen: Rechtskonformität und digitale Sichtbarkeit. Damit Ihre Ordination nicht nur existiert, sondern gefunden wird.
          </p>
        </div>
      </section>

      {/* ===== WAS UNS UNTERSCHEIDET ===== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">
            Nicht einfach eine Website. Eine digitale Positionierung.
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Was uns unterscheidet</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Tiefenrecherche statt Template</h3>
              <p className="text-gray-700">Wir analysieren Ihr Fachgebiet, Ihren Werdegang, Ihre Region und Ihre Mitbewerber. Jeder Text auf Ihrer Website basiert auf echten Daten – nicht auf Platzhaltern.</p>
            </div>
            <div className="bg-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">KI-Sichtbarkeit statt nur Google</h3>
              <p className="text-gray-700">Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Wir implementieren strukturierte Daten, semantische Inhalte und llms.txt – damit Ihre Ordination in KI-Antworten genannt wird.</p>
            </div>
            <div className="bg-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Rechtskonform ohne Ihr Zutun</h3>
              <p className="text-gray-700">ÖÄK-Werberichtlinien, DSGVO, Impressumspflicht, Barrierefreiheitsgesetz – wir kennen die Anforderungen und setzen sie um. Sie konzentrieren sich auf Ihre Patienten.</p>
            </div>
            <div className="bg-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-primary">Wunschpatienten statt Laufkundschaft</h3>
              <p className="text-gray-700">Durch gezielte Positionierung erreichen Sie genau die Patienten, die zu Ihrer Spezialisierung passen. Nicht mehr Patienten – die richtigen Patienten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAKETE ===== */}
      <section className="py-20 px-6 bg-light" id="leistungen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">
            Zwei Wege zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Transparente Festpreise. Bis zu 30 % über KMU.DIGITAL förderbar.</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Paket 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">Praxis-Website</h3>
              <p className="text-gray-600 mb-4">Ihre professionelle Online-Präsenz.</p>
              <p className="text-4xl font-bold text-primary mb-1">€ 3.900</p>
              <p className="text-sm text-gray-500 mb-6">netto, einmalig</p>
              <p className="text-gray-700 mb-6">Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – sauber umgesetzt, ohne Kompromisse bei Qualität und Compliance.</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>✓ Bis 5 Seiten individuell gestaltet</li>
                <li>✓ Local SEO &amp; Google Maps</li>
                <li>✓ DSGVO- &amp; ÖÄK-konform</li>
                <li>✓ Basis Schema Markup</li>
                <li>✓ Mobile-Optimierung &amp; SSL</li>
                <li>✓ Online-Terminbuchung</li>
                <li>✓ Cookie-Banner &amp; Impressum</li>
                <li>✓ Einschulung</li>
                <li>✓ 12 Monate technische Betreuung</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Paketpreis: € 3.900</p>
                <p className="text-sm text-green-700">KMU.DIGITAL (30 %): − € 1.170</p>
                <p className="text-lg font-bold text-green-800">Ihr Eigenanteil: € 2.730</p>
              </div>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors">
                Erstberatung anfordern
              </a>
              <p className="text-xs text-gray-500 mt-4">Ideal für Kassenärzte und Wahlärzte, die eine solide digitale Visitenkarte brauchen.</p>
            </div>

            {/* Paket 2 - Empfohlen */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-secondary relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full">EMPFOHLEN</span>
              <h3 className="text-2xl font-bold text-primary mb-2">Digitale Positionierung</h3>
              <p className="text-gray-600 mb-4">Gefunden werden, wo Patienten suchen.</p>
              <p className="text-4xl font-bold text-primary mb-1">€ 7.500</p>
              <p className="text-sm text-gray-500 mb-6">netto, einmalig</p>
              <p className="text-gray-700 mb-6">Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen. Wir recherchieren Ihr Fachgebiet, analysieren Ihren Wettbewerb und positionieren Sie in Google UND KI-Systemen.</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>✓ Alles aus Praxis-Website, plus:</li>
                <li>✓ Bis 10 Seiten</li>
                <li>✓ Tiefenrecherche: Fachgebiet, Wettbewerber, Region</li>
                <li>✓ Zielgruppenanalyse (Wunschpatienten-Profil)</li>
                <li>✓ Maßgeschneiderte Texte</li>
                <li>✓ KI-Readiness: Schema Markup &amp; llms.txt</li>
                <li>✓ KI-Telefonassistent</li>
                <li>✓ KI-Sichtbarkeitsanalyse (Vorher/Nachher)</li>
                <li>✓ FAQ-System</li>
                <li>✓ 12 Monate technische Betreuung</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Paketpreis: € 7.500</p>
                <p className="text-sm text-green-700">KMU.DIGITAL (30 %): − € 2.250</p>
                <p className="text-lg font-bold text-green-800">Ihr Eigenanteil: € 5.250</p>
              </div>
              <a href="#kontakt" className="block text-center bg-secondary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Erstberatung anfordern
              </a>
              <p className="text-xs text-gray-500 mt-4">Nicht einfach eine Website – eine Strategie. Für Wahlärzte, die online die richtigen Patienten erreichen wollen.</p>
            </div>

            {/* Paket 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-2">Ärztezentren &amp; PVEs</h3>
              <p className="text-gray-600 mb-4">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
              <p className="text-2xl font-bold text-primary mb-1">Individuelles Konzept</p>
              <p className="text-sm text-gray-500 mb-6">auf Anfrage</p>
              <p className="text-gray-700 mb-6">Für interdisziplinäre Ärztezentren, Gruppenpraxen und Primärversorgungseinheiten. Digitale Infrastruktur, die alle Fachrichtungen unter einem Dach verbindet.</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>✓ Analyse &amp; Strategie fürs Zentrum</li>
                <li>✓ Interdisziplinäre Schema-Architektur</li>
                <li>✓ KI-Readiness für alle Fachrichtungen</li>
                <li>✓ Individuelle Arzt-Profilseiten</li>
                <li>✓ Gemeinsame llms.txt</li>
                <li>✓ KMU.DIGITAL Förderberatung</li>
                <li>✓ Recruiting &amp; Mehrsprachigkeit</li>
                <li>✓ Laufende Betreuung</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Pro Arzt förderbar: bis € 6.000</p>
                <p className="text-lg font-bold text-green-800">Bei 10 Ärzten: bis € 60.000 Förderung</p>
              </div>
              <a href="#kontakt" className="block text-center bg-primary hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors">
                Projekt besprechen
              </a>
              <p className="text-xs text-gray-500 mt-4">Jeder niedergelassene Arzt im Zentrum kann die Förderung individuell beantragen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KI-SICHTBARKEIT ===== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">
            Werden Sie von ChatGPT empfohlen?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Testen Sie es selbst: Fragen Sie ChatGPT nach einem Facharzt Ihrer Richtung in Ihrer Stadt. Werden Sie genannt? Falls nicht – und das betrifft über 90 % aller Ordinationen in Österreich – dann ist Ihre Online-Präsenz für KI-Systeme unsichtbar.
          </p>
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Unser Drei-Schichten-Ansatz für KI-Sichtbarkeit</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Strukturierte Daten</h4>
              <p className="text-gray-700">Maschinenlesbare Informationen über Ihre Fachrichtung, Leistungen und Standort. Google, Bing und KI-Systeme lesen diese Daten direkt aus.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">Semantische Inhalte</h4>
              <p className="text-gray-700">Texte, die so formuliert sind, dass KI Ihre Expertise korrekt einordnen kann. Nicht SEO-Texte für Google – Antwort-optimierte Inhalte für KI.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-3">llms.txt</h4>
              <p className="text-gray-700">Eine spezielle Datei, die KI-Crawler von OpenAI, Anthropic und Perplexity gezielt auslesen. Ihr digitales Profil für die KI-Suche.</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center mt-8 bg-blue-50 p-6 rounded-xl">
            Wenn ein Patient ChatGPT fragt „Welcher Hautarzt in St. Pölten hat gute Bewertungen?", wird Ihre Ordination in der Antwort genannt – mit Ihrem Namen, Ihrer Fachrichtung und Ihrem Standort.
          </p>
        </div>
      </section>

      {/* ===== FÖRDERUNG ===== */}
      <section className="py-20 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">
            Bis zu 30 % Ihrer Investition kommt zurück.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Über das österreichische Förderprogramm KMU.DIGITAL erhalten niedergelassene Ärztinnen und Ärzte bis zu 30 % der Investitionskosten als Förderung zurück. Maximal € 6.000 pro Unternehmen.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Voraussetzung ist eine einmalige Strategieberatung durch einen zertifizierten Digital Consultant (CDC). Kosten: ca. € 500 – davon werden 50 % (€ 250) ebenfalls gefördert. Wir arbeiten mit einem erfahrenen, externen Förderberater zusammen, der die gesamte Beratung und Antragstellung für Sie übernimmt. Die genaue Abwicklung erklären wir Ihnen im Erstgespräch.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 text-gray-600"></th>
                  <th className="text-center p-4 text-primary font-semibold">Praxis-Website</th>
                  <th className="text-center p-4 text-primary font-semibold">Digitale Positionierung</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Paketpreis</td>
                  <td className="p-4 text-center">€ 3.900</td>
                  <td className="p-4 text-center">€ 7.500</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-gray-700">Förderung (30 %)</td>
                  <td className="p-4 text-center text-green-700">− € 1.170</td>
                  <td className="p-4 text-center text-green-700">− € 2.250</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Ihr Eigenanteil</td>
                  <td className="p-4 text-center font-bold text-lg">€ 2.730</td>
                  <td className="p-4 text-center font-bold text-lg">€ 5.250</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">Strategieberatung (CDC): ca. € 500, davon € 250 gefördert. Netto-Aufwand für Sie: ca. € 250.</p>
        </div>
      </section>

      {/* ===== PROZESS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            In vier Schritten zu Ihrer digitalen Praxis-Präsenz.
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { nr: "1", title: "Erstgespräch", text: "Wir lernen Ihre Ordination kennen: Fachrichtung, Positionierung, Ziele. 30 Minuten, kostenlos. Wir erklären den Ablauf und die Fördermöglichkeiten." },
              { nr: "2", title: "Förderberatung", text: "Unser externer Förderberater (zertifizierter CDC) führt die KMU.DIGITAL Strategieberatung durch und stellt den Förderantrag. Erst nach Förderzusage starten wir." },
              { nr: "3", title: "Umsetzung", text: "Wir analysieren Ihr Fachgebiet, Ihren Wettbewerb und Ihre Region. Daraus entstehen Texte, Design, Technik, Schema Markup und KI-Readiness." },
              { nr: "4", title: "Launch", text: "Ihre Website geht online. Wir überwachen die KI-Sichtbarkeit und halten 12 Monate lang alles technisch aktuell." },
            ].map((step) => (
              <div key={step.nr} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">{step.nr}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-6 bg-light" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Häufige Fragen</h2>
          <div className="space-y-6">
            {[
              { q: "Was kostet eine Website für Ärzte in Österreich?", a: "Unsere Praxis-Website liegt bei € 3.900 netto, die Digitale Positionierung mit Tiefenrecherche und KI-Readiness bei € 7.500 netto. Für Ärztezentren und PVEs erstellen wir individuelle Konzepte. Über KMU.DIGITAL sind bis zu 30 % förderbar." },
              { q: "Was ist KI-Readiness und warum braucht meine Ordination das?", a: "KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in diesen Antworten nicht genannt – unabhängig von Ihrer fachlichen Qualität." },
              { q: "Was sind strukturierte Daten (Schema Markup)?", a: "Maschinenlesbare Informationen im Hintergrund Ihrer Website, die Google, Bing und KI-Systemen mitteilen: Wer Sie sind, welche Fachrichtung Sie haben, welche Leistungen Sie anbieten, wo Ihre Ordination liegt und wie Sie erreichbar sind." },
              { q: "Was ist ein KI-Telefonassistent?", a: "Ein KI-Telefonassistent beantwortet eingehende Anrufe automatisch – auf natürlichem österreichischem Deutsch. Er gibt Auskunft über Ordinationszeiten, nimmt Terminwünsche entgegen und entlastet Ihr Team spürbar bei Routineanfragen." },
              { q: "Wie funktioniert die KMU.DIGITAL Förderung?", a: "Niedergelassene Ärztinnen und Ärzte mit eigener Ordination sind als KMU förderbar. Die Umsetzungsförderung beträgt 30 % der Investitionskosten (max. € 6.000). Voraussetzung ist eine Strategieberatung durch einen zertifizierten Digital Consultant (CDC) – Kosten ca. € 500, davon € 250 gefördert. Wir arbeiten mit einem externen Förderberater zusammen und erklären den gesamten Ablauf im Erstgespräch." },
              { q: "Können Ärztezentren die Förderung mehrfach nutzen?", a: "Ja – jeder niedergelassene Arzt ist ein eigenständiges Unternehmen und kann die Förderung individuell beantragen. Bei einem Ärztezentrum mit 16 Ärzten können bis zu 16 separate Förderanträge gestellt werden." },
              { q: "Was bedeutet llms.txt?", a: "Eine strukturierte Datei auf Ihrer Website, die KI-Crawler gezielt auslesen – ähnlich wie robots.txt für Suchmaschinen, aber speziell für KI-Systeme. Sie enthält eine maschinenoptimierte Zusammenfassung Ihrer Praxis und Leistungen." },
              { q: "Wie lange dauert die Umsetzung?", a: "Praxis-Website: 2–3 Wochen. Digitale Positionierung: 4–6 Wochen. Ärztezentren: 8–12 Wochen. Dazu kommt vorab die Förderabwicklung (ca. 2–4 Wochen)." },
              { q: "Brauche ich technisches Wissen?", a: "Nein. Wir übernehmen alles – von der Recherche über die Förderabwicklung bis zum Launch. Nach der Fertigstellung erhalten Sie eine Einschulung, damit Sie einfache Änderungen selbst vornehmen können." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-semibold text-primary cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KONTAKT / CTA ===== */}
      <section className="py-20 px-6 bg-primary text-white" id="kontakt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre digitale Positionierung?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Vereinbaren Sie ein kostenloses Erstgespräch. 30 Minuten. Unverbindlich. Wir zeigen Ihnen, wie Ihre Ordination in KI-Systemen sichtbar wird.
          </p>
          <a href="mailto:office@mypraxis.at" className="inline-block bg-accent hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Erstberatung vereinbaren
          </a>
          <p className="mt-6 text-blue-200">Oder rufen Sie an: +43 664 19 15 447</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 bg-dark text-gray-400">
        <div className="max-w-5xl mx-auto">
          <p className="mb-4">
            mypraxis.at ist eine auf niedergelassene Ärztinnen und Ärzte spezialisierte Digitalagentur in Österreich. Betrieben von Kevin Hofbauer e.U. mit Sitz in Niederösterreich. Wir erstellen rechtssichere Praxis-Websites nach ÖÄK-Richtlinien, implementieren strukturierte Daten für medizinische Einrichtungen und optimieren die Sichtbarkeit von Ordinationen in KI-Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews.
          </p>
          <p className="mb-6 text-sm">
            Wir betreuen Ärztinnen und Ärzte aller Fachrichtungen: Allgemeinmedizin, Innere Medizin, Orthopädie, Kardiologie, Dermatologie, Gynäkologie, HNO, Urologie, Neurologie, Chirurgie, Augenheilkunde, Kinderheilkunde, Zahnmedizin, Alternativmedizin und alle weiteren Fachrichtungen.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
            <span>© {new Date().getFullYear()} Kevin Hofbauer e.U.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
