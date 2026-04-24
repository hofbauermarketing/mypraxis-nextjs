import type { FachgebietContent } from '@/lib/content-types'

export const psychiatrie: FachgebietContent = {
  slug: 'psychiatrie',
  name: 'Psychiatrie & Psychotherapie',
  shortName: 'Psychiatrie',
  sortOrder: 9,
  paperPages: 40,

  // §1 HERO
  hero: {
    pille: 'Fachgebiet · Psychiatrie + Psychotherapie',
    h1: 'Websites für Psychiatrie und Psychotherapie — für Menschen, die Ruhe suchen, keine Schlagworte.',
    sub: 'Eine Ordination in diesem Fach lebt von Vertrauen und Behutsamkeit. Genau das muss die Website tragen — bevor der erste Satz im Raum gesprochen ist. Wir bauen sie auf Basis eines 40-seitigen Strategiepapiers, nicht eines Templates.',
    teaser: 'Caregiver + Sage · ruhiger Raum · Angehörige mitgedacht',
    image: '/fachgebiete/psychiatrie-hero.jpg',
  },

  // Hintergrund-Bilder (mit Overlay)
  backgrounds: {
    szene: '/fachgebiete/psychiatrie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/psychiatrie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/psychiatrie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/psychiatrie-bg-abend.jpg',
  },

  // §2 VERSTÄNDNIS
  verstaendnis: {
    title: 'Was Psychiatrie- und Psychotherapie-Patient:innen besonders macht',
    paragraphs: [
      'In keinem anderen medizinischen Fach ist die Hürde, überhaupt anzurufen, so hoch. Wer eine:n Psychiater:in oder Psychotherapeut:in sucht, hat oft monatelang gezögert, gegoogelt, abgewogen — und braucht beim ersten Klick auf die Website das Signal: hier wird man nicht beurteilt, hier wird man gehört.',
      'Die Patient:innen kommen aus vier sehr unterschiedlichen Lagen. Manche wissen noch nicht einmal, was mit ihnen los ist („Bin ich nur müde oder krank?"). Andere haben schon eine Diagnose und wollen einen passenden Wahlarzt. Wieder andere — und das ist eine eigene Zielgruppe — kommen nicht für sich selbst, sondern für Partner, Mutter oder Kind.',
      'Was viele Patient:innen beim ersten Klick nicht wissen: Psychiater:in und Psychotherapeut:in sind zwei verschiedene Berufe. Psychiater:innen sind zuerst Ärzt:innen — nach Medizinstudium (ca. 6 Jahre) folgt die Facharztausbildung für Psychiatrie und Psychotherapeutische Medizin (in Österreich weitere 6 Jahre). Sie dürfen Medikamente verschreiben, körperliche Untersuchungen durchführen und stationäre Aufnahmen veranlassen. Psychotherapeut:innen müssen keine Ärzt:innen sein — die Ausbildung erfolgt nach dem Psychotherapiegesetz mit Grundstudium (Psychologie, Medizin, Sozialarbeit, Pädagogik) plus Fachspezifikum (5-7 Jahre). Sie arbeiten ausschließlich mit Gesprächen und psychotherapeutischen Methoden — ohne Medikamente.',
      'Eine gute Psychiatrie- und Psychotherapie-Website erklärt diesen Unterschied — weil Patient:innen sonst die falsche Tür wählen. Die Website muss gleichzeitig fünf Lebenslagen adressieren und klarmachen, ob Sie Psychiater:in, Psychotherapeut:in oder beides in einer Praxis anbieten. Das ist nicht Marketing-Magie — das ist saubere Architektur, die wir aus 40 Seiten Recherche pro Fachgebiet ableiten.',
    ],
  },

  // §3 SZENE-SIMULATION · zweigeteilt
  szene: {
    title: 'Mittwochabend in Wien · zwei Geschichten, eine Lücke',
    person1: {
      name: 'Dr. Lena Brandner',
      rolle: '34 · Fachärztin für Psychiatrie + Psychotherapie · Wien-Wieden',
      image: '/fachgebiete/psychiatrie-szene-lena.jpg',
      text: 'Eine Altbau-Etage in 1040 Wien, 60 m². Sie hat vor zwei Monaten eröffnet — sechs Jahre Facharztausbildung für Psychiatrie und Psychotherapeutische Medizin im AKH, danach drei Jahre als Oberärztin. Sie möchte Patient:innen erreichen, die zu ihrer ruhigen, verhaltenstherapeutisch geprägten Arbeitsweise passen. Aber wie erzählt man das im Netz, ohne in Marketing-Jargon zu verfallen?',
      zitat: 'Deine Website ist das erste Therapiegespräch.',
      zitatAttr: '— ihre Supervisorin, beim letzten Treffen',
    },
    verbindung: 'Im selben Moment, vier Bezirke weiter',
    person2: {
      name: 'Markus Hofer',
      rolle: '36 · Senior IT-Consultant · Wien-Neubau',
      image: '/fachgebiete/psychiatrie-szene-markus.jpg',
      text: 'Drei Monitore, Mittwoch kurz nach 21 Uhr. Vor vier Monaten erste Panikattacke in einer Kundenpräsentation, seither vier weitere. Er klickt sich durch vier Psychiatrie- und Psychotherapie-Ordinationsseiten. Keine ruft er an. Nicht weil sie schlecht aussehen. Weil keine ihm das Gefühl gibt, dass dort jemand sitzt, der versteht, wie kontrollierte Menschen mit Panik ringen.',
      zitat: 'kvt psychiater wien wahlarzt erfahrungen',
      zitatAttr: '— seine Google-Suche, Mittwoch 21:12',
    },
    abschluss: 'Zwischen Dr. Brandner und Markus Hofer liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Lena Brandner und Markus Hofer sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  // §4 SIEBEN SCHRITTE
  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Bei mypraxis.at startet ein Projekt nicht mit dem Design. Es startet mit Verstehen. Hier die sieben Etappen, die jeder Psychiatrie- und Psychotherapie-Website vorangehen.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Für Psychiatrie und Psychotherapie: Caregiver + Sage als Hauptpole, Anti-Ruler als bewusste Abgrenzung. Das ist die Tonalität-DNA, die alles Spätere trägt.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Anhand der MIA Social Chronicles entstehen fünf Profile mit Namen, Alter, Lebenslage, stiller Frage, typischer Suchanfrage und konkretem Conversion-Pfad.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Sieben-teilige Thesis nach Baulig-Prinzip: vom Problem über die falsche Annahme bis zur konkreten Beweislage. So wird aus Bauchgefühl ein argumentierbares Versprechen.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Welcher Hook erreicht welche Persona? Andrea braucht eine andere Tür als Markus. Die Matrix legt fest, welcher Inhalt auf welcher Landing-Page steht.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Aus Archetyp + Personas folgt: Bildsprache, Farbpalette, Typografie, Mikro-Wording. In Psychiatrie und Psychotherapie heißt das: warm, ruhig, kein klinisches Weiß.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Erst jetzt entsteht die Sitemap. Welche Seiten? Welche Reihenfolge? Welche CTAs? Die Struktur folgt der Strategie, nicht umgekehrt.' },
    ],
  },

  // §5 PERSONA-DISCLAIMER
  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  // §5 PERSONAS
  personas: [
    {
      name: 'Andrea',
      vollerName: 'Andrea Wagner',
      alter: 43,
      akzent: 'blau',
      image: '/fachgebiete/personas/andrea.jpg',
      fachContext: 'Depression im Berufsleben',
      kontext:
        'Führungskraft im mittleren Management, zwei Kinder im Schulalter, Eheleben funktional. Seit Monaten erschöpft, schläft schlecht, hat ihren Humor verloren. Die Hausärztin hat „leichte depressive Episode" angedeutet — Andrea hat das Gespräch beendet. Sie weiß nicht, ob sie wirklich krank ist oder einfach nur zu viel arbeitet.',
      stilleFrage: 'Bin ich einfach zu schwach für meinen Job — oder ist da wirklich etwas?',
      suchanfrage: 'muss ich psychisch krank sein oder bin ich nur müde',
    },
    {
      name: 'Markus',
      vollerName: 'Markus Hofer',
      alter: 36,
      akzent: 'graublau',
      image: '/fachgebiete/personas/markus.jpg',
      fachContext: 'Panik- und Angststörung',
      kontext:
        'Senior IT-Consultant, Beziehung ohne Kinderwunsch, kontrollierter Lebensstil. Vor vier Monaten erste Panikattacke in einer Kundenpräsentation, seither vier weitere. Hat sich selbst eine Papiertüte gekauft. Recherchiert klinisch, schreibt Therapie-Optionen in Notion auf — und ruft trotzdem nicht an.',
      stilleFrage: 'Wenn ich einmal Patient werde, verliere ich dann meine Glaubwürdigkeit?',
      suchanfrage: 'kvt psychiater wien wahlarzt erfahrungen',
    },
    {
      name: 'Elke',
      vollerName: 'Elke Gruber',
      alter: 48,
      akzent: 'terracotta',
      image: '/fachgebiete/personas/elke-2.jpg',
      fachContext: 'Angehörige · Partnerin eines Depressiven',
      kontext:
        'Teilzeit in einer Apotheke in Tulln, 22 Jahre verheiratet. Ehemann Klaus hat seit Oktober eine mittelschwere Depression, geht nicht zum Arzt. Schläft zwölf Stunden, ist erschöpft, schaut sie an und sieht sie nicht. Elke kämpft allein — Kinder fragen, Schwiegermutter bohrt, sie selbst trinkt seit drei Wochen abends Wein in der Küche.',
      stilleFrage: 'Darf ich überhaupt wegen seiner Krankheit Hilfe holen?',
      suchanfrage: 'psychiater wien termin für angehörige ohne patient',
    },
    {
      name: 'Claudia',
      vollerName: 'Claudia Bauer',
      alter: 51,
      akzent: 'gruen',
      image: '/fachgebiete/personas/claudia-2.jpg',
      fachContext: 'Angehörige · Tochter mit Demenz-Verdacht bei der Mutter',
      kontext:
        'Mutter (78) lebt in St. Pölten, alle zwei Wochen Besuche. Beim letzten Mal: dreimal in einer halben Stunde dieselbe Frage. Einkaufszettel-Posten fehlen. Claudia hat zehn Stunden gegoogelt und weiß: das ist nicht „halt alt". Der Bruder in Deutschland wehrt ab. Die Mutter weigert sich gegen jeden Arzt-Termin: „Ich bin nicht verrückt."',
      stilleFrage: 'Übertreibe ich — oder sollte ich jetzt wirklich handeln?',
      suchanfrage: 'mutter 78 vergisst immer mehr normal oder demenz',
    },
    {
      name: 'Tobias',
      vollerName: 'Tobias Maier',
      alter: 24,
      akzent: 'violett',
      image: '/fachgebiete/personas/tobias-2.jpg',
      fachContext: 'Erstsymptomatik im Studium',
      kontext:
        'Informatik-Student in Wien-Mariahilf, finanziert sich über Beihilfe und einen Nebenjob. Seit acht Monaten Phasen, in denen er nichts fühlt. Hat zwei Prüfungen verschoben. Die Freundin ist vor drei Wochen gegangen. Auf Reddit liest er, dass eine psychiatrische Diagnose „für immer in der Akte" steht. Er hat noch keine Nummer angerufen.',
      stilleFrage: 'Wenn ich jetzt zum Psychiater gehe, steht das für immer in meiner Akte?',
      suchanfrage: 'psychiater student wien günstig erfahrung',
    },
  ],

  // §6 ARCHETYP
  archetyp: {
    triade: 'Caregiver · Sage · Anti-Ruler',
    paragraphs: [
      '**Caregiver** heißt: die Praxis wirkt wie eine Freundin, die zugehört hat. Nicht wie eine Autorität, die Vorschriften macht. Die Website klingt ruhig, nimmt ernst, schreibt in „Sie" oder „du" je nach Zielgruppe — aber nie von oben.',
      '**Sage** ist der zweite Pol: fachlich, belesen, klar. Die Website soll zeigen, dass hier jemand sitzt, der das Fach beherrscht — ohne mit Fachbegriffen anzugeben. Beweise statt Behauptungen. Konkrete Methoden statt „ganzheitlicher Ansatz".',
      '**Anti-Ruler** bedeutet: bewusst nicht autoritär. Keine „wir leiten Sie an"-Sprache. Nichts, was Patient:innen zum Objekt macht. Menschen wie Markus, der als Kontrolleur kommt, brechen genau dort ab. Wer in einer Krise um Halt sucht, will nicht zusätzlich entmündigt werden.',
      'In Psychiatrie und Psychotherapie ist diese Triade kein Stil-Element — sie entscheidet, wer überhaupt anruft.',
    ],
  },

  // §7 VIER KERN-SÄTZE
  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert. Diese Sätze stehen nicht wörtlich auf der Website — aber jede Sektion baut auf einem dieser Pfeiler.',
    items: [
      {
        satz: 'Ein Erstgespräch ist kein Verhör.',
        begruendung:
          'Menschen in einer schweren Krise erzählen oft zum ersten Mal von sich selbst. Die Website muss das vorhersagen — durch Tonfall, durch Beschreibung des Ablaufs, durch Bildsprache, die Ruhe trägt.',
      },
      {
        satz: 'Wir arbeiten mit Verhaltenstherapie, Tiefenpsychologie oder Systemischer Therapie — nicht mit allen gleichzeitig.',
        begruendung:
          'Ehrlichkeit über den eigenen Fokus statt Allround-Versprechen. Wer alles gleichzeitig kann, kann meist nichts richtig. Patient:innen wie Markus erkennen das sofort.',
      },
      {
        satz: 'Angehörige sind keine Wartenden, sie sind eigene Klient:innen.',
        begruendung:
          'Elke und Claudia kommen nicht „zwecks Patient" — sie kommen für sich. Eigene Landing-Page, eigene Kontaktform, eigene Beschreibung. Anders verfehlt man 30 % des Markts in diesem Fach.',
      },
      {
        satz: 'Das Erstgespräch findet in 15 Minuten am Telefon statt, nicht per Formular.',
        begruendung:
          'Menschen in einer Krise schreiben keine Mails, sie wollen eine Stimme. Die Website muss die Telefonnummer prominent platzieren — und es muss tatsächlich jemand abnehmen, der vorbereitet ist.',
      },
    ],
  },

  // §8 CREDIBILITY
  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Ruler" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001) — einem der weltweit meistgenutzten Branding-Frameworks, das Carl Gustav Jungs Archetypen-Lehre auf Marketing übersetzt. Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages, Mia Pejic). Die Marketing-Thesis ist nach Baulig-Prinzip aufgebaut: 7-teilig, prüfbar, falsifizierbar. Alles zusammen ergibt unsere 40-seitige Strategiepapier-Vorlage für Psychiatrie und Psychotherapie. Nicht weil wir mit Fachvokabular protzen wollen — sondern weil ohne Fundament jede Website ein Bauchgefühl bleibt. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  // §9 ANTI-MUSTER
  antiMuster: {
    title: 'Was wir auf vielen Psychiatrie- und Psychotherapie-Websites sehen — und was nicht funktioniert',
    items: [
      'Behandlungs-Listen als Hauptseite („Wir behandeln: Depression, Angst, Zwang, Schlafstörung …") — das spricht keine der fünf Personas konkret an, weil niemand sich in einer Liste wiedererkennt.',
      'Stockfoto mit Arzt im weißen Kittel vor Praxis-Einrichtung — wirkt klinisch-kalt, transportiert Distanz. In Psychiatrie genau das Gegenteil von dem, was Patient:innen suchen.',
      'Jimdo- oder Wix-Template, das auch eine Steuerberatung sein könnte — signalisiert: „die Praxis hat sich noch nicht ernsthaft mit ihrer Außenwirkung beschäftigt". Markus klickt weg.',
      'Kein Angehörigen-Pfad — Elke und Claudia werden im Netz nicht gefunden. Das ist ein Drittel des relevanten Marktes, ungenutzt.',
      'Keine Beschreibung des Erstgesprächs-Ablaufs — Patient:innen müssen anrufen, ohne zu wissen, was sie erwartet. Bei Menschen mit Sozialphobie ein Hard-Stop.',
      'Telefonnummer nur im Footer oder in der Navigation — Menschen in Krise scrollen nicht. Die Nummer muss an mehreren prominenten Stellen sein.',
    ],
  },

  // §10 DESIGN-RICHTUNG
  designRichtung: {
    title: 'Warm, ruhig, nicht klinisch-kalt',
    text: 'Tonalität in Bildworten: gedämpfte Erd- oder Petrol-Töne statt Pflege-Rosa oder Klinik-Türkis. Viel Weißraum, ruhige Typografie ohne Ausrufungszeichen. Bildsprache näher an Bibliothek und Altbau als an Krankenhaus. Wenn Menschen abgebildet sind, dann als Hände, Schatten, Halb-Profile — nie das überfreundliche Stockfoto-Lächeln. Headline-Größen klein gehalten, weil leise Sätze hier mehr Wirkung haben als Plakatschrift. Animation: minimal. Wer in einer Krise sucht, will nicht von wackelnden Elementen aus der Konzentration gerissen werden.',
  },

  // §11 NEUN BLÖCKE
  neunBloecke: {
    title: 'Zehn Blöcke, die auf einer Psychiatrie- und Psychotherapie-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Leitsatz', text: 'Ruhiges Bild, ein einziger Satz: „Raum für das, was Sie erschöpft." Kein Marketing-Reim, kein Stress.' },
      { nr: 2, title: 'Rolle klarstellen · Psychiater:in oder Psychotherapeut:in?', text: 'Eigener prominenter Block, der erklärt, welche Rolle die Praxis ausfüllt — Ärzt:in mit Medikations-Option oder reine Gesprächstherapie. Patient:innen wählen sonst die falsche Tür.' },
      { nr: 3, title: 'Sofort-Signal für Krise', text: 'Hinweis auf Telefonseelsorge (142), ÖÄK-Krisenhilfe — rechtlich sauber, ethisch geboten, schafft Vertrauen.' },
      { nr: 4, title: 'Angehörigen-Pfad', text: 'Eigene prominente Sektion oder Sub-Landing für Elke + Claudia. Der häufigste blinde Fleck am Markt.' },
      { nr: 5, title: 'Therapie-Ansatz erklärt', text: 'Welche Methode (KVT, Tiefenpsychologie, Systemisch) — und was unterscheidet das aus Patient:innen-Sicht? Bei Psychiater:innen zusätzlich: Medikations-Haltung klar machen.' },
      { nr: 6, title: 'Ablauf des Erstgesprächs', text: 'Schritt für Schritt, in einfachen Sätzen. Damit Markus weiß, was kommt — und Andrea weiß, dass sie nichts Falsches tun kann.' },
      { nr: 7, title: 'Honorar-Transparenz', text: 'Klare Aussage zu Wahlarzt-Status und Rückerstattung. Ohne Verstecken, aber ohne aggressive Preis-Vermarktung.' },
      { nr: 8, title: 'Online-Terminbuchung', text: 'Als Option, nicht als einziger Weg. Telefon bleibt gleichwertig — Krisenmenschen schreiben keine Formulare.' },
      { nr: 9, title: 'FAQ — die echten Fragen', text: 'Was Patient:innen wirklich wissen wollen, nicht was wir gerne beantworten. Vertraulichkeit, Wartezeit, Passung, Rollen-Unterschied.' },
      { nr: 10, title: 'Kontakt — Telefon zuerst', text: 'Nummer groß, daneben das Formular für die, die lieber schreiben. Reihenfolge ist Inhalt.' },
    ],
  },

  // §11b ANGEHÖRIGEN-PFAD
  angehoerigenPfad: {
    active: true,
    title: 'Angehörige sind keine Wartenden — sie sind eigene Klient:innen',
    intro:
      'In Psychiatrie und Psychotherapie ist das die meistübersehene Zielgruppe: Menschen, die nicht für sich selbst suchen, sondern für ihren Partner, ihre Mutter, ihre Tochter. Sie googeln Sätze, die auf den meisten Arzt-Websites nicht beantwortet werden — und finden nichts.',
    fragen: [
      'psychiater wien termin für angehörige ohne patient',
      'angehörige depression was tue ich mir selbst an',
      'mutter geht nicht zum arzt was tun',
      'mein partner hat depression ich auch bald',
      'wie überzeuge ich meine mutter zum psychiater',
    ],
    text: 'Eine Psychiatrie- oder Psychotherapie-Website mit eigener Angehörigen-Sektion deckt einen Markt ab, der sonst leer ausgeht. Wir bauen diese Sektion (oder bei Bedarf eine eigene Sub-Landing-Page) mit eigener Ansprache, eigener Ablauf-Erklärung und eigener Kontakt-Möglichkeit.',
    ctaLabel: 'Angehörigen-Pfad in Ihrer Praxis-Website einplanen',
  },

  // Typische Suchen
  typischeSuchen: [
    'kann nicht schlafen seit wochen',
    'panikattacke wie damit umgehen',
    'depression woran erkenne ich das',
    'psychotherapeut wien kassenplatz frei',
    'angehörige depression was tun',
    'mutter 78 vergisst immer mehr',
    'psychiater student wien günstig',
    'kvt psychiater wien wahlarzt',
    'erstgespräch psychiater was passiert',
  ],

  // Legacy wasWirBauen
  wasWirBauen: {
    title: 'Was wir konkret für Ihre Psychiatrie- oder Psychotherapie-Praxis bauen',
    items: [
      'Hauptseite mit ruhigem Hero und klarem Signal: „Raum für das, was Sie erschöpft"',
      '5 Persona-Landing-Pages aus dem Strategiepapier abgeleitet (Andrea, Markus, Elke, Claudia, Tobias)',
      'Eigener Angehörigen-Pfad als prominente Sub-Sektion oder Unter-Landing',
      'Beschreibung Ihrer Therapie-Methode in Patient:innen-Sprache',
      'Ablauf-Erklärung des Erstgesprächs in einfachen Sätzen',
      'Online-Terminbuchung als Option neben großem Telefonkontakt',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget mit 16 Features',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/psychiatrie-content.jpg',
  },

  // §12 FAQ — Katalog möglicher Patient:innen-Fragen
  // Format: Frage + kurzer Hinweis, welche Richtung die Antwort auf der Praxis-Website nehmen sollte.
  // Wir beantworten hier NICHT als Praxis — wir zeigen, welche Themen abgedeckt gehören.
  faq: [
    {
      q: 'Was ist der Unterschied zwischen Psychiater:in und Psychotherapeut:in — und wen brauche ich?',
      a: 'Die häufigste Such-Anfrage in diesem Fach. Die Website-Antwort sollte erklären: Psychiater:in = Ärzt:in mit Medikations-Option, zuständig bei schweren Erkrankungen (Schizophrenie, bipolare Störung, Depression mit Suizidgefahr) und wenn eine medikamentöse Behandlung oder Krankschreibung nötig ist. Psychotherapeut:in = Gesprächstherapie (Verhaltenstherapie, Tiefenpsychologie, Systemisch), zuständig bei Ängsten, leichten bis mittleren Depressionen, Beziehungsproblemen, Trauma, Burnout. Ihre Website sollte klar benennen, welche Rolle Sie ausfüllen.',
    },
    {
      q: 'Ist das Erstgespräch vertraulich — auch gegenüber meinem Arbeitgeber?',
      a: 'Typische Sorge bei beruflich exponierten Patient:innen. Die Website-Antwort sollte die ärztliche Schweigepflicht erklären, klarmachen dass Wahlarzt-Honorare ohne Kassenmeldung laufen, und Vertrauen aufbauen, bevor angerufen wird.',
    },
    {
      q: 'Welche Therapie-Methoden nutzen Sie? Und wie weiß ich, was zu mir passt?',
      a: 'Patient:innen möchten wissen, ob die Praxis mit KVT, Tiefenpsychologie, Systemischer Therapie oder kombiniert arbeitet. Die Website sollte den eigenen Fokus klar benennen — und kurz erklären, welche Methode für welche Lage typisch geeignet ist.',
    },
    {
      q: 'Kann mein:e Partner:in oder mein Kind allein zu Ihnen kommen, ohne dass ich mitgehe?',
      a: 'Angehörige-Frage, im Angehörigen-Pfad ausführlich zu beantworten. Wichtig: explizit bestätigen, dass Angehörige eigene Klient:innen sind — nicht nur Begleitung zum Patienten.',
    },
    {
      q: 'Wie lange ist die Wartezeit — und was mache ich, wenn ich akut nicht warten kann?',
      a: 'Realistische Spannweite nennen (z.B. „2 bis 6 Wochen Erstgespräch") statt zu beschönigen. Bei akuter Krise gehört ein prominenter Hinweis auf ÖÄK-Krisenhilfe + Telefonseelsorge (142) auf die Seite.',
    },
    {
      q: 'Was passiert, wenn ich beim Erstgespräch merke, dass es nicht passt?',
      a: 'Wichtige Vertrauens-Frage. Die Website-Antwort sollte klarstellen: Erstgespräch ist kein Vertrag, Passung darf beiderseits verneint werden, im Zweifel Weiterempfehlung an Kolleg:innen.',
    },
    {
      q: 'Kann ich auch zuerst online schreiben, statt anzurufen?',
      a: 'Beide Wege gleichwertig anbieten — manche Patient:innen (Sozialphobie, akut) tun sich am Telefon schwer, andere bevorzugen schriftliche Erstanfrage. Wichtig: bei akuter Krise klar auf telefonischen Weg hinweisen.',
    },
    {
      q: 'Wie finde ich heraus, welches Honorar meine Kasse zurückerstattet?',
      a: 'Website sollte das System erklären: Wahlarzt = Privathonorar, Rückerstattung über Kasse (ÖGK/BVAEB/SVS) meist 60-80 % des Kassentarifs. Konkrete Zahlen je nach Praxis-Honorar transparent ausweisen.',
    },
  ],
  // Optional-Hinweis vor der FAQ
  // wird im Template als `faqIntro` erwartet — hier als Kommentar: Intro-Satz kommt aus Template.

  // §13 ABSCHLUSS-CTA
  naechsterSchritt: {
    title: 'Reden wir über Ihre Psychiatrie- oder Psychotherapie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich, ohne Vertrag im Anschluss. Wir besprechen Ihre Patient:innen-Konstellation, Ihre Methodik und ob unser Strategiepapier-Ansatz für Sie passt — auch wenn die Antwort am Ende ist, dass wir nicht zusammenpassen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
