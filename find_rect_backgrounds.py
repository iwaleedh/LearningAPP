#!/usr/bin/env python3
"""Find remaining problematic-color rect backgrounds in SVGs."""
import re
import glob
import os

os.chdir('src/data/seedNotes')

remaining_colors = [
    '#FFD700','#ffd700','#a3e635','#cddc39','#a9e34b','#aed581',
    '#7dd3fc','#FBBF24','#fbbf24','#fdba74','#94d82d','#90caf9',
    '#ffb300','#22d3ee','#a0c4e8','#ffaa88','#fab005','#ffaa66',
    '#bdbdbd','#ffa94d','#f6ad55','#eab308','#34d399','#ffa726',
    '#74c0fc','#84cc16','#51cf66','#ff9966','#2ecc71','#e0aa00',
    '#f59f00','#ff9900','#38bdf8','#F59E0B','#f59e0b','#f39c12',
    '#f48fb1','#ff922b','#a0aec0','#fb923c','#22c55e','#63b3ed',
    '#66bb6a','#FF8C00','#ff8c00',
]

seen = set()
for js_file in glob.glob('**/*.js', recursive=True):
    try:
        content = open(js_file).read()
        for color in remaining_colors:
            pat = r'<rect[^>]+fill=["\']' + re.escape(color) + r'["\'][^>]*/>'
            for m in re.finditer(pat, content, re.IGNORECASE):
                key = (js_file, color.lower())
                if key not in seen:
                    seen.add(key)
                    print(f'{js_file}: {color}  →  {m.group()[:120]}')
    except Exception as e:
        pass

print(f'\nTotal: {len(seen)} unique file/color combos with rect fills')
