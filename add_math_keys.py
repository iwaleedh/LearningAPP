import re

with open("src/data/seedNotes/index.js", "r") as f:
    content = f.read()

imports = re.findall(r"import \{ (note_mathematics_\d+_\d+_\d+) \} from '\./mathematics/.*?;", content)

new_keys = []
for imp in imports:
    parts = imp.split('_')
    key = f"'mathematics:{parts[2]}:{parts[3]}:{parts[4]}': {imp},"
    if key not in content:
        new_keys.append(key)

if new_keys:
    idx = content.find("export const seedNotes = {") + len("export const seedNotes = {\n")
    new_content = content[:idx] + "    " + "\n    ".join(new_keys) + "\n" + content[idx:]
    with open("src/data/seedNotes/index.js", "w") as f:
        f.write(new_content)
    print(f"Added {len(new_keys)} missing mathematics keys.")
else:
    print("All keys are already present.")
