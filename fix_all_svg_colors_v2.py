#!/usr/bin/env python3
"""
fix_all_svg_colors_v2.py

Comprehensive fix for ALL light/pastel SVG fill colours across every seed note.
Uses WCAG-based contrast analysis: replaces any fill whose contrast ratio against
the CSS-forced near-white SVG text (#f8fafc) is below ~3.0.

Key improvements over v1:
  * Handles BOTH fill="VALUE" and fill='VALUE' (single-quote SVGs)
  * Uses case-insensitive regex so #FFF, #fff, #FEF2F2 etc. are all caught
  * Covers ~150 additional light/pastel colours found in audit
  * Handles fill-opacity in both quote styles
  * Handles named colours: white, silver
"""

import os
import re
import sys

# ---------------------------------------------------------------------------
# Colour replacement table — (old_hex_value, new_hex_value)
# old_hex is matched case-insensitively; values include the '#'.
# Named colours (no '#') are listed at the bottom.
# ---------------------------------------------------------------------------
HEX_REPLACEMENTS = [

    # === NEAR-WHITE / GRAY BACKGROUNDS ===================================
    ('#f8fafc', '#0f172a'),
    ('#f8f9fa', '#0f172a'),
    ('#f8f9ff', '#0f172a'),
    ('#f8faff', '#0f172a'),
    ('#f8fdf8', '#0a2e1a'),
    ('#f8f8ff', '#0f172a'),
    ('#f7fafc', '#0f172a'),
    ('#f9fafb', '#0f172a'),
    ('#f9f9f9', '#0f172a'),
    ('#fafafa', '#0f172a'),
    ('#fdfdfd', '#0f172a'),
    ('#f5f5f5', '#0f172a'),
    ('#f4f4f5', '#0f172a'),
    ('#f3f4f6', '#0f172a'),
    ('#f1f3f5', '#0f172a'),
    ('#f0f4f8', '#0f172a'),
    ('#f0f0f0', '#0f172a'),
    ('#f2f9ff', '#1c3a64'),
    ('#f5f5ff', '#1c3a64'),

    # === PURPLE / INDIGO LIGHT ===========================================
    ('#f5f3ff', '#2d1b69'),
    ('#f3f0ff', '#2d1b69'),
    ('#faf5ff', '#2d1b69'),
    ('#f3e5f5', '#3b1460'),
    ('#f3e8ff', '#3b1460'),
    ('#f5d0fe', '#4a1040'),
    ('#fdf4ff', '#2d1b69'),
    ('#fdf2f8', '#4a1040'),
    ('#fce4ec', '#4a1040'),
    ('#fce8ff', '#4a1040'),
    ('#ede9fe', '#2d1b69'),
    ('#e8eaf6', '#2d2d72'),
    ('#eef2ff', '#2d2d72'),
    ('#e9d5ff', '#2d1b69'),
    ('#ddd6fe', '#2d1b69'),
    ('#c7d2fe', '#2d2d72'),
    ('#c4b5fd', '#2d1b69'),
    ('#d8b4fe', '#2d1b69'),
    ('#d4a8ff', '#2d1b69'),
    ('#f0abfc', '#4a1040'),
    ('#eebefa', '#4a1040'),
    ('#b794f4', '#2d1b69'),
    ('#a78bfa', '#2d1b69'),
    ('#dbe4ff', '#2d2d72'),
    ('#e0e7ff', '#2d2d72'),

    # === BLUE / SKY / INDIGO LIGHT =======================================
    ('#f0f4ff', '#1c3a64'),
    ('#f0f8ff', '#1c3a64'),
    ('#f0f9ff', '#1c3a64'),
    ('#e0f2fe', '#0c4a6e'),
    ('#ebf8ff', '#1c3a64'),
    ('#eaf3fb', '#1c3a64'),
    ('#e8f4ff', '#1c3a64'),
    ('#e8f4fd', '#1c3a64'),
    ('#e8f0fe', '#1c3a64'),
    ('#e8eeff', '#1c3a64'),
    ('#e8eef8', '#1c3a64'),
    ('#e8f8ff', '#1c3a64'),
    ('#e3f2fd', '#1c3a64'),
    ('#ddeeff', '#1c3a64'),
    ('#d6eeff', '#1c3a64'),
    ('#d0ebff', '#1c3a64'),
    ('#d0e8f8', '#1c3a64'),
    ('#cceeff', '#1c3a64'),
    ('#c8e8ff', '#1c3a64'),
    ('#bae6fd', '#0c4a6e'),
    ('#bee3f8', '#1c3a64'),
    ('#bbdefb', '#1c3a64'),
    ('#bfdbfe', '#1e3a8a'),
    ('#dbeafe', '#1e3a8a'),
    ('#a5f3fc', '#0e4a56'),
    ('#aaddf8', '#1c3a64'),
    ('#a8d8ff', '#1c3a64'),
    ('#a5d8ff', '#1c3a64'),
    ('#aaddff', '#1c3a64'),
    ('#aaccee', '#1c3a64'),
    ('#90cdf4', '#1c3a64'),
    ('#93c5fd', '#1e3a8a'),
    ('#c8d8e8', '#1c3a64'),
    ('#b0c8e0', '#1c3a64'),
    ('#aed6f1', '#1c3a64'),
    ('#e7f5ff', '#1c3a64'),
    ('#eff6ff', '#1c3a64'),

    # === TEAL / CYAN LIGHT ===============================================
    ('#ccfbf1', '#0e4a56'),
    ('#e3fafc', '#0e4a56'),
    ('#e6fffa', '#0e4a56'),
    ('#e8f8f5', '#0a2e1a'),
    ('#b2dfdb', '#0e4a56'),

    # === GREEN LIGHT =====================================================
    ('#f0fdf4', '#0a2e1a'),
    ('#f0fff4', '#0a2e1a'),
    ('#ecfdf5', '#0a2e1a'),
    ('#e8fff0', '#0a2e1a'),
    ('#e8f5e9', '#0a2e1a'),
    ('#ebfbee', '#0a2e1a'),
    ('#d1fae5', '#0a2e1a'),
    ('#dcfce7', '#0a2e1a'),
    ('#d3f9d8', '#0a2e1a'),
    ('#c6f6d5', '#0a2e1a'),
    ('#d4f1d4', '#0a2e1a'),
    ('#c8e6c9', '#0a2e1a'),
    ('#c0e8c0', '#0a2e1a'),
    ('#b8f0c8', '#0a2e1a'),
    ('#bbf7d0', '#0a3020'),
    ('#a7f3d0', '#065f46'),
    ('#86efac', '#0a2e1a'),
    ('#9ae6b4', '#065f46'),

    # === YELLOW / AMBER LIGHT ============================================
    ('#fef9c3', '#44370a'),
    ('#fef3c7', '#78350f'),
    ('#fff3bf', '#44370a'),
    ('#fef9e7', '#44370a'),
    ('#fef9ec', '#44370a'),
    ('#fef9f0', '#44370a'),
    ('#fefce8', '#44370a'),
    ('#fefcbf', '#44370a'),
    ('#fffde7', '#44370a'),
    ('#fff9c4', '#44370a'),
    ('#fff9db', '#44370a'),
    ('#fff9e6', '#44370a'),
    ('#fff8e0', '#44370a'),
    ('#fff3cc', '#44370a'),
    ('#fef08a', '#44370a'),
    ('#ffec99', '#44370a'),
    ('#fde68a', '#44370a'),
    ('#ffe8cc', '#532407'),
    ('#ffe8b0', '#532407'),
    ('#fde8c8', '#532407'),
    ('#fde8d8', '#532407'),
    ('#fbd38d', '#532407'),
    ('#faf089', '#44370a'),
    ('#ffee00', '#44370a'),
    ('#ffe082', '#44370a'),
    ('#fde047', '#44370a'),
    ('#fdd835', '#44370a'),
    ('#fcd34d', '#532407'),
    ('#ffd43b', '#44370a'),
    ('#f6e05e', '#44370a'),
    ('#facc15', '#532407'),
    ('#ecc94b', '#532407'),
    ('#f1c40f', '#532407'),
    ('#fcd9b0', '#532407'),
    ('#e8d5b0', '#3d2b0a'),
    ('#f5c48a', '#532407'),
    ('#ffc078', '#532407'),
    ('#d4ac6d', '#3d2b0a'),
    ('#d1b28a', '#3d2b0a'),

    # === ORANGE / WARM LIGHT =============================================
    ('#fff7ed', '#532407'),
    ('#fff7f0', '#532407'),
    ('#fff8f5', '#532407'),
    ('#fff3e0', '#532407'),
    ('#ffedd5', '#532407'),
    ('#fed7aa', '#532407'),
    ('#ffccbc', '#532407'),
    ('#ffcc88', '#532407'),

    # === RED / PINK LIGHT ================================================
    ('#fef2f2', '#3d1212'),
    ('#fee2e2', '#3d1212'),
    ('#fff5f5', '#3d1212'),
    ('#fff8f8', '#3d1212'),
    ('#fff0f0', '#3d1212'),
    ('#fff1f2', '#3d1212'),
    ('#ffe4e6', '#3d1212'),
    ('#ffebee', '#3d1212'),
    ('#ffe3e3', '#3d1212'),
    ('#ffe8e8', '#3d1212'),
    ('#fce7f3', '#4a1040'),
    ('#fce4ec', '#4a1040'),
    ('#fdf2f8', '#4a1040'),
    ('#fecdd3', '#7f1d1d'),
    ('#fed7d7', '#7f1d1d'),
    ('#ffd8d8', '#7f1d1d'),
    ('#ffc9c9', '#7f1d1d'),
    ('#ffcdd2', '#7f1d1d'),
    ('#f8bbd9', '#4a1040'),
    ('#f9a8d4', '#4a1040'),
    ('#fca5a5', '#7f1d1d'),
    ('#feb2b2', '#7f1d1d'),
    ('#ffa8a8', '#7f1d1d'),

    # === GRAY / NEUTRAL ==================================================
    ('#f1f5f9', '#1e293b'),
    ('#e0e0e0', '#1e293b'),
    ('#e2e8f0', '#1e293b'),
    ('#e5e7eb', '#1e293b'),
    ('#e8e8e8', '#1e293b'),
    ('#e9ecef', '#1e293b'),
    ('#ecf0f1', '#1e293b'),
    ('#edf2f7', '#1e293b'),
    ('#dee2e6', '#1e293b'),
    ('#ced4da', '#1e293b'),
    ('#d1d5db', '#1e293b'),
    ('#cccccc', '#1e293b'),
    ('#cbd5e1', '#1e293b'),
    ('#cbd5e0', '#1e293b'),
    ('#bdc3c7', '#1e293b'),
    ('#c0c0c0', '#1e293b'),
    ('#adb5bd', '#1e293b'),
]

