import glob
import re
import json

output = {}

for f in sorted(glob.glob("src/data/seedNotes/economics/note_economics_4_*.js")):
    with open(f, 'r') as file:
        content = file.read()
    
    m = re.search(r"type:\s*'heading',\s*data:\s*\{\s*text:\s*'([^']+)'", content)
    
    # Also grab second heading if first is just topic name or similar
    headings = re.findall(r"type:\s*'heading',\s*data:\s*\{\s*text:\s*'([^']+)'", content)
    
    title = ""
    if headings:
        title = " > ".join(headings[:2])
    
    filename = f.split('/')[-1]
    output[filename] = title

with open('ecou4_titles.json', 'w') as out:
    json.dump(output, out, indent=2)

