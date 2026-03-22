import re

svg_london_formation = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Panel 1: Symmetrical -->
    <g transform="translate(10, 20)">
        <rect x="0" y="0" width="180" height="150" rx="8" fill="#f8fafc" stroke="#e5e7eb" stroke-width="2"/>
        <text x="90" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Symmetrical Atom</text>
        <circle cx="90" cy="90" r="40" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
        <!-- Nucleus -->
        <circle cx="90" cy="90" r="8" fill="#dc2626"/>
        <!-- Electrons evenly distributed -->
        <circle cx="65" cy="70" r="3" fill="#1e40af"/>
        <circle cx="115" cy="70" r="3" fill="#1e40af"/>
        <circle cx="65" cy="110" r="3" fill="#1e40af"/>
        <circle cx="115" cy="110" r="3" fill="#1e40af"/>
        <circle cx="90" cy="60" r="3" fill="#1e40af"/>
        <circle cx="90" cy="120" r="3" fill="#1e40af"/>
        <text x="90" y="145" font-size="12" fill="#64748b" text-anchor="middle">Even electron cloud</text>
    </g>

    <!-- Arrow 1 to 2 -->
    <path d="M 200 95 L 220 95" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
    <path d="M 215 90 L 225 95 L 215 100" fill="#9ca3af"/>

    <!-- Panel 2: Instantaneous -->
    <g transform="translate(230, 20)">
        <rect x="0" y="0" width="180" height="150" rx="8" fill="#fdf4ff" stroke="#e5e7eb" stroke-width="2"/>
        <text x="90" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2. Instantaneous Dipole</text>
        
        <!-- Distorted cloud -->
        <ellipse cx="95" cy="90" rx="45" ry="38" fill="#fae8ff" stroke="#d946ef" stroke-width="2"/>
        <circle cx="80" cy="90" r="8" fill="#dc2626"/>
        <!-- Electrons shifted right -->
        <circle cx="115" cy="75" r="3" fill="#1e40af"/>
        <circle cx="125" cy="95" r="3" fill="#1e40af"/>
        <circle cx="110" cy="105" r="3" fill="#1e40af"/>
        <circle cx="130" cy="85" r="3" fill="#1e40af"/>
        <circle cx="120" cy="110" r="3" fill="#1e40af"/>
        <circle cx="100" cy="70" r="3" fill="#1e40af"/>
        
        <text x="45" y="94" font-size="16" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="145" y="94" font-size="16" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <text x="90" y="145" font-size="12" fill="#64748b" text-anchor="middle">Electrons shift randomly</text>
    </g>

    <!-- Arrow 2 to 3 -->
    <path d="M 420 95 L 440 95" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
    <path d="M 435 90 L 445 95 L 435 100" fill="#9ca3af"/>

    <!-- Panel 3: Induced -->
    <g transform="translate(450, 20)">
        <rect x="0" y="0" width="240" height="150" rx="8" fill="#f0fdf4" stroke="#e5e7eb" stroke-width="2"/>
        <text x="120" y="30" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">3. Induced Dipole + Attraction</text>
        
        <!-- Atom 1 (instantaneous) -->
        <ellipse cx="65" cy="90" rx="35" ry="30" fill="#fae8ff" stroke="#d946ef" stroke-width="2"/>
        <circle cx="55" cy="90" r="6" fill="#dc2626"/>
        <text x="35" y="94" font-size="12" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="100" y="94" font-size="12" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <!-- Atom 2 (induced) -->
        <ellipse cx="175" cy="90" rx="35" ry="30" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="165" cy="90" r="6" fill="#dc2626"/>
        <text x="145" y="94" font-size="12" font-weight="bold" fill="#b91c1c">δ+</text>
        <text x="210" y="94" font-size="12" font-weight="bold" fill="#1d4ed8">δ-</text>
        
        <!-- Attraction lines -->
        <line x1="105" y1="85" x2="140" y2="85" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="105" y1="95" x2="140" y2="95" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
        
        <text x="120" y="75" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">London Force</text>
        <text x="120" y="145" font-size="12" fill="#64748b" text-anchor="middle">Neighbour's electrons repelled</text>
    </g>
