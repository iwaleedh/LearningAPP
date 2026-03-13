import re

def read_file():
    with open('extracted_pdf_7_3.txt', 'r') as f:
        return f.read()

text = read_file()
sections = re.split(r'\n(?=Negative & Positive Feedback\n|Homeostasis\n|The Kidney: Structure\n|Urea as a Waste Product\n|Selective Reabsorption in the Kidney\n|Hormones in Osmoregulation\n|Control of Gene Expression\n)', text)

for i, sec in enumerate(sections):
    if "The Kidney: Structure\n" in sec or "Urea as a Waste Product\n" in sec[:20]:
        print(sec)
