import re

with open('src/data/seedNotes/index.js', 'r') as f:
    text = f.read()

# Replace the specific old import block
text = re.sub(
    r"import \{ note_biology_5_7_0 \} from \'\./biology/note_5_7_0\.js\';.*?import \{ note_biology_5_7_18 \} from \'\./biology/note_5_7_18\.js\';",
    "\n".join([f"import {{ note_biology_5_7_{i} }} from './biology/note_5_7_{i}.js';" for i in range(22)]),
    text, flags=re.DOTALL
)

text = re.sub(
    r"    \'biology:5:7:0\': note_biology_5_7_0,.*?    \'biology:5:7:18\': note_biology_5_7_18,",
    "\n".join([f"    'biology:5:7:{i}': note_biology_5_7_{i}," for i in range(22)]),
    text, flags=re.DOTALL
)

with open('src/data/seedNotes/index.js', 'w') as f:
    f.write(text)

