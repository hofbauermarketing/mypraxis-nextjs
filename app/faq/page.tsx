import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
    title: 'FAQ – Häufige Fragen | mypraxis.at',
    description: 'Alle Fragen rund um Website, KI-Sichtbarkeit, KMU.DIGITAL-Förderung, Recht, Kosten und Technik für niedergelassene Ärzte in Österreich.',
    alternates: { canonical: '/faq', languages: { 'de-AT': '/faq' } },
}

const faqKategorien = [
    {
        id: 'kosten',
        icon: '💶',
        titel: 'Kosten & Pakete',
        fragen: [
            {
                q: 'Was kostet eine Website für Ärzte in Österreich?',
                a: 'Unsere Praxis-Website liegt bei € 3.900 netto, die Digitale Positionierung mit Tiefenrecherche und KI-Readiness bei € 7.500 netto. Für Ärztezentren und PVEs erstellen wir individuelle Konzepte. Alle Preise verstehen sich exkl. MwSt. – und sind über KMU.DIGITAL um bis zu 30 % förderbar.',
            },
            {
                q: 'Was ist der Unterschied zwischen Praxis-Website und Digitale Positionierung?',
                a: 'Die Praxis-Website ist Ihr professioneller Online-Auftritt (bis 5 Seiten, Ordinationszeiten, Leistungen, Kontakt). Die Digitale Positionierung geht weit darüber hinaus: vollständige KI-Readiness, strukturierte Daten (Schema Markup), llms.txt, Tiefenrecherche zu Ihrer Fachrichtung und Region, bis 10 Seiten inkl. FAQ-System. Kurz: Website = sichtbar sein. Positionierung = von KI empfohlen werden.',
            },
            {
                q: 'Kann ich monatlich zahlen?',
                a: 'Ja. Wir bieten auf Anfrage eine Ratenzahlung über 6 oder 12 Monate an. Sprechen Sie uns im Erstgespräch darauf an – wir finden eine Lösung, die zu Ihrer Ordination passt.',
            },
            {
                q: 'Gibt es Zusatzoptionen?',
                a: 'Ja: KI-Telefonassistent (automatische Anrufbearbeitung), Blog-Einrichtung, Google Business Optimierung, Social-Media-Vorlagen, laufende SEO-Pflege und Übersetzungen für mehrsprachige Praxen. Details klären wir im Erstgespräch.',
            },
        ],
    },
    {
        id: 'foerderung',
        icon: '🏛️',
        titel: 'KMU.DIGITAL Förderung',
        fragen: [
            {
                q: 'Wie beantrage ich die KMU.DIGITAL-Förderung?',
                a: 'Der Prozess läuft in zwei Schritten: (1) Strategieberatung durch einen zertifizierten Digital Consultant (CDC) – Kosten ca. € 500, davon € 250 gefördert. (2) Danach Antrag auf Umsetzungsförderung (30 % der Investitionskosten, max. € 6.000). Wir begleiten Sie durch den gesamten Prozess – von der Anfrage beim AWS bis zum finalen Abschluss.',
            },
            {
                q: 'Welche Ordinationen sind förderfähig?',
                a: 'Alle niedergelassenen Ärztinnen und Ärzte mit eigener Ordination gelten als KMU und sind grundsätzlich förderfähig – unabhängig von der Fachrichtung. Kassendarzt, Wahlarzt, Gruppenpraxis – alle. Nicht förderfähig sind Krankenhäuser und rein angestellte Ärzte ohne eigene Ordination.',
            },
            {
                q: 'Können Ärztezentren die Förderung mehrfach nutzen?',
                a: 'Ja – jeder niedergelassene Arzt ist ein eigenständiges Unternehmen und kann die Förderung individuell beantragen. Bei einem Ärztezentrum mit 16 Ärzten können bis zu 16 separate Förderanträge gestellt werden. Wir koordinieren das auf Wunsch zentral.',
            },
        ],
    },
    {
        id: 'ki',
        icon: '🤖',
        titel: 'KI-Sichtbarkeit & Technik',
        fragen: [
            {
                q: 'Wie wird meine Praxis in ChatGPT oder Perplexity sichtbar?',
                a: 'Indem Ihre Website KI-lesbar aufgebaut ist: strukturierte Daten (Schema Markup), semantische Inhalte, eine llms.txt-Datei und eine klare Beantwortung der Fragen, die KI-Systeme für ihre Antworten verwenden. KI-Assistenten wie ChatGPT ziehen keine Echtzeit-Daten aus Google – sie lesen indexierte Inhalte. Wer jetzt KI-optimiert startet, hat einen echten First-Mover-Vorteil gegenüber Mitbewerbern.',
            },
            {
                q: 'Was ist llms.txt?',
                a: 'Eine strukturierte Datei auf Ihrer Website, die KI-Crawler (LLM-Bots) gezielt auslesen – ähnlich wie robots.txt für Suchmaschinen, aber speziell für KI-Systeme. Sie enthält eine maschinenoptimierte Zusammenfassung Ihrer Praxis, Fachrichtung und Leistungen.',
            },
            {
                q: 'Was ist KI-Readiness und warum braucht meine Ordination das?',
                a: 'KI-Readiness beschreibt, wie gut Ihre Online-Präsenz für KI-Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews aufbereitet ist. Immer mehr Patienten suchen über KI-Assistenten nach Ärzten. Ohne strukturierte Daten und semantische Inhalte wird Ihre Ordination in diesen Antworten schlicht nicht genannt.',
            },
            {
                q: 'Was sind strukturierte Daten (Schema Markup)?',
                a: 'Maschinenlesbare Informationen im Hintergrund Ihrer Website, die Google, Bing und KI-Systemen mitteilen: Wer Sie sind, welche Fachrichtung Sie haben, welche Leistungen Sie anbieten, wo Ihre Ordination liegt und wie Sie erreichbar sind. Für Ärzte verwenden wir u.a. MedicalBusiness, Physician und MedicalCondition Schema.',
            },
            {
                q: 'Was ist ein KI-Telefonassistent?',
                a: 'Ein KI-Telefonassistent beantwortet eingehende Anrufe automatisch – auf natürlichem österreichischem Deutsch. Er gibt Auskunft über Ordinationszeiten, nimmt Terminwünsche entgegen und entlastet Ihr Team spürbar bei Routineanfragen. Ideal für Stoßzeiten und Urlaubszeiten.',
            },
            {
                q: 'Wie lange dauert es, bis meine Website bei Google sichtbar ist?',
                a: 'Zwischen 2 und 12 Wochen, abhängig von Fachrichtung, Region und Wettbewerb. Neue Websites brauchen Zeit. Was sofort funktioniert: KI-Systeme wie ChatGPT und Perplexity lesen strukturierte Daten oft innerhalb weniger Tage aus. Google-Rankings folgen danach organisch.',
            },
        ],
    },
    {
        id: 'recht',
        icon: '⚖️',
        titel: 'Recht & Richtlinien',
        fragen: [
            {
                q: 'Sind Arztwebsites in Österreich DSGVO-konform?',
                a: 'Unsere Websites sind DSGVO-konform konzipiert: Cookiebanner, Datenschutzerklärung, keine unnötigen Drittanbieter-Tracker. Wir hosting in der EU, nutzen österreichkonformes Impressum und achten auf die Besonderheiten für medizinische Berufe (keine Patientendaten auf der Website).',
            },
            {
                q: 'Was passiert bei Verstößen gegen ÖÄK-Richtlinien?',
                a: 'Die Österreichische Ärztekammer hat klare Richtlinien zu Werbemaßnahmen für Ärzte: keine Vergleiche mit Mitbewerbern, keine marktschreierische Werbung, sachliche Kommunikation. Wir kennen diese Richtlinien und texten alle Inhalte entsprechend. Unsere Kunden hatten bisher keine Beanstandungen.',
            },
            {
                q: 'Ist die Website barrierefrei (WCAG / Barrierefreiheitsgesetz)?',
                a: 'Ja. Ab 2025 gilt das EU-weite Barrierefreiheitsstärkungsgesetz auch für viele Unternehmens-Websites. Unsere Websites sind auf WCAG 2.1 Level AA ausgelegt: semantisches HTML, ausreichende Kontrastverhältnisse, Tastaturnavigation, Alt-Texte für Bilder. Auf expliziten Wunsch erstellen wir eine Barrierefreiheitserklärung.',
            },
            {
                q: 'Wer haftet für die Inhalte der Website?',
                a: 'Die inhaltliche Verantwortung liegt beim jeweiligen Arzt/der Ärztin als Betreiber:in der Website. Wir erstellen die Texte gemeinsam und geben sie zur Freigabe – Sie prüfen die medizinischen Angaben. Im Impressum sind Sie als Betreiber:in eingetragen.',
            },
        ],
    },
    {
        id: 'portale',
        icon: '🔍',
        titel: 'Portale & Vergleich',
        fragen: [
            {
                q: 'Was ist der Unterschied zwischen mypraxis.at, DocFinder und Herold?',
                a: 'DocFinder und Herold sind Portale – Sie sind dort als Eintrag gelistet, aber haben keine eigene Kontrolle über Darstellung, Inhalte oder Ranking. Eine eigene Website gibt Ihnen vollständige Kontrolle: eigene Marke, eigene Texte, eigene KI-Optimierung. Portale können Ihren Eintrag ändern oder kostenpflichtig machen – Ihre eigene Domain bleibt immer Ihnen.',
            },
            {
                q: 'Meine Mitbewerber haben längst eine Website – ist es nicht zu spät?',
                a: 'Für klassisches Google-SEO: vielleicht. Wer früher startet, hat einen Vorsprung – der ist real, aber aufholbar. Für KI-Sichtbarkeit: nein. Der Großteil der Ordinationen in Österreich hat keine strukturierten Daten, kein Schema Markup, keine llms.txt. KI-Systeme können diese Websites meist nicht vollständig lesen. Wer jetzt startet und es richtig macht, hat einen echten First-Mover-Vorteil.',
            },
        ],
    },
    {
        id: 'technik',
        icon: '🛠️',
        titel: 'Technik & Ablauf',
        fragen: [
            {
                q: 'Brauche ich technisches Know-how?',
                a: 'Nein. Wir übernehmen alles – von der Recherche über die Förderabwicklung bis zum Launch. Nach der Fertigstellung erhalten Sie eine persönliche Einschulung, damit Sie einfache Änderungen (Öffnungszeiten, Texte) selbst vornehmen können. Für alles andere sind wir da.',
            },
            {
                q: 'Wie lange dauert der Launch?',
                a: 'Praxis-Website: 2–3 Wochen. Digitale Positionierung: 4–6 Wochen. Ärztezentren: 8–12 Wochen. Dazu kommt vorab die Förderabwicklung (ca. 2–4 Wochen). Wir halten Sie laufend auf dem aktuellen Stand.',
            },
            {
                q: 'Wer übernimmt Updates nach den 12 Monaten Betreuung?',
                a: 'Nach den inkludierten 12 Monaten können Sie die technische Betreuung jederzeit zu günstigen Konditionen verlängern. Viele unserer Kunden entscheiden sich für ein laufendes Wartungspaket. Alternativ übergeben wir alles vollständig in Ihre Hände – inklusive Zugangsdaten und Dokumentation.',
            },
            {
                q: 'Wie integriere ich eine Online-Terminbuchung?',
                a: 'Auf Wunsch integrieren wir gängige Buchungssysteme wie Doctolib, Samedi oder eine eigene Lösung direkt in Ihre Website. Patienten können dann rund um die Uhr Termine anfragen oder buchen – ohne Telefonanruf. Das reduziert Routineanrufe spürbar und erhöht die Patientenzufriedenheit.',
            },
            {
                q: 'Reduziert ein FAQ auf der Website wirklich Routineanrufe?',
                a: 'Ja – und das ist messbar. Ordinationen mit gut strukturierten FAQ-Seiten berichten von 20–40 % weniger Routineanrufen zu Themen wie Öffnungszeiten, Kassenvertrag, Parken, Impfungen oder Mitgebrachtem. Das entlastet Ihr Team und verbessert gleichzeitig das Patienten-Erlebnis.',
            },
        ],
    },
]

