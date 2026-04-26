# CLAUDE.md – mypraxis-nextjs

> Projektgedächtnis für KI-Agenten (Google Antigravity, Claude Code, Cline, etc.)
> Letzte Aktualisierung: März 2026

---

## Wer ist Kevin Hofbauer?

Kevin Hofbauer betreibt **Kevin Hofbauer e.U.**, eine Digital-Marketing-Agentur in Vitis, Niederösterreich.

- E-Mail: office@mypraxis.at
- Telefon: +43 664 19 15 447
- Adresse: Hauptplatz 12, 3902 Vitis, Niederösterreich
- UID: ATU78915818
- LinkedIn: https://www.linkedin.com/in/kevin-hofbauer-b2660b274/

**Zwei Marken:**
- **hofbauer.marketing** – Websites, Videos, KI-Telefonassistenten für österreichische Unternehmen (separates Repo: `hofbauer-marketing-nextjs`, Port 3000)
- **mypraxis.at** – digitale Positionierung + KI-Sichtbarkeit für niedergelassene Ärzte in Österreich (dieses Repo, Port 3002)

---

## Was ist mypraxis.at?

Spezialagentur für Arzt-Websites in Österreich. Einziger österreichischer Anbieter mit:

1. **KI-Sichtbarkeit als USP** – Schema Markup v3, llms.txt, semantische Inhalte, SSR-first (Konkurrenten webdoctor.at, einfachordi.at bauen SPA-Templates die für KI unsichtbar sind)
2. **Barrierefreiheits-Widget** – 16 Features, WCAG 2.1 AA, DeepL-Übersetzung in 10 Sprachen, im Standard inklusive
3. **Förderbegleitung** – KMU.DIGITAL und andere Programme via externem zertifizierten Förderpartner (konkrete Quoten/Beträge ändern sich, werden individuell pro Praxis geprüft)

---

## Projekt-Infrastruktur

| Was | Wert |
|-----|------|
| **Live-URL** | https://www.mypraxis.at |
| **GitHub** | https://github.com/hofbauermarketing/mypraxis-nextjs (branch: main) |
| **Hosting** | Vercel (auto-deploy bei git push auf main) |
| **Lokaler Pfad** | `/Users/kevinhofbauer/Desktop/mypraxis-nextjs` |
| **Lokaler Port** | 3002 (`npm run dev -- -p 3002`) |
| **Framework** | Next.js 15, App Router, TypeScript |
| **Styling** | Tailwind CSS 3.4 |
| **Animationen** | Framer Motion (Hauptseite) + CSS keyframes (Landingpage) |
| **E-Mail** | Nodemailer via SMTP |
| **Übersetzung** | DeepL API (Free Tier) |
| **KI-Anrufe** | Fonio.ai Outbound Call API |

---

## Referenzkunden-Programm 2026 – WICHTIGSTES KONZEPT

### Aktueller Modus: Pilotkonditionen
Kevin sucht **9 Ordinationen gesamt** (3 Kassenärzte + 3 Privatärzte/Wahlärzte + 3 Ärztezentren).

**Das Prinzip:**
- Reduzierte Pilotkonditionen gegen **24 Monate Zusammenarbeit + Referenzfreigabe**
- Referenzfreigabe = namentliche Nennung, Testimonial oder Fallstudie
- Man muss sich **bewerben** – nicht jeder wird aufgenommen
- CTA auf Hauptseite: **"Jetzt bewerben"**

⚠️ **VERALTET – NICHT MEHR VERWENDEN:** "Sie bestimmen den Wert" / "Nach Fertigstellung überweisen Sie, was es Ihnen wert ist" – das war das alte Konzept. Jetzt: "Pilotkonditionen."

### Nach dem Programm – reguläre Kunden:

**WICHTIG (Kevin 2026-04-26):** KEINE öffentlichen Preise mehr — weder Pakete noch Förderquoten. Alle Investitionen werden im Erstgespräch nach Praxis-Bedarf und Budget individuell zugeschnitten. Förderungen werden mit externem zertifizierten Förderpartner geprüft.

