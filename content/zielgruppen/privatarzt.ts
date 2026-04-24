import type { ZielgruppeContent } from '@/lib/content-types'

export const privatarzt: ZielgruppeContent = {
  slug: 'privatarzt',
  name: 'Privat- und Wahlärzt:innen',
  nameShort: 'Privatarzt',

  hero: {
    pille: 'Für wen · Privat- und Wahlärzt:innen',
    h1: 'Websites für Privat- und Wahlärzt:innen — Positionierung, die passende Patient:innen anzieht.',
    sub: 'Eine Privat- oder Wahlordination lebt von Klarheit: wofür stehen Sie, wen behandeln Sie, wie rechtfertigt sich das Honorar. Ihre Website muss diese Klarheit in den ersten zehn Sekunden liefern — sonst entscheidet die nächste Ordination in der Liste. Wir bauen sie auf Basis eigener Fachgebiet-Strategiepapiere, nicht eines Templates.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
    image: '/zielgruppen/privat-hero.jpg',
  },

  backgrounds: {
    szene: '/zielgruppen/privat-hero.jpg',
    siebenSchritte: '/zielgruppen/privat-hero.jpg',
    credibility: '/zielgruppen/privat-hero.jpg',
  },

  brauchen: {
    title: 'Was Privat- und Wahlärzt:innen an einer Website wirklich brauchen',
    items: [
      'Eine Positionierung, die Wunschpatient:innen anzieht — und andere respektvoll weiterleitet',
      'Klare Honorar-Kommunikation, transparent ohne Preis-Marketing',
      'Rückerstattungs-Info (ÖGK / BVAEB / SVS) präzise, nicht vage',
      'Fachliche Tiefe statt Allzweck-Marketing-Phrasen',
      'Technisch sauber · BFSG · KI-Sichtbarkeit ohne Gimmicks',
      'Ein:e echte:r Ärzt:in im Ton — nicht PR-Broschüre',
    ],
  },

  szene: {
    title: 'Ein Donnerstagabend · zwei Welten, eine Entscheidung',
    person1: {
      name: 'Dr.in Sophie Marchetti',
      rolle: '39 · Wahlärztin Allgemeinmedizin mit Schwerpunkt Stressmedizin · Wien-Neubau',
      image: '/zielgruppen/privat-szene-arzt.jpg',
      text: 'Sie hat vor zwei Jahren eröffnet — acht Jahre Rudolfstiftung, Ausbildung in Ordinationsführung, eigene Stressmedizin-Weiterbildung. Ihre Klientschaft: Berufstätige mit Burnout-Nähe, Selbstständige, manche mit beginnenden Angst-Symptomen. Sie hat Kompetenz, Zeit und Honorar-Struktur — aber die Patient:innen, die sie eigentlich will, wissen nicht, dass sie existiert.',
      zitat: 'Die meisten Anrufe, die ich bekomme, suchen eigentlich eine Kassenärztin.',
      zitatAttr: '— Dr.in Marchetti im Erstgespräch mit uns',
    },
    verbindung: 'Zur selben Zeit, zwei Bezirke weiter',
    person2: {
      name: 'Herr Thomas Ebner',
      rolle: '44 · Managing Director in einer Wiener Unternehmensberatung · seit 6 Monaten Erschöpfungs-Symptome',
      image: '/zielgruppen/privat-szene-patient.jpg',
      text: 'Donnerstag, 22:30. Seit Wochen Schlafstörungen, morgens kein Antrieb, abends ausgelaugt. Sein Hausarzt hat ihm einen Wahlarzt empfohlen. Er klickt sich durch sechs Wiener Wahlarzt-Websites. Drei wirken wie Kliniken, zwei wie Wellness-Angebote, eine wie eine Privatbank. Keine erzählt ihm, ob er dort in der Mittagspause ein Erstgespräch bekommt — und keine erklärt die Honorar-Struktur in einer Sprache, die er als Geschäftsmensch respektieren würde.',
      zitat: 'wahlarzt wien stress burnout erstgespräch abends honorar transparent',
      zitatAttr: '— seine Google-Suche, Donnerstag 22:34',
    },
    abschluss: 'Zwischen Dr.in Marchetti und Herrn Ebner liegt keine fachliche Lücke. Nur eine Lücke in der Positionierung — online. Genau dort setzen wir an.',
    disclaimer: 'Dr.in Sophie Marchetti und Herr Thomas Ebner sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  warumWir: {
    title: 'Warum mypraxis.at statt einer normalen Webagentur',
    points: [
      { title: 'Fachgebiet-spezifisch', text: 'Wir haben für 12 medizinische Fachgebiete eigene Strategiepapiere (17-40 Seiten) geschrieben. Vor jeder Zeile Code.' },
      { title: 'Persona-basiert', text: 'Texte werden nicht generisch formuliert, sondern für Ihre konkreten Patient:innen-Typen. Das ist der Unterschied zwischen „wird besucht" und „wird angerufen".' },
      { title: 'Persönlich, nicht Account-Manager', text: 'Kevin führt das Erstgespräch selbst. Kein Ticket-System, keine Zwischenebenen. Wer Sie erreicht, versteht Ihre Ordination.' },
    ],
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Privat- und Wahlordinations-Websites scheitern meist nicht am Design, sondern an der Positionierung. Bevor wir bauen, klären wir:',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + sozioökonomische Struktur), Positionierungs-Schwerpunkt, bestehende Patient:innen-Analyse (wer kommt heute — und wer sollte kommen?). Im telefonischen Erstgespräch eruieren wir gemeinsam den Soll-Ist-Abstand. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage · Anti-Anbiedern. Kompetent und empathisch, niemals Hochglanz-Broschüre. Die Website soll Vertrauen bauen — nicht Werbung machen.' },
      { num: 3, title: 'Fünf konsolidierte Patient:innen-Typen', text: 'Die berufstätige Burnout-Nähe, der zweitmeinungssuchende Befund-Schock-Patient, die Mitte-50er-Vorsorgerin, der internationale Expat-Patient, die selbstbestimmte Gesundheits-Investorin. Jede hat andere erste Sätze.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: vom Problem (Patient:innen suchen vorwiegend auf Kassen-Logik, obwohl sie Wahlarzt wollen) bis zum Beweis (klare Positionierung zieht Wunsch-Segment messbar an).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Thomas Ebner braucht „Erstgespräch auch außerhalb Bürozeiten." Frau Krenn braucht „Zweitmeinung mit ausreichend Zeit." Herr Andersen braucht „Ordination auf Englisch." Matrix legt fest, was wo steht.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Luftig, kompetent, zurückhaltend. Keine Luxus-Inszenierung, kein Concierge-Medicine-Ton. Warme Erdtöne mit dezentem Navy, klare Typografie, großzügige Weißräume.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Positionierung im Hero, Leistungen nach Patient:innen-Anliegen gruppiert, Honorar + Rückerstattung in eigenem transparenten Block, „Wie läuft ein Erstgespräch ab?" sichtbar.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Thomas', vollerName: 'Herr Thomas Ebner', alter: 44, akzent: 'blau',
      image: '/zielgruppen/personas/thomas-2.jpg',
      kategorie: 'Berufstätig · Burnout-Nähe · erste Wahlarzt-Suche',
      kontext: 'Managing Director in einer Wiener Consulting-Firma, zwei Kinder, seit sechs Monaten Schlaf-Probleme und morgendliches Leeregefühl. Vom Hausarzt zur Wahlärztin empfohlen. Er erwartet Kompetenz auf Augenhöhe — und eine Website, die in seiner Sprache kommuniziert.',
      stilleFrage: 'Kann ich hier Erstgespräch außerhalb Bürozeiten bekommen — und wird ernsthaft zugehört?',
      suchanfrage: 'wahlarzt wien stress burnout erstgespräch abends honorar transparent',
      websiteBedarf: 'Positionierungs-Hero statt „Herzlich Willkommen". Honorar + Rückerstattung transparent. Ablauf Erstgespräch explizit. Ärztin-Profil mit Ausbildungs-Tiefe. Termin-Option auch abends.',
    },
    {
      name: 'Frau Krenn', vollerName: 'Frau Monika Krenn', alter: 58, akzent: 'terracotta',
      image: '/zielgruppen/personas/krenn.jpg',
      kategorie: 'Befund-Schock · sucht Zweitmeinung mit Zeit',
      kontext: 'Unternehmerin aus Wien-Döbling, geschieden, zwei erwachsene Söhne. Letzte Woche überraschender Befund (früher Karzinom-Verdacht). Sie will die Zweitmeinung einer:s Wahlärzt:in, die/der Zeit hat — nicht die sieben Minuten des Kassenarztes. Sie zahlt gerne für Ruhe und Tiefe.',
      stilleFrage: 'Bekomme ich hier 45 Minuten Zeit und eine Einschätzung jenseits der AKH-Schablone?',
      suchanfrage: 'wahlarzt wien zweitmeinung karzinom verdacht zeit sorgfältig',
      websiteBedarf: 'Ordinations-Zeit pro Termin sichtbar („45 Minuten Standard"). Befund-Prozess erklärt. Netzwerk zu Fach-Kolleg:innen angedeutet. Ärztin-Biografie mit ausbildungsspezifischem Tiefgang.',
    },
    {
      name: 'Frau Paulsen', vollerName: 'Frau Jasmin Paulsen', alter: 55, akzent: 'gruen',
      image: '/zielgruppen/personas/paulsen.jpg',
      kategorie: 'Mitte-50er · proaktive Gesundheits-Investorin · Vorsorge',
      kontext: 'Architektin, Ehepaar-Haushalt, beide Kinder aus dem Haus. Sie hat die Kassen-Vorsorge seit zehn Jahren gemacht — jetzt will sie eine umfassendere Betreuung mit mehr Zeit. Sie liest Gesundheits-Magazine, versteht Laborwerte, will eine Ärzt:in, die mit ihr auf Augenhöhe spricht.',
      stilleFrage: 'Werde ich hier erklärt oder belehrt?',
      suchanfrage: 'wahlarzt vorsorge wien ausführliche untersuchung laborwerte erklärt',
      websiteBedarf: 'Vorsorge-Pakete transparent beschrieben. Erklärende Elemente („Was bedeutet dieser Wert?"). Ärztin-Zugang empathisch-sachlich formuliert.',
    },
    {
      name: 'Herr Andersen', vollerName: 'Herr Lars Andersen', alter: 37, akzent: 'graublau',
      image: '/zielgruppen/personas/andersen.jpg',
      kategorie: 'Internationaler Expat · Englisch-Präferenz · urban',
      kontext: 'Software-Engineer aus Kopenhagen, seit drei Jahren in Wien, spricht gebrochenes Deutsch. Sucht eine Ordination, in der er sein Anliegen (chronische Rückenschmerzen + stressbedingte Kopfschmerzen) auf Englisch klar schildern kann. Privat versichert, honorar-unproblematisch.',
      stilleFrage: 'Can I explain my symptoms in English without having to translate every word?',
      suchanfrage: 'english speaking gp vienna private practice appointment',
      websiteBedarf: 'Mehrsprachiger Info-Layer (min. Englisch, ideal 10 Sprachen über Barrierefreiheits-Widget). „English-friendly"-Hinweis sichtbar. Termin-Buchung auch in Englisch.',
    },
    {
      name: 'Frau Steiner', vollerName: 'Frau Carla Steiner', alter: 46, akzent: 'violett',
      image: '/zielgruppen/personas/steiner.jpg',
      kategorie: 'Ganzheitlich-offen · Komplementärmedizin respektiert',
      kontext: 'Personalleiterin eines mittelständischen Wiener Unternehmens. Sie ist kein Esoterik-Typ, aber offen für Akupunktur-Ergänzung, Ernährungsmedizin, Mind-Body-Ansätze. Sucht eine Schulmedizinerin, die solche Wege als Ergänzung — nicht als Ersatz — mitdenkt. Keine Alternativmedizin-Ordination. Integration.',
      stilleFrage: 'Werde ich als „Öko-Spleen" eingestuft oder wird mein Wunsch nach integrativem Ansatz ernst genommen?',
      suchanfrage: 'wahlarzt wien integrativ ganzheitlich akupunktur ernährung schulmedizin',
      websiteBedarf: 'Dezenter Hinweis auf komplementäre Ansätze, ohne Haupt-Fokus. Klare Abgrenzung zu Alternativmedizin. Schulmedizinische Basis bleibt sichtbar.',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Sage · Anti-Anbiedern',
    paragraphs: [
      '**Caregiver** trägt die Arzt-Patient-Beziehung. Verlässlich, ausreichend Zeit pro Termin, menschlich. Das ist das Grundversprechen jeder Wahlordination — es muss in der Website-Tonalität sofort spürbar sein.',
      '**Sage** ist die zweite Säule: Fachliche Tiefe, Erklärkompetenz, Einordnen statt Vereinfachen. Patient:innen, die zahlen, erwarten mehr als „kommen Sie vorbei" — sie erwarten, dass ihre Fragen mit Substanz behandelt werden. Die Website muss das vorbereiten.',
      '**Anti-Anbiedern** explizit: kein „Willkommen in Ihrer neuen Wohlfühl-Ordination", kein Hochglanz-Praxisfoto mit goldenen Akzenten, keine Preis-Marketing-Rhetorik. Privat- und Wahlärzt:innen verkaufen keine Leistung — sie bieten Kompetenz.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Privat- und Wahlordinationen leben von Positionierung, nicht von Listen.', begruendung: 'Die meisten Websites zählen Leistungen auf — als wären sie Kassenordinationen. Wunschpatient:innen suchen aber nach Positionierung („Stressmedizin", „Zweitmeinung mit Zeit"), nicht nach Leistungslisten.' },
      { satz: 'Honorar-Transparenz ist Vertrauensbildung.', begruendung: 'Wer die Honorar-Struktur versteckt, erzeugt Misstrauen. Wer sie offen darstellt inkl. Rückerstattungs-Info (ÖGK 60-80 %), wirkt souverän. Das ist kein Preis-Marketing — das ist Respekt.' },
      { satz: 'Das Erstgespräch ist das Produkt.', begruendung: 'Jeder Wahlarzt-Moment beginnt mit einem Erstgespräch. Eine Website, die dieses Erstgespräch schon skizziert (Dauer, Ablauf, Erwartung) senkt die Hürde zum Anruf signifikant.' },
      { satz: 'Patient:innen kommen wegen Zeit — nicht wegen Preis.', begruendung: 'Der häufigste Grund für den Wechsel in die Wahlordination ist: mehr Zeit pro Termin. Wer das auf der Website benennt (z.B. „45 Minuten Standard"), trifft genau den Nerv der Zielgruppe.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Anbiedern" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Dieses Zielgruppen-Strategiepapier ist das Fundament. Für jede Ordination erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets, Ihres Fachgebiet-Papiers und eines telefonischen Erstgesprächs. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was auf vielen Wahlarzt-Websites stört — und was nicht funktioniert',
    items: [
      '„Herzlich Willkommen in meiner Ordination" als Hero-Headline — kein Inhalt, kein Grund zum Klicken.',
      'Leistungsliste im Stil einer Kassenordination — niemand sucht eine:n Wahlarzt-Allrounder.',
      'Versteckte Honorar-Information („Honorar auf Anfrage") — erzeugt Misstrauen.',
      'Stock-Fotos mit Stethoskopen und Hochglanz-Lächeln — generische Broschürensprache.',
      'Keine Info zum Erstgespräch — die wichtigste Frage der Patient:innen bleibt unbeantwortet.',
      'Ärztin-Biografie im Lebenslauf-Stil („2005-2011 Studium Universität Wien") — niemand liest das.',
      'Luxus-Inszenierung mit Gold und dunkelblauen Samt-Effekten — verfehlt die eigentliche Zielgruppe.',
    ],
  },

  designRichtung: {
    title: 'Luftig, kompetent, zurückhaltend',
    text: 'Warme Erdtöne mit dezentem Navy, keine Gold-Akzente, kein Hochglanz. Typografie großzügig, Zeilenabstand entspannt, Weißraum als Designelement. Bildsprache: echte Ordinations-Momente (Schreibtisch mit Notizbuch, Fenster mit Tageslicht, Behandlungsraum-Details), keine Stethoskop-Stockfotos. Animation minimal, kein Showcase-Gefühl.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Wahlarzt-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Positionierung', text: 'Nicht „Dr. X, Allgemeinmedizin", sondern „Wahlärztin für Stressmedizin in Wien-Neubau". Die Positionierung steht vor allem anderen.' },
      { nr: 2, title: 'Ihr erstes Gespräch bei uns', text: 'Konkret: wie lange, was passiert, was erwartet Sie. Senkt die Anruf-Hürde messbar.' },
      { nr: 3, title: 'Leistungen nach Anliegen', text: '„Beruflicher Stress und Erschöpfung" · „Schlaf-Probleme und Angstzustände" · „Vorsorge mit Zeit" — nicht nach ICD-Code sortiert.' },
      { nr: 4, title: 'Ärztin-Profil mit Tiefe', text: 'Nicht Lebenslauf, sondern Haltung: Warum Wahlärztin? Welche Arbeitsweise? Welche Fortbildungen sind relevant? Echt statt formal.' },
      { nr: 5, title: 'Honorar + Rückerstattung transparent', text: 'Eine eigene Sektion mit Range pro typischem Termin und Rückerstattungs-Info (ÖGK ca. 60-80 %, BVAEB / SVS äquivalent).' },
      { nr: 6, title: 'Ordinationsraum + Team sichtbar', text: 'Echte Bilder von Wartezimmer, Sprechzimmer, Mitarbeiter:in. Kein Stock, keine PR-Inszenierung.' },
      { nr: 7, title: 'Mehrsprachig wo sinnvoll', text: 'Über das Accessibility-Widget standardmäßig, zusätzlich ein expliziter „English-friendly"-Hinweis falls Expat-Klientel realistisch.' },
      { nr: 8, title: 'Terminbuchung mit Optionen', text: 'Abendtermine, Online-Buchung, Rückruf-Option. Die Terminfrage darf keine Hürde werden.' },
      { nr: 9, title: 'FAQ mit echten Fragen', text: 'Fragen, die Patient:innen beim Erstanruf tatsächlich stellen — nicht Marketing-Katechismus.' },
    ],
  },

  zeitaufwand: {
    title: 'Ihr Zeitaufwand: 3 bis 5 Stunden gesamt',
    text: 'Erstgespräch (30 Min), Positionierungs-Review (1 h), Inhalte-Feedback (1 h), Korrekturrunden (1-2 h), Go-Live-Freigabe (30 Min). Den Rest machen wir.',
    minutes: 240,
  },

  preisRange: {
    title: 'Investition',
    text: 'Qualität statt Pauschalpreis. Jedes Angebot wird maßgeschneidert nach Ihrer Ordination, Ihrer Positionierung, Ihrem Budget und Ihren Zielen erstellt — und immer persönlich mit Ihnen durchgesprochen. Kein Online-Konfigurator, kein Paket ins Blaue.',
    foerderHint: 'KMU.DIGITAL-Förderung 30 % möglich — wir prüfen das kostenlos mit unserem Förderpartner im Erstgespräch.',
  },

  referenzPlatzhalter: {
    title: 'Referenzen',
    text: 'Erste Referenzen sind in Arbeit — namentliche Nennungen folgen nach schriftlicher Freigabe der jeweiligen Ordination.',
  },

  faq: [
    {
      q: 'Bringt eine neue Website wirklich mehr Wunschpatient:innen?',
      a: 'Ja — aber nicht von allein. Voraussetzung sind drei Dinge: klare Positionierung (wofür stehen Sie?), die richtige Ansprache (wie beschreiben Sie Ihre Arbeit?) und technische Sauberkeit (damit Google + KI Sie finden). Wir liefern alle drei.',
    },
    {
      q: 'Ich bin im DocFinder — reicht das nicht?',
      a: 'Aus drei Gründen nein: DocFinder gehört nicht Ihnen, Ranking-Änderungen sind jederzeit möglich. Ihre DocFinder-Seite wird in KI-Suchen (ChatGPT, Perplexity) kaum referenziert. DocFinder-Templates sind standardisiert — echte Positionierung ist dort nicht möglich.',
    },
    {
      q: 'Können Sie das Honorar auf der Website klar ausweisen?',
      a: 'Ja — mit richtiger Balance. Wir empfehlen transparente Honorar-Ranges mit Rückerstattungs-Info (ÖGK 60-80 % typisch), damit Patient:innen einschätzen können, ob das für sie passt. Kein Verstecken, aber auch kein aggressives Preis-Marketing.',
    },
    {
      q: 'Wie geht das mit der ÖÄK-Werberichtlinie?',
      a: 'Wir arbeiten im Rahmen der ÖÄK-Werberichtlinien — keine Heilsversprechen, kein Vergleichs-Marketing, keine reißerischen Formulierungen. Dafür: klare Positionierung, fachliche Tiefe, rechtssichere Ausdrucksweise. Wir kennen die Grenzen und bleiben innerhalb.',
    },
    {
      q: 'Gehört die Website dann mir?',
      a: 'Ja, komplett. Domain bleibt auf Ihren Namen, Zugangsdaten zu Hosting und CMS liegen bei Ihnen. Kein Lock-in, kein Pflicht-Abo. Wenn Sie in 3 Jahren wechseln wollen, können Sie das.',
    },
    {
      q: 'Ich habe schon eine Website — lohnt sich ein Relaunch?',
      a: 'Meistens ja. Wenn Ihre Seite älter als 5 Jahre ist, ist sie technisch zu alt für BFSG-Konformität und für die neue KI-Sichtbarkeit (ChatGPT, Perplexity). Ein Relaunch ist meist günstiger und schneller als der Versuch, eine alte Seite zu flicken.',
    },
  ],

  naechsterSchritt: {
    title: 'Der nächste Schritt',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, unverbindlich. Wir klären, was Ihre Positionierung braucht — ehrlich.',
    cta: { href: '/#kontakt', label: 'Erstgespräch vereinbaren' },
  },
}
