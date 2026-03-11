import re

with open('src/data/seedNotes/chemistry/note_2_10_1.js', 'r') as f:
    content = f.read()

new_blocks = """        {
            id: 'h-physical-properties',
            type: 'heading',
            data: { text: 'Physical Properties', level: 2 },
            terms: []
        },
        {
            id: 'h-boiling-points',
            type: 'heading',
            data: { text: 'Boiling Points', level: 3 },
            terms: []
        },
        {
            id: 'p-boiling-points',
            type: 'paragraph',
            data: { text: 'Halogenoalkanes have higher boiling points than the corresponding alkanes because they contain polar bonds and have more electrons, leading to stronger <strong>van der Waals dispersion forces</strong> and dipole-dipole interactions. Their boiling points follow two main trends:<br/><br/>• <strong>Chain length:</strong> Boiling point increases as the carbon chain gets longer due to an increase in the number of electrons and increased surface area for stronger dispersion forces.<br/>• <strong>Halogen atom:</strong> For a given alkyl group, boiling points increase in the order <strong>fluoroalkane < chloroalkane < bromoalkane < iodoalkane</strong>. This is because the increasing size and number of electrons of the halogen atoms leads to stronger London dispersion forces.' },
            terms: ['Van der Waals forces', 'Dipole-dipole interactions', 'London dispersion forces']
        },
        {
            id: 'h-solubility',
            type: 'heading',
            data: { text: 'Solubility', level: 3 },
            terms: []
        },
        {
            id: 'p-solubility',
            type: 'paragraph',
            data: { text: 'Halogenoalkanes are <strong>insoluble in water</strong>. Although their molecules are polar, the energy required to break the strong hydrogen bonds between water molecules is much greater than the energy released when new interactions are formed between the halogenoalkane and water. They do, however, dissolve in organic solvents.' },
            terms: ['Solubility', 'Hydrogen bonds']
        },
        {
            id: 'h-reactivity-intro',
            type: 'heading',
            data: { text: 'Reactivity of the Carbon-Halogen Bond', level: 2 },
            terms: []
        },
        {
            id: 'p-reactivity',
            type: 'paragraph',
            data: { text: 'The reactivity of a halogenoalkane is primarily determined by <strong>bond enthalpy</strong> rather than bond polarity. Although the C-F bond is the most polar (which would attract nucleophiles most strongly), it is also the <strong>strongest</strong> bond, meaning it requires the most energy to break. <br/><br/>Conversely, the C-I bond is the least polar but the <strong>weakest</strong>. As a result, iodoalkanes react the fastest, and fluoroalkanes react the slowest. The order of reactivity is: <strong>iodo- > bromo- > chloro- > fluoro-</strong>.' },
            terms: ['Bond enthalpy', 'Bond polarity', 'Relative reactivity']
        },
"""

content = content.replace("        {\n            id: 'h-hydrolysis',", new_blocks + "        {\n            id: 'h-hydrolysis',")

new_cues = """            { id: 'c-bg1', blockId: 'p-boiling-points', prompt: 'Explain why 1-iodopropane has a higher boiling point than 1-chloropropane.' },
            { id: 'c-bg2', blockId: 'p-solubility', prompt: 'Why are halogenoalkanes insoluble in water despite having polar bonds?' },
            { id: 'c-bg3', blockId: 'p-reactivity', prompt: 'Which factor is more important in determining the reactivity of a halogenoalkane: bond polarity or bond enthalpy? Which reacts faster: a chloroalkane or an iodoalkane?' },
"""

content = content.replace("            { id: 'c2', blockId: 'callout-hydrolysis',", new_cues + "            { id: 'c2', blockId: 'callout-hydrolysis',")

# Update objective to mention physical properties
content = content.replace("understand their hydrolysis reaction", "understand their physical properties (boiling point, solubility), reactivity trends, and hydrolysis reaction")

with open('src/data/seedNotes/chemistry/note_2_10_1.js', 'w') as f:
    f.write(content)

print('Done')