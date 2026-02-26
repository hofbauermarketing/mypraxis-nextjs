import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Impfberatung – Dr. Anna Berger, Kinderärztin Linz', robots: 'noindex' }

export default function ImpfenPage() {
    return (
        <div className="font-sans text-gray-800 antialiased">
            <CookieBanner />

            {/* Demo-Banner */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
                    <Link href="/demo/privatarzt-warm" className="flex items-center gap-1 hover:underline font-bold">← Zurück zur Praxis</Link>
                    <span className="text-center">Demo · Stil 3: Impfberatung</span>
                    <span />
                </div>
            </div>

            {/* NAV */}
            <nav className="fixed top-8 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-teal-100 shadow-sm">
                <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">AB</div>
                        <div>
                            <p className="font-bold text-teal-800 text-sm">Dr. Anna Berger</p>
                            <p className="text-teal-500 text-xs">Kinderärztin · Linz</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
                        <Link href="/demo/privatarzt-warm#leistungen" className="hover:text-teal-700 transition-colors">Leistungen</Link>
                        <Link href="/demo/privatarzt-warm#team" className="hover:text-teal-700 transition-colors">Team</Link>
                        <span className="text-teal-700 font-semibold border-b-2 border-teal-500 pb-0.5">Impfinfo</span>
                        <Link href="/demo/privatarzt-warm#termin" className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors">Termin</Link>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-teal-50 to-emerald-50">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Impfberatung & Impfplan</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
                        Impfen – <span className="text-teal-600">klar erklärt.</span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Fragen rund ums Impfen sind vollkommen normal. Hier finden Sie alle Informationen, die Sie als Elternteil brauchen – transparent, sachlich und ohne Druck.
                    </p>
                </div>
            </section>

            {/* WARUM IMPFEN */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Grundlagen</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">Warum Impfen wichtig ist</h2>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: '🛡️', title: 'Schutz des Kindes', text: 'Impfungen schützen Ihr Kind vor teils schwerwiegenden Erkrankungen wie Masern, Keuchhusten oder Meningitis – besonders in den ersten Lebensjahren, wenn das Immunsystem noch schwach ist.' },
                            { icon: '👨‍👩‍👧', title: 'Herdenimmunität', text: 'Wenn viele Kinder geimpft sind, werden auch Säuglinge und immungeschwächte Personen geschützt, die selbst noch nicht geimpft werden können.' },
                            { icon: '🔬', title: 'Jahrzehntelange Sicherheit', text: 'Zugelassene Impfstoffe durchlaufen strenge Tests und werden kontinuierlich überwacht. Die Sicherheitsdaten sind umfassend und international dokumentiert.' },
                        ].map((v) => (
                            <div key={v.title} className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                <span className="text-3xl mb-3 block">{v.icon}</span>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{v.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPFPLAN */}
            <section className="py-16 px-6 bg-teal-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Österreichischer Impfplan</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">Was wann empfohlen wird</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { alter: 'Ab Geburt', impf: 'Hepatitis B (1. Dosis)', info: 'Kostenlos im Rahmen des Mutter-Kind-Pass-Programms.' },
                            { alter: '3 Monate', impf: 'Rotavirus · 6-fach-Impfung (DTPA-IPV-Hib-HepB)', info: 'Grundimmunisierung – 3 Dosen im Abstand von 4–8 Wochen.' },
                            { alter: '6 Monate', impf: 'Pneumokokken (2. Dosis) · Meningokokken B', info: 'Meningokokken B-Impfung als Empfehlung – kostenlos ab 2025.' },
                            { alter: '12–14 Monate', impf: 'MMR (Masern-Mumps-Röteln) · Varizellen', info: '2. MMR-Dosis im 2. Lebensjahr. Beide Impfungen kostenlos.' },
                            { alter: '7–9 Jahre', impf: 'Auffrischung DTPA · Hepatitis A', info: 'Schulimpfung – wird in der Schule angeboten und ist kostenlos.' },
                            { alter: '12–13 Jahre', impf: 'HPV (Humane Papillomviren)', info: 'Ab 9 Jahren empfohlen. Kostenlos im Schulprogramm ab 12 Jahren.' },
                            { alter: 'Jährlich', impf: 'Grippe (Influenza)', info: 'Besonders empfohlen für Kinder mit chronischen Erkrankungen, aber für alle sinnvoll.' },
                        ].map((row, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border border-teal-100 flex flex-col sm:flex-row gap-4 items-start">
                                <div className="shrink-0 bg-teal-100 text-teal-700 font-bold text-xs px-3 py-1.5 rounded-full whitespace-nowrap">{row.alter}</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm mb-0.5">{row.impf}</p>
                                    <p className="text-gray-500 text-xs leading-relaxed">{row.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-xs mt-6 text-center">Quelle: Österreichischer Impfplan 2025 · Bundesministerium für Gesundheit</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest">Fragen & Antworten</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">Häufige Fragen zum Impfen</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: 'Können Impfungen Nebenwirkungen haben?', a: 'Ja – die häufigsten sind Rötung und Schwellung an der Einstichstelle sowie leichte Temperaturerhöhung. Diese Reaktionen sind ein Zeichen, dass das Immunsystem arbeitet, und klingen nach 1–2 Tagen ab. Schwere Nebenwirkungen sind sehr selten und werden von den Behörden streng überwacht.' },
                            { q: 'Kann ich mehrere Impfungen gleichzeitig geben lassen?', a: 'Ja. Kombinationsimpfstoffe wie der 6-fach-Impfstoff wurden speziell dafür entwickelt. Das Immunsystem eines Kindes kann problemlos mehrere Antigene gleichzeitig verarbeiten.' },
                            { q: 'Was, wenn mein Kind krank ist?', a: 'Leichte Erkältungssymptome sind in der Regel kein Grund, die Impfung zu verschieben. Bei Fieber über 38,5 °C empfehlen wir, den Termin zu verschieben. Im Zweifelsfall bitte anrufen – wir beraten Sie gerne.' },
                            { q: 'Muss ich impfen lassen?', a: 'In Österreich gibt es keine Impfpflicht für Kinder. Wir empfehlen Impfungen jedoch auf Basis der wissenschaftlichen Datenlage und zum Schutz Ihres Kindes. Wenn Sie Fragen oder Bedenken haben, nehmen Sie sich Zeit für ein Beratungsgespräch.' },
                            { q: 'Welche Impfungen sind in Österreich kostenlos?', a: 'Alle Impfungen des österreichischen Gratis-Schulimpfprogramms sind kostenlos – darunter MMR, Varizellen, HPV, Hepatitis A & B und weitere. Bitte fragen Sie uns im Termin nach dem aktuellen Stand.' },
                            { q: 'Reiseimpfungen – worauf achten?', a: 'Je nach Reiseziel empfehlen wir unterschiedliche Impfungen (z.B. Typhus, Cholera, Japanische Enzephalitis). Bitte planen Sie den Beratungstermin mindestens 4–6 Wochen vor Reiseantritt ein.' },
                        ].map((faq, i) => (
                            <div key={i} className="bg-teal-50 rounded-2xl p-5 border border-teal-100">
                                <p className="font-bold text-gray-900 text-sm mb-2">💬 {faq.q}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 bg-teal-600 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">Fragen? Wir nehmen uns Zeit.</h2>
                <p className="text-teal-100 text-sm mb-6 max-w-xl mx-auto">Impfberatung ist Teil unserer Arbeit – und keine lästige Pflicht. Rufen Sie uns an oder vereinbaren Sie einen Termin.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/demo/privatarzt-warm#termin" className="bg-white text-teal-700 font-bold px-6 py-3 rounded-full text-sm hover:bg-teal-50 transition-colors">Impftermin vereinbaren</Link>
                    <a href="tel:+437325678" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors">+43 732 56 78 90</a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-teal-800 text-teal-200 py-8 px-6 text-sm text-center">
                <p className="mb-2">© 2026 Dr. Anna Berger · Kinder- und Jugendheilkunde · 4040 Linz</p>
                <p className="text-xs mb-3"><a href="#" className="hover:text-white">Impressum</a> · <a href="#" className="hover:text-white">Datenschutz</a></p>
                <a href="https://www.mypraxis.at" className="inline-block bg-teal-900 border border-teal-700 text-teal-300 text-xs px-4 py-2 rounded-full hover:border-teal-500 transition-colors">Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at</a>
            </footer>
        </div>
    )
}
