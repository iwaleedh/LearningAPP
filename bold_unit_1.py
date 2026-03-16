import glob
import re

KEYWORDS = [
    "scalar", "vector", "displacement", "velocity", "acceleration", 
    "upthrust", "force", "weight", "mass", "moments", "couple", 
    "equilibrium", "centre of gravity", "centre of mass", "drag", 
    "friction", "lift", "tension", "normal contact force", 
    "terminal velocity", "streamline", "turbulent", "viscosity", 
    "laminar flow", "Stoke's law", "Hooke's law", "Young modulus", 
    "stress", "strain", "limit of proportionality", "elastic limit", 
    "yield point", "elastic deformation", "plastic deformation", 
    "ultimate tensile stress", "breaking stress", "ductile", 
    "brittle", "polymeric", "momentum", "conservation of momentum", 
    "elastic collision", "inelastic collision", "work done", 
    "kinetic energy", "potential energy", "power", "efficiency"
]
KEYWORDS.sort(key=len, reverse=True)

escaped_keywords = [re.escape(kw) for kw in KEYWORDS]
kw_pattern = re.compile(r'\b(' + '|'.join(escaped_keywords) + r')\b', re.IGNORECASE)

def replacer(text):
    parts = re.split(r'(</?[^>]+>)', text)
    result = []
    strong_depth = 0
    
    for p in parts:
        if p.startswith('<'):
            if p.startswith('<strong'):
                strong_depth += 1
            elif p.startswith('</strong'):
                strong_depth = max(0, strong_depth - 1)
            result.append(p)
        else:
            if strong_depth > 0:
                result.append(p)
            else:
                def sub_func(m):
                    return f"<strong>{m.group(1)}</strong>"
                replaced = kw_pattern.sub(sub_func, p)
                result.append(replaced)
                
    return ''.join(result)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = content.split("{ id:")
    edited = False
    
    new_blocks = [blocks[0]]
    for block in blocks[1:]:
        header = block[:100]
        if re.search(r"type:\s*'(list|callout|summary)'", header):
            def text_replacer(m):
                prefix = m.group(1)
                quote = m.group(2)
                text_content = m.group(3)
                new_text_content = replacer(text_content)
                return f"{prefix}{quote}{new_text_content}{quote}"
            
            new_block = re.sub(r"(text:\s*)(['\"])((?:(?!\2)[^\\]|\\.)*)\2", text_replacer, block)
            if new_block != block:
                edited = True
            new_blocks.append(new_block)
        else:
            new_blocks.append(block)
            
    return "{ id:".join(new_blocks), edited

def main():
    files = glob.glob('src/data/seedNotes/physics/note_physics_1_*.js')
    updated = []
    
    for f in files:
        new_content, edited = process_file(f)
        if edited:
            with open(f, 'w', encoding='utf-8') as out:
                out.write(new_content)
            updated.append(f)
            
    print(f"Updated {len(updated)} files.")
    for f in updated:
        print(f" - {f}")

if __name__ == '__main__':
    main()

