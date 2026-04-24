---
title: "DSGVO-Checkliste für Praxiswebsites: die vollständige Anleitung für Ärzt:innen"
date: "2026-04-24"
description: "Die DSGVO-Anforderungen für Arzt-Websites gehen weit über den Datenschutz-Link im Footer hinaus. Cookie-Banner, Auftragsverarbeitung, Verarbeitungsverzeichnis, Patienten-Daten-Verarbeitung und Datenpannen-Meldung — die komplette Checkliste mit typischen Fehlern."
author: "Kevin Hofbauer"
image: "/blog/dsgvo-checkliste-arztpraxis.png"
imageAlt: "DSGVO-Checkliste mit Stift auf Praxis-Schreibtisch — Symbol für Datenschutz-Konformität medizinischer Websites"
---

Die DSGVO gilt seit Mai 2018 — und trotzdem scheitern viele Arzt-Websites an den Basics. Typische Abmahn-Ziele 2025/2026: falsche Cookie-Banner, fehlende Auftragsverarbeitungs-Verträge (AVV) mit externen Tools und unvollständige Datenschutzerklärungen. Bei Arztpraxen ist das DSGVO-Risiko besonders hoch, weil Gesundheitsdaten als **besonders sensible personenbezogene Daten** (Art. 9 DSGVO) eingestuft werden — mit strengen Verarbeitungsanforderungen.

Diese Checkliste zeigt die **acht DSGVO-Kernpflichten** für Praxiswebsites — mit typischen Fehlern und konkreten Lösungen.

## 1. Datenschutzerklärung: vollständig und aktuell

Jede Praxiswebsite braucht eine Datenschutzerklärung. Pflicht-Inhalte:

- **Verantwortlicher** (Praxis-Inhaber:in mit Namen + Anschrift)
- **Datenschutzbeauftragte:r** (falls Pflicht — ab 10 Mitarbeiter:innen oder Umgang mit sensiblen Daten in großem Umfang)
- **Zwecke der Datenverarbeitung** (Terminbuchung, Kontaktformular, Newsletter, ...)
- **Rechtsgrundlage pro Verarbeitung** (meist Art. 6 Abs. 1 lit. b oder f DSGVO plus Art. 9 bei Gesundheitsdaten)
- **Empfänger der Daten** (welche externen Tools, welche Cloud-Anbieter?)
- **Speicherdauer**
- **Rechte der Betroffenen** (Auskunft, Löschung, Widerruf, Beschwerde bei Aufsicht)
- **Aufsichtsbehörde** (Österreich: Datenschutzbehörde DSB, Wien)

**Typischer Fehler:** Generische Datenschutz-Vorlage aus dem Internet, die nicht die tatsächlichen Tools der Praxis abdeckt.

**Lösung:** Inventar aller Datenverarbeitungs-Vorgänge erstellen, dann Datenschutzerklärung darauf zuschneiden. Seriöse Anwält:innen oder spezialisierte Dienstleister machen das für 300-800 Euro.

## 2. Cookie-Banner (TTDSG / ePrivacy-konform)

Das Cookie-Banner hat 2023 eine Verschärfung bekommen (TTDSG in Deutschland, e-Privacy-Richtlinie in Österreich). Anforderungen:

- **„Alle akzeptieren"** und **„Alle ablehnen"** gleich prominent auf erster Ebene
- **Granulare Auswahl** (einzelne Kategorien aktivieren/deaktivieren) möglich
- **Vor Einwilligung** dürfen keine nicht-notwendigen Cookies gesetzt werden
- **Einwilligung dokumentiert** (Zeitstempel, IP, getroffene Auswahl)
- **Widerruf** jederzeit gleich einfach wie Einwilligung

**Typische Fehler:**
- „Alle akzeptieren"-Button groß und farbig, „Alle ablehnen" klein in Text-Link versteckt
- Google Analytics lädt vor Einwilligung
- Kein Widerruf-Mechanismus nach Einwilligung

