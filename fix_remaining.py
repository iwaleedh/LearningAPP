"""
Fix remaining apostrophe issues:
1. note_2_4_3.js: bad \' before Sn
2. note_2_7_0.js: double-escaped closing quote in headers
3. note_2_7_2.js: escape (uv)' and vu' primes
4. note_2_7_3.js: escape (u/v)' and uv' primes
5. note_2_8_5.js: concavity\', closed quote followed by , not \n
"""

def fix_file(path, replacements):
    with open(path, encoding='utf-8') as f:
        c = f.read()
    original = c
    for old, new in replacements:
        c = c.replace(old, new)
    if c != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Fixed: {path}")
    else:
        print(f"No changes: {path}")


# 1. note_2_4_3.js: '\' followed by spaces and Sn is a bad escape
# The \' at pos 2030 is before '      Sn = a + ...' — opening of a worked-example string
fix_file(
    'src/data/seedNotes/mathematics/note_2_4_3.js',
    [
        ("\\'      S\u2099 = a + (a+d)", "'      S\u2099 = a + (a+d)"),
    ]
)

# 2. note_2_7_0.js: 'f\'(x)\', 'Notes' — the \', after f\'(x) is bad (closing quote)
# Should be: 'f\'(x)', 'Notes'
fix_file(
    'src/data/seedNotes/mathematics/note_2_7_0.js',
    [
        ("'f\\'(x)\\',", "'f\\'(x)',"),
    ]
)

# 3. note_2_7_2.js: escape (uv)' and vu' prime notation
fix_file(
    'src/data/seedNotes/mathematics/note_2_7_2.js',
    [
        ("(uv)' =", "(uv)\\' ="),
        ("+ vu'", "+ vu\\'"),
    ]
)

# 4. note_2_7_3.js: escape (u/v)' and uv' prime notation
fix_file(
    'src/data/seedNotes/mathematics/note_2_7_3.js',
    [
        ("(u/v)' =", "(u/v)\\' ="),
        ("uv')", "uv\\')"),
    ]
)

# 5. note_2_8_5.js: concavity\', checked — the \' is the closing quote
fix_file(
    'src/data/seedNotes/mathematics/note_2_8_5.js',
    [
        ("concavity\\',", "concavity',"),
    ]
)
