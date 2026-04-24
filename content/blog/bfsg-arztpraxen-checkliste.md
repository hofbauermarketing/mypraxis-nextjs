---
title: "BFSG für Arztpraxen ab Juni 2025: die komplette Pflicht-Checkliste"
date: "2026-04-24"
description: "Seit 28. Juni 2025 gilt das Barrierefreiheitsgesetz (BaFG/BFSG) für Praxiswebsites mit Online-Terminbuchung, Kontaktformularen oder Cookie-Bannern. Wer ist betroffen, was muss umgesetzt werden, welche Bußgelder drohen — und was zeigen die ersten Abmahnungen 2025."
author: "Kevin Hofbauer"
image: "/blog/bfsg-arztpraxen-checkliste.png"
imageAlt: "Modernes Wartezimmer einer Arztpraxis mit barrierefreier Beschilderung und gutem Lichtkonzept"
---

Seit dem **28. Juni 2025** gilt in Österreich das **Barrierefreiheitsgesetz (BaFG)** — die Umsetzung der EU-Richtlinie 2019/882 (European Accessibility Act). Parallel dazu greift in Deutschland das wirkungsgleiche **BFSG (Barrierefreiheitsstärkungsgesetz)**. Für niedergelassene Ärztinnen und Ärzte ist das keine theoretische Übung mehr: Praxiswebsites mit Online-Terminbuchung, Kontaktformularen, Sprechzeiten-Anzeige oder Cookie-Banner fallen direkt unter die neuen Pflichten — und die ersten Abmahnungen sind bereits da.

Dieser Artikel klärt: Wer ist betroffen, welche Funktionen müssen barrierefrei sein, welche WCAG-Stufe ist Pflicht, welche Strafen drohen — und wie eine konkrete Checkliste für die eigene Ordination aussieht.

## Wer ist betroffen — und wer fällt unter die Ausnahme

Das BaFG (Österreich) und das BFSG (Deutschland) gelten für **alle privaten Wirtschaftsakteure**, die digitale Dienstleistungen an Verbraucher anbieten. Praxiswebsites zählen explizit dazu, sobald sie eine der folgenden Funktionen enthalten:

- **Online-Terminbuchung** (interaktiv oder via eingebundenes Buchungs-Tool)
- **Kontaktformulare** für Patient:innen-Anfragen
- **Cookie-Banner** mit Auswahlmöglichkeit
- **Online abrufbare Informationsdienste** wie Sprechzeiten, Anfahrt, Leistungsübersicht
- **Patient:innen-Kommunikation** über die Website (Rezept-Bestellung, Befund-Abruf etc.)

Ausgenommen sind ausschließlich **Kleinstunternehmen** im Sinne der EU-Definition: weniger als 10 Mitarbeiter:innen **und** weniger als 2 Millionen Euro Jahresumsatz. In der Praxis bedeutet das: viele Einzelordinationen mit wenig Personal könnten theoretisch unter die Ausnahme fallen — aber nur, wenn beide Schwellen unterschritten werden. Sobald eine Ordination Assistent:innen, eine Mundhygienikerin oder mehr Personal beschäftigt, ist die Schwelle schnell erreicht.

Wichtig für **Wahlordinationen, Gruppenpraxen, Ärztezentren und Primärversorgungs-Einheiten**: Die Mitarbeiter:innen-Zahl wird je Wirtschaftseinheit gerechnet — eine PVE mit 6 Ärzt:innen plus Assistenz fällt definitiv unter das BaFG.

Zusätzlich: Auch wer derzeit als Kleinstunternehmen ausgenommen ist, sollte die Anforderungen mitdenken. Eine Übergangsfrist für bestehende Verträge läuft bis **2030** — danach gilt die Pflicht universell, ohne Ausnahmen.

## Welche WCAG-Stufe ist Pflicht

Beide Gesetze orientieren sich an den **Web Content Accessibility Guidelines (WCAG) 2.1** auf der **Konformitätsstufe AA**. Stufe AAA ist freiwillig. Die WCAG-AA-Anforderungen lassen sich in vier Prinzipien zusammenfassen, die jede Praxiswebsite einhalten muss:

