#!/usr/bin/env python3
"""
audit_svg_colors.py
Lists all fill colours in seed notes that have poor contrast against the CSS-forced
near-white SVG text (#f8fafc). Outputs a sorted list for use in the fix script.
"""
import os
import re

def luminance(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 3:
        hex_color = ''.join(c*2 for c in hex_color)
    try:
        r = int(hex_color[0:2], 16) / 255
        g = int(hex_color[2:4], 16) / 255
        b = int(hex_color[4:6], 16) / 255
        def lin(c):
            return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
        return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
    except Exception:
        return None

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src', 'data', 'seedNotes')

all_fills = set()
for root, _, files in os.walk(base):
    for fname in files:
        if not fname.endswith('.js'):
            continue
        content = open(os.path.join(root, fname)).read()
        all_fills.update(re.findall(r'fill="([^"]+)"', content))
        all_fills.update(re.findall(r"fill='([^']+)'", content))

# SVG text is forced to near-white by CSS
TEXT_LUM = luminance('f8fafc')

light = []
for fill in sorted(all_fills):
    if fill in ('none', 'inherit', 'currentColor'):
        continue
    if fill.startswith('url(') or fill.startswith('var('):
        continue
    if fill.startswith('#') and len(fill) in (4, 7):
        lum = luminance(fill)
        if lum is not None:
            contrast = (TEXT_LUM + 0.05) / (lum + 0.05) if lum < TEXT_LUM else (lum + 0.05) / (TEXT_LUM + 0.05)
            if contrast < 3.0:
                light.append((contrast, fill))
    elif fill.lower() in ('white', '#fff', '#ffffff'):
        light.append((1.0, fill))

light.sort()
print(f'Fill colours with contrast < 3.0 against #f8fafc (near-white text):')
for c, f in light:
    print(f'  {f}  contrast={c:.2f}')
print(f'\nTotal: {len(light)}')
