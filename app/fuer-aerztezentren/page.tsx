import type { Metadata } from 'next'
import ZielgruppeTemplate from '@/components/landing/ZielgruppeTemplate'
import { aerztezentren } from '@/content/zielgruppen/aerztezentren'

export const metadata: Metadata = {
  title: 'Websites für Ärztezentren & PVEs in Österreich | mypraxis.at',
  description:
    'Digitale Infrastruktur für Ärztezentren und PVEs — Einzelprofile, Schema-Architektur, Mehrsprachigkeit. KMU.DIGITAL-Förderung je Ärzt:in möglich.',
  alternates: { canonical: '/fuer-aerztezentren' },
}

export default function Page() {
  return <ZielgruppeTemplate data={aerztezentren} />
}