Reguläre Kunden bekommen: **12 Monate technische Betreuung inklusive** (kein Pflicht-Abo).

### CTA-Unterscheidung (wichtig!):
- **"Jetzt bewerben"** → NUR Referenzkundenprogramm
- **"Jetzt anfragen"** → Erstgespräch für individuelle Lösung

---

## Seiten-Übersicht

| Seite | Pfad | Beschreibung |
|-------|------|-------------|
| Startseite | `/` | Hero, Referenzkundenprogramm, Feature-Karten (ohne Preise), KI-Sichtbarkeit, FAQ, AskAI, BlogCarousel, Kontakt |
| **Landing Page** | `/landingpage` | Eigenständige Sales-Page mit Qualifying-Funnel (siehe unten) |
| Demos & Anfrage | `/preise` | 5 Demo-Stile, Referenzprogramm-Erklärung. KEINE konkreten Pakete/Preise — alles "auf Anfrage" |
| Blog-Übersicht | `/blog` | Alle Blogartikel |
| Blog-Artikel | `/blog/[slug]` | Einzelartikel mit Schema, Lesezeit, Breadcrumb |
| KI-Videothek | `/videothek` | Videos mit VideoObject Schema |
| FAQ | `/faq` | Häufige Fragen |
| Gratis-Check | `/gratis-check` | WCAG Scanner Landing Page |
| WCAG-Check | `/wcag-check` | Scanner UI (intern) |
| Demo Classic | `/demo/privatarzt-classic` | Demo (noindex) |
| Demo Modern | `/demo/privatarzt-modern` | Demo (noindex) |
| Demo Warm | `/demo/privatarzt-warm` | Demo + /impfen Unterseite (noindex) |
| Demo ÄZ Classic | `/demo/aerztezentrum-classic` | Demo + /team (noindex) |
| Demo ÄZ Premium | `/demo/aerztezentrum-premium` | Demo (noindex) |
| Impressum | `/impressum` | noindex |
| Datenschutz | `/datenschutz` | noindex |
| Barrierefreiheit | `/barrierefreiheit` | WCAG 2.1 AA Erklärung |

---

## Landing Page – `/landingpage` (ausführlich)

**Datei:** `app/landingpage/LandingPageClient.tsx` (Client Component, `'use client'`)
**Route:** `app/landingpage/page.tsx` → rendert `<LandingPageClient />`

Diese Seite ist eine **eigenständige, vollständige Sales-Page** ohne Navigation/Footer der Hauptseite. Sie hat eigenen Header + Footer inline.

### Aufbau der Seite (Sektionen von oben nach unten):

1. **Header** – Sticky, Logo `mypraxis.at`, CTA-Button "Jetzt bewerben" → scrollt zu `#funnel`
2. **Hero** – Vollbild mit `lp-hero.jpg`, Gradient-Overlay, Urgency-Badge mit Slot-Visualisierung (9 Punkte, 2 vergeben), H1, Subtext, CTA-Button
3. **Pain Cards** – 3 Karten mit echten Logos (ÄK Wien, Statistik Austria, OEAK), IntersectionObserver Scroll-Reveal + `floatMicro` Animation, Hintergrundbild bei 22%/20% Opacity
4. **Features Grid** – 2-Spalten, 6 Feature-Karten mit Bild + Icon + Text
5. **KI-Showcase / ChatGPT Mock** – Tab-Switch "Mit KI-Optimierung" / "Typische Arzt-Website", animierter Chat
6. **Animierte Stats** – 4 Zahlen (Statistiken), `AnimatedStat` Komponente mit IntersectionObserver
7. **Guarantee / Versprechen** – Dunkle Sektion mit `GuaranteeBeam` (Canvas Border-Animation) + Trust Shield Badge (Doppelrahmen) + 5 Checkmarks
8. **Qualifying Funnel** – 5-stufiger Bewerbungsprozess (siehe unten), 5-Spalten-Layout (xl:flex)
9. **FAQ** – 5 Fragen, Accordion mit CSS grid-trick Expand, schwebende Animation, SVG-Hintergrundbild
10. **Footer** – Impressum, Datenschutz

