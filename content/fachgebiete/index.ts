import type { FachgebietContent } from '@/lib/content-types'
import { augenchirurgie } from './augenchirurgie'
import { dermatologie } from './dermatologie'
import { gynaekologie } from './gynaekologie'
import { hno_aesthetik } from './hno-aesthetik'
import { hausarzt } from './hausarzt'
import { internistik } from './internistik'
import { neurologie } from './neurologie'
import { orthopaedie } from './orthopaedie'
import { paediatrie } from './paediatrie'
import { psychiatrie } from './psychiatrie'
import { reproduktion } from './reproduktion'
import { urologie } from './urologie'
import { zahnarzt } from './zahnarzt'

// Alphabetische Reihenfolge (Kevin-Direktive)
// Zahnarzt am Ende, weil es technisch kein Arzt-Fach ist (Zahnmedizin = eigenes Studium)
export const fachgebieteList: FachgebietContent[] = [
  augenchirurgie,
  dermatologie,
  gynaekologie,
  hno_aesthetik,
  hausarzt,
  internistik,
  neurologie,
  orthopaedie,
  paediatrie,
  psychiatrie,
  reproduktion,
  urologie,
  zahnarzt,
]

// Slugs, die optisch als "extra" hervorgehoben werden (klein, Orange-Badge)
export const fachgebieteExtraSlugs: string[] = ['zahnarzt']

export const fachgebieteBySlug: Record<string, FachgebietContent> = Object.fromEntries(
  fachgebieteList.map((fg) => [fg.slug, fg])
)

export const fachgebieteTotalPages = fachgebieteList.reduce((sum, fg) => sum + fg.paperPages, 0)
