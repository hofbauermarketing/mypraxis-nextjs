# CLAUDE.md – mypraxis.at Next.js Projekt

## Wer ist Kevin?
Kevin Hofbauer betreibt Kevin Hofbauer e.U., eine Digital-Marketing-Agentur in Vitis, Niederösterreich. Zwei Marken:
- **hofbauer.marketing** – Websites, Videos, KI-Telefonassistenten für österreichische Unternehmen
- **mypraxis.at** – spezialisiert auf digitale Positionierung für niedergelassene Ärzte in Österreich

Soziale Profile:
- LinkedIn: https://www.linkedin.com/in/kevin-hofbauer-b2660b274/
- Facebook: https://www.facebook.com/profile.php?id=100035353760113

## Projekt-Übersicht
- **Live-URL:** https://www.mypraxis.at
- **GitHub:** https://github.com/hofbauermarketing/mypraxis-nextjs (branch: main)
- **Hosting:** Vercel (auto-deploy bei push auf main)
- **Framework:** Next.js 16, App Router, TypeScript, Tailwind CSS
- **Blog:** Markdown-Dateien in `/content/blog/` via `lib/blog.ts`

## Pakete & Preise
| Paket | Preis netto | Nach KMU.DIGITAL (30%) |
|---|---|---|
| Praxis-Website | € 3.900 | € 2.730 |
| Digitale Positionierung | € 7.500 | € 5.250 |
| Ärztezentren & PVEs | Auf Anfrage | Pro Arzt bis € 6.000 Förderung |

## Wichtige Dateipfade

| Datei | Zweck |
|---|---|
| `app/layout.tsx` | Root Layout + globales JSON-LD Schema (@graph) |
| `app/page.tsx` | Startseite (Hero, Scanner, Pakete, FAQ, Footer) |
| `app/sitemap.ts` | Dynamische Sitemap via MetadataRoute API – 12 URLs |
| `app/manifest.ts` | PWA Web App Manifest |
| `app/icon.png` | Favicon – rundes mypraxis.at Logo (ChatGPT generiert, Feb 2026) |
| `app/apple-icon.png` | Apple Touch Icon (gleiche Datei wie icon.png) |
| `app/opengraph-image.tsx` | OG-Image Generator (1200×630, ImageResponse) |
| `app/blog/page.tsx` | Blog-Übersicht |
| `app/blog/[slug]/page.tsx` | Blog-Artikel mit BlogPosting Schema, Lesezeit, Breadcrumb |
| `app/videothek/page.tsx` | KI-Videothek mit VideoObject Schema |
| `app/datenschutz/page.tsx` | Datenschutz (noindex) |
| `app/impressum/page.tsx` | Impressum (noindex) |
| `app/demo/*/page.tsx` | Demo-Seiten (alle noindex) |
| `components/Navigation.tsx` | Navigation mit logo.webp |
| `components/ScannerEmbed.tsx` | KI-Scanner iframe mit Scroll-Hinweis |
| `components/BlogGrid.tsx` | Blog-Übersicht Komponente |
| `components/ContactForm.tsx` | Kontaktformular |
| `lib/blog.ts` | Blog-Daten inkl. readingTime (200 WPM) |
| `public/robots.txt` | 20+ KI-Crawler explizit erlaubt, Sitemap-URL |
| `public/llms.txt` | KI-lesbare Inhalte (Leistungen, Blog, Videos) |
| `public/logo.webp` | Optimiertes Logo (23KB, war 1.2MB PNG) |
| `public/icon-512.png` | PWA Icon 512×512 |
| `next.config.js` | Non-www → www Redirect (permanent: true) |

## Schema Markup in layout.tsx (@graph)
Vier Entitäten:
1. **ProfessionalService** (`#organization`) – Firma, Leistungen, Preise, areaServed alle 9 Bundesländer
2. **Person** (`#kevin-hofbauer`) – Kevin Hofbauer mit sameAs LinkedIn/Facebook/hofbauer.marketing
3. **WebSite** (`#website`) – Website-Metadaten
4. **FAQPage** (`#faq`) – 6 Fragen (Kosten, KI-Readiness, KMU.DIGITAL, Ärztezentren, llms.txt, Dauer)

