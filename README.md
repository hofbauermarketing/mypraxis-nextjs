# mypraxis.at – Next.js Migration

## Was ist das?
Next.js-Version von mypraxis.at mit **Static Site Generation (SSG)**.
Jede Seite wird beim Build zu reinem HTML gerendert – jeder Crawler (Google, ChatGPT, Perplexity, Claude) sieht sofort den vollständigen Inhalt.

## Migration: Lovable → Next.js auf Vercel

### Option A: Neues Repo (empfohlen)
1. Neues GitHub-Repo erstellen (z.B. `mypraxis-nextjs`)
2. Diese Dateien hinein pushen
3. In Vercel: New Project → dieses Repo verbinden
4. Vercel erkennt Next.js automatisch, baut und deployed
5. Custom Domain `mypraxis.at` auf neues Projekt umleiten

### Option B: Bestehendes Repo ersetzen
1. Alle Lovable-Dateien im Repo löschen (außer .git)
2. Diese Dateien hinein kopieren
3. Commit & Push
4. Vercel baut automatisch neu

### Nach dem Deploy testen:
```bash
# Prüfen ob Crawler Content sehen:
curl -s https://www.mypraxis.at | head -100
# → Sollte vollen HTML-Content zeigen, nicht nur <div id="root"></div>

# Schema Markup prüfen:
curl -s https://www.mypraxis.at | grep "application/ld+json"

# llms.txt prüfen:
curl -s https://www.mypraxis.at/llms.txt

# robots.txt prüfen:
curl -s https://www.mypraxis.at/robots.txt
```

## Lokale Entwicklung
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Struktur
```
app/
  layout.tsx    ← Schema Markup, Meta-Tags, SEO (WICHTIGSTE DATEI)
  page.tsx      ← Hauptseite mit allem Content
  globals.css   ← Tailwind CSS
public/
  robots.txt    ← AI Crawler Rules
  llms.txt      ← KI-Profil für LLM-Crawler
  sitemap.xml   ← Sitemap mit lastmod
```

## Warum SSG statt SPA?
| | Lovable (SPA) | Next.js (SSG) |
|---|---|---|
| Crawler sieht | `<div id="root"></div>` | Vollständiger HTML-Content |
| Schema Markup | Unsichtbar für Bots | Im HTML-Source |
| llms.txt | Funktioniert | Funktioniert |
| Ladezeit | JS muss laden + rendern | Sofort HTML |
| KI-Sichtbarkeit | ❌ Nicht möglich | ✅ Voll funktional |
