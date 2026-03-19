#!/usr/bin/env python3
"""
Download Cambridge IGCSE 2024 past papers from official Cambridge International website.
These are publicly available, freely downloadable PDFs.
"""
import os
import time
import requests
from pathlib import Path

BASE_DIR = Path(__file__).parent / "public/pastpapers/olevel"
CAIE_BASE = "https://www.cambridgeinternational.org"

session = requests.Session()
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0.0.0 Safari/537.36"
    ),
})

# (local_path, caie_image_path)  — all 2024 variant 1 papers from Cambridge International
files = [
    # ── CHEMISTRY 0620 ───────────────────────────────────────────────────────
    ("chemistry/2024/0620_s24_qp_11.pdf", "/Images/520511-june-2024-question-paper-11.pdf"),
    ("chemistry/2024/0620_s24_ms_11.pdf", "/Images/520492-june-2024-mark-scheme-paper-11.pdf"),
    ("chemistry/2024/0620_s24_qp_21.pdf", "/Images/520512-june-2024-question-paper-21.pdf"),
    ("chemistry/2024/0620_s24_ms_21.pdf", "/Images/520494-june-2024-mark-scheme-paper-21.pdf"),
    ("chemistry/2024/0620_s24_qp_31.pdf", "/Images/520513-june-2024-question-paper-31.pdf"),
    ("chemistry/2024/0620_s24_ms_31.pdf", "/Images/520495-june-2024-mark-scheme-paper-31.pdf"),
    ("chemistry/2024/0620_s24_qp_41.pdf", "/Images/671419-june-2024-question-paper-41.pdf"),
    ("chemistry/2024/0620_s24_ms_41.pdf", "/Images/671413-june-2024-mark-scheme-paper-41.pdf"),

    # ── PHYSICS 0625 ─────────────────────────────────────────────────────────
    ("physics/2024/0625_s24_qp_11.pdf", "/Images/570010-june-2024-question-paper-11.pdf"),
    ("physics/2024/0625_s24_ms_11.pdf", "/Images/570004-june-2024-mark-scheme-paper-11.pdf"),
    ("physics/2024/0625_s24_qp_21.pdf", "/Images/570011-june-2024-question-paper-21.pdf"),
    ("physics/2024/0625_s24_ms_21.pdf", "/Images/570005-june-2024-mark-scheme-paper-21.pdf"),
    ("physics/2024/0625_s24_qp_31.pdf", "/Images/570012-june-2024-question-paper-31.pdf"),
    ("physics/2024/0625_s24_ms_31.pdf", "/Images/570006-june-2024-mark-scheme-paper-31.pdf"),
    ("physics/2024/0625_s24_qp_41.pdf", "/Images/671385-june-2024-question-paper-41.pdf"),
    ("physics/2024/0625_s24_ms_41.pdf", "/Images/671373-june-2024-mark-scheme-paper-41.pdf"),

    # ── BIOLOGY 0610 ─────────────────────────────────────────────────────────
    ("biology/2024/0610_s24_qp_11.pdf", "/Images/520441-june-2024-question-paper-11.pdf"),
    ("biology/2024/0610_s24_ms_11.pdf", "/Images/520429-june-2024-mark-scheme-paper-11.pdf"),
    ("biology/2024/0610_s24_qp_21.pdf", "/Images/520442-june-2024-question-paper-21.pdf"),
    ("biology/2024/0610_s24_ms_21.pdf", "/Images/520430-june-2024-mark-scheme-paper-21.pdf"),
    ("biology/2024/0610_s24_qp_31.pdf", "/Images/520443-june-2024-question-paper-31.pdf"),
    ("biology/2024/0610_s24_ms_31.pdf", "/Images/520431-june-2024-mark-scheme-paper-31.pdf"),
    ("biology/2024/0610_s24_qp_61.pdf", "/Images/649824-june-2024-question-paper-61.pdf"),
    ("biology/2024/0610_s24_ms_61.pdf", "/Images/649818-june-2024-mark-scheme-paper-61.pdf"),

    # ── MATHS 0580 ───────────────────────────────────────────────────────────
    ("maths/2024/0580_s24_qp_11.pdf", "/Images/569923-june-2024-question-paper-11.pdf"),
    ("maths/2024/0580_s24_ms_11.pdf", "/Images/569919-june-2024-mark-scheme-paper-11.pdf"),
    ("maths/2024/0580_s24_qp_21.pdf", "/Images/569924-june-2024-question-paper-21.pdf"),
    ("maths/2024/0580_s24_ms_21.pdf", "/Images/569920-june-2024-mark-scheme-paper-21.pdf"),
    ("maths/2024/0580_s24_qp_31.pdf", "/Images/569925-june-2024-question-paper-31.pdf"),
    ("maths/2024/0580_s24_ms_31.pdf", "/Images/569921-june-2024-mark-scheme-paper-31.pdf"),
    ("maths/2024/0580_s24_qp_41.pdf", "/Images/671439-june-2024-question-paper-41.pdf"),
    ("maths/2024/0580_s24_ms_41.pdf", "/Images/671437-june-2024-mark-scheme-paper-41.pdf"),
]