### Qualifying Funnel – `QualifyingFunnel` Komponente

**Schritte:**
| Step | Frage | Wert-Keys |
|------|-------|-----------|
| 1 | Hat Ihre Ordination eine eigene Website? | `eigen` / `verzeichnis` / `keine` |
| 2 | KI-Sichtbarkeit: ChatGPT-Frage nach Arzt | `nicht_genannt` / `weiss_nicht` / `sichtbar` |
| 3 | Was kostet täglich am meisten Zeit? | `erklaerung` / `auslastung` / `sprache` / `anderes` |
| 4 | Wann könnten Sie starten? (Timeline) | `sofort` / `bald` / `spaeter` |
| 5 | Kontaktformular + 2 CTAs | — |

**Step 4 Logik (Dringlichkeit):**
- `sofort` (14 Tage) → kein Banner → direkt zum Formular
- `bald` (2–4 Wochen) → Amber-Banner: "Wir empfehlen, nicht zu lange zu warten…"
- `spaeter` (>1 Monat) → Amber-Banner: "Aktuell vergeben wir Starttermine bevorzugt…" (aber kein Hard-Reject)

**Step 5 – Kontaktformular:**
- Name, Telefon (Pflicht), Fachrichtung, Stadt (optional)
- Auf Mobile: `grid-cols-1 sm:grid-cols-2` (nicht 2-spaltig auf 375px!)
- 2 CTAs: "Jenny ruft mich an" (→ `/api/call`) + "Termin mit Kevin" (→ cal.com Link)

**5-Spalten-Layout (Desktop-only, xl:flex):**
```
Col 1 (w-148px, hidden xl:flex): Leitsatz / Quote
Col 2 (w-20, hidden xl:flex):    "Ihre Chance nutzen" Pfeil-Animation
Col 3 (flex-1 max-w-lg):         FORM (immer sichtbar)
Col 4 (w-20, hidden xl:flex):    "JETZT profitieren" Pfeil-Animation
Col 5 (w-148px, hidden xl:flex): "Jede Seite enthält" Feature-Card
```
⚠️ Cols 1, 2, 4, 5 sind auf Mobile NICHT sichtbar. Das ist Absicht.

### GuaranteeBeam – Canvas 2D Border-Animation

**Datei:** `LandingPageClient.tsx`, Funktion `GuaranteeBeam()`

**Implementierung:** Canvas 2D (NICHT SVG!) – wichtig, niemals zurück zu SVG wechseln:
- SVG `stroke-dasharray`/`stroke-dashoffset` → hatte "mehrere Linien"-Bug (Browser interpoliert List-Properties)
- Canvas `ctx.setLineDash([dashLen, gap])` + `ctx.lineDashOffset` ist deterministisch

**Kernlogik:**
```tsx
const perim = 2 * (bw + bh) - r * (8 - 2 * Math.PI)  // exakte Umfang-Formel
const dashLen = Math.min(420, perim - 10)
const gap = perim - dashLen  // dashLen + gap = perim → exakt 1 Strich sichtbar
ctx.setLineDash([dashLen, gap])
ctx.lineDashOffset = -(t * perim)  // t = 0..1 über 10s
ctx.setTransform(dpr, 0, 0, dpr, 0, 0)  // jedes Frame resetten (HiDPI + resize-safe)
```

**CSS Filter** auf `<canvas>` Element für Glow:
```
drop-shadow(0 0 3px rgba(255,200,80,0.9))
drop-shadow(0 0 8px rgba(255,130,0,0.6))
drop-shadow(0 0 18px rgba(255,100,0,0.3))
```

**ResizeObserver** aktualisiert `cw`/`ch` direkt (kein React-State → kein Re-Render).

### Trust Shield Badge

