---
title: "Warum Ihre Ordination bei ChatGPT nicht empfohlen wird"
date: "2026-02-23"
description: "Über 90 % der österreichischen Ordinationen sind für KI-Systeme unsichtbar. Was technisch dahintersteckt – und wie Sie es ändern."
author: "Kevin Hofbauer"
image: "/blog/ki-sichtbarkeit-aerzte.png"
imageAlt: "Ärztin mit AR-Brille interagiert mit schwebenden KI-Suchergebnissen und digitalen Datenpanelen in einem modernen Krankenhaus"
---

Wenn ein Patient ChatGPT fragt „Welcher Hautarzt in Linz hat gute Bewertungen?", werden in der Antwort typischerweise 3 bis 5 Ordinationen genannt. Über 90 % der niedergelassenen Ärztinnen und Ärzte in Österreich tauchen in diesen Antworten nicht auf – unabhängig von ihrer Reputation, ihren Bewertungen oder ihrer Erfahrung. Der Grund ist nicht mangelnde Qualität, sondern fehlende technische Aufbereitung der Online-Präsenz.

## Was KI-Sichtbarkeit bedeutet

KI-Sichtbarkeit beschreibt, wie gut die Online-Präsenz einer Ordination für KI-Systeme wie ChatGPT, Google Gemini, Perplexity und Microsoft Copilot lesbar und verwertbar ist.

Wenn ein Patient eine KI nach einem Arzt fragt, passiert Folgendes:

1. **Suche:** Die KI durchsucht das Internet nach relevanten Quellen.
2. **Verarbeitung:** Sie liest die gefundenen Websites und versucht, die Informationen zu verstehen.
3. **Synthese:** Sie fasst die Informationen zusammen und formuliert eine Antwort.
4. **Zitation:** Sie nennt die Quellen, aus denen die Antwort stammt.

Das Problem: In Schritt 2 scheitern die meisten Arzt-Websites. Die KI findet die Seite zwar, kann aber die relevanten Informationen nicht extrahieren – weil sie nicht maschinenlesbar aufbereitet sind.

## Warum Ihre Website unsichtbar ist

Es gibt drei technische Hauptgründe, warum KI-Systeme eine Arzt-Website nicht korrekt lesen können:

### 1. Fehlende strukturierte Daten (Schema Markup)

Schema Markup ist eine Auszeichnungssprache im Hintergrund Ihrer Website, die Maschinen sagt: „Das hier ist ein Arzt, das ist seine Fachrichtung, das ist seine Adresse, das sind seine Ordinationszeiten."

Ohne Schema Markup sieht eine KI nur unstrukturierten Text. Sie kann nicht unterscheiden, ob „Dr. Maier" der Arzt ist oder der Webdesigner im Impressum.

Ein korrektes Schema Markup für eine Arztpraxis enthält unter anderem:

- **MedicalOrganization** oder **Physician**: Wer Sie sind
- **MedicalSpecialty**: Ihr Fachgebiet
- **PostalAddress**: Standort der Ordination
- **OpeningHoursSpecification**: Ordinationszeiten
- **Review/AggregateRating**: Bewertungen (falls vorhanden)
- **MedicalProcedure**: Angebotene Behandlungen

In Österreich haben laut unserer Analyse weniger als 10 % der Ordinationswebsites vollständiges Schema Markup implementiert.

### 2. Keine semantisch optimierten Inhalte

KI-Systeme bevorzugen Inhalte, die Fragen direkt beantworten. Die typische Arzt-Website enthält aber Marketingtexte wie „Willkommen in unserer modernen Ordination" – ohne konkreten Informationsgehalt.

KI-optimierte Inhalte dagegen:

- Beantworten spezifische Fragen im ersten Absatz
- Verwenden die Fachbegriffe, nach denen Patienten suchen
- Enthalten konkrete Daten: Adresse, Kassenverträge, Spezialgebiete, Ordinationszeiten
- Sind in kurzen Absätzen strukturiert (2–3 Sätze pro Absatz)
- Haben klare Überschriften-Hierarchien (H1, H2, H3)

### 3. Kein llms.txt

llms.txt ist eine Datei im Stammverzeichnis einer Website – vergleichbar mit robots.txt für Suchmaschinen, aber speziell für KI-Systeme. Sie enthält eine strukturierte Übersicht der wichtigsten Inhalte der Website in einem Format, das KI-Crawler besonders leicht verarbeiten können.

Stand Februar 2026 haben laut einer Analyse von NerdyData und BuiltWith weltweit über 844.000 Websites eine llms.txt implementiert – darunter Unternehmen wie Anthropic, Cloudflare und Stripe. In der österreichischen Ärzteschaft ist uns kein einziger Fall bekannt.

## Die drei Ebenen der KI-Sichtbarkeit

KI-Sichtbarkeit für Arztpraxen lässt sich in drei Ebenen unterteilen:

**Ebene 1: Strukturierte Daten**
Maschinenlesbare Informationen über Fachrichtung, Leistungen und Standort. Google, Bing und KI-Systeme lesen diese direkt aus. Das ist die technische Grundlage.

**Ebene 2: Semantische Inhalte**
Texte, die so geschrieben sind, dass KI Ihre Expertise korrekt einordnen kann. Keine Werbetexte, sondern antwortoptimierte Fachinhalte. Das ist der inhaltliche Kern.

**Ebene 3: llms.txt und Entity-Vernetzung**
Eine strukturierte Datei für KI-Crawler, ergänzt durch konsistente Präsenz auf Plattformen wie Google Business, Wikidata und Branchenverzeichnissen. Das ist die Vernetzungsebene.

