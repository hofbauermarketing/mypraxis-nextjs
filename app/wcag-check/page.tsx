import { Metadata } from 'next'
import WcagScanner from '@/components/WcagScanner'

export const metadata: Metadata = {
  title: 'WCAG Barrierefreiheits-Check | mypraxis.at',
  description: 'Kostenloser WCAG-Check für Ihre Arztpraxis-Website. Prüfen Sie in Sekunden ob Ihre Website barrierefrei ist – DSGVO-konform, kein Download nötig.',
  robots: { index: true, follow: true },
}

export default function WcagCheckPage() {
  return <WcagScanner />
}
