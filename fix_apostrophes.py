import glob

def fix_primes_in_js(content):
    """
    Walk through JS source character by character.
    Inside single-quoted strings, escape apostrophes used as mathematical
    prime/derivative notation — i.e., ' followed by space, =, +, /, ·, (, ).
    """
    result = []
    i = 0
    n = len(content)
    # Characters that indicate a prime/derivative apostrophe (not string end)
    prime_followers = set(' =+/*·,\t\n')
    
    while i < n:
        ch = content[i]
        
        # Skip double-quoted strings
        if ch == '"':
            result.append(ch)
            i += 1
            while i < n:
                c = content[i]
                result.append(c)
                if c == '\\':
                    i += 1
                    if i < n:
                        result.append(content[i])
                elif c == '"':
                    i += 1
                    break
                i += 1
            continue
        
        # Handle single-quoted strings
        if ch == "'":
            result.append(ch)
            i += 1
            while i < n:
                c = content[i]
                if c == '\\':
                    # Already escaped — keep as-is
                    result.append(c)
                    i += 1
                    if i < n:
                        result.append(content[i])
                        i += 1
                    continue
                if c == "'":
                    # Peek at next char to decide: prime or end of string?
                    next_ch = content[i+1] if i+1 < n else ''
                    if next_ch in prime_followers:
                        # This looks like a prime notation — escape it
                        result.append("\\'")
                        i += 1
                    else:
                        # End of string
                        result.append(c)
                        i += 1
                        break
                    continue
                result.append(c)
                i += 1
            continue
        
        # Template literals - skip
        if ch == '`':
            result.append(ch)
            i += 1
            while i < n:
                c = content[i]
                result.append(c)
                if c == '\\':
                    i += 1
                    if i < n:
                        result.append(content[i])
                elif c == '`':
                    i += 1
                    break
                i += 1
            continue
        
        # Line comments
        if ch == '/' and i+1 < n and content[i+1] == '/':
            while i < n and content[i] != '\n':
                result.append(content[i])
                i += 1
            continue
        
        result.append(ch)
        i += 1
    
    return ''.join(result)


files = glob.glob('src/data/seedNotes/mathematics/note_2_[678]*.js')
files += glob.glob('src/data/seedNotes/mathematics/note_2_[2-5]*.js')

for path in sorted(files):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    new_content = fix_primes_in_js(content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed: {path}')


