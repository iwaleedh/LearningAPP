import sys
from PyPDF2 import PdfReader

def extract_pdf_text(filepath):
    try:
        reader = PdfReader(filepath)
        with open("extracted_pdf_4_1.txt", "w", encoding="utf-8") as f:
            for i, page in enumerate(reader.pages):
                f.write(f"\n--- Page {i+1} ---\n")
                f.write(page.extract_text() + "\n")
        print("Extraction successful. Saved to extracted_pdf_4_1.txt")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_pdf_text("/Users/ibrahimwaleed/Documents/LearningAPP/public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes/4.1 PlantStructure&Function.pdf")
