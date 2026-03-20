import os, glob, re

files = glob.glob('src/data/seedNotes/chemistry/note_1_2_*.js')

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Simple replace to convert lists to callouts to use infographic layout
    content = content.replace("type: 'list',", "type: 'callout',")
    content = re.sub(r'style:\s*\'bullet\'\s*,', "style: 'key',", content)
    content = re.sub(r'items:\s*\[', "title: 'Key Information',\n        text: [", content)
    # This is a bit hacky, so let's modify slideEngine.js instead which handles all topics!
    
print("Updated slideEngine mapping is safer.")
