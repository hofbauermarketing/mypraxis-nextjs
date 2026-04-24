// Content-Typen für v2.1-Umbau (Startseite + Zielgruppen-Unterseiten + Fachgebiet-Unterseiten)
// Single Source of Truth für Texte, damit JSX sauber bleibt.

// ───── Shared Primitives ─────

export type LinkRef = {
  href: string
  label: string
}

export type IconText = {
  icon?: string
  title: string
  text: string
}

// ───── §4 Vergleichs-Serie ─────

export type VergleichPaar = {
  nr: number
  title: string
  imgLeft: string
  imgLeftAlt: string
  imgLeftCaption: string
  imgRight: string
  imgRightAlt: string
  imgRightCaption: string
  text: string
}

// ───── Startseite ─────

export type MarketingTruthPair = {
  arzt: string
  patient: string
}

export type FachgebietTeaser = {
  slug: string
  name: string
  shortName: string
  teaser: string
  extra?: boolean           // optisch klein + orange hervorgehoben (z.B. Zahnarzt)
  extraLabel?: string       // z.B. "extra" / "Sonderfall"
}

export type PaperListItem = {
  name: string
  pages: number
  slug: string
}

export type BefundStep = {
  num: string
  title: string
  duration: string
  text: string
}

export type FaqItem = {
  q: string
  a: string
}

export type StartseitenContent = {
  hero: {
    pille: string
    h1: string
    sub: string
    cta1: LinkRef
    cta2: LinkRef
    footnote: string
    image: string
  }
  marketingTruth: {
    kicker: string
    headline: string
    sub: string
    leadIn: string
    pairs: MarketingTruthPair[]
    closer: string
  }
  vergleiche: {
    kicker: string
    headline: string
    sub: string
    items: VergleichPaar[]
    closing: string
  }
  fachgebieteStrip: {
    headline: string
    sub: string
    items: FachgebietTeaser[]
    ctaText: string
    ctaHref: string
  }
  papers: {
    kicker: string
    headline: string
    sub: string
    list: PaperListItem[]
    totalPages: number
    totalLabel: string
    quote: string
    quoteAttr: string
  }
  foerderHinweis: string
  samariterFraming: {
    active: boolean
    kicker: string
    headline: string
    text: string
  }
  befund: {
    kicker: string
    headline: string
    sub: string
    befundTitel: string
    patient: string
    datum: string
    steps: BefundStep[]
    stamp: string
    ctaText: string
    ctaHref: string
  }
  faq: {
    headline: string
    sub: string
    items: FaqItem[]
  }
  finalCta: {
    text: string
    ctaPrimary: LinkRef
    ctaSecondary: LinkRef
  }
}

// ───── Zielgruppen-Unterseiten (/fuer-*) ─────

export type ZielgruppeSlug = 'kassenaerzte' | 'privatarzt' | 'aerztezentren'

// Zielgruppen-Persona (einfacher als Fachgebiet-Persona)
export type ZielgruppePersona = {
  name: string
  vollerName?: string
  alter?: number
  akzent?: 'blau' | 'graublau' | 'terracotta' | 'gruen' | 'violett' | 'sand' | 'petrol'
  image?: string
  kategorie: string               // „Stammpatient:in · Dauermedikation" etc.
  kontext: string
  stilleFrage: string
  suchanfrage: string
  websiteBedarf: string           // was diese Persona auf der Website braucht
}

// Patient:innen-Reise (nur Ärztezentrum)
export type PatientReise = {
  nr: number
  title: string
  patient: string                 // „Herr Huber, 58 · Knieschmerzen seit 6 Monaten"
  tage: { tag: string; fachrichtung: string; aktion: string }[]
  vorteil: string
}

export type ZielgruppeContent = {
  slug: ZielgruppeSlug
  name: string
  nameShort: string
  hero: {
    pille: string
    h1: string
    sub: string
    cta: LinkRef
    image: string
  }
  // Hintergrund-Bilder für Sektionen (optional)
  backgrounds?: {
    szene?: string
    siebenSchritte?: string
    credibility?: string
  }
  brauchen: {
    title: string
    items: string[]
  }
  warumWir: {
    title: string
    points: IconText[]
  }
  zeitaufwand: {
    title: string
    text: string
    minutes: number
  }
  preisRange: {
    title: string
    text: string
    foerderHint: string
  }
  referenzPlatzhalter: {
    title: string
    text: string
  }
  faq: FaqItem[]
  naechsterSchritt: {
    title: string
    text: string
    cta: LinkRef
  }
  // NEU — optionale, tiefere Sektionen (wie Fachgebiet-Template)
  szene?: {
    title: string
    person1: {
      name: string; rolle: string; image: string; text: string
      zitat?: string; zitatAttr?: string
    }
    verbindung: string
    person2: {
      name: string; rolle: string; image: string; text: string
      zitat?: string; zitatAttr?: string
    }
    abschluss: string
    disclaimer: string
  }
  siebenSchritte?: {
    title: string
    intro: string
    items: SiebenSchritt[]
  }
  personasDisclaimer?: string
  personas?: ZielgruppePersona[]
  archetyp?: {
    triade: string
    paragraphs: string[]
  }
  vierKernsaetze?: {
    title: string
    sub: string
    items: KernSatz[]
  }
  credibility?: {
    title: string
    text: string
  }
  antiMuster?: {
    title: string
    items: string[]
  }
  designRichtung?: {
    title: string
    text: string
  }
  neunBloecke?: {
    title: string
    items: NeunBlock[]
  }
  // Spezifisch Ärztezentrum: Patient:innen-Reisen + Fachrichtungs-Matrix
  patientReisen?: {
    title: string
    intro: string
    items: PatientReise[]
  }
  fachrichtungsMatrix?: {
    title: string
    intro: string
    fachrichtungen: { name: string; icon?: string; partner: string[] }[]
    fussnote?: string
  }
  ueberweiser?: {
    title: string
    text: string
    items: string[]
  }
}

