export const note_physics_2_7_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define <strong>drift velocity</strong>; derive and apply I = nAev_d to calculate <strong>current</strong>, number density, and <strong>drift velocity</strong> in conductors" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Current</strong> & <strong>Drift Velocity</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "Electric <strong>current</strong> is the flow of charge carriers." },
      { text: "In a metallic conductor, these carriers are free electrons." },
      { text: "The electrons do not travel in straight lines at high speed — they constantly collide with positive lattice ions and change direction." },
      { text: "The net movement in the direction of the electric field is called <strong>drift velocity</strong> (v_d)" },
      { text: "It is the average velocity of electrons along the conductor, and it is surprisingly slow — typically a fraction of a millimetre per second." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Deriving I = nAev_d Consider a conductor of cross-sectional area A, carrying n free electrons per unit volume (the number density of charge carriers)" },
      { text: "In time Δt, electrons drift a distance v_d × Δt along the conductor." },
      { text: "The volume of conductor swept = A × v_d × Δt." },
      { text: "Number of electrons in this volume = n × A × v_d × Δt." },
      { text: "Charge moved = n × A × v_d × Δt × e, where e = 1.6 × 10⁻¹⁹ C (elementary charge)" },
      { text: "<strong>Current</strong> I = charge/time = nAev_d × Δt / Δt = nAev_d." },
      { text: "Therefore: I = nAev_d." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Drift Velocity in a Conductor</text><rect x="30" y="65" width="340" height="60" rx="6" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="20" y="95" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">+</text><text x="385" y="95" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">-</text><circle cx="80" cy="95" r="6" fill="#fa5252"/><circle cx="130" cy="88" r="6" fill="#fa5252"/><circle cx="180" cy="100" r="6" fill="#fa5252"/><circle cx="230" cy="85" r="6" fill="#fa5252"/><circle cx="280" cy="97" r="6" fill="#fa5252"/><circle cx="330" cy="90" r="6" fill="#fa5252"/><line x1="80" y1="95" x2="65" y2="95" stroke="#339af0" stroke-width="2"/><line x1="130" y1="88" x2="115" y2="88" stroke="#339af0" stroke-width="2"/><line x1="180" y1="100" x2="165" y2="100" stroke="#339af0" stroke-width="2"/><line x1="230" y1="85" x2="215" y2="85" stroke="#339af0" stroke-width="2"/><line x1="280" y1="97" x2="265" y2="97" stroke="#339af0" stroke-width="2"/><line x1="330" y1="90" x2="315" y2="90" stroke="#339af0" stroke-width="2"/><text x="200" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">I = nAev_d</text><text x="200" y="162" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">electrons drift slowly (~mm/s) opposite to conventional current</text></svg>', caption: 'Free electrons drift slowly (v_d) in one direction; I = nAev_d' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Variables in I = nAev_d: n = number density of charge carriers (m⁻³) — depends on material (copper ≈ 8.5 × 10²⁸ m⁻³, semiconductor much lower)" },
      { text: "A = cross-sectional area (m²) — thicker wire → smaller v_d for same I. e = elementary charge = 1.6 × 10⁻¹⁹ C. v_d = <strong>drift velocity</strong> (m/s)" },
      { text: "The formula shows that for a fixed <strong>current</strong>: if A is smaller (thinner wire), v_d must be greater; if n is smaller (semiconductor), v_d must be greater." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example Calculate the <strong>drift velocity</strong> of electrons in a copper wire of diameter 1.0 mm carrying a <strong>current</strong> of 2.0 A." },
      { text: "(Given: n for copper = 8.5 × 10²⁸ m⁻³, e = 1.6 × 10⁻¹⁹ C.) A = π(d/2)² = π(0.5 × 10⁻³)² = π × 2.5 × 10⁻⁷ = 7.85 × 10⁻⁷ m². v_d = I/(nAe) = 2.0 / (8.5 × 10²⁸ × 7.85 × 10⁻⁷ × 1.6 × 10⁻¹⁹) = 2.0 / (1.07 × 10⁴) ≈ 1.9 × 10⁻⁴ m/s ≈ 0.19 mm/s." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Drift Velocity</strong> vs Signal Speed Although <strong>drift velocity</strong> is very small (fractions of a mm/s), the lights come on instantly when you press a switch." },
      { text: "This is because the electric field propagates through the circuit at close to the speed of light (~3 × 10⁸ m/s)" },
      { text: "The field pushes all free electrons in the wire simultaneously — like pushing water through a full pipe." },
      { text: "It is not individual electrons that travel from switch to bulb, but the disturbance (field) that does." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Effect of Material on <strong>Drift Velocity</strong> In metals, n is large (~10²⁸–10²⁹ m⁻³) so <strong>drift velocity</strong> is small for typical currents." },
      { text: "In semiconductors such as silicon, n is much smaller (can be varied by doping — adding impurities)" },
      { text: "A smaller n means a much larger <strong>drift velocity</strong> for the same <strong>current</strong>." },
      { text: "In insulators, n is essentially zero (no free charge carriers) so no <strong>current</strong> flows regardless of applied <strong>voltage</strong>." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formula', text: 'I = nAev_d. n = number density of charge carriers (m⁻³); A = cross-sectional area (m²); e = 1.6 × 10⁻¹⁹ C; v_d = <strong>drift velocity</strong> (m/s). Rearrange for v_d: v_d = I/(nAe).' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Define <strong>drift velocity</strong> and explain why it is much smaller than the speed of an electrical signal", checked: false },
      { text: "State the equation I = nAev_d and identify each variable with its unit", checked: false },
      { text: "Calculate <strong>drift velocity</strong> given <strong>current</strong>, wire dimensions, and number density", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Drift velocity</strong> (v_d) is the average net velocity of charge carriers along a conductor. I = nAev_d, where n is number density (m⁻³), A is cross-sectional area, e is elementary charge (1.6×10⁻¹⁹ C). <strong>Drift velocity</strong> is very small (~mm/s) but the electric field propagates at ~c. Smaller n or smaller A → larger v_d for same <strong>current</strong>." } },
    { id: 'enr-svg-potdiv', type: 'svg', data: { svg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><rect width="380" height="300" fill="#0f172a"/><text x="190" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Potential Divider Circuit</text><!-- Battery --><line x1="190" y1="35" x2="190" y2="55" stroke="#212529" stroke-width="2"/><line x1="175" y1="55" x2="205" y2="55" stroke="#212529" stroke-width="3"/><line x1="180" y1="62" x2="200" y2="62" stroke="#212529" stroke-width="1.5"/><line x1="190" y1="62" x2="190" y2="75" stroke="#212529" stroke-width="2"/><text x="215" y="60" font-family="sans-serif" font-size="12" fill="#212529">Vs</text><!-- Top wire --><line x1="190" y1="35" x2="100" y2="35" stroke="#212529" stroke-width="2"/><line x1="100" y1="35" x2="100" y2="85" stroke="#212529" stroke-width="2"/><!-- R1 resistor (top) --><rect x="82" y="85" width="36" height="60" rx="4" fill="#1e293b" stroke="#495057" stroke-width="2"/><text x="100" y="120" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">R1</text><!-- Wire between R1 and R2 --><line x1="100" y1="145" x2="100" y2="175" stroke="#212529" stroke-width="2"/><!-- R2 resistor (bottom) --><rect x="82" y="175" width="36" height="60" rx="4" fill="#1e293b" stroke="#e67700" stroke-width="2"/><text x="100" y="210" font-family="sans-serif" font-size="13" font-weight="bold" fill="#e67700" text-anchor="middle">R2</text><!-- Bottom wire --><line x1="100" y1="235" x2="100" y2="265" stroke="#212529" stroke-width="2"/><line x1="100" y1="265" x2="190" y2="265" stroke="#212529" stroke-width="2"/><line x1="190" y1="265" x2="190" y2="75" stroke="#212529" stroke-width="2"/><!-- Vout terminal --><line x1="100" y1="175" x2="260" y2="175" stroke="#e67700" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="100" y1="235" x2="260" y2="235" stroke="#e67700" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="260" cy="175" r="4" fill="#e67700"/><circle cx="260" cy="235" r="4" fill="#e67700"/><line x1="260" y1="175" x2="260" y2="235" stroke="#e67700" stroke-width="1.5"/><!-- Vout label --><text x="275" y="210" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e67700">V_out</text><!-- Formula --><text x="190" y="292" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">V_out = Vs × R2 / (R1 + R2)</text><!-- Arrows annotation --><text x="30" y="120" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">R2↑</text><text x="30" y="133" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Vout↑</text><text x="30" y="210" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">R2↓</text><text x="30" y="223" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">Vout↓</text></svg>', caption: 'Potential Divider: V_out = Vs × R2/(R1+R2)' } },
    { id: 'enr-worked-potdiv', type: 'callout', data: { style: 'worked', title: 'Temperature Sensor (NTC <strong>Thermistor</strong>)', text: 'Vs = 6 V, R1 = 4.7 kΩ fixed resistor, R2 = NTC <strong>thermistor</strong>.\n\nAt 20°C: R2 = 10 kΩ → V_out = 6 × 10/(4.7 + 10) = 60/14.7 = 4.08 V\n\nAt 80°C: R2 = 1 kΩ → V_out = 6 × 1/(4.7 + 1) = 6/5.7 = 1.05 V\n\nCalibrate by measuring V_out vs temperature. Complete digital thermometer for £1 of components.' } },
    { id: 'enr-tip-potdiv', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Potential Divider', text: 'V_out = Vs × R_bottom / (R_top + R_bottom). R_bottom increases → V_out increases.\n\nNTC at bottom: hot → low R → low V_out.\nNTC at top: hot → low R → high V_out.\n\nAlways state which configuration. Don\'t confuse R_top and R_bottom in the formula.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Derive the equation I = nAev_d from first principles.' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'A copper wire (diameter 1 mm, n = 8.5×10²⁸ m⁻³) carries 2 A. Calculate the <strong>drift velocity</strong>.' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'Why do lights come on instantly despite <strong>drift velocity</strong> being tiny?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
