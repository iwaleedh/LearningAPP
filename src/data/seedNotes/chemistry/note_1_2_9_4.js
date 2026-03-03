/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 4
 * Catalysts and energy profiles
 */

export const note_chemistry_1_2_9_4 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Describe how homogeneous and heterogeneous catalysts work. Explain how catalysts affect the enthalpy profile. Give examples of industrial and biological catalysts.' } },
        { id: 'h-catalyst', type: 'heading', data: { text: 'Catalysts', level: 2 }, terms: ['Catalyst'] },
        { id: 'callout-cat-def', type: 'callout', data: { style: 'key', title: '💡 Definition — Catalyst', text: 'A catalyst is a substance that increases the rate of a chemical reaction without being consumed in the overall process.\n\nHow it works:\n  • Provides an alternative reaction pathway with a LOWER activation energy\n  • More particles have energy ≥ the new lower Eₐ → faster rate\n  • ΔH of the reaction is UNCHANGED\n  • The catalyst is regenerated at the end of the reaction' } },
        { id: 'h-types', type: 'heading', data: { text: 'Homogeneous vs Heterogeneous Catalysts', level: 2 }, terms: ['Catalyst'] },
        { id: 'table-cat-types', type: 'comparisonTable', data: { caption: 'Homogeneous vs heterogeneous catalysts', headers: ['Type', 'Definition', 'Example', 'Advantage/Disadvantage'], rows: [['Homogeneous', 'Same phase as reactants', 'H⁺(aq) in ester hydrolysis; Fe³⁺ in S₂O₈²⁻/I⁻ reaction', 'Well-mixed — good contact; harder to separate from products'], ['Heterogeneous', 'Different phase from reactants', 'Fe in Haber process; Pt/Pd in catalytic converters; V₂O₅ in Contact process', 'Easy to separate; can be poisoned by impurities']] } },
        { id: 'callout-heter-key', type: 'callout', data: { style: 'key', title: '💡 How Heterogeneous Catalysts Work', text: '1. Reactant molecules ADSORB onto the catalyst surface (weak bonds form)\n2. Adsorption weakens bonds in reactant molecules → lowers Eₐ\n3. Reaction occurs on the surface\n4. Products DESORB from the surface (leave the surface)\n5. Catalyst surface is regenerated\n\nSurface area is crucial — smaller catalyst particles = greater surface area = more active sites = faster rate.\nCatalyst can be POISONED if impurities block active sites (e.g. lead poisons Pt catalysts).' } },
        { id: 'callout-examples-key', type: 'callout', data: { style: 'key', title: '💡 Industrial and Biological Catalysts', text: 'Industrial:\n  Fe — Haber process: N₂ + 3H₂ ⇌ 2NH₃\n  V₂O₅ — Contact process: 2SO₂ + O₂ ⇌ 2SO₃\n  Pt/Pd/Rh — catalytic converters: CO + NO → CO₂ + N₂\n  H₃PO₄ — industrial esterification\n\nBiological (enzymes):\n  Amylase — starch → glucose (in mouth)\n  Catalase — H₂O₂ → H₂O + O₂ (in cells)\n  Enzymes are protein catalysts; very specific (lock-and-key model); work best at optimal T and pH' } },
        { id: 'callout-tip-cat', type: 'callout', data: { style: 'tip', title: '💬 Exam Tip — Catalysts and Profiles', text: 'On an enthalpy profile with a catalyst:\n  • Draw a SECOND curve with a LOWER peak (lower Eₐ)\n  • Reactants and products levels remain the SAME\n  • ΔH remains the SAME\n  • Label both curves: "uncatalysed" and "catalysed"\n\nNote: the catalyst can also lower Eₐ for the REVERSE reaction by the same amount, so equilibrium position is unchanged — only the rate is affected.' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Catalyst: lowers Eₐ; not consumed; ΔH unchanged', checked: false }, { text: 'Homogeneous: same phase as reactants; heterogeneous: different phase', checked: false }, { text: 'Heterogeneous: adsorption → reaction → desorption on surface', checked: false }, { text: 'Catalyst poisoning: impurities block active sites', checked: false }, { text: 'Enzymes: biological catalysts; specific; affected by T and pH', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Catalysts increase rate by providing a lower-Eₐ pathway without being consumed; ΔH is unchanged. Homogeneous catalysts share the phase of reactants; heterogeneous catalysts are in a different phase and work via adsorption/desorption at active sites. Industrial examples: Fe (Haber), V₂O₅ (Contact), Pt (catalytic converters).' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-cat-def', prompt: 'Define catalyst. How does it increase the rate without being consumed? What happens to ΔH?' },
            { id: 'cue-2', blockId: 'table-cat-types', prompt: 'Distinguish between homogeneous and heterogeneous catalysts. Give one industrial example of each.' },
            { id: 'cue-3', blockId: 'callout-heter-key', prompt: 'Describe the 4 steps by which a heterogeneous catalyst works. What is catalyst poisoning?' },
        ],
        summaryText: 'Catalyst definition, homogeneous vs heterogeneous, adsorption mechanism, industrial examples.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 9: Kinetics', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Kinetics', 'Catalysts'] }],
};
