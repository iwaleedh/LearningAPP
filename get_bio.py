import re
import os

for i in range(8):
    filename = f'src/data/seedNotes/biology/note_5_7_{i}.js'
    try:
        content = open(filename).read()
        m = re.search(r'type:\s*[\'"]heading[\'"][^}]*text:\s*[\'"](.*?)[\'"]', content, re.DOTALL)
        title = m.group(1) if m else "No Title"
        print(f"--- {filename} ({title}) ---")
        summary_m = re.search(r'type:\s*[\'"]summary[\'"][^}]*text:\s*[\'"](.*?)[\'"]', content, re.DOTALL)
        if summary_m:
            print("Summary:", summary_m.group(1)[0:200])
        else:
            print("No summary block.")
        print()
    except Exception as e:
        print(f"Error reading {filename}: {e}")
