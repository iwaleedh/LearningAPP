import json
import os

with open("internal_env.txt", "r", encoding="utf-8") as f:
    text = f.read()

def process_text_to_blocks(subtopic_id, content, objective):
    lines = content.split('\n')
    blocks = []
    
    blocks.append({
        "id": f"obj_{subtopic_id}",
        "type": "objective",
        "data": { "text": objective }
    })
    
    current_para = []
    for line in lines:
        cleaned = line.strip()
        if not cleaned: continue
        if "Save My Exams" in cleaned or "Your notes" in cleaned or "Edexcel International A" in cleaned or "Level (IAL) Biology" in cleaned or "Table" in cleaned:
            continue
            
        if len(cleaned) < 80 and not cleaned.endswith('.') and not cleaned.endswith(',') and not cleaned.endswith(';'):
            if current_para:
                blocks.append({
                    "id": f"p_{subtopic_id}_{len(blocks)}",
                    "type": "paragraph",
                    "data": { "text": " ".join(current_para) }
                })
                current_para = []
            
            blocks.append({
                "id": f"h_{subtopic_id}_{len(blocks)}",
                "type": "heading",
                "data": { "text": cleaned, "level": 3 }
            })
        else:
            current_para.append(cleaned)
            
    if current_para:
        blocks.append({
            "id": f"p_{subtopic_id}_{len(blocks)}",
            "type": "paragraph",
            "data": { "text": " ".join(current_para) }
        })

    json_blocks = json.dumps(blocks, indent=4)
    return f"export const note_biology_5_7_{subtopic_id} = {{\n  blocks: {json_blocks}\n}};\n"

# Bound indexes:
# Negative & Positive Feedback -> 342
# Homeostasis -> 4510
# The Kidney: Structure -> 11996
# Urea as a Waste Product -> 15055
# Selective Reabsorption in the Kidney -> 18501
# Hormones in Osmoregulation -> 23901
# Control of Gene Expression -> 27981

c14 = text[342:11996]
c15 = text[11996:15055]
c16 = text[15055:23901]
c17 = text[23901:27981]
c18 = text[27981:]

os.makedirs("src/data/seedNotes/biology", exist_ok=True)

with open("src/data/seedNotes/biology/note_5_7_14.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("14", c14, "Understand homeostasis, negative feedback, and thermoregulation."))
with open("src/data/seedNotes/biology/note_5_7_15.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("15", c15, "Describe the gross structure of the kidney and the detailed structure of the nephron."))
with open("src/data/seedNotes/biology/note_5_7_16.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("16", c16, "Understand ultrafiltration in the Bowman's capsule and selective reabsorption in the PCT."))
with open("src/data/seedNotes/biology/note_5_7_17.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("17", c17, "Explain the role of the Loop of Henle, osmoreceptors, and ADH in osmoregulation."))
with open("src/data/seedNotes/biology/note_5_7_18.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("18", c18, "Understand the control of gene expression, transcription factors, and the role of hormones like peptide and steroid hormones."))