**Doppelrahmen via SVG** (nicht CSS border – wird von clip-path abgeschnitten):
- Äußerer Ring: exakt auf Schildkontur, `rgba(255,255,255,0.72)`, 2px
- Innerer Ring: ~6px eingerückt (`M43 10 L73 20...`), `rgba(255,255,255,0.32)`, 1.5px
- SVG sitzt **neben** dem geclippten Div (nicht darin) → beide Ringe bleiben sichtbar

```
Clip-path shield: M43 4 L78 16 L78 52 Q78 76 43 92 Q8 76 8 52 L8 16 Z
Inner ring path:  M43 10 L73 20 L73 52 Q73 72 43 87 Q13 72 13 52 L13 20 Z
Container:        w-[86px] h-[96px]
```

### FAQ Accordion

**5 Fragen** (nummeriert):
1. Andere verlangen ab 12.000 € für Arzt-Websites – wie geht das bei mypraxis.at?
2. Es gibt günstigere Anbieter – warum also mypraxis.at?
3. Wird mir die Website gefallen?
4. Ihr seid neu am Markt – gibt es mypraxis.at auch langfristig noch?
5. Gibt es Demoseiten?

**Smooth Expand:** CSS grid-trick (`gridTemplateRows: '0fr'` → `'1fr'` mit `transition: 0.28s`)

**Float-Animation:** `floatMicro` mit `duration: 5–6.4s`, `delay: i * 0.45s` – jede Karte schwebt eigenständig.

**SVG Hintergrundbild:** Selbstbewusste Figur (Power-Pose), Fragezeichen, Checkmark-Akzent, alle Elemente bei 3–6% Opacity.

---

## API Routes

| Route | Datei | Funktion |
|-------|-------|---------|
| `POST /api/contact` | `app/api/contact/route.ts` | Kontaktformular → Nodemailer SMTP → office@mypraxis.at. Felder: name, email, phone, fachrichtung, message. HTML-Escape für Sicherheit. |
| `POST /api/translate` | `app/api/translate/route.ts` | DeepL Free API. Batch-Übersetzung. Quellsprache DE. 10 Zielsprachen. |
| `GET /api/scan` | `app/api/scan/route.ts` | WCAG/Accessibility Scanner |
| `POST /api/call` | `app/api/call/route.ts` | Fonio.ai Outbound Call. Felder: phone, name, fachrichtung, ort. Startet KI-Telefonanruf ("Jenny") für Lead-Qualifizierung. |
| `POST /api/funnel-notify` | `app/api/funnel-notify/route.ts` | Benachrichtigungs-E-Mail an office@mypraxis.at bei Funnel-Eintrag. Felder: name, phone, fachrichtung, ort, q1–q4, method (jenny/cal). |

---

## Environment Variables

**Lokal** (`.env.local`):
```
DEEPL_API_KEY=***          # DeepL Free API für Widget-Übersetzung
WAVE_API_KEY=***           # WCAG Wave Scanner
```

**Vercel Dashboard** (für E-Mail + Fonio – NICHT in .env.local!):
```
SMTP_HOST=smtp.strato.de   # oder smtp.gmail.com etc.
SMTP_PORT=465              # 465 (SSL) oder 587 (STARTTLS)
SMTP_SECURE=true           # "true" für Port 465
SMTP_USER=office@mypraxis.at
SMTP_PASS=***

FONIO_API_KEY=***          # Fonio.ai API Key für Outbound Calls
FONIO_FROM_NUMBER=***      # Absendernummer (E.164 Format, z.B. +43...)
FONIO_AGENT_ID=***         # Fonio Agent ID ("Jenny")
```

**Blog-Bild-Generierung** (lokal, einmalig):
```
Together AI Key: tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw
Bestes Modell für photorealistische Szenen: google/imagen-4.0-preview
Bildgröße: 1408×768 (JPEG, in public/blog/ als .png speichern)
```

---

## Komponenten-Übersicht

