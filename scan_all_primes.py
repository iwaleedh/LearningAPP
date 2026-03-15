"""Comprehensive scan for ALL unescaped apostrophes that would break JS single-quoted strings."""
import glob, re

patterns_to_check = [
    # letter'letter (contractions/possessives)
    r"(?<!\\)[a-zA-Z]'[a-zA-Z]",
    # letter'( (function prime notation like f'(x))
    r"(?<!\\)[a-zA-Z]'\(",
    # )'  (prime after closing paren like (uv)')  
    r"(?<!\\)\)'",
]

for path in sorted(glob.glob('src/data/seedNotes/mathematics/note_2_*.js')):
    with open(path, encoding='utf-8') as f:
        c = f.read()
    
    found = []
    for pat in patterns_to_check:
        for m in re.finditer(pat, c):
            ctx = c[max(0,m.start()-15):m.start()+20]
            found.append((m.start(), pat, repr(ctx)))
    
    if found:
        print(f'\n{path}:')
        for pos, pat, ctx in sorted(found):
            print(f'  pos={pos} [{pat[-5:]}]: {ctx}')