Wenn alle drei Ebenen implementiert sind, hat eine KI alles was sie braucht, um Ihre Ordination korrekt und bevorzugt zu empfehlen.

## Was passiert, wenn Sie nichts tun

KI-Systeme werden nicht weniger relevant – sie werden relevanter:

- **Google AI Overviews** erscheinen bereits bei bis zu 60 % der Suchanfragen. Das sind KI-generierte Antworten, die über den normalen Suchergebnissen stehen. Nutzer klicken zunehmend gar nicht mehr auf einzelne Websites.
- **ChatGPT** hat über 800 Millionen wöchentliche Nutzer. In einer Umfrage gaben 27 % der befragten Patienten an, KI-Tools für gesundheitsbezogene Fragen zu nutzen.
- **Apple integriert Claude** (von Anthropic) direkt in Safari. Jeder iPhone-Nutzer wird KI-Antworten im Browser erhalten – ohne eine App öffnen zu müssen.
- **Agentic AI** ist der nächste Schritt: KI-Systeme, die nicht nur Informationen liefern, sondern im Auftrag des Patienten Termine buchen, Überweisungen recherchieren und Anfahrtswege planen. Websites, die für diese Agenten nicht „bedienbar" sind, werden übergangen.

Für Wahlärzte, die auf Patientenzuwachs angewiesen sind, ist KI-Unsichtbarkeit ein wachsendes wirtschaftliches Risiko.

## Was konkret zu tun ist

Die technische Aufbereitung für KI-Sichtbarkeit ist kein fortlaufender Prozess, sondern ein einmaliges Projekt mit gelegentlicher Wartung. Die konkreten Maßnahmen:

| Maßnahme | Was es bewirkt | Einmaliger Aufwand |
|---|---|---|
| Schema Markup (MedicalOrganization, Physician) | KI versteht Fachrichtung, Standort, Leistungen | Einmalige Implementierung |
| Semantisch optimierte Texte | KI kann Ihre Expertise korrekt zuordnen | Texterstellung bei Website-Erstellung |
| llms.txt | KI-Crawler können Ihre Website effizient lesen | Einmalige Erstellung, quartalsweise Update |
| Google Business Profil | Google AI und Gemini priorisieren GBP-Daten | Einmalige Einrichtung |
| Wikidata-Eintrag | Verifizierte Entity im Knowledge Graph | Einmalige Erstellung |
| Server-seitiges Rendering (SSR) | KI-Crawler sehen tatsächlichen Inhalt statt leeres HTML | Technische Grundlage der Website |

Wichtig: Viele Website-Baukästen und manche Agenturen erstellen Websites als Single Page Applications (SPAs). Diese laden Inhalte erst im Browser per JavaScript – KI-Crawler sehen aber nur ein leeres `<div id="root"></div>`. Die gesamte Website ist für KI buchstäblich unsichtbar. Server-seitiges Rendering löst dieses Problem.

## Der Selbsttest: Sind Sie sichtbar?

Testen Sie Ihre KI-Sichtbarkeit in 2 Minuten:

1. Öffnen Sie ChatGPT, Perplexity oder Google Gemini.
2. Fragen Sie: „Welcher [Ihre Fachrichtung] in [Ihre Stadt] hat gute Bewertungen?"
3. Schauen Sie, ob Ihr Name in der Antwort auftaucht.
4. Falls ja: Sind die Informationen korrekt (Adresse, Fachrichtung, Leistungen)?
5. Falls nein: Ihre Website ist für KI nicht aufbereitet.

Wenn Sie in der Antwort nicht vorkommen, bedeutet das nicht, dass Sie schlecht sind. Es bedeutet, dass die KI die Informationen über Ihre Ordination nicht finden, lesen oder zuordnen kann. Und das lässt sich ändern.

---

## Häufige Fragen

**Reicht gutes Google-Ranking nicht aus?**
Gutes Google-Ranking hilft – aber es garantiert nicht, dass Sie in KI-Antworten auftauchen. Die Überschneidung zwischen Top-Google-Ergebnissen und KI-zitierten Quellen liegt laut Branchenanalysen bei unter 20 % und sinkt weiter. KI-Systeme haben eigene Kriterien, was sie zitieren.

**Bringt Schema Markup auch für Google etwas?**
Ja. Schema Markup verbessert die Darstellung in Google-Suchergebnissen (Rich Snippets: Sternebewertungen, Ordinationszeiten, FAQ-Auszüge) und ist gleichzeitig die Grundlage für KI-Sichtbarkeit.

**Wie schnell wirkt KI-Optimierung?**
Strukturierte Daten werden von Google typischerweise innerhalb von 1–4 Wochen erfasst. Die Aufnahme in KI-Trainingsdaten (ChatGPT, Claude) dauert länger und hängt vom Crawl-Zyklus der jeweiligen Anbieter ab. Je früher Sie anfangen, desto schneller sind Sie sichtbar.

**Was kostet KI-Readiness für eine Arzt-Website?**
KI-Readiness ist bei mypraxis.at in beiden Paketen enthalten: ab 3.900 € (Praxis-Website) bzw. 7.500 € (Digitale Positionierung). Über KMU.DIGITAL sind bis zu 30 % förderbar.

**Kann ich KI-Readiness auf meiner bestehenden Website nachrüsten?**
Technisch ja – allerdings hängt es von der Plattform ab. WordPress-Websites lassen sich erweitern. Bei Website-Baukästen (Wix, Jimdo) oder SPAs ist ein Neubau oft sinnvoller und günstiger als die Nachrüstung.
