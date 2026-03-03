/**
 * WCH12 | Topic 8: Redox & Groups 1, 2, 7 | Subtopic 5
 * Halogen trends
 */

export const note_chemistry_1_2_8_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: {
                text: 'Describe and explain trends in Group 17 (halogens): electronegativity, atomic radius, boiling point and oxidising ability. Explain the displacement reactions of halogens with halide solutions.',
            },
        },
        {
            id: 'h-halogens',
            type: 'heading',
            data: { text: 'Group 17 — The Halogens', level: 2 },
            terms: ['Halogen', 'Group 17'],
        },
        {
            id: 'table-halogens',
            type: 'comparisonTable',
            data: {
                caption: 'Physical properties of halogens — trends down Group 17',
                headers: ['Halogen', 'Formula', 'Colour', 'State (room temp)', 'Boiling point (°C)', 'Electronegativity'],
                rows: [
                    ['Fluorine', 'F₂', 'Pale yellow', 'Gas', '−188', '4.0 (highest)'],
                    ['Chlorine', 'Cl₂', 'Yellow-green', 'Gas', '−35', '3.2'],
                    ['Bromine', 'Br₂', 'Red-brown', 'Liquid', '59', '3.0'],
                    ['Iodine', 'I₂', 'Grey-black solid / purple vapour', 'Solid', '184', '2.7'],
                ],
            },
            terms: ['Halogen'],
        },
        {
            id: 'callout-trends-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Group 17 Trends Down the Group (F → I)',
                text: 'Atomic radius: INCREASES (more electron shells)\nElectronegativity: DECREASES (less attraction for bonding electrons)\nBoiling point: INCREASES (more electrons → stronger London forces)\nOxidising ability: DECREASES (less able to gain an electron)\nReactivity: DECREASES\n\nAll halogens exist as diatomic molecules (X₂)\nAll are oxidising agents — they gain 1 electron to form X⁻',
            },
            terms: ['Halogen'],
        },
        {
            id: 'h-displacement',
            type: 'heading',
            data: { text: 'Halogen Displacement Reactions', level: 2 },
            terms: ['Halogen', 'Displacement'],
        },
        {
            id: 'callout-displacement-key',
            type: 'callout',
            data: {
                style: 'key',
                title: '💡 Halogen Displacement — More Reactive Displaces Less Reactive',
                text: 'A more reactive halogen will displace a less reactive halide from solution:\n  Cl₂ + 2KBr → 2KCl + Br₂  (Cl₂ displaces Br⁻)\n  Cl₂ + 2KI  → 2KCl + I₂   (Cl₂ displaces I⁻)\n  Br₂ + 2KI  → 2KBr + I₂   (Br₂ displaces I⁻)\n\nOrder of oxidising ability: F₂ > Cl₂ > Br₂ > I₂\nI₂ cannot displace Br⁻ or Cl⁻ — it is the weakest oxidising agent\n\nIn terms of redox:\n  Cl₂ + 2e⁻ → 2Cl⁻  (reduction — Cl₂ is the oxidising agent)\n  2Br⁻ → Br₂ + 2e⁻  (oxidation — Br⁻ is the reducing agent)',
            },
            terms: ['Halogen', 'Displacement'],
        },
        {
            id: 'table-displacement',
            type: 'comparisonTable',
            data: {
                caption: 'Halogen displacement reactions and observations',
                headers: ['Halogen added', 'Solution', 'Reaction?', 'Observation', 'Product halogen'],
                rows: [
                    ['Cl₂(aq)', 'KBr(aq)', 'Yes', 'Colourless → orange/brown', 'Br₂'],
                    ['Cl₂(aq)', 'KI(aq)', 'Yes', 'Colourless → brown (or black ppt with excess)', 'I₂'],
                    ['Br₂(aq)', 'KCl(aq)', 'No', 'No change (orange stays)', '—'],
                    ['Br₂(aq)', 'KI(aq)', 'Yes', 'Orange → darker brown', 'I₂'],
                    ['I₂(aq)', 'KCl(aq)', 'No', 'Brown stays, no reaction', '—'],
                    ['I₂(aq)', 'KBr(aq)', 'No', 'Brown stays, no reaction', '—'],
                ],
            },
            terms: ['Halogen'],
        },
        {
            id: 'callout-organic-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: '💬 Using an Organic Solvent to Confirm Results',
                text: 'Adding a non-polar solvent (cyclohexane) to the reaction mixture and shaking helps identify the halogen produced:\n  Cl₂: colourless in both layers\n  Br₂: orange in organic layer\n  I₂: purple/violet in organic layer\n\nThe organic layer goes on TOP of the aqueous layer.',
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
                    { text: 'Oxidising ability: F₂ > Cl₂ > Br₂ > I₂ (decreases down group)', checked: false },
                    { text: 'Boiling point increases down Group 17 — stronger London forces', checked: false },
                    { text: 'Electronegativity decreases down Group 17', checked: false },
                    { text: 'Cl₂ displaces Br⁻ and I⁻; Br₂ displaces I⁻ only; I₂ displaces neither', checked: false },
                    { text: 'Confirm halogen with organic layer: Br₂ orange; I₂ purple', checked: false },
                ],
            },
        },
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: 'Group 17 halogens become less reactive/oxidising down the group as atomic radius increases and electronegativity decreases. Boiling points increase due to stronger London forces. A more reactive halogen displaces a less reactive halide: Cl₂ > Br₂ > I₂. Displacement is confirmed by the colour of the halogen in the organic layer (Br₂ orange; I₂ purple).',
            },
        },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-trends-key', prompt: 'State the trends in electronegativity, boiling point and oxidising ability going down Group 17. Explain the boiling point trend.' },
            { id: 'cue-2', blockId: 'callout-displacement-key', prompt: 'Write the equation for Cl₂ displacing Br⁻ from KBr solution. Identify the oxidising and reducing agents.' },
            { id: 'cue-3', blockId: 'table-displacement', prompt: 'Will Br₂ displace Cl⁻ from KCl? Will I₂ displace Br⁻? Explain using the reactivity series of halogens.' },
        ],
        summaryText: 'Halogen trends, oxidising ability, displacement reactions, organic layer colours.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 8: Group 17', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Halogens', 'Group 17'] }],
};
