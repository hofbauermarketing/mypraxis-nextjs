# CLAUDE.md – mypraxis.at Projektstand (Stand: März 2026)

---

## Wer ist Kevin?

Kevin Hofbauer betreibt **Kevin Hofbauer e.U.**, eine Digital-Marketing-Agentur in Vitis, Niederösterreich.

**Zwei Marken:**
- **hofbauer.marketing** – Websites, Videos, KI-Telefonassistenten für österreichische Unternehmen
- **mypraxis.at** – spezialisiert auf digitale Positionierung für niedergelassene Ärzte in Österreich

**Kontakt:**
- E-Mail: office@mypraxis.at
- Telefon: +43 664 19 15 447
- Adresse: Hauptplatz 12, 3902 Vitis, Niederösterreich
- UID: ATU78915818
- LinkedIn: https://www.linkedin.com/in/kevin-hofbauer-b2660b274/
- Facebook: https://www.facebook.com/profile.php?id=100035353760113

---

## Was ist mypraxis.at?

Agentur die Ärzte-Websites baut. **USP: KI-Sichtbarkeit** (Schema Markup, llms.txt, semantische Inhalte) – etwas das kein anderer österreichischer Anbieter hat.

**Wettbewerber:** webdoctor.at, einfachordi.at – nutzen SPA-Templates die für KI unsichtbar sind (Client-Side Rendering).

---

## Projekt-Infrastruktur

| Was | Wert |
|-----|------|
| **Live-URL** | https://www.mypraxis.at |
| **GitHub** | https://github.com/hofbauermarketing/mypraxis-nextjs (branch: main) |
| **Hosting** | Vercel (auto-deploy bei git push auf main) |
| **Lokaler Pfad** | `/Users/kevinhofbauer/Downloads/mypraxis-nextjs` |
| **Lokaler Port** | 3002 (`npm run dev -- -p 3002`) |
| **Framework** | Next.js 15, App Router, TypeScript |
| **Styling** | Tailwind CSS 3.4 |
| **Animationen** | Framer Motion 12 |
| **E-Mail** | Nodemailer via SMTP |
| **Übersetzung** | DeepL API (Free Tier) |

---

## Referenzkunden-Programm 2026 – DAS WICHTIGSTE KONZEPT

### Aktueller Modus (JETZT):
Kevin sucht **9 Ordinationen gesamt** (3 Kassenärzte + 3 Privatärzte + 3 Ärztezentren).

**Das Prinzip:**
- Die Website wird fertiggestellt
- Danach überweist der Arzt **was es ihm wert ist** – kein Fixpreis
- Pflicht: **24 Monate Betreuungspaket** (~€ 150/Monat excl. Steuer) – das ist verpflichtend für Referenzkunden
- Man muss sich **bewerben** und den Anforderungen entsprechen – nicht jeder wird aufgenommen
- CTA auf Hauptseite: **"Jetzt bewerben"**

### Nach dem Programm (DANN – reguläre Preise):
| Paket | Preis netto | Mit KMU.DIGITAL (–30%) |
|-------|------------|------------------------|
| Praxis-Website | € 3.900 | € 2.730 |
| Digitale Positionierung | € 7.500 | € 5.250 |
| Ärztezentren & PVEs | Auf Anfrage | Pro Arzt bis € 6.000 Förderung |

Betreuung für reguläre Kunden: **mind. 6–12 Monate empfohlen** (NICHT Pflicht).
CTA für reguläre Pakete: **"Jetzt anfragen"** (NICHT bewerben).

### Wichtige Unterscheidung:
- **"Jetzt bewerben"** → nur Referenzkundenprogramm
- **"Jetzt anfragen"** → reguläre Pakete (auf /preise Seite und Hauptseite-Featurekarten)

---

## Seiten-Übersicht

| Seite | Pfad | Beschreibung |
|-------|------|-------------|
| Startseite | `/` | Hero, Referenzkundenprogramm, Feature-Karten (ohne Preise), Demos, KI-Sichtbarkeit, FAQ, AskAI, Kontakt |
| Demo & Preise | `/preise` | Demos (5 Stile), Referenzkundenprogramm-Block, Reguläre Pakete (€3.900/€7.500), KMU.DIGITAL |
| Blog-Übersicht | `/blog` | Alle Blogartikel |
| Blog-Artikel | `/blog/[slug]` | Einzelartikel mit Schema, Lesezeit, Breadcrumb |
| KI-Videothek | `/videothek` | Videos mit VideoObject Schema |
| FAQ | `/faq` | Häufige Fragen |
| Gratis-Check | `/gratis-check` | KI-Scanner Seite |
| Demo Classic | `/demo/privatarzt-classic` | Demo-Website (noindex) |
| Demo Modern | `/demo/privatarzt-modern` | Demo-Website (noindex) |
| Demo Warm | `/demo/privatarzt-warm` | Demo-Website (noindex) |
| Demo ÄZ Classic | `/demo/aerztezentrum-classic` | Demo-Website (noindex) |
| Demo ÄZ Premium | `/demo/aerztezentrum-premium` | Demo-Website (noindex) |
| Impressum | `/impressum` | noindex |
| Datenschutz | `/datenschutz` | noindex |
| Barrierefreiheit | `/barrierefreiheit` | Barrierefreiheitserklärung (WCAG 2.1 AA, BFSG) |
| WCAG-Check | `/wcag-check` | Internes Tool |

---

## Komponenten-Übersicht

| Komponente | Datei | Beschreibung |
|-----------|-------|-------------|
| Navigation | `components/Navigation.tsx` | Navbar mit logo.webp |
| Referenzkunden-Section | `components/ReferenzkundenSection.tsx` | Animierter Dark-Block. Typewriter: **"Sie bestimmen den Wert."** Untertitel: "Nach Fertigstellung überweisen Sie, was es Ihnen wert ist. Danach gelten normale Preise." 2 Karten (ohne Preise!): Website-Paket, Pflicht-Betreuung 24 Monate. Kein KMU.DIGITAL. Counter: 9 Ordinationen. |
| Ask AI Section | `components/AskAiSection.tsx` | Buttons für Perplexity/ChatGPT (prefill via ?q=) + Claude/Gemini (clipboard). Standalone-Kopierbutton. Toast-Notifications. |
| Blog Carousel | `components/BlogCarousel.tsx` | Scroll-Karussell der Blog-Artikel |
| Blog Grid | `components/BlogGrid.tsx` | Blog-Übersicht |
| Contact Form | `components/ContactForm.tsx` | Felder: Name, E-Mail, Telefon, Fachrichtung, Nachricht. Sendet via /api/contact |
| Cookie Banner | `components/CookieBanner.tsx` | DSGVO Cookie-Consent |
| KI-Systeme Marquee | `components/KiSystemeMarquee.tsx` | Scrollendes Markenband |
| Scanner Embed | `components/ScannerEmbed.tsx` | iframe von agenturkunden.io |
| Accessibility Widget | `components/AccessibilityWidget.tsx` | Links floating, WCAG 2.1 AA. 14 Funktionen: Schriftgröße, Kontrast, Vorlesen, Übersetzung (DeepL), Lese-Lineal, Graustufen etc. |
| WCAG Scanner | `components/WcagScanner.tsx` | Internes Tool |

---

## API Routes

| Route | Datei | Funktion |
|-------|-------|---------|
| `POST /api/contact` | `app/api/contact/route.ts` | Kontaktformular → E-Mail via Nodemailer/SMTP an office@mypraxis.at. Felder: name, email, phone, fachrichtung, message. |
| `POST /api/translate` | `app/api/translate/route.ts` | Übersetzung via DeepL Free API. Batch in 50er-Chunks. Quellsprache: DE. |
| `GET /api/scan` | `app/api/scan/route.ts` | KI-Scanner (agenturkunden.io) |

---

## Environment Variables

**Lokal** (`.env.local`):
```
DEEPL_API_KEY=***          # DeepL Free API für Widget-Übersetzung
WAVE_API_KEY=***           # WCAG Wave Scanner
```

