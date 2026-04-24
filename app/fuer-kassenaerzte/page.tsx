import type { Metadata } from 'next'
import ZielgruppeTemplate from '@/components/landing/ZielgruppeTemplate'
import { kassenaerzte } from '@/content/zielgruppen/kassenaerzte'

export const metadata: Metadata = {
  title: 'Websites für Kassenärzt:innen in Österreich | mypraxis.at',
  description:
    'Websites für Kassenärzt:innen — rechtssicher, mehrsprachig, BFSG-konform. Bis zu 30 % KMU.DIGITAL-Förderung möglich.',
  alternates: { canonical: '/fuer-kassenaerzte' },
}

export default function Page() {
  return <ZielgruppeTemplate data={kassenaerzte} />
}
