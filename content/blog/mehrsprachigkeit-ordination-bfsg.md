---
title: "Mehrsprachigkeit in der Ordination: was BaFG/BFSG bedeuten und wie Sie es umsetzen"
date: "2026-04-24"
description: "Mit BaFG (Österreich) und BFSG (Deutschland) ist Mehrsprachigkeit auf Arzt-Websites nicht mehr nur Service, sondern Pflicht-Thema. Welche Sprachen für welche Praxis, welche Umsetzung rechtssicher ist und wie der Aufwand realistisch bleibt."
author: "Kevin Hofbauer"
image: "/blog/mehrsprachigkeit-ordination-bfsg.png"
imageAlt: "Sprachen-Widget auf Praxis-Website mit Flaggen verschiedener Sprachen — Symbol für barrierefreie mehrsprachige Kommunikation"
---

Mehrsprachigkeit war auf Praxis-Websites lange ein **Nice-to-have**. Man hatte es, um international tätigen Patient:innen zu signalisieren: „Bei uns wird auch Englisch gesprochen". Seit Inkrafttreten des **Barrierefreiheitsgesetzes (BaFG, Österreich)** am 28. Juni 2025 und des inhaltlich verwandten **Barrierefreiheitsstärkungsgesetzes (BFSG, Deutschland)** hat sich die Bedeutung verändert: Mehrsprachigkeit ist nun Teil einer breiteren **Zugänglichkeits-Pflicht**.

Dieser Artikel klärt: Welche sprachlichen Anforderungen die Gesetze stellen, was davon für Arztpraxen 2026 wirklich relevant ist — und wie die Umsetzung ohne übertriebenen Aufwand gelingt.

## BaFG/BFSG: was wirklich verpflichtend ist

Die Gesetze betreffen digitale Produkte + Dienstleistungen. Für Arzt-Websites sind **Selbstständige mit weniger als 10 Mitarbeiter:innen** und unter 2 Mio. Euro Jahresumsatz **von den meisten Pflichten ausgenommen**. Das trifft auf die Mehrheit der Einzel-Ordinationen zu.

Ab 10+ Mitarbeiter:innen (typ. Ärztezentren, PVEs, große Gruppenpraxen) greifen die Pflichten voll:
- **WCAG 2.1 Level AA-Konformität** der Website
- **Barrierefreie Bedien-Anleitungen** für digitale Services (Online-Buchung, Rezept-Tool)
- **Alternative Kommunikations-Kanäle** für Menschen mit Einschränkungen

Die **explizite Sprach-Verpflichtung** ist im Gesetz nicht drin — aber: WCAG 2.1 AA setzt voraus, dass die Inhalte **verständlich** sind. Bei Patient:innen-Websites in Stadtbezirken mit hohem Migrationsanteil bedeutet das faktisch: wichtigste Informationen müssen auch in den häufigsten Community-Sprachen verfügbar sein.

## Die realistische Rechtslage 2026

**Für Einzelpraxen (< 10 MA)**: keine Mehrsprachigkeits-Pflicht. Aber: Patient:innen-Service-Argument bleibt.

**Für Ärztezentren / PVEs**: WCAG 2.1 AA verpflichtend. Mehrsprachigkeit wird dann zum **Pragmatismus-Thema** — nicht explizit verpflichtend, aber eindeutig zuträglich für den Barrierefreiheits-Nachweis.

**Für Wahlordinationen mit internationalen Patient:innen**: faktisches Business-Argument unabhängig vom Gesetz.

## Welche Sprachen für welche Praxis?

**Pflicht-Basis bei Mehrsprachigkeit**: **Deutsch + Englisch**. Englisch als lingua franca deckt Tourist:innen, Expats und Gesundheits-Akademiker:innen ab.

**Ergänzungen je nach Standort**:

- **Wien / Großstädte**: **Türkisch + Bosnisch/Kroatisch/Serbisch (BKS) + Arabisch**. Das sind die drei wichtigsten Migrations-Sprachen in Ost-Österreich.
- **Ostsüdschweiz-Nähe (Vorarlberg)**: **Türkisch**
- **Westösterreich / Tourismus-Regionen**: **Italienisch + Französisch**
- **Ostsüd-NÖ (Grenze zu Ungarn)**: **Ungarisch**
- **Burgenland**: **Kroatisch + Ungarisch**
- **Akademische Patient:innen-Klientel** (z. B. Bobo-Bezirke, Uni-nahe Standorte): **Französisch + Spanisch**

