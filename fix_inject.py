import re
with open('run_inject_bio.py', 'r') as f:
    text = f.read()

repl = r'''def escape_quotes(s):
    return s.replace("'", "\\'")

    injected_str = ",\\n".join(
        f"{{ 'id': 'callout-examiner-{uuid.uuid4().hex[:8]}', 'type': 'callout', 'data': {{ 'style': '{tip.get('style', 'warning')}', 'title': '{escape_quotes(tip.get('title', 'Examiner Tip'))}', 'text': '''{escape_quotes(tip.get('text', ''))}''' }} }}"
        for tip in tips
    )'''

text = re.sub(r'injected_str.*for tip in tips\n    \)', repl, text, flags=re.DOTALL)
with open('run_inject_bio.py', 'w') as f:
    f.write(text)
