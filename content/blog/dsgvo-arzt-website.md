---
title: "DSGVO für Arzt-Websites: Was muss drauf, was darf nicht drauf?"
date: "2026-02-23"
description: "DSGVO, ÖÄK-Werberichtlinien und Impressumspflicht: Die rechtlichen Anforderungen für Ordinationswebsites in Österreich kompakt erklärt."
author: "Kevin Hofbauer"
---

Eine Arzt-Website in Österreich muss sowohl die DSGVO als auch die Werberichtlinien der Österreichischen Ärztekammer (ÖÄK) einhalten. Verstöße können Abmahnungen, Bußgelder und berufsrechtliche Konsequenzen nach sich ziehen. Dieser Artikel fasst die wichtigsten Anforderungen zusammen, die jede Ordinationswebsite erfüllen muss.

## Die drei Regelwerke, die Sie kennen müssen

Arzt-Websites unterliegen nicht nur der DSGVO, sondern drei verschiedenen Regelwerken:

**1. DSGVO (Datenschutz-Grundverordnung).** Gilt für alle Websites in der EU. Regelt den Umgang mit personenbezogenen Daten – von Kontaktformularen bis zu Analyse-Tools.

**2. ÖÄK-Werberichtlinien (Arztrecht).** Ärzte unterliegen dem ärztlichen Standesrecht. Die ÖÄK hat spezifische Regeln dafür, was auf einer Arzt-Website stehen darf und was nicht. Verstöße werden von der Disziplinarkommission behandelt.

**3. E-Commerce-Gesetz (ECG) und Mediengesetz.** Regeln die Impressumspflicht. Für Ärzte gelten erweiterte Informationspflichten als für gewöhnliche Unternehmen.

## Was zwingend auf jede Arzt-Website muss

### Impressum (Offenlegung)

Jede Arzt-Website braucht ein vollständiges Impressum mit folgenden Angaben:

