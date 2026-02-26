import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Unser Team – Ärztezentrum Mariahilf', robots: 'noindex' }

const team = [
    {
        name: 'Dr. Michael Fürst',
        fach: 'Facharzt für Allgemeinmedizin',
        kasse: 'Kassenvertrag: WGKK · BVA',
        erfahrung: '20 Jahre',
        photo: '/demo-dr-fuerst.jpg',
        bio: 'Dr. Michael Fürst ist seit 2006 als niedergelassener Allgemeinmediziner tätig, davon die letzten 10 Jahre im Ärztezentrum Mariahilf. Als klassischer Hausarzt betreut er ganze Familien – oft über Generationen hinweg. Sein Ansatz ist ganzheitlich: Er sieht patholgiologischen Befunden nicht nur als Zahlen, sondern im Kontext des gesamten Lebens seiner Patientinnen und Patienten. Dr. Fürst engagiert sich auch im Bereich Präventivmedizin und hält regelmäßige Vorträge zum Thema Lebensstil und chronische Erkrankungen.',
        schwerpunkte: ['Präventivmedizin', 'Diabetes Typ 2', 'Bluthochdruckmanagement', 'Hausbesuche auf Anfrage', 'Ernährungsberatung'],
        zitat: '„Ein guter Hausarzt kennt nicht nur die Krankheit, sondern den Menschen dahinter – seine Ängste, seinen Alltag, seine Geschichte."',
        cv: [
            { year: '1998–2004', text: 'Medizinstudium, MedUni Graz' },
            { year: '2004–2006', text: 'Turnusarzt, LKH Graz' },
            { year: '2006', text: 'Niederlassung als Hausarzt, Wien 1060' },
            { year: '2014', text: 'Beitritt Ärztezentrum Mariahilf' },
        ],
    },
    {
        name: 'Dr. Claudia Nowak',
        fach: 'Fachärztin für Innere Medizin',
        kasse: 'Kassenvertrag: WGKK · SVS',
        erfahrung: '17 Jahre',
        photo: '/demo-dr-nowak.jpg',
        bio: 'Dr. Claudia Nowak ist Spezialistin für komplexe internistische Erkrankungen und eine der gefragtesten Internistinnen im 6. Bezirk. Sie verbindet präzise Diagnostik mit einem offenen Ohr – zwei Qualitäten, die in der Inneren Medizin gleichermaßen unverzichtbar sind. Besondere Leidenschaft gilt ihr der Kardiologie und der Gastroenterologie. Sie ist bekannt dafür, Laborergebnisse nicht einfach zu kommentieren, sondern zu erklären – so, dass Patientinnen und Patienten wirklich verstehen, was in ihrem Körper passiert.',
        schwerpunkte: ['Kardiologie', 'Gastroenterologie', 'Diabetologie', 'Labordiagnostik (same day)', 'Internistische Vorsorge'],
        zitat: '„Medizin ist Wissenschaft – aber der Umgang mit Patienten ist eine Kunst, die ich täglich neu lerne."',
        cv: [
            { year: '2000–2007', text: 'Medizinstudium, MedUni Wien' },
            { year: '2007–2012', text: 'Facharztausbildung Innere Medizin, SMZ Ost Wien' },
            { year: '2012–2016', text: 'Oberärztin, Wilhelminenspital Wien' },
            { year: '2016', text: 'Niederlassung, Ärztezentrum Mariahilf' },
        ],
    },
    {
        name: 'Dr. Stefan Hofer',
        fach: 'Facharzt für Orthopädie & Unfallchirurgie',
        kasse: 'Wahlarzt',
        erfahrung: '14 Jahre',
        photo: '/demo-dr-hofer.jpg',
        bio: '8 Jahre Unfallchirurgie im Krankenhaus haben Dr. Stefan Hofer gelehrt, was wirklich wichtig ist: nicht jedes Problem braucht einen operativen Eingriff. Seit seiner Niederlassung hat er sich konservativen Therapiekonzepten verschrieben. Er arbeitet eng mit Physiotherapeuten zusammen und hat eine ausgeprägte Leidenschaft für Sportmedizin. Als passionierter Läufer versteht er Athletinnen und Athleten aus erster Hand – ihre Ungeduld ebenso wie den Wunsch, schnell wieder fit zu sein.',
        schwerpunkte: ['Sportverletzungen', 'Knie- & Schulterprobleme', 'Konservative Orthopädie', 'Sportmedizin', 'Infiltrationstherapie'],
        zitat: '„Nicht jedes Knie braucht eine Operation – gezieltes Training und die richtige Therapie helfen oft weit mehr."',
        cv: [
            { year: '2002–2008', text: 'Medizinstudium, MedUni Innsbruck' },
            { year: '2008–2012', text: 'Facharztausbildung Unfallchirurgie, AKH Wien' },
            { year: '2012–2016', text: 'Facharzt Unfallchirurgie & Orthopädie, Krankenhaus Hietzing' },
            { year: '2016', text: 'Niederlassung als Wahlarzt, Ärztezentrum Mariahilf' },
        ],
    },
    {
        name: 'Dr. Eva Zimmermann',
        fach: 'Fachärztin für Gynäkologie & Geburtshilfe',
        kasse: 'Kassenvertrag: WGKK · BVA · SVS',
        erfahrung: '16 Jahre',
        photo: '/demo-dr-zimmermann.png',
        bio: 'Dr. Eva Zimmermann begleitet Frauen in allen Lebensphasen – von der ersten Vorsorgeuntersuchung in der Pubertät über Schwangerschaft und Geburt bis zur Beratung in den Wechseljahren. Ihr besonderes Anliegen ist eine respektvolle, informierte Entscheidungsfindung: Frauen sollen verstehen, welche Optionen sie haben, und selbst entscheiden können – ohne Druck. Sie war mehrere Jahre im AKH Wien tätig und ist heute auch als Ausbildnerin für junge Gynäkologinnen engagiert.',
        schwerpunkte: ['Gynäkologische Vorsorge', 'Hormontherapie Wechseljahre', 'Verhütungsberatung', 'Schwangerschaftsbegleitung', 'Zervixkarzinom-Screening'],
        zitat: '„Frauengesundheit ist mehr als Gynäkologie – es geht um das ganze Leben, jeden Hormonspiegel und jeden Lebensabschnitt."',
        cv: [
            { year: '2001–2007', text: 'Medizinstudium, MedUni Wien' },
            { year: '2007–2012', text: 'Facharztausbildung Gynäkologie, AKH Wien' },
            { year: '2012–2016', text: 'Oberärztin Gynäkologie, AKH Wien' },
            { year: '2017', text: 'Niederlassung, Ärztezentrum Mariahilf' },
        ],
    },
]

