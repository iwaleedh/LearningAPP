import os
import glob
import re

svgs = {
    24: [
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f0f4f8" rx="10"/>
  <rect x="150" y="50" width="100" height="100" fill="#a0c4ff" rx="5" stroke="#4a90e2" stroke-width="2"/>
  <text x="200" y="40" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Specific Heat Capacity</text>
  <rect x="130" y="70" width="20" height="80" fill="#ff6b6b"/>
  <text x="140" y="170" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Heater</text>
  <rect x="250" y="30" width="10" height="120" fill="#e0e0e0" stroke="#333"/>
  <rect x="250" y="80" width="10" height="70" fill="#ff4757"/>
  <text x="255" y="20" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Thermometer</text>
</svg>""",
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f8f9fa" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Temperature-Time Graph (Latent Heat)</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <polyline points="50,150 120,90 200,90 280,40" fill="none" stroke="#e84393" stroke-width="3"/>
  <text x="160" y="80" font-family="sans-serif" font-size="12" fill="#e84393">Phase Change</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Temperature</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Energy Supplied / Time</text>
</svg>"""
    ],
    25: [
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#f0edf6" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Ideal Gas Particles</text>
  <rect x="100" y="40" width="200" height="120" fill="none" stroke="#2c3e50" stroke-width="3"/>
  <circle cx="150" cy="80" r="6" fill="#e74c3c"/>
  <line x1="150" y1="80" x2="170" y2="90" stroke="#c0392b" stroke-width="2"/>
  <circle cx="250" cy="120" r="6" fill="#e74c3c"/>
  <line x1="250" y1="120" x2="220" y2="100" stroke="#c0392b" stroke-width="2"/>
  <circle cx="200" cy="60" r="6" fill="#e74c3c"/>
  <line x1="200" y1="60" x2="180" y2="45" stroke="#c0392b" stroke-width="2"/>
  <circle cx="120" cy="140" r="6" fill="#e74c3c"/>
  <line x1="120" y1="140" x2="150" y2="150" stroke="#c0392b" stroke-width="2"/>
  <circle cx="280" cy="70" r="6" fill="#e74c3c"/>
  <line x1="280" y1="70" x2="295" y2="60" stroke="#c0392b" stroke-width="2"/>
</svg>""",
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#fff9f0" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Maxwell-Boltzmann Distribution</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <path d="M 50 170 Q 100 40 150 100 T 300 165" fill="none" stroke="#2980b9" stroke-width="3"/>
  <path d="M 50 170 Q 150 20 200 110 T 350 168" fill="none" stroke="#e67e22" stroke-width="3"/>
  <text x="100" y="80" font-family="sans-serif" font-size="10" fill="#2980b9">Lower T</text>
  <text x="220" y="100" font-family="sans-serif" font-size="10" fill="#e67e22">Higher T</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Number of Molecules</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Kinetic Energy / Speed</text>
</svg>"""
    ],
    26: [
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#e8f4f8" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Black Body Radiation Curve</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <path d="M 50 170 Q 80 20 150 120 T 350 165" fill="none" stroke="#8e44ad" stroke-width="3"/>
  <path d="M 50 170 Q 120 50 180 140 T 350 168" fill="none" stroke="#c0392b" stroke-width="3"/>
  <text x="120" y="50" font-family="sans-serif" font-size="10" fill="#8e44ad">6000 K</text>
  <text x="180" y="110" font-family="sans-serif" font-size="10" fill="#c0392b">4000 K</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Intensity</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Wavelength (λ)</text>
</svg>""",
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#1a1a2e" rx="10"/>
  <text x="200" y="25" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#fff">Luminosity &amp; Stefan-Boltzmann</text>
  <circle cx="200" cy="110" r="40" fill="#f1c40f">
    <animate attributeName="r" values="38;42;38" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="110" r="50" fill="none" stroke="#f39c12" stroke-width="2" stroke-dasharray="5,5"/>
  <circle cx="200" cy="110" r="70" fill="none" stroke="#e67e22" stroke-width="1" stroke-dasharray="2,8"/>
  <text x="200" y="115" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Star</text>
  <text x="50" y="180" font-family="sans-serif" font-size="14" fill="#fff">L = σ A T⁴</text>
</svg>"""
    ],
    27: [
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#fef9e7" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Hertzsprung-Russell (HR) Diagram</text>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#333" stroke-width="2"/>
  <line x1="50" y1="170" x2="50" y2="30" stroke="#333" stroke-width="2"/>
  <path d="M 80 40 L 320 160" stroke="#bdc3c7" stroke-width="20" stroke-linecap="round" opacity="0.5"/>
  <circle cx="100" cy="50" r="6" fill="#3498db"/>
  <circle cx="150" cy="80" r="4" fill="#ecf0f1" stroke="#333"/>
  <circle cx="200" cy="110" r="5" fill="#f1c40f"/>
  <circle cx="250" cy="130" r="4" fill="#e67e22"/>
  <circle cx="300" cy="150" r="3" fill="#e74c3c"/>
  <circle cx="300" cy="50" r="12" fill="#e74c3c"/>
  <circle cx="100" cy="150" r="2" fill="#3498db"/>
  <text x="315" y="45" font-family="sans-serif" font-size="10" fill="#c0392b">Red Giants</text>
  <text x="200" y="100" font-family="sans-serif" font-size="10" fill="#333">Main Sequence</text>
  <text x="70" y="165" font-family="sans-serif" font-size="10" fill="#2980b9">White Dwarfs</text>
  <text x="20" y="100" font-family="sans-serif" font-size="12" transform="rotate(-90 20 100)" text-anchor="middle">Luminosity</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" text-anchor="middle">Temperature (Decreasing →)</text>
</svg>""",
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#eef2f5" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#333">Parallax &amp; Distance</text>
  <circle cx="200" cy="100" r="8" fill="#f1c40f"/>
  <text x="200" y="85" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#333">Sun</text>
  <ellipse cx="200" cy="100" rx="60" ry="15" fill="none" stroke="#7f8c8d" stroke-dasharray="4,4"/>
  <circle cx="140" cy="100" r="4" fill="#3498db"/>
  <circle cx="260" cy="100" r="4" fill="#3498db"/>
  <circle cx="200" cy="170" r="3" fill="#e74c3c"/>
  <line x1="140" y1="100" x2="200" y2="170" stroke="#95a5a6" stroke-width="1"/>
  <line x1="260" y1="100" x2="200" y2="170" stroke="#95a5a6" stroke-width="1"/>
  <line x1="200" y1="100" x2="200" y2="170" stroke="#34495e" stroke-width="1" stroke-dasharray="2,2"/>
  <path d="M 195 160 Q 200 155 205 160" fill="none" stroke="#e74c3c" stroke-width="1"/>
  <text x="210" y="155" font-family="sans-serif" font-size="10" fill="#e74c3c">p</text>
  <text x="200" y="185" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#333">Nearby Star</text>
</svg>"""
    ],
    28: [
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#192a56" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#fff">Hubble's Law &amp; Expansion</text>
  <circle cx="50" cy="100" r="4" fill="#f1c40f"/>
  <circle cx="150" cy="70" r="4" fill="#3498db"/>
  <line x1="155" y1="70" x2="190" y2="70" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrow)"/>
  <circle cx="130" cy="140" r="4" fill="#9b59b6"/>
  <line x1="135" y1="140" x2="160" y2="140" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrow)"/>
  <circle cx="280" cy="100" r="4" fill="#2ecc71"/>
  <line x1="285" y1="100" x2="350" y2="100" stroke="#e74c3c" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="50" y="115" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#fff">Observer</text>
  <text x="280" y="90" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#fff">v = H₀ d</text>
  <defs>
    <marker id="arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#e74c3c"/>
    </marker>
  </defs>
