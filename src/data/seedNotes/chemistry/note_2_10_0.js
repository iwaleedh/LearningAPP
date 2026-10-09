/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 0
 * "General Principles: Reaction types and intermediate species"
 * Source: Pearson Edexcel IAL Chemistry — Section 10A
 */
export const note_chemistry_2_10_0 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Classify reactions as substitution, addition, elimination, oxidation, reduction, hydrolysis, or polymerization, and understand the difference between electrophiles, nucleophiles, and radicals.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Identify the electron-flow pattern before naming a mechanism",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "An electrophile accepts an electron pair; a nucleophile donates an electron pair. Charge is a clue, not the definition: NH₃ is a neutral nucleophile because nitrogen has a lone pair, and the δ+ carbon in a polar C–halogen bond can be attacked by a nucleophile. Full-headed curly arrows show movement of electron pairs and begin at a lone pair or bond.<br/><br/>Addition joins reactants without loss of a small molecule; substitution replaces one group by another; elimination removes groups and makes a multiple bond. Homolytic fission gives one electron to each atom and forms radicals. Heterolytic fission gives both bonding electrons to one atom and can form ions."
  }
},
{
            id: 'h-types',
            type: 'heading',
            data: { text: 'Reaction Types', level: 2 },
            terms: []
        },
        {
            id: 'table-types',
            type: 'comparisonTable',
            data: {
                caption: 'Important Organic Reaction Types',
                headers: ['Reaction Type', 'Description', 'Characteristic feature'],
                rows: [
                    ['Substitution', 'An atom or group is replaced by a different atom or group.', 'Two reactants form two products.'],
                    ['Addition', 'Two molecules join to form a single product.', 'Involves breaking a double (π) bond.'],
                    ['Elimination', 'A small molecule is removed from a larger one.', 'Forms a double bond (the opposite of addition).'],
                    ['Hydrolysis', 'Splitting a molecule using water (often catalysed by acid or alkali).', 'Water or OH⁻ is a reactant.'],
                    ['Polymerisation', 'Many monomer molecules join to form a giant long-chain molecule.', 'Forms a polymer.'],
                    ['Oxidation', 'Gain of oxygen or loss of hydrogen.', 'Often denoted by [O] over the arrow.'],
                    ['Reduction', 'Loss of oxygen or gain of hydrogen.', 'Often denoted by [H] over the arrow.']
                ]
            },
            terms: ['Substitution', 'Addition', 'Elimination', 'Hydrolysis', 'Oxidation', 'Reduction']
        },
        {
            id: 'h-reagents',
            type: 'heading',
            data: { text: 'Reactive Species (Reagents)', level: 2 },
            terms: []
        },
        {
            id: 'list-reagents',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Nucleophile:</strong> An electron pair DONOR. Typically a negative ion (e.g. OH⁻, CN⁻) or a neutral molecule with a lone pair (e.g. H₂O, NH₃). They attack areas of positive charge (δ+).',
                    '<strong>Electrophile:</strong> An electron pair ACCEPTOR. Typically a positive ion (e.g. H⁺, NO₂⁺) or a molecule with a partial positive charge (δ+). They attack areas of high electron density (like C=C double bonds).',
                    '<strong>Free Radical:</strong> A species with an unpaired electron (e.g. Cl•). They are highly reactive and formed by <em>homolytic</em> fission.'
                ]
            },
            terms: ['Nucleophile', 'Electrophile', 'Free radical']
        },
        {
            id: 'callout-fission',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Bond Fission',
                text: '• <strong>Homolytic Fission:</strong> A covalent bond breaks evenly, with one electron going to each atom, forming two <strong>radicals</strong>. Shown with single-headed (fish-hook) curly arrows.<br/>• <strong>Heterolytic Fission:</strong> A covalent bond breaks unevenly, with both electrons going to one atom, forming a positive and negative <strong>ion</strong>. Shown with a double-headed curly arrow.'
            },
            terms: ['Homolytic fission', 'Heterolytic fission']
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "In CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻, hydroxide donates a lone pair to the carbon attached to bromine. A curly arrow starts at the oxygen lone pair and points to that carbon; a second arrow goes from the C–Br bond to Br. This is nucleophilic substitution, with no change in the carbon skeleton."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "An arrow starting at a positive charge does not show donation of an electron pair. Do not classify every negatively charged species as a radical: charge and unpaired electrons are different features."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Define a nucleophile.",
        "checked": false
      },
      {
        "text": "Why can neutral NH₃ be a nucleophile?",
        "checked": false
      },
      {
        "text": "Where must a full-headed curly arrow begin?",
        "checked": false
      },
      {
        "text": "How do homolytic and heterolytic fission differ?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "An electrophile accepts an electron pair; a nucleophile donates an electron pair. Charge is a clue, not the definition: NH₃ is a neutral nucleophile because nitrogen has a lone pair, and the δ+ carbon in a polar C–halogen bond can be attacked by a nucleophile. Full-headed curly arrows show movement of electron pairs and begin at a lone pair or bond."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Define a nucleophile.",
      "answer": "An electron-pair donor."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why can neutral NH₃ be a nucleophile?",
      "answer": "Nitrogen has a lone pair available for donation."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Where must a full-headed curly arrow begin?",
      "answer": "At the electron pair being moved, such as a lone pair or a covalent bond."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "How do homolytic and heterolytic fission differ?",
      "answer": "Homolytic fission splits the bonding electrons one to each atom; heterolytic fission transfers both to one atom."
    }
  ],
  "summaryText": "An electrophile accepts an electron pair; a nucleophile donates an electron pair. Charge is a clue, not the definition: NH₃ is a neutral nucleophile because nitrogen has a lone pair, and the δ+ carbon in a polar C–halogen bond can be attacked by a nucleophile. Full-headed curly arrows show movement of electron pairs and begin at a lone pair or bond.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_10_0;
