export const note_olevel_biology_14_14_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/14 Coordination And Response/14-1-2-neurones-synapses.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the structure and function of sensory, relay, and motor neurones; explain how a synapse transmits an impulse using neurotransmitters; state the role of the myelin sheath.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Neurones', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'A <strong>neurone</strong> (nerve cell) is a specialised cell that carries electrical impulses. There are three functional types, each with a distinct structure and location in the nervous system.' }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of the three types of neurone',
        headers: ['Feature', 'Sensory Neurone', 'Relay Neurone', 'Motor Neurone'],
        rows: [
          ['Function', 'Carries impulses from receptor to CNS', 'Connects sensory and motor neurones within CNS', 'Carries impulses from CNS to effector'],
          ['Location', 'PNS — receptor to dorsal root of spinal cord', 'Entirely within CNS (brain or spinal cord)', 'CNS to effectors (muscles, glands)'],
          ['Cell body position', 'On the side (in dorsal root ganglion)', 'Within grey matter of CNS', 'At one end (near CNS)'],
          ['Axon length', 'Long', 'Short', 'Very long (can be over 1 m)'],
          ['Dendrites', 'One long dendron (from receptor)', 'Many short dendrites', 'Many short dendrites at cell body']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Structure of a motor neurone (with myelin sheath) and synapse',
        svg: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Dendrites -->
  <line x1="40" y1="100" x2="110" y2="135" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="30" y1="130" x2="110" y2="140" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="40" y1="160" x2="110" y2="145" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="5" y="130" fill="#1d4ed8" font-size="10">Dendrites</text>

  <!-- Cell body -->
  <circle cx="135" cy="140" r="28" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="135" cy="140" r="10" fill="#1d4ed8" opacity="0.5"/>
  <text x="135" y="183" text-anchor="middle" fill="#1e3a8a" font-size="10">Cell body</text>
  <text x="135" y="193" text-anchor="middle" fill="#1e3a8a" font-size="10">(nucleus)</text>

  <!-- Axon with myelin segments -->
  <line x1="163" y1="140" x2="480" y2="140" stroke="#7c3aed" stroke-width="3"/>
  <!-- Myelin sheath segments -->
  <rect x="170" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <rect x="218" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <rect x="266" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <rect x="314" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <rect x="362" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <rect x="410" y="132" width="40" height="16" rx="8" fill="#c4b5fd" stroke="#7c3aed" stroke-width="1.5" opacity="0.85"/>
  <!-- Node of Ranvier labels -->
  <text x="212" y="167" fill="#7c3aed" font-size="9">Node of</text>
  <text x="210" y="177" fill="#7c3aed" font-size="9">Ranvier</text>
  <line x1="216" y1="162" x2="216" y2="148" stroke="#7c3aed" stroke-width="1"/>
  <!-- Myelin label -->
  <text x="280" y="118" fill="#7c3aed" font-size="10">Myelin sheath</text>
  <line x1="295" y1="120" x2="295" y2="132" stroke="#7c3aed" stroke-width="1"/>

  <!-- Axon label -->
  <text x="320" y="175" fill="#7c3aed" font-size="10">Axon</text>

  <!-- Synaptic knob -->
  <ellipse cx="510" cy="140" rx="30" ry="22" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <!-- Vesicles -->
  <circle cx="500" cy="138" r="5" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <circle cx="515" cy="132" r="5" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <circle cx="507" cy="148" r="5" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <circle cx="521" cy="144" r="5" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <text x="510" y="108" text-anchor="middle" fill="#92400e" font-size="10">Synaptic</text>
  <text x="510" y="119" text-anchor="middle" fill="#92400e" font-size="10">knob + vesicles</text>

  <!-- Synapse gap -->
  <rect x="540" y="118" width="8" height="44" fill="#f0f9ff" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 2"/>
  <text x="548" y="110" fill="#64748b" font-size="9">Synaptic</text>
  <text x="550" y="119" fill="#64748b" font-size="9">gap</text>

  <!-- Post-synaptic membrane -->
  <rect x="548" y="118" width="8" height="44" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <!-- Receptors on post-synaptic -->
  <rect x="548" y="124" width="8" height="6" rx="2" fill="#16a34a"/>
  <rect x="548" y="138" width="8" height="6" rx="2" fill="#16a34a"/>
  <rect x="548" y="152" width="8" height="6" rx="2" fill="#16a34a"/>
  <text x="560" y="165" fill="#16a34a" font-size="9">Receptors</text>

  <!-- Neurotransmitter molecules crossing gap -->
  <circle cx="535" cy="133" r="3" fill="#dc2626"/>
  <circle cx="536" cy="145" r="3" fill="#dc2626"/>
  <circle cx="534" cy="155" r="3" fill="#dc2626"/>
  <text x="465" y="175" fill="#dc2626" font-size="9">Neurotransmitter</text>
  <line x1="500" y1="172" x2="530" y2="148" stroke="#dc2626" stroke-width="0.8"/>

  <!-- Next neurone -->
  <line x1="556" y1="140" x2="610" y2="140" stroke="#16a34a" stroke-width="3"/>
  <text x="570" y="130" fill="#16a34a" font-size="10">Next</text>
  <text x="568" y="120" fill="#16a34a" font-size="10">neurone</text>

  <!-- Impulse direction -->
  <text x="180" y="200" fill="#555" font-size="10">Impulse direction →</text>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How a Synapse Works', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'A <strong>synapse</strong> is a junction between two neurones. There is a small gap — the <strong>synaptic cleft</strong> — between the pre-synaptic and post-synaptic membranes. Electrical impulses cannot cross this gap directly; instead, <strong>chemical neurotransmitters</strong> carry the signal across.' }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'An electrical impulse arrives at the <strong>synaptic knob</strong> (pre-synaptic terminal)' },
          { text: '<strong>Synaptic vesicles</strong> (containing neurotransmitter molecules) move to and fuse with the pre-synaptic membrane' },
          { text: '<strong>Neurotransmitter</strong> (e.g. acetylcholine) is released by <strong>exocytosis</strong> into the synaptic cleft' },
          { text: 'Neurotransmitter molecules <strong>diffuse</strong> across the synaptic cleft' },
          { text: 'Neurotransmitter <strong>binds to receptor proteins</strong> on the post-synaptic membrane, generating a new electrical impulse in the next neurone' },
          { text: 'Neurotransmitter is rapidly broken down by enzymes (e.g. acetylcholinesterase) to prevent continuous stimulation; products are recycled' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Myelin Sheath', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Myelin Sheath — Function',
        text: 'The <strong>myelin sheath</strong> is a fatty insulating layer wrapped around the axon of many neurones (produced by Schwann cells). It:<br/>• <strong>Speeds up</strong> transmission of nerve impulses — impulses \'jump\' from node to node (saltatory conduction)<br/>• <strong>Insulates</strong> the axon, preventing impulse loss to surrounding cells<br/>• Speeds are up to 100 m/s in myelinated neurones vs ~1 m/s in unmyelinated neurones'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Synapses Only Transmit in ONE Direction',
        text: 'Synapses ensure <strong>one-way transmission</strong> of nerve impulses. Neurotransmitter is only released from the pre-synaptic membrane and receptors are only on the post-synaptic membrane. This means signals can only travel in one direction through the nervous system.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Three neurone types: sensory (receptor to CNS), relay (within CNS), motor (CNS to effector). Synapses transmit impulses chemically: vesicles release neurotransmitter → diffuses across gap → binds receptors on next neurone. Synapses ensure one-way transmission. Myelin sheath speeds up conduction by saltatory transmission.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Sensory/relay/motor neurones. Synapses: neurotransmitter released, diffuses gap, binds receptors. Myelin speeds conduction.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What is the function of a sensory neurone?', answer: 'It carries nerve impulses from a receptor to the CNS (central nervous system).' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Describe how an impulse is transmitted across a synapse.', answer: 'Impulse arrives at synaptic knob → vesicles release neurotransmitter → diffuses across synaptic cleft → binds to receptors on post-synaptic membrane → new impulse generated in next neurone.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'Why do synapses only transmit impulses in one direction?', answer: 'Neurotransmitter is released only from the pre-synaptic membrane and receptors are only present on the post-synaptic membrane, so transmission can only occur in one direction.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'What is the myelin sheath and what does it do?', answer: 'The myelin sheath is a fatty insulating layer around the axon. It speeds up nerve impulse transmission (saltatory conduction) and insulates the axon.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'Where is the relay neurone located and what does it do?', answer: 'It is located entirely within the CNS (brain or spinal cord). It connects sensory neurones to motor neurones.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_14_14_1;
