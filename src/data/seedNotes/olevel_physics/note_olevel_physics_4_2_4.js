export const note_olevel_physics_4_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-2-5-power-and-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate electrical power using P = IV, P = I²R, and P = V²/R, and find energy transferred using E = Pt.' },
    },
    {
      id: 'h-power',
      type: 'heading',
      data: { text: 'Electrical Power', level: 2 },
    },
    {
      id: 'para-power',
      type: 'paragraph',
      data: {
        text: '<strong>Electrical power</strong> is the rate at which electrical energy is transferred (or converted). It is measured in <strong>watts (W)</strong>, where 1 W = 1 J/s.',
      },
    },
    {
      id: 'eq-power1',
      type: 'equation',
      data: {
        html: 'P = IV',
        caption: 'P = power (W), I = current (A), V = voltage (V)',
      },
    },
    {
      id: 'para-derived',
      type: 'paragraph',
      data: {
        text: 'Using Ohm\'s law (V = IR), we can substitute to get two other useful forms:',
      },
    },
    {
      id: 'eq-power2',
      type: 'equation',
      data: {
        html: 'P = I²R',
        caption: 'Substituting V = IR into P = IV gives P = I × IR = I²R',
      },
    },
    {
      id: 'eq-power3',
      type: 'equation',
      data: {
        html: 'P = <span class="nb-frac"><span class="nb-num">V²</span><span class="nb-den">R</span></span>',
        caption: 'Substituting I = V/R into P = IV gives P = V × (V/R) = V²/R',
      },
    },
    {
      id: 'call-key-power',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Three Power Equations',
        text: 'P = IV &nbsp;|&nbsp; P = I²R &nbsp;|&nbsp; P = V²/R\n\nUse the one that has the quantities you already know.',
      },
    },
    {
      id: 'h-energy',
      type: 'heading',
      data: { text: 'Electrical Energy', level: 2 },
    },
    {
      id: 'eq-energy',
      type: 'equation',
      data: {
        html: 'E = Pt = IVt',
        caption: 'E = energy (J), P = power (W), t = time (s)',
      },
    },
    {
      id: 'para-energy',
      type: 'paragraph',
      data: {
        text: 'Energy can also be measured in <strong>kilowatt-hours (kWh)</strong> for larger amounts. 1 kWh = 3 600 000 J = 3.6 MJ. Electricity bills use kWh.',
      },
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Power',
        text: 'A 230 V hairdryer draws a current of 5 A. Calculate its power rating.\n\nP = IV = 5 × 230 = 1150 W = 1.15 kW',
      },
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Energy and Power using I²R',
        text: 'A 4 Ω resistor carries a current of 3 A for 2 minutes. Calculate energy dissipated.\n\nP = I²R = 3² × 4 = 9 × 4 = 36 W\nt = 2 × 60 = 120 s\nE = Pt = 36 × 120 = 4320 J',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Choose the power equation that avoids extra calculation. If given V and R (but not I), use P = V²/R directly. If given I and R (but not V), use P = I²R.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Power P = IV = I²R = V²/R in watts. Energy E = Pt = IVt in joules. For household use, 1 kWh = 3.6 MJ.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'P = IV = I²R = V²/R; E = Pt; 1 kWh = 3.6 MJ.',
    cues: [
      { id: 'cue-1', blockId: 'eq-power1', prompt: 'State three equations for electrical power.', answer: 'P = IV, P = I²R, P = V²/R.' },
      { id: 'cue-2', blockId: 'eq-energy', prompt: 'Write the equation for electrical energy transferred.', answer: 'E = Pt = IVt, where E is in joules, P in watts, and t in seconds.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'A 12 V motor carries 2 A. What is its power?', answer: 'P = IV = 2 × 12 = 24 W.' },
      { id: 'cue-4', blockId: 'para-energy', prompt: 'What is 1 kWh in joules?', answer: '1 kWh = 3 600 000 J = 3.6 MJ.' },
      { id: 'cue-5', blockId: 'call-worked2', prompt: 'When would you use P = I²R instead of P = IV?', answer: 'When you know the current and resistance but not the voltage directly.' },
    ],
  },
  evidence: [],
  mentions: [],
};