**Vercel Dashboard** (zusätzlich nötig für Kontaktformular):
```
SMTP_HOST=smtp.strato.de   # oder smtp.gmail.com etc.
SMTP_PORT=465              # 465 (SSL) oder 587 (STARTTLS)
SMTP_SECURE=true           # "true" für Port 465
SMTP_USER=office@mypraxis.at
SMTP_PASS=***
```
⚠️ SMTP-Vars sind NUR im Vercel Dashboard, nicht in .env.local!

---

## Wichtige Dateipfade

| Datei | Zweck |
|-------|-------|
| `app/layout.tsx` | Root Layout + JSON-LD Schema Markup (@graph) + AccessibilityWidget + Navigation + CookieBanner |
| `app/page.tsx` | Startseite |
| `app/globals.css` | Globale Styles + alle `a11y-*` CSS-Klassen für AccessibilityWidget |
| `app/sitemap.ts` | Dynamische Sitemap (MetadataRoute API) |
| `app/manifest.ts` | PWA Web App Manifest |
| `app/opengraph-image.tsx` | OG-Image Generator (1200×630) |
| `content/blog/` | Markdown-Dateien für Blog-Artikel |
| `lib/blog.ts` | Blog-Daten + readingTime (200 WPM) |
| `public/robots.txt` | 20+ KI-Crawler explizit erlaubt (GPTBot, ClaudeBot etc.) |
| `public/llms.txt` | KI-lesbares Profil (Leistungen, Preise, Blog, Videos) |
| `public/logo.webp` | Logo (23KB optimiert, war 1.2MB PNG) |
| `next.config.js` | non-www → www Redirect (permanent: true) |

---

## Schema Markup (layout.tsx – @graph)

Vier Entitäten im JSON-LD:
1. **ProfessionalService** (`#organization`) – Firma, Leistungen, Preise, areaServed alle 9 Bundesländer
2. **Person** (`#kevin-hofbauer`) – Kevin Hofbauer mit sameAs LinkedIn/Facebook/hofbauer.marketing
3. **WebSite** (`#website`) – Website-Metadaten
4. **FAQPage** (`#faq`) – 6 Fragen (Kosten, KI-Readiness, KMU.DIGITAL, Ärztezentren, llms.txt, Dauer)

---

## Redirect-Konfiguration

- **Vercel Dashboard:** mypraxis.at → 308 (permanent) → www.mypraxis.at ← MUSS SO BLEIBEN
- **next.config.js:** Zusätzlicher non-www → www Redirect als Absicherung
- HTTP→HTTPS macht Vercel automatisch

---

## Blog-Artikel (content/blog/)

9 Artikel mit vollständigem BlogPosting-Schema:
1. `ki-sichtbarkeit-aerzte`
2. `was-kostet-website-arzt`
3. `kmu-digital-foerderung-aerzte`
4. `dsgvo-arzt-website`
5. `docfinder-herold-google-vergleich`
6. `brauche-ich-website-als-arzt`
7. `ki-telefonassistent-arztpraxis`
8. `barrierefreiheitsgesetz-aerzte`
9. `website-wechsel-bedenken`

---

## Barrierefreiheit (vollständig implementiert)

- **Widget:** Links floating, BFSG-konform, kein externes Tracking
- **CSS-Klassen:** alle `a11y-*` in globals.css
- **Erklärungsseite:** `/barrierefreiheit` (WCAG 2.1 AA, BaFG)
- **DeepL Übersetzung:** 10 Sprachen (DE, EN, RU, TR, AR, RO, PL, HU, UK, CS)
- **Widget eingebunden in:** `app/layout.tsx` mit `accentColor="#1d4ed8"`

---

## AskAiSection – Frage & Logik

**Aktuelle Frage:**
`"Was macht mypraxis.at und welche Leistungen bieten sie für niedergelassene Ärzte in Österreich an?"`

