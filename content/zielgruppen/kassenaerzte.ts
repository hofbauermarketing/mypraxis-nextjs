import type { ZielgruppeContent } from '@/lib/content-types'

export const kassenaerzte: ZielgruppeContent = {
  slug: 'kassenaerzte',
  name: 'Kassenärzt:innen',
  nameShort: 'Kassenarzt',

  hero: {
    pille: 'Für wen · Kassenärzt:innen',
    h1: 'Websites für Kassenärzt:innen — Entlastung, nicht Akquise.',
    sub: 'Hohe Patient:innen-Frequenz, wenig Zeit pro Termin, breit gemischtes Einzugsgebiet. Ihre Website ist kein Akquise-Werkzeug — sie ist ein Entlastungs-Tool: vorab erklären, Rezepte bestellen, Impftermine buchen, mehrsprachige Info. Damit Ihre Zeit in der Ordination bei den Patient:innen bleibt.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
    image: '/zielgruppen/kassen-hero.jpg',
  },

  backgrounds: {
    szene: '/zielgruppen/kassen-bg-buro.jpg',
    siebenSchritte: '/zielgruppen/kassen-bg-buro.jpg',
    credibility: '/zielgruppen/kassen-bg-buro.jpg',
  },

  brauchen: {
    title: 'Was Kassenärzt:innen an einer Website wirklich brauchen',
    items: [
      'Sprechzeiten prominent · groß sichtbar · Wochen-Übersicht statt verstreute Infos',
      'Rezept-Bestellung online für Dauerpatient:innen',
      'Krankschreibungs-Ablauf klar erklärt · „was mitbringen"-Liste',
      'Mehrsprachige Info-Bereiche (Deutsch, Englisch, Türkisch, Arabisch, Serbisch)',
      'Impfservice-Übersicht (Grundimmunisierung, Reise, Grippe)',
      'Barrierefreiheit ernst gemeint · große Schrift, hoher Kontrast, keine Formular-Zwänge',
    ],
  },

  szene: {
    title: 'Ein Montagmorgen · zwei Welten auf derselben Nummer',
    person1: {
      name: 'Dr. Peter Kolar',
      rolle: '52 · Kassenarzt Allgemeinmedizin · Wien-Floridsdorf · seit 19 Jahren',
      image: '/zielgruppen/kassen-szene-arzt.jpg',
      text: 'Sechzig Patient:innen pro Tag, sechs Minuten pro Termin, Familien über drei Generationen. Er will keine Premium-Website — er will ein Werkzeug, das das Telefon entlastet, Rezepte digital macht und die ältere Klientel nicht ausschließt.',
      zitat: 'Meine Website soll niemanden beeindrucken. Sie soll mich morgens entlasten.',
      zitatAttr: '— Dr. Kolar im Erstgespräch mit uns',
    },
    verbindung: 'Zur selben Stunde, zwei Stockwerke höher',
    person2: {
      name: 'Frau Elisabeth Novak',
      rolle: '78 · Pensionistin · Bluthochdruck + Diabetes · seit 22 Jahren in der Ordination',
      image: '/zielgruppen/kassen-szene-patient.jpg',
      text: 'Ihre Tochter Claudia hilft ihr. Sie steht vor dem Handy und sucht die Sprechzeiten. Die Schriftgröße auf der Ordinationsseite ist klein, der Menüpunkt versteckt. Am Ende ruft Elisabeth doch an — und blockiert damit die Leitung fünf Minuten für die Tochter-Frage, die per Website in 15 Sekunden beantwortet wäre.',
      zitat: 'hausarzt 1210 wien sprechzeiten heute',
      zitatAttr: '— Claudia sucht am Handy, 07:12 Uhr',
    },
    abschluss: 'Zwischen Dr. Kolar und Frau Novak liegt keine fachliche Lücke. Nur eine Lücke in der Erreichbarkeit — online. Genau dort setzen wir an, ohne dass der Ordinationstelefon still wird.',
    disclaimer: 'Dr. Peter Kolar und Frau Elisabeth Novak sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  warumWir: {
    title: 'Warum mypraxis.at statt einer normalen Webagentur',
    points: [
      { title: 'Spezialisiert auf Ärzt:innen', text: 'Keine Restaurant- oder Handwerker-Referenzen. Nur Arzt-Websites. Wir kennen die ÖÄK-Werberichtlinien, die BFSG-Pflicht, die Kassen-Logik.' },
      { title: 'Rechtssicher ab Start', text: 'BFSG, DSGVO, ÖÄK-Werberecht — Standard, nicht Aufpreis. Sie bekommen eine Website, die rechtlich nicht angreifbar ist.' },
      { title: 'Mehrsprachigkeit inklusive', text: 'Das Accessibility-Widget spricht 10 Sprachen. Türkisch, Arabisch, Serbisch, Kroatisch, Russisch — ohne DeepL-Abo, ohne laufende Kosten.' },
    ],
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Kassenärzt:innen-Websites sind Entlastungs-Werkzeuge. Bevor wir bauen, klären wir, was der Ordinations-Alltag konkret braucht.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Sprach-Mix der Patientschaft, Haupt-Pain-Points der Ordination (Telefon-Überlastung? Rezept-Flut? Impf-Saison?). Im telefonischen Erstgespräch eruieren wir gemeinsam die konkreten Engpässe. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Caregiver + Everyman · Anti-Elitismus. Bodenständig, warm, nachbarschaftlich. Keine Premium-Inszenierung, kein VIP-Ton.' },
      { num: 3, title: 'Vier bis fünf Patient:innen-Typen', text: 'Die technisch-distanzierte Seniorin, der Angestellte mit Krankenschein-Bedarf, die mehrsprachige Familienmutter, der Dauermedikations-Patient — plus optional die alternativ-medizinisch-interessierte Patient:in.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: vom Problem (Website überfordert ältere Patient:innen) bis zum Beweis (barrierefreie Entlastungs-Website reduziert Telefon-Last messbar).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Elisabeth braucht „Telefonnummer groß". Franz braucht „Krankenschein-Ablauf klar". Ayşe braucht „türkische Info". Matrix legt fest, was wo steht.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Große Schrift (min. 16 px Body, H2 mind. 28 px), hoher Kontrast, klare Navigation. Warme Erdtöne, kein Gold, keine aggressiven Akzente.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Sprechzeiten + Kontakt an erster Stelle. Rezept-Bestellung, Krankmeldungs-Ablauf, Impfservice, mehrsprachige Info als gleichwertige Pfade.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Elisabeth', vollerName: 'Frau Elisabeth Novak', alter: 78, akzent: 'terracotta',
      image: '/zielgruppen/personas/elisabeth.jpg',
      kategorie: 'Senior:in · Bluthochdruck + Diabetes · technisch kaum affin',
      kontext: 'Pensionistin, lebt allein in einer Wiener Gemeindebau-Wohnung. Kommt seit 22 Jahren in dieselbe Ordination. Ruft an, wenn die Sprechstunden-Info fehlt — oder bittet die Tochter zu googeln. Sie braucht Klarheit, keine Interaktions-Zauberei.',
      stilleFrage: 'Wie komme ich ohne Internet-Wissen trotzdem weiter?',
      suchanfrage: 'hausarzt wien 1210 sprechzeiten heute',
      websiteBedarf: 'Telefonnummer groß im Hero. Sprechzeiten als Wochenübersicht. Schriftgröße ab 16 px, Kontrast hoch. Keine Formular-Zwänge. „Was mitbringen"-Liste.',
    },
    {
      name: 'Franz', vollerName: 'Herr Franz Hofer', alter: 42, akzent: 'graublau',
      image: '/zielgruppen/personas/franz-2.jpg',
      kategorie: 'Angestellter · braucht Krankenstand · wenig Zeit',
      kontext: 'Lagerarbeiter bei einem Wiener Logistikunternehmen. Rückenbeschwerden, gelegentlich auch Magen-Probleme. Wenn etwas ist, braucht er Montag um 7:15 einen schnellen Termin — ohne drei Stunden Wartezimmer. Keine Lust auf Rundum-Beratung, nur Pragmatismus.',
      stilleFrage: 'Bekomme ich den Krankenschein ohne halben Tag Wartezeit?',
      suchanfrage: 'hausarzt wien 1210 schnell krankmeldung montag',
      websiteBedarf: 'Online-Terminbuchung mit „Akut"-Slot. Krankschreibungs-Ablauf auf einer eigenen Seite erklärt. Wartezeit-Status wenn möglich. Kein Erklärbär-Ton.',
    },
    {
      name: 'Ayşe', vollerName: 'Frau Ayşe Yıldız', alter: 35, akzent: 'gruen',
      image: '/zielgruppen/personas/ayse.jpg',
      kategorie: 'Familien-Mutter · mehrsprachig · drei Kinder',
      kontext: 'Kam mit zehn aus Istanbul nach Wien, drei Kinder im Schulalter. Deutsch für den Alltag reicht, bei medizinischen Themen aber oft unsicher — sie sagt „passt schon", wenn sie eigentlich „ich verstehe nicht" meint. Sucht eine Ordination, die das merkt.',
      stilleFrage: 'Verstehe ich dort, was mir gesagt wird — und verstehen sie mich?',
      suchanfrage: 'hausarzt wien 1100 türkisch arabisch sprechen',
      websiteBedarf: 'Mehrsprachige Info-Bereiche. Impfplan visuell (nicht nur Text). „Was mitbringen"-Übersicht mit Symbolen. Kinder-Sprechzeiten eigener Block. Das Accessibility-Widget muss sichtbar sein.',
    },
    {
      name: 'Manfred', vollerName: 'Herr Manfred Gruber', alter: 58, akzent: 'blau',
      image: '/zielgruppen/personas/manfred.jpg',
      kategorie: 'Dauermedikation · Blutabnahme-Routine · pragmatisch',
      kontext: 'Angestellter in der Gebietskrankenkasse, Diabetes Typ 2 + Bluthochdruck + Cholesterin. Quartals-Rezepte, halbjährliche Blutabnahme, jährlicher Gesundheits-Check. Effizient, wertet Zeit hoch. Er schätzt eine digitalisierte Ordination — ohne Technik-Überforderung.',
      stilleFrage: 'Kann ich das Routine-Rezept bekommen, ohne persönlich zu erscheinen?',
      suchanfrage: 'hausarzt rezept online bestellen wien',
      websiteBedarf: 'Rezept-Bestellformular online (auch PDF-Scan). Blutabnahme-Termine buchbar. Befund-Abholung erklärt. Erinnerungs-System für Gesundheits-Check.',
    },
    {
      name: 'Regina', vollerName: 'Frau Regina Berger', alter: 45, akzent: 'sand',
      image: '/zielgruppen/personas/regina.jpg',
      kategorie: 'Offen für komplementäre Medizin · pragmatisch',
      kontext: 'Yoga-Lehrerin, zwei erwachsene Töchter. Kassenversichert, aber offen für pflanzliche Therapien, Akupunktur-Ergänzung, Homöopathie-Zusatzoptionen. Sucht keine Alternativmedizin-Ordination — sie sucht Hausärzt:in, die beide Sichtweisen zusammen denkt.',
      stilleFrage: 'Werde ich als „Öko-Spleen" abgetan oder wird mein Ansatz mitgedacht?',
      suchanfrage: 'hausarzt wien ganzheitlich offen naturheilkunde',
      websiteBedarf: 'Ein dezenter Hinweis, dass die Ordination komplementäre Optionen mitdenkt — ohne Haupt-Fokus darauf zu legen. Sie sucht Integration, nicht Alternative.',
    },
  ],

  archetyp: {
    triade: 'Caregiver · Everyman · Anti-Elitismus',
    paragraphs: [
      '**Caregiver** trägt die gesamte Kassenordinations-Website. Nachbarschaftlich, warm, über Jahrzehnte verlässlich. Familien über Generationen, keine schnelle Beziehung. Die Website spiegelt das: ruhig, klar, niemanden in Eile.',
      '**Everyman** ist die zweite Säule: bodenständig, Mittelschicht-nah, nie elitär. Das Gegenteil von VIP-Medizin. Wer im Gemeindebau wohnt, soll sich auf dieser Website ebenso wiederfinden wie wer im Einfamilienhaus wohnt.',
      '**Anti-Elitismus** explizit: kein Gold, kein Marmor-Effekt, keine Concierge-Medicine-Rhetorik. Das passt weder zur Versicherungs-Realität noch zum Patient:innen-Mix. Die Website darf nicht nach „Luxus-Arzt" aussehen.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Die Website einer Kassenordination ist ein Entlastungs-Werkzeug.', begruendung: 'Nicht Akquise, nicht Positionierung. Sondern: Telefon entlasten, Rezept-Wege digitalisieren, Impftermine buchbar machen. Wer das vergisst, baut an der Realität vorbei.' },
      { satz: 'Barrierefreiheit ist in Kassenordinationen Alltagskompetenz — nicht Pflicht-Erfüllung.', begruendung: 'Die Hälfte der Patientschaft ist über 60. Große Schrift, hoher Kontrast, klare Navigation sind keine Behindertenhilfe — sie sind Standard-Service.' },
      { satz: 'Mehrsprachigkeit ist nicht Höflichkeit — sie ist Medizin.', begruendung: 'Wer seine Medikamente nicht versteht, nimmt sie nicht richtig. Eine Ordination, die in drei Sprachen kommuniziert, reduziert Compliance-Probleme messbar.' },
      { satz: 'Rezept-Bestellung online spart beiden Seiten Zeit.', begruendung: 'Manfred spart seinen halben Vormittag, die Rezeption spart den Termin-Slot. Die Website wird zum Produktivitäts-Tool, nicht zum Marketing-Kanal.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Caregiver + Everyman · Anti-Elitismus" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Dieses Zielgruppen-Strategiepapier ist das Fundament. Für jede Ordination erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Kassenarzt-Websites sehen — und was nicht funktioniert',
    items: [
      'Hero-Claim wie „Moderne Medizin auf höchstem Niveau" — klingt wie Versicherungsagentur, passt nicht zu Kassen-Realität.',
      'Kleine Schrift (unter 15 px) — schließt ein Drittel der Patientschaft aus.',
      'Sprechzeiten im Footer statt im Hero — die häufigste Such-Frage, verfehlt.',
      'Nur Deutsch, obwohl Bezirk zu 40 % fremdsprachig ist.',
      'Kein Rezept-Bestellformular — hohe Telefon-Last, obwohl technisch lösbar.',
      'Impfplan fehlt oder versteckt — obwohl genau das ein Saison-Suchbegriff ist.',
      'Premium-Look (dunkles Blau, Gold-Akzente) — verfehlt die Everyman-Zielgruppe komplett.',
    ],
  },

  designRichtung: {
    title: 'Klar, groß, warm — nicht inszeniert',
    text: 'Schriftgröße Body ab 16 px, H1/H2 mindestens 28/24 px. Kontraste WCAG AA+. Farbwelt: warme Erdtöne mit dezentem Navy, keine dunklen Sektionen im Hauptfluss. Navigation flach, maximal zwei Ebenen. Bildsprache: echte Ordinations-Momente (Wartezimmer mit Tageslicht, Hände am Rezeptblock, Sprechzimmer-Interieur), keine Stock-Models mit Stethoskop. Animation minimal.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Kassenordinations-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Sprechzeiten + Telefon', text: 'Die zwei wichtigsten Informationen ohne Scrollen erreichbar. Keine Marketing-Phrase im Hero — nur das, was sofort gebraucht wird.' },
      { nr: 2, title: 'Sprechzeiten-Kalender', text: 'Wochenübersicht visuell, mit Abweichungen (Schulferien, Urlaub). Keine Listen von „Mo-Fr 8-13", die niemand liest.' },
      { nr: 3, title: 'Rezept-Bestellung online', text: 'Einfaches Formular oder Mail-Link für Dauerpatient:innen. Reduziert Telefon-Last sofort messbar.' },
      { nr: 4, title: 'Krankschreibungs-Prozedere', text: 'Wann kann ich anrufen, wann muss ich kommen, was mitbringen? Klar erklärt, ohne Bürokraten-Sprech.' },
      { nr: 5, title: 'Mehrsprachiger Info-Bereich', text: 'Über das Accessibility-Widget standardmäßig verfügbar. Zusätzlich: wichtige Infos (Impfplan, Krankmeldung) auch als separate Übersetzung.' },
      { nr: 6, title: 'Impfservice', text: 'Übersicht (Grundimmunisierung, Reiseimpfungen, Grippe) mit Buchungs-Option. Saisonale Aktualisierung.' },
      { nr: 7, title: 'Blutabnahme + Labor-Koordination', text: 'Wann ist Blutabnahme, nüchtern? Was mitbringen? Wann Befund? Transparent aufgelöst.' },
      { nr: 8, title: 'Anfahrt + Parkplatz', text: 'Google-Maps-Einbindung, ÖPNV-Haltestellen, Parkplatz-Hinweise. Wichtig besonders für ältere Patient:innen.' },
      { nr: 9, title: 'FAQ in einfacher Sprache', text: 'Die zehn häufigsten Fragen, kurz und konkret beantwortet. Keine Fachsprache, keine Ausnahmeregeln.' },
    ],
  },

  zeitaufwand: {
    title: 'Ihr Zeitaufwand: 3 bis 4 Stunden gesamt',
    text: 'Erstgespräch (30 Min), Inhalte-Freigabe (1 h), Korrekturrunden (1-2 h), Go-Live-Freigabe (30 Min). Den Rest machen wir.',
    minutes: 210,
  },

  preisRange: {
    title: 'Investition',
    text: 'Qualität statt Pauschalpreis. Jedes Angebot wird maßgeschneidert nach Ihrer Ordination, Ihrem Budget und Ihren Zielen erstellt — und immer persönlich mit Ihnen durchgesprochen. Kein Online-Konfigurator, kein Paket ins Blaue.',
    foerderHint: 'KMU.DIGITAL-Förderung 30 % möglich — wir prüfen das kostenlos mit unserem Förderpartner im Erstgespräch.',
  },

  referenzPlatzhalter: {
    title: 'Referenzen',
    text: 'Erste Referenzen sind in Arbeit — namentliche Nennungen folgen nach schriftlicher Freigabe der jeweiligen Ordination.',
  },

  faq: [
    {
      q: 'Kann ich als Kassenärzt:in überhaupt online werben?',
      a: 'Ja, im Rahmen der ÖÄK-Werberichtlinien. Die Website-Antwort sollte informieren, nicht anpreisen — kein Heilsversprechen, kein Vergleichs-Marketing. Dafür: klare Sachinformation, Patient:innen-Orientierung, rechtssichere Ausdrucksweise.',
    },
    {
      q: 'Wie läuft das mit der Mehrsprachigkeit?',
      a: 'Über das Accessibility-Widget sind 10 Sprachen ab Launch verfügbar: Deutsch, Englisch, Russisch, Türkisch, Arabisch, Rumänisch, Polnisch, Ungarisch, Ukrainisch, Tschechisch. Inhalte werden statisch vorübersetzt — kein DeepL-Abo, keine laufenden Kosten.',
    },
    {
      q: 'Was kostet das Ganze in der Summe?',
      a: 'Wir machen keine Online-Pauschalpreise. Jedes Angebot wird individuell erstellt — nach Ihrer Ordination, Ihrem Budget und Ihren Zielen — und immer persönlich mit Ihnen besprochen. Das ist fairer und führt zu einer Lösung, die wirklich passt. Details im kostenlosen Erstgespräch, inklusive Förder-Check über KMU.DIGITAL.',
    },
    {
      q: 'Ich habe schon eine Website — muss ich die komplett neu machen?',
      a: 'In den meisten Fällen ja. Wenn Ihre Seite älter als 5 Jahre ist, ist sie technisch zu alt für BFSG und KI-Sichtbarkeit. Ein Relaunch ist meistens günstiger und schneller als der Versuch, eine alte Seite zu flicken.',
    },
    {
      q: 'Wie gehe ich auf komplementäre Medizin ein, wenn ich das nicht anbiete?',
      a: 'Ein dezenter Satz reicht: „Wir arbeiten mit evidenzbasierter Schulmedizin. Bei komplementären Fragen empfehlen wir Kolleg:innen, die das schwerpunktmäßig anbieten." Das respektiert Regina-Typ-Patient:innen, ohne die Ordination aufzubauen, was sie nicht ist.',
    },
    {
      q: 'Lohnt sich eine Website, wenn meine Ordination ohnehin voll ist?',
      a: 'Ja — als Entlastungs-Werkzeug. Eine voll ausgelastete Ordination hat das größte Interesse an Telefon-Entlastung, Rezept-Digitalisierung und klaren Sprechzeiten-Kommunikation. Die Website reduziert Ordinations-Aufwand, nicht nur Neukund:innen-Akquise.',
    },
  ],

  naechsterSchritt: {
    title: 'Der nächste Schritt',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, unverbindlich. Wir klären, was Ihre Ordination konkret entlasten würde — ehrlich.',
    cta: { href: '/#kontakt', label: 'Erstgespräch vereinbaren' },
  },
}
