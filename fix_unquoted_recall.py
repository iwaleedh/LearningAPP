import re
with open('inject_bio_u2_t3.py', 'r') as f:
    text = f.read()

text = text.replace('''
        recall_idx = content.find('"recall":')
        if recall_idx == -1:
            recall_idx = content.find("'recall':")
'''.strip(), '''
        recall_idx = content.find('"recall":')
        if recall_idx == -1:
            recall_idx = content.find("'recall':")
        if recall_idx == -1:
            recall_idx = content.find("recall:")
'''.strip())

with open('inject_bio_u2_t3.py', 'w') as f:
    f.write(text)