Die Praxis-Standort-Umgebung ist der wichtigste Faktor. Eine Praxis in Wien-Favoriten hat andere sprachliche Bedürfnisse als eine in Wien-Josefstadt.

## Was konkret übersetzt werden muss

**Pflicht-Inhalte (in allen angebotenen Sprachen):**
- Praxis-Name, Adresse, Kontakt, Öffnungszeiten
- Anfahrt + Parkplatz
- Leistungen (als Liste + kurze Beschreibung)
- FAQ für Patient:innen (Kassen, Neupatient:innen, Abläufe)
- Impressum + Datenschutz (rechtlich!)

**Oft nicht übersetzt (und das ist OK):**
- Blog-Artikel (sind meist für SEO, nicht für Patient:innen-Kommunikation)
- Detaillierte Team-Bios
- News + Aktuelles
- Interne Abrechnungs-Infos

**Niemals übersetzen (außer in Ausnahme-Fällen):**
- Rechtsgültige Formulare (Einverständnis-Erklärungen) — Original + Übersetzung als Hilfe, aber Unterschrift nur auf Original
- Schema.org-Markup (bleibt Deutsch für SEO-Kontext)
- URLs + Meta-Daten (sofern nicht mehrsprachige SEO-Strategie geplant)

## Technische Umsetzungs-Varianten

**Variante 1: Statische Übersetzungen (empfohlen)**

Die wichtigsten Seiten werden einmalig in die Ziel-Sprachen übersetzt (durch einen:eine Muttersprachler:in oder eine zuverlässige Übersetzungs-Agentur) und als separate Seiten/Routen gespeichert.

- **Vorteil**: rechtssicher, keine Fehl-Übersetzungen von Live-APIs, SEO-freundlich (jede Sprache hat eigene URLs)
- **Nachteil**: Aktualisierung braucht Koordination
- **Kosten**: einmalig 800-2.000 Euro für 4-5 Sprachen bei überschaubarer Seiten-Zahl

**Variante 2: API-basierte Live-Übersetzung (NICHT empfohlen für Arztpraxen)**

Widget wie Google Translate oder DeepL-API, das Inhalte on-the-fly übersetzt.

- **Vorteil**: technisch minimal
- **Nachteil**: Qualität schwankt, gerade bei medizinischen Fachbegriffen gefährlich (Fehl-Übersetzungen können Haftungs-Probleme erzeugen), schlecht für SEO
- **Warnung**: für Arztpraxen kritisch. Eine Fehl-Übersetzung bei Medikations-Hinweisen kann Patient:innen-Schaden anrichten.

**Variante 3: Hybrid (empfohlen für Barrierefreiheits-Widgets)**

Statische Übersetzungen für Pflicht-Inhalte + Barrierefreiheits-Widget mit DeepL-Option für Patient:innen, die weitere Inhalte übersetzt bekommen wollen. Das Widget macht klar: „Übersetzung ist automatisiert, kann Fehler enthalten — verbindliche Informationen sind die deutschsprachigen Original-Texte".

## Sprach-Umschalter: wo er hin muss

Der Sprach-Wechsel muss **in den ersten 1-2 Scrolls** auffindbar sein. Übliche Platzierungen:

- **Oben rechts in der Navigation** (Standard, funktioniert bei fast allen Designs)
- **Im Barrierefreiheits-Widget** (wenn vorhanden)
- **Im Footer** (redundant, als Rückfall-Option)

Sprachen-Icons: Flaggen sind umstritten (z. B. österreichisch-deutsch vs. Deutschland-deutsch). Text-Label ist klarer: „DE | EN | TR | BKS".

## Umgang mit Patient:innen, die keine der angebotenen Sprachen sprechen

**Vorab-Hinweis auf der Website**: „Für Konsultationen in weiteren Sprachen sprechen wir gerne eine professionelle Übersetzungsleistung ab — bitte rufen Sie uns vorab an."

