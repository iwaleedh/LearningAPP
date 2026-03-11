import re
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []

    def handle_data(self, data):
        data = data.strip()
        if data:
            self.text.append(data)

with open('chemguide_uses.txt', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

extractor = TextExtractor()
extractor.feed(html)

with open('chemguide_uses_parsed.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(extractor.text))
print("Parsed to chemguide_uses_parsed.txt")
