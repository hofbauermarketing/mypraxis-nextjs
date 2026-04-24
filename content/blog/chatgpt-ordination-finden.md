---
title: "ChatGPT findet Sie nicht? 5 Schritte zur KI-Sichtbarkeit für Ihre Ordination"
date: "2026-04-24"
description: "Patient:innen suchen 2026 zunehmend in ChatGPT, Perplexity und Google AI Overviews nach Ärzt:innen — nicht mehr nur in Google. Welche fünf konkreten technischen Schritte machen Ihre Praxis für KI-Suchsysteme sichtbar: Schema.org, llms.txt, robots.txt für KI-Crawler und semantischer Content."
author: "Kevin Hofbauer"
image: "/blog/chatgpt-ordination-finden.png"
imageAlt: "Smartphone mit KI-Chat-Oberfläche auf einem Praxis-Schreibtisch — Sinnbild für KI-Sichtbarkeit von Arztpraxen"
---

Wenn ein Patient seinen Hausarzt heute fragt, ob er eine bestimmte Wahlärzt:in empfehlen kann, kommt das Gespräch oft zurück mit: „Ich hab das auch in ChatGPT gefragt — die haben drei genannt, aber Sie waren nicht dabei." Was vor zwei Jahren noch eine Randerscheinung war, ist 2026 Mainstream: **rund 15 % aller Gesundheitsrecherchen laufen inzwischen über KI-Tools** wie ChatGPT, Perplexity, Google AI Overviews, Claude oder Gemini — Tendenz stark steigend. Wer in diesen Antworten nicht vorkommt, existiert für ein wachsendes Patient:innen-Segment schlicht nicht.

Anders als bei Google geht es hier nicht primär um Keywords und Backlinks. KI-Systeme wollen **strukturierte, eindeutige, maschinenlesbare Information**. Wer das liefert, wird gefunden. Wer nicht: nicht.

Dieser Artikel zeigt fünf konkrete technische Schritte, mit denen Ärzt:innen ihre Praxis für KI-Suchsysteme sichtbar machen — alle umsetzbar 2026, ohne Marketing-Magie.

## Schritt 1: Schema.org MedicalBusiness als JSON-LD im Kopf

Schema.org-Markup ist das wichtigste Signal für KI-Crawler. Speziell die Typen **MedicalBusiness**, **MedicalClinic** und **Physician** sagen einer KI klar: „Hier ist eine medizinische Einrichtung mit folgenden Eigenschaften."

Ein einfaches Beispiel für eine Wiener Allgemeinmedizin-Praxis:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. med. Anna Müller — Hausarzt-Ordination Wien",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mariahilfer Straße 123",
    "addressLocality": "Wien",
    "addressCountry": "AT",
    "postalCode": "1060"
  },
  "telephone": "+43-1-1234567",
  "medicalSpecialty": ["Allgemeinmedizin", "Diabetologie"],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday"], "opens": "08:00", "closes": "16:00" }
  ],
  "url": "https://www.mueller-praxis.at"
}
</script>
```

Was viele Praxen vergessen: **medicalSpecialty** als Array eintragen, mehrere Schwerpunkte auflisten, **availableLanguage** für Sprachen ergänzen, **areaServed** für das Einzugsgebiet definieren. Je präziser, desto besser kann eine KI antworten auf „Welche Hausärzt:innen in Wien-Mariahilf nehmen Türkisch sprechende Patient:innen?".

Erste Tests aus Deutschland und Österreich zeigen: Praxen mit sauberem Schema.org-Markup steigern ihre Sichtbarkeit in KI-Antworten messbar. Die genauen Zahlen variieren je Modell, aber die Richtung ist eindeutig.

## Schritt 2: llms.txt — die KI-spezifische Anleitung für Ihre Website

Der Standard **llms.txt** ist 2024 entstanden, hat sich aber 2025/2026 als De-facto-Norm etabliert. Es ist eine kleine Markdown-Datei im Root Ihrer Website (`https://www.ihre-praxis.at/llms.txt`), die KI-Crawlern eine kuratierte Übersicht Ihrer wichtigsten Inhalte liefert.

