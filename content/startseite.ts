import type { StartseitenContent } from '@/lib/content-types'
import { fachgebieteList, fachgebieteTotalPages, fachgebieteExtraSlugs } from './fachgebiete'

export const startseite: StartseitenContent = {
  // §1 HERO
  hero: {
    pille: '▪ Fachagentur für Ärzt:innen · 12 Fachgebiete',
    h1: 'Sichtbar für die Patient:innen, die zu Ihnen passen.',
    sub: 'Sie sind Ärzt:in — und online zugleich Dienstleister:in für Ihre Patient:innen. Wir helfen Ihnen, gefunden zu werden — Fachgebiet für Fachgebiet, auf Basis eigener Strategiepapiere. Damit Ihre Zeit bei den Patient:innen bleibt.',
    cta1: { href: '#kontakt', label: 'Erstgespräch mit Kevin' },
    cta2: { href: '/fachgebiete', label: 'Zu Ihrem Fachgebiet' },
    footnote: '30 Min · kostenlos · persönlich · kein Marketing-Sprech.',
    image: '/hero-bg.jpg',
  },

  // §3 MARKETING-WAHRHEIT
  marketingTruth: {
    kicker: 'Die ehrliche Wahrheit',
    headline: 'Warum andere Agenturen keine Patient:innen für Sie holen.',
    sub: 'Weil sie die falschen Suchbegriffe optimieren.',
    leadIn: 'Das, was Ärzt:innen glauben, wonach Patient:innen suchen — und was Patient:innen tatsächlich googeln. Nicht nach Fachbegriffen. Nach dem, was sie plagt.',
    pairs: [
      { arzt: 'Urologe Wien',                patient: 'blut im urin was bedeutet das' },
      { arzt: 'Psychotherapie 1040',         patient: 'kann nicht schlafen seit wochen' },
      { arzt: 'Wahlarzt Neurologie',         patient: 'kribbeln in den händen nachts' },
      { arzt: 'Gynäkologie 1010',            patient: 'schmerzen beim sex was tun' },
      { arzt: 'Orthopäde Graz',              patient: 'kreuzband gerissen was jetzt' },
      { arzt: 'Privatarzt HNO',              patient: 'meine nase stört mich im spiegel' },
      { arzt: 'Dermatologe Linz',            patient: 'akne mit 35 noch normal' },
      { arzt: 'Kinderarzt Salzburg',         patient: 'mein kind isst nichts mehr' },
    ],
    closer: 'Wir haben pro Fachgebiet 17-40 Seiten recherchiert, welche Fragen Patient:innen wirklich stellen — bevor sie „Arzt Wien" googeln. Dann positionieren wir Ihre Website auf diese Fragen. Nicht auf das, was Ihre Kolleg:innen schreiben.',
  },

  // §4 VERGLEICHS-SERIE
  vergleiche: {
    kicker: 'Aus dem Praxis-Alltag heraus',
    headline: 'Zwei Vergleiche, die jede:r Ärzt:in sofort versteht.',
    sub: 'Nicht um zu provozieren. Um zu zeigen, worauf es ankommt.',
    items: [
      {
        nr: 1,
        title: 'Eine Praxis ohne Ausstattung — und eine Website, die niemand findet.',
        imgLeft: '/lp-vgl-praxis-leer.jpg',
        imgLeftAlt: 'Leerer Behandlungsraum ohne Geräte und Möbel',
        imgLeftCaption: 'Eine Ordination ohne Geräte, ohne Wartezimmer, ohne Untersuchungs-Ausstattung.',
        imgRight: '/lp-vgl-website-unsichtbar.jpg',
        imgRightAlt: 'Patient sucht in Google, eigene Praxis taucht nicht auf',
        imgRightCaption: 'Eine Website ohne Inhalte, die zu Ihren Patient:innen passen.',
        text: 'Eine Ordination ohne Untersuchungs-Ausstattung wäre niemandem ein Termin wert. Mit Websites verhält es sich gleich: ohne Inhalte, die zu Ihren Patient:innen passen, ohne saubere Architektur für Suche und KI, sind sie online unsichtbar. Patient:innen suchen, finden Sie nicht — und entscheiden sich für Kolleg:innen. Wir richten Ihre Website mit der gleichen Sorgfalt ein, mit der Sie Ihre Ordination eingerichtet haben.',
      },
      {
        nr: 2,
        title: 'Was Sie eigentlich machen wollten — und wofür heute die Zeit fehlt.',
        imgLeft: '/lp-vgl-buerokratie.jpg',
        imgLeftAlt: 'Schreibtisch in Praxis voller Formulare und administrativer Belastung',
        imgLeftCaption: 'Bürokratie und Dokumentation nehmen heute fast die Hälfte Ihrer Arbeitszeit.',
        imgRight: '/lp-vgl-patient-zeit.jpg',
        imgRightAlt: 'Ärztin mit beruhigender Hand auf Patient:innen-Schulter im Sprechzimmer',
        imgRightCaption: 'Die Zeit, die für Patient:innen bleibt, ist das, wofür Sie sich entschieden haben.',
        text: 'Sie haben Medizin studiert, um Menschen zu helfen — heute geht laut Studien die Hälfte Ihrer Arbeitszeit für Bürokratie und Dokumentation. Wir können das System nicht ändern. Aber: Telefonzeit, Erklär-Aufwand und Routine-Anrufe, die Patient:innen vor und nach dem Termin haben — die nehmen wir Ihrer Ordination ab. Damit mehr Zeit bleibt für das, wofür Sie sich entschieden haben.',
      },
    ],
    closing: 'Online entscheidet sich, ob die passenden Patient:innen Sie finden. Und ob Sie morgens entlastet starten — oder im Telefon-Marathon.',
  },

  // §6 FACHGEBIETE-STRIP
  fachgebieteStrip: {
    headline: 'Eine Zahnarztpraxis sieht anders aus als eine Psychiatriepraxis. Warum sehen die meisten Arzt-Websites gleich aus?',
    sub: 'Wir arbeiten in zwölf Fachgebieten einzeln — jedes mit eigener Patient:innen-Gruppe, eigener Tonalität, eigenem Strategiepapier. Zahnmedizin behandeln wir als Sonderfall mit eigenem Papier.',
    items: fachgebieteList.map((fg) => ({
      slug: fg.slug,
      name: fg.name,
      shortName: fg.shortName,
      teaser: fg.hero.teaser,
      extra: fachgebieteExtraSlugs.includes(fg.slug),
      extraLabel: fg.slug === 'zahnarzt' ? 'Sonderfach' : undefined,
    })),
    ctaText: 'Alle Fachgebiete ansehen',
    ctaHref: '/fachgebiete',
  },

  // §3b STRATEGIEPAPIER-BEWEIS
  papers: {
    kicker: 'Die Grundlage',
    headline: 'Wir sagen nicht nur, dass wir spezialisiert sind. Wir zeigen es.',
    sub: 'Vor jeder Zeile Code steht das Papier. Zwölf Fachgebiete, jedes einzeln recherchiert.',
    list: fachgebieteList.map((fg) => ({
      name: fg.name,
      pages: fg.paperPages,
      slug: fg.slug,
    })),
    totalPages: fachgebieteTotalPages,
    totalLabel: 'Seiten interne Arbeitsgrundlage',
    quote: 'Keine andere Agentur in Österreich arbeitet so. Wir haben die Papers geschrieben, weil wir fanden: eine Zahnarztpraxis braucht eine andere Website als eine Psychiatriepraxis — und fast alle Anbieter ignorieren das.',
    quoteAttr: '— Kevin Hofbauer, mypraxis.at',
  },

  // §8 Förder-Hinweis (dezent, Ein-Zeiler)
  foerderHinweis: 'Jedes Paket ist mit KMU.DIGITAL 30 % förderbar — Details im Erstgespräch.',

  // Samariter-Framing (vorbereitet, active:false bis Ärztekammer schreibt)
  samariterFraming: {
    active: false,
    kicker: 'Unsere Haltung',
    headline: 'Weil die Ärzteschaft Unterstützung verdient, keine Marketing-Verkaufsgespräche.',
    text: 'Wir haben in unserer Arbeit bemerkt, dass viele Praxen in Österreich mit ihrer Website allein gelassen sind. Das BFSG ist Pflicht, die Suchbegriffe ändern sich, KI kommt dazu — und die meisten Agenturen reden eine Sprache, die mit Medizin nichts zu tun hat. Deshalb bieten wir ein Digitalisierungs-Paket mit Unterstützung speziell für Ärzt:innen: damit die Praxis weitergeführt werden kann, ohne dass die Website zum zweiten Beruf wird.',
  },

  // §10 BEFUND-KARTE (ersetzt Prozess)
  befund: {
    kicker: 'Unser Vorgehen',
    headline: 'Wir arbeiten, wie Sie arbeiten.',
    sub: 'Vier Schritte. Schnell, intensiv, persönlich begleitet.',
    befundTitel: 'BEFUND · mypraxis.at',
    patient: 'Ihre Praxis',
    datum: 'Erstgespräch',
    steps: [
      { num: '1', title: 'Erstgespräch', duration: '30 Min · kostenlos', text: 'Persönliches Gespräch mit Kevin. Wir verstehen Ihre Arbeitsweise, Ihre Patient:innen-Gruppen, Ihre Positionierung. Grundlage: Ihr Fachgebiet-Strategiepapier.' },
      { num: '2', title: 'Kurz-Konzept', duration: 'innerhalb 24 Stunden', text: 'Ihr individualisiertes Kurz-Konzept: Patient:innen-Personas, Wettbewerbs-Ausschnitt aus Ihrem Einzugsgebiet, Content-Struktur, technische Empfehlung.' },
      { num: '3', title: 'Produktion', duration: '5-7 Tage', text: 'Website-Bau. Technisch sauber, BFSG-konform, positioniert auf Ihr Fachgebiet. Texte nach Patient-Persona, nicht nach Schema.' },
      { num: '4', title: 'Begleitung', duration: '12 Monate inkl.', text: 'Nach dem Launch 12 Monate technische Betreuung ohne Aufpreis. Länger auf Wunsch jederzeit. Kein Abo. Website + Domain + Zugänge bleiben bei Ihnen.' },
    ],
    stamp: 'Kevin Hofbauer e.U. · mypraxis.at',
    ctaText: 'Methodik im Detail ansehen',
    ctaHref: '/faq',
  },

  // §12 FAQ (Long-Tail-SEO)
  faq: {
    headline: 'Häufige Fragen von Ärzt:innen, die uns suchen.',
    sub: 'Echte Fragen aus echten Suchen. Kurze, ehrliche Antworten.',
    items: [
      {
        q: 'Was kostet eine professionelle Arzt-Website bei mypraxis.at?',
        a: 'Wir machen keine Pauschalpreise ins Blaue. Jedes Angebot wird maßgeschneidert nach Ihrer Ordination, Ihrem Budget und Ihren Zielen erstellt — und immer persönlich mit Ihnen durchgesprochen. Das ist fairer als ein Online-Konfigurator und führt zu einer Lösung, die wirklich passt. Das Erstgespräch inklusive Förder-Check über KMU.DIGITAL ist kostenlos und unverbindlich.',
      },
      {
        q: 'Ist eine barrierefreie Website für Ärzt:innen in Österreich Pflicht?',
        a: 'Seit 28. Juni 2025 gilt das Barrierefreiheitsgesetz (BaFG, Umsetzung EU-Direktive 2019/882) in Österreich. Arzt-Websites mit Online-Terminbuchung, Kontaktformularen oder kommerziellen Elementen fallen darunter. WCAG 2.1 AA ist der Referenzstandard. Bei mypraxis.at sind BFSG-Konformität und unser Accessibility-Widget mit 16 Features Standard — kein Aufpreis.',
      },
      {
        q: 'Wie finden Patient:innen meine Ordination online?',
        a: 'In den meisten Fällen nicht über „Urologe Wien". Sondern über Symptom-Fragen, über ChatGPT/Perplexity/Google-AI (mit korrekter Schema.org- und llms.txt-Struktur), über Google-Maps (mit sauberem Google-Business-Profile) und über Empfehlungen. Wir optimieren auf alle vier Kanäle gleichzeitig.',
      },
      {
        q: 'Brauche ich als Wahlarzt wirklich eine eigene Website, wenn ich im DocFinder stehe?',
        a: 'Ja — aus drei Gründen: Erstens gehört der DocFinder nicht Ihnen, Inhalte und Ranking können sich ohne Rücksprache ändern. Zweitens ist Ihre DocFinder-Seite in KI-Suchen (ChatGPT) praktisch nicht referenziert. Drittens: DocFinder-Templates sind standardisiert, Sie können sich nicht positionieren.',
      },
      {
        q: 'Was ist KMU.DIGITAL und kann ich das als Ärzt:in nutzen?',
        a: 'KMU.DIGITAL ist die österreichische Bundesförderung für Digitalisierung kleiner und mittlerer Unternehmen. Ärzt:innen mit aufrechter UID-Nummer zählen als KMU und sind förderberechtigt — die Förderung beträgt 30 % der Netto-Kosten. Voraussetzung: Beratung durch einen zertifizierten Digital Consultant. Wir arbeiten mit einem externen Förderberater zusammen und prüfen das im Erstgespräch kostenlos.',
      },
      {
        q: 'Wie lange dauert der Bau einer Arzt-Website bei mypraxis.at?',
        a: 'Wir arbeiten schnell und intensiv. Erstgespräch 30 Minuten, Kurz-Konzept meist innerhalb 24 Stunden, Website-Produktion 5-7 Tage. Ihre Demo-Version steht oft schon nach 4-5 Tagen. Ihr eigener Zeitaufwand gesamt: rund 2-3 Stunden verteilt (Erstgespräch, Text-Input, Freigabe).',
      },
      {
        q: 'Ich bin in den letzten Berufsjahren — lohnt sich eine neue Website noch?',
        a: 'Ja, aus drei Gründen. Erstens: BFSG-Pflicht besteht unabhängig vom Pensionsalter — eine aktuelle Website schützt Sie rechtlich. Zweitens: Viele Kolleg:innen führen auch in der Pension nebenbei eine kleine Privatordination weiter — eine klare Außenkommunikation heute schafft diese Option morgen. Drittens: Ein würdiger digitaler Abschluss ist auch ein Wert — für Sie und für die Patient:innen, die Sie online noch lange finden.',
      },
      {
        q: 'Unterscheidet sich die Website für eine Psychiatrie-Praxis von der für Orthopädie?',
        a: 'Sehr. Psychiatrie braucht ruhige Bildsprache, Warte-freie Anmutung, klare Angehörigen-Information. Orthopädie braucht aktive Bildsprache, klare Akut- und Chronisch-Pfade, Fokus auf Sport-Rückkehr. Zahnmedizin braucht Anti-Angst-Rhetorik. Gynäkologie braucht Lebensphasen-Navigation. Wir haben pro Fachgebiet ein eigenes Strategiepapier — 12 Fachgebiete, 12 unterschiedliche Welten.',
      },
    ],
  },

  // §13 FINAL CTA
  finalCta: {
    text: 'Wenn Sie beim Lesen dieser Seite mehr als zwei Sätze genickt haben, schreiben Sie uns. Wir melden uns innerhalb eines Werktags.',
    ctaPrimary: { href: '#kontakt', label: 'Erstgespräch mit Kevin' },
    ctaSecondary: { href: '/fachgebiete', label: 'Zu Ihrem Fachgebiet' },
  },
}
