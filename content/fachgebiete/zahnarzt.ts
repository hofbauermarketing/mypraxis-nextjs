import type { FachgebietContent } from '@/lib/content-types'

export const zahnarzt: FachgebietContent = {
  slug: 'zahnarzt',
  name: 'Zahnmedizin',
  shortName: 'Zahnarzt',
  sortOrder: 12,
  paperPages: 38,

  // §1 HERO
  hero: {
    pille: 'Fachgebiet · Zahnmedizin',
    h1: 'Websites für Zahnarzt-Ordinationen — für Menschen, die oft lange zögern, bevor sie anrufen.',
    sub: 'Keine Fach-Disziplin hat so viele Menschen mit Angst, Scham oder aufgeschobenen Terminen wie die Zahnmedizin. Eine gute Website senkt die Hemmschwelle — bevor überhaupt gewählt wird. Wir bauen sie auf Basis eines 38-seitigen Strategiepapiers, nicht eines Templates.',
    teaser: 'Caregiver + Sage · Angst ernst nehmen · Familien mitgedacht',
    image: '/fachgebiete/zahnarzt-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/zahnarzt-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/zahnarzt-bg-bibliothek.jpg',
    credibility: '/fachgebiete/zahnarzt-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/zahnarzt-bg-abend.jpg',
  },

  // §2 VERSTÄNDNIS
  verstaendnis: {
    title: 'Was Zahnmedizin-Patient:innen besonders macht',
    paragraphs: [
      'Kaum ein anderes Fach hat so viele Menschen, die länger warten, als sie sollten. Zahnarzt-Angst ist weit mehr als ein Klischee — Studien sprechen von etwa 10 % der erwachsenen Bevölkerung mit ausgeprägter Dentophobie, weitere 30 % mit deutlicher Zahnarzt-Angst. Wer eine Zahnarzt-Ordination googelt, hat sich oft monatelang aufgerafft. Der erste Klick muss signalisieren: hier wird man nicht beschämt, hier wird man ernst genommen.',
      'Gleichzeitig ist die Bandbreite der Anliegen enorm. Akuter Schmerz am Sonntagabend, Prophylaxe bei der dreijährigen Tochter, Veneers vor der Hochzeit, Wurzelbehandlung mit aufgeschobener Panik, Implantat statt Prothese im Alter. Jede dieser Lagen hat eine andere emotionale Signatur — und braucht eine andere erste Botschaft.',
      'Die zahnmedizinische Qualifikation in Österreich ist präzise geregelt: Dr. med. dent. bzw. Mag. med. dent. nach einem sechsjährigen Diplomstudium der Zahnmedizin. Fachzahnärzt:innen für Kieferorthopädie oder Oralchirurgie haben zusätzliche Ausbildungsjahre. Kassenzahnärzt:innen rechnen direkt mit der ÖGK/SVS ab, Wahlzahnärzt:innen privat (mit Kassen-Teilerstattung). Diesen Unterschied verstehen die wenigsten Patient:innen intuitiv — die Website muss ihn klar machen.',
      'Eine gute Zahnarzt-Website kann mehrere Dinge gleichzeitig: Angst senken, Leistungen nach Anliegen gruppieren (nicht nach Fachjargon), Familien integrieren, akute Situationen adressieren. Das ist nicht Marketing-Magie — das ist saubere Architektur, die wir aus 38 Seiten Recherche pro Fachgebiet ableiten.',
    ],
  },

  // §3 SZENE
  szene: {
    title: 'Ein Sonntagabend in Wien · zwei Geschichten, eine Lücke',
    person1: {
      name: 'Dr. Clemens Forstner',
      rolle: '41 · Zahnarzt · Wahl- und Kassenordination · Wien-Alsergrund',
      image: '/fachgebiete/zahnarzt-szene-lena.jpg',
      text: 'Eine Altbau-Ordination in 1090 Wien, 110 m², drei Behandlungseinheiten. Dr. Forstner hat vor fünf Jahren von seinem Vater übernommen. Moderne Prophylaxe-Schiene, eigene Mundhygienikerin, sanfte Betäubung, Kinder-Spielecke. Er weiß, was er kann — aber seine Website erzählt davon praktisch nichts. Sie erzählt über ihn. Nicht über die Patient:innen, die ihn brauchen.',
      zitat: 'Die Hälfte meiner Erstpatient:innen sagt beim Reinsetzen: „Ich war seit fünf Jahren nicht mehr beim Zahnarzt."',
      zitatAttr: '— Dr. Forstner im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Moment, drei Bezirke weiter',
    person2: {
      name: 'Sandra Rieger',
      rolle: '34 · Bürokauffrau · Wien-Ottakring · seit 3 Jahren nicht mehr beim Zahnarzt',
      image: '/fachgebiete/zahnarzt-szene-markus.jpg',
      text: 'Sonntagabend, 21:40. Seit drei Tagen Zahnschmerz rechts oben, heute pocht es bis in die Schläfe. Sie klickt sich durch sieben Zahnarzt-Websites. Keine ruft sie an. Nicht, weil sie schlecht aussehen. Weil keine ihr das Gefühl gibt, dass dort jemand sitzt, der versteht: sie hat nicht vergessen. Sie hat sich nicht getraut.',
      zitat: 'zahnarzt wien wo ich mich nicht schämen muss seit 3 jahren nicht dort',
      zitatAttr: '— ihre Google-Suche, Sonntag 21:44',
    },
    abschluss: 'Zwischen Dr. Forstner und Sandra Rieger liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Clemens Forstner und Sandra Rieger sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  // §4 SIEBEN SCHRITTE
  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Zahnarzt-Websites brauchen besondere Sorgfalt — emotional und architektonisch. Bevor wir bauen, klären wir:',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Schwerpunkt der Ordination (Prophylaxe, Ästhetik, Implantologie, Kinderzahnheilkunde), Kassen- oder Wahlpraxis, Angst-Patient:innen-Angebot. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Anliegen Ihre Ordination prägen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage · Anti-Angst. Kein Hochglanz-Cockpit, kein Zahnfest mit weißen Zähnen auf blauem Himmel. Warm, kompetent, erklärend — für die, die lange gezögert haben.' },
      { num: 3, title: 'Fünf Patient:innen-Typen', text: 'Akuter Schmerz-Notfall, aufgeschobene-Angst-Patient:in, Familien-Mutter mit Kindern, Ästhetik-Interesse (Veneers/Bleaching), Senior:in mit Prothesen- oder Implantat-Bedarf. Jede hat andere erste Suchworte und andere erste Sätze.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: vom Problem (Patient:innen schämen sich) bis zum Beweis (eine Website, die Angst-Thema in einem eigenen Absatz respektvoll adressiert, senkt die Erstanruf-Hürde messbar).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Sandra braucht „Sie sind willkommen, auch nach Jahren." Frau Hammer (Mutter) braucht „erste Kinderzahnuntersuchung — entspannt, mit Spielecke." Herr Gruber braucht „Implantat-Entscheidung ohne Verkaufsdruck."' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Warme Erdtöne, keine klinischen Weiß-Blau-Schockbilder. Patient:innen-nahe Bildsprache (echte Wartezimmer-Szenen, nicht polierte Behandler-Porträts). H-Tags empathisch, keine Jubelrhetorik.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Erster Inhalt nach Hero: „Erster Termin — was Sie erwartet." Nicht: „Unser Leistungsspektrum." Leistungen nach Patient:innen-Anliegen gruppiert, nicht nach ICD-Code.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  // §5 PERSONAS
  personas: [
    {
      name: 'Sandra', vollerName: 'Frau Sandra Rieger', alter: 34, akzent: 'terracotta',
      image: '/fachgebiete/personas/sandra-2.jpg',
      kontext: 'Bürokauffrau in Wien-Ottakring. Letzter Termin vor drei Jahren — seitdem schlechtes Gewissen, dann akuter Schmerz, dann Scham vor der Scham. Sucht nach einer Ordination, die explizit sagt: „Sie sind willkommen, auch nach langer Pause."',
      stilleFrage: 'Werde ich beschämt, wenn sie meine Zähne sehen?',
      suchanfrage: 'zahnarzt wien ohne moralpredigt angst langes zögern',
      fachContext: 'Dentophobie · Aufschubverhalten',
    },
    {
      name: 'Herr Huber', vollerName: 'Herr Martin Huber', alter: 38, akzent: 'graublau',
      image: '/fachgebiete/personas/huber.jpg',
      kontext: 'IT-Dienstleister, verheiratet, zwei Kinder. Pochender Zahnschmerz seit Freitag, heute Sonntag — keine Praxis offen. Er googelt „Zahnarzt-Notdienst Wien 1100" und will eine klare Antwort: Wo wird mir jetzt geholfen, was kostet das, wie schnell?',
      stilleFrage: 'Wer nimmt mich morgen früh sofort dran?',
      suchanfrage: 'zahnarzt notdienst wien sonntag schmerz akut',
      fachContext: 'Akuter Notfall · Bereitschaft',
    },
    {
      name: 'Frau Hammer', vollerName: 'Frau Julia Hammer', alter: 36, akzent: 'gruen',
      image: '/fachgebiete/personas/hammer.jpg',
      kontext: 'Lehrerin in Wien-Landstraße, Tochter Lina (3) soll erstmals zum Zahnarzt. Sie will keine Angst-Erlebnisse weitergeben — also: Ordination mit Kinderzahnheilkunde-Erfahrung, spielerischem Zugang, sanfter Einführung. Später kommt auch Bruder Finn (6) mit.',
      stilleFrage: 'Wie finde ich einen Zahnarzt, der Kinder nicht traumatisiert?',
      suchanfrage: 'kinderzahnarzt wien erster termin entspannt 3 jahre',
      fachContext: 'Kinderzahnheilkunde · Familien-Prophylaxe',
    },
    {
      name: 'Verena', vollerName: 'Frau Verena Steiner', alter: 42, akzent: 'violett',
      image: '/fachgebiete/personas/verena.jpg',
      kontext: 'Unternehmensberaterin in Wien-Innere Stadt, heiratet in acht Monaten. Sie möchte die Zähne in dezenten Schritten verbessern — keine Hollywood-Überversorgung, aber Veneers an den vorderen Schneidezähnen, professionelles Bleaching. Sucht nach einer Ordination mit Ästhetik-Schwerpunkt, die auch Nein sagen kann.',
      stilleFrage: 'Empfiehlt man mir hier ehrlich, was zu meinem Gesicht passt?',
      suchanfrage: 'veneers wien natürlich dezent beratung ehrlich',
      fachContext: 'Ästhetische Zahnheilkunde · Veneers + Bleaching',
    },
    {
      name: 'Herr Gruber', vollerName: 'Herr Johann Gruber', alter: 68, akzent: 'sand',
      image: '/fachgebiete/personas/gruber.jpg',
      kontext: 'Pensionierter Installateur, Niederösterreich-Pendler. Seine Teilprothese drückt seit Monaten, er hat mit seinem Hauszahnarzt über Implantate gesprochen — aber die Summe schreckt. Er will eine Zweitmeinung, transparente Kostenaufschlüsselung und jemanden, der ihn nicht zu einer All-on-4-Versorgung drängt.',
      stilleFrage: 'Werde ich hier abgezockt oder ehrlich beraten?',
      suchanfrage: 'zahnarzt implantat wien zweitmeinung kostenaufstellung',
      fachContext: 'Implantologie · Senior:innen · Kostenklarheit',
    },
  ],

  // §6 ARCHETYP
  archetyp: {
    triade: 'Caregiver · Sage · Anti-Angst',
    paragraphs: [
      '**Caregiver** trägt die gesamte Zahnarzt-Website. Versorgend, geduldig, bei schwachen Momenten nicht abweisend. Wer drei Jahre nicht da war, soll hier nicht zuerst belehrt werden.',
      '**Sage** ist die zweite Säule: erklärend, einordnend, klären statt verkaufen. Der Unterschied zwischen Wurzelbehandlung und Extraktion, zwischen Krone und Brücke, zwischen Implantat und Prothese — ruhig, faktenbasiert, ohne Verkaufsdruck.',
      '**Anti-Angst** explizit: keine Horror-Bilder, kein „Wir retten Ihre Zähne!", kein Alarm-Ton. Die Website darf nicht reproduzieren, was Patient:innen ohnehin schon fühlen. Sie muss das Gegenteil tun — entkrampfen.',
    ],
  },

  // §7 VIER KERNSÄTZE
  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Die Zahnarzt-Website muss zuerst Angst senken, dann informieren.', begruendung: 'Rund 10 % der Bevölkerung hat ausgeprägte Dentophobie, 30 % klinisch relevante Zahnarzt-Angst. Wer das ignoriert und mit Leistungslisten beginnt, verliert genau die Patient:innen, die am dringendsten Behandlung brauchen.' },
      { satz: 'Anliegen-Gruppierung schlägt Fach-Nomenklatur.', begruendung: 'Niemand sucht „Endodontie" — Patient:innen suchen „Zahnschmerz was tun". Die Website muss in der Sprache der Suche strukturiert sein, nicht in der Sprache des Lehrbuchs.' },
      { satz: 'Familien sind kein Unterpunkt — Familien sind eine Säule.', begruendung: 'Eine Familien-Mutter bringt ihr ganzes Haushalts-Trio mit. Wenn Kinderzahnheilkunde auf der Website als eigene Säule steht, kommt oft die gesamte Familie. Als „weiterer Punkt" kommt niemand.' },
      { satz: 'Kostentransparenz ist Angstbekämpfung.', begruendung: 'Die zweite große Angst neben dem Schmerz ist die Rechnung. Eine Ordination, die offen über Kosten spricht — inkl. „was bezahlt die Kasse" und „was nicht" — wirkt vertrauenswürdig, auch bei Privatleistungen.' },
    ],
  },

  // §8 CREDIBILITY
  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Angst" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Dieses Fachgebiet-Strategiepapier (38 Seiten) ist das Fundament. Für jede Ordination erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  // §9 ANTI-MUSTER
  antiMuster: {
    title: 'Was auf vielen Zahnarzt-Websites stört — und was nicht funktioniert',
    items: [
      'Hollywood-Lächeln-Stockfotos im Hero — verstärken Scham statt sie abzubauen.',
      'Nur Behandler-Porträt, keine Ordinations-Einblicke — Patient:innen wollen den Raum sehen, in den sie kommen werden.',
      'Leistungen nach ICD-10 sortiert („Endodontie, Parodontologie, Prothetik") — niemand sucht so.',
      'Fehlender Angst-Absatz — obwohl mindestens 30 % der Zielgruppe davon betroffen ist.',
      'Undurchsichtige Kosten — „auf Anfrage" oder kein Hinweis auf Kasse vs. Selbstzahler.',
      'Kein Notfall-Hinweis / keine Wochenend-Info — obwohl genau das eine häufige Such-Frage ist.',
      'Überladene „Vorher-Nachher"-Galerien ohne Kontext — wirkt wie Schönheitsklinik, verfehlt Routine-Patient:innen.',
    ],
  },

  // §10 DESIGN-RICHTUNG
  designRichtung: {
    title: 'Warm, klar, nicht klinisch',
    text: 'Weg von Reinweiß-Blau-Sterilität. Warme Erdtöne mit dezentem Navy, Holz-Textur-Anmutung, weiches Licht. Typografie ruhig, Zeilenabstand großzügig. Bildsprache: echte Ordinations-Szenen (Wartezimmer mit Tageslicht, Hände am Behandlerstuhl in Nahaufnahme, Mund-Arbeits-Tisch), keine Stock-Zahnmodelle. Animation minimal, keine Bewegung an Schock-Stellen (Spritze, Bohrer).',
  },

  // §11 NEUN BLÖCKE
  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Zahnarzt-Website funktionieren',
    items: [
      { nr: 1, title: '„Erster Termin — was Sie erwartet"', text: 'Der erste Absatz nach Hero. Kein „Leistungsspektrum", sondern eine angstsenkende Ablauf-Beschreibung: was passiert beim Erstgespräch, was nicht, wie viel Zeit ist eingeplant.' },
      { nr: 2, title: 'Angst-Patient:innen-Absatz', text: 'Eigener, ruhiger Abschnitt. Kein Disclaimer — eine Einladung. „Auch wenn Sie länger nicht da waren, sind Sie hier richtig." Kein Verkaufston, keine Mitleids-Rhetorik.' },
      { nr: 3, title: 'Anliegen-Gruppierung', text: '„Ich habe Schmerzen." / „Ich möchte Vorsorge." / „Ich möchte schönere Zähne." / „Mein Kind braucht einen Termin." / „Ich brauche Ersatz für einen Zahn." — statt Fach-Nomenklatur.' },
      { nr: 4, title: 'Kinder + Familien-Bereich', text: 'Eigene Unterseite oder prominente Sektion. Spielecke, Kinderzahnheilkunde-Ansatz, Mutter-Kind-Pass-Information, erste Untersuchung spielerisch erklärt.' },
      { nr: 5, title: 'Ästhetische Zahnheilkunde — ehrlich', text: 'Veneers, Bleaching, Keramikfüllungen. Mit klarer Abgrenzung: was ist Versorgung, was ist Wunsch. Kein Vorher-Nachher-Marathon.' },
      { nr: 6, title: 'Implantologie — mit Kostenrahmen', text: 'Was ist ein Implantat, wann macht es Sinn, was kostet es (Rahmen, keine Preisliste), welche Alternativen gibt es (Brücke, Prothese). Zweitmeinungs-Angebot.' },
      { nr: 7, title: 'Notfall + Bereitschaft', text: 'Klare Info: Was passiert am Wochenende? Wer nimmt Notfälle? Gibt es eine Bereitschaftsnummer? Akuter Schmerz-Pfad bleibt sichtbar.' },
      { nr: 8, title: 'Team + Ordinations-Raum', text: 'Echte Bilder — Mundhygienikerin, Assistenz, Behandlungsraum. Namen, kurze Sätze. Keine langen CVs, nur das, was Patient:innen beruhigt.' },
      { nr: 9, title: 'Kasse oder Wahl? — klar gesagt', text: 'Wenn Wahlarzt: explizit. Welche Teilerstattung gibt es von der ÖGK/SVS/BVAEB? Beispiel-Rechnung, kein Versteck.' },
    ],
  },

  // §11b ANGEHÖRIGEN-PFAD (entfällt bei Zahnmedizin — Familien sind in §11 Block 4 abgebildet)
  angehoerigenPfad: {
    active: false,
    title: '',
    intro: '',
    fragen: [],
    text: '',
    ctaLabel: '',
  },

  typischeSuchen: [
    'zahnarzt wien wahlarzt empfehlung',
    'zahnarzt notdienst wochenende wien',
    'kinderzahnarzt wien entspannt',
    'veneers wien erfahrungen natürlich',
    'zahnimplantat kosten wien zweitmeinung',
    'zahnarzt angst wien keine moralpredigt',
    'professionelle mundhygiene wien beste',
    'wurzelbehandlung wien schmerzfrei',
  ],

  wasWirBauen: {
    title: 'Was wir für Zahnarzt-Ordinationen bauen',
    items: [
      'Hero + „Erster Termin" als ersten Inhalt — Angst vor Sachliste',
      'Angst-Patient:innen-Absatz in respektvollem Ton, keine Mitleids-Rhetorik',
      'Leistungen nach Patient:innen-Anliegen, nicht nach ICD-10',
      'Kinder + Familien als eigene Säule, nicht als Unterpunkt',
      'Implantat + Ästhetik mit Kosten-Rahmen und Zweitmeinungs-Angebot',
      'Notfall- und Wochenend-Hinweis sichtbar',
      'Team + Räumlichkeiten in echten Bildern (keine Stock-Models)',
      'Kasse oder Wahl eindeutig geklärt',
      'Mehrsprachiger Info-Layer (Deutsch, Englisch, Türkisch, Serbisch)',
    ],
    contentImage: '/fachgebiete/zahnarzt-content.jpg',
  },

  faq: [
    { q: 'Wir sind Wahlzahnordination — passt das für uns?', a: 'Gerade deshalb. Wahlzahnärzt:innen brauchen eine Website, die den Unterschied zur Kassen-Ordination ehrlich erklärt — inkl. Teilerstattung, Beispiel-Rechnung und dem Mehrwert, den Sie bieten. Wir schreiben das ohne Verkaufsdruck.' },
    { q: 'Wir arbeiten mit Angst-Patient:innen — kommt das auf die Website?', a: 'Ja, prominent — aber nicht als Marketing-Phrase. Ein eigener ruhiger Absatz, der signalisiert: „Auch nach Jahren sind Sie willkommen." Kein Moralton, keine Mitleids-Rhetorik.' },
    { q: 'Bilder: Vorher-Nachher ja oder nein?', a: 'Sparsam, mit Kontext und nur mit Freigabe der Patient:innen. Keine Massen-Galerie. Ein paar dezente Beispiele mit Erklärung („Welche Methode, wie lange, welche Grenzen?") bringen mehr Vertrauen als 40 Bilder.' },
    { q: 'Wir haben schon eine Website — muss ich die neu machen?', a: 'Meistens ja. Wenn Ihre Seite älter als 5 Jahre ist, ist sie technisch zu alt für BFSG und KI-Sichtbarkeit. Ein Relaunch ist meistens günstiger und schneller als der Versuch, eine alte Seite zu flicken.' },
    { q: 'Kinderzahnheilkunde als eigene Unterseite — sinnvoll?', a: 'Fast immer ja. Familien-Mütter suchen spezifisch nach kinderfreundlichen Zahnärzt:innen. Eine eigene Seite mit Bildern der Spielecke, Beschreibung der ersten Untersuchung und ÖGK-Mutter-Kind-Pass-Info zieht die gesamte Familie.' },
    { q: 'Wir machen viel Prophylaxe — wie integrieren wir das?', a: 'Prophylaxe wird oft als Anhang behandelt, was schade ist. Wir bauen einen eigenen Block: was die Mundhygienikerin tut, wie oft, was das bewirkt, wie das zum Behandlungskonzept passt. Das ist ein starker Einstieg für skeptische Patient:innen.' },
  ],

  naechsterSchritt: {
    title: 'Der nächste Schritt',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, unverbindlich. Wir klären, was Ihre Ordination konkret braucht — ehrlich.',
    cta: { href: '/#kontakt', label: 'Erstgespräch vereinbaren' },
  },
}
