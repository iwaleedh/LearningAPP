"""
Fix script for apostrophe corruption introduced by faulty prime-notation escaper.

Two categories of \' in the files:
  GOOD: f\'(x), F\'(x), g\'(x), Don\'t, don\'t — legitimate escaped apostrophes
  BAD : id: 'obj\', etc — closing string quotes that were incorrectly escaped

Strategy:
1. Un-escape ALL \' that are CLOSING QUOTE corruptions.
   Pattern: they appear before newline, ' }', ',\n', etc.
2. Keep GOOD \' instances.
"""
import re, glob

def unescape_bad(content):
    changes = 0

    # 1. Universal: id: 'IDENTIFIER\' → id: 'IDENTIFIER'
    #    (any property id/type/style/etc with identifier-like value ending in \')
    new, n = re.subn(r"(\bid: '[^'\\\n]+)\\'", r"\1'", content)
    changes += n
    content = new

    # 2. \' followed immediately by actual newline (end of string value on its own line)
    #    Un-escape only if not a legitimate GOOD escape — GOOD escapes have text after them
    #    e.g. f\'(x) has ( after, Don\'t has t after — those aren't \'\n
    new, n = re.subn(r"\\'\n", "'\n", content)
    changes += n
    content = new

    # 3. \' followed by space-brace  ' }  (JS block/object close)
    new, n = re.subn(r"\\' \}", "' }", content)
    changes += n
    content = new

    # 4. \' followed by comma-newline  ',\n  (closing quote then list separator)
    #    Safe: real primes before ,\n are extremely unlikely (would use ; or . after)
    new, n = re.subn(r"\\',\n", "',\n", content)
    changes += n
    content = new

    return content, changes


files = glob.glob('src/data/seedNotes/mathematics/note_2_*.js')

total_files = 0
for path in sorted(files):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    new_content, n = unescape_bad(content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed ({n} changes): {path}')
        total_files += 1

print(f"\nDone. {total_files} files updated.")
