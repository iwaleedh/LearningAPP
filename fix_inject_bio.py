import os

with open('run_inject_bio.py', 'r') as f:
    text = f.read()

text = text.replace('tips_bio_1_2_chunk1.json', 'tip_bio_2_3.json')
text = text.replace('tips_bio_1_2_chunk2.json', 'tip_bio_2_3.json')

with open('run_inject_bio.py', 'w') as f:
    f.write(text)
