import os
import json
import re

with open("repro.txt", "r") as f:
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
    "5_1": {"start": "\nGene Locus\n", "end": "\nMeiosis & Variation\n"},
    "5_2": {"start": "\nMeiosis & Variation\n", "end": "\nMammalian Gametes\n"},
    "6_1": {"start": "\nMammalian Gametes\n", "end": "\nFertilisation: Mammals\n"},
    "6_2": {"start": "\nFertilisation: Mammals\n", "end": "\nFertilisation: Flowering Plants\n"},
    "6_3": {"start": "\nFertilisation: Flowering Plants\n", "end": "\nThe Cell Cycle & Mitosis\n"},
    "4": {"start": "\nThe Cell Cycle & Mitosis\n", "end": "\nCore Practical 6: Observing the Stages of Mitosis\n"},
    "13_1": {"start": "\nCore Practical 6: Observing the Stages of Mitosis\n", "end": "\nCalculation of Mitotic Index\n"},
    "13_2": {"start": "\nCalculation of Mitotic Index\n", "end": "\nStem Cells & Cell Potency\n"},
    "7": {"start": "\nStem Cells & Cell Potency\n", "end": "\nCell Specialisation\n"},
    "10_1": {"start": "\nCell Specialisation\n", "end": "\nPost-Transcriptional Changes to mRNA\n"},
    "8": {"start": "\nPost-Transcriptional Changes to mRNA\n", "end": "\nGene Interaction & Epigenetics\n"},
    "9": {"start": "\nGene Interaction & Epigenetics\n", "end": "\nPolygenic Inheritance & Continuous Variation\n"},
    "10_2": {"start": "\nPolygenic Inheritance & Continuous Variation\n", "end": None},
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

blocks_5 = generate_blocks(sections["5_1"]) + generate_blocks(sections["5_2"])
blocks_6 = generate_blocks(sections["6_1"]) + generate_blocks(sections["6_2"]) + generate_blocks(sections["6_3"])
blocks_4 = generate_blocks(sections["4"])
blocks_13 = generate_blocks(sections["13_1"]) + generate_blocks(sections["13_2"])
blocks_7 = generate_blocks(sections["7"])
blocks_10 = generate_blocks(sections["10_1"]) + generate_blocks(sections["10_2"])
blocks_8 = generate_blocks(sections["8"])
blocks_9 = generate_blocks(sections["9"])

def save_note(subtopic_id, blocks):
    obj = {
        "blocks": blocks,
        "recall": {"enabled": False, "cues": [], "summaryText": "", "ready": False},
        "evidence": []
    }
    js_content = f"export const note_biology_1_3_{subtopic_id} = {json.dumps(obj, indent=2)};\n"
    with open(f"src/data/seedNotes/biology/note_1_3_{subtopic_id}.js", "w") as f:
        f.write(js_content)

save_note(5, blocks_5)
save_note(6, blocks_6)
save_note(4, blocks_4)
save_note(13, blocks_13)
save_note(7, blocks_7)
save_note(10, blocks_10)
save_note(8, blocks_8)
save_note(9, blocks_9)

print("Saved notes 1_3_X")
