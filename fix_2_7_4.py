"""Fix unescaped f'( and g'( in note_2_7_4.js"""

path = 'src/data/seedNotes/mathematics/note_2_7_4.js'
with open(path, encoding='utf-8') as f:
    c = f.read()

# Fix f'( -> f\'(  and g'( -> g\'(
c2 = c.replace("f'(", "f\\'(").replace("g'(", "g\\'(")
# Also fix F'( just in case
c2 = c2.replace("F'(", "F\\'(")

if c2 != c:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c2)
    print(f"Fixed: {path}")
else:
    print("No changes needed")
