import re
import json

with open('/Users/ibrahimwaleed/Library/Application Support/Code/User/workspaceStorage/ddac9deeef4f37275de5d2d33c8e9405/GitHub.copilot-chat/chat-session-resources/d6e2625b-5b7b-4c6a-b845-cd793dee7646/call_MHx6Q2huU2RkamUwdXUzYjlYRjU__vscode-1774099536716/content.txt', 'r') as f:
    text = f.read()

start = text.find('{')
end = text.rfind('}')

if start != -1 and end != -1:
    data_str = text[start:end+1]
    with open('tip_eco_1_456.json', 'w') as out:
        out.write(data_str)
    print("Extracted JSON to tip_eco_1_456.json")
else:
    print("Could not find JSON block.")
