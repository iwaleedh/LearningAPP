import re

files = [
    '/Users/ibrahimwaleed/Library/Application Support/Code/User/workspaceStorage/ddac9deeef4f37275de5d2d33c8e9405/GitHub.copilot-chat/chat-session-resources/d6e2625b-5b7b-4c6a-b845-cd793dee7646/call_MHw2eTZETElmRkpJYUVoSGRlMEU__vscode-1774099536339/content.txt',
    '/Users/ibrahimwaleed/Library/Application Support/Code/User/workspaceStorage/ddac9deeef4f37275de5d2d33c8e9405/GitHub.copilot-chat/chat-session-resources/d6e2625b-5b7b-4c6a-b845-cd793dee7646/call_MHxibHM1WExHQVZuRUswZFJaNUQ__vscode-1774099536340/content.txt'
]

notes = {}
for f in files:
    content = open(f).read()
    parts = re.split(r'export const note_biology_', content)
    for p in parts[1:]:
        name = 'note_biology_' + p[:10].split(' ')[0]
        notes[name] = p[:1500]

for k, v in notes.items():
    print(k)
    print("="*40)
    print(v[:500])
    print("\n")
