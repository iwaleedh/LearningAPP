export const note_physics_1_10_1 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define stress, strain and the Young Modulus; apply their equations to calculate mechanical properties of materials" } },
    { id: 'head-1', type: 'heading', data: { text: "Stress, Strain & The Young Modulus", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "While <strong>Hooke's Law</strong> describes the relationship between <strong>force</strong> and extension for a spring, <strong>stress</strong> and <strong>strain</strong> are material properties that allow us to compare different materials independently of their dimensions." },
      { text: "They describe how a material itself responds to loading, not just how a particular sample behaves." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Tensile <strong>Stress</strong> (sigma) is the <strong>force</strong> applied per unit cross-sectional area." },
      { text: "It is defined as: sigma = F / A." },
      { text: "Where: sigma = tensile <strong>stress</strong> (Pa or N/m^2), F = applied <strong>force</strong> (N), A = cross-sectional area (m^2)" },
      { text: "<strong>Stress</strong> has units of pascals (Pa), the same unit as pressure." },
      { text: "It measures the intensity of the internal <strong>force</strong> within the material." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a"/><rect x="110" y="75" width="180" height="50" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="200" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Wire: original length L</text><text x="200" y="116" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">cross-sectional area A</text><line x1="40" y1="100" x2="110" y2="100" stroke="#fa5252" stroke-width="3"/><polygon points="110,100 99,95 99,105" fill="#fa5252"/><text x="25" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c92a2a">F</text><line x1="290" y1="100" x2="360" y2="100" stroke="#fa5252" stroke-width="3"/><polygon points="360,100 349,95 349,105" fill="#fa5252"/><text x="370" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c92a2a">F</text><line x1="110" y1="140" x2="175" y2="140" stroke="#ced4da" stroke-width="1.5" stroke-dasharray="3,3"/><line x1="175" y1="140" x2="220" y2="140" stroke="#40c057" stroke-width="3"/><polygon points="220,140 208,135 208,145" fill="#40c057"/><text x="200" y="162" font-family="sans-serif" font-size="12" fill="#2b8a3e" text-anchor="middle">Extension &#916;L</text><text x="200" y="180" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Stress &#963; = F/A    Strain &#949; = &#916;L/L</text></svg>', caption: 'Stress = F/A; Strain = extension / original length' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Tensile <strong>Strain</strong> (epsilon) is the fractional change in length of the material." },
      { text: "It is defined as: epsilon = Delta L / L." },
      { text: "Where: epsilon = tensile <strong>strain</strong> (dimensionless — no units), Delta L = extension (m), L = original length (m)" },
      { text: "<strong>Strain</strong> is a ratio and has no units." },
      { text: "It compares the change in length to the original length, giving a measure of deformation independent of the original size of the object." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "The <strong>Young Modulus</strong> (E) is the ratio of tensile <strong>stress</strong> to tensile <strong>strain</strong> for a material in its elastic region (up to the <strong>limit of proportionality</strong>)" },
      { text: "It is defined as: E = sigma / epsilon = (F/A) / (Delta L / L) = (F L) / (A Delta L)" },
      { text: "Units: Pa (pascals) or N/m^2." },
      { text: "The <strong>Young Modulus</strong> is a material constant — it does not depend on the dimensions of the sample." },
      { text: "A higher <strong>Young Modulus</strong> means the material is stiffer (harder to stretch)." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="230" fill="#0f172a"/><line x1="55" y1="190" x2="355" y2="190" stroke="#212529" stroke-width="2"/><line x1="55" y1="190" x2="55" y2="25" stroke="#212529" stroke-width="2"/><text x="205" y="215" font-family="sans-serif" font-size="13" fill="#212529" text-anchor="middle">Strain &#949; (no units)</text><text x="28" y="110" font-family="sans-serif" font-size="13" fill="#212529" text-anchor="middle" transform="rotate(-90 28,110)">Stress &#963; / Pa</text><path d="M 55 190 L 200 70" stroke="#be4bdb" stroke-width="4" fill="none"/><path d="M 200 70 Q 260 45 330 48" stroke="#be4bdb" stroke-width="3" fill="none" stroke-dasharray="6,4"/><circle cx="200" cy="70" r="5" fill="#40c057"/><text x="220" y="65" font-family="sans-serif" font-size="12" fill="#2b8a3e">Elastic limit</text><text x="280" y="42" font-family="sans-serif" font-size="12" fill="#c92a2a">Plastic region</text><text x="125" y="155" font-family="sans-serif" font-size="13" font-weight="bold" fill="#862e9c" text-anchor="middle" transform="rotate(-53 125,155)">Gradient = E</text><text x="200" y="15" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Stress-Strain Graph: Gradient = Young Modulus E</text></svg>', caption: 'Stress-strain graph: gradient of the linear region = Young Modulus E' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Comparing <strong>Stress</strong> and <strong>Strain</strong> to <strong>Force</strong> and Extension: The <strong>force</strong>-extension graph for a spring has gradient = spring constant k." },
      { text: "The <strong>stress</strong>-<strong>strain</strong> graph for a material has gradient = <strong>Young Modulus</strong> E." },
      { text: "The key difference is that E is a property of the material itself, while k depends on both the material AND the dimensions (length and cross-section) of the particular sample." },
      { text: "E allows us to compare the stiffness of steel, rubber, bone, wood, etc. regardless of sample size." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Typical Values of the <strong>Young Modulus</strong>: Steel approximately 200 GPa (very stiff — used in structures)" },
      { text: "Copper approximately 130 GPa." },
      { text: "Glass approximately 70 GPa." },
      { text: "Bone approximately 20 GPa." },
      { text: "Rubber approximately 0.01 GPa (very flexible — 20,000 times less stiff than steel)" },
      { text: "These enormous differences in E explain why different materials are suited to different engineering applications." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Comparing Materials by Young Modulus</text><rect x="15" y="35" width="80" height="120" rx="4" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="55" y="100" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1864ab" text-anchor="middle">Steel</text><text x="55" y="115" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">200 GPa</text><text x="55" y="148" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">Very stiff</text><rect x="115" y="65" width="80" height="90" rx="4" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="155" y="110" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Copper</text><text x="155" y="125" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">130 GPa</text><rect x="215" y="100" width="80" height="55" rx="4" fill="#44370a" stroke="#fab005" stroke-width="2"/><text x="255" y="125" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700" text-anchor="middle">Bone</text><text x="255" y="140" font-family="sans-serif" font-size="10" fill="#e67700" text-anchor="middle">20 GPa</text><rect x="315" y="148" width="70" height="7" rx="3" fill="#3d1212" stroke="#fa5252" stroke-width="2"/><text x="350" y="162" font-family="sans-serif" font-size="11" font-weight="bold" fill="#c92a2a" text-anchor="middle">Rubber ~0.01 GPa</text></svg>', caption: 'Young Modulus varies enormously between materials; higher E = stiffer material' } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A copper wire of length 2.0 m, cross-sectional area 1.0 x 10^-6 m^2, extends by 0.50 mm when a <strong>force</strong> of 65 N is applied." },
      { text: "Calculate the <strong>Young Modulus</strong>." },
      { text: "<strong>Stress</strong> = F/A = 65 / (1.0 x 10^-6) = 6.5 x 10^7 Pa." },
      { text: "<strong>Strain</strong> = Delta L / L = (0.50 x 10^-3) / 2.0 = 2.5 x 10^-4." },
      { text: "<strong>Young Modulus</strong> E = <strong>stress</strong> / <strong>strain</strong> = (6.5 x 10^7) / (2.5 x 10^-4) = 2.6 x 10^11 Pa = 260 GPa." }
    ] } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Define tensile stress and tensile strain and write their equations with correct units", checked: false },
      { text: "Define the Young Modulus E and explain what it tells us about a material", checked: false },
      { text: "Calculate E given force, dimensions and extension using E = (FL)/(A Delta L)", checked: false },
      { text: "Explain why the Young Modulus is a material property while the spring constant k is not", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Stress</strong> sigma = F/A (Pa). <strong>Strain</strong> epsilon = Delta L / L (dimensionless). <strong>Young Modulus</strong> E = sigma / epsilon = FL / (A Delta L) (Pa). E is a material property — higher E means stiffer. The gradient of the linear region of a <strong>stress</strong>-<strong>strain</strong> graph equals the <strong>Young Modulus</strong>." } },
    { id: 'enr-worked-series', type: 'callout', data: { style: 'worked', title: 'Worked Example: Springs in Series vs Parallel', text: 'Two springs each k = 100 N/m.\nSeries: 1/k_eff = 1/100 + 1/100 = 2/100 → k_eff = 50 N/m (softer — halved).\nParallel: k_eff = 100 + 100 = 200 N/m (stiffer — doubled).\nAnalogy: tuning a guitar string changes its <strong>tension</strong> (like altering k) → changes resonant frequency. Higher <strong>tension</strong> → higher pitch.' } },
    { id: 'enr-worked-mattress', type: 'callout', data: { style: 'worked', title: 'Worked Example: Pocket-Spring Mattress', text: 'A mattress contains 1000 pocket springs each with k = 600 N/m, arranged in parallel.\nk_eff = 1000 × 600 = 600 000 N/m.\nPerson of <strong>mass</strong> 70 kg applies <strong>weight</strong> F = 70 × 9.81 ≈ 700 N.\nTotal compression x = F / k_eff = 700 / 600 000 ≈ 0.0012 m = 1.2 mm.\nPocket springs act independently, so different regions compress by different amounts — conforming to body shape.' } },
    { id: 'enr-tip-springs', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Series vs Parallel Springs', text: 'Series springs → WEAKER: k_eff is smaller than either individual k. More total extension for the same <strong>force</strong>.\nParallel springs → STRONGER: k_eff = sum of all k values. Less total compression for the same <strong>force</strong>.\nCommon error: mixing these up. Reminder — series springs share the same <strong>force</strong> but extensions add up, so k_eff must be smaller.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Define tensile stress and give its equation and units' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Define tensile strain. Why does it have no units?' },
    { id: 'cue-3', blockId: 'para-5', prompt: 'State the equation for the Young Modulus E in terms of F, A, L and delta L' },
    { id: 'cue-4', blockId: 'para-6', prompt: 'Why is the Young Modulus more useful than the spring constant for comparing materials?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
