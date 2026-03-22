import re
with open('inject_bio_u2_t3.py', 'r') as f:
    text = f.read()

text = text.replace("text': '''{text}''' }} }}", "text': '{text}' }} }}")

with open('inject_bio_u2_t3.py', 'w') as f:
    f.write(text)
