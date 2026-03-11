/**
 * Seed note: Chemistry · Unit 2 · Topic 10 · Subtopic 2
 * "Comparing rates of hydrolysis"
 * Source: Pearson Edexcel IAL Chemistry — Section 10B.2
 */
export const note_chemistry_2_10_2 = {
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use experimental observations to compare the relative rates of hydrolysis of primary, secondary, and tertiary halogenoalkanes, and of chloro-, bromo-, and iodoalkanes.' },
            terms: []
        },
        {
            id: 'h-silvernitrate',
            type: 'heading',
            data: { text: 'The Silver Nitrate Experiment', level: 2 },
            terms: []
        },
        {
            id: 'p-silvernitrate',
            type: 'paragraph',
            data: { text: 'To compare how fast different halogenoalkanes hydrolyse (<strong>Core Practical 5</strong>), we add them to a mixture of water, aqueous silver nitrate (AgNO₃), and ethanol. They are heated in a <strong>water bath</strong> at around 50°C.<br/>• <strong>Ethanol</strong> acts as a common solvent because halogenoalkanes are insoluble in water, but both they and aqueous AgNO₃ dissolve in ethanol.<br/>• A <strong>water bath</strong> is used because halogenoalkanes and ethanol are highly flammable, so naked flames must be avoided.<br/>As the C-X bond breaks (hydrolyses), an X⁻ halide ion is released. This free halide ion immediately reacts with the Ag⁺ ions to form a visible <strong>silver halide precipitate</strong>.' },
            terms: ['Silver nitrate', 'Water bath', 'Ethanol solvent']
        },
        {
            id: 'callout-precipitates',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Timing the precipitate',
                text: 'The <strong>time taken</strong> for the precipitate to appear tells us the <strong>rate of reaction</strong>.<br/>• AgCl = white precipitate<br/>• AgBr = cream precipitate<br/>• AgI = yellow precipitate<br/>A faster appearance means a faster rate of hydrolysis (the carbon-halogen bond broke more easily).'
            },
            terms: []
        },
        {
            id: 'h-trends',
            type: 'heading',
            data: { text: 'The Two Trends in Hydrolysis Rate', level: 2 },
            terms: []
        },
        {
            id: 'table-trends',
            type: 'comparisonTable',
            data: {
                caption: 'Trends in Hydrolysis Rates',
                headers: ['Variable being compared', 'Trend (Fastest to Slowest)', 'Reasoning (Exam Explanation)'],
                rows: [
                    ['Type of Halogen (C-X bond)', 'Iodoalkane > Bromoalkane > Chloroalkane', 'The rate relies solely on <strong>Bond Enthalpy</strong>. The C-I bond is the weakest and requires the least energy to break. The C-Cl bond is the strongest.'],
                    ['Classification of Halogenoalkane', 'Tertiary (3°) > Secondary (2°) > Primary (1°)', 'Depends on the mechanism (SN1 vs SN2). Tertiary halogenoalkanes hydrolyse via a much faster SN1 mechanism. Primary uses a slower SN2 mechanism.']
                ]
            },
            terms: ['Bond enthalpy']
        },
        {
            id: 'p-warning',
            type: 'paragraph',
            data: { text: 'Notice that <em>bond polarity</em> is NOT the determining factor for the halogen rate trend. The C-Cl bond is the most polar (which should theoretically attract the nucleophile faster), but bond enthalpy (strength) completely overrides this effect. The C-I bond is non-polar but extremely weak, so it breaks the fastest.' },
            terms: ['Bond polarity']
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-silvernitrate', prompt: 'In the experiment to compare hydrolysis rates (CP5), why is ethanol added to the mixture containing the halogenoalkane and aqueous silver nitrate?' },
            { id: 'c1b', blockId: 'p-silvernitrate', prompt: 'Why is a water bath used instead of a Bunsen burner to heat the mixture in the CP5 hydrolysis experiment?' },
            { id: 'c2', blockId: 'callout-precipitates', prompt: 'How do you know when hydrolysis has successfully occurred during the silver nitrate rate experiment?' },
            { id: 'c3', blockId: 'table-trends', prompt: 'Which will hydrolyse faster: 1-chlorobutane or 1-iodobutane? Explain your reasoning.' },
            { id: 'c4', blockId: 'table-trends', prompt: 'Which will hydrolyse faster: 1-bromobutane (primary) or 2-bromo-2-methylpropane (tertiary)?' },
            { id: 'cue-fluoro', blockId: 'table-trends', prompt: 'Why are fluoroalkanes generally considered unreactive in nucleophilic substitution reactions?' }
        ],
        summaryText: 'To compare hydrolysis rates (CP5), add halogenoalkane to ethanol (solvent) and AgNO₃(aq), heated in a water bath (flammable), and time precipitate (AgX) formation. Trend 1: Iodoalkanes are fastest, then bromo, then chloro. This is entirely due to decreasing Bond Enthalpy (C-I is very weak; C-Cl is very strong). Bond polarity is irrelevant. Trend 2: Tertiary (3°) hydrolyse fastest, followed by 2°, then 1° because they use a faster SN1 mechanism.',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_10_2;
