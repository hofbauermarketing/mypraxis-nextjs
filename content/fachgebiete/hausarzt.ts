import type { FachgebietContent } from '@/lib/content-types'

export const hausarzt: FachgebietContent = {
  slug: 'hausarzt',
  name: 'Hausarzt / Wahlarzt',
  shortName: 'Hausarzt',
  sortOrder: 4,
  paperPages: 37,

  hero: {
    pille: 'Fachgebiet · Wahlarzt / Hausarzt',
    h1: 'Websites für Wahlärzt:innen — mit Zeit, Würde und Augenhöhe.',
    sub: 'Familien, Selbständige, Senior:innen, Biohacker, Expats — fünf grundverschiedene Lebenslagen suchen dasselbe: jemand, der Zeit hat und zuhört. Wir bauen Websites, die genau das ausstrahlen — ohne Premium-Inszenierung. Grundlage: unser 37-seitiges Strategiepapier Wahlarzt-Hausarzt.',
    teaser: 'Allgemeinmedizin mit Würde · fünf Lebenslagen · Anti-Elitismus',
    image: '/fachgebiete/hausarzt-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/hausarzt-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/hausarzt-bg-bibliothek.jpg',
    credibility: '/fachgebiete/hausarzt-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/hausarzt-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Wahlarzt- und Hausarzt-Patient:innen besonders macht',
    paragraphs: [
      'Der Wahlarzt ist keine Premium-Klasse. Er ist die Antwort auf die strukturelle Wahrheit, dass Kassenordinationen immer weniger Zeit pro Patient:in haben. Wer zu einem:r Wahlärzt:in geht, zahlt nicht für Exklusivität — sondern für 20 Minuten statt 5.',
      'Das ist der Kern. Eine Wahlarzt-Website darf nicht nach VIP-Medizin klingen. Sie muss nach „hier wird zugehört" klingen. Familienvater Michael mit Neurodermitis-Tochter, Unternehmerin Sabine mit Migräne seit zehn Jahren, Seniorin Hedwig mit drei Diagnosen gleichzeitig — alle suchen dasselbe: Zeit.',
      'Zusatz-Welten: Biohacker-Longevity (wachsende Zielgruppe, zahlungsbereit) und englischsprachige Expats (Wien ist internationaler Standort). Beide brauchen eigene Sub-Pfade.',
    ],
  },

  szene: {
    title: 'Ein Dienstagmorgen, zwei Anrufer',
    person1: {
      name: 'Dr. Petra Wimmer',
      rolle: '48 · Fachärztin für Allgemeinmedizin · seit 3 Jahren Wahlärztin in Wien-Josefstadt',
      image: '/fachgebiete/hausarzt-szene-lena.jpg',
      text: 'Fünfzehn Jahre Kassenstelle, dann bewusst Wahlarzt-Modell. Sie sieht 12 Patient:innen pro Tag statt 40. Sie möchte eine Website, die das widerspiegelt — ohne nach „Premium-Privatmedizin" zu klingen. Kein Gold, kein Marmor, keine Luxus-Anmutung.',
      zitat: 'Ich bin nicht teurer, ich bin langsamer. Das soll die Website zeigen.',
      zitatAttr: '— Dr. Wimmer im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Moment, 3 km entfernt',
    person2: {
      name: 'Michael Berger',
      rolle: '42 · Unternehmer · zwei Kinder · Familie überfordert vom Kassen-System',
      image: '/fachgebiete/hausarzt-szene-markus.jpg',
      text: 'Seit Jahren Gesundheits-Organisator für seine Familie. Die Kinderärztin hat 5 Minuten pro Kind. Die Hausärztin 7 Minuten für seine Frau. Er will eine Wahlärztin, die Zeit hat, sich Zusammenhänge anschaut. Er ist zahlungsbereit — aber keine Luxus-Zielgruppe. Er will Substanz.',
      zitat: 'wahlarzt wien familie zeit ganzheitlich',
      zitatAttr: '— seine Google-Suche, Sonntagabend',
    },
    abschluss: 'Zwischen Dr. Wimmer und Michael Berger liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Petra Wimmer und Michael Berger sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Wahlarzt-Praxen leben von Ton und Haltung — nicht von Premium-Inszenierung. Vor dem Design klären wir, wie sich das abbildet.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage + Everyman-Einschlag (bodenständig, keine Premium-Inszenierung). Anti-Elitismus als bewusstes Nein.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Familie mit Kindern, Selbständige:r, Multi-Morbidität-Senior:in, Biohacker, Expat. Fünf Lebenslagen.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Wahlarzt-Websites inszenieren Premium, Kundschaft sucht aber Zeit) bis Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Michael (Familie) braucht „Zeit". Lisa (Biohacker) braucht „Daten". James (Expat) braucht „English". Matrix definiert Hooks.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Bodenständig, warm, Mittelschicht-nah. Keine VIP-Anmutung. Kein Gold.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Persona-orientierte Landings (`/familie`, `/longevity`, `/english`).' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Sabine', vollerName: 'Sabine Huber', alter: 44, akzent: 'gruen',
      image: '/fachgebiete/personas/sabine.jpg',
      fachContext: 'Familie · zwei Kinder · berufstätig',
      kontext: 'Projektmanagerin, zwei Kinder (8 und 11). Kassenhausarzt hat 5 Minuten pro Termin. Sie braucht jemanden, der die ganze Familie kennt, Zusammenhänge sieht. Bereit, 80-120 € pro Erstordination zu zahlen für 20 Minuten Zeit.',
      stilleFrage: 'Bin ich „zu anspruchsvoll", wenn ich mehr als 5 Minuten Zeit will?',
      suchanfrage: 'wahlarzt wien familie zeit ganzheitlich',
    },
    {
      name: 'Michael', vollerName: 'Michael Berger', alter: 42, akzent: 'blau',
      image: '/fachgebiete/personas/michael.jpg',
      fachContext: 'Selbständiger Unternehmer · wiederkehrende Beschwerden',
      kontext: 'Unternehmer. Chronischer Stress, Rückenschmerzen, schlechter Schlaf. Hausarzt hat Blutdruckmedikament verordnet, ohne Ursache zu besprechen. Er will einen Wahlarzt, der Zusammenhänge sieht — nicht nur Einzelsymptome behandelt.',
      stilleFrage: 'Werde ich endlich als Mensch gesehen — nicht als Symptom-Sammlung?',
      suchanfrage: 'wahlarzt wien unternehmer ganzheitlich vorsorge',
    },
    {
      name: 'Hedwig', vollerName: 'Hedwig Gruber', alter: 73, akzent: 'terracotta',
      image: '/fachgebiete/personas/hedwig.jpg',
      fachContext: 'Multi-Morbidität · Senior:in · wohlhabend',
      kontext: 'Witwe. Bluthochdruck, Diabetes Typ 2, beginnende Arthrose. Drei verschiedene Kassen-Ärzte, niemand hat Übersicht. Sie will eine Wahlärztin, die alles koordiniert, mehr Zeit nimmt, auch Hausbesuche macht.',
      stilleFrage: 'Wer behält den Überblick über meine drei Diagnosen — wenn ich es nicht mehr kann?',
      suchanfrage: 'hausarzt wien multi morbidität hausbesuch',
    },
    {
      name: 'Lisa', vollerName: 'Lisa Wang', alter: 38, akzent: 'violett',
      image: '/fachgebiete/personas/lisa.jpg',
      fachContext: 'Biohacker · Longevity · Präventivmedizin',
      kontext: 'Tech-Start-up-Gründerin. Trägt CGM, misst HRV, Continuous-Blood-Labs. Sucht Wahlärztin, die moderne Biomarker (ApoB, Lp(a), IGF-1) versteht, nicht nur Standard-Blutbild. Zahlungsbereit für tiefe Diagnostik.',
      stilleFrage: 'Bin ich bei einer klassischen Hausärztin mit Longevity-Fragen am richtigen Ort — oder werde ich als spleenig abgetan?',
      suchanfrage: 'longevity arzt wien apob lp(a) wahlarzt',
    },
    {
      name: 'James', vollerName: 'James O\'Brien', alter: 36, akzent: 'petrol',
      image: '/fachgebiete/personas/james.jpg',
      fachContext: 'Expat · Irischer IT-Consultant in Wien',
      kontext: 'Seit zwei Jahren in Wien, EU-Krankenversichert. Deutsch auf B1-Niveau — reicht nicht für medizinische Gespräche. Sucht englischsprachige:n Wahlärzt:in, der:die Versicherungs-Erstattung klar erklärt.',
      stilleFrage: 'Finde ich überhaupt einen Arzt in Wien, der English speaks and respects my Irish background?',
      suchanfrage: 'english speaking doctor vienna family medicine',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Everyman-Einschlag · Anti-Elitismus',
    paragraphs: [
      '**Caregiver** trägt die langjährige Arzt-Patient:in-Beziehung, die Familien über Generationen begleitet. Wärme, Verlässlichkeit, kein Verkaufsdruck.',
      '**Sage** bringt die fachliche Autorität — eine Allgemeinmedizinerin, die ApoB erklären kann, die moderne Longevity-Parameter kennt, die bei Multi-Morbidität koordinieren kann.',
      '**Everyman-Einschlag** ist das Entscheidende: die Website muss klingen wie „ich bin eine:r von euch, nur mit mehr Zeit". Nicht wie „Premium-Medizin für die, die es sich leisten können". Bodenständig österreichisch, nicht VIP-international.',
      '**Anti-Elitismus** explizit: keine Marmor-Anmutung, kein Gold, keine „Concierge Medicine"-Sprache. Das verschreckt die Familien-Zielgruppe (Sabine, Michael) und wirkt bei Lisa (Biohacker) arrogant.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Wahlarzt ist Zeit, nicht Premium.', begruendung: 'Der Unterschied zum Kassenarzt sind nicht Marmor-Böden, sondern 20 Minuten statt 5. Die Website muss Zeit kommunizieren, nicht Luxus.' },
      { satz: 'Mittelschicht kann sich Wahlarzt leisten — mit Rückerstattung.', begruendung: 'Die Website sollte Rückerstattungs-Logik (ÖGK/BVAEB/SVS) transparent erklären. Sabine-Typ-Familien rechnen nach — und stellen fest: leistbar.' },
      { satz: 'Longevity und Biohacking gehören zur Allgemeinmedizin — nicht in Privatkliniken.', begruendung: 'Lisa-Typ-Patient:innen suchen nicht Kliniken, sondern eine:n Hausärzt:in, die ApoB versteht. Eigene Longevity-Sub-Landing macht den Unterschied.' },
      { satz: 'Expats sind eigene Zielgruppe — und sprechen Englisch.', begruendung: 'James-Typ-Patient:innen googeln „english speaking doctor vienna". Wenn die Website keine englische Version hat, werden sie nicht gefunden.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage mit Everyman-Einschlag · Anti-Elitismus" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 37-seitige Strategiepapier-Vorlage für Wahlarzt/Hausarzt — das umfangreichste unserer Strategiepapiere. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Wahlarzt-Websites sehen — und was nicht funktioniert',
    items: [
      'Premium-Inszenierung mit Gold/Marmor/VIP-Rhetorik — verschreckt Mittelschicht-Familien, wirkt arrogant.',
      '„Concierge Medicine" als Label — in Österreich kulturell fremd, klingt nach US-Luxus-Medizin.',
      'Keine Rückerstattungs-Info sichtbar — Sabine-Typ-Familien rechnen nicht nach und brechen ab.',
      'Longevity oder Biohacking nicht erwähnt — wachsende Zielgruppe (Lisa-Typ), die Kassenärzt:innen abtun.',
      'Keine englische Version — Wien hat 30 % Expat-Anteil in manchen Bezirken.',
      'Kein Hausbesuch-Angebot für Senior:innen — Hedwig-Typ-Patient:innen sind zahlungsbereit und suchen genau das.',
      'Behandlungs-Liste statt Beziehungs-Narrativ — Allgemeinmedizin lebt von Kontinuität, nicht von Einzel-Leistungen.',
    ],
  },

  designRichtung: {
    title: 'Bodenständig, warm, nicht inszeniert',
    text: 'Farbwelt: warme Erdtöne, gedämpftes Navy, Creme — keine Gold-Akzente, kein VIP-Schwarz. Typografie: lesbare Serif für Headlines, klare Sans für Body. Bildsprache: österreichische Altbau-Innenräume, echte Familien-Situationen (keine Stock-Business-People), Ordination mit Möbeln statt Designer-Studio. Der Eindruck: „bei Hausärzt:in um die Ecke, nur mit Zeit".',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Wahlarzt-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Zeit-Versprechen', text: '„20 Minuten pro Termin" oder „Zeit für die ganze Familie" — konkret, nicht prahlerisch.' },
      { nr: 2, title: 'Rückerstattungs-Logik sichtbar', text: 'Wie viel kommt zurück (ÖGK/BVAEB/SVS)? Eigene Sektion oder Rechner-Tool.' },
      { nr: 3, title: 'Familie-Landing', text: 'Für Sabine-Typ: Betreuung aller Familienmitglieder, Kinder-Erkrankungen, Generationen-Begleitung.' },
      { nr: 4, title: 'Longevity/Biohacking-Sub-Landing', text: 'Für Lisa-Typ: moderne Biomarker (ApoB, Lp(a), IGF-1), CGM-Interpretation, Präventiv-Checks.' },
      { nr: 5, title: 'English Version', text: 'Für James-Typ: vollständige englische Website oder zumindest Haupt-Seiten (/english).' },
      { nr: 6, title: 'Hausbesuch-Angebot', text: 'Für Hedwig-Typ: Multi-Morbidität, eingeschränkte Mobilität, regelmäßige Betreuung im häuslichen Umfeld.' },
      { nr: 7, title: 'Vorsorge-Check-Pakete', text: 'Für Michael-Typ: Unternehmer-Check mit Zeit — nicht nur Kassen-Gesundenuntersuchung.' },
      { nr: 8, title: 'Online-Terminbuchung', text: 'Für alle berufstätigen Zielgruppen — Zeitersparnis als Service.' },
      { nr: 9, title: 'Kontakt persönlich, nicht formalistisch', text: 'Die Ärztin bzw. der Arzt im Bild, kein Rezeptions-Gesicht. Anruf und Formular gleichwertig.' },
    ],
  },

  typischeSuchen: [
    'wahlarzt wien familie zeit',
    'hausarzt wien aufnahmend neu',
    'longevity arzt wien apob biomarker',
    'english speaking doctor vienna',
    'hausbesuch wien wahlarzt senior',
    'wahlarzt rückerstattung wie viel',
    'vorsorge check wien privat unternehmer',
    'hausarzt kassenstelle alternative',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Wahlarzt-Praxis bauen',
    items: [
      'Hauptseite mit Zeit-Versprechen (20 Minuten-Termin)',
      'Rückerstattungs-Rechner oder -Tabelle prominent',
      'Persona-Landings: `/familie`, `/longevity`, `/english`, optional `/senioren`',
      'Vorsorge-Check-Pakete transparent beschrieben',
      'Hausbesuch-Angebot bei entsprechender Praxis-Ausrichtung',
      'Englische Version der Haupt-Seiten',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/hausarzt-content.jpg',
  },

  faq: [
    { q: 'Wie kommuniziere ich „Wahlarzt“ ohne Premium-Inszenierung?', a: 'Durch Fokus auf Zeit, nicht auf Exklusivität. Die Website-Antwort sollte das strukturelle Argument machen: Kassenärzt:innen haben wenig Zeit pro Patient:in, Wahlärzt:innen haben mehr — und das kostet Geld. Kein Marmor, kein Gold, kein VIP-Look.' },
    { q: 'Wie transparent sollten Honorare und Rückerstattungen sein?', a: 'Sehr transparent. Die Website-Antwort sollte Honorar pro Termin + typische Rückerstattung durch ÖGK/BVAEB/SVS sichtbar machen. Mittelschicht-Familien kalkulieren — und stellen fest, dass es leistbar ist.' },
    { q: 'Soll ich Longevity und Biohacking auf die Website aufnehmen?', a: 'Wenn Sie diese Zielgruppe ansprechen wollen: ja, mit eigener Sub-Landing. Die Website-Antwort sollte moderne Biomarker (ApoB, Lp(a), IGF-1), CGM-Interpretation und Präventiv-Medizin klar thematisieren.' },
    { q: 'Brauche ich eine englische Website?', a: 'In Wien mit hohem Expat-Anteil: klar ja. Die Website-Antwort sollte mindestens Haupt-Seiten auf Englisch haben. James-Typ-Patient:innen googeln „english speaking doctor" und bleiben sonst auf der Strecke.' },
    { q: 'Wie gehe ich mit Multi-Morbidität bei Senior:innen um?', a: 'Als Kern-Kompetenz positioniert. Die Website-Antwort sollte Hausbesuche erwähnen, Koordination zwischen Fachärzten als Leistung beschreiben, Zeit für komplexe Fälle betonen.' },
    { q: 'Wie wirkt Wahlarzt auf Patient:innen, die noch nie einen hatten?', a: 'Die Website-Antwort sollte Schwellenangst abbauen. Ein eigener Abschnitt „Was ist Wahlarzt? Was kostet es effektiv?" hilft Michael-Typ-Patient:innen zu entscheiden.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Wahlarzt-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihre Zielgruppen (Familie / Longevity / Expat / Senior:innen) und wie Ihre Website ohne Premium-Inszenierung auskommt.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
