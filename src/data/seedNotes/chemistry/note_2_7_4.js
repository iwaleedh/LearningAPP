/**
 * Seed note: Chemistry · Unit 2 · Topic 7 · Subtopic 4
 * "Solubility patterns"
 * Source: Pearson Edexcel IAL Chemistry — Section 7C
 */
export const note_chemistry_2_7_4 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand, in terms of intermolecular interactions, the significance of intermolecular forces in explaining the solubility of organic and inorganic substances in polar and non-polar solvents.' },
            terms: []
        },
        {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Solubility is a balance of interactions",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Dissolving requires separating solute particles, disrupting some solvent–solvent interactions and forming solute–solvent interactions. “Like dissolves like” is a useful first guide, not a universal law. Non-polar solutes often dissolve in non-polar solvents; small polar molecules can interact with water through dipoles or hydrogen bonds.<br/><br/>For an ionic solid, the lattice must be disrupted and the ions become hydrated. Water’s oxygen end points towards cations; its hydrogen ends point towards anions. The energy balance and entropy change determine whether dissolution is favourable. Ionic charge alone does not guarantee high water solubility, and temperature effects depend on the particular dissolution process."
  }
},
{
            id: 'callout-rule',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The golden rule of solubility: "Like dissolves like"',
                text: '• <strong>Polar</strong> substances (and ionic compounds) tend to dissolve in <strong>polar</strong> solvents (like water).<br/>• <strong>Non-polar</strong> substances tend to dissolve in <strong>non-polar</strong> solvents (like hexane or cyclohexane).'
            },
            terms: ['Solubility']
        },
        {
            id: 'h-polar',
            type: 'heading',
            data: { text: 'Dissolving in Water (Polar Solvent)', level: 2 },
            terms: []
        },
        {
            id: 'table-water',
            type: 'comparisonTable',
            data: {
                caption: 'Solubility of different substances in water',
                headers: ['Substance Type', 'Soluble in water?', 'Reason why'],
                rows: [
                    ['Ionic compounds (e.g. NaCl)', 'Usually YES', 'The δ+ hydrogens of water attract the anions, and the δ– oxygen attracts the cations (hydration).'],
                    ['Simple alcohols (e.g. ethanol)', 'YES', 'The –OH group can form hydrogen bonds with water molecules.'],
                    ['Halogenoalkanes (e.g. chloroethane)', 'NO', 'Although they have a polar C-X bond, they cannot form H-bonds with water, and their dipole-dipole forces aren\'t strong enough to disrupt water\'s H-bond network.'],
                    ['Alkanes (e.g. hexane)', 'NO', 'They are purely non-polar. They can only form weak London forces with water, which isn\'t enough energy to break the strong H-bonds between water molecules.']
                ]
            },
            terms: ['Hydration']
        },
        {
            id: 'h-chain',
            type: 'heading',
            data: { text: 'The effect of chain length on solubility', level: 2 },
            terms: []
        },
        {
            id: 'p-chain',
            type: 'paragraph',
            data: { text: 'As the non-polar hydrocarbon chain of an alcohol increases in length (e.g. moving from methanol to hexanol), its solubility in water <strong>decreases</strong>. The long hydrocarbon "tail" is hydrophobic (water-fearing) and gets in the way of water molecules trying to hydrogen bond with each other. Hexanol is practically insoluble in water.' },
            terms: ['Hydrophobic']
        },
        {
            id: 'h-nonpolar',
            type: 'heading',
            data: { text: 'Dissolving in Non-Polar Solvents', level: 2 },
            terms: []
        },
        {
            id: 'p-nonpolar',
            type: 'paragraph',
            data: { text: 'Non-polar substances, such as iodine (I₂) or alkanes, dissolve well in non-polar solvents like hexane. This is because the London forces that form between the solute and the solvent are of similar strength to the London forces broken in the pure solute and pure solvent.' },
            terms: []
        }
    ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Iodine is much more soluble in a suitable non-polar organic solvent than in water because interactions with the organic solvent better compensate for the interactions disrupted. AgCl remains poorly soluble in water despite being ionic. These two examples show why particle type is a guide but not a complete prediction."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Do not explain the hydration of ions as covalent-bond formation. Do not say every hot solvent dissolves more of every solute; use the stated data or dissolution enthalpy when supplied."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What three interaction changes occur during dissolution?",
        "checked": false
      },
      {
        "text": "Which end of water points towards a cation?",
        "checked": false
      },
      {
        "text": "Why is “ionic means soluble” unreliable?",
        "checked": false
      },
      {
        "text": "What does “like dissolves like” mean?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Dissolving requires separating solute particles, disrupting some solvent–solvent interactions and forming solute–solvent interactions. “Like dissolves like” is a useful first guide, not a universal law. Non-polar solutes often dissolve in non-polar solvents; small polar molecules can interact with water through dipoles or hydrogen bonds."
  }
}
  ],
    recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What three interaction changes occur during dissolution?",
      "answer": "Solute–solute and some solvent–solvent attractions are disrupted, and solute–solvent attractions form."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Which end of water points towards a cation?",
      "answer": "The partially negative oxygen end."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Why is “ionic means soluble” unreliable?",
      "answer": "Hydration and entropy must compensate for lattice disruption; some ionic solids such as AgCl are poorly soluble."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "What does “like dissolves like” mean?",
      "answer": "Solutes often dissolve in solvents with compatible types of intermolecular interactions, but it is a guideline rather than a rule without exceptions."
    }
  ],
  "summaryText": "Dissolving requires separating solute particles, disrupting some solvent–solvent interactions and forming solute–solvent interactions. “Like dissolves like” is a useful first guide, not a universal law. Non-polar solutes often dissolve in non-polar solvents; small polar molecules can interact with water through dipoles or hydrogen bonds.",
  "ready": true
},
    evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};
export default note_chemistry_2_7_4;
