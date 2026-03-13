import PyPDF2

pdf_path = "public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes/4.3 Plants&Bacterial Growth.pdf"

with open(pdf_path, 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = "\n--- Page ---\n".join([page.extract_text() for page in reader.pages if page.extract_text()])

with open("extracted_pdf_4_3.txt", "w") as f:
    f.write(text)

print(f"Extracted {len(reader.pages)} pages to extracted_pdf_4_3.txt")
