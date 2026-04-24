import type { FachgebietContent } from '@/lib/content-types'

export const internistik: FachgebietContent = {
  slug: 'internistik',
  name: 'Internistik + Onkologie',
  shortName: 'Internistik',
  sortOrder: 5,
  paperPages: 18,

  hero: {
    pille: 'Fachgebiet · Internistik + Onkologie',
    h1: 'Websites für Internistik und Onkologie — zwischen Diagnose und Angehörigen.',
    sub: 'Patient:innen nach Erstdiagnose. Angehörige, die den Weg organisieren. Zweitmeinung-Sucher:innen nach Therapieentscheidungen. Palliativ-nahe Situationen. Jedes dieser Gespräche beginnt online. Grundlage: unser 18-seitiges Strategiepapier Internistik/Onkologie.',
    teaser: 'Caregiver + Sage · Zweitmeinung · Angehörige mitgedacht',
    image: '/fachgebiete/internistik-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/internistik-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/internistik-bg-bibliothek.jpg',
    credibility: '/fachgebiete/internistik-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/internistik-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Internistik- und Onkologie-Patient:innen besonders macht',
    paragraphs: [
      'Kein anderes Fach trägt so viel Last in einem Erstklick. Wer „onkologische Zweitmeinung wien" googelt, hat meistens eine Erstdiagnose. Hinter dem Klick liegt Angst, Erschöpfung, oft schon wochenlange Recherche. Eine Internistik/Onkologie-Website muss diese Last anerkennen, bevor sie etwas anbietet.',
      'Die Patient:innen kommen in vier grundverschiedenen Phasen: Erstdiagnose (Schock, Orientierung), informierte Zweitmeinung (kritisch, fordernd), Nachsorge (Kontinuität), palliativ-nah (Begleitung). Dazu: Angehörige als eigenständige Gruppe, die den Weg für den oder die Patient:in organisiert.',
      'Unser Ansatz: Ruhe in jedem Element. Keine Erfolgs-Quoten, keine „Heilung in 6 Monaten"-Sprache. Stattdessen: konkrete Verfahren, sichtbare Empathie, Angehörigen-Pfad explizit.',
    ],
  },

  szene: {
    title: 'Ein Montagvormittag, zwei Welten',
    person1: {
      name: 'Dr. Alexander Pöll',
      rolle: '54 · Facharzt für Innere Medizin + Onkologie · Wien-Innere Stadt',
      image: '/fachgebiete/internistik-szene-lena.jpg',
      text: 'Zwanzig Jahre AKH, jetzt Wahlarzt mit Fokus onkologische Zweitmeinung und hämatologische Diagnostik. Er spricht ruhig, nimmt sich Zeit. Er will eine Website, die Würde trägt — nicht eine, die mit Erfolgsquoten wirbt. Keine Überlebensraten als Hero-Slogan.',
      zitat: 'Meine Patient:innen kommen nicht, um beeindruckt zu werden. Sie kommen, um gehört zu werden.',
      zitatAttr: '— Dr. Pöll im Erstgespräch mit uns',
    },
    verbindung: 'Am selben Morgen, Wien-Landstraße',
    person2: {
      name: 'Elke Bauer',
      rolle: '49 · Angehörige · Ehemann hat gestern Lungenkarzinom-Diagnose erhalten',
      image: '/fachgebiete/internistik-szene-markus.jpg',
      text: 'Sie ist seit 25 Jahren mit ihm verheiratet. Gestern Diagnose-Gespräch. Heute googelt sie „onkologische zweitmeinung wien privat". Er ist 53, zwei Kinder in Ausbildung. Sie will nicht die zweite Meinung für sich — sie will den Weg für ihn vorbereiten. Sie will jemanden, der ihn annimmt, bevor er überhaupt anruft.',
      zitat: 'onkologische zweitmeinung wien privat lungenkarzinom',
      zitatAttr: '— ihre Google-Suche, 06:15 Uhr',
    },
    abschluss: 'Zwischen Dr. Pöll und Elke Bauer liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Alexander Pöll und Elke Bauer sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Onkologie-Websites tragen viel Emotion im Erstklick. Bevor wir bauen, klären wir die Tonalität genau.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage, Anti-Magician. Keine Heilversprechen, keine Erfolgsquoten als Marketing.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Erstdiagnose, informierte Zweitmeinung, Angehörige, Nachsorge, Palliativ-nah. Fünf sehr unterschiedliche Tonalitäten.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Onkologie-Websites übertreiben mit Erfolgsquoten) bis Beweis (Würde statt Marketing).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Elke (Angehörige) braucht „wir nehmen ihn/sie an". Thomas (informiert) braucht Fachkompetenz-Beweise. Matrix steuert.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Ruhig, warm, würdig. Keine Stockfotos von lachenden Ärzt:innen. Keine Zahlen-Statistiken als Hero.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Zweitmeinung-Landing + Angehörigen-Pfad + Nachsorge-Sub-Sektion.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Ingrid', vollerName: 'Ingrid Steiner', alter: 56, akzent: 'blau',
      image: '/fachgebiete/personas/ingrid.jpg',
      fachContext: 'Erstdiagnose Mammakarzinom · Schock-Phase',
      kontext: 'Lehrerin. Vor drei Tagen Diagnose. Sie sitzt nachts auf, liest Studien, googelt ohne Plan. Sie hat Angst, als „hysterisch" abgetan zu werden. Sie sucht eine internistisch-onkologische Zweitmeinung, bevor sie der Empfehlung der Klinik folgt.',
      stilleFrage: 'Werde ich als „hysterisch" abgetan oder wird meine Recherche ernst genommen?',
      suchanfrage: 'onkologische zweitmeinung brustkrebs wien privat',
    },
    {
      name: 'Thomas', vollerName: 'Thomas Berger', alter: 62, akzent: 'graublau',
      image: '/fachgebiete/personas/thomas.jpg',
      fachContext: 'Informiert, kritisch · Prostatakarzinom',
      kontext: 'Ehemaliger Ingenieur. Liest Studien auf englisch, kennt Fachbegriffe (Gleason-Score, PSA-Verlauf, PSMA-PET). Kassenurologin hat Therapieempfehlung gegeben — er will Zweitmeinung von Interist:in mit Onko-Schwerpunkt. Zahlt gerne, erwartet dafür Niveau.',
      stilleFrage: 'Begegnet mir jemand auf Augenhöhe oder werde ich als „zu informiert" belächelt?',
      suchanfrage: 'prostatakarzinom zweitmeinung internist onkologe wien',
    },
    {
      name: 'Elke', vollerName: 'Elke Bauer', alter: 49, akzent: 'terracotta',
      image: '/fachgebiete/personas/elke.jpg',
      fachContext: 'Angehörige · Ehemann mit Lungenkarzinom',
      kontext: 'Verheiratet, zwei Kinder. Ehemann erhält gestern Lungenkarzinom-Diagnose. Sie ist die Stärkere, organisiert den Weg. Sie will einen Termin, bevor er ihn überhaupt selbst sucht. Sie will jemanden, der ihn annimmt.',
      stilleFrage: 'Darf ich für ihn einen Termin vereinbaren, auch wenn er selbst noch nicht so weit ist?',
      suchanfrage: 'onkologische zweitmeinung wien angehörige termin vereinbaren',
    },
    {
      name: 'Karl', vollerName: 'Karl Huber', alter: 68, akzent: 'gruen',
      image: '/fachgebiete/personas/karl.jpg',
      fachContext: '5-Jahres-Nachsorge · Kolonkarzinom vor 5 Jahren',
      kontext: 'Pensionist. Kolonkarzinom-OP vor 5 Jahren, seitdem symptomfrei. Nachsorge-Intervalle werden größer. Er will Kontinuität — eine Ärztin oder einen Arzt, die/der seine Geschichte kennt, nicht immer wieder neu erklärt werden muss.',
      stilleFrage: 'Falle ich durch das Raster, wenn die Nachsorge-Intervalle länger werden?',
      suchanfrage: 'onkologische nachsorge wien langfristig internist',
    },
    {
      name: 'Elfriede', vollerName: 'Elfriede Koller', alter: 74, akzent: 'petrol',
      image: '/fachgebiete/personas/elfriede.jpg',
      fachContext: 'Palliativ-nah · metastasiertes Pankreaskarzinom',
      kontext: 'Witwe, zwei Kinder. Metastasiertes Pankreaskarzinom seit acht Monaten. Sie sucht jemanden, der Symptom-Kontrolle und Lebensqualität ernst nimmt — nicht immer nur die nächste Therapielinie vorschlägt.',
      stilleFrage: 'Werde ich angehört, wenn ich sage: „Ich will keine weitere Chemo mehr"?',
      suchanfrage: 'palliativ internist wien schmerz symptom kontrolle',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Anti-Magician',
    paragraphs: [
      '**Caregiver** trägt die gesamte Onkologie-Positionierung. Die Website muss Ruhe, Würde und Anerkennung ausstrahlen — bevor sie eine Leistung anbietet. Bei Ingrid (Erstdiagnose) entscheidet Ton in den ersten drei Sekunden, ob sie weiterliest oder wegklickt.',
      '**Sage** bringt die fachliche Autorität, die Thomas (informiert) erwartet. Konkrete Verfahren (PSMA-PET, MSI-Testung, liquid biopsy), nicht vage Kompetenz-Behauptungen. Wissen zeigen, nicht behaupten.',
      '**Anti-Magician** ist kategorisch: keine Überlebensraten als Hero-Slogan, keine „Heilung in 6 Monaten"-Versprechen, keine Before-After-Vergleiche. Das ist in Onkologie ethisch und rechtlich unhaltbar — und schreckt genau jene Patient:innen ab, die zahlen.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Eine onkologische Zweitmeinung ist kein Verhör — sie ist ein Gespräch.', begruendung: 'Ingrid kommt nach einer Diagnose und wochenlanger Recherche. Die Website muss vorhersagen: „Hier werden Sie gehört, bevor Sie beurteilt werden."' },
      { satz: 'Angehörige dürfen den Termin machen. Auch ohne den/die Patient:in.', begruendung: 'Elke-Typ-Angehörige organisieren den Weg. Eine Website muss explizit klarmachen, dass dieser Weg legitim ist.' },
      { satz: 'Nachsorge ist keine Nebensache — sondern Kontinuität.', begruendung: 'Karl-Typ-Patient:innen bleiben Jahrzehnte in Betreuung. Die Website sollte Nachsorge als eigenständige Leistung beschreiben, nicht nur als „nach der Therapie".' },
      { satz: 'Palliativ-Medizin ist kein Scheitern — sondern Würde in einer bestimmten Phase.', begruendung: 'Elfriede-Typ-Patient:innen suchen Symptom-Kontrolle und Lebensqualität. Die Website sollte diese Phase würdig adressieren, nicht verschweigen.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 18-seitige Strategiepapier-Vorlage für Internistik/Onkologie. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Onkologie-Websites sehen — und was nicht funktioniert',
    items: [
      'Überlebensraten als Hero-Slogan — wirkt auf Ingrid-Typ-Patient:innen wie kalte Statistik.',
      '„Heilung" als Versprechen — in Onkologie ethisch und rechtlich problematisch.',
      'Before-After-Bilder oder „Erfolgsgeschichten" mit Prozent-Claims — HWG-Verstoß, pietätlos.',
      'Kein Angehörigen-Pfad — Elke-Typ-Patient:innen werden online nicht gefunden.',
      'Palliativmedizin als Tabu-Thema verschwiegen — verfehlt eine Zielgruppe, die dringend sucht.',
      'Stockfotos lachender Ärzt:innen — unpassend bei Onkologie-Kontext, wirkt unecht.',
      'Keine Erklärung moderner Verfahren (PSMA-PET, MSI-Testung, liquid biopsy) — Thomas-Typ-Patient:innen googeln genau danach.',
    ],
  },

  designRichtung: {
    title: 'Würde vor Wirkung',
    text: 'Farbwelt: gedämpftes Navy, sehr viel Weißraum, Erd-Akzente. Keine grellen Farben, keine Orange-Explosionen, kein lebhaftes Grün. Typografie: ruhig, klar, serifenbetont für Headlines. Bildsprache: keine Personen lächelnd, keine Stock-Szenen — wenn Menschen, dann Hände, Schatten, ruhige Räume. Animation minimal. Die Seite soll sich wie ein ruhiges Wartezimmer anfühlen, nicht wie eine Klinik-Werbung.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Onkologie-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Zeit-Signal, nicht mit Erfolgsquoten', text: '„Erstgespräch binnen 14 Tagen" oder „Onkologische Zweitmeinung ohne Wartezeit" — konkret, nicht triumphierend.' },
      { nr: 2, title: 'Zweitmeinung als eigene Landing', text: 'Ingrid- und Thomas-Typ-Patient:innen googeln spezifisch. Landing mit Ablauf, benötigten Unterlagen, Honorar-Range.' },
      { nr: 3, title: 'Angehörigen-Pfad', text: 'Elke-Typ: „Ja, Sie können einen Termin für Ihren Angehörigen vereinbaren." — eigene Sub-Sektion.' },
      { nr: 4, title: 'Nachsorge-Konzept', text: 'Karl-Typ: Kontinuität als eigene Leistung, nicht als „nach der Therapie".' },
      { nr: 5, title: 'Moderne Diagnostik erklärt', text: 'PSMA-PET, MSI-Testung, liquid biopsy, Immunhistochemie — für Thomas-Typ-Patient:innen sichtbar.' },
      { nr: 6, title: 'Palliativ-medizinische Begleitung', text: 'Elfriede-Typ: Symptom-Kontrolle, Lebensqualität, Würde in dieser Phase — sichtbar, nicht versteckt.' },
      { nr: 7, title: 'Kooperation mit Spezialkliniken erklärt', text: 'Wahlarzt als Ergänzung zu AKH / Hanusch / Hanuschgasse — nicht als Konkurrenz inszeniert.' },
      { nr: 8, title: 'FAQ mit Würde', text: 'Vertraulichkeit, Ablauf, Honorar, Rückerstattung. Keine „Was wir nicht versprechen können"-Defensiv-Rhetorik.' },
      { nr: 9, title: 'Kontakt mit Option: Angehörige', text: 'Formular erlaubt explizit, für Angehörige anzufragen.' },
    ],
  },

  angehoerigenPfad: {
    active: true,
    title: 'Angehörige sind eigene Ansprechpartner:innen — auch in der Onkologie',
    intro: 'Elke-Typ-Angehörige organisieren den Weg zur Diagnose. Sie googeln Sätze, die auf den meisten Onkologie-Websites nicht beantwortet werden.',
    fragen: [
      'onkologische zweitmeinung wien angehörige termin',
      'mein mann hat krebs was tun wien',
      'angehörige krebs erstberatung wien',
      'palliativ arzt wien angehörige beratung',
    ],
    text: 'Eine Onkologie-Website mit explizitem Angehörigen-Pfad (oder eigener Sub-Landing) gewinnt einen kompletten Markt, der sonst leer ausgeht. Angehörige dürfen einen Termin vereinbaren, dürfen zur Erstberatung kommen — das gehört in die Kommunikation sichtbar.',
    ctaLabel: 'Angehörigen-Pfad in Ihrer Praxis-Website einplanen',
  },

  typischeSuchen: [
    'onkologische zweitmeinung brustkrebs wien',
    'prostatakarzinom zweitmeinung internist',
    'onkologische nachsorge wien privat',
    'palliativ arzt wien symptom kontrolle',
    'lungenkarzinom zweitmeinung wien',
    'hämatologe wien privat wahlarzt',
    'msi testung pembrolizumab wien',
    'darmkrebs nachsorge privat wien',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Internistik/Onkologie-Praxis bauen',
    items: [
      'Hauptseite mit Zeit-Signal statt Erfolgsquoten',
      'Zweitmeinung-Landing mit Ablauf + Unterlagen-Liste',
      'Explizite Angehörigen-Sektion oder Sub-Landing',
      'Nachsorge-Konzept als eigene Seite',
      'Moderne Diagnostik erklärt (PSMA-PET, MSI, liquid biopsy)',
      'Palliativ-medizinische Begleitung sichtbar',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/internistik-content.jpg',
  },

  faq: [
    { q: 'Wie kommuniziere ich onkologische Zweitmeinung auf der Website?', a: 'Als eigenständige Leistung mit klarem Ablauf. Die Website-Antwort sollte erklären: was mitzubringen ist, wie lange das Gespräch dauert, was der Honorar-Rahmen ist. Keine Erfolgs-Versprechen.' },
    { q: 'Darf ich Überlebensraten oder „Heilung“ als Marketing nutzen?', a: 'Nein. Die Website-Antwort sollte fachlich präzise sein — aber niemals Zahlen als Hero-Slogan nutzen. In Onkologie ist das ethisch und rechtlich heikel.' },
    { q: 'Wie spreche ich Angehörige auf der Website an?', a: 'Mit eigener Sub-Sektion oder Landing. Die Website-Antwort sollte explizit machen: „Angehörige können Termine vereinbaren, Erstberatung in Anspruch nehmen." Elke-Typ-Angehörige warten darauf.' },
    { q: 'Soll ich Palliativmedizin auf der Website thematisieren?', a: 'Wenn Sie diese Phase begleiten: ja, sichtbar. Die Website-Antwort sollte Symptom-Kontrolle, Lebensqualität und Würde in dieser Phase benennen — nicht als Tabu verschweigen.' },
    { q: 'Wie gehe ich mit informierten Patient:innen wie Thomas um?', a: 'Mit fachlicher Präzision. Die Website-Antwort sollte moderne Verfahren (PSMA-PET, MSI, liquid biopsy) namentlich erwähnen und erklären — das signalisiert Augenhöhe.' },
    { q: 'Wie positioniere ich mich zu den großen Kliniken (AKH, Hanusch)?', a: 'Als Ergänzung, nicht als Konkurrenz. Die Website-Antwort sollte Kooperation beschreiben — Wahlarzt ist schneller erreichbar, nimmt sich Zeit, die Klinik führt spezialisierte Eingriffe durch.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Internistik/Onkologie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren Fachschwerpunkt und wie Ihre Website mit der Würde kommuniziert, die dieser Bereich verlangt.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
