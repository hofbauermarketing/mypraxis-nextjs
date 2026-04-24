---
title: "Lokales SEO für Arztpraxen: den eigenen Standort online dominieren"
date: "2026-04-24"
description: "Wenn eine Patientin nach „Dermatologe Graz-Andritz“ sucht, entscheidet lokales SEO wer gefunden wird. Google Business Profile, NAP-Konsistenz, Schema.org, Core Web Vitals, Stadtteil-Inhalte und lokale Backlinks — die vollständige Checkliste für Arztpraxen in Österreich 2026."
author: "Kevin Hofbauer"
image: "/blog/lokales-seo-arztpraxis.png"
imageAlt: "Smartphone mit lokalem Such-Ergebnis für Arztpraxen und Karte — Symbol für lokales SEO im Gesundheitsbereich"
---

Wenn eine Patientin in Graz nach „Dermatologe Andritz" sucht, passiert Folgendes: Google zeigt in 80 % der Fälle zuerst den **Map Pack** (die Top-3-Karte mit Praxen), darunter AI Overview mit direkter Antwort, erst dann die klassischen Ergebnis-Links. Wer nicht im Map Pack ist, verliert die erste Welle. Und wer nicht in AI-Antworten genannt wird, verliert die zweite.

Lokales SEO ist 2026 **nicht mehr optional** für Arztpraxen — es ist der Hauptkanal für neue Patient:innen. Dieser Artikel zeigt die sieben Rankingfaktoren, die 2026 den Unterschied machen — in der Reihenfolge ihrer Wirkung.

## Faktor 1: Google Business Profile (wichtigster Hebel)

Das GBP ist der **einzelne wichtigste** Rankingfaktor für lokale medizinische Suchen. Wir haben dem einen eigenen Artikel gewidmet: [Google Business Profile für Ordinationen](/blog/google-business-ordination) — optimierte Primär-Kategorie, vollständige NAP, ausgefüllte Attribute, regelmäßige Posts, aktives Bewertungs-Management.

Kurzversion: wer hier 90 % Vollständigkeit erreicht, hat die halbe Miete.

## Faktor 2: NAP-Konsistenz auf allen Plattformen

**NAP** = Name + Adresse + Phone. Diese drei Daten müssen **identisch** sein auf:

- Ihrer Praxiswebsite (Impressum, Kontakt-Seite, Footer)
- Google Business Profile
- DocFinder
- Herold
- Firmen-ABC / gelbeseiten.at
- Apothekerkammer- / Ärztekammer-Register
- Allen Social-Media-Profilen (falls vorhanden)
- Eventuelle weitere Branchen-Verzeichnisse

**Warum das so kritisch ist:** Google quervergleicht Ihre Daten aus allen öffentlichen Quellen. Widersprüche („Dr. Müller Straße" vs. „Dr.-Müller-Straße", „+43 1 1234567" vs. „01 1234567") werden als Unsicherheit gewertet und senken das Ranking.

**Praxis-Tipp:** Einmal ein „Master-NAP" definieren (mit offiziellem Straßennamen exakt wie im Wiener/Grazer Straßenverzeichnis, exakter Telefon-Formatierung) und alle Plattformen einmalig darauf harmonisieren. Inkonsistenzen tauchen auf, wenn bei Praxisumzug die Adresse nur teilweise aktualisiert wurde.

## Faktor 3: Schema.org MedicalBusiness auf der eigenen Website

JSON-LD mit **MedicalBusiness** (spezifischer als **LocalBusiness**) macht Ihre Website für Google direkt maschinenlesbar. Felder, die maximale Wirkung entfalten:

```
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Anna Müller — Hausarzt-Ordination",
  "address": { ... },
  "geo": { "@type": "GeoCoordinates", "latitude": 48.2082, "longitude": 16.3738 },
  "telephone": "+43 1 1234567",
  "openingHoursSpecification": [...],
  "medicalSpecialty": ["Allgemeinmedizin", "Diabetologie"],
  "availableLanguage": ["Deutsch", "Türkisch", "Englisch"],
  "areaServed": {
    "@type": "City",
    "name": "Wien"
  },
  "isAcceptingNewPatients": true
}
```

