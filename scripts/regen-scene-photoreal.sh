#!/bin/bash
# Regeneriert alle Szene-Bilder (Arzt + Patient) mit FLUX.1.1-pro für Fotorealismus
# Ersetzt Flux-schnell Output, der oft KI-Artefakte (Puppen, Mannequin-Look) zeigt
set -eu
KEY="tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
FBASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/fachgebiete"
ZBASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/zielgruppen"
LOG="/tmp/regen-scene-$(date +%Y%m%d-%H%M%S).log"

# FLUX.1.1-pro · langsamer aber fotorealistisch
gen() {
  local target="$1" prompt="$2"
  echo "[gen ] $target" | tee -a "$LOG"
  # Backup alt
  [ -f "$target" ] && cp "$target" "$target.old" 2>/dev/null || true
  local resp
  resp=$(curl -sS --max-time 90 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
    -d "{\"model\":\"black-forest-labs/FLUX.1.1-pro\",\"prompt\":\"$prompt\",\"width\":1024,\"height\":768,\"n\":1,\"response_format\":\"url\"}" || true)
  local url
  url=$(echo "$resp" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null || true)
  if [ -z "$url" ]; then
    echo "  ERR $target: $(echo "$resp" | head -c 200)" | tee -a "$LOG"
    # Restore backup
    [ -f "$target.old" ] && mv "$target.old" "$target"
    return 0
  fi
  curl -sS --max-time 30 -o "$target" "$url" || true
  rm -f "$target.old"
  echo "  OK $target" | tee -a "$LOG"
}

# Style-Anchor Fotorealismus
BASE="documentary editorial photograph, natural unretouched skin texture, realistic human proportions, Fujifilm GFX 100S look, depth of field, natural window light, austrian setting, single subject, no text no watermark, no mannequin no doll, realistic hands"

### FACHGEBIETE · ÄRZT:IN (linke Szene)
gen "$FBASE/augenchirurgie-szene-lena.jpg" "$BASE, austrian male ophthalmologist 44, short dark hair, reading glasses on chain, blue scrubs under white coat, standing behind slit lamp, calm professional expression, looking to side, warm afternoon light"
gen "$FBASE/dermatologie-szene-lena.jpg" "$BASE, austrian female dermatologist 36, shoulder length brown hair, white coat open over blouse, standing in bright treatment room, holding tablet, friendly professional expression"
gen "$FBASE/gynaekologie-szene-lena.jpg" "$BASE, austrian female gynecologist 42, brown hair in ponytail, white coat over casual shirt, standing in bright altbau consultation room with plants, calm confident expression"
gen "$FBASE/hno-aesthetik-szene-lena.jpg" "$BASE, austrian male ENT doctor 40, short hair, white coat, wearing head mirror on forehead, standing near examination chair, professional calm expression"
gen "$FBASE/hausarzt-szene-lena.jpg" "$BASE, austrian general practitioner male 48, short greying hair, white coat over shirt, standing in warm altbau family practice behind wooden desk, approachable expression"
gen "$FBASE/internistik-szene-lena.jpg" "$BASE, austrian male internist 52, glasses, short hair, white coat, standing in calm consultation room, thoughtful serious expression, bookshelves behind"
gen "$FBASE/neurologie-szene-lena.jpg" "$BASE, austrian female neurologist 39, dark hair pinned back, white coat over shirt, standing in consultation room with anatomical brain model visible, intelligent focused expression"
gen "$FBASE/orthopaedie-szene-lena.jpg" "$BASE, austrian male orthopedist 45, athletic build, short hair, white coat over casual shirt, standing near examination table with plaster model of spine visible, competent expression"
gen "$FBASE/paediatrie-szene-lena.jpg" "$BASE, austrian female pediatrician 38, warm smile, shoulder length hair, colorful scrubs under white coat, standing in bright child friendly practice with toys visible, warm approachable expression"
gen "$FBASE/psychiatrie-szene-lena.jpg" "$BASE, austrian female psychiatrist 34, short dark hair, white coat open over blouse, sitting calmly in bright altbau consultation room with armchair visible, attentive calm listening expression"
gen "$FBASE/reproduktion-szene-lena.jpg" "$BASE, austrian female reproductive medicine specialist 42, styled hair, white coat, standing in modern fertility clinic with ultrasound equipment visible, calm empathetic expression"
gen "$FBASE/urologie-szene-lena.jpg" "$BASE, austrian male urologist 50, short greying hair, white coat, standing in consultation room, professional reassuring expression, no patient visible"
gen "$FBASE/zahnarzt-szene-lena.jpg" "$BASE, austrian male dentist 41, short hair, white dental coat, standing next to modern dental chair in warm altbau practice, approachable calm expression, no patient visible"

