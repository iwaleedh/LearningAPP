#!/usr/bin/env python3
"""
v3 SVG color fix — Replace low-contrast fills INSIDE <rect> tags only.
Preserves these colors when used on text, path, circle, line, polygon elements.
"""
import re
import glob
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SEED_NOTES_DIR = os.path.join(SCRIPT_DIR, 'src', 'data', 'seedNotes')

# Mapping: (original_lower, replacement)
# Only applies to fill= attribute within <rect ...> tags
RECT_FILL_REPLACEMENTS = {
    # Emerald/green-500 → green-900
    '#10b981': '#065f46',
    # Green-500 → green-900
    '#22c55e': '#14532d',
    # Green-400 → green-900
    '#51cf66': '#14532d',
    # Amber/yellow → amber-900
    '#f59e0b': '#78350f',
    # Amber (Mantine) → amber-900
    '#fab005': '#78350f',
    # Sky blue → blue-900
    '#74c0fc': '#1e3a8a',
    # Salmon orange → orange-900
    '#ff9966': '#7c2d12',
    # Orange → orange-900
    '#ff922b': '#7c2d12',
    # Orange (Mantine/Tailwind) → orange-900
    '#fb923c': '#7c2d12',
    # Light-medium orange → orange-900
    '#fdba74': '#7c2d12',
    # Sky-200 (pale blue medium) → blue-900
    '#7dd3fc': '#1e3a8a',
    # Amber-400 → amber-900
    '#fbbf24': '#78350f',
    # Lime/green-400 → green-900
    '#34d399': '#065f46',
    # Gray-400 → slate-800
    '#a0aec0': '#1e293b',
    # Gray-300 → slate-800
    '#bdbdbd': '#1e293b',
    # Light blue → blue-900
    '#a0c4e8': '#1e3a8a',
    # Dark yellow → amber-900
    '#e0aa00': '#78350f',
    # Lime → green-900
    '#84cc16': '#14532d',
    # Lime green → green-900
    '#a3e635': '#14532d',
    # Yellow → amber-900
    '#eab308': '#78350f',
    # Lime (cddc39) → green-900
    '#cddc39': '#14532d',
    # Light lime → green-900
    '#aed581': '#14532d',
    # Amber-400 variant → amber-900
    '#f6ad55': '#78350f',
    # Pink → rose-900
    '#f48fb1': '#881337',
    # Blue-300 → blue-900
    '#90caf9': '#1e3a8a',
    # Cyan → teal-900
    '#22d3ee': '#0e4a56',
    # Sky-400 → blue-900
    '#38bdf8': '#1e3a8a',
    # Green → green-900
    '#66bb6a': '#14532d',
    # Green → green-900
    '#2ecc71': '#14532d',
    # Blue-400 → blue-900
    '#63b3ed': '#1e3a8a',
}

def fix_rect_fill(content, original_color, replacement_color):
    """Replace fill=COLOR within <rect ...> tags only (case-insensitive match)."""
    count = 0
    # Match <rect ... fill="COLOR" ... /> or <rect ... fill='COLOR' .../>
    # The fill can appear anywhere inside the rect attributes
    def replace_in_rect(m):
        nonlocal count
        rect_tag = m.group(0)
        # Now replace the fill attribute within this rect tag
        new_fill_dq = f'fill="{replacement_color}"'
        new_fill_sq = f"fill='{replacement_color}'"
        pat_dq = re.compile(r'fill="' + re.escape(original_color) + r'"', re.IGNORECASE)
        pat_sq = re.compile(r"fill='" + re.escape(original_color) + r"'", re.IGNORECASE)
        new_tag, n1 = pat_dq.subn(new_fill_dq, rect_tag)
        new_tag, n2 = pat_sq.subn(new_fill_sq, new_tag)
        if n1 + n2 > 0:
            count += n1 + n2
            return new_tag
        return rect_tag

    # Regex to capture entire rect tag
    rect_pattern = re.compile(
        r'<rect\s(?:[^>]|(?<=fill)[^>])*'
        + r'fill=["\']' + re.escape(original_color) + r'["\']'
        + r'[^>]*/>', re.IGNORECASE
    )
    new_content = rect_pattern.sub(replace_in_rect, content)
    return new_content, count


total_replacements = 0
files_modified = 0

for js_file in sorted(glob.glob(os.path.join(SEED_NOTES_DIR, '**/*.js'), recursive=True)):
    try:
        content = open(js_file, encoding='utf-8').read()
        original = content
        file_replacements = 0

        for original_color, replacement_color in RECT_FILL_REPLACEMENTS.items():
            content, n = fix_rect_fill(content, original_color, replacement_color)
            file_replacements += n

        if file_replacements > 0:
            with open(js_file, 'w', encoding='utf-8') as f:
                f.write(content)
            rel_path = os.path.relpath(js_file, SEED_NOTES_DIR)
            print(f'  {rel_path}: {file_replacements} replacements')
            total_replacements += file_replacements
            files_modified += 1

    except Exception as e:
        print(f'ERROR {js_file}: {e}')

print(f'\nDone: {total_replacements} replacements across {files_modified} files')