Die Felder `geo` (mit exakten Koordinaten), `areaServed` und `isAcceptingNewPatients` sind die am häufigsten vergessenen — aber sehr wirkungsvollen — Angaben.

## Faktor 4: Lokale Inhalte mit Stadtteil-/Bezirks-Bezug

Generische Texte („Wir sind Ihre Hausarzt-Praxis in Wien") ranken schlechter als **bezirksspezifische** Inhalte.

**Stark:**
- „Hausarzt in Wien-Liesing — Schwerpunkt Diabetes-Nachsorge"
- „Dermatologie-Ordination im 8. Bezirk mit spezialisiertem Hautkrebs-Screening"
- „Orthopädie in Graz-Eggenberg — nah an der Medizinischen Universität"

**Schwach:**
- „Wir sind Ihre Ordination in Österreich"
- „Medizinische Versorgung auf höchstem Niveau"

**Umsetzungs-Tipp:** Eine dedizierte Unterseite pro Bezirk/Stadtteil, den Sie besonders bedienen — mit spezifischen Infos zu Anfahrt, ÖPNV-Anbindung, umliegenden Wohngebieten. Das wirkt wie mehrere lokale Visitenkarten auf einer Domain.

## Faktor 5: Core Web Vitals und Mobile-First

Google bewertet 2026 konsequent die **technische Qualität** der Website — gemessen in drei Metriken:

**LCP (Largest Contentful Paint):** Wie schnell ist der größte sichtbare Inhalt geladen? Ziel: unter 2,5 Sekunden.

**INP (Interaction to Next Paint, seit 2024 FID-Nachfolger):** Wie schnell reagiert die Seite auf Klicks/Tastatureingaben? Ziel: unter 200 ms.

**CLS (Cumulative Layout Shift):** Verschieben sich Elemente beim Laden? Ziel: unter 0,1.

**Mobile-First:** Google rankt ausschließlich nach der mobilen Version einer Website. Wer eine hübsche Desktop-Version, aber eine schwache Mobile-Version hat, rankt schlecht.

**Test-Tools:** Google PageSpeed Insights, Lighthouse in Chrome DevTools. Beide kostenlos, beide liefern konkrete Verbesserungsvorschläge.

Häufige Ursachen für schlechte Core Web Vitals in Arzt-Websites: riesige, nicht optimierte Bilder, alte JavaScript-Bibliotheken, veraltete WordPress-Templates mit überladenen Plugins.

## Faktor 6: Lokale Backlinks

Links von **lokalen Quellen** zu Ihrer Praxis sind ein starkes Ranking-Signal:

- Ärztekammer-Verzeichnis (Link zu Ihrer Website bei der Praxis-Eintragung)
- DocFinder Premium-Profile (Website-Link-Option)
- Lokale Branchen-Verzeichnisse (Firmen-ABC, gelbeseiten.at, herold.at)
- Lokale Partner (Physiotherapie-Praxis in der Nähe, Apotheke, Fitnessstudio mit Sportmedizin-Kooperation)
- Gemeinde-Website (Ärzt:innen-Liste der Stadt/Bezirk)
- Bezirkszeitung oder Stadtmagazin-Artikel

**Wichtig:** Keine gekauften Links, keine Link-Farmen, keine manipulativen Praktiken — Google erkennt das und sanktioniert. Organisch aufgebaute lokale Links sind wertvoller als 100 gekaufte generische Links.

## Faktor 7: Bewertungen

Bewertungen auf **Google**, DocFinder und Branchenseiten sind ein messbarer Ranking-Signal. Zwei Dimensionen:

- **Anzahl** der Bewertungen (quantitative Basis)
- **Durchschnitts-Stern-Bewertung** (qualitative Indikator)

Eine Praxis mit 120 Bewertungen und 4,6 Sternen rankt typisch besser als eine mit 15 Bewertungen und 5,0 Sternen — Google wertet das Volumen als Vertrauens-Signal.

**Wichtig:** Keine Bewertungen kaufen, keine Fake-Bewertungen schreiben lassen. Das OGH-Urteil **6 Ob 48/16a** hat auch klargestellt, dass manipulative Bewertungen strafrechtlich relevant sein können. Mehr dazu im Artikel [Bewertungen rechtssicher umgehen](/blog/bewertungen-rechtssicher-aerzte).

## Drei häufige Mythen

**Mythos 1: „Mehr Keywords = besseres Ranking."**  
Falsch. Google erkennt Keyword-Stuffing und wertet ab. Natürliche, persona-orientierte Sprache gewinnt gegen keyword-überladene Texte.

**Mythos 2: „Meta-Keywords-Tag bringt was."**  
Falsch. Google ignoriert das Meta-Keywords-Tag seit 2009 komplett. Meta-Description bleibt wichtig (für Click-Through-Rate in den Ergebnissen), Meta-Keywords ist irrelevant.

**Mythos 3: „Ich brauche 100 Backlinks."**  
Falsch. 10 hochwertige lokale Links schlagen 100 generische Verzeichnis-Links. Qualität vor Quantität.

## Checkliste: Ihr lokales SEO in 90 Minuten prüfen

**Phase 1 — Google Business Profile** (30 Min):
- [ ] Profil beansprucht und verifiziert
- [ ] Primär-Kategorie möglichst spezifisch gewählt
- [ ] Alle Services ausgefüllt
- [ ] Alle Attribute gesetzt (barrierefrei, neue Patient:innen, Sprachen)
- [ ] Echte Fotos hochgeladen
- [ ] Beschreibung ÖÄK-konform formuliert

**Phase 2 — NAP-Check** (15 Min):
- [ ] Website Impressum, Kontakt, Footer identisch
- [ ] DocFinder, Herold, Google identisch
- [ ] Format einheitlich (Straßennamen, Telefon-Format)

**Phase 3 — Website-Technik** (30 Min):
- [ ] Google PageSpeed Insights laufen lassen
- [ ] Mobile-Ansicht testen
- [ ] Core Web Vitals grün
- [ ] Schema.org MedicalBusiness implementiert

**Phase 4 — Content-Check** (15 Min):
- [ ] Hauptstadt/Bezirk in H1/H2
- [ ] Pro Schwerpunkt eine bezirksspezifische Unterseite
- [ ] Meta-Description pro Unterseite individuell

## Fazit: Lokales SEO ist 2026 die effizienteste Marketing-Investition

Kein anderer Marketing-Kanal hat für niedergelassene Ärzt:innen so ein gutes Aufwands-Nutzen-Verhältnis wie sauberes lokales SEO. Eine Einmal-Investition von rund 8-10 Stunden Setup-Arbeit plus monatlich ~30 Minuten Pflege liefert über Jahre messbar mehr Sichtbarkeit in Google Maps, Google AI Overviews und klassischer Suche.

Wer die sieben Faktoren oben systematisch abarbeitet, wird in seinem Einzugsgebiet dominanter — ohne ein einziges Werbe-Euro zu bezahlen.

---

**Verwandte Themen auf mypraxis.at:**
- [Google Business Profile für Ordinationen](/blog/google-business-ordination) — Schritt-für-Schritt
- [ChatGPT findet Sie nicht? 5 Schritte zur KI-Sichtbarkeit](/blog/chatgpt-ordination-finden) — Schema & KI
- [BFSG für Arztpraxen](/blog/bfsg-arztpraxen-checkliste) — technische Grundlagen überschneiden sich
- [Wahlarzt-Positionierung online](/blog/wahlarzt-positionierung-docfinder) — DocFinder vs. eigene Domain

**Praxis-Audit gefällig?** 30 Minuten kostenloses Erstgespräch — wir schauen uns Ihr aktuelles Ranking und die Optimierungs-Hebel an. [Erstgespräch anfragen →](/#kontakt)
