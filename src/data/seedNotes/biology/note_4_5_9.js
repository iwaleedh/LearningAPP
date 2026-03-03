export const note_biology_4_5_9 = {
  blocks: [
    {
      id: 'obj-photophosphorylation',
      type: 'objective',
      data: {
        text: 'Understand the mechanisms of cyclic and non-cyclic photophosphorylation, when each predominates, and how they contribute to ATP and NADPH production in photosynthesis.',
      },
    },
    {
      id: 'h-noncyclic-overview',
      type: 'heading',
      data: {
        text: 'Non-Cyclic Photophosphorylation',
        level: 2,
      },
    },
    {
      id: 'p-noncyclic-intro',
      type: 'paragraph',
      data: {
        text: 'Non-cyclic photophosphorylation is the dominant pathway during photosynthesis in bright light. It involves the sequential operation of both Photosystem II and Photosystem I, with electrons flowing from water through the electron transport chain to NADP⁺. This pathway produces ATP, NADPH, and oxygen in a single "pass" of electrons.',
      },
    },
    {
      id: 'list-noncyclic-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'Photolysis of water at PSII: Light excites P680, causing electron ejection. Water is split by the oxygen-evolving complex: 2H₂O → 4H⁺ + 4e⁻ + O₂. Electrons replace those lost from chlorophyll.',
          },
          {
            text: 'Electron transport from PSII to PSI: Electrons pass through plastoquinone (PQ), cytochrome b₆f complex (pumping protons), and plastocyanin (PC). Energy loss drives proton pumping into the thylakoid lumen, creating a gradient.',
          },
          {
            text: 'Photoactivation at PSI: Light excites P700, raising electrons to a high energy level.',
          },
          {
            text: 'NADPH formation: High-energy electrons reduce NADP⁺ to NADPH via ferredoxin and FNR at the stromal surface of the thylakoid.',
          },
          {
            text: 'ATP synthesis: The proton gradient drives ATP synthase, phosphorylating ADP to ATP.',
          },
        ],
      },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Z-Scheme Electron Flow',
        text: 'Non-cyclic photophosphorylation is often called the "Z-scheme" because of the characteristic shape of the energy diagram: electrons start at a high level (water), drop at PSII, rise again at PSI, and exit at a high level (NADPH). The diagram resembles the letter Z.',
      },
    },
    {
      id: 'h-noncyclic-products',
      type: 'heading',
      data: {
        text: 'Products of Non-Cyclic Photophosphorylation',
        level: 2,
      },
    },
    {
      id: 'p-noncyclic-products',
      type: 'paragraph',
      data: {
        text: 'The products are ATP, NADPH, and O₂. For every two electrons that pass through the system (from water to NADP⁺), approximately 2.7–3 ATP and 1 NADPH are produced. The stoichiometry reflects the proton gradient requirement: roughly 4 protons are needed to synthesise 1 ATP, and the electron transport chain pumps about 10 protons per 2 electrons transferred, yielding 2.5 ATP. In practice, the ratio of ATP to NADPH produced is approximately 3:2, which matches the Calvin cycle demand (3 ATP and 2 NADPH per CO₂ fixed).',
      },
    },
    {
      id: 'eq-noncyclic',
      type: 'equation',
      data: {
        html: '2H<sub>2</sub>O + 2NADP<sup>+</sup> + 3 ADP + 3 Pi + light → O<sub>2</sub> + 2 NADPH + 3 ATP',
        caption: 'Overall equation for non-cyclic photophosphorylation (approximate stoichiometry)',
      },
    },
    {
      id: 'h-cyclic-overview',
      type: 'heading',
      data: {
        text: 'Cyclic Photophosphorylation',
        level: 2,
      },
    },
    {
      id: 'p-cyclic-intro',
      type: 'paragraph',
      data: {
        text: 'Cyclic photophosphorylation involves Photosystem I alone. Electrons are excited at P700 and pass through ferredoxin to the electron transport chain (cytochrome b₆f), then return to PSI via plastoquinone. The electron pathway is cyclic—electrons do not exit the system to NADP⁺ but rather re-enter PSI. This recycling produces ATP (via the proton gradient from the cytochrome b₆f complex) but no NADPH and no oxygen.',
      },
    },
    {
      id: 'list-cyclic-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          {
            text: 'Photoactivation at PSI: Light excites P700, raising electrons to high energy.',
          },
          {
            text: 'Electron transport through the ETC: Electrons pass through ferredoxin and enter the electron transport chain (cytochrome b₆f and PQ).',
          },
          {
            text: 'Proton pumping: The cytochrome b₆f complex pumps protons into the thylakoid lumen (similar to non-cyclic, but fewer protons are pumped overall).',
          },
          {
            text: 'Electron recycling: Electrons return to PSI via plastoquinone, completing the cycle.',
          },
          {
            text: 'ATP synthesis: The proton gradient drives ATP synthase.',
          },
        ],
      },
    },
    {
      id: 'callout-key2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why PSI Alone?',
        text: 'In cyclic photophosphorylation, PSII is not involved because no water photolysis or NADPH reduction occurs. Only PSI is needed to generate the proton gradient via the cytochrome b₆f complex. This makes cyclic photophosphorylation a fast, efficient way to produce ATP when NADPH is not limiting.',
      },
    },
    {
      id: 'h-cyclic-vs-noncyclic',
      type: 'heading',
      data: {
        text: 'Comparison: Cyclic vs Non-Cyclic Photophosphorylation',
        level: 2,
      },
    },
    {
      id: 'table-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Non-Cyclic', 'Cyclic'],
        rows: [
          ['Photosystems involved', 'PSII and PSI', 'PSI only'],
          ['Water splitting (photolysis)', 'Yes', 'No'],
          ['O₂ produced', 'Yes (6.02 × 10²³ molecules per electron pair)', 'No'],
          ['ATP produced', 'Yes (~3 per 2e⁻)', 'Yes (~2 per 2e⁻)'],
          ['NADPH produced', 'Yes (~1 per 2e⁻)', 'No'],
          ['Electron source', 'Water (H₂O)', 'Ferredoxin (recycled)'],
          ['Electron destination', 'NADP⁺', 'Ferredoxin (recycled)'],
          ['Main purpose', 'Supply both ATP and NADPH for Calvin cycle', 'Fine-tune ATP production when NADPH is saturated'],
          ['When predominant', 'Normal daylight (standard conditions)', 'Low [CO₂], high light, or when Calvin cycle slowed'],
        ],
        caption: 'Comparison of cyclic and non-cyclic photophosphorylation',
      },
    },
    {
      id: 'h-when-cyclic',
      type: 'heading',
      data: {
        text: 'When Does Cyclic Photophosphorylation Predominate?',
        level: 2,
      },
    },
    {
      id: 'p-when-cyclic',
      type: 'paragraph',
      data: {
        text: 'Cyclic photophosphorylation becomes dominant under conditions where the NADPH pool is saturated or where the Calvin cycle is bottlenecked. For instance, if light intensity is high but CO₂ concentration is low, the Calvin cycle slows (RuBisCO has fewer CO₂ molecules to fix). This reduces NADPH consumption. The NADPH/NADP⁺ ratio rises, inhibiting NADP reduction at the end of the electron transport chain. Under these conditions, electrons cannot be passed to NADP⁺ and instead are recycled through PSI, operating the cyclic pathway. Additionally, cyclic photophosphorylation helps maintain the ATP:NADPH ratio needed by the Calvin cycle, which is approximately 3:2. If non-cyclic photophosphorylation alone produced a 1:1 ratio, cyclic photophosphorylation would increase to boost ATP production.',
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Regulatory Mechanism',
        text: 'The switching between cyclic and non-cyclic pathways is regulated primarily by the NADPH/NADP⁺ ratio and ATP/ADP ratio. When these ratios are unfavourable for the Calvin cycle, feedback mechanisms reduce PSII activity and enhance PSI recycling, automatically directing electrons into the cyclic pathway.',
      },
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'ATP:NADPH Ratio Adjustment',
        text: 'Suppose non-cyclic photophosphorylation alone produces 3 ATP and 2 NADPH per 3 CO₂ fixed (3 ATP : 2 NADPH = 1.5:1). The Calvin cycle requires 9 ATP and 6 NADPH per 3 CO₂ (9 ATP : 6 NADPH = 1.5:1). The ratio matches perfectly. However, if light intensity is extremely high and only limited CO₂ is available, cyclic photophosphorylation operates to produce additional ATP without excess NADPH, fine-tuning the ratio.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Non-cyclic photophosphorylation involves PSII and PSI in series: water photolysis at PSII → electron transport (with proton pumping) → photoactivation at PSI → NADPH formation. It produces ATP, NADPH, and O₂. The ATP:NADPH ratio is ~3:2, matching Calvin cycle demand. Cyclic photophosphorylation involves PSI alone: P700 excitation → electron transport (cytochrome b₆f pumps protons) → electron recycling back to PSI. It produces ATP only, not NADPH or O₂. Cyclic predominates when NADPH is saturated or when ATP:NADPH ratio is unfavourable.',
        apply: 'A plant is exposed to high light but low CO₂. Predict whether non-cyclic or cyclic photophosphorylation would predominate and explain why.',
        analyze: 'Compare the ATP yield from one ATP synthase in non-cyclic vs cyclic photophosphorylation. Why does cyclic produce less ATP per electron?',
        evaluate: 'Cyclic photophosphorylation produces no NADPH and no O₂. Evaluate whether this pathway represents a "waste" of light energy or whether it serves an important regulatory function in photosynthesis.',
      },
      terms: [],
    },
    {
      id: 'checklist-photophos',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the steps of non-cyclic photophosphorylation in sequence', checked: false },
          { text: 'I understand the Z-scheme and can identify the electron donors and acceptors', checked: false },
          { text: 'I can state the products of non-cyclic photophosphorylation and their ATP:NADPH ratio', checked: false },
          { text: 'I can describe the steps of cyclic photophosphorylation', checked: false },
          { text: 'I can explain why cyclic photophosphorylation produces ATP but no NADPH or O₂', checked: false },
          { text: 'I understand when and why cyclic photophosphorylation becomes the dominant pathway', checked: false },
        ],
      },
    },
    {
      id: 'summary-photophos',
      type: 'summary',
      data: {
        text: 'Non-cyclic photophosphorylation (dominant pathway): PSII and PSI in series. Water photolysis at PSII → electron transport with proton pumping → P700 excitation at PSI → NADPH formation. Produces: ATP (~3), NADPH (~1), O₂ per 2 electrons. Cyclic photophosphorylation (when NADPH saturates): PSI alone. P700 excitation → electron transport through cytochrome b₆f (proton pumping) → electron recycling. Produces: ATP (~2) per 2 electrons. No NADPH, no O₂. Cyclic predominates at low CO₂, high light, or when ATP:NADPH ratio needs fine-tuning.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-noncyclic-steps',
        prompt: 'Describe the five main steps of non-cyclic photophosphorylation, from water photolysis to ATP synthesis.',
      },
      {
        id: 'cue-2',
        blockId: 'eq-noncyclic',
        prompt: 'Write the overall equation for non-cyclic photophosphorylation. What is the ATP:NADPH ratio and why is it important?',
      },
      {
        id: 'cue-3',
        blockId: 'list-cyclic-steps',
        prompt: 'Describe cyclic photophosphorylation. Which photosystem is involved and why?',
      },
      {
        id: 'cue-4',
        blockId: 'table-comparison',
        prompt: 'Compare cyclic and non-cyclic photophosphorylation in terms of photosystems involved, products, and when each predominates.',
      },
      {
        id: 'cue-5',
        blockId: 'h-when-cyclic',
        prompt: 'Explain the conditions under which cyclic photophosphorylation becomes the dominant pathway and why this is advantageous.',
      },
    ],
    summaryText: 'Non-cyclic: PSII + PSI in series. 2H₂O → 4H⁺ + 4e⁻ + O₂; electrons pass through ETC (pumping protons) to PSI; P700 raises electrons, reducing NADP⁺ → NADPH. Produces ~3 ATP : 2 NADPH : 1 O₂ per 2e⁻. Cyclic: PSI alone. P700 → ferredoxin → ETC (cytochrome b₆f pumps protons) → back to PSI. Produces ~2 ATP per 2e⁻; no NADPH, no O₂. Cyclic predominates at low [CO₂], high light, or when NADPH saturates.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Z-Scheme Validation',
      detail: 'The Z-scheme was proposed by Hill and Bendall (1960) based on spectroscopic evidence of PSII and PSI oxidation-reduction states. Modern X-ray crystallography confirms the electron pathway.',
      year: '2023',
      source: 'A-Level Biology Specification (WBI14)',
      tags: ['history', 'photosystems'],
    },
    {
      id: 'ev-2',
      title: 'Cyclic Photophosphorylation Function',
      detail: 'Research shows cyclic photophosphorylation is active in low-CO₂ conditions and during transitions between light and dark, helping regulate the ATP:NADPH ratio for optimal Calvin cycle operation.',
      year: '2023',
      source: 'Plant physiology research',
      tags: ['regulation', 'photosynthesis'],
    },
  ],
};
