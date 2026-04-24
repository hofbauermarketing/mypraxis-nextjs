import type { ZielgruppeContent } from '@/lib/content-types'
import { kassenaerzte } from './kassenaerzte'
import { privatarzt } from './privatarzt'
import { aerztezentren } from './aerztezentren'

export const zielgruppenList: ZielgruppeContent[] = [
  kassenaerzte,
  privatarzt,
  aerztezentren,
]

export const zielgruppenBySlug: Record<string, ZielgruppeContent> = Object.fromEntries(
  zielgruppenList.map((zg) => [zg.slug, zg])
)
