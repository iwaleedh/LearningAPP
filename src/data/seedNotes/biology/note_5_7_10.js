/**
 * WBI15 — Topic 7.10: Fast and Slow Twitch Muscle Fibres
 * Type I, Type II, IIa, mitochondria, myoglobin, fatigue, fibre type shifting
 */

export const note_biology_5_7_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the structural and metabolic differences between slow-twitch (Type I) and fast-twitch (Type II) muscle fibres, their roles in different activities, and how training can shift fibre type.',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Muscle Fibre Types: Slow-Twitch vs Fast-Twitch', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Skeletal muscles are composed of different fibre types, distinguished by contraction speed, fatigue resistance, energy metabolism, and appearance. The main classification is slow-twitch (Type I) and fast-twitch (Type II), with fast-twitch further subdivided into oxidative (IIa) and glycolytic (IIx/IIb) subtypes.',
      },
    },
    {
      id: 'h-type1',
      type: 'heading',
      data: { text: 'Slow-Twitch Fibres (Type I)', level: 3 },
    },
    {
      id: 'p-type1-general',
      type: 'paragraph',
      data: {
        text: 'Type I fibres are fatigue-resistant and suited for sustained, endurance activities. They have slow contraction speed (~25 ms twitch duration) but can maintain contractions for extended periods.',
      },
    },
    {
      id: 'table-type1',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Type I (Slow-Twitch)', 'Significance'],
        rows: [
          ['Contraction speed', 'Slow (~25 ms)', 'Sustained activity, not explosive'],
          ['Mitochondria', 'Many', 'High aerobic capacity, ATP production'],
          ['Myoglobin', 'High (dark red)', 'O₂ binding & storage, high O₂ extraction'],
          ['Capillaries', 'Dense network', 'High O₂ and nutrient delivery'],
          ['Myosin ATPase', 'Low', 'Slow cross-bridge cycling'],
          ['Enzymes', 'Oxidative (high citrate synthase)', 'Krebs cycle & aerobic metabolism'],
          ['Fatigue resistance', 'High', 'Postural muscles, marathons'],
          ['Examples', 'Soleus, deep back muscles', 'Used in endurance'],
        ],
        caption: 'Characteristics of Type I slow-twitch fibres',
      },
    },
    {
      id: 'h-type2',
      type: 'heading',
      data: { text: 'Fast-Twitch Fibres (Type II)', level: 3 },
    },
    {
      id: 'p-type2-general',
      type: 'paragraph',
      data: {
        text: 'Type II fibres are fast and powerful but fatigue quickly. They are subdivided: Type IIa (oxidative-glycolytic, intermediate) and Type IIx/IIb (purely glycolytic, fast fatiguing).',
      },
    },
    {
      id: 'table-type2',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Type IIa', 'Type IIx/IIb'],
        rows: [
          ['Contraction speed', 'Fast (~10 ms)', 'Very fast (~5 ms)'],
          ['Mitochondria', 'Moderate', 'Few'],
          ['Myoglobin', 'Moderate (red)', 'Low (white)'],
          ['Capillaries', 'Moderate', 'Sparse'],
          ['Myosin ATPase', 'High', 'Very high'],
          ['Metabolism', 'Mixed aerobic-anaerobic', 'Predominantly anaerobic (glycolysis)'],
          ['Fatigue resistance', 'Moderate', 'Poor, fatigues quickly'],
          ['Force output', 'High', 'Very high'],
          ['Examples', 'Sprinting, jumping', 'Explosive movements, fast twitch'],
        ],
        caption: 'Characteristics of Type II fast-twitch fibres',
      },
    },
    {
      id: 'callout-myoglobin',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Myoglobin: Local Oxygen Storage',
        text: 'Myoglobin is an iron-containing protein (similar to haemoglobin) that binds O₂ with high affinity. In slow-twitch fibres (high myoglobin), O₂ is bound and stored locally, providing a oxygen reservoir during sustained contraction. Type II fibres have less myoglobin, making them more dependent on continuous blood supply.',
      },
    },
    {
      id: 'h-fibre-type-ratio',
      type: 'heading',
      data: { text: 'Fibre Type Ratio and Inheritance', level: 3 },
    },
    {
      id: 'p-inheritance',
      type: 'paragraph',
      data: {
        text: 'The ratio of Type I to Type II fibres is largely genetically determined. Endurance athletes tend to have a high proportion of Type I fibres (e.g., 70–80%), whilst sprinters tend to have more Type II fibres (e.g., 50–60% Type II). Elite athletes are often "born" with an inherited fibre composition suited to their sport.',
      },
    },
    {
      id: 'h-training-shift',
      type: 'heading',
      data: { text: 'Fibre Type Shifting Through Training', level: 3 },
    },
    {
      id: 'p-training-shift',
      type: 'paragraph',
      data: {
        text: 'Although fibre type is genetically determined, training can shift fibre composition. Endurance training (long, low-intensity exercise) can convert Type IIx fibres to Type IIa fibres (oxidative glycolytic), increasing aerobic capacity. This shift is mediated by: (1) sustained low Ca²⁺ signalling; (2) activation of AMPK and PGC-1α (metabolic regulators); (3) increased mitochondrial biogenesis; (4) increased myoglobin expression. The reverse shift (IIa → IIx) can occur with inactivity or high-intensity training.',
      },
    },
    {
      id: 'p-training-limits',
      type: 'paragraph',
      data: {
        text: 'However, training cannot convert Type I to Type II or vice versa. The fundamental type (slow vs fast myosin isoform) is genetically fixed. Training shifts within the Type II subclass (IIx ⇌ IIa) and increases mitochondrial density and metabolic capacity, but does not change fibre type classification.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Type I fibres (slow, many mitochondria, high myoglobin) are fatigue-resistant and suited for endurance. Type II fibres (fast, few mitochondria, low myoglobin) are powerful but fatigue quickly. Type IIa (intermediate) can shift towards oxidative metabolism with endurance training. Fibre type ratio is genetic but metabolic properties can be modified.',
        apply: 'A sprinter wishes to improve endurance for a 400 m race. Describe the metabolic changes that would occur with endurance training and which fibre types would be affected.',
        analyze: 'Why do Type I fibres have many mitochondria and high myoglobin whilst Type II fibres have fewer? What metabolic demands explain this difference?',
        evaluate: 'Elite endurance athletes have high Type I proportions. Is this "natural talent" or can it be trained? What does this suggest about genetic vs environmental factors in athletic performance?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Compare Type I and Type II fibre structures and metabolic properties', checked: false },
          { text: 'Explain why Type I fibres are fatigue-resistant and Type II fatigue quickly', checked: false },
          { text: 'Describe the role of myoglobin in slow-twitch fibres', checked: false },
          { text: 'Explain how endurance training shifts Type IIx to Type IIa fibres', checked: false },
          { text: 'Discuss the genetic and environmental factors determining fibre type composition', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Muscle fibres: Type I (slow, many mitochondria, high myoglobin, fatigue-resistant, aerobic) for endurance; Type IIa (fast, moderate mitochondria, mixed metabolism) for moderate activity; Type IIx (very fast, few mitochondria, anaerobic glycolysis, quick fatigue) for sprinting. Fibre type ratio genetic; endurance training converts IIx → IIa (oxidative-glycolytic). Type I vs II classification is fixed; metabolic shifting occurs within Type II.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'table-type1',
        prompt: 'Compare Type I fibres with Type II fibres in terms of mitochondria, myoglobin, contraction speed, and fatigue resistance.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-myoglobin',
        prompt: 'What is myoglobin and why is it abundant in Type I fibres but scarce in Type II?',
      },
      {
        id: 'cue-3',
        blockId: 'table-type2',
        prompt: 'Distinguish between Type IIa and Type IIx fibres. How do their metabolic pathways differ?',
      },
      {
        id: 'cue-4',
        blockId: 'p-training-shift',
        prompt: 'How does endurance training shift fibre type composition? Which mechanisms are involved?',
      },
      {
        id: 'cue-5',
        blockId: 'p-inheritance',
        prompt: 'Is fibre type ratio genetically determined? Can it be changed by training?',
      },
    ],
    summaryText:
      'Type I (slow, red): many mitochondria, high myoglobin, aerobic, fatigue-resistant, endurance. Type IIa (fast, red): moderate mitochondria, mixed aerobic-anaerobic, moderate fatigue. Type IIx (very fast, white): few mitochondria, anaerobic glycolysis, quick fatigue, explosive power. Fibre type ratio genetic. Endurance training: Type IIx → Type IIa (via increased mitochondrial biogenesis, myoglobin).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Fibre type classification',
      detail: 'Based on myosin heavy chain isoforms: slow (I, β-cardiac), fast (II, fast-skeletal)',
      year: '1970s',
      source: 'Muscle physiology',
      tags: ['classification'],
    },
  ],
};
