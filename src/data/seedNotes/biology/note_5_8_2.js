export const note_biology_5_8_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand action potentials: threshold stimulus (−55 mV); depolarisation phase (voltage-gated Na⁺ channels open, Na⁺ rushes in to +40 mV); repolarisation phase (Na⁺ channels close, K⁺ channels open, K⁺ rushes out); hyperpolarisation/undershoot; absolute and relative refractory periods; the all-or-nothing law.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Action Potential Overview', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'An action potential is a rapid, temporary change in the electrical membrane potential of an excitable cell (neurone, muscle cell). It is the mechanism by which nerve impulses are transmitted over long distances. An action potential occurs if the membrane potential depolarises from −70 mV to a threshold value of approximately −55 mV. Once threshold is reached, voltage-gated ion channels open rapidly, initiating a stereotyped sequence of depolarisation, repolarisation, and hyperpolarisation.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Threshold Stimulus', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Threshold is the critical membrane potential (approximately −55 mV) at which voltage-gated Na⁺ channels transition from closed to open states. A subthreshold stimulus (e.g., −60 mV) will not trigger an action potential; membrane potential returns to resting level. A suprathreshold stimulus (e.g., −50 mV) will trigger an action potential. This is the basis of the all-or-nothing law: if threshold is reached, the action potential proceeds to completion regardless of stimulus strength.' },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Depolarisation Phase', level: 3 },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'During depolarisation, the membrane potential rapidly becomes less negative (moves toward positive values). This phase occurs over ~1 ms. As the membrane potential depolarises toward −55 mV, voltage-gated Na⁺ channels begin to open. The influx of Na⁺ ions (down their electrochemical gradient) further depolarises the membrane, opening more Na⁺ channels in a positive feedback loop.' },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'The membrane potential continues to depolarise until it reaches the Na⁺ equilibrium potential of approximately +60 mV. However, the peak of the action potential is usually +30 to +40 mV because voltage-gated Na⁺ channels begin to inactivate (become temporarily unresponsive) before the Na⁺ equilibrium is reached.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'V<sub>m</sub>: −70 mV → −55 mV (threshold) → +40 mV (peak, depolarisation)',
        caption: 'Membrane potential changes during depolarisation phase',
      },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Positive Feedback Loop',
        text: 'Initial depolarisation opens Na⁺ channels → more Na⁺ influx → further depolarisation → more channel opening. This positive feedback ensures rapid depolarisation once threshold is crossed.',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Repolarisation Phase', level: 3 },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Repolarisation occurs when the membrane potential returns to negative values (restoring resting state). Two key events drive this: first, voltage-gated Na⁺ channels inactivate (close and become unresponsive); second, voltage-gated K⁺ channels, which are slower to respond, finally open. The delay (~0.5 ms) in K⁺ channel opening allows Na⁺ influx to dominate during depolarisation.' },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'K⁺ efflux (down its concentration gradient, outward through open K⁺ channels) makes the inside more negative, driving repolarisation. As K⁺ channels remain open longer than needed, more K⁺ leaves the cell than is necessary to restore resting potential, causing the membrane potential to become slightly more negative than −70 mV.' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Hyperpolarisation (Undershoot)', level: 3 },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'Hyperpolarisation is the brief overshoot into negativity (more negative than −70 mV, typically reaching −80 to −90 mV) that follows repolarisation. This occurs because K⁺ channels remain open too long, allowing excessive K⁺ efflux. The K⁺ channels gradually close, and the Na⁺/K⁺-ATPase pump restores ion gradients, returning the membrane potential to −70 mV within ~1–2 ms.' },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Refractory Periods', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'The absolute refractory period is the time during which NO new action potential can be generated, no matter how strong the stimulus. This period lasts ~1 ms during depolarisation and early repolarisation. It occurs because Na⁺ channels are inactivated (not merely closed)—the inactivation gate blocks the channel temporarily, preventing Na⁺ influx.' },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'The relative refractory period follows the absolute period and lasts ~2 ms. During this time, a VERY STRONG stimulus can generate a new action potential, but one stronger than normal is needed. This is because the membrane is hyperpolarised (more negative than resting), requiring a greater depolarisation to reach threshold.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Phase', 'Membrane Potential', 'Na⁺ Channels', 'K⁺ Channels', 'Duration'],
        rows: [
          ['Depolarisation', '−70 → +40 mV', 'Open', 'Closed', '~1 ms'],
          ['Repolarisation', '+40 → −70 mV', 'Inactivating', 'Opening/open', '~1 ms'],
          ['Hyperpolarisation', '−70 → −90 mV', 'Closed (inactivated)', 'Open', '~1–2 ms'],
          ['Resting state', '−70 mV', 'Closed', 'Closed (some leak)', 'Ongoing'],
        ],
        caption: 'Phases of the action potential and ion channel states',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Absolute vs Relative Refractory Period',
        text: 'A neurone fires an action potential at t = 0 ms. At t = 0.5 ms (during absolute refractory period), a strong stimulus is applied—no new action potential occurs because Na⁺ channels are inactivated. At t = 2.5 ms (during relative refractory period), the same strong stimulus triggers a new action potential because the neurone is hyperpolarised but Na⁺ channels have recovered from inactivation.',
      },
    },
    {
      id: 'h7',
      type: 'heading',
      data: { text: 'The All-or-Nothing Law', level: 3 },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'The all-or-nothing law states that action potentials are either generated in full or not at all. Subthreshold stimuli do not produce action potentials; suprathreshold stimuli produce action potentials of identical amplitude (~80 mV). The amplitude is not graded—it does not depend on stimulus strength. Information is encoded in the FREQUENCY of action potentials, not their amplitude.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Action potentials consist of depolarisation (Na⁺ influx), repolarisation (K⁺ efflux), and hyperpolarisation. Threshold at −55 mV triggers voltage-gated Na⁺ channel opening. Absolute refractory period prevents multiple action potentials firing simultaneously; relative refractory period allows only supranormal stimuli.',
        apply: 'Tetrodotoxin (TTX) blocks voltage-gated Na⁺ channels. Predict the effect of TTX on action potential generation. Can depolarisation still occur?',
        analyze: 'Why does the action potential peak at +30 to +40 mV rather than at the Na⁺ equilibrium potential of +60 mV?',
        evaluate: 'The absolute refractory period limits action potential frequency to ~1000 Hz maximum. Discuss how this frequency limitation serves a physiological purpose in neuronal communication.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define threshold stimulus and the all-or-nothing law', checked: false },
          { text: 'Describe depolarisation phase: Na⁺ channels, influx, membrane potential', checked: false },
          { text: 'Describe repolarisation phase: inactivation and K⁺ efflux', checked: false },
          { text: 'Explain hyperpolarisation and the undershoot', checked: false },
          { text: 'Distinguish between absolute and relative refractory periods', checked: false },
          { text: 'Explain why information is encoded by frequency, not amplitude', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'An action potential is triggered when threshold (−55 mV) is reached. Depolarisation occurs as voltage-gated Na⁺ channels open, allowing Na⁺ influx to +40 mV. Repolarisation follows as Na⁺ channels inactivate and K⁺ channels open, driving the potential negative. Hyperpolarisation occurs due to excess K⁺ efflux. The absolute refractory period (inactivated Na⁺ channels) prevents simultaneous firing; the relative refractory period requires supranormal stimuli. Information is encoded by frequency, not amplitude (all-or-nothing law).' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h1', prompt: 'What is an action potential and what is its function?' },
      { id: 'cue-2', blockId: 'h2', prompt: 'Define threshold and explain the all-or-nothing law.' },
      { id: 'cue-3', blockId: 'h3', prompt: 'Describe the depolarisation phase of an action potential.' },
      { id: 'cue-4', blockId: 'h6', prompt: 'What is the difference between absolute and relative refractory periods?' },
      { id: 'cue-5', blockId: 'h5', prompt: 'Why does hyperpolarisation occur after an action potential?' },
    ],
    summaryText: 'Action potential: threshold −55 mV triggers depolarisation (Na⁺ in, +40 mV peak). Repolarisation: Na⁺ inactivation + K⁺ opening restore −70 mV. Hyperpolarisation to −90 mV from excess K⁺ efflux. Absolute refractory period (Na⁺ inactivated): no new AP possible. Relative refractory period: only supranormal stimuli work. All-or-nothing law: frequency encodes information.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Squid giant axon', detail: 'Used by Hodgkin & Huxley to study voltage-gated channels and action potentials', year: '1939–1952', source: 'Nobel Prize physiology', tags: ['action potential', 'ion channels', 'classic experiment'] },
  ],
};
