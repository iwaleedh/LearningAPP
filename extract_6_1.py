import PyPDF2
pdf_path = "/Users/ibrahimwaleed/Documents/LearningAPP/public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes/6.1 EnvironmentalBiology.pdf"

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ""
    for i in range(len(reader.pages)):
        text += f"\n--- Page {i + 1} ---\n"
        page_text = reader.pages[i].extract_text()
        if page_text:
            text += page_text

with open("extracted_pdf_6_1.txt", "w", encoding="utf-8") as f:
    f.write(text)
print(f"Extracted {len(reader.pages)} pages into extracted_pdf_6_1.txt")
