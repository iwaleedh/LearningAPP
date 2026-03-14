import re
import os
import uuid

svg_data = {
    0: [
        [
            "Resistivity Experiment Setup",
            r"""<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f8fafc" rx="10"/>
  <rect x="50" y="80" width="300" height="20" fill="#94a3b8" rx="5"/>
  <text x="200" y="100" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">Uniform Resistance Wire</text>
  <path d="M 50 80 L 50 40 L 150 40" stroke="#334155" stroke-width="2" fill="none"/>
  <circle cx="170" cy="40" r="20" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="170" y="45" font-family="sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">A</text>
  <path d="M 190 40 L 350 40 L 350 80" stroke="#334155" stroke-width="2" fill="none"/>
  <path d="M 100 80 L 100 130 L 170 130" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="4"/>
  <circle cx="190" cy="130" r="20" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
  <text x="190" y="135" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">V</text>
  <path d="M 210 130 L 280 130 L 280 80" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="4"/>
  <path d="M 275 85 L 280 80 L 285 85" stroke="#f59e0b" stroke-width="2" fill="none"/>
</svg>"""
        ],
        [
            "Resistivity Formula Diagram",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f0fdf4" rx="10"/>
  <path d="M 50 90 L 250 90" stroke="#22c55e" stroke-width="30" stroke-linecap="round"/>
  <text x="150" y="95" font-family="sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Length (L)</text>
  <line x1="50" y1="120" x2="250" y2="120" stroke="#15803d" stroke-width="2" />
  <text x="150" y="140" font-family="sans-serif" font-size="14" fill="#15803d" text-anchor="middle">R ∝ L</text>
  <circle cx="50" cy="90" r="15" fill="#166534" opacity="0.5"/>
  <text x="50" y="95" font-family="sans-serif" font-size="12" fill="#fff" text-anchor="middle">Area (A)</text>
  <text x="150" y="170" font-family="sans-serif" font-size="16" fill="#166534" text-anchor="middle" font-weight="bold">ρ = RA / L</text>
</svg>"""
        ]
    ],
    1: [
        [
            "Kirchhoff's First Law (Conservation of Charge)",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#eff6ff" rx="10"/>
  <path d="M 50 100 L 150 100" stroke="#1d4ed8" stroke-width="4"/>
  <path d="M 120 90 L 130 100 L 120 110" stroke="#1d4ed8" stroke-width="3" fill="none"/>
  <text x="80" y="90" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1d4ed8">I₁ = 5A</text>
  
  <path d="M 150 100 L 230 50" stroke="#2563eb" stroke-width="4"/>
  <path d="M 180 75 L 195 65 L 185 85" stroke="#2563eb" stroke-width="3" fill="none"/>
  <text x="210" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563eb">I₂ = 3A</text>
  
  <path d="M 150 100 L 230 150" stroke="#3b82f6" stroke-width="4"/>
  <path d="M 185 115 L 195 135 L 180 125" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <text x="210" y="170" font-family="sans-serif" font-size="14" font-weight="bold" fill="#3b82f6">I₃ = 2A</text>
  
  <circle cx="150" cy="100" r="6" fill="#1e3a8a"/>
  <text x="150" y="130" font-family="sans-serif" font-size="12" fill="#1e3a8a" text-anchor="middle">Junction</text>
  <text x="150" y="180" font-family="sans-serif" font-size="14" fill="#1e3a8a" text-anchor="middle" font-weight="bold">∑ I(in) = ∑ I(out)</text>
</svg>"""
        ],
        [
            "Kirchhoff's Second Law",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f5f3ff" rx="10"/>
  <path d="M 100 50 L 200 50 L 200 150 L 100 150 Z" stroke="#4c1d95" stroke-width="2" fill="none"/>
  
  <rect x="130" y="40" width="40" height="20" fill="#fff" stroke="#4c1d95" stroke-width="2"/>
  <text x="150" y="54" font-family="sans-serif" font-size="12" fill="#4c1d95" text-anchor="middle">R₁</text>
  
  <rect x="130" y="140" width="40" height="20" fill="#fff" stroke="#4c1d95" stroke-width="2"/>
  <text x="150" y="154" font-family="sans-serif" font-size="12" fill="#4c1d95" text-anchor="middle">R₂</text>
  
  <rect x="90" y="90" width="20" height="10" fill="#8b5cf6"/>
  <rect x="95" y="100" width="10" height="10" fill="#8b5cf6"/>
  <text x="70" y="105" font-family="sans-serif" font-size="14" fill="#6d28d9" font-weight="bold">ε</text>
  
  <path d="M 150 100 A 30 30 0 1 1 149 100" stroke="#7c3aed" stroke-width="2" fill="none" stroke-dasharray="4"/>
  <path d="M 160 75 L 170 85 L 155 85" fill="#7c3aed"/>
  
  <text x="150" y="110" font-family="sans-serif" font-size="14" font-weight="bold" fill="#4c1d95" text-anchor="middle">∑ ε = ∑ IR</text>
</svg>"""
        ]
    ],
    2: [
        [
            "Series Circuit Properties",
            r"""<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="200" fill="#fff1f2" rx="10"/>
  <path d="M 50 100 L 90 100" stroke="#be185d" stroke-width="2"/>
  <rect x="90" y="90" width="50" height="20" fill="#fff" stroke="#be185d" stroke-width="2"/>
  <text x="115" y="105" font-family="sans-serif" font-size="12" fill="#be185d" text-anchor="middle">R₁</text>
  <path d="M 140 100 L 190 100" stroke="#be185d" stroke-width="2"/>
  <rect x="190" y="90" width="50" height="20" fill="#fff" stroke="#be185d" stroke-width="2"/>
  <text x="215" y="105" font-family="sans-serif" font-size="12" fill="#be185d" text-anchor="middle">R₂</text>
  <path d="M 240 100 L 300 100" stroke="#be185d" stroke-width="2"/>
  <path d="M 115 130 L 115 150 L 215 150 L 215 130" stroke="#e11d48" stroke-width="2" fill="none" stroke-dasharray="4"/>
  <circle cx="165" cy="150" r="15" fill="#fff" stroke="#e11d48" stroke-width="2"/>
  <text x="165" y="155" font-family="sans-serif" font-size="14" fill="#e11d48" text-anchor="middle" font-weight="bold">V</text>
  <text x="175" y="50" font-family="sans-serif" font-size="14" fill="#9f1239" text-anchor="middle" font-weight="bold">Current (I) is constant</text>
  <text x="175" y="70" font-family="sans-serif" font-size="14" fill="#9f1239" text-anchor="middle" font-weight="bold">V_total = V₁ + V₂</text>
</svg>"""
        ],
        [
            "Parallel Circuit Properties",
            r"""<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="200" fill="#f0f9ff" rx="10"/>
  <path d="M 50 100 L 100 100 L 100 50 L 130 50" stroke="#0369a1" stroke-width="2" fill="none"/>
  <path d="M 100 100 L 100 150 L 130 150" stroke="#0369a1" stroke-width="2" fill="none"/>
  
  <rect x="130" y="40" width="60" height="20" fill="#fff" stroke="#0369a1" stroke-width="2"/>
  <text x="160" y="54" font-family="sans-serif" font-size="12" fill="#0369a1" text-anchor="middle">R₁</text>
  
  <rect x="130" y="140" width="60" height="20" fill="#fff" stroke="#0369a1" stroke-width="2"/>
  <text x="160" y="154" font-family="sans-serif" font-size="12" fill="#0369a1" text-anchor="middle">R₂</text>
  
  <path d="M 190 50 L 220 50 L 220 100 L 270 100" stroke="#0369a1" stroke-width="2" fill="none"/>
  <path d="M 190 150 L 220 150 L 220 100" stroke="#0369a1" stroke-width="2" fill="none"/>
  
  <text x="250" y="180" font-family="sans-serif" font-size="14" fill="#0c4a6e" text-anchor="middle" font-weight="bold">Pd (V) is constant</text>
  <text x="100" y="30" font-family="sans-serif" font-size="14" fill="#0c4a6e" font-weight="bold">I_total = I₁ + I₂</text>
</svg>"""
        ]
    ],
    3: [
        [
            "Power Dissipation in a Resistor",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#fffbeb" rx="10"/>
  <rect x="100" y="80" width="100" height="40" fill="#fbbf24" stroke="#d97706" stroke-width="2" rx="5"/>
  <path d="M 50 100 L 100 100" stroke="#d97706" stroke-width="3"/>
  <path d="M 200 100 L 250 100" stroke="#d97706" stroke-width="3"/>
  
  <circle cx="150" cy="50" r="15" fill="#fff" stroke="#d97706" stroke-width="2"/>
  <text x="150" y="55" font-family="sans-serif" font-size="14" fill="#d97706" text-anchor="middle" font-weight="bold">I</text>
  
  <text x="150" y="105" font-family="sans-serif" font-size="16" fill="#92400e" text-anchor="middle" font-weight="bold">Heat</text>
  <path d="M 120 70 Q 130 50 140 70" stroke="#ef4444" stroke-width="2" fill="none"/>
  <path d="M 160 70 Q 170 50 180 70" stroke="#ef4444" stroke-width="2" fill="none"/>
  <path d="M 120 130 Q 130 150 140 130" stroke="#ef4444" stroke-width="2" fill="none"/>
  <path d="M 160 130 Q 170 150 180 130" stroke="#ef4444" stroke-width="2" fill="none"/>
  
  <text x="150" y="170" font-family="sans-serif" font-size="16" fill="#b45309" text-anchor="middle" font-weight="bold">P = I²R = V²/R = VI</text>
</svg>"""
        ],
        [
            "Energy Transfer (W = VIt)",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#faf5ff" rx="10"/>
  <circle cx="100" cy="100" r="40" fill="#e9d5ff" stroke="#9333ea" stroke-width="3"/>
  <circle cx="100" cy="100" r="30" fill="#d8b4fe" stroke="#9333ea" stroke-width="2"/>
  <text x="100" y="105" font-family="sans-serif" font-size="20" fill="#6b21a8" text-anchor="middle" font-weight="bold">W</text>
  
  <path d="M 160 100 L 220 100" stroke="#9333ea" stroke-width="2" stroke-dasharray="5"/>
  <polygon points="220,95 230,100 220,105" fill="#9333ea"/>
  
  <text x="260" y="85" font-family="sans-serif" font-size="16" fill="#6b21a8" font-weight="bold">V</text>
  <text x="260" y="105" font-family="sans-serif" font-size="16" fill="#6b21a8" font-weight="bold">I</text>
  <text x="260" y="125" font-family="sans-serif" font-size="16" fill="#6b21a8" font-weight="bold">t</text>
  <text x="150" y="40" font-family="sans-serif" font-size="16" fill="#581c87" text-anchor="middle" font-weight="bold">Energy Transferred</text>
</svg>"""
        ]
    ],
    4: [
        [
            "Internal Resistance Circuit",
            r"""<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="200" fill="#fdf4ff" rx="10"/>
  <rect x="80" y="40" width="140" height="60" fill="#f3e8ff" stroke="#c026d3" stroke-width="2" stroke-dasharray="4" rx="5"/>
  <text x="150" y="30" font-family="sans-serif" font-size="14" fill="#a21caf" text-anchor="middle" font-weight="bold">Cell (EMF, ε)</text>
  
  <rect x="100" y="60" width="10" height="20" fill="#c026d3"/>
  <rect x="120" y="50" width="5" height="40" fill="#c026d3"/>
  <rect x="160" y="60" width="30" height="15" fill="#fff" stroke="#c026d3" stroke-width="2"/>
  <text x="175" y="72" font-family="sans-serif" font-size="12" fill="#c026d3" text-anchor="middle">r</text>
  <path d="M 125 70 L 160 70" stroke="#c026d3" stroke-width="2"/>
  <path d="M 190 70 L 260 70 L 260 150 L 200 150" stroke="#a21caf" stroke-width="2"/>
  <path d="M 100 70 L 40 70 L 40 150 L 100 150" stroke="#a21caf" stroke-width="2"/>
  
  <rect x="100" y="140" width="100" height="20" fill="#fff" stroke="#a21caf" stroke-width="2"/>
  <text x="150" y="155" font-family="sans-serif" font-size="14" fill="#a21caf" text-anchor="middle" font-weight="bold">Load (R)</text>
  
  <text x="150" y="190" font-family="sans-serif" font-size="14" fill="#86198f" text-anchor="middle" font-weight="bold">V = ε - Ir</text>
</svg>"""
        ],
        [
            "V against I Graph",
            r"""<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#fdf2f8" rx="10"/>
  <path d="M 50 160 L 250 160" stroke="#9d174d" stroke-width="2"/>
  <path d="M 50 160 L 50 30" stroke="#9d174d" stroke-width="2"/>
  <text x="240" y="180" font-family="sans-serif" font-size="14" fill="#9d174d" font-weight="bold">I</text>
  <text x="30" y="40" font-family="sans-serif" font-size="14" fill="#9d174d" font-weight="bold">V</text>
  
  <path d="M 50 50 L 220 140" stroke="#be185d" stroke-width="3"/>
  <circle cx="50" cy="50" r="4" fill="#831843"/>
  <text x="65" y="45" font-family="sans-serif" font-size="14" fill="#831843" font-weight="bold">y-int = ε</text>
  
  <text x="150" y="110" font-family="sans-serif" font-size="14" fill="#831843" font-weight="bold">Gradient = -r</text>
  
  <path d="M 120 87 L 160 87 L 160 108" stroke="#be185d" stroke-width="2" fill="none"/>
</svg>"""
        ]
    ],
    5: [
        [
            "Potential Divider Circuit",
            r"""<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="220" fill="#f0fdfa" rx="10"/>
  <path d="M 50 50 L 150 50 M 200 50 L 250 50 L 250 100" stroke="#0f766e" stroke-width="2" fill="none"/>
  <path d="M 50 50 L 50 180 L 250 180 L 250 160" stroke="#0f766e" stroke-width="2" fill="none"/>
  
  <circle cx="175" cy="50" r="25" fill="#fff" stroke="#0f766e" stroke-width="2"/>
  <text x="175" y="55" font-family="sans-serif" font-size="14" fill="#0f766e" text-anchor="middle" font-weight="bold">V_in</text>
  
  <rect x="235" y="100" width="30" height="60" fill="#fff" stroke="#0f766e" stroke-width="2"/>
  <text x="250" y="135" font-family="sans-serif" font-size="12" fill="#0f766e" text-anchor="middle">R₁</text>
  
  <path d="M 250 160 L 250 200 L 320 200 L 320 140 L 265 140" stroke="#14b8a6" stroke-width="2" fill="none" stroke-dasharray="4"/>
  <circle cx="320" cy="170" r="15" fill="#fff" stroke="#14b8a6" stroke-width="2"/>
  <text x="320" y="175" font-family="sans-serif" font-size="12" fill="#14b8a6" text-anchor="middle" font-weight="bold">V₁</text>
  
  <text x="150" y="120" font-family="sans-serif" font-size="14" fill="#115e59" font-weight="bold">V₁ = V_in × [ R₁ / (R₁ + R₂) ]</text>
</svg>"""
        ],
        [
            "LDR and Thermistor Symbols",
            r"""<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="350" height="200" fill="#ecfdf5" rx="10"/>
  
  <path d="M 50 100 L 80 100 M 120 100 L 150 100" stroke="#0d9488" stroke-width="2"/>
  <rect x="80" y="85" width="40" height="30" fill="#fff" stroke="#0d9488" stroke-width="2"/>
  <circle cx="100" cy="100" r="22" fill="none" stroke="#0d9488" stroke-width="2"/>
  <path d="M 110 60 L 105 75 M 120 65 L 115 80" stroke="#0f766e" stroke-width="2" />
  <text x="100" y="140" font-family="sans-serif" font-size="14" fill="#0f766e" text-anchor="middle" font-weight="bold">LDR</text>
  <text x="100" y="160" font-family="sans-serif" font-size="12" fill="#0f766e" text-anchor="middle">(Light Dependent)</text>
  
  <path d="M 200 100 L 230 100 M 290 100 L 320 100" stroke="#0d9488" stroke-width="2"/>
  <rect x="230" y="85" width="60" height="30" fill="#fff" stroke="#0d9488" stroke-width="2"/>
  <path d="M 220 120 L 250 120 L 300 80" stroke="#0f766e" stroke-width="2" fill="none"/>
  <text x="260" y="140" font-family="sans-serif" font-size="14" fill="#0f766e" text-anchor="middle" font-weight="bold">Thermistor</text>
  <text x="260" y="160" font-family="sans-serif" font-size="12" fill="#0f766e" text-anchor="middle">(NTC)</text>
</svg>"""
        ]
    ]
}

for i in range(6):
    file_path = f"src/data/seedNotes/physics/note_physics_2_7_{i}.js"
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'type: "svg"' in content or "type: 'svg'" in content:
        print(f"Skipping {file_path}, already has SVGs")
        continue

    svgs = svg_data.get(i, [])
    if not svgs:
        continue
        
    svg_blocks = []
    for caption, svg_string in svgs:
        uid = str(uuid.uuid4())[:8]
        safe_svg = svg_string.replace('"', '\\"').replace('\n', ' ')
        
        block = f'''
    {{
      id: "svg-{uid}",
      type: "svg",
      data: {{
        caption: "{caption}",
        svg: "{safe_svg}"
      }}
    }},'''
        svg_blocks.append(block)
        
    svg_inject = "".join(svg_blocks)
    
    # Try finding the end of the blocks array
    pattern = r"(\s+)\],\s*recall:"
    if re.search(pattern, content):
        new_content = re.sub(pattern, r"\1" + svg_inject.lstrip('\n') + r"\n\1],\n  recall:", content)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Injected SVGs into {file_path} (via recall pattern)")
        continue

    # Alternate pattern for empty recall
    pattern2 = r"(\s+)\]\n\s*\};\s*export"
    if re.search(pattern2, content):
        new_content = re.sub(pattern2, r"\1" + svg_inject.lstrip('\n') + r"\n\1]\n};\nexport", content)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Injected SVGs into {file_path} (via end pattern)")
        continue
        
    print(f"Could not find insert point in {file_path}")

print("Done.")