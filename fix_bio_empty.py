import json
import os
import glob
import re

json_files = glob.glob('tip_bio*.json')
tips_map = {}

def get_actual_tip(tip_obj):
    if 'data' in tip_obj:
        return tip_obj['data'].get('title', 'Examiner Tip'), tip_obj['data'].get('text', '')
    else:
        return tip_obj.get('title', 'Examiner Tip'), tip_obj.get('text', '')

for jf in json_files:
    try:
        with open(jf, 'r') as f:
            data = json.load(f)
            if isinstance(data, dict):
                for k, v in data.items():
                    # k is something like 'note_1_1_0.js'
                    tips_map[k] = [get_actual_tip(t) for t in v]
            elif isinstance(data, list):
                for item in data:
                    k = item.get('file') or item.get('filename')
                    tips = item.get('tips') or item.get('callouts') or []
                    if k:
                        tips_map[k] = [get_actual_tip(t) for t in tips]
    except Exception as e:
        print(f"Failed to read {jf}: {e}")

# Now go through biology files and replace empty tips
js_files = glob.glob('src/data/seedNotes/biology/note_*.js')

def escape_quotes(s):
    return s.replace("'", "\\'")

fixed_count = 0

for jf in js_files:
    filename = os.path.basename(jf)
    with open(jf, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "'text': ''" in content and filename in tips_map:
        # We need to replace them one by one
        tips_to_inject = list(tips_map[filename]) # copy to pop
        
        # Find all occurrences of empty tips
        def replacer(match):
            if not tips_to_inject:
                return match.group(0) # Not enough tips?
            
            title, text = tips_to_inject.pop(0)
            t = escape_quotes(title)
            tx = escape_quotes(text)
            
            # Recreate the data object string
            return f"\'style\': \'warning\', \'title\': \'{t}\', \'text\': \'{tx}\'"
            
        new_content = re.sub(r"\'style\':\s*\'(?:warning|tip)\',\s*\'title\':\s*\'[^\']*\',\s*\'text\':\s*\'\'", replacer, content)
        
        if new_content != content:
            with open(jf, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed_count += 1
            print(f"Fixed {filename}")

print(f"Total fixed: {fixed_count}")
