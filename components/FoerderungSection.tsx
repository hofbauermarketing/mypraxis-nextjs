import Link from 'next/link'

export default function FoerderungSection() {
  return (
    <section
      id="foerderung"
      className="scroll-mt-24 mb-8"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-l-2 border-[#ff8a00]/60 pl-4 py-2 bg-[#ff8a00]/[0.03]">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="text-[#ff8a00] font-semibold">Förder-Hinweis:</span>{' '}
            Mindestens 30 % Grundförderung über KMU.DIGITAL sind für Ordinationen gesichert.
            Mit Kombination mehrerer Programme sind oft deutlich höhere Quoten möglich.{' '}
            <Link href="/#kontakt" className="text-[#112080] hover:text-[#1e3ab8] font-semibold underline decoration-dotted underline-offset-2">
              Im Erstgespräch prüfen wir Ihre Hebel kostenlos
            </Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
