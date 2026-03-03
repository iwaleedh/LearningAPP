/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 0
 * Reaction class recap
 */

export const note_chemistry_1_2_10_0 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Recall and classify organic reaction types: addition, substitution, elimination, oxidation, reduction and hydrolysis. Identify which reaction class applies to reactions of halogenoalkanes and alcohols.' } },
        { id: 'h-classes', type: 'heading', data: { text: 'Organic Reaction Classes', level: 2 }, terms: ['Substitution', 'Elimination', 'Addition'] },
        { id: 'table-classes', type: 'comparisonTable', data: { caption: 'Organic reaction classes — definitions and examples', headers: ['Reaction class', 'Definition', 'Example'], rows: [['Addition', 'Two reactants combine to form one product (double bond used)', 'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br'], ['Substitution', 'Atom/group replaced by another', 'CH₃Br + OH⁻ → CH₃OH + Br⁻'], ['Elimination', 'Small molecule removed to form double bond', 'CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + HBr'], ['Oxidation', 'Gain of O / loss of H / increase in oxidation state', 'CH₃OH → HCHO → HCOOH'], ['Reduction', 'Loss of O / gain of H / decrease in oxidation state', 'RCHO + [H] → RCH₂OH'], ['Hydrolysis', 'Bond broken by water (or aqueous base/acid)', 'CH₃Br + H₂O → CH₃OH + HBr']] } },
        { id: 'callout-tip-class', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Identifying Reaction Type', text: 'When identifying a reaction type:\n  • Count atoms/bonds in reactant and product\n  • Addition: one product from two reactants; C=C disappears\n  • Substitution: one atom/group in, one atom/group out\n  • Elimination: double bond forms; small molecule lost (e.g. HBr, H₂O)\n  • Oxidation of alcohol: use oxidation state of C or count O atoms\n\nFor nucleophilic substitution (halogenoalkanes): NuC⁻ replaces X⁻' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Addition: 2 reactants → 1 product; C=C consumed', checked: false }, { text: 'Substitution: one group replaced; same number of molecules', checked: false }, { text: 'Elimination: double bond formed; small molecule lost', checked: false }, { text: 'Oxidation: gain O / lose H; reduction: lose O / gain H', checked: false }, { text: 'Hydrolysis: water breaks a bond', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'The six organic reaction classes: addition (C=C reacts), substitution (group replaced), elimination (double bond formed), oxidation (gain O/lose H), reduction (lose O/gain H), hydrolysis (water breaks bond). Halogenoalkanes undergo nucleophilic substitution or elimination; alcohols undergo oxidation, elimination or substitution.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-classes', prompt: 'Define and give an example of: addition, substitution, elimination, oxidation, reduction and hydrolysis.' },
        ],
        summaryText: 'Organic reaction classes: addition, substitution, elimination, oxidation, reduction, hydrolysis.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Organic Chemistry', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Organic chemistry'] }],
};
