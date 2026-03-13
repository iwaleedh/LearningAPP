import PyPDF2
pdf_path = '/Users/ibrahimwaleed/Documents/LearningAPP/public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes/4.4 Classification&Biodiversity.pdf'
with open(pdf_path, 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    with open('extracted_pdf_4_4.txt', 'w') as out:
        for i in range(len(reader.pages)):
            out.write(f'--- Page {i+1} ---\n')
            out.write(reader.pages[i].extract_text() + '\n')
print('Extraction done.')
