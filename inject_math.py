import json
import os
import re

with open('tip_math_u6_p2.json', 'r', encoding='utf-8') as f:
    tips_dict = json.load(f)

for filename, tips_array in tips_dict.items():
    filepath = filename
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    all_tips_str = ""
    for idx, tip in enumerate(tips_array):
        tip_id = f"callout-tip-{idx+1}"
        if tip_id in content:
            continue

        title_escaped = json.dumps(tip.get('title', ''))
        text_escaped = json.dumps(tip.get('text', ''))
        style = tip.get('style', 'warning')

        tip_str = f"""        {{
            id: '{tip_id}',
            type: 'callout',
            data: {{
                style: '{style}',
                title: {title_escaped},
                text: {text_escaped}
            }},
            terms: []
        }},\n"""
        all_tips_str += tip_str

    if not all_tips_str:
        print(f"Skipping {filepath} - already injected")
        continue

    if "{ id: 'summary'," in content:
        content = re.sub(r"(\{\s*id:\s*'summary',)", lambda m: all_tips_str + "        " + m.group(1), content, count=1)
    elif '{"id": "summary",' in content:
        content = re.sub(r'(\{\s*"id":\s*"summary",)', lambda m: all_tips_str + "        " + m.group(1), content, count=1)
    else:
        # Just use regex to insert before the closing ']' of blocks array
        content = re.sub(r"(\n\s*\]\s*,\s*(?://[^\n]*\n\s*)?recall:\s*\{)", lambda m: ",\n" + all_tips_str.rstrip(",\n") + m.group(1), content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated {filepath}")