def download_file(local_path, image_path):
    dest = BASE_DIR / local_path
    if dest.exists() and dest.stat().st_size > 5000:
        print(f"  [SKIP] {local_path} ({dest.stat().st_size:,} bytes)")
        return True

    url = CAIE_BASE + image_path
    try:
        r = session.get(url, timeout=30)
        if r.status_code == 200 and r.content[:4] == b'%PDF':
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(r.content)
            print(f"  [OK]   {local_path} ({len(r.content):,} bytes)")
            return True
        else:
            print(f"  [FAIL] {local_path} — HTTP {r.status_code}, size {len(r.content)}")
            return False
    except Exception as e:
        print(f"  [ERR]  {local_path}: {e}")
        return False


def main():
    success = 0
    failed = []
    print(f"Downloading {len(files)} Cambridge IGCSE 2024 PDFs from Cambridge International...\n")
    for local_path, image_path in files:
        if download_file(local_path, image_path):
            success += 1
        else:
            failed.append(local_path)
        time.sleep(0.3)

    print(f"\n{'='*60}")
    print(f"Done: {success}/{len(files)} downloaded")
    if failed:
        print(f"\nFailed ({len(failed)}):")
        for f in failed:
            print(f"  - {f}")


if __name__ == "__main__":
    main()


# Session with browser-like headers
session = requests.Session()
session.headers.update({
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "application/pdf,*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "Referer": "https://papers.gceguide.cc/",
    "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24"',
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
})

GCEGUIDE_BASE = "https://papers.gceguide.cc/Cambridge%20IGCSE"

