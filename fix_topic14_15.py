import os
import re
import glob

svgs_14 = [
    {
        "id": "svg-topic14-1",
        "type": "svg",
        "caption": "Diffraction Through a Gap",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <defs>
    <pattern id="wave" width="20" height="200" patternUnits="userSpaceOnUse">
      <line x1="10" y1="0" x2="10" y2="200" stroke="#3b82f6" stroke-width="2"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="150" height="200" fill="url(#wave)"/>
  <rect x="150" y="0" width="20" height="80" fill="#1e293b"/>
  <rect x="150" y="120" width="20" height="80" fill="#1e293b"/>
  <path d="M170 100 Q 230 40, 300 20" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M170 100 Q 250 100, 350 100" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M170 100 Q 230 160, 300 180" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M170 100 Q 220 60, 270 40" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M170 100 Q 230 100, 310 100" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M170 100 Q 220 140, 270 160" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <text x="75" y="100" fill="#1e293b" font-family="sans-serif" font-size="14" text-anchor="middle" background-color="white">Plane Waves</text>
  <text x="300" y="140" fill="#1e293b" font-family="sans-serif" font-size="14" text-anchor="middle">Circular Waves</text>
</svg>"""
    },
    {
        "id": "svg-topic14-2",
        "type": "svg",
        "caption": "Diffraction Grating / De Broglie",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150">
  <!-- De Broglie visualization -->
  <path d="M 50 75 Q 75 25, 100 75 T 150 75 T 200 75 T 250 75 T 300 75 T 350 75" fill="none" stroke="#8b5cf6" stroke-width="3"/>
  <circle cx="50" cy="75" r="8" fill="#ef4444"/>
  <circle cx="350" cy="75" r="8" fill="#ef4444"/>
  <text x="200" y="30" fill="#1e293b" font-family="sans-serif" font-size="16" font-style="italic" text-anchor="middle">λ = h / p</text>
  <!-- Arrow for wavelength -->
  <line x1="100" y1="100" x2="200" y2="100" stroke="#1e293b" stroke-width="2"/>
  <line x1="100" y1="95" x2="100" y2="105" stroke="#1e293b" stroke-width="2"/>
  <line x1="200" y1="95" x2="200" y2="105" stroke="#1e293b" stroke-width="2"/>
  <text x="150" y="120" fill="#1e293b" font-family="sans-serif" font-size="14" text-anchor="middle">λ</text>
</svg>"""
    }
]

svgs_15 = [
    {
        "id": "svg-topic15-1",
        "type": "svg",
        "caption": "Photoelectric Effect",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <rect x="50" y="150" width="300" height="30" fill="#94a3b8"/>
  <!-- Incident Photon -->
  <path d="M 50 50 Q 80 80, 110 145" fill="none" stroke="#eab308" stroke-width="3"/>
  <polygon points="105,140 115,135 110,145" fill="#eab308"/>
  <text x="60" y="40" fill="#eab308" font-family="sans-serif" font-size="14">Incident Photon (E = hf)</text>
  <!-- Photoelectron -->
  <circle cx="150" cy="165" r="8" fill="#3b82f6"/>
  <path d="M 150 165 Q 180 100, 250 60" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <polygon points="245,65 242,55 250,60" fill="#ef4444"/>
  <text x="260" y="55" fill="#ef4444" font-family="sans-serif" font-size="14">Photoelectron (KE_max)</text>
  <!-- Labels -->
  <text x="200" y="170" fill="#1e293b" font-family="sans-serif" font-size="14" text-anchor="middle">Metal Surface (Work Function Φ)</text>
</svg>"""
    },
    {
        "id": "svg-topic15-2",
        "type": "svg",
        "caption": "Atomic Energy Levels & Photon Emission",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <!-- Energy Levels -->
  <line x1="100" y1="180" x2="300" y2="180" stroke="#1e293b" stroke-width="3"/>
  <text x="80" y="185" fill="#1e293b" font-family="sans-serif" font-size="14">n=1 (Ground State)</text>
  <line x1="100" y1="130" x2="300" y2="130" stroke="#1e293b" stroke-width="2"/>
  <text x="80" y="135" fill="#1e293b" font-family="sans-serif" font-size="14">n=2</text>
  <line x1="100" y1="90" x2="300" y2="90" stroke="#1e293b" stroke-width="2"/>
  <text x="80" y="95" fill="#1e293b" font-family="sans-serif" font-size="14">n=3</text>
  <line x1="100" y1="60" x2="300" y2="60" stroke="#1e293b" stroke-width="1"/>
  <text x="80" y="65" fill="#1e293b" font-family="sans-serif" font-size="14">n=4</text>
  <!-- Electron Transition -->
  <path d="M 200 90 L 200 175" fill="none" stroke="#ef4444" stroke-width="2"/>
  <polygon points="195,170 205,170 200,180" fill="#ef4444"/>
  <circle cx="200" cy="90" r="6" fill="#3b82f6"/>
  <circle cx="200" cy="180" r="6" fill="#3b82f6" fill-opacity="0.3"/>
  <!-- Photon Emission -->
  <path d="M 200 135 Q 250 150, 300 135" fill="none" stroke="#eab308" stroke-width="2" stroke-dasharray="4,4"/>
  <polygon points="295,140 305,135 295,130" fill="#eab308"/>
  <text x="310" y="140" fill="#eab308" font-family="sans-serif" font-size="14">Photon Emitted</text>
  <text x="310" y="155" fill="#eab308" font-family="sans-serif" font-size="12">ΔE = hf</text>
</svg>"""
    }
]

def escape_for_js(txt):
    txt = txt.replace("'", "\\'")
    txt = txt.replace("\n", "")
    return txt

def format_svgs(svgs):
    res = []
    for s in svgs:
        svg_clean = escape_for_js(s['svg'])
        cap_clean = escape_for_js(s['caption'])
        res.append(f"    {{ id: '{s['id']}', type: 'svg', data: {{ caption: '{cap_clean}', svg: '{svg_clean}' }} }},")
    return "\n".join(res)

def process_files(topic, svgs):
    files = glob.glob(f"src/data/seedNotes/physics/note_physics_2_{topic}_*.js")
    count = 0
    for f in sorted(files):
        with open(f, "r") as file:
            content = file.read()
        
        if "svg-topic14-1" in content or "svg-topic15-1" in content:
            print(f"Skipping {f}, already has SVGs.")
            continue
            
        match = re.search(r'  \],\n\s*(?:\"recall\"|recall):', content)
        if match:
            orig_match = match.group(0)
            new_match = "\n" + format_svgs(svgs) + "\n" + orig_match
            new_content = content.replace(orig_match, new_match)
            with open(f, "w") as file:
                file.write(new_content)
            print(f"Updated {f}")
            count += 1
        else:
            print(f"Could not find recall block in {f}")
    if count == 0:
        print(f"No files updated for topic {topic}.")

process_files(14, svgs_14)
process_files(15, svgs_15)
