/**
 * WBI15 — Topic 7.9: Sliding Filament Mechanism
 * Neuromuscular junction, Ca²⁺, troponin, power stroke, rigor mortis
 */

export const note_biology_5_7_9 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand the sliding filament mechanism at the molecular level, including acetylcholine signalling at the neuromuscular junction, calcium-induced tropomyosin movement, cross-bridge cycling, and ATP\'s role.',
      },
    },
    {
      id: 'h-nmj',
      type: 'heading',
      data: { text: 'The Neuromuscular Junction (NMJ)', level: 2 },
    },
    {
      id: 'p-nmj-overview',
      type: 'paragraph',
      data: {
        text: 'The neuromuscular junction is the synapse between a motor neuron and a skeletal muscle fibre. When an action potential reaches the motor neuron terminal, voltage-gated Ca²⁺ channels open, Ca²⁺ enters, and acetylcholine (ACh) vesicles fuse with the presynaptic membrane, releasing ACh into the synaptic cleft.',
      },
    },
    {
      id: 'p-ach-binding',
      type: 'paragraph',
      data: {
        text: 'ACh diffuses across the synaptic cleft and binds to nicotinic acetylcholine receptors on the muscle fibre sarcolemma. These are ligand-gated ion channels; ACh binding opens them, allowing Na⁺ to enter. This depolarisation of the sarcolemma generates an end-plate potential (EPP). If the EPP reaches threshold, an action potential is triggered and propagates along the sarcolemma and down the T-tubules.',
      },
    },
    {
      id: 'h-calcium',
      type: 'heading',
      data: { text: 'Calcium Release and Troponin-Tropomyosin Interaction', level: 3 },
    },
    {
      id: 'p-calcium-sr',
      type: 'paragraph',
      data: {
        text: 'The action potential travelling down the T-tubule activates ryanodine receptors (mechanical coupling) in the sarcoplasmic reticulum membrane, triggering Ca²⁺ release into the sarcoplasm. Calcium concentration rises from ~100 nM (rest) to ~10 μM (active).',
      },
    },
    {
      id: 'p-troponin',
      type: 'paragraph',
      data: {
        text: 'Ca²⁺ binds to troponin C (the regulatory subunit of the troponin complex on thin filaments). Troponin has three subunits: C (Ca²⁺-binding), I (inhibitory), and T (tropomyosin-binding). When Ca²⁺ binds to troponin C, it causes a conformational change in troponin, which pulls tropomyosin aside and exposes myosin-binding sites on actin.',
      },
    },
    {
      id: 'callout-troponin',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Troponin: The Ca²⁺-Sensitive Switch',
        text: 'Troponin C acts as a "switch" for muscle contraction. In the relaxed state (low Ca²⁺), troponin does not bind Ca²⁺, tropomyosin blocks actin, and no contraction occurs. When Ca²⁺ rises, troponin C binds Ca²⁺, tropomyosin moves, actin sites are exposed, and cross-bridge cycling begins.',
      },
    },
    {
      id: 'h-crossbridge',
      type: 'heading',
      data: { text: 'Cross-Bridge Cycling: The Power Stroke', level: 3 },
    },
    {
      id: 'list-cycle',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Rigor state: Myosin head is bonded to actin (rigor bond), no nucleotide bound. This is the "stuck" state after contraction.',
          'ATP binding: ATP binds to myosin head, breaking the rigor bond. Myosin detaches from actin.',
          'ATP hydrolysis: Myosin ATPase hydrolyses ATP → ADP + Pi, re-energising the myosin head. The head returns to its cocked position.',
          'Reattachment: The re-energised myosin head binds to the exposed myosin-binding site on actin (weak binding).',
          'Power stroke: Pi is released, causing a conformational change in myosin that pulls the actin filament towards the M line (force generation). ADP is released during or after the power stroke.',
          'Return to rigor: Myosin is now in a rigor bond again, ready for another ATP to trigger the cycle.',
        ],
      },
    },
    {
      id: 'p-ratchet',
      type: 'paragraph',
      data: {
        text: 'This cycle repeats dozens of times per second, creating a ratchet-like mechanism: each ATP hydrolysis provides energy for one power stroke (~5 nm movement of actin). The sarcomere shortens progressively as many myosin cross-bridges fire in coordination.',
      },
    },
    {
      id: 'h-rigor',
      type: 'heading',
      data: { text: 'Rigor Mortis: The Ultimate Power Stroke', level: 3 },
    },
    {
      id: 'p-rigor',
      type: 'paragraph',
      data: {
        text: 'Rigor mortis (Latin: "stiffness of death") is the post-mortem rigidity that occurs after death. When a person dies, aerobic respiration stops immediately, so ATP production ceases. Existing ATP is rapidly depleted. Without ATP, myosin heads cannot detach from actin (ATP is required for detachment; see step 2 above). All muscles become locked in a maximal contraction (rigor state). The body becomes rigid for 12–48 hours until muscle proteins begin to degrade and rigor resolves.',
      },
    },
    {
      id: 'callout-rigor',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Why Rigor Mortis Requires ATP for Relaxation',
        text: 'ATP binds to myosin to break the rigor bond (step 2). Without ATP, myosin cannot release from actin, and contraction is irreversible. This demonstrates that muscle relaxation is an active process requiring energy, not a passive process. Rigor mortis proves that the living state requires continuous ATP production.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Sliding filament mechanism: (1) ACh released at NMJ → action potential on sarcolemma; (2) AP travels down T-tubule → Ca²⁺ released from SR; (3) Ca²⁺ binds troponin → tropomyosin moves → actin sites exposed; (4) cross-bridge cycling (ATP-dependent) pulls actin towards M line; (5) relaxation when Ca²⁺ removed → troponin releases Ca²⁺ → tropomyosin blocks actin.',
        apply: 'A single myosin head can generate a power stroke of ~5 nm. A sarcomere is ~2.5 μm. How many myosin heads must fire (in sequence across the population) to shorten a sarcomere by 50%? (Answer: ~250 heads)',
        analyze: 'Compare the roles of ATP in muscle contraction (energising the power stroke) versus relaxation (breaking rigor bonds). Why is ATP essential for both processes?',
        evaluate: 'Rigor mortis proves that muscle contraction requires ATP. What does this tell us about the evolutionary priorities of muscle tissue? Why not make contraction irreversible to save ATP?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe ACh release at the neuromuscular junction and its effect', checked: false },
          { text: 'Explain how Ca²⁺ causes tropomyosin to move and expose actin sites', checked: false },
          { text: 'Describe the six steps of cross-bridge cycling', checked: false },
          { text: 'Explain the roles of ATP in detachment and re-energisation', checked: false },
          { text: 'Define rigor mortis and explain why it occurs', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Sliding filament mechanism: ACh at NMJ → depolarisation → action potential → Ca²⁺ release from SR. Ca²⁺ binds troponin → tropomyosin moves → actin sites exposed. Cross-bridge cycling: myosin head hydrolyses ATP, re-energises, binds actin, power stroke (~5 nm), repeats. ATP required for both force generation and relaxation (detachment). Rigor mortis: after death, ATP depleted → myosin cannot detach → permanent contraction.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-nmj-overview',
        prompt: 'Describe the events at the neuromuscular junction from motor neuron AP to muscle fibre depolarisation.',
      },
      {
        id: 'cue-2',
        blockId: 'p-troponin',
        prompt: 'Explain how Ca²⁺ causes tropomyosin to move and expose myosin-binding sites on actin.',
      },
      {
        id: 'cue-3',
        blockId: 'list-cycle',
        prompt: 'Describe the six steps of cross-bridge cycling in order.',
      },
      {
        id: 'cue-4',
        blockId: 'p-ratchet',
        prompt: 'What is the power stroke and how much does it move the actin filament?',
      },
      {
        id: 'cue-5',
        blockId: 'p-rigor',
        prompt: 'What is rigor mortis and why does it occur? Why is ATP essential for relaxation?',
      },
    ],
    summaryText:
      'NMJ: ACh released → acetylcholine receptors open → Na⁺ enters → depolarisation → AP down T-tubule → Ca²⁺ released from SR. Ca²⁺ binds troponin C → troponin pulls tropomyosin aside → actin sites exposed. Cross-bridge cycling: (1) ATP binds, myosin detaches (rigor broken); (2) ATP hydrolysis re-energises; (3) reattachment; (4) power stroke (~5 nm); (5) repeat. Rigor mortis: ATP depleted → myosin stuck → irreversible contraction.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Structural basis of troponin regulation',
      detail: 'X-ray crystallography revealed conformational changes in troponin upon Ca²⁺ binding',
      year: '1990s',
      source: 'Structural biology',
      tags: ['structure'],
    },
  ],
};
