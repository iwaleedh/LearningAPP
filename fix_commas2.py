import os, re
import glob

files = []
for topic in ['21', '22', '23']:
    files.extend(glob.glob(f"src/data/seedNotes/economics/note_economics_4_{topic}_*.js"))                                                                      
for f in files:
    c = open(f).read()
    c2 = re.sub(r"\}\s*,\s*,", r"},", c)
    if c != c2:
        open(f,"w").write(c2)
        print("Fixed", f)
