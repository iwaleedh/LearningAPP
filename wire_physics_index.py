#!/usr/bin/env python3
"""Wire Units 2-6 olevel_physics notes into seedNotes/index.js"""

INDEX_PATH = 'src/data/seedNotes/index.js'

# Build list of (unit, topic, subtopic) for Units 2-6
notes = []

# Unit 2: Thermal Physics
for t, s_max in [(1, 6), (2, 5), (3, 6)]:
    for s in range(s_max):
        notes.append((2, t, s))

# Unit 3: Waves
for t, s_max in [(1, 5), (2, 8), (3, 5), (4, 4)]:
    for s in range(s_max):
        notes.append((3, t, s))

# Unit 4: Electricity and Magnetism
for t, s_max in [(1, 3), (2, 9), (3, 10), (4, 9)]:
    for s in range(s_max):
        notes.append((4, t, s))

# Unit 5: Nuclear Physics
for t, s_max in [(1, 7), (2, 4)]:
    for s in range(s_max):
        notes.append((5, t, s))

# Unit 6: Space Physics
for t, s_max in [(1, 7), (2, 7)]:
    for s in range(s_max):
        notes.append((6, t, s))

print(f'Notes to wire: {len(notes)}')

# Build import lines
import_lines = []
for (u, t, s) in notes:
    name = f'note_olevel_physics_{u}_{t}_{s}'
    import_lines.append(f"import {{ {name} }} from './olevel_physics/{name}.js';\n")

# Build map entry lines
map_lines = []
for (u, t, s) in notes:
    name = f'note_olevel_physics_{u}_{t}_{s}'
    key = f'olevel_physics:{u}:{t}:{s}'
    map_lines.append(f"  '{key}': {name},\n")

# Read the file
with open(INDEX_PATH, 'r') as f:
    lines = f.readlines()

# Find last Unit 1 physics import line index (0-based)
import_anchor_idx = None
for i, line in enumerate(lines):
    if "note_olevel_physics_1_9_1 } from './olevel_physics/note_olevel_physics_1_9_1.js'" in line:
        import_anchor_idx = i
        break

if import_anchor_idx is None:
    print('ERROR: Could not find import anchor!')
    exit(1)

print(f'Import anchor at line {import_anchor_idx + 1}')

# Find last Unit 1 physics map entry (0-based)
map_anchor_idx = None
for i, line in enumerate(lines):
    if "'olevel_physics:1:9:1': note_olevel_physics_1_9_1," in line:
        map_anchor_idx = i
        break

if map_anchor_idx is None:
    print('ERROR: Could not find map anchor!')
    exit(1)

print(f'Map anchor at line {map_anchor_idx + 1}')

# Insert imports AFTER the anchor line (at import_anchor_idx + 1)
lines = lines[:import_anchor_idx + 1] + import_lines + lines[import_anchor_idx + 1:]

# Recalculate map_anchor_idx after inserting imports
map_anchor_idx += len(import_lines)

# Insert map entries AFTER the map anchor line
lines = lines[:map_anchor_idx + 1] + map_lines + lines[map_anchor_idx + 1:]

# Write back
with open(INDEX_PATH, 'w') as f:
    f.writelines(lines)

# Verify
with open(INDEX_PATH, 'r') as f:
    final_lines = f.readlines()

total_physics = sum(1 for l in final_lines if 'olevel_physics' in l)
print(f'Done. Total lines: {len(final_lines)}, olevel_physics references: {total_physics}')
print(f'Expected: {80 + len(notes) * 2} references (80 Unit1 + {len(notes)} imports + {len(notes)} map entries)')
