import type { FachgebietContent } from '@/lib/content-types'

export const paediatrie: FachgebietContent = {
  slug: 'paediatrie',
  name: 'Pädiatrie',
  shortName: 'Pädiatrie',
  sortOrder: 8,
  paperPages: 17,

  hero: {
    pille: 'Fachgebiet · Pädiatrie',
    h1: 'Websites für Kinderheilkunde — Eltern ansprechen, Kind nicht vergessen.',
    sub: 'Eine junge Mutter um 2 Uhr morgens mit einem fiebrigen Baby. Eltern eines 5-Jährigen mit rezidivierenden Infekten. Die Familie mit Impfskepsis. Eine Kinderarzt-Website muss primär Eltern ansprechen — aber das Kind darf dabei nicht zum Gegenstand werden. Grundlage: unser 17-seitiges Strategiepapier Pädiatrie.',
    teaser: 'Eltern + Kind Dual-Ansprache · Säuglinge bis Jugendliche',
    image: '/fachgebiete/paediatrie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/paediatrie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/paediatrie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/paediatrie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/paediatrie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Pädiatrie-Patient:innen besonders macht',
    paragraphs: [
      'Kinderärzt:innen sprechen eine seltene Doppel-Zielgruppe an: die Eltern (Entscheider:innen, zahlende Patient:innen) und das Kind (eigentliche:r Patient:in). Die Website muss beide im Blick haben — sonst wirkt sie entweder zu „erwachsen-klinisch" oder zu „kindisch-bunt".',
      'Fünf Eltern-Situationen treffen sich in der Ordination: die Erstmutter mit dem ersten Baby und Panik um 2 Uhr. Die erfahrene Mutter mit dem fünften rezidivierenden Infekt. Eltern mit ADHS-Verdachtsfragen. Die Familie mit Impfskepsis. Die Eltern eines Teenagers mit Akne-Scham.',
      'Unser Ansatz: warme, aber erwachsene Bildsprache. Keine Comic-Sterne, keine Pastell-Zuckerguss-Ästhetik. Eltern suchen Kompetenz — das Kind wird später willkommen empfangen.',
    ],
  },

  szene: {
    title: 'Ein Freitag um 2:14 Uhr nachts',
    person1: {
      name: 'Dr. Sandra Eder',
      rolle: '44 · Fachärztin für Kinder- und Jugendheilkunde · Wien-Penzing',
      image: '/fachgebiete/paediatrie-szene-lena.jpg',
      text: 'Sechzehn Jahre Klinik, jetzt Wahlärztin mit einer Praxis, die Säuglinge bis Jugendliche betreut. Sie hat sich bewusst gegen Kinderarzt-Cliparts und Regenbögen auf der Website entschieden. Ihre Eltern suchen Kompetenz, nicht Kinderzimmer-Ästhetik.',
      zitat: 'Eltern wollen beruhigt werden, nicht unterhalten. Kompetenz in warmer Sprache — nicht als Comic.',
      zitatAttr: '— Dr. Eder im Erstgespräch mit uns',
    },
    verbindung: 'Genau in diesem Moment, Wien-Ottakring',
    person2: {
      name: 'Sophia Kernmayer',
      rolle: '30 · erste Mutter · Baby 3 Monate mit 39,2 °C Fieber',
      image: '/fachgebiete/paediatrie-szene-markus.jpg',
      text: 'Erste Nacht mit hohem Fieber, Baby weint seit einer Stunde ohne Pause. Sie sitzt im Badezimmer, googelt mit einer Hand. „Kinderarzt Wien Nacht" — die erste Seite ist ein Krankenhaus. Die zweite ein Kinderarzt-Notdienst. Sie will eine Praxis finden, die morgens früh erreichbar ist, nicht die Notaufnahme.',
      zitat: 'kinderarzt wien nacht 2 uhr wahlarzt erreichbar',
      zitatAttr: '— ihre Google-Suche, 02:14 Uhr',
    },
    abschluss: 'Zwischen Dr. Eder und Sophia Kernmayer liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Sandra Eder und Sophia Kernmayer sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Pädiatrie-Websites müssen Eltern ernst nehmen, ohne Kinder auszuklammern. Vor dem Design klären wir den Ton.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage + Innocent-Einschlag, Anti-Magician.' },
      { num: 3, title: 'Fünf Eltern-Personas', text: 'Erstmutter mit Panik, erfahrene Mutter mit Infekt-Rezidiv, ADHS-Eltern, Impfskeptiker-Familie, Teenager-Akne-Eltern.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Pädiatrie-Websites wirken entweder zu erwachsen oder zu kindisch) bis Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Sophia (erste Mutter) braucht Erreichbarkeit. Eltern mit ADHS-Verdacht brauchen evidenzbasierte Haltung. Matrix definiert Hooks.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Warm, aber erwachsen. Keine Comic-Cliparts. Naturbilder + Handwerklichkeit.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Sub-Sektionen für Säuglinge, Kindergartenalter, Teenager. Impfinfo offen, nicht versteckt.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Sophia', vollerName: 'Sophia Kernmayer', alter: 30, akzent: 'blau',
      image: '/fachgebiete/personas/sophia.jpg',
      fachContext: 'Erste Mutter · 3 Monate altes Baby',
      kontext: 'Grafik-Designerin in Karenz, erstes Kind. Jede Nacht neue Ängste: Fieber, Trinken, Schlaf, Ausschlag. Sie hat eine Kassen-Kinderärztin, die „zu wenig Zeit" hat. Sie will einen:e Wahl-Pädiater:in mit erreichbarer Sprechstunde am nächsten Morgen.',
      stilleFrage: 'Bin ich eine „hysterische Mutter" oder nehme ich mein Bauchgefühl zu ernst — bzw. zu wenig?',
      suchanfrage: 'kinderarzt wien wahlarzt baby notfall erreichbar',
    },
    {
      name: 'Karin', vollerName: 'Karin Bruckner', alter: 38, akzent: 'gruen',
      image: '/fachgebiete/personas/karin.jpg',
      fachContext: '5-jähriges Kind · rezidivierende Infekte',
      kontext: 'Zwei Kinder (5 und 8). Der Jüngere hat seit Kindergarten-Eintritt alle 3-4 Wochen einen Infekt. Kassen-Kinderärztin sagt „das ist normal". Karin will eine Zweitmeinung — Immun-Check, Blutwerte, Allergologie.',
      stilleFrage: 'Ist das „normal" — oder übersehen wir alle eine Grunderkrankung?',
      suchanfrage: 'kind rezidivierende infekte wien immun check',
    },
    {
      name: 'Michael + Daniela', vollerName: 'Michael + Daniela Huber', alter: 40, akzent: 'violett',
      image: '/fachgebiete/personas/michael-und-daniela.jpg',
      fachContext: 'Eltern eines 8-Jährigen · ADHS-Verdacht',
      kontext: 'Projektmanagerin und Lehrer. Ihr Sohn Maximilian hat schulische Schwierigkeiten, kann sich nicht konzentrieren. Die Lehrerin hat ADHS erwähnt. Sie wollen eine Abklärung ohne Methylphenidat-Verschreibungs-Reflex, aber auch ohne Panik.',
      stilleFrage: 'Wird unser Sohn jetzt sofort in die „ADHS-Schublade" gesteckt oder wirklich sauber abgeklärt?',
      suchanfrage: 'adhs abklärung wien kind wahlarzt ohne medikament',
    },
    {
      name: 'Familie Wagner', vollerName: 'Familie Wagner', alter: 35, akzent: 'terracotta',
      image: '/fachgebiete/personas/familie-wagner.jpg',
      fachContext: 'Impfskepsis · zwei Kinder (2 und 5)',
      kontext: 'Beide Eltern skeptisch gegenüber dem österreichischen Impfplan. Kein absoluter Impfgegner, aber wollen Termine strecken, zwei Impfungen nicht kombinieren. Suchen Kinderärzt:in, die mit ihnen redet — nicht droht.',
      stilleFrage: 'Werden wir abgewiesen, wenn wir Impfungen hinterfragen — oder nimmt uns jemand ernst?',
      suchanfrage: 'kinderarzt wien impfplan flexibel gespräch',
    },
    {
      name: 'Eltern Teenager', vollerName: 'Elisabeth + Franz Gruber', alter: 48, akzent: 'graublau',
      image: '/fachgebiete/personas/eltern-teenager.jpg',
      fachContext: 'Eltern eines 14-Jährigen · schwere Akne',
      kontext: 'Tochter Lena hat seit einem Jahr schwere entzündliche Akne. Sie will nicht mehr in die Schule, Selbstwert auf Tiefpunkt. Kassen-Hautarzt hat Topika verordnet, wirkt nicht. Eltern suchen Kinderärzt:in oder Pädiater:in mit Jugend-Erfahrung für Isotretinoin-Indikation.',
      stilleFrage: 'Kommt die Behandlung, bevor unsere Tochter sich ganz zurückzieht?',
      suchanfrage: 'jugendmedizin wien akne teenager isotretinoin',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Innocent-Einschlag · Anti-Magician',
    paragraphs: [
      '**Caregiver** trägt die Basis-Beziehung zwischen Ärzt:in und Familie. Wärme, Verlässlichkeit, Zeit. Eltern wie Sophia um 2 Uhr morgens brauchen primär Beruhigung — nicht Fachvorträge.',
      '**Sage** ist die zweite Säule: moderne pädiatrische Medizin konkret benennen. Immunologische Abklärung bei Karin-Typ, evidenzbasierte ADHS-Differenzial-Diagnostik bei Michael + Daniela, Isotretinoin-Indikation bei Teenager-Akne. Kein Marketing-Sprech.',
      '**Innocent-Einschlag** (10-15 %) erlaubt warme, kindgerechte Bildelemente — aber als Akzent, nicht als Gesamtlook. Naturfotos, Hände, Kinder aus der Ferne. Keine Comic-Cliparts.',
      '**Anti-Magician**: keine „Wir stärken das Immunsystem in 4 Wochen"-Versprechen, keine Homöopathie-Wunder. Wer so verkauft, verliert informierte Eltern sofort.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Eltern sind die eigentlichen Patient:innen der Pädiatrie-Website.', begruendung: 'Sie entscheiden, sie zahlen, sie vergleichen. Die Website muss ihren Ton treffen — nicht den ihres Kindes.' },
      { satz: 'Erreichbarkeit ist der Unterschied, für den Eltern zahlen.', begruendung: 'Sophia-Typ-Mütter suchen nicht Kompetenz (die erwarten sie voraus), sondern Zeit + Antworten. Die Website sollte Sprechzeiten + Notfall-Konzept prominent zeigen.' },
      { satz: 'Impfskepsis ist Gesprächsthema, nicht Ausschlusskriterium.', begruendung: 'Wagner-Typ-Familien suchen Praxen, die mit ihnen reden. Eine Website, die Impfgegner abweist, verfehlt eine wachsende Zielgruppe (ethische Gratwanderung — klar positionieren).' },
      { satz: 'Teenager-Medizin ist eigene Kompetenz — nicht „auch Kinder".', begruendung: 'Akne, Essstörungen, psychische Entwicklung — die Jugendmedizin beginnt mit 12. Eine eigene Sub-Seite macht den Unterschied.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Innocent-Einschlag · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Eltern-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 17-seitige Strategiepapier-Vorlage für Pädiatrie. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Pädiatrie-Websites sehen — und was nicht funktioniert',
    items: [
      'Comic-Cliparts und Regenbögen auf der Hauptseite — wirkt für moderne Eltern zu kindisch, nimmt Fachkompetenz weg.',
      'Kinder als Dekor-Objekt (lachende Stock-Kinder mit Stethoskop) — verletzt Würde des Kindes als Patient:in.',
      'Kein Notfall-/Erreichbarkeits-Signal — Sophia-Typ-Mütter bricht ab.',
      'Impfinfo versteckt — Wagner-Typ-Familien fühlen sich nicht angesprochen.',
      'Teenager-Medizin nicht genannt — 12- bis 18-Jährige sind eigene Zielgruppe mit eigener Kommunikation.',
      'Keine ADHS-/Entwicklungs-Diagnostik-Information — Michael+Daniela-Typ-Eltern suchen gezielt danach.',
      '„Wir stärken das Immunsystem"-Schlagworte ohne Evidenz — verliert informierte Eltern.',
    ],
  },

  designRichtung: {
    title: 'Warm, aber erwachsen',
    text: 'Farbwelt: natürliche warme Erdtöne, dezentes Navy, Creme — keine Pastell-Hellblau/Rosa-Explosion. Typografie: lesbar, warm, nicht spielerisch. Bildsprache: Naturbilder, Holz, Handflächen, ruhige Kinder-Momente. Keine Stethoskop-Stock-Kids, keine Comic-Cliparts, keine Sterne-Konfetti. Animation minimal.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Pädiatrie-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Doppel-Ton', text: 'Warm für Eltern, ernst für medizinische Kompetenz. „Kinder- und Jugendheilkunde, die Eltern zuhört" oder ähnlich.' },
      { nr: 2, title: 'Erreichbarkeits-Signal', text: 'Sprechzeiten groß, Notfall-Nummer, „Wir rufen zurück"-Versprechen sichtbar.' },
      { nr: 3, title: 'Säuglings-Landing', text: 'Für Sophia-Typ: U-Untersuchungen, Stillen, erste Infekte, Schlaf.' },
      { nr: 4, title: 'Kindergartenalter-Landing', text: 'Für Karin-Typ: rezidivierende Infekte, Immun-Abklärung, Allergietests.' },
      { nr: 5, title: 'Entwicklungs-Diagnostik-Seite', text: 'Für Michael+Daniela-Typ: ADHS, Legasthenie, Sprachentwicklung — evidenzbasiert.' },
      { nr: 6, title: 'Impf-Beratung offen', text: 'Für Wagner-Typ: Impfplan erklärt + Dialog-Haltung. Ohne Dogma, ohne Anti-Wissenschaft.' },
      { nr: 7, title: 'Teenager-Medizin-Sub-Seite', text: 'Für Eltern von Jugendlichen: Akne, Menstruation, psychische Gesundheit, Essstörungen.' },
      { nr: 8, title: 'FAQ für Eltern — nicht für Kinder', text: 'Fieber ab wann, Ernährung, Schlaf, Impfungen. Konkret.' },
      { nr: 9, title: 'Kontakt mit Familien-Option', text: 'Formular fragt Kind-Alter + Grund — nicht nur „Nachricht".' },
    ],
  },

  angehoerigenPfad: {
    active: true,
    title: 'Eltern sind in der Pädiatrie immer die Ansprechpartner:innen',
    intro: 'Anders als in anderen Fächern ist der Angehörigen-Pfad in Pädiatrie der Standard-Pfad. Eltern entscheiden, Eltern fragen, Eltern zahlen.',
    fragen: [
      'kinderarzt wien wahlarzt baby notfall erreichbar',
      'adhs abklärung wien ohne medikament sofort',
      'kind rezidivierende infekte immun check wien',
      'kinderarzt wien impfplan flexibel gespräch',
    ],
    text: 'Eine Pädiatrie-Website, die Eltern als primäre Zielgruppe behandelt und das Kind als Patient:in würdigt (nicht als Dekor-Element), gewinnt genau die zahlungsbereite Wahlarzt-Zielgruppe. Das Kind kommt später willkommen — die Entscheidung fällt bei den Eltern.',
    ctaLabel: 'Eltern-Ansprache in Ihrer Praxis-Website einplanen',
  },

  typischeSuchen: [
    'kinderarzt wien nacht baby fieber',
    'wahlarzt kinderheilkunde wien erreichbar',
    'kind rezidivierende infekte immun check',
    'adhs abklärung wien kind wahlarzt',
    'kinderarzt wien impfplan flexibel',
    'jugendmedizin wien akne isotretinoin',
    'u untersuchung privat wien',
    'allergietest kind wien',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Pädiatrie-Praxis bauen',
    items: [
      'Hauptseite mit warmer, aber erwachsener Tonalität',
      'Erreichbarkeits-Signal prominent in Hero',
      'Sub-Landings: Säuglinge, Kindergartenalter, Teenager-Medizin',
      'Entwicklungs-Diagnostik (ADHS, Legasthenie) als eigene Seite',
      'Impfberatung offen + dialogisch',
      'Online-Terminbuchung + prominentes Telefon',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/paediatrie-content.jpg',
  },

  faq: [
    { q: 'Wie balanciere ich Eltern-Ansprache und Kind-Würde?', a: 'Durch warme, erwachsene Sprache für Eltern + ruhige, respektvolle Bildsprache für Kinder. Die Website-Antwort sollte Eltern primär ansprechen — Kinder dürfen dabei nicht zum Dekor werden.' },
    { q: 'Wie kommuniziere ich Erreichbarkeit?', a: 'Konkret. Die Website-Antwort sollte Sprechzeiten groß, Notfall-Hinweise klar und „wir rufen binnen 24h zurück"-Versprechen explizit machen — Sophia-Typ-Mütter entscheiden nach Erreichbarkeit.' },
    { q: 'Wie gehe ich mit Impfskeptiker-Familien um?', a: 'Durch dialogische Kommunikation. Die Website-Antwort sollte signalisieren: „Wir erklären den Impfplan und besprechen Ihre Fragen." Kein Dogmatismus, aber auch keine Anti-Wissenschaft. Wagner-Typ-Familien suchen genau das.' },
    { q: 'Soll ich eine eigene Teenager-Sektion haben?', a: 'Ja, wenn Sie Jugendmedizin anbieten. Die Website-Antwort sollte Akne, Menstruations-Beratung, psychische Entwicklung, Essstörungen konkret benennen — Eltern von Teenagern googeln gezielt danach.' },
    { q: 'Wie positioniere ich ADHS-Abklärung?', a: 'Evidenzbasiert und ohne Schnell-Diagnose-Verdacht. Die Website-Antwort sollte Differenzial-Diagnostik betonen und Medikation als eine Option unter mehreren darstellen — nicht als Default.' },
    { q: 'Wie lang sollten Erstordinations-Termine bei Kindern sein?', a: '30-45 Minuten für Säuglinge und Erst-Anamnese. Die Website-Antwort sollte das konkret benennen — Sophia-Typ-Mütter, die 5 Minuten kennen, schätzen den Unterschied sofort.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Pädiatrie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihre Schwerpunkte (Säuglinge / Teenager / Entwicklungs-Diagnostik) und wie Sie Eltern ernst nehmen, ohne das Kind zu vergessen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
