import re
for i in range(14):
    filename = f"src/data/seedNotes/biology/note_2_3_{i}.js"
    try:
        with open(filename, "r") as f:
            content = f.read()
            m = re.search(r'"type":\s*"objective",\s*"data":\s*\{\s*"text":\s*"([^"]+)"', content)
            if m:
                print(f"{i}: {m.group(1)}")
            else:
                print(f"{i}: NOT FOUND")
    except:
        pass
