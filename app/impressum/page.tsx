import Link from 'next/link'

export const metadata = {
  title: 'Impressum | mypraxis.at',
  description: 'Impressum von mypraxis.at – Kevin Hofbauer e.U.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-medium mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-extrabold text-primary mb-10">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Angaben gemäß § 5 ECG</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Kevin Hofbauer e.U.</strong><br />
            Hauptplatz 12<br />
            3902 Vitis<br />
            Niederösterreich, Österreich
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Kontakt</h2>
          <p className="text-gray-700 leading-relaxed">
            Telefon: <a href="tel:+436641915447" className="text-secondary hover:underline">+43 664 19 15 447</a><br />
            E-Mail: <a href="mailto:office@mypraxis.at" className="text-secondary hover:underline">office@mypraxis.at</a><br />
            Web: <a href="https://www.mypraxis.at" className="text-secondary hover:underline">www.mypraxis.at</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Unternehmensgegenstand</h2>
          <p className="text-gray-700 leading-relaxed">
            Digitale Positionierung und Webdesign für niedergelassene Ärztinnen und Ärzte in Österreich. Erstellung von Praxis-Websites, KI-Readiness-Optimierung, Schema Markup, lokale Suchmaschinenoptimierung und digitales Marketing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Wirtschaftskammer / Berufsrecht</h2>
          <p className="text-gray-700 leading-relaxed">
            Mitglied der Wirtschaftskammer Niederösterreich<br />
            Fachgruppe: Unternehmensberatung, Buchhaltung und Informationstechnologie<br />
            Berufsrecht: Gewerbeordnung (GewO): <a href="https://www.ris.bka.gv.at" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">UID-Nummer</h2>
          <p className="text-gray-700">ATU78915818</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Haftungsausschluss</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Urheberrecht</h2>
          <p className="text-gray-700 leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Online-Streitbeilegung</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400">Stand: Februar 2026</p>
        </div>
      </div>
    </main>
  )
}
