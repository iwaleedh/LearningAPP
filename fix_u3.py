import json
import re

with open('ecou3.json', 'r') as f:
    text = f.read()

# Fix unescaped newlines in strings
def repl(m):
    return m.group(0).replace('\n', ' ')

text = re.sub(r'"text":\s*"[^"]+"', repl, text)

# Fix escaped right bracket
text = text.replace(r'\]', ']')

with open('ecou3.json', 'w') as f:
    f.write(text)

