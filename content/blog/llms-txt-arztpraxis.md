---
title: "llms.txt für Arztpraxen: was ist das und brauchen Sie das?"
date: "2026-04-24"
description: "llms.txt ist seit 2024 der neue Standard für KI-Sichtbarkeit — eine kleine Markdown-Datei, die ChatGPT, Perplexity und Claude zeigt, was Ihre Praxis ist und anbietet. Wie die Datei aufgebaut sein sollte, wo sie hinkommt, und warum sie 2026 für Arztpraxen relevant wird."
author: "Kevin Hofbauer"
image: "/blog/llms-txt-arztpraxis.png"
imageAlt: "Laptop mit Markdown-Editor auf Praxis-Schreibtisch — Symbol für llms.txt strukturierten Content für KI-Crawler"
---

Vor drei Jahren hätte niemand eine Datei namens **llms.txt** auf einer Praxiswebsite gebraucht. 2026 wird sie zum strategischen Asset: Eine kleine Markdown-Datei im Root-Verzeichnis der Website, die KI-Systemen wie ChatGPT, Perplexity und Claude in kuratierter Form zeigt, **was Ihre Praxis ist, was Sie anbieten und wie Sie erreichbar sind**.

Dieser Artikel erklärt: Was llms.txt ist, wie sich der Standard von robots.txt unterscheidet, welche Struktur für Arztpraxen funktioniert und warum das 2026/2027 zum KI-Sichtbarkeits-Hebel wird.

## Der Standard: llms.txt

