/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 3
 * Halogenoalkane nomenclature
 */

export const note_chemistry_1_2_10_3 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Name and draw halogenoalkanes using IUPAC nomenclature. Classify halogenoalkanes as primary, secondary or tertiary. Identify structural isomers of halogenoalkanes.' } },
        { id: 'h-naming', type: 'heading', data: { text: 'Naming Halogenoalkanes', level: 2 }, terms: ['Halogenoalkane'] },
        { id: 'callout-naming-key', type: 'callout', data: { style: 'key', title: '💡 IUPAC Nomenclature for Halogenoalkanes', text: 'Prefix for halogen: fluoro-, chloro-, bromo-, iodo-\n\nSteps:\n  1. Find the longest carbon chain containing the halogen → parent alkane name\n  2. Number the chain to give the halogen the LOWEST possible number\n  3. Add halogen prefix with its position number\n  4. Multiple halogens: list alphabetically; use di-, tri- prefixes if same type\n\nExamples:\n  CH₃CH₂Br → bromoethane\n  CH₃CHBrCH₃ → 2-bromopropane\n  CH₂ClCH₂Cl → 1,2-dichloroethane\n  CHCl₃ → trichloromethane' } },
        { id: 'h-classification', type: 'heading', data: { text: 'Primary, Secondary and Tertiary Halogenoalkanes', level: 2 }, terms: ['Halogenoalkane'] },
        { id: 'table-classification', type: 'comparisonTable', data: { caption: 'Classification of halogenoalkanes by degree of substitution', headers: ['Class', 'C with halogen bonded to', 'Example', 'Reactivity in SN'], rows: [['Primary (1°)', '1 other carbon (or H only)', 'CH₃CH₂Br (bromoethane)', 'Mainly SN2'], ['Secondary (2°)', '2 other carbons', 'CH₃CHBrCH₃ (2-bromopropane)', 'Both SN1 and SN2'], ['Tertiary (3°)', '3 other carbons', '(CH₃)₃CBr (2-bromo-2-methylpropane)', 'Mainly SN1']] } },
        { id: 'callout-tip-naming', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Naming Halogenoalkanes', text: 'Common mistakes:\n  ✗ Numbering from the wrong end → gives incorrect locant\n  ✗ Forgetting to list halogens alphabetically (bromo before chloro)\n  ✗ Confusing the parent chain length\n\nAlways give the halogen the LOWEST possible locant, then apply other rules.' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Prefixes: fluoro-, chloro-, bromo-, iodo-', checked: false }, { text: 'Number chain to give halogen lowest locant', checked: false }, { text: 'Multiple halogens: alphabetical order; di-/tri- for same type', checked: false }, { text: 'Primary: C–X bonded to 1 C; secondary: 2 C; tertiary: 3 C', checked: false }, { text: 'Tertiary → mainly SN1; primary → mainly SN2', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Halogenoalkanes are named with fluoro-/chloro-/bromo-/iodo- prefixes and locants giving the lowest numbers. They are classified as primary (C bonded to 1 other C), secondary (2 C) or tertiary (3 C), which determines whether SN1 or SN2 mechanism operates.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-naming-key', prompt: 'Name: CH₃CHBrCH₃, CH₂ClCH₂Cl and (CH₃)₃CBr.' },
            { id: 'cue-2', blockId: 'table-classification', prompt: 'Classify bromoethane, 2-bromopropane and 2-bromo-2-methylpropane as primary, secondary or tertiary.' },
        ],
        summaryText: 'Halogenoalkane IUPAC naming, primary/secondary/tertiary classification.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Halogenoalkanes', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Halogenoalkanes', 'Nomenclature'] }],
};
