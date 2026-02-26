import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

export const metadata = { title: 'Ärztezentrum Mariahilf – Wien', robots: 'noindex' }

const aerzte = [
  {
    name: 'Dr. Michael Fürst',
    fach: 'Allgemeinmedizin',
    kasse: 'WGKK · BVA',
    photo: '/demo-dr-fuerst.jpg',
    erfahrung: '20 Jahre',
    bio: 'Dr. Fürst ist der klassische Hausarzt, der seine Patienten über Jahrzehnte begleitet. Er kennt Familiengeschichten, Lebensumstände und Krankengeschichten wie kein Zweiter. Sein Motto: „Zuhören ist die halbe Diagnose."',
    schwerpunkte: ['Präventivmedizin', 'Diabetes', 'Hausbesuche auf Anfrage'],
    zitat: '„Ein guter Hausarzt kennt nicht nur die Krankheit, sondern den Menschen dahinter."',
  },
  {
    name: 'Dr. Claudia Nowak',
    fach: 'Innere Medizin',
    kasse: 'WGKK · SVS',
    photo: '/demo-dr-nowak.jpg',
    erfahrung: '17 Jahre',
    bio: 'Dr. Nowak ist Spezialistin für komplexe internistische Fragestellungen. Sie verbindet präzise Diagnostik mit einem offenen Ohr – und hat eine besondere Leidenschaft für kardiologische und gastroenterologische Erkrankungen.',
    schwerpunkte: ['Kardiologie', 'Gastroenterologie', 'Labordiagnostik'],
    zitat: '„Medizin ist Wissenschaft – aber der Umgang mit Patienten ist eine Kunst."',
  },
  {
    name: 'Dr. Stefan Hofer',
    fach: 'Orthopädie & Unfallchirurgie',
    kasse: 'Wahlarzt',
    photo: '/demo-dr-hofer.jpg',
    erfahrung: '14 Jahre',
    bio: 'Dr. Hofer war 8 Jahre als Unfallchirurg am Krankenhaus tätig, bevor er sich für die Niederlassung entschied. Er behandelt Sportverletzungen, Haltungsprobleme und degenerative Erkrankungen – konservativ, wenn möglich.',
    schwerpunkte: ['Sportverletzungen', 'Gelenksschmerzen', 'Konservative Therapie'],
    zitat: '„Nicht jedes Knie braucht eine Operation – oft hilft gezieltes Training mehr."',
  },
  {
    name: 'Dr. Eva Zimmermann',
    fach: 'Gynäkologie',
    kasse: 'WGKK · BVA · SVS',
    photo: '/demo-dr-zimmermann.png',
    erfahrung: '16 Jahre',
    bio: 'Dr. Zimmermann begleitet Frauen in allen Lebensphasen – von der Vorsorge bis zur Hormonberatung in den Wechseljahren. Sie legt großen Wert auf respektvolle, informierte Entscheidungsfindung.',
    schwerpunkte: ['Vorsorge', 'Hormontherapie', 'Beratung Verhütung & Wechseljahre'],
    zitat: '„Frauengesundheit ist mehr als Gynäkologie – es geht um das ganze Leben."',
  },
]

