import re
with open('inject_bio_u2_t3.py', 'r') as f:
    text = f.read()

text = text.replace('''
                for item in data:
                    key = item.get('file')
                    if key:
                        tips.setdefault(key, []).extend(item.get('tips', []))
'''.strip(), '''
                if isinstance(data, dict):
                    for key, t in data.items():
                        tips.setdefault(key, []).extend(t)
                else:
                    for item in data:
                        key = item.get('file')
                        if key:
                            tips.setdefault(key, []).extend(item.get('tips', []))
'''.strip())

with open('inject_bio_u2_t3.py', 'w') as f:
    f.write(text)
