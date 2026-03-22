import json
import os
import re
import uuid

TIPS_FILE = 'tip_bio_6_6A.json'
JSON_FILES = [TIPS_FILE]
NOTES_DIR = 'src/data/seedNotes/biology'

def get_tips():
    tips = {}
    for filename in JSON_FILES:
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, dict):
                    for key, t in data.items():
                        tips.setdefault(key, []).extend(t)
                else:
                    for item in data:
                        key = item.get('file')
                        if key:
                            tips.setdefault(key, []).extend(item.get('tips', []))
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    return tips

def escape_quotes(s):
    return s.replace("'", "\\'")

def inject_tips_into_file(filename, tips):
    filepath = os.path.join(NOTES_DIR, filename)
    if not os.path.exists(filepath):
        print(f"File {filename} not found.")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the summary block or end of blocks
    summary_pattern = r"({\s*'id':\s*'[^']+',\s*'type':\s*'summary',\s*'data':\s*{[^}]+}\s*})"
    
    match = re.search(summary_pattern, content)
    
    injected_nodes = []
    for tip in tips:
        style = tip.get("style", "warning")
        title = escape_quotes(tip.get("title", "Examiner Tip"))
        text = escape_quotes(tip.get("text", ""))
        node = f"{{ 'id': 'callout-examiner-{uuid.uuid4().hex[:8]}', 'type': 'callout', 'data': {{ 'style': '{style}', 'title': '{title}', 'text': '{text}' }} }}"
        injected_nodes.append(node)
        
    injected_str = ",\n".join(injected_nodes)

    if match:
        new_content = content[:match.start()] + injected_str + ",\n  " + content[match.start():]
    else:
        # insert at end of blocks array
        recall_idx = content.find('"recall":')
        if recall_idx == -1:
            recall_idx = content.find("'recall':")
        if recall_idx == -1:
            recall_idx = content.find("recall:")
        if recall_idx == -1:
            recall_idx = content.find("recall:")
        
        if recall_idx != -1:
            # find the end of blocks array just before recall
            blocks_end = content.rfind(']', 0, recall_idx)
            prefix = content[:blocks_end].rstrip()
            if prefix.endswith(','):
                prefix = prefix[:-1]
            new_content = prefix + ",\n" + injected_str + "\n  " + content[blocks_end:]
        else:
            print(f"Could not inject into {filename}")
            return

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Injected {len(tips)} tips into {filename}")

if __name__ == '__main__':
    all_tips = get_tips()
    print(f"Found tips for {len(all_tips)} files")
    for file, tip_list in all_tips.items():
        inject_tips_into_file(file, tip_list)
