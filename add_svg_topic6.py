import glob
import re

svg_data = {
    '0': [
        "Electric Current Flow in a Wire",
        "Charge Carriers (Electrons)",
        "Conventional Current vs Electron Flow"
    ],
    '1': [
        "Potential Difference (Energy per unit charge)",
        "Voltmeter Connected in Parallel",
        "Energy Transfer in a Component"
    ],
    '2': [
        "Ohm's Law: V = IR",
        "I-V Graph for Ohmic Conductor",
        "Resistance and Temperature Graph"
    ],
    '3': [
        "Kirchhoff's First Law (Current)",
        "Charge Conservation at a Junction",
        "Sum of Currents Into and Out of a Node"
    ],
    '4': [
        "Kirchhoff's Second Law (Voltage)",
        "Energy Conservation in Closed Loops",
        "EMF and Potential Drops"
    ],
    '5': [
        "Resistors in Series Concept",
        "Resistors in Parallel Concept",
        "Equivalent Resistance Calculation"
    ],
    '6': [
        "Electrical Power: P = IV",
        "Power Dissipation in Resistors: P = I²R",
        "Energy Transferred: E = VIt"
    ],
    '7': [
        "I-V Characteristic of a Filament Lamp",
        "I-V Characteristic of a Diode",
        "I-V Characteristic of a Thermistor"
    ]
}

def make_svg_block(svg_id, caption):
    # Strip quotes for the actual internal svg text content
    title_safe = caption.replace("'", "").replace('"', '')
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" rx="10" fill="#eef2f3"/><text x="200" y="105" text-anchor="middle" font-family="sans-serif" font-size="16">{title_safe}</text></svg>'
    
    # We wrap caption securely in double quotes, avoiding the unescaped single quote JS errors
    return f'    {{ id: "{svg_id}", type: "svg", data: {{ svg: \'{svg}\', caption: "{caption}" }} }}'


for path in glob.glob('src/data/seedNotes/physics/note_physics_2_6_*.js'):
    # Extract subtopic index correctly
    match = re.search(r'note_physics_2_6_(\d+)\.js', path)
    if not match: continue
    idx = match.group(1)
    
    if idx not in svg_data: continue
    
    captions = svg_data[idx]
    
    blocks = []
    for i, cap in enumerate(captions):
        b = make_svg_block(f'svg-2-6-{idx}-{i+1}', cap)
        blocks.append(b)
    
    new_svgs_str = ',\n'.join(blocks)
    
    with open(path, 'r') as f:
        content = f.read()
    
    # Safely replace directly after the last block closing, which always ends with a comma (} },)
    pattern = re.compile(r'(\s+)\]\s*,\s*\n\s*recall:\s*\{')
    
    def repl(m):
        return f'\n{new_svgs_str}\n  ],\n  recall: {{'
    
    new_content = pattern.sub(repl, content)
    
    with open(path, 'w') as f:
        f.write(new_content)
    
    print(f"Added {len(blocks)} SVGs into {path}")