| Komponente | Datei | Beschreibung |
|-----------|-------|-------------|
| Navigation | `components/Navigation.tsx` | Navbar |
| Referenzkunden-Section | `components/ReferenzkundenSection.tsx` | Animierter Dark-Block. **Typewriter: "Pilotkonditionen."** (nicht mehr "Sie bestimmen den Wert"). Counter: 9 Ordinationen. 3 Referenz-Kacheln. CTA: Jetzt bewerben. |
| Ask AI Section | `components/AskAiSection.tsx` | Buttons ChatGPT/Perplexity (URL prefill) + Claude/Gemini (clipboard). Toast-Notifications. |
| Blog Carousel | `components/BlogCarousel.tsx` | Infiniter Marquee. Jede Karte: 148px Cover-Bild, Kategorie-Badge (Overlay), Datum, Titel, Beschreibung. BlogCard-Komponente extrahiert (für Original + Duplikate). |
| Blog Grid | `components/BlogGrid.tsx` | Blog-Übersicht-Grid |
| Contact Form | `components/ContactForm.tsx` | Felder: Name, E-Mail, Telefon, Fachrichtung, Nachricht → /api/contact |
| Cookie Banner | `components/CookieBanner.tsx` | DSGVO Cookie-Consent |
| KI-Systeme Marquee | `components/KiSystemeMarquee.tsx` | Scrollendes Markenband |
| Scanner Embed | `components/ScannerEmbed.tsx` | iframe Einbettung |
| Accessibility Widget | `components/AccessibilityWidget.tsx` | Links floating. 16 Features: Schriftgröße (3 Stufen), Zeilenabstand, Buchstabenabstand, Legasthenie-Schrift, Lese-Lineal, Vorlesen (TTS), Übersetzung DeepL 10 Sprachen, Hoher Kontrast, Dunkler Modus, Graustufen, Invertierte Farben, Bilder ausblenden, Links unterstreichen, Animationen stoppen, Fokus sichtbar, Mauszeiger groß. |
| WCAG Scanner | `components/WcagScanner.tsx` | Internes Tool |

---

## Blog-System

### Artikel hinzufügen (Schritt für Schritt)
1. Neue `.md` Datei in `content/blog/` anlegen
2. Pflicht-Frontmatter:
```yaml
---
title: "Titel des Artikels"
date: "2026-03-11"
description: "Meta-Description, 1-2 Sätze"
author: "Kevin Hofbauer"
image: "/blog/slug-name.png"
imageAlt: "Beschreibender Alt-Text"
---
```
3. Cover-Bild als PNG in `public/blog/` ablegen (ideal: 1408×768, via Together AI Google Imagen 4.0-preview)
4. In `components/BlogCarousel.tsx` Eintrag in `categoryColors` + `categoryLabels` für den Slug ergänzen

### Aktuelle Artikel (10 Stück)
```
was-kostet-website-arzt           → Kosten          → bg-blue-100
website-wechsel-bedenken          → Relaunch         → bg-orange-100
ki-sichtbarkeit-aerzte            → KI               → bg-purple-100
brauche-ich-website-als-arzt      → Grundlagen       → bg-green-100
dsgvo-arzt-website                → Datenschutz      → bg-red-100
barrierefreiheitsgesetz-aerzte    → Recht            → bg-yellow-100
kmu-digital-foerderung-aerzte     → Förderung        → bg-emerald-100
docfinder-herold-google-vergleich → Plattformen      → bg-sky-100
ki-telefonassistent-arztpraxis    → KI-Telefon       → bg-violet-100
barrierefreiheits-widget-arzt-website → Barrierefreiheit → bg-teal-100
```

---

## SSR / Crawler-Kritische Patterns

### Problem: Animierte State-Werte im statischen HTML
Next.js rendert Client Components (`'use client'`) server-seitig vor. `useState(0)` wird im HTML als `0` ausgegeben – LLM-Crawler (GPTBot, ClaudeBot, PerplexityBot) lesen den falschen Wert.

### Lösung: `useState(finalValue)` + `animated` Guard

