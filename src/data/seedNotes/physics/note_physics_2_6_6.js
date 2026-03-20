export const note_physics_2_6_6 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define electrical power; derive and apply P = IV, P = I²R, and P = V²/R; calculate electrical energy transferred; compare power dissipation in series and parallel circuits" } },
    { id: 'head-1', type: 'heading', data: { text: "Electrical Power", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "Electrical power is the rate at which electrical energy is transferred or dissipated." },
      { text: "It is measured in watts (W), where 1 W = 1 J s⁻¹." },
      { text: "The basic formula is P = IV, where P is power (W), I is <strong>current</strong> (A), and V is <strong>potential difference</strong> (V)" },
      { text: "This formula applies to any electrical component — a resistor, a motor, a bulb, or a battery — and tells you how many joules of energy are transferred per second." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Deriving the Three Power Formulae Starting from P = IV and using <strong>Ohm's Law</strong> V = IR, we can derive two more useful forms: (1) Substituting V = IR into P = IV: P = I × (IR) = I²R." },
      { text: "This is most useful when <strong>current</strong> and <strong>resistance</strong> are known." },
      { text: "(2) Making I the subject: I = V/R, and substituting into P = IV: P = (V/R) × V = V²/R." },
      { text: "This is most useful when <strong>voltage</strong> and <strong>resistance</strong> are known." },
      { text: "All three formulae give power in watts." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Three Power Formulae (Power Triangle)</text><polygon points="200,35 100,150 300,150" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="200" y="82" font-family="sans-serif" font-size="18" font-weight="bold" fill="#1864ab" text-anchor="middle">P</text><text x="140" y="145" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1864ab" text-anchor="middle">I</text><text x="260" y="145" font-family="sans-serif" font-size="16" font-weight="bold" fill="#1864ab" text-anchor="middle">V</text><text x="60" y="100" font-family="sans-serif" font-size="12" fill="#495057">P = IV</text><text x="290" y="100" font-family="sans-serif" font-size="12" fill="#495057">P = I&#178;R</text><text x="168" y="168" font-family="sans-serif" font-size="12" fill="#495057">P = V&#178;/R</text><text x="200" y="48" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">also: P = I&#178;R and P = V&#178;/R</text></svg>', caption: 'Three power formulae: P = IV, P = I²R (use when I and R known), P = V²/R (use when V and R known)' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Electrical Energy The energy transferred by an electrical component in time t is: W = Pt = IVt (joules)" },
      { text: "Since P = I²R and P = V²/R, we also have W = I²Rt and W = V²t/R." },
      { text: "The kilowatt-hour (kWh) is a practical unit of energy used by electricity companies: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J." },
      { text: "To find the cost of electricity: cost = power (kW) × time (hours) × price per kWh." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Comparing Power in Series vs Parallel When resistors are in series, the same <strong>current</strong> flows through both: P = I²R, so the larger resistor dissipates more power." },
      { text: "When resistors are in parallel, the same <strong>voltage</strong> appears across both: P = V²/R, so the smaller resistor dissipates more power." },
      { text: "This is why household appliances are connected in parallel (each gets the full supply <strong>voltage</strong>) and a high-power device (small R) draws more <strong>current</strong> than a low-power device." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example 1 A 60 W light bulb operates from a 240 V supply." },
      { text: "Find the <strong>current</strong> through it and its <strong>resistance</strong>." },
      { text: "P = IV, so I = P/V = 60/240 = 0.25 A." },
      { text: "R = V/I = 240/0.25 = 960 Ω." },
      { text: "Alternatively, R = V²/P = 240²/60 = 57600/60 = 960 Ω ✓." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example 2 A 4 Ω resistor carries a <strong>current</strong> of 3 A." },
      { text: "Find the power dissipated and the energy dissipated in 2 minutes." },
      { text: "P = I²R = 3² × 4 = 9 × 4 = 36 W." },
      { text: "W = Pt = 36 × (2 × 60) = 36 × 120 = 4320 J." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Which Formula to Use', text: 'P = IV: when both <strong>current</strong> and <strong>voltage</strong> are known. P = I²R: when <strong>current</strong> and <strong>resistance</strong> are known (no need to find V first). P = V²/R: when <strong>voltage</strong> and <strong>resistance</strong> are known (no need to find I first). All three give the same answer for an ohmic conductor.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State the three formulae for electrical power and derive each from P = IV and V = IR", checked: false },
      { text: "Calculate power dissipated in a resistor given different combinations of I, V, R", checked: false },
      { text: "Calculate electrical energy transferred in a given time", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Electrical power P = IV = I²R = V²/R (unit: W = J/s). Choose the formula to match the given quantities. Energy W = Pt = IVt = I²Rt = V²t/R (joules). In series: P ∝ R (larger R dissipates more). In parallel: P ∝ 1/R (smaller R dissipates more). Practical unit: 1 kWh = 3.6 MJ." } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Real-World Application: Electric Kettle', text: 'A 2200 W kettle operates on the 230 V mains. (a) Find the <strong>current</strong> drawn: P = IV → I = P/V = 2200/230 = 9.57 A. (b) Find the <strong>resistance</strong> of the heating element: R = V/I = 230/9.57 = 24.0 Ω, or using R = V²/P = 230²/2200 = 24.0 Ω ✓. (c) Energy used in 3 minutes: W = Pt = 2200 × 180 = 396 000 J = 396 kJ. (d) Cost at 30p per kWh: energy = 2.2 × (3/60) = 0.11 kWh; cost = 0.11 × 30 = 3.3p. Real-world context: ovens, hair dryers, and immersion heaters all exploit I²R heating in a resistive element. High-power appliances have low <strong>resistance</strong> so they draw large currents at mains <strong>voltage</strong>.' } },
    { id: 'enr-worked-2', type: 'callout', data: { style: 'worked', title: 'Physics Application: Series vs Parallel Power Dissipation', text: 'R₁ = 6 Ω and R₂ = 3 Ω connected to a 12 V supply. Compare power dissipated in each configuration. IN SERIES (same <strong>current</strong> I throughout): total R = 9 Ω; I = 12/9 = 1.33 A. P₁ = I²R₁ = 1.33² × 6 = 10.7 W. P₂ = I²R₂ = 1.33² × 3 = 5.3 W → larger R dissipates more power. IN PARALLEL (same PD V = 12 V across each): P₁ = V²/R₁ = 144/6 = 24.0 W. P₂ = V²/R₂ = 144/3 = 48.0 W → smaller R dissipates more power (double). Real-world implication: household appliances are wired in parallel so each receives the full 230 V. A 2 kW heater has a much lower <strong>resistance</strong> (≈ 26 Ω) than a 60 W lamp (≈ 880 Ω).' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Formula Selection and Series/Parallel Power', text: 'Match the formula to the given quantities: P = IV when both I and V are known; P = I²R when I and R are known (avoids finding V first); P = V²/R when V and R are known (avoids finding I first). Most common error: using the total supply <strong>voltage</strong> instead of the PD across a single component in a series circuit. Key contrast to memorise — in series: larger R receives more power (P = I²R, same I); in parallel: smaller R receives more power (P = V²/R, same V). These two results are exact opposites.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Derive P = I²R and P = V²/R from P = IV and V = IR.' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'Two resistors 2 Ω and 8 Ω carry the same <strong>current</strong>. Which dissipates more power? Now they are in parallel across the same <strong>voltage</strong> — which dissipates more?' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'A 60 W bulb runs on 240 V. Find the <strong>current</strong> and <strong>resistance</strong>.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
