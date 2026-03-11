import sys

file_path = 'src/data/seedNotes/chemistry/note_4_15_6.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

cues_marker = "    cues: ["
if cues_marker not in text:
    print('Failed to find cues.')
    sys.exit(1)

new_cue = """    cues: [
        { id: 'cue-oil-fat', blockId: 'callout-fats-oils', prompt: 'Why do saturated fats generally have higher melting points than unsaturated oils?' },
"""

new_text = text.replace(cues_marker, new_cue, 1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Successfully added cue.')