Der Standard wurde 2024 von Jeremy Howard (Kaggle, fast.ai) vorgeschlagen. Die Idee: Eine **einfache Markdown-Datei**, die die wichtigsten Inhalte einer Website für **Large Language Models** strukturiert auflistet. Während Suchmaschinen mit robots.txt instruiert werden („Was darfst du crawlen?"), sagt llms.txt den KI-Systemen: „**Was solltest du lesen, wenn eine Nutzer:in eine Frage zu uns hat?**"

Die Datei liegt unter `https://ihre-praxis.at/llms.txt` und wird in Kürze von mehr und mehr KI-Crawlern aktiv ausgelesen. Perplexity und Claude haben bereits Mitte 2025 öffentlich bestätigt, llms.txt zu respektieren. ChatGPT folgt schrittweise. Google experimentiert mit ähnlichen Strukturen für AI Overviews.

## Unterschied zu robots.txt und sitemap.xml

- **robots.txt**: Zugriffskontrolle für Web-Crawler („darfst du /admin-Seite lesen?"). Technisch, formal.
- **sitemap.xml**: Liste aller Seiten einer Website für Suchmaschinen-Indexierung. Systematisch.
- **llms.txt**: Kuratierte Selbst-Beschreibung in Markdown für LLMs. Erzählend, auswählend.

Die drei Dateien ergänzen sich — sie konkurrieren nicht. Eine professionelle Website hat 2026 alle drei.

## Struktur einer llms.txt für Arztpraxen

Die Basis-Struktur folgt dem Standard:

```markdown
# Dr. med. Anna Müller — Hausarzt-Ordination Wien

> Kassenärztliche Ordination in Wien-Liesing mit Schwerpunkten Diabetes-Management und Familien-Medizin. Wir betreuen Patient:innen aller Altersgruppen mit besonderer Aufmerksamkeit auf Präventivmedizin und chronische Erkrankungen. Mehrsprachig Deutsch, Englisch, Türkisch.

## Leistungen

- [Allgemeinmedizin](https://www.mueller-praxis.at/leistungen): Vorsorge, Diagnostik, Therapie, Impfungen
- [Diabetes-Management](https://www.mueller-praxis.at/diabetes): Strukturiertes Therapieprogramm, HbA1c-Monitoring, Beratung
- [Impfservice](https://www.mueller-praxis.at/impfen): Grundimmunisierung, Reiseimpfungen, Grippe-Impfung saisonal

## Organisatorisches

- [Sprechzeiten](https://www.mueller-praxis.at/#sprechzeiten): Mo, Mi, Fr 07:00-13:00 | Di, Do 14:00-19:00
- [Online-Terminbuchung](https://www.mueller-praxis.at/termin)
- [Rezept-Bestellung online](https://www.mueller-praxis.at/rezept)
- [Anfahrt + Parkplatz](https://www.mueller-praxis.at/anfahrt)

## Über die Ärztin

- [Werdegang Dr. Müller](https://www.mueller-praxis.at/ueber-mich)
- **Ausbildung**: Medizinstudium Universität Wien, Facharzt-Ausbildung AKH + Rudolfstiftung, ÖÄK-Diplom Diabetologie
- **Schwerpunkt**: Familien-Medizin über drei Generationen, Diabetologie-Schwerpunkt

## Kontakt

- Adresse: Musterstraße 1, 1100 Wien
- Telefon: +43 1 123 4567 (Mo–Fr 08:00–12:00)
- E-Mail: office@mueller-praxis.at

## FAQ (häufige Fragen)

- [Wie bekomme ich einen Akut-Termin?](https://www.mueller-praxis.at/faq#akut)
- [Welche Kassen-Verträge haben Sie?](https://www.mueller-praxis.at/faq#kassen)
- [Kann ich als Neupatient:in kommen?](https://www.mueller-praxis.at/faq#neu)
```

Die Kunst: **kurz, faktisch, mit Links zur Vertiefung**. Nicht Marketing-Text, sondern kuratierte Struktur.

## Was in der llms.txt NICHT stehen sollte

- **Keine Heilversprechen** (ÖÄK-Werberichtlinie gilt auch hier)
- **Keine vergleichenden Aussagen** mit Mitbewerber:innen
- **Keine konkrete Preis-Angaben** für sensible Behandlungen
- **Keine Patient:innen-Testimonials**
- **Keine riesigen Text-Blöcke** — das Ziel ist kuratierte Linkstruktur, nicht Content-Duplikation

## Wo die Datei hinkommt

Die Datei muss unter der **Root-URL** der Website erreichbar sein:

- ✅ `https://www.ihre-praxis.at/llms.txt`
- ❌ `https://www.ihre-praxis.at/docs/llms.txt`
- ❌ `https://www.ihre-praxis.at/assets/llms.txt`

Zusätzlich optional: eine ausführlichere **llms-full.txt** mit kompletter Inhalts-Dokumentation:

- `https://www.ihre-praxis.at/llms-full.txt` (mehrere Tausend Wörter, alle Seiten-Inhalte strukturiert)

Bei Hosting:
- Einfache Websites: als statische Datei in `public/` (Next.js) oder im Root-Verzeichnis (WordPress, via FTP)
- Dynamische Systeme: als Route-Handler, der die Datei on-the-fly generiert

## Wie KI-Systeme llms.txt nutzen

Ein typischer Ablauf, wenn eine Nutzer:in ChatGPT/Perplexity fragt „Welche Hausärzt:innen in Wien-Liesing betreuen Diabetes-Patient:innen?":

1. KI-System sucht nach passenden Praxis-Websites
2. Prüft, ob llms.txt vorhanden ist (GET-Request)
3. Wenn ja: liest llms.txt zuerst als „Selbst-Beschreibung"
4. Crawlt dann die in llms.txt verlinkten Detail-Seiten für Tiefe
5. Formuliert Antwort basierend auf der kuratierten Struktur

Ohne llms.txt muss die KI „**blind**" Inhalte aus der Website extrahieren — oft landet dann eher Marketing-Text als sachliche Information in der Antwort. Mit llms.txt hat die KI eine **kuratierte Leseliste** — und die Antwort wird präziser.

## Brauchen Sie das 2026 wirklich?

**Ja, wenn:**
- Sie auch nur ansatzweise digital sichtbar sein wollen
- Sie eine Wahlordination führen (KI-Sichtbarkeit = Conversion)
- Sie ein Ärztezentrum haben (Komplexe Strukturen profitieren besonders)
- Sie junge Patient:innen (< 40 Jahre) erreichen wollen

**Weniger wichtig, wenn:**
- Sie eine etablierte Kassen-Praxis haben, die ohnehin überfüllt ist
- Sie in 1-2 Jahren in Pension gehen ohne Nachfolge

Für 90 % der Praxen 2026: **Ja, implementieren**. Der Aufwand ist gering (1-2 Stunden), der Nutzen wächst mit jedem Monat, weil immer mehr KI-Systeme llms.txt aktiv lesen.

## Die Zukunft von llms.txt

Der Standard ist im Fluss. Wahrscheinliche Entwicklungen 2026-2028:

- **Google** wird llms.txt vermutlich für AI Overviews stärker einbeziehen
- **Schema.org-Extension** für medizinische LLMs könnte kommen
- **Authentifizierung** für llms.txt (digitale Signatur, dass der Inhalt vom Praxis-Inhaber stammt)
- **Regulierung** durch EU AI Act könnte strukturierte Selbst-Beschreibung vorschreiben

Wer jetzt einsteigt, ist 2027 vorbereitet. Wer wartet, muss später nachziehen — mit weniger Zeit und mehr Komplexität.

## Fazit: llms.txt ist der nächste Schritt nach Schema.org

Schema.org ist bereits etablierter KI-Sichtbarkeits-Standard. llms.txt ist die natürliche Ergänzung: **kuratiert, erzählend, link-basiert**. Zusammen bilden sie ein zweistufiges Signal für KI-Systeme: „Hier ist strukturierte Information — und hier ist die Selbst-Beschreibung mit Verweisen auf Details."

Für Arztpraxen 2026 ist die Investition minimal (1-2 Stunden Setup, dann quartalsweise Pflege). Der Mehrwert wächst mit der KI-Nutzung durch Patient:innen. Wer 2027 auf KI-Fragen bei ChatGPT und Perplexity gefunden werden will, sollte 2026 beginnen.

---

**Verwandte Themen:**
- [ChatGPT findet Sie nicht? 5 Schritte zur KI-Sichtbarkeit](/blog/chatgpt-ordination-finden)
- [Schema.org MedicalBusiness](/blog/schema-medical-business)
- [Google Business Profile für Ordinationen](/blog/google-business-ordination)
- [ChatGPT für die Ordination](/blog/chatgpt-fuer-ordination)

**llms.txt für Ihre Praxis umsetzen?** 30 Min kostenloses Erstgespräch. [Erstgespräch anfragen →](/#kontakt)
