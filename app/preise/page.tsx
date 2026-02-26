import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata = {
    title: 'Demo & Preise | mypraxis.at',
    description: 'Alle Preise, Pakete und Demo-Websites für Arzt-Websites von mypraxis.at. Inklusive KMU.DIGITAL Förderung bis zu 30 %.',
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
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Sehen. Vergleichen. Entscheiden.</h1>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">Fünf echte Demo-Websites, transparente Festpreise und bis zu 30 % Förderung über KMU.DIGITAL.</p>
                    </div>
                </div>

                {/* ===== DEMOS ===== */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Beispiel-Websites</p>
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">5 Stile – alle live & klickbar</h2>
                        <p className="text-center text-gray-500 text-sm mb-10">Klicken Sie auf ein Design und erleben Sie es live. Kein Template – jede Website wird individuell umgesetzt.</p>

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
                        <p className="text-center text-gray-400 text-xs">Keiner dieser Stile trifft es genau? <Link href="/#kontakt" className="text-[#1e3ab8] font-semibold hover:underline">Wir gestalten nach Ihren Wünschen →</Link></p>
                    </div>
                </section>

                {/* ===== PREISE ===== */}
                <section className="py-16 px-6 bg-white" id="pakete">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-center mb-2">Transparente Festpreise</p>
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Zwei Pakete. Ein Ziel.</h2>
                        <p className="text-center text-gray-500 text-sm mb-10">Keine versteckten Kosten, keine laufenden Lizenzgebühren. Und über KMU.DIGITAL bis zu 30 % förderbar.</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Paket 1 */}
                            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-7 flex flex-col">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Paket 1</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1">Praxis-Website</h3>
                                    <p className="text-gray-500 text-sm mt-1">Ihr professioneller Online-Auftritt.</p>
                                </div>
                                <p className="text-4xl font-extrabold text-[#1e3ab8] mb-1">€ 3.900</p>
                                <p className="text-xs text-gray-400 mb-6">netto, einmalig · <span className="text-green-600 font-semibold">bis zu € 1.170 förderbar</span></p>
                                <ul className="space-y-2 flex-1 mb-6">
                                    {[
                                        'Bis 5 Seiten (individuelles Design)',
                                        'Local SEO & Google Maps',
                                        'DSGVO- & ÖÄK-konform',
                                        'Basis Schema Markup',
                                        'Online-Terminbuchung (optional)',
                                        'Barrierefreiheit WCAG 2.1',
                                        '12 Monate technische Betreuung',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-green-500 mt-0.5 shrink-0">✓</span>{item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/#kontakt" className="block text-center bg-[#1e3ab8] hover:bg-[#1a33a8] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>

                            {/* Paket 2 */}
                            <div className="bg-[#1e3ab8] rounded-2xl border border-[#1a33a8] p-7 flex flex-col relative overflow-hidden">
                                <div className="absolute top-4 right-4 bg-[#ff8a00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">Empfohlen</div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wide">Paket 2</span>
                                    <h3 className="text-xl font-bold text-white mt-1">Digitale Positionierung</h3>
                                    <p className="text-blue-200 text-sm mt-1">Mit KI-Readiness & Tiefenrecherche.</p>
                                </div>
                                <p className="text-4xl font-extrabold text-white mb-1">€ 7.500</p>
                                <p className="text-xs text-blue-300 mb-6">netto, einmalig · <span className="text-green-300 font-semibold">bis zu € 2.250 förderbar</span></p>
                                <ul className="space-y-2 flex-1 mb-6">
                                    {[
                                        'Alles aus Paket 1 (bis 10 Seiten)',
                                        'Tiefenrecherche Fachgebiet & Region',
                                        'KI-Readiness: Schema Markup, llms.txt',
                                        'Semantische Inhalte für ChatGPT & Co.',
                                        'FAQ-System (reduziert Routineanrufe)',
                                        'KI-Sichtbarkeitsanalyse (Vorher/Nachher)',
                                        'KI-Telefonassistent inklusive',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                                            <span className="text-[#ff8a00] mt-0.5 shrink-0">✓</span>{item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>
                        </div>

                        {/* Ärztezentren */}
                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Für Gruppenpraxen & PVEs</p>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Ärztezentren – Individuelles Konzept</h3>
                            <p className="text-gray-500 text-sm mb-4 max-w-2xl mx-auto">Mehrere Ärzte, mehrere Fachrichtungen – ein gemeinsamer Auftritt. Individuelle Arzt-Profilseiten, interdisziplinäre Schema-Architektur, koordinierte KMU.DIGITAL Förderung für jeden Arzt.</p>
                            <Link href="/#kontakt" className="inline-block bg-white border border-gray-300 hover:border-[#1e3ab8] text-gray-700 hover:text-[#1e3ab8] font-semibold px-6 py-2.5 rounded-xl transition-all text-sm">
                                Angebot anfragen →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== FÖRDERUNG ===== */}
                <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-emerald-50" id="foerderung">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">KMU.DIGITAL</span>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Bis zu 30 % zurück vom Staat</h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">Alle niedergelassenen Ärztinnen und Ärzte mit eigener Ordination sind über das KMU.DIGITAL-Programm förderbar. Die Umsetzungsförderung beträgt 30 % der Investitionskosten – maximal € 6.000.</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Bei einem Ärztezentrum mit mehreren Ärzten kann <strong>jeder Arzt individuell fördern</strong> – da jeder als eigenständiges Unternehmen gilt.</p>
                                <Link href="/#kontakt" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                                    Förderung nutzen – kostenlos anfragen
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { step: '1', title: 'Kostenloses Erstgespräch', desc: 'Wir besprechen Ihre Ordination und prüfen die Förderfähigkeit.' },
                                    { step: '2', title: 'Strategieberatung (CDC)', desc: 'Ca. 2 Stunden, ~€ 500 (davon € 250 gefördert). Pflicht für Stufe 2.' },
                                    { step: '3', title: 'Förderantrag beim AWS', desc: 'Wir begleiten Sie. Bearbeitungszeit: 2–4 Wochen.' },
                                    { step: '4', title: 'Umsetzung & Launch', desc: '30 % der Projektkosten werden nach Abschluss erstattet.' },
                                ].map((s) => (
                                    <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-green-100 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center shrink-0">{s.step}</div>
                                        <div>
                                            <p className="font-semibold text-gray-900 text-sm">{s.title}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA ===== */}
                <section className="py-14 px-6 bg-white">
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1e3ab8] to-[#2a50cc] rounded-2xl p-10 text-white text-center">
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
