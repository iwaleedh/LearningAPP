/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 5
 * Dynamic equilibrium basics
 */

export const note_chemistry_1_2_9_5 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Define dynamic equilibrium and state the conditions required for it to be established. Write equilibrium expressions (Kc). Understand that equilibrium can be approached from either direction.' } },
        { id: 'h-equil', type: 'heading', data: { text: 'Dynamic Equilibrium', level: 2 }, terms: ['Dynamic equilibrium', 'Equilibrium'] },
        { id: 'callout-equil-def', type: 'callout', data: { style: 'key', title: '💡 Definition — Dynamic Equilibrium', text: 'A dynamic equilibrium exists in a closed system when:\n  1. The forward and reverse reactions occur simultaneously\n  2. The rates of the forward and reverse reactions are EQUAL\n  3. The concentrations of reactants and products remain CONSTANT (but not necessarily equal)\n\nKey word: DYNAMIC — both forward and reverse reactions are still occurring (it is NOT a static situation).\nKey word: CLOSED — no substances can enter or leave the system.' } },
        { id: 'callout-establish-key', type: 'callout', data: { style: 'key', title: '💡 Establishing Equilibrium', text: 'Equilibrium can be reached from EITHER direction:\n  Starting with pure reactants → products form until equilibrium\n  Starting with pure products → reactants form until equilibrium\n  Both give the same equilibrium concentrations at the same temperature.\n\nAt equilibrium: rate(forward) = rate(reverse)\nConcentrations remain constant — but molecules are still reacting!' } },
        { id: 'h-kc', type: 'heading', data: { text: 'Equilibrium Constant Kc', level: 2 }, terms: ['Equilibrium constant'] },
        { id: 'callout-kc-key', type: 'callout', data: { style: 'key', title: '💡 Writing Kc Expressions', text: 'For: aA + bB ⇌ cC + dD\n\nKc = [C]ᶜ[D]ᵈ ÷ [A]ᵃ[B]ᵇ\n\nRules:\n  • Products on top; reactants on bottom\n  • Concentrations raised to power of stoichiometric coefficient\n  • Pure solids and pure liquids are NOT included (constant activity)\n  • Kc is only affected by TEMPERATURE — not concentration, pressure or catalysts' } },
        { id: 'callout-we-kc', type: 'callout', data: { style: 'worked', title: '✏️ Worked Example — Writing Kc', text: 'Write the Kc expression for:\n  N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n\nKc = [NH₃]² ÷ ([N₂][H₂]³)\n\n─────────────────────────────────────────\nFor: CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l)\n\nAll species are liquids — Kc = [CH₃COOC₂H₅][H₂O] ÷ [CH₃COOH][C₂H₅OH]\n(In this case all are included as they are mixed liquids, not pure liquids in isolation)' } },
        { id: 'callout-tip-equil', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Equilibrium Misconceptions', text: 'Common mistakes:\n  ✗ "Equilibrium means equal concentrations" — NO, concentrations are constant but NOT necessarily equal\n  ✗ "At equilibrium, reactions stop" — NO, both forward and reverse reactions still occur\n  ✗ "A catalyst changes the equilibrium position" — NO, it only speeds up reaching equilibrium\n  ✓ "Kc only changes with temperature" — correct' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Dynamic equilibrium: forward rate = reverse rate; concentrations constant; closed system', checked: false }, { text: 'Both reactions still occurring — NOT static', checked: false }, { text: 'Kc = [products]ᵖ ÷ [reactants]ʳ (stoichiometric powers)', checked: false }, { text: 'Pure solids/liquids excluded from Kc expression', checked: false }, { text: 'Kc only changes with temperature — not with concentration, pressure or catalyst', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Dynamic equilibrium: forward and reverse rates are equal; concentrations constant; reactions still occurring; closed system. Kc = [products]^n ÷ [reactants]^m with stoichiometric powers. Pure solids/liquids excluded. Kc is only affected by temperature.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-equil-def', prompt: 'Define dynamic equilibrium. State THREE conditions required. Why is it called "dynamic"?' },
            { id: 'cue-2', blockId: 'callout-kc-key', prompt: 'Write the Kc expression for N₂ + 3H₂ ⇌ 2NH₃. What factors affect Kc?' },
            { id: 'cue-3', blockId: 'callout-tip-equil', prompt: 'State THREE common misconceptions about equilibrium and give the correct statement for each.' },
        ],
        summaryText: 'Dynamic equilibrium definition, Kc expressions, what affects Kc.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 9: Equilibrium', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Equilibrium', 'Kc'] }],
};
