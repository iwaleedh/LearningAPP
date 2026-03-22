import json
import os
import re

tips = {
  "note_1_3_0.js": { "id": "callout-exam-1", "type": "callout", "data": { "style": "warning", "title": "Dot-and-Cross Diagrams: Charge Placement Marks", "text": "Examiners deduct marks if charges are shown <strong>inside</strong> the bracket instead of <strong>outside</strong>. Correct: [Na]⁺ and [Cl]⁻. Also: show cations with <strong>zero outer-shell electrons</strong> — this proves complete transfer. Many students incorrectly leave electrons around the cation or fail to show the brackets at all, costing easy marks." } },
  "note_1_3_1.js": { "id": "callout-exam-2", "type": "callout", "data": { "style": "warning", "title": "Conductivity: It's About Ion Mobility, NOT Just Ion Presence", "text": 'Common error: "Ionic compounds conduct because they have ions." <strong>Wrong.</strong> The key is whether ions are <strong>free to move</strong>. Examiners expect: <strong>Solid = ions in fixed positions → cannot conduct. Molten or aqueous = ions free to move → conducts.</strong> Do not say "ionic compounds always conduct" — you will lose marks.' } },
  "note_1_3_2.js": { "id": "callout-exam-3", "type": "callout", "data": { "style": "warning", "title": "Show Outer-Shell Electrons ONLY & Don't Forget Lone Pairs", "text": "Students often draw all electrons (core + valence) or omit lone pairs, losing marks. Remember: <strong>Only draw electrons in the outermost shell.</strong> Every lone pair must be shown (as :: or • ×) as they determine molecular shape in VSEPR. Double bonds: show as two pairs of dots/crosses side-by-side, not as a single line." } },
  "note_1_3_3.js": { "id": "callout-exam-4", "type": "callout", "data": { "style": "tip", "title": "Metallic Bonding: Why Metals Are Ductile (Unlike Ionic Compounds)", "text": "Examiners test whether you understand the fundamental difference: when ionic layers shift, like-charged ions repel → fracture. When metallic layers shift, the <strong>delocalised electron sea rearranges</strong> → no repulsion, no breaks. This is why <strong>metals can be hammered and drawn into wires while ionic compounds shatter.</strong> Mention the electron sea flow in your answer for full marks." } },
  "note_1_3_4.js": { "id": "callout-exam-5", "type": "callout", "data": { "style": "warning", "title": "Double Bonds = ONE Electron Domain (Critical VSEPR Error)", "text": "High-mark error: counting a double or triple bond as <strong>two or three</strong> electron domains. It is <strong>ONE.</strong> Example: CO₂ has <strong>2 electron domains</strong> (each C=O counts as 1), not 4. This gives linear shape 180°, not tetrahedral. Always count regions of electron density, not individual bonds. Examiners frequently catch this mistake." } },
  "note_1_3_5.js": { "id": "callout-exam-6", "type": "callout", "data": { "style": "warning", "title": "Polar Bond ≠ Polar Molecule (Symmetry Cancels Dipoles)", "text": 'Frequent error: "CO₂ is polar because C=O bonds are polar." <strong>The molecule is non-polar.</strong> Why? Symmetric linear structure: the two C=O dipole moments point in exactly opposite directions and <strong>cancel to zero.</strong> Similarly, CCl₄ has polar C—Cl bonds but is non-polar due to tetrahedral symmetry. Test for overall polarity: <strong>consider both bond polarity AND molecular geometry.</strong>' } },
  "note_1_3_6.js": { "id": "callout-exam-6-1", "type": "callout", "data": { "style": "warning", "title": "EXAM TRAP: Melting ≠ Breaking Covalent Bonds", "text": "Students frequently state that melting a simple molecular solid involves 'breaking covalent bonds.' This is WRONG and loses marks. When Cl₂(s) melts to Cl₂(l), ONLY the weak intermolecular London forces between molecules are broken. Each Cl₂ molecule remains intact — the covalent Cl–Cl bond stays unbroken." } },
  "note_1_3_7.js": { "id": "callout-exam-7-1", "type": "callout", "data": { "style": "tip", "title": "EXAMINER REPORT: Why Graphite Conducts", "text": "Examiners report that many students write 'graphite conducts because it is a giant structure' or 'because electrons are delocalised' without precision. The key: each carbon in graphite forms only 3 σ bonds. The 4th valence electron occupies a delocalised π orbital above/below the hexagonal layers. These mobile π electrons carry charge." } },
  "note_1_3_8.js": { "id": "callout-exam-8-1", "type": "callout", "data": { "style": "warning", "title": "KEY LIMITATION: Bond Enthalpies Are MEAN Values", "text": "Many students calculate ΔH_rxn using mean bond enthalpies and expect an exact answer matching literature values. Examiners deduct marks if you ignore this caveat. The C–H bond has slightly different enthalpies in different molecular environments. Always state: 'These are mean values' in your answer." } },
  "note_1_3_9.js": { "id": "callout-exam-9-1", "type": "callout", "data": { "style": "tip", "title": "DIAGNOSTIC QUESTION: Identifying Giant Covalent vs Ionic", "text": "KEY DISTINCTION: (1) High m.p. + conducts when molten/dissolved = IONIC. (2) Very high m.p. + does NOT conduct in any state = GIANT COVALENT. Example: SiO₂ (non-conductor) is giant covalent, NOT ionic like CaO despite both having similar m.p." } },
  "note_1_3_10.js": { "id": "callout-exam-10-1", "type": "callout", "data": { "style": "warning", "title": "H-BONDING CONDITIONS: Must Have BOTH Donor AND Acceptor", "text": "CRITICAL CONDITIONS: (1) H must be directly bonded to F, O, or N (δ+H forms). (2) A lone pair on another F, O, or N atom must be present (as acceptor)." } },
  "note_1_3_11.js": { "id": "callout-exam-11-1", "type": "callout", "data": { "style": "warning", "title": "SIGN CONVENTION: ΔH = −q/n (Don't Forget the Negative!)", "text": "Examiners mark this as a common error: students write ΔH = q/n and lose marks. THE RULE: when temperature rises (exothermic reaction), q is POSITIVE (solution gained heat). But ΔH must be NEGATIVE for exothermic." } }
}

for filename, tip in tips.items():
    filepath = os.path.join('src/data/seedNotes/chemistry', filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if tip['id'] in content:
        print(f"Skipping {filename} - already injected")
        continue
        
    text_val = tip['data']['text'].replace("'", "\\'").replace('"', '\\"')
    tip_str = f"""    {{
      id: '{tip['id']}',
      type: '{tip['type']}',
      data: {{
        style: '{tip['data']['style']}',
        title: '{tip['data']['title']}',
        text: `{text_val}`
      }}
    }},"""
    
    if "{ id: 'summary'," in content:
        content = re.sub(r"(\{\s*id:\s*'summary',)", tip_str + r"\n    \1", content, count=1)
    elif "{ id: 'h-comparing-types'," in content:
        content = re.sub(r"(\{\s*id:\s*'h-comparing-types',)", tip_str + r"\n    \1", content, count=1)
    else:
        # insert before recall
        insert_pos = content.find('\\n  presentationSlides:')
        if insert_pos == -1:
            insert_pos = content.find('\n  recall:')
        if insert_pos != -1:
            bracket_pos = content.rfind('],', 0, insert_pos)
            if bracket_pos != -1:
                content = content[:bracket_pos] + ',\n' + tip_str.rstrip(',') + '\n  ' + content[bracket_pos:]
                
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filename}")
