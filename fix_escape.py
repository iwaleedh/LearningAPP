import re
import glob

files = glob.glob('src/data/seedNotes/business/note_4_19_*.js') + glob.glob('src/data/seedNotes/business/note_4_20_*.js')
for f in files:
    content = open(f).read()
    # Find double quoted strings and replace \' with '
    def repl(m):
        # We also replace \* with * just in case
        return m.group(0).replace("\\'", "'").replace("\\*", "*")
    content = re.sub(r'"([^"\\]|\\.)*"', repl, content)
    open(f, 'w').write(content)
