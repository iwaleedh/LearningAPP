import os
import json
import re

with open("env_bio.txt", "r") as f:
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
    "17_1": {"start": "\nEvidence for Climate Change\n", "end": "\nAnthropogenic Climate Change\n"},
    "17_2": {"start": "\nAnthropogenic Climate Change\n", "end": "\nCarbon Cycle & Environmental Management\n"},
    "15": {"start": "\nCarbon Cycle & Environmental Management\n", "end": "\nModels for Predicting Climate Change\n"},
    "18_1": {"start": "\nModels for Predicting Climate Change\n", "end": "\nHow Climate Change Affects Species\n"},
    "18_2": {"start": "\nHow Climate Change Affects Species\n", "end": "\nThe Effect of Temperature on Enzyme Reactions\n"},
    "21": {"start": "\nThe Effect of Temperature on Enzyme Reactions\n", "end": "\nCore Practical 12: Effect of Temperature on Development\n"},
    "22": {"start": "\nCore Practical 12: Effect of Temperature on Development\n", "end": "\nMutation, Natural Selection & Evolution\n"},
    "23": {"start": "\nMutation, Natural Selection & Evolution\n", "end": "\nIsolation & Speciation\n"},
    "24": {"start": "\nIsolation & Speciation\n", "end": "\nContentious Issues in Environmental Science\n"},
    "25": {"start": "\nContentious Issues in Environmental Science\n", "end": "\nExamples of Sustainable Conservation\n"},
    "26": {"start": "\nExamples of Sustainable Conservation\n", "end": None}
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

blocks_17 = generate_blocks(sections["17_1"]) + generate_blocks(sections["17_2"])
blocks_15 = generate_blocks(sections["15"])
blocks_18 = generate_blocks(sections["18_1"]) + generate_blocks(sections["18_2"])
blocks_21 = generate_blocks(sections["21"])
blocks_22 = generate_blocks(sections["22"])
blocks_23 = generate_blocks(sections["23"])
blocks_24 = generate_blocks(sections["24"])
blocks_25 = generate_blocks(sections["25"])
blocks_26 = generate_blocks(sections["26"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_4_5_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_4_5_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(17, blocks_17)
save_note(15, blocks_15)
save_note(18, blocks_18)
save_note(21, blocks_21)
save_note(22, blocks_22)
save_note(23, blocks_23)
save_note(24, blocks_24)
save_note(25, blocks_25)
save_note(26, blocks_26)

print("Saved notes 4_5_15-26")
