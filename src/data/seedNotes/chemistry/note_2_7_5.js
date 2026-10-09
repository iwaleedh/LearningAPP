/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 5
 * "Choosing solvents and predicting solubility"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C
 */
export const note_chemistry_2_7_5 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply knowledge of intermolecular forces to predict whether a given solute will dissolve in a given solvent.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Justify a solvent choice for the actual task",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Identify whether the substance is ionic, polar or mainly non-polar, then consider interactions it can make with a candidate solvent. For extraction, choose a solvent that dissolves the target and is immiscible with the other liquid. For recrystallisation, choose one in which the product is soluble when hot but poorly soluble when cold, while impurities can be removed. Solvent choice also depends on chemical inertness, boiling range and suitable handling conditions.<br/><br/>In a separating funnel, identify layers from their densities or an observed test, rather than assuming the organic layer is always on top. Use the solubility of each substance to decide which layer contains the product. A good solvent for extraction is not automatically good for recrystallisation."
  }
},
{
            id: 'p-energy',
            type: 'paragraph',
            data: { text: 'Dissolving is an energy-driven process. For a substance to dissolve, the energy released when new intermolecular forces form between the solute and solvent must be roughly equal to or greater than the energy required to break the existing solute-solute and solvent-solvent forces.' },
            terms: []
        },
        {
            id: 'h-examples',
            type: 'heading',
            data: { text: 'Specific Examples to Know', level: 2 },
            terms: []
        },
        {
            id: 'callout-iodine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Solubility of Iodine (I₂)',
                text: '• <strong>In water:</strong> Almost completely insoluble. I₂ is non-polar and can only form London forces, which don\'t release enough energy to break water\'s strong hydrogen bonds.<br/>• <strong>In hexane (or other organic solvents):</strong> Highly soluble. The London forces forming between I₂ and hexane are similar in strength to those being broken in pure I₂ and pure hexane. The resulting solution is purple.'
            },
            terms: []
        },
        {
            id: 'callout-hcl',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Solubility of Hydrogen Chloride (HCl)',
                text: '• <strong>In water:</strong> Extremely soluble. However, it doesn\'t just dissolve—it reacts. The highly polar H₂O molecules pull the polar HCl molecule apart, ionizing it completely to form H⁺(aq) and Cl⁻(aq).<br/>• <strong>In methylbenzene (non-polar):</strong> It dissolves as intact HCl molecules (gas dissolved in liquid) held by weak dipole-induced dipole forces. It does not ionize and the solution does not act as an acid.'
            },
            terms: ['Ionization']
        },
        {
            id: 'table-summary',
            type: 'comparisonTable',
            data: {
                caption: 'Summary of solvent types',
                headers: ['Solvent type', 'Examples', 'Dissolves...'],
                rows: [
                    ['Polar (capable of H-bonding)', 'Water', 'Ionic salts, alcohols, amines, carboxylic acids'],
                    ['Polar (cannot H-bond)', 'Propanone, halogenoalkanes', 'Polar covalent molecules with permanent dipoles'],
                    ['Non-polar', 'Hexane, cyclohexane', 'Alkanes, halogens (I₂, Br₂, Cl₂), large non-polar organic molecules']
                ]
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
    "text": "A neutral organic product in an aqueous mixture may be extracted into an immiscible organic solvent. A water-miscible solvent would not create two separable layers. In recrystallisation, using excessive hot solvent leaves too much product dissolved after cooling and reduces recovery."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "“It dissolves the product” is not a complete extraction justification: the solvent must also make a separable layer. Do not use “organic solvent floats” as a universal rule."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What two key properties should an extraction solvent have?",
        "checked": false
      },
      {
        "text": "Why use the minimum hot solvent for recrystallisation?",
        "checked": false
      },
      {
        "text": "Is the organic layer always the upper layer?",
        "checked": false
      },
      {
        "text": "What solubility change makes a solvent useful for recrystallisation?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Identify whether the substance is ionic, polar or mainly non-polar, then consider interactions it can make with a candidate solvent. For extraction, choose a solvent that dissolves the target and is immiscible with the other liquid. For recrystallisation, choose one in which the product is soluble when hot but poorly soluble when cold, while impurities can be removed. Solvent choice also depends on chemical inertness, boiling range and suitable handling conditions."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What two key properties should an extraction solvent have?",
      "answer": "It should dissolve the target and be immiscible with the other liquid; it should also be chemically suitable."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why use the minimum hot solvent for recrystallisation?",
      "answer": "Excess solvent keeps more product dissolved when cold, lowering the crystal recovery."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Is the organic layer always the upper layer?",
      "answer": "No. Layer order depends on density."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What solubility change makes a solvent useful for recrystallisation?",
      "answer": "The product should be much more soluble hot than cold."
    }
  ],
  "summaryText": "Identify whether the substance is ionic, polar or mainly non-polar, then consider interactions it can make with a candidate solvent. For extraction, choose a solvent that dissolves the target and is immiscible with the other liquid. For recrystallisation, choose one in which the product is soluble when hot but poorly soluble when cold, while impurities can be removed. Solvent choice also depends on chemical inertness, boiling range and suitable handling conditions.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_7_5;
