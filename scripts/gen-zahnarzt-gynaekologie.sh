#!/bin/bash
# Generiert Bilder für Zahnmedizin + Gynäkologie via Together AI Flux-schnell
set -eu
KEY="tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
BASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/fachgebiete"
mkdir -p "$BASE/personas"
LOG="/tmp/bildgen-zahn-gyn-$(date +%Y%m%d-%H%M%S).log"

gen() {
  local file="$1" prompt="$2" w="${3:-1024}" h="${4:-768}"
  local target="$BASE/$file"
  if [ -f "$target" ] && [ "$(stat -f%z "$target" 2>/dev/null || echo 0)" -gt 10000 ]; then
    echo "[skip] $file" | tee -a "$LOG"
    return 0
  fi
  echo "[gen ] $file" | tee -a "$LOG"
  local resp
  resp=$(curl -sS --max-time 45 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"black-forest-labs/FLUX.1-schnell\",\"prompt\":\"$prompt\",\"width\":$w,\"height\":$h,\"steps\":4,\"n\":1,\"response_format\":\"url\"}" || true)
  local url
  url=$(echo "$resp" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null || true)
  if [ -z "$url" ]; then
    echo "  ERR $file: $(echo "$resp" | head -c 200)" | tee -a "$LOG"
    return 0
  fi
  curl -sS --max-time 30 -o "$target" "$url" || true
  echo "  OK $file" | tee -a "$LOG"
}

genp() {
  local file="$1" prompt="$2"
  local target="$BASE/personas/$file"
  if [ -f "$target" ] && [ "$(stat -f%z "$target" 2>/dev/null || echo 0)" -gt 10000 ]; then
    echo "[skip] personas/$file" | tee -a "$LOG"
    return 0
  fi
  echo "[gen ] personas/$file" | tee -a "$LOG"
  local resp
  resp=$(curl -sS --max-time 45 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"black-forest-labs/FLUX.1-schnell\",\"prompt\":\"$prompt\",\"width\":768,\"height\":768,\"steps\":4,\"n\":1,\"response_format\":\"url\"}" || true)
  local url
  url=$(echo "$resp" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null || true)
  if [ -z "$url" ]; then
    echo "  ERR personas/$file" | tee -a "$LOG"
    return 0
  fi
  curl -sS --max-time 30 -o "$target" "$url" || true
  echo "  OK personas/$file" | tee -a "$LOG"
}

STYLE="photorealistic austrian medical practice warm natural daylight altbau editorial photography muted petrol and sand tones no stock photo smiles"

### ZAHNARZT
gen "zahnarzt-hero.jpg" "modern austrian dental practice warm reception area wooden desk soft natural light from tall window no people dignified atmosphere not clinical $STYLE"
gen "zahnarzt-content.jpg" "close-up austrian dental practice treatment chair wooden cabinet warm light dental tools neatly arranged no face $STYLE"
gen "zahnarzt-szene-lena.jpg" "portrait austrian male dentist 41 years old short hair white coat friendly calm expression warm light natural pose $STYLE"
gen "zahnarzt-szene-markus.jpg" "portrait austrian woman 34 years old office worker casual shirt anxious concerned expression touching jaw evening light $STYLE"
gen "zahnarzt-bg-bibliothek.jpg" "austrian dental practice corridor wooden floor warm light plants no people $STYLE"
gen "zahnarzt-bg-notizbuch.jpg" "dental notebook pen and white clean instrument tray on wooden desk warm lamp light $STYLE"
gen "zahnarzt-bg-abend.jpg" "quiet austrian apartment evening window view warm lamp light person holding cheek pained expression no face visible $STYLE"
genp "sandra-rieger.jpg" "portrait austrian woman 34 office worker shoulder-length brown hair casual blouse worried but composed expression soft daylight $STYLE"
genp "martin-huber.jpg" "portrait austrian man 38 IT worker short dark hair glasses casual shirt uncomfortable expression holding cheek soft light $STYLE"
genp "julia-hammer.jpg" "portrait austrian woman 36 teacher warm smile brown hair cardigan holding toddler daughter in lap soft natural light $STYLE"
genp "verena-steiner.jpg" "portrait austrian woman 42 business consultant styled hair blazer confident expression warm natural light $STYLE"
genp "johann-gruber.jpg" "portrait austrian man 68 retired craftsman grey hair thoughtful expression casual shirt warm light $STYLE"

### GYNÄKOLOGIE
gen "gynaekologie-hero.jpg" "modern austrian gynecology practice waiting area warm natural light wooden accents plants soft calm atmosphere no people no pink decor $STYLE"
gen "gynaekologie-content.jpg" "close-up austrian gynecology practice medical notepad and pen on wooden desk warm lamp light no face subtle plants $STYLE"
gen "gynaekologie-szene-lena.jpg" "portrait austrian female gynecologist 42 years old shoulder length brown hair white coat friendly warm confident expression natural light $STYLE"
gen "gynaekologie-szene-markus.jpg" "portrait austrian woman 32 pregnant 11th week graphic designer casual sweater hands on laptop evening light anxious curious expression no visible belly $STYLE"
gen "gynaekologie-bg-bibliothek.jpg" "austrian gynecology clinic corridor wooden floor warm light plants no people $STYLE"
gen "gynaekologie-bg-notizbuch.jpg" "medical appointment notebook pen and stethoscope on wooden desk warm lamp light $STYLE"
gen "gynaekologie-bg-abend.jpg" "quiet austrian apartment evening window view warm lamp light calm mood no people $STYLE"
genp "lea-moser.jpg" "portrait austrian woman 32 graphic designer soft wavy brown hair casual sweater gentle thoughtful expression warm natural light $STYLE"
genp "miriam-pichler.jpg" "portrait austrian woman 19 student psychology long hair casual shirt curious uncertain expression natural daylight $STYLE"
genp "nadine-weber.jpg" "portrait austrian woman 37 project manager styled hair professional blouse concerned hopeful expression warm light $STYLE"
genp "martina-steininger.jpg" "portrait austrian woman 51 teacher greying hair cardigan reflective expression warm natural light $STYLE"
genp "herta-berger.jpg" "portrait austrian woman 68 pensioner short grey hair elegant blouse dignified slightly reserved expression warm light $STYLE"

echo "=== FERTIG === $(date)" | tee -a "$LOG"
