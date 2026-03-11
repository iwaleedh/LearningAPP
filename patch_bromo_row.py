import re

with open('src/data/seedNotes/chemistry/note_2_10_4.js', 'r') as f:
    content = f.read()

old_bromo_row = "['Bromoalkane', 'KBr + 50% conc. H₂SO₄', 'Forms HBr <em>in situ</em> which then reacts with the alcohol.<br/>ROH + HBr → RBr + H₂O']"
new_bromo_row = "['Bromoalkane', 'KBr + 50% conc. H₂SO₄ <br/>OR Red phosphorus + Bromine', '<strong>KBr/H₂SO₄:</strong> Forms HBr <em>in situ</em> which then reacts with the alcohol. ROH + HBr → RBr + H₂O<br/><strong>Red P / Br₂:</strong> Reacts to form PBr₃ in situ, which then reacts: 3ROH + PBr₃ → 3RBr + H₃PO₃']"

if old_bromo_row in content:
    content = content.replace(old_bromo_row, new_bromo_row)
else:
    print("Could not find old bromoalkane row! Here is a fragment to help debug:")
    print(content[content.find("Bromoalkane")-30:content.find("Bromoalkane")+100])

with open('src/data/seedNotes/chemistry/note_2_10_4.js', 'w') as f:
    f.write(content)

print('Done 4 bromo')