- Vollständiger Name und akademische Grade
- Berufsbezeichnung: „Arzt/Ärztin für Allgemeinmedizin" bzw. Facharztbezeichnung
- Ordinationsadresse
- Kontaktdaten (Telefon und E-Mail)
- ÄK-Zugehörigkeit (z. B. „Mitglied der Ärztekammer für Wien")
- UID-Nummer (falls umsatzsteuerpflichtig)
- Berufsrechtliche Vorschriften: Verweis auf das Ärztegesetz 1998
- Aufsichtsbehörde: Die zuständige Landesärztekammer

### Datenschutzerklärung

Eine DSGVO-konforme Datenschutzerklärung muss folgende Punkte abdecken:

- **Verantwortlicher:** Name und Kontaktdaten des Ordinationsinhabers.
- **Verarbeitungszwecke:** Welche Daten werden wofür verarbeitet (Kontaktformular, Terminbuchung, Newsletter)?
- **Rechtsgrundlage:** Auf welcher rechtlichen Basis erfolgt die Verarbeitung (Einwilligung, Vertragserfüllung, berechtigtes Interesse)?
- **Empfänger:** An wen werden Daten weitergegeben (Hosting-Anbieter, E-Mail-Dienst)?
- **Speicherdauer:** Wie lange werden die Daten gespeichert?
- **Betroffenenrechte:** Auskunft, Berichtigung, Löschung, Widerspruch, Datenübertragbarkeit, Beschwerde bei der Datenschutzbehörde.
- **Cookies und Tracking:** Welche Cookies werden gesetzt, zu welchem Zweck?

### Cookie-Banner

Technisch nicht notwendige Cookies (Analytics, Marketing) dürfen erst nach aktiver Einwilligung gesetzt werden. Das bedeutet:

- Vorausgewählte Checkboxen sind nicht zulässig.
- „Alle akzeptieren" darf nicht prominenter dargestellt werden als „Nur notwendige".
- Die Einwilligung muss jederzeit widerrufbar sein.
- Rein technisch notwendige Cookies (Session-Cookies, CSRF-Tokens) brauchen keine Einwilligung.

**Empfehlung für Arzt-Websites:** Verzichten Sie komplett auf Google Analytics und Marketing-Cookies. Wenn Sie keine Tracking-Cookies setzen, brauchen Sie kein aufwändiges Cookie-Banner – nur einen kurzen Hinweis auf technisch notwendige Cookies. Das ist einfacher, sicherer und vertrauenswürdiger für Patienten.

## Was nicht auf eine Arzt-Website darf

Die ÖÄK-Werberichtlinien setzen klare Grenzen. Folgendes ist auf einer Arzt-Website nicht erlaubt:

**Keine vergleichende Werbung.** Sie dürfen nicht behaupten, besser als andere Ärzte zu sein. Formulierungen wie „die beste Hautarztpraxis in Wien" oder „führender Spezialist" sind unzulässig.

**Keine Heilversprechen.** Aussagen wie „Wir heilen Ihre Rückenschmerzen" sind verboten. Erlaubt sind sachliche Beschreibungen der angebotenen Leistungen und Behandlungsmethoden.

**Keine irreführenden Vorher-Nachher-Bilder.** Besonders im ästhetischen Bereich: Vorher-Nachher-Fotos, die unrealistische Erwartungen wecken, sind problematisch. Sachliche Dokumentation ist unter bestimmten Voraussetzungen möglich, sollte aber mit der ÖÄK abgestimmt werden.

**Keine Patientenfotos ohne schriftliche Einwilligung.** Fotos von Patienten (auch anonymisiert) dürfen nur mit ausdrücklicher, schriftlicher und jederzeit widerrufbarer Einwilligung verwendet werden. Bei Minderjährigen müssen beide Erziehungsberechtigte zustimmen.

**Keine marktschreierische Werbung.** Der Ton muss sachlich und informativ sein. Aggressive Verkaufsrhetorik, Countdown-Timer oder Rabattaktionen widersprechen dem Standesrecht.

**Keine Fernbehandlung ohne Erstordination.** Sie dürfen Telemedizin anbieten, aber die Website darf nicht den Eindruck erwecken, dass eine vollständige Behandlung ohne persönlichen Erstkontakt möglich ist (je nach Bundesland unterschiedlich geregelt).

## Kontaktformulare: Sensibler als gedacht

Kontaktformulare auf Arzt-Websites verarbeiten potenziell Gesundheitsdaten – eine besondere Kategorie personenbezogener Daten nach Art. 9 DSGVO. Das bedeutet:

- **Verschlüsselte Übertragung (SSL/TLS) ist Pflicht.** Ohne HTTPS kein Kontaktformular.
- **Keine Gesundheitsdaten im Kontaktformular abfragen.** Fragen Sie nicht nach Symptomen, Diagnosen oder Medikamenten. Name, E-Mail, Telefon und ein allgemeines Anliegen-Feld reichen.
- **Einwilligungserklärung vor dem Absenden.** Der Patient muss aktiv bestätigen, dass er mit der Verarbeitung einverstanden ist.
- **Daten nicht länger als nötig speichern.** Kontaktanfragen, die bearbeitet wurden, sollten nach angemessener Frist gelöscht werden.

Für Terminbuchungen über Drittanbieter (z. B. Doctolib, TerminOnline) muss ein Auftragsverarbeitungsvertrag (AVV) mit dem Anbieter bestehen.

## Google Analytics: Brauchen Sie das wirklich?

Die kurze Antwort: Wahrscheinlich nicht. Google Analytics ist für Arzt-Websites aus mehreren Gründen problematisch:

- Die österreichische Datenschutzbehörde hat die Nutzung von Google Analytics in ihrer bisherigen Form als nicht DSGVO-konform eingestuft.
- Die Einrichtung eines rechtskonformen Cookie-Banners ist aufwändig und fehleranfällig.
- Die meisten Arzt-Websites brauchen keine detaillierten Nutzeranalysen.

**Alternativen:** Datenschutzfreundliche Analyse-Tools wie Plausible Analytics oder Fathom Analytics, die keine Cookies setzen und DSGVO-konform betrieben werden können.

## Checkliste: DSGVO und ÖÄK auf einen Blick

| Anforderung | Pflicht? | Häufigster Fehler |
|---|---|---|
| Impressum mit Berufsbezeichnung und ÄK-Zugehörigkeit | Ja | Fehlende ÄK-Zugehörigkeit oder Aufsichtsbehörde |
| Datenschutzerklärung | Ja | Copy-Paste-Vorlage ohne Anpassung an die Ordination |
| SSL/HTTPS | Ja | Noch immer Seiten ohne Verschlüsselung |
| Cookie-Banner (bei Tracking-Cookies) | Ja, wenn Tracking | Vorausgewählte Checkboxen |
| AVV mit Drittanbietern | Ja | Kein Vertrag mit Terminbuchungs- oder E-Mail-Anbieter |
| Sachliche Leistungsbeschreibung | Ja | Heilversprechen oder Superlative |
| Patientenfotos nur mit Einwilligung | Ja | Mündliche statt schriftliche Zustimmung |
| Barrierefreiheit | Ab Juni 2025 | Wird noch von den meisten ignoriert |

---

## Häufige Fragen

**Darf ich Patientenbewertungen auf meiner Website zeigen?**
Ja, solange die Bewertungen echt sind und Sie keine gefälschten oder gekauften Bewertungen verwenden. Google-Bewertungen dürfen Sie einbinden. Eigene Testimonials brauchen die schriftliche Einwilligung des Patienten.

**Brauche ich einen Datenschutzbeauftragten?**
In den meisten Einzelordinationen: Nein. Ein Datenschutzbeauftragter ist erst ab einer bestimmten Größe oder bei umfangreicher Verarbeitung besonderer Datenkategorien Pflicht.

**Darf ich auf meiner Website Preise für Privatleistungen nennen?**
Ja. Transparente Preisangaben sind erlaubt und sogar empfehlenswert. Achten Sie darauf, dass die Preise aktuell sind und keine irreführenden „Ab"-Preise verwendet werden.

**Muss meine Website barrierefrei sein?**
Ab Juni 2025 verpflichtet das europäische Barrierefreiheitsgesetz Dienstleister zu digitaler Barrierefreiheit. Arzt-Websites fallen darunter.
