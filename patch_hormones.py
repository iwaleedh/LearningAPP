import json

with open('plant_hormones.txt', 'r', encoding='utf-8') as f:
    text = f.read()

idx9 = text.find('Effects of Plant Hormones', 200)
idx14 = text.find('Core Practical 18:', 200)
idx15 = text.rfind('\nNervous & Hormonal Coordination')

print("indices:", idx9, idx14, idx15)

if idx9 == -1 or idx14 == -1 or idx15 == -1:
    print("Error: Could not find one of the indices")
    exit(1)

bounds = {
    '9': idx9,
    '14': idx14,
    '15': idx15,
    'end': len(text)
}

out = {
    '9': text[bounds['9']:bounds['14']],
    '14': text[bounds['14']:bounds['15']],
    '15': text[bounds['15']:bounds['end']]
}

def process_text_to_blocks(subtopic_id, content):
    lines = content.split('\n')
    blocks = []
    
    blocks.append({
        'id': f'obj_{subtopic_id}',
        'type': 'objective',
        'data': { 'text': 'Understand the key concepts of this section according to the Edexcel IAL Biology syllabus.' }
    })
    
    current_para = []
    for line in lines:
        cleaned = line.strip()
        if not cleaned: continue
        if 'Save My Exams' in cleaned or 'Your notes' in cleaned or 'Edexcel International A' in cleaned or 'Level (IAL) Biology' in cleaned or 'Table' in cleaned or 'Contents' in cleaned:
            continue
            
        if len(cleaned) < 100 and not cleaned.endswith('.') and not cleaned.endswith(',') and not cleaned.startswith('(') and not cleaned.endswith(')'):
            if current_para:
                blocks.append({
                    'id': f'p_{subtopic_id}_{len(blocks)}',
                    'type': 'paragraph',
                    'data': { 'text': ' '.join(current_para) }
                })
                current_para = []
            
            blocks.append({
                'id': f'h_{subtopic_id}_{len(blocks)}',
                'type': 'heading',
                'data': { 'text': cleaned, 'level': 3 }
            })
        else:
            current_para.append(cleaned)
            
    if current_para:
        blocks.append({
            'id': f'p_{subtopic_id}_{len(blocks)}',
            'type': 'paragraph',
            'data': { 'text': ' '.join(current_para) }
        })

    json_blocks = json.dumps(blocks, indent=4)
    return f'export const note_biology_5_8_{subtopic_id} = {{\n  blocks: {json_blocks}\n}};\n'

for key, content in out.items():
    js_code = process_text_to_blocks(key, content)
    with open(f'src/data/seedNotes/biology/note_5_8_{key}.js', 'w', encoding='utf-8') as f:
        f.write(js_code)
    print(f'Populated note_5_8_{key}.js length {len(js_code)}')