**Counter (implementiert in ReferenzkundenSection.tsx):**
```tsx
// ✅ RICHTIG – SSR rendert "9", Browser animiert 0→9
const [count, setCount] = useState(target)   // ← target, nicht 0
const [animated, setAnimated] = useState(false)

useEffect(() => {
  if (!inView || animated) return
  setAnimated(true)
  setCount(0) // Reset für Animation
  // ... Animation 0→target
}, [inView, animated])
```

**Typewriter (implementiert in ReferenzkundenSection.tsx):**
```tsx
// ✅ RICHTIG – SSR rendert "Pilotkonditionen.", Browser tippt es ein
const [displayed, setDisplayed] = useState(text)   // ← text, nicht ''
const [animated, setAnimated] = useState(false)

useEffect(() => {
  if (!inView || animated) return
  setAnimated(true)
  setDisplayed('')    // Reset für Animation
  // ... Typewriter-Effekt
}, [isInView, animated])
```

**Framer Motion `initial={{ opacity: 0 }}`** → kein Problem. Framer Motion setzt Opacity erst nach JS-Hydration via Inline-Style. Der Text ist im SSR-HTML vorhanden und für statische Crawler lesbar.

---

## GEO / SEO-Infrastruktur

### Deployed und aktiv:
- **`/robots.txt`** – 20+ KI-Crawler mit `Allow` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, OAI-SearchBot, etc.)
- **`/llms.txt`** – Strukturiertes KI-Profil für LLM-Agenten
- **`/sitemap.xml`** – Auto-generiert via `app/sitemap.ts` (MetadataRoute API)
- **Schema Markup v3** in `app/layout.tsx` (@graph mit 4 Entitäten):
  - `ProfessionalService` – Firma, Leistungen, Preise, Kontakt, 9 Bundesländer
  - `Person` – Kevin Hofbauer mit sameAs-Verweisen
  - `WebSite` – Website-Metadaten
  - `FAQPage` – strukturierte FAQ-Fragen
- **Meta-Tags + Open Graph** vollständig in `app/layout.tsx`
- **Canonical** – jede Seite setzt eigene `alternates: { canonical: '/pfad' }`

### Warum Next.js statt Lovable/Wix:
React SPA = CSR → KI-Crawler sehen `<div id="root"></div>`.
Next.js SSG = vollständiges HTML → Crawler lesen alles.
**Das ist ein konkretes Verkaufsargument gegenüber Konkurrenten.**

---

## Design-Konventionen

### Farben
```
Primär-Blau (Hero, Headings): #112080 / #1e3ab8 / #2a50cc
Orange-Akzent (CTAs):          #ff8a00
Dark-Background (Referenz):    #0a0f1e / #07090f
```

### CSS Keyframes in globals.css
```
floatMicro    – translateY 0 → -5px → 0 (für Pain Cards, FAQ)
floatSm       – etwas größer
floatSlow     – langsam
float         – standard
fadeSlideUp   – opacity 0 + translateY → 1 + 0
trustBadgeIn  – Einflug-Animation für Trust Badge
trustBeamPulse – Puls für Trust Badge
borderSpin    – rotate 0→360°
```

### Kritische Design-Regeln
- Niemals das Referenzkunden-Block-Design ändern ohne explizite Anweisung – es ist das Kern-Verkaufselement
- Keine generischen Template-Designs – Kevin legt auf Exklusivität großen Wert
- Keine unnötigen Framer Motion Animationen auf der Landingpage – dort nur CSS keyframes + Canvas
- **GuaranteeBeam IMMER Canvas 2D** – nie zurück zu SVG wechseln (hatte Multiple-Lines-Bug)

---

## Mobile Responsiveness – angewendete Fixes (März 2026)

Alle Fixes wurden bereits in `LandingPageClient.tsx` eingebaut:

