---
title: "Schema.org MedicalBusiness: strukturierte Daten für Arztpraxen richtig anwenden"
date: "2026-04-24"
description: "Schema.org MedicalBusiness als JSON-LD ist das wichtigste Signal für Google, ChatGPT und Perplexity. Welche Felder wirklich zählen (isAcceptingNewPatients, availableLanguage, areaServed, aggregateRating), wie Sie validieren und welche Fehler Ärzt:innen am häufigsten machen."
author: "Kevin Hofbauer"
image: "/blog/schema-medical-business.png"
imageAlt: "Laptop mit JSON-Code und medizinischem Symbol — Symbol für Schema.org strukturierte Daten für Arztpraxen"
---

Von allen SEO- und KI-Sichtbarkeits-Hebeln ist **Schema.org MedicalBusiness** (bzw. Physician, MedicalClinic) der technisch wichtigste. Es ist die Sprache, in der Suchmaschinen und KI-Systeme verstehen: „Dies ist eine medizinische Einrichtung mit folgenden Eigenschaften."

Ohne Schema müssen Crawler aus dem Fließtext raten. Mit Schema bekommen sie maschinenlesbare Fakten. Der Unterschied in Google-Rich-Results und KI-Empfehlungen ist messbar.

Dieser Artikel zeigt: Welche Schema-Typen für Arztpraxen 2026 relevant sind, welche Felder wirklich zählen, wie Sie validieren — und welche Fehler Praxen am häufigsten machen.

## Die richtigen Schema-Typen wählen

Schema.org bietet eine Typen-Hierarchie für medizinische Einrichtungen:

- **MedicalBusiness** (breiteste Kategorie — Einzelpraxis, Ordination, Praxisgemeinschaft)
- **MedicalClinic** (für Kliniken, größere Ambulanz-Einrichtungen)
- **Physician** (speziell für einzelne Ärzt:in — ergänzend zu MedicalBusiness)
- **Pharmacy** (Apotheken)
- **Dentist** (eigener Subtyp für Zahnärzt:innen)

Für Arztpraxen empfehlen wir:
- **Einzelordination**: `MedicalBusiness` + **zusätzlich** `Physician` für die Ärzt:in
- **Gruppenpraxis**: `MedicalBusiness` mit mehreren `employee` als `Physician`
- **Ärztezentrum / PVE**: `MedicalClinic` mit `department` als `MedicalBusiness` pro Fachbereich

## Die JSON-LD-Einbindung

Schema-Daten werden als **JSON-LD** im `<head>` der HTML-Seite eingebettet:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://www.mueller-praxis.at/#organization",
  "name": "Dr. med. Anna Müller — Hausarzt-Ordination",
  "image": "https://www.mueller-praxis.at/praxis-outside.jpg",
  "url": "https://www.mueller-praxis.at",
  "telephone": "+43-1-1234567",
  "email": "office@mueller-praxis.at",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Musterstraße 1",
    "addressLocality": "Wien",
    "addressRegion": "Wien",
    "postalCode": "1100",
    "addressCountry": "AT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1751,
    "longitude": 16.3738
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Wednesday", "Friday"],
      "opens": "07:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Thursday"],
      "opens": "14:00",
      "closes": "19:00"
    }
  ],
  "medicalSpecialty": ["Allgemeinmedizin", "Diabetologie"],
  "availableLanguage": ["Deutsch", "Englisch", "Türkisch"],
  "areaServed": {
    "@type": "City",
    "name": "Wien"
  },
  "isAcceptingNewPatients": true,
  "employee": {
    "@type": "Physician",
    "name": "Dr. med. Anna Müller",
    "medicalSpecialty": "Allgemeinmedizin",
    "identifier": "Ärzte-ID-123456"
  }
}
</script>
```

## Die kritischen Felder — und die oft übersehenen

**Pflicht (basic):**
- `@type`, `name`, `address`, `telephone`, `url`, `openingHoursSpecification`

**Wichtig für Ranking (oft gemacht):**
- `image` (Praxis-Außenansicht)
- `medicalSpecialty` (Array mit allen Schwerpunkten)
- `geo` (exakte Koordinaten)

**Oft übersehen — aber Ranking-starker Bonus:**
- **`isAcceptingNewPatients: true`** — starkes Signal für KI-Antworten wie „welche Ärzt:innen nehmen neue Patient:innen?"
- **`availableLanguage`** — filter-kritisch für mehrsprachige Patient:innen
- **`areaServed`** — definiert das Einzugsgebiet
- **`paymentAccepted`** (mit „Health Insurance", „Credit Card", „Cash")
- **`hasMap`** (Link zu Google Maps)
- **`aggregateRating`** (wenn Sie echte Bewertungen haben)

**Für Ärztezentren / PVE zusätzlich:**
- `department` mit `MedicalBusiness` pro Fachbereich
- `containedInPlace` (falls im Ärztehaus)

## Konkrete Verbindung zur Ärzt:in

Bei Einzelpraxen oder Gruppenpraxen mit klar benannten Ärzt:innen ist es stark, die Ärzt:in als separates Schema-Objekt zu ergänzen:

```json
{
  "@type": "Physician",
  "@id": "https://www.mueller-praxis.at/#physician-mueller",
  "name": "Dr. med. Anna Müller",
  "image": "https://www.mueller-praxis.at/dr-mueller.jpg",
  "worksFor": { "@id": "https://www.mueller-praxis.at/#organization" },
  "medicalSpecialty": "Allgemeinmedizin",
  "alumniOf": "Medizinische Universität Wien",
  "memberOf": "Österreichische Gesellschaft für Allgemeinmedizin (ÖGAM)",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "ÖÄK-Diplom",
    "name": "Diplom Diabetologie"
  }
}
```

## FAQPage-Schema für zusätzliche KI-Sichtbarkeit

Eine FAQ-Sektion auf der Praxiswebsite wird in KI-Antworten besonders stark zitiert — wenn sie als **FAQPage-Schema** markiert ist:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Welche Kassen-Verträge habt ihr?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir sind ÖGK-, BVAEB- und SVS-Vertragspartner. Kurzum: alle österreichischen Krankenkassen werden direkt abgerechnet."
      }
    },
    {
      "@type": "Question",
      "name": "Wie bekomme ich einen Akut-Termin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Akut-Slots sind täglich ab 7:30 Uhr reserviert. Bitte rufen Sie ab 7:00 an oder nutzen Sie die Online-Buchung."
      }
    }
  ]
}
```

