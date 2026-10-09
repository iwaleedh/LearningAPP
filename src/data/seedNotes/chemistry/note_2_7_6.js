/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 6
 * "Water of crystallisation and solute solubility"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C.2
 */
export const note_chemistry_2_7_6 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand that some ionic compounds dissolve in water to form hydrated ions, while others form crystalline lattices containing water of crystallisation.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Find waters of crystallisation from a mole ratio",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Water of crystallisation is water present in a fixed stoichiometric ratio within a crystalline hydrate. A hydrate’s molar mass includes its water. On controlled heating, some hydrates lose water to form an anhydrous solid. Determine the water lost from the mass difference, convert both water and remaining salt to moles, then calculate the simplest ratio.<br/><br/>Heat, cool and weigh repeatedly to constant mass when suitable for the substance. Cooling before weighing avoids unreliable hot-balance readings. Incomplete drying leaves too much apparent anhydrous salt and too little calculated water; overheating may decompose the salt and invalidate the calculation. Use a desiccator where needed to limit rehydration."
  }
},
{
            id: 'h-hydration',
            type: 'heading',
            data: { text: 'Hydration of Ions', level: 2 },
            terms: []
        },
        {
            id: 'p-hydration',
            type: 'paragraph',
            data: { text: 'When an ionic lattice like NaCl dissolves in water, the lattice is broken down. The individual Na⁺ and Cl⁻ ions are completely surrounded by water molecules. The δ– oxygen atoms of water attract the Na⁺ ions, and the δ+ hydrogen atoms attract the Cl⁻ ions. The ions are said to be <strong>hydrated</strong>. This releases <strong>hydration energy</strong>.' },
            terms: ['Hydration', 'Hydrated ion']
        },
        {
            id: 'h-crystallisation',
            type: 'heading',
            data: { text: 'Water of Crystallisation', level: 2 },
            terms: []
        },
        {
            id: 'callout-crystallisation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'What is water of crystallisation?',
                text: 'Some ionic salts do not completely separate from water when they crystallize out of an aqueous solution. Instead, water molecules become incorporated directly into the solid ionic lattice. This is called <strong>water of crystallisation</strong>.'
            },
            terms: ['Water of crystallisation']
        },
        {
            id: 'p-example',
            type: 'paragraph',
            data: { text: 'A salt containing water of crystallisation is termed <strong>hydrated</strong>. If the water is completely removed (usually by heating), the salt becomes <strong>anhydrous</strong>.' },
            terms: ['Hydrated salt', 'Anhydrous salt']
        },
        {
            id: 'callout-formula',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Chemical formula formatting',
                text: 'The presence of water of crystallisation is shown by a dot (·) followed by the number of water molecules per formula unit.<br/><br/><strong>Example:</strong> Hydrated copper(II) sulfate is CuSO₄·5H₂O. This means there are 5 moles of water for every 1 mole of CuSO₄ in the crystal lattice. When heated, it turns into anhydrous CuSO₄ (white powder).'
            },
            terms: []
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "An illustrative CuSO₄ hydrate sample of 2.50 g leaves 1.60 g anhydrous CuSO₄. Water lost = 0.90 g. n(H₂O) = 0.90/18.0 = 0.050 mol; n(CuSO₄) = 1.60/159.6 = 0.0100 mol. Ratio ≈ 5:1, giving <strong>CuSO₄·5H₂O</strong>. Use the mass of anhydrous salt, not the starting hydrate, in the CuSO₄ mole calculation."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "A lower mass does not always prove that only water was lost. Check that the hydrate can be dehydrated without decomposition. Do not round an uncertain mole ratio before considering the measurement precision."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What is water of crystallisation?",
        "checked": false
      },
      {
        "text": "How is its mole ratio found?",
        "checked": false
      },
      {
        "text": "Why repeat heating to constant mass?",
        "checked": false
      },
      {
        "text": "How does incomplete drying affect the calculated water ratio?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Water of crystallisation is water present in a fixed stoichiometric ratio within a crystalline hydrate. A hydrate’s molar mass includes its water. On controlled heating, some hydrates lose water to form an anhydrous solid. Determine the water lost from the mass difference, convert both water and remaining salt to moles, then calculate the simplest ratio."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What is water of crystallisation?",
      "answer": "Water incorporated in a fixed mole ratio in the crystal structure of a hydrate."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "How is its mole ratio found?",
      "answer": "Convert mass lost to moles of water and remaining anhydrous salt to moles, then divide to get the ratio."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why repeat heating to constant mass?",
      "answer": "To check that further heating no longer removes a measurable amount of water under the chosen conditions."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "How does incomplete drying affect the calculated water ratio?",
      "answer": "The apparent salt mass is too large and water loss too small, so the calculated waters-per-salt ratio is too low."
    }
  ],
  "summaryText": "Water of crystallisation is water present in a fixed stoichiometric ratio within a crystalline hydrate. A hydrate’s molar mass includes its water. On controlled heating, some hydrates lose water to form an anhydrous solid. Determine the water lost from the mass difference, convert both water and remaining salt to moles, then calculate the simplest ratio.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_7_6;
