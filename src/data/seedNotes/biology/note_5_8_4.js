export const note_biology_5_8_4 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand synaptic transmission: arrival of AP triggers Ca²⁺ influx; vesicle fusion and exocytosis; neurotransmitter release; postsynaptic receptor binding (ionotropic vs metabotropic); IPSP and EPSP; temporal and spatial summation; reuptake/enzymatic degradation; drug effects (SSRIs, nicotine, beta-blockers).' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Synaptic Transmission', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'A synapse is the junction between a presynaptic neurone (transmitting) and postsynaptic cell (receiving). The synaptic cleft is the narrow space (~20 nm) between the two cells. At a chemical synapse, the arrival of an action potential in the presynaptic terminal triggers a series of molecular events: calcium influx, vesicle fusion, and neurotransmitter release. These events convert electrical signals to chemical signals.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Mechanism of Synaptic Transmission', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Step 1: An action potential arrives at the presynaptic axon terminal. Step 2: Depolarisation opens voltage-gated Ca²⁺ channels in the terminal membrane. Step 3: Ca²⁺ ions rush into the terminal (down their concentration gradient). Step 4: Increased intracellular Ca²⁺ triggers synaptic vesicles (containing neurotransmitter) to fuse with the presynaptic membrane via the SNARE protein machinery.' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'Step 5: Exocytosis releases neurotransmitter molecules into the synaptic cleft. Step 6: Neurotransmitter diffuses across the cleft and binds to receptors on the postsynaptic membrane. Step 7: Receptor activation either depolarises (excitatory) or hyperpolarises (inhibitory) the postsynaptic cell.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'Action potential → Ca<sup>2+</sup> influx → vesicle fusion → exocytosis → NT release → receptor binding → postsynaptic response',
        caption: 'Sequence of synaptic transmission events',
      },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Role of Calcium',
        text: 'Calcium is the crucial link between electrical and chemical signalling. Without Ca²⁺ influx, vesicle fusion cannot occur, and no neurotransmitter is released. This is why calcium is essential for synaptic plasticity and learning.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Neurotransmitters', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Neurotransmitters are chemical messengers released by the presynaptic neurone. Different neurotransmitters produce different effects: Acetylcholine (ACh) at neuromuscular junctions is excitatory, causing muscle contraction. Noradrenaline is released by sympathetic neurones and is excitatory in most tissues. GABA (γ-aminobutyric acid) and glycine are inhibitory neurotransmitters in the CNS. Dopamine and serotonin regulate mood, movement, and reward.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Neurotransmitter', 'Location', 'Effect', 'Receptor Type'],
        rows: [
          ['Acetylcholine (ACh)', 'Neuromuscular junction, CNS', 'Excitatory', 'Nicotinic (ionotropic)'],
          ['Noradrenaline (NE)', 'Sympathetic terminals', 'Excitatory', 'Adrenergic (metabotropic)'],
          ['GABA', 'CNS inhibitory synapses', 'Inhibitory', 'GABA_A (ionotropic)'],
          ['Dopamine', 'Reward pathways, motor control', 'Variable', 'D1–D5 (metabotropic)'],
          ['Serotonin (5-HT)', 'Mood, sleep, appetite', 'Variable', 'Multiple (metabotropic)'],
        ],
        caption: 'Major neurotransmitters and their properties',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Postsynaptic Receptors: Ionotropic vs Metabotropic', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Ionotropic receptors are ligand-gated ion channels. When neurotransmitter binds, the channel opens directly, allowing ions to flow. This produces fast synaptic responses (milliseconds). Example: nicotinic acetylcholine receptors are ion channels for Na⁺ and K⁺.' },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'Metabotropic receptors are G-protein coupled receptors. Neurotransmitter binding activates intracellular signalling cascades (second messengers like cAMP). This produces slower, longer-lasting responses (seconds to minutes). Example: muscarinic acetylcholine receptors activate G proteins.' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Excitatory and Inhibitory Postsynaptic Potentials (EPSP and IPSP)', level: 3 },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'An excitatory postsynaptic potential (EPSP) is a small depolarisation of the postsynaptic membrane (~0.5–1 mV), making the postsynaptic cell more likely to fire an action potential. EPSPs result from opening of Na⁺ or Ca²⁺ channels, allowing inward positive current.' },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'An inhibitory postsynaptic potential (IPSP) is a small hyperpolarisation (~0.5–1 mV), making the postsynaptic cell LESS likely to fire. IPSPs result from opening of K⁺ or Cl⁻ channels, allowing outward positive current or inward negative current.' },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Summation: Temporal and Spatial', level: 3 },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'A single EPSP (~0.5 mV) is too small to reach threshold (−55 mV). However, multiple EPSPs can summate (add together) to produce a larger depolarisation. Temporal summation occurs when repeated stimuli from the SAME presynaptic neurone arrive within a short time window (~15–20 ms), with EPSPs overlapping and adding together.' },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'Spatial summation occurs when EPSPs from DIFFERENT presynaptic neurones arrive simultaneously at different regions of the postsynaptic soma. Their effects add together spatially, producing a larger net depolarisation. A single postsynaptic neurone may receive input from hundreds of presynaptic neurones.' },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Summation Example',
        text: 'Postsynaptic neurone receives EPSP of 0.5 mV every 5 ms from a single presynaptic input (temporal summation). After 4 stimuli (~20 ms), the cumulative depolarisation is 2 mV. Meanwhile, 50 other presynaptic neurones each provide 0.5 mV EPSPs simultaneously (spatial summation). Total: 2 + 25 = 27 mV, far exceeding threshold of −55 mV. Action potential fires.',
      },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'Neurotransmitter Removal and Inactivation', level: 3 },
    },
    {
      id: 'p11',
      type: 'paragraph',
      data: { text: 'After the postsynaptic response, neurotransmitter must be rapidly removed from the synaptic cleft to terminate the signal. Two main mechanisms: (1) Reuptake: neurotransmitter is actively transported back into the presynaptic terminal or taken up by glial cells (e.g., serotonin and dopamine are recycled). (2) Enzymatic degradation: enzymes in the cleft degrade neurotransmitter (e.g., acetylcholinesterase degrades ACh into acetyl and choline).' },
    },
    {
      id: 'h8',
      type: 'heading',
      data: { text: 'Drugs Acting on Synapses', level: 3 },
    },
    {
      id: 'p12',
      type: 'paragraph',
      data: { text: 'SSRIs (selective serotonin reuptake inhibitors, e.g., fluoxetine) block serotonin reuptake, increasing serotonin duration in the synaptic cleft and enhancing mood regulation. Nicotine mimics acetylcholine, binding to nicotinic receptors and producing excitation. Beta-blockers (e.g., propranolol) block adrenergic receptors, reducing the effect of noradrenaline and lowering heart rate and blood pressure.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Action potential → Ca²⁺ influx → vesicle fusion → NT release → receptor binding → EPSP or IPSP. Ionotropic receptors open ion channels directly (fast); metabotropic receptors activate second messengers (slow).',
        apply: 'A postsynaptic neurone receives 3 EPSPs (0.8 mV each) at 5 ms intervals from the same presynaptic input. Calculate total depolarisation via temporal summation.',
        analyze: 'Why is it advantageous for the postsynaptic neurone to sum inputs from many presynaptic sources (spatial summation) rather than responding to each individually?',
        evaluate: 'SSRIs increase serotonin duration in synapses. Discuss potential side effects if serotonin accumulates excessively (serotonin syndrome). Why is this a concern?',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the 7-step mechanism of synaptic transmission', checked: false },
          { text: 'List major neurotransmitters and their locations/effects', checked: false },
          { text: 'Distinguish ionotropic from metabotropic receptors', checked: false },
          { text: 'Define EPSP and IPSP', checked: false },
          { text: 'Explain temporal and spatial summation', checked: false },
          { text: 'Describe neurotransmitter removal mechanisms', checked: false },
          { text: 'Explain how SSRIs, nicotine, and beta-blockers affect synapses', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Synaptic transmission: AP → Ca²⁺ influx → exocytosis → neurotransmitter release → receptor binding. Ionotropic receptors open ion channels (fast); metabotropic receptors activate second messengers (slow). EPSPs depolarise; IPSPs hyperpolarise. Summation (temporal and spatial) allows postsynaptic integration of multiple inputs. Neurotransmitter removal via reuptake or enzymatic degradation terminates signalling. Drugs (SSRIs, nicotine, beta-blockers) modulate synaptic transmission.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h1', prompt: 'What is a synapse and what occurs at a chemical synapse?' },
      { id: 'cue-2', blockId: 'h2', prompt: 'Describe the 7 steps of synaptic transmission.' },
      { id: 'cue-3', blockId: 'h4', prompt: 'Compare ionotropic and metabotropic receptors.' },
      { id: 'cue-4', blockId: 'h6', prompt: 'Explain temporal and spatial summation.' },
      { id: 'cue-5', blockId: 'h8', prompt: 'How do SSRIs, nicotine, and beta-blockers affect synaptic transmission?' },
    ],
    summaryText: 'Synapse: AP → Ca²⁺ → vesicle fusion → exocytosis → NT release → postsynaptic receptor. Ionotropic: channels open directly (fast); metabotropic: G proteins activate cascade (slow). EPSP (depolarise); IPSP (hyperpolarise). Temporal summation: repeated stimuli from same presynaptic neurone. Spatial summation: simultaneous input from many neurones. Removal: reuptake or enzymatic degradation.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'SNARE proteins', detail: 'Mediate vesicle fusion; mutations impair neurotransmission', year: '1990s', source: 'Molecular neurobiology', tags: ['exocytosis', 'synaptic transmission'] },
    { id: 'ev-2', title: 'Calcium imaging', detail: 'Revealed Ca²⁺ dynamics during synaptic transmission', year: '2000s', source: 'Neurophysiology', tags: ['calcium', 'synaptic plasticity'] },
  ],
};
