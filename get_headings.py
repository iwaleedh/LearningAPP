import glob
import re

files = glob.glob("src/data/seedNotes/physics/note_physics_5_*.js")
files = sorted([f for f in files if not re.search(r'note_physics_5_2[45678]_', f)])

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    headings = re.findall(r"type:\s*(?:'heading'|\"heading\"),\s*data:\s*\{[^{}]*?text:\s*[`'\"](.*?)[`'\"](?:,|})", content, re.DOTALL)
    print(f.split('/')[-1] + ": " + ", ".join(headings[:2]).replace('\n', ' '))
