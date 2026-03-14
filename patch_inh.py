import os
import json
import re

with open("inheritance.txt", "r") as f:
    text = f.read()

def get_section(start_str, end_str=None):
    start = text.find(start_str)
    if start == -1:
        print(f"Failed to find {start_str}")
        return ""
    if end_str:
        end = text.find(end_str, start)
        if end == -1:
            end = len(text)
    else:
        end = len(text)
    return text[start:end].strip()

bounds = {
    "14_append": {"start": "\nMutations\n", "end": "\nPatterns of Inheritance & Sex Linkage\n"},
    "16": {"start": "\nPatterns of Inheritance & Sex Linkage\n", "end": "\nCystic Fibrosis\n"},
    "15_1": {"start": "\nCystic Fibrosis\n", "end": "\nGenetic Screening\n"},
    "15_2": {"start": "\nGenetic Screening\n", "end": "\nEthical & Social Issues of Genetic Screening\n"},
    "15_3": {"start": "\nEthical & Social Issues of Genetic Screening\n", "end": None}
}

def generate_blocks(text_content):
    blocks = []
    lines = [L.strip() for L in text_content.split("\n") if L.strip() and L.strip() != "--"]
    
    current_paragraph = []
    
    for line in lines:
        if len(line) < 60 and not line.endswith('.') and not line.endswith(',') and not line.startswith('•') and not line.startswith('-'):
            if current_paragraph:
                blocks.append({
                    "id": f"p-{len(blocks)}",
                    "type": "paragraph",
                    "data": {"text": " ".join(current_paragraph)}
                })
                current_paragraph = []
            
            blocks.append({
                "id": f"h-{len(blocks)}",
                "type": "heading",
                "data": {"text": line, "level": 3}
            })
        else:
            current_paragraph.append(line)
            
    if current_paragraph:
        blocks.append({
            "id": f"p-{len(blocks)}",
            "type": "paragraph",
            "data": {"text": " ".join(current_paragraph)}
        })
        
    return blocks

sections = {}
for k, v in bounds.items():
    sections[k] = get_section(v["start"], v["end"])

blocks_14_app = generate_blocks(sections["14_append"])
blocks_16 = generate_blocks(sections["16"])
blocks_15 = generate_blocks(sections["15_1"]) + generate_blocks(sections["15_2"]) + generate_blocks(sections["15_3"])


# Subtopic 14 read existing
with open("src/data/seedNotes/biology/note_1_2_14.js", "r") as f:
    old_content = f.read()
    
# Extract JSON representation
json_match = re.search(r"=\s*(\{.*?\});\n", old_content, flags=re.DOTALL)
if json_match:
    obj_14 = json.loads(json_match.group(1))
    obj_14["blocks"].extend(blocks_14_app)
else:
    obj_14 = {
        "blocks": blocks_14_app,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }

js_content = f"export const note_biology_1_2_14 = {json.dumps(obj_14, indent=2)};\n"
with open("src/data/seedNotes/biology/note_1_2_14.js", "w") as f:
    f.write(js_content)

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_2_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_2_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(16, blocks_16)
save_note(15, blocks_15)

print("Saved notes 1_2_14 (appended), 1_2_16, 1_2_15")
