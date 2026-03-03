export const note_biology_5_8_1 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand resting membrane potential: the value of −70 mV, how it is maintained by Na⁺/K⁺-ATPase pump (3Na⁺ out : 2K⁺ in), K⁺ leak channels, selective permeability, electrochemical gradients, and why the inside of the axon is negative.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Resting Membrane Potential', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'The resting membrane potential is the electrical difference across a neurone membrane when at rest (not firing an action potential). This value is approximately −70 mV, meaning the inside of the axon is 70 mV more negative than the outside. This potential is essential for nerve function and is maintained by active transport and selective permeability.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Na⁺/K⁺-ATPase Pump (Sodium-Potassium Pump)', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'The sodium-potassium pump (Na⁺/K⁺-ATPase) is an active transport protein that uses ATP energy to move ions against their concentration gradients. It transports 3 Na⁺ ions out of the cell and 2 K⁺ ions into the cell per ATP molecule hydrolysed. This maintains a gradient: high intracellular K⁺ (~140 mM), high extracellular Na⁺ (~145 mM).' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'ATP → ADP + Pi + energy used to pump 3 Na<sup>+</sup> out, 2 K<sup>+</sup> in',
        caption: 'Energy requirement for active transport by the Na⁺/K⁺ pump',
      },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Asymmetrical Exchange',
        text: 'The pump transports 3 Na⁺ out but only 2 K⁺ in. This 3:2 ratio means a net of one positive charge is removed per pump cycle, contributing to the negative resting potential.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'K⁺ Leak Channels and Selective Permeability', level: 3 },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'At rest, the axon membrane is selectively permeable, primarily to K⁺ ions via leak channels (passive potassium channels). These channels allow K⁺ to diffuse out of the cell (down its concentration gradient, from high inside to low outside). Na⁺ channels are largely closed at rest, so Na⁺ influx is minimal. The selective permeability to K⁺ is crucial because K⁺ efflux makes the inside more negative.' },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'The permeability to K⁺ is approximately 25 times greater than to Na⁺ at rest, meaning potassium ions dominate the ion distribution and the resting potential.' },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Electrochemical Gradients', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'An electrochemical gradient combines two opposing forces: a concentration gradient (diffusion down concentration difference) and an electrical gradient (ions moving toward opposite charge). For K⁺ at rest: concentration gradient favours efflux (out), but electrical gradient favours influx (in, toward negative interior). These forces reach equilibrium at the K⁺ equilibrium potential (approximately −90 mV).' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Why the Inside is Negative: Osmotic Balance', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'The resting potential of −70 mV (rather than the K⁺ equilibrium of −90 mV) reflects that some Na⁺ does leak in and some K⁺ leaks out continuously. Importantly, large organic anions (proteins, phosphate) are trapped inside the cell—they cannot cross the membrane. These anions contribute significantly to the internal negative charge. Additionally, Cl⁻ ions are present at higher concentrations outside, further reinforcing the negative interior.' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'The cell maintains osmotic balance: the Na⁺/K⁺ pump removing one net positive charge per cycle, combined with membrane impermeability to large anions, establishes the steady-state −70 mV resting potential.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Ion', 'Intracellular (mM)', 'Extracellular (mM)', 'Equilibrium Potential (mV)'],
        rows: [
          ['Na⁺', '12', '145', '+60'],
          ['K⁺', '140', '5', '−90'],
          ['Cl⁻', '4', '110', '−70'],
          ['Large anions (A⁻)', '~155', '~0', 'N/A (trapped)'],
        ],
        caption: 'Ion concentrations and equilibrium potentials',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Nernst Equation (Qualitative)',
        text: 'The Nernst equation relates the equilibrium potential (E) to the concentration ratio: E ∝ log([ion outside]/[ion inside]). A large concentration ratio produces a large equilibrium potential. Understanding this helps explain why K⁺ (ratio ~1:28) has a large negative potential, while Na⁺ (ratio ~145:12) has a large positive potential.',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Cellular Energy Cost', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Maintaining the resting membrane potential consumes significant ATP (~20–40% of the neurone\'s energy budget). This reflects the continuous work of the Na⁺/K⁺ pump counteracting ion leaks. In neurons that fire action potentials rapidly, this energy cost increases further due to the need to restore ion gradients after each spike.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The resting potential of −70 mV is maintained by the Na⁺/K⁺-ATPase pump (3 Na⁺ out, 2 K⁺ in) and selective permeability to K⁺. Large intracellular anions and low intracellular Cl⁻ also contribute to negative charge. This potential represents a steady state, not equilibrium.',
        apply: 'If the Na⁺/K⁺ pump is blocked by ouabain, predict what happens to the resting membrane potential over time.',
        analyze: 'Why is the resting potential (−70 mV) less negative than the K⁺ equilibrium potential (−90 mV)? What does this tell us about Na⁺ permeability at rest?',
        evaluate: 'The brain uses roughly 20% of the body\'s ATP to maintain neuronal resting potentials. Discuss the evolutionary trade-off between rapid nervous signalling and energy consumption.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the resting membrane potential value (−70 mV)', checked: false },
          { text: 'Explain the Na⁺/K⁺-ATPase pump mechanism and 3:2 ratio', checked: false },
          { text: 'Describe K⁺ leak channels and selective permeability', checked: false },
          { text: 'Define electrochemical gradients and ion equilibrium potentials', checked: false },
          { text: 'Explain why the inside of the axon is negative', checked: false },
          { text: 'Discuss the energy cost of maintaining the resting potential', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'The resting membrane potential of −70 mV is maintained by the Na⁺/K⁺-ATPase pump (3 Na⁺ out : 2 K⁺ in) and selective permeability to K⁺ leak channels. Ion concentration gradients establish equilibrium potentials: K⁺ at −90 mV, Na⁺ at +60 mV. The interior is negative due to efflux of K⁺, influx of large trapped anions, and outflow of positive charge by the pump. Maintaining this potential consumes ~20–40% of neuronal ATP energy.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h1', prompt: 'What is the resting membrane potential and why is it important?' },
      { id: 'cue-2', blockId: 'h2', prompt: 'Explain the Na⁺/K⁺-ATPase pump mechanism. Why is the 3:2 ratio significant?' },
      { id: 'cue-3', blockId: 'h3', prompt: 'Why is the axon membrane selectively permeable to K⁺ at rest?' },
      { id: 'cue-4', blockId: 'h5', prompt: 'List factors that make the inside of the axon negative.' },
      { id: 'cue-5', blockId: 'h4', prompt: 'What is an electrochemical gradient?' },
    ],
    summaryText: 'Resting potential (−70 mV) is maintained by Na⁺/K⁺-ATPase (pumps 3 Na⁺ out, 2 K⁺ in using ATP) and selective K⁺ permeability via leak channels. K⁺ equilibrium potential is −90 mV; Na⁺ is +60 mV. Interior is negative due to K⁺ efflux, impermeant anions, and low Cl⁻. Maintains 20–40% of neuronal ATP budget.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Ouabain toxin', detail: 'Blocks Na⁺/K⁺-ATPase, disrupting resting potential', year: '1800s', source: 'Pharmacology', tags: ['pump inhibitor', 'resting potential', 'toxin'] },
    { id: 'ev-2', title: 'Hodgkin & Huxley', detail: 'Experimentally determined ion roles in resting potential using squid giant axon', year: '1939–1952', source: 'Nobel Prize-winning research', tags: ['resting potential', 'ion gradients'] },
  ],
};
