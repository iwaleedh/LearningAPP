export const note_physics_2_13_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe and carry out Core Practical 6: measuring the refractive index of a glass or perspex block; apply Snell's law n = sini/sinr; plot a sini vs sinr graph to determine n; identify sources of uncertainty and suggest improvements" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 6: Measuring Refractive Index", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "This practical investigates <strong>refraction</strong> of light through a rectangular perspex or glass block and uses the results to measure its refractive index." },
      { text: "When light passes from air into a denser medium such as glass, it slows down and bends towards the normal." },
      { text: "Snell's law quantifies this: n₁ sinθ₁ = n₂ sinθ₂." },
      { text: "For light going from air (n₁ = 1) into glass (n₂ = n): sinθ_i = n sinθ_r, so n = sinθ_i / sinθ_r." },
      { text: "By measuring the angle of incidence θ_i and angle of <strong>refraction</strong> θ_r for multiple ray angles, the refractive index can be determined." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Equipment and Setup Ray box with single slit (to produce a narrow beam of light)" },
      { text: "Perspex or glass rectangular block." },
      { text: "Plain white paper (to record ray positions)" },
      { text: "Protractor (to measure angles)" },
      { text: "Ruler and sharp pencil." },
      { text: "Optional: light sensor or camera to record the ray path more precisely." },
      { text: "The block is placed on the paper and its outline is traced." },
      { text: "A series of incident rays at different angles are directed at the flat face of the block." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Core Practical 6: Ray Through Perspex Block</text><rect x="120" y="55" width="160" height="90" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="2" opacity="0.8"/><text x="200" y="102" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Perspex block</text><line x1="200" y1="55" x2="200" y2="145" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,2"/><line x1="60" y1="18" x2="200" y2="55" stroke="#fa5252" stroke-width="2.5"/><line x1="200" y1="55" x2="200" y2="145" stroke="#339af0" stroke-width="2.5"/><line x1="200" y1="145" x2="340" y2="165" stroke="#fa5252" stroke-width="2.5"/><path d="M 200 55 Q 183 55 180 68" stroke="#fa5252" stroke-width="1.5" fill="none"/><text x="168" y="65" font-family="sans-serif" font-size="9" fill="#c92a2a">&#952;&#7522;</text><path d="M 200 55 Q 210 62 208 75" stroke="#339af0" stroke-width="1.5" fill="none"/><text x="212" y="72" font-family="sans-serif" font-size="9" fill="#1864ab">&#952;&#x1D63;</text><path d="M 200 145 Q 210 135 208 122" stroke="#fa5252" stroke-width="1.5" fill="none"/><text x="213" y="130" font-family="sans-serif" font-size="9" fill="#c92a2a">&#952;&#7522;</text><text x="60" y="15" font-family="sans-serif" font-size="9" fill="#fa5252">Incident ray</text><text x="213" y="153" font-family="sans-serif" font-size="9" fill="#fa5252">Emergent ray</text><text x="205" y="100" font-family="sans-serif" font-size="9" fill="#1864ab">Refracted</text><text x="205" y="112" font-family="sans-serif" font-size="9" fill="#1864ab">ray inside</text><line x1="20" y1="100" x2="400" y2="100" stroke="#adb5bd" stroke-width="0.5" stroke-dasharray="2,4"/><text x="15" y="98" font-family="sans-serif" font-size="7" fill="#868e96">Paper</text></svg>', caption: 'Ray through rectangular block: measure θᵢ and θᵣ at entry face. Emergent ray is parallel to incident ray but laterally displaced.' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure (1) Place the perspex block on a sheet of paper and draw around it carefully." },
      { text: "(2) Draw a normal (perpendicular) to the flat entry face at the intended entry point P." },
      { text: "(3) Direct the ray box beam at P at a chosen angle of incidence θ_i (measured from the normal)" },
      { text: "(4) Mark the incident and emergent rays with pencil dots on the paper (at least two dots per ray)" },
      { text: "(5) Remove the block and draw straight lines through the dot pairs to extend the incident and emergent rays." },
      { text: "(6) Join the entry point P to the exit point Q inside the block outline — this represents the refracted ray." },
      { text: "(7) Measure θ_i (angle of incidence at P) and θ_r (angle of <strong>refraction</strong> at P) using a protractor." },
      { text: "(8) Repeat for 5–6 different values of θ_i (e.g. 10°, 20°, 30°, 40°, 50°, 60°)." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Variables Independent variable: angle of incidence θ_i (changed by rotating the ray box)" },
      { text: "Dependent variable: angle of <strong>refraction</strong> θ_r (measured from the refracted ray inside the block)" },
      { text: "Control variables: same perspex block throughout (keeps n constant); same face of the block for entry; same colour (<strong>frequency</strong>) of light (monochromatic light ideally, e.g. green filter on ray box, since refractive index varies slightly with <strong>wavelength</strong> — dispersion); same room lighting conditions; normal drawn accurately." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#0f172a"/><text x="200" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Graph: sin&#952;&#7522; vs sin&#952;&#x1D63;</text><line x1="40" y1="140" x2="375" y2="140" stroke="#212529" stroke-width="2"/><line x1="40" y1="140" x2="40" y2="25" stroke="#212529" stroke-width="2"/><text x="207" y="157" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">sin &#952;&#x1D63;</text><text x="18" y="85" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle" transform="rotate(-90 18,85)">sin &#952;&#7522;</text><line x1="40" y1="140" x2="365" y2="35" stroke="#339af0" stroke-width="2.5"/><circle cx="90" cy="118" r="4" fill="#339af0"/><circle cx="140" cy="97" r="4" fill="#339af0"/><circle cx="200" cy="72" r="4" fill="#339af0"/><circle cx="260" cy="49" r="4" fill="#339af0"/><circle cx="310" cy="30" r="4" fill="#339af0"/><text x="280" y="60" font-family="sans-serif" font-size="9" fill="#1864ab">gradient = n</text><text x="280" y="72" font-family="sans-serif" font-size="9" fill="#1864ab">(refractive index)</text><text x="200" y="155" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Straight line through origin confirms Snell\'s law: sin&#952;&#7522; = n sin&#952;&#x1D63;</text></svg>', caption: 'Graph of sinθᵢ vs sinθᵣ: straight line through origin with gradient = n (refractive index of perspex).' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Analysis Plot a graph of sinθ_i (y-axis) vs sinθ_r (x-axis)" },
      { text: "Since sinθ_i = n sinθ_r, the graph should be a straight line through the origin with gradient = n." },
      { text: "Draw the line of best fit and calculate the gradient: n = Δ(sinθ_i) / Δ(sinθ_r)" },
      { text: "A straight line through the origin confirms that Snell's law is obeyed and the refractive index is constant (independent of angle)" },
      { text: "Typical values for perspex: n ≈ 1.48–1.50." },
      { text: "For glass: n ≈ 1.5–1.9 depending on type." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example Data for perspex block: θ_i = 30°, θ_r = 19.5°" },
      { text: "Check Snell's law: n = sinθ_i/sinθ_r = sin30°/sin19.5° = 0.500/0.334 = 1.50." },
      { text: "Full graph: for θ_i = 10°, 20°, 30°, 40°, 50°, 60°, the corresponding θ_r values are approximately 6.6°, 13.2°, 19.5°, 25.4°, 30.9°, 36.0°" },
      { text: "Plotting sinθ_i vs sinθ_r gives sin values: (0.115, 0.173), (0.228, 0.342), (0.334, 0.500), (0.431, 0.643), (0.514, 0.766), (0.588, 0.866) — gradient ≈ 1.50." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error and Improvements Systematic errors: (a) drawing the normal inaccurately — use a set square to ensure the normal is truly perpendicular to the block face; (b) parallax error when reading the protractor — view straight down on the scale." },
      { text: "Random errors: (c) the pencil mark may be wide — use a sharp pencil and mark points as close to the block as possible; (d) the ray box beam may not be perfectly narrow — use a single-slit mask to create a well-defined ray." },
      { text: "Improvement: use a light sensor to detect the refracted beam angle electronically, reducing reading errors." },
      { text: "Also measure θ_r from both faces (inside the block) and average for each θ_i." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Method Points', text: 'Snell\'s law: n = sinθᵢ/sinθᵣ (air to glass). Plot sinθᵢ vs sinθᵣ → straight line through origin → gradient = n. Independent variable: θᵢ. Dependent variable: θᵣ. Control: same block, same <strong>wavelength</strong>, accurate normal. Error: use sharp pencil, accurate protractor reading, minimum 5 data points. Check: line through origin confirms Snell\'s law.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the full procedure for Core Practical 6, including how to mark rays, measure angles, and what to do with the block", checked: false },
      { text: "Explain what graph to plot, why it should be a straight line through the origin, and how to find n from it", checked: false },
      { text: "Identify two sources of error in this practical and suggest how each could be reduced", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Core Practical 6: ray box → perspex block → mark incident and emergent ray dots → join P to Q for refracted ray → measure θᵢ and θᵣ → repeat for 5-6 angles. Snell's law: n = sinθᵢ/sinθᵣ. Plot sinθᵢ vs sinθᵣ: straight line through origin → gradient = n. Controls: same block, same <strong>wavelength</strong>, accurate normal. Errors: parallax (view protractor straight on), thick pencil marks (use sharp pencil), inaccurate normal (use set square)." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a"/><text x="250" y="16" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Lateral Displacement Through a Glass Block</text><rect x="140" y="50" width="220" height="130" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="2" opacity="0.85"/><text x="250" y="108" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Glass block</text><line x1="210" y1="18" x2="210" y2="185" stroke="#adb5bd" stroke-width="1" stroke-dasharray="4,3"/><line x1="285" y1="140" x2="285" y2="215" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,2"/><line x1="70" y1="10" x2="210" y2="50" stroke="#fa5252" stroke-width="2.5"/><line x1="210" y1="50" x2="285" y2="180" stroke="#339af0" stroke-width="2.5"/><line x1="285" y1="180" x2="425" y2="220" stroke="#fa5252" stroke-width="2.5"/><line x1="210" y1="50" x2="435" y2="114" stroke="#fa5252" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.4"/><line x1="440" y1="116" x2="440" y2="221" stroke="#2f9e44" stroke-width="2"/><polygon points="440,116 435,129 445,129" fill="#2f9e44"/><polygon points="440,221 435,208 445,208" fill="#2f9e44"/><text x="447" y="173" font-family="sans-serif" font-size="13" fill="#2f9e44" font-weight="bold">d</text><path d="M 210 50 Q 197 50 194 62" stroke="#fa5252" stroke-width="1.5" fill="none"/><text x="177" y="67" font-family="sans-serif" font-size="10" fill="#c92a2a">&#952;&#7522;</text><path d="M 210 50 Q 222 61 219 74" stroke="#339af0" stroke-width="1.5" fill="none"/><text x="223" y="74" font-family="sans-serif" font-size="10" fill="#1864ab">&#952;&#x1D63;</text><text x="249" y="135" font-family="sans-serif" font-size="9" fill="#1864ab">Refracted</text><text x="249" y="147" font-family="sans-serif" font-size="9" fill="#1864ab">ray inside</text><text x="56" y="8" font-family="sans-serif" font-size="9" fill="#fa5252">Incident ray</text><text x="326" y="214" font-family="sans-serif" font-size="9" fill="#fa5252">Emergent ray</text><text x="197" y="47" font-family="sans-serif" font-size="9" fill="#495057">P</text><text x="287" y="197" font-family="sans-serif" font-size="9" fill="#495057">Q</text><line x1="140" y1="200" x2="360" y2="200" stroke="#339af0" stroke-width="1"/><line x1="140" y1="195" x2="140" y2="205" stroke="#339af0" stroke-width="1"/><line x1="360" y1="195" x2="360" y2="205" stroke="#339af0" stroke-width="1"/><text x="250" y="215" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">thickness t</text><text x="8" y="234" font-family="sans-serif" font-size="8" fill="#868e96">Incident and emergent rays are parallel. d increases with &#952;&#7522; and block thickness t. n = sin&#952;&#7522; / sin&#952;&#x1D63;</text></svg>', caption: 'Lateral displacement d: the perpendicular shift between the original incident ray direction (dashed) and the emergent ray. The emergent ray is always parallel to the incident ray. d increases with both θᵢ and block thickness t. P = entry point, Q = exit point.' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Refractive Index from Graph Gradient with Uncertainty', text: 'A student plots sinθᵢ (y-axis) vs sinθᵣ (x-axis) for a glass block and draws the best-fit straight line through the origin. Best-fit gradient n = 1.52. The steepest line through the extreme error bars gives n_max = 1.57; the shallowest gives n_min = 1.47. (1) Uncertainty: Δn = (n_max − n_min) / 2 = (1.57 − 1.47) / 2 = 0.05. (2) Result: n = 1.52 ± 0.05. (3) Percentage uncertainty = (0.05 / 1.52) × 100% = 3.3%. (4) Check: the best-fit line passes through the origin — this confirms Snell\'s law (sinθᵢ = 0 when sinθᵣ = 0). A non-zero y-intercept indicates a systematic error, e.g. angles measured from the block surface rather than the normal.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Core Practical 6 — Key Marks', text: 'Always measure θᵢ and θᵣ from the NORMAL (perpendicular to the block face), not the surface — this is the most common error in the exam. The sinθᵢ vs sinθᵣ graph must pass through the origin; state this explicitly when asked to describe the expected graph. Use monochromatic (single-colour) light: white light is dispersed in glass so different colours give slightly different n values, widening the beam and increasing uncertainty. For any "suggest improvement" question, give: (a) the source of error, (b) its effect on n, and (c) a specific improvement. Minimum 5–6 data points are needed for a reliable gradient; fewer would score poorly in an evaluation mark scheme.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Core Practical 6: Graph Must Pass Through Origin",
        text: "When plotting sin \u03b8\u1d63 vs sin \u03b8\u1d62 using Snell's law (n sin \u03b8\u2081 = constant), the graph must be a straight line through the origin. If your graph doesn't pass through (0,0), recheck your angle measurements \u2014 likely systematic error using protractor."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Measure Angles to \u00b11\u00b0 Precision",
        text: "Use the protractor correctly: place centre on the normal at the refraction point, measure to ray line. Small angle errors (\u00b12\u00b0) create significant errors in sin \u03b8 due to the nonlinear sine function. Always take multiple measurements and average."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-4', prompt: 'Outline the step-by-step procedure for Core Practical 6. How do you accurately trace the ray inside the block?' },
    { id: 'cue-2', blockId: 'para-6', prompt: 'What graph is plotted to find the refractive index? What is plotted on each axis and what does the gradient represent?' },
    { id: 'cue-3', blockId: 'para-8', prompt: 'Give two sources of error in the refractive index practical and suggest one improvement for each.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
