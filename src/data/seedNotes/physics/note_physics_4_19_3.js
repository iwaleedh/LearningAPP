export const note_physics_4_19_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the experimental procedure for Core Practical 11; plot and analyse V-t and Q-t graphs for <strong>capacitor</strong> charging and discharging; determine the <strong>time constant</strong> RC; identify sources of error" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 11: Investigating <strong>Capacitor</strong> Charge & Discharge", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "This core practical investigates how the voltage across a <strong>capacitor</strong> changes with time as it charges (through a resistor from a battery) and discharges (through a resistor)" },
      { text: "The voltage across a charging or discharging <strong>capacitor</strong> follows an exponential curve characterised by the <strong>time constant</strong> τ = RC." },
      { text: "By measuring V vs t, you can determine τ and hence C (if R is known) or verify the exponential form of the decay." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Theory: Charge and Discharge Equations During discharge from initial voltage V₀ through resistance R: V = V₀ e⁻ᵗ/ᴿᶜ. The charge: Q = Q₀ e⁻ᵗ/ᴿᶜ. The current: I = I₀ e⁻ᵗ/ᴿᶜ. During charging (from 0V to supply voltage E through R): V_c = E(1 − e⁻ᵗ/ᴿᶜ). The <strong>time constant</strong> τ = RC is the time for V to fall to V₀/e ≈ 0.368 V₀ during discharge, or to rise to E(1 − 1/e) ≈ 0.632 E during charging. After 5τ, the <strong>capacitor</strong> is considered fully discharged or charged (to <1% of initial)." }] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Capacitor Charge and Discharge V-t Graphs</text><line x1="30" y1="155" x2="190" y2="155" stroke="#212529" stroke-width="2"/><line x1="30" y1="155" x2="30" y2="30" stroke="#212529" stroke-width="2"/><text x="110" y="172" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Time t</text><text x="14" y="93" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 14,93)">V / V</text><path d="M 30 155 Q 60 80 100 52 Q 130 38 180 34" stroke="#40c057" stroke-width="2.5" fill="none"/><text x="105" y="30" font-family="sans-serif" font-size="9" fill="#2b8a3e">Charging</text><line x1="30" y1="34" x2="180" y2="34" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,3"/><text x="22" y="37" font-family="sans-serif" font-size="8" fill="#868e96">E</text><line x1="210" y1="155" x2="380" y2="155" stroke="#212529" stroke-width="2"/><line x1="210" y1="155" x2="210" y2="30" stroke="#212529" stroke-width="2"/><text x="295" y="172" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Time t</text><path d="M 210 35 Q 240 60 270 100 Q 300 128 360 148" stroke="#fa5252" stroke-width="2.5" fill="none"/><text x="310" y="44" font-family="sans-serif" font-size="9" fill="#c92a2a">Discharging</text><line x1="210" y1="35" x2="380" y2="35" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,3"/><text x="203" y="38" font-family="sans-serif" font-size="8" fill="#868e96">V&#8320;</text><line x1="260" y1="35" x2="260" y2="100" stroke="#339af0" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="210" y1="100" x2="260" y2="100" stroke="#339af0" stroke-width="1.5" stroke-dasharray="4,3"/><text x="260" y="167" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">t = &#964;</text><text x="203" y="103" font-family="sans-serif" font-size="8" fill="#1864ab">0.37V&#8320;</text></svg>', caption: 'Charging (left): V rises exponentially to E. Discharging (right): V falls exponentially; at t = τ = RC, V = 0.37V₀' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Equipment and Circuit A <strong>capacitor</strong> C (e.g. 1000 μF or 470 μF electrolytic — observe correct polarity) in series with a resistor R (e.g. 10 kΩ), connected to a battery E and a switch S." },
      { text: "Connect a voltmeter (or data logger) across the <strong>capacitor</strong> to record V_c vs t." },
      { text: "For discharge: charge the <strong>capacitor</strong> fully with S closed towards the battery, then flip S to connect C and R in a closed loop." },
      { text: "For charging: begin with C discharged (short-circuit briefly) then flip S towards the battery." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure (1) Build the circuit with C, R, and power supply." },
      { text: "(2) For discharge: charge C to V₀, then switch to discharge." },
      { text: "Start a stopwatch or data logger simultaneously." },
      { text: "Record V every 10–30 seconds (depending on τ) until V is negligible." },
      { text: "(3) For charging: begin with C uncharged, connect to supply, record V_c at regular intervals." },
      { text: "(4) Plot V vs t." },
      { text: "(5) The <strong>time constant</strong> τ is the time for V to fall to 0.37 × V₀ (discharge) or rise to 0.63 × E (charging)" },
      { text: "Read τ from graph." },
      { text: "(6) Also plot ln V vs t for discharge: gradient = −1/(RC), which gives a more accurate determination of τ." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">ln V vs t: Linearised Discharge Graph</text><line x1="40" y1="150" x2="375" y2="150" stroke="#212529" stroke-width="2"/><line x1="40" y1="150" x2="40" y2="30" stroke="#212529" stroke-width="2"/><text x="207" y="167" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Time t / s</text><text x="18" y="90" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 18,90)">ln V</text><line x1="40" y1="38" x2="350" y2="145" stroke="#fa5252" stroke-width="2.5"/><text x="150" y="60" font-family="sans-serif" font-size="10" fill="#c92a2a">gradient = &#8722;1/(RC)</text><text x="160" y="75" font-family="sans-serif" font-size="10" fill="#c92a2a">y-intercept = ln V&#8320;</text><circle cx="80" cy="55" r="4" fill="#fa5252"/><circle cx="140" cy="78" r="4" fill="#fa5252"/><circle cx="200" cy="100" r="4" fill="#fa5252"/><circle cx="260" cy="122" r="4" fill="#fa5252"/><circle cx="315" cy="141" r="4" fill="#fa5252"/><text x="200" y="168" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Straight line confirms exponential decay; gradient gives &#8722;1/RC</text></svg>', caption: 'Plotting ln V vs t gives a straight line: gradient = −1/(RC) so RC = −1/gradient; y-intercept = ln V₀' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Determining the <strong>Time Constant</strong> Method 1 (graphical): Read off the time t when V = V₀ × 0.368 directly from the exponential graph." },
      { text: "Method 2 (logarithmic): Taking ln of V = V₀e⁻ᵗ/ᴿᶜ: ln V = ln V₀ − t/(RC)" },
      { text: "This is y = c + mx with gradient m = −1/(RC)" },
      { text: "Plot ln V vs t, draw best-fit line, find gradient g = −1/(RC), so RC = −1/g." },
      { text: "This method is more accurate because it converts the curved exponential into a straight line and uses all data points." },
      { text: "From RC and known R, calculate C = RC/R." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error Leakage current through the <strong>capacitor</strong> (all real electrolytic capacitors have some leakage) causes V to drop faster than expected — use high-quality capacitors." },
      { text: "Timer/data logger start: any delay between starting the discharge and starting the timer introduces a systematic error — use a data logger with a simultaneous trigger." },
      { text: "Voltmeter resistance: an analogue voltmeter has low resistance and draws current, affecting the discharge rate — use a digital voltmeter with very high input impedance (>10 MΩ)" },
      { text: "<strong>Capacitor</strong> tolerance: electrolytic capacitors often have ±20% tolerance — measure C independently if possible." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Equations', text: 'Discharge: V = V₀ e⁻ᵗ/ᴿᶜ; Q = Q₀ e⁻ᵗ/ᴿᶜ; I = I₀ e⁻ᵗ/ᴿᶜ. <strong>Time constant</strong> τ = RC. At t = τ: V = 0.37 V₀. Plot ln V vs t → straight line; gradient = −1/(RC). Charging: V_c = E(1 − e⁻ᵗ/ᴿᶜ).' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the experimental circuit for measuring <strong>capacitor</strong> charge and discharge, and state what is measured and how", checked: false },
      { text: "Determine the <strong>time constant</strong> from a V-t graph (reading 0.37V₀) and from a ln V-t graph (gradient = −1/RC)", checked: false },
      { text: "Identify two sources of error and explain how each is minimised", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Circuit: C in series with R; voltmeter (high impedance) across C; data logger records V vs t. Discharge: V = V₀ e⁻ᵗ/ᴿᶜ — <strong>exponential decay</strong>. <strong>Time constant</strong> τ = RC: time for V to fall to 0.37V₀. Determine τ: read from V-t graph, or plot ln V vs t → straight line; gradient = −1/(RC). After 5τ: effectively fully discharged. Errors: leakage current, voltmeter loading, timing delay." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a" rx="6"/><line x1="45" y1="165" x2="375" y2="165" stroke="#212529" stroke-width="2"/><line x1="45" y1="165" x2="45" y2="20" stroke="#212529" stroke-width="2"/><path d="M 45 28 C 85 28 115 68 160 108 C 195 135 265 158 370 163" stroke="#fa5252" stroke-width="2.5" fill="none"/><line x1="160" y1="28" x2="160" y2="165" stroke="#339af0" stroke-width="1.5" stroke-dasharray="5,3"/><text font-family="sans-serif"><tspan x="130" y="14" font-size="12" font-weight="bold" fill="#212529">Discharge: V vs t</tspan><tspan x="22" y="32" font-size="10" fill="#e03131">V₀</tspan><tspan x="152" y="182" font-size="11" fill="#1864ab">τ = RC</tspan><tspan x="167" y="108" font-size="10" fill="#339af0">← 0.37V₀</tspan><tspan x="345" y="158" font-size="10" fill="#495057">t →</tspan></text></svg>', caption: 'V falls exponentially; at t = τ = RC the voltage reaches 0.37V₀. Reading τ directly off this graph gives a first estimate of the time constant.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Finding RC from a ln V–t Graph', text: 'A ln V vs t graph gives a straight line with gradient = −0.025 s⁻¹. The resistor is R = 40 kΩ. Find τ and C.\n\nRC = −1/gradient = −1/(−0.025) = 40 s → τ = 40 s.\nC = RC/R = 40 / (40 × 10³) = 1.0 × 10⁻³ F = 1000 μF.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: ln V vs t vs V vs t', text: 'Always prefer the ln V vs t graph in calculations — it converts the exponential into a straight line so you can use gradient = −1/(RC) with a best-fit line through all points, reducing random error.\nCross-check: read 0.37V₀ directly from the V-t graph to verify your τ value.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Logarithmic Graph Method",
        text: "Always prefer ln V vs t graph over V vs t \u2014 converts exponential curve to straight line; gradient = \u22121/(RC) using best-fit line through all points reduces random error."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Capacitor Leakage",
        text: "Leakage current through electrolytic capacitors causes V to drop faster than theoretical prediction \u2014 use high-quality capacitors and check ratings."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Write the equation for the voltage across a discharging <strong>capacitor</strong>. What is the <strong>time constant</strong> τ?' },
    { id: 'cue-2', blockId: 'para-6', prompt: 'How do you find the <strong>time constant</strong> RC from a ln V vs t graph? What is the gradient equal to?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'Give two sources of error in this practical and explain how each is reduced.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
