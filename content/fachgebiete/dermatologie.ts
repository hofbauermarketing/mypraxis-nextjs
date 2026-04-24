import type { FachgebietContent } from '@/lib/content-types'

export const dermatologie: FachgebietContent = {
  slug: 'dermatologie',
  name: 'Dermatologie',
  shortName: 'Dermatologie',
  sortOrder: 2,
  paperPages: 26,

  hero: {
    pille: 'Fachgebiet · Dermatologie',
    h1: 'Websites für Dermatologie — zwei Welten, eine Praxis.',
    sub: 'Melanom-Angst und Botox-Interesse gehen durch dieselbe Tür. Die Website muss beide ansprechen, ohne die eine für die andere zu verraten. Grundlage: unser 26-seitiges Strategiepapier Dermatologie.',
    teaser: 'Medizin + Ästhetik · Zwei-Pfad sauber getrennt',
    image: '/fachgebiete/dermatologie-hero.jpg',
  },

  backgrounds: {
    szene: '/fachgebiete/dermatologie-bg-notizbuch.jpg',
    siebenSchritte: '/fachgebiete/dermatologie-bg-bibliothek.jpg',
    credibility: '/fachgebiete/dermatologie-bg-bibliothek.jpg',
    angehoerige: '/fachgebiete/dermatologie-bg-abend.jpg',
  },

  verstaendnis: {
    title: 'Was Dermatologie-Patient:innen besonders macht',
    paragraphs: [
      'Dermatologie ist das einzige Fach mit einer ausgeprägten Zwei-Pfad-Struktur. Die eine Seite: Melanom-Angst, Psoriasis, Kinder-Neurodermitis — Menschen, die leiden und einen Fels in der Brandung suchen. Die andere Seite: Botox, Hyaluron, Hautverjüngung — Menschen, die sich etwas Gutes tun wollen, ohne ein Hollywood-Gesicht zu riskieren.',
      'Diese beiden Welten teilen sich einen Wartebereich. Aber sie teilen sich keine Tonalität, keine Bildsprache, keine Argumentation. Eine Dermatologie-Website, die beide Welten mischt, verfehlt beide.',
      'Unser Ansatz: zwei eigenständige Landing-Pages (`/hautgesundheit`, `/aesthetik`), die unter derselben Marke laufen, aber jeweils eigene Patient:innen treffen — mit ehrlicher, rechtlich sauberer Ansprache.',
    ],
  },

  szene: {
    title: 'Zwei Anrufe an einem Dienstagnachmittag',
    person1: {
      name: 'Dr. Anna Bucher',
      rolle: '39 · Fachärztin für Dermatologie · neu selbstständig in Wien-Landstraße',
      image: '/fachgebiete/dermatologie-szene-lena.jpg',
      text: 'Neun Jahre Klinik, Schwerpunkt Dermatoonkologie + ästhetische Dermatologie. Sie ist seit drei Monaten selbständig, hat Praxiseinheit mit 80 m². Sie möchte eine Website, die beides abdeckt — Hautkrebs-Vorsorge und Ästhetik — ohne dass die Ästhetik-Sektion die Medizin-Sektion verwässert oder umgekehrt.',
      zitat: 'Ich bin Ärztin, kein Beauty-Salon. Meine Website muss das zeigen.',
      zitatAttr: '— Dr. Bucher im Erstgespräch mit uns',
    },
    verbindung: 'Am selben Nachmittag, eine halbe Stadt entfernt',
    person2: {
      name: 'Sandra Köhler',
      rolle: '34 · Marketing-Angestellte · seit 8 Jahren mit Erwachsenen-Akne',
      image: '/fachgebiete/dermatologie-szene-markus.jpg',
      text: 'Sie hat alles probiert: Benzoylperoxid, teure Apotheken-Cremes (600 € insgesamt), Isotretinoin (abgebrochen), Ernährungsumstellung. Sie meidet ungeschminkte Selfies, sagt Familienfeste ab. Jetzt sucht sie eine Dermatologin, die Erwachsenen-Akne ernst nimmt — nicht als „Hautunreinheiten" abtut.',
      zitat: 'erwachsenen-akne wien wahlarzt hormonelle abklärung',
      zitatAttr: '— ihre Google-Suche, abends im Bett',
    },
    abschluss: 'Zwischen Dr. Bucher und Sandra liegt keine fachliche Lücke. Nur eine Lücke im Suchen und Finden — online. Genau dort setzen wir an.',
    disclaimer: 'Dr. Anna Bucher und Sandra Köhler sind fiktive Personas, zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real.',
  },

  siebenSchritte: {
    title: 'Sieben Schritte, bevor wir eine Zeile Code schreiben',
    intro: 'Dermatologie braucht Zwei-Pfad-Denken. Bevor wir bauen, klären wir, wie die zwei Welten auf Ihrer Website nebeneinander existieren.',
    items: [
      { num: 1, title: 'Daten-Destillation', text: 'Einzugsgebiet (Geodaten + demografische Struktur), Praxis-Schwerpunkt, bestehende Patient:innen-Profile, regionaler Wettbewerb. Im telefonischen Erstgespräch eruieren wir gemeinsam, welche Zielgruppen Sie ansprechen wollen — und welche tatsächlich kommen. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität des Strategiepapiers.' },
      { num: 2, title: 'Archetyp-Triade', text: 'Für Dermatologie: Sage (medizinische Autorität) + Caregiver (chronisch Erkrankte) mit Lover-Akzent im Ästhetik-Pfad, Anti-Magician (keine Faltenfrei-Versprechen).' },
      { num: 3, title: 'Fünf Patient-Personas', text: 'Melanom-Angst, Erwachsenen-Akne, Ästhetik-Interessent:in, Psoriasis, Kinder-Neurodermitis-Eltern. Fünf Welten auf einer Praxis.' },
      { num: 4, title: 'Marketing-Thesen', text: 'Baulig-7-teilig: Problem (Dermatologie-Websites mischen Medizin + Ästhetik zu früh) bis Beweis (wir bauen zwei separate Pfade).' },
      { num: 5, title: 'Hook-Typen × Persona-Matrix', text: 'Monika (Melanom-Angst) braucht „Termin in 10 Tagen". Silvia (Ästhetik) braucht „natürlich aussehen". Matrix definiert, was wohin gehört.' },
      { num: 6, title: 'Tonalität + Design-Richtung', text: 'Hautgesundheits-Pfad: nüchtern-medizinisch, weiß. Ästhetik-Pfad: wärmere Töne, Lifestyle-Bildsprache — aber dezent, nicht Hollywood.' },
      { num: 7, title: 'Website-Struktur als Ergebnis', text: 'Zwei Hauptpfade (`/hautgesundheit`, `/aesthetik`) + gemeinsame Arztpersönlichkeits-Seite. Startseite als Weiche.' },
    ],
  },

  personasDisclaimer:
    'Die folgenden Profile sind fiktive Personas — zusammengefasst aus anonymisierter Recherche, Fach-Literatur und Interviews. Keine dieser Personen existiert real. Die Muster stimmen, die Namen nicht.',

  personas: [
    {
      name: 'Monika', vollerName: 'Monika Wieser', alter: 52, akzent: 'blau',
      image: '/fachgebiete/personas/monika.jpg',
      fachContext: 'Melanom-Angst · Familien-Anamnese',
      kontext: 'Mutter 2018 an Melanom verstorben. Jährliche Kassen-Kontrollen mit Wartezeit, Termin zehn Minuten. Neues dunkles Muttermal am Rücken, Kassen-Dermatologin bietet Termin in acht Wochen. Sie kann nicht warten.',
      stilleFrage: 'Wird meine Panik als übertrieben abgetan — oder ernst genommen?',
      suchanfrage: 'muttermal dringend wien privat wahlarzt',
    },
    {
      name: 'Sandra', vollerName: 'Sandra Köhler', alter: 34, akzent: 'terracotta',
      image: '/fachgebiete/personas/sandra.jpg',
      fachContext: 'Erwachsenen-Akne · 8 Jahre Odyssee',
      kontext: 'Marketing-Angestellte. Akne erst mit 26 nach Absetzen der Pille. Hat alles probiert — Benzoylperoxid, Cremes, Isotretinoin abgebrochen, Ernährung. Meidet ungeschminkte Selfies, sagt Familienfeste ab.',
      stilleFrage: 'Werde ich wieder nur eine Standardcreme bekommen oder endlich ernst genommen?',
      suchanfrage: 'erwachsenen akne wien hormonelle abklärung',
    },
    {
      name: 'Silvia', vollerName: 'Silvia Linder', alter: 52, akzent: 'sand',
      image: '/fachgebiete/personas/silvia.jpg',
      fachContext: 'Ästhetik-Interesse · Angst vor „zu viel"',
      kontext: 'Führung Versicherung, zwei erwachsene Kinder. Erste Stirnfalten, Augenringe stärker. Denkt seit einem Jahr über Botox nach. Zögert aus Angst vor Hollywood-Gesicht oder falscher Ärztin.',
      stilleFrage: 'Sehe ich nachher noch aus wie ich — oder wie jemand anderes?',
      suchanfrage: 'botox wien natürlich aussehen dermatologe',
    },
    {
      name: 'Helmut', vollerName: 'Helmut Weber', alter: 44, akzent: 'graublau',
      image: '/fachgebiete/personas/helmut.jpg',
      fachContext: 'Psoriasis · 18 Jahre Krankheits-Verlauf',
      kontext: 'Lehrer. Psoriasis seit 26. Kopfhaut, Ellenbogen, Knie, bis zu 30 % Hautfläche. Kortison, UV, Fumarsäure, Biologika-Antrag abgelehnt. Seine Frau sagt, er sei „nicht mehr derselbe". Er sucht Biologika privat.',
      stilleFrage: 'Darf ich als Lehrer mit Kassenstelle trotzdem Tausende pro Monat für Biologika ausgeben?',
      suchanfrage: 'biologika psoriasis wien privat ustekinumab',
    },
    {
      name: 'Katrin', vollerName: 'Katrin Berger', alter: 38, akzent: 'gruen',
      image: '/fachgebiete/personas/katrin.jpg',
      fachContext: 'Angehörige · Mutter eines Neurodermitis-Kindes (4)',
      kontext: 'Jüngeres Kind hat seit Geburt schwere Neurodermitis. Kassenarzt-Ketten dauern Monate. Das Kind leidet jede Nacht. Katrin sucht Dermatolog:in mit Kinder-Kompetenz, die moderne Therapien (Dupilumab ab 6 Monaten) kennt.',
      stilleFrage: 'Werde ich als „hysterische Mutter" abgetan oder ernst genommen?',
      suchanfrage: 'kinder dermatologe wien neurodermitis dupilumab',
    },
  ],

  archetyp: {
    triade: 'Sage · Caregiver · Lover-Akzent · Anti-Magician',
    paragraphs: [
      '**Sage** ist die Basis: medizinische Wissensautorität. Ohne Sage-Ton wirkt jede Dermatologie-Praxis wie ein Beauty-Salon — und verliert Monika (Melanom-Angst) und Helmut (Psoriasis) sofort.',
      '**Caregiver** trägt die Beziehung zu chronisch Erkrankten und Eltern von Kindern mit Hauterkrankungen. Langzeitbindung, Wärme, keine „schnell durchschleusen"-Haltung.',
      '**Lover-Akzent** (10–15 %) erscheint nur im Ästhetik-Pfad: Sinnlichkeit, Selbstfürsorge, ästhetisches Wohlbefinden. Wärmere Farben, Lifestyle-Bildsprache — aber nicht Hollywood. Kein Ruler (kein „VIP", kein „exklusiv") — Silvia-Typ ist Mittelschicht und will nicht als Luxus-Kundin inszeniert werden.',
      '**Anti-Magician** gilt überall: keine „Faltenfrei in 20 Minuten"-Slogans, keine Before-After-Galerien mit Prozent-Claims. Rechtlich heikel (UWG, HWG) und ethisch problematisch.',
    ],
  },

  vierKernsaetze: {
    title: 'Vier Sätze, die alles andere tragen',
    sub: 'Aus der 7-teiligen Marketing-Thesis destilliert.',
    items: [
      { satz: 'Hautgesundheit und Ästhetik gehören auf getrennte Landing-Pages.', begruendung: 'Monikas Melanom-Angst und Silvias Botox-Überlegung haben nichts gemeinsam außer Hautfarbe. Eine Website, die beides mischt, verliert beide.' },
      { satz: 'Muttermal-Check binnen 10 Tagen ist ein Versprechen — oder es ist keines.', begruendung: 'Die häufigste Melanom-Patient:innen-Suche ist „dringend". Wer „in 8 Wochen" anbietet, wird weitergeklickt.' },
      { satz: 'Erwachsenen-Akne ist ernst zu nehmen — nicht als Pubertät zu rahmen.', begruendung: 'Sandra hat 8 Jahre Odyssee hinter sich. Eine Website, die sie mit „Hautunreinheiten" anspricht, verliert sie. Wer von hormoneller Abklärung und Spironolacton spricht, gewinnt sie.' },
      { satz: 'Ästhetik darf nicht wie Beauty-Salon, nicht wie Klinik klingen — sondern wie Ärztin.', begruendung: 'Silvia sucht eine Dermatologin, nicht ein Kosmetik-Institut. Die Website muss medizinische Autorität + ästhetisches Empfinden verbinden — ohne Hochglanz und ohne Kaltschnäuzigkeit.' },
    ],
  },

  credibility: {
    title: 'Methodik mit Fundament — nicht aus dem Stegreif',
    text: 'Die Triade „Sage + Caregiver · Lover-Akzent · Anti-Magician" stammt aus dem 12-Archetypen-Modell von Margaret Mark und Carol S. Pearson („The Hero and the Outlaw", 2001). Die Patient:innen-Personas folgen den MIA Social Chronicles (Awareness-Stages). Die Marketing-Thesis ist nach Baulig-Prinzip 7-teilig aufgebaut. Alles zusammen ergibt unsere 26-seitige Strategiepapier-Vorlage für Dermatologie — Grundlage, keine Behauptung. Dieses Strategiepapier ist das Fundament. Für jede Praxis erstellen wir zusätzlich ein individualisiertes Papier — auf Basis Ihrer Geodaten, Ihres Einzugsgebiets und eines telefonischen Erstgesprächs, in dem wir Ihre exakten Zielgruppen eruieren. Bei Bedarf bitten wir um eine kurze E-Mail-Zusammenfassung für bestmögliche Qualität.',
  },

  antiMuster: {
    title: 'Was wir auf vielen Dermatologie-Websites sehen — und was nicht funktioniert',
    items: [
      'Hautgesundheit und Ästhetik auf derselben Hauptseite — wirkt wie ein Beauty-Salon mit medizinischem Nebenzweig und verliert die Melanom-Angst-Zielgruppe.',
      '„Faltenfrei in 20 Minuten"-Slogans auf der Ästhetik-Seite — rechtlich ÖÄK- und UWG-problematisch, ethisch heikel.',
      'Before-After-Galerien mit Prozent-Claims („95 % Zufriedenheit") — verletzen Heilmittelwerbegesetz.',
      'Kinder-Dermatologie als kleines Icon im Leistungsmenü — Katrin-Typ-Eltern finden das nicht. Eigene Landing-Page wäre notwendig.',
      'Keine Aussage zu Wartezeiten bei Muttermal-Check — Monika-Typ-Patient:innen suchen explizit „dringend" und bricht ab, wenn keine Zeitangabe sichtbar ist.',
      'Ästhetik-Sektion mit zu wenig medizinischer Autorität — wirkt wie Kosmetik-Institut, verliert Silvia-Typ (die explizit eine Ärztin will).',
      'Psoriasis und Biologika-Therapie nicht erwähnt — Helmut-Typ (Langzeit-Patient:in, zahlungsbereit für Biologika) wird nicht angesprochen.',
    ],
  },

  designRichtung: {
    title: 'Zwei Pfade, zwei Tonalitäten — eine Marke',
    text: 'Hautgesundheits-Pfad: nüchtern-medizinisch, Weiß + Navy, klare Sans-Serif, konkrete Zahlen (Wartezeit, Preis Erstordination). Ästhetik-Pfad: wärmere Erdtöne, subtile Serif-Akzente, Lifestyle-Bildsprache aber niemals Hollywood — Frauen um 50 im Alltag, nicht auf dem roten Teppich. Die gemeinsame Arzt-Seite bleibt ruhig-medizinisch. Kein Gold, kein „Premium", kein „VIP". Sage schlägt Ruler.',
  },

  neunBloecke: {
    title: 'Neun Blöcke, die auf einer Dermatologie-Website funktionieren',
    items: [
      { nr: 1, title: 'Zwei-Pfad-Startseite', text: 'Hero mit klarer Weiche: Hautgesundheit / Ästhetik. Zwei gleichwertige Klick-Ziele, keine Vorentscheidung.' },
      { nr: 2, title: 'Hautgesundheits-Landing mit Wartezeit-Signal', text: '„Muttermal-Check binnen 10 Tagen" oder ähnlich konkret. Monika-Typ entscheidet in Sekunden.' },
      { nr: 3, title: 'Erwachsenen-Akne als eigener Content-Block', text: 'Sandra-Typ-Patient:innen werden explizit angesprochen — inklusive hormoneller Abklärung, Spironolacton, Isotretinoin-Alternativen.' },
      { nr: 4, title: 'Ästhetik-Landing mit „natürlich bleiben"-Versprechen', text: 'Silvia-Typ will keine Hollywood-Veränderung. Messaging, Bildsprache und Preise unterstützen das.' },
      { nr: 5, title: 'Psoriasis/Biologika-Bereich', text: 'Helmut-Typ-Patient:innen sind zahlungsbereit, aber erschöpft vom Kassen-Kampf. Klare Biologika-Kommunikation + transparente Kosten-Range.' },
      { nr: 6, title: 'Kinder-Dermatologie als eigene Landing', text: 'Neurodermitis, Hämangiom, Allergietests bei Kindern. Katrin-Typ-Eltern googeln genau danach.' },
      { nr: 7, title: 'Preistransparenz pro Leistung', text: 'Muttermal-Check, Ästhetik-Eingriffe, Biologika-Beratung — Preise oder Ranges sichtbar. Gilt besonders im Ästhetik-Pfad.' },
      { nr: 8, title: 'FAQ pro Pfad getrennt', text: 'Melanom-FAQ unterscheidet sich komplett von Botox-FAQ — beide brauchen eigenständige Antworten.' },
      { nr: 9, title: 'Kontakt — Telefon + Online-Termin gleichwertig', text: 'Akute Fälle (Muttermal) rufen an. Ästhetik-Interessent:innen bevorzugen oft Online-Buchung.' },
    ],
  },

  typischeSuchen: [
    'muttermal dringend wien privat',
    'melanom früherkennung wahlarzt',
    'erwachsenen akne wien hormonelle abklärung',
    'botox wien natürlich aussehen',
    'dermatologe wien privat wartezeit kurz',
    'biologika psoriasis wien privat',
    'neurodermitis kind wien dupilumab',
    'hyaluron lippen wien dermatologin',
    'akne narben behandlung wien',
    'hautkrebs vorsorge privat wien',
  ],

  wasWirBauen: {
    title: 'Was wir konkret für Ihre Dermatologie-Praxis bauen',
    items: [
      'Zwei getrennte Landing-Pages: `/hautgesundheit` und `/aesthetik`',
      'Wartezeit-Signal für Muttermal-Check prominent auf Hautgesundheits-Seite',
      'Erwachsenen-Akne + Psoriasis-Biologika als eigene Sub-Pages',
      'Kinder-Dermatologie-Landing für Eltern',
      'Ästhetik-Leistungsübersicht mit Preis-Ranges (keine aggressiven Before-After-Claims)',
      'Online-Terminbuchung + prominentes Telefon für Notfälle',
      'BFSG-konforme Barrierefreiheit + Accessibility-Widget mit 16 Features',
      '12 Monate technische Betreuung inklusive',
    ],
    contentImage: '/fachgebiete/dermatologie-content.jpg',
  },

  faq: [
    { q: 'Wie positionieren Sie Hautgesundheit und Ästhetik auf einer Website?', a: 'Auf zwei eigenständigen Landing-Pages unter derselben Marke. Die Website-Antwort sollte ab dem Hero klar zwei Pfade anbieten — keine Vermischung. Wer zuerst auf Hautgesundheit klickt, soll nicht mit Botox-Bannern abgelenkt werden.' },
    { q: 'Darf ich Vorher-Nachher-Bilder bei Botox oder Filler zeigen?', a: 'Rechtlich heikel. Die Website-Antwort sollte auf konkrete Versprechen und Prozent-Claims verzichten. Wenn Bildvergleiche überhaupt — dann anonymisiert, unkommentiert, ohne „95 % Zufriedenheit".' },
    { q: 'Wie gehe ich mit Patient:innen-Anfragen „wie schnell bekomme ich einen Termin bei Muttermal-Verdacht“?', a: 'Mit klarer Zeitangabe. Die Website-Antwort sollte „binnen 10 Tagen" oder ähnlich konkret sein — denn Monika-Typ-Patient:innen entscheiden in wenigen Sekunden, ob sie anrufen oder weiterklicken.' },
    { q: 'Soll ich Erwachsenen-Akne explizit erwähnen?', a: 'Ja. Die Website-Antwort sollte Erwachsenen-Akne von Pubertäts-Akne klar trennen, hormonelle Abklärung und Spironolacton als Optionen nennen. Sandra-Typ-Patient:innen haben 8 Jahre Odyssee hinter sich und erkennen eine Praxis, die sie ernst nimmt, sofort.' },
    { q: 'Wie kommuniziere ich Biologika-Therapien bei Psoriasis?', a: 'Transparent über Kosten-Range (mehrere Tausend pro Monat) und Kassen-Rückerstattungs-Möglichkeiten. Die Website-Antwort sollte Biologika als ernsthafte Option darstellen — nicht als Premium-Zusatzangebot.' },
    { q: 'Braucht meine Dermatologie-Website eine Kinder-Sektion?', a: 'Wenn Sie Kinder-Dermatologie anbieten: ja, unbedingt. Die Website-Antwort sollte Neurodermitis (inkl. moderner Therapien wie Dupilumab), Allergietests und Hämangiom-Behandlung ansprechen. Katrin-Typ-Eltern suchen das explizit.' },
  ],

  naechsterSchritt: {
    title: 'Reden wir über Ihre Dermatologie-Website',
    text: 'Ein 30-Minuten-Erstgespräch mit Kevin. Kostenlos, persönlich. Wir besprechen Ihren Medizin/Ästhetik-Mix und wie Sie beide Pfade sauber auf einer Website unterbringen — ohne dass die eine der anderen schadet.',
    cta: { href: '/#kontakt', label: 'Erstgespräch anfragen' },
  },
}
