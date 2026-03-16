export const note_olevel_chemistry_11_11_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/11 Organic Chemistry/11-2-5-alcohols.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the general formula, structure, and reactions of alcohols including combustion, oxidation, dehydration, and fermentation of glucose to ethanol.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alcohols', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Facts',
        text: '<strong>General formula:</strong> CₙH₂ₙ₊₁OH (or CₙH₂ₙ₊₂O)<br/><strong>Functional group:</strong> –OH (hydroxyl)<br/><br/><strong>Common alcohols:</strong><br/>• Methanol (CH₃OH) — industrial solvent; toxic<br/>• Ethanol (C₂H₅OH) — in drinks; fuel; solvent<br/>• Propan-1-ol (C₃H₇OH) — solvent<br/><br/><strong>Typical properties:</strong><br/>• Miscible with water (polar –OH group)<br/>• Flammable — burn with clean blue flame<br/>• Not acids (no H⁺ donated to water easily) but react with Na: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (hydrogen gas produced)'
      }
    },
    {
      id: 'tbl-reacts',
      type: 'comparisonTable',
      data: {
        caption: 'Reactions of ethanol',
        headers: ['Reaction', 'Conditions/Reagent', 'Products'],
        rows: [
          ['Complete combustion', 'Excess O₂, ignition', 'CO₂ + H₂O: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O'],
          ['Oxidation', 'Acidified K₂Cr₂O₇ (orange→green) or air', 'Ethanoic acid CH₃COOH'],
          ['Dehydration', 'Concentrated H₂SO₄ or Al₂O₃ catalyst, ~170°C', 'Ethene + water: C₂H₅OH → CH₂=CH₂ + H₂O'],
          ['Fermentation', 'Yeast (enzyme), ~30°C, anaerobic (no air)', 'Ethanol + CO₂: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂']
        ]
      }
    },
    {
      id: 'call-ferm',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Fermentation to Produce Ethanol',
        text: '<strong>Raw material:</strong> Glucose (C₆H₁₂O₆) — from sugar cane, sugar beet, starch crops (renewable)<br/><br/><strong>Equation:</strong> C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂<br/><br/><strong>Conditions:</strong><br/>• Yeast (contains enzymes that catalyse the reaction)<br/>• Temperature ~30°C (optimum for enzyme activity; higher denatures enzymes)<br/>• Anaerobic conditions (no air/O₂) — O₂ would oxidise ethanol to ethanoic acid (vinegar)<br/><br/><strong>Limitations:</strong><br/>• Product is only ~10–15% ethanol (yeast dies at higher concentrations)<br/>• Must be distilled to obtain concentrated ethanol<br/>• Uses renewable feedstocks (sustainable) but requires agricultural land'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alcohols (CₙH₂ₙ₊₁OH): –OH functional group. Combustion → CO₂ + H₂O. Oxidation → carboxylic acid. Dehydration (H₂SO₄) → alkene + H₂O. Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, ~30°C, anaerobic).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alcohols: –OH group, CₙH₂ₙ₊₁OH. Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast, 30°C, anaerobic). Dehydration → alkene.',
    cues: [
      { id: 'cue-1', blockId: 'call-ferm', prompt: 'Write the equation for fermentation of glucose and state the conditions required.', answer: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Conditions: yeast, ~30°C, anaerobic (no oxygen).' },
      { id: 'cue-2', blockId: 'tbl-reacts', prompt: 'What happens when ethanol is oxidised? What reagent is used?', answer: 'Ethanol is oxidised to ethanoic acid (CH₃COOH). Acidified potassium dichromate(VI) is used — it changes from orange to green as it is reduced.' },
      { id: 'cue-3', blockId: 'tbl-reacts', prompt: 'Write the equation for the dehydration of ethanol and state the conditions.', answer: 'C₂H₅OH → CH₂=CH₂ + H₂O. Conditions: concentrated H₂SO₄ or Al₂O₃ catalyst, ~170°C.' }
    ]
  },
  evidence: [],
  mentions: []
};
