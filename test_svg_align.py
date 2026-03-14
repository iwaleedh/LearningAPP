import re
import glob

files = glob.glob("src/data/seedNotes/chemistry/note_2_6_*.js")
for f_name in files:
    with open(f_name, "r", encoding="utf-8") as f:
        content = f.read()
    
    svgs = re.findall(r"svg:\s*'(<svg.*?</svg>)'", content)
    if svgs:
        print(f"File: {f_name}")
        for i, svgStr in enumerate(svgs):
            print(f"  SVG {i+1}:")
            texts = re.findall(r"(<text[^>]*>.*?</text>)", svgStr)
            for t in texts:
                if 'text-anchor' not in t or 'transform' in t:
                    print(f"    Suspicious Element: {t}")
                else:
                    print(f"    {t}")
