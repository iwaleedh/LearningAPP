export const note_physics_5_30_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the experimental procedure for Core Practical 15: investigating the absorption of gamma radiation; apply I = I₀e⁻μx to determine the absorption coefficient μ; plot ln I vs x to linearise the data; identify sources of error" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 15: Investigating Gamma Radiation Absorption", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "Gamma radiation is absorbed exponentially as it passes through a material." },
      { text: "The intensity I after passing through thickness x of a material is: I = I₀ e⁻μx, where I₀ is the initial intensity (at x = 0) and μ is the linear absorption coefficient (units: m⁻¹)" },
      { text: "The greater μ, the more strongly the material absorbs gamma radiation." },
      { text: "Dense materials like lead have large μ." },
      { text: "This practical measures I at different thicknesses of absorber to verify the exponential relationship and determine μ." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Equipment Gamma source (e.g. cobalt-60 or caesium-137 — school sources are sealed and low-activity)" },
      { text: "Geiger-Muller (GM) tube connected to a ratemeter or counter and timer." },
      { text: "Absorber sheets: lead plates of known thickness (measured with a micrometer or vernier calliper)" },
      { text: "Ruler (to measure source-to-detector distance — kept constant)" },
      { text: "Clamp stand to hold source and detector in alignment." },
      { text: "Safety: handle source with tongs; keep away from body; log source activity and usage in the radiation register." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="155" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Gamma Absorption Experiment Setup</text><rect x="20" y="60" width="45" height="40" rx="4" fill="#78350f" stroke="#e67700" stroke-width="2"/><text x="42" y="82" font-family="sans-serif" font-size="9" fill="#1e293b" text-anchor="middle">&#947;</text><text x="42" y="95" font-family="sans-serif" font-size="8" fill="#1e293b" text-anchor="middle">source</text><line x1="65" y1="80" x2="100" y2="80" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="65" y1="78" x2="100" y2="70" stroke="#fa5252" stroke-width="1" stroke-dasharray="3,2"/><line x1="65" y1="82" x2="100" y2="90" stroke="#fa5252" stroke-width="1" stroke-dasharray="3,2"/><rect x="100" y="62" width="12" height="36" rx="2" fill="#868e96" stroke="#495057" stroke-width="1"/><text x="106" y="58" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">Lead</text><text x="106" y="50" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">(x mm)</text><rect x="125" y="62" width="12" height="36" rx="2" fill="#868e96" stroke="#495057" stroke-width="1"/><rect x="150" y="62" width="12" height="36" rx="2" fill="#868e96" stroke="#495057" stroke-width="1"/><rect x="220" y="55" width="50" height="50" rx="5" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="245" y="78" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">GM</text><text x="245" y="92" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">tube</text><line x1="270" y1="80" x2="320" y2="80" stroke="#212529" stroke-width="1.5"/><rect x="320" y="62" width="60" height="36" rx="3" fill="#0a2e1a" stroke="#40c057" stroke-width="1.5"/><text x="350" y="80" font-family="sans-serif" font-size="9" fill="#2b8a3e" text-anchor="middle">Counter</text><text x="200" y="130" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Add/remove lead plates; record count rate C at each thickness x</text><text x="200" y="145" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Correct for background: I = C &#8722; C_background</text></svg>', caption: 'Setup: gamma source, lead absorber sheets (measure x), GM tube, counter. Keep source-detector distance constant.' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure (1) Measure and record background count rate C_bg with no source present (at least 3 minutes)" },
      { text: "(2) Place the source at a fixed distance from the GM tube (e.g. 10 cm)" },
      { text: "Record count rate with no absorber, C₀." },
      { text: "(3) Add lead sheets one at a time, recording the count rate C at each total thickness x." },
      { text: "(4) Subtract background: corrected count rate = C − C_bg." },
      { text: "This is proportional to intensity I." },
      { text: "(5) Record at least 6–8 different thicknesses." },
      { text: "(6) Plot I (corrected count rate) vs x — should give an exponential decay curve." },
      { text: "(7) Plot ln I vs x — should give a straight line with gradient = −μ." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Linearising: ln I vs Absorber Thickness x</text><line x1="215" y1="145" x2="382" y2="145" stroke="#212529" stroke-width="2"/><line x1="215" y1="145" x2="215" y2="28" stroke="#212529" stroke-width="2"/><text x="298" y="158" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Absorber thickness x / mm</text><text x="198" y="90" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle" transform="rotate(-90 198,90)">ln I</text><line x1="215" y1="32" x2="378" y2="142" stroke="#fa5252" stroke-width="2.5"/><circle cx="240" cy="50" r="4" fill="#fa5252"/><circle cx="275" cy="73" r="4" fill="#fa5252"/><circle cx="312" cy="96" r="4" fill="#fa5252"/><circle cx="348" cy="120" r="4" fill="#fa5252"/><text x="310" y="48" font-family="sans-serif" font-size="9" fill="#c92a2a">gradient = &#8722;&#956;</text><text x="310" y="60" font-family="sans-serif" font-size="9" fill="#c92a2a">y-intercept = ln I&#8320;</text><line x1="30" y1="145" x2="182" y2="145" stroke="#212529" stroke-width="2"/><line x1="30" y1="145" x2="30" y2="28" stroke="#212529" stroke-width="2"/><text x="107" y="158" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Thickness x</text><text x="14" y="90" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle" transform="rotate(-90 14,90)">I</text><path d="M 30 32 Q 60 45 100 78 Q 140 110 182 143" stroke="#339af0" stroke-width="2.5" fill="none"/><text x="60" y="46" font-family="sans-serif" font-size="8" fill="#1864ab">I vs x</text><text x="60" y="58" font-family="sans-serif" font-size="8" fill="#1864ab">exponential</text></svg>', caption: 'I vs x: exponential curve. ln I vs x: straight line, gradient = −μ, y-intercept = ln I₀. Use gradient to find μ.' } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Determining the Absorption Coefficient Taking the natural log of I = I₀ e⁻μx: ln I = ln I₀ − μx." },
      { text: "This is of the form y = c + mx with gradient m = −μ and y-intercept c = ln I₀." },
      { text: "From the best-fit straight line through the ln I vs x data points: gradient = −μ → μ = −gradient. y-intercept = ln I₀ → I₀ = e^(y-intercept)" },
      { text: "The half-value thickness x₁/₂ (thickness that halves the intensity) is related to μ by: x₁/₂ = ln 2 / μ = 0.693 / μ." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error Background radiation: always subtract background count rate (measured without source)" },
      { text: "Statistical variation: <strong>radioactive decay</strong> is random — use long counting times (at least 1 minute per reading) to reduce percentage uncertainty." },
      { text: "Scattered radiation: gamma rays scattered sideways can reach the detector even through thick absorbers — use a lead collimator to restrict beam." },
      { text: "Non-uniform absorber thickness: measure thickness at multiple points and average." },
      { text: "Source-detector distance: keep constant throughout; any change alters intensity independent of absorption." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example Data at four thicknesses of lead: x = 5 mm, I = 480; x = 10 mm, I = 240; x = 15 mm, I = 120; x = 20 mm, I = 60 (counts per minute, background already subtracted)" },
      { text: "Note that I halves for every 5 mm increase in thickness → x₁/₂ = 5 mm. μ = ln 2 / x₁/₂ = 0.693 / (5 × 10⁻³) = 138.6 m⁻¹ ≈ 139 m⁻¹." },
      { text: "Confirm with ln I vs x: ln(480) = 6.17; ln(60) = 4.09; gradient = (4.09 − 6.17)/(0.020 − 0.005) = −2.08/0.015 = −139 m⁻¹. ✓." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Equations', text: 'Absorption law: I = I₀ e⁻μx. Linear absorption coefficient μ (m⁻¹). Linearise: ln I = ln I₀ − μx → plot ln I vs x → gradient = −μ. Half-value thickness: x₁/₂ = ln 2 / μ = 0.693 / μ. Always subtract background count rate. Use long counting times to reduce statistical uncertainty.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the experimental setup for measuring gamma absorption, including the role of background subtraction", checked: false },
      { text: "Explain how to plot ln I vs x and use the gradient to find the linear absorption coefficient μ", checked: false },
      { text: "Identify two sources of error in this practical and explain how each is minimised", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Gamma absorption: I = I₀e⁻μx (exponential). μ = linear absorption coefficient (m⁻¹). Experiment: GM tube; vary lead thickness x; correct for background (subtract C_bg). Plot I vs x → exponential curve. Plot ln I vs x → straight line; gradient = −μ; y-intercept = ln I₀. Half-value thickness x₁/₂ = ln2/μ. Errors: background (subtract it), statistics (long counting times), scatter (collimator)." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a"/><text x="200" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529">Half-Value Thickness x&#189;</text><rect x="180" y="45" width="40" height="110" rx="3" fill="#1e293b" stroke="#495057" stroke-width="2"/><line x1="20" y1="100" x2="180" y2="100" stroke="#fa5252" stroke-width="8"/><line x1="220" y1="100" x2="380" y2="100" stroke="#fa5252" stroke-width="4" stroke-dasharray="8,4"/><text font-family="sans-serif" fill="#343a40"><tspan x="80" y="87" font-size="12">I&#8320;</tspan><tspan x="274" y="87" font-size="12">I&#8320;/2</tspan><tspan x="120" y="185" font-size="10" fill="#6c757d">x&#189; = ln 2 / &#956; &#8776; 0.693 / &#956;</tspan></text></svg>', caption: 'After one half-value thickness x₁/₂, intensity halves from I₀ to I₀/2. Larger μ → more absorbing material → smaller x₁/₂.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked: Calculating μ from a Best-Fit Line', text: 'Two points on the ln I vs x best-fit line: (0.005 m, 6.17) and (0.020 m, 4.09). Gradient = (4.09 − 6.17) ÷ (0.020 − 0.005) = −2.08 ÷ 0.015 = −138.7 m⁻¹. So μ = 138.7 m⁻¹ ≈ 139 m⁻¹. Half-value thickness: x₁/₂ = 0.693 ÷ 139 = 4.99 × 10⁻³ m ≈ 5.0 mm.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tips: Gamma Absorption Practical', text: 'Always subtract background count rate before taking ln — forgetting this is the most penalised error. Convert x to metres when quoting μ in m⁻¹ (e.g. 5 mm = 0.005 m). Never force the ln I vs x best-fit line through the origin. Quote μ to 3 significant figures, consistent with your data precision.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: 'Write the equation for gamma absorption. Define I₀, I, μ, and x.' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'How is the absorption coefficient μ determined from a ln I vs x graph? What are the gradient and y-intercept equal to?' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'Give two sources of error in the gamma absorption practical and explain how each is reduced.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
