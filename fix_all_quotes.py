import glob

for f_path in glob.glob('src/data/seedNotes/physics/note_physics_1_*_*.js'):
    with open(f_path, 'r') as f:
        content = f.read()
    
    content = content.replace("caption: 'Hooke's Law Graph'", 'caption: "Hooke\'s Law Graph"')
    content = content.replace("caption: 'Hooke's Law (Force-Extension)'", 'caption: "Hooke\'s Law (Force-Extension)"')
    content = content.replace("caption: 'Young Modulus (Stress-Strain)'", 'caption: "Young Modulus (Stress-Strain)"')
    content = content.replace("caption: 'Material Behaviour Graphs'", 'caption: "Material Behaviour Graphs"')
    content = content.replace("caption: 'Archimedes' Principle & Upthrust'", 'caption: "Archimedes\' Principle & Upthrust"')
    content = content.replace("caption: 'Forces on a Falling Sphere (Stokes' Law)'", 'caption: "Forces on a Falling Sphere (Stokes\' Law)"')
    
    with open(f_path, 'w') as f:
        f.write(content)
print("Quotes replaced again")
