import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
    title: 'Demo & Referenzkunden | mypraxis.at',
    description: 'Demo-Websites und Referenzkunden-Programm von mypraxis.at. Sie bestimmen den Wert nach Fertigstellung. KMU.DIGITAL Förderung demnächst verfügbar.',
    alternates: { canonical: '/preise', languages: { 'de-AT': '/preise' } },
}

const demos = [
    { href: '/demo/privatarzt-classic', img: '/demo-preview-classic.jpg', label: 'Classic Trust', desc: 'Seriös & vertrauenserweckend' },
    { href: '/demo/privatarzt-modern', img: '/demo-preview-modern.jpg', label: 'Modern Premium', desc: 'Dunkel, hochwertig, mutig' },
    { href: '/demo/privatarzt-warm', img: '/demo-preview-warm.jpg', label: 'Warm & Persönlich', desc: 'Einladend & menschlich' },
    { href: '/demo/aerztezentrum-classic', img: '/demo-preview-aerztezentrum.jpg', label: 'Ärztezentrum Classic', desc: 'Übersichtlich & institutionell' },
    { href: '/demo/aerztezentrum-premium', img: '/demo-preview-premium.jpg', label: 'Ärztezentrum Premium', desc: 'Modern & corporate' },
]

export default function PreisePage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gray-50 pt-20">

                {/* Hero */}
                <div className="bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] text-white py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-block bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">Demo & Preise</span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sehen. Bewerben. Starten.</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">Fünf echte Demo-Websites – und ein Programm, bei dem Sie den Preis selbst bestimmen.</p>
                    </div>
                </div>

                {/* ===== DEMOS ===== */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Beispiel-Websites</p>
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">5 Stile – alle live & klickbar</h2>
                        <p className="text-center text-gray-500 text-sm mb-2">Diese Demos dienen ausschließlich der Anschauung – als Ausgangspunkt, nicht als Endprodukt.</p>
                        <p className="text-center text-gray-400 text-xs mb-10">Farben, Typografie, Struktur und Inhalte werden für jede Ordination von Grund auf neu entwickelt. Kein Template, das einfach befüllt wird.</p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                            {demos.map((d) => (
                                <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                                    className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block">
                                    <img src={d.img} alt={d.label} className="w-full object-cover object-top h-44 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-xs font-bold leading-tight">{d.label}</p>
                                        <p className="text-white/70 text-[10px]">{d.desc}</p>
                                    </div>
                                    <span className="absolute top-2 right-2 bg-[#ff8a00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Ansehen →</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-xs">Keiner dieser Stile trifft es genau? <Link href="/#kontakt" className="text-[#1e3ab8] font-semibold hover:underline">Ihre Ordination bekommt ein vollständig eigenes Design →</Link></p>
                    </div>
                </section>

                {/* ===== REFERENZKUNDEN ===== */}
                <section className="py-16 px-6 bg-white" id="pakete">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f1623] to-[#1a2845] border border-white/10 shadow-xl p-8 sm:p-12 text-center">
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#ff8a00]/6 blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-600/6 blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <span className="inline-block bg-[#ff8a00]/15 border border-[#ff8a00]/35 text-[#ff8a00] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase">
                                    Referenzkunden-Programm 2026
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                                    Ich suche <span className="text-[#ff8a00]">9 Ordinationen.</span> Nicht mehr. Nicht weniger.
                                </h2>
                                <div className="flex items-center gap-4 justify-center my-6">
                                    <div className="h-px bg-white/15 w-12 sm:w-20" />
                                    <p className="text-white/35 text-xs uppercase tracking-[0.3em] font-medium whitespace-nowrap">Das Prinzip</p>
                                    <div className="h-px bg-white/15 w-12 sm:w-20" />
                                </div>
                                <p className="text-3xl sm:text-4xl font-bold text-[#ff8a00] leading-tight">Sie bestimmen</p>
                                <p className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-2">den Wert.</p>
                                <p className="text-white/40 text-sm italic mb-6">Klingt verrückt? Ist es auch.</p>
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
                                    Nach Fertigstellung überweisen Sie, was es Ihnen wert ist. Kein Fixpreis. Kein Risiko. Danach gelten normale Preise.
                                </p>
                                <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto">
                                    {[
                                        { label: 'Kassenärzte', n: '3' },
                                        { label: 'Privatärzte', n: '3' },
                                        { label: 'Ärztezentren', n: '3' },
                                    ].map((c) => (
                                        <div key={c.label} className="bg-white/5 border border-white/10 rounded-xl py-3 px-2 text-center">
                                            <div className="text-xl font-extrabold text-[#ff8a00]">{c.n}</div>
                                            <div className="text-white/50 text-[10px] mt-0.5">{c.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/#kontakt" className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/20 text-sm">
                                    15 Minuten Gespräch vereinbaren
                                </Link>
                                <p className="text-white/25 text-xs mt-4">Unverbindlich · Kein Pitch · Kein Druck</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== REGULÄRE PAKETE & PREISE ===== */}
                <section className="py-16 px-6 bg-gray-50" id="pakete-preise">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="inline-block bg-white border border-gray-200 text-gray-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                                Nach dem Referenzkundenprogramm
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Reguläre Pakete & Preise</h2>
                            <p className="text-gray-500 text-sm max-w-lg mx-auto">Sobald die 9 Referenzplätze vergeben sind, gelten diese Preise für alle neuen Kunden.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Praxis-Website */}
                            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200 flex flex-col">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b3e] mb-1">Praxis-Website</h3>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-extrabold text-[#0d1b3e]">€ 3.900</span>
                                    <span className="text-gray-400 text-sm">netto</span>
                                </div>
                                <p className="text-green-600 text-xs font-semibold mb-5">Mit KMU.DIGITAL: ab € 2.730 netto (–30 %)</p>
                                <ul className="space-y-2 text-gray-700 flex-1 text-xs sm:text-sm mb-6">
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
                                        'Laufende Betreuung: mind. 6–12 Monate empfohlen',
                                    ].map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/#kontakt" className="block text-center bg-[#0d1b3e] hover:bg-[#162890] text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-105 text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>

                            {/* Digitale Positionierung */}
                            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] rounded-2xl shadow-2xl p-6 sm:p-8 relative flex flex-col border-2 border-[#ff8a00]/40">
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff8a00] text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                                    EMPFOHLEN
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Digitale Positionierung</h3>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-3xl font-extrabold text-white">€ 7.500</span>
                                    <span className="text-blue-200 text-sm">netto</span>
                                </div>
                                <p className="text-green-300 text-xs font-semibold mb-5">Mit KMU.DIGITAL: ab € 5.250 netto (–30 %)</p>
                                <ul className="space-y-2 text-blue-100 flex-1 text-xs sm:text-sm mb-4">
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
                                        'Laufende Betreuung: mind. 6–12 Monate empfohlen',
                                    ].map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <span className="text-[#ff8a00] mt-0.5 font-bold flex-shrink-0">✓</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-white/10 border border-white/20 rounded-xl p-3 mb-4 text-xs text-blue-200 flex items-start gap-2">
                                    <span className="text-[#ffaa40] flex-shrink-0 mt-0.5">＋</span>
                                    <span><span className="text-[#ffaa40] font-semibold">Optional:</span> KI-Telefonassistent zubuchbar</span>
                                </div>
                                <Link href="/#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>
                        </div>

                        {/* Ärztezentren */}
                        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#0f1623] mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-stretch">
                                <div className="p-5 sm:w-52 lg:w-60 bg-gradient-to-br from-[#1a2845] to-[#0f1623] border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center gap-2">
                                    <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-[0.3em]">Auf Anfrage</span>
                                    <h3 className="text-lg font-bold text-white leading-snug">Ärztezentren & PVEs</h3>
                                    <p className="text-white/40 text-xs leading-relaxed">Digitale Infrastruktur für Ihr gesamtes Haus.</p>
                                </div>
                                <div className="flex-1 p-5 flex items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {['Zentrum-Strategie', 'Schema-Architektur', 'KI-Readiness', 'Arzt-Profilseiten', 'llms.txt', 'Förderberatung', 'Mehrsprachigkeit (opt.)', 'Technische Betreuung'].map((f) => (
                                            <span key={f} className="text-xs text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{f}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-5 sm:w-52 lg:w-60 bg-amber-500/5 border-t sm:border-t-0 sm:border-l border-white/10 flex flex-col justify-center gap-3 text-center">
                                    <p className="text-white/50 text-xs leading-relaxed">KMU.DIGITAL förderbar –<br />bis zu € 6.000 pro Arzt</p>
                                    <Link href="/#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-2.5 rounded-xl transition-all text-sm">Anfragen</Link>
                                </div>
                            </div>
                        </div>

                        {/* KMU.DIGITAL */}
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
                            <p className="text-green-800 font-semibold text-sm mb-1">KMU.DIGITAL Förderung: bis zu 30 % auf den Paketpreis</p>
                            <p className="text-green-700 text-xs">Voraussetzung: Strategieberatung durch zertifizierten Digital Consultant (CDC) · ca. € 500 (davon € 250 gefördert) · Kevin hat einen externen Förderberater.</p>
                        </div>
                    </div>
                </section>

                {/* ===== CTA ===== */}
                <section className="py-14 px-6 bg-white">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-10 text-white text-center">
                        <h2 className="text-2xl font-bold mb-3">Kostenloses Erstgespräch vereinbaren</h2>
                        <p className="text-blue-100 mb-6">30 Minuten, unverbindlich. Analyse Ihrer aktuellen Online-Präsenz und konkreter Handlungsempfehlungen.</p>
                        <Link href="/#kontakt" className="inline-block bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md">
                            Jetzt anfragen
                        </Link>
                        <p className="text-blue-300 text-xs mt-4">Mo–Fr 09:00–18:00 · office@mypraxis.at · +43 664 19 15 447</p>
                    </div>
                </section>

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