| Bereich | Fix |
|---------|-----|
| Hero Badge | `text-xs sm:text-sm`, schmalere Padding |
| Hero H1 | `text-2xl sm:text-3xl md:text-5xl` |
| Hero Body-Text | `text-base md:text-xl` |
| Hero CTA | `text-base sm:text-lg`, `px-8 sm:px-10`, `py-3 sm:py-4` |
| Funnel Form Inputs | `grid-cols-1 sm:grid-cols-2` (beide Zeilen) |
| FAQ Button | `px-4 sm:px-6`, `py-4 sm:py-5`, `gap-2 sm:gap-4` |
| FAQ Fragetext | `text-[13px] sm:text-[15px]` |
| FAQ Antworttext | `px-4 sm:px-6`, `text-[13px] sm:text-[14px]` |
| Pain Cards Gap | `gap-5 md:gap-8` |
| Guarantee Padding | `px-4 sm:px-8 md:px-12` |
| Kevin Section Gap | `gap-6 md:gap-10` |
| Stats Grid Divider | `divide-x` auf Mobile hinzugefügt |

**Noch NICHT mobil optimiert (bewusst ausgelassen):**
- Funnel 5-Spalten-Layout → Cols 1/2/4/5 sind `hidden xl:flex` → OK, Form ist das Wichtigste
- FAQ SVG Hintergrundbild → `xMidYMid slice` → OK, sieht auf Mobile trotzdem gut aus

---

## Wichtige Dateipfade

| Datei | Zweck |
|-------|-------|
| `app/layout.tsx` | Root Layout + JSON-LD Schema + AccessibilityWidget + Navigation + CookieBanner |
| `app/page.tsx` | Startseite (gesamter Page-Content) |
| `app/landingpage/page.tsx` | Landingpage Route (rendert LandingPageClient) |
| `app/landingpage/LandingPageClient.tsx` | Gesamte Landingpage als Client Component |
| `app/globals.css` | Globale Styles + alle `a11y-*` CSS-Klassen + Keyframe-Animationen |
| `app/sitemap.ts` | Dynamische Sitemap (MetadataRoute API) |
| `app/opengraph-image.tsx` | OG-Image Generator (1200×630) |
| `app/api/call/route.ts` | Fonio.ai Outbound Call API |
| `app/api/funnel-notify/route.ts` | Funnel E-Mail-Benachrichtigung |
| `app/api/contact/route.ts` | Kontaktformular E-Mail |
| `content/blog/` | Markdown-Dateien der Blogartikel |
| `lib/blog.ts` | getSortedPostsData(), getPostData(), formatDate(). Lesezeit: 200 WPM |
| `public/robots.txt` | 20+ KI-Crawler erlaubt |
| `public/llms.txt` | KI-lesbares Profil |
| `public/blog/` | Cover-Images der Blogartikel |
| `public/logos/` | Logos für Pain Cards (aekwien-logo.jpg, oeak-logo.png, statistik-real.svg) |
| `next.config.js` | non-www → www Redirect (permanent: true) + images.unoptimized: true |

---

## Technische Sonderfälle / Fallstricke

- **TypeScript-Fehler 7026/2307 in VSCode → ignorieren.** Phantom-Fehler im Editor, Vercel baut fehlerfrei.
- **NIEMALS** `app/sitemap.xml/` als Verzeichnis anlegen → bricht Turbopack Build.
- **NIEMALS** hardcodiertes `<link rel="canonical">` in layout.tsx → überschreibt Sub-Seiten.
- **NIEMALS** statische `public/sitemap.xml` anlegen → kollidiert mit `app/sitemap.ts`.
- **`images.unoptimized: true`** in next.config.js – Vercel Image Optimization deaktiviert, muss so bleiben.
- **Vercel Dashboard:** mypraxis.at → 308 permanent → www.mypraxis.at. Nicht anfassen.
- **GuaranteeBeam:** Immer Canvas 2D. SVG strokeDasharray verursacht "mehrere Linien"-Bug durch Browser-List-Interpolation.
- **Funnel Step-Typ:** `type FunnelStep = 1 | 2 | 3 | 4 | 5` – bei neuen Steps anpassen.
- **ctx.roundRect():** Chrome 99+, Firefox 112+ supported. Fallback-Path in GuaranteeBeam vorhanden.

