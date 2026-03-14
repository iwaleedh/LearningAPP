import os
import json
import re

with open("resp.txt", "r") as f:
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
    "0": {"start": "\nOverview of Respiration\n", "end": "\nGlycolysis\n"},
    "1": {"start": "\nGlycolysis\n", "end": "\nLink Reaction & Krebs Cycle\n"},
    "2": {"start": "\nLink Reaction & Krebs Cycle\n", "end": "\nThe Electron Transport Chain\n"},
    "4": {"start": "\nThe Electron Transport Chain\n", "end": "\nAnaerobic Respiration\n"},
    "5": {"start": "\nAnaerobic Respiration\n", "end": "\nRespiratory Quotient\n"},
    "6": {"start": "\nRespiratory Quotient\n", "end": "\nCore Practical 15: Investigation of Respiration in Yeast\n"},
    "7_1": {"start": "\nCore Practical 15: Investigation of Respiration in Yeast\n", "end": "\nCore Practical 16: Respirometer to Calculate RQ\n"},
    "7_2": {"start": "\nCore Practical 16: Respirometer to Calculate RQ\n", "end": None}
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
blocks_1 = generate_blocks(sections["1"])
blocks_2 = generate_blocks(sections["2"])
blocks_4 = generate_blocks(sections["4"])
blocks_5 = generate_blocks(sections["5"])
blocks_6 = generate_blocks(sections["6"])
blocks_7 = generate_blocks(sections["7_1"]) + generate_blocks(sections["7_2"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_5_7_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_5_7_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(0, blocks_0)
save_note(1, blocks_1)
save_note(2, blocks_2)
save_note(4, blocks_4)
save_note(5, blocks_5)
save_note(6, blocks_6)
save_note(7, blocks_7)

print("Saved notes 5_7_0-7")
