"""
convert_paragraphs.py
Converts all `type: 'paragraph'` blocks in physics seed notes
to `type: 'list'` blocks with sentence-level bullet items.
"""
import glob
import re


def split_text_to_items(text):
    """Split paragraph text into sentence-level list items."""
    # If text contains HTML tags, keep as single item (too risky to split)
    if '<' in text:
        return [text]

    # Protect common abbreviations so they don't get split
    protected = text
    for abbr in ['e.g', 'i.e', 'etc', 'Fig', 'vs', 'No', 'Dr', 'Mr', 'Mrs', 'Prof',
                 'Eq', 'approx', 'Approx', 'vol', 'Vol', 'Jan', 'Feb', 'Mar', 'Apr',
                 'Oct', 'Nov', 'Dec', 'Ref', 'ref']:
        protected = re.sub(r'\b' + re.escape(abbr) + r'\. ', abbr + '<<DOT>> ', protected)

    # Protect decimal numbers and numbered steps like "Step 1. Do this"
    protected = re.sub(r'(\d)\. (\d)', r'\1<<DOT>> \2', protected)

    # Split on ". " before a Capital letter or "(" (numbered points like "(1) ...")
    # but not splitting after common inline patterns
    sentences = re.split(r'\. (?=[A-Z(])', protected)

    # Restore abbreviation placeholders
    sentences = [s.replace('<<DOT>>', '.') for s in sentences]

    items = []
    for s in sentences:
        s = s.strip()
        if not s:
            continue
        # Add period if final char is not punctuation
        if s and s[-1] not in '.!?:>)°²³⁴⁵⁶⁷⁸⁹':
            s += '.'
        items.append(s)

    return items if items else [text]


def convert_file_content(content):
    """Convert all paragraph blocks to list blocks in a file content string."""
    # Match paragraph blocks in all format variants:
    # 1. { id: 'ID', type: 'paragraph', data: { text: "TEXT" } }
    # 2. { id: 'ID', type: 'paragraph', data: { text: "TEXT" }, terms: [] }
    # 3. { id: 'ID', type: 'paragraph', terms: [], data: { text: "TEXT" } }
    # 4. { id: 'ID', type: 'paragraph', data: { text: "TEXT", terms: [] } }
    # TEXT can be double-quoted or single-quoted
    pattern = re.compile(
        r"\{ id: '([^']+)', type: 'paragraph', "
        r"(?:[a-zA-Z_]+:\s*(?:\[\]|\{\}),\s*)*"              # optional leading block fields
        r"data: \{ text: "
        r"(\"(?:[^\"\\]|\\.)*\"|'(?:[^'\\]|\\.)*')"          # text value (captured)
        r"(?:,\s*[a-zA-Z_]+:\s*(?:\[\]|\{\}|[^,}\]]+))*"    # optional fields inside data
        r" \}"                                                  # close data object
        r"(?:,\s*[a-zA-Z_]+:\s*(?:\[\]|\{\}|[^,}\]]+))*"    # optional trailing block fields
        r" \}"                                                  # close block object
    )

    def repl(m):
        block_id = m.group(1)
        quoted_text = m.group(2)   # includes surrounding quote chars
        quote_char = quoted_text[0]
        inner_text = quoted_text[1:-1]  # strip outer quote chars

        # Only do sentence splitting for double-quoted plain text
        if quote_char == '"':
            items = split_text_to_items(inner_text)
        else:
            items = [inner_text]

        if len(items) == 1:
            # Single item — compact representation, preserve original quoting
            return (f"{{ id: '{block_id}', type: 'list', data: {{ style: 'bullet', "
                    f"items: [{{ text: {quoted_text} }}] }} }}")

        # Multiple items — use double quotes for each item
        # (items are substrings of the double-quoted original, so safe)
        items_js = ',\n      '.join(f'{{ text: "{item}" }}' for item in items)
        return (f"{{ id: '{block_id}', type: 'list', data: {{ style: 'bullet', items: [\n"
                f"      {items_js}\n    ] }} }}")

    return pattern.sub(repl, content)


def main():
    files = sorted(glob.glob('src/data/seedNotes/physics/note_physics_*.js'))
    total_converted = 0
    unchanged = []

    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            original = f.read()

        para_count = original.count("type: 'paragraph'")
        if para_count == 0:
            continue

        modified = convert_file_content(original)
        remaining = modified.count("type: 'paragraph'")
        converted = para_count - remaining
        total_converted += converted

        if converted > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(modified)
            status = "✓" if remaining == 0 else "⚠"
            print(f"{status} {filepath.split('/')[-1]}: "
                  f"converted {converted}/{para_count}  (remain: {remaining})")
        else:
            unchanged.append((filepath.split('/')[-1], para_count))
            print(f"✗ {filepath.split('/')[-1]}: UNCHANGED ({para_count} paragraphs)")

    print(f"\nTotal paragraph blocks converted: {total_converted}")

    if unchanged:
        print(f"\nFiles with unmatched paragraphs (need manual fix):")
        for name, count in unchanged:
            print(f"  {name}: {count}")
    else:
        print("All paragraph blocks converted successfully!")


if __name__ == '__main__':
    main()
