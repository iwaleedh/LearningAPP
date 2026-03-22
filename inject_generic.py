import json
import os
import re

with open('tip_u2_8_10.json', 'r', encoding='utf-8') as f:
    tips = json.load(f)

for filename, tip in tips.items():
    filepath = os.path.join('src/data/seedNotes/chemistry', filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if tip['id'] in content:
        print(f"Skipping {filename} - already injected")
        continue

    title_escaped = json.dumps(tip['data']['title'])
    text_escaped = json.dumps(tip['data']['text'])
        
    tip_str = f"""    {{
      id: '{tip['id']}',
      type: '{tip['type']}',
      data: {{
        style: '{tip['data']['style']}',
        title: {title_escaped},
        text: {text_escaped}
      }}
    }},"""
    
    if "{ id: 'summary'," in content:
        content = re.sub(r"(\{\s*id:\s*'summary',)", tip_str + r"\n    \1", content, count=1)
    else:
        insert_pos = content.find('\\n  presentationSlides:')
        if insert_pos == -1:
            insert_pos = content.find('\n  recall:')
        if insert_pos != -1:
            bracket_pos = content.rfind('],', 0, insert_pos)
            if bracket_pos != -1:
                content = content[:bracket_pos] + ',\n' + tip_str.rstrip(',') + '\n  ' + content[bracket_pos:]
                
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filename}")
