import type { FachgebietContent } from '@/lib/content-types'

export const augenchirurgie: FachgebietContent = {
  slug: 'augenchirurgie',
  name: 'Augenchirurgie',
  shortName: 'Augenchirurgie',
  sortOrder: 1,
  paperPages: 18,

  hero: {
    pille: 'Fachgebiet · Augenchirurgie',
    h1: 'Websites für Augenchirurgie — für zwei Generationen gleichzeitig.',
    sub: 'LASIK für 32-Jährige, Katarakt für 72-Jährige — das sind zwei verschiedene Welten auf einer Website. Wir bauen beide Welten so, dass sich jede:r Patient:in zuhause fühlt. Grundlage: unser 18-seitiges Strategiepapier Augenchirurgie.',
    teaser: 'LASIK · Katarakt · Glaukom · drei Welten, drei Pfade',
    image: '/fachgebiete/augenchirurgie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/augenchirurgie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/augenchirurgie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/augenchirurgie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/augenchirurgie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Augenchirurgie-Patient:innen besonders macht',
    paragraphs: [
      'Die Website eines:r Augenchirurg:in wird von zwei fundamental verschiedenen Generationen gelesen: vom 32-jährigen Kontaktlinsenträger, der seit zwei Jahren über LASIK nachdenkt und Preise vergleicht — und von der 72-jährigen mit Katarakt-Diagnose, die Angst hat zu erblinden.',
      'Dazwischen: altersbedingte Makula-Veränderungen, Glaukom-Kontrollen, Lidkorrekturen. Fünf Patient:innen-Typen mit fünf grundlegend verschiedenen Erwartungen.',
      'Die häufigste Fehlentscheidung auf Augenchirurgie-Websites: alles auf einer Seite. LASIK-Technik neben Katarakt-Beruhigung neben Makula-Untersuchung — wirkt für alle unpassend. Wir bauen stattdessen drei eigenständige Welten: `/lasik`, `/katarakt`, `/glaukom-amd`.',
    ],
  },

  szene: {
    title: 'Zwei Anfragen, dieselbe Praxis · eine Herbstwoche',
    person1: {
      name: 'Dr. Stefan Ziegler',
      rolle: '44 · Facharzt für Augenheilkunde · LASIK-Schwerpunkt · Wien',
      image: '/fachgebiete/augenchirurgie-szene-lena.jpg',
      text: 'Zwölf Jahre Klinik, dann Selbständigkeit mit LASIK-Schwerpunkt. Er operiert Femto-LASIK und SMILE — moderne Verfahren. Katarakt-Patient:innen weist er an Kolleg:innen weiter. Seine Website soll Kontaktlinsenträger:innen ansprechen, die rational vergleichen — nicht Senioren mit Katarakt-Angst.',
      zitat: 'LASIK-Entscheidungen fallen mit Daten, nicht mit Hochglanzbildern.',
      zitatAttr: '— Dr. Ziegler im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Bezirk, zwei Generationen weiter',
    person2: {
      name: 'Daniel Kellner',
      rolle: '32 · IT-Consultant · Kontaktlinsenträger seit 15 Jahren',
      image: '/fachgebiete/augenchirurgie-szene-markus.jpg',
      text: 'Abends trockene Augen, morgens das Suchen der Linsen. Er denkt seit zwei Jahren über LASIK nach. Er googelt Technologien (Femto, SMILE, PRK), liest Erfahrungsberichte, vergleicht Preise. Er will wissen: Bin ich mit 32 zu alt? Was sind realistische Komplikationsraten? Und: wer operiert ehrlich statt zu verkaufen?',
      zitat: 'lasik wien preisvergleich langzeit erfahrung',
      zitatAttr: '— seine Google-Suche, Donnerstagabend',
    },
    abschluss: 'Zwischen Dr. Ziegler und Daniel Kellner liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Stefan Ziegler und Daniel Kellner sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Augenchirurgie ist kein Einzelfach. Bevor die Website entsteht, klären wir welche Welten sie abbilden muss.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Für Augenchirurgie: Caregiver (Katarakt-Angst) + Sage (LASIK-Technik) mit Hero-Einschlag (Sehfreiheit), Anti-Magician (keine „Freies Sehen in 10 Minuten"-Versprechen).' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'LASIK-Interessent, Katarakt-Patient:in, Glaukom-Begleitung, AMD-Verdacht, Lidkorrektur. Jeweils eigene stille Fragen, eigene Suchanfragen.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Das Problem (Augenchirurgie-Websites mischen zu viel) bis zum Beweis (wir bauen drei Welten).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Daniel braucht Preistransparenz. Gertrude braucht Beruhigung. Beide auf einer Startseite: unmöglich. Matrix legt fest, was wohin gehört.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'LASIK: sachlich, modern, zahlenorientiert. Katarakt: ruhig, große Schrift, Ablauf-transparent. Glaukom/AMD: medizinisch-klassisch.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Drei eigenständige Landing-Pages (/lasik, /katarakt, /glaukom-amd) statt einer gemischten Hauptseite.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Daniel', vollerName: 'Daniel Kellner', alter: 32, akzent: 'graublau',
      image: '/fachgebiete/personas/daniel.jpg',
      fachContext: 'LASIK-Interesse · Kontaktlinsenträger',
      kontext: 'IT-Consultant, seit 15 Jahren Kontaktlinsen, trockene Augen abends. Recherchiert Femto-LASIK, SMILE, PRK seit zwei Jahren. Will harte Fakten: Preise, Komplikationsraten, Langzeit-Daten. Keine Hochglanz-Sprache.',
      stilleFrage: 'Was, wenn ich eine Komplikation habe und das mit 32 lebenslang bereue?',
      suchanfrage: 'lasik wien preisvergleich langzeit erfahrung',
    },
    {
      name: 'Gertrude', vollerName: 'Gertrude Hofer', alter: 72, akzent: 'terracotta',
      image: '/fachgebiete/personas/gertrude.jpg',
      fachContext: 'Katarakt-Diagnose · Wartezeit 12 Monate Kasse',
      kontext: 'Verwitwet, allein. Augenarzt hat Katarakt diagnostiziert. Kasse-Wartezeit ein Jahr. Sie hat Angst vor Erblindung, vor der OP, vor dem Verlust des Alltags. Ruft nicht online an — sie braucht eine Telefonnummer in großer Schrift.',
      stilleFrage: 'Was, wenn die OP schief geht und ich wirklich blind werde?',
      suchanfrage: 'katarakt op privat wien wartezeit',
    },
    {
      name: 'Walter', vollerName: 'Walter Berger', alter: 64, akzent: 'blau',
      image: '/fachgebiete/personas/walter.jpg',
      fachContext: 'Glaukom · zweite Meinung Wahlarzt',
      kontext: 'Pensionist, vor drei Jahren erhöhter Augeninnendruck. Tägliche Tropfen. Kassen-Nachsorge alle sechs Monate — er will öfter, regelmäßiger, mit Gesprächszeit. Sucht eine Zweitmeinung.',
      stilleFrage: 'Wird mein Glaukom stabil bleiben oder schleicht es trotzdem voran?',
      suchanfrage: 'glaukom zweitmeinung wien grüner star kontrolle',
    },
    {
      name: 'Renate', vollerName: 'Renate Schmid', alter: 68, akzent: 'gruen',
      image: '/fachgebiete/personas/renate.jpg',
      fachContext: 'Makula-Degeneration-Verdacht',
      kontext: 'Frührentnerin. Seit Wochen leichter verschwommener Fleck, verzerrtes Geradensehen. Ihre Schwester hat AMD. Sie hat zehn Stunden gegoogelt, weiß vom Amsler-Test, will OCT-Untersuchung privat.',
      stilleFrage: 'Habe ich das Gleiche wie meine Schwester — und wie früh kann man etwas tun?',
      suchanfrage: 'amd früherkennung wien oct privat',
    },
    {
      name: 'Kerstin', vollerName: 'Kerstin Maier', alter: 42, akzent: 'violett',
      image: '/fachgebiete/personas/kerstin.jpg',
      fachContext: 'Lidkorrektur · hängende Oberlider',
      kontext: 'Managerin, viele Zoom-Meetings täglich. Hängende Oberlider stören sie beruflich mehr als ästhetisch. Sie recherchiert Blepharoplastik, sucht Chirurg:in mit ästhetischem Auge — ohne Hochglanz.',
      stilleFrage: 'Sehe ich nachher aus wie ich selbst — nur wacher?',
      suchanfrage: 'oberlidkorrektur wien ambulant wahlarzt',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Hero-Einschlag · Anti-Magician',
    paragraphs: [
      '**Caregiver** trägt den Katarakt- und AMD-Pfad — wo Menschen Angst vor Erblindung haben, braucht die Website Ruhe, große Schrift, erklärten Ablauf. Nicht „Premium-Linse revolutioniert Ihr Leben", sondern „wir begleiten Sie Schritt für Schritt".',
      '**Sage** trägt den LASIK- und Glaukom-Pfad — rationale Patient:innen wollen Daten, Vergleiche, Langzeit-Erfahrungsberichte. Keine Slogans, sondern Zahlen.',
      '**Hero-Einschlag** kommt punktuell bei LASIK und Lidkorrektur ins Spiel: die Metapher der gewonnenen Freiheit ohne Brille, der wacheren Augen. Aber nur als Akzent — nicht als Dauer-Pathos.',
      '**Anti-Magician** ist kategorisch: keine „Freies Sehen in 10 Minuten"-Versprechen, keine Before-After-Galerien mit 100%-Claims. Wer so verkauft, verliert Daniel (rational) und Gertrude (vorsichtig) gleichzeitig.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'LASIK und Katarakt gehören nicht auf dieselbe Seite.', begruendung: 'Daniel und Gertrude haben nichts gemeinsam außer dem Auge. Ihre Erwartungen, Ängste, Sprachbedürfnisse sind gegensätzlich. Eine Website muss sie trennen — nicht mischen.' },
      { satz: 'Preise gehören sichtbar hin, nicht in die Anfrage-Mail.', begruendung: 'Rationaler LASIK-Kunde Typ Daniel bricht ab, wenn er Preise nicht auf der Seite findet. Transparenz statt „Preis auf Anfrage" ist hier Verkaufsargument, nicht Nachteil.' },
      { satz: 'Katarakt-Angst ist real und gehört ernst genommen.', begruendung: '72-Jährige mit Katarakt-Diagnose fürchten Erblindung. Eine Website muss sich dieser Angst stellen — mit Ablauf-Transparenz, nicht mit Beruhigungs-Phrasen.' },
      { satz: 'Glaukom und AMD sind keine Randthemen — sondern dauerhafte Begleitung.', begruendung: 'Walter und Renate bleiben Jahrzehnte in Betreuung. Die Website muss das signalisieren: „Wir sehen Sie regelmäßig" schlägt „Einmaliger Eingriff".' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage mit Hero-Einschlag · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 18-seitige Strategiepapier-Vorlage für Augenchirurgie — weil ohne Fundament jede Arzt-Website Bauchgefühl bleibt. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Augenchirurgie-Websites sehen — und was nicht funktioniert',
    items: [
      'LASIK- und Katarakt-Welten auf einer gemischten Hauptseite — wirkt für beide Zielgruppen unpassend.',
      '„Freies Sehen in 10 Minuten"-Slogans — rechtlich ÖÄK-problematisch, schreckt rationale LASIK-Interessent:innen aktiv ab.',
      'Keine Preise sichtbar („Preis auf Anfrage") — Daniel-Typ bricht sofort ab und googelt weiter.',
      'Kleine Schrift auf der Katarakt-Landing — 72-Jährige brauchen mindestens 18px und klaren Kontrast.',
      'Fehlender Glaukom-/AMD-Bereich — Walter und Renate werden im Netz nicht gefunden, obwohl sie langjährige Patient:innen-Gruppen sind.',
      'Before-After-Galerien mit 100%-Claims — verletzen Heilmittelwerbegesetz und wirken unseriös.',
    ],
  },

  designRichtung: {
    title: 'Drei Welten, drei Tonalitäten',
    text: 'LASIK-Landing: sachlich-modern, klare Sans-Serif, Preise prominent, Technologie-Vergleichstabellen, dezente Blautöne. Katarakt-Landing: ruhig-beruhigend, mindestens 18-20px Schrift, Kontrast überdurchschnittlich, warme Erdtöne, Schritt-für-Schritt-Visualisierung. Glaukom/AMD-Landing: klassisch-medizinisch, viel Weißraum, OCT-Bilder als Beweis. Kein gemeinsames Design über alle drei — das ist das Feature, nicht der Bug.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Augenchirurgie-Website funktionieren',
    items: [
      { nr: 1, title: 'Drei Einstiegs-Pfade im Hero', text: 'LASIK · Katarakt · Glaukom/AMD als drei gleichwertige Klick-Pfade. Kein gemischter Hero, der alle gleichzeitig ansprechen will.' },
      { nr: 2, title: 'LASIK-Landing mit Preistransparenz', text: 'Voruntersuchung + OP-Preis klar, Technologien verglichen (Femto/SMILE/PRK), Langzeit-Erfolgsquoten ehrlich.' },
      { nr: 3, title: 'Katarakt-Landing mit großer Schrift', text: 'Mind. 18px, Kontrast WCAG AA+, Ablauf in nummerierten Schritten, Rückerstattungs-Info ÖGK.' },
      { nr: 4, title: 'Glaukom-Kontinuum-Seite', text: 'Regelmäßige Kontrollen als Service, Medikamenten-Optimierung, zweite Meinung.' },
      { nr: 5, title: 'AMD-Früherkennung mit OCT', text: 'Eigene Landing, Amsler-Test-Erklärung, OCT-Info, IVOM-Therapie wenn relevant.' },
      { nr: 6, title: 'Lidkorrektur als ästhetische Sub-Seite', text: 'Ober-/Unterlidkorrektur, ambulant vs. stationär, realistische Erwartungen.' },
      { nr: 7, title: 'Voruntersuchungs-Termin als einfacher erster Schritt', text: 'Online buchbar, Preis klar, was mitzubringen — klar kommuniziert.' },
      { nr: 8, title: 'FAQ pro Pfad getrennt', text: 'LASIK-FAQ separat von Katarakt-FAQ — weil die Fragen komplett unterschiedlich sind.' },
      { nr: 9, title: 'Kontakt — Telefon prominent für Senioren', text: 'Nummer groß auf Katarakt-/AMD-Seiten. Formular für LASIK-Seite, wo rationale Recherchierer schreiben.' },
    ],
  },

  typischeSuchen: [
    'lasik wien preisvergleich',
    'smile vs femto lasik unterschied',
    'katarakt op privat wien schnell',
    'grauer star wartezeit überbrücken',
    'premium linse kosten',
    'glaukom zweitmeinung wien',
    'amd früherkennung oct privat',
    'makula degeneration erste zeichen',
    'oberlidkorrektur wien ambulant',
    'augen laser mit 40 sinnvoll',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Augenchirurgie-Praxis bauen',
    items: [
      'Drei getrennte Landing-Pages: `/lasik`, `/katarakt`, `/glaukom-amd` + `/lidkorrektur`',
      'Preistransparenz auf LASIK-Seite (Voruntersuchung + OP-Kosten)',
      'Senioren-optimierte Typografie auf Katarakt-Landing (18-20px, Kontrast AA+)',
      'OCT-Info + Amsler-Test-Erklärung auf AMD-Pfad',
      'Online-Terminbuchung für Voruntersuchungen',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget mit 16 Features',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/augenchirurgie-content.jpg',
  },

  faq: [
    { q: 'Warum trennen Sie LASIK und Katarakt auf eigene Seiten?', a: 'Weil die Zielgruppen komplett unterschiedlich sind. LASIK-Interessent:innen vergleichen Preise und Technologien rational — Katarakt-Patient:innen suchen Beruhigung und Ablauf-Klarheit. Eine Website-Antwort sollte beide Welten als eigene Landing-Pages abbilden, nicht mischen.' },
    { q: 'Wie transparent sollen Preise auf der LASIK-Seite sein?', a: 'Sehr transparent. Voruntersuchung und OP-Kosten gehören sichtbar auf die Seite — „Preis auf Anfrage" schreckt rationale Patient:innen ab. Die Website-Antwort sollte Preisbänder mit Erklärung (je nach Verfahren) bringen, nicht verstecken.' },
    { q: 'Was ist mit der Katarakt-Angst älterer Patient:innen?', a: 'Zentral. Die Website-Antwort sollte Ablauf-Transparenz (Schritt-für-Schritt) + große Schrift + realistische Risiko-Information bieten. Keine beruhigenden Floskeln, sondern konkrete Zahlen und ein sichtbares Telefon.' },
    { q: 'Wird mein Glaukom auf der Website als „klein“ oder als ernste Begleitung dargestellt?', a: 'Als Kontinuum-Betreuung. Die Website-Antwort sollte zeigen: regelmäßige Kontrollen, Medikamenten-Optimierung, zweite Meinung als eigenständiges Angebot — nicht als Nebenprodukt der LASIK-Praxis.' },
    { q: 'Was ist OCT und warum soll das auf die Website?', a: 'OCT (Optische Kohärenztomographie) ist AMD-Früherkennung per Bildgebung. Renate-Typ-Patient:innen googeln genau danach. Eine AMD-Landing mit OCT-Erklärung + Amsler-Test-Info deckt einen Markt ab, den andere ignorieren.' },
    { q: 'Vertragen Senioren überhaupt eine Website — oder rufen sie lieber an?', a: 'Beides. Senioren suchen oft zuerst online (oder lassen sich von Kindern suchen) und rufen dann an. Eine gute Katarakt-Landing muss daher beides liefern: lesbare Info + prominente Telefonnummer in großer Schrift.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Augenchirurgie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren OP-Schwerpunkt, Ihre Patient:innen-Mischung und wie drei getrennte Welten auf Ihrer Website zusammenwirken könnten.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
