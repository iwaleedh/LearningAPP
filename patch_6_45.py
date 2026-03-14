import os
import json
import re

with open("decomp.txt", "r") as f:
    decomp_text = f.read()

with open("forensics.txt", "r") as f:
    forensics_text = f.read()

def get_section(text, start_str, end_str=None):
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

bounds_f = {
    "16_1": {"start": "\nPolymerase Chain Reaction\n", "end": "\nGel Electrophoresis in Forensics\n"},
    "16_2": {"start": "\nGel Electrophoresis in Forensics\n", "end": "\nDNA Profiling\n"},
    "16_3": {"start": "\nDNA Profiling\n", "end": "\nTypes of Data Provided by Forensic Analysis\n"},
    "15": {"start": "\nTypes of Data Provided by Forensic Analysis\n", "end": None}
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

blocks_14 = generate_blocks(get_section(decomp_text, "\nThe Role of Microorganisms\n", None))

secs_f = {k: get_section(forensics_text, v["start"], v["end"]) for k,v in bounds_f.items()}

blocks_16 = generate_blocks(secs_f["16_1"]) + generate_blocks(secs_f["16_2"]) + generate_blocks(secs_f["16_3"])
blocks_15 = generate_blocks(secs_f["15"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_5_6_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_5_6_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(14, blocks_14)
save_note(15, blocks_15)
save_note(16, blocks_16)

print("Saved notes 5_6_14-16")
