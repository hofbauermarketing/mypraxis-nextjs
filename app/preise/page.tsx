import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ReferenzkundenSection from '@/components/ReferenzkundenSection'

export const metadata = {
    title: 'Arzt-Website Demo & Preise für Österreich & Deutschland | mypraxis.at',
    description: '5 Demo-Websites für Arztpraxen. Leistungspakete & Referenzkunden-Programm für niedergelassene Ärzte in Österreich und Deutschland. Preise auf Anfrage. DSGVO- & ÖÄK-konform.',
    keywords: 'Arzt Website Preis Österreich Deutschland, Praxis Website Kosten, Demo Arztwebsite, Webdesign Arztpraxis, Praxis Website Wien, Arzt Website Agentur Österreich Deutschland',
    alternates: { canonical: '/preise', languages: { 'de-AT': '/preise' } },
    openGraph: {
        title: 'Arzt-Website Demo & Preise – mypraxis.at',
        description: '5 Demo-Websites für Arztpraxen, individuelle Leistungspakete & Referenzkunden-Programm. DSGVO-konform, ÖÄK-konform – für Ärzte in Österreich und Deutschland.',
        url: 'https://www.mypraxis.at/preise',
        siteName: 'mypraxis.at',
        locale: 'de_AT',
        type: 'website',
    },
}

const demos = [
    { href: '/demo/privatarzt-classic', img: '/demo-preview-classic.jpg', label: 'Classic Trust', desc: 'Seriös & vertrauenserweckend' },
    { href: '/demo/privatarzt-modern', img: '/demo-preview-modern.jpg', label: 'Modern Premium', desc: 'Dunkel, hochwertig, mutig' },
    { href: '/demo/privatarzt-warm', img: '/demo-preview-warm.jpg', label: 'Warm & Persönlich', desc: 'Einladend & menschlich' },
    { href: '/demo/aerztezentrum-classic', img: '/demo-preview-aerztezentrum.jpg', label: 'Ärztezentrum Classic', desc: 'Übersichtlich & institutionell' },
    { href: '/demo/aerztezentrum-premium', img: '/demo-preview-premium.jpg', label: 'Ärztezentrum Premium', desc: 'Modern & corporate' },
]

