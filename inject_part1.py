import re

def inject_block(filepath, target_id, new_block_str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find the block up to its closing },
    pattern = r"(\{\s*id:\s*['\"]" + target_id + r"['\"].*?\},)"
    
    if not re.search(pattern, content, flags=re.DOTALL):
        print(f"Target '{target_id}' not found in {filepath}!")
        return False
        
    replacement = r"\1\n" + new_block_str
    new_content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully injected after '{target_id}' in {filepath}.")
        return True
    return False

block1 = """        {
            id: 'svg-cistrans',
            type: 'svg',
            data: {
                title: 'cis vs trans but-2-ene',
                svg: `<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\">
  <g transform=\"translate(100, 100)\">
    <text x=\"50\" y=\"-70\" font-family=\"Inter, sans-serif\" font-weight=\"bold\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--color-text)\">cis-but-2-ene</text>
    <line x1=\"20\" y1=\"0\" x2=\"80\" y2=\"0\" stroke=\"var(--color-primary)\" stroke-width=\"4\" />
    <line x1=\"20\" y1=\"-10\" x2=\"80\" y2=\"-10\" stroke=\"var(--color-primary)\" stroke-width=\"4\" />
    <text x=\"10\" y=\"0\" font-family=\"Inter, sans-serif\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"end\" dominant-baseline=\"middle\">C</text>
    <text x=\"90\" y=\"0\" font-family=\"Inter, sans-serif\" font-size=\"18\" font-weight=\"bold\" dominant-baseline=\"middle\">C</text>
    <line x1=\"-5\" y1=\"10\" x2=\"-25\" y2=\"40\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"105\" y1=\"10\" x2=\"125\" y2=\"40\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"-5\" y1=\"-20\" x2=\"-25\" y2=\"-50\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"105\" y1=\"-20\" x2=\"125\" y2=\"-50\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <text x=\"-30\" y=\"-55\" font-family=\"Inter, sans-serif\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--color-success)\">CH₃</text>
    <text x=\"130\" y=\"-55\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-success)\">CH₃</text>
    <text x=\"-30\" y=\"55\" font-family=\"Inter, sans-serif\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--color-text-secondary)\">H</text>
    <text x=\"130\" y=\"55\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-text-secondary)\">H</text>
    <ellipse cx=\"50\" cy=\"-60\" rx=\"90\" ry=\"30\" fill=\"none\" stroke=\"var(--color-success)\" stroke-width=\"2\" stroke-dasharray=\"5,5\" opacity=\"0.6\"/>
    <text x=\"50\" y=\"-105\" font-family=\"Inter, sans-serif\" font-size=\"12\" fill=\"var(--color-success)\" text-anchor=\"middle\">Same side (polar)</text>
  </g>
  <line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"230\" stroke=\"var(--color-border)\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />
  <g transform=\"translate(400, 100)\">
    <text x=\"50\" y=\"-70\" font-family=\"Inter, sans-serif\" font-weight=\"bold\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--color-text)\">trans-but-2-ene</text>
    <line x1=\"20\" y1=\"0\" x2=\"80\" y2=\"0\" stroke=\"var(--color-primary)\" stroke-width=\"4\" />
    <line x1=\"20\" y1=\"-10\" x2=\"80\" y2=\"-10\" stroke=\"var(--color-primary)\" stroke-width=\"4\" />
    <text x=\"10\" y=\"0\" font-family=\"Inter, sans-serif\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"end\" dominant-baseline=\"middle\">C</text>
    <text x=\"90\" y=\"0\" font-family=\"Inter, sans-serif\" font-size=\"18\" font-weight=\"bold\" dominant-baseline=\"middle\">C</text>
    <line x1=\"-5\" y1=\"10\" x2=\"-25\" y2=\"40\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"105\" y1=\"10\" x2=\"125\" y2=\"40\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"-5\" y1=\"-20\" x2=\"-25\" y2=\"-50\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <line x1=\"105\" y1=\"-20\" x2=\"125\" y2=\"-50\" stroke=\"var(--color-text)\" stroke-width=\"2\" />
    <text x=\"-30\" y=\"-55\" font-family=\"Inter, sans-serif\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--color-success)\">CH₃</text>
    <text x=\"130\" y=\"-55\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-text-secondary)\">H</text>
    <text x=\"-30\" y=\"55\" font-family=\"Inter, sans-serif\" font-size=\"16\" text-anchor=\"end\" fill=\"var(--color-text-secondary)\">H</text>
    <text x=\"130\" y=\"55\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-success)\">CH₃</text>
    <path d=\"M-20,-50 L120,50\" fill=\"none\" stroke=\"var(--color-success)\" stroke-width=\"2\" stroke-dasharray=\"5,5\" opacity=\"0.6\" />
    <text x=\"140\" y=\"-20\" font-family=\"Inter, sans-serif\" font-size=\"12\" fill=\"var(--color-success)\" text-anchor=\"start\">Opposite sides</text>
    <text x=\"140\" y=\"-5\" font-family=\"Inter, sans-serif\" font-size=\"12\" fill=\"var(--color-success)\" text-anchor=\"start\">(non-polar)</text>
  </g>
</svg>`,
                caption: 'In the cis isomer, the two identical methyl groups sit on the same side of the double bond, creating a net dipole. In the trans isomer, they sit opposite each other, cancelling out their dipoles.'
            },
            terms: []
        },"""

