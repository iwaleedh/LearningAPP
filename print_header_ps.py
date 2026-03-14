import PyPDF2
pdf_dir = "/Users/ibrahimwaleed/Documents/LearningAPP/public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes"
pdf_path = f"{pdf_dir}/4.1 PlantStructure&Function.pdf"

pdf = PyPDF2.PdfReader(pdf_path)
text = ""
for p in range(min(5, len(pdf.pages))):
    text += pdf.pages[p].extract_text() + "\n"

contents_idx = text.find("Contents")
contents_end = text.find("Your notes", contents_idx)
if contents_idx != -1 and contents_end != -1:
    print(text[contents_idx:contents_end])

