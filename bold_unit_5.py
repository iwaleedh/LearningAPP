import re
import glob

# Keywords
keywords = [
    "half-life", "fusion", "fission", "binding energy", "mass defect", 
    "alpha decay", "beta decay", "gamma decay", "decay constant", "radioactive decay",
    "standard candle", "luminosity", "Wien's law", "Stefan-Boltzmann law", 
    "main sequence", "red giant", "white dwarf", "supernova", "Hertzsprung-Russell diagram", 
    "black hole", "neutron star", "dark matter", "dark energy", "Doppler effect", 
    "redshift", "blue shift", "Cepheid variable", "parallax", "Hubble's law", 
    "cosmic microwave background", "Big Bang", "specific heat capacity", 
    "specific latent heat", "internal energy", "absolute zero", "ideal gas", "kinetic theory",
    "thermodynamics", "astrophysics", "nuclear physics"
]

files = glob.glob("/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/physics/note_physics_5_*.js")
updated_files = []

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    for kw in keywords:
        # Regex to match the keyword not already surrounded by <strong> tags, and ignoring case
        # Also ensure we don't accidentally match part of a larger word
        pattern = r'(?<!<strong>)\b(' + re.escape(kw) + r')\b(?!</strong>)'
        content = re.sub(pattern, r'<strong>\1</strong>', content, flags=re.IGNORECASE)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        updated_files.append(filepath)

print("Updated files:", len(updated_files))
for f in updated_files:
    print(f)