### 1. Wahrnehmbar
Inhalte müssen für alle Sinne zugänglich sein:
- **Alt-Texte für Bilder** (z. B. „Wartezimmer Dr. Müller mit Pflanzen und Tageslicht")
- **Untertitel für Videos** (z. B. Praxis-Vorstellungs-Clip)
- **Ausreichender Farbkontrast** (4,5:1 für Standard-Text, 3:1 für große Schrift)
- **Skalierbarkeit auf 200 % ohne Verlust der Funktion**

### 2. Bedienbar
Alle Funktionen müssen mit Tastatur, Sprache und assistiver Technologie zugänglich sein:
- **Tastatur-Navigation** für alle interaktiven Elemente (Termin-Buchung, Kontaktformular, Menü)
- **Skip-Link** zum Hauptinhalt
- **Genügend Zeit** für Eingaben (kein zu schnelles Time-Out bei Buchungen)
- **Keine Inhalte mit blitzartigem Wechsel** (Epilepsie-Risiko)

### 3. Verständlich
Sprache und Bedienung müssen klar sein:
- **Sprache der Seite** im HTML deklariert (`lang="de-AT"`)
- **Konsistente Navigation** über alle Unterseiten
- **Hilfreiche Fehlermeldungen** bei Formulareingabe (statt nur „Fehler" → „Bitte tragen Sie eine gültige E-Mail-Adresse ein")
- **Einfache Sprache** wo möglich — besonders bei medizinischen Erklärungen

### 4. Robust
Technisch sauber für aktuelle und zukünftige Browser/Assistenz-Tools:
- **Valides HTML**
- **Korrekte ARIA-Labels** für Screen Reader
- **Semantisches Markup** (echte `<button>`, `<a>`, `<form>` — nicht nur gestylte `<div>`)

## Welche Funktionen einer Praxiswebsite besonders kritisch sind

In der Praxis sind drei Bereiche überproportional von Abmahnungen betroffen:

**Online-Terminbuchung** ist der häufigste Stolperstein. Viele eingebundene Buchungs-Tools (z. B. von externen Anbietern wie Doctolib, Jameda Termine) erfüllen WCAG 2.1 AA nicht out-of-the-box. Die Verantwortung liegt aber bei der Praxis — nicht beim Tool-Anbieter. Vor Einbindung muss geprüft werden, ob das Tool BFSG-konform ist. Mehrere Anbieter werben inzwischen aktiv mit BFSG-Konformität — diese Aussage sollte vertraglich abgesichert sein.

**Cookie-Banner** sind die zweite Quelle für Abmahnungen. Häufige Probleme: keine Tastatur-Navigation, kein „Alle ablehnen"-Button auf erster Ebene, kein ausreichender Farbkontrast bei Buttons, fehlende ARIA-Labels.

**Kontaktformulare** scheitern oft an Pflichtfeld-Markierung (nicht nur farblich), Fehlermeldungen ohne Screen-Reader-Support und fehlenden Beschriftungen (Labels mit `for`-Attribut).

## Welche Bußgelder drohen — und welche Abmahnungen 2025 schon bekannt sind

Die Sanktionen sind teilweise empfindlich:

- **Österreich (BaFG)**: Verwaltungsstrafen bis **80.000 Euro** pro Verstoß. Zusätzlich kann das Sozialministeriumservice als Marktüberwachungsbehörde Anordnungen zur Nachbesserung erlassen.
- **Deutschland (BFSG)**: Bußgelder bis **100.000 Euro** pro Verstoß durch die jeweils zuständige Marktüberwachungsbehörde des Bundeslandes.

Hinzu kommen die **wettbewerbsrechtlichen Abmahnungen**: Mitbewerber:innen oder Verbraucherschutz-Organisationen können fehlende Barrierefreiheit als Wettbewerbsverstoß abmahnen — mit Anwaltskosten von typisch 800 bis 2.500 Euro pro Fall, plus Unterlassungserklärung mit hohen Vertragsstrafen bei Wiederholung.

Erste dokumentierte Fälle aus Deutschland im zweiten Halbjahr 2025 betreffen vor allem Online-Terminbuchungen und Cookie-Banner. In Österreich liegen die ersten Verfahren noch bei der Marktüberwachung — eine Welle wird für 2026 erwartet, sobald die ersten Klärungen durch die Rechtsprechung vorliegen.

## Praxis-Checkliste: Was jetzt zu tun ist

Diese Checkliste hilft, den eigenen BaFG/BFSG-Status systematisch zu prüfen:

**Bestandsaufnahme (Tag 1):**
- Ist meine Praxis Kleinstunternehmen (< 10 MA, < 2 Mio. Euro)? Wenn nein: Pflicht greift.
- Welche Verbraucher-Funktionen hat meine Website (Termin, Kontakt, Cookies, Info)?
- Welche externen Tools sind eingebunden (Buchungs-Tool, Karten-Anbieter, Cookie-Banner)?

**Technischer Audit (Woche 1):**
- WCAG 2.1 AA Audit beauftragen (entweder selbst mit Tools wie WAVE, axe DevTools, Lighthouse — oder professionell)
- Liste aller Befunde nach Schweregrad sortieren
- Externe Tools auf BFSG-Konformität prüfen, ggf. Anbieter wechseln

**Umsetzung (Wochen 2-6):**
- Fehlende Alt-Texte ergänzen
- Farbkontraste anpassen
- Tastatur-Navigation testen und reparieren
- ARIA-Labels nachrüsten
- Semantisches HTML korrigieren
- Cookie-Banner überarbeiten oder Anbieter wechseln
- Sprache, Skip-Link, valides HTML sicherstellen

**Dokumentation (Woche 7):**
- **Erklärung zur Barrierefreiheit** auf der Website veröffentlichen (Pflicht!)
- Diese Erklärung muss enthalten: Stand der Konformität, ggf. nicht konforme Bereiche und Begründung, Kontakt für Rückmeldungen
- Feedback-Mechanismus einrichten (z. B. Kontakt-Mail für Barriere-Meldungen)

**Laufende Pflege:**
- Bei jeder neuen Seite oder neuem Inhalt: WCAG-Konformität mitprüfen
- Jährliches Re-Audit empfehlenswert
- Mitarbeiter:innen-Schulung für Inhalts-Pflege

## Mehrsprachigkeit als Bonus — und neue Pflicht in Risiko-Praxen

Das BaFG fordert „verständliche Sprache" — nicht zwingend Mehrsprachigkeit. Für Praxen mit mehrsprachigem Patient:innen-Stamm (z. B. Wien, Linz, Graz) entsteht aber ein faktischer Druck: Eine deutschsprachige Website, die für eine arabisch- oder türkischsprachige Patient:in nicht zugänglich ist, kann als Diskriminierung gewertet werden — wenn auch nicht direkt unter dem BaFG. Mehrsprachige Info-Layer (z. B. via Accessibility-Widget mit DeepL-Anbindung oder statisch vorübersetzten Schlüssel-Seiten) sind daher eine kluge Investition über das gesetzliche Minimum hinaus.

## Was passiert, wenn die Praxis nichts tut

Drei Szenarien sind realistisch:

1. **Stille Phase 2026**: Die Praxis bleibt unauffällig, weil keine Abmahnung kommt. Risiko: Bei jedem Patient:innen-Wechsel, der Barrierefreiheit aktiv prüft, und bei jeder Mitbewerber:in-Klage steigt die Gefahr.

2. **Abmahnung 2026/2027**: Die Praxis bekommt eine Abmahnung. Kosten: 800-2.500 Euro Anwalt + Unterlassungserklärung mit Vertragsstrafe ab dem nächsten Verstoß. Plus Reputationsschaden, wenn Abmahnung publik wird.

3. **Behördliches Verfahren**: Das Sozialministeriumservice (Österreich) bzw. die Marktüberwachung (Deutschland) leitet ein Verfahren ein. Bußgeld bis 80.000/100.000 Euro möglich. Praxis-Website wird ggf. abgeschaltet, bis Konformität nachgewiesen ist.

## Fazit: BaFG/BFSG ist kein Marketing-Thema, sondern Risiko-Management

Die Anforderungen sind klar, die Frist ist abgelaufen, die ersten Abmahnungen sind dokumentiert. Praxen, die ihre Website noch nicht audit-fest gemacht haben, riskieren ab 2026 spürbare Kosten — finanziell und in der Reputation.

Die gute Nachricht: WCAG 2.1 AA ist nicht so kompliziert, wie es klingt. Die meisten Anforderungen lassen sich mit modernem HTML, ein paar ARIA-Anpassungen und einem ehrlichen Audit erfüllen. Schwieriger sind die externen Tools — hier muss man Anbieter konsequent zur Verantwortung ziehen oder wechseln.

Wer eine Praxiswebsite neu baut oder relauncht, sollte BFSG-Konformität von Anfang an mitdenken — als Standard, nicht als Aufpreis. Das spart später Nachbesserungs-Kosten und schließt das größte Abmahn-Risiko aus.

---

**Verwandte Themen auf mypraxis.at:**
- [Was kostet eine Arzt-Website in Österreich?](/blog/was-kostet-website-arzt) — Marktpreise und Auswahlkriterien
- [DSGVO für Arzt-Websites](/blog/dsgvo-arzt-website) — Pflichten parallel zum BaFG
- [Barrierefreiheitsgesetz für Ärzte](/blog/barrierefreiheitsgesetz-aerzte) — Hintergrund-Artikel
- [Für Kassenärzt:innen](/fuer-kassenaerzte) — barrierefreie Websites als Entlastungs-Werkzeug
- [Für Privat- und Wahlärzt:innen](/fuer-privatarzt) — BFSG-Konformität ab Tag 1

Wenn Sie unsicher sind, ob Ihre Praxiswebsite die BaFG/BFSG-Anforderungen erfüllt: Wir prüfen das im **kostenlosen 30-Minuten-Erstgespräch**, ohne Verpflichtung. [Erstgespräch mit Kevin anfragen →](/#kontakt)
