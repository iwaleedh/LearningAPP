export const note_physics_4_21_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Induced E.M.F in a Moving Coil" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "Induced E.M.F in a Moving Coil", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electromagnetic induction</strong> is a phenomenon which occurs when an <strong>e.m.f</strong> is induced when a conductor moves through a <strong>magnetic field</strong>. This is one of the most important phenomena in all of physics — it underlies every electrical generator on the planet." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Definition: Electromagnetic Induction', text: 'Electromagnetic induction is the process in which an e.m.f is induced in a closed circuit due to changes in <strong>magnetic flux</strong> linkage</strong> (NΦ). It occurs when: (1) a conductor cuts through a <strong>magnetic field</strong>, or (2) the <strong>magnetic flux</strong> through a coil changes in magnitude or direction.' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "If there is a change in <strong>magnetic flux</strong> Φ or <strong>magnetic flux</strong> linkage</strong> NΦ, mechanical work (from moving the conductor in the field) is transformed into electrical energy. Therefore, if attached to a complete circuit, a current will be induced in the conductor." }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "This is known as electromagnetic induction. The process can occur either when a conductor cuts through a <strong>magnetic field</strong>, or when the <strong>magnetic flux</strong> linkage</strong> through a coil changes — for example, becomes more or less dense, or changes direction. Electromagnetic induction is the working principle behind two of the most important electrical devices ever invented." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Electrical generators</strong> convert mechanical energy to electrical energy using electromagnetic induction. <strong>Transformers</strong> are used in electrical power transmission to step voltages up or down. This phenomenon can easily be demonstrated with a magnet and a coil, or a wire and two magnets." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'info', title: 'Real-World Application: Electrical Generators', text: 'Every power station in the world — whether coal, gas, nuclear, wind, or hydro — uses electromagnetic induction. A turbine (driven by steam or wind) rotates a coil inside a <strong>magnetic field</strong>, inducing an e.m.f and producing the electricity that flows into the national grid. Even bicycle dynamos and car alternators work on this principle.' }, terms: [] },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Relative motion between a coil and a magnet:</strong> When a coil is connected to a sensitive voltmeter, a bar magnet can be moved in and out. The observations are key to understanding when induction occurs and when it does not." }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "When the bar magnet is <strong>not moving</strong>, the voltmeter shows a zero reading. When the bar magnet is held still inside, or outside, the coil, the <strong>rate of change of flux</strong> is zero, so there is no e.m.f induced. When the bar magnet begins to move inside the coil, there is a reading on the voltmeter." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'warning', title: 'Common Misconception', text: 'A stationary magnet inside a coil does NOT induce an e.m.f — even if the <strong>magnetic field</strong> through the coil is large. It is the CHANGE in flux (ΔΦ/Δt) that induces an e.m.f, not the flux itself. No motion = no change = no e.m.f.' }, terms: [] },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "As the bar magnet moves, its <strong>magnetic field</strong> lines</strong> cut through the coil, generating a change in <strong>magnetic flux</strong> (ΔΦ). This induces an e.m.f within the coil, shown momentarily by the reading on the voltmeter." }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "When the bar magnet is taken back out of the coil, an e.m.f is induced in the <strong>opposite direction</strong>. As the magnet changes direction, the direction of the current changes. The voltmeter will momentarily show a reading with the opposite sign." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Increasing the speed of the magnet induces an e.m.f with a <strong>higher magnitude</strong>. As the speed of the magnet increases, the <strong>rate of change of flux</strong> increases. The direction of the electric current, and e.m.f, induced in the conductor is such that it opposes the change that produces it — this is <strong>Lenz's Law</strong>." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'tip', title: 'Exam Technique', text: 'In exam questions about induction, always identify: (1) Is there a change in flux? (2) What is the rate of change (ΔΦ/Δt)? (3) What does Lenz\'s Law say about the direction? Stating that "there is no change in flux" scores marks when explaining why no e.m.f is induced.' }, terms: [] },
    {
      id: 'svg-magnetic-flux',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="100" height="100" fill="#1e3a8a" stroke="#2563EB" stroke-width="2" transform="skewY(20)"/><path d="M 50 120 L 250 120" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 140 L 250 140" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><path d="M 50 160 L 250 160" stroke="#EF4444" stroke-width="3" marker-end="url(#arrow-flux)"/><text x="260" y="145" font-family="Arial" font-size="14" fill="#991B1B">B Field</text><text x="120" y="130" font-family="Arial" font-size="14" fill="#1E3A8A" transform="skewY(20)">Area (A)</text><defs><marker id="arrow-flux" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#EF4444"/></marker></defs></svg>',
        caption: 'Magnetic Flux'
      },
      terms: []
    },
    {
      id: 'svg-flux-equation',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="120" fill="#0a2e1a" rx="10"/><text x="175" y="50" font-family="Times New Roman" font-size="32" font-style="italic" font-weight="bold" text-anchor="middle" fill="#065F46">&Phi; = B A</text><text x="175" y="90" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">Flux (Weber, Wb) = Flux Density (T) &times; Area (m&sup2;)</text></svg>',
        caption: 'Magnetic Flux Formula'
      },
      terms: []
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#1c3a64" rx="8"/><line x1="200" y1="30" x2="200" y2="170" stroke="#1D4ED8" stroke-width="5" stroke-linecap="round"/><path d="M205 100 L310 100" stroke="#DC2626" stroke-width="2.5" marker-end="url(#enr-a)"/><text x="318" y="106" font-family="Arial" font-size="16" fill="#DC2626" font-weight="bold">v</text><text x="30" y="115" font-family="Arial" font-size="28" fill="#047857">&#215; B</text><text x="100" y="190" font-family="Arial" font-size="14" fill="#1E3A8A">&#949; = BvL  (motional e.m.f)</text><defs><marker id="enr-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#DC2626"/></marker></defs></svg>',
        caption: 'A conductor of length L moving at velocity v through field B (into page) generates motional e.m.f ε = BvL.'
      },
      terms: []
    },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Motional E.M.F', text: 'A straight conductor of length <strong>0.25 m</strong> moves at <strong>4 m s⁻¹</strong> perpendicular to a uniform field of flux density <strong>0.5 T</strong>.<br>ε = BvL = 0.5 × 4 × 0.25 = <strong>0.5 V</strong><br>The conductor must move <em>perpendicular</em> to B for the full BvL formula to apply; if at angle θ, use ε = BvL sin θ.' }, terms: [] },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Three Conditions for Induction', text: 'Remember <strong>C-R-D</strong>: a conductor in a <strong>C</strong>losed circuit must have a <strong>R</strong>ate of change of flux linkage (ΔNΦ/Δt ≠ 0); the <strong>D</strong>irection of the induced current opposes the change (Lenz\'s Law). If any one of these is missing, state which condition fails — examiners reward this.' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Stationary Magnet Produces No E.M.F",
        text: "Students often think a strong magnet held still inside a coil will induce an e.m.f. Incorrect! It is the CHANGE in flux (\u0394\u03a6/\u0394t) that induces an e.m.f, not the flux itself. No motion = no change = zero e.m.f, regardless of field strength."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Three Conditions for Induction (C-R-D)",
        text: "Remember C-R-D: Closed circuit required; Rate of change of flux linkage must be non-zero (\u0394N\u03a6/\u0394t \u2260 0); Direction of induced current opposes the change (Lenz's Law). If any one fails, no induction occurs."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Induced E.M.F in a Moving Coil' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