**Lösung:** Consent-Management-Platform (CMP) wie Cookiebot, Usercentrics oder die Open-Source-Variante **Klaro!** einsetzen. CMPs übernehmen die Dokumentation.

## 3. Auftragsverarbeitungs-Vertrag (AVV) mit externen Tools

Jedes externe Tool, das Daten Ihrer Patient:innen oder Website-Besucher:innen verarbeitet, braucht einen AVV nach Art. 28 DSGVO. Typische AVV-Pflicht:

- Online-Terminbuchungs-Anbieter (Doctolib, Jameda, etc.)
- Newsletter-Dienst (Mailchimp, CleverReach)
- Hosting-Anbieter (wenn Patienten-Daten darauf liegen)
- Analytics-Tool (Google Analytics, Matomo)
- Formular-Anbieter (z. B. Typeform)
- Chat-Tool, Cookie-Tool, CDN-Anbieter

**Typischer Fehler:** Praxis nutzt Tool jahrelang ohne AVV — bei Abmahnung kommt heraus, dass kein AVV vorhanden ist.

**Lösung:** Bei jedem Anbieter aktiv nach AVV fragen, unterschrieben ablegen. Seriöse Anbieter haben AVV als Standard-Dokument.

## 4. Verarbeitungsverzeichnis (Art. 30 DSGVO)

Dokumentiert intern alle Datenverarbeitungs-Vorgänge der Praxis. Ab welcher Praxisgröße Pflicht: schon ab 1 Mitarbeiter:in, sobald **sensible Daten** (Gesundheitsdaten!) regelmäßig verarbeitet werden — was bei jeder Arztpraxis der Fall ist.

**Inhalt pro Verarbeitungs-Vorgang:**
- Name der Verarbeitung („Patientenverwaltung", „Online-Terminbuchung", ...)
- Zweck
- Betroffene Personenkategorien (Patient:innen, Mitarbeiter:innen, Website-Besucher:innen)
- Datenkategorien (Name, Gesundheitsdaten, Kontakt, ...)
- Rechtsgrundlage
- Empfänger (intern + extern)
- Speicherdauer
- Technische und organisatorische Maßnahmen (TOM)

**Typischer Fehler:** Verarbeitungsverzeichnis existiert nicht — bei Kontrolle der Datenschutzbehörde direkt ein Verstoß.

**Lösung:** Vorlage nutzen (z. B. von der DSB oder von Fach-Anwält:innen), einmal sauber anlegen, jährlich aktualisieren.

## 5. TOM (Technische und organisatorische Maßnahmen)

Dokumentiert, wie Sie Datenschutz technisch umsetzen:

- **Zutrittskontrolle** (wer kommt in die Ordination, wer kommt an die Server)
- **Zugangskontrolle** (Passwörter, 2FA bei Praxis-Software)
- **Zugriffskontrolle** (wer darf welche Patientendaten sehen — Rollenkonzept)
- **Weitergabekontrolle** (wie werden Daten übertragen — verschlüsselt?)
- **Verfügbarkeit** (Backup-Strategie, Disaster Recovery)
- **Trennbarkeit** (Patientendaten getrennt von Website-Daten)

Plus: regelmäßige **Mitarbeiter:innen-Schulung** zu Datenschutz (mindestens einmal jährlich, dokumentiert).

## 6. Datenpannen-Meldung innerhalb von 72 Stunden

Wenn eine Datenpanne passiert (z. B. Laptop mit Patientenliste gestohlen, Praxis-Software gehackt, versehentliche Mail-Weiterleitung an falschen Empfänger) — binnen **72 Stunden** an die Datenschutzbehörde melden (Art. 33 DSGVO). In schweren Fällen auch die Betroffenen informieren (Art. 34).

**Praxis-Empfehlung:** Interne Meldekette definieren (wer meldet, wer dokumentiert, wer entscheidet über Betroffenen-Information). Im Verarbeitungsverzeichnis dokumentieren.

