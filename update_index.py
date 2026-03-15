import os
import re

index_path = "src/data/seedNotes/index.js"

with open(index_path, "r") as f:
    text = f.read()

# Remove all existing mathematics imports and map entries (if any)
# Luckily, let's just parse all files in src/data/seedNotes/mathematics and append them.
math_files = []
for file in os.listdir("src/data/seedNotes/mathematics"):
    if file.endswith(".js"):
        math_files.append(file)

math_files = sorted(math_files, key=lambda x: [int(part) for part in x.replace("note_", "").replace(".js", "").split("_")])

imports_to_add = []
map_entries_to_add = []

for file in math_files:
    # file is note_1_1_0.js
    u, t, s = file.replace("note_", "").replace(".js", "").split("_")
    var_name = f"note_mathematics_{u}_{t}_{s}"
    imports_to_add.append(f"import {{ {var_name} }} from './mathematics/{file}';")
    map_entries_to_add.append(f"    'mathematics:{u}:{t}:{s}': {var_name},")

# Find where to inject imports
import_block = "\n".join(imports_to_add)

# Find export const seedNotes = {
# We will just write a new file if needed, or better, use regex.
import_idx = text.find("export const seedNotes = {")

new_text = import_block + "\n" + text[:import_idx] + text[import_idx:].replace("export const seedNotes = {\n", "export const seedNotes = {\n" + "\n".join(map_entries_to_add) + "\n")

# Wait, text has existing imports. I can just append my imports at the top before `export const seedNotes`
with open(index_path, "w") as f:
    f.write(new_text)

