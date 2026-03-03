/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 6
 * Alcohol oxidation and dehydration
 */

export const note_chemistry_1_2_10_6 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Describe the oxidation of primary and secondary alcohols using acidified dichromate(VI). Describe the dehydration of alcohols to form alkenes. Write equations using [O] for oxidation reactions.' } },
        { id: 'h-oxidation', type: 'heading', data: { text: 'Oxidation of Alcohols', level: 2 }, terms: ['Oxidation', 'Alcohol'] },
        { id: 'callout-oxidation-key', type: 'callout', data: { style: 'key', title: '💡 Oxidising Agent: Acidified K₂Cr₂O₇', text: 'Reagent: acidified potassium dichromate(VI) K₂Cr₂O₇ / H₂SO₄\nSymbol for oxidising agent: [O]\nObservation: orange → green (Cr₂O₇²⁻ reduced to Cr³⁺)\n\nPrimary alcohol → aldehyde → carboxylic acid:\n  CH₃CH₂OH + [O] → CH₃CHO + H₂O   (aldehyde; distil off)\n  CH₃CHO + [O] → CH₃COOH           (carboxylic acid; reflux)\n\nSecondary alcohol → ketone:\n  CH₃CH(OH)CH₃ + [O] → CH₃COCH₃ + H₂O  (propanone)\n  Ketones cannot be further oxidised by Cr₂O₇²⁻\n\nTertiary alcohol: NOT oxidised by K₂Cr₂O₇/H₂SO₄\n  No colour change observed' } },
        { id: 'callout-distil-key', type: 'callout', data: { style: 'key', title: '💡 Distillation vs Reflux', text: 'To get ALDEHYDE from primary alcohol:\n  Use DISTILLATION — add alcohol to warm oxidising agent and distil off the aldehyde immediately (before it is oxidised to carboxylic acid)\n\nTo get CARBOXYLIC ACID from primary alcohol:\n  Use REFLUX — heat under reflux with excess oxidising agent so aldehyde stays in flask and is fully oxidised\n\nFor ketone from secondary alcohol:\n  Either distil or reflux — ketone cannot be further oxidised' } },
        { id: 'h-dehydration', type: 'heading', data: { text: 'Dehydration of Alcohols', level: 2 }, terms: ['Dehydration', 'Elimination', 'Alcohol'] },
        { id: 'callout-dehydration-key', type: 'callout', data: { style: 'key', title: '💡 Dehydration to Form Alkenes', text: 'Dehydration = elimination of H₂O → alkene\n\nConditions: concentrated H₃PO₄ (or Al₂O₃) catalyst; heat\nOR: excess concentrated H₂SO₄ at ~170°C\n\nEthanol example:\n  CH₃CH₂OH → CH₂=CH₂ + H₂O  (at 170°C with conc H₂SO₄)\n\nPropan-2-ol example (two possible alkenes):\n  CH₃CH(OH)CH₃ → CH₃CH=CH₂  (but-1-ene) — minor product\n  CH₃CH(OH)CH₃ → CH₃CH=CHCH₃... — apply Zaitsev: more substituted alkene is major\n\nNOTE: at ~140°C with H₂SO₄, ethanol gives diethyl ether (not alkene) — temperature matters!' } },
        { id: 'table-oxidation', type: 'comparisonTable', data: { caption: 'Alcohol oxidation products summary', headers: ['Alcohol type', 'Oxidation product (distil)', 'Oxidation product (reflux)', 'Colour change'], rows: [['Primary (1°)', 'Aldehyde (–CHO)', 'Carboxylic acid (–COOH)', 'Orange → green'], ['Secondary (2°)', 'Ketone (C=O)', 'Ketone (no further oxidation)', 'Orange → green'], ['Tertiary (3°)', 'No reaction', 'No reaction', 'No colour change']] } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Oxidant: K₂Cr₂O₇/H₂SO₄; orange → green when oxidation occurs', checked: false }, { text: 'Primary alcohol + distil → aldehyde; + reflux → carboxylic acid', checked: false }, { text: 'Secondary alcohol → ketone (cannot be further oxidised)', checked: false }, { text: 'Tertiary alcohol: no oxidation with K₂Cr₂O₇/H₂SO₄', checked: false }, { text: 'Dehydration: conc H₃PO₄/heat or conc H₂SO₄ at 170°C → alkene + H₂O', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Primary alcohols are oxidised to aldehydes (distillation) or carboxylic acids (reflux) using K₂Cr₂O₇/H₂SO₄ (orange → green). Secondary alcohols give ketones (no further oxidation). Tertiary alcohols are not oxidised. Dehydration with conc H₃PO₄ or H₂SO₄ at 170°C gives alkenes.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-oxidation-key', prompt: 'What reagent oxidises alcohols? What colour change occurs? Write equations for oxidation of ethanol to ethanal and then to ethanoic acid.' },
            { id: 'cue-2', blockId: 'callout-distil-key', prompt: 'How do you obtain an aldehyde rather than a carboxylic acid from a primary alcohol? Why does the method differ?' },
            { id: 'cue-3', blockId: 'callout-dehydration-key', prompt: 'State the conditions for dehydration of ethanol. What product forms? Write the equation.' },
        ],
        summaryText: 'Alcohol oxidation (K₂Cr₂O₇/H₂SO₄), aldehyde/ketone/carboxylic acid products, dehydration to alkene.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Alcohols', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Alcohols', 'Oxidation', 'Dehydration'] }],
};
