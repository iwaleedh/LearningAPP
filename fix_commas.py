import glob, re
import sys
for f in glob.glob("src/data/seedNotes/economics/note_economics_1_[23]*.js"):
    c = open(f).read()
    c2 = re.sub(r"\}\s*,\s*,", r"},", c)
    if c != c2:
        open(f,"w").write(c2)
        print("Fixed", f)