### FACHGEBIETE · PATIENT:IN (rechte Szene)
gen "$FBASE/augenchirurgie-szene-markus.jpg" "$BASE, austrian man 32 IT consultant, glasses, casual shirt, sitting at desk in evening light, tired eyes, looking at laptop screen with concerned expression"
gen "$FBASE/dermatologie-szene-markus.jpg" "$BASE, austrian woman 35, bathroom morning light, looking in mirror while touching her cheek, concerned expression about skin"
gen "$FBASE/gynaekologie-szene-markus.jpg" "$BASE, austrian woman 32, graphic designer, casual sweater, sitting at laptop in evening home light, thoughtful curious expression, no visible pregnancy"
gen "$FBASE/hno-aesthetik-szene-markus.jpg" "$BASE, austrian woman 30, bathroom mirror side profile, looking critically at her own nose, soft morning light"
gen "$FBASE/hausarzt-szene-markus.jpg" "$BASE, austrian woman 65, sitting at kitchen table with medication boxes, worried concentrated expression reading a prescription"
gen "$FBASE/internistik-szene-markus.jpg" "$BASE, austrian man 58, businessman in open collar shirt, sitting at home desk with lab results paper, serious worried expression"
gen "$FBASE/neurologie-szene-markus.jpg" "$BASE, austrian woman 45, sitting at kitchen table holding her hands in lap, subtle worried expression examining her fingers, evening warm light"
gen "$FBASE/orthopaedie-szene-markus.jpg" "$BASE, austrian man 42 athletic build casual sports clothing, sitting on couch holding his knee, pained concentrated expression"
gen "$FBASE/paediatrie-szene-markus.jpg" "$BASE, austrian mother 34 holding her small coughing child 3, warm bedroom light evening, worried tender protective expression"
gen "$FBASE/psychiatrie-szene-markus.jpg" "$BASE, austrian man 36, IT worker, sitting alone at late night desk with three monitors glowing, controlled exhausted expression, muted warm apartment light"
gen "$FBASE/reproduktion-szene-markus.jpg" "$BASE, austrian couple in late 30s, kitchen evening light, sitting at table with coffee, quiet thoughtful expressions, subtle shared concern"
gen "$FBASE/urologie-szene-markus.jpg" "$BASE, austrian man 55, businessman in shirt, sitting at desk looking at search results on smartphone, concerned private expression"
gen "$FBASE/zahnarzt-szene-markus.jpg" "$BASE, austrian woman 34, office worker, sitting on couch at home evening, touching her cheek with pained anxious expression"

### ZIELGRUPPEN
gen "$ZBASE/kassen-szene-arzt.jpg" "$BASE, austrian general practitioner male doctor 52, short dark hair greying at temples, white coat open over checked casual shirt, standing behind wooden desk in warm altbau ordination with family photos visible, looking thoughtfully slightly to side, approachable nachbarschaftlich expression"
gen "$ZBASE/kassen-szene-patient.jpg" "$BASE, austrian elderly woman 78, grey hair, cardigan, sitting at kitchen table with reading glasses and handwritten notes, concentrated reading her prescription, warm morning light"
gen "$ZBASE/privat-szene-arzt.jpg" "$BASE, austrian female wahlärztin 39, dark hair, elegant blouse under open white coat, standing in bright altbau private practice with plants and wooden floors, competent calm professional expression"
gen "$ZBASE/privat-szene-patient.jpg" "$BASE, austrian man 44 managing director, business casual shirt, sitting at home office desk late evening, laptop glow on face, tired concentrated expression searching"
gen "$ZBASE/zentrum-szene-leitung.jpg" "$BASE, austrian doctor male 54, short hair, white coat over shirt, standing in bright medical center reception area with modern wayfinding signage, professional organized expression"
gen "$ZBASE/zentrum-szene-patient.jpg" "$BASE, austrian woman 51, casual attire, standing in modern medical center waiting area reading informational signs on wall, curious expression"

echo "=== FERTIG === $(date)" | tee -a "$LOG"
