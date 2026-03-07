/**
 * Seed note: Chemistry · Unit 2 · Topic 6 · Subtopic 7
 * "Bond enthalpy and reactivity"
 */

export const note_chemistry_2_6_7 = {
    blocks: [
        {
            id: 'objective-block',
            type: 'objective',
            data: {
                text: 'Understand how bond enthalpy governs the reactivity of compounds, using alkanes and halogenoalkanes as key examples.'
            },
            terms: []
        },
        // ── BOND ENTHALPY & REACTIVITY ─────────────────────────────────────────
        {
            id: 'h-reactivity',
            type: 'heading',
            data: { text: 'How Bond Enthalpy Influences Reactivity', level: 2 },
            terms: []
        },
        {
            id: 'p-reactivity',
            type: 'paragraph',
            data: {
                text: 'For a chemical reaction to occur, existing bonds must first be broken. This requires an input of energy (the activation energy). The stronger the bond, the higher the bond enthalpy, and consequently, the higher the activation energy required to break it. Therefore, molecules with very high bond enthalpies tend to be <strong>unreactive (kinetically stable)</strong>.'
            },
            terms: ['Kinetic stability', 'Activation energy']
        },
        // ── ALKANES ────────────────────────────────────────────────────────────
        {
            id: 'h-alkanes',
            type: 'heading',
            data: { text: 'Alkanes: Extremely Unreactive', level: 2 },
            terms: []
        },
        {
            id: 'p-alkanes',
            type: 'paragraph',
            data: {
                text: 'Alkanes consist entirely of C-C and C-H sigma (σ) bonds. Both of these bonds have very high bond enthalpies: <br/>• C-C : ~347 kJ mol⁻¹ <br/>• C-H : ~413 kJ mol⁻¹'
            },
            terms: []
        },
        {
            id: 'callout-alkanes',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Lack of Reactivity',
                text: 'Because these bonds are so strong, and because they are non-polar (meaning they don\'t attract nucleophiles or electrophiles), alkanes are very unreactive at room temperature. They generally only undergo combustion or free-radical substitution, both of which require significant energy (heat or UV light) to initiate.'
            },
            terms: ['Non-polar', 'Free-radical substitution']
        },
        // ── HALOGENOALKANES ────────────────────────────────────────────────────
        {
            id: 'h-halogenoalkanes',
            type: 'heading',
            data: { text: 'Halogenoalkanes (Haloalkanes)', level: 2 },
            terms: []
        },
        {
            id: 'table-halogens',
            type: 'comparisonTable',
            data: {
                caption: 'Carbon-Halogen Bond Enthalpies',
                headers: ['Bond', 'Mean Bond Enthalpy (kJ mol⁻¹)', 'Reactivity Rate (Nucleophilic Substitution)'],
                rows: [
                    ['C-F', '467', 'Very Slow (Practically unreactive)'],
                    ['C-Cl', '340', 'Slow'],
                    ['C-Br', '280', 'Fast'],
                    ['C-I', '238', 'Very Fast']
                ]
            },
            terms: ['Nucleophilic substitution', 'Halogenoalkane']
        },
        {
            id: 'bloom-compare',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Bond Polarity vs Bond Enthalpy',
                text: 'The C-F bond is the most polar out of the halogenoalkanes (due to fluorine\'s high electronegativity). You might expect the highly positive Carbon atom (Cδ+) to attract nucleophiles very strongly, making it the most reactive. <br/><br/>However, experiments show that <strong>iodoalkanes (C-I) react the fastest</strong>, while fluoroalkanes (C-F) are practically inert! <br/><br/><strong>Conclusion:</strong> When determining the rate of reaction for halogenoalkanes, <strong>bond enthalpy is a far more important factor than bond polarity</strong>. The C-I bond is much weaker than the C-F bond, so it breaks much more easily, resulting in a faster rate of reaction.'
            },
            terms: ['Bond polarity', 'Electronegativity']
        }
    ],
    // ── RECALL CUES ────────────────────────────────────────────────────────
    recall: {
        enabled: true,
        cues: [
            {
                id: 'cue-1',
                blockId: 'callout-alkanes',
                prompt: 'Why are alkanes generally unreactive?'
            },
            {
                id: 'cue-2',
                blockId: 'table-halogens',
                prompt: 'Which carbon-halogen bond requires the least energy to break?'
            },
            {
                id: 'cue-3',
                blockId: 'bloom-compare',
                prompt: 'When comparing the reactivity of fluoroalkanes and iodoalkanes, which factor is more important: bond polarity or bond enthalpy?'
            },
            {
                id: 'cue-4',
                blockId: 'bloom-compare',
                prompt: 'Why do iodoalkanes undergo nucleophilic substitution faster than bromoalkanes?'
            }
        ],
        summaryText: 'Stronger bonds require more activation energy to break, reducing reactivity. Alkanes are unreactive due to strong, non-polar C-C and C-H bonds. In halogenoalkanes, reactivity increases down Group 7 (C-I > C-Br > C-Cl > C-F) because the C-X bond enthalpy decreases. Bond enthalpy outweighs bond polarity in determining the reaction rate of halogenoalkanes.',
        ready: false
    },
    evidence: []
};

export default note_chemistry_2_6_7;
