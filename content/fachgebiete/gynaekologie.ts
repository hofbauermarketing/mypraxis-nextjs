import type { FachgebietContent } from '@/lib/content-types'

export const gynaekologie: FachgebietContent = {
  slug: 'gynaekologie',
  name: 'Gynäkologie & Geburtshilfe',
  shortName: 'Gynäkologie',
  sortOrder: 4,
  paperPages: 40,

  // §1 HERO
  hero: {
    pille: 'Fachgebiet · Gynäkologie + Geburtshilfe',
    h1: 'Websites für Gynäkologie-Ordinationen — für einen Raum, in dem nichts peinlich ist.',
    sub: 'Gynäkologie ist das Fach, in dem Patient:innen am schwersten Worte für ihre Anliegen finden. Eine gute Website signalisiert ab der ersten Zeile: hier werden Scham, Unsicherheit, Fragen ernst genommen. Wir bauen sie auf Basis eines 40-seitigen Strategiepapiers, nicht eines Templates.',
    teaser: 'Caregiver + Sage · Anti-Scham · Lebensphasen-gerecht',
    image: '/fachgebiete/gynaekologie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/gynaekologie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/gynaekologie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/gynaekologie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/gynaekologie-bg-abend.jpg',
  },

  // §2 VERSTÄNDNIS
  verstaendnis: {
    title: 'Was Gynäkologie-Patient:innen besonders macht',
    paragraphs: [
      'Gynäkologie begleitet Menschen durch sehr unterschiedliche Lebensphasen — von der ersten Menstruation über Verhütung, Schwangerschaft, Kinderwunsch, Menopause bis zur Krebsvorsorge im höheren Alter. Kaum ein anderes Fach wird so lange in Anspruch genommen. Und kaum ein anderes Fach berührt so viele Themen, über die Patient:innen nur zögerlich sprechen.',
      'Die Bandbreite der ersten Klicks ist groß. Eine 18-Jährige sucht zum ersten Mal nach einem Rezept für die Pille. Eine 32-Jährige will ihre erste Schwangerschaft gynäkologisch betreuen lassen. Eine 48-Jährige tastet erste Zyklus-Veränderungen ab und fragt sich, ob das schon die Menopause ist. Eine 67-Jährige kommt zur Routine-Krebsvorsorge — und bemerkt, dass sie seit drei Jahren Inkontinenz-Beschwerden verschweigt.',
      'Die Qualifikation in Österreich ist klar: Fachärzt:in für Frauenheilkunde und Geburtshilfe nach sechsjährigem Medizinstudium und sechsjähriger Facharztausbildung. Kassen-Ordinationen rechnen direkt ab, Wahl-Ordinationen privat mit Teilerstattung (in der Regel ca. 70 % nach ÖGK-Tarif). Manche Ordinationen haben Zusatz-Schwerpunkte: Urogynäkologie, Kinderwunsch, pränatale Diagnostik, TCM-integrativ. Diese Schwerpunkte müssen auf der Website sichtbar und unterscheidbar sein.',
      'Eine gute Gynäkologie-Website kann mehrere Dinge gleichzeitig: Scham senken, Lebensphasen abbilden, Schwangerschafts-Betreuung und Routine-Vorsorge erkennen lassen, Erstklientinnen willkommen heißen. Das ist nicht Marketing-Magie — das ist saubere Architektur, die wir aus 40 Seiten Recherche pro Fachgebiet ableiten.',
    ],
  },

  // §3 SZENE
  szene: {
    title: 'Ein Dienstagabend · zwei Geschichten, eine Lücke',
    person1: {
      name: 'Dr.in Katharina Winkler',
      rolle: '42 · Fachärztin für Gynäkologie und Geburtshilfe · Wien-Wieden · Wahlärztin',
      image: '/fachgebiete/gynaekologie-szene-lena.jpg',
      text: 'Eine helle Altbau-Ordination, 80 m². Dr.in Winkler hat vor drei Jahren eröffnet — zwölf Jahre AKH-Geburtshilfe, davon die letzten vier als Oberärztin. Schwerpunkt: Schwangerschaftsbetreuung + integrative Gynäkologie. Sie merkt: die Patient:innen kommen — aber oft erst beim zweiten oder dritten Kind. Das Erstklientinnen-Geschäft fehlt. Ihre Website redet über sie, nicht über die, die lange zögern, bis sie zum ersten Mal anrufen.',
      zitat: 'Die meisten Erstklientinnen sagen: „Ich habe mich fünf Ordinationen angeschaut, bevor ich mich entschieden habe."',
      zitatAttr: '— Dr.in Winkler im Erstgespräch mit uns',
    },
    verbindung: 'Im selben Moment, zwei Bezirke weiter',
    person2: {
      name: 'Lea Moser',
      rolle: '32 · Grafik-Designerin · Wien-Landstraße · 11. SSW · erste Schwangerschaft',
      image: '/fachgebiete/gynaekologie-szene-markus.jpg',
      text: 'Dienstagabend, 22:15. Seit zwei Wochen weiß sie, dass sie schwanger ist — vom Hausarzt bestätigt. Jetzt braucht sie jemanden, der sie die nächsten sieben Monate begleitet. Sie klickt sich durch neun Wiener Gynäkologie-Websites — bei keiner traut sie sich, anzurufen. Nicht weil die Websites schlecht aussehen. Sondern weil keine ihr signalisiert: hier wird eine erste Schwangerschaft mit besonderer Sorgfalt begleitet — anders als die dritte oder vierte.',
      zitat: 'gynäkologin wien 1030 erste schwangerschaft einfühlsam wahlarzt',
      zitatAttr: '— ihre Google-Suche, Dienstag 22:18',
    },
    abschluss: 'Zwischen Dr.in Winkler und Lea Moser liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr.in Katharina Winkler und Lea Moser sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  // §4 SIEBEN SCHRITTE
  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Gynäkologie-Websites brauchen doppelte Sorgfalt: fachliche Breite und emotionale Behutsamkeit. Bevor wir bauen, klären wir:',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Schwerpunkte (Schwangerschaftsbetreuung, Kinderwunsch, Menopause, Urogynäkologie, integrative Ansätze), Kassen- oder Wahlordination. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Anliegen Ihre Ordination prägen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Sage · Anti-Scham. Ruhig, einfühlsam, erklärend — gegen die Hürde, überhaupt Worte zu finden.' },
      { num: 3, title: 'Fünf Patient:innen-Typen', text: 'Junge Erst-Patientin, Schwangere (oft Erst-Schwangerschaft), Kinderwunsch-Paar, Menopause-Übergangs-Patientin, Senior:in mit Vorsorge + unausgesprochenen Beschwerden.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: vom Problem (Patient:innen zögern lange, bis sie anrufen) bis zum Beweis (eine Website, die Lebensphasen benennt und unausgesprochene Themen sichtbar adressiert, senkt die Hürde messbar).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Lea braucht „Erste Schwangerschaft — was Sie bei uns erwartet." Frau Pichler braucht „Zyklus verändert sich — was heißt das?" Frau Steiner braucht „Inkontinenz — darüber können wir reden."' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Warme, leicht gedeckte Farbpalette. Keine Stock-Bilder mit verliebten Paaren und Schleifen-Ultraschallbildern. Bildsprache: ruhige Ordinationsräume, Tageslicht, Gewächse, leise Atmosphäre.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Erster Inhalt nach Hero: „Ihr erster Termin bei uns." Dann Lebensphasen-Navigation (von „Erste Gyn-Visite" bis „Menopause + danach"). Vorsorge und Schwangerschaft als getrennte, klar adressierte Säulen.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  // §5 PERSONAS
  personas: [
    {
      name: 'Lea', vollerName: 'Frau Lea Moser', alter: 32, akzent: 'terracotta',
      image: '/fachgebiete/personas/lea.jpg',
      kontext: 'Grafik-Designerin, seit sieben Jahren mit ihrem Partner, erste bestätigte Schwangerschaft. Sie will nicht zur 08/15-Betreuung, sondern zu jemandem, der sie durch Unsicherheit, Fragen und Nachuntersuchungen führt. Sie hat noch nie ein Mutter-Kind-Pass-Gespräch geführt.',
      stilleFrage: 'Werde ich hier als „erste Schwangerschaft" anders begleitet als jemand beim dritten Kind?',
      suchanfrage: 'gynäkologin wien wahlarzt erste schwangerschaft einfühlsam mutter kind pass',
      fachContext: 'Schwangerschaftsbetreuung · Erstschwangerschaft',
    },
    {
      name: 'Frau Pichler', vollerName: 'Frau Miriam Pichler', alter: 19, akzent: 'graublau',
      image: '/fachgebiete/personas/pichler.jpg',
      kontext: 'Studentin (Psychologie), erste feste Beziehung seit acht Monaten. Sie hat die Frauen-Ärztin ihrer Mutter übernommen, will aber eine eigene — näher an der WG, diskret, ohne Mitwissen der Eltern. Sie weiß nicht, was beim ersten Termin passiert.',
      stilleFrage: 'Was erwartet mich beim ersten Termin — und wird hier diskret mit mir umgegangen?',
      suchanfrage: 'frauenarzt wien erster termin pille verhütung diskret',
      fachContext: 'Erst-Patientin · Verhütungsberatung',
    },
    {
      name: 'Nadine', vollerName: 'Frau Nadine Weber', alter: 37, akzent: 'gruen',
      image: '/fachgebiete/personas/nadine.jpg',
      kontext: 'Projektleiterin in einer Wiener Werbeagentur, mit ihrem Partner seit sechs Jahren. Sie versuchen seit 14 Monaten ein Kind — ohne Ergebnis. Der Hausarzt hat sie auf „einfache Abklärung" verwiesen, sie sucht eine Gynäkologin, die das nicht sofort in Richtung IVF drängt.',
      stilleFrage: 'Werde ich hier behutsam begleitet oder direkt in die Reproduktionsmedizin geschickt?',
      suchanfrage: 'gynäkologin wien kinderwunsch abklärung behutsam vor reproduktionsmedizin',
      fachContext: 'Kinderwunsch · Fertilitäts-Diagnostik',
    },
    {
      name: 'Frau Steininger', vollerName: 'Frau Martina Steininger', alter: 51, akzent: 'violett',
      image: '/fachgebiete/personas/steininger.jpg',
      kontext: 'Lehrerin, zwei erwachsene Kinder. Seit acht Monaten unregelmäßiger Zyklus, Hitzewallungen, gestörter Schlaf. Sie will wissen: ist das jetzt die Menopause, ist Hormonersatz sinnvoll, gibt es pflanzliche Alternativen? Sucht Beratung, nicht Medikamentenabgabe.',
      stilleFrage: 'Bekomme ich hier eine differenzierte Beratung — oder nur ein Rezept?',
      suchanfrage: 'gynäkologin wien menopause beratung hormonersatz pflanzlich ausführlich',
      fachContext: 'Menopause · Hormon-Beratung',
    },
    {
      name: 'Frau Berger', vollerName: 'Frau Herta Berger', alter: 68, akzent: 'sand',
      image: '/fachgebiete/personas/berger.jpg',
      kontext: 'Pensionistin, alleinstehend, kommt zur jährlichen Vorsorge. Seit drei Jahren leichte Belastungs-Inkontinenz — sie spricht bisher niemanden darauf an, nicht einmal die Hausärztin. Sie würde reden, wenn sie spüren würde, dass es kein Tabu ist.',
      stilleFrage: 'Darf ich hier auch über das sprechen, was ich eigentlich verschweige?',
      suchanfrage: 'gynäkologin wien vorsorge ältere frauen inkontinenz ruhig',
      fachContext: 'Urogynäkologie · Senior:innen-Vorsorge',
    },
  ],

  // §6 ARCHETYP
  archetyp: {
    triade: 'Caregiver · Sage · Anti-Scham',
    paragraphs: [
      '**Caregiver** trägt die gesamte Gynäkologie-Website. Begleitend, verlässlich, durch Lebensphasen. Die Patient:innen einer Gynäkologie-Ordination kommen oft zwanzig, dreißig, fünfzig Jahre wieder. Die Website muss diese Kontinuität spiegeln — nicht als Schlagwort, sondern in Ton und Bildsprache.',
      '**Sage** ist die zweite Säule: erklärend, einordnend, den Unterschied zwischen Methoden klärend — von Verhütungsvarianten über Hormonersatz bis zur Beckenboden-Reha. Patient:innen kommen mit halbem Wissen von Google und wollen einordnende Klarheit.',
      '**Anti-Scham** explizit: keine Schmetterlings-Metaphern, keine rosa Schleifen, keine Mutter-Vater-Kind-Idylle. Und keine „Intimsphären"-Wortwolken. Die Website darf nichts reproduzieren, was Patient:innen ohnehin schon fühlen — sie muss entkrampfen.',
    ],
  },

  // §7 VIER KERNSÄTZE
  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Gynäkologie-Websites müssen Lebensphasen sichtbar machen, nicht Fachbegriffe.', begruendung: 'Eine 19-Jährige braucht andere erste Sätze als eine 51-Jährige. Wer beide auf dieselbe Leistungsseite lenkt, verliert beide. Lebensphasen-Navigation ist kein Marketing-Trick — sie ist Patient:innen-Realität.' },
      { satz: 'Schwangerschaftsbetreuung ist die emotionale Hauptstraße — auch wenn sie nicht den größten Umsatz macht.', begruendung: 'Patient:innen, die eine:n gute:n Gynäkolog:in während der Schwangerschaft erleben, bleiben oft zwanzig Jahre. Die Schwangerschafts-Unterseite ist Langzeit-Bindungs-Hebel, nicht Leistungs-Listing.' },
      { satz: 'Unausgesprochene Themen müssen auf der Website vorkommen — sonst kommen sie nicht im Sprechzimmer.', begruendung: 'Inkontinenz, Libido-Verlust, Schmerz beim Geschlechtsverkehr, Blasenentzündungen-Serien. Wenn diese Themen auf der Website explizit benannt werden, trauen sich Patient:innen, sie im Gespräch anzusprechen.' },
      { satz: 'Die Schwelle zum ersten Termin sinkt, wenn man weiß, was passiert.', begruendung: 'Eine eigene Sektion „Ihr erster Termin" reduziert die Hemmschwelle für Erst-Patientinnen messbar. Keine Floskeln — konkret: was wird gemacht, wie lange dauert es, was braucht man mitbringen.' },
    ],
  },

  // §8 CREDIBILITY
  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Sage · Anti-Scham" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Dieses Fachgebiet-Strategiepapier (40 Seiten) ist das Fundament. Für jede Ordination erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  // §9 ANTI-MUSTER
  antiMuster: {
    title: 'Was auf vielen Gynäkologie-Websites stört — und was nicht funktioniert',
    items: [
      'Rosa Schleifen, Schwangerschafts-Bauch-Stockfotos, Schmetterlinge — klischeeverstärkend und altmodisch.',
      'Leistungen als ICD-Liste („Kolposkopie, Hysteroskopie, HPV-Impfung") — niemand sucht so.',
      'Schwangerschaft als Unterpunkt bei „Leistungen" — obwohl es der emotionale Kern des Faches ist.',
      '„Intimbereich"-Wortwolken — stigmatisieren statt entkrampfen.',
      'Fehlender Erst-Termin-Absatz — obwohl 18- bis 21-Jährige genau das googeln.',
      'Kein Hinweis auf Lebensphasen — obwohl die Patient:innen in Lebensphasen denken.',
      'Nur Behandler-Porträt, kein Raum-Eindruck — Patient:innen wollen den Ort sehen, an den sie kommen.',
    ],
  },

  // §10 DESIGN-RICHTUNG
  designRichtung: {
    title: 'Ruhig, hell, lebensnah — nicht romantisiert',
    text: 'Warme, leicht gedeckte Erdtöne — Sand, Petrol, Olivgrün. Keine rosa-weiß-pastell-Spektren. Typografie mit Luft, Zeilenabstand großzügig. Bildsprache: helle Ordinationsräume mit Tageslicht, Gewächse, neutrale Ruhe. Keine lachenden Paare, keine Ultraschallbild-Ausschnitte, keine Bauch-halten-Posen. Animation minimal — vor allem auf Schwangerschafts- und Menopause-Seiten darf nichts stören.',
  },

  // §11 NEUN BLÖCKE
  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Gynäkologie-Website funktionieren',
    items: [
      { nr: 1, title: '„Ihr erster Termin bei uns"', text: 'Der erste Absatz nach Hero. Konkret: was wird gemacht, wie lange dauert es, was müssen Sie mitbringen, wer ist dabei. Senkt die Hemmschwelle für Erst-Patientinnen.' },
      { nr: 2, title: 'Lebensphasen-Navigation', text: '„Erste Gyn-Visite" · „Verhütung + Zyklus" · „Kinderwunsch" · „Schwangerschaft" · „Menopause + danach" · „Vorsorge". Patient:innen finden sich nach Lebensphase zurecht, nicht nach Fach-Nomenklatur.' },
      { nr: 3, title: 'Schwangerschaftsbetreuung — eigene Säule', text: 'Mutter-Kind-Pass, Ultraschall-Termine, pränatale Diagnostik-Optionen, Wehen-Beratung. Das emotionale Herz vieler Praxen — und der Langzeit-Bindungs-Hebel.' },
      { nr: 4, title: 'Kinderwunsch — behutsam', text: 'Erste Abklärung ohne sofortigen IVF-Trichter. Wann ist Reproduktionsmedizin sinnvoll, wann reicht Zyklus-Monitoring, was gehört zur Erstuntersuchung.' },
      { nr: 5, title: 'Menopause-Beratung — differenziert', text: 'Hormon-Ersatz pro/contra, pflanzliche Alternativen, Lebensstil-Begleitung, Beckenboden-Thema. Keine Schnell-Rezept-Rhetorik.' },
      { nr: 6, title: 'Krebs-Vorsorge transparent', text: 'PAP-Abstrich, HPV-Test, Mammographie-Empfehlung, Hautkrebs-Screening bei gynäkologischen Ordinationen mit Zusatz-Fach. Klare Info, was wie oft wann.' },
      { nr: 7, title: 'Unausgesprochene Themen benennen', text: 'Inkontinenz, Libido, Scheidentrockenheit, wiederkehrende Blasenentzündungen. Ein eigener ruhiger Absatz pro Thema — Patient:innen trauen sich zu sprechen, wenn es auf der Website schon da war.' },
      { nr: 8, title: 'Team + Ordinations-Raum', text: 'Echte Bilder — Ärztin, Hebamme, Assistenz. Namen, kurze Sätze. Raum zeigen, damit Patient:innen wissen, wohin sie kommen.' },
      { nr: 9, title: 'Kasse oder Wahl? — klar gesagt', text: 'Wenn Wahlärztin: explizit. Welche Teilerstattung gibt es von der ÖGK/SVS/BVAEB? Beispiel-Rechnung pro typischem Termin.' },
    ],
  },

  // §11b Angehörigen-Pfad
  angehoerigenPfad: {
    active: true,
    title: 'Für Partner, Väter und Mütter',
    intro: 'Schwangerschaft und Kinderwunsch sind selten nur eine Angelegenheit einer Person. Partner und Mütter googeln oft mit. Die Website sollte beide mitlesen lassen — ohne sie zu bevormunden.',
    fragen: [
      'Wie begleite ich meine Partnerin bei der ersten Schwangerschaft?',
      'Bei welchen Terminen kann ich mitkommen?',
      'Was erwartet meine Tochter beim ersten Gynäkologie-Termin?',
    ],
    text: 'Ein eigener kurzer Abschnitt signalisiert: auch Partner, Väter und Mütter sind willkommen. Das senkt die Hürde nicht für die Patient:in selbst — aber für das Umfeld, das sie begleiten will.',
    ctaLabel: 'Termin-Begleitung anfragen',
  },

  typischeSuchen: [
    'gynäkologin wien wahlarzt empfehlung',
    'frauenarzt wien erster termin pille',
    'schwangerschaftsbetreuung wien wahlarzt einfühlsam',
    'gynäkologin wien kinderwunsch abklärung',
    'menopause beratung wien hormonersatz pflanzlich',
    'gynäkologin wien inkontinenz urogynäkologie',
    'krebsvorsorge gynäkologie wien jährlich',
    'gynäkologin 1030 wien',
  ],

  wasWirBauen: {
    title: 'Was wir für Gynäkologie-Ordinationen bauen',
    items: [
      'Hero + „Ihr erster Termin" als ersten Inhalt, nicht Leistungsliste',
      'Lebensphasen-Navigation mit 6 klaren Säulen',
      'Schwangerschaftsbetreuung als emotionale Hauptstraße',
      'Menopause + unausgesprochene Themen explizit benannt',
      'Partner- und Angehörigen-Absatz (Mutter, Vater bei Tochter-Erst-Termin)',
      'Vorsorge transparent — was wie oft wann',
      'Team + Räumlichkeiten in echten Bildern (keine Stockfotos)',
      'Kasse oder Wahl eindeutig geklärt, inkl. Beispiel-Rechnung',
      'Mehrsprachiger Info-Layer (Deutsch, Englisch, Türkisch, Serbisch)',
    ],
    contentImage: '/fachgebiete/gynaekologie-content.jpg',
  },

  faq: [
    { q: 'Wir sind Wahlordination — passt das?', a: 'Gerade dann. Wahl-Ordinationen brauchen eine Website, die Teilerstattung erklärt, Beispiel-Rechnungen pro Termin zeigt und den Mehrwert gegenüber Kassen-Ordinationen ehrlich benennt — ohne Verkaufsdruck.' },
    { q: 'Schwangerschaftsbetreuung ist ein Schwerpunkt — wie heben wir das hervor?', a: 'Als eigene Säule in der Lebensphasen-Navigation und als eigene Unterseite mit Ablauf, Ultraschall-Rhythmus, Geburts-Vorbereitung und Partner-Informationen. Das emotionalisiert, ohne kitschig zu werden.' },
    { q: 'Wir bieten integrative / TCM-Ansätze — ist das eine Hürde?', a: 'Im Gegenteil — ein klares Alleinstellungsmerkmal. Wir benennen es ohne Esoterik-Ton: welche Methoden, welcher Anwendungsbereich, welche Grenzen. Das spricht genau die Patient:innen an, die danach suchen.' },
    { q: 'Wir haben einen Kinderwunsch-Schwerpunkt, aber nicht die IVF selbst — geht das?', a: 'Natürlich. Die Unterseite erklärt die Abklärungs-Phase (Zyklus-Monitoring, Hormonstatus, einfache Diagnostik) und wann eine Überweisung in die Reproduktionsmedizin sinnvoll wird. Patient:innen schätzen diese Behutsamkeit sehr.' },
    { q: 'Wie gehen wir mit „peinlichen“ Themen um (Inkontinenz, Libido)?', a: 'Wir benennen sie direkt, in ruhigem Ton, als eigene Absätze. Kein Versteck, keine Umschreibungen. Das signalisiert: auch das gehört hierher. Patient:innen kommen deswegen an — nicht obwohl.' },
    { q: 'Bilder: Schwangerschaft ja/nein, Paare ja/nein?', a: 'Sparsam. Keine Bauch-halten-Klischee-Posen, keine lachenden Paare im Ultraschallzimmer. Wir setzen auf Ordinations-Räume, Tageslicht, Pflanzen, Alltagsdetails. Das wirkt authentisch, nicht inszeniert.' },
  ],

  naechsterSchritt: {
    title: 'Der nächste Schritt',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, unverbindlich. Wir klären, was Ihre Ordination konkret braucht — ehrlich.',
    cta: { href: '/#kontakt', label: 'Erstgespräch vereinbaren' },
  },
}
