import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import FachgebietTemplate from '@/components/landing/FachgebietTemplate'
import { fachgebieteList, fachgebieteBySlug } from '@/content/fachgebiete'

type Params = { slug: string }

export function generateStaticParams() {
  return fachgebieteList.map((fg) => ({ slug: fg.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const data = fachgebieteBySlug[slug]
  if (!data) return {}
  return {
    title: `Websites für ${data.name} | mypraxis.at`,
    description: `Websites für ${data.name} in Österreich, basierend auf einem ${data.paperPages}-seitigen Strategiepapier. ${data.hero.teaser}`,
    alternates: { canonical: `/fachgebiete/${data.slug}` },
  }
}

export default async function FachgebietPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const data = fachgebieteBySlug[slug]
  if (!data) notFound()
  return <FachgebietTemplate data={data} />
}
