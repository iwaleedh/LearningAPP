with open('src/data/seedNotes/chemistry/note_2_10_6.js', 'r') as f:
    content = f.read()

content = content.replace("        }\n        {\n            id: 'h-case-study',", "        },\n        {\n            id: 'h-case-study',")

with open('src/data/seedNotes/chemistry/note_2_10_6.js', 'w') as f:
    f.write(content)
print("fixed comma")
