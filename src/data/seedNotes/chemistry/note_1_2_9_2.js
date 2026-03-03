/**
 * WCH12 | Topic 9: Kinetics & Equilibrium Intro | Subtopic 2
 * Rate calculations from data
 */

export const note_chemistry_1_2_9_2 = {
    blocks: [
        { id: 'obj', type: 'objective', data: { text: 'Calculate the rate of reaction from experimental data (concentration–time and volume–time graphs). Determine the initial rate and average rate. Understand units of rate.' } },
        { id: 'h-rate', type: 'heading', data: { text: 'Rate of Reaction', level: 2 }, terms: ['Rate of reaction'] },
        { id: 'callout-rate-def', type: 'callout', data: { style: 'key', title: '💡 Definition and Units', text: 'Rate of reaction = change in concentration (or volume) per unit time\n\nRate = Δ[concentration] ÷ Δtime   units: mol dm⁻³ s⁻¹\n  OR\nRate = Δvolume ÷ Δtime   units: cm³ s⁻¹ (for gas collection)\n  OR\nRate = Δmass ÷ Δtime   units: g s⁻¹ (for mass loss)\n\nRate is always positive — use |Δ[reactant]| or Δ[product].' } },
        { id: 'callout-graph-key', type: 'callout', data: { style: 'key', title: '💡 Rate from a Graph', text: 'From a concentration–time (or volume–time) graph:\n\nInitial rate = gradient of the tangent drawn at t = 0\n  → steepest part of the curve\n\nAverage rate over a time interval = Δy ÷ Δx  (chord gradient)\n\nInstantaneous rate at time t = gradient of tangent at that point\n\nAs reaction proceeds:\n  • Reactant concentration decreases → curve flattens\n  • Rate decreases over time (for most reactions)' } },
        { id: 'callout-we-rate', type: 'callout', data: { style: 'worked', title: '✏️ Worked Example — Calculating Initial Rate', text: 'A reaction produces 40 cm³ of gas in the first 20 seconds.\nCalculate the average rate over this period.\n\nRate = Δvolume ÷ Δtime = 40 ÷ 20 = 2.0 cm³ s⁻¹\n\n─────────────────────────────────────────\nFrom a concentration–time graph, the tangent at t = 0 has:\n  Δ[A] = −0.80 mol dm⁻³ over Δt = 40 s\n\nInitial rate = |−0.80| ÷ 40 = 0.020 mol dm⁻³ s⁻¹' } },
        { id: 'callout-clock-key', type: 'callout', data: { style: 'key', title: '💡 Clock Reactions', text: 'In a clock reaction, the time for a visual change (e.g. colour change, precipitate) is measured.\n\nRate ∝ 1/t   (where t = time for the colour change)\n\nUsed to compare rates at different concentrations or temperatures without measuring a full concentration–time profile.\n\nExample: iodine clock reaction — appearance of blue-black colour' } },
        { id: 'h-checklist', type: 'heading', data: { text: 'Exam Checklist', level: 2 } },
        { id: 'checklist', type: 'checklist', data: { items: [{ text: 'Rate = Δ[conc] ÷ Δt (mol dm⁻³ s⁻¹) or Δvol ÷ Δt (cm³ s⁻¹)', checked: false }, { text: 'Initial rate = gradient of tangent at t = 0 on concentration–time graph', checked: false }, { text: 'Average rate = Δy ÷ Δx (chord gradient)', checked: false }, { text: 'Rate decreases over time as reactant concentration falls', checked: false }, { text: 'Clock reactions: rate ∝ 1/t', checked: false }] } },
        { id: 'summary', type: 'summary', data: { text: 'Rate of reaction = Δconcentration ÷ Δtime (mol dm⁻³ s⁻¹). Initial rate is the gradient of the tangent at t = 0 on a concentration–time graph. Average rate is the chord gradient. Rate decreases as the reaction proceeds. In clock reactions, rate ∝ 1/t.' } },
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'callout-rate-def', prompt: 'State the definition and units of rate of reaction.' },
            { id: 'cue-2', blockId: 'callout-graph-key', prompt: 'How do you find the initial rate from a concentration–time graph? How does rate change as the reaction proceeds?' },
        ],
        summaryText: 'Rate definition and units, initial rate from graphs, average rate, clock reactions.',
        ready: false,
    },
    evidence: [{ id: 'ev-1', title: 'Edexcel IAL WCH12 Spec', detail: 'Topic 9: Kinetics', year: '2018', source: 'Pearson Edexcel', tags: ['WCH12', 'Kinetics', 'Rate of reaction'] }],
};