Während robots.txt sagt „was darfst du lesen", sagt llms.txt: „Was solltest du lesen, wenn du eine Frage zu mir hast?". Eine gute llms.txt für eine Arztpraxis enthält:

- **Beschreibung** der Praxis in 2-3 Sätzen
- **Leistungs-Übersicht** mit Links zu Detail-Seiten
- **Fachgebiet, Schwerpunkte, Sprachen**
- **Wichtige FAQ-Antworten** (Sprechzeiten, Kassen, Terminvergabe)
- **Über die/den Ärzt:in** (Werdegang, Fortbildungen)

KI-Systeme wie Perplexity und Claude lesen llms.txt aktiv aus. ChatGPT folgt — die Funktion ist im Custom-GPT-Bereich bereits dokumentiert.

## Schritt 3: robots.txt für KI-Crawler explizit erlauben

Viele Praxis-Websites haben eine robots.txt, die nur Google und Bing erwähnt. Die KI-Crawler werden dann standardmäßig zugelassen — was meist gewünscht ist, aber nicht immer. Wer sicher sein will, dass sein Inhalt in KI-Antworten landet, sollte die wichtigsten KI-Bots explizit erlauben:

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /
```

Achtung: Wer hier `Disallow: /` schreibt (z. B. aus Datenschutz-Gründen), schließt sich aktiv aus den KI-Antworten aus. Das ist legitim, sollte aber bewusst entschieden werden — und nicht versehentlich passieren, weil eine alte robots.txt-Vorlage übernommen wurde.

## Schritt 4: Semantischer, dialog-orientierter Content

KI-Systeme lieben **frage-und-antwort-strukturierte Inhalte**. Eine FAQ-Sektion auf der Praxiswebsite ist nicht nur für Patient:innen hilfreich — sie ist für KI-Crawler **das wichtigste maschinenlesbare Signal**. Strukturieren Sie Ihre FAQs nach diesem Muster:

- **Konkrete, alltagsnahe Frage** (so wie Patient:innen sie tatsächlich stellen)
- **Klare, faktische Antwort** (3-6 Sätze, keine Marketing-Phrasen)
- **Optional**: schema.org/FAQPage als JSON-LD ergänzen

Beispiel für Hausarzt-Praxis:

> **Frage**: Wie bekomme ich am Montag einen schnellen Termin?  
> **Antwort**: Wir halten täglich drei Akut-Slots ab 7:30 Uhr für Notfälle frei. Für regulär planbare Termine nutzen Sie bitte die Online-Terminbuchung mindestens 24 Stunden im Voraus. Bei Krankschreibung ohne klassischen Untersuchungsbedarf können Sie auch telefonisch einen Termin vereinbaren — wir telefonieren dann zwischen 11:00 und 12:00 zurück.

Drei Konkretika — Akut-Slot, Online-Buchung, Krankschreibung — strukturiert, ohne Werbesprech. Genau das, was eine KI als verlässliche Information weitergibt.

## Schritt 5: Persona-orientierte Inhalte statt generischer Leistungsliste

Der schwerste Punkt — aber der mit dem größten Hebel. KI-Systeme antworten besonders gut auf **konkrete, persona-orientierte** Patient:innen-Fragen. Wer auf der Website eine generische Leistungsliste hat („Allgemeinmedizin, Vorsorge, Impfungen"), wird in der KI-Antwort gegen Mitbewerber:innen mit konkreten Texten verlieren.

Ein Beispiel-Vergleich für eine Psychiatrie-Praxis:

**Generisch (schwach)**:  
„Wir bieten Psychiatrie und Psychotherapie an. Schwerpunkte: Depression, Angststörungen, ADHS."

**Persona-orientiert (stark)**:  
„Bei uns finden vor allem Berufstätige zwischen 30 und 55 Jahren mit Stress-Symptomen, beginnender Depression oder Schlafstörungen einen ruhigen Raum. Erstgespräche dauern 75 Minuten, weil wir Anamnese gründlich aufnehmen. Verhaltenstherapeutisch geprägt, mit medikamentöser Option wenn sinnvoll."

Der zweite Text wird von einer KI eher als Empfehlung weitergegeben, weil er **konkret** ist. Wer konkret schreibt, gewinnt. Wer im Marketing-Allgemein bleibt, verliert.

## Was nicht funktioniert (Anti-Muster)

Gleichzeitig wichtig: einige Maßnahmen sind in der KI-Welt wertlos oder sogar schädlich.

- **Keyword-Stuffing**: KI-Modelle erkennen das sofort und werten den Inhalt ab.
- **Stock-Foto-lastige Seiten** ohne textliche Information: KI hat nichts zu lesen.
- **Marketing-Phrasen ohne Substanz** („Modernste Medizin auf höchstem Niveau") werden ignoriert.
- **DocFinder-Profil als einziger Online-Auftritt**: KI-Systeme priorisieren eigene Domains. Verzeichnis-Profile reichen nicht.
- **JavaScript-Only-Websites**: KI-Crawler lesen oft kein JavaScript. Wer eine Single-Page-App ohne Server-Side-Rendering hat, ist in vielen KI-Antworten unsichtbar.

## Wie Sie testen, ob Sie aktuell gefunden werden

Drei einfache Selbst-Tests:

1. **Direkt fragen**: ChatGPT öffnen, „Welche Wahlärzt:innen für [Ihr Fach] gibt es in [Ihrer Stadt]?" — werden Sie genannt?
2. **Mit URL fragen**: ChatGPT öffnen, „Was weißt du über www.ihre-praxis.at? Lies bitte die llms.txt und Schema-Daten." — kommt eine sinnvolle Antwort?
3. **Perplexity-Check**: Perplexity öffnen, gleiche Frage. Perplexity zeigt Quellen mit an — Sie sehen, woher die Antwort kommt.

Wenn Sie nicht oder nur dürftig erscheinen: keine Panik. Die meisten Arztpraxen sind 2026 noch nicht auf KI-Sichtbarkeit optimiert. Wer jetzt anfängt, hat einen Vorsprung von 6-12 Monaten gegenüber dem Wettbewerb.

## Fazit: KI-Sichtbarkeit ist 2026 ein Wettbewerbsfaktor

Patient:innen-Verhalten verschiebt sich messbar. Wer 2026 noch wartet, verpasst die Phase, in der KI-Systeme Praxen aktiv neu indexieren. Die fünf Schritte oben — Schema.org, llms.txt, robots.txt, semantischer Content, Persona-Tiefe — sind technisch machbar, kosten in der Umsetzung wenig und liefern messbar mehr Anrufe von Patient:innen, die zur eigenen Spezialisierung passen.

Wer eine bestehende Website hat, kann diese fünf Punkte schrittweise umsetzen. Wer eine neue Website plant, sollte sie von Anfang an KI-ready bauen — als Standard, nicht als Aufpreis.

---

**Verwandte Themen auf mypraxis.at:**
- [Warum Ihre Ordination bei ChatGPT nicht empfohlen wird](/blog/ki-sichtbarkeit-aerzte) — Hintergrund-Artikel
- [DocFinder, Herold, Google — Vergleich 2026](/blog/docfinder-herold-google-vergleich) — wo Patient:innen heute suchen
- [BFSG für Arztpraxen ab Juni 2025](/blog/bfsg-arztpraxen-checkliste) — barrierefreie Inhalte sind auch KI-Vorteil
- [Für Privat- und Wahlärzt:innen](/fuer-privatarzt) — KI-Sichtbarkeit als Positionierungs-Hebel

Möchten Sie selbst testen, wie ChatGPT Sie kennt — und sehen, was wir für Ihre Praxis konkret umsetzen würden? **30 Minuten kostenloses Erstgespräch mit Kevin.** [Erstgespräch anfragen →](/#kontakt)
