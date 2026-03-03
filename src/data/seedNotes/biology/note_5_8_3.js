export const note_biology_5_8_3 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand action potential propagation along axons: local circuits and depolarisation of adjacent membrane; continuous conduction in unmyelinated fibres (slower); saltatory conduction in myelinated fibres (node-to-node, faster); conduction velocity is proportional to axon diameter and degree of myelination.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Propagation of Action Potentials', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Once an action potential is generated at one point on the axon membrane, it does not remain localised. Instead, it propagates (spreads) along the entire length of the axon. This propagation is essential for long-distance neural communication. Two modes of propagation exist: continuous conduction in unmyelinated axons and saltatory conduction in myelinated axons.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Local Circuits and Membrane Depolarisation', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'When an action potential depolarises one patch of membrane (the "active region"), the interior of the axon at that region becomes positively charged. This positive charge flows passively along the interior of the axon to adjacent, still-resting regions. This internal current, called a local circuit, depolarises the adjacent membrane.' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'If the adjacent membrane depolarises sufficiently to reach threshold (−55 mV), voltage-gated Na⁺ channels in that region open, triggering a new action potential. This process repeats sequentially along the axon, with each region firing an action potential and depolarising the next region in line.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Propagation Moves in One Direction',
        text: 'Action potentials typically propagate away from the site of initiation (soma → axon terminal). This is because the region that just fired is in its absolute refractory period (Na⁺ channels inactivated), so it cannot fire again immediately. Thus, depolarisation spreads forward, not backward.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Continuous Conduction (Unmyelinated Axons)', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'In unmyelinated axons, the action potential is regenerated continuously along the entire axon membrane. At each point, voltage-gated Na⁺ channels open, depolarising that membrane and creating local circuits that depolarise the next region. This requires action potentials to be triggered in rapid succession along the entire axon length.' },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Continuous conduction is slow, typically 0.5–2 m s⁻¹, because the action potential must be generated at every point along the membrane. The distance between regeneration sites is very small (microscopic), requiring many sequential firings to cover the axon length.' },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Saltatory Conduction (Myelinated Axons)', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'In myelinated axons, the myelin sheath insulates the axon, preventing ion leakage across the membrane. Action potentials cannot be regenerated in the myelinated regions because voltage-gated Na⁺ and K⁺ channels are concentrated only at the nodes of Ranvier (the unmyelinated gaps between Schwann cells).' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'Saltatory conduction means the action potential "jumps" from node to node. At each node, the action potential is regenerated; the local circuits then depolarise the next node directly, skipping the insulated internodal regions. This reduces the number of membrane regions that need regeneration, dramatically increasing conduction speed to 100–120 m s⁻¹.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'Conduction velocity (saltatory) ≈ 100–120 m s<sup>−1</sup><br />Conduction velocity (continuous) ≈ 0.5–2 m s<sup>−1</sup><br />Speed ratio: ~50–200 fold increase',
        caption: 'Conduction velocities in myelinated vs unmyelinated axons',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Energy Efficiency',
        text: 'Saltatory conduction is also more energy-efficient than continuous conduction. Fewer action potentials are regenerated (only at nodes), so fewer ions need pumping by the Na⁺/K⁺-ATPase to restore gradients.',
      },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Conduction Velocity Factors', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Conduction velocity is proportional to two factors: (1) axon diameter—larger diameter axons have lower internal resistance, allowing faster local circuit current flow; (2) degree of myelination—more extensive myelin insulation increases internodal distances and reduces ion leakage, allowing faster saltatory conduction.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Unmyelinated Axons', 'Myelinated Axons'],
        rows: [
          ['Conduction mode', 'Continuous along entire membrane', 'Saltatory (node to node)'],
          ['Conduction velocity', '0.5–2 m s⁻¹', '100–120 m s⁻¹'],
          ['Na⁺/K⁺ channel location', 'Distributed along membrane', 'Concentrated at nodes of Ranvier'],
          ['Ion regeneration sites', 'Every ~1 μm', 'Every 1–2 mm (at nodes)'],
          ['Example fibre', 'Postganglionic autonomic (slow)', 'Somatic motor neurones (fast)'],
        ],
        caption: 'Comparison of continuous and saltatory conduction',
      },
    },
    {
      id: 'callout3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Multiple Sclerosis and Conduction Velocity',
        text: 'In MS, demyelination destroys the myelin sheath, forcing previously myelinated axons to conduct via slower continuous conduction. This can reduce conduction velocity by 50% or more, explaining symptoms like muscle weakness and sensory loss.',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Physiological Significance', level: 3 },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'The enormous difference in conduction velocity between myelinated (fast) and unmyelinated (slow) axons reflects their different physiological roles. Somatic motor neurones (controlling voluntary muscle) are myelinated, allowing rapid reflexive responses. Autonomic neurones and sensory fibres conveying slowly-changing information may be unmyelinated, conserving energy when speed is not critical.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Local circuits depolarise adjacent membrane regions, triggering sequential action potentials. Unmyelinated axons conduct continuously (slow, 0.5–2 m s⁻¹). Myelinated axons conduct via saltatory conduction (fast, 100–120 m s⁻¹). Conduction velocity ∝ axon diameter and myelination degree.',
        apply: 'Calculate the time for an action potential to travel 1 m along: (a) an unmyelinated axon (1 m s⁻¹), (b) a myelinated axon (100 m s⁻¹). What is the time difference?',
        analyze: 'Why must voltage-gated Na⁺ and K⁺ channels be concentrated at nodes of Ranvier in myelinated axons?',
        evaluate: 'Discuss why it would be metabolically unfeasible for all neurones to be myelinated. What trade-offs exist between speed, energy cost, and functional need?',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Explain local circuits and how they depolarise adjacent membrane', checked: false },
          { text: 'Describe continuous conduction and its speed range', checked: false },
          { text: 'Describe saltatory conduction and node-to-node propagation', checked: false },
          { text: 'Compare conduction velocities: unmyelinated vs myelinated', checked: false },
          { text: 'Identify factors affecting conduction velocity', checked: false },
          { text: 'Explain how MS affects conduction velocity', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Action potentials propagate via local circuits depolarising adjacent membrane. Unmyelinated axons conduct continuously along the entire membrane (0.5–2 m s⁻¹). Myelinated axons conduct saltatorily, jumping between nodes of Ranvier (100–120 m s⁻¹). Conduction velocity increases with axon diameter and degree of myelination. MS-induced demyelination reduces conduction velocity, explaining neurological symptoms.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h1', prompt: 'What is the general process by which action potentials propagate along an axon?' },
      { id: 'cue-2', blockId: 'h2', prompt: 'Explain local circuits and their role in depolarising adjacent membrane.' },
      { id: 'cue-3', blockId: 'h3', prompt: 'Describe continuous conduction and give its speed range.' },
      { id: 'cue-4', blockId: 'h4', prompt: 'What is saltatory conduction and why is it faster?' },
      { id: 'cue-5', blockId: 'h5', prompt: 'What two factors determine conduction velocity?' },
    ],
    summaryText: 'Local circuits: depolarised region creates positive charge that flows to adjacent membrane, triggering next action potential. Unmyelinated: continuous regeneration (0.5–2 m s⁻¹). Myelinated: saltatory conduction jumps between nodes (100–120 m s⁻¹). Velocity ∝ axon diameter + myelination degree.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Saltatory conduction', detail: 'Discovered by electrophysiological recordings at nodes of Ranvier', year: '1960s', source: 'Neurophysiology research', tags: ['myelin', 'nodes of Ranvier', 'conduction'] },
  ],
};
