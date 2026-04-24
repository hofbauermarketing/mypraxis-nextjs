import type { ZielgruppeContent } from '@/lib/content-types'

export const aerztezentren: ZielgruppeContent = {
  slug: 'aerztezentren',
  name: 'Ärztezentren & PVEs',
  nameShort: 'Ärztezentrum',

  hero: {
    pille: 'Für wen · Ärztezentren & PVEs',
    h1: 'Websites für Ärztezentren und Primärversorgungs-Einheiten — ein Auftritt, mehrere Realitäten.',
    sub: 'Ein Zentrum ist keine Ordination, nur größer. Es ist eine andere Art von Organisation — mit Überweiser-Netzwerk, interdisziplinären Reisen von Patient:innen, gemeinsamer Administration und individuellen Schwerpunkten pro Ärzt:in. Ihre Website muss das alles sichtbar machen, ohne zu überfordern. Wir bauen sie auf Basis eines Strategiepapiers für Mehrpersonen-Ordinationen.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
    image: '/zielgruppen/zentrum-hero.jpg',
  },

  backgrounds: {
    szene: '/zielgruppen/zentrum-hero.jpg',
    siebenSchritte: '/zielgruppen/zentrum-bg-foyer.jpg',
    credibility: '/zielgruppen/zentrum-hero.jpg',
  },

  brauchen: {
    title: 'Was Ärztezentren und PVEs an einer Website wirklich brauchen',
    items: [
      'Einzelprofile je Ärzt:in mit eigener Fachgebiet-Positionierung, nicht Team-Kacheln',
      'Zentrale Marke + klare Sub-Navigation: Patient:in schnell zum richtigen Arzt',
      'Schema-Architektur: Zentrum + Ärzt:innen + Leistungen als verknüpfter Graph für KI',
      'Überweiser-Sektion für Kolleg:innen aus dem Umfeld',
      'Mehrsprachigkeit, Online-Terminbuchung je Ärzt:in, zentraler Empfang',
      'Patient:innen-Reisen über mehrere Fachgebiete sichtbar machen',
      'KMU.DIGITAL-Förderung mehrfach abrufbar (pro Ärzt:in ein eigenes KMU)',
    ],
  },

  szene: {
    title: 'Montag 07:45 · drei Realitäten im gleichen Zentrum',
    person1: {
      name: 'Dr. Peter Kainz',
      rolle: '54 · Zentrums-Leitung · Primärversorgungs-Einheit Wien-Simmering · 6 Ärzt:innen + 3 Assistenzberufe',
      image: '/zielgruppen/zentrum-szene-leitung.jpg',
      text: 'Gründete vor vier Jahren mit zwei Kolleg:innen die PVE. Heute 6 Ärzt:innen, Physiotherapie, Hebamme, Ernährungsberatung unter einem Dach. Das Konzept funktioniert — aber die Website erzählt davon kaum etwas. Besucher:innen sehen eine Arzt-Praxis mit vielen Gesichtern, nicht die interdisziplinäre Struktur, die das Zentrum ausmacht.',
      zitat: 'Unsere Patient:innen verstehen den Wert erst, wenn sie da sind. Vorher sehen sie nur eine große Praxis.',
      zitatAttr: '— Dr. Kainz im Erstgespräch mit uns',
    },
    verbindung: 'Zur selben Stunde, im selben Zentrum',
    person2: {
      name: 'Frau Bianca Resch',
      rolle: '51 · Patientin mit Knie-Beschwerden seit 6 Monaten · auf Empfehlung der Hausärztin',
      image: '/zielgruppen/zentrum-szene-patient.jpg',
      text: 'Sie kommt für ihren ersten Termin — eigentlich nur Hausärztin-Überweisung. Was sie nicht weiß: Genau dieses Zentrum könnte ihr komplettes Beschwerde-Management unter einem Dach abbilden — Orthopäde für die Diagnose, Physiotherapie direkt im Haus, bei Bedarf Ernährungsmedizin für Gewichts-Entlastung. Die Website zeigt ihr das nicht. Sie klickt sich zwischen Fachrichtungen durch, versteht aber die Zusammenhänge nicht.',
      zitat: 'orthopäde wien 1110 physiotherapie in einem haus',
      zitatAttr: '— ihre Google-Suche, letzte Woche Mittwoch',
    },
    abschluss: 'Zwischen Dr. Kainz und Frau Resch liegt keine Lücke im Angebot. Nur eine Lücke in der Sichtbarkeit der Zusammenhänge — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Peter Kainz und Frau Bianca Resch sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  warumWir: {
    title: 'Warum mypraxis.at für Ärztezentren und PVEs',
    points: [
      { title: 'Arzt-Profile statt Team-Kachel', text: 'Jede:r Ärzt:in bekommt eine eigene Profilseite mit Fachgebiet-Positionierung — auf Basis unserer 12 Fachgebiet-Strategiepapiere. Ein Hautarzt kommuniziert anders als eine Kardiologin.' },
      { title: 'Fördermittel mehrfach abrufbar', text: 'Jede:r Ärzt:in mit eigener UID = eigenes KMU = eigener Förderantrag. Je nach Zentrumsgröße ergibt das ein relevantes Förderpotenzial über KMU.DIGITAL. Wir begleiten die Antragsstellung mit unserem zertifizierten Förderpartner.' },
      { title: 'Schema-Architektur für KI', text: 'Zentrum + Ärzt:innen + Leistungen als verknüpfter Graph. Suchmaschinen und KI-Systeme verstehen dadurch, wer welche Leistung anbietet und wie die Einheit strukturiert ist.' },
    ],
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Ärztezentren und PVEs scheitern an Websites meistens nicht am Design, sondern an der Architektur. Bevor wir bauen, klären wir:',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Ärzt:innen-Liste mit Fachgebieten und Schwerpunkten, Assistenzberufe, Überweiser-Netzwerk, Bezugs-Kliniken. Im Erstgespräch mit der Leitung eruieren wir Strukturen und Zielbild. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Sage + Ruler + Caregiver · Anti-Chaos. Strukturiert, zuverlässig, einladend. Kein Groß-Klinik-Ton, keine Corporate-Rhetorik — aber klar erkennbare Ordnung.' },
      { num: 3, title: 'Drei Patient:innen-Reisen', text: 'Exemplarische Wege, die Patient:innen durch mehrere Fachgebiete im Zentrum nehmen — plastisch erzählt, nicht als Liste. Das macht den interdisziplinären Mehrwert sichtbar.' },
      { num: 4, title: 'Fachrichtungs-Matrix', text: 'Visuelle Übersicht: welche Fachgebiete sind vertreten, welche assistierenden Berufe, welche Partner im Haus. Patient:innen sehen auf einen Blick: „Passt mein Anliegen hierher?"' },
      { num: 5, title: 'Hook-Typen × Patient:innen-Segmente', text: 'Akut-Patient:in (schnell einen Termin), Chronisch-Patient:in (Behandlungs-Kette über mehrere Fachgebiete), Vorsorge-Orientierte, Überweiser-empfohlene, Mehrsprachige. Jede Gruppe hat andere erste Klicks.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Klar, strukturiert, nicht steril. Warme Erdtöne mit dezentem Navy, klare Typografie, viel Weißraum. Ärzt:innen-Portraits einheitlich, aber individuell. Bildsprache der Räume authentisch.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Hero = Positionierung, nicht Willkommens-Gruß. Fachrichtungs-Matrix als Haupt-Navigation. Ärzt:innen-Profile einzeln aufrufbar. Überweiser-Sektion separat. Zentraler Termin-Flow mit ärztespezifischer Weiterleitung.' },
    ],
  },

  patientReisen: {
    title: 'Drei typische Patient:innen-Reisen durch ein Ärztezentrum',
    intro: 'Ein Ärztezentrum ist mehr als die Summe seiner Ärzt:innen. Der Mehrwert entsteht durch die Verbindung zwischen ihnen. Drei plastische Beispiele, wie Patient:innen durch das Haus gehen.',
    items: [
      {
        nr: 1,
        title: 'Die Knie-Geschichte',
        patient: 'Frau Bianca Resch, 51 · Knie-Beschwerden seit 6 Monaten',
        tage: [
          { tag: 'Tag 1', fachrichtung: 'Hausärztin', aktion: 'Erstvorstellung, Anamnese, Überweisung Orthopädie' },
          { tag: 'Tag 3', fachrichtung: 'Orthopädie', aktion: 'Klinische Untersuchung, MRT veranlasst' },
          { tag: 'Tag 7', fachrichtung: 'Radiologie-Partner', aktion: 'MRT extern, Befund kommt direkt ins Zentrum' },
          { tag: 'Tag 10', fachrichtung: 'Orthopädie + Physiotherapie', aktion: 'Befundbesprechung, konservativer Therapie-Plan, Physio-Termine direkt im Haus' },
          { tag: 'Woche 6', fachrichtung: 'Ernährungsberatung', aktion: 'Gewichts-Entlastungs-Konzept parallel' },
        ],
        vorteil: 'Fünf Schritte, ein Haus, kein Ping-Pong zwischen Ordinationen. Die Website macht diesen Weg sichtbar — damit Patient:innen wie Frau Resch den Mehrwert schon vor dem Erstanruf verstehen.',
      },
      {
        nr: 2,
        title: 'Die Familien-Vorsorge',
        patient: 'Familie Özgür, 38+35+7+4 · jährliche Vorsorge',
        tage: [
          { tag: 'Tag 1 Vormittag', fachrichtung: 'Hausärztin', aktion: 'Erwachsenen-Vorsorge Mutter + Vater parallel' },
          { tag: 'Tag 1 Nachmittag', fachrichtung: 'Kinderärztin', aktion: 'Mutter-Kind-Pass-Untersuchung beider Kinder' },
          { tag: 'Tag 3', fachrichtung: 'Impf-Service', aktion: 'Auffrisch-Impfungen für alle' },
          { tag: 'Tag 5', fachrichtung: 'Ernährungsberatung', aktion: 'Familien-Ernährungs-Check (optional)' },
        ],
        vorteil: 'Eine Familie, ein Haus, ein Tag. Mehrsprachige Ansprache vorhanden (Deutsch + Türkisch). Die Website zeigt dieses Szenario explizit — damit Familien wie die Özgürs gezielt anrufen.',
      },
      {
        nr: 3,
        title: 'Die Akut-Kette',
        patient: 'Herr Walter Stadler, 64 · plötzliches Vorhofflimmern',
        tage: [
          { tag: 'Tag 1 früh', fachrichtung: 'Hausärztin', aktion: 'Akut-Vorstellung, EKG auffällig, Sofort-Weiterleitung' },
          { tag: 'Tag 1 Mittag', fachrichtung: 'Kardiologe im Haus', aktion: 'Langzeit-EKG angelegt, Labor-Kontrolle' },
          { tag: 'Tag 3', fachrichtung: 'Kardiologie', aktion: 'Auswertung, Therapie-Start, Überweisung Krankenhaus Rhythmus-Check' },
          { tag: 'Woche 3', fachrichtung: 'Hausärztin', aktion: 'Nachkontrolle, Medikations-Check, Netzwerk aktiviert' },
        ],
        vorteil: 'Akut-Kette mit minimaler Verzögerung — weil Kardiologie und Hausärztin im gleichen Haus arbeiten. Die Website kommuniziert diese Kapazität ohne dramatisierende Rhetorik.',
      },
    ],
  },

  fachrichtungsMatrix: {
    title: 'Eine Fachrichtungs-Matrix macht die Struktur sichtbar',
    intro: 'Welche Fachgebiete sind im Zentrum, welche assistierenden Berufe, welche Partner im Netzwerk. Ein Grid statt einer Liste — Patient:innen erfassen die Struktur in drei Sekunden.',
    fachrichtungen: [
      { name: 'Allgemeinmedizin', icon: '◉', partner: ['Hausärzt:in Akut-Slot', 'Chronisch-Betreuung'] },
      { name: 'Orthopädie', icon: '◉', partner: ['Physiotherapie im Haus', 'Radiologie-Netzwerk'] },
      { name: 'Kardiologie', icon: '◉', partner: ['Langzeit-EKG', 'KH Rhythmus-Check Partner'] },
      { name: 'Kinderheilkunde', icon: '◉', partner: ['Mutter-Kind-Pass', 'Impf-Service'] },
      { name: 'Psychotherapie', icon: '◉', partner: ['Klinische Psychologie', 'Psychiatrie-Netzwerk'] },
      { name: 'Ernährungsmedizin', icon: '◐', partner: ['Assistenz · nicht Ärzt:in', 'Koordiniert mit Hausarzt'] },
      { name: 'Physiotherapie', icon: '◐', partner: ['Assistenz · nicht Ärzt:in', 'Akut + Rehabilitation'] },
      { name: 'Hebamme', icon: '◐', partner: ['Assistenz · Schwangerschafts-Begleitung'] },
    ],
    fussnote: '◉ = Ärzt:in · ◐ = Assistenzberuf · Partner-Netzwerk (KH, Radiologie, Labor) ist je Zentrum individuell',
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  // Optional: wenige Personas reichen — Patient:innen-Reisen + Fachrichtungs-Matrix tragen das Zentrum-Framing
  personas: [],

  archetyp: {
    triade: 'Sage · Ruler · Caregiver · Anti-Chaos',
    paragraphs: [
      '**Sage** ist die erste Säule: Fachlich strukturiert, Zusammenhänge sichtbar, kompetent in Breite und Tiefe. Ein Zentrum ist nicht eine Ordination, sondern ein Netzwerk — **Sage** trägt diese Ordnung.',
      '**Ruler** ist die zweite Säule: Verantwortungsvoll, strukturiert, verlässlich. Das Zentrum bewahrt Ordnung, koordiniert Abläufe, vermeidet Ping-Pong zwischen Fachgebieten. **Ruler** ist nicht autoritär — sondern organisiert.',
      '**Caregiver** bleibt als dritte Säule: Versorgend, einladend, persönlich. Trotz Größe darf nichts klinisch-anonym wirken. Jede:r einzelne Patient:in soll spüren: „Hier gibt es einen Menschen, der mich kennt."',
      '**Anti-Chaos** explizit: keine Team-Wall-of-Fame mit zehn austauschbaren Gesichtern, keine generische „Wir sind ein Zentrum"-Rhetorik. Struktur muss erkennbar sein, ohne kalt zu wirken.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Ein Ärztezentrum ist kein größerer Hausarzt.', begruendung: 'Der eigentliche Wert liegt in den Verbindungen zwischen Fachgebieten. Die Website muss diese Verbindungen sichtbar machen — sonst wirkt das Zentrum wie eine Gruppenpraxis ohne Konzept.' },
      { satz: 'Patient:innen-Reisen überzeugen mehr als Leistungslisten.', begruendung: 'Wer liest schon eine Liste von 30 Leistungen? Aber eine Geschichte in 5 Schritten, wie eine Knie-Patientin durch das Haus geht — das bleibt hängen und macht den Mehrwert fassbar.' },
      { satz: 'Einzelprofile je Ärzt:in sind Pflicht, nicht Kür.', begruendung: 'Ein Team-Grid mit Namen unter Portraits funktioniert nicht. Jede:r Ärzt:in braucht eine eigene Profil-Seite mit Fachgebiet-Positionierung — sonst verliert das Zentrum im Ranking gegen Einzelordinationen.' },
      { satz: 'Überweiser brauchen einen eigenen Pfad.', begruendung: 'Kolleg:innen, die Patient:innen überweisen, sind ein oft übersehener Traffic-Kanal. Eine eigene kurze Sektion „Für Überweiser:innen" mit klaren Kommunikations-Wegen macht den Unterschied.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Sage + Ruler + Caregiver · Anti-Chaos" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Reisen folgen Methoden aus dem Service-Design (Journey Mapping). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Für Ihr Zentrum erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets, Ihrer Fachrichtungs-Matrix und eines Erstgesprächs mit der Leitung. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was auf vielen Zentrums-Websites stört — und was nicht funktioniert',
    items: [
      'Team-Grid mit 10 Gesichtern und Namen, aber ohne Profile — Patient:innen klicken nicht durch.',
      'Zentrale Leistungsliste statt Fachrichtungs-Matrix — unübersichtlich, nicht scanbar.',
      '„Willkommen in unserem Zentrum" als Hero — kein Inhalt, kein Positionierungs-Signal.',
      'Kein Überweiser-Bereich — obwohl Überweisungen signifikanter Traffic-Anteil sind.',
      'Einheitliches Stockfoto-Portrait für alle Ärzt:innen — wirkt maximal corporate, minimal persönlich.',
      'Kein Schema-Markup — KI-Systeme erkennen das Zentrum nicht als Organisation, sondern als Einzelpraxis.',
      'Online-Terminbuchung ohne Arzt-Spezifität — Patient:innen landen beim falschen Ärzt:in.',
    ],
  },

  designRichtung: {
    title: 'Strukturiert, klar, nicht corporate',
    text: 'Warme Erdtöne mit dezentem Navy, viel Weißraum, klare Typografie mit deutlicher Hierarchie. Arzt-Portraits in einheitlicher Bild-Ästhetik (gleiches Licht, Hintergrund, Bildsprache), aber individuell. Fachrichtungs-Matrix als tragendes visuelles Element. Animation minimal, keine corporate Showcase-Anmutung.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Zentrums-Website funktionieren',
    items: [
      { nr: 1, title: 'Hero mit Positionierung', text: 'Nicht „Willkommen", sondern eine klare Aussage: „Ihr interdisziplinäres Ärztezentrum in Wien-Simmering. 6 Ärzt:innen, 3 Assistenzberufe, ein Haus."' },
      { nr: 2, title: 'Fachrichtungs-Matrix', text: 'Als tragendes visuelles Element. Patient:innen erfassen in 3 Sekunden: welche Fachgebiete, welche Assistenzberufe, welche Partner.' },
      { nr: 3, title: 'Patient:innen-Reisen', text: '3 plastische Beispiele, wie Patient:innen durch das Haus gehen. Akut-Kette, Chronisch-Management, Familien-Vorsorge. Geschichte statt Liste.' },
      { nr: 4, title: 'Ärzt:innen-Profile einzeln', text: 'Je Ärzt:in eine eigene Seite mit Fachgebiet-Positionierung, Schwerpunkt, Arbeitsweise. Auf Basis der 12 Fachgebiet-Strategiepapiere.' },
      { nr: 5, title: 'Überweiser-Bereich', text: 'Eigene Sektion für Kolleg:innen aus dem Umfeld. Kontakt-Wege, Fax/Mail für Überweisungen, Terminvereinbarung direkt.' },
      { nr: 6, title: 'Terminbuchung ärztespezifisch', text: 'Patient:in wählt erst Anliegen, dann passenden Ärzt:in — nicht umgekehrt. Reduziert Fehl-Terminierungen.' },
      { nr: 7, title: 'Mehrsprachigkeit explizit', text: 'Über das Accessibility-Widget 10 Sprachen. Zusätzlich: Sprachkompetenzen pro Ärzt:in im Profil sichtbar („Englisch, Serbokroatisch").' },
      { nr: 8, title: 'Ordinations-Räume sichtbar', text: 'Echte Bilder — Empfang, Wartezonen, Behandlungsbereiche. Keine Stock-Interior-Shots.' },
      { nr: 9, title: 'Schema-Architektur', text: 'Zentrum als MedicalOrganization, jede:r Ärzt:in als Physician, verknüpft. Damit Suchmaschinen und KI-Systeme die Struktur verstehen.' },
    ],
  },

  ueberweiser: {
    title: 'Für überweisende Kolleg:innen',
    text: 'Überweisungen sind für Zentren ein unterschätzter Traffic-Kanal. Wir bauen eine eigene kurze Sektion — klar strukturiert, Fax/Mail/Telefon, Anamnese-Template als PDF zum Download, Kontakt-Person.',
    items: [
      'Direkte Fax-Nummer und Sicher-Mail für Überweisungen',
      'PDF-Vorlage Überweisungs-Info zum Download',
      'Ansprechperson je Fachgebiet für Rückfragen',
      'Befund-Rückmeldung-Prozess erklärt',
      'Notfall-Überweisung gesondert ausgewiesen',
    ],
  },

  zeitaufwand: {
    title: 'Ihr Zeitaufwand skaliert mit Ärzt:innen-Zahl',
    text: 'Erstgespräch mit der Leitung (60 Min), Kurz-Profil-Gespräche mit jeder:m Ärzt:in (30 Min pro Person), Content-Freigaben, Launch. Bei 6 Ärzt:innen typischerweise 8-12 Stunden gesamt verteilt.',
    minutes: 600,
  },

  preisRange: {
    title: 'Investition',
    text: 'Qualität statt Pauschalpreis. Jedes Angebot wird maßgeschneidert — nach Anzahl Ärzt:innen, Umfang der Schema-Architektur, Mehrsprachigkeit, Patient:innen-Reisen und Ihrem Budget — und immer persönlich mit der Zentrums-Leitung durchgesprochen. Kein Online-Konfigurator, kein Paket ins Blaue.',
    foerderHint: 'KMU.DIGITAL je Ärzt:in einzeln beantragbar — wir prüfen das im Erstgespräch gemeinsam mit unserem Förderpartner.',
  },

  referenzPlatzhalter: {
    title: 'Referenzen',
    text: 'Erste Zentrums-Referenzen sind in Arbeit — namentliche Nennungen folgen nach schriftlicher Freigabe.',
  },

  faq: [
    {
      q: 'Wie geht Ihr mit unterschiedlichen Fachgebieten in einem Zentrum um?',
      a: 'Wir behandeln jedes Fachgebiet einzeln. Unsere 12 Strategiepapiere sind die Grundlage — jede:r Ärzt:in in Ihrem Zentrum bekommt die passende fachgebiet-spezifische Positionierung. Ein Hautarzt kommuniziert anders als eine Kardiologin.',
    },
    {
      q: 'Können wir später einzelne Ärzt:innen hinzufügen oder entfernen?',
      a: 'Ja — darauf ist die Architektur ausgelegt. Neue Arzt-Profile werden modular hinzugefügt (typisch 2-5 Tage pro Profil). Ausgeschiedene Ärzt:innen werden sauber depubliziert (DSGVO, Suchmaschinen-Signalisierung, Redirect auf Zentrum).',
    },
    {
      q: 'Wie läuft KMU.DIGITAL für mehrere Ärzt:innen?',
      a: 'Jede:r Ärzt:in mit eigener UID ist ein eigenes KMU — also eigener Förderantrag möglich. Je nach Zentrumsgröße entsteht daraus ein relevantes Förderpotenzial. Unser zertifizierter Förderpartner begleitet die Anträge. Die Details berechnen wir individuell im Erstgespräch.',
    },
    {
      q: 'Müssen alle Ärzt:innen mitmachen oder können wir schrittweise starten?',
      a: 'Schrittweise geht. Viele Zentren starten mit einer Basis-Website (Zentrum-Seite + 2-3 Profil-Seiten) und erweitern dann. Das senkt die Hürde und erlaubt ein Reinwachsen. Die Architektur ist ab Tag 1 auf Erweiterung ausgelegt.',
    },
    {
      q: 'Wie kommunizieren wir mit überweisenden Kolleg:innen?',
      a: 'Eigener Überweiser-Bereich mit Fax-Nummer, Sicher-Mail, PDF-Vorlage, Ansprechperson je Fachgebiet. Das macht Überweisungen einfacher — und bringt oft mehr Traffic als direkte Patient:innen-Akquise.',
    },
    {
      q: 'Was ist der Unterschied zwischen einer Zentrums-Website und einer Gruppenpraxis-Website?',
      a: 'Die Gruppenpraxis-Website ist oft eine Einzelordinations-Website mit mehreren Ärzt:innen-Portraits. Eine Zentrums-Website macht die Zusammenhänge sichtbar: wie laufen Patient:innen-Reisen, welche Assistenzberufe sind integriert, welche Partner, welche Überweiser. Das ist ein anderer struktureller Ansatz — und ein signifikanter Vertrauens-Hebel.',
    },
  ],

  naechsterSchritt: {
    title: 'Der nächste Schritt',
    text: 'Ein 60-Minuten-Erstgespräch mit Ihrer Zentrums-Leitung. Kostenlos, unverbindlich. Wir sprechen Struktur, Förderpotenzial und Zeitplan durch — ehrlich.',
    cta: { href: '/#kontakt', label: 'Erstgespräch vereinbaren' },
  },
}
