import json
import re
with open("tmp.json", "r") as f:
    data = f.read()

start = data.find("{")
end = data.rfind("}")
if start != -1 and end != -1:
    data = data[start:end+1]

# Strip newlines that are inside strings manually or via a basic approach
try:
    j = json.loads(data)
except Exception as e:
    data = re.sub(r'(?<="):\s*"(.*?)"', lambda m: m.group(0).replace('\n', ' '), data, flags=re.DOTALL)
    try:
        j = json.loads(data)
    except Exception as e2:
        print("FAIL AGAIN:", e2)
        import sys
        sys.exit(1)

with open("tips.json", "w") as f:
    json.dump(j, f, indent=2)

print("SUCCESS: tips.json created")