**Services:**
- Perplexity: prefill via `?q=` URL-Parameter ✅
- ChatGPT: prefill via `?q=` URL-Parameter ✅
- Claude: clipboard (kein URL-Prefill möglich) ⚠️
- Gemini: clipboard (kein URL-Prefill möglich) ⚠️

**Bei prefill:** Toast "Frage bereits eingefügt, einfach Enter drücken"
**Bei clipboard:** Toast "Frage kopiert! In [Name] einfügen und Enter drücken"

---

## KMU.DIGITAL Förderung

- **Förderquote:** 30 % der Kosten, max. € 6.000 pro Unternehmen
- **Voraussetzung:** Strategieberatung durch zertifizierten Digital Consultant (CDC), ca. € 500 (davon € 250 gefördert)
- **Kevin hat einen externen Förderberater** der Beratung + Antragstellung übernimmt
- **Ärztezentren:** Jeder Arzt = eigenes KMU = eigener Förderantrag möglich

---

## GEO-Strategie (Generative Engine Optimization)

**Drei-Schichten-Ansatz:**
1. **Strukturierte Daten** – Schema Markup (JSON-LD) ✅
2. **Semantische Inhalte** – 9 Blog-Artikel, llms.txt ✅
3. **KI-Readiness** – llms.txt, robots.txt mit 20+ KI-Crawlern ✅

---

## KRITISCHE REGELN – NIEMALS VERGESSEN

### Konzept-Regeln:
- **"Jetzt bewerben"** = NUR für Referenzkundenprogramm
- **"Jetzt anfragen"** = für reguläre Pakete (/preise + Hauptseite Feature-Karten)
- **Preise auf Hauptseite:** KEINE fixen Preise (Referenzkundenmodus "Sie bestimmen den Wert")
- **Preise auf /preise:** NUR in der "Reguläre Pakete"-Section (nach dem Programm)
- **ReferenzkundenSection 2 Karten:** Website-Paket (kein Preis!), Pflicht-Betreuung 24 Monate (kein Preis!) – KEIN KMU.DIGITAL
- **Pflicht-Betreuung 24 Monate** gilt NUR für Referenzkunden – reguläre Kunden: 6–12 Monate empfohlen (nicht Pflicht)
- **9 Ordinationen gesamt** = 3 Kassa + 3 Privat + 3 Ärztezentren (NICHT 27!)

### Technische Regeln:
- **TypeScript-Fehler 7026/2307 in VSCode → ignorieren** (Phantom-Fehler, Vercel baut fehlerfrei)
- **NIEMALS** `app/sitemap.xml/` als Verzeichnis anlegen → bricht Turbopack Build
- **NIEMALS** hardcodiertes `<link rel="canonical">` in layout.tsx → überschreibt Sub-Seiten
- **NIEMALS** statische `public/sitemap.xml` anlegen → kollidiert mit `app/sitemap.ts`
- **Canonical:** Jede Seite definiert eigene Canonical via `alternates: { canonical: '/pfad' }`
- **images.unoptimized: true** in next.config.js – Vercel Image Optimization deaktiviert (bleibt so!)

---

## SEO-Status (Stand: März 2026)

- Sitemap: `app/sitemap.ts` → dynamisch generiert
- Non-www Links: In allen Demo-Seiten behoben (zeigen auf www.mypraxis.at)
- Google Search Console: Sitemap eingereicht unter https://www.mypraxis.at/sitemap.xml
- robots.txt: 20+ KI-Crawler explizit erlaubt

---

## Offene Maßnahmen (manuell – nicht im Code)

- [ ] SMTP-Variablen in Vercel Dashboard prüfen/setzen (für Kontaktformular)
- [ ] Google Business Profile einrichten und optimieren
- [ ] Wikidata-Einträge: mypraxis.at + Kevin Hofbauer anlegen
- [ ] Branchenverzeichnisse: herold.at, firmenabc.at, WKO, etc.
- [ ] Kundenstimmen für E-E-A-T sammeln (nach Referenzkundenprogramm)
- [ ] LinkedIn-Artikel schreiben
- [ ] Reddit-Engagement (r/Austria, r/selbstaendig)
