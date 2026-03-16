export const note_olevel_physics_4_3_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-10-energy-and-mains-electricity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate electrical energy consumption in kWh and the cost of using electrical appliances.' },
    },
    {
      id: 'h-energy',
      type: 'heading',
      data: { text: 'Energy and Power', level: 2 },
    },
    {
      id: 'para-energy',
      type: 'paragraph',
      data: {
        text: 'Electrical energy transferred is given by <strong>E = P × t</strong>. In SI units, E is in joules (J), P in watts (W), and t in seconds (s). For household electricity bills, the unit used is the <strong>kilowatt-hour (kWh)</strong>.',
      },
    },
    {
      id: 'eq-energy',
      type: 'equation',
      data: {
        html: 'E = P × t &nbsp;&nbsp;(joules) &nbsp;&nbsp;or&nbsp;&nbsp; E = P (kW) × t (h) &nbsp;(kWh)',
        caption: '1 kWh = 1000 W × 3600 s = 3 600 000 J = 3.6 MJ',
      },
    },
    {
      id: 'h-kwh',
      type: 'heading',
      data: { text: 'The Kilowatt-Hour (kWh)', level: 2 },
    },
    {
      id: 'para-kwh',
      type: 'paragraph',
      data: {
        text: 'One <strong>kilowatt-hour (kWh)</strong> is the energy used by a 1 kW appliance running for 1 hour. This is the unit measured by electricity meters and used by energy companies. 1 kWh = 3.6 MJ.',
      },
    },
    {
      id: 'h-cost',
      type: 'heading',
      data: { text: 'Calculating Cost', level: 2 },
    },
    {
      id: 'eq-cost',
      type: 'equation',
      data: {
        html: 'Cost = Energy (kWh) × Price per unit (pence or £/kWh)',
        caption: '',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 2 kW electric heater is used for 3 hours. Electricity costs 15p per kWh.\n\nEnergy = 2 kW × 3 h = 6 kWh\nCost = 6 × 15p = 90p\n\nIn joules: E = 2000 W × (3 × 3600 s) = 2000 × 10800 = 21 600 000 J = 21.6 MJ',
      },
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'A 60 W bulb runs for 8 hours per day for 30 days. Price = 12p/kWh.\n\nP = 60 W = 0.06 kW\nTime = 8 × 30 = 240 h\nEnergy = 0.06 × 240 = 14.4 kWh\nCost = 14.4 × 12p = 172.8p = £1.73',
      },
    },
    {
      id: 'h-conservation',
      type: 'heading',
      data: { text: 'Reducing Electricity Consumption', level: 2 },
    },
    {
      id: 'list-conservation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Use <strong>energy-efficient appliances</strong> (LED bulbs instead of filament bulbs).' },
          { text: 'Turn off appliances when not in use (standby mode still uses power).' },
          { text: 'Use appliances at <strong>off-peak times</strong> when electricity is cheaper.' },
          { text: 'Improve <strong>insulation</strong> — less heating energy needed.' },
          { text: 'Generate electricity from <strong>renewable sources</strong> (solar, wind).' },
        ],
      },
    },
    {
      id: 'table-appliances',
      type: 'comparisonTable',
      data: {
        caption: 'Typical Appliance Power Ratings',
        headers: ['Appliance', 'Typical Power (W)', 'Notes'],
        rows: [
          ['LED bulb', '10 W', 'Replaces 60 W filament bulb'],
          ['Laptop', '60 W', ''],
          ['Refrigerator', '100–200 W', 'On all day'],
          ['Washing machine', '2000 W', 'High heat'],
          ['Electric kettle', '2000–3000 W', 'Short use'],
          ['Electric oven', '2000–2500 W', ''],
        ],
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Convert watts to kilowatts before calculating kWh (÷ 1000). Convert minutes to hours (÷ 60) for time. Always show E = P × t then cost = E × price per unit clearly — mark schemes award each step.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'E = Pt (joules). For bills: E (kWh) = P (kW) × t (h); Cost = kWh × price/unit. 1 kWh = 3.6 MJ. Reduce consumption with efficient appliances and avoiding standby.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'E = Pt. kWh = kW × h. Cost = kWh × price. 1 kWh = 3.6 MJ.',
    cues: [
      { id: 'cue-1', blockId: 'eq-energy', prompt: 'What equation links energy, power, and time?', answer: 'E = P × t (joules = watts × seconds, or kWh = kW × hours).' },
      { id: 'cue-2', blockId: 'para-kwh', prompt: 'How many joules are in 1 kWh?', answer: '3 600 000 J = 3.6 MJ (1000 W × 3600 s).' },
      { id: 'cue-3', blockId: 'call-worked', prompt: 'A 3 kW kettle is used for 4 minutes. Calculate the energy in kWh.', answer: '4 min = 4/60 h = 0.0667 h; E = 3 × 0.0667 = 0.2 kWh.' },
      { id: 'cue-4', blockId: 'eq-cost', prompt: 'Energy used = 5 kWh, price = 20p per unit. What is the cost?', answer: 'Cost = 5 × 20p = 100p = £1.00.' },
    ],
  },
  evidence: [],
  mentions: [],
};
