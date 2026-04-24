#!/bin/bash
# Ersetzt alle Arzt+Patient Szenen-Bilder mit GPT-Image-1.5 (Together AI)
# 13 Fachgebiete × 2 + 3 Zielgruppen × 2 = 32 Bilder
set -u
KEY="tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
FBASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/fachgebiete"
ZBASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/zielgruppen"
LOG="/tmp/regen-gpt-$(date +%Y%m%d-%H%M%S).log"

# GPT-Image-1.5 supportet 1024×1024, 1536×1024, 1024×1536
# Wir nutzen 1536×1024 (Landschaft, passt zu Szenen-Layout)
gen() {
  local target="$1" prompt="$2"
  echo "[gen ] $target" | tee -a "$LOG"
  [ -f "$target" ] && cp "$target" "$target.fluxpro.bak" 2>/dev/null
  local RESP
  RESP=$(curl -sS --max-time 180 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
    -d "{\"model\":\"openai/gpt-image-1.5\",\"prompt\":\"$prompt\",\"width\":1536,\"height\":1024,\"n\":1,\"response_format\":\"url\"}")
  local URL
  URL=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('data',[{}])[0].get('url',''))" 2>/dev/null)
  if [ -z "$URL" ]; then
    echo "  ERR: $(echo "$RESP" | head -c 250)" | tee -a "$LOG"
    [ -f "$target.fluxpro.bak" ] && mv "$target.fluxpro.bak" "$target"
    return 0
  fi
  curl -sS --max-time 60 -o "$target" "$URL"
  rm -f "$target.fluxpro.bak"
  echo "  OK $target" | tee -a "$LOG"
}

# Global Style-Anchor
S="photorealistic editorial documentary photograph, natural unretouched skin texture, realistic human proportions, perfect symmetric eyes, Fujifilm medium format look, 85mm lens, shallow depth of field, natural window light, austrian Vienna setting, single subject clearly visible, no mannequin no doll, no text no watermark, authentic composition"

### 13 FACHGEBIETE · ÄRZT:IN
gen "$FBASE/augenchirurgie-szene-lena.jpg" "$S, austrian male ophthalmologist 44, short dark hair greying at temples, reading glasses on chain, blue scrubs under open white coat, standing beside slit lamp examination device in warm altbau practice, calm professional expression, afternoon window light"
gen "$FBASE/dermatologie-szene-lena.jpg" "$S, austrian female dermatologist 36, shoulder length brown hair, open white coat over elegant blouse, standing in bright treatment room with warm wooden elements, holding tablet, friendly competent expression"
gen "$FBASE/gynaekologie-szene-lena.jpg" "$S, austrian female gynecologist 42, dark brown hair in ponytail, open white coat over casual shirt, standing in bright altbau consultation room with plants, calm confident expression, warm afternoon light"
gen "$FBASE/hno-aesthetik-szene-lena.jpg" "$S, austrian male ENT specialist 40, short neat hair, white coat with head mirror worn on forehead, standing near examination chair in modern ENT practice, professional calm expression"
gen "$FBASE/hausarzt-szene-lena.jpg" "$S, austrian general practitioner male 48, short greying hair, white coat over blue checked shirt, standing in warm altbau family practice behind wooden desk with stethoscope, approachable caring expression"
gen "$FBASE/internistik-szene-lena.jpg" "$S, austrian male internist 52, glasses, short greying hair, white coat over dress shirt, standing in calm consultation room with bookshelves of medical literature behind, thoughtful serious expression"
gen "$FBASE/neurologie-szene-lena.jpg" "$S, austrian female neurologist 39, dark hair pinned back, open white coat over shirt, standing in modern consultation room with anatomical brain model visible on desk, intelligent focused expression"
gen "$FBASE/orthopaedie-szene-lena.jpg" "$S, austrian male orthopedist 45, athletic build, short hair, open white coat over casual polo shirt, standing near examination table with plaster spine model visible, competent confident expression"
gen "$FBASE/paediatrie-szene-lena.jpg" "$S, austrian female pediatrician 38, warm genuine smile, shoulder length brown hair, colorful scrubs under open white coat, standing in bright child friendly practice with colorful toys visible in background, warm approachable expression"
gen "$FBASE/psychiatrie-szene-lena.jpg" "$S, austrian female psychiatrist 34, short dark hair, white coat open over blouse, sitting calmly in bright altbau consultation room with armchair and plants, attentive calm listening expression, afternoon light"
gen "$FBASE/reproduktion-szene-lena.jpg" "$S, austrian female reproductive medicine specialist 42, styled dark hair, open white coat over professional blouse, standing in modern fertility clinic with ultrasound equipment softly visible, calm empathetic caring expression"
gen "$FBASE/urologie-szene-lena.jpg" "$S, austrian male urologist 50, short greying hair, open white coat over dress shirt, standing in calm consultation room with wooden desk, professional reassuring expression"
gen "$FBASE/zahnarzt-szene-lena.jpg" "$S, austrian male dentist 41, short dark hair, white dental coat over blue shirt, standing next to modern dental chair in warm altbau dental practice, approachable calm expression"

