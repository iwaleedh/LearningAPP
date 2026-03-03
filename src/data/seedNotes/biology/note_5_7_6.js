/**
 * WBI15 — Topic 7.6: Respiratory Substrates and RQ
 * Carbohydrates, fats, proteins; energy yield; respiratory quotient
 */

export const note_biology_5_7_6 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand respiratory quotient (RQ) as a measure of substrate type, compare energy yields from different substrates, and explain why the respiratory quotient varies with fuel source.',
      },
    },
    {
      id: 'h-substrate',
      type: 'heading',
      data: { text: 'Respiratory Substrates: Beyond Glucose', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Although glucose is the primary respiratory substrate, cells can oxidise other molecules: fatty acids, amino acids, and even lactate. The efficiency of ATP production varies depending on the substrate. Energy yield is typically expressed as kJ per gram or ATP per molecule.',
      },
    },
    {
      id: 'h-rq',
      type: 'heading',
      data: { text: 'Respiratory Quotient (RQ)', level: 3 },
    },
    {
      id: 'p-rq-def',
      type: 'paragraph',
      data: {
        text: 'The respiratory quotient (RQ) is the ratio of CO₂ produced to O₂ consumed during respiration. RQ = mol CO₂ released / mol O₂ consumed. The RQ is characteristic of the substrate being oxidised and provides a clue to the metabolic substrate being used.',
      },
    },
    {
      id: 'eq-rq',
      type: 'equation',
      data: {
        html: 'RQ = <span class="nb-frac"><span class="nb-num">CO<sub>2</sub> produced</span><span class="nb-den">O<sub>2</sub> consumed</span></span>',
        caption: 'Respiratory quotient formula',
      },
    },
    {
      id: 'h-carb',
      type: 'heading',
      data: { text: 'Carbohydrate Oxidation: RQ = 1.0', level: 3 },
    },
    {
      id: 'p-carb',
      type: 'paragraph',
      data: {
        text: 'For carbohydrates (e.g., glucose), the ratio of C:H:O is already balanced with oxygen. Complete oxidation yields an RQ of 1.0, meaning equal moles of CO₂ are produced and O₂ consumed. Example: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. RQ = 6 CO₂ / 6 O₂ = 1.0.',
      },
    },
    {
      id: 'h-fat',
      type: 'heading',
      data: { text: 'Fatty Acid Oxidation: RQ ≈ 0.7', level: 3 },
    },
    {
      id: 'p-fat',
      type: 'paragraph',
      data: {
        text: 'Fatty acids are more reduced (more C-H bonds) than carbohydrates, so they release more energy but require more oxygen per carbon atom. Fat oxidation RQ ≈ 0.7. Example: Tripalmitin (C₅₁H₉₈O₆) oxidation requires 72.5 O₂ to produce 51 CO₂, giving RQ ≈ 0.7.',
      },
    },
    {
      id: 'callout-fat-energy',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Fats Store More Energy',
        text: 'Fatty acids release ~39 kJ/g, whilst carbohydrates release ~17 kJ/g. This is because fat is more reduced (more C-H bonds) and thus has more oxidisable carbon. Per molecule, fat yields more ATP than carbohydrate of similar mass, making fat the preferred long-term energy store.',
      },
    },
    {
      id: 'h-protein',
      type: 'heading',
      data: { text: 'Protein Oxidation: RQ ≈ 0.8–0.9', level: 3 },
    },
    {
      id: 'p-protein',
      type: 'paragraph',
      data: {
        text: 'Proteins contain nitrogen, which is not oxidised to CO₂ but excreted as urea. This complicates the calculation. Typical amino acid oxidation yields RQ ≈ 0.8–0.9. Protein is normally a minor respiratory substrate except during starvation.',
      },
    },
    {
      id: 'table-rq',
      type: 'comparisonTable',
      data: {
        headers: ['Substrate', 'RQ Value', 'Energy Yield (kJ/g)', 'Notes'],
        rows: [
          ['Carbohydrate (glucose)', '1.0', '~17', 'Balanced C:H:O, quick energy'],
          ['Fat (fatty acid)', '~0.7', '~39', 'More reduced, more energy per gram'],
          ['Protein (amino acids)', '~0.8–0.9', '~17', 'Nitrogen excreted, variable RQ'],
          ['Organic acids (lactate)', '~1.2', 'Variable', 'Already partially oxidised'],
        ],
        caption: 'Respiratory quotient and energy yield for different substrates',
      },
    },
    {
      id: 'h-measurement',
      type: 'heading',
      data: { text: 'Measuring RQ to Determine Substrate Use', level: 3 },
    },
    {
      id: 'p-measurement',
      type: 'paragraph',
      data: {
        text: 'By measuring O₂ consumption and CO₂ production in a respirometer, researchers can calculate RQ and infer which substrate is being oxidised. An RQ near 1.0 indicates carbohydrate use; RQ near 0.7 indicates fat oxidation; RQ near 0.8–0.9 suggests protein or mixed substrate use. This is useful in studying metabolic state: fasted individuals show RQ < 0.9 (using fat); fed individuals show RQ ≈ 0.95–1.0 (using carbohydrate and mixed substrates).',
      },
    },
    {
      id: 'h-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Calculate RQ for Tripalmitin',
        text: 'Tripalmitin (C₅₁H₉₈O₆, a triglyceride) oxidation: C₅₁H₉₈O₆ + 72.5 O₂ → 51 CO₂ + 49 H₂O. RQ = 51 CO₂ / 72.5 O₂ ≈ 0.70. This confirms that fat oxidation has RQ ≈ 0.7.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'RQ varies by substrate type. Carbohydrates have RQ = 1.0 (balanced); fats have RQ ≈ 0.7 (more reduced, more O₂ needed); proteins have RQ ≈ 0.8–0.9 (N excreted). RQ can be measured using respirometry to determine which substrates cells are using.',
        apply: 'An athlete at rest has an RQ of 0.85. After a large meal (rich in carbohydrate), RQ increases to 0.95. Explain this change and predict what would happen during prolonged fasting.',
        analyze: 'Compare energy yield (kJ/g) and ATP yield for carbohydrate and fat oxidation. Why are fats preferred for long-term energy storage despite being harder to access?',
        evaluate: 'In a clinical setting, a patient in metabolic shock has RQ > 1.0. What might this indicate, and what substrate might be oxidised?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define respiratory quotient and write the formula', checked: false },
          { text: 'State the RQ for carbohydrate, fat, and protein oxidation', checked: false },
          { text: 'Explain why fats have lower RQ and yield more energy per gram', checked: false },
          { text: 'Describe how RQ is measured and what it reveals about substrate use', checked: false },
          { text: 'Calculate RQ for a simple organic molecule (worked example)', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Respiratory quotient RQ = CO₂ produced / O₂ consumed. Carbohydrate RQ = 1.0 (~17 kJ/g); fat RQ ≈ 0.7 (~39 kJ/g); protein RQ ≈ 0.8–0.9. Fats are more reduced and yield more energy per gram, making them preferred for long-term storage. RQ measured via respirometry to determine metabolic substrate.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-rq',
        prompt: 'Define respiratory quotient and write the formula.',
      },
      {
        id: 'cue-2',
        blockId: 'table-rq',
        prompt: 'State the RQ value for carbohydrate, fat, and protein oxidation. What do these values tell us?',
      },
      {
        id: 'cue-3',
        blockId: 'p-fat',
        prompt: 'Why do fatty acids have an RQ of approximately 0.7? How does this relate to energy yield?',
      },
      {
        id: 'cue-4',
        blockId: 'p-measurement',
        prompt: 'How can RQ be measured, and what information does it provide about metabolic state?',
      },
      {
        id: 'cue-5',
        blockId: 'h-worked',
        prompt: 'Calculate the RQ for tripalmitin oxidation given the balanced equation.',
      },
    ],
    summaryText:
      'RQ = CO₂ produced / O₂ consumed. Carbohydrate (RQ = 1.0): ~17 kJ/g; fat (RQ ≈ 0.7): ~39 kJ/g; protein (RQ ≈ 0.8–0.9). Fats are more reduced (more C-H), yield more energy per gram. RQ measured via respirometry indicates which substrate is being oxidised. Fed state RQ ≈ 1.0; fasted state RQ ≈ 0.7–0.8.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'RQ in clinical assessment',
      detail: 'RQ is used in critical care to assess metabolic state and caloric needs',
      year: '—',
      source: 'Clinical nutrition',
      tags: ['clinical'],
    },
  ],
};
