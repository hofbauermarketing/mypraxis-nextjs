import type { FachgebietContent } from '@/lib/content-types'

export const orthopaedie: FachgebietContent = {
  slug: 'orthopaedie',
  name: 'Orthopädie',
  shortName: 'Orthopädie',
  sortOrder: 7,
  paperPages: 29,

  hero: {
    pille: 'Fachgebiet · Orthopädie',
    h1: 'Websites für Orthopädie — chronische Schmerzen und akute Verletzungen in einem Haus.',
    sub: 'Vier Jahre Rückenschmerzen mit Odyssee. Kreuzbandriss vom Sonntag. Läufer-Knie vor dem Marathon. Übergewicht mit Scham und Arthrose. Eine Orthopädie-Praxis bedient all das — aber nicht mit einer Sprache. Grundlage: unser 29-seitiges Strategiepapier Orthopädie.',
    teaser: 'Chronisch + Akut + Sport · zwei Pfade, drei Zielgruppen',
    image: '/fachgebiete/orthopaedie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/orthopaedie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/orthopaedie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/orthopaedie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/orthopaedie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Orthopädie-Patient:innen besonders macht',
    paragraphs: [
      'Die Orthopädie lebt von zwei komplett unterschiedlichen Zeitachsen. Die eine: chronische Rückenschmerzen, Arthrose, Fibromyalgie — Menschen mit Jahren oder Jahrzehnten Leidensweg, die „bestätigt werden" wollen. Die andere: akute Sportverletzungen — heute Kreuzbandriss, morgen MRT-Termin, übermorgen Operations-Planung.',
      'Dazu ein Hero-Einschlag aus der Sportmedizin: Amateur-Läufer:innen, Hobby-Triathlet:innen, die nicht nur „geheilt" werden wollen, sondern zurück in ihren Sport. Und: Angehörige von Senior:innen-Prothesen-Patient:innen.',
      'Eine Orthopädie-Website, die alle diese Welten gleich behandelt, verliert alle. Unser Ansatz: klare Pfade für Chronisch, Akut, Sport. Plus sichtbare Angehörigen-Option bei Senior:innen-Operationen.',
    ],
  },

  szene: {
    title: 'Ein Sonntagmittag · zwei Anfragen',
    person1: {
      name: 'Dr. Reinhard Maurer',
      rolle: '52 · Facharzt für Orthopädie + Unfallchirurgie · Wien-Mariahilf',
      image: '/fachgebiete/orthopaedie-szene-lena.jpg',
      text: 'Zwanzig Jahre AKH, jetzt Wahlarzt mit konservativem Schwerpunkt + sportmedizinischer Zusatzqualifikation. Er macht keine Knie-OPs selbst — er evaluiert, koordiniert, steuert die Rehabilitation. Seine Website soll zeigen: er nimmt chronische Patient:innen ernst und kennt die Sport-Szene.',
      zitat: 'Bei mir kommen Menschen mit vier Jahren Rückenweh und Menschen mit frischem Kreuzbandriss. Beide müssen sich zuhause fühlen.',
      zitatAttr: '— Dr. Maurer im Erstgespräch mit uns',
    },
    verbindung: 'Am selben Sonntag, eine Ordination weiter',
    person2: {
      name: 'Stefan Wagner',
      rolle: '34 · Amateur-Fußballer · gestern Kreuzbandriss',
      image: '/fachgebiete/orthopaedie-szene-markus.jpg',
      text: 'Samstagabend im Hobby-Match ins Knie geknickt. Kniegelenk dick, schmerzt, keine Stabilität. Hausarzt-Wartezeit Montag 10:00 Uhr. Er googelt seit 30 Minuten „kreuzband wien wahlarzt wochenende" — er braucht heute oder morgen einen Orthopäden, der MRT schnell organisiert.',
      zitat: 'kreuzbandriss wien sofort wahlarzt mrt',
      zitatAttr: '— seine Google-Suche, Sonntag 13:47',
    },
    abschluss: 'Zwischen Dr. Maurer und Stefan Wagner liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Reinhard Maurer und Stefan Wagner sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Orthopädie braucht klare Pfad-Trennung zwischen chronisch und akut. Bevor wir bauen, klären wir beide Welten.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage mit Hero-Einschlag (Sport-Rückkehr), Anti-Magician.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Chronische Rücken-Erschöpfte, Akute Sportverletzung, Läufer-Knie, Übergewicht-Scham-Arthrose, Senioren-Prothesen-Angehörige.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Orthopädie-Websites mischen chronisch + akut) bis Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Brigitte (chronisch) braucht Bestätigung. Stefan (akut) braucht Tempo. Matrix definiert Hooks.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Chronisch-Pfad: ruhig, anerkennend. Akut-Pfad: klar, schnell, mit Notfall-Signal. Sport: Hero-Einschlag.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Drei Pfade: `/chronische-schmerzen`, `/sportverletzung`, `/arthrose-prothese`.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Brigitte', vollerName: 'Brigitte Hofer', alter: 54, akzent: 'terracotta',
      image: '/fachgebiete/personas/brigitte.jpg',
      fachContext: 'Chronische Rückenschmerzen · 4 Jahre Odyssee',
      kontext: 'Bürokraft. Rückenschmerzen seit 2022, progredient. Drei Kassen-Orthopäden, zwei Physiotherapeuten, ein Schmerzspezialist. Keiner nimmt sich Zeit für die „Warum"-Frage. Sie will verstanden werden — nicht schnell behandelt.',
      stilleFrage: 'Werde ich wieder zu Physio geschickt oder bekommt mein Rücken endlich eine Diagnose?',
      suchanfrage: 'chronische rückenschmerzen wien wahlarzt bestätigt',
    },
    {
      name: 'Stefan', vollerName: 'Stefan Wagner', alter: 34, akzent: 'blau',
      image: '/fachgebiete/personas/stefan.jpg',
      fachContext: 'Akute Sportverletzung · Kreuzbandriss',
      kontext: 'IT-Spezialist, Amateur-Fußballer. Gestern Abend Kreuzband-Verdacht. Knie geschwollen, instabil. Er braucht heute Diagnose, MRT in Tagen, OP-Planung in Wochen. Kein Warten.',
      stilleFrage: 'Werde ich Jahrzehnte humpeln oder kann ich in 8 Monaten wieder spielen?',
      suchanfrage: 'kreuzband riss wien wahlarzt mrt sofort',
    },
    {
      name: 'Markus L.', vollerName: 'Markus Leitner', alter: 41, akzent: 'gruen',
      image: '/fachgebiete/personas/markus-l.jpg',
      fachContext: 'Sportmedizin · Amateur-Läufer · Knieprobleme',
      kontext: 'Controller, Halbmarathon-Läufer. Seit zwei Monaten Patellaspitzensyndrom-Verdacht. Der Wien-Marathon in 4 Monaten ist das Ziel. Er sucht eine:n Orthopäd:in, die/der die Sport-Sprache spricht und nicht „hören Sie auf zu laufen" sagt.',
      stilleFrage: 'Bekomme ich einen ernsthaften Trainings-Modifikations-Plan oder die Standard-Schonung-Antwort?',
      suchanfrage: 'patellaspitzensyndrom wien sportorthopäde',
    },
    {
      name: 'Gertrude', vollerName: 'Gertrude Müller', alter: 62, akzent: 'sand',
      image: '/fachgebiete/personas/gertrude-2.jpg',
      fachContext: 'Arthrose · Übergewicht · Scham',
      kontext: 'Pensionistin, 118 kg. Knie-Arthrose beidseits. Die Kassen-Orthopädin hat „erstmal 20 kg abnehmen" gesagt. Gertrude hat sich verletzt gefühlt, sucht eine Praxis, die sie nicht auf ihr Gewicht reduziert.',
      stilleFrage: 'Werde ich wieder gedemütigt oder bekommt mein Knie endlich eine Behandlung?',
      suchanfrage: 'knie arthrose wien übergewicht ohne vorwurf',
    },
    {
      name: 'Andrea P.', vollerName: 'Andrea Prantner', alter: 47, akzent: 'violett',
      image: '/fachgebiete/personas/andrea-p.jpg',
      fachContext: 'Angehörige · Mutter vor Hüftprothese',
      kontext: 'Projektmanagerin. Mutter (76) bekommt Hüftprothese in 6 Wochen. Kassenkrankenhaus-OP geplant. Andrea will parallel privaten Orthopäden für Zweitmeinung + Nachsorge-Koordination.',
      stilleFrage: 'Kümmert sich nach der Reha jemand um meine Mutter oder fällt sie ins Loch?',
      suchanfrage: 'hüftprothese wien zweitmeinung nachsorge privat',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Hero-Einschlag (Sport) · Anti-Magician',
    paragraphs: [
      '**Caregiver** trägt den chronischen Pfad. Brigitte und Gertrude wurden schon abgekanzelt — sie brauchen Anerkennung des Leidens, bevor die Behandlung beginnt. Wärme, Zeit, keine schnellen Tipps.',
      '**Sage** ist die Basis der diagnostischen Autorität. MRT-Auswertung, konservative vs. operative Strategien, Rehabilitations-Modelle. Fachkompetenz zeigt sich in konkreten Verfahren.',
      '**Hero-Einschlag** (15-25 %) im Sport-Pfad: „Zurück ins Training, besser als zuvor". Für Stefan, Markus L. — aber begrenzt, sonst verwässert die Praxis die chronische Zielgruppe, die den Großteil ausmacht.',
      '**Anti-Magician**: keine „Wir-heilen-jede-Arthrose"-Slogans, keine Hyaluron-Wundermittel-Versprechen. Wer so verkauft, verliert die informierten Patient:innen.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Chronische Schmerzen brauchen „Warum" vor „Was tun".', begruendung: 'Brigitte-Typ-Patient:innen suchen Bestätigung, keine Standardempfehlung. Eine Website, die sofort mit „Hier unsere Therapien" einsteigt, verliert sie.' },
      { satz: 'Akute Sportverletzungen brauchen Tempo und Transparenz.', begruendung: 'Stefan-Typ-Patient:innen fragen nicht nach Qualifikation — sie fragen nach „wie schnell MRT?". Eine Website mit Akut-Signal und 48-Stunden-Zusage gewinnt sie.' },
      { satz: 'Übergewicht ist eine Nebendiagnose — nicht die Erklärung für jeden Schmerz.', begruendung: 'Gertrude-Typ-Patient:innen wurden schon gedemütigt. Eine Website, die „BMI < 30" als Voraussetzung suggeriert, verliert sie sofort.' },
      { satz: 'Angehörige organisieren Prothesen-Wege.', begruendung: 'Andrea-Typ-Patient:innen sind häufig in Orthopädie. Eine Website mit sichtbarem „Zweitmeinung für Ihre Angehörigen"-Pfad gewinnt sie.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage mit Hero-Einschlag · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 29-seitige Strategiepapier-Vorlage für Orthopädie. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Orthopädie-Websites sehen — und was nicht funktioniert',
    items: [
      'Chronisch + Akut in denselben Hero gemischt — Brigitte fühlt sich nicht ernst genommen, Stefan sucht Tempo.',
      'Kein Akut-Signal für Sportverletzungen — Stefan-Typ bricht ab.',
      '„Gewichtsreduktion" als Voraussetzung bei Arthrose-Therapien — verletzt Gertrude-Typ, verstärkt Scham.',
      'Kein Angehörigen-Pfad für Prothesen-Patient:innen — Andrea-Typ findet nichts.',
      'Sport-Imagery dominiert die Startseite — chronische Schmerz-Patient:innen fühlen sich nicht angesprochen.',
      '„Wunder"-Therapien (Hyaluron, Eigenblut) als Schlagworte ohne Evidenz-Rahmen — verliert informierte Patient:innen.',
    ],
  },

  designRichtung: {
    title: 'Zwei Tonalitäten — ein Haus',
    text: 'Chronisch-Pfad: ruhig, warm, anerkennende Bildsprache, Gespräche statt Geräte. Akut-Pfad: klar, schnell, mit „48h MRT"-Signal sichtbar. Sport-Sub: aktive Imagery, aber dezent (kein Sponsoring-Look). Gemeinsame Arztpersönlichkeits-Seite bleibt neutral.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Orthopädie-Website funktionieren',
    items: [
      { nr: 1, title: 'Drei-Pfad-Hero', text: '„Chronisch? Akut? Sport?" — klare Weiche direkt im Hero.' },
      { nr: 2, title: 'Akut-Signal für Sportverletzungen', text: 'MRT-Verfügbarkeit „binnen 72h" oder ähnlich konkret.' },
      { nr: 3, title: 'Chronisch-Pfad mit „Warum zuerst"', text: 'Für Brigitte: Diagnose vor Therapie, Zeit für die Ursachen-Suche.' },
      { nr: 4, title: 'Sport-Orthopädie-Sub-Seite', text: 'Für Markus L.: Trainings-Modifikation, Rückkehr-in-Sport-Protokolle, nicht nur „Schonung".' },
      { nr: 5, title: 'Arthrose-Seite ohne Scham', text: 'Für Gertrude: Knie-Therapie unabhängig vom Gewicht, würdige Ansprache.' },
      { nr: 6, title: 'Prothesen-Zweitmeinung', text: 'Für Andrea-Typ: Zweitmeinung vor Klinik-OP, Nachsorge-Koordination.' },
      { nr: 7, title: 'MRT + Bildgebung-Kooperation', text: 'Welches Institut, Wartezeit, Kosten-Range transparent.' },
      { nr: 8, title: 'FAQ pro Pfad', text: 'Chronisch-Fragen (Reha, Physio) separat von Akut-Fragen (OP-Planung, Nachsorge).' },
      { nr: 9, title: 'Notfall-Info für Wochenend-Verletzungen', text: 'Wochenend-Sport-Saison häufig. Website muss Erstberatungs-Option erkennbar machen.' },
    ],
  },

  typischeSuchen: [
    'kreuzband riss wien sofort wahlarzt',
    'chronische rückenschmerzen wien wahlarzt',
    'bandscheibe wien zweitmeinung',
    'patellaspitzensyndrom wien sportorthopäde',
    'knie arthrose wien ohne abnehmen',
    'hüftprothese wien zweitmeinung',
    'mrt wien schnell privat',
    'schulter impingement wien wahlarzt',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Orthopädie-Praxis bauen',
    items: [
      'Drei-Pfad-Hauptseite: Chronisch / Akut / Sport',
      'Akut-Signal mit MRT-Verfügbarkeit',
      'Sport-Orthopädie-Sub-Seite (falls Schwerpunkt vorhanden)',
      'Arthrose-Seite mit würdiger Ansprache für Übergewichts-Patient:innen',
      'Prothesen-Zweitmeinung für Angehörige',
      'Online-Terminbuchung + prominentes Telefon für Akut-Fälle',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/orthopaedie-content.jpg',
  },

  faq: [
    { q: 'Wie trenne ich chronische und akute Orthopädie auf der Website?', a: 'Durch eigenständige Landing-Pages ab dem Hero. Die Website-Antwort sollte Brigitte-Typ (chronisch) und Stefan-Typ (akut) in getrennten Pfaden ansprechen — chronisch ruhig und anerkennend, akut schnell und transparent.' },
    { q: 'Wie kommuniziere ich MRT-Verfügbarkeit?', a: 'Konkret mit Zeitspanne. Die Website-Antwort sollte „MRT binnen 72 Stunden" oder vergleichbar nennen — Stefan-Typ-Patient:innen entscheiden danach in Sekunden.' },
    { q: 'Wie spreche ich Patient:innen mit Übergewicht und Arthrose würdig an?', a: 'Ohne BMI als Voraussetzung zu suggerieren. Die Website-Antwort sollte Knie-Therapie, Injektionen, Physio, OP-Optionen unabhängig vom Gewicht darstellen. Gertrude-Typ-Patient:innen wurden schon gedemütigt.' },
    { q: 'Wie positioniere ich Sport-Orthopädie?', a: 'Als Zusatz-Schwerpunkt, nicht als alleinige Identität. Die Website-Antwort sollte Sport-Kompetenz zeigen (Trainingsmodifikation statt Schonung), ohne dass die Praxis wie eine Sport-Klinik wirkt.' },
    { q: 'Wie sieht ein Angehörigen-Pfad in Orthopädie aus?', a: 'Vor allem bei Prothesen und Senior:innen-OPs. Die Website-Antwort sollte Zweitmeinung + Nachsorge-Koordination explizit ansprechen — Andrea-Typ-Töchter organisieren oft die Post-OP-Phase.' },
    { q: 'Brauche ich eine Kinder-Orthopädie-Sektion?', a: 'Nur wenn Sie diesen Schwerpunkt haben. Die Website-Antwort sollte dann eigene Landing mit Hüft-Screening, Skoliose, Fußfehlstellungen bieten — nicht generisch „auch Kinder" erwähnen.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Orthopädie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihr Praxis-Profil (konservativ / operativ / Sport) und wie Sie chronische und akute Zielgruppen parallel bedienen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
