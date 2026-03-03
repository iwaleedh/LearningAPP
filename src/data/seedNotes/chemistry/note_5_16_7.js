export const note_chemistry_5_16_7 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand fuel cells, particularly the hydrogen-oxygen fuel cell, including half-reactions, advantages, and disadvantages.' } },
    { type: 'heading', id: 'h-intro', data: { text: 'Fuel Cells: Energy Production via Electrochemistry', level: 2 } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'A fuel cell is a galvanic cell that converts chemical energy directly into electrical energy via a spontaneous redox reaction. Unlike batteries (fixed energy), fuel cells continuously produce electricity as long as fuel (reducing agent) and oxidant are supplied. More efficient than combustion (~60% vs ~25%).' } },
    { type: 'heading', id: 'h-h2o2', data: { text: 'The Hydrogen-Oxygen Fuel Cell', level: 2 } },
    { type: 'paragraph', id: 'p-setup', data: { text: 'Two electrodes separated by electrolyte. Hydrogen gas at anode, oxygen at cathode. Anode (oxidation): H₂ → 2H⁺ + 2e⁻. Cathode (reduction): O₂ + 4H⁺ + 4e⁻ → 2H₂O. Overall: 2H₂ + O₂ → 2H₂O (E°cell = +1.23 V).' } },
    { type: 'equation', id: 'eq-overall', data: { html: '2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O', caption: 'Overall H₂/O₂ fuel cell reaction' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Advantage: Direct Energy Conversion', text: 'Instead of burning hydrogen (heat released, then converted to work ~25% efficient), fuel cells extract electricity directly from the redox reaction. Theoretical efficiency ~60%. Product is only water (zero emissions).' } },
    { type: 'heading', id: 'h-advantages', data: { text: 'Advantages of H₂ Fuel Cells', level: 2 } },
    { type: 'list', id: 'list-advantages', data: { style: 'bullet', items: [ 'High efficiency: ~60% direct energy conversion', 'Clean product: only water (zero emissions)', 'Quiet operation: no combustion noise', 'Scalable: small portable units to large industrial', 'High energy density: excellent energy per kg' ] } },
    { type: 'heading', id: 'h-disadvantages', data: { text: 'Disadvantages and Challenges', level: 2 } },
    { type: 'list', id: 'list-disadvantages', data: { style: 'bullet', items: [ 'Hydrogen storage: flammable, low density; needs high-pressure tanks or cryogenic storage', 'Production: mostly from fossil fuels (steam reforming); green hydrogen expensive', 'Infrastructure: lack of refuelling stations compared to petrol', 'Cost: platinum catalysts, advanced membranes, manufacturing scale', 'Durability: membrane damage, catalyst poisoning, water management issues' ] } },
    { type: 'callout', id: 'callout-warning-1', data: { style: 'warning', title: 'Hydrogen Misconception', text: 'Hydrogen is abundant in the universe, but not freely available on Earth. It must be produced (usually from hydrocarbons or water), requiring energy. Only renewable energy sources make hydrogen truly "clean".' } },
    { type: 'heading', id: 'h-future', data: { text: 'Current Development and Future Prospects', level: 2 } },
    { type: 'paragraph', id: 'p-future', data: { text: 'Vehicle manufacturers developing hydrogen fuel-cell vehicles. Main research priorities: improving H₂ production from renewables (electrolysis), reducing costs, improving storage, expanding infrastructure. Expected to play important role in transition to renewable energy.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I understand difference between fuel cell and battery', checked: false }, { text: 'I can write anode and cathode half-equations for H₂/O₂ cell', checked: false }, { text: 'I know E°cell = +1.23 V for H₂/O₂ fuel cell', checked: false }, { text: 'I can list advantages (clean, efficient) and disadvantages (storage, cost, infrastructure)', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Hydrogen fuel cells produce electricity from H₂ + O₂ → H₂O. The only product is water, making them "clean" — but producing H₂ may use fossil fuels.\n\nApply: Write the half-equations at the anode and cathode of a hydrogen-oxygen fuel cell.\n\nAnalyze: Compare the efficiency of a fuel cell with an internal combustion engine. Why are fuel cells more efficient?\n\nEvaluate: "Hydrogen fuel cells are truly zero-emission." Critically evaluate, considering the full lifecycle of H₂ production.'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'Fuel cell = galvanic cell converting chemical energy directly to electrical energy. H₂/O₂: anode H₂ → 2H⁺ + 2e⁻; cathode O₂ + 4H⁺ + 4e⁻ → 2H₂O; overall 2H₂ + O₂ → 2H₂O (E°cell = +1.23 V). Advantages: ~60% efficiency, zero emissions (water only), quiet, scalable. Disadvantages: H₂ storage (flammable, low density), expensive production (fossil fuels), lack of infrastructure, high cost, durability.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a fuel cell and how does it differ from a battery?' }, { id: 'cue-2', blockId: 'p-setup', prompt: 'Write the anode and cathode half-equations for the H₂/O₂ fuel cell.' }, { id: 'cue-3', blockId: 'eq-overall', prompt: 'Write the overall reaction for the H₂/O₂ fuel cell.' }, { id: 'cue-4', blockId: 'list-disadvantages', prompt: 'List three disadvantages of hydrogen fuel cells.' }, { id: 'cue-5', blockId: 'callout-warning-1', prompt: 'Why is hydrogen not truly "clean" if produced from fossil fuels?' } ], summaryText: 'Fuel cell = galvanic cell, direct chemical to electrical energy. H₂/O₂: anode H₂ → 2H⁺ + 2e⁻; cathode O₂ + 4H⁺ + 4e⁻ → 2H₂O; overall 2H₂ + O₂ → 2H₂O (E°cell = +1.23 V). Advantages: ~60% efficiency, zero emissions (water), quiet. Disadvantages: H₂ storage, expensive production, lack of infrastructure, high cost, durability.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Hydrogen-oxygen fuel cells', detail: 'Half-equations, overall reaction, cell potential, advantages and disadvantages.', year: '2024', source: 'chemguide.co.uk', tags: ['fuel cells', 'hydrogen-oxygen', 'renewable energy'] } ],
};
