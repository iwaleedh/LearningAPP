export const note_biology_5_8_0 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand neurone structure and types: motor, sensory, and relay neurones; the roles of dendrites, axon, myelin sheath, Schwann cells, and nodes of Ranvier; myelinated vs unmyelinated fibres; saltatory conduction; PNS organization (somatic and autonomic); and the reflex arc pathway.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Neurone Structure and Types', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Neurones (nerve cells) are specialized cells that transmit electrical and chemical signals throughout the nervous system. There are three main types of neurone: motor neurones, sensory neurones, and relay neurones (interneurones). Each type is structurally adapted for its specific function.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Main Neurone Structures', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'All neurones share common structures: the cell body (soma) containing the nucleus and organelles, dendrites (short branched processes that receive signals), an axon (long projection transmitting signals), and axon terminals (branched endings releasing neurotransmitters).' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'Sensory Neurone', 'Relay Neurone', 'Motor Neurone'],
        rows: [
          ['Cell body location', 'In sensory ganglion', 'In CNS (spinal cord)', 'In CNS (spinal cord)'],
          ['Dendrite', 'Attached to receptor', 'Many, in CNS', 'Many, receive signals'],
          ['Axon', 'Single, long to CNS', 'Short, in CNS', 'Single, long to muscle'],
          ['Function', 'Detects stimuli', 'Connects neurones', 'Causes muscle contraction'],
        ],
        caption: 'Comparison of neurone types and their structural features',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Myelin Sheath and Schwann Cells', level: 3 },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'The myelin sheath is a fatty insulating layer surrounding the axon in myelinated fibres. It is formed by Schwann cells, which wrap around the axon multiple times, creating layers of lipid (myelin). The small gaps between Schwann cells along the axon are called nodes of Ranvier. Unmyelinated fibres lack this sheath, with the axon instead lying in grooves within Schwann cells.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Function of Myelin Sheath',
        text: 'The myelin sheath acts as an electrical insulator, preventing ion leakage across the axon membrane. This allows action potentials to be regenerated only at the nodes of Ranvier, dramatically increasing conduction speed.',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Myelinated vs Unmyelinated Fibres', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Myelinated axons are found in somatic motor neurones and large sensory neurones, conducting action potentials at speeds of 100–120 m s⁻¹. Unmyelinated axons conduct more slowly (0.5–2 m s⁻¹) as the action potential must be regenerated along the entire axon membrane. The conduction velocity is proportional to both axon diameter (larger = faster) and the degree of myelination (more myelin = faster).' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Saltatory Conduction', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Saltatory conduction (from Latin saltare, "to jump") is the method by which action potentials propagate along myelinated axons. The action potential "jumps" from one node of Ranvier to the next, rather than propagating continuously along the membrane. This is because the myelin sheath prevents ion flow across insulated regions, forcing depolarisation to occur only at the nodes.' },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Clinical Link: Multiple Sclerosis',
        text: 'In multiple sclerosis (MS), immune cells attack and destroy the myelin sheath. This results in slower or blocked conduction velocities, causing muscle weakness, vision loss, and neurological impairment. The loss of myelin prevents saltatory conduction.',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Peripheral Nervous System Organization', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'The peripheral nervous system (PNS) is divided into two functional divisions: the somatic nervous system (voluntary control, motor output to skeletal muscles) and the autonomic nervous system (involuntary, regulating internal organs, smooth muscle, and glands).' },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'The Reflex Arc', level: 3 },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'A reflex arc is the neural pathway underlying a rapid, involuntary response to a stimulus. The pathway is: stimulus → receptor → sensory neurone → relay neurone in spinal cord → motor neurone → effector (muscle/gland). The reflex arc can respond in ~50 ms because it does not require conscious input from the brain, allowing for rapid protective responses (e.g., withdrawing hand from heat).' },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'The key advantage of reflex arcs is speed: synapses in the spinal cord mean the response is initiated before sensory signals reach the brain. This is essential for avoiding injury.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'The myelin sheath increases conduction velocity by insulating the axon, allowing saltatory conduction. Multiple sclerosis destroys myelin, reducing or blocking nerve impulses and causing progressive neurological symptoms. Understanding this link helps explain disease pathology.',
        apply: 'An axon has a diameter of 10 μm and is myelinated (nodes of Ranvier every 1 mm). A second axon is 5 μm diameter and unmyelinated. Which will conduct faster and why?',
        analyze: 'Compare the structure and function of dendrites in a relay neurone versus a sensory neurone. How do their different numbers and arrangements reflect their different roles?',
        evaluate: 'Given that myelinated conduction is faster than unmyelinated, why do you think the autonomic nervous system retains both myelinated and unmyelinated fibres? Consider functional advantages.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Distinguish between sensory, relay, and motor neurones', checked: false },
          { text: 'Explain the role of the myelin sheath and Schwann cells', checked: false },
          { text: 'Describe myelinated vs unmyelinated fibres and conduction speeds', checked: false },
          { text: 'Define saltatory conduction and explain its mechanism', checked: false },
          { text: 'Outline the PNS divisions (somatic and autonomic)', checked: false },
          { text: 'Describe the reflex arc pathway and its advantages', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Neurones are specialized cells with distinct structures adapted to their function. Sensory neurones detect stimuli, relay neurones process signals in the CNS, and motor neurones activate effectors. Myelinated axons conduct faster via saltatory conduction at nodes of Ranvier. The reflex arc enables rapid involuntary responses without conscious control, protecting the body from injury. Multiple sclerosis demonstrates the critical importance of myelin in nervous system function.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h1', prompt: 'What are the three main types of neurone and their functions?' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Explain the structure of the myelin sheath and the role of Schwann cells.' },
      { id: 'cue-3', blockId: 'h5', prompt: 'What is saltatory conduction and why does it occur in myelinated axons?' },
      { id: 'cue-4', blockId: 'h7', prompt: 'Describe the pathway of a reflex arc from stimulus to response.' },
      { id: 'cue-5', blockId: 'h4', prompt: 'How do myelinated and unmyelinated fibres differ in structure and conduction velocity?' },
    ],
    summaryText: 'Neurones consist of sensory (detect stimuli), relay (process), and motor (activate effectors) types. Myelinated axons are wrapped by Schwann cells forming myelin sheath with nodes of Ranvier, enabling saltatory conduction (100–120 m s⁻¹). Unmyelinated axons conduct via continuous propagation (0.5–2 m s⁻¹). Reflex arcs bypass the brain for rapid involuntary responses.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Multiple sclerosis', detail: 'Immune-mediated demyelination leading to conduction impairment', year: 'Clinical observation', source: 'Medical literature', tags: ['disease', 'myelin', 'conduction'] },
  ],
};
