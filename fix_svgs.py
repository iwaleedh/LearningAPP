import glob

files = glob.glob('src/data/seedNotes/physics/note_physics_1_5_*.js') + \
        glob.glob('src/data/seedNotes/physics/note_physics_1_9_*.js') + \
        glob.glob('src/data/seedNotes/physics/note_physics_1_10_*.js')

for fpath in files:
    with open(fpath, 'r') as f:
        content = f.read()

    # The current string ends with `caption: '...' }} },` 
    # Because my original string was:
    # `{{{{ id: 'svg-101', ..., caption: '{data['cap1']}' }}}} }}}},`
    # Escapes: `{{ id: .... caption: '...' }} }},`
    content = content.replace(" }} },", " } },")

    with open(fpath, 'w') as f:
        f.write(content)
print("Fixed")