</svg>""",
        """<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="200" fill="#2d3436" rx="10"/>
  <text x="200" y="20" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#fff">Redshift (Doppler Effect for Light)</text>
  <rect x="50" y="60" width="300" height="30" fill="#fff" rx="5"/>
  <line x1="100" y1="60" x2="100" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="120" y1="60" x2="120" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="200" y1="60" x2="200" y2="90" stroke="#000" stroke-width="2"/>
  <text x="360" y="80" font-family="sans-serif" font-size="12" fill="#fff">Lab</text>
  
  <rect x="50" y="120" width="300" height="30" fill="#fff" rx="5"/>
  <line x1="120" y1="120" x2="120" y2="150" stroke="#e74c3c" stroke-width="2"/>
  <line x1="140" y1="120" x2="140" y2="150" stroke="#e74c3c" stroke-width="2"/>
  <line x1="220" y1="120" x2="220" y2="150" stroke="#e74c3c" stroke-width="2"/>
  <text x="360" y="140" font-family="sans-serif" font-size="12" fill="#fff">Galaxy</text>
  
  <line x1="100" y1="95" x2="115" y2="115" stroke="#fff" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="160" y="50" font-family="sans-serif" font-size="10" fill="#7f8c8d">Blue</text>
  <text x="300" y="50" font-family="sans-serif" font-size="10" fill="#e74c3c">Red</text>
</svg>"""
    ]
}

def escape_svg(svg_str):
    return svg_str.replace("`", "\\`")

def inject_to_file(filepath, topic, idx):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if f"svg-gen-{topic}-{idx}-1" in content:
        print(f"Skipping {filepath}, already injected")
        return

    if "recall:" not in content and '"recall":' not in content:
        print(f"Skipping {filepath}, NO recall FOUND")
        return

    svg_data_1 = escape_svg(svgs[topic][0])
    svg_data_2 = escape_svg(svgs[topic][1])
    
    svg_blocks = f""",
    {{
      "id": "svg-gen-{topic}-{idx}-1",
      "type": "svg",
      "data": {{
        "svg": `{svg_data_1}`,
        "caption": "Diagram demonstrating concepts in Topic {topic}"
      }}
    }},
    {{
      "id": "svg-gen-{topic}-{idx}-2",
      "type": "svg",
      "data": {{
        "svg": `{svg_data_2}`,
        "caption": "Further illustration for Topic {topic}"
      }}
    }}
  """
    
    match2 = re.search(r'(\s*)\](\s*,\s*"?recall"?\s*:)', content)
    if match2:
        new_content = content[:match2.start()] + svg_blocks + match2.group(1) + "]" + match2.group(2) + content[match2.end():]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Skipping {filepath}, couldn't match recall block correctly")

def main():
    root_dir = "src/data/seedNotes/physics"
    topics = [24, 25, 26, 27, 28]
    for topic in topics:
        pattern = os.path.join(root_dir, f"note_physics_5_{topic}_*.js")
        files = glob.glob(pattern)
        print(f"Topic {topic} found {len(files)} files")
        for i, file in enumerate(files):
            inject_to_file(file, topic, i)

if __name__ == "__main__":
    main()
