"""Fix surrogate-pair Unicode escapes in inject_presentation_slides2.py."""
import re

def fix_surrogates(path):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()

    def replace_pair(m):
        high = int(m.group(1), 16)
        low  = int(m.group(2), 16)
        if 0xD800 <= high <= 0xDBFF and 0xDC00 <= low <= 0xDFFF:
            cp = 0x10000 + (high - 0xD800) * 0x400 + (low - 0xDC00)
            return f'\\U{cp:08X}'
        return m.group(0)

    fixed = re.sub(
        r'\\u([Dd][89AaBb][0-9A-Fa-f]{2})\\u([Dd][C-Fc-f][0-9A-Fa-f]{2})',
        replace_pair,
        src
    )

    changed = src != fixed
    print(f"Changes made: {changed}")
    if changed:
        pairs_found = re.findall(
            r'\\u([Dd][89AaBb][0-9A-Fa-f]{2})\\u([Dd][C-Fc-f][0-9A-Fa-f]{2})',
            src
        )
        print(f"Surrogate pairs replaced: {len(pairs_found)}")
        with open(path, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print("Written successfully.")
    else:
        print("No surrogate pairs found - file unchanged.")

fix_surrogates('inject_presentation_slides2.py')
