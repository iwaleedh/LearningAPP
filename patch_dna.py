import os
import json
import re

with open("dna.txt", "r") as f:
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
    "12": {"start": "\nDNA Replication\n", "end": "\nThe Nature of the Genetic Code\n"},
    "14_1": {"start": "\nThe Nature of the Genetic Code\n", "end": "\nHow Bases Code for a Polypeptide Chain\n"},
    "14_2": {"start": "\nHow Bases Code for a Polypeptide Chain\n", "end": "\nTranscription & Translation\n"},
    "13": {"start": "\nTranscription & Translation\n", "end": None}
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

blocks_12 = generate_blocks(sections["12"])
blocks_14 = generate_blocks(sections["14_1"]) + generate_blocks(sections["14_2"])
blocks_13 = generate_blocks(sections["13"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_2_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_2_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(12, blocks_12)
save_note(14, blocks_14)
save_note(13, blocks_13)

print("Saved notes 1_2_12, 1_2_14, 1_2_13")
