"""Fix unescaped possessives in single-quoted JS strings"""

# note_2_7_2.js: factor's in summary text
with open('src/data/seedNotes/mathematics/note_2_7_2.js', encoding='utf-8') as f:
    c = f.read()
c2 = c.replace("factor's", "factor\\'s")
if c2 != c:
    with open('src/data/seedNotes/mathematics/note_2_7_2.js', 'w', encoding='utf-8') as f:
        f.write(c2)
    print("Fixed note_2_7_2.js: factor's")

# note_2_8_5.js: curve's and y's in checklist/summaryText
with open('src/data/seedNotes/mathematics/note_2_8_5.js', encoding='utf-8') as f:
    c = f.read()
c2 = c.replace("curve's concavity'", "curve\\'s concavity'")
c2 = c2.replace("middle y's)", "middle y\\'s)")
if c2 != c:
    with open('src/data/seedNotes/mathematics/note_2_8_5.js', 'w', encoding='utf-8') as f:
        f.write(c2)
    print("Fixed note_2_8_5.js: curve's and y's")
