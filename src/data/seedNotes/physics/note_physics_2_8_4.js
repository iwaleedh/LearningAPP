export const note_physics_2_8_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Explain how <strong>resistance</strong> varies with temperature in metals and in NTC thermistors; sketch R-T graphs for each; describe the mechanism behind each behaviour" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Resistance</strong> & Temperature", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "The <strong>resistance</strong> of a material changes with temperature, but the way it changes depends on the type of material." },
      { text: "There are two distinct behaviours: metals show increasing <strong>resistance</strong> with temperature (positive temperature coefficient), while semiconductor devices such as NTC thermistors show decreasing <strong>resistance</strong> with temperature (negative temperature coefficient)" },
      { text: "Understanding both behaviours requires looking at the microscopic cause of <strong>resistance</strong>." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Metals: <strong>Resistance</strong> Increases with Temperature In a metal, <strong>current</strong> is carried by free electrons." },
      { text: "These electrons travel through a lattice of positive ions." },
      { text: "As temperature rises, the lattice ions vibrate with greater <strong>amplitude</strong>." },
      { text: "This increases the <strong>frequency</strong> and severity of collisions between electrons and lattice ions, impeding the flow of electrons more." },
      { text: "The result is a greater <strong>resistance</strong>." },
      { text: "For many metals, the relationship is approximately linear: R = R₀(1 + αΔT), where α is the temperature coefficient of <strong>resistance</strong> and R₀ is the <strong>resistance</strong> at a reference temperature." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">R-T Graphs: Metal vs NTC Thermistor</text><line x1="40" y1="155" x2="190" y2="155" stroke="#212529" stroke-width="2"/><line x1="40" y1="155" x2="40" y2="40" stroke="#212529" stroke-width="2"/><text x="115" y="172" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Temperature / &#176;C</text><text x="20" y="100" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 20,100)">R / &#937;</text><line x1="40" y1="125" x2="180" y2="55" stroke="#339af0" stroke-width="2.5"/><text x="115" y="78" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Metal</text><text x="115" y="90" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">R &#8593; as T &#8593;</text><line x1="210" y1="155" x2="380" y2="155" stroke="#212529" stroke-width="2"/><line x1="210" y1="155" x2="210" y2="40" stroke="#212529" stroke-width="2"/><text x="295" y="172" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Temperature / &#176;C</text><text x="188" y="100" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 188,100)">R / &#937;</text><path d="M 215 50 Q 260 80 360 148" stroke="#fa5252" stroke-width="2.5" fill="none"/><text x="295" y="78" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">NTC Thermistor</text><text x="295" y="90" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">R &#8595; as T &#8593;</text></svg>', caption: 'Metal: R increases approximately linearly with T. NTC thermistor: R decreases steeply with T (non-linear)' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "NTC Thermistors: <strong>Resistance</strong> Decreases with Temperature NTC (Negative Temperature Coefficient) thermistors are made from semiconductor materials (metal oxides such as manganese oxide)" },
      { text: "At low temperatures, there are few free charge carriers, so <strong>resistance</strong> is high." },
      { text: "As temperature rises, thermal energy frees more electrons from their atomic bonds, increasing the number density of charge carriers (n in I = nAev_d)" },
      { text: "This increase in n more than compensates for the increased lattice vibrations, so overall <strong>resistance</strong> decreases steeply." },
      { text: "The R-T curve is strongly non-linear (exponential decay shape)." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "PTC Thermistors Some thermistors have a positive temperature coefficient (PTC): <strong>resistance</strong> increases sharply above a certain temperature (the Curie temperature)" },
      { text: "PTC thermistors are used as self-resetting fuses (<strong>resistance</strong> spikes to limit <strong>current</strong> when overheated) and in self-regulating heaters." },
      { text: "The mechanism is different from metals — it involves a phase transition in the ceramic material rather than lattice vibration effects." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Superconductivity Below a <strong>critical temperature</strong> T_c (typically a few kelvin for conventional <strong>superconductors</strong>), some materials show zero <strong>resistance</strong>." },
      { text: "This is called superconductivity." },
      { text: "The transition is abrupt — <strong>resistance</strong> drops to zero at T_c, not gradually." },
      { text: "At A-Level, you need to know that superconductivity occurs below a <strong>critical temperature</strong> and that <strong>resistance</strong> is exactly zero (not just very small)" },
      { text: "Applications include MRI magnets, particle accelerator electromagnets, and potentially loss-free power transmission." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Applications of Thermistors NTC thermistors are used as temperature sensors in: thermostats (central heating, air conditioning), medical thermometers (digital ear thermometers), engine temperature sensors in cars." },
      { text: "In a potential divider circuit (see note 2_7_4), a <strong>thermistor</strong> makes a sensitive temperature-to-<strong>voltage</strong> converter." },
      { text: "When hot: R_thermistor decreases, so V_out across it decreases (if it is the lower resistor in the divider)." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Contrast', text: 'Metal: R increases with T (more lattice vibration → more electron scattering). NTC <strong>thermistor</strong>: R decreases with T (more charge carriers freed → easier <strong>current</strong> flow). <strong>Superconductor</strong>: R = 0 below <strong>critical temperature</strong> T_c.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Explain why <strong>resistance</strong> in a metal increases with temperature in terms of lattice vibrations", checked: false },
      { text: "Explain why <strong>resistance</strong> in an NTC <strong>thermistor</strong> decreases with temperature in terms of charge carrier density", checked: false },
      { text: "Sketch and compare the R-T graphs for a metal and an NTC <strong>thermistor</strong>", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Metal: R ∝ T (approximately linear); increased lattice vibration scatters electrons more. NTC <strong>thermistor</strong>: R decreases steeply with T (exponential); increased T frees more charge carriers (larger n). PTC <strong>thermistor</strong>: R spikes above Curie temperature — used as self-resetting fuse. <strong>Superconductor</strong>: R = 0 below <strong>critical temperature</strong> T_c." } },
    { id: 'enr-worked-circuit', type: 'callout', data: { style: 'worked', title: 'Multi-cell circuit', text: 'Two cells ε₁=6.0V, r₁=0.5Ω and ε₂=4.0V, r₂=0.3Ω with common external R=4.2Ω. Total <strong>EMF</strong>=10.0V (series aiding), total r=0.8Ω. I=10.0/(4.2+0.8)=2.0A. Terminal PD of cell 1: 6.0−2.0×0.5=5.0V. Terminal PD of cell 2: 4.0−2.0×0.3=3.4V. Total PD across R: 4.2×2.0=8.4V. Check: 5.0+3.4=8.4V ✓.' } },
    { id: 'enr-warn-emf', type: 'callout', data: { style: 'warning', title: 'Common mistakes in <strong>EMF</strong> questions', text: '(1) Using <strong>EMF</strong> as the terminal PD — remember terminal V=ε−Ir, always less than <strong>EMF</strong> when <strong>current</strong> flows. (2) Forgetting to include r in total <strong>resistance</strong> — total R=R_external+r. (3) Cells opposing: net <strong>EMF</strong> = difference, not sum. (4) "Find the <strong>current</strong>" — always check if cells are aiding or opposing first. Read polarity carefully.' } },
    { id: 'enr-tip-emf-calc', type: 'callout', data: { style: 'tip', title: 'Exam tip: <strong>EMF</strong> circuit strategy', text: 'Step 1: identify total <strong>EMF</strong> (sum if aiding, difference if opposing). Step 2: total <strong>resistance</strong> = sum of all r values + external R. Step 3: I=total <strong>EMF</strong>/total <strong>resistance</strong>. Step 4: terminal PD of each cell = ε−Ir. Step 5: verify <strong>voltage</strong> drops sum to total <strong>EMF</strong>.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Resistance vs Temperature",
        text: "Metals: R increases with T (lattice vibrations scatter electrons). Thermistor (NTC ceramic): R decreases sharply with T (more charge carriers become available). Superconductor: R \u2192 0 below critical temperature T_c. Temperature coefficient \u03b1 = \u0394R/(R\u2080\u0394T) is material-dependent."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Which Way Does R Change?",
        text: "Metals heat up \u2192 R increases \u2192 led becomes hotter (positive feedback). NTC thermistor heats up \u2192 R decreases \u2192 I increases (more heating). These opposite behaviors lead to different circuit responses \u2014 remember which material does what."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Why does <strong>resistance</strong> increase with temperature in a metal? What is happening at the atomic level?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Why does <strong>resistance</strong> decrease with temperature in an NTC <strong>thermistor</strong>? How is this different from a metal?' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'What is superconductivity? Below what condition does it occur, and what is remarkable about it?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