export default function Demo4Page() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <CookieBanner />

      {/* Demo-Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 py-1.5 text-xs font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
          <Link href="/demo" className="flex items-center gap-1 hover:underline font-bold">← Alle Demos</Link>
          <span className="text-center">Demo · Stil 4: Ärztezentrum Classic</span>
          <span />
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-8 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><span className="text-white font-bold text-xs">AM</span></div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Ärztezentrum Mariahilf</p>
              <p className="text-gray-400 text-xs">4 Fachrichtungen · Wien 1060</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
            <a href="#aerzte" className="hover:text-blue-600 transition-colors">Unsere Ärzte</a>
            <a href="#leistungen" className="hover:text-blue-600 transition-colors">Leistungen</a>
            <a href="#warum" className="hover:text-blue-600 transition-colors">Warum wir</a>
            <a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a>
            <a href="#termin" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Termin</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">Mariahilfer Straße 102 · 1060 Wien · U3 Zieglergasse</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">Alle Fachrichtungen.<br /><span className="text-blue-200">Ein Ärztezentrum.</span></h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">Vier erfahrene Fachärzte unter einem Dach – für kurze Wege, koordinierte Behandlung und maximale Versorgungsqualität. Mit und ohne Krankenkasse.</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#termin" className="bg-white text-blue-700 px-7 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg">Termin vereinbaren</a>
              <a href="#aerzte" className="border border-white/40 text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">Unsere Ärzte kennenlernen</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ v: '4', l: 'Fachrichtungen' }, { v: 'WGKK', l: '+ BVA, SVS' }, { v: '67+', l: 'Jahre Erfahrung gesamt' }, { v: '🅿️', l: 'Parkhaus nebenan' }].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/20">
                <p className="font-bold text-white text-lg">{s.v}</p>
                <p className="text-blue-200 text-xs">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÄRZTE MIT BIOS */}
      <section id="aerzte" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Unsere Ärztinnen & Ärzte</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Vier Menschen, vier Fachrichtungen, ein gemeinsames Ziel: Ihre Gesundheit.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {aerzte.map((a) => (
              <div key={a.name} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5 p-6">
                  <img src={a.photo} alt={a.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">{a.name}</p>
                    <p className="text-blue-600 text-xs font-semibold mb-0.5">{a.fach}</p>
                    <p className="text-gray-400 text-xs">{a.kasse} · {a.erfahrung} Erfahrung</p>
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{a.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.schwerpunkte.map((s) => (
                      <span key={s} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="border-l-2 border-blue-200 pl-3 text-gray-400 italic text-xs leading-relaxed">{a.zitat}</div>
                  <a href="#termin" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center text-xs font-semibold py-2.5 rounded-lg transition-colors">Termin bei {a.name.split(' ')[1]} anfragen</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/demo/aerztezentrum-classic/team" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm underline underline-offset-2">
              Vollständige Teamübersicht mit allen Bios →
            </Link>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Leistungen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Was wir anbieten</h2>
            <p className="text-gray-500 leading-relaxed mb-4">Das Ärztezentrum Mariahilf steht für Teamarbeit und koordinierte Versorgung. Vier Fachärzte – vier Perspektiven – ein gemeinsames Ziel: Gesundheit ganzheitlich denken.</p>
            <p className="text-gray-400 italic text-sm mb-6 border-l-2 border-blue-200 pl-3">„Interne Überweisungen ohne externe Wartezeiten – weil Ihre Zeit wertvoll ist."</p>
            <div className="space-y-4">
              {[
                { icon: '🩺', title: 'Allgemeinmedizin', text: 'Hausarzt für die ganze Familie, Hausbesuche auf Anfrage' },
                { icon: '🫀', title: 'Innere Medizin', text: 'EKG, Ultraschall, Langzeit-EKG, Gastro, Labor same day' },
                { icon: '🦴', title: 'Orthopädie', text: 'Gelenksschmerzen, Sportverletzungen, konservative Therapie' },
                { icon: '🤰', title: 'Gynäkologie', text: 'Vorsorge, Ultraschall, Verhütungsberatung, Hormontherapie' },
              ].map((l) => (
                <div key={l.title} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl shrink-0">{l.icon}</span>
                  <div><h3 className="font-bold text-gray-900 text-sm mb-0.5">{l.title}</h3><p className="text-gray-500 text-xs">{l.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Terminbuchung</h3>
            <p className="text-blue-200 text-sm mb-6">Wählen Sie Ihren Wunscharzt und Ihren Wunschtermin.<br />Intern: keine Wartezeit zwischen Fachrichtungen.</p>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3"><span>📞</span><div><p className="text-xs text-blue-200">Telefonische Terminvergabe</p><p className="font-bold">+43 1 895 67 20</p></div></div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3"><span>📧</span><div><p className="text-xs text-blue-200">E-Mail Anfrage</p><p className="font-bold">termin@aezentrum-mariahilf.at</p></div></div>
            </div>
            <a href="#termin" className="block w-full bg-white text-blue-700 text-center py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">Online-Termin buchen</a>
          </div>
        </div>
      </section>

      {/* WARUM WIR */}
      <section id="warum" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Warum ein Zentrum?</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Der Mehrwert für Sie</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🔗', title: 'Koordinierte Behandlung', text: 'Unsere vier Ärzte tauschen sich regelmäßig aus und koordinieren bei komplexen Erkrankungen. Keine Kommunikationslücken zwischen Fachärzten.' },
              { icon: '⏱️', title: 'Interne Überweisungen', text: 'Wenn Ihr Hausarzt Sie zur Gynäkologie oder Orthopädie überweist, entfällt das Warten auf externe Termine. Wir koordinieren intern.' },
              { icon: '📋', title: 'Eine Anlaufstelle', text: 'Ob Vorsorge, akute Beschwerden oder Facharzt-Behandlung – Sie haben eine Adresse, eine Telefonnummer und ein Team, das Sie kennt.' },
            ].map((v) => (
              <div key={v.title} className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          {/* Team / Verwaltung */}
          <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0"><span className="text-white font-bold">CW</span></div>
            <div>
              <p className="font-bold text-gray-900">Christina Weiss – Praxismanagerin</p>
              <p className="text-blue-600 text-xs font-semibold mb-2">Leiterin Administration & Patientenmanagement · seit 2018 im Zentrum</p>
              <p className="text-gray-600 text-sm leading-relaxed">Christina hält alle Fäden zusammen. Sie koordiniert die Zusammenarbeit der vier Praxen, schult neue Mitarbeiterinnen ein und ist Ansprechpartnerin für organisatorische Anliegen. „Ein Zentrum funktioniert nur, wenn der Rücken stimmt", sagt sie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ORDINATIONSZEITEN + ANFAHRT */}
      <section id="kontakt" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Öffnungszeiten</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Wann wir für Sie da sind</h2>
            <p className="text-gray-500 text-sm mb-4">Achtung: Individuelle Ordinationszeiten der Fachärzte auf Anfrage.</p>
            {[{ day: 'Montag', time: '07:00 – 18:00' }, { day: 'Dienstag', time: '07:00 – 18:00' }, { day: 'Mittwoch', time: '07:00 – 18:00' }, { day: 'Donnerstag', time: '07:00 – 18:00' }, { day: 'Freitag', time: '07:00 – 16:00' }, { day: 'Sa / So', time: 'Geschlossen' }].map((r) => (
              <div key={r.day} className={`flex justify-between py-2.5 border-b border-gray-100 text-sm ${r.day === 'Sa / So' ? 'text-gray-300' : 'text-gray-700'}`}><span className="font-medium">{r.day}</span><span>{r.time}</span></div>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Adresse & Anfahrt</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">So finden Sie uns</h2>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <p>📍 Mariahilfer Straße 102, 2. OG, 1060 Wien</p>
              <p>📞 +43 1 895 67 20</p>
              <p>📧 office@aezentrum-mariahilf.at</p>
              <p>🚇 U3 Zieglergasse (2 Minuten Fußweg)</p>
              <p>🅿️ Parkhaus Zieglergasse direkt nebenan</p>
              <p>♿ Barrierefreier Zugang, Aufzug vorhanden</p>
            </div>
            <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm border border-gray-200">🗺️ Google Maps Einbettung</div>
          </div>
        </div>
      </section>

      {/* BEWERTUNGEN */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Bewertungen</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Was unsere Patienten sagen</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { text: '„Endlich ein Zentrum, wo alles unter einem Dach ist. Ich war bei zwei Ärzten an einem Tag – ohne lange Wartezeiten."', name: 'Herbert S.' },
              { text: '„Dr. Nowak ist unglaublich gründlich. Das Labor-Ergebnis hatte ich noch am gleichen Tag – so etwas habe ich noch nie erlebt."', name: 'Renate M.' },
              { text: '„Super Organisation, freundliches Personal. Die interne Überweisung zur Orthopädie war unkompliziert."', name: 'Thomas A.' },
              { text: '„Dr. Fürst kennt mich seit Jahren. Er ist kein Arzt, der Medikamente verschreibt – er erklärt, hört zu und findet die Ursache."', name: 'Gabi K.' },
              { text: '„Dr. Zimmermann ist einfühlsam und nimmt sich wirklich Zeit. Frauengesundheit in besten Händen."', name: 'Maria B.' },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <p className="text-amber-400 text-sm mb-3">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">{r.text}</p>
                <p className="text-blue-600 text-xs font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMIN FORMULAR */}
      <section id="termin" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Online-Termin</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Termin vereinbaren</h2>
          </div>
          <form className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Vorname *</label><input required type="text" placeholder="Max" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Nachname *</label><input required type="text" placeholder="Mustermann" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Telefon *</label><input required type="tel" placeholder="+43 1 ..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1.5">Gewünschte Fachrichtung</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors">
                  <option>Allgemeinmedizin (Dr. Fürst)</option><option>Innere Medizin (Dr. Nowak)</option><option>Orthopädie (Dr. Hofer)</option><option>Gynäkologie (Dr. Zimmermann)</option>
                </select>
              </div>
            </div>
            <div className="flex items-start gap-3"><input required type="checkbox" id="dsgvo4" className="mt-0.5 accent-blue-600" /><label htmlFor="dsgvo4" className="text-xs text-gray-500">Ich stimme der Verarbeitung meiner Daten zu. *</label></div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Termin anfragen →</button>
          </form>
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
