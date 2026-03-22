import glob, os, json
js_files = glob.glob('src/data/seedNotes/biology/note_*.js')
empty_count = 0
for jf in js_files:
    fname = os.path.basename(jf)
    with open(jf, 'r') as f:
        c = f.read()
    if "'text': ''" in c:
        print(f"Empty text found in: {fname}")
        empty_count += 1
print(f"Total with empty text: {empty_count}")