## Validierung

Zwei Tools sind Pflicht:

**1. Google Rich Results Test** (search.google.com/test/rich-results)

Gibt an, ob das Schema syntaktisch korrekt ist und ob Google es für Rich Results verwendet.

**2. Schema.org Validator** (validator.schema.org)

Prüft gegen die offizielle Schema-Definition — strenger als Google.

Beide Tools sind kostenlos. Vor jedem Schema-Update: beide durchlaufen lassen.

## Die häufigsten Fehler

**1. JSON-Syntax-Fehler.** Ein fehlendes Komma, eine offene Klammer — das ganze Schema wird ignoriert. Validator nutzen!

**2. Mehrere `@type` ohne `@id`.** Wenn Sie sowohl MedicalBusiness als auch Physician schreiben, sollten beide eindeutige `@id` haben (Fragment-URL wie `#organization`), sonst verwirrt es Crawler.

**3. Doppelte Information im Schema und im Fließtext nicht synchron.** Wenn Schema „Mo-Fr 08:00-13:00" sagt, die Website-HTML aber „Mo-Fr 08:00-16:00" — Google wertet das als Unvertrauen.

**4. Falsche `addressCountry`.** Muss „AT" sein (zweistelliger ISO-Code), nicht „Österreich".

**5. `openingHours` als String statt `openingHoursSpecification`.** Der moderne Weg ist das strukturierte Objekt.

**6. `aggregateRating` ohne echte Bewertungen erfunden.** Google sanktioniert das — bei Entdeckung Abwertung der ganzen Website.

**7. Koordinaten falsch rum.** `latitude: 16.37` (falsch, das ist Längengrad für Wien) statt `latitude: 48.17`.

## Für Ärztezentren: Mehr-Struktur

Bei Ärztezentren mit mehreren Fachrichtungen sollte jede Fachrichtung als eigenes `department` modelliert werden:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Ärztezentrum Musterstadt",
  "department": [
    {
      "@type": "MedicalBusiness",
      "name": "Allgemeinmedizin",
      "employee": { "@type": "Physician", "name": "Dr. Müller" }
    },
    {
      "@type": "MedicalBusiness",
      "name": "Orthopädie",
      "employee": { "@type": "Physician", "name": "Dr. Berger" }
    }
  ]
}
```

## Wartung: Schema lebt mit der Praxis

Schema muss aktuell bleiben. Typische Update-Auslöser:

- Sprechzeiten-Änderung
- Neue Ärzt:in dazu oder ausgeschieden
- Adresse geändert
- Kassen-Verträge geändert
- Neue Sprachkenntnisse in der Praxis

Empfehlung: Zweimal jährlich Schema durchsehen, mit Praxis-Realität abgleichen.

## Fazit: Schema.org ist die Sprache der Maschinen — sprechen Sie sie

Ohne Schema.org sind Sie für Google-Rich-Results fast unsichtbar. Ohne Schema in Kombination mit llms.txt sind Sie für KI-Antworten nur schwach präsent. Die Einmal-Investition (2-4 Stunden saubere Einbindung) liefert dauerhaften SEO- und KI-Sichtbarkeits-Bonus.

Gerade die „oft übersehenen" Felder — `isAcceptingNewPatients`, `availableLanguage`, `areaServed` — sind die Ranking-Turbos, weil sie direkt auf Patient:innen-Fragen antworten.

---

**Verwandte Themen:**
- [llms.txt für Arztpraxen](/blog/llms-txt-arztpraxis) — die natürliche Ergänzung
- [ChatGPT findet Sie nicht? 5 Schritte zur KI-Sichtbarkeit](/blog/chatgpt-ordination-finden)
- [Google Business Profile für Ordinationen](/blog/google-business-ordination)
- [Lokales SEO für Arztpraxen](/blog/lokales-seo-arztpraxis)

**Schema für Ihre Praxis umsetzen?** 30 Min kostenloses Erstgespräch. [Erstgespräch anfragen →](/#kontakt)
