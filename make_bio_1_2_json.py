import json
import re

files = [f"src/data/seedNotes/biology/note_1_2_{i}.js" for i in range(17)]
res = {}

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    match = re.search(r"type:\s*['\"]objective['\"],\s*data:\s*\{\s*text:\s*['\"]([^'\"]+)['\"]", content)
    if match:
        obj = match.group(1)
        res[file.split('/')[-1]] = obj
    else:
        # try heading
        match = re.search(r"type:\s*['\"]heading['\"],\s*data:\s*\{\s*text:\s*['\"]([^'\"]+)['\"]", content)
        if match:
             res[file.split('/')[-1]] = match.group(1)

print(json.dumps(res, indent=2))
