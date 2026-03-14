import os
import json
import re

with open("bio_molecules.txt", "r") as f:
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
    "0": {"start": "\nThe Importance of Water", "end": "\nSaccharides\n"},
    "1_1": {"start": "\nSaccharides\n", "end": "\nCore Practical 1: Estimating the Concentration"},
    "11": {"start": "\nCore Practical 1: Estimating the Concentration", "end": "\nCondensation & Hydrolysis\n"},
    "1_2": {"start": "\nCondensation & Hydrolysis\n", "end": "\nTriglycerides & Ester Bonds\n"},
    "2": {"start": "\nTriglycerides & Ester Bonds\n", "end": None}
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

blocks_0 = generate_blocks(sections["0"])
blocks_1 = generate_blocks(sections["1_1"]) + generate_blocks(sections["1_2"])
blocks_11 = generate_blocks(sections["11"])
blocks_2 = generate_blocks(sections["2"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_1_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_1_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(0, blocks_0)
save_note(1, blocks_1)
save_note(11, blocks_11)
save_note(2, blocks_2)

print("Saved notes 1_1_0, 1_1_1, 1_1_11, 1_1_2")