export default function TeamPage() {
    return (
        <div className="font-sans text-gray-800 antialiased">
            <CookieBanner />

            {/* Demo-Banner */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
                    <Link href="/demo/aerztezentrum-classic" className="flex items-center gap-1 hover:underline font-bold">← Zurück zum Zentrum</Link>
                    <span className="text-center">Demo · Stil 4: Das Team</span>
                    <span />
                </div>
            </div>

            {/* NAV */}
            <nav className="fixed top-8 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><span className="text-white font-bold text-xs">AM</span></div>
                        <div><p className="font-bold text-gray-900 text-sm">Ärztezentrum Mariahilf</p><p className="text-gray-400 text-xs">4 Fachrichtungen · Wien 1060</p></div>
                    </div>
                    <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
                        <Link href="/demo/aerztezentrum-classic#leistungen" className="hover:text-blue-600 transition-colors">Leistungen</Link>
                        <span className="text-blue-600 font-semibold border-b-2 border-blue-500 pb-0.5">Unser Team</span>
                        <Link href="/demo/aerztezentrum-classic#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link>
                        <a href="#termin" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Termin</a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">Vier Fachärzte. Ein Zentrum.</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">Das Team hinter Ihrer Gesundheit</h1>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">Lernen Sie die Menschen kennen, die täglich für Ihre Gesundheit da sind – mit ihrer Geschichte, ihren Schwerpunkten und dem, was sie antreibt.</p>
                </div>
            </section>

            {/* TEAM PROFILES */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto space-y-14">
                    {team.map((a, i) => (
                        <div key={a.name} className={`grid md:grid-cols-5 gap-10 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Foto & Header */}
                            <div className="md:col-span-2">
                                <img src={a.photo} alt={a.name} className="w-full rounded-2xl object-cover aspect-[4/3]" />
                                <div className="mt-4 space-y-1.5">
                                    {a.schwerpunkte.map((s) => (
                                        <span key={s} className="inline-block bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full mr-1.5 mb-1">{s}</span>
                                    ))}
                                </div>
                            </div>
                            {/* Bio */}
                            <div className="md:col-span-3">
                                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">{a.fach} · {a.kasse}</p>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">{a.name}</h2>
                                <p className="text-gray-400 text-xs mb-5">{a.erfahrung} Berufserfahrung</p>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{a.bio}</p>
                                <div className="border-l-2 border-blue-300 pl-4 text-gray-400 italic text-sm mb-6">{a.zitat}</div>
                                {/* CV */}
                                <div className="space-y-2">
                                    {a.cv.map((c) => (
                                        <div key={c.year} className="flex gap-4 text-sm border-b border-gray-50 pb-2">
                                            <span className="text-blue-600 font-semibold shrink-0 w-20 text-xs">{c.year}</span>
                                            <span className="text-gray-600 text-xs">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="#termin" className="inline-block mt-5 bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                                    Termin bei {a.name.split(' ')[1]} anfragen
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRAXISTEAM */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Praxisteam</span>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">Die gute Seele dahinter</h2>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col sm:flex-row gap-6 items-start">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0"><span className="text-white font-bold text-xl">CW</span></div>
                        <div>
                            <p className="font-bold text-gray-900">Christina Weiss</p>
                            <p className="text-blue-600 text-xs font-semibold mb-1">Praxismanagerin · Leiterin Administration</p>
                            <p className="text-gray-400 text-xs mb-3">seit 2018 im Zentrum</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Christina hält alle Fäden zusammen. Sie koordiniert die Zusammenarbeit der vier Praxen, schult neue Mitarbeiterinnen ein, betreut die Patientenkorrespondenz und ist Ansprechpartnerin für alle organisatorischen Anliegen. Ohne sie würde das Ärztezentrum nicht so funktionieren, wie es funktioniert. „Ein Zentrum steht und fällt mit seiner Verwaltung. Qualität beginnt am Telefon."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TERMIN CTA */}
            <section id="termin" className="py-16 px-6 bg-blue-600 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">Einem Arzt einen Schritt näher</h2>
                <p className="text-blue-100 text-sm mb-6">Buchen Sie jetzt Ihren Termin – telefonisch oder per E-Mail.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="tel:+4318956720" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors">+43 1 895 67 20</a>
                    <a href="mailto:termin@aezentrum-mariahilf.at" className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors">E-Mail schreiben</a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-sm text-center">
                <p className="mb-2">© 2026 Ärztezentrum Mariahilf GmbH · 1060 Wien</p>
                <p className="text-xs mb-3"><a href="#" className="hover:text-gray-300">Impressum</a> · <a href="#" className="hover:text-gray-300">Datenschutz</a></p>
                <a href="https://www.mypraxis.at" className="inline-block bg-gray-800 border border-gray-700 text-gray-400 text-xs px-4 py-2 rounded-full hover:border-gray-500 transition-colors">Erstellt von <span className="text-[#ff8a00]">my</span>praxis.at</a>
            </footer>
        </div>
    )
}
