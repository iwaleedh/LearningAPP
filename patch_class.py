import os
import json
import re

with open("classification.txt", "r") as f:
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
    "6_1": {"start": "\nThe Three Domains of Life\n", "end": "\nThe Variety of Life\n"},
    "6_2": {"start": "\nThe Variety of Life\n", "end": "\nBiodiversity & Endemism\n"},
    "7": {"start": "\nBiodiversity & Endemism\n", "end": "\nSpecies Richness & Heterozygosity Index\n"},
    "8_1": {"start": "\nSpecies Richness & Heterozygosity Index\n", "end": "\nIndex of Biodiversity\n"},
    "8_2": {"start": "\nIndex of Biodiversity\n", "end": "\nEcological Niches & Adaptations\n"},
    "9": {"start": "\nEcological Niches & Adaptations\n", "end": "\nHardy-Weinberg Equation\n"},
    "11": {"start": "\nHardy-Weinberg Equation\n", "end": "\nRoles of Seed Banks & Zoos in Conservation\n"},
    "12": {"start": "\nRoles of Seed Banks & Zoos in Conservation\n", "end": None}
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
blocks_7 = generate_blocks(sections["7"])
blocks_8 = generate_blocks(sections["8_1"]) + generate_blocks(sections["8_2"])
blocks_9 = generate_blocks(sections["9"])
blocks_11 = generate_blocks(sections["11"])
blocks_12 = generate_blocks(sections["12"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_4_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_4_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(6, blocks_6)
save_note(7, blocks_7)
save_note(8, blocks_8)
save_note(9, blocks_9)
save_note(11, blocks_11)
save_note(12, blocks_12)

print("Saved notes 1_4_6, 1_4_7, 1_4_8, 1_4_9, 1_4_11, 1_4_12")
