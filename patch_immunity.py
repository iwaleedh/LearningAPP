import os
import json
import re

with open("immunity.txt", "r") as f:
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
    "5": {"start": "\nTuberculosis & HIV\n", "end": "\nPathogens: Routes of Entry\n"},
    "6": {"start": "\nPathogens: Routes of Entry\n", "end": "\nNon-Specific Immune Responses\n"},
    "7": {"start": "\nNon-Specific Immune Responses\n", "end": "\nSpecific Immune Responses\n"},
    "8": {"start": "\nSpecific Immune Responses\n", "end": "\nLymphocytes: Types & Roles\n"},
    "9": {"start": "\nLymphocytes: Types & Roles\n", "end": "\nDeveloping Immunity\n"},
    "10_1": {"start": "\nDeveloping Immunity\n", "end": "\nPathogens vs Hosts: An Evolutionary Race\n"},
    "10_2": {"start": "\nPathogens vs Hosts: An Evolutionary Race\n", "end": None}
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

blocks_5 = generate_blocks(sections["5"])
blocks_6 = generate_blocks(sections["6"])
blocks_7 = generate_blocks(sections["7"])
blocks_8 = generate_blocks(sections["8"])
blocks_9 = generate_blocks(sections["9"])
blocks_10 = generate_blocks(sections["10_1"]) + generate_blocks(sections["10_2"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_5_6_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_5_6_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(5, blocks_5)
save_note(6, blocks_6)
save_note(7, blocks_7)
save_note(8, blocks_8)
save_note(9, blocks_9)
save_note(10, blocks_10)

print("Saved notes 5_6_5-10")