Das entlastet die Praxis davor, spontan auf Patient:innen zu treffen, mit denen keine Kommunikation möglich ist.

**Für akute Fälle**: Video-Dolmetscher-Dienste (Telelingua Medical, videoDOLMETSCHEN.com) sind seit 2023 in Österreich verfügbar und sogar vom Gesundheitsfonds Wien teilweise refundiert.

## Rechtstexte in Fremdsprachen

Impressum + Datenschutz + Barrierefreiheits-Erklärung: **müssen auf Deutsch** sein (Österreich). Eine Übersetzung zur Erklärung ist möglich — rechtlich bindend ist aber nur die deutsche Version. Formulierung: „Die Übersetzung dieser Rechtstexte dient der Information. Rechtsverbindlich ist ausschließlich die deutschsprachige Originalversion."

## Kulturelle Sensibilität

Übersetzung ist nicht nur Wort-Transfer. Einige Punkte für medizinische Websites:

- **Türkisch**: formelle Anrede („Siz") durchgehend, kein Duzen
- **Arabisch**: rechts-links-Schreibung, korrekte Typografie (nicht alle Webfonts unterstützen es)
- **BKS (Bosnisch/Kroatisch/Serbisch)**: zwei Schriften (Latein für kroatisch, Kyrillisch für serbisch-orthodox) — üblich ist Latein für alle drei
- **Russisch**: kulturell neuer Patient:innen-Stamm, besonders nach 2022. Explizite Sprach-Pflege wird geschätzt.

Ein:e Muttersprachler:in mit medizinischem Hintergrund ist für die Qualitäts-Sicherung wertvoll.

## Mehrsprachigkeit und SEO

Ordentliche Mehrsprachigkeit ist SEO-Bonus:

- `hreflang`-Tags korrekt setzen (eine Sprache pro Version)
- Eigene URLs pro Sprache (`/de/kontakt`, `/en/contact`)
- Separate Meta-Tags + Open Graph pro Sprache
- Nicht: eine einzige Seite mit Sprachen-Umschalter via JavaScript (Google sieht dann nur Original-Sprache)

## Kosten-Nutzen-Abwägung

Eine **mehrsprachige Praxis-Website mit Deutsch + Englisch + 2 Community-Sprachen** kostet einmalig ca. 1.500-3.000 Euro zusätzlich (Übersetzungs-Arbeit) und ist dann 2-3 Jahre aktuell.

Der Nutzen:
- 15-25 % mehr Reichweite in mehrsprachigen Einzugs-Gebieten
- Bessere Patient:innen-Bindung für Migrant:innen-Communities
- Barrierefreiheits-Nachweis-Bonus (bei Ärztezentren pflicht-relevant)
- Kompetenz-Signal für internationale Patient:innen

## Fazit: Mehrsprachigkeit ist kein Marketing-Gag mehr

2026 ist Mehrsprachigkeit auf Arzt-Websites in Städten fast unverzichtbar. Für kleine Einzelpraxen in homogen-deutschsprachigen Gebieten: optional. Für Ärztezentren, Wahlordinationen in Städten, Praxen in Migrations-Gebieten: **notwendig**, auch wenn das Gesetz es nicht explizit fordert.

Die Umsetzung ist technisch einfach, wenn auf statische Übersetzungen gesetzt wird. Die Herausforderung ist die Auswahl der richtigen Sprachen und die qualitätsgesicherte Übersetzung. Wer dort investiert, hat ein Asset, das langfristig trägt.

---

**Verwandte Themen:**
- [Barrierefreiheitsgesetz für Arzt-Websites](/blog/barrierefreiheitsgesetz-aerzte)
- [Barrierefreiheits-Widget auf Arzt-Websites](/blog/barrierefreiheits-widget-arzt-website)
- [Online-Terminbuchung barrierefrei](/blog/online-terminbuchung-barrierefrei)
- [DSGVO für Arzt-Websites](/blog/dsgvo-arzt-website)

**Mehrsprachige Praxis-Website aufsetzen?** 30 Min kostenloses Erstgespräch. [Erstgespräch anfragen →](/#kontakt)
