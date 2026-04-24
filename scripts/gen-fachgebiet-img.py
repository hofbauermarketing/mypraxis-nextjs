#!/usr/bin/env python3
"""Generiert Fachgebiet-Bilder via Together AI."""
import json
import os
import sys
import urllib.request
from pathlib import Path

KEY = os.environ.get("TOGETHER_API_KEY") or "tgp_v1_GHP2B0RP5UjY6pKROyhEMyOe6DYAATnyQLbMJxvw6tw"
MODEL = "black-forest-labs/FLUX.1-schnell"
OUT_DIR = Path("/Users/kevinhofbauer/Desktop/Projekte/mypraxis/mypraxis-v2/public/fachgebiete")

JOBS = [
    ("psychiatrie-hero.jpg", "calm austrian psychotherapy waiting room single armchair small side table lamp bookshelf soft afternoon light tall altbau windows no people dignified atmosphere photorealistic editorial muted petrol sand tones natural daylight"),
    ("psychiatrie-content.jpg", "close-up two hands wooden table quiet consultation pen open notebook warm natural light out of focus austrian consulting room background no visible faces calm trusting atmosphere photorealistic editorial muted tones"),
]

def gen(filename, prompt):
    body = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "width": 1024,
        "height": 768,
        "steps": 4,
        "n": 1,
        "response_format": "url",
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.together.xyz/v1/images/generations",
        data=body,
        headers={
            "Authorization": f"Bearer {KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "mypraxis-imggen/1.0",
        },
        method="POST",
    )
    print(f"[gen] {filename} ...", flush=True)
    with urllib.request.urlopen(req, timeout=120) as r:
        result = json.loads(r.read())
    url = result["data"][0]["url"]
    out = OUT_DIR / filename
    with urllib.request.urlopen(url, timeout=60) as r, open(out, "wb") as f:
        f.write(r.read())
    print(f"[ok ] {filename} ({out.stat().st_size//1024} KB)", flush=True)

if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for fn, p in JOBS:
        try:
            gen(fn, p)
        except Exception as e:
            print(f"[err] {fn}: {e}", file=sys.stderr)
            sys.exit(1)
    print("--- done ---")
