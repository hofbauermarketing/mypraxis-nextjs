# CLAUDE.md – mypraxis.at Projektstand

## Wer ist Kevin?
Kevin Hofbauer betreibt Kevin Hofbauer e.U., eine Digital-Marketing-Agentur in Vitis, Niederösterreich. Zwei Marken:
- **hofbauer.marketing** – Websites, Videos, KI-Telefonassistenten für österreichische Unternehmen
- **mypraxis.at** – spezialisiert auf digitale Positionierung für niedergelassene Ärzte in Österreich

## Was ist mypraxis.at?
Agentur die Ärzte-Websites baut und dabei als USP **KI-Sichtbarkeit** (Schema Markup, llms.txt, semantische Inhalte) anbietet – etwas das kein anderer österreichischer Anbieter hat.

### Pakete & Preise
| Paket | Preis netto | Nach KMU.DIGITAL (30%) |
|-------|------------|----------------------|
| Praxis-Website | € 3.900 | € 2.730 |
| Digitale Positionierung | € 7.500 | € 5.250 |
| Ärztezentren & PVEs | Auf Anfrage | Pro Arzt bis € 6.000 Förderung |

### KMU.DIGITAL Förderung
- Umsetzungsförderung: 30 % der Kosten, max. € 6.000 pro Unternehmen
- Voraussetzung: Strategieberatung durch externen zertifizierten Digital Consultant (CDC), ca. € 500 (davon € 250 gefördert)
- Kevin hat einen externen Förderberater, der die Beratung und Antragstellung übernimmt
- Bei Ärztezentren: Jeder Arzt = eigenes KMU = eigener Förderantrag möglich

## Technischer Stand

### Website-Infrastruktur
- **Alte Version:** Lovable → GitHub → Vercel (React SPA, Client-Side Rendering)
  - Problem: KI-Crawler sehen nur `<div id="root"></div>` – kein Content
  - URL war: https://mypraxis.vercel.app
- **Neue Version:** Next.js mit Static Site Generation → GitHub → Vercel
  - Repo: https://github.com/hofbauermarketing/mypraxis-nextjs
  - Deploy: https://mypraxis-nextjs.vercel.app
  - Crawler sehen jetzt den VOLLSTÄNDIGEN Content
  - **OFFEN: Design/CSS noch nicht richtig** – Tailwind wird im Static Export nicht korrekt kompiliert, Seite funktioniert inhaltlich aber sieht visuell ungestylt aus

### Was bereits implementiert ist (im Next.js-Repo)
1. **Schema Markup v3** – Vollständiges JSON-LD im `<head>` von layout.tsx:
   - ProfessionalService mit allen Services, Preisen, Kontakt
   - FAQPage mit 6 strukturierten Fragen
   - WebSite-Schema
   - Founder-Entity (Kevin Hofbauer)
   - areaServed alle 9 Bundesländer
   - knowsAbout mit allen relevanten Themen
2. **robots.txt** – 20+ KI-Crawler explizit mit Allow (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, etc.)
3. **llms.txt v3** – Strukturiertes KI-Profil unter /llms.txt
4. **sitemap.xml** – Alle Seiten mit lastmod-Timestamps
5. **Meta-Tags & Open Graph** – Vollständig in layout.tsx
6. **Komplette Seitenstruktur** in page.tsx:
   - Hero mit CTA
   - Problemverständnis
   - Differenzierung (4 Punkte)
   - 3 Pakete mit Förderrechnung
   - KI-Sichtbarkeit Drei-Schichten-Ansatz
   - Förderungs-Sektion mit Vergleichstabelle
   - 4-Schritte-Prozess
   - 9 FAQ-Einträge
   - Kontakt/CTA
   - Footer mit Fachrichtungs-Keywords

