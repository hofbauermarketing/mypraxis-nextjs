import type { FachgebietContent } from '@/lib/content-types'

export const urologie: FachgebietContent = {
  slug: 'urologie',
  name: 'Urologie',
  shortName: 'Urologie',
  sortOrder: 11,
  paperPages: 24,

  hero: {
    pille: 'Fachgebiet · Urologie',
    h1: 'Websites für Urologie — diskret, fachlich, ohne Scham-Verstärkung.',
    sub: 'Ein 63-Jähriger, der die Prostata-Vorsorge seit fünf Jahren vor sich herschiebt. Eine 52-Jährige mit Belastungsinkontinenz, die ihrer Frauenärztin nichts davon erzählt. Ein 38-jähriger Kinderwunsch-Mann mit Spermiogramm-Angst. Urologie ist Intimbereich-Medizin — und braucht eine Website, die Würde statt Scham erzeugt. Grundlage: unser 24-seitiges Strategiepapier Urologie.',
    teaser: 'Diskret + fachlich · Scham entkräften · Männer- und Frauen-Urologie',
    image: '/fachgebiete/urologie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/urologie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/urologie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/urologie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/urologie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Urologie-Patient:innen besonders macht',
    paragraphs: [
      'Urologie ist Intimbereich-Medizin. Scham ist keine Randerscheinung — sie ist die strukturelle Barriere, die den ersten Klick, den ersten Anruf und das erste Gespräch verhindert. Eine Urologie-Website muss das ernst nehmen, ohne es zu thematisieren: sie muss signalisieren „hier wird man nicht unangenehm berührt".',
      'Fünf Zielgruppen mit jeweils eigener Scham-Dynamik: Männer mit Prostata-Vorsorge-Vermeidung. Frauen mit Belastungsinkontinenz (weibliche Urologie wird fast vergessen!). Kinderwunsch-Männer mit Spermiogramm-Angst. Patient:innen mit Blut im Urin (akut). Männer mit Erektionsstörungen oder nächtlicher Harnfrequenz.',
      'Unser Ansatz: diskrete, medizinisch-professionelle Sprache. Keine Marketing-Witze über Intimthemen. Weibliche Urologie als eigenständiger Pfad — insbesondere wenn die Praxis eine weibliche Urologin hat, muss das deutlich kommuniziert werden.',
    ],
  },

  szene: {
    title: 'Ein Dienstagabend · zwei gegensätzliche Anfragen',
    person1: {
      name: 'Dr. Ursula Kainz',
      rolle: '51 · Fachärztin für Urologie · Wien-Josefstadt',
      image: '/fachgebiete/urologie-szene-lena.jpg',
      text: 'Als weibliche Urologin ist sie in Österreich noch selten. Sie weiß: Frauen mit Belastungsinkontinenz oder rezidivierenden HWIs haben einen spezifischen Wunsch — eine weibliche Ansprechpartnerin. Ihre Website soll das klar kommunizieren, ohne dass männliche Patienten sich ausgeschlossen fühlen.',
      zitat: 'Die Hälfte der Urologie-Patient:innen sind Frauen. Auf vielen Websites kommen sie gar nicht vor.',
      zitatAttr: '— Dr. Kainz im Erstgespräch mit uns',
    },
    verbindung: 'Zeitgleich, Wien-Simmering',
    person2: {
      name: 'Leopold Huber',
      rolle: '63 · Pensionist · drei Wochen Blut im Urin ignoriert',
      image: '/fachgebiete/urologie-szene-markus.jpg',
      text: 'Seit drei Wochen intermittierend Blut im Urin. Er hat es verdrängt, gehofft es verschwindet. Seine Frau hat heute nachmittag gedrängt. Er googelt „blut im urin männer" — liest die ersten zwei Seiten, wird immer besorgter. Er sucht einen Urologen, der ihn kurzfristig sieht und keine Zeit vergeudet.',
      zitat: 'blut im urin männer wien wahlarzt sofort termin',
      zitatAttr: '— seine Google-Suche, Dienstag 20:41',
    },
    abschluss: 'Zwischen Dr. Kainz und Leopold Huber liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Ursula Kainz und Leopold Huber sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Urologie-Websites stehen und fallen mit Scham-Management. Vor dem Design klären wir, wie Würde operationalisiert wird.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage + Innocent-Einschlag, Anti-Lover. Scham entkräften, nicht erotisieren.' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Prostata-Vermeider, Frau mit Inkontinenz, Kinderwunsch-Mann, akute Hämaturie, BPH-Nykturie.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Urologie-Websites verstärken Scham durch Auslassung oder Witz) bis Beweis.' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Gabriele (Inkontinenz) braucht weibliche Ansprache. Leopold (Hämaturie) braucht Tempo. Matrix steuert.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Medizinisch-diskret, keine Witze, keine „Männergesundheit"-Klischees, keine Genitalien-Icons.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hauptseite + Männer-Urologie-Landing + weibliche-Urologie-Landing + Akut-Hämaturie-Sub-Seite.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Wolfgang', vollerName: 'Wolfgang Steiner', alter: 63, akzent: 'graublau',
      image: '/fachgebiete/personas/wolfgang.jpg',
      fachContext: 'Prostata-Vorsorge · 5 Jahre Vermeidung',
      kontext: 'Pensionierter Buchhalter. Die Ärztin hat vor fünf Jahren zu jährlicher PSA-Kontrolle geraten. Er hat einmal PSA bestimmen lassen, danach aufgeschoben. Seine Frau drängt. Er hat Angst vor der digital-rektalen Untersuchung — nicht vor einer möglichen Diagnose.',
      stilleFrage: 'Werde ich gedemütigt oder kann ich die Untersuchung mit Würde hinter mich bringen?',
      suchanfrage: 'prostata vorsorge wien urologe untersuchung ohne demütigung',
    },
    {
      name: 'Gabriele', vollerName: 'Gabriele Koller', alter: 52, akzent: 'terracotta',
      image: '/fachgebiete/personas/gabriele.jpg',
      fachContext: 'Belastungsinkontinenz · 8 Jahre verschwiegen',
      kontext: 'Selbständige Grafikerin, zwei erwachsene Kinder. Nach dem zweiten Kind Belastungsinkontinenz. Hat Frauenärztin nie angesprochen, trägt Einlagen seit 8 Jahren. Sie sucht eine weibliche Urologin, die über konservative und operative Optionen spricht — nicht gleich zum OP-Termin drängt.',
      stilleFrage: 'Finde ich eine weibliche Urologin, die mir nicht sagt „das kommt halt"?',
      suchanfrage: 'urologin wien belastungsinkontinenz weibliche ärztin',
    },
    {
      name: 'Michael', vollerName: 'Michael Wagner', alter: 38, akzent: 'blau',
      image: '/fachgebiete/personas/michael-2.jpg',
      fachContext: 'Kinderwunsch-Mann · Spermiogramm-Angst',
      kontext: 'IT-Projektleiter, seit 18 Monaten ungewollt kinderloser Kinderwunsch. Seine Frau hat AMH-Abklärung bei der Gynäkologin gemacht. Er schiebt das Spermiogramm seit drei Monaten auf. Versteht die Logistik nicht — wie kommt die Probe ins Labor? Muss er die Probe anfassen?',
      stilleFrage: 'Ist der Spermiogramm-Ablauf so unangenehm wie befürchtet oder diskret machbar?',
      suchanfrage: 'spermiogramm wien ablauf diskret urologe',
    },
    {
      name: 'Leopold', vollerName: 'Leopold Huber', alter: 68, akzent: 'gruen',
      image: '/fachgebiete/personas/leopold.jpg',
      fachContext: 'Akute Hämaturie · drei Wochen ignoriert',
      kontext: 'Pensionierter Elektriker. Seit drei Wochen intermittierendes Blut im Urin. Hat es verdrängt. Seine Frau hat heute Termin-Druck gemacht. Er braucht kurzfristig einen Urologen + Ultraschall + ggf. Zystoskopie.',
      stilleFrage: 'Bin ich zu spät dran oder bekomme ich noch einen schnellen Termin?',
      suchanfrage: 'hämaturie blut urin wien sofort urologe termin',
    },
    {
      name: 'Helmut', vollerName: 'Helmut Bauer', alter: 71, akzent: 'violett',
      image: '/fachgebiete/personas/helmut-2.jpg',
      fachContext: 'BPH · Nykturie · Schlafmangel',
      kontext: 'Pensionist, 4-5x pro Nacht auf die Toilette. Schläft kaum durch, wirkt tagsüber erschöpft. Seine Frau leidet mit. Kassen-Urologe hat Tamsulosin verordnet, Wirkung ausgeblieben. Er will Zweitmeinung — vielleicht TUR-P, GreenLight-Laser oder UroLift?',
      stilleFrage: 'Gibt es noch andere Optionen außer noch eine Tablette?',
      suchanfrage: 'bph wien zweitmeinung urolift greenlight wahlarzt',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Innocent-Einschlag · Anti-Lover',
    paragraphs: [
      '**Caregiver** trägt die gesamte Urologie-Website: Wärme, Diskretion, Einladung trotz Scham. Jede Bildsprache und jedes Wort muss signalisieren: „Hier werden Sie nicht unangenehm berührt — im wörtlichen und im übertragenen Sinn."',
      '**Sage** bringt fachliche Autorität: moderne BPH-Verfahren (UroLift, GreenLight, Aquablation), uro-onkologische Diagnostik (PSMA-PET, MSI), weibliche Urologie (TVT, TOT, Botox bei OAB). Fachbegriffe, die Patient:innen selbst googeln.',
      '**Innocent-Einschlag** (10-15 %) entkräftet die Scham: „Das ist normal, das kommt häufiger vor, als Sie denken." Beruhigende Statistik — aber niemals als Hero-Claim.',
      '**Anti-Lover** kategorisch: keine Erotisierung, keine Witze über Männergesundheit, keine „Potenz-Booster"-Rhetorik. Genau das macht Scham schlimmer, nicht besser.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Urologie ist Intimbereich-Medizin — Website-Design entscheidet über Scham.', begruendung: 'Wolfgang-Typ-Männer und Gabriele-Typ-Frauen brechen bei zu „lockerer" Sprache ab. Medizinische Diskretion schafft Sicherheit.' },
      { satz: 'Weibliche Urologie ist eigene Sprache — nicht Unterabteilung.', begruendung: 'Gabriele-Typ-Patient:innen googeln explizit „urologin" (weibliche Form). Wer das nicht verwendet, wird nicht gefunden.' },
      { satz: 'Spermiogramm-Ablauf muss diskret erklärt werden — schriftlich auf der Website.', begruendung: 'Michael-Typ-Männer googeln „wie läuft spermiogramm ab" — 70 % der Unsicherheit geht über klare Ablauf-Beschreibung weg.' },
      { satz: 'Moderne BPH-Verfahren beim Namen nennen.', begruendung: 'Helmut-Typ-Patient:innen (informiert, zahlungsbereit) googeln „UroLift wien", „GreenLight Laser". Generisches „Prostata-Behandlung" verfehlt sie.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Innocent-Einschlag · Anti-Lover" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles. Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 24-seitige Strategiepapier-Vorlage für Urologie. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Urologie-Websites sehen — und was nicht funktioniert',
    items: [
      'Fehlende weibliche Urologie-Sektion — 40-50 % der Urologie-Patient:innen sind Frauen, werden aber nicht angesprochen.',
      '„Männergesundheit"-Witz-Rhetorik („Jetzt nicht länger warten") — verstärkt Scham, verfehlt Wolfgang-Typ.',
      'Erotisierte Bildsprache — verletzt das Schutzbedürfnis aller Zielgruppen.',
      'Kein Akut-Signal bei Hämaturie — Leopold-Typ-Patient:innen googeln „sofort", bricht sonst ab.',
      'Spermiogramm-Ablauf nicht erklärt — Michael-Typ-Männer bricht aus Unsicherheit ab.',
      'Moderne BPH-Verfahren nicht konkret genannt — Helmut-Typ-Patient:innen googeln Fachbegriffe.',
      'Keine weibliche Form („Urologe" statt „Urologin") — verfehlt SEO-Suche „urologin wien".',
    ],
  },

  designRichtung: {
    title: 'Diskret, medizinisch, würdig',
    text: 'Farbwelt: dezentes Navy, warmes Weiß, sehr viel Weißraum. Keine Pastell-Rosa-/Blau-Gender-Stereotype. Typografie: serifenbetonte Headlines für Autorität, klare Sans für Body. Bildsprache: Innenräume, Hände, Landschaften. Keine Models, keine Erotik-Assoziationen, keine Comics von Geschlechtsorganen. Symbolik diskret.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Urologie-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Doppel-Ansprache', text: 'Männer und Frauen gleichberechtigt — nicht „Urologie für Männer" als Default.' },
      { nr: 2, title: 'Weibliche Urologie-Landing', text: 'Für Gabriele-Typ: Belastungsinkontinenz, rezidivierende HWIs, Beckenboden-Therapie.' },
      { nr: 3, title: 'Prostata-Vorsorge diskret erklärt', text: 'Für Wolfgang-Typ: PSA, DRE-Ablauf, TRUS — würdig und sachlich.' },
      { nr: 4, title: 'BPH + moderne Verfahren', text: 'Für Helmut-Typ: Tamsulosin, UroLift, GreenLight, TUR-P, Aquablation — beim Namen.' },
      { nr: 5, title: 'Akut-Hämaturie-Signal', text: 'Für Leopold-Typ: „Kurzfristig erreichbar bei Blut im Urin" prominent.' },
      { nr: 6, title: 'Spermiogramm-Ablauf-Sub-Seite', text: 'Für Michael-Typ: wie läuft das ab, wo, diskret, was kosten zusätzliche Tests.' },
      { nr: 7, title: 'Kinderwunsch-Andrologie', text: 'Hormon-Check, Varikozele, MESA/TESE-Abklärung bei Azoospermie.' },
      { nr: 8, title: 'Uro-Onkologie-Sub-Seite', text: 'PSMA-PET, BCG-Therapie bei Blasenkarzinom, Nachsorge nach Radikal-OPs.' },
      { nr: 9, title: 'FAQ mit diskreter Sprache', text: 'Vertraulichkeit, Untersuchungs-Ablauf, Ergebnis-Kommunikation — alles würdig.' },
    ],
  },

  typischeSuchen: [
    'prostata vorsorge wien urologe diskret',
    'urologin wien belastungsinkontinenz weiblich',
    'spermiogramm wien ablauf diskret',
    'blut im urin männer sofort urologe wien',
    'bph urolift greenlight wien',
    'hämaturie wien termin urologe',
    'erektionsstörung wien wahlarzt',
    'nykturie wien urologie behandlung',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Urologie-Praxis bauen',
    items: [
      'Hauptseite mit gleichberechtigter Männer- und Frauen-Ansprache',
      'Weibliche Urologie als eigene Landing (falls Schwerpunkt oder weibliche Ärztin)',
      'Prostata-Vorsorge diskret + sachlich erklärt',
      'BPH mit modernen Verfahren (UroLift, GreenLight) konkret',
      'Spermiogramm-Ablauf transparent auf eigener Sub-Seite',
      'Akut-Signal für Hämaturie prominent',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/urologie-content.jpg',
  },

  faq: [
    { q: 'Warum ist weibliche Urologie wichtig auf der Website?', a: '40-50 % der Urologie-Patient:innen sind Frauen — Belastungsinkontinenz, rezidivierende HWIs, OAB. Die Website-Antwort sollte das eigenständig ansprechen, nicht als Unterabteilung von „Urologie für alle". Gabriele-Typ-Patient:innen googeln „urologin wien".' },
    { q: 'Wie spreche ich Prostata-Vorsorge diskret an?', a: 'Sachlich, mit Ablauf-Beschreibung. Die Website-Antwort sollte PSA, DRE (digital-rektale Untersuchung), TRUS-Ultraschall nüchtern erklären — ohne „Männergesundheit"-Witze, ohne Schamverstärkung.' },
    { q: 'Was kann ich beim Spermiogramm auf der Website erklären?', a: 'Den Ablauf komplett. Die Website-Antwort sollte klarstellen: wo Probe abgegeben wird, wie lange sie braucht, Diskretion des Labors, Kosten, wann das Ergebnis da ist. Michael-Typ-Männer verlieren die Angst durch klare Info.' },
    { q: 'Welche modernen BPH-Verfahren sollten auf der Website stehen?', a: 'Mindestens: UroLift, GreenLight-Laser, Aquablation, Rezūm, TUR-P. Die Website-Antwort sollte jedes Verfahren mit 2-3 Sätzen erklären — Helmut-Typ-Patient:innen googeln diese Begriffe.' },
    { q: 'Wie signalisiere ich Hämaturie-Akut-Erreichbarkeit?', a: 'Mit prominentem Hinweis auf der Hauptseite oder in der Navigation. Die Website-Antwort sollte „Blut im Urin? Kurzfristige Termine" explizit benennen. Leopold-Typ-Patient:innen bricht sonst ab.' },
    { q: 'Wie vermeide ich Erotisierung der Urologie-Website?', a: 'Durch medizinische Ernsthaftigkeit. Die Website-Antwort sollte keine Models, keine Witze, keine „Potenz-Booster"-Sprache verwenden. Diskrete Bildsprache (Landschaften, Innenräume, Hände) trägt mehr als Anatomie-Illustrationen.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Urologie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren Praxis-Schwerpunkt (Männer-Urologie / weibliche Urologie / Uro-Onkologie / Kinderwunsch-Andrologie) und wie Sie Scham entkräften, ohne Intimsphäre zu verletzen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
