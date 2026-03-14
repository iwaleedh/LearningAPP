import re
import glob

for i in range(22):
    filename = f"src/data/seedNotes/biology/note_5_7_{i}.js"
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'type:\s*"objective",\s*data:\s*\{\s*text:\s*"([^"]+)"', content)
            if match:
                print(f"Subtopic {i}: {match.group(1)}")
            else:
                print(f"Subtopic {i}: NO OBJECTIVE FOUND")
    except Exception as e:
        print(f"Error {i}: {e}")
