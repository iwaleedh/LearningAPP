export const note_olevel_physics_3_3_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-3-5-resonance.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define natural frequency and resonance. Describe the effect of resonance on amplitude. Give examples of resonance and explain how damping reduces its effects.' },
    },
    {
      id: 'h-nat-freq',
      type: 'heading',
      data: { text: 'Natural Frequency', level: 2 },
    },
    {
      id: 'para-nat',
      type: 'paragraph',
      data: { text: 'Every object that can vibrate has a <strong>natural (resonant) frequency</strong> — the frequency at which it vibrates when disturbed and then allowed to oscillate freely. The natural frequency depends on the physical properties of the object (its mass, stiffness, shape).' },
    },
    {
      id: 'list-examples-nat',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A simple pendulum: natural frequency f = (1/2π)√(g/L), depends on length L' },
          { text: 'A stretched guitar string: natural frequency depends on tension and length' },
          { text: 'A wine glass: specific frequency at which its rim vibrates' },
          { text: 'A bridge: structural natural frequency depends on its dimensions and material' },
        ],
      },
    },
    {
      id: 'h-resonance',
      type: 'heading',
      data: { text: 'Resonance', level: 2 },
    },
    {
      id: 'para-resonance',
      type: 'paragraph',
      data: { text: '<strong>Resonance</strong> occurs when an object is <strong>driven</strong> (forced) at its natural frequency. At this frequency, energy is transferred most efficiently from the driver to the object, causing the amplitude of vibration to <strong>increase dramatically</strong>.' },
    },
    {
      id: 'callout-key-res',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Resonance Condition',
        text: 'Resonance occurs when:\nDriving frequency = Natural frequency of the object\n\nResult: Large amplitude oscillations — the object "resonates".',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Examples of Resonance', level: 2 },
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Real-world examples of resonance',
        headers: ['Example', 'Driving force', 'Resonating object', 'Effect'],
        rows: [
          ['Tacoma Narrows Bridge (1940)', 'Wind at bridge\'s natural frequency', 'Bridge deck', 'Bridge oscillated with increasing amplitude and collapsed'],
          ['Microwave oven', 'Microwave EM waves (~2.45 GHz)', 'Water molecules in food', 'Water molecules absorb energy → food heats up'],
          ['Radio tuning', 'Radio waves from transmitter', 'Tuned electrical circuit', 'Circuit resonates only at selected station\'s frequency'],
          ['Musical instruments', 'Bow/breath/plucking', 'Air column or string', 'Standing waves form at natural frequencies → musical notes'],
          ['Breaking a wine glass with sound', 'Sound at glass\'s natural frequency', 'Wine glass rim', 'Glass vibrates with large amplitude → shatters'],
          ['MRI scanner', 'Radio frequency pulses', 'Hydrogen nuclei in body', 'Nuclei absorb and re-emit energy → body imaging'],
        ],
      },
    },
    {
      id: 'h-benefits',
      type: 'heading',
      data: { text: 'Beneficial and Harmful Resonance', level: 2 },
    },
    {
      id: 'list-beneficial',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Beneficial:</strong> musical instruments (resonating air columns and strings produce rich tones), microwave cooking, MRI imaging, radio reception, ultrasound medical applications' },
          { text: '<strong>Harmful:</strong> bridges or buildings oscillating catastrophically in wind or earthquakes; machinery vibrating at resonant frequency (causing wear or structural failure)' },
        ],
      },
    },
    {
      id: 'h-damping',
      type: 'heading',
      data: { text: 'Damping', level: 2 },
    },
    {
      id: 'para-damping',
      type: 'paragraph',
      data: { text: '<strong>Damping</strong> is the process of reducing the amplitude of an oscillation by removing energy from the system. It can be used to prevent dangerous resonance in engineering structures.' },
    },
    {
      id: 'list-damping',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Car suspension systems</strong> — shock absorbers damp oscillations from bumps in the road' },
          { text: '<strong>Building design in earthquake zones</strong> — rubber dampers between foundation and structure absorb vibrational energy' },
          { text: '<strong>Tuned mass dampers</strong> — large masses placed at the top of skyscrapers oscillate 180° out of phase with building sway, cancelling resonant oscillations (e.g. Taipei 101 has a 660-tonne steel sphere)' },
          { text: '<strong>Effect of damping on resonance:</strong> reduces peak amplitude; broadens the resonance peak; shifts natural frequency slightly' },
        ],
      },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked why resonance CAN be harmful: explain that at resonance the amplitude builds up to very large values, which can cause structural failure (bridges, buildings in earthquakes, machinery).\n\nWhen asked how damping helps: explain it removes energy from the system, reducing amplitude and preventing catastrophic buildup.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Every object has a natural frequency. Resonance occurs when a driving force has the same frequency as the natural frequency — the amplitude builds up dramatically. Resonance can be beneficial (musical instruments, microwave cooking, MRI) or harmful (structural collapse). Damping reduces amplitude by removing energy from the oscillating system.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Resonance: driving frequency = natural frequency → large amplitude. Damping removes energy and reduces amplitude.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-res', prompt: 'State the condition for resonance to occur.', answer: 'Resonance occurs when the driving frequency equals the natural frequency of the object. This causes energy to be transferred efficiently and the amplitude to build up dramatically.' },
      { id: 'cue-2', blockId: 'tbl-examples', prompt: 'Why did the Tacoma Narrows Bridge collapse in 1940?', answer: 'Strong winds happened to drive the bridge at (or near) its natural frequency. This caused resonance — the amplitude of oscillation built up until the bridge deck failed.' },
      { id: 'cue-3', blockId: 'para-damping', prompt: 'What is damping and how does it prevent dangerous resonance?', answer: 'Damping is the removal of energy from an oscillating system. It prevents dangerous resonance by limiting how much the amplitude can grow, even when the driving frequency matches the natural frequency.' },
      { id: 'cue-4', blockId: 'list-beneficial', prompt: 'Give one beneficial and one harmful example of resonance.', answer: 'Beneficial: microwave oven — microwaves drive water molecules at their resonant frequency, heating food efficiently. Harmful: the Tacoma Narrows Bridge collapse — wind forced the bridge to oscillate at its natural frequency, causing structural failure.' },
    ],
  },
  evidence: [],
  mentions: [],
};
