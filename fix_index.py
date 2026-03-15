import re

with open("src/data/seedNotes/index.js", "r") as f:
    lines = f.readlines()

new_lines = []
imported = set()

in_map = False
map_lines = []

for line in lines:
    if line.startswith("import "):
        if line not in imported:
            imported.add(line)
            new_lines.append(line)
    elif line.startswith("export const seedNotes = {"):
        in_map = True
        map_lines.append(line)
    elif in_map:
        if line.strip().startswith("'"):
            key = line.split(":")[0].strip("'")
            # Only add if we haven't already
            if key not in imported:
                imported.add(key)
                map_lines.append(line)
        else:
            map_lines.append(line)
    else:
        new_lines.append(line)

with open("src/data/seedNotes/index.js", "w") as f:
    f.writelines(new_lines + map_lines)

