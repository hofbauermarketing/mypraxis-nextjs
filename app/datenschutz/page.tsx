import Link from 'next/link'

export const metadata = {
  title: 'Datenschutzerklärung | mypraxis.at',
  description: 'Datenschutzerklärung von mypraxis.at – Kevin Hofbauer e.U.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-medium mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-extrabold text-primary mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 mb-10">Gemäß DSGVO (EU) 2016/679 und dem österreichischen Datenschutzgesetz (DSG)</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">1. Verantwortlicher</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Kevin Hofbauer e.U.</strong><br />
            Hauptplatz 12, 3902 Vitis, Österreich<br />
            E-Mail: <a href="mailto:office@mypraxis.at" className="text-secondary hover:underline">office@mypraxis.at</a><br />
            Tel.: <a href="tel:+436641915447" className="text-secondary hover:underline">+43 664 19 15 447</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">2. Grundsätze der Datenverarbeitung</h2>
          <p className="text-gray-700 leading-relaxed">
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG, TKG).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">3. Daten, die wir verarbeiten</h2>
          <h3 className="text-lg font-semibold text-primary mb-2">3.1 Server-Logfiles</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beim Besuch unserer Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert, die Ihr Browser übermittelt. Dies sind: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Browsertyp und -version, Betriebssystem, Referrer-URL. Diese Daten sind technisch erforderlich (Art. 6 Abs. 1 lit. f DSGVO) und werden nach spätestens 7 Tagen gelöscht.
          </p>
          <h3 className="text-lg font-semibold text-primary mb-2">3.2 Kontaktaufnahme</h3>
          <p className="text-gray-700 leading-relaxed">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">4. Hosting / Vercel</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website wird auf der Plattform Vercel Inc. (340 Pine Street, Suite 900, San Francisco, CA 94104, USA) gehostet. Bei jedem Seitenaufruf werden Zugriffsdaten (IP-Adresse, Browser, Zeitstempel) an Vercel übertragen. Vercel ist als Auftragsverarbeiter tätig. Grundlage: Art. 28 DSGVO. Mehr Informationen: <a href="https://vercel.com/legal/privacy-policy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">5. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website verwendet derzeit ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Marketing- oder Tracking-Cookies gesetzt. Sie können Cookies in Ihren Browsereinstellungen jederzeit deaktivieren oder löschen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">6. Ihre Rechte</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            {[
              'Recht auf Auskunft (Art. 15 DSGVO)',
              'Recht auf Berichtigung (Art. 16 DSGVO)',
              'Recht auf Löschung (Art. 17 DSGVO)',
              'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
              'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
              'Recht auf Widerspruch (Art. 21 DSGVO)',
              'Recht auf Beschwerde bei der Datenschutzbehörde (Art. 77 DSGVO)',
            ].map((right) => (
              <li key={right} className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">→</span>
                <span>{right}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Für die Ausübung Ihrer Rechte wenden Sie sich an: <a href="mailto:office@mypraxis.at" className="text-secondary hover:underline">office@mypraxis.at</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">7. Datenschutzbehörde</h2>
          <p className="text-gray-700 leading-relaxed">
            Österreichische Datenschutzbehörde<br />
            Barichgasse 40-42, 1030 Wien<br />
            <a href="https://www.dsb.gv.at" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">8. Aktualität dieser Datenschutzerklärung</h2>
          <p className="text-gray-700 leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets den aktuellen rechtlichen Anforderungen entsprechen zu lassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400">Stand: Februar 2026</p>
        </div>
      </div>
    </main>
  )
}