### 13 FACHGEBIETE · PATIENT:IN
gen "$FBASE/augenchirurgie-szene-markus.jpg" "$S, austrian man 32 IT consultant, glasses, casual shirt, sitting at home desk in evening light with laptop glow, tired strained eyes, concerned expression looking at screen"
gen "$FBASE/dermatologie-szene-markus.jpg" "$S, austrian woman 35, morning bathroom mirror scene, looking at her own face with concerned expression while touching her cheek softly, soft morning window light"
gen "$FBASE/gynaekologie-szene-markus.jpg" "$S, austrian woman 32, graphic designer, casual sweater, sitting on couch at home with laptop in lap in evening light, thoughtful curious expression, no visible pregnancy"
gen "$FBASE/hno-aesthetik-szene-markus.jpg" "$S, austrian woman 30, bathroom mirror side profile, looking critically at her own nose with thoughtful expression, soft morning light"
gen "$FBASE/hausarzt-szene-markus.jpg" "$S, austrian woman 65, sitting at warm kitchen table with medication packages and reading glasses, concentrated expression reading a prescription"
gen "$FBASE/internistik-szene-markus.jpg" "$S, austrian man 58, businessman in open collar dress shirt, sitting at home desk with laboratory results paper in hand, serious concerned thoughtful expression"
gen "$FBASE/neurologie-szene-markus.jpg" "$S, austrian woman 45, sitting at kitchen table in warm evening light, holding her hands in her lap examining her fingers with subtle worried expression"
gen "$FBASE/orthopaedie-szene-markus.jpg" "$S, austrian man 42 athletic build, casual sports clothing, sitting on couch holding his knee, pained concentrated expression, warm home light"
gen "$FBASE/paediatrie-szene-markus.jpg" "$S, austrian mother 34 holding her small coughing child aged 3 in warm bedroom evening light, worried tender protective expression"
gen "$FBASE/psychiatrie-szene-markus.jpg" "$S, austrian man 36 IT senior consultant, sitting alone at late night home desk with three monitors glowing, controlled exhausted expression, muted warm apartment light"
gen "$FBASE/reproduktion-szene-markus.jpg" "$S, austrian couple in late 30s sitting together at kitchen table in evening light with coffee cups, quiet thoughtful expressions, shared subtle concern"
gen "$FBASE/urologie-szene-markus.jpg" "$S, austrian man 55, businessman in dress shirt, sitting at home desk looking at search results on smartphone, concerned private expression"
gen "$FBASE/zahnarzt-szene-markus.jpg" "$S, austrian woman 34, office worker, sitting on couch at home in evening light, touching her cheek softly with pained anxious expression"

### 3 ZIELGRUPPEN
gen "$ZBASE/kassen-szene-arzt.jpg" "$S, austrian general practitioner male doctor 52, short dark hair greying at temples, open white coat over blue checked casual shirt, standing behind wooden desk in warm altbau kassenordination with family photos visible, looking thoughtfully slightly to side, approachable nachbarschaftlich expression"
gen "$ZBASE/kassen-szene-patient.jpg" "$S, austrian elderly woman 78, soft grey hair, warm cardigan, sitting at kitchen table with reading glasses and handwritten notes, concentrated reading her prescription paper, warm morning kitchen light"
gen "$ZBASE/privat-szene-arzt.jpg" "$S, austrian female wahlärztin 39, dark hair, elegant blouse under open white coat, standing in bright altbau private practice with plants and warm wooden floors, competent calm professional expression"
gen "$ZBASE/privat-szene-patient.jpg" "$S, austrian man 44 managing director, business casual open-collar shirt, sitting at home office desk late evening with laptop glow softly illuminating his face, tired concentrated searching expression"
gen "$ZBASE/zentrum-szene-leitung.jpg" "$S, austrian doctor male 54, short hair, open white coat over dress shirt, standing in bright modern medical center reception area with clear wayfinding signage and plants visible, professional organized expression"
gen "$ZBASE/zentrum-szene-patient.jpg" "$S, austrian woman 51, casual professional attire, standing in modern medical center waiting area reading informational signs on wall, curious engaged expression"

echo "=== FERTIG === $(date)" | tee -a "$LOG"
