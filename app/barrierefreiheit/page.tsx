import Link from 'next/link'

export const metadata = {
  title: 'Barrierefreiheitserklärung | mypraxis.at',
  description: 'Barrierefreiheitserklärung von mypraxis.at gemäß Barrierefreiheitsgesetz (BaFG) und WCAG 2.1 Level AA.',
  robots: { index: true, follow: true },
}

export default function BarrierefreiheitPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-medium mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-extrabold text-primary mb-4">Barrierefreiheitserklärung</h1>
        <p className="text-gray-500 text-sm mb-10">Gemäß Barrierefreiheitsgesetz (BaFG) und WCAG 2.1 Level AA</p>

        {/* Status */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">Konformitätsstatus</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website – <strong>mypraxis.at</strong> – ist <strong>teilweise konform</strong> mit dem{' '}
            <a
              href="https://www.ris.bka.gv.at/eli/bgbl/I/2023/76"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Barrierefreiheitsgesetz (BaFG)
            </a>{' '}
            und den{' '}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>
            . Die nachfolgend aufgeführten Bereiche sind noch nicht vollständig barrierefrei.
          </p>
        </section>

        {/* Anbieter */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Anbieter</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Kevin Hofbauer e.U.</strong><br />
            Hauptplatz 12<br />
            3902 Vitis<br />
            Niederösterreich, Österreich<br /><br />
            Telefon: <a href="tel:+436641915447" className="text-secondary hover:underline">+43 664 19 15 447</a><br />
            E-Mail: <a href="mailto:office@mypraxis.at" className="text-secondary hover:underline">office@mypraxis.at</a>
          </p>
        </section>

        {/* Barrierefreie Inhalte */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Barrierefreie Inhalte</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Folgende Maßnahmen wurden zur Verbesserung der Barrierefreiheit umgesetzt:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>Semantisch korrektes HTML mit Überschriften-Hierarchie (h1–h3)</li>
            <li>Skip-Link zum Überspringen der Navigation (WCAG 2.4.1)</li>
            <li>Alle Formularfelder mit sichtbaren Labels und korrekten <code className="bg-gray-100 px-1 rounded text-sm">id</code>/<code className="bg-gray-100 px-1 rounded text-sm">htmlFor</code>-Verknüpfungen</li>
            <li>Sichtbarer Tastaturfokus bei allen interaktiven Elementen (WCAG 2.4.7)</li>
            <li>Ausreichende Farbkontraste für Text (WCAG 1.4.3)</li>
            <li>Responsives Design (funktioniert auf allen Bildschirmgrößen)</li>
            <li>ARIA-Labels für Screenreader an komplexen Bedienelementen</li>
            <li>Barrierefreiheits-Widget mit 14 Hilfsfunktionen (Schriftgröße, Kontrast, Vorlesen, Sprachauswahl u.a.)</li>
          </ul>
        </section>

        {/* Bekannte Einschränkungen */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Bekannte Einschränkungen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Folgende Inhalte oder Funktionen sind noch nicht vollständig barrierefrei:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>Einige Bildinhalte enthalten noch keine vollständigen Alternativtexte (Alt-Texte) – wird laufend ergänzt</li>
            <li>Komplexe Animationen können bei bestimmten Einstellungen ablenkend wirken – das Widget bietet eine „Animationen deaktivieren"-Funktion</li>
            <li>PDFs oder externe Verlinkungen (z.B. Formulare von Kooperationspartnern) entsprechen möglicherweise nicht den WCAG-Anforderungen</li>
          </ul>
        </section>

        {/* Feedback & Kontakt */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Feedback & Kontakt</h2>
          <p className="text-gray-700 leading-relaxed">
            Wenn Sie Barrieren auf unserer Website feststellen oder Verbesserungsvorschläge haben, freuen wir uns über Ihre Rückmeldung. Wir sind bestrebt, Barrieren schnellstmöglich zu beheben.
          </p>
          <div className="mt-4 bg-gray-50 rounded-lg p-4 text-gray-700 leading-relaxed">
            <p><strong>Kontakt bei Barrierefreiheitsproblemen:</strong></p>
            <p className="mt-1">
              E-Mail:{' '}
              <a href="mailto:office@mypraxis.at" className="text-secondary hover:underline">
                office@mypraxis.at
              </a>
            </p>
            <p>
              Telefon:{' '}
              <a href="tel:+436641915447" className="text-secondary hover:underline">
                +43 664 19 15 447
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-500">Antwort in der Regel innerhalb von 2 Werktagen.</p>
          </div>
        </section>

        {/* Schlichtungsverfahren */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Schlichtungsverfahren</h2>
          <p className="text-gray-700 leading-relaxed">
            Wenn Sie nach einer Rückmeldung an uns keine zufriedenstellende Lösung erhalten haben, können Sie sich an das{' '}
            <a
              href="https://www.sozialministerium.at"
              className="text-secondary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz
            </a>{' '}
            wenden, das als Durchsetzungsstelle für das Barrierefreiheitsgesetz in Österreich fungiert.
          </p>
        </section>

        {/* Technische Spezifikationen */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary mb-3">Technische Spezifikationen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Diese Website basiert auf folgenden Technologien:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 leading-relaxed">
            <li>HTML5</li>
            <li>CSS3 / Tailwind CSS</li>
            <li>JavaScript / React / Next.js</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Die Barrierefreiheit wurde mit folgenden Hilfsmitteln geprüft:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 leading-relaxed mt-2">
            <li>Manuelle Tastaturnavigation</li>
            <li>Chrome DevTools Accessibility Panel</li>
            <li>Prüfung der WCAG-2.1-AA-Kriterien anhand der offiziellen W3C-Checkliste</li>
          </ul>
        </section>

        {/* Barrierefreiheits-Widget */}
        <section className="mb-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">Unser Barrierefreiheits-Widget</h2>
          <p className="text-gray-700 leading-relaxed">
            Auf dieser Website ist ein Barrierefreiheits-Widget verfügbar (Symbol links auf der Seite), das folgende Funktionen bietet:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 leading-relaxed mt-3">
            <li>Schriftgröße anpassen (3 Stufen)</li>
            <li>Zeilenabstand und Buchstabenabstand erhöhen</li>
            <li>Legasthenie-freundliche Schrift</li>
            <li>Hoher Kontrast, Graustufen, invertierte Farben</li>
            <li>Dunkelmodus</li>
            <li>Animationen deaktivieren</li>
            <li>Links unterstreichen und hervorheben</li>
            <li>Überschriften hervorheben</li>
            <li>Großen Cursor aktivieren</li>
            <li>Fokus-Hervorhebung</li>
            <li>Bilder ausblenden</li>
            <li>Text vorlesen (Text-to-Speech)</li>
            <li>Lesemasken-Modus</li>
            <li>Sprache wechseln (Deutsch, Englisch, Russisch, Türkisch, Arabisch, Rumänisch, Polnisch, Ungarisch, Ukrainisch, Tschechisch)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            Alle Einstellungen werden lokal in Ihrem Browser gespeichert und bleiben beim nächsten Besuch erhalten.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-10">
          <p className="text-sm text-gray-400">Stand: März 2026 · Diese Erklärung wird regelmäßig aktualisiert.</p>
        </div>
      </div>
    </main>
  )
}
