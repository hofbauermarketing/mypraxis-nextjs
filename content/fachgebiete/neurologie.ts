import type { FachgebietContent } from '@/lib/content-types'

export const neurologie: FachgebietContent = {
  slug: 'neurologie',
  name: 'Neurologie',
  shortName: 'Neurologie',
  sortOrder: 6,
  paperPages: 21,

  hero: {
    pille: 'Fachgebiet · Neurologie',
    h1: 'Websites für Neurologie — für Patient:innen und die, die sie begleiten.',
    sub: 'Migräne-Patient:innen seit zwölf Jahren. Tochter einer Mutter mit Demenz-Verdacht. Junge MS-Verdachts-Fälle. Schlaganfall-Angehörige. Ein Fach, das zwei Zielgruppen gleichzeitig adressieren muss — Patient:innen und Angehörige. Grundlage: unser 21-seitiges Strategiepapier Neurologie.',
    teaser: 'Angehörigen-Pfad dominant · Demenz · Migräne · MS · Schlaganfall-Reha',
    image: '/fachgebiete/neurologie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/neurologie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/neurologie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/neurologie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/neurologie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Neurologie-Patient:innen besonders macht',
    paragraphs: [
      'Neurologie ist das Fach mit dem höchsten Angehörigen-Anteil. Bei Demenz-Verdacht bringt oft die Tochter die Mutter. Bei Schlaganfall plant die Ehefrau die Reha. Bei Parkinson ist der Sohn der Erstkontakt. Eine Neurologie-Website muss deshalb zwei Zielgruppen ansprechen: die Patient:innen selbst und diejenigen, die sie begleiten.',
      'Dazu kommen die „klassischen" Wahlarzt-Zielgruppen: chronische Migräne-Patient:innen nach zwölfjähriger Odyssee, junge MS-Verdachts-Fälle mit Sensibilitätsstörungen, Tremor-Patient:innen mit Parkinson-Angst. Jede dieser Gruppen erwartet anderen Ton.',
      'Unser Ansatz: Angehörigen-Pfad als gleichwertige Haupt-Sektion, nicht als Anhang. Plus eigene Sub-Landings für Demenz-Abklärung, Migräne-Therapie und Schlaganfall-Nachsorge.',
    ],
  },

  szene: {
    title: 'Ein Sonntagabend in Wien · zwei Generationen',
    person1: {
      name: 'Dr. Elisabeth Holzer',
      rolle: '50 · Fachärztin für Neurologie · seit 6 Jahren Wahlärztin in Wien-Währing',
      image: '/fachgebiete/neurologie-szene-lena.jpg',
      text: 'Achtzehn Jahre Klinik, Schwerpunkt Kopfschmerz-Therapie + Demenz-Diagnostik. Sie nimmt sich Zeit, bietet lange Erstgespräche. Ihre Website soll zeigen, dass Angehörige bei ihr willkommen sind — ohne dass die Praxis als „Alten-Spezialisierung" wirkt.',
      zitat: 'Bei mir darf die Tochter den Termin vereinbaren. Das muss die Website klarstellen.',
      zitatAttr: '— Dr. Holzer im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Moment, Wien-Donaustadt',
    person2: {
      name: 'Sabine Koller',
      rolle: '47 · Bankkauffrau · Tochter einer 78-jährigen Mutter',
      image: '/fachgebiete/neurologie-szene-markus.jpg',
      text: 'Alle zwei Wochen fährt sie zu ihrer Mutter in St. Pölten. Beim letzten Besuch: die Mutter hat dreimal in einer halben Stunde dieselbe Frage gestellt. Sabine hat zehn Stunden gegoogelt und weiß — das ist nicht „halt alt". Die Mutter weigert sich gegen jeden Arzt-Termin. Sabine sucht eine:n Neurolog:in, der:die ohne die Mutter zuerst mit ihr sprechen würde.',
      zitat: 'neurologe wien termin für angehörige ohne patient',
      zitatAttr: '— ihre Google-Suche, 22:14 Uhr',
    },
    abschluss: 'Zwischen Dr. Holzer und Sabine Koller liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Elisabeth Holzer und Sabine Koller sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Neurologie-Websites müssen zwei Zielgruppen gleichzeitig tragen — Patient:innen und Angehörige. Das prägt jede Design-Entscheidung.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage, Anti-Magician. Wärme für Angehörige, fachliche Autorität für Patient:innen.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Chronische Migräne, Demenz-Angehörige, MS-Verdacht, Parkinson-Verdrängung, Schlaganfall-Angehörige.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Neurologie-Websites vergessen Angehörige) bis Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Sabine (Angehörige) braucht „wir sprechen mit Ihnen zuerst". Julia (Migräne) braucht „CGRP-Therapie erklärt". Matrix steuert.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Ruhig, warm, neurologisch seriös. Keine „modern-cool"-Ästhetik. Altersgemischte Bildsprache.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Angehörigen-Pfad + Sub-Landings Demenz/Migräne/Schlaganfall.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Julia', vollerName: 'Julia Steiner', alter: 34, akzent: 'blau',
      image: '/fachgebiete/personas/julia.jpg',
      fachContext: 'Chronische Migräne · 12 Jahre Verlauf',
      kontext: 'Lehrerin. Migräne seit Teenagertagen, 10-15 Attacken pro Monat. Hat alle Standardtherapien durch. Sucht eine Neurologin, die CGRP-Antikörper verordnet — Kassen-Neurologin hält das für „zu teuer".',
      stilleFrage: 'Werde ich wieder zu einer Schmerzklinik geschickt oder bekomme ich endlich CGRP?',
      suchanfrage: 'migräne cgrp antikörper wien wahlarzt',
    },
    {
      name: 'Sabine', vollerName: 'Sabine Koller', alter: 47, akzent: 'terracotta',
      image: '/fachgebiete/personas/sabine-3.jpg',
      fachContext: 'Angehörige · Mutter mit Demenz-Verdacht',
      kontext: 'Bankkauffrau, Mutter in St. Pölten. Dreimal dieselbe Frage in einer halben Stunde. Mutter weigert sich gegen Arzt-Termine. Sabine will zuerst allein sprechen, bevor sie die Mutter überzeugt.',
      stilleFrage: 'Darf ich als Angehörige einen Termin ohne meine Mutter machen?',
      suchanfrage: 'neurologe wien termin für angehörige ohne patient',
    },
    {
      name: 'Tobias', vollerName: 'Tobias Maier', alter: 28, akzent: 'violett',
      image: '/fachgebiete/personas/tobias.jpg',
      fachContext: 'MS-Verdacht · Kribbeln in den Händen nachts',
      kontext: 'IT-Systemadministrator. Seit drei Monaten nächtliches Kribbeln in den Händen, manchmal im Fuß. Hausarzt hat MRT angefragt, Wartezeit 4 Monate. Er googelt, findet MS-Verdachts-Symptome, hat Angst.',
      stilleFrage: 'Ist es MS — und wenn ja, wie schnell muss ich handeln?',
      suchanfrage: 'ms verdacht kribbeln hände mrt wien privat',
    },
    {
      name: 'Franz', vollerName: 'Franz Weber', alter: 58, akzent: 'graublau',
      image: '/fachgebiete/personas/franz.jpg',
      fachContext: 'Parkinson-Verdrängung · leichter Tremor',
      kontext: 'Ingenieur. Seit einem Jahr leichter Tremor in der rechten Hand, beim Feinmotorischen. Er hat es bisher verdrängt. Seine Frau hat ihn überredet, endlich zu gehen. Er hat Angst vor der Diagnose.',
      stilleFrage: 'Was, wenn es Parkinson ist und ich meinen Beruf in 2 Jahren aufgeben muss?',
      suchanfrage: 'tremor hand parkinson früherkennung wien',
    },
    {
      name: 'Helga', vollerName: 'Helga Schmidt', alter: 62, akzent: 'gruen',
      image: '/fachgebiete/personas/helga.jpg',
      fachContext: 'Angehörige · Ehemann nach Schlaganfall',
      kontext: 'Pensionistin. Ehemann (65) hatte vor vier Wochen Schlaganfall, ist zuhause, Reha läuft. Sie organisiert alles — Therapien, Medikamente, Hilfsmittel. Sie braucht Neurolog:in für Nachsorge + ehrliches Gespräch über Prognose.',
      stilleFrage: 'Wie viel Autonomie wird mein Mann zurückgewinnen — und was heißt das für mich?',
      suchanfrage: 'neurologie nachsorge schlaganfall wien wahlarzt',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Anti-Magician',
    paragraphs: [
      '**Caregiver** ist dominant in Neurologie — weil die Hälfte aller Erstkontakte Angehörige sind. Die Website muss signalisieren: „Sie sind willkommen, auch ohne Ihre:n Angehörige:n." Wärme, Ruhe, Einladung.',
      '**Sage** trägt die fachliche Autorität: CGRP-Antikörper, Dopamin-Agonisten, Immunmodulation bei MS. Moderne Therapien konkret benennen — nicht generisches „neurologische Behandlung".',
      '**Anti-Magician** gilt besonders bei MS und Parkinson: keine „Heilung"-Versprechen, keine „wir stoppen die Krankheit"-Phrasen. Das verletzt die informierten Patient:innen (Tobias, Franz) und ihre Angehörigen sofort.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Angehörige sind eigenständige Klient:innen — keine Begleitpersonen.', begruendung: 'Sabine-Typ-Patient:innen machen in Neurologie 30-40 % des Marktes aus. Eine Website ohne Angehörigen-Pfad verliert sie komplett.' },
      { satz: 'Moderne Therapien müssen beim Namen genannt werden.', begruendung: 'Julia (CGRP), Tobias (Immunmodulation), Franz (MAO-B-Hemmer) googeln Fachbegriffe. Wer „neurologische Behandlung" schreibt, wird nicht gefunden.' },
      { satz: 'Demenz-Abklärung ist eigene Leistung — nicht Teil der „Kognitiven Diagnostik".', begruendung: 'Angehörige googeln explizit „demenz abklärung wien". Eine eigene Landing mit MMST, Uhren-Test, CT/MRT-Ablauf macht den Unterschied.' },
      { satz: 'Nach dem Schlaganfall beginnt die Neurologie erst.', begruendung: 'Helga-Typ-Angehörige suchen Nachsorge, ehrliche Prognose, Rehabilitations-Koordination. Ein eigener Bereich auf der Website deckt das ab.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 21-seitige Strategiepapier-Vorlage für Neurologie. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Neurologie-Websites sehen — und was nicht funktioniert',
    items: [
      'Kein sichtbarer Angehörigen-Pfad — Sabine- und Helga-Typ-Patient:innen werden online nicht gefunden.',
      '„Wir behandeln: Kopfschmerz, Schwindel, Demenz …" als Leistungsliste — spricht keine Persona emotional an.',
      'Generische Formulierungen („moderne neurologische Therapie") statt konkreter Verfahren (CGRP, Immunmodulation, DBS).',
      'Schlaganfall-Nachsorge nicht erwähnt — Helga-Typ-Angehörige suchen gezielt.',
      'Demenz-Abklärung als Unterpunkt unter „kognitive Untersuchung" — Sabine-Typ googelt „demenz abklärung wien" explizit.',
      'Keine Alters-Spreizung in Bildsprache — Neurologie hat Patient:innen von 28 bis 85.',
    ],
  },

  designRichtung: {
    title: 'Warm und seriös — für zwei Generationen zugleich',
    text: 'Farbwelt: gedämpftes Navy mit warmen Erdtönen. Kein Cool-Grau, kein Tech-Feeling. Typografie: gut lesbare Serif für Headlines, klare Sans für Body. Bildsprache: Hände, Gespräche, Altbau-Ordinationen. Keine lächelnden Stock-Models. Menschen aller Altersgruppen im Kontext.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Neurologie-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Doppel-Einladung', text: '„Für Patient:innen und ihre Angehörigen" — klar und prominent.' },
      { nr: 2, title: 'Angehörigen-Pfad als eigene Landing', text: 'Sabine-Typ: Termin ohne die/den Patient:in möglich, Erstberatung eigenständig.' },
      { nr: 3, title: 'Demenz-Abklärung-Sub-Seite', text: 'MMST, Uhren-Test, CT/MRT-Ablauf, MCI-vs-Alzheimer-Differenzierung.' },
      { nr: 4, title: 'Migräne-Therapie-Sub-Seite', text: 'CGRP-Antikörper (Erenumab, Galcanezumab), Triptane, Prophylaxe — beim Namen.' },
      { nr: 5, title: 'MS-Diagnostik-Sub-Seite', text: 'MRT-Kriterien, Liquor, Immunmodulation — für Tobias-Typ, der gezielt googelt.' },
      { nr: 6, title: 'Parkinson-Sub-Seite', text: 'Früherkennung, DaTScan, Therapie-Einstellung — ohne Dramatisierung.' },
      { nr: 7, title: 'Schlaganfall-Nachsorge-Sub-Seite', text: 'Helga-Typ: Rehabilitation, Medikation, realistische Prognose.' },
      { nr: 8, title: 'FAQ mit Zweiteilung', text: 'Fragen für Patient:innen + Fragen für Angehörige als zwei separate Gruppen.' },
      { nr: 9, title: 'Kontakt mit Angehörigen-Option', text: 'Formular erlaubt explizit, für Angehörige anzufragen.' },
    ],
  },

  angehoerigenPfad: {
    active: true,
    title: 'Angehörige sind in der Neurologie die häufigsten Erstkontakte',
    intro: 'Bei Demenz, Schlaganfall, Parkinson organisieren oft Töchter, Ehefrauen, Söhne den Weg zur Diagnose. Sie googeln Sätze, die auf den meisten Neurologie-Websites nicht beantwortet werden.',
    fragen: [
      'neurologe wien termin für angehörige ohne patient',
      'mutter geht nicht zum arzt demenz',
      'angehörige schlaganfall nachsorge wien',
      'vater parkinson verdrängt diagnose',
    ],
    text: 'Eine Neurologie-Website mit explizitem Angehörigen-Pfad gewinnt eine der größten Zielgruppen im Fach. Angehörige dürfen allein kommen, einen Termin für den:die Patient:in vereinbaren, eine Einschätzung ohne ärztliche Untersuchung bekommen — das gehört sichtbar in die Kommunikation.',
    ctaLabel: 'Angehörigen-Pfad in Ihrer Praxis-Website einplanen',
  },

  typischeSuchen: [
    'migräne cgrp antikörper wien wahlarzt',
    'neurologe wien termin angehörige demenz',
    'ms verdacht kribbeln hände mrt wien',
    'tremor hand parkinson früherkennung',
    'schlaganfall nachsorge wien privat',
    'kopfschmerz zweitmeinung wien neurologe',
    'demenz abklärung mmst wien privat',
    'vertigo schwindel neurologe wien',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Neurologie-Praxis bauen',
    items: [
      'Hauptseite mit Angehörigen-Pfad als gleichwertige zweite Zielgruppe',
      'Sub-Landings: Demenz-Abklärung, Migräne-CGRP, MS-Diagnostik, Parkinson, Schlaganfall-Nachsorge',
      'Moderne Therapien konkret benannt (CGRP, Immunmodulation, DBS)',
      'Angehörigen-Landing mit Termin-Option ohne Patient:in',
      'Altersdiverse Bildsprache (28 bis 85)',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/neurologie-content.jpg',
  },

  faq: [
    { q: 'Wie stelle ich den Angehörigen-Pfad auf der Website dar?', a: 'Als gleichwertige zweite Zielgruppe, nicht als Anhang. Die Website-Antwort sollte im Hero schon „Für Patient:innen und ihre Angehörigen" signalisieren und eine eigene Landing anbieten, die explizit „Angehörige dürfen allein kommen" klarmacht.' },
    { q: 'Soll ich moderne Therapien (CGRP, Immunmodulation) beim Namen nennen?', a: 'Ja, unbedingt. Die Website-Antwort sollte Fachbegriffe verwenden, die Patient:innen selbst googeln — CGRP-Antikörper, Erenumab, Galcanezumab, Natalizumab. Das signalisiert Augenhöhe.' },
    { q: 'Braucht die Website eine eigene Demenz-Sektion?', a: 'Wenn Sie Demenz-Abklärung anbieten: ja. Die Website-Antwort sollte MMST, Uhren-Test, CT/MRT-Ablauf, MCI-vs-Alzheimer klar erklären — Sabine-Typ-Angehörige googeln das explizit.' },
    { q: 'Wie kommuniziere ich Schlaganfall-Nachsorge?', a: 'Als eigenständige Leistung, nicht als „nach der Klinik". Die Website-Antwort sollte Rehabilitation, Medikation, ehrliche Prognose ansprechen — Helga-Typ-Angehörige suchen genau das.' },
    { q: 'Wie gehe ich mit Parkinson-Verdrängung um?', a: 'Mit Ernst und ohne Dramatisierung. Die Website-Antwort sollte Früherkennung als Chance darstellen („je früher, desto mehr Optionen"), nicht als Urteil.' },
    { q: 'Wie lang sollte ein neurologisches Erstgespräch sein?', a: 'Realistisch 45-60 Minuten. Die Website-Antwort sollte das konkret benennen — Julia-Typ (Migräne-Odyssee) und Sabine-Typ (Angehörige) rechnen mit einer substantiellen ersten Begegnung.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Neurologie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihre Schwerpunkte (Kopfschmerz / Demenz / MS / Bewegungsstörungen) und wie Sie Angehörige als gleichwertige Zielgruppe adressieren.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
