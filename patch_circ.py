import os
import json
import re

with open("circ.txt", "r") as f:
    text = f.read()

def get_section(start_str, end_str=None):
    start = text.find(start_str, 50)
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
    "6_1": {"start": "\nThe Need for a Circulatory System\n", "end": "\nBlood Vessels: Structure & Function\n"},
    "6_2": {"start": "\nBlood Vessels: Structure & Function\n", "end": "\nThe Cardiac Cycle\n"},
    "5": {"start": "\nThe Cardiac Cycle\n", "end": "\nThe Role of Haemoglobin\n"},
    "7": {"start": "\nThe Role of Haemoglobin\n", "end": "\nAtherosclerosis\n"},
    "8_1": {"start": "\nAtherosclerosis\n", "end": "\nBlood Clotting\n"},
    "8_2": {"start": "\nBlood Clotting\n", "end": None}
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

blocks_6 = generate_blocks(sections["6_1"]) + generate_blocks(sections["6_2"])
blocks_5 = generate_blocks(sections["5"])
blocks_7 = generate_blocks(sections["7"])
blocks_8 = generate_blocks(sections["8_1"]) + generate_blocks(sections["8_2"])


def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_1_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_1_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(6, blocks_6)
save_note(5, blocks_5)
save_note(7, blocks_7)
save_note(8, blocks_8)

print("Saved notes 1_1_5, 1_1_6, 1_1_7, 1_1_8")
