---
title: "Online-Rezept-Bestellung für Stamm-Patient:innen einrichten"
date: "2026-04-24"
description: "Routine-Rezepte telefonisch einzufordern verbraucht täglich Stunden Praxis-Zeit. Eine rechtlich saubere Online-Rezept-Bestellung entlastet MFA und Ärzt:innen gleichermaßen. Wie sie aufgebaut sein muss, welche Haftungs-Fragen zu klären sind, welche Tools bestehen."
author: "Kevin Hofbauer"
image: "/blog/online-rezept-bestellung.png"
imageAlt: "Laptop und Smartphone mit E-Rezept-Interface auf Praxis-Schreibtisch — Symbol für digitale Rezept-Anforderung"
---

Rezept-Anforderungen sind nach Termin-Wünschen die häufigste Anruf-Kategorie in Arztpraxen. Ein typischer Morgen: „Frau Maier, ich brauche mein Blutdruck-Medikament wieder", „Herr Huber, mein Cholesterin-Rezept ist leer", „Frau Schneider, bitte das Schilddrüsen-Mittel". 10-15 Anrufe, je 2-3 Minuten — das sind 30-45 Minuten MFA-Zeit täglich, nur für Dauermedikations-Rezepte.

Eine **Online-Rezept-Bestellung** löst das. Stamm-Patient:innen füllen ein Formular aus, die Praxis prüft, stellt aus, fertig. Dieser Artikel zeigt die rechtlichen Rahmenbedingungen, technische Lösungen und typische Fallstricke.

## Die Rechtslage: was ist erlaubt?

Eine Online-Rezept-Bestellung für **Dauermedikationen bei bekannten Stamm-Patient:innen** ist in Österreich erlaubt, solange:

1. **Ärztliche Kenntnis des Patient:innen-Falls** vorliegt (kein Rezept für Neu-Patient:innen ohne Untersuchung)
2. **Quartals-Kontroll-Untersuchung** eingehalten wird (je nach Medikament)
3. **Identitäts-Verifizierung** sichergestellt ist (e-Card-Nummer, Geburtsdatum als Minimal-Check)
4. **Verschreibungs-pflichtige Kontrolle** erfolgt (Ärzt:in prüft vor Ausstellung, nicht automatisierter Prozess)

Nicht erlaubt: automatisierte Rezept-Ausstellung ohne ärztliche Prüfung.

## Die Tech-Varianten

**Variante 1: Einfaches Formular auf der Website**

Die niederschwellige Lösung. Ein Kontaktformular mit diesen Pflichtfeldern:

- Vor-/Nachname (Pflicht)
- Geburtsdatum (Pflicht — Identitäts-Abgleich mit Akte)
- e-Card- oder Sozialversicherungs-Nummer (Pflicht)
- Telefonnummer für Rückfragen
- Benötigtes Medikament (Wirkstoff + Dosis — keine Marke)
- Dauer der bisherigen Einnahme
- Datum des letzten Quartals-Termins
- Abholung: Ordination oder Apotheke (ggf. Name)
- Freitext-Feld für Bemerkungen (Allergien, Unverträglichkeiten, Änderungswünsche)

Das Formular sendet verschlüsselt (HTTPS!) an ein Praxis-Postfach, MFA bearbeitet es. Aufwand MFA: 1-2 Minuten pro Rezept — versus 3-5 Minuten beim Telefonat.

**Variante 2: Patientenportal mit Authentifizierung**

Professioneller, aber aufwändiger. Nach Erstregistrierung (am besten per ID Austria) loggen sich Patient:innen in ein Patientenportal ein. Das System prüft automatisch:

- Wann war der letzte Quartals-Termin?
- Ist die Medikation aktuell hinterlegt?
- Gibt es offene Befunde oder Anomalien?

Erst wenn alle Prüfungen sauber sind, kann das Rezept ausgelöst werden — die Ärzt:in bekommt dann eine reduzierte Vorlage zum Abzeichnen.

**Variante 3: Integration in Praxis-Software**

Die großen Praxis-Software-Anbieter (INNOMED, ELDA, CompuGroup) bieten zunehmend E-Rezept-Integration. Patient:innen nutzen das System der Krankenkasse (e-Medikation via e-Card), Praxis bestätigt oder widerspricht. Dies ist die langfristig beste Lösung — erfordert aber Praxis-Software mit entsprechendem Modul.

## Die Identitäts-Prüfung

Das größte rechtliche Risiko: falscher Absender. Wie stellen Sie sicher, dass wirklich die:der echte Patient:in das Rezept angefordert hat?

**Minimal-Check:**
- e-Card-Nummer + Geburtsdatum abfragen → Abgleich mit Akte
- Tel-Nummer abfragen → Rückruf in Verdachtsfall

