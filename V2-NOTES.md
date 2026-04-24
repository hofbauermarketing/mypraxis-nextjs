# mypraxis-v2 · Notizen

Stand 2026-04-23

## Was ist das hier?

Kopie von `_mypraxis-nextjs_LIVE/` zum 23.04.2026, benannt als **mypraxis-v2**.

Ziel: Umbau nach Fachgebiet-Strategie aus der Serie `Strategiepapier_2026-04-23`. Das LIVE-Projekt bleibt unberührt als Backup und Rückfallebene.

## Unterschiede zum LIVE

- `package.json name`: `mypraxis-v2`
- `package.json version`: `2.0.0-dev`
- `npm run dev` läuft auf **Port 3003** (LIVE: 3002)
- Git-Remote: **entfernt** — kein Versehen-Push auf `hofbauermarketing/mypraxis-nextjs`
- `node_modules/` + `.next/` wurden **nicht** kopiert, frisch installiert

## Lokaler Start

```bash
cd ~/Desktop/Projekte/mypraxis/mypraxis-v2
npm run dev
# → http://localhost:3003
```

LIVE läuft parallel auf 3002, beide können gleichzeitig offen sein.

## Was noch zu tun ist

- Landingpage nach `LANDINGPAGE-PLAN_2026.md` umbauen (ohne Fischl-Sektion, kommt später mit Freigabe)
- Fachgebiet-Struktur nach `UMBAU-PLAN_mypraxis_2026.md` bauen (11 `/fachgebiete/[slug]`-Seiten + /methodik + /referenzen)

## Deployment später

Wenn v2 fertig ist, entscheidet Kevin:
- Neues Vercel-Projekt `mypraxis-v2` + neue Domain testen
- Oder v2 auf `main` pushen (alten Remote wieder hinzufügen: `git remote add origin git@github.com:hofbauermarketing/mypraxis-nextjs.git`)

## Plan-Dokumente

- `~/Desktop/Projekte/Kunden/mypraxis/Strategiepapier_2026-04-23/UMBAU-PLAN_mypraxis_2026.md`
- `~/Desktop/Projekte/Kunden/mypraxis/Strategiepapier_2026-04-23/LANDINGPAGE-PLAN_2026.md`

Die 12 Strategiepapiere (11 Fachgebiete + Master) liegen im gleichen Projekt-Ordner.