// ───── Fachgebiet-Unterseiten (/fachgebiete/*) ─────

export type FachgebietPersona = {
  name: string
  alter: number
  kontext: string
  stilleFrage: string
  suchanfrage: string
}

export type FachgebietPersonaErweitert = FachgebietPersona & {
  vollerName?: string                // "Andrea Wagner" — wenn leer, fallback auf .name
  fachContext?: string               // "Depression im Berufsleben"
  image?: string                     // optionales Portrait-Bild (statt Initialen-Avatar)
  // Akzent-Key für Karten-Farbton; Template mapped das auf Gradient + Border
  akzent?: 'blau' | 'graublau' | 'terracotta' | 'gruen' | 'violett' | 'sand' | 'petrol'
}

export type SiebenSchritt = { num: number; title: string; text: string }
export type KernSatz = { satz: string; begruendung: string }
export type NeunBlock = { nr: number; title: string; text: string }

export type AngehoerigenPfad = {
  active: boolean
  title: string
  intro: string
  fragen: string[]                   // typische Suchanfragen
  text: string
  ctaLabel: string
}

// Hintergrund-Bild-Setup für Sektionen (optional)
export type SektionsBg = {
  image: string
  opacity?: number                   // 0-1 (default 0.15)
  overlayFrom?: string               // CSS-Farbe (default rgba(10,15,30,0.9))
  overlayTo?: string
}

export type FachgebietContent = {
  slug: string
  name: string
  shortName: string
  sortOrder: number
  paperPages: number
  hero: {
    pille: string
    h1: string
    sub: string
    teaser: string
    image: string
  }
  // NEU: Hintergrund-Bilder für Sektionen (optional pro Fachgebiet)
  backgrounds?: {
    szene?: string                    // Pfad zu Bild für §3
    siebenSchritte?: string           // Pfad zu Bild für §4
    credibility?: string              // Pfad zu Bild für §8
    angehoerige?: string              // Pfad zu Bild für §11b
  }
  verstaendnis: {
    title: string
    paragraphs: string[]
  }
  // NEU §3 — entweder einfache Szene ODER zweigeteilte mit 2 Personen
  szene?: {
    title: string
    text?: string                     // Legacy · wenn keine person1/person2 gesetzt
    person1?: {
      name: string
      rolle: string                   // z.B. "Dr. Lena Brandner · 34 · Wien-Wieden"
      image: string
      text: string
      zitat?: string                  // hervorgehobenes Zitat
      zitatAttr?: string              // Quellenangabe des Zitats
    }
    verbindung?: string               // "Gleichzeitig …"
    person2?: {
      name: string
      rolle: string
      image: string
      text: string
      zitat?: string                  // hervorgehobene Suchanfrage/Gedanke
      zitatAttr?: string
    }
    abschluss?: string                // Pointe
    disclaimer: string
  }
  // NEU §4
  siebenSchritte?: {
    title: string
    intro: string
    items: SiebenSchritt[]
  }
  // §5 Personas (erweitert)
  personasDisclaimer?: string        // Disclaimer-Text vor Persona-Galerie
  personas: FachgebietPersonaErweitert[]
  // NEU §6
  archetyp?: {
    triade: string
    paragraphs: string[]
  }
  // NEU §7
  vierKernsaetze?: {
    title: string
    sub: string
    items: KernSatz[]
  }
  // NEU §8
  credibility?: {
    title: string
    text: string
  }
  // NEU §9
  antiMuster?: {
    title: string
    items: string[]
  }
  // NEU §10
  designRichtung?: {
    title: string
    text: string
  }
  // NEU §11 (ersetzt wasWirBauen)
  neunBloecke?: {
    title: string
    items: NeunBlock[]
  }
  // NEU §11b – Angehörigen-Sub-Sektion
  angehoerigenPfad?: AngehoerigenPfad
  // bestehend
  typischeSuchen: string[]
  wasWirBauen: {
    title: string
    items: string[]
    contentImage: string
  }
  faq: FaqItem[]
  naechsterSchritt: {
    title: string
    text: string
    cta: LinkRef
  }
}
