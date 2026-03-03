/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 6
 * Halide trends and tests
 */

export const note_chemistry_1_2_8_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Describe the test for halide ions using acidified silver nitrate solution. Explain the trend in reducing ability of halide ions. Describe the reactions of halides with concentrated sulfuric acid.',
            },
        },
        {
            id: 'h-test',
            type: 'heading',
            data: { text: 'Testing for Halide Ions — Silver Nitrate Test', level: 2 },
            terms: ['Halide', 'Silver nitrate test'],
        },
        {
            id: 'callout-agno3-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 AgNO₃ Test for Halide Ions',
                text: 'Reagent: acidified silver nitrate solution (AgNO₃ + dilute HNO₃)\nAcidify with HNO₃ (NOT HCl or H₂SO₄) to prevent false positives from other anions.\n\nCl⁻: white precipitate of AgCl\n  Ag⁺(aq) + Cl⁻(aq) → AgCl(s)  (white)\nBr⁻: cream precipitate of AgBr\n  Ag⁺(aq) + Br⁻(aq) → AgBr(s)  (cream)\nI⁻: yellow precipitate of AgI\n  Ag⁺(aq) + I⁻(aq) → AgI(s)  (yellow)\n\nConfirmation — add dilute ammonia solution NH₃(aq):\n  AgCl: dissolves in dilute NH₃ (forms [Ag(NH₃)₂]⁺)\n  AgBr: dissolves in concentrated NH₃ only\n  AgI: insoluble in NH₃ (even concentrated)',
            },
            terms: ['Halide', 'Silver nitrate test'],
        },
        {
            id: 'table-agno3',
            type: 'comparisonTable',
            data: {
                caption: 'AgNO₃ test results for halide ions',
                headers: ['Halide ion', 'Precipitate colour', 'Solubility in dilute NH₃', 'Solubility in conc NH₃'],
                rows: [
                    ['Cl⁻', 'White', 'Soluble', 'Soluble'],
                    ['Br⁻', 'Cream', 'Insoluble', 'Soluble'],
                    ['I⁻', 'Yellow', 'Insoluble', 'Insoluble'],
                ],
            },
            terms: ['Halide'],
        },
        {
            id: 'h-reducing',
            type: 'heading',
            data: { text: 'Reducing Ability of Halide Ions', level: 2 },
            terms: ['Halide', 'Reducing agent'],
        },
        {
            id: 'callout-reducing-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Reducing Ability: F⁻ < Cl⁻ < Br⁻ < I⁻',
                text: 'Reducing ability of halide ions INCREASES down Group 17:\n  F⁻ < Cl⁻ < Br⁻ < I⁻\n\nThis is the OPPOSITE to the oxidising ability trend of the halogens.\n\nReason: I⁻ has the largest atomic radius → outermost electrons are furthest from nucleus → most easily lost → best reducing agent.\n\nI⁻ is the strongest reducing agent → can reduce concentrated H₂SO₄ to H₂S\nCl⁻ is the weakest reducing agent → can only reduce H₂SO₄ to SO₂ (or no reduction)',
            },
            terms: ['Halide', 'Reducing agent'],
        },
        {
            id: 'callout-tip-test',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Exam Tip — AgNO₃ Test',
                text: 'Always state the colour of the precipitate AND the result with NH₃:\n  "A white precipitate forms that dissolves in dilute ammonia → Cl⁻ confirmed"\n  "A cream precipitate forms that dissolves in concentrated ammonia only → Br⁻ confirmed"\n  "A yellow precipitate forms that is insoluble in ammonia → I⁻ confirmed"\n\nAcidify with dilute HNO₃ — NOT HCl (would give false white ppt) or H₂SO₄.',
            },
        },
        {
            id: 'h-checklist',
            type: 'heading',
            data: { text: 'Exam Checklist', level: 2 },
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'Cl⁻: white AgCl ppt; dissolves in dilute NH₃', checked: false },
                    { text: 'Br⁻: cream AgBr ppt; dissolves in concentrated NH₃ only', checked: false },
                    { text: 'I⁻: yellow AgI ppt; insoluble in NH₃', checked: false },
                    { text: 'Acidify with HNO₃ (NOT HCl or H₂SO₄) to prevent false positives', checked: false },
                    { text: 'Reducing ability: F⁻ < Cl⁻ < Br⁻ < I⁻ (increases down group)', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Halide ions are tested with acidified AgNO₃: white (Cl⁻), cream (Br⁻), yellow (I⁻) precipitates confirmed by NH₃ solubility. Reducing ability of halides increases down the group (I⁻ strongest) as outer electrons become easier to lose.',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-agno3-key', prompt: 'Describe the AgNO₃ test for halide ions. State the colour of each precipitate and its solubility in ammonia.' },
            { id: 'cue-2', blockId: 'callout-reducing-key', prompt: 'State the trend in reducing ability of halide ions down Group 17. Which is the strongest reducing agent and why?' },
        ],
        summaryText: 'AgNO₃ halide test, precipitate colours, NH₃ solubility, reducing ability trend.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Halides', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Halides', 'Group 17'] }],
};