block2 = """        {
            id: 'svg-cip-worked',
            type: 'svg',
            data: {
                title: 'Assigning E or Z configuration',
                svg: `<svg viewBox=\"0 0 600 250\" xmlns=\"http://www.w3.org/2000/svg\">
  <defs>
    <marker id=\"arrow-cip\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">
      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"var(--color-primary)\" />
    </marker>
  </defs>
  <text x=\"300\" y=\"30\" font-family=\"Inter, sans-serif\" font-weight=\"bold\" font-size=\"16\" text-anchor=\"middle\" fill=\"var(--color-text)\">CHBr=CClF</text>
  <rect x=\"50\" y=\"60\" width=\"200\" height=\"130\" fill=\"var(--color-surface)\" stroke=\"var(--color-border)\" stroke-width=\"2\" rx=\"8\" />
  <text x=\"150\" y=\"85\" font-family=\"Inter, sans-serif\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\" fill=\"var(--color-text)\">Left Carbon</text>
  <text x=\"80\" y=\"120\" font-family=\"Inter, sans-serif\" font-size=\"14\" fill=\"var(--color-text)\">1.</text>
  <text x=\"110\" y=\"120\" font-family=\"Inter, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"var(--color-success)\">Br (At. No. 35)</text>
  <text x=\"80\" y=\"160\" font-family=\"Inter, sans-serif\" font-size=\"14\" fill=\"var(--color-text)\">2.</text>
  <text x=\"110\" y=\"160\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-text-secondary)\">H (At. No. 1)</text>
  <rect x=\"350\" y=\"60\" width=\"200\" height=\"130\" fill=\"var(--color-surface)\" stroke=\"var(--color-border)\" stroke-width=\"2\" rx=\"8\" />
  <text x=\"450\" y=\"85\" font-family=\"Inter, sans-serif\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\" fill=\"var(--color-text)\">Right Carbon</text>
  <text x=\"380\" y=\"120\" font-family=\"Inter, sans-serif\" font-size=\"14\" fill=\"var(--color-text)\">1.</text>
  <text x=\"410\" y=\"120\" font-family=\"Inter, sans-serif\" font-size=\"16\" font-weight=\"bold\" fill=\"var(--color-success)\">Cl (At. No. 17)</text>
  <text x=\"380\" y=\"160\" font-family=\"Inter, sans-serif\" font-size=\"14\" fill=\"var(--color-text)\">2.</text>
  <text x=\"410\" y=\"160\" font-family=\"Inter, sans-serif\" font-size=\"16\" fill=\"var(--color-text-secondary)\">F (At. No. 9)</text>
  <path d=\"M 260 135 L 340 135\" stroke=\"var(--color-primary)\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow-cip)\" />
  <text x=\"300\" y=\"125\" font-family=\"Inter, sans-serif\" font-size=\"12\" fill=\"var(--color-primary)\" text-anchor=\"middle\">Compare</text>
  <text x=\"300\" y=\"220\" font-family=\"Inter, sans-serif\" font-size=\"13\" font-style=\"italic\" text-anchor=\"middle\" fill=\"var(--color-text-secondary)\">Z-isomer = Br &amp; Cl same side. E-isomer = Br &amp; Cl opposite.</text>
</svg>`,
                caption: 'The highest priority groups on each carbon are identified using Cahn-Ingold-Prelog (CIP) rules (based on atomic number). Their relative positions then determine if it is E or Z.'
            },
            terms: []
        }"""
        
# For Target 2, we need a comma so block2 needs to be modified if it's the last item
# However, there's no comma needed if we replace a non-last block, BUT in note_1_5_1.js the target callout-worked IS the last block in the array!!!
# Wait! If callout-worked is the last block, it won't have a trailing comma in the regex capture \}, since it might end the array.
# Let's write block2 without trailing comma just in case, but actually we prepend comma to our injected string instead.
