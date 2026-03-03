export const note_physics_2_4_8 = {
  blocks: [
    { id: 'obj', type: 'objective', data: { text: 'Describe Core Practical 7: investigation of I-V characteristics of a filament lamp, diode and resistor.' }, terms: ['core practical', 'I-V'] },
    { id: 'h-cp7', type: 'heading', data: { text: 'Core Practical 7: Component Characteristics', level: 2 }, terms: [] },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Method', text: '1. Set up component with ammeter in series, voltmeter in parallel.\n2. Use a variable resistor (or potential divider) to vary pd.\n3. Record I and V for increasing and decreasing voltages.\n4. For diode: reverse connections to test both directions.\n5. Plot I-V graph for each component.' }, terms: [] },
    { id: 'list-results', type: 'list', data: { style: 'unordered', items: ['Resistor: straight line through origin (ohmic)', 'Filament lamp: curve \u2014 R increases with temperature', 'Diode: near-zero current until ~0.6V, then steep rise'] }, terms: [] },
    { id: 'checklist', type: 'checklist', data: { items: [{ text: 'I can describe the circuit setup', checked: false }, { text: 'I can sketch expected I-V graphs', checked: false }] }, terms: [] },
    { id: 'bloom-understand', type: 'callout', data: { style: 'key', title: '\ud83e\udde0 Deeper Understanding \u2014 Why It Matters', text: 'Understand: A potential divider circuit gives better control than a variable resistor because it can reduce V to zero.\n\nApply: Explain why you need to reverse the supply connections to get the full diode I-V graph.\n\nAnalyze: Why should you wait between readings for the filament lamp? How does this affect data quality?\n\nEvaluate: Compare ammeter-voltmeter method with using a multimeter. Which gives more accurate R values?' }, terms: [] },
    { id: 'summary', type: 'summary', data: { text: 'Ammeter in series, voltmeter in parallel. Variable resistor or potential divider for V control. Resistor: linear. Lamp: curved. Diode: threshold ~0.6V.' }, terms: [] },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key', prompt: 'Describe the circuit for measuring I-V characteristics.' },
  ], summaryText: 'A in series, V in parallel. Pot divider for control. Plot I vs V.', ready: false },
  evidence: [{ id: 'ev-1', title: 'Edexcel IAL Physics \u2014 CP7', detail: 'I-V characteristics', year: '2021', source: 'Pearson Edexcel', tags: ['practical', 'I-V'] }],
};
