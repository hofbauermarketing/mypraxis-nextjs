#!/bin/bash
# Generiert 13 Bilder pro Fachgebiet via Together AI Flux-schnell
# 10 Fachgebiete × 13 = 130 Bilder gesamt
set -eu
KEY="tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
BASE="/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/fachgebiete"
mkdir -p "$BASE/personas"
LOG="/tmp/bildgen-$(date +%Y%m%d-%H%M%S).log"

gen() {
  local file="$1" prompt="$2"
  local target="$BASE/$file"
  if [ -f "$target" ] && [ "$(stat -f%z "$target" 2>/dev/null || echo 0)" -gt 10000 ]; then
    echo "[skip] $file (schon da)" | tee -a "$LOG"
    return 0
  fi
  echo "[gen ] $file" | tee -a "$LOG"
  local resp
  resp=$(curl -sS --max-time 45 -X POST "https://api.together.xyz/v1/images/generations" \
    -H "Authorization: Bearer $KEY" \
    -H "Content-Type: application/json" \
    -d "{\"model\":\"black-forest-labs/FLUX.1-schnell\",\"prompt\":\"$prompt\",\"width\":1024,\"height\":768,\"steps\":4,\"n\":1,\"response_format\":\"url\"}" || true)
  local url
  url=$(echo "$resp" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null || true)
  if [ -z "$url" ]; then
    echo "  ERR $file: $(echo "$resp" | head -c 200)" | tee -a "$LOG"
    return 0
  fi
  curl -sS --max-time 30 -o "$target" "$url" || true
  echo "  OK $file ($(stat -f%z "$target" 2>/dev/null) B)" | tee -a "$LOG"
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

# Style Anchor
STYLE="photorealistic austrian medical practice warm natural daylight altbau editorial photography muted petrol and sand tones no stock photo smiles"

### AUGENCHIRURGIE
gen "augenchirurgie-hero.jpg" "modern austrian ophthalmology practice waiting room with slit lamp visible in background large window soft natural light no people dignified atmosphere $STYLE"
gen "augenchirurgie-content.jpg" "close-up austrian ophthalmology slit lamp examination equipment wooden desk doctor hand adjusting warm lamp light no visible face $STYLE"
gen "augenchirurgie-szene-lena.jpg" "portrait austrian male ophthalmologist around 44 years old short hair glasses blue scrubs calm professional looking to side soft light $STYLE square"
gen "augenchirurgie-szene-markus.jpg" "portrait austrian man 32 years old IT consultant glasses tired eyes evening light at laptop controlled expression looking away $STYLE"
gen "augenchirurgie-bg-bibliothek.jpg" "austrian ophthalmology clinic corridor modern equipment muted soft light no people $STYLE"
gen "augenchirurgie-bg-notizbuch.jpg" "medical notepad spectacle frames and pen on wooden desk warm lamp $STYLE"
gen "augenchirurgie-bg-abend.jpg" "senior austrian woman reading small print under soft lamp quiet kitchen warm light no face $STYLE"
genp "daniel-kellner.jpg" "portrait austrian man 32 IT consultant glasses short brown hair casual shirt tired eyes looking slightly away natural daylight $STYLE"
genp "gertrude-hofer.jpg" "portrait austrian woman 72 soft white hair warm cardigan gentle anxious expression looking at camera soft natural light $STYLE"
genp "walter-berger.jpg" "portrait austrian man 64 pensioner grey hair thoughtful expression casual shirt warm light $STYLE"
genp "renate-schmid.jpg" "portrait austrian woman 68 short greying hair sensible blouse concerned but composed warm light $STYLE"
genp "kerstin-maier.jpg" "portrait austrian woman 42 manager blazer styled hair determined expression office light $STYLE"

### DERMATOLOGIE
gen "dermatologie-hero.jpg" "modern austrian dermatology practice treatment room clean surfaces soft natural light from tall window no people $STYLE"
gen "dermatologie-content.jpg" "close-up dermatology examination lamp and magnifier on wooden desk warm light medical notes no visible face $STYLE"
gen "dermatologie-szene-lena.jpg" "portrait austrian female dermatologist 36 years old long brown hair white coat friendly competent expression $STYLE"
gen "dermatologie-szene-markus.jpg" "portrait austrian woman 35 looking in mirror touching face concerned about skin condition morning bathroom light $STYLE"
gen "dermatologie-bg-bibliothek.jpg" "medical skincare products and notebook on marble counter warm light $STYLE"
gen "dermatologie-bg-notizbuch.jpg" "austrian aesthetic dermatology clinic interior warm inviting light subtle $STYLE"
gen "dermatologie-bg-abend.jpg" "evening window view austrian apartment calm mood warm lamps $STYLE"
genp "sandra-koehler.jpg" "portrait austrian woman 35 adult acne breakout on cheek concerned looking slightly away morning bathroom light $STYLE"
genp "helmut-weber.jpg" "portrait austrian man 58 visible psoriasis patches on arm simple shirt weathered but composed expression $STYLE"
genp "claudia-fischer.jpg" "portrait austrian woman 48 caregiver mother type looking at her hand with skin spot worried expression $STYLE"
genp "silvia-linder.jpg" "portrait austrian woman 52 elegant subtle makeup styled hair confident mature looking slightly smiling $STYLE"
genp "michael-gruber.jpg" "portrait austrian man 42 outdoor worker sun damaged skin cap in hand weathered face thoughtful expression $STYLE"

### HNO-AESTHETIK
gen "hno-aesthetik-hero.jpg" "modern austrian ENT clinic reception warm wooden furniture natural light no people dignified atmosphere $STYLE"
gen "hno-aesthetik-content.jpg" "close up otoscope and ENT examination tools arranged on wooden desk warm light $STYLE"
gen "hno-aesthetik-szene-lena.jpg" "portrait austrian male ENT specialist 48 years old dark hair white coat calm expert expression $STYLE"
gen "hno-aesthetik-szene-markus.jpg" "portrait austrian woman 34 touching nose in mirror thoughtful slightly insecure soft evening bathroom light $STYLE"
gen "hno-aesthetik-bg-bibliothek.jpg" "medical anatomy book open on desk ENT instruments warm desk lamp $STYLE"
gen "hno-aesthetik-bg-notizbuch.jpg" "close up ENT medical instruments on tray warm light $STYLE"
gen "hno-aesthetik-bg-abend.jpg" "austrian bathroom mirror evening reflection soft warm light contemplative mood $STYLE"
genp "richard-huber.jpg" "portrait austrian man 56 tired eyes stressed expression grey hair business shirt looking slightly down $STYLE"
genp "julia-bauer.jpg" "portrait austrian woman 38 allergies rubbing red eyes soft afternoon light tired but calm $STYLE"
genp "franz-koller.jpg" "portrait austrian man 48 sport professional active trained body looking thoughtfully at reflection gym locker light $STYLE"
genp "nina-steiner.jpg" "portrait austrian woman 34 styled hair subtle makeup touching nose critically in mirror natural light $STYLE"
genp "andrea-weber.jpg" "portrait austrian woman 45 professional business attire confident but self-aware office light $STYLE"

### HAUSARZT
gen "hausarzt-hero.jpg" "cozy austrian general medical practice waiting room with plants comfortable chairs warm natural light no people welcoming atmosphere $STYLE"
gen "hausarzt-content.jpg" "close up stethoscope and family medical record folder on wooden desk warm morning light $STYLE"
gen "hausarzt-szene-lena.jpg" "portrait austrian female general practitioner 42 brown hair warm welcoming smile doctor coat natural light $STYLE"
gen "hausarzt-szene-markus.jpg" "portrait austrian family father 38 holding small childs hand at home warm afternoon window light $STYLE"
gen "hausarzt-bg-bibliothek.jpg" "austrian family practice corridor framed diplomas on wall warm lighting $STYLE"
gen "hausarzt-bg-notizbuch.jpg" "old leather bound patient file and fountain pen on wooden desk warm lamp $STYLE"
gen "hausarzt-bg-abend.jpg" "warm austrian kitchen at evening family dinner set up no people $STYLE"
genp "maria-huber.jpg" "portrait austrian mother 42 two children visible in background looking tired but warm kitchen morning light $STYLE"
genp "heinz-wagner.jpg" "portrait austrian man 62 pensioner kind face grey hair casual shirt looking thoughtfully $STYLE"
genp "sophie-mueller.jpg" "portrait austrian young woman 24 first apartment away from home slightly anxious natural light $STYLE"
genp "bernhard-schmidt.jpg" "portrait austrian man 55 businessman shirt and tie stressed but composed office light $STYLE"
genp "elisabeth-pichler.jpg" "portrait austrian grandmother 74 warm wrinkled face grey hair knitted cardigan gentle expression $STYLE"

### INTERNISTIK
gen "internistik-hero.jpg" "modern austrian internal medicine practice waiting area with cardiology equipment visible soft light no people $STYLE"
gen "internistik-content.jpg" "close up blood pressure monitor ECG printout on wooden desk warm lamp $STYLE"
gen "internistik-szene-lena.jpg" "portrait austrian male internist 52 silver hair experienced calm expression white coat professional $STYLE"
gen "internistik-szene-markus.jpg" "portrait austrian man 58 looking at medical documents at home worried but composed evening light $STYLE"
gen "internistik-bg-bibliothek.jpg" "medical reference books and anatomy chart on wall warm desk light $STYLE"
gen "internistik-bg-notizbuch.jpg" "stethoscope and blood pressure monitor arranged on desk morning light $STYLE"
gen "internistik-bg-abend.jpg" "austrian living room pills and water glass on side table evening soft light contemplative $STYLE"
genp "thomas-berger.jpg" "portrait austrian man 58 executive type tired but composed grey temples business shirt $STYLE"
genp "elke-bauer.jpg" "portrait austrian woman 62 caregiver wife concerned expression warm cardigan afternoon light $STYLE"
genp "friedrich-hofer.jpg" "portrait austrian man 55 cardiology concerns slight weight grey hair casual shirt thoughtful $STYLE"
genp "marianne-gruber.jpg" "portrait austrian woman 68 diabetes concerns warm face grey hair gentle worried expression $STYLE"
genp "gerhard-weber.jpg" "portrait austrian man 45 professional seeking preventive care strong composed expression $STYLE"

### NEUROLOGIE
gen "neurologie-hero.jpg" "calm austrian neurology practice consultation room wooden desk MRI scan on screen warm light no people $STYLE"
gen "neurologie-content.jpg" "close up neurological examination tools reflex hammer and tuning fork on desk warm light $STYLE"
gen "neurologie-szene-lena.jpg" "portrait austrian female neurologist 48 kind eyes brown hair white coat empathetic professional $STYLE"
gen "neurologie-szene-markus.jpg" "portrait austrian daughter 52 caring for elderly mother holding her hand warm afternoon kitchen light $STYLE"
gen "neurologie-bg-bibliothek.jpg" "neuroanatomy atlas open book on desk brain model visible warm lamp $STYLE"
gen "neurologie-bg-notizbuch.jpg" "mri brain scans on wooden desk reading glasses warm light $STYLE"
gen "neurologie-bg-abend.jpg" "austrian home caring environment warm evening light family photographs no people $STYLE"
genp "sabine-koller.jpg" "portrait austrian woman 52 worried daughter type caring for parent warm afternoon light $STYLE"
genp "franz-maier.jpg" "portrait austrian elderly man 76 confusion in eyes gentle confusion grey hair warm expression $STYLE"
genp "werner-berger.jpg" "portrait austrian man 48 migraines pained expression forehead touching hand evening light $STYLE"
genp "ilse-schmidt.jpg" "portrait austrian woman 58 numbness concern looking at hand thoughtful warm light $STYLE"
genp "andreas-wagner.jpg" "portrait austrian man 44 tremor concern composed but worried evening light $STYLE"

### ORTHOPAEDIE
gen "orthopaedie-hero.jpg" "modern austrian orthopedic practice treatment room exam table xrays on wall soft light no people $STYLE"
gen "orthopaedie-content.jpg" "close up orthopedic tools knee xray on lightbox wooden desk warm lamp $STYLE"
gen "orthopaedie-szene-lena.jpg" "portrait austrian male orthopedic surgeon 50 fit professional in scrubs calm expert looking $STYLE"
gen "orthopaedie-szene-markus.jpg" "portrait austrian man 28 athletic holding knee after sport injury gym locker light $STYLE"
gen "orthopaedie-bg-bibliothek.jpg" "medical anatomy atlas xrays on wall warm desk light $STYLE"
gen "orthopaedie-bg-notizbuch.jpg" "orthopedic model joint and medical notes on wooden desk warm light $STYLE"
gen "orthopaedie-bg-abend.jpg" "austrian living room heating pad on couch evening quiet $STYLE"
genp "brigitte-hofer.jpg" "portrait austrian woman 56 chronic back pain tired but warm face grey blonde hair $STYLE"
genp "stefan-wagner.jpg" "portrait austrian athletic man 28 cruciate ligament injury sports gear disappointed strong $STYLE"
genp "andrea-berger.jpg" "portrait austrian woman 48 daughter helping mother with prosthesis concerned warm $STYLE"
genp "manfred-mueller.jpg" "portrait austrian man 62 pensioner retiree hip pain expression stoic $STYLE"
genp "lisa-koller.jpg" "portrait austrian young woman 24 dancer injury frustrated but determined studio light $STYLE"

### PAEDIATRIE
gen "paediatrie-hero.jpg" "warm bright austrian pediatric waiting room with colorful toys and books soft natural light no people welcoming family atmosphere $STYLE"
gen "paediatrie-content.jpg" "close up pediatric stethoscope and teddy bear on wooden desk warm light $STYLE"
gen "paediatrie-szene-lena.jpg" "portrait austrian female pediatrician 40 warm maternal smile brown hair friendly professional $STYLE"
gen "paediatrie-szene-markus.jpg" "portrait austrian mother 32 holding toddler tenderly warm afternoon home light $STYLE"
gen "paediatrie-bg-bibliothek.jpg" "colorful childrens books and pediatric growth charts on wall warm light $STYLE"
gen "paediatrie-bg-notizbuch.jpg" "pediatric vaccination schedule and teddy bear on desk warm light $STYLE"
gen "paediatrie-bg-abend.jpg" "austrian nursery bedroom night light soft glow teddy bears quiet $STYLE"
genp "claudia-huber.jpg" "portrait austrian young mother 30 first baby tired but loving warm home light $STYLE"
genp "thomas-berger.jpg" "portrait austrian father 38 holding child protective concerned expression warm light $STYLE"
genp "andrea-mueller.jpg" "portrait austrian mother 35 worried about child eating habits kitchen warm light $STYLE"
genp "familie-wagner.jpg" "portrait austrian family three members seated together warm living room light natural $STYLE"
genp "elisabeth-schmidt.jpg" "portrait austrian grandmother 65 with grandchild warm gentle interaction afternoon light $STYLE"

### REPRODUKTION
gen "reproduktion-hero.jpg" "elegant austrian reproductive medicine clinic calm warm consultation room soft natural light no people trusting atmosphere $STYLE"
gen "reproduktion-content.jpg" "close up medical ultrasound printout fertility chart on wooden desk warm lamp $STYLE"
gen "reproduktion-szene-lena.jpg" "portrait austrian female reproductive medicine specialist 46 warm empathetic expression brown hair white coat $STYLE"
gen "reproduktion-szene-markus.jpg" "portrait austrian couple holding hands on knees couple consultation room warm light partially visible $STYLE"
gen "reproduktion-bg-bibliothek.jpg" "fertility medical books and ultrasound images on desk warm light $STYLE"
gen "reproduktion-bg-notizbuch.jpg" "baby shoes and fertility calendar on wooden desk soft morning light $STYLE"
gen "reproduktion-bg-abend.jpg" "austrian couple apartment evening quiet moment soft warm light no people $STYLE"
genp "julia-hofer.jpg" "portrait austrian woman 36 unfulfilled desire for child composed but sad soft light $STYLE"
genp "claudia-wagner.jpg" "portrait austrian woman 40 after second IVF attempt tired hopeful expression warm light $STYLE"
genp "thomas-gruber.jpg" "portrait austrian man 38 partner supportive expression at couples consultation warm light $STYLE"
genp "anna-berger.jpg" "portrait austrian woman 35 planning family egg freezing consideration professional attire thoughtful $STYLE"
genp "markus-koeck.jpg" "portrait austrian man 42 fertility concerns composed expression thoughtful warm light $STYLE"

### UROLOGIE
gen "urologie-hero.jpg" "discreet modern austrian urology practice private consultation room wooden desk warm light no people dignified atmosphere $STYLE"
gen "urologie-content.jpg" "close up urological examination tools and medical anatomy chart on wooden desk warm lamp $STYLE"
gen "urologie-szene-lena.jpg" "portrait austrian male urologist 52 serious professional silver temples white coat discrete empathetic $STYLE"
gen "urologie-szene-markus.jpg" "portrait austrian man 55 concerned looking in bathroom mirror morning light worried expression $STYLE"
gen "urologie-bg-bibliothek.jpg" "urology medical books anatomy charts warm professional desk light $STYLE"
gen "urologie-bg-notizbuch.jpg" "discreet medical file folder and pen on wooden desk warm light $STYLE"
gen "urologie-bg-abend.jpg" "austrian bathroom evening soft light contemplative mood no people $STYLE"
genp "leopold-huber.jpg" "portrait austrian man 48 hematuria concern worried looking at medical result warm light $STYLE"
genp "werner-berger.jpg" "portrait austrian man 58 prostate concern composed but anxious warm light $STYLE"
genp "franz-wagner.jpg" "portrait austrian man 62 erectile function concern thoughtful stoic expression warm light $STYLE"
genp "helmut-koller.jpg" "portrait austrian man 68 frequent urination nighttime tired expression $STYLE"
genp "karl-bauer.jpg" "portrait austrian man 42 kidney stone experience strong but pained warm light $STYLE"

echo "--- alle 130 Bilder generiert ---" | tee -a "$LOG"