**Höheres Sicherheits-Niveau:**
- ID Austria-Login für Patientenportal
- 2-Faktor-Authentifizierung (SMS-Code)
- e-Card-Chip-Anbindung (technisch aufwändig)

**Minimum nicht unterschreiten:** Bei bloßem Namen + „bitte Rezept schicken" ist die Missbrauchs-Gefahr zu hoch.

## Haftungs-Fragen

Was passiert, wenn eine Patient:in ein falsches Medikament per Online-Formular anfordert und die Praxis ohne Rückfrage ausstellt?

**Haftung der Praxis:** Ja, wenn ärztliche Sorgfaltspflicht verletzt wurde. Die ärztliche Prüfung vor Ausstellung ist nicht verhandelbar. Daher: Online-Formular sammelt Daten, Ärzt:in prüft und verschreibt, MFA stellt aus.

**Haftung der:des Patient:in:** Wenn bewusste Falschangabe (z. B. falsches Medikament), liegt Täuschung vor. Aber oft schwer beweisbar.

**Versicherungs-technisch:** Berufshaftpflicht sollte Online-Kommunikation mit Patient:innen einschließen. Im Versicherungs-Vertrag prüfen.

## Was Patient:innen schätzen

Aus Studien 2024/2025 zu digitaler Praxis-Kommunikation:

- **Schnelligkeit**: Rezept-Anforderung in 2 Minuten statt „hoffentlich komm ich um 10 durch"
- **Unabhängigkeit von Büro-Zeiten**: abends nach der Arbeit bestellen, am Tag darauf abholen
- **Dokumentation**: man hat schriftlich, was bestellt wurde
- **Weniger Scham**: manche Patient:innen fragen sich, wie sie das Telefonat formulieren sollen — das Formular ist neutraler

Besonders geschätzt von: Berufstätigen, älteren Patient:innen mit mehreren Dauermedikationen, Familien-Müttern mit Kind-Rezepten, mehrsprachigen Patient:innen (schriftliche Form ist einfacher als ein Telefonat auf Deutsch).

## Was Praxen befürchten — und meist unbegründet ist

- **„Patient:innen werden unverschämt"**: Erfahrung zeigt: Patient:innen werden nicht fordernder, sie werden routinierter. Die Kontaktfrequenz bleibt stabil, nur der Kanal verschiebt sich.
- **„Wir verlieren persönliche Beziehung"**: die persönliche Beziehung entsteht in der Ordination, nicht im Telefonat zur Rezept-Anforderung.
- **„Senior:innen können das nicht"**: der Kern-Patient:innen-Stamm 70+ telefoniert weiter wie bisher. Online-Rezept wird vor allem von 30-65-Jährigen genutzt.

## Praxis-Empfehlung

1. **Starten Sie klein**: einfaches Formular mit Basis-Feldern, ohne Authentifizierung (nur e-Card + Geburtsdatum + Tel)
2. **Dokumentieren Sie den Prozess intern**: wer prüft das Rezept? wie lang dauert die Bearbeitung? wie werden Rückfragen gestellt?
3. **Kommunizieren Sie klar**: „Wir bearbeiten Rezept-Anfragen innerhalb von 2 Werktagen. Für Akutfälle bitte telefonisch."
4. **Evaluieren Sie nach 3 Monaten**: wie viel MFA-Zeit ist tatsächlich gespart? Patient:innen-Feedback?

Der ROI ist meist klar positiv: eine kleine Praxis spart 20-30 Minuten/Tag, eine große 60-90 Minuten. Setup-Aufwand: 1-2 Stunden.

## Fazit: eine der effizientesten Digitalisierungs-Maßnahmen

Online-Rezept-Bestellung ist eine der Maßnahmen mit dem besten Aufwands-Nutzen-Verhältnis — technisch einfach, rechtlich handhabbar, MFA-entlastend, patient:innen-zufriedenheitssteigernd. Die meisten Praxen, die es eingeführt haben, fragen sich danach, warum sie so lange gezögert haben.

Die Kombination aus Online-Terminbuchung + Online-Rezept-Bestellung entlastet das Telefon um ~50 % — und genau das ist die Zeit, die in echte Medizin fließen kann.

---

**Verwandte Themen:**
- [Telefon-Entlastung in der Ordination](/blog/telefon-entlastung-ordination)
- [Online-Terminbuchung barrierefrei](/blog/online-terminbuchung-barrierefrei)
- [MFA-Mangel — Website als Team-Entlastung](/blog/mfa-mangel-website-entlastung)
- [e-Card / ELGA — Patient:innen-Info](/blog/ecard-elga-patienten-info)

**Online-Rezept für Ihre Praxis einrichten?** 30 Min kostenloses Erstgespräch. [Erstgespräch anfragen →](/#kontakt)