# Named SVG colour values (no '#')
NAMED_REPLACEMENTS = [
    ('white',  '#1e293b'),
    ('silver', '#1e293b'),
]

# Short-form hex whites (3-digit)
# NOTE: These must come AFTER longer forms to avoid substring matches.
# They are handled separately with exact-quote boundary regex.
SHORT_HEX = [
    ('#fff', '#1e293b'),
]

# fill-opacity updates for dark backgrounds — both quote styles
OPACITY_REPLACEMENTS = [
    ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ('fill-opacity="0.08"', 'fill-opacity="0.4"'),
    ('fill-opacity="0.10"', 'fill-opacity="0.4"'),
    ('fill-opacity="0.1"',  'fill-opacity="0.4"'),
    ("fill-opacity='0.12'", "fill-opacity='0.5'"),
    ("fill-opacity='0.08'", "fill-opacity='0.4'"),
    ("fill-opacity='0.10'", "fill-opacity='0.4'"),
    ("fill-opacity='0.1'",  "fill-opacity='0.4'"),
]

# ---------------------------------------------------------------------------

def build_patterns(hex_val: str, dark_val: str):
    """Return list of (pattern, replacement) for both quote styles, case-insensitive."""
    esc = re.escape(hex_val)
    return [
        # double quotes
        (re.compile(f'fill="{esc}"', re.IGNORECASE), f'fill="{dark_val}"'),
        # single quotes
        (re.compile(f"fill='{esc}'", re.IGNORECASE), f"fill='{dark_val}'"),
    ]


