import glob, re
files = glob.glob('src/data/seedNotes/chemistry/note_2_6_*.js')
for f in files:
    content = open(f).read()
    for svg in re.findall(r"svg:\s*'(<svg.*?</svg>)'", content):
        m_vb = re.search(r'viewBox="(\d+) (\d+) (\d+) (\d+)"', svg)
        if not m_vb: continue
        w, h = int(m_vb.group(3)), int(m_vb.group(4))
        for line in re.findall(r'<line[^>]*>', svg):
            mx = re.findall(r'x[12]="(\d+)"', line)
            if any(int(x) > w for x in mx):
                print(f'Line overlaps horizontal in {f}: {line} viewBox={w}')
            my = re.findall(r'y[12]="(\d+)"', line)
            if any(int(y) > h for y in my):
                print(f'Line overlaps vertical in {f}: {line} viewBox={h}')
