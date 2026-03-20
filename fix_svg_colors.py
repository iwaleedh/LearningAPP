import os

base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/chemistry'

files_replacements = {
    'note_1_2_1.js': [
        ('fill="#f8fafc"', 'fill="#0f172a"'),
        ('fill="white"', 'fill="#1c3a64"'),
        ('fill="#fef9c3"', 'fill="#44370a"'),
        ('fill="#ecfdf5"', 'fill="#0a2e1a"'),
        ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ],
    'note_1_2_2.js': [
        ('fill="#f8fafc"', 'fill="#0f172a"'),
        ('fill="#dbeafe"', 'fill="#1e3a8a"'),
        ('fill="#ede9fe"', 'fill="#2d1b69"'),
        ('fill="#dcfce7"', 'fill="#0a2e1a"'),
        ('fill="#fef9c3"', 'fill="#44370a"'),
        ('fill="#fce7f3"', 'fill="#4a1040"'),
        ('fill="#eff6ff"', 'fill="#1c3a64"'),
        ('fill="#ecfdf5"', 'fill="#0a2e1a"'),
        ('fill="#f1f5f9"', 'fill="#1e293b"'),
        ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ],
    'note_1_2_7.js': [
        ('fill="#f8fafc"', 'fill="#0f172a"'),
        ('fill="#dbeafe"', 'fill="#1e3a8a"'),
        ('fill="#fef3c7"', 'fill="#78350f"'),
        ('fill="#fef9c3"', 'fill="#44370a"'),
        ('fill="#eff6ff"', 'fill="#1c3a64"'),
        ('fill="#fef2f2"', 'fill="#3d1212"'),
        ('fill="#ecfdf5"', 'fill="#0a2e1a"'),
        ('fill="#f1f5f9"', 'fill="#1e293b"'),
        ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ],
    'note_1_2_8.js': [
        ('fill="#f8fafc"', 'fill="#0f172a"'),
        ('fill="#fef9c3"', 'fill="#44370a"'),
        ('fill="#ecfdf5"', 'fill="#0a2e1a"'),
        ('fill="#f1f5f9"', 'fill="#1e293b"'),
        ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
    ],
    'note_1_2_4.js': [
        ('fill="#f8fafc"', 'fill="#0f172a"'),
        ('fill="#eff6ff"', 'fill="#1c3a64"'),
        ('fill="#fef2f2"', 'fill="#3d1212"'),
        ('fill="#ecfdf5"', 'fill="#0a2e1a"'),
        ('fill="#fef9c3"', 'fill="#44370a"'),
        ('fill="#dbeafe"', 'fill="#1e3a8a"'),
        ('fill-opacity="0.12"', 'fill-opacity="0.5"'),
        ('fill-opacity="0.1"', 'fill-opacity="0.4"'),
    ],
}

for filename, replacements in files_replacements.items():
    filepath = os.path.join(base, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    for old, new in replacements:
        count = content.count(old)
        if count > 0:
            content = content.replace(old, new)
            print(f'  {filename}: replaced {count}x  {repr(old)[:30]} -> {repr(new)[:30]}')
    with open(filepath, 'w') as f:
        f.write(content)
    print(f'Done: {filename}')

print('All replacements complete.')
