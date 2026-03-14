import os
import json
import re

with open("proteins.txt", "r") as f:
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
    "7": {"start": "\nAmino Acids, Proteins & Protein Structure\n", "end": "\nEnzymes: Roles & Modes of Action\n"},
    "9": {"start": "\nEnzymes: Roles & Modes of Action\n", "end": "\nCore Practical 4: Investigating"},
    "18": {"start": "\nCore Practical 4: Investigating", "end": "\nNucleotides, DNA & RNA, Base Pairing\n"},
    "11": {"start": "\nNucleotides, DNA & RNA, Base Pairing\n", "end": None}
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

blocks_7 = generate_blocks(sections["7"])
blocks_9 = generate_blocks(sections["9"])
blocks_18 = generate_blocks(sections["18"])
blocks_11 = generate_blocks(sections["11"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_2_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_2_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(7, blocks_7)
save_note(9, blocks_9)
save_note(18, blocks_18)
save_note(11, blocks_11)

print("Saved notes 1_2_7, 1_2_9, 1_2_18, 1_2_11")