export default function FaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqKategorien.flatMap((k) =>
            k.fragen.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
            }))
        ),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navigation />
            <main className="min-h-screen bg-gray-50 pt-24 pb-20">

                {/* Hero */}
                <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-14 px-6">
                    <div className="max-w-5xl mx-auto">
                        <nav className="flex items-center gap-2 text-blue-200/70 text-xs mb-6">
                            <Link href="/" className="hover:text-white transition-colors">mypraxis.at</Link>
                            <span>/</span>
                            <span className="text-blue-200">FAQ</span>
                        </nav>
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Häufige Fragen</h1>
                        <p className="text-blue-100 text-lg max-w-2xl">Alles was Sie über Website, KI-Sichtbarkeit, Förderung, Recht und Technik wissen müssen – kompakt und ehrlich beantwortet.</p>
                    </div>
                </div>

                {/* Kategorie-Sprungmarken */}
                <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
                    <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-2 py-3">
                        {faqKategorien.map((k) => (
                            <a key={k.id} href={`#${k.id}`} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#1e3ab8] bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 px-3 py-1.5 rounded-full transition-all">
                                <span>{k.icon}</span>{k.titel}
                            </a>
                        ))}
                    </div>
                </div>

                {/* FAQ Kategorien */}
                <div className="max-w-5xl mx-auto px-6 mt-10 space-y-14">
                    {faqKategorien.map((kat) => (
                        <section key={kat.id} id={kat.id}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{kat.icon}</span>
                                <h2 className="text-xl font-bold text-gray-900">{kat.titel}</h2>
                            </div>
                            <div className="space-y-2">
                                {kat.fragen.map((faq, i) => (
                                    <details key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm group overflow-hidden">
                                        <summary className="font-semibold text-[#1e3ab8] cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 text-sm">
                                            {faq.q}
                                            <span className="ml-4 shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-[#1e3ab8] font-bold text-sm group-open:rotate-45 transition-transform duration-300">+</span>
                                        </summary>
                                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                                            <p className="text-gray-600 leading-relaxed text-sm mb-3">{faq.a}</p>
                                            <Link href="/#kontakt" className="inline-flex items-center gap-1 text-[#ff8a00] hover:text-[#e67a00] text-xs font-semibold transition-colors">
                                                → Erstgespräch buchen
                                            </Link>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* CTA */}
                <div className="max-w-5xl mx-auto px-6 mt-16">
                    <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl font-bold mb-3">Noch eine Frage?</h2>
                        <p className="text-blue-100 mb-6 max-w-xl mx-auto">30 Minuten, unverbindlich. Wir analysieren Ihre Online-Präsenz und zeigen, was konkret möglich ist.</p>
                        <Link href="/#kontakt" className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md">
                            Kostenlose Erstberatung vereinbaren
                        </Link>
                    </div>
                </div>

            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
                <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span>© {new Date().getFullYear()} mypraxis.at – Hofbauer Marketing</span>
                    <nav className="flex gap-6">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                    </nav>
                </div>
            </footer>
        </>
    )
}
