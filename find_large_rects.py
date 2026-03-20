#!/usr/bin/env python3
"""Find large rect elements with problematic fills that likely have text overlaid."""
import re
import glob
import os

os.chdir('src/data/seedNotes')

remaining_colors = [
    '#F59E0B','#f59e0b','#fdba74','#fb923c','#74c0fc','#51cf66',
    '#34d399','#ff9966','#ff922b','#a0c4e8','#e0aa00','#22c55e',
    '#fab005','#f6ad55','#a0aec0','#bdbdbd',
]

results = []
for js_file in glob.glob('**/*.js', recursive=True):
    try:
        content = open(js_file).read()
        for color in remaining_colors:
            pat = r'<rect[^>]+fill=["\']' + re.escape(color) + r'["\'][^>]*/>'
            for m in re.finditer(pat, content, re.IGNORECASE):
                rect = m.group()
                w = re.search(r'width=["\'](\d+)', rect)
                h = re.search(r'height=["\'](\d+)', rect)
                x = re.search(r'\sx=["\'](\d+)', rect)
                y = re.search(r'\sy=["\'](\d+)', rect)
                if w and h and int(w.group(1)) >= 50 and int(h.group(1)) >= 30:
                    xi = int(x.group(1)) if x else 0
                    yi = int(y.group(1)) if y else 0
                    wi = int(w.group(1))
                    hi = int(h.group(1))
                    results.append(
                        f'{js_file}:{color} [{wi}x{hi} at ({xi},{yi})]  {rect[:110]}'
                    )
    except Exception:
        pass

for r in results:
    print(r)
print(f'\nTotal large rects: {len(results)}')
