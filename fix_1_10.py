import glob

for f_path in glob.glob('src/data/seedNotes/physics/note_physics_1_10_*.js'):
    with open(f_path, 'r') as f:
        content = f.read()
    
    content = content.replace("caption: 'Hooke's Law (Force-Extension Graph)'", 'caption: "Hooke\'s Law (Force-Extension Graph)"')
    content = content.replace("caption: 'Young Modulus (Stress-Strain Graph)'", 'caption: "Young Modulus (Stress-Strain Graph)"')
    
    with open(f_path, 'w') as f:
        f.write(content)