export default function PreisePage() {
    const preiseSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'mypraxis.at', item: 'https://www.mypraxis.at' },
                    { '@type': 'ListItem', position: 2, name: 'Demo & Preise', item: 'https://www.mypraxis.at/preise' },
                ],
            },
            {
                '@type': 'ItemList',
                '@id': 'https://www.mypraxis.at/preise#demos',
                name: 'Demo-Websites für Arztpraxen',
                description: '5 Stilvorlagen für professionelle, KI-sichtbare Arzt-Websites',
                numberOfItems: 5,
                itemListElement: demos.map((d, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    item: {
                        '@type': 'WebPage',
                        name: d.label,
                        url: `https://www.mypraxis.at${d.href}`,
                        description: d.desc,
                    },
                })),
            },
            {
                '@type': 'Service',
                '@id': 'https://www.mypraxis.at/preise#praxis-website',
                name: 'Praxis-Website für Ärzte',
                serviceType: 'Webdesign & digitale Positionierung',
                provider: { '@id': 'https://www.mypraxis.at/#organization' },
                areaServed: [
                    { '@type': 'Country', name: 'Österreich' },
                    { '@type': 'Country', name: 'Deutschland' },
                ],
                description: 'Professionelle, DSGVO- und ÖÄK-konforme Website für niedergelassene Ärztinnen und Ärzte. Individuelles Design, Local SEO, Basis Schema Markup, 12 Monate Betreuung.',
                offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
            },
            {
                '@type': 'Service',
                '@id': 'https://www.mypraxis.at/preise#digitale-positionierung',
                name: 'Digitale Positionierung für Wahlärzte',
                serviceType: 'KI-Readiness & digitale Positionierung',
                provider: { '@id': 'https://www.mypraxis.at/#organization' },
                areaServed: [
                    { '@type': 'Country', name: 'Österreich' },
                    { '@type': 'Country', name: 'Deutschland' },
                ],
                description: 'Vollständige KI-Readiness für Wahlärzte: Tiefenrecherche, maßgeschneiderte Texte, erweitertes Schema Markup, llms.txt, FAQ-System, KI-Sichtbarkeitsanalyse, 12 Monate Betreuung.',
                offers: { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
            },
        ],
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preiseSchema) }} />
            <Navigation />
            <main className="min-h-screen bg-gray-50">

                {/* ===== HERO ===== */}
                <div className="relative overflow-hidden text-white pt-28 pb-20 px-6" style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 48px), 0 100%)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#112080] to-[#0a0f1e]" />
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <span className="inline-block bg-[#ff8a00]/15 border border-[#ff8a00]/35 text-[#ff8a00] text-xs font-bold px-4 py-1.5 mb-5 tracking-wider uppercase">
                            Demo & Leistungen
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">Sehen. Bewerben. Starten.</h1>
                        <h2 className="text-blue-200 text-lg font-medium mb-4">Arzt-Website & digitale Positionierung für Ärzte in Österreich & Deutschland</h2>
                        <p className="text-blue-100 text-base max-w-2xl mx-auto">Fünf echte Demo-Websites – und ein begrenztes Referenzkunden-Programm mit reduzierten Pilotkonditionen.</p>
                    </div>
                </div>

                {/* ===== DEMOS ===== */}
                <section className="py-14 px-6 bg-white relative overflow-hidden">
                    {/* Strukturhintergrund: diagonale Linien, sehr dezent */}
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(30,58,184,0.025), rgba(30,58,184,0.025) 1px, transparent 1px, transparent 40px)' }} />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-8">
                            <span className="inline-block bg-blue-50 text-[#1e3ab8] text-[10px] font-bold px-3 py-1 uppercase tracking-[0.25em] mb-2">Beispiel-Websites</span>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">5 Stile – alle live & klickbar</h2>
                            <p className="text-gray-400 text-xs max-w-xl mx-auto">Farben, Typografie, Struktur und Inhalte werden für jede Ordination individuell entwickelt. Kein Template.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
                            {demos.map((d) => (
                                <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer"
                                    className="group relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block"
                                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
                                    <img src={d.img} alt={d.label} className="w-full object-cover object-top h-40 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white text-xs font-bold leading-tight">{d.label}</p>
                                        <p className="text-white/65 text-[10px]">{d.desc}</p>
                                    </div>
                                    <span className="absolute top-2 right-2 bg-[#ff8a00] text-white text-[9px] font-bold px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">Ansehen →</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-xs">Keiner dieser Stile trifft es genau? <Link href="/#kontakt" className="text-[#1e3ab8] font-semibold hover:underline">Ihre Ordination bekommt ein vollständig eigenes Design →</Link></p>
                    </div>
                </section>

                {/* ===== REFERENZKUNDEN-PROGRAMM ===== */}
                <section className="py-14 px-6 bg-[#0d1120] relative overflow-hidden">
                    {/* Strukturhintergrund: feines Grid leuchtendes Blau */}
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(30,58,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,184,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    {/* Glow oben rechts + unten links */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#ff8a00]/10 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#1e3ab8]/20 blur-3xl pointer-events-none" />
                    {/* Diagonale Akzentlinie */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1e3ab8]/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff8a00]/20 to-transparent pointer-events-none" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <ReferenzkundenSection />
                    </div>
                </section>

                {/* ===== LEISTUNGSPAKETE ===== */}
                <section className="py-14 px-6 relative overflow-hidden" id="leistungen" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 40%, #fff8f2 100%)' }}>
                    {/* Dot-Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,184,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                    {/* Große Orbs im Hintergrund – moderner Mesh-Effekt */}
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-200/30 via-indigo-100/20 to-transparent blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-orange-100/40 via-amber-50/25 to-transparent blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-50/50 blur-2xl pointer-events-none" />
                    {/* Subtile horizontale Trennlinie oben */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1e3ab8]/20 to-transparent pointer-events-none" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-8">
                            <span className="inline-block bg-blue-50 text-[#1e3ab8] text-[10px] font-bold px-3 py-1 uppercase tracking-[0.25em] mb-2">Was Sie bekommen</span>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Handgemacht. Kein Template. Kein Baukasten.</h2>
                            <p className="text-gray-500 text-sm max-w-lg mx-auto">Jede Ordination ist anders – deshalb wird jede Website individuell entwickelt.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 mb-5">
                            {/* Praxis-Website */}
                            <div className="bg-white shadow-md p-5 border border-gray-200 flex flex-col" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
                                <h3 className="text-lg font-bold text-[#0d1b3e] mb-1.5">Praxis-Website</h3>
                                <p className="text-gray-500 mb-3 text-xs leading-relaxed">
                                    Für Ärztinnen und Ärzte, die eine professionelle, rechtssichere Website brauchen – individuell entwickelt, ohne Kompromisse.
                                </p>
                                <ul className="space-y-1.5 text-gray-700 flex-1 text-xs mb-4">
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
                                <Link href="/#kontakt" className="block text-center bg-[#0d1b3e] hover:bg-[#162890] text-white font-semibold py-3 transition-all hover:scale-105 text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>

                            {/* Digitale Positionierung */}
                            <div className="bg-gradient-to-b from-[#1e3ab8] to-[#2a50cc] shadow-2xl p-5 relative flex flex-col overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)', boxShadow: '0 0 0 1.5px rgba(255,138,0,0.5)' }}>
                                <div className="absolute top-3 right-5 bg-[#ff8a00] text-white text-[9px] font-black px-3 py-1.5 shadow-lg tracking-[0.2em] whitespace-nowrap" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)' }}>
                                    ★ EMPFOHLEN
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1.5 pr-16 sm:pr-28">Digitale Positionierung</h3>
                                <p className="text-blue-200 mb-3 text-xs leading-relaxed">
                                    Für Wahlärztinnen und Wahlärzte, die gezielt Wunschpatienten erreichen wollen – in Google UND in KI-Systemen.
                                </p>
                                <ul className="space-y-1.5 text-blue-100 flex-1 text-xs mb-3">
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
                                <div className="bg-white/10 border border-white/20 p-3 mb-3 text-xs text-blue-200 flex items-start gap-2">
                                    <span className="text-[#ffaa40] flex-shrink-0 mt-0.5">＋</span>
                                    <span><span className="text-[#ffaa40] font-semibold">Optional:</span> KI-Telefonassistent zubuchbar</span>
                                </div>
                                <Link href="/#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-3 transition-all hover:scale-105 text-sm">
                                    Jetzt anfragen
                                </Link>
                            </div>
                        </div>

                        {/* Ärztezentren Strip */}
                        <div className="overflow-hidden border border-slate-200 bg-[#0f1623]" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
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
                                    <Link href="/#kontakt" className="block text-center bg-[#ff8a00] hover:bg-[#e67a00] text-white font-bold py-2.5 transition-all text-sm">Anfragen</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BARRIEREFREIHEITS-WIDGET ===== */}
                <section className="py-14 px-6 bg-[#eef3ff] relative overflow-hidden">
                    {/* Decorative floating orbs */}
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-300/25 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-100/50 blur-2xl pointer-events-none" />
                    {/* Floating decorative chips (bg only, no text) */}
                    <div className="absolute top-8 right-16 w-28 h-8 bg-white/60 border border-blue-200/50 shadow-sm pointer-events-none" style={{ transform: 'rotate(-8deg)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }} />
                    <div className="absolute bottom-14 left-10 w-20 h-7 bg-white/50 border border-blue-100/60 shadow-sm pointer-events-none" style={{ transform: 'rotate(5deg)', clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }} />
                    <div className="absolute top-20 left-6 w-3 h-3 rounded-full bg-[#1e3ab8]/20 pointer-events-none" />
                    <div className="absolute bottom-20 right-10 w-5 h-5 rounded-full bg-blue-300/40 pointer-events-none" />
                    <div className="absolute top-1/3 right-4 w-2 h-2 rounded-full bg-[#1e3ab8]/30 pointer-events-none" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-10">
                            <span className="inline-block bg-[#1e3ab8]/10 border border-[#1e3ab8]/25 text-[#1e3ab8] text-[10px] font-bold px-4 py-1.5 mb-4 tracking-wider uppercase">
                                Alleinstellungsmerkmal
                            </span>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0d1b3e] mb-2">
                                Barrierefreiheits-Widget – 14 Funktionen inklusive
                            </h2>
                            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-5">
                                Jede mypraxis.at-Website wird WCAG 2.1 Level AA-konform ausgeliefert – inklusive interaktivem Widget. Gesetzlich verankert im österreichischen BaFG.
                            </p>
                            {/* Try-it CTA */}
                            <div className="inline-flex items-center gap-3 bg-[#1e3ab8] text-white px-5 py-2.5 shadow-lg shadow-blue-300/40 hover:-translate-y-0.5 hover:bg-[#162890] transition-all duration-200 cursor-pointer" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
                                <span className="text-base">♿</span>
                                <span className="text-xs font-bold">Jetzt selbst ausprobieren –</span>
                                <span className="hidden sm:inline text-blue-200 text-xs font-semibold">links auf der Seite ←</span>
                                <span className="sm:hidden text-blue-200 text-xs font-semibold">oben auf der Seite ↑</span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">

                            {/* Left: Feature-Buttons + Warum wichtig */}
                            <div className="space-y-5">
                                <div className="bg-white border border-blue-100 shadow-sm p-5" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                                    <p className="text-[#1e3ab8] text-[9px] uppercase tracking-[0.3em] font-bold mb-4">14 eingebaute Funktionen</p>
                                    {/* Feature chips as hoverable buttons */}
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            { icon: 'A', label: 'Schriftgröße' },
                                            { icon: '↕', label: 'Zeilenabstand' },
                                            { icon: '✦', label: 'Legasthenie-Schrift' },
                                            { icon: '◑', label: 'Hoher Kontrast' },
                                            { icon: '▨', label: 'Graustufen' },
                                            { icon: '◐', label: 'Dunkelmodus' },
                                            { icon: '⏸', label: 'Animationen aus' },
                                            { icon: '↗', label: 'Links hervorheben' },
                                            { icon: 'H', label: 'Überschriften' },
                                            { icon: '⊕', label: 'Großer Cursor' },
                                            { icon: '⬡', label: 'Fokus-Ring' },
                                            { icon: '⊘', label: 'Bilder ausblenden' },
                                            { icon: '🔊', label: 'Text vorlesen' },
                                            { icon: '▬', label: 'Lesemaske' },
                                        ].map((f) => (
                                            <div
                                                key={f.label}
                                                className="flex items-center gap-1.5 bg-[#eef3ff] border border-blue-200 px-2.5 py-1.5 hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:border-[#1e3ab8]/40 transition-all duration-150 cursor-default"
                                                style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}
                                            >
                                                <span className="text-[#1e3ab8] font-bold text-[10px] w-3 text-center flex-shrink-0">{f.icon}</span>
                                                <span className="text-gray-700 text-[10px] font-medium whitespace-nowrap">{f.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Warum wichtig */}
                                <div className="bg-white border border-blue-100 shadow-sm p-5" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                                    <p className="text-[#10a37f] text-[9px] uppercase tracking-[0.3em] font-bold mb-3">Warum das wichtig ist</p>
                                    <div className="space-y-2.5">
                                        {[
                                            { icon: '⚖️', text: 'Gesetzliche Pflicht nach BaFG – von Anfang an abgesichert' },
                                            { icon: '👁️', text: 'Ältere Patienten mit Sehproblemen können die Website nutzen' },
                                            { icon: '🌐', text: 'Patienten mit anderer Muttersprache – 10 Sprachen integriert' },
                                            { icon: '♿', text: 'Sehbehinderte & screenreader-abhängige Nutzer unterstützt' },
                                        ].map((item) => (
                                            <div key={item.text} className="flex items-start gap-2.5">
                                                <span className="flex-shrink-0 mt-0.5 text-sm">{item.icon}</span>
                                                <p className="text-gray-600 text-xs leading-relaxed">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Widget-Mockup + Sprachen */}
                            <div className="space-y-4">
                                {/* Widget Mockup */}
                                <div className="bg-white border border-blue-200 shadow-xl overflow-hidden" style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)' }}>
                                    <div className="bg-gradient-to-r from-[#1e3ab8] to-[#2a50cc] px-4 py-3.5 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white/20 flex items-center justify-center flex-shrink-0 text-lg shadow-inner" style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}>
                                            ♿
                                        </div>
                                        <div>
                                            <p className="text-white text-xs font-bold leading-none">Barrierefreiheits-Widget</p>
                                            <p className="text-blue-200/70 text-[9px] mt-0.5">WCAG 2.1 AA · BaFG-konform · Vorschau</p>
                                        </div>
                                        <div className="ml-auto flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-white/30" />
                                            <div className="w-2 h-2 rounded-full bg-white/30" />
                                            <div className="w-2 h-2 rounded-full bg-white/60" />
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 bg-gradient-to-b from-gray-50 to-white">
                                        {[
                                            { icon: 'A+', label: 'Schrift vergrößern', sub: 'Stufe 2 aktiv', active: true, color: 'text-[#1e3ab8]' },
                                            { icon: '◑', label: 'Hoher Kontrast', sub: 'Deaktiviert', active: false, color: 'text-gray-400' },
                                            { icon: '🔊', label: 'Text vorlesen', sub: 'Deaktiviert', active: false, color: 'text-gray-400' },
                                            { icon: '🌐', label: 'Sprache', sub: 'Deutsch ▾', active: false, color: 'text-gray-400' },
                                        ].map((row) => (
                                            <div
                                                key={row.label}
                                                className={`flex items-center gap-3 px-3 py-2.5 border transition-all ${row.active ? 'bg-blue-50 border-[#1e3ab8]/25 shadow-sm' : 'bg-white border-gray-100'}`}
                                                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
                                            >
                                                <div className={`w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold ${row.active ? 'bg-[#1e3ab8] text-white' : 'bg-gray-100 text-gray-500'}`} style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}>
                                                    {row.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className={`text-xs font-semibold leading-none ${row.active ? 'text-[#1e3ab8]' : 'text-gray-600'}`}>{row.label}</p>
                                                    <p className="text-gray-400 text-[9px] mt-0.5">{row.sub}</p>
                                                </div>
                                                {row.active && (
                                                    <span className="ml-auto text-[10px] font-bold text-white bg-[#10a37f] px-2 py-0.5" style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}>AN</span>
                                                )}
                                            </div>
                                        ))}
                                        <p className="text-gray-300 text-[9px] text-center pt-0.5">Einstellungen werden lokal gespeichert</p>
                                    </div>
                                </div>

                                {/* 10 Sprachen */}
                                <div className="bg-white border border-blue-100 shadow-sm p-4" style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                                    <p className="text-gray-400 text-[9px] uppercase tracking-[0.3em] font-bold mb-2.5">🌐 10 Sprachen inklusive</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Deutsch', 'Englisch', 'Russisch', 'Türkisch', 'Arabisch', 'Rumänisch', 'Polnisch', 'Ungarisch', 'Ukrainisch', 'Tschechisch'].map((lang) => (
                                            <span
                                                key={lang}
                                                className="text-[10px] text-[#1e3ab8] bg-blue-50 border border-blue-200 px-2.5 py-1 hover:-translate-y-0.5 hover:shadow-sm hover:bg-white transition-all duration-150 cursor-default"
                                                style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)' }}
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 text-[9px] mt-2">Relevant für Ordinationen mit internationalem Patientenstamm</p>
                                </div>

                                <div className="bg-gradient-to-r from-[#1e3ab8]/8 to-blue-50 border border-[#1e3ab8]/20 px-4 py-3 flex items-center gap-3" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}>
                                    <span className="text-[#1e3ab8] text-lg flex-shrink-0">✓</span>
                                    <p className="text-xs text-[#1e3ab8] leading-relaxed">
                                        <span className="font-bold">Inklusive</span> in beiden Paketen – kein Aufpreis, kein Setup-Aufwand für Sie.
                                    </p>
                                </div>
                            </div>
                        </div>
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
