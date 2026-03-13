import re
import json

def read_file(path):
    with open(path, 'r') as f:
        return f.read()

text = read_file('extracted_pdf_7_3.txt')

sections = re.split(r'\n(?=Negative & Positive Feedback\n|Homeostasis\n|The Kidney: Structure\n|Urea as a Waste Product\n|Selective Reabsorption in the Kidney\n|Hormones in Osmoregulation\n|Control of Gene Expression\n|Your notes\n)', text)

for i, sec in enumerate(sections):
    print(f"Section {i}: {sec[:50].strip()}")

