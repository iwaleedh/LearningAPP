import sys

file_path = 'src/data/seedNotes/chemistry/note_4_15_6.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

start_marker = "    {\n      id: 'list-ester-properties',"
end_marker = "    // ── Ester Hydrolysis ─────────────────────────────────────────────────────"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print('Could not find markers')
    sys.exit(1)

new_block = """    {
      id: 'list-ester-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Colourless liquids with relatively low melting and boiling points',
          'Lower boiling points than equivalent carboxylic acids — esters CANNOT form hydrogen bonds with each other (no O–H group), so they only have dipole-dipole and London dispersion forces',
          'Short-chain esters (e.g., methyl ethanoate) ARE fairly soluble in water — the lone pairs on the ester oxygens can accept hydrogen bonds from water molecules',
          'Solubility rapidly decreases as the carbon chain lengthens — the large non-polar hydrocarbon parts force themselves between water molecules, breaking water-water H-bonds without replacing them',
          'Very pleasant, distinctive fruity smells — used in artificial flavourings and perfumes',
          'Pentyl methanoate smells of pears; methyl butanoate smells of apples (not required to memorise)',
          'Also used as solvents (e.g., ethyl ethanoate in nail polish remover) and plasticisers'
        ]
      }
    },
    {
      id: 'callout-fats-oils',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Fats and Oils (Large Esters)',
        text: 'Animal and vegetable fats and oils are large, complex esters called triglycerides (triesters of glycerol / propane-1,2,3-triol).\\n\\n• **Fats** are usually solid at room temp. Their hydrocarbon chains are mostly saturated (no C=C double bonds), allowing the molecules to pack closely together ⇒ stronger London dispersion forces ⇒ higher melting point.\\n• **Oils** are usually liquid at room temp. Their chains are unsaturated (contain one or more cis C=C double bonds) which creates kinks in the chain. This prevents close, tidy packing ⇒ weaker London dispersion forces ⇒ lower melting point.'
      }
    },

"""

new_text = text[:start_idx] + new_block + text[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Successfully replaced block.')
