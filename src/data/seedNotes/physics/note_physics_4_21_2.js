export const note_physics_4_21_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Lenz's Law</strong>" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Lenz's Law</strong>", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Lenz's Law</strong> is used to predict the direction of an induced e.m.f in a coil or wire. It is a direct consequence of the <strong>conservation of energy</strong> — electromagnetic induction cannot create energy from nothing." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: "<strong>Lenz's Law</strong>: Statement", text: 'The induced e.m.f is always set up in a direction to produce effects that <strong>oppose the change causing it</strong>. In equation form, this is represented by the negative sign in Faraday\'s Law: ε = −N(ΔΦ/Δt).' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Experimental Evidence for <strong>Lenz's Law</strong>: To verify <strong>Lenz's Law</strong>, the only apparatus needed is a bar magnet, a coil of wire, and a <strong>sensitive ammeter</strong>. Note: a cell is not required — the e.m.f is induced by the changing flux alone." }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Lenz's law</strong> can be verified using a coil connected in series with a sensitive ammeter and a bar magnet. A known pole (either north or south) of a bar magnet is pushed into the coil. This <strong>induces an e.m.f</strong> in the coil. The induced e.m.f drives a current (because it is a complete circuit)." }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Lenz's Law</strong> dictates: the direction of the <strong>induced current</strong> must be set up to oppose the incoming magnet. Since a north pole approaches the coil face, the e.m.f must be set up to create an <strong>induced north pole</strong>. This is because two north poles will repel each other." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'worked', title: 'Step-by-Step: Applying Lenz\'s Law', text: 'Step 1: Identify what is changing — e.g. a north pole approaches the left face of the coil.<br/>Step 2: Lenz\'s Law says the coil must oppose this → it must repel the incoming north pole → the left face becomes a north pole.<br/>Step 3: Use the right-hand grip rule: curl fingers in the direction of current, thumb points north → current flows anticlockwise (viewed from the left).<br/>Step 4: When the magnet is removed, the coil must now attract it (oppose the removal), so the left face becomes a south pole → current reverses.' }, terms: [] },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "The direction of current can be verified using the <strong>right-hand grip rule</strong>. Fingers curl around the coil in the direction of current and the thumb points along the direction of the flux lines, from north to south. Therefore, the current flows in an anti-clockwise direction in the image shown, in order to induce a north pole opposing the incoming magnet." }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "Reversing the magnet direction would give an opposite deflection on the voltmeter. <strong>Lenz's Law</strong> now predicts a <strong>south pole</strong> induced at the coil entrance, which would attract the north pole attempting to leave. Therefore, the induced e.m.f always produces effects to oppose the changes causing it." }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Lenz's Law</strong> is a direct consequence of the <strong>principle of conservation of energy</strong>. Electromagnetic effects will not create electrical energy out of nothing. In order to induce and sustain an e.m.f, work must be done in order to overcome the <strong>repulsive effect</strong> due to <strong>Lenz's Law</strong>." }] } },
    { id: 'callout-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip: The Negative Sign', text: 'A typical exam question asks you to explain the negative sign in ε = −N(ΔΦ/Δt). The answer: the negative sign represents Lenz\'s Law — the induced e.m.f acts in a direction to oppose the change in flux that caused it. This is also a consequence of conservation of energy.' }, terms: [] },
    { id: 'callout-4', type: 'callout', data: { style: 'info', title: 'Real-World Example: Braking Systems', text: 'Lenz\'s Law is exploited in regenerative braking in electric and hybrid vehicles. When the brakes are applied, the motor acts as a generator; the induced current (opposing the motion by Lenz\'s Law) slows the vehicle while simultaneously recharging the battery. Eddy current brakes in trains also use Lenz\'s Law — induced currents oppose the motion, creating a braking force without physical contact.' }, terms: [] },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Examiner Tips and Tricks: A typical exam question may ask you to explain the presence of the <strong>negative sign</strong> in <strong>Faraday's Law</strong> equation, or describe why work must be done to push a magnet into a coil." }] } },
    {
      id: 'svg-lenzs-law',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="20" width="40" height="80" fill="#9CA3AF"/><rect x="120" y="20" width="40" height="40" fill="#EF4444"/><text x="140" y="45" font-family="Arial" font-size="16" fill="#1e293b" text-anchor="middle">N</text><text x="140" y="85" font-family="Arial" font-size="16" fill="#1e293b" text-anchor="middle">S</text><path d="M 140 110 L 140 140" stroke="#000" stroke-width="3" marker-end="url(#arrow-move)"/><rect x="100" y="160" width="80" height="20" fill="none" stroke="#D97706" stroke-width="4"/><text x="70" y="175" font-family="Arial" font-size="14" fill="#B45309">Coil</text><text x="210" y="175" font-family="Arial" font-size="14" fill="#065F46">Induced N pole</text><text x="210" y="190" font-family="Arial" font-size="12" fill="#047857">repels magnet</text><defs><marker id="arrow-move" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="#000"/></marker></defs></svg>',
        caption: 'Lenz\'s Law in Action'
      },
      terms: []
    },
    {
      id: 'svg-flemings-right-hand',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><line x1="150" y1="120" x2="150" y2="40" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrow-bluer)"/><text x="160" y="60" font-family="Arial" font-size="14" fill="#1E3A8A">Motion (Thumb)</text><line x1="150" y1="120" x2="70" y2="120" stroke="#10B981" stroke-width="4" marker-end="url(#arrow-greenr)"/><text x="60" y="100" font-family="Arial" font-size="14" fill="#065F46">Field (First Finger)</text><line x1="150" y1="120" x2="210" y2="180" stroke="#EF4444" stroke-width="4" marker-end="url(#arrow-redr)"/><text x="140" y="195" font-family="Arial" font-size="14" fill="#991B1B">Induced Current (Second Finger)</text><defs><marker id="arrow-bluer" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#3B82F6"/></marker><marker id="arrow-greenr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#10B981"/></marker><marker id="arrow-redr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#EF4444"/></marker></defs></svg>',
        caption: 'Fleming\'s Right Hand Rule'
      },
      terms: []
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="70" width="130" height="60" fill="#EF4444" rx="4"/><text x="95" y="107" font-family="Arial" font-size="20" fill="#1e293b" text-anchor="middle" font-weight="bold">N</text><path d="M170,100 L248,100 L236,93 M248,100 L236,107" stroke="#374151" stroke-width="2.5" fill="none"/><rect x="260" y="40" width="18" height="120" fill="none" stroke="#D97706" stroke-width="4" rx="2"/><text x="310" y="94" font-family="Arial" font-size="13" fill="#B45309" text-anchor="middle">Induced</text><text x="310" y="112" font-family="Arial" font-size="13" fill="#B45309" text-anchor="middle">N pole</text></svg>',
        caption: 'Lenz\'s Law: induced N pole on coil face opposes approaching magnet N pole'
      },
      terms: []
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: South Pole Falling Through a Coil',
        text: 'A bar magnet falls south-pole-first into a horizontal coil.<br/>Step 1: South pole approaches → downward flux through coil <strong>increases</strong>.<br/>Step 2: Lenz\'s Law — oppose increase → induce a south pole facing downward (coil repels magnet).<br/>Step 3: Right-hand grip rule with thumb pointing downward → current flows <strong>clockwise</strong> viewed from above.'
      },
      terms: []
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Direction Questions',
        text: 'Always follow three steps: (1) State whether flux is <strong>increasing or decreasing</strong>. (2) State what pole the coil must form to <strong>oppose</strong> the change. (3) Apply the right-hand grip rule to find the <strong>current direction</strong>. Examiners award marks for each step explicitly stated.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Explain the Negative Sign in Faraday's Law",
        text: "Examiners regularly ask: 'Explain the negative sign in \u03b5 = \u2212N(\u0394\u03a6/\u0394t).' The answer: the negative sign represents Lenz's Law \u2014 the induced e.m.f acts to oppose the change in flux that caused it. Omitting this explanation costs marks."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Lenz's Law Direction Steps",
        text: "Always follow three steps: (1) Identify if flux through coil is INCREASING or DECREASING. (2) State what pole the coil must become to OPPOSE this change. (3) Apply right-hand grip rule to find current direction. Marks awarded for each step stated explicitly."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Lenz\'s Law' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
