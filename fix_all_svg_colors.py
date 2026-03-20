#!/usr/bin/env python3
"""
fix_all_svg_colors.py

Fixes ALL light fill colors in SVG blocks across every seed note file in
src/data/seedNotes/ (all subjects).

Root cause: NoteBlockRenderer.css forces all SVG <text>/<tspan> elements to
fill: #f8fafc (near-white) via !important. Any SVG panel/box/background that
uses a light fill colour => invisible text.

This script replaces every problematic light colour with a dark equivalent
that preserves the semantic hue (blue stays blue, green stays green, etc.)
while ensuring near-white text is readable against it.

Colour pairs are ordered longest-first so we avoid partial substring matches.
"""

import os
import sys

# ---------------------------------------------------------------------------
# Colour replacement map — (old, new) — applied in order, case-sensitive
# Ordered by length (longest first to avoid substring collisions).
# ---------------------------------------------------------------------------
COLOR_MAP = [
    # --- Very light gray / near-white backgrounds ----------------------------
    ('fill="#f8fafc"',  'fill="#0f172a"'),   # slate-50 → slate-900
    ('fill="#f8f9fa"',  'fill="#0f172a"'),   # gray-50  → slate-900
    ('fill="#FFFFFF"',  'fill="#1e293b"'),   # uppercase white
    ('fill="#ffffff"',  'fill="#1e293b"'),   # lowercase white
    ('fill="white"',    'fill="#1e293b"'),   # named white

    # --- Light blues --------------------------------------------------------
    ('fill="#e7f5ff"',  'fill="#1c3a64"'),   # blue-50
    ('fill="#eff6ff"',  'fill="#1c3a64"'),   # blue-50 alt
    ('fill="#e0e7ff"',  'fill="#2d2f72"'),   # indigo-100
    ('fill="#dbeafe"',  'fill="#1e3a8a"'),   # blue-100
    ('fill="#BFDBFE"',  'fill="#1e3a8a"'),   # uppercase blue-200
    ('fill="#bfdbfe"',  'fill="#1e3a8a"'),   # blue-200
    ('fill="#93c5fd"',  'fill="#1250a0"'),   # blue-300
    ('fill="#c7d2fe"',  'fill="#2d2d72"'),   # indigo-200
    ('fill="#a5b4fc"',  'fill="#2d2d72"'),   # indigo-300
    ('fill="#c5f6fa"',  'fill="#0e4a56"'),   # cyan-100
    ('fill="#b3c6ff"',  'fill="#1e3a8a"'),   # custom light blue

    # --- Light greens -------------------------------------------------------
    ('fill="#f0fdf4"',  'fill="#0a2e1a"'),   # green-50
    ('fill="#ecfdf5"',  'fill="#0a2e1a"'),   # emerald-50
    ('fill="#dcfce7"',  'fill="#0a2e1a"'),   # green-100
    ('fill="#d3f9d8"',  'fill="#0a2e1a"'),   # green-100 alt
    ('fill="#bbf7d0"',  'fill="#0a3020"'),   # green-200
    ('fill="#b2f2bb"',  'fill="#0a3020"'),   # green-200 alt
    ('fill="#6ee7b7"',  'fill="#065f46"'),   # emerald-300 → dark emerald
    ('fill="#d9f99d"',  'fill="#1a3a08"'),   # lime-200 -> dark lime
    ('fill="#4ade80"',  'fill="#0a4a1a"'),   # green-400 (light enough to cause issues)

    # --- Light yellows / ambers ---------------------------------------------
    ('fill="#fffbeb"',  'fill="#44370a"'),   # amber-50
    ('fill="#FFFBEB"',  'fill="#44370a"'),   # uppercase amber-50
    ('fill="#fef9c3"',  'fill="#44370a"'),   # yellow-100
    ('fill="#fef3c7"',  'fill="#78350f"'),   # amber-100
    ('fill="#fff3bf"',  'fill="#44370a"'),   # yellow-100 alt
    ('fill="#fde68a"',  'fill="#44370a"'),   # yellow-200
    ('fill="#fbbf24"',  'fill="#78350f"'),   # amber-400 (medium - borderline)

    # --- Light reds / pinks -------------------------------------------------
    ('fill="#fef2f2"',  'fill="#3d1212"'),   # red-50
    ('fill="#FEE2E2"',  'fill="#3d1212"'),   # uppercase red-100
    ('fill="#fee2e2"',  'fill="#3d1212"'),   # red-100
    ('fill="#ffe3e3"',  'fill="#3d1212"'),   # red-100 alt
    ('fill="#fca5a5"',  'fill="#7f1d1d"'),   # red-300
    ('fill="#ef9a9a"',  'fill="#7f1d1d"'),   # red-300 alt
    ('fill="#fecaca"',  'fill="#7f1d1d"'),   # red-200

    # --- Light purples / violets -------------------------------------------
    ('fill="#ede9fe"',  'fill="#2d1b69"'),   # violet-100
    ('fill="#c7d2fe"',  'fill="#2d2d72"'),   # indigo-200 (already above, kept for safety)

    # --- Light pinks --------------------------------------------------------
    ('fill="#fce7f3"',  'fill="#4a1040"'),   # pink-100
    ('fill="#fbcfe8"',  'fill="#4a1040"'),   # pink-200

    # --- Light oranges ------------------------------------------------------
    ('fill="#ffedd5"',  'fill="#532407"'),   # orange-50
    ('fill="#fed7aa"',  'fill="#532407"'),   # orange-200

    # --- fill="#fff" — short form (do AFTER #ffffff / white forms) ----------
    # Note: appears in SVG attribute context e.g. fill="#fff"
    # We match exactly with surrounding quotes already included above
    # This catches the short form after longer forms are handled.
    ('fill="#fff"',     'fill="#1e293b"'),   # short white

    # --- fill-opacity: increase tint opacity for dark backgrounds -----------
    ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ('fill-opacity="0.08"', 'fill-opacity="0.4"'),
    ('fill-opacity="0.10"', 'fill-opacity="0.4"'),
    ('fill-opacity="0.1"',  'fill-opacity="0.4"'),
]

# ---------------------------------------------------------------------------

def fix_file(filepath: str) -> int:
    """Apply all colour replacements to a single file. Returns replacement count."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    total = 0
    for old, new in COLOR_MAP:
        count = content.count(old)
        if count:
            content = content.replace(old, new)
            total += count

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

    return total


def main():
    base = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        'src', 'data', 'seedNotes'
    )

    if not os.path.isdir(base):
        print(f'ERROR: Directory not found: {base}')
        sys.exit(1)

    files_changed = 0
    total_replacements = 0
    subject_stats: dict[str, int] = {}

    for root, _dirs, files in os.walk(base):
        for fname in files:
            if not fname.endswith('.js'):
                continue
            fpath = os.path.join(root, fname)
            n = fix_file(fpath)
            if n:
                files_changed += 1
                total_replacements += n
                subject = os.path.relpath(root, base)
                subject_stats[subject] = subject_stats.get(subject, 0) + n

    print(f'\n=== fix_all_svg_colors.py complete ===')
    print(f'Files modified : {files_changed}')
    print(f'Total replacements: {total_replacements}')
    if subject_stats:
        print('\nPer-subject breakdown:')
        for subj, n in sorted(subject_stats.items()):
            print(f'  {subj:<30} {n:>5} replacements')
    else:
        print('No changes needed — all files already fixed.')


if __name__ == '__main__':
    main()