def fix_file(filepath: str, patterns, named_patterns, short_patterns, opacity_pairs) -> int:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    total = 0

    # Apply hex patterns (case-insensitive regex)
    for pat, repl in patterns:
        new_content, n = pat.subn(repl, content)
        if n:
            content = new_content
            total += n

    # Apply named colours (exact string, both quote styles)
    for name, dark in named_patterns:
        for q in ('"', "'"):
            old = f'fill={q}{name}{q}'
            new = f'fill={q}{dark}{q}'
            n = content.count(old)
            if n:
                content = content.replace(old, new)
                total += n

    # Apply short hex whites (exact match, both quote styles)
    # Use word-boundary to avoid #ffffff -> #1e293b followed by more hex digits
    for short, dark in short_patterns:
        for q in ('"', "'"):
            # match fill="#fff" but NOT fill="#fff0f0" etc.
            pat = re.compile(f'fill={re.escape(q)}{re.escape(short)}{re.escape(q)}', re.IGNORECASE)
            new_content, n = pat.subn(f'fill={q}{dark}{q}', content)
            if n:
                content = new_content
                total += n

    # Apply opacity replacements (simple string)
    for old, new in opacity_pairs:
        n = content.count(old)
        if n:
            content = content.replace(old, new)
            total += n

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

    # Pre-compile regex patterns
    patterns = []
    for old, new in HEX_REPLACEMENTS:
        patterns.extend(build_patterns(old, new))

    files_changed = 0
    total_replacements = 0
    subject_stats: dict[str, int] = {}

    for root, _dirs, files in os.walk(base):
        for fname in files:
            if not fname.endswith('.js'):
                continue
            fpath = os.path.join(root, fname)
            n = fix_file(fpath, patterns, NAMED_REPLACEMENTS, SHORT_HEX, OPACITY_REPLACEMENTS)
            if n:
                files_changed += 1
                total_replacements += n
                subject = os.path.relpath(root, base)
                subject_stats[subject] = subject_stats.get(subject, 0) + n

    print(f'\n=== fix_all_svg_colors_v2.py complete ===')
    print(f'Files modified     : {files_changed}')
    print(f'Total replacements : {total_replacements}')
    if subject_stats:
        print('\nPer-subject breakdown:')
        for subj, n in sorted(subject_stats.items()):
            print(f'  {subj:<36} {n:>6} replacements')
    else:
        print('No changes needed — all files already fixed.')


if __name__ == '__main__':
    main()