---

## KI-Sprachregeln (Copy-Konventionen)

Kein absolutes Versprechen – nur Wahrscheinlichkeitsaussagen:

```
❌ "Wir sorgen dafür, dass ChatGPT Ihre Ordination empfiehlt"
✅ "Wir erhöhen die Chance deutlich, dass ChatGPT Ihre Ordination kennt und nennt"

❌ "Ihre Ordination wird in der Antwort genannt"
✅ "steigt die Chance deutlich, dass Ihre Ordination korrekt erfasst und in der Antwort genannt wird"

❌ "ohne KI-Readiness wird Ihre Ordination schlicht nicht genannt"
✅ "ohne strukturierte Daten sinkt die Chance erheblich, korrekt erfasst zu werden"
```

**FAQ-Metaphern (bereits verwendet – nicht wiederholen):**
- Hausbau: Fertigbausatz vs. Architektenhaus
- Auto: Kleinwagen vs. Fahrzeug das sich anfühlt wie Ihres
- Assistenzarzt: Extrameile in der Aufbauphase

---

## Deployment

```bash
# Lokale Entwicklung
cd /Users/kevinhofbauer/Desktop/mypraxis-nextjs
npm run dev -- -p 3002

# Deploy (GitHub → Vercel auto-deploy)
git add <dateien>
git commit -m "feat/fix/style: beschreibung"
git push
```

---

## KMU.DIGITAL Förderung

**WICHTIG (Kevin 2026-04-26):** KEINE konkreten Förderquoten oder Maximalbeträge mehr auf der Website nennen — Programme ändern sich, Praxis-Situationen sind individuell. Nur strukturelle Aussagen + Verweis auf externen Förderpartner.

- **Programm-Struktur:** zwei Säulen (Strategieberatung CDC + Umsetzung)
- **Voraussetzung:** Strategieberatung durch zertifizierten Digital Consultant (CDC) ist programmpflicht
- Kevin hat einen **externen, zertifizierten Förderberater** der Beratung + Antragstellung übernimmt — er prüft individuell welche Quoten + Beträge aktuell gelten
- **Ärztezentren:** Jeder Arzt = eigenes KMU = eigener Förderantrag grundsätzlich möglich (Detail-Prüfung pro Fall)
- **Niemals selbst Quoten versprechen** — das macht der Förderpartner verbindlich im Erstgespräch

---

## AskAiSection – Details

**Aktuelle Frage:**
`"Was macht mypraxis.at und welche Leistungen bieten sie für niedergelassene Ärzte in Österreich an?"`

| Service | Prefill-Methode |
|---------|----------------|
| Perplexity | URL `?q=` Parameter – Frage bereits eingefügt, Enter reicht |
| ChatGPT | URL `?q=` Parameter – Frage bereits eingefügt, Enter reicht |
| Claude | Clipboard (kein URL-Prefill möglich) |
| Gemini | Clipboard (kein URL-Prefill möglich) |

---

## Offene Maßnahmen (manuell – nicht im Code)

- [ ] SMTP-Variablen + Fonio-Variablen in Vercel Dashboard prüfen/setzen
- [ ] Google Business Profile einrichten
- [ ] Wikidata-Einträge: mypraxis.at + Kevin Hofbauer anlegen
- [ ] Branchenverzeichnisse: herold.at, firmenabc.at, WKO
- [ ] LinkedIn-Artikel schreiben
- [ ] GA4 Setup + KI-Traffic-Tracking
- [ ] Landingpage: Fonio-Agent "Jenny" konfigurieren und testen

---

## Verwandtes Projekt: hofbauer.marketing

```
Pfad:    /Users/kevinhofbauer/Desktop/hofbauer-marketing-nextjs
Port:    3000
Stack:   Next.js 16.1.6, React 19, Tailwind CSS 4, Framer Motion
E-Mail:  kontakt@hofbauer.marketing
API:     Resend (RESEND_API_KEY in .env.local – NICHT Nodemailer!)
```
