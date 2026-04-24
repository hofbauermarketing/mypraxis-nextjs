#!/bin/bash
set -eu
KEY="tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
ZBASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/zielgruppen"
PBASE="$ZBASE/personas"
mkdir -p "$PBASE"
LOG="/tmp/bildgen-privat-zentrum-$(date +%Y%m%d-%H%M%S).log"

gen_any() {
  local target="$1" prompt="$2" w="${3:-1024}" h="${4:-768}"
  if [ -f "$target" ] && [ "$(stat -f%z "$target" 2>/dev/null || echo 0)" -gt 10000 ]; then
    echo "[skip] $target" | tee -a "$LOG"; return 0
  fi
  echo "[gen ] $target" | tee -a "$LOG"
  local resp
  resp=$(curl -sS --max-time 45 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
    -d "{\"model\":\"black-forest-labs/FLUX.1-schnell\",\"prompt\":\"$prompt\",\"width\":$w,\"height\":$h,\"steps\":4,\"n\":1,\"response_format\":\"url\"}" || true)
  local url
  url=$(echo "$resp" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null || true)
  if [ -z "$url" ]; then echo "  ERR $target" | tee -a "$LOG"; return 0; fi
  curl -sS --max-time 30 -o "$target" "$url" || true
  echo "  OK $target" | tee -a "$LOG"
}

STYLE="photorealistic austrian editorial portrait natural warm light muted tones no stock photo smile calm composed expression"
BG_STYLE="photorealistic austrian medical practice warm natural daylight altbau editorial photography muted petrol and sand tones no people"

### Backgrounds
gen_any "$ZBASE/privat-bg-buro.jpg" "austrian wahlarzt ordination private practice warm desk notebook pen plants window light no people $BG_STYLE" 1600 900
gen_any "$ZBASE/zentrum-bg-buro.jpg" "austrian medical center interior reception area warm natural light plants no people dignified $BG_STYLE" 1600 900

### Privatarzt-Personas (768x768 square)
gen_any "$PBASE/thomas-ebner.jpg" "portrait austrian man 44 managing director consulting firm short dark hair casual business shirt slightly tired but composed expression warm natural daylight $STYLE" 768 768
gen_any "$PBASE/monika-krenn.jpg" "portrait austrian woman 58 elegant entrepreneur shoulder length styled hair professional blouse dignified thoughtful expression warm light $STYLE" 768 768
gen_any "$PBASE/jasmin-paulsen.jpg" "portrait austrian woman 55 architect greying styled hair intelligent curious expression warm light natural daylight $STYLE" 768 768
gen_any "$PBASE/lars-andersen.jpg" "portrait man 37 danish software engineer short blond hair casual shirt friendly curious expression warm daylight european $STYLE" 768 768
gen_any "$PBASE/carla-steiner.jpg" "portrait austrian woman 46 HR manager professional open expression warm light styled hair natural daylight $STYLE" 768 768

echo "=== FERTIG === $(date)" | tee -a "$LOG"
