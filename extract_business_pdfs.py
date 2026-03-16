import os
import subprocess

try:
    import pdfplumber
except ImportError:
    subprocess.check_call(["pip", "install", "pdfplumber"])
    import pdfplumber

SOURCE_DIR = "public/notes/Edexcel A Level Business"
EXTRACT_DIR = "/tmp/business_pdfs"

def main():
    if not os.path.exists(EXTRACT_DIR):
        os.makedirs(EXTRACT_DIR)

    total = 0
    errors = 0

    for root, dirs, files in os.walk(SOURCE_DIR):
        # Skip hidden/system files
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for file in sorted(files):
            if not file.endswith(".pdf"):
                continue

            src_pdf = os.path.join(root, file)
            stem = file.replace(".pdf", "")
            dest_txt = os.path.join(EXTRACT_DIR, stem + ".txt")

            print(f"Extracting: {src_pdf} ...")
            text_content = ""
            try:
                with pdfplumber.open(src_pdf) as pdf:
                    for page in pdf.pages:
                        text = page.extract_text()
                        if text:
                            text_content += text + "\n"
            except Exception as e:
                print(f"  ERROR: {e}")
                errors += 1
                continue

            with open(dest_txt, "w", encoding="utf-8") as f:
                f.write(text_content)

            print(f"  -> {dest_txt} ({len(text_content)} chars)")
            total += 1

    print(f"\nDone. Extracted {total} PDFs to {EXTRACT_DIR}. Errors: {errors}")

if __name__ == "__main__":
    main()
