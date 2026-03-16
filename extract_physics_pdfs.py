"""
Extract text from Edexcel A Level Physics Revision Notes PDFs.
Output: /tmp/physics_pdfs/{stem}.txt
"""
import os
import pdfplumber

SRC_DIR = os.path.join(os.path.dirname(__file__),
                       "public", "notes", "Edexcel A Level Physics Revision Notes")
OUT_DIR = "/tmp/physics_pdfs"
os.makedirs(OUT_DIR, exist_ok=True)

count = 0
for fname in sorted(os.listdir(SRC_DIR)):
    if not fname.lower().endswith(".pdf"):
        continue
    src = os.path.join(SRC_DIR, fname)
    stem = os.path.splitext(fname)[0]
    out = os.path.join(OUT_DIR, stem + ".txt")
    try:
        with pdfplumber.open(src) as pdf:
            pages = []
            for page in pdf.pages:
                text = page.extract_text()
                if text:
                    pages.append(text)
        with open(out, "w", encoding="utf-8") as f:
            f.write("\n\n".join(pages))
        print(f"✓ {fname}")
        count += 1
    except Exception as e:
        print(f"✗ {fname}: {e}")

print(f"\nExtracted {count} PDFs → {OUT_DIR}")
