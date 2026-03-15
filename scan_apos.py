import glob, re

for path in sorted(glob.glob('src/data/seedNotes/mathematics/note_2_*.js')):
    with open(path, encoding='utf-8') as f:
        c = f.read()
    # Find unescaped letter'letter (contractions, possessives) not preceded by backslash
    matches = list(re.finditer(r"(?<!\\)[a-zA-Z]'[a-zA-Z]", c))
    if matches:
        print(f'{path}:')
        for m in matches:
            ctx = c[max(0,m.start()-20):m.start()+25]
            print(f'  pos={m.start()}: {repr(ctx)}')
