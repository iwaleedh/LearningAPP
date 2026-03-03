export const note_biology_5_8_15 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Plan and carry out Core Practical 18: investigating the effect of IAA concentration on plant root and shoot elongation; evaluate results and sources of error.' },
      terms: ['auxin', 'IAA', 'tropism', 'biphasic response'],
    },
    {
      id: 'h-background',
      type: 'heading',
      data: { text: 'Background: IAA and Plant Growth', level: 2 },
      terms: [],
    },
    {
      id: 'p-background',
      type: 'paragraph',
      data: { text: 'Indole-3-acetic acid (IAA) is the primary auxin in plants, produced in the shoot apex and transported polarly downward via PIN proteins. IAA promotes cell elongation by activating proton pumps (H⁺-ATPase) in the cell membrane, acidifying the cell wall (acid growth hypothesis) and activating expansins that loosen cellulose microfibrils, allowing cells to take up water and expand. The response to IAA is concentration-dependent and organ-specific: concentrations that promote shoot elongation inhibit root elongation.' },
      terms: ['auxin', 'IAA'],
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method: Core Practical 18', level: 2 },
      terms: [],
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Germinate cress (Lepidium sativum) or radish seeds on damp filter paper in Petri dishes for 2–3 days until radicle (root) is 5–10 mm.',
          'Prepare IAA solutions: 0, 0.01, 0.1, 1.0, 10, 100 ppm (serial dilution from stock).',
          'Place seedlings on agar containing each IAA concentration (or apply IAA in lanolin paste to decapitated shoots).',
          'Incubate at 22°C for 5 days in the dark (to prevent phototropism confounding results).',
          'Measure root and shoot length (mm) for 10 seedlings per concentration; calculate mean ± SD.',
          'Plot mean length vs log₁₀[IAA] for root and shoot on the same graph.',
        ],
      },
      terms: [],
    },
    {
      id: 'h-results',
      type: 'heading',
      data: { text: 'Expected Results: Biphasic Response', level: 2 },
      terms: [],
    },
    {
      id: 'p-results',
      type: 'paragraph',
      data: { text: 'Shoots: IAA promotes elongation at 0.01–10 ppm; inhibits above ~100 ppm. Roots: IAA promotes elongation at very low concentrations (0.001–0.01 ppm) but inhibits at concentrations that promote shoots (above ~1 ppm). This biphasic (dual) response occurs because roots are more sensitive to IAA than shoots. At high IAA, ethylene production is induced, which antagonises auxin-promoted growth and causes inhibition.' },
      terms: ['biphasic response'],
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Optimal IAA Concentration',
        text: 'Shoots: optimum ~1 ppm IAA for elongation. Roots: optimum ~0.001 ppm. At 10 ppm: roots inhibited, shoots still promoted. This differential sensitivity explains phototropism: on the shaded side, higher IAA concentration promotes shoot elongation, bending the shoot toward light — while the same concentration inhibits root growth on the auxin-rich side, bending roots downward (gravitropism).',
      },
      terms: [],
    },
    {
      id: 'callout-errors',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Sources of Error and Improvements',
        text: 'Error: seedlings vary in initial size → measure initial length before treatment, express results as % change. Error: IAA degrades in light → work in dim light, store solutions in foil-wrapped containers. Error: agar concentration affects diffusion of IAA → use consistent agar %. Error: mechanical handling damages seedlings → use forceps gently, handle by seed coat not radicle. Improvement: use image analysis software (ImageJ) for more accurate length measurements.',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why do roots respond to IAA at much lower concentrations than shoots? Root cells have a higher density of auxin receptors (TIR1/AFB) and a lower threshold for triggering growth-inhibitory responses. At concentrations above the root optimum, IAA stimulates ethylene synthesis via ACC synthase — ethylene then inhibits cell elongation and promotes lateral root branching. Shoot cells require higher IAA concentrations to trigger the same ethylene-mediated inhibition.',
        apply: 'A student tests 5 IAA concentrations on cress roots (10 seedlings each) and measures root length after 5 days. Results: 0 ppm = 18 mm, 0.001 ppm = 25 mm, 0.1 ppm = 20 mm, 10 ppm = 12 mm, 1000 ppm = 8 mm. Calculate the mean % change from control for each concentration. Identify the optimal concentration for root growth promotion and state at what concentration growth becomes inhibited.',
        analyze: 'Compare the mechanism of IAA-promoted cell elongation (acid growth hypothesis: H⁺-ATPase activation → wall acidification → expansin activation → cell wall loosening → water uptake) with the mechanism of IAA-induced inhibition (ethylene induction → inhibition of expansins + promotion of lignification). Explain why the same molecule promotes growth at low concentrations but inhibits it at high concentrations.',
        evaluate: 'Evaluate the validity of using cress seedlings in agar as a model system for studying auxin responses in natural plant growth. Consider: whether in vitro agar conditions replicate soil environment (water potential, microbial interactions, physical resistance), whether the decapitation/application method accurately mimics endogenous IAA distribution, and whether results from cress generalise to crop plants (wheat, rice) where auxin responses may differ.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can describe the method for CP18 including how to prepare IAA dilutions', checked: false },
          { text: 'I can explain the biphasic response and why roots are more sensitive to IAA than shoots', checked: false },
          { text: 'I can explain the acid growth hypothesis for IAA-promoted cell elongation', checked: false },
          { text: 'I can identify and suggest improvements for sources of error in this practical', checked: false },
          { text: 'I can plot and interpret a graph of root/shoot growth vs log[IAA]', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'CP18: germinate seeds, treat with IAA concentrations (0–100 ppm), measure root/shoot length after 5 days. IAA promotes shoot elongation at 0.01–10 ppm; inhibits above 100 ppm. Roots more sensitive: optimum ~0.001 ppm, inhibited above ~1 ppm. Biphasic response: high IAA induces ethylene → inhibition. Acid growth hypothesis: IAA activates H⁺-ATPase → acidifies wall → expansins loosen wall → cell elongates. Key errors: IAA degradation in light, initial seedling size variation.' },
      terms: [],
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-background', prompt: 'Explain the acid growth hypothesis for how IAA promotes cell elongation.' },
      { id: 'cue-2', blockId: 'p-results', prompt: 'Describe the biphasic response of roots and shoots to IAA. At what concentration is root growth inhibited but shoot growth still promoted?' },
      { id: 'cue-3', blockId: 'callout-errors', prompt: 'State three sources of error in CP18 and suggest a specific improvement for each.' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'Explain how differential IAA sensitivity in roots and shoots causes phototropism.' },
    ],
    summaryText: 'IAA acid growth hypothesis: H⁺-ATPase → wall acidification → expansins → elongation. Biphasic: roots more sensitive (optimum 0.001 ppm), shoots less (optimum 1 ppm). High IAA → ethylene → inhibition. CP18 errors: light degradation, initial size variation, agar % consistency.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Auxin and plant growth — Went (1926) and Cholodny-Went hypothesis', detail: 'Frits Went\'s classical oat coleoptile experiments established the role of auxin in phototropism and provided the foundation for understanding IAA concentration-response relationships.', year: '1926', source: 'Went F.W. (1926) Rec. trav. bot. néerl.', tags: ['auxin', 'IAA', 'phototropism', 'plant hormones'] },
  ],
};
