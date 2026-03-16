import type { Metadata } from 'next'
import LandingPageClient from './LandingPageClient'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Pilotprogramm 2026 – mypraxis.at',
}

export default function LandingPage() {
  return <LandingPageClient />
}
