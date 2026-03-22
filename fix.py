import glob

for f in glob.glob('src/data/seedNotes/economics/note_economics_*_*.js'):
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('},,', '},')
    content = content.replace(',,', ',')
    content = content.replace('[,', '[')
    
    with open(f, 'w') as file:
        file.write(content)