# All files to download: (local_path, relative_url_path)
files = [
    # ───────────────── CHEMISTRY (0620) ─────────────────
    ("chemistry/2024/0620_s24_qp_12.pdf", "Chemistry%20(0620)/2024/0620_s24_qp_12.pdf"),
    ("chemistry/2024/0620_s24_ms_12.pdf", "Chemistry%20(0620)/2024/0620_s24_ms_12.pdf"),
    ("chemistry/2024/0620_s24_qp_22.pdf", "Chemistry%20(0620)/2024/0620_s24_qp_22.pdf"),
    ("chemistry/2024/0620_s24_ms_22.pdf", "Chemistry%20(0620)/2024/0620_s24_ms_22.pdf"),
    ("chemistry/2024/0620_s24_qp_32.pdf", "Chemistry%20(0620)/2024/0620_s24_qp_32.pdf"),
    ("chemistry/2024/0620_s24_ms_32.pdf", "Chemistry%20(0620)/2024/0620_s24_ms_32.pdf"),
    ("chemistry/2024/0620_s24_qp_42.pdf", "Chemistry%20(0620)/2024/0620_s24_qp_42.pdf"),
    ("chemistry/2024/0620_s24_ms_42.pdf", "Chemistry%20(0620)/2024/0620_s24_ms_42.pdf"),
    ("chemistry/2023/0620_s23_qp_12.pdf", "Chemistry%20(0620)/2023/0620_s23_qp_12.pdf"),
    ("chemistry/2023/0620_s23_ms_12.pdf", "Chemistry%20(0620)/2023/0620_s23_ms_12.pdf"),
    ("chemistry/2023/0620_s23_qp_22.pdf", "Chemistry%20(0620)/2023/0620_s23_qp_22.pdf"),
    ("chemistry/2023/0620_s23_ms_22.pdf", "Chemistry%20(0620)/2023/0620_s23_ms_22.pdf"),
    ("chemistry/2022/0620_s22_qp_12.pdf", "Chemistry%20(0620)/2022/0620_s22_qp_12.pdf"),
    ("chemistry/2022/0620_s22_ms_12.pdf", "Chemistry%20(0620)/2022/0620_s22_ms_12.pdf"),
    ("chemistry/2022/0620_s22_qp_22.pdf", "Chemistry%20(0620)/2022/0620_s22_qp_22.pdf"),
    ("chemistry/2022/0620_s22_ms_22.pdf", "Chemistry%20(0620)/2022/0620_s22_ms_22.pdf"),

    # ───────────────── PHYSICS (0625) ─────────────────
    ("physics/2024/0625_s24_qp_12.pdf", "Physics%20(0625)/2024/0625_s24_qp_12.pdf"),
    ("physics/2024/0625_s24_ms_12.pdf", "Physics%20(0625)/2024/0625_s24_ms_12.pdf"),
    ("physics/2024/0625_s24_qp_22.pdf", "Physics%20(0625)/2024/0625_s24_qp_22.pdf"),
    ("physics/2024/0625_s24_ms_22.pdf", "Physics%20(0625)/2024/0625_s24_ms_22.pdf"),
    ("physics/2024/0625_s24_qp_32.pdf", "Physics%20(0625)/2024/0625_s24_qp_32.pdf"),
    ("physics/2024/0625_s24_ms_32.pdf", "Physics%20(0625)/2024/0625_s24_ms_32.pdf"),
    ("physics/2024/0625_s24_qp_42.pdf", "Physics%20(0625)/2024/0625_s24_qp_42.pdf"),
    ("physics/2024/0625_s24_ms_42.pdf", "Physics%20(0625)/2024/0625_s24_ms_42.pdf"),
    ("physics/2023/0625_s23_qp_12.pdf", "Physics%20(0625)/2023/0625_s23_qp_12.pdf"),
    ("physics/2023/0625_s23_ms_12.pdf", "Physics%20(0625)/2023/0625_s23_ms_12.pdf"),
    ("physics/2023/0625_s23_qp_22.pdf", "Physics%20(0625)/2023/0625_s23_qp_22.pdf"),
    ("physics/2023/0625_s23_ms_22.pdf", "Physics%20(0625)/2023/0625_s23_ms_22.pdf"),
    ("physics/2022/0625_s22_qp_12.pdf", "Physics%20(0625)/2022/0625_s22_qp_12.pdf"),
    ("physics/2022/0625_s22_ms_12.pdf", "Physics%20(0625)/2022/0625_s22_ms_12.pdf"),
    ("physics/2022/0625_s22_qp_22.pdf", "Physics%20(0625)/2022/0625_s22_qp_22.pdf"),
    ("physics/2022/0625_s22_ms_22.pdf", "Physics%20(0625)/2022/0625_s22_ms_22.pdf"),

    # ───────────────── BIOLOGY (0610) ─────────────────
    ("biology/2024/0610_s24_qp_12.pdf", "Biology%20(0610)/2024/0610_s24_qp_12.pdf"),
    ("biology/2024/0610_s24_ms_12.pdf", "Biology%20(0610)/2024/0610_s24_ms_12.pdf"),
    ("biology/2024/0610_s24_qp_22.pdf", "Biology%20(0610)/2024/0610_s24_qp_22.pdf"),
    ("biology/2024/0610_s24_ms_22.pdf", "Biology%20(0610)/2024/0610_s24_ms_22.pdf"),
    ("biology/2024/0610_s24_qp_32.pdf", "Biology%20(0610)/2024/0610_s24_qp_32.pdf"),
    ("biology/2024/0610_s24_ms_32.pdf", "Biology%20(0610)/2024/0610_s24_ms_32.pdf"),
    ("biology/2024/0610_s24_qp_62.pdf", "Biology%20(0610)/2024/0610_s24_qp_62.pdf"),
    ("biology/2024/0610_s24_ms_62.pdf", "Biology%20(0610)/2024/0610_s24_ms_62.pdf"),
    ("biology/2023/0610_s23_qp_12.pdf", "Biology%20(0610)/2023/0610_s23_qp_12.pdf"),
    ("biology/2023/0610_s23_ms_12.pdf", "Biology%20(0610)/2023/0610_s23_ms_12.pdf"),
    ("biology/2023/0610_s23_qp_22.pdf", "Biology%20(0610)/2023/0610_s23_qp_22.pdf"),
    ("biology/2023/0610_s23_ms_22.pdf", "Biology%20(0610)/2023/0610_s23_ms_22.pdf"),
    ("biology/2022/0610_s22_qp_12.pdf", "Biology%20(0610)/2022/0610_s22_qp_12.pdf"),
    ("biology/2022/0610_s22_ms_12.pdf", "Biology%20(0610)/2022/0610_s22_ms_12.pdf"),
    ("biology/2022/0610_s22_qp_22.pdf", "Biology%20(0610)/2022/0610_s22_qp_22.pdf"),
    ("biology/2022/0610_s22_ms_22.pdf", "Biology%20(0610)/2022/0610_s22_ms_22.pdf"),

    # ───────────────── MATHS Core (0580) ─────────────────
    ("maths/2024/0580_s24_qp_12.pdf", "Mathematics%20(0580)/2024/0580_s24_qp_12.pdf"),
    ("maths/2024/0580_s24_ms_12.pdf", "Mathematics%20(0580)/2024/0580_s24_ms_12.pdf"),
    ("maths/2024/0580_s24_qp_22.pdf", "Mathematics%20(0580)/2024/0580_s24_qp_22.pdf"),
    ("maths/2024/0580_s24_ms_22.pdf", "Mathematics%20(0580)/2024/0580_s24_ms_22.pdf"),
    ("maths/2023/0580_s23_qp_12.pdf", "Mathematics%20(0580)/2023/0580_s23_qp_12.pdf"),
    ("maths/2023/0580_s23_ms_12.pdf", "Mathematics%20(0580)/2023/0580_s23_ms_12.pdf"),
    ("maths/2023/0580_s23_qp_22.pdf", "Mathematics%20(0580)/2023/0580_s23_qp_22.pdf"),
    ("maths/2023/0580_s23_ms_22.pdf", "Mathematics%20(0580)/2023/0580_s23_ms_22.pdf"),
    ("maths/2022/0580_s22_qp_12.pdf", "Mathematics%20(0580)/2022/0580_s22_qp_12.pdf"),
    ("maths/2022/0580_s22_ms_12.pdf", "Mathematics%20(0580)/2022/0580_s22_ms_12.pdf"),
    ("maths/2022/0580_s22_qp_22.pdf", "Mathematics%20(0580)/2022/0580_s22_qp_22.pdf"),
    ("maths/2022/0580_s22_ms_22.pdf", "Mathematics%20(0580)/2022/0580_s22_ms_22.pdf"),

    # ───────────────── MATHS Extended / Additional (0606) ─────────────────
    ("maths/2024/0606_s24_qp_12.pdf", "Additional%20Mathematics%20(0606)/2024/0606_s24_qp_12.pdf"),
    ("maths/2024/0606_s24_ms_12.pdf", "Additional%20Mathematics%20(0606)/2024/0606_s24_ms_12.pdf"),
    ("maths/2024/0606_s24_qp_22.pdf", "Additional%20Mathematics%20(0606)/2024/0606_s24_qp_22.pdf"),
    ("maths/2024/0606_s24_ms_22.pdf", "Additional%20Mathematics%20(0606)/2024/0606_s24_ms_22.pdf"),
    ("maths/2023/0606_s23_qp_12.pdf", "Additional%20Mathematics%20(0606)/2023/0606_s23_qp_12.pdf"),
    ("maths/2023/0606_s23_ms_12.pdf", "Additional%20Mathematics%20(0606)/2023/0606_s23_ms_12.pdf"),
    ("maths/2023/0606_s23_qp_22.pdf", "Additional%20Mathematics%20(0606)/2023/0606_s23_qp_22.pdf"),
    ("maths/2023/0606_s23_ms_22.pdf", "Additional%20Mathematics%20(0606)/2023/0606_s23_ms_22.pdf"),
    ("maths/2022/0606_s22_qp_12.pdf", "Additional%20Mathematics%20(0606)/2022/0606_s22_qp_12.pdf"),
    ("maths/2022/0606_s22_ms_12.pdf", "Additional%20Mathematics%20(0606)/2022/0606_s22_ms_12.pdf"),
    ("maths/2022/0606_s22_qp_22.pdf", "Additional%20Mathematics%20(0606)/2022/0606_s22_qp_22.pdf"),
    ("maths/2022/0606_s22_ms_22.pdf", "Additional%20Mathematics%20(0606)/2022/0606_s22_ms_22.pdf"),
]


