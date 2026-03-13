import json
import os

with open("muscle_movement.txt", "r", encoding="utf-8") as f:
    text = f.read()

def process_text_to_blocks(subtopic_id, content, title, objective):
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

b = {
    "sys": text.find("The Musculoskeletal System\nThe Musculoskeletal System", 300),
    "fast": text.find("Fast twitch muscle fibres\nFast twitch muscle fibres", 4000),
    "sliding": text.find("The Process of Skeletal Muscle Contraction\nThe Sli", 6000),
    "cardiac": text.find("The Role of Muscle in the Cardiac Cycle\nThe Role o", 11000),
    "breath": text.find("Control of the breathing rate", 18000),
    "heart": text.find("Control of the heart rate", 22000),
    "adren": text.find("The Role of Adrenaline\nThe Fight or Flight Resp", 26000),
    "prac": text.find("Core Practical 17:", 28000)
}

print(b)

c8 = text[b["sys"]:b["fast"]]
c10 = text[b["fast"]:b["sliding"]]
c9 = text[b["sliding"]:b["cardiac"]]
c11 = text[b["cardiac"]:b["breath"]] + "\n" + text[b["heart"]:b["adren"]]
c12 = text[b["breath"]:b["heart"]]
c13 = text[b["adren"]:b["prac"]]
c21 = text[b["prac"]:]

os.makedirs("src/data/seedNotes/biology", exist_ok=True)

with open("src/data/seedNotes/biology/note_5_7_8.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("8", c8, "Muscle ultrastructure", "Understand the structure of muscle fibres, myofibrils, sarcomeres, actin, and myosin."))
with open("src/data/seedNotes/biology/note_5_7_10.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("10", c10, "Slow and fast twitch fibres", "Compare the structure and function of slow and fast twitch muscle fibres."))
with open("src/data/seedNotes/biology/note_5_7_9.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("9", c9, "Sliding filament theory", "Understand the sliding filament theory of muscle contraction including the roles of calcium, troponin, tropomyosin, and ATP."))
with open("src/data/seedNotes/biology/note_5_7_11.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("11", c11, "Cardiac output and control", "Understand myogenic heart action, SAN, AVN, and cardiac output calculation."))
with open("src/data/seedNotes/biology/note_5_7_12.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("12", c12, "Control of ventilation rate", "Describe the control of ventilation rate by the medullary centers and chemoreceptors."))
with open("src/data/seedNotes/biology/note_5_7_13.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("13", c13, "The role of adrenaline", "Explain the physiological effects of adrenaline and its action."))
with open("src/data/seedNotes/biology/note_5_7_21.js", "w", encoding="utf-8") as f:
    f.write(process_text_to_blocks("21", c21, "Core Practical 17", "Investigate the effects of exercise on tidal volume, breathing rate, and oxygen consumption."))
