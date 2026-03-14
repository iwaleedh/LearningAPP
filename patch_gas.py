import os
import json
import re

with open("gas.txt", "r") as f:
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
    "0": {"start": "\nProperties of Gas Exchange Surfaces\n", "end": "\nCell Membranes\n"},
    "3": {"start": "\nCell Membranes\n", "end": "\nCore Practical 3: Investigating"},
    "17": {"start": "\nCore Practical 3: Investigating", "end": "\nOsmosis\n"},
    "4": {"start": "\nOsmosis\n", "end": "\nDiffusion, Facilitated Diffusion"},
    "5": {"start": "\nDiffusion, Facilitated Diffusion", "end": None}
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
blocks_3 = generate_blocks(sections["3"])
blocks_17 = generate_blocks(sections["17"])
blocks_4 = generate_blocks(sections["4"])
blocks_5 = generate_blocks(sections["5"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_2_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_2_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(0, blocks_0)
save_note(3, blocks_3)
save_note(17, blocks_17)
save_note(4, blocks_4)
save_note(5, blocks_5)

print("Saved notes 1_2_0, 1_2_3, 1_2_17, 1_2_4, 1_2_5")
