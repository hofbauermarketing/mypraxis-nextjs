import type { FachgebietContent } from '@/lib/content-types'

export const reproduktion: FachgebietContent = {
  slug: 'reproduktion',
  name: 'Reproduktionsmedizin',
  shortName: 'Reproduktion',
  sortOrder: 9,
  paperPages: 18,

  hero: {
    pille: 'Fachgebiet · Reproduktionsmedizin',
    h1: 'Websites für Reproduktionsmedizin — Paare und Einzelpersonen auf ihrem Kinderwunschweg.',
    sub: 'Ein Paar seit 18 Monaten ungewollt kinderlos. Eine Frau nach zweitem IVF-Misserfolg. Späte Erstmutter mit 42. Frauen mit wiederkehrenden Fehlgeburten. Social Freezing mit 29. Reproduktionsmedizin-Websites müssen fünf Situationen gleichzeitig tragen — und alle mit Würde. Grundlage: unser 18-seitiges Strategiepapier Reproduktionsmedizin.',
    teaser: 'Caregiver + Sage · Paare gemeinsam ansprechen · Würde vor Statistik',
    image: '/fachgebiete/reproduktion-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/reproduktion-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/reproduktion-bg-bibliothek.jpg',
    credibility: '/fachgebiete/reproduktion-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/reproduktion-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Reproduktionsmedizin-Patient:innen besonders macht',
    paragraphs: [
      'Kein anderes Fach kombiniert so viel Hoffnung mit so viel Scham. Wer eine:n Reproduktionsmediziner:in sucht, hat oft Jahre Zyklus-Tracking hinter sich, gefolgt von Gesprächen mit Freund:innen, die Fragen stellen („Wann werdet ihr endlich Eltern?"). Die Website ist der erste Ort, an dem sie sich ohne Erklärungsdruck informieren können.',
      'Dazu: Reproduktionsmedizin wird zunehmend von Einzelpersonen genutzt — Social Freezing bei Frauen um die 30, Single-IUI-Planung, Co-Parenting-Modelle. Eine moderne Website muss das mitdenken, ohne die klassische Paar-Zielgruppe zu verlieren.',
      'Unser Ansatz: Würde in jedem Element. Keine Statistiken als Hero („70 % Erfolgsquote"). Keine Baby-Fotos. Stattdessen: ruhige Sprache, klare Verfahrens-Beschreibungen, explizite Zielgruppen-Ansprache für Paare und Einzelpersonen.',
    ],
  },

  szene: {
    title: 'Ein Sonntagmittag · zwei Gespräche',
    person1: {
      name: 'Dr. Christina Mayer',
      rolle: '46 · Fachärztin für Gynäkologie und Reproduktionsmedizin · Wien-Alsergrund',
      image: '/fachgebiete/reproduktion-szene-lena.jpg',
      text: 'Zwölf Jahre Klinik, jetzt Wahlärztin mit IVF-Zentrums-Kooperation. Sie hat bewusst entschieden, keine Statistiken auf ihrer Website als Marketing zu nutzen. Sie will zeigen: Paare kommen mit Hoffnung — aber auch mit Angst. Beides muss Platz haben.',
      zitat: 'Reproduktionsmedizin ist Würde-Medizin. Keine Erfolgsquoten auf der Startseite — nie.',
      zitatAttr: '— Dr. Mayer im Erstgespräch mit uns',
    },
    verbindung: 'Am selben Sonntag, Wien-Landstraße',
    person2: {
      name: 'Sarah Hofer + Markus Wagner',
      rolle: 'Beide 34 und 37 · seit 18 Monaten ungewollt kinderlos',
      image: '/fachgebiete/reproduktion-szene-markus.jpg',
      text: 'Sarah verfolgt ihren Zyklus in einer App seit 18 Monaten. Markus hat einen Spermiogramm-Termin beim Urologen verschoben. Heute sitzen sie gemeinsam vor dem Laptop und googeln „kinderwunsch wien wahlarzt paar". Sie wollen nicht gleich IVF — sie wollen zuerst verstehen, was die Möglichkeiten sind.',
      zitat: 'kinderwunsch wien wahlarzt paar erstgespräch',
      zitatAttr: '— ihre Google-Suche, Sonntag 14:28',
    },
    abschluss: 'Zwischen Dr. Mayer und Sarah + Markus liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Christina Mayer, Sarah Hofer und Markus Wagner sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Reproduktionsmedizin-Websites tragen viel Emotion. Vor dem Design klären wir, wie Würde und Klarheit zusammenspielen.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage, Anti-Magician. Wärme + Fachkompetenz, keine Heilsversprechen.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Kinderloses Paar, IVF-Zyklus nach Misserfolg, späte Erstmutter, wiederkehrende Fehlgeburten, Social Freezing.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Reproduktions-Websites verkaufen mit Statistik) bis Beweis (Würde statt Marketing).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Sarah+Markus (Paar) brauchen „zuerst verstehen". Lisa (Social Freezing) braucht „Planung ohne Scham". Matrix steuert.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Ruhig, warm, würdig. Keine Baby-Fotos. Keine Statistik-Banner. Naturbilder, Hände, Gespräche.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Paar-Landing + Einzelpersonen-Landing + Wiederkehrende-Fehlgeburten-Sub-Seite.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Sarah + Markus', vollerName: 'Sarah Hofer + Markus Wagner', alter: 34, akzent: 'blau',
      image: '/fachgebiete/personas/sarah-und-markus.jpg',
      fachContext: 'Paar · 18 Monate ungewollt kinderlos',
      kontext: 'Sarah (34) verfolgt den Zyklus seit 18 Monaten. Markus (37) hat einen Spermiogramm-Termin immer wieder verschoben. Beide sind IT-Angestellte, bewusst „unentschieden" zwischen „Natur nehmen lassen" und „Kinderwunsch-Diagnostik beginnen".',
      stilleFrage: 'Sind wir schon „Fall für die Klinik" — oder übertreiben wir nach 18 Monaten?',
      suchanfrage: 'kinderwunsch wien wahlarzt paar erstgespräch',
    },
    {
      name: 'Julia', vollerName: 'Julia Steiner', alter: 38, akzent: 'terracotta',
      image: '/fachgebiete/personas/julia-2.jpg',
      fachContext: 'IVF · 2. Zyklus nach Misserfolg',
      kontext: 'Lehrerin. Erster IVF-Zyklus vor 8 Monaten gescheitert. Sie sucht eine Ärztin, die ehrlich über die Chancen des zweiten Zyklus spricht — ohne Falsch-Hoffnung und ohne Resignation.',
      stilleFrage: 'Wird man ehrlich mit mir, wenn die Chancen diesmal schlechter sind?',
      suchanfrage: 'ivf zweiter zyklus wien wahlarzt ehrlich',
    },
    {
      name: 'Anna', vollerName: 'Anna Gruber', alter: 42, akzent: 'sand',
      image: '/fachgebiete/personas/anna.jpg',
      fachContext: 'Späte Erstmutter · beginnende Kinderwunsch-Abklärung',
      kontext: 'Karrierefrau, seit 6 Monaten verheiratet, wünscht sich erstes Kind. Mit 42 weiß sie: die Biologie eilt. Sie will AMH-Messung, Zyklus-Monitoring, realistische Einschätzung — ohne „jetzt ist es zu spät"-Haltung.',
      stilleFrage: 'Werde ich auf mein Alter reduziert oder bekomme ich eine realistische Einschätzung?',
      suchanfrage: 'kinderwunsch 42 jahre wien amh zyklus',
    },
    {
      name: 'Sabine', vollerName: 'Sabine Berger', alter: 35, akzent: 'violett',
      image: '/fachgebiete/personas/sabine-4.jpg',
      fachContext: 'Wiederkehrende Fehlgeburten · 3 Verluste in 2 Jahren',
      kontext: 'Drei Fehlgeburten in zwei Jahren, zwei davon in der 10. SSW. Sie sucht eine Ärztin, die nicht sofort beruhigt („kommt vor"), sondern echte Abklärung macht — Thrombophilie, APS, uterine Faktoren.',
      stilleFrage: 'Werde ich wieder mit „das kommt vor" abgetan oder endlich sauber abgeklärt?',
      suchanfrage: 'wiederkehrende fehlgeburten abklärung wien wahlarzt',
    },
    {
      name: 'Lisa', vollerName: 'Lisa Wang', alter: 29, akzent: 'gruen',
      image: '/fachgebiete/personas/lisa-2.jpg',
      fachContext: 'Social Freezing · Einzelperson',
      kontext: 'Tech-Start-up-Gründerin, keine aktuelle Partnerschaft, aber Kinderwunsch für später. Sie informiert sich über Social Freezing — AMH-Wert, Eizellentnahme, Einfrierung, Kosten. Sie sucht eine Ärztin, die ihren Lebensentwurf nicht erklärt bekommt.',
      stilleFrage: 'Werde ich als 29-Jährige ohne Partner als „Karrierefrau-Klischee" abgetan?',
      suchanfrage: 'social freezing wien wahlarzt single 29',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Anti-Magician',
    paragraphs: [
      '**Caregiver** ist dominant in Reproduktionsmedizin — weil alle fünf Personas emotional verwundbar sind. Wärme, Einladung, kein Erwartungsdruck. Die Website muss signalisieren: „Hier werden Sie ernst genommen, nicht zum Statistik-Fall reduziert."',
      '**Sage** trägt die fachliche Autorität: AMH-Interpretation, IVF-Protokolle, Thrombophilie-Abklärung, Spermiogramm-Bewertung. Moderne Verfahren konkret benennen — Julia und Sabine googeln Fachbegriffe.',
      '**Anti-Magician** ist kategorisch: keine Erfolgsquoten als Marketing („Unsere 70 % Schwangerschafts-Rate"), keine Baby-Fotos im Hero, keine „Ihr Wunschkind in X Zyklen"-Versprechen. Das verletzt genau die informierten Patient:innen, die zahlen — und ist bei wiederkehrenden Fehlgeburten unethisch.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Paare kommen gemeinsam — die Website muss beide ansprechen.', begruendung: 'Sarah+Markus sitzen zusammen vor dem Laptop. Eine Website, die nur „die Patientin" anspricht, verfehlt die Hälfte der Zielgruppe. Männer werden in Reproduktionsmedizin oft ignoriert.' },
      { satz: 'Statistiken gehören nicht in den Hero.', begruendung: 'Julia nach IVF-Misserfolg und Sabine nach drei Fehlgeburten reagieren auf „70 % Erfolg" nicht mit Hoffnung — sondern mit Schmerz. Wer so verkauft, verliert genau diese Patient:innen.' },
      { satz: 'Späte Erstmutter ist keine „Problemgruppe".', begruendung: 'Anna-Typ-Patient:innen wollen realistische Einschätzung. Eine Website, die implizit „schon spät" kommuniziert, verletzt. Biologische Realität + Würde zusammen denken.' },
      { satz: 'Social Freezing ist Lebensplanung — keine Eigenwilligkeit.', begruendung: 'Lisa-Typ-Patient:innen werden oft belächelt. Eine Website, die Social Freezing selbstverständlich behandelt, gewinnt eine wachsende Zielgruppe.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 18-seitige Strategiepapier-Vorlage für Reproduktionsmedizin. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Reproduktionsmedizin-Websites sehen — und was nicht funktioniert',
    items: [
      'Baby-Fotos im Hero — schmerzhaft für Frauen nach Fehlgeburten oder IVF-Misserfolg.',
      'Erfolgsquoten als Marketing-Claim („Schwangerschaftsrate 70 %") — pietätlos, oft irreführend.',
      'Sprache nur an „die Patientin" gerichtet — Männer werden ignoriert, dabei kommen Paare gemeinsam.',
      'Kein Pfad für wiederkehrende Fehlgeburten — Sabine-Typ-Patient:innen wurden schon oft mit „kommt vor" abgetan.',
      'Social Freezing fehlt oder wird abgewertet — Lisa-Typ-Patient:innen (wachsende Zielgruppe) finden nichts.',
      'Keine Männer-Seite (Spermiogramm, Varikozele) — obwohl Männer bei 30-40 % der Fälle relevanter Faktor sind.',
      'Dogma-Sprache („IVF als letzter Schritt") — verliert moderne Paare, die schneller einsteigen wollen.',
    ],
  },

  designRichtung: {
    title: 'Würde vor Hoffnung',
    text: 'Farbwelt: gedämpftes Rosé-Gold, warmes Cream, dezentes Navy — keine quietschigen Pastell-Töne, keine Baby-Blau-Rosa-Assoziationen. Typografie: ruhig, warm, serifenbetont. Bildsprache: Hände, Landschaft, ruhige Innenräume — keine Familien-Stockfotos, keine Baby-Füße, keine Ultraschall-Bilder als Dekor. Animation minimal.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Reproduktionsmedizin-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Einladung für Paare UND Einzelpersonen', text: '„Für Paare und für Sie allein" — klarer Pfad-Hinweis im Hero.' },
      { nr: 2, title: 'Paar-Landing mit Männer-Ansprache', text: 'Für Sarah+Markus: Spermiogramm-Ablauf, Andrologie, was der Mann mitbringen sollte.' },
      { nr: 3, title: 'IVF-Begleitung ohne Statistik', text: 'Für Julia: Ablauf, was zwischen Zyklen passiert, ehrliche Gespräche über Chancen.' },
      { nr: 4, title: 'Späte Erstmutter-Seite', text: 'Für Anna: AMH, ovarielle Reserve, realistische Einschätzung ohne Altersstigma.' },
      { nr: 5, title: 'Wiederkehrende Fehlgeburten-Sub-Seite', text: 'Für Sabine: Thrombophilie, APS, uterine Faktoren, chromosomale Abklärung — ernst genommen.' },
      { nr: 6, title: 'Social Freezing-Landing', text: 'Für Lisa-Typ: AMH-Messung, Eizellentnahme-Ablauf, Kosten-Range, Lagerung.' },
      { nr: 7, title: 'Männer-Sub-Sektion', text: 'Spermiogramm, Varikozele, Hormon-Check — eigene Ansprache, nicht als Fußnote.' },
      { nr: 8, title: 'FAQ mit Würde', text: 'Vertraulichkeit, Ablauf, Kosten, Kassenerstattung. Keine „Erfolgsgeschichten"-Rhetorik.' },
      { nr: 9, title: 'Kontakt mit Option: Paar oder Einzelperson', text: 'Formular fragt diskret: kommt jemand allein oder als Paar?' },
    ],
  },

  typischeSuchen: [
    'kinderwunsch wien wahlarzt paar erstgespräch',
    'ivf zweiter zyklus wien ehrlich',
    'kinderwunsch 42 jahre wien amh',
    'wiederkehrende fehlgeburten abklärung wien',
    'social freezing wien wahlarzt single',
    'spermiogramm wien wahlarzt termin',
    'kinderwunsch zentrum wien paar',
    'eizellen einfrieren wien kosten',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Reproduktionsmedizin-Praxis bauen',
    items: [
      'Hauptseite mit Doppel-Einladung: Paare + Einzelpersonen',
      'Paar-Landing mit expliziter Männer-Ansprache',
      'IVF-Begleitung ohne Statistik-Marketing',
      'Späte Erstmutter-Seite ohne Altersstigma',
      'Wiederkehrende Fehlgeburten als eigene Sub-Sektion',
      'Social Freezing-Landing für Einzelpersonen',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/reproduktion-content.jpg',
  },

  faq: [
    { q: 'Darf ich Erfolgsstatistiken auf der Website zeigen?', a: 'Rechtlich oft möglich, ethisch problematisch. Die Website-Antwort sollte auf Zahlen als Hero-Claim verzichten. Julia-Typ-Patient:innen nach IVF-Misserfolg und Sabine-Typ-Patient:innen nach Fehlgeburten reagieren auf Statistiken nicht mit Hoffnung.' },
    { q: 'Wie spreche ich Paare auf der Website an?', a: 'Gemeinsam, nicht nur die Frau. Die Website-Antwort sollte Männer explizit einbeziehen — Spermiogramm-Ablauf, Andrologie-Info, „was kann mein Partner beitragen?".' },
    { q: 'Soll ich Social Freezing auf die Website nehmen?', a: 'Ja — es ist eine wachsende Zielgruppe. Die Website-Antwort sollte AMH-Messung, Eizellentnahme-Ablauf und Kosten-Range transparent darstellen. Lisa-Typ-Patient:innen googeln gezielt.' },
    { q: 'Wie gehe ich mit wiederkehrenden Fehlgeburten um?', a: 'Ernst, nicht beruhigend. Die Website-Antwort sollte Thrombophilie, APS, uterine Faktoren, chromosomale Abklärung als konkrete Diagnostik-Optionen nennen — Sabine-Typ-Patient:innen wurden schon genug mit „kommt vor" abgetan.' },
    { q: 'Wie kommuniziere ich Kosten?', a: 'Transparent mit Ranges. Die Website-Antwort sollte typische Kosten für IVF-Zyklus, Social Freezing, Spermiogramm und Beratungsgespräche benennen — und klar kennzeichnen, was die Kasse erstattet.' },
    { q: 'Brauche ich eine englische Version?', a: 'In Wien mit hohem Expat-Anteil: sinnvoll. Die Website-Antwort sollte mindestens Kern-Seiten auf Englisch haben. Expat-Paare suchen gezielt nach „fertility clinic vienna english".' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Reproduktionsmedizin-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren Praxis-Schwerpunkt und wie Sie Paare und Einzelpersonen gleichberechtigt adressieren.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
