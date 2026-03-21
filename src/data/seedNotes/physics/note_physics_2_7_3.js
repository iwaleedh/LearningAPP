export const note_physics_2_7_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Explain how <strong>potential difference</strong> varies along a uniform resistive wire; apply the potentiometer principle; describe how a potential divider wire is used experimentally" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Potential Difference</strong> & Conductor Length", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "For a uniform conductor of <strong>resistivity</strong> ρ, length L, and cross-sectional area A, the <strong>resistance</strong> is R = ρL/A." },
      { text: "Since R is proportional to L (for uniform cross-section), the <strong>potential difference</strong> across any section of the conductor is proportional to its length." },
      { text: "This is the principle behind the potentiometer (or potential divider wire), a fundamental experimental tool in physics." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Voltage</strong> Gradient Along a Uniform Wire When a steady <strong>current</strong> I flows through a long uniform <strong>resistance</strong> wire connected to a battery, there is a constant potential gradient (<strong>voltage</strong> per unit length) along the wire: V/L = IR/L = I(ρ/A) = constant." },
      { text: "This means the potential drops uniformly from one end to the other." },
      { text: "The potential at any point a distance x from one end is: V(x) = V_total × (x/L), where V_total is the total PD across the wire." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Potential Divider Wire: Linear Voltage Drop</text><rect x="30" y="55" width="340" height="25" rx="4" fill="#1e293b" stroke="#495057" stroke-width="2"/><text x="30" y="43" font-family="sans-serif" font-size="11" fill="#1864ab">0 V</text><text x="365" y="43" font-family="sans-serif" font-size="11" fill="#1864ab">E (V)</text><line x1="30" y1="67" x2="370" y2="67" stroke="#339af0" stroke-width="1.5" stroke-dasharray="3,3"/><text x="200" y="43" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">&#9660; V increases uniformly &#9654;</text><circle cx="200" cy="67" r="6" fill="#fa5252"/><line x1="200" y1="73" x2="200" y2="110" stroke="#fa5252" stroke-width="2"/><text x="215" y="100" font-family="sans-serif" font-size="11" fill="#c92a2a">V(x) = E&#183;x/L</text><text x="200" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#495057" text-anchor="middle">Potential gradient = E/L (V/m)</text><text x="200" y="150" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">At any point x from the zero end: V = (E/L) x</text><text x="200" y="167" font-family="sans-serif" font-size="11" fill="#868e96" text-anchor="middle">Uniform wire: same resistance per metre everywhere</text></svg>', caption: 'Uniform resistance wire: potential increases linearly from 0 at one end to E at the other; V(x) = E·x/L' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "The Potentiometer A potentiometer consists of a long uniform <strong>resistance</strong> wire (typically 1 m of nichrome or constantan) connected across a battery." },
      { text: "A second circuit (containing the component to be tested) is connected between one end of the wire and a sliding contact (jockey)" },
      { text: "By moving the jockey along the wire, the output <strong>voltage</strong> can be varied continuously from 0 to E (the battery e.m.f.) with no <strong>current</strong> flowing in the output circuit at balance." },
      { text: "This makes it more accurate than a <strong>voltage</strong> divider with fixed resistors because it does not load the circuit being tested." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Using a Potentiometer to Compare E.M.F.s In the null-deflection potentiometer experiment: a galvanometer (or sensitive microammeter) is connected between the jockey and the component being tested." },
      { text: "The jockey is moved until the galvanometer reads zero — this is the balance point." },
      { text: "At balance, no <strong>current</strong> flows, so there is no <strong>internal resistance</strong> drop in the cell under test." },
      { text: "The length to balance (L_balance) is proportional to the e.m.f. of the cell: ε ∝ L." },
      { text: "This allows accurate comparison of e.m.f.s without drawing any <strong>current</strong>." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A 1.0 m potentiometer wire is connected to a 2.0 V cell." },
      { text: "The balance length for an unknown cell is found to be 65 cm." },
      { text: "What is the unknown e.m.f.? The potential gradient = 2.0/1.0 = 2.0 V/m." },
      { text: "At balance: ε_unknown = potential gradient × balance length = 2.0 × 0.65 = 1.3 V." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Connection to <strong>Resistivity</strong> Since R = ρL/A, a longer conductor has higher <strong>resistance</strong>." },
      { text: "In the context of the potential divider wire, doubling the length doubles the <strong>resistance</strong>, halves the <strong>current</strong> (for the same applied <strong>voltage</strong>), but the <strong>voltage</strong> per unit length (potential gradient) remains the same." },
      { text: "This is why the potentiometer provides a stable, uniform potential gradient as long as the wire is uniform and the driving <strong>current</strong> is constant." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Principle', text: 'For a uniform <strong>resistance</strong> wire with constant <strong>current</strong>: potential gradient = V/L = constant. At any point x from the zero end: V(x) = (V_total/L) × x. The potentiometer uses this to provide a smoothly varying output <strong>voltage</strong>.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Explain why the PD varies linearly along a uniform <strong>resistance</strong> wire", checked: false },
      { text: "Calculate the potential at any point along a potentiometer wire", checked: false },
      { text: "Describe how a potentiometer is used to compare e.m.f.s using the null-deflection method", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "For a uniform resistive wire, R ∝ L, so PD drops linearly along it: V(x) = E·x/L. Potential gradient = E/L (V/m) is constant. The potentiometer uses a long uniform wire as a continuously variable potential divider. Balance point (null deflection) occurs when output PD equals the e.m.f. being measured. ε ∝ L_balance." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="280" fill="#0f172a" rx="8"/><text x="200" y="22" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Light Sensor Circuit — LDR in Potential Divider</text><rect x="18" y="90" width="24" height="80" rx="4" fill="#532407" stroke="#e67700" stroke-width="2"/><text x="30" y="87" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">+</text><text x="30" y="183" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">−</text><text x="30" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700" text-anchor="middle">E</text><line x1="30" y1="60" x2="30" y2="90" stroke="#212529" stroke-width="2"/><line x1="30" y1="60" x2="150" y2="60" stroke="#212529" stroke-width="2"/><rect x="150" y="45" width="80" height="30" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="190" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">R_fixed</text><line x1="230" y1="60" x2="330" y2="60" stroke="#212529" stroke-width="2"/><line x1="330" y1="60" x2="330" y2="100" stroke="#212529" stroke-width="2"/><rect x="310" y="100" width="40" height="68" rx="4" fill="#44370a" stroke="#fab005" stroke-width="2"/><text x="330" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e67700" text-anchor="middle">LDR</text><text x="322" y="148" font-family="sans-serif" font-size="14" fill="#fab005" text-anchor="middle">&#9728;</text><line x1="330" y1="168" x2="330" y2="210" stroke="#212529" stroke-width="2"/><line x1="30" y1="170" x2="30" y2="210" stroke="#212529" stroke-width="2"/><line x1="30" y1="210" x2="330" y2="210" stroke="#212529" stroke-width="2"/><line x1="352" y1="108" x2="378" y2="108" stroke="#fa5252" stroke-width="2" stroke-dasharray="4,3"/><line x1="352" y1="200" x2="378" y2="200" stroke="#fa5252" stroke-width="2" stroke-dasharray="4,3"/><line x1="378" y1="108" x2="378" y2="200" stroke="#fa5252" stroke-width="2"/><text x="393" y="158" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a" text-anchor="middle">V_out</text><text x="185" y="230" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Bright: R_LDR ↓ → V_out ↓   |   Dark: R_LDR ↑ → V_out ↑</text><text x="185" y="250" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">V_out = E × R_LDR / (R_fixed + R_LDR)</text><text x="185" y="270" font-family="sans-serif" font-size="10" fill="#868e96" text-anchor="middle">Streetlight: turns ON when V_out exceeds threshold voltage</text></svg>', caption: 'Light sensor circuit: LDR in series with R_fixed across supply E. V_out taken across LDR. Bright light → R_LDR ↓ → V_out ↓. Darkness → R_LDR ↑ → V_out ↑. Used in automatic streetlight controllers that switch on when V_out exceeds a set threshold.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example — Comparing Two E.M.F.s', text: 'A 1.5 m potentiometer wire is driven by a 3.0 V supply. Cell A balances at 60.0 cm; cell B balances at 90.0 cm. Cell A has e.m.f. = 1.20 V. Find the e.m.f. of cell B.<br><br>Step 1 — Potential gradient: V/L = 3.0 / 1.5 = 2.0 V m⁻¹<br>Step 2 — Verify cell A: ε_A = 2.0 × 0.600 = 1.20 V ✓<br>Step 3 — Cell B: ε_B = 2.0 × 0.900 = 1.80 V<br><br>By ratio: ε_B / ε_A = L_B / L_A → ε_B = 1.20 × (90.0 / 60.0) = 1.80 V<br><br>At balance, zero <strong>current</strong> flows through the test cell so <strong>internal resistance</strong> causes no <strong>voltage</strong> drop — this is why the potentiometer gives a more accurate e.m.f. reading than a voltmeter.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip — Potentiometer Balance Condition', text: 'Always state: at balance (null deflection) no <strong>current</strong> flows in the test branch, so <strong>internal resistance</strong> error is eliminated. The ratio ε₁/ε₂ = L₁/L₂ holds directly. If the driver cell <strong>voltage</strong> increases, the potential gradient increases and balance lengths decrease proportionally. If asked why a potentiometer is preferable to a voltmeter for measuring e.m.f.: a voltmeter draws <strong>current</strong> → terminal <strong>voltage</strong> < e.m.f. due to Ir drop; the potentiometer draws zero <strong>current</strong> at balance → measures true e.m.f.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Potentiometer Principle",
        text: "For a uniform wire, V/L = constant = k (voltage per unit length). If you want to compare two EMFs using the null-deflection method, connect them to opposite ends of the potentiometer wire and find where the galvanometer reads zero \u2014 at that position, E\u2081/L\u2081 = E\u2082/L\u2082."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Why Null-Deflection is Accurate",
        text: "The potentiometer method measures EMF without drawing current (galvanometer at balance shows zero current), eliminating the error from internal resistance. This is more accurate than a direct voltmeter measurement."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Why does potential vary linearly along a uniform <strong>resistance</strong> wire? What is the potential gradient formula?' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'Describe the null-deflection method for comparing e.m.f.s using a potentiometer.' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'A 1 m wire is driven by 2.0 V. Balance length for an unknown cell is 65 cm. Find its e.m.f.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