### Was noch NICHT implementiert ist
- Domain mypraxis.at auf neues Vercel-Projekt umleiten
- Tailwind CSS fixen (Design sieht aktuell ungestylt aus)
- Impressum-Seite (/impressum)
- Datenschutz-Seite (/datenschutz)
- Unterseiten (Leistungen, KI-Sichtbarkeit, Förderung, FAQ, Kontakt)
- Logo / Bilder
- Cookie-Banner
- Kontaktformular / Calendly-Integration
- Google Fonts (Inter) laden

## GEO-Strategie (Generative Engine Optimization)

### Erstellt: KI-Dominanz-Playbook
Umfassender Leitfaden in MYPRAXIS-KI-DOMINANZ-PLAYBOOK.md mit:

**Phase 1 – Sofort (diese Woche):**
- ✅ robots.txt deployed
- ✅ llms.txt deployed
- ✅ Schema Markup v3 deployed
- ✅ SSR/SSG-Lösung implementiert (Next.js)
- ✅ sitemap.xml deployed
- ⬜ Google Business Profile optimieren
- ⬜ Domain umleiten

**Phase 2 – Wochen 2-3:**
- ⬜ Wikidata-Einträge (mypraxis.at + Kevin Hofbauer)
- ⬜ Branchenverzeichnisse (herold.at, firmenabc.at, WKO, etc.)
- ⬜ LinkedIn Company Page
- ⬜ Erster Blog-Artikel
- ⬜ Wöchentlicher KI-Check starten

**Phase 3 – Monate 2-3:**
- ⬜ 5+ Blog-Artikel (Priorität: "Was kostet eine Website für Ärzte?", "KMU.DIGITAL Förderung", "ÖÄK Werberichtlinien", "DSGVO Arztpraxis")
- ⬜ Erstes YouTube-Video
- ⬜ Reddit-Engagement (r/Austria, r/selbstaendig)
- ⬜ LinkedIn-Artikel
- ⬜ GA4 KI-Traffic-Tracking

**Phase 4 – Monate 4-6:**
- ⬜ Restliche Blog-Artikel + regionale Seiten
- ⬜ Weitere YouTube-Videos
- ⬜ Guest Posts (medonline.at, brutkasten.com)
- ⬜ Ergebnisse messen

### Schlüssel-Erkenntnis: Lovable vs. Next.js
Lovable ist ein App-Builder, kein Website-Builder. React SPAs rendern client-side – KI-Crawler sehen nichts. Das betrifft auch alle Ärzte-Websites die auf Lovable/Wix/ähnlichen SPA-Plattformen gebaut werden. **Das ist ein Verkaufsargument:** Kevins Wettbewerber (webdoctor.at, einfachordi.at) verkaufen Templates die für KI unsichtbar sind.

**Workflow für Kunden-Websites:**
- Lovable = Demo-Tool (schnelle Vorschau in 30 Min für Erstgespräch)
- Produktion = Next.js oder WordPress (SSR, Schema funktioniert wirklich)

## Dateien die erstellt wurden
- `MYPRAXIS-KI-DOMINANZ-PLAYBOOK.md` – Vollständiges GEO-Playbook
- `robots.txt` – KI-Crawler-Regeln
- `llms.txt` – v3 KI-Profil
- `sitemap.xml` – Sitemap
- Next.js-Projektstruktur (layout.tsx, page.tsx, globals.css, configs)

## Nächste Schritte
1. **Tailwind CSS fixen** – Design der Next.js-Seite reparieren
2. **Domain umleiten** – mypraxis.at → mypraxis-nextjs.vercel.app
3. **Wikidata-Einträge** anlegen
4. **Google Business Profile** einrichten/optimieren
5. **Ersten Blog-Artikel** schreiben ("Was kostet eine Website für Ärzte?")
6. **Impressum + Datenschutz** Seiten erstellen

## Kontakt
- Kevin Hofbauer
- office@mypraxis.at
- +43 664 19 15 447
- Vitis, 3902, Niederösterreich
