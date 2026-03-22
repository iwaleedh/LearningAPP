import re
with open('inject_bio_u2_t3.py', 'r') as f:
    text = f.read()

text = text.replace('''
        # insert at end of blocks array
        blocks_end = content.rfind(']')
        if blocks_end != -1:
            new_content = content[:blocks_end-1] + ",\\n" + injected_str + "\\n" + content[blocks_end-1:]
'''.strip(), '''
        # insert at end of blocks array
        recall_idx = content.find('"recall":')
        if recall_idx == -1:
            recall_idx = content.find("'recall':")
        
        if recall_idx != -1:
            # find the end of blocks array just before recall
            blocks_end = content.rfind(']', 0, recall_idx)
            new_content = content[:blocks_end] + ",\\n" + injected_str + "\\n  " + content[blocks_end:]
'''.strip())

with open('inject_bio_u2_t3.py', 'w') as f:
    f.write(text)
