import re, os
for i in range(6):
    f = f"src/data/seedNotes/biology/note_6_6A_{i}.js"
    if os.path.exists(f):
        c = open(f).read()
        m = re.search(r"type:\s*['\"]heading['\"],\s*data:\s*\{[^}]*text:\s*['\"](.*?)['\"]", c, re.DOTALL)
        print(f, m.group(1) if m else None)
