import glob, re

for file in glob.glob('src/data/seedNotes/chemistry/note_2_6_*.js'):
    with open(file, 'r') as f:
        content = f.read()

    matches = re.finditer(r'<svg.*?</svg>', content, re.DOTALL | re.IGNORECASE)
    for i, match in enumerate(matches):
        svg_text = match.group(0)
        print(f'\n========= {file} - SVG {i+1} =========')
        for line in svg_text.split('\n'):
            if '<svg' in line:
                print('ROOT:', line.strip().replace("'", "\""))
            if '<text' in line or '<tspan' in line:
                print('TEXT:', line.strip().replace("'", "\""))
