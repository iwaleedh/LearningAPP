import re

with open('src/data/seedNotes/chemistry/note_2_10_3.js', 'r') as f:
    content = f.read()

new_blocks = """        {
            id: 'h-competition',
            type: 'heading',
            data: { text: 'Substitution vs. Elimination Competition', level: 3 },
            terms: []
        },
        {
            id: 'callout-competition',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Factors Favouring Substitution vs Elimination',
                text: 'When a halogenoalkane reacts with hydroxide ions (OH⁻), nucleophilic substitution (forming an alcohol) and elimination (forming an alkene) compete against each other. What you get <em>most</em> of depends on the conditions and the type of halogenoalkane:<br/><br/><strong>1. Type of Halogenoalkane:</strong><br/>• <strong>Primary:</strong> mainly substitution.<br/>• <strong>Secondary:</strong> both substitution and elimination.<br/>• <strong>Tertiary:</strong> mainly elimination.<br/><br/><strong>2. Conditions Favouring Substitution:</strong><br/>• Lower temperatures.<br/>• More dilute solutions of NaOH / KOH.<br/>• More <strong>water</strong> in the solvent mixture (aqueous conditions).<br/><br/><strong>3. Conditions Favouring Elimination:</strong><br/>• Higher temperatures.<br/>• Concentrated solutions of NaOH / KOH.<br/>• Pure <strong>ethanol</strong> as the solvent (ethanolic conditions).'
            },
            terms: ['Competition', 'Aqueous', 'Ethanolic']
        },
"""

content = content.replace("        {\n            id: 'h-mechanisms',", new_blocks + "        {\n            id: 'h-mechanisms',")

new_cues = """            { id: 'c-comp1', blockId: 'callout-competition', prompt: 'Which type of halogenoalkane (primary, secondary, or tertiary) is most likely to undergo an elimination reaction when treated with hydroxide ions?' },
            { id: 'c-comp2', blockId: 'callout-competition', prompt: 'State three reaction conditions that would favour elimination over substitution when reacting a halogenoalkane with potassium hydroxide.' },
"""

content = content.replace("        cues: [\n", "        cues: [\n" + new_cues)

content = content.replace("with, cyanide ions, ammonia, and ethanolic KOH.", "with cyanide ions, ammonia, aqueous KOH, and ethanolic KOH (and understand the competition between substitution and elimination).")


with open('src/data/seedNotes/chemistry/note_2_10_3.js', 'w') as f:
    f.write(content)

print('Done')