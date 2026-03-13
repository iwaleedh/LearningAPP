from PyPDF2 import PdfReader
reader = PdfReader('public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes/8.2 PlantHormones.pdf')
text = ""
for page in reader.pages:
    text += page.extract_text()
print(text[:1000])
