import os
import shutil
import json
import subprocess

try:
    import pdfplumber
except ImportError:
    subprocess.check_call(["pip", "install", "pdfplumber"])
    import pdfplumber

SOURCE_DIR = "public/notes/Edexcel A Level Maths Mechanics"
TARGET_PDF_DIR = "public/notes/mathematics"
EXTRACT_DIR = "mechanics_extracted"

def slugify(text):
    return text.lower().replace(" & ", "-and-").replace(" ", "-").replace("---", "-").strip("-")

def main():
    if not os.path.exists(TARGET_PDF_DIR):
        os.makedirs(TARGET_PDF_DIR)
    if not os.path.exists(EXTRACT_DIR):
        os.makedirs(EXTRACT_DIR)

    for root, dirs, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.endswith(".pdf"):
                topic = os.path.basename(root)
                topic_slug = slugify(topic)
                file_slug = file # file is already slugified mostly
                
                # Copy PDF
                topic_pdf_dir = os.path.join(TARGET_PDF_DIR, topic_slug)
                if not os.path.exists(topic_pdf_dir):
                    os.makedirs(topic_pdf_dir)
                
                src_pdf = os.path.join(root, file)
                dest_pdf = os.path.join(topic_pdf_dir, file_slug)
                shutil.copy2(src_pdf, dest_pdf)

                # Extract Text
                topic_extract_dir = os.path.join(EXTRACT_DIR, topic_slug)
                if not os.path.exists(topic_extract_dir):
                    os.makedirs(topic_extract_dir)
                    
                dest_txt = os.path.join(topic_extract_dir, file.replace(".pdf", ".txt"))
                
                print(f"Extracting {src_pdf} to {dest_txt}...")
                
                try:
                    text_content = []
                    with pdfplumber.open(src_pdf) as pdf:
                        for page in pdf.pages:
                            text = page.extract_text()
                            if text:
                                text_content.append(text)
                    
                    with open(dest_txt, "w", encoding="utf-8") as f:
                        f.write("\n\n---\n\n".join(text_content))
                except Exception as e:
                    print(f"Error extracting {src_pdf}: {e}")

if __name__ == "__main__":
    main()
