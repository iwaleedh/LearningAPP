import json
import sys
import re
import os

def inject(json_file, folder):
    with open(json_file, 'r') as f:
        data = json.load(f)

    for filename, tips in data.items():
        filepath = os.path.join(folder, filename)
        if not os.path.exists(filepath):
            continue

        with open(filepath, 'r') as f:
            content = f.read()
        
        # Check if already has callouts
        if re.search(r"style'?:\s*['\"](warning|tip|key)['\"]", content):
            print(f"Skipping {filename}, already has tips.")
            continue

        # Find the end of blocks array (right before `recall: {`)
        match = re.search(r"(\n\s*],\s*[\'\"]?recall['\"]?\s*:)", content)
        if not match:
            print(f"Failed to find blocks end in {filename}")
            continue

        new_blocks = ""
        for i, tip in enumerate(tips):
            style = tip['style']
            title = tip['title'].replace("'", "\\'")
            text = tip['text'].replace("'", "\\'")
            
            block = f"""  ,
    {{
      "id": "callout-injected-{i}",
      "type": "callout",
      "data": {{
        "style": "{style}",
        "title": "{title}",
        "text": "{text}"
      }}
    }}"""
            new_blocks += block

        new_content = content[:match.start()] + new_blocks + content[match.start():]
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Injected {len(tips)} tips into {filename}")

if __name__ == "__main__":
    inject(sys.argv[1], sys.argv[2])