#!/usr/bin/env python3
"""Scrape PDF URLs from Cambridge International past papers pages."""
import requests, re, time

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml',
}

CAIE_BASE = 'https://www.cambridgeinternational.org'

subjects = {
    'chemistry': '/programmes-and-qualifications/cambridge-igcse-chemistry-0620/past-papers/',
    'physics':   '/programmes-and-qualifications/cambridge-igcse-physics-0625/past-papers/',
    'biology':   '/programmes-and-qualifications/cambridge-igcse-biology-0610/past-papers/',
    'maths0580': '/programmes-and-qualifications/cambridge-igcse-mathematics-0580/past-papers/',
    'maths0606': '/programmes-and-qualifications/cambridge-igcse-additional-mathematics-0606/past-papers/',
}

for subj, path in subjects.items():
    url = CAIE_BASE + path
    r = requests.get(url, headers=headers, timeout=30)
    print(f'\n=== {subj.upper()} (HTTP {r.status_code}) ===')
    pdfs = re.findall(r'href="(/Images/[^"]+\.pdf)"', r.text)
    for p in pdfs:
        label_match = re.search(rf'href="{re.escape(p)}"[^>]*>([^<]+)</a>', r.text)
        label = label_match.group(1).strip() if label_match else p
        print(f'  {label}: {CAIE_BASE}{p}')
    time.sleep(1)
