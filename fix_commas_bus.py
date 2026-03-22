import os, re
import glob

files = glob.glob("src/data/seedNotes/business/note_4_*.js")                                                                      
for f in files:
    c = open(f).read()
    c2 = re.sub(r"\}\s*,\s*,", r"},", c)
    if c != c2:
        open(f,"w").write(c2)
        print("Fixed", f)
