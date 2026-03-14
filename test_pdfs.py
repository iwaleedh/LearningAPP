import os
import glob
import PyPDF2
import re

pdf_dir = "/Users/ibrahimwaleed/Documents/LearningAPP/public/notes/Biology/savemyexam bio/Edexcel International A Level (IAL) Biology Revision Notes"
js_files = glob.glob('src/data/seedNotes/biology/*.js')

# load all JS content into memory
js_contents = ""
for jf in js_files:
    with open(jf, 'r', encoding='utf-8') as f:
        js_contents += f.read()

def normalize(text):
    # Remove all spaces and non-alphanumeric chars
    return re.sub(r'[^a-zA-Z0-9]', '', text.lower())

normalized_js = normalize(js_contents)

all_pdfs = sorted(os.listdir(pdf_dir))
missing = []

print("Analyzing PDFs...")

for pdf_name in all_pdfs:
    if not pdf_name.endswith('.pdf'): continue
    path = os.path.join(pdf_dir, pdf_name)
    try:
        with open(path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            # Contents usually on page 0
            text = reader.pages[0].extract_text()
            # Find contents section
            if 'Contents' in text:
                contents = text.split('Contents')[1].split('Your notes')[0].strip()
                lines = contents.split('\n')
                
                # Check if at least 50% of the headers exist in the notes
                found = 0
                valid_lines = [l.strip() for l in lines if len(l.strip()) > 5]
                for line in valid_lines:
                    # Normalize line
                    if normalize(line) in normalized_js:
                        found += 1
                        
                total = len(valid_lines)
                ratio = found / total if total > 0 else 0
                print(f"{pdf_name}: {found}/{total} headers found ({ratio*100:.1f}%)")
                if ratio < 0.5:
                    missing.append(pdf_name)
            else:
                print(f"{pdf_name}: No Contents found on first page")
    except Exception as e:
        print(f"Error reading {pdf_name}: {e}")

print("\n--- RESULTS ---")
print("Potentially unintegrated PDFs:")
if not missing:
    print("None! All PDFs appear to be integrated.")
for m in missing:
    print("-", m)