def download_file(local_path, url_path, retries=3):
    dest = BASE_DIR / local_path
    if dest.exists() and dest.stat().st_size > 5000:
        print(f"  [SKIP] {local_path} (already exists, {dest.stat().st_size} bytes)")
        return True

    url = f"{GCEGUIDE_BASE}/{url_path}"
    for attempt in range(1, retries + 1):
        try:
            r = session.get(url, timeout=30, allow_redirects=True)
            if r.status_code == 200 and len(r.content) > 5000:
                # Verify it's a PDF
                if r.content[:4] == b'%PDF' or r.headers.get('Content-Type', '').startswith('application/pdf'):
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    dest.write_bytes(r.content)
                    print(f"  [OK] {local_path} ({len(r.content):,} bytes)")
                    return True
                else:
                    print(f"  [NOT PDF] {local_path} - got {r.headers.get('Content-Type', 'unknown')} (HTTP {r.status_code})")
                    return False
            else:
                print(f"  [HTTP {r.status_code}] {local_path} (attempt {attempt}/{retries})")
                if attempt < retries:
                    time.sleep(2 * attempt)
        except requests.RequestException as e:
            print(f"  [ERROR] {local_path}: {e} (attempt {attempt}/{retries})")
            if attempt < retries:
                time.sleep(2 * attempt)
    return False


def main():
    success = 0
    failed = []

    print(f"Downloading {len(files)} O Level past paper PDFs...\n")
    for local_path, url_path in files:
        if download_file(local_path, url_path):
            success += 1
        else:
            failed.append(local_path)
        time.sleep(0.3)  # be polite to the server

    print(f"\n{'='*60}")
    print(f"Done: {success}/{len(files)} downloaded successfully")
    if failed:
        print(f"\nFailed ({len(failed)}):")
        for f in failed:
            print(f"  - {f}")


if __name__ == "__main__":
    main()
