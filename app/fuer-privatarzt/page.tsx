import type { Metadata } from 'next'
import ZielgruppeTemplate from '@/components/landing/ZielgruppeTemplate'
import { privatarzt } from '@/content/zielgruppen/privatarzt'

export const metadata: Metadata = {
  title: 'Websites für Privat- und Wahlärzt:innen | mypraxis.at',
  description:
    'Websites für Privatärzt:innen, die Wunsch-Patient:innen anziehen — mit fachgebiet-spezifischer Positionierung und KI-Sichtbarkeit.',
  alternates: { canonical: '/fuer-privatarzt' },
}

export default function Page() {
  return <ZielgruppeTemplate data={privatarzt} />
}
