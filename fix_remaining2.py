"""
Fix remaining apostrophe issues using direct position-based replacement.
"""

# 1. note_2_4_3.js: bad \' at first occurrence
path = 'src/data/seedNotes/mathematics/note_2_4_3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()
# Find the '\' sequence and check what follows it
pos = 0
fixed = 0
while True:
    p = c.find("\\'", pos)
    if p == -1:
        break
    ctx = c[max(0,p-20):p+30]
    print(f"  note_2_4_3 pos={p}: {repr(ctx)}")
    pos = p + 2

# Fix: just remove the \ (keep the ')
# The bad one is followed by spaces (not by letter-paren like f\'()
# Find pattern: \' followed by non-letter-non-paren
import re
def fix_bad_backslash(s):
    # Remove backslash from \' where the ' is followed by spaces (opening string value)
    result = re.sub(r"\\' {2,}", lambda m: "'" + " " * (len(m.group(0)) - 2), s)
    return result

new_c = fix_bad_backslash(c)
if new_c != c:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_c)
    print("Fixed note_2_4_3.js")
else:
    print("note_2_4_3.js unchanged")

print()

# 2. note_2_7_0.js: 'f\'(x)\', — had double-escaping, check current state
path = 'src/data/seedNotes/mathematics/note_2_7_0.js'
with open(path, encoding='utf-8') as f:
    c = f.read()
pos = 0
while True:
    p = c.find("\\'", pos)
    if p == -1:
        break
    ctx = c[max(0,p-20):p+20]
    print(f"  note_2_7_0 pos={p}: {repr(ctx)}")
    pos = p + 2

print()

# 3. note_2_7_2.js: check remaining \' to find any unescaped (uv)' and vu'
path = 'src/data/seedNotes/mathematics/note_2_7_2.js'
with open(path, encoding='utf-8') as f:
    c = f.read()
pos = 0
while True:
    p = c.find("\\'", pos)
    if p == -1:
        break
    ctx = c[max(0,p-20):p+20]
    print(f"  note_2_7_2 pos={p}: {repr(ctx)}")
    pos = p + 2

# Also check unescaped primes
unescaped = [(m.start(), c[max(0,m.start()-10):m.start()+10]) 
             for m in re.finditer(r"(?<!\\)\)(')(?!\()", c)]
print(f"  Unescaped )' in note_2_7_2: {len(unescaped)}")
for pos2, ctx in unescaped:
    print(f"    pos={pos2}: {repr(ctx)}")

# Escape (uv)' where it's in text (not closing a string)
# Strategy: replace )' = with )\' = 
c2 = re.sub(r"\)' ", ")\\' ", c)
# Also vu' + -> vu\' +
c2 = re.sub(r"vu' ", "vu\\' ", c2)
c2 = re.sub(r"vu''", "vu\\''", c2)  # vu'' = (vu' then ') = vu\'' 
if c2 != c:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c2)
    print("Fixed note_2_7_2.js")
else:
    print("note_2_7_2.js unchanged")

print()

# 4. note_2_7_3.js: check unescaped primes
path = 'src/data/seedNotes/mathematics/note_2_7_3.js'
with open(path, encoding='utf-8') as f:
    c = f.read()
pos = 0
print("note_2_7_3 remaining:") 
while True:
    p = c.find("\\'", pos)
    if p == -1:
        break
    ctx = c[max(0,p-20):p+20]
    print(f"  pos={p}: {repr(ctx)}")
    pos = p + 2

# Also check for unescaped primes: )' and uv'
for match_str in [")' ", "uv')"]:
    idx = 0
    while True:
        p = c.find(match_str, idx)
        if p == -1:
            break
        ctx = c[max(0,p-10):p+15]
        print(f"  UNESCAPED {repr(match_str)} at pos={p}: {repr(ctx)}")
        idx = p + 1

# Fix
c2 = c.replace(")' =", ")\\' =")
c2 = c2.replace("uv')", "uv\\')")
if c2 != c:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c2)
    print("Fixed note_2_7_3.js")
else:
    print("note_2_7_3.js unchanged")

print()

# 5. note_2_8_5.js: check remaining \'
path = 'src/data/seedNotes/mathematics/note_2_8_5.js'
with open(path, encoding='utf-8') as f:
    c = f.read()
pos = 0
print("note_2_8_5 remaining:")
while True:
    p = c.find("\\'", pos)
    if p == -1:
        break
    ctx = c[max(0,p-20):p+20]
    print(f"  pos={p}: {repr(ctx)}")
    pos = p + 2

# Fix concavity\', (bad closing quote before comma)
c2 = c.replace("concavity\\',", "concavity',")
# Also check for other bad closing quotes before , (not followed by \n since that was already done)
if c2 != c:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c2)
    print("Fixed note_2_8_5.js concavity")
else:
    print("note_2_8_5.js concavity unchanged")
