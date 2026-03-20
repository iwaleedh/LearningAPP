#!/usr/bin/env python3
"""
Find all rect elements with problematic colors where text coordinates overlap with the rect bounds.
"""
import re
import glob
import os

os.chdir('src/data/seedNotes')

# All problematic colors (contrast < 3.0 against #f8fafc)
COLORS = [
    '#F59E0B','#f59e0b','#10b981','#10B981','#22c55e','#22C55E',
    '#51cf66','#34d399','#74c0fc','#7dd3fc','#fdba74','#fb923c',
    '#ff9966','#ff922b','#fab005','#FAB005','#f6ad55','#a0aec0',
    '#bdbdbd','#a0c4e8','#e0aa00','#84cc16','#a3e635','#FBBF24',
    '#fbbf24','#38bdf8','#63b3ed','#66bb6a','#2ecc71','#f48fb1',
    '#90caf9','#ffb300','#ffa94d','#ffa726','#ff9900','#f39c12',
    '#f59f00','#eab308','#cddc39','#aed581','#a9e34b','#94d82d',
    '#22d3ee','#ffaa88','#ffaa66','#ffb300',
]
# Normalize to lowercase set
COLOR_SET = set(c.lower() for c in COLORS)

def in_rect(tx, ty, rx, ry, rw, rh, margin=5):
    return (rx - margin <= tx <= rx + rw + margin and
            ry - margin <= ty <= ry + rh + margin)

issues = []

for js_file in sorted(glob.glob('**/*.js', recursive=True)):
    try:
        content = open(js_file).read()
        # Work SVG by SVG
        for svg_m in re.finditer(r'<svg[\s\S]*?</svg>', content):
            svg = svg_m.group()
            # Find rects with problematic fills
            for rect_m in re.finditer(r'<rect\s[^>]*/>', svg):
                rect = rect_m.group()
                fill_m = re.search(r'fill=["\']([^"\']+)["\']', rect)
                if not fill_m:
                    continue
                fill = fill_m.group(1).lower()
                if fill not in COLOR_SET:
                    continue
                # Extract dimensions
                dm = {k: int(v) for k, v in re.findall(r'\b(x|y|width|height)=["\'](\d+)["\']', rect)}
                rx, ry = dm.get('x', 0), dm.get('y', 0)
                rw, rh = dm.get('width', 0), dm.get('height', 0)
                if rw < 40 or rh < 25:
                    continue  # Skip tiny elements

                # Find text elements in this SVG with overlapping coords
                overlapping_texts = []
                for text_m in re.finditer(r'<text\s[^>]*>([^<]*)</text>', svg):
                    tatts = text_m.group()
                    xm = re.search(r'\sx=["\'](\d+)["\']', tatts)
                    ym = re.search(r'\sy=["\'](\d+)["\']', tatts)
                    if xm and ym:
                        tx, ty = int(xm.group(1)), int(ym.group(1))
                        if in_rect(tx, ty, rx, ry, rw, rh):
                            overlapping_texts.append(text_m.group()[: 60])

                if overlapping_texts:
                    issues.append({
                        'file': js_file,
                        'fill': fill_m.group(1),
                        'rect': f'{rw}x{rh} at ({rx},{ry})',
                        'texts': overlapping_texts[:3],
                    })
    except Exception as e:
        pass

for issue in issues:
    print(f"\n{issue['file']}  fill={issue['fill']}  [{issue['rect']}]")
    for t in issue['texts']:
        print(f"  TEXT: {t}")

print(f'\nTotal confirmed text-on-background cases: {len(issues)}')
