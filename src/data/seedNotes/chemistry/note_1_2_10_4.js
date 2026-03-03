/**
 * WCH12 | Topic 10: Alcohols, Halogenoalkanes & Spectra | Subtopic 4
 * Substitution and elimination routes
 */

export const note_chemistry_1_2_10_4 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Describe and explain nucleophilic substitution (SN1 and SN2) and elimination reactions of halogenoalkanes. Draw mechanisms using curly arrows. Explain how structure and conditions determine which pathway is followed.' } },
        { id: 'h-sn', type: 'heading', data: { text: 'Nucleophilic Substitution', level: 2 }, terms: ['Nucleophilic substitution', 'SN1', 'SN2'] },
        { id: 'callout-sn2-key', type: 'callout', data: { style: 'key', title: '💡 SN2 Mechanism (primary halogenoalkanes)', text: 'SN2 = Substitution, Nucleophilic, Bimolecular\n\nOne step: nucleophile attacks the back of the C–X bond simultaneously as X⁻ leaves\n\nMechanism for CH₃Br + OH⁻:\n  HO:⁻ attacks C from the back →\n  Transition state: [HO···C···Br]⁻ (pentavalent C)\n  → CH₃OH + Br⁻\n\nFeatures:\n  • One-step (concerted)\n  • Rate depends on [RX] and [Nu⁻] → second order\n  • Inversion of configuration (Walden inversion)\n  • Favoured by primary halogenoalkanes (less steric hindrance)\n  • Favoured by good nucleophile (e.g. OH⁻, CN⁻)' } },
        { id: 'callout-sn1-key', type: 'callout', data: { style: 'key', title: '💡 SN1 Mechanism (tertiary halogenoalkanes)', text: 'SN1 = Substitution, Nucleophilic, Unimolecular\n\nTwo steps:\n  Step 1: C–X bond breaks heterolytically → carbocation + X⁻  (slow, rate-determining)\n  Step 2: nucleophile attacks carbocation → product  (fast)\n\nMechanism for (CH₃)₃CBr + OH⁻:\n  (CH₃)₃C–Br → (CH₃)₃C⁺ + Br⁻  (slow)\n  (CH₃)₃C⁺ + OH⁻ → (CH₃)₃COH  (fast)\n\nFeatures:\n  • Two-step; rate depends on [RX] only → first order\n  • Carbocation intermediate (planar) → racemisation (both faces attacked)\n  • Favoured by tertiary halogenoalkanes (stable 3° carbocation)\n  • Polar protic solvents stabilise ions' } },
        { id: 'h-elimination', type: 'heading', data: { text: 'Elimination Reactions', level: 2 }, terms: ['Elimination'] },
        { id: 'callout-elimination-key', type: 'callout', data: { style: 'key', title: '💡 Elimination of HX from Halogenoalkanes', text: 'Conditions: KOH dissolved in ETHANOL (not water), heat\n\nReaction: R–CH₂–CHX–R\' + KOH(alc) → R–CH=CH–R\' + KX + H₂O\n\nMechanism:\n  OH⁻ acts as a BASE (not a nucleophile)\n  OH⁻ removes H from the β-carbon (adjacent to C–X)\n  C–X bond breaks → alkene forms\n\nWhy ethanol not water?\n  Water favours substitution (polar protic solvent)\n  Ethanol favours elimination (less polar; OH⁻ acts as base)\n\nZaitsev\'s rule: the more substituted (more stable) alkene is the major product' } },
        { id: 'table-sn-e', type: 'comparisonTable', data: { caption: 'Substitution vs elimination from halogenoalkanes', headers: ['Feature', 'Nucleophilic Substitution', 'Elimination'], rows: [['Reagent', 'NaOH(aq) — nucleophile', 'KOH in ethanol — base'], ['Conditions', 'Aqueous, warm', 'Ethanol solvent, heat'], ['Product', 'Alcohol (R–OH)', 'Alkene (C=C)'], ['Role of OH⁻', 'Nucleophile (attacks C)', 'Base (removes H)'], ['Favoured by', 'Primary RX; good nucleophile', 'Tertiary RX; high temperature']] } },
        { id: 'callout-tip-conditions', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Substitution vs Elimination', text: 'The key is the SOLVENT and CONDITIONS:\n  NaOH(aq) + halogenoalkane → substitution → alcohol\n  KOH in ethanol + halogenoalkane → elimination → alkene\n\nHigher temperature and tertiary structure both favour elimination.\nIn exam mechanisms, always show curly arrows from lone pair/bond, label the nucleophile/base, and show the leaving group departing.' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'SN2: one step; rate = k[RX][Nu]; inversion; primary RX favoured', checked: false }, { text: 'SN1: two steps; rate = k[RX]; carbocation; tertiary RX favoured', checked: false }, { text: 'Elimination: KOH in ethanol, heat; OH⁻ acts as base; alkene formed', checked: false }, { text: 'NaOH(aq) → substitution; KOH/ethanol → elimination', checked: false }, { text: 'Zaitsev: more substituted alkene is major elimination product', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Halogenoalkanes undergo nucleophilic substitution (SN1 for tertiary, SN2 for primary) or elimination. NaOH(aq) → substitution → alcohol. KOH in ethanol → elimination → alkene. SN2 is one-step (inversion); SN1 is two-step via carbocation (racemisation). Higher temperature and tertiary structure favour elimination.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-sn2-key', prompt: 'Describe the SN2 mechanism for CH₃Br + OH⁻. What is the rate equation? Why is SN2 favoured by primary halogenoalkanes?' },
            { id: 'cue-2', blockId: 'callout-sn1-key', prompt: 'Describe the SN1 mechanism for (CH₃)₃CBr + OH⁻. What intermediate forms? Why is racemisation observed?' },
            { id: 'cue-3', blockId: 'callout-elimination-key', prompt: 'State the conditions for elimination from a halogenoalkane. Why is ethanol used instead of water? What product forms?' },
        ],
        summaryText: 'SN1, SN2 mechanisms, elimination conditions, substitution vs elimination choice.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 10: Halogenoalkanes', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'SN1', 'SN2', 'Elimination'] }],
};
