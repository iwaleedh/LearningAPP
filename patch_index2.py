with open('src/data/seedNotes/index.js', 'r') as f:
    text = f.read()

# Insert imports
import_str = "import { note_biology_5_7_16 } from './biology/note_5_7_16.js';\nimport { note_biology_5_7_17 } from './biology/note_5_7_17.js';\n"
text = text.replace("import { note_biology_5_7_15 } from './biology/note_5_7_15.js';\n", "import { note_biology_5_7_15 } from './biology/note_5_7_15.js';\n" + import_str)

# Insert exports
export_str = "    'biology:5:7:16': note_biology_5_7_16,\n    'biology:5:7:17': note_biology_5_7_17,\n"
text = text.replace("    'biology:5:7:15': note_biology_5_7_15,\n", "    'biology:5:7:15': note_biology_5_7_15,\n" + export_str)

with open('src/data/seedNotes/index.js', 'w') as f:
    f.write(text)

