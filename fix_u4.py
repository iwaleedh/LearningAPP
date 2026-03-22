import json
import re

with open('ecou4.json', 'r') as f:
    text = f.read()

# Try to parse it to see if it's already ok
try:
    data = json.loads(text)
    print("JSON OK initially")
except Exception as e:
    print("Fixing JSON:", e)
    
    # Strip markdown if any
    text = re.sub(r'^```json\n?', '', text)
    text = re.sub(r'```\n?$', '', text)

    # Fix unescaped newlines in strings
    def repl(m):
        return m.group(0).replace('\n', ' ')

    text = re.sub(r'"text":\s*"[^"]+"', repl, text)
    text = text.replace(r'\]', ']')
    
    # Write back
    with open('ecou4.json', 'w') as f:
        f.write(text)

