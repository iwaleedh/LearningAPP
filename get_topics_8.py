import os
import re

topics = {}
for i in range(16):
    path = f"src/data/seedNotes/biology/note_5_8_{i}.js"
    with open(path, "r") as f:
        content = f.read()
        ms = re.findall(r"data:\s*\{\s*text:\s*[\"'](.*?)[\"']", content)
        if ms:
            topics[i] = ms
print(topics)
