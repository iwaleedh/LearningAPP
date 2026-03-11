import re

with open('src/data/seedNotes/chemistry/note_2_10_6.js', 'r') as f:
    content = f.read()

new_blocks = """        {
            id: 'h-case-study',
            type: 'heading',
            data: { text: 'Case Study: Preparing Bromoethane', level: 2 },
            terms: []
        },
        {
            id: 'callout-bromoethane',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Practical Steps: Making & Purifying Bromoethane',
                text: '<strong>1. Reaction:</strong> Ethanol is reacted with potassium bromide and concentrated sulfuric acid. The acid is added slowly with cooling because the reaction is highly exothermic.<br/><br/><strong>2. Collection:</strong> Heat gently. Bromoethane has a low boiling point and is very volatile. It is often distilled off as it forms and collected under water in a flask surrounded by ice. This prevents evaporation and dissolves any escaping HBr gas.<br/><br/><strong>3. Impurities:</strong> The unpurified bromoethane contains HBr, Br₂ (from oxidation of bromide), SO₂, unreacted ethanol, and ethoxyethane.<br/><br/><strong>4. Purification Sequence:</strong><br/>• <strong>Water wash:</strong> Removes water-soluble impurities (HBr, ethanol, SO₂). Bromoethane is the dense lower layer (which is kept).<br/>• <strong>Sodium carbonate wash:</strong> Neutralises remaining acidic impurities (HBr, SO₂). Important to vent CO₂!<br/>• <strong>Water wash:</strong> Removes inorganic salts formed in the previous step.<br/>• <strong>Drying:</strong> Add anhydrous calcium chloride. It absorbs water and can also absorb remaining ethanol.<br/>• <strong>Redistillation:</strong> Distil and collect the sweet-smelling fraction boiling at 35–40°C.'
            },
            terms: ['Volatile', 'Exothermic', 'Washing', 'Anhydrous calcium chloride']
        }
"""

if "h-case-study" not in content:
    content = content.replace("    ],\n    recall: {", new_blocks + "    ],\n    recall: {")

new_cues = """            { id: 'c-br1', blockId: 'callout-bromoethane', prompt: 'When preparing bromoethane, why is the distillate often collected under cold water?' },
            { id: 'c-br2', blockId: 'callout-bromoethane', prompt: 'What is the purpose of washing crude bromoethane with sodium carbonate solution, and what safety precaution must be taken?' },
            { id: 'c-br3', blockId: 'callout-bromoethane', prompt: 'Which drying agent is particularly useful for drying bromoethane because it also absorbs unreacted ethanol?' },
"""

if "c-br1" not in content:
    content = content.replace("        cues: [\n", "        cues: [\n" + new_cues)

with open('src/data/seedNotes/chemistry/note_2_10_6.js', 'w') as f:
    f.write(content)

print('Done 6')
