import glob

for f_path in glob.glob('src/data/seedNotes/physics/note_physics_1_9_*.js'):
    with open(f_path, 'r') as f:
        content = f.read()
    content = content.replace("caption: 'Archimedes' Principle'", '"caption": "Archimedes\' Principle"')
    content = content.replace("caption: 'Archimedes\\' Principle'", '"caption": "Archimedes\' Principle"')
    with open(f_path, 'w') as f:
        f.write(content)
print("Fixed quotes")
