export const note_physics_4_21_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Induced E.M.F between Linked Coils" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "Induced E.M.F between Linked Coils", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "An e.m.f can be induced in a coil when there is a <strong>change of current</strong> in another coil linked with this coil. This principle of <strong>mutual induction</strong> is the fundamental mechanism behind one of the most widely used electrical devices: the transformer." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Transformer: Definition', text: 'A transformer is a device that works by the principles of electromagnetic induction. It changes high alternating voltages at low current to low alternating voltages at high current (or vice versa). It consists of: a <strong>primary coil</strong>, a <strong>secondary coil</strong>, and a <strong>soft iron core</strong>.' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "A <strong>transformer</strong> is a device that works by the principles of electromagnetic induction. It changes high alternating voltages at low current to low alternating voltage at high current, and vice versa. The coils are wound around the soft iron core." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>soft iron core</strong> is necessary because it creates flux linkage between the primary and secondary coils. Soft iron is used because it can easily be magnetised and demagnetised, allowing the alternating <strong>magnetic field</strong> to change direction with the AC supply without significant energy loss." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'info', title: 'Real-World Application: Phone Chargers & the National Grid', text: 'Every phone charger contains a transformer that steps down the 230 V mains to 5 V (or similar). The national grid uses step-up transformers near power stations (raising voltage to ~400 kV) to reduce current and thus minimise resistive heating losses (P = I²R) during long-distance transmission. Step-down transformers near homes reduce voltage back to 230 V for safe use.' }, terms: [] },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "In the primary coil, an <strong>alternating current</strong> producing an alternating voltage is applied. This creates an <strong>alternating <strong>magnetic field</strong> inside the iron core and therefore a changing <strong>magnetic flux</strong> linkage. A changing <strong>magnetic field</strong> passes through to the secondary coil through the iron core." }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "This results in a changing <strong>magnetic flux</strong> linkage</strong> in the secondary coil, and from <strong>Faraday's Law</strong>, an e.m.f is induced. This e.m.f produces an alternating output voltage from the secondary coil. The output alternating voltage is at the same frequency as the input voltage." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'worked', title: 'Worked Example: DC in Primary Coil', text: 'When connected to a DC power supply, the primary coil becomes an electromagnet.<br/><strong>(a) Switched on:</strong> Current rises from 0 to steady value → changing <strong>magnetic field</strong> → changing flux linkage in secondary → e.m.f induced momentarily.<br/><strong>(b) Remains on:</strong> Current is steady → constant <strong>magnetic field</strong> → no change in flux → no e.m.f induced in secondary.<br/><strong>(c) Switched off:</strong> Current falls to 0 → changing (decreasing) <strong>magnetic field</strong> → e.m.f induced in secondary again momentarily, but in the opposite direction.' }, terms: [] },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "When connected to a DC power supply, the primary coil of a transformer becomes an <strong>electromagnet</strong>. The key observation is that an e.m.f is only induced in the secondary coil when the current in the primary is <strong>changing</strong>." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'warning', title: 'Common Misconception: DC Transformers', text: 'Transformers do NOT work with steady DC. A constant direct current produces a constant (unchanging) <strong>magnetic field</strong>, so the rate of change of flux linkage = 0, and no e.m.f is induced in the secondary. Transformers require AC because AC continuously changes, giving a continuously changing flux.' }, terms: [] },
    {
      id: 'svg-flux-linkage',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="30" width="80" height="120" fill="none" stroke="#D97706" stroke-width="4"/><rect x="105" y="35" width="70" height="110" fill="none" stroke="#D97706" stroke-width="4"/><rect x="110" y="40" width="60" height="100" fill="none" stroke="#D97706" stroke-width="4"/><path d="M 50 90 L 250 90" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><path d="M 50 110 L 250 110" stroke="#3B82F6" stroke-width="3" marker-end="url(#arrow-fl)"/><text x="210" y="70" font-family="Arial" font-size="14" fill="#D97706">N turns</text><defs><marker id="arrow-fl" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#3B82F6"/></marker></defs></svg>',
        caption: 'Magnetic Flux Linkage'
      },
      terms: []
    },
    {
      id: 'svg-faradays-law',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="140" fill="#3d1212" rx="10"/><text x="180" y="60" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#991B1B">&epsilon; = &#8722; N (&Delta;&Phi; / &Delta;t)</text><text x="180" y="95" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Induced EMF &propto; Rate of change of flux linkage</text><text x="180" y="115" font-family="Arial" font-size="12" text-anchor="middle" fill="#B91C1C">Negative sign denotes Lenz\'s Law</text></svg>',
        caption: 'Faraday\'s Law Formula'
      },
      terms: []
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="60" width="60" height="80" fill="none" stroke="#6366F1" stroke-width="3" rx="4"/><rect x="160" y="40" width="80" height="120" fill="#78350f" stroke="#D97706" stroke-width="3" rx="4"/><rect x="320" y="60" width="60" height="80" fill="none" stroke="#10B981" stroke-width="3" rx="4"/><text x="50" y="175" font-family="Arial" font-size="13" text-anchor="middle" fill="#6366F1">Primary</text><text x="200" y="175" font-family="Arial" font-size="13" text-anchor="middle" fill="#D97706">Iron Core</text><text x="350" y="175" font-family="Arial" font-size="13" text-anchor="middle" fill="#10B981">Secondary</text></svg>',
        caption: 'Transformer: primary coil, soft iron core, and secondary coil'
      },
      terms: []
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Transformer Output Voltage',
        text: 'A step-down transformer has 2000 turns on the primary and 500 turns on the secondary. Input voltage = 240 V. Find the output voltage.<br/><strong>Turns ratio:</strong> N<sub>s</sub>/N<sub>p</sub> = 500/2000 = 0.25<br/><strong>V<sub>s</sub> = V<sub>p</sub> × (N<sub>s</sub>/N<sub>p</sub>) = 240 × 0.25 = <u>60 V</u></strong>'
      },
      terms: []
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Ideal vs Real Transformers',
        text: 'For an <strong>ideal</strong> transformer assume 100% efficiency: V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub>. Real transformers lose energy as heat due to <strong>eddy currents</strong> (reduced by laminating the iron core) and <strong>resistance heating</strong> in the coil wires. Always use AC — DC gives no changing flux, so no induced EMF.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Transformers Do NOT Work with DC",
        text: "A common exam pitfall: students assume transformers work with any voltage. False! Transformers require AC because they need a CHANGING magnetic flux through the iron core. DC produces a constant field \u2192 no change \u2192 no induced e.m.f in secondary \u2192 transformer is useless with DC."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Ideal Transformer Power Equation",
        text: "For ideal transformers (100% efficient), power is conserved: Vp\u00b7Ip = Vs\u00b7Is. Combined with turns ratio Vs/Vp = Ns/Np, you can solve for any unknown. Always use this power conservation constraint in exam questions."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Induced E.M.F between Linked Coils' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
