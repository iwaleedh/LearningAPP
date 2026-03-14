import os
import json
import re

with open("bact.txt", "r") as f:
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
    "5_1": {"start": "\nBacterial Growth Conditions\n", "end": "\nPlant Products with Antimicrobial Properties\n"},
    "5_2": {"start": "\nPlant Products with Antimicrobial Properties\n", "end": "\nCore Practical 9: Antimicrobial Properties of Plants\n"},
    "15": {"start": "\nCore Practical 9: Antimicrobial Properties of Plants\n", "end": "\nDevelopment of Drugs & Drug Testing\n"},
    "5_3": {"start": "\nDevelopment of Drugs & Drug Testing\n", "end": None}
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

blocks_5 = generate_blocks(sections["5_1"]) + generate_blocks(sections["5_2"]) + generate_blocks(sections["5_3"])
blocks_15 = generate_blocks(sections["15"])


def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_4_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_4_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(5, blocks_5)
save_note(15, blocks_15)

print("Saved notes 1_4_5, 1_4_15")
