import re
import json

with open('/Users/ibrahimwaleed/Library/Application Support/Code/User/workspaceStorage/ddac9deeef4f37275de5d2d33c8e9405/GitHub.copilot-chat/chat-session-resources/d6e2625b-5b7b-4c6a-b845-cd793dee7646/call_MHxzMThlS2RyeVYycGU2MTVNR3o__vscode-1774099536631/content.txt', 'r') as f:
    text = f.read()

# find everything between data = { and }
start = text.find('data = {')
end = text.find('}', start)
while end != -1:
    try:
        data_str = text[start:end+1]
        exec(data_str + "\nwith open('tip_eco_1_1.json', 'w') as out:\n    json.dump(data, out)")
        break
    except:
        end = text.find('}', end + 1)
