import re
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []

    def handle_data(self, data):
        text = data.strip()
        if text:
            self.text.append(text)

with open('chemguide_making_halo.txt', 'r') as f:
    html = f.read()

# very basic text extraction
parser = MyHTMLParser()
parser.feed(html)
text = '\n'.join(parser.text)

with open('chemguide_making_halo_parsed.txt', 'w') as f:
    f.write(text)

print('done')
