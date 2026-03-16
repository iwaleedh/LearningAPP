"""Fix paragraph blocks in existing economics seed notes (handles multiline blocks)."""
import glob
import re


def find_block_boundaries(content, type_pos):
    """Find start/end of the JS object block containing type_pos (brace counting)."""
    # Scan back from type_pos to find the block's opening `{`
    depth = 0
    start = -1
    i = type_pos
    in_str = False
    str_char = ''
    for i in range(type_pos, -1, -1):
        ch = content[i]
        if in_str:
            if ch == str_char and (i == 0 or content[i - 1] != '\\'):
                in_str = False
        else:
            if ch in ('"', "'"):
                in_str = True
                str_char = ch
            elif ch == '}':
                depth += 1
            elif ch == '{':
                if depth == 0:
                    start = i
                    break
                depth -= 1
    if start == -1:
        return None, None

    # Scan forward from start to find the matching `}`
    depth = 0
    end = -1
    in_str = False
    str_char = ''
    for j in range(start, len(content)):
        ch = content[j]
        if in_str:
            if ch == str_char and (j == 0 or content[j - 1] != '\\'):
                in_str = False
        else:
            if ch in ('"', "'"):
                in_str = True
                str_char = ch
            elif ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    end = j + 1
                    break
    if end == -1:
        return None, None
    return start, end


def fix_paragraphs(content):
    """Convert all paragraph blocks to list blocks (processes right-to-left)."""
    matches = list(re.finditer(r"type:\s*'paragraph'", content))
    for m in reversed(matches):
        start, end = find_block_boundaries(content, m.start())
        if start is None:
            continue
        block = content[start:end]

        id_m = re.search(r"id:\s*'([^']+)'", block)
        if not id_m:
            continue
        block_id = id_m.group(1)

        # Extract text value (double or single quoted)
        text_m = re.search(r'text:\s*("(?:[^"\\]|\\.)*")', block)
        if not text_m:
            text_m = re.search(r"text:\s*('(?:[^'\\]|\\.)*')", block)
        if not text_m:
            continue
        text_val = text_m.group(1)

        replacement = (
            f"{{ id: '{block_id}', type: 'list', data: "
            f"{{ style: 'bullet', items: [{{ text: {text_val} }}] }} }}"
        )
        content = content[:start] + replacement + content[end:]
    return content


files = sorted(glob.glob('src/data/seedNotes/economics/*.js'))
total_fixed = 0
for f in files:
    original = open(f).read()
    count = original.count("type: 'paragraph'")
    if not count:
        continue
    fixed = fix_paragraphs(original)
    remaining = fixed.count("type: 'paragraph'")
    open(f, 'w').write(fixed)
    total_fixed += count - remaining
    status = '✓' if remaining == 0 else f'⚠ ({remaining} remain)'
    print(f"{status} {f.split('/')[-1]}: fixed {count - remaining}/{count}")

print(f'\nTotal paragraph blocks fixed: {total_fixed}')

