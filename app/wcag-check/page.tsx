import { Metadata } from 'next'
import Link from 'next/link'
import WcagScanner from '@/components/WcagScanner'

export const metadata: Metadata = {
  title: 'WCAG Barrierefreiheits-Check | mypraxis.at',
  description: 'Kostenloser WCAG-Check für Ihre Arztpraxis-Website. Prüfen Sie in Sekunden ob Ihre Website barrierefrei ist – DSGVO-konform, kein Download nötig.',
  robots: { index: true, follow: true },
}

export default function WcagCheckPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#112080] via-[#1e3ab8] to-[#2a50cc]">
      <div className="pt-24 pb-0 px-6 max-w-3xl mx-auto">
        <Link href="/gratis-check" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zum Gratis Check
        </Link>
      </div>
      <WcagScanner />
    </main>
  )
}
