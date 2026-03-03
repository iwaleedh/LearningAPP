/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 2
 * Electrophiles and nucleophiles
 */

export const note_chemistry_1_2_10_2 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Define electrophile and nucleophile. Give examples of each. Explain why halogenoalkanes react with nucleophiles and identify common nucleophiles used in organic reactions.' } },
        { id: 'h-nu-el', type: 'heading', data: { text: 'Nucleophiles and Electrophiles', level: 2 }, terms: ['Nucleophile', 'Electrophile'] },
        { id: 'callout-nu-def', type: 'callout', data: { style: 'key', title: '💡 Nucleophile', text: 'A nucleophile is an electron-pair DONOR — it attacks electron-deficient (δ+) centres.\n\nNucleophiles have lone pairs or negative charges.\n\nCommon nucleophiles:\n  OH⁻  (hydroxide — from NaOH)\n  CN⁻  (cyanide — from KCN)\n  NH₃  (ammonia — has lone pair on N)\n  H₂O  (water — has lone pairs on O)\n  I⁻, Br⁻, Cl⁻  (halide ions)\n\nNucleophiles attack the δ+ carbon in halogenoalkanes (R–X).' } },
        { id: 'callout-el-def', type: 'callout', data: { style: 'key', title: '💡 Electrophile', text: 'An electrophile is an electron-pair ACCEPTOR — it attacks electron-rich (δ−) centres.\n\nElectrophiles are electron-deficient: they have a positive charge or a δ+ centre.\n\nCommon electrophiles:\n  H⁺  (proton)\n  Br₂, Cl₂  (polarised by alkene — Brδ+–Brδ−)\n  HBr, HCl  (Hδ+ end attacks)\n  NO₂⁺  (nitronium ion — electrophilic substitution in benzene)\n  Carbocation (R⁺)' } },
        { id: 'callout-c-x-key', type: 'callout', data: { style: 'key', title: '💡 Why Halogenoalkanes React with Nucleophiles', text: 'In R–X, the C–X bond is polar:\n  C has lower electronegativity than X → C is δ+, X is δ−\n\nThe δ+ carbon is attacked by nucleophiles → nucleophilic substitution (SN)\n\nThe C–X bond breaks heterolytically:\n  Nu:⁻ + R–X → R–Nu + X⁻\n\nX⁻ is the leaving group — the weaker the C–X bond, the better the leaving group:\n  I⁻ > Br⁻ > Cl⁻ > F⁻  (iodide is the best leaving group)' } },
        { id: 'table-nu', type: 'comparisonTable', data: { caption: 'Common nucleophiles and the products they form with halogenoalkanes', headers: ['Nucleophile', 'Reagent/conditions', 'Product', 'Reaction type'], rows: [['OH⁻', 'NaOH(aq), warm', 'Alcohol (R–OH)', 'Nucleophilic substitution'], ['CN⁻', 'KCN in ethanol, warm', 'Nitrile (R–CN)', 'Nucleophilic substitution — chain lengthened by 1C'], ['NH₃', 'Excess NH₃ in ethanol, pressure', 'Primary amine (R–NH₂)', 'Nucleophilic substitution'], ['OH⁻ (alc)', 'KOH in ethanol, heat', 'Alkene', 'Elimination (not substitution)']] } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Nucleophile: electron-pair donor; attacks δ+ centres; has lone pair or negative charge', checked: false }, { text: 'Electrophile: electron-pair acceptor; attacks δ− centres; electron-deficient', checked: false }, { text: 'R–X: C is δ+ (less electronegative) → attacked by nucleophile', checked: false }, { text: 'Best leaving groups: I⁻ > Br⁻ > Cl⁻ > F⁻', checked: false }, { text: 'KCN → nitrile (chain extended by 1C); NH₃ → primary amine; NaOH(aq) → alcohol', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Nucleophiles donate electron pairs to δ+ centres; electrophiles accept electron pairs from δ− centres. In halogenoalkanes, the δ+ C is attacked by nucleophiles: OH⁻ gives alcohol, CN⁻ gives nitrile (chain+1C), NH₃ gives amine. I⁻ is the best leaving group; F⁻ is the worst.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-nu-def', prompt: 'Define nucleophile. Give FOUR examples of nucleophiles used in reactions with halogenoalkanes.' },
            { id: 'cue-2', blockId: 'callout-c-x-key', prompt: 'Why does the C atom in R–X act as an electrophilic centre? What is the leaving group order?' },
            { id: 'cue-3', blockId: 'table-nu', prompt: 'State the product and conditions when CH₃Br reacts with: (a) NaOH(aq), (b) KCN/ethanol, (c) excess NH₃.' },
        ],
        summaryText: 'Nucleophile and electrophile definitions, C–X polarity, common nucleophiles and products.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Mechanisms', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Nucleophiles', 'Electrophiles'] }],
};
