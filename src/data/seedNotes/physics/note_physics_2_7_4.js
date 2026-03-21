export const note_physics_2_7_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Derive and apply the potential divider equation V_out = V_in × R₂/(R₁+R₂); design potential divider circuits with LDRs and thermistors; explain how sensor circuits operate" } },
    { id: 'head-1', type: 'heading', data: { text: "Potential Dividers", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "A potential divider is a circuit that uses two (or more) resistors in series across a <strong>voltage</strong> supply to produce a desired output <strong>voltage</strong>." },
      { text: "It is one of the most widely used circuit configurations in electronics and sensor applications." },
      { text: "The output <strong>voltage</strong> is taken across one of the resistors and depends on the ratio of the resistances." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Deriving the Potential Divider Equation Two resistors R₁ and R₂ are in series across a supply <strong>voltage</strong> V_in." },
      { text: "The same <strong>current</strong> flows through both: I = V_in / (R₁ + R₂)" },
      { text: "The output <strong>voltage</strong> V_out is taken across R₂: V_out = I × R₂ = V_in × R₂ / (R₁ + R₂)" },
      { text: "Similarly, the <strong>voltage</strong> across R₁ is: V₁ = V_in × R₁ / (R₁ + R₂)" },
      { text: "Note: the output fraction equals the fraction of total <strong>resistance</strong> represented by R₂." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Potential Divider Circuit</text><line x1="80" y1="40" x2="80" y2="155" stroke="#212529" stroke-width="2"/><line x1="80" y1="40" x2="160" y2="40" stroke="#212529" stroke-width="2"/><rect x="160" y="25" width="80" height="30" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="200" y="45" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">R&#8321;</text><line x1="240" y1="40" x2="320" y2="40" stroke="#212529" stroke-width="2"/><line x1="320" y1="40" x2="320" y2="80" stroke="#212529" stroke-width="2"/><rect x="260" y="80" width="80" height="30" rx="4" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="300" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2b8a3e" text-anchor="middle">R&#8322;</text><line x1="260" y1="95" x2="200" y2="95" stroke="#fa5252" stroke-width="2" stroke-dasharray="4,3"/><text x="180" y="90" font-family="sans-serif" font-size="11" fill="#c92a2a">V_out</text><line x1="320" y1="110" x2="320" y2="155" stroke="#212529" stroke-width="2"/><line x1="320" y1="155" x2="80" y2="155" stroke="#212529" stroke-width="2"/><text x="55" y="100" font-family="sans-serif" font-size="12" fill="#495057">V_in</text><text x="200" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2b8a3e" text-anchor="middle">V_out = V_in &#215; R&#8322;/(R&#8321;+R&#8322;)</text><text x="200" y="162" font-family="sans-serif" font-size="11" fill="#868e96" text-anchor="middle">V_out taken across R&#8322;</text></svg>', caption: 'Potential divider: V_out = V_in × R₂/(R₁+R₂) — output is fraction of input proportional to R₂' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example R₁ = 8 Ω, R₂ = 2 Ω, V_in = 10 V." },
      { text: "Find V_out across R₂." },
      { text: "V_out = 10 × 2/(8+2) = 10 × 2/10 = 2 V." },
      { text: "The <strong>voltage</strong> is divided in the same ratio as the resistances: R₁:R₂ = 8:2 = 4:1, so V₁:V₂ = 4:1, giving V₁ = 8 V and V₂ = 2 V." },
      { text: "Check: 8 + 2 = 10 V ✓." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Variable Potential Divider (Rheostat) If R₂ is replaced by a variable resistor (potentiometer/rheostat), V_out can be varied continuously between 0 V (R₂ = 0) and V_in (R₂ = ∞, meaning R₁ ≈ 0 in comparison)" },
      { text: "This is how volume controls and many analogue controls work." },
      { text: "A sliding contact potentiometer divides the <strong>resistance</strong> wire into R₁ (above the slider) and R₂ (below), giving a continuously variable output." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Sensor Circuits with LDRs and Thermistors A light-dependent resistor (LDR) has high <strong>resistance</strong> in the dark and low <strong>resistance</strong> in bright light." },
      { text: "A negative temperature coefficient (NTC) <strong>thermistor</strong> has high <strong>resistance</strong> when cold and low <strong>resistance</strong> when hot." },
      { text: "By placing these in a potential divider circuit as R₁ or R₂, V_out changes with the environmental condition: LDR as R₁ and fixed R₂: V_out increases in bright light (R₁ decreases, so more of V_in appears across R₂)" },
      { text: "LDR as R₂: V_out decreases in bright light." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="160" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">LDR Sensor Circuit Behaviour</text><rect x="15" y="32" width="180" height="115" rx="6" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="105" y="53" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">LDR as R&#8321; (top)</text><text x="105" y="70" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Bright light &#8594; R_LDR &#8595;</text><text x="105" y="86" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">V_out (across R&#8322;) &#8593;</text><text x="105" y="103" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Dark &#8594; R_LDR &#8593;</text><text x="105" y="120" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">V_out &#8595;</text><text x="105" y="138" font-family="sans-serif" font-size="10" fill="#868e96" text-anchor="middle">e.g. automatic lights sensor</text><rect x="205" y="32" width="180" height="115" rx="6" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="295" y="53" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Thermistor as R&#8321; (top)</text><text x="295" y="70" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">Hot &#8594; R_therm &#8595;</text><text x="295" y="86" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">V_out (across R&#8322;) &#8593;</text><text x="295" y="103" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">Cold &#8594; R_therm &#8593;</text><text x="295" y="120" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">V_out &#8595;</text><text x="295" y="138" font-family="sans-serif" font-size="10" fill="#868e96" text-anchor="middle">e.g. thermostat circuit</text></svg>', caption: 'LDR and thermistor sensor circuits: V_out responds to changes in light/temperature' } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Loading Effect A potential divider circuit gives the correct output <strong>voltage</strong> only when no <strong>current</strong> is drawn from the output (open circuit)" },
      { text: "When a load resistor is connected across R₂, it forms a parallel combination with R₂, reducing its effective <strong>resistance</strong> and therefore reducing V_out." },
      { text: "This is called the loading effect." },
      { text: "To minimise it, the load <strong>resistance</strong> should be much larger than R₂." },
      { text: "In practice, high-impedance devices (e.g. voltmeters, op-amp inputs) are used as loads to avoid this problem." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formula', text: 'V_out = V_in × R₂/(R₁+R₂). V_out increases as R₂ increases relative to R₁. The voltages divide in the same ratio as the resistances.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Derive and apply V_out = V_in × R₂/(R₁+R₂)", checked: false },
      { text: "Describe how an LDR or <strong>thermistor</strong> in a potential divider circuit acts as a sensor", checked: false },
      { text: "Explain the loading effect and how to minimise it", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Potential divider: V_out = V_in × R₂/(R₁+R₂). <strong>Voltage</strong> divides in ratio of resistances. With a variable resistor: V_out varies 0 to V_in. LDR (light ↑ → R ↓) or <strong>thermistor</strong> (temp ↑ → R ↓) in divider circuit makes V_out change with environment. Loading reduces V_out — minimise by using high-impedance loads." } },
    { id: 'enr-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example — LDR Sensor Calculation', text: 'An LDR (R₁, top) is in a potential divider with fixed R₂ = 600 Ω across V_in = 9.0 V. V_out is taken across R₂.<br><br>Dim light (R_LDR = 2 400 Ω):<br>V_out = 9.0 × 600 / (2 400 + 600) = 5 400 / 3 000 = 1.80 V<br><br>Bright light (R_LDR = 400 Ω):<br>V_out = 9.0 × 600 / (400 + 600) = 5 400 / 1 000 = 5.40 V<br><br>As light increases, R_LDR ↓ → more V_in dropped across R₂ → V_out rises. A comparator connected to V_out can switch off an artificial lamp once V_out exceeds a reference <strong>voltage</strong>, forming an automatic light controller.' } },
    { id: 'enr-worked-ev', type: 'callout', data: { style: 'worked', title: 'Real-World Application — Electric Vehicle Battery Pack', text: 'An EV battery pack: ε = 360 V, <strong>internal resistance</strong> r = 0.8 Ω. Motor load: R = 7.2 Ω.<br><br>(a) <strong>Current</strong>: I = ε / (R + r) = 360 / 8.0 = 45 A<br>(b) Terminal <strong>voltage</strong>: V = ε − Ir = 360 − (45 × 0.8) = 360 − 36 = 324 V<br>(c) Useful power to motor: P = I²R = 45² × 7.2 = 14 580 W ≈ 14.6 kW<br>(d) Total power from source: P_total = εI = 360 × 45 = 16 200 W<br>(e) Efficiency: η = 14 580 / 16 200 = 0.90 = 90%<br><br>The 10% loss (1 620 W) is dissipated as heat in <strong>internal resistance</strong> r. Minimising r is critical for maximising EV range — this drives the use of lithium-ion cells with very low r (< 0.1 Ω per cell).' } },
    { id: 'enr-tip-2', type: 'callout', data: { style: 'tip', title: 'Exam Tip — Potential Divider Common Pitfalls', text: 'Three classic mistakes: (1) Output across wrong resistor — re-read which component V_out is taken across; if across R₁ then V_out = V_in × R₁/(R₁+R₂). (2) Loading effect — connecting load R_L across R₂ gives effective <strong>resistance</strong> R₂R_L/(R₂+R_L) which is less than R₂, so V_out falls below the unloaded value. (3) Sensor direction — LDR as R₁ (top): more light → R₁ ↓ → V_out (across R₂) ↑. LDR as R₂: more light → R₂ ↓ → V_out ↓. Always sketch the circuit before deciding the direction of change.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Loading Effect in Potential Dividers",
        text: "When you connect a load resistor R_L across the output of a potential divider, the effective output resistance drops and the output voltage falls below the no-load value V_out = V_in \u00d7 R\u2082/(R\u2081+R\u2082). The lower the load resistance, the greater the voltage drop. This is critical in practical applications like sensor circuits."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Recognizing Loading",
        text: "If an exam question asks 'what happens when a load is connected?', state: (1) effective output resistance decreases, (2) output voltage decreases, (3) output current increases, (4) load current depends on load resistance."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Derive the potential divider equation V_out = V_in × R₂/(R₁+R₂).' },
    { id: 'cue-2', blockId: 'para-6', prompt: 'Describe how an LDR in a potential divider circuit can be used as a light sensor. What happens to V_out when light increases?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'What is the loading effect in a potential divider? How is it minimised?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
