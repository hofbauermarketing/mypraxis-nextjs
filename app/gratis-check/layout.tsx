import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gratis Website-Check für Ärzte | mypraxis.at',
  description: 'Kostenloser KI-Sichtbarkeits-Check und WCAG-Barrierefreiheits-Check für Arzt-Websites in Österreich. Sofort-Ergebnis.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/gratis-check' },
}

export default function GratisCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
