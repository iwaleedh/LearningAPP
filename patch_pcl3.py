import re

with open('src/data/seedNotes/chemistry/note_2_10_4.js', 'r') as f:
    content = f.read()

old_chloro_row = "['Chloroalkane', 'PCl₅ (solid)<br/>OR conc. HCl (for 3° alcohols)', 'ROH + PCl₅ → RCl + POCl₃ + <strong>HCl</strong><br/>The steamy fumes of HCl gas prove the presence of an -OH group.<br/><br/><em>Tertiary alcohols react rapidly with conc. HCl at room temp.</em>']"
new_chloro_row = "['Chloroalkane', 'PCl₅ (solid) <br/>OR PCl₃ (liquid) <br/>OR conc. HCl (for 3° alcohols)', '<strong>PCl₅:</strong> ROH + PCl₅ → RCl + POCl₃ + <strong>HCl</strong> (steamy fumes). Violent reaction at room temp, used as -OH test.<br/><strong>PCl₃:</strong> 3ROH + PCl₃ → 3RCl + H₃PO₃<br/><br/><em>Tertiary alcohols react rapidly with conc. HCl at room temp without extra heating!</em>']"

if old_chloro_row in content:
    content = content.replace(old_chloro_row, new_chloro_row)
else:
    print("Could not find old chloroalkane row")

# Adjust summaryText slightly
old_summary = "Chloroalkanes: use solid PCl₅ (releases steamy HCl fumes) or conc HCl for 3° alcohols."
new_summary = "Chloroalkanes: use solid PCl₅ (violent, releases steamy HCl fumes), liquid PCl₃, or conc HCl for 3° alcohols."
if old_summary in content:
    content = content.replace(old_summary, new_summary)


with open('src/data/seedNotes/chemistry/note_2_10_4.js', 'w') as f:
    f.write(content)

print('Done 4')
