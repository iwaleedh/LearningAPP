from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []

    def handle_data(self, data):
        data = data.strip()
        if data:
            self.text.append(data)

parser = MyHTMLParser()
with open('chemguide_dehydration.txt', 'r', encoding='utf-8', errors='ignore') as f:
    parser.feed(f.read())

with open('chemguide_dehydration_parsed.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(parser.text))

print('Parsed to chemguide_dehydration_parsed.txt')
