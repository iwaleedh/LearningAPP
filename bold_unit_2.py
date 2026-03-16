import glob
import re

files = glob.glob("src/data/seedNotes/physics/note_physics_2_*.js")

keywords = [
    r"refraction", r"interference", r"work function", r"current",
    r"voltage", r"potential difference", r"resistance", r"resistivity",
    r"photons?", r"photoelectric effect", r"threshold frequency",
    r"standing waves?", r"stationary waves?", r"nodes?", r"antinodes?",
    r"polarisation", r"electromotive force", r"internal resistance",
    r"drift velocity", r"Ohm's law", r"superconductors?", r"critical temperature",
    r"thermistor", r"diodes?", r"intensity", r"amplitude", r"wavelength",
    r"frequency", r"phase difference", r"path difference", r"coherence",
    r"superposition", r"diffraction", r"reflection", r"emf"
]

# We need to not match words already inside a tag like <span class="current">. 
# Re.split(r'(<[^>]+>)', text) removes tags from even indices, so we only replace in even indices.
keyword_regex = re.compile(r'\b(' + '|'.join(keywords) + r')\b', re.IGNORECASE)

changed_files = []
total_replacements = 0

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    file_changed = False
    
    for line in lines:
        if re.search(r'\b(text|prompt|answer|summaryText|title):\s*', line):
            # Split off the property name so we just format the value
            # Note: line can be something like `      text: 'The frequency is...',`
            match = re.split(r'(\b(?:text|prompt|answer|summaryText|title):\s*)', line, 1)
            if len(match) == 3:
                prefix, prop, value = match
                
                # We want to replace inside `value`.
                # Hide existing <strong> and html tags so we don't mess them up or doubly nest.
                # First let's just make sure we don't replace inside tags by splitting by tags
                parts = re.split(r'(<[^>]+>)', value)
                
                for i in range(0, len(parts), 2):
                    # Replace keywords and wrap in <strong>
                    # We will temporarily use [[S]] and [[E]] to avoid matching newly created strong tags if for some reason keywords overlap
                    
                    def replacer(m):
                        # But wait, what if keyword is already bolded? (e.g. <strong>current</strong>)
                        # We split by <[^>]+> which separates the tags entirely!
                        # However, right now "<strong>" and "</strong>" are in odd indices.
                        # The text between them is in even indices. So we WILL replace inside.
                        # That means "current" becomes "[[S]]current[[E]]"
                        return f"[[S]]{m.group(0)}[[E]]"
                    
                    parts[i] = keyword_regex.sub(replacer, parts[i])
                
                new_value = "".join(parts)
                
                # Resolve the [[S]] and [[E]]
                # Actually, let's fix the case where something is already surrounded by strong tags.
                # Wait, if we replace <strong>[[S]]current[[E]]</strong> -> we will end up with <strong><strong>current</strong></strong>
                # So we replace <strong>[[S]] with <strong>, and [[E]]</strong> with </strong> etc.
                # Or just turn [[S]] to <strong> and [[E]] to </strong>, then clean up duplicates.
                new_value = new_value.replace('[[S]]', '<strong>').replace('[[E]]', '</strong>')
                
                # Cleanup doubled tags
                new_value = re.sub(r'(<strong>)+', '<strong>', new_value)
                new_value = re.sub(r'(</strong>)+', '</strong>', new_value)
                
                # Clean up nested strong tags, e.g. <strong><strong>current</strong></strong>
                new_value = new_value.replace('<strong><strong>', '<strong>').replace('</strong></strong>', '</strong>')
                
                # Also cleanup if it was already <strong> tag before and after
                new_value = new_value.replace('<strong><strong>', '<strong>').replace('</strong></strong>', '</strong>')

                # What if the original was `<strong>current</strong>`
                # original was parts = ["", "<strong>", "current", "</strong>", ""]
                # it became ["", "<strong>", "[[S]]current[[E]]", "</strong>", ""]
                # string is "<strong>[[S]]current[[E]]</strong>" -> "<strong><strong>current</strong></strong>" -> "<strong>current</strong>"
                # so that works beautifully.
                
                new_line = prefix + prop + new_value
                if new_line != line:
                    file_changed = True
                    # rough count
                    total_replacements += new_line.count('<strong>') - line.count('<strong>')
                new_lines.append(new_line)
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)
            
    if file_changed:
        with open(file, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        changed_files.append(file)

print(f"Updated {len(changed_files)} files.")
print(f"Total net keyword boldings added: {total_replacements}")
print(",".join(changed_files))