## Redirect-Konfiguration
- **Vercel Dashboard:** mypraxis.at → 308 (permanent) → www.mypraxis.at ← MUSS SO BLEIBEN
- **next.config.js:** Zusätzlicher non-www → www Redirect als Absicherung
- HTTP→HTTPS macht Vercel automatisch in einem kombinierten Hop

## SEO-Status (Stand: 25. Feb 2026)
- Canonical URLs: Jede Seite hat eigene Canonical — NICHT in layout.tsx global setzen!
- Sitemap: `app/sitemap.ts` → 12 URLs (/, /blog, /videothek, 9 Blog-Artikel)
- Non-www Links: In allen Demo-Seiten behoben (zeigen jetzt auf www.mypraxis.at)
- Google Search Console: Umleitungsfehler in Bearbeitung (letzter Crawl 25.02.2026)
- Sitemap in GSC eingereicht: https://www.mypraxis.at/sitemap.xml

## ScannerEmbed (components/ScannerEmbed.tsx)
- iframe von agenturkunden.io
- Scroll-Hinweis: Desktop "Mit Mausrad scrollen" + Maus-Icon, Mobile "Mit Finger scrollen" + Finger-Icon
- Gradient-Overlay blendet beim Hovern (group-hover:opacity-0) aus
- `pointer-events: none` – iframe bleibt vollständig bedienbar

## Blog-Artikel (content/blog/)
9 Artikel mit vollständigem BlogPosting-Schema, Lesezeit und Breadcrumb:
- ki-sichtbarkeit-aerzte
- was-kostet-website-arzt
- kmu-digital-foerderung-aerzte
- dsgvo-arzt-website
- docfinder-herold-google-vergleich
- brauche-ich-website-als-arzt
- ki-telefonassistent-arztpraxis
- barrierefreiheitsgesetz-aerzte
- website-wechsel-bedenken

## Demo-Seiten (alle noindex)
`/demo/privatarzt-classic`, `/demo/privatarzt-modern`, `/demo/privatarzt-warm`,
`/demo/aerztezentrum-classic`, `/demo/aerztezentrum-premium`

## KRITISCH: Bekannte Fallstricke

### TypeScript-Fehler 7026 / 2307 → IGNORIEREN
VSCode zeigt Phantom-Fehler ("JSX element implicitly has type 'any'", "Cannot find module 'next'").
Das ist ein lokales VSCode tsconfig-Pfad-Alias-Problem. Vercel baut fehlerfrei.

### app/sitemap.xml/ als Verzeichnis → VERBOTEN
Verzeichnis mit `.xml` im Namen bricht Turbopack Build. Niemals `app/sitemap.xml/route.ts` anlegen.
Stattdessen immer `app/sitemap.ts` (MetadataRoute API) verwenden.

### Canonical URL in layout.tsx → VERBOTEN
Kein hardcodiertes `<link rel="canonical">` in layout.tsx – das überschreibt alle Sub-Seiten.
Jede Seite definiert ihre eigene Canonical via `alternates: { canonical: '/pfad' }`.

### public/sitemap.xml statisch anlegen → VERMEIDEN
Kollidiert mit der dynamischen `app/sitemap.ts`. Statische Datei wurde gelöscht.

## Offene Maßnahmen (manuell, nicht im Code)
- [ ] Google Search Console: Kaputte Sitemap-Einträge /blog und / löschen (drei-Punkte-Menü)
- [ ] Google Search Console: Sitemap "Neu lesen" klicken
- [ ] Google Business Profile einrichten und optimieren
- [ ] Wikidata-Einträge: mypraxis.at + Kevin Hofbauer anlegen
- [ ] Branchenverzeichnisse: herold.at, firmenabc.at, WKO, etc.
- [ ] Kundenstimmen für E-E-A-T sammeln (Arzt, Fachrichtung, Bundesland)
- [ ] Autor-Bio / About-Seite für Kevin Hofbauer

## GEO-Strategie (Generative Engine Optimization)
Drei-Schichten-Ansatz:
1. **Strukturierte Daten** – Schema Markup (JSON-LD) ✅
2. **Semantische Inhalte** – Blog-Artikel, llms.txt ✅
3. **KI-Readiness** – llms.txt, robots.txt mit KI-Crawlern ✅

USP: Einziger österreichischer Anbieter mit KI-Readiness als Kernleistung.
Wettbewerber (webdoctor.at, einfachordi.at) nutzen SPA-Templates – für KI unsichtbar.