## 7. Rechte der Betroffenen effektiv gewährleisten

Jede:r Patient:in und Website-Besucher:in hat Rechte — die Sie **innerhalb von 1 Monat** erfüllen müssen:

- **Auskunftsrecht** (welche Daten speichern Sie über mich?)
- **Recht auf Berichtigung** (falsche Daten korrigieren)
- **Recht auf Löschung** („Recht auf Vergessenwerden" — eingeschränkt durch gesetzliche Aufbewahrungs-Pflichten für Patientenakten: 10-30 Jahre je nach Fall)
- **Recht auf Einschränkung der Verarbeitung**
- **Recht auf Datenübertragbarkeit**
- **Widerspruchsrecht**
- **Recht auf Beschwerde** bei Datenschutzbehörde

**Typischer Fehler:** Ordination reagiert nicht auf Anfrage — automatisch Verstoß.

**Lösung:** Prozess definieren (wer bearbeitet Anfragen? Wie wird geprüft? Welche Vorlagen?), 1-Monats-Frist einhalten.

## 8. SSL/HTTPS + Server-Standort

Jede Praxiswebsite muss per **HTTPS** ausgeliefert werden. Lets Encrypt ist kostenlos. Ohne HTTPS: direkter DSGVO-Verstoß.

**Server-Standort**: EU-Server bevorzugen. US-Server (z. B. Cloudflare, AWS US-Regions) sind seit dem Schrems-II-Urteil nur mit **Standardvertragsklauseln + zusätzlichen Garantien** DSGVO-konform. EU-Hoster (z. B. Hetzner Deutschland, Easyname Österreich) sind einfacher.

## Die 30-Minuten-Selbstprüfung

- [ ] Datenschutzerklärung aktuell, alle Tools genannt
- [ ] Impressum mit allen Pflichtangaben (UID, Ärztekammer, ...)
- [ ] HTTPS aktiv, alle Ressourcen
- [ ] Cookie-Banner mit „Alle ablehnen" gleich prominent
- [ ] AVV mit allen externen Tools unterschrieben
- [ ] Verarbeitungsverzeichnis existiert
- [ ] TOM dokumentiert
- [ ] Datenpannen-Meldekette definiert
- [ ] Prozess für Auskunfts-/Löschungs-Anfragen
- [ ] Server-Standort EU

## Fazit: DSGVO ist kein Einmal-Projekt, sondern laufender Prozess

Viele Praxen machen den Fehler, DSGVO einmalig 2018 eingerichtet und seither nicht aktualisiert zu haben. Seit 2018 sind aber TTDSG, Schrems-II und mehrere EuGH-Urteile dazugekommen. Eine jährliche DSGVO-Revision (idealerweise zusammen mit Jahresabschluss) ist realistisch — und deutlich günstiger als eine Abmahnung oder ein Bußgeld.

Für Ärzt:innen zusätzlich kritisch: **ärztliche Schweigepflicht** (§ 54 ÄrzteG) verstärkt die DSGVO-Anforderungen. Ein DSGVO-Verstoß ist bei Arztpraxen oft gleichzeitig ein Verstoß gegen die Schweigepflicht — mit Disziplinar-Konsequenzen.

---

**Verwandte Themen:**
- [BFSG für Arztpraxen](/blog/bfsg-arztpraxen-checkliste) — parallel zu DSGVO
- [WCAG 2.1 AA umsetzen](/blog/wcag-arztpraxis-umsetzen)
- [ÖÄK-Werberichtlinien](/blog/oeak-werberichtlinien-website) — Datenschutz + Werberecht
- [Online-Terminbuchung barrierefrei](/blog/online-terminbuchung-barrierefrei) — AVV-Pflicht

**DSGVO-Audit gewünscht?** 30 Min kostenloses Erstgespräch. [Erstgespräch anfragen →](/#kontakt)
