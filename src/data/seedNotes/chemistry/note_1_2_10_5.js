/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 5
 * Alcohol nomenclature and classes
 */

export const note_chemistry_1_2_10_5 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Name and classify alcohols as primary, secondary or tertiary using IUPAC nomenclature. Identify the hydroxyl functional group and explain its effect on physical properties.' } },
        { id: 'h-naming', type: 'heading', data: { text: 'Naming Alcohols', level: 2 }, terms: ['Alcohol'] },
        { id: 'callout-naming-key', type: 'callout', data: { style: 'key', title: '💡 IUPAC Nomenclature for Alcohols', text: 'Suffix: -ol (hydroxyl group –OH)\n\nSteps:\n  1. Find longest chain containing the –OH group\n  2. Number to give –OH the LOWEST locant\n  3. Add -ol suffix with position number (if needed)\n  4. Name branches as substituents\n\nExamples:\n  CH₃OH → methanol\n  CH₃CH₂OH → ethanol\n  CH₃CH(OH)CH₃ → propan-2-ol\n  (CH₃)₃COH → 2-methylpropan-2-ol' } },
        { id: 'h-classification', type: 'heading', data: { text: 'Primary, Secondary and Tertiary Alcohols', level: 2 }, terms: ['Alcohol'] },
        { id: 'table-classification', type: 'comparisonTable', data: { caption: 'Classification of alcohols', headers: ['Class', 'C–OH carbon bonded to', 'Example', 'Oxidation product'], rows: [['Primary (1°)', '1 other carbon (or H only)', 'CH₃CH₂OH (ethanol)', 'Aldehyde → Carboxylic acid'], ['Secondary (2°)', '2 other carbons', 'CH₃CH(OH)CH₃ (propan-2-ol)', 'Ketone (no further oxidation)'], ['Tertiary (3°)', '3 other carbons', '(CH₃)₃COH', 'Not oxidised by Cr₂O₇²⁻']] } },
        { id: 'callout-properties-key', type: 'callout', data: { style: 'key', title: '💡 Physical Properties of Alcohols', text: 'Boiling points: much higher than alkanes of similar Mr\n  Reason: O–H group forms hydrogen bonds → stronger IMF → more energy to separate\n  e.g. ethanol bp 78°C vs ethane bp −89°C (both Mr ≈ 30)\n\nSolubility: short-chain alcohols (methanol, ethanol, propanol) miscible with water\n  O–H can form H-bonds with water → dissolves readily\n  Longer chains: hydrocarbon chain disrupts water H-bond network → solubility decreases\n\nViscosity: increases with chain length and branching (more surface contact)' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Suffix -ol; number to give OH lowest locant', checked: false }, { text: 'Primary: C–OH bonded to 1C; secondary: 2C; tertiary: 3C', checked: false }, { text: 'Primary → aldehyde → carboxylic acid on oxidation', checked: false }, { text: 'Secondary → ketone on oxidation; tertiary not oxidised by Cr₂O₇²⁻', checked: false }, { text: 'High bp vs alkanes — O–H hydrogen bonding', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Alcohols are named with -ol suffix and lowest locant for –OH. Primary (1°), secondary (2°) and tertiary (3°) alcohols differ by the number of carbons bonded to the C–OH carbon, determining oxidation products. Alcohols have higher boiling points than alkanes (H-bonding); short-chain alcohols are miscible with water.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-naming-key', prompt: 'Name: CH₃CH(OH)CH₃ and (CH₃)₃COH. What IUPAC rules apply?' },
            { id: 'cue-2', blockId: 'table-classification', prompt: 'Classify ethanol, propan-2-ol and 2-methylpropan-2-ol. What oxidation product does each give?' },
            { id: 'cue-3', blockId: 'callout-properties-key', prompt: 'Why does ethanol have a much higher boiling point than ethane despite similar Mr?' },
        ],
        summaryText: 'Alcohol IUPAC naming, primary/secondary/tertiary classification, physical properties.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Alcohols', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Alcohols', 'Nomenclature'] }],
};
