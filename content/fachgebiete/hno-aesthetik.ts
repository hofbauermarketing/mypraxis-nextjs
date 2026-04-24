import type { FachgebietContent } from '@/lib/content-types'

export const hno_aesthetik: FachgebietContent = {
  slug: 'hno-aesthetik',
  name: 'HNO + Ästhetik',
  shortName: 'HNO',
  sortOrder: 3,
  paperPages: 19,

  hero: {
    pille: 'Fachgebiet · HNO + Ästhetik',
    h1: 'Websites für HNO — drei Welten unter einem Dach.',
    sub: 'Tinnitus-Patient:innen mit langem Leidensweg. Chronische Sinusitis und Hörsturz-Akutfälle. Rhinoplastik-Interessent:innen mit Spiegel-Konflikten. Drei verschiedene Erwartungen, eine Praxis. Grundlage: unser 19-seitiges Strategiepapier HNO.',
    teaser: 'Funktion · Tinnitus · Ästhetik · drei Pfade, eine Marke',
    image: '/fachgebiete/hno-aesthetik-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/hno-aesthetik-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/hno-aesthetik-bg-bibliothek.jpg',
    credibility: '/fachgebiete/hno-aesthetik-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/hno-aesthetik-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was HNO-Patient:innen besonders macht',
    paragraphs: [
      'HNO ist ein Fach mit drei fundamental verschiedenen Welten. Funktionelle HNO (Sinusitis, Heuschnupfen, Hörprobleme) verlangt klassisch medizinische Autorität. Tinnitus-Patient:innen kommen nach jahrelanger Odyssee und brauchen zuerst Anerkennung des Leidens. Rhinoplastik-Interessent:innen wollen medizinische Seriosität, kein Beauty-Salon-Gefühl.',
      'Eine Website, die alle drei Welten im selben Ton anspricht, verfehlt alle drei. Wir bauen drei klare Pfade unter einer gemeinsamen Marke.',
      'Zusätzlich: Hörsturz ist Notfall. Kinder-Mittelohrentzündung braucht eigene Eltern-Ansprache. Das sind zwei weitere Sub-Welten, die nicht untergehen dürfen.',
    ],
  },

  szene: {
    title: 'Ein Donnerstagabend, drei Anfragen',
    person1: {
      name: 'Dr. Michael Szabó',
      rolle: '48 · Facharzt HNO mit Rhinoplastik-Schwerpunkt · Wien-Alsergrund',
      image: '/fachgebiete/hno-aesthetik-szene-lena.jpg',
      text: 'Fünfzehn Jahre Klinik, jetzt Wahlarzt mit funktioneller HNO und ästhetischer Rhinoplastik. Er will keine Instagram-Klinik-Ästhetik — aber seine Rhinoplastik-Patient:innen müssen ihn finden. Gleichzeitig möchte er, dass Tinnitus-Patient:innen nicht denken: „Das ist nur ein Beauty-Doc".',
      zitat: 'Ich bin Arzt für die Nase, die atmet. Und für die, die sich im Spiegel stört. Beides ernst.',
      zitatAttr: '— Dr. Szabó im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Moment, Wien-Floridsdorf',
    person2: {
      name: 'Richard Huber',
      rolle: '44 · Controller · Tinnitus seit drei Jahren',
      image: '/fachgebiete/hno-aesthetik-szene-markus.jpg',
      text: 'Seit 2022 konstantes Ohrensausen, schlimmer nachts. Zwei HNO-Ärzte haben gesagt „damit muss man leben". Er sucht jemanden, der wenigstens zuhört. Er recherchiert Tinnitus-Retraining-Therapie, evaluiert Wahlärzte.',
      zitat: 'tinnitus wien wahlarzt ernst nehmen zuhören',
      zitatAttr: '— seine Google-Suche, 22:47 Uhr',
    },
    abschluss: 'Zwischen Dr. Szabó und Richard Huber liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Michael Szabó und Richard Huber sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'HNO-Websites leben von klarer Pfad-Trennung. Vor dem Design klären wir, welche drei Welten Ihre Praxis abbildet.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver (für Tinnitus, Hörsturz) + Sage (funktionell, Diagnostik) + Hero-Einschlag (Rhinoplastik-Rückkehr zum Selbst), Anti-Magician.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Tinnitus-Langzeit, Rhinoplastik, chronische Sinusitis, Hörsturz-akut, Kinder-Mittelohrentzündung.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (HNO-Websites mischen Funktion + Ästhetik unsortiert) bis zum Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Richard (Tinnitus) braucht Anerkennung. Nina (Rhinoplastik) braucht Subtilität. Matrix steuert, was wo kommuniziert wird.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Funktion: nüchtern-medizinisch. Tinnitus: ruhig, zuhörend. Ästhetik: warm, aber nicht Beauty-Salon.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Drei eigenständige Pfade: `/hno-funktion`, `/tinnitus`, `/rhinoplastik`.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Richard', vollerName: 'Richard Huber', alter: 44, akzent: 'graublau',
      image: '/fachgebiete/personas/richard.jpg',
      fachContext: 'Chronischer Tinnitus · 3 Jahre Odyssee',
      kontext: 'Controller. Seit 2022 konstantes Ohrensausen, schlimmer nachts. Zwei HNO-Ärzte haben ihn abgetan. Er schläft schlecht, wirkt zermürbt. Er will jemanden, der zuhört — nicht eine weitere „damit muss man leben"-Antwort.',
      stilleFrage: 'Werde ich wieder als „chronisch" abgeschoben oder ernst genommen?',
      suchanfrage: 'tinnitus wien wahlarzt ernst nehmen',
    },
    {
      name: 'Nina', vollerName: 'Nina Steiner', alter: 31, akzent: 'sand',
      image: '/fachgebiete/personas/nina.jpg',
      fachContext: 'Rhinoplastik · langer Entscheidungsprozess',
      kontext: 'Marketing-Managerin. Seit der Pubertät stört sie sich an ihrer Nase. Hat drei Jahre recherchiert, drei Beratungen gehabt. Sie will keine Hollywood-Nase, sondern eine subtile funktionelle + ästhetische Korrektur.',
      stilleFrage: 'Sehe ich nachher aus wie ich selbst — oder wie jemand anderes?',
      suchanfrage: 'rhinoplastik wien natürlich subtil chirurg',
    },
    {
      name: 'Hubert', vollerName: 'Hubert Leitner', alter: 52, akzent: 'blau',
      image: '/fachgebiete/personas/hubert.jpg',
      fachContext: 'Chronische Sinusitis · Funktionelle HNO',
      kontext: 'Ingenieur. Sinusitis seit Jahren, Nebenhöhlen-Druck, Kopfschmerzen, rezidivierende Infekte. Hausarzt hat Antibiotika-Kuren verordnet, ohne Ursache zu finden. Er will CT, Allergie-Abklärung, ggf. Ballondilatation.',
      stilleFrage: 'Bin ich „noch nicht schlimm genug" für eine Operation — oder bekomme ich endlich eine Entscheidung?',
      suchanfrage: 'chronische sinusitis wien wahlarzt ballondilatation',
    },
    {
      name: 'Sabine', vollerName: 'Sabine Wagner', alter: 48, akzent: 'terracotta',
      image: '/fachgebiete/personas/sabine-2.jpg',
      fachContext: 'Akuter Hörsturz · Notfall-Suche',
      kontext: 'Lehrerin. Heute morgen plötzlicher einseitiger Hörverlust + Schwindel. Hausarzt-Wartezimmer voll. Sie googelt hektisch am Handy, braucht jemanden heute oder morgen — nicht nächste Woche.',
      stilleFrage: 'Ist das ein Notfall, den ich gerade verliere?',
      suchanfrage: 'hörsturz wien heute termin sofort',
    },
    {
      name: 'Claudia', vollerName: 'Claudia Mayr', alter: 33, akzent: 'gruen',
      image: '/fachgebiete/personas/claudia.jpg',
      fachContext: 'Angehörige · Mutter eines 4-Jährigen mit Mittelohrentzündung',
      kontext: 'Ihr 4-jähriger Sohn hat die vierte Mittelohrentzündung binnen 14 Monaten. Kinderärztin-Standardtherapie reicht nicht mehr. Sie sucht HNO mit Kinder-Kompetenz, die Paukenröhrchen oder Adenotomie realistisch einschätzt.',
      stilleFrage: 'Ist mein Kind schon „OP-reif" oder ist das noch normal?',
      suchanfrage: 'paukenröhrchen wien kind hno spezialist',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Hero-Einschlag · Anti-Magician',
    paragraphs: [
      '**Caregiver** trägt den Tinnitus-Pfad — wo Patient:innen drei Jahre Leiden hinter sich haben, braucht die Website Anerkennung vor Lösung. „Wir nehmen Ihren Tinnitus ernst" schlägt jede Therapie-Versprechung.',
      '**Sage** ist die Basis funktioneller HNO: Diagnostik, Allergologie, Sinusitis, Hörminderung. Klassisch medizinisch, ohne Marketing-Sprech.',
      '**Hero-Einschlag** (15-25 %) im Rhinoplastik-Pfad: die Rückkehr zum Selbst, das erleichterte Atmen nach Septumkorrektur. Aber subtil — nicht „neues Leben mit neuer Nase", sondern „Sie, ruhiger, freier".',
      '**Anti-Magician** überall: keine Tinnitus-Heilungsversprechen (ethisch unhaltbar), keine Rhinoplastik-Before-Afters mit Prozent-Claims (rechtlich heikel).',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Tinnitus braucht Anerkennung, nicht Heilsversprechen.', begruendung: 'Richard-Typ-Patient:innen wurden schon von zwei HNO-Ärzten abgekanzelt. Eine Website, die „Tinnitus-Heilung in 6 Wochen" verspricht, verliert genau diese Patient:innen.' },
      { satz: 'Rhinoplastik ist ein Eingriff. Kein Lifestyle-Accessoire.', begruendung: 'Nina-Typ-Patient:innen haben jahrelang recherchiert und wollen eine Ärztin/einen Arzt, nicht ein Beauty-Salon-Gesicht. Der Ton entscheidet.' },
      { satz: 'Hörsturz ist ein Notfall — die Website muss das spiegeln.', begruendung: 'Sabine-Typ-Patient:innen brauchen „heute oder morgen". Eine Website ohne Notfall-Signal verliert sie.' },
      { satz: 'Kinder-HNO ist eigene Zielgruppe — keine Nebensache.', begruendung: 'Claudia-Typ-Eltern suchen gezielt nach Paukenröhrchen-Kompetenz. Wenn Kinder-HNO nur im Leistungsmenü steht, werden sie nicht gefunden.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage mit Hero-Einschlag · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 19-seitige Strategiepapier-Vorlage für HNO + Ästhetik. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen HNO-Websites sehen — und was nicht funktioniert',
    items: [
      'Rhinoplastik und Tinnitus auf derselben Landing — die eine Zielgruppe glaubt, nicht ernst genommen zu werden, die andere erwartet zu viel Ästhetik.',
      'Tinnitus-Heilungsversprechen („Freiheit vom Pfeifen") — ethisch und wissenschaftlich unhaltbar.',
      'Before-After-Galerien bei Rhinoplastik mit 100%-Claims — UWG- und HWG-problematisch.',
      'Kein Notfall-Signal bei Hörsturz — Sabine-Typ-Patient:innen bricht ab.',
      'Kinder-HNO als Unterzeile im Team-Bereich — Claudia-Typ-Eltern finden das nicht.',
      'Sinusitis und Allergie generisch beschrieben — Hubert-Typ-Patient:innen (informiert, zahlungsbereit) wollen CT/Ballondilatation-Info konkret.',
    ],
  },

  designRichtung: {
    title: 'Drei Welten, drei Tonalitäten',
    text: 'Funktionelle HNO: klassisch medizinisch, Weiß + Navy, konkrete Diagnostik-Beschreibungen. Tinnitus-Landing: sehr ruhig, warme Grautöne, viel Weißraum, Bildsprache von Stille. Rhinoplastik-Landing: wärmere Töne, subtile Gesichts-Detail-Bildsprache (niemals Hollywood), medizinisches Ethos sichtbar.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer HNO-Website funktionieren',
    items: [
      { nr: 1, title: 'Drei-Pfad-Hero', text: 'Klare Weiche: HNO-Funktion / Tinnitus / Ästhetik. Keine vermischte Startseite.' },
      { nr: 2, title: 'Notfall-Signal für Hörsturz', text: '„Hörsturz? Heute oder morgen." prominent auf Startseite + Funktions-Landing.' },
      { nr: 3, title: 'Tinnitus-Anerkennungs-Seite', text: 'Eigene Landing, die Leiden ernst nimmt, TRT + Bewältigungsstrategien klar erklärt, keine Heilversprechen.' },
      { nr: 4, title: 'Rhinoplastik mit medizinischem Ethos', text: 'Eigene Seite, Funktion + Ästhetik kombiniert, realistische Erwartungen, Schwellungs-Verlauf dokumentiert.' },
      { nr: 5, title: 'Kinder-HNO-Landing', text: 'Paukenröhrchen, Adenotomie, rezidivierende Infekte — für Eltern adressiert.' },
      { nr: 6, title: 'Diagnostik-Transparenz', text: 'Was kostet CT? Was kostet Allergietest? Hubert-Typ-Patient:innen entscheiden so.' },
      { nr: 7, title: 'Ablauf Erstordination erklärt', text: 'Was mitbringen, wie lange, was passiert — besonders wichtig bei Kinder- und Hörsturz-Patient:innen.' },
      { nr: 8, title: 'FAQ pro Pfad', text: 'Tinnitus-Fragen unterscheiden sich komplett von Rhinoplastik-Fragen. Keine Misch-FAQ.' },
      { nr: 9, title: 'Telefon + Online gleichwertig', text: 'Notfälle rufen an. Rhinoplastik-Planung geht schriftlich.' },
    ],
  },

  typischeSuchen: [
    'hörsturz wien heute termin sofort',
    'tinnitus wien wahlarzt ernst nehmen',
    'rhinoplastik wien natürlich subtil',
    'chronische sinusitis ballondilatation',
    'paukenröhrchen wien kind hno',
    'heuschnupfen immuntherapie wien',
    'septumplastik wien preis',
    'hörtest privat wien',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre HNO-Praxis bauen',
    items: [
      'Drei getrennte Landing-Pages: `/hno-funktion`, `/tinnitus`, `/rhinoplastik`',
      'Notfall-Signal für Hörsturz prominent in Navigation + Startseite',
      'Tinnitus-Seite mit TRT-Erklärung und Bewältigungsstrategien',
      'Kinder-HNO-Sub-Landing mit Paukenröhrchen-Info',
      'Diagnostik-Preistransparenz (CT, Allergie-Test)',
      'Online-Terminbuchung + prominentes Telefon für Akutfälle',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/hno-aesthetik-content.jpg',
  },

  faq: [
    { q: 'Wie trenne ich Tinnitus und Rhinoplastik auf einer Website?', a: 'Durch eigenständige Landing-Pages. Die Website-Antwort sollte Tinnitus in ruhigem, anerkennendem Ton behandeln und Rhinoplastik mit medizinischem Ethos — niemals beide auf derselben Seite mischen.' },
    { q: 'Kann ich Tinnitus-Heilung versprechen?', a: 'Nein — und man sollte es auch nicht. Die Website-Antwort sollte ehrlich kommunizieren: TRT, Bewältigung, Hörgeräte-Option, aber keine Heilversprechen.' },
    { q: 'Wie gehe ich mit Hörsturz-Notfällen auf der Website um?', a: 'Mit klarem Notfall-Signal. Die Website-Antwort sollte „Hörsturz? Heute oder morgen einen Termin" prominent anbieten — ideal in Navigation und Hero.' },
    { q: 'Darf ich Vorher-Nachher-Bilder bei Rhinoplastik zeigen?', a: 'Rechtlich heikel. Die Website-Antwort sollte anonymisierte Schwellungsverläufe zeigen statt plakative Before-After — und keine Prozent-Claims.' },
    { q: 'Brauche ich eine eigene Kinder-HNO-Seite?', a: 'Wenn Sie Kinder behandeln: ja. Die Website-Antwort sollte Paukenröhrchen, Adenotomie, rezidivierende Infekte und Mandelentfernung ansprechen.' },
    { q: 'Wie transparent sollten CT- und Allergie-Test-Preise sein?', a: 'Sehr. Hubert-Typ-Patient:innen (zahlungsbereit, informiert) entscheiden nach Preistransparenz.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre HNO-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren Praxis-Schwerpunkt (funktionell / Tinnitus / Ästhetik) und wie die drei Welten sauber auf einer Marke laufen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