</svg>"""

svg_shape = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 280" width="100%" height="auto" font-family="Inter,Arial,sans-serif">
    <!-- Left: Straight chain -->
    <g transform="translate(20, 20)">
        <rect x="0" y="0" width="310" height="240" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <text x="155" y="30" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Straight-Chain Molecules</text>
        <text x="155" y="48" font-size="13" fill="#475569" text-anchor="middle">(e.g., pentane)</text>
        
        <!-- Molecule 1 -->
        <path d="M 50 100 L 90 80 L 130 100 L 170 80 L 210 100 L 250 80" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Molecule 2 -->
        <path d="M 50 160 L 90 140 L 130 160 L 170 140 L 210 160 L 250 140" fill="none" stroke="#2563eb" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
        
        <!-- Interaction lines -->
        <g stroke="#10b981" stroke-width="2" stroke-dasharray="4,4">
            <line x1="60" y1="105" x2="60" y2="150" />
            <line x1="100" y1="88" x2="100" y2="135" />
            <line x1="140" y1="105" x2="140" y2="150" />
            <line x1="180" y1="88" x2="180" y2="135" />
            <line x1="220" y1="105" x2="220" y2="150" />
            <line x1="240" y1="88" x2="240" y2="135" />
        </g>
        
        <rect x="30" y="185" width="250" height="40" rx="4" fill="#ecfdf5"/>
        <text x="155" y="202" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">Large surface area of contact</text>
        <text x="155" y="217" font-size="12" fill="#065f46" text-anchor="middle">Stronger forces ➔ Higher boiling point</text>
    </g>

    <!-- Right: Branched chain -->
    <g transform="translate(360, 20)">
        <rect x="0" y="0" width="310" height="240" rx="8" fill="#fdf4ff" stroke="#cbd5e1" stroke-width="2"/>
        <text x="155" y="30" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Branched-Chain Molecules</text>
        <text x="155" y="48" font-size="13" fill="#475569" text-anchor="middle">(e.g., 2,2-dimethylpropane)</text>
        
        <!-- Molecule 1 (Spherical representation) -->
        <circle cx="155" cy="85" r="25" fill="#d946ef" opacity="0.8"/>
        <path d="M 155 60 L 155 110 M 130 85 L 180 85" stroke="#fdf4ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="155" cy="85" r="30" fill="none" stroke="#d946ef" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- Molecule 2 -->
        <circle cx="155" cy="155" r="25" fill="#d946ef" opacity="0.8"/>
        <path d="M 155 130 L 155 180 M 130 155 L 180 155" stroke="#fdf4ff" stroke-width="6" stroke-linecap="round"/>
        <circle cx="155" cy="155" r="30" fill="none" stroke="#d946ef" stroke-width="2" stroke-dasharray="4,2"/>
        
        <!-- Interaction lines -->
        <g stroke="#10b981" stroke-width="2" stroke-dasharray="4,4">
            <line x1="145" y1="115" x2="145" y2="125" />
            <line x1="165" y1="115" x2="165" y2="125" />
        </g>
        
        <rect x="30" y="185" width="250" height="40" rx="4" fill="#fef2f2"/>
        <text x="155" y="202" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Small surface area of contact</text>
        <text x="155" y="217" font-size="12" fill="#991b1b" text-anchor="middle">Weaker forces ➔ Lower boiling point</text>
    </g>
</svg>"""

block_london = f"""        {{
            id: 'svg-london-formation',
            type: 'svg',
            data: {{
                svg: `{svg_london_formation}`,
                caption: 'The 3-step process of how instantaneous and induced dipoles create London forces.'
            }}
        }},
"""

block_shape = f"""        {{
            id: 'svg-london-shape',
            type: 'svg',
            data: {{
                svg: `{svg_shape}`,
                caption: 'Comparison of surface area contact points between straight and branched isomers.'
            }}
        }},
"""

file_path = 'src/data/seedNotes/chemistry/note_2_7_0.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert block_london after callout-london
callout_london_pat = re.compile(r'(id:\s*["\']callout-london["\'][\s\S]*?terms:\s*\[[^\]]*\]\s*)\}')
content = callout_london_pat.sub(r'\1},\n' + block_london, content)

# Insert block_shape after callout-london-shape
callout_shape_pat = re.compile(r'(id:\s*["\']callout-london-shape["\'][\s\S]*?terms:\s*\[[^\]]*\]\s*)\}')
content = callout_shape_pat.sub(r'\1},\n' + block_shape, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected SVGs into note_2_7_0.js")
