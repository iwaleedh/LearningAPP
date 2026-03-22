import re
import sys

def inject_block(filepath, target_id, new_block_str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Try 8 spaces indentation
    pattern8 = r"(\{\s*id:\s*['\"]" + target_id + r"['\"],\s*type:.*?\n        \},)"
    match8 = re.search(pattern8, content, flags=re.DOTALL)
    if match8:
        replacement = r"\1\n" + new_block_str + ","
        new_content = re.sub(pattern8, replacement, content, count=1, flags=re.DOTALL)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected after '{target_id}' (8 spaces) in {filepath}")
        return True

    # 2. Try 4 spaces indentation with comma
    pattern4 = r"(\{\s*id:\s*['\"]" + target_id + r"['\"],\s*type:.*?\n    \},)"
    match4 = re.search(pattern4, content, flags=re.DOTALL)
    if match4:
        replacement = r"\1\n" + new_block_str + ","
        new_content = re.sub(pattern4, replacement, content, count=1, flags=re.DOTALL)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected after '{target_id}' (4 spaces) in {filepath}")
        return True

    # 3. Try 4 spaces without comma (last block)
    pattern_last = r"(\{\s*id:\s*['\"]" + target_id + r"['\"],\s*type:.*?\n    \})(?!\s*,)"
    match_last = re.search(pattern_last, content, flags=re.DOTALL)
    if match_last:
        replacement = r"\1,\n" + new_block_str
        new_content = re.sub(pattern_last, replacement, content, count=1, flags=re.DOTALL)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected after '{target_id}' (last block) in {filepath}")
        return True

    # 4. Try 8 spaces without comma (last block)
    pattern_last8 = r"(\{\s*id:\s*['\"]" + target_id + r"['\"],\s*type:.*?\n        \})(?!\s*,)"
    match_last8 = re.search(pattern_last8, content, flags=re.DOTALL)
    if match_last8:
        replacement = r"\1,\n" + new_block_str
        new_content = re.sub(pattern_last8, replacement, content, count=1, flags=re.DOTALL)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected after '{target_id}' (last block 8 spaces) in {filepath}")
        return True

    print(f"Target '{target_id}' not found accurately in {filepath}!")
    return False

block1 = """        {
            id: 'svg-cistrans',
            type: 'svg',
            data: {
                title: 'cis vs trans but-2-ene',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(100, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">cis-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <ellipse cx="50" cy="-60" rx="90" ry="30" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
    <text x="50" y="-105" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="middle">Same side (polar)</text>
  </g>
  <line x1="300" y1="20" x2="300" y2="230" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4" />
  <g transform="translate(400, 100)">
    <text x="50" y="-70" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">trans-but-2-ene</text>
    <line x1="20" y1="0" x2="80" y2="0" stroke="var(--color-primary)" stroke-width="4" />
    <line x1="20" y1="-10" x2="80" y2="-10" stroke="var(--color-primary)" stroke-width="4" />
    <text x="10" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" text-anchor="end" dominant-baseline="middle">C</text>
    <text x="90" y="0" font-family="Inter, sans-serif" font-size="18" font-weight="bold" dominant-baseline="middle">C</text>
    <line x1="-5" y1="10" x2="-25" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="10" x2="125" y2="40" stroke="var(--color-text)" stroke-width="2" />
    <line x1="-5" y1="-20" x2="-25" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <line x1="105" y1="-20" x2="125" y2="-50" stroke="var(--color-text)" stroke-width="2" />
    <text x="-30" y="-55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-success)">CH₃</text>
    <text x="130" y="-55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H</text>
    <text x="-30" y="55" font-family="Inter, sans-serif" font-size="16" text-anchor="end" fill="var(--color-text-secondary)">H</text>
    <text x="130" y="55" font-family="Inter, sans-serif" font-size="16" fill="var(--color-success)">CH₃</text>
    <path d="M-20,-50 L120,50" fill="none" stroke="var(--color-success)" stroke-width="2" stroke-dasharray="5,5" opacity="0.6" />
    <text x="140" y="-20" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">Opposite sides</text>
    <text x="140" y="-5" font-family="Inter, sans-serif" font-size="12" fill="var(--color-success)" text-anchor="start">(non-polar)</text>
  </g>
</svg>`,
                caption: 'In the cis isomer, the two identical methyl groups sit on the same side of the double bond, creating a net dipole. In the trans isomer, they sit opposite each other, cancelling out their dipoles.'
            }
        }"""

block2 = """        {
            id: 'svg-cip-worked',
            type: 'svg',
            data: {
                title: 'Assigning E or Z configuration',
                svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-cip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-primary)" />
    </marker>
  </defs>
  <text x="300" y="30" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">CHBr=CClF</text>
  <rect x="50" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="150" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Left Carbon</text>
  <text x="80" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="110" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Br (At. No. 35)</text>
  <text x="80" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="110" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">H (At. No. 1)</text>
  <rect x="350" y="60" width="200" height="130" fill="var(--color-surface)" stroke="var(--color-border)" stroke-width="2" rx="8" />
  <text x="450" y="85" font-family="Inter, sans-serif" font-weight="bold" font-size="14" text-anchor="middle" fill="var(--color-text)">Right Carbon</text>
  <text x="380" y="120" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">1.</text>
  <text x="410" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="var(--color-success)">Cl (At. No. 17)</text>
  <text x="380" y="160" font-family="Inter, sans-serif" font-size="14" fill="var(--color-text)">2.</text>
  <text x="410" y="160" font-family="Inter, sans-serif" font-size="16" fill="var(--color-text-secondary)">F (At. No. 9)</text>
  <path d="M 260 135 L 340 135" stroke="var(--color-primary)" stroke-width="2" fill="none" marker-end="url(#arrow-cip)" />
  <text x="300" y="125" font-family="Inter, sans-serif" font-size="12" fill="var(--color-primary)" text-anchor="middle">Compare</text>
  <text x="300" y="220" font-family="Inter, sans-serif" font-size="13" font-style="italic" text-anchor="middle" fill="var(--color-text-secondary)">Z-isomer = Br &amp; Cl same side. E-isomer = Br &amp; Cl opposite.</text>
</svg>`,
                caption: 'The highest priority groups on each carbon are identified using Cahn-Ingold-Prelog (CIP) rules (based on atomic number). Their relative positions then determine if it is E or Z.'
            }
        }"""

block3 = """        {
            id: 'svg-apparatus',
            type: 'svg',
            data: {
                title: 'Distillation vs Reflux Apparatus',
                svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="flask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--color-accent)" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="var(--color-accent)" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="product" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--color-success)" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="var(--color-success)" stop-opacity="0.4"/>
    </linearGradient>
    <marker id="arrow-sv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
    </marker>
    <marker id="arrow-sv-down" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-success)" />
    </marker>
  </defs>
  <g transform="translate(30, 40)">
    <text x="100" y="-10" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">Distillation (Partial)</text>
    <path d="M 40 180 Q 40 220 70 220 Q 100 220 100 180 L 80 130 L 60 130 Z" fill="url(#flask)" stroke="var(--color-text)" stroke-width="2" />
    <rect x="65" y="100" width="10" height="30" fill="none" stroke="var(--color-text)" stroke-width="2" />
    <path d="M 75 100 L 75 70 L 120 70 L 120 90 L 85 90 L 85 100 Z" fill="none" stroke="var(--color-text)" stroke-width="2"/>
    <line x1="70" y1="70" x2="70" y2="40" stroke="var(--color-text-secondary)" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(120, 70) rotate(20)">
      <rect x="0" y="0" width="120" height="20" fill="none" stroke="var(--color-primary)" stroke-width="2" />
      <rect x="10" y="-5" width="100" height="30" fill="#ccf" opacity="0.3" stroke="var(--color-primary)" stroke-width="1" />
      <text x="60" y="14" font-family="Inter, sans-serif" font-size="10" fill="var(--color-primary)" text-anchor="middle">Water in/out</text>
    </g>
    <path d="M 230 180 Q 230 220 260 220 Q 290 220 290 180 L 270 140 L 250 140 Z" fill="url(#product)" stroke="var(--color-text)" stroke-width="2" />
    <text x="260" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-success)" text-anchor="middle">Aldehyde</text>
    <text x="70" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-accent)" text-anchor="middle">1° Alcohol + [O]</text>
  </g>
  <line x1="330" y1="20" x2="330" y2="280" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4" />
  <g transform="translate(370, 40)">
    <text x="100" y="-10" font-family="Inter, sans-serif" font-weight="bold" font-size="16" text-anchor="middle" fill="var(--color-text)">Reflux (Full)</text>
    <path d="M 70 180 Q 70 220 100 220 Q 130 220 130 180 L 110 130 L 90 130 Z" fill="url(#flask)" stroke="var(--color-text)" stroke-width="2" />
    <text x="100" y="240" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-accent)" text-anchor="middle">1° Alcohol + Excess [O]</text>
    <text x="100" y="260" font-family="Inter, sans-serif" font-weight="bold" font-size="12" fill="var(--color-text)" text-anchor="middle">→ Carboxylic Acid</text>
    <rect x="90" y="20" width="20" height="110" fill="none" stroke="var(--color-primary)" stroke-width="2" />
    <rect x="85" y="30" width="30" height="90" fill="#ccf" opacity="0.3" stroke="var(--color-primary)" stroke-width="1" />
    <path d="M 95 120 L 95 40" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#arrow-sv)" />
    <path d="M 105 40 L 105 120" stroke="var(--color-success)" stroke-width="2" marker-end="url(#arrow-sv-down)" />
    <text x="145" y="80" font-family="Inter, sans-serif" font-size="12" fill="var(--color-text-secondary)">Vapors rise &amp;</text>
    <text x="145" y="100" font-family="Inter, sans-serif" font-size="12" fill="var(--color-text-secondary)">condense down</text>
  </g>
</svg>`,
                caption: 'Distillation allows the volatile aldehyde to escape before it oxidises further. Heating under reflux traps all vapours, forcing the reaction to go to completion to form a carboxylic acid.'
            }
        }"""

# Inject into file 1
inject_block('src/data/seedNotes/chemistry/note_1_5_1.js', 'table-cistrans', block1)
inject_block('src/data/seedNotes/chemistry/note_1_5_1.js', 'callout-worked', block2)

# Inject into file 2
inject_block('src/data/seedNotes/chemistry/note_2_10_5.js', 'callout-cp7', block3)
