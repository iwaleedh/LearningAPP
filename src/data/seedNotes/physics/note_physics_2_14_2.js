export const note_physics_2_14_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the experimental procedure for Core Practical 8; apply the <strong>diffraction</strong> grating equation d sin θ = nλ to determine the <strong>wavelength</strong> of laser light; identify sources of error and suggest improvements" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 8: Investigating <strong>Diffraction</strong> Gratings", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "A <strong>diffraction</strong> grating consists of a large number of equally spaced parallel slits, typically with 100–600 slits per millimetre." },
      { text: "When monochromatic light (a single <strong>wavelength</strong>) passes through the grating, constructive <strong>interference</strong> occurs at specific angles that depend on the <strong>wavelength</strong> and the slit spacing." },
      { text: "By measuring these angles experimentally, the <strong>wavelength</strong> of the light can be calculated accurately." },
      { text: "This core practical uses a laser and a <strong>diffraction</strong> grating to determine the <strong>wavelength</strong> of the laser light." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "The <strong>Diffraction</strong> Grating Equation When light of <strong>wavelength</strong> λ passes through a grating with slit spacing d, bright fringes (maxima) are observed at angles θ satisfying: d sin θ = nλ, where n is the order of the maximum (n = 0, ±1, ±2, ...) and d is the distance between adjacent slits." },
      { text: "The slit spacing d = 1/N, where N is the number of slits per metre." },
      { text: "For a grating labelled as 300 lines/mm, d = 1/(300 × 10³) = 3.33 × 10⁻⁶ m." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Diffraction Grating: d sin&#952; = n&#955;</text><line x1="180" y1="20" x2="180" y2="170" stroke="#adb5bd" stroke-width="3"/><line x1="180" y1="92" x2="380" y2="92" stroke="#fa5252" stroke-width="2"/><text x="290" y="88" font-family="sans-serif" font-size="10" fill="#c92a2a">n = 0 (straight through)</text><line x1="180" y1="92" x2="370" y2="50" stroke="#339af0" stroke-width="2"/><text x="340" y="45" font-family="sans-serif" font-size="10" fill="#1864ab">n = +1</text><line x1="180" y1="92" x2="370" y2="135" stroke="#339af0" stroke-width="2"/><text x="340" y="150" font-family="sans-serif" font-size="10" fill="#1864ab">n = &#8722;1</text><line x1="180" y1="92" x2="350" y2="28" stroke="#40c057" stroke-width="2"/><text x="320" y="24" font-family="sans-serif" font-size="10" fill="#2b8a3e">n = +2</text><line x1="180" y1="92" x2="350" y2="158" stroke="#40c057" stroke-width="2"/><text x="320" y="172" font-family="sans-serif" font-size="10" fill="#2b8a3e">n = &#8722;2</text><line x1="180" y1="92" x2="230" y2="92" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 220 92 A 40 40 0 0 0 210 68" fill="none" stroke="#212529" stroke-width="1.5"/><text x="240" y="80" font-family="sans-serif" font-size="11" fill="#212529">&#952;</text><line x1="20" y1="92" x2="180" y2="92" stroke="#fa5252" stroke-width="2"/><text x="95" y="85" font-family="sans-serif" font-size="10" fill="#495057">laser beam</text></svg>', caption: 'Diffraction grating: central zero-order maximum (n=0) and higher-order maxima at angles satisfying d sin θ = nλ' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Equipment and Setup Clamp a <strong>diffraction</strong> grating vertically on a stand and direct a laser beam perpendicularly at it." },
      { text: "Place a screen or ruler at a known distance D (typically 1–2 m) from the grating." },
      { text: "With the room darkened, bright spots (maxima) appear on the screen on both sides of the central maximum (n = 0)" },
      { text: "Measure the distance x from the central spot to the first-order spot (n = 1) on both sides and take the mean." },
      { text: "Calculate the angle: tan θ = x/D, so θ = arctan(x/D)" },
      { text: "Then λ = d sin θ / n." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Practical Setup: Laser + Grating + Screen</text><rect x="10" y="75" width="30" height="25" rx="3" fill="#fa5252" stroke="#c92a2a" stroke-width="2"/><text x="25" y="73" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">laser</text><line x1="40" y1="87" x2="150" y2="87" stroke="#fa5252" stroke-width="2"/><line x1="150" y1="30" x2="150" y2="150" stroke="#adb5bd" stroke-width="3"/><text x="150" y="22" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">grating</text><line x1="150" y1="87" x2="350" y2="87" stroke="#fa5252" stroke-width="2"/><line x1="150" y1="87" x2="350" y2="55" stroke="#339af0" stroke-width="1.5"/><line x1="150" y1="87" x2="350" y2="120" stroke="#339af0" stroke-width="1.5"/><line x1="350" y1="25" x2="350" y2="155" stroke="#212529" stroke-width="4"/><text x="365" y="57" font-family="sans-serif" font-size="9" fill="#1864ab">n=+1</text><text x="365" y="125" font-family="sans-serif" font-size="9" fill="#1864ab">n=&#8722;1</text><text x="365" y="91" font-family="sans-serif" font-size="9" fill="#c92a2a">n=0</text><line x1="150" y1="100" x2="350" y2="100" stroke="#adb5bd" stroke-width="1" stroke-dasharray="3,3"/><text x="250" y="112" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">D (grating to screen)</text><line x1="350" y1="55" x2="370" y2="55" stroke="#adb5bd" stroke-width="1"/><line x1="350" y1="87" x2="370" y2="87" stroke="#adb5bd" stroke-width="1"/><line x1="368" y1="55" x2="368" y2="87" stroke="#212529" stroke-width="1"/><text x="385" y="73" font-family="sans-serif" font-size="9" fill="#212529">x</text></svg>', caption: 'Setup: measure D (grating to screen) and x (centre to n=1 spot); θ = arctan(x/D); λ = d sin θ' } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure in Detail (1) Measure the grating specification (lines/mm) and calculate d = 1/N." },
      { text: "(2) Set up the grating perpendicular to the laser beam." },
      { text: "(3) Measure D from grating to screen accurately with a ruler." },
      { text: "(4) Mark the positions of the n = 1 maxima on both sides of centre." },
      { text: "(5) Measure x₁ (left) and x₂ (right) and take the mean x = (x₁ + x₂)/2." },
      { text: "(6) Calculate θ = arctan(x/D)" },
      { text: "(7) Calculate λ = d sin θ." },
      { text: "(8) Repeat for n = 2 if visible and take an average λ." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error and Improvements Systematic errors: (1) Grating not perpendicular to the laser — the beam will not symmetrically produce maxima on both sides." },
      { text: "Fix: check that n = +1 and n = −1 spots are equal distances from centre." },
      { text: "(2) Inaccurate measurement of D — use a long distance (≥ 1 m) to increase x and reduce the percentage error in angle." },
      { text: "Random errors: misreading x due to wide spots — use a pencil to mark the centre of each spot on paper fixed to the screen." },
      { text: "Safety: never look directly into the laser beam; use appropriate safety goggles rated for the laser <strong>wavelength</strong>." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A <strong>diffraction</strong> grating has 300 lines/mm." },
      { text: "The first-order maximum is observed at 11.5° from the zero-order." },
      { text: "Find λ. d = 1/(300 × 10³) = 3.33 × 10⁻⁶ m. λ = d sin θ / n = 3.33 × 10⁻⁶ × sin(11.5°) / 1 = 3.33 × 10⁻⁶ × 0.1994 = 6.64 × 10⁻⁷ m = 664 nm (red laser)." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formula', text: 'd sin θ = nλ, where d = slit spacing (m) = 1/N (N = lines per metre), θ = angle of nth-order maximum, n = order (integer), λ = <strong>wavelength</strong> (m). Measure x and D on the screen, find θ = arctan(x/D), then λ = d sin θ / n. Average results from multiple orders for accuracy.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the equipment and setup for Core Practical 8, including how to measure the <strong>diffraction</strong> angle", checked: false },
      { text: "Apply d sin θ = nλ to calculate <strong>wavelength</strong>, given the grating specification and measured angle", checked: false },
      { text: "Identify two sources of error in this experiment and suggest how each is minimised", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Diffraction</strong> grating equation: d sin θ = nλ, where d = 1/N (N = lines per metre). Setup: laser → grating → screen at distance D; measure x (centre to n=1 spot); θ = arctan(x/D). λ = d sin θ / n. Use both ±1 orders and mean for accuracy. Ensure grating is perpendicular to beam. Use large D to reduce percentage error in angle." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a"/><text x="250" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Measuring &#952;: tan &#952; = x/D &#8658; &#955; = d sin &#952; / n</text><line x1="60" y1="38" x2="60" y2="215" stroke="#adb5bd" stroke-width="3"/><text x="60" y="33" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">grating</text><line x1="440" y1="38" x2="440" y2="215" stroke="#212529" stroke-width="4"/><text x="440" y="33" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">screen</text><line x1="60" y1="140" x2="440" y2="140" stroke="#fa5252" stroke-width="2"/><circle cx="440" cy="140" r="5" fill="#fa5252"/><text x="452" y="144" font-family="sans-serif" font-size="10" fill="#c92a2a">n=0</text><line x1="60" y1="140" x2="440" y2="78" stroke="#339af0" stroke-width="2"/><circle cx="440" cy="78" r="5" fill="#339af0"/><text x="452" y="82" font-family="sans-serif" font-size="10" fill="#1864ab">n=1</text><rect x="428" y="128" width="12" height="12" fill="none" stroke="#212529" stroke-width="1.5"/><line x1="60" y1="192" x2="440" y2="192" stroke="#adb5bd" stroke-width="1" stroke-dasharray="4,3"/><line x1="60" y1="187" x2="60" y2="197" stroke="#adb5bd" stroke-width="1.5"/><line x1="440" y1="187" x2="440" y2="197" stroke="#adb5bd" stroke-width="1.5"/><text x="250" y="210" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">D (grating to screen)</text><line x1="468" y1="78" x2="468" y2="140" stroke="#adb5bd" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="464" y1="78" x2="472" y2="78" stroke="#212529" stroke-width="1.5"/><line x1="464" y1="140" x2="472" y2="140" stroke="#212529" stroke-width="1.5"/><text x="483" y="113" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">x</text><path d="M 118 140 A 58 58 0 0 0 97 106" fill="none" stroke="#212529" stroke-width="1.5"/><text x="125" y="120" font-family="sans-serif" font-size="13" fill="#212529">&#952;</text><rect x="148" y="48" width="216" height="68" rx="6" fill="#1c3a64" stroke="#339af0" stroke-width="1.5"/><text x="256" y="70" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">tan &#952; = x / D</text><text x="256" y="90" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">&#955; = d sin &#952; / n</text><text x="256" y="110" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">d = 1/N, N in lines m&#8315;&#185;</text></svg>', caption: 'Screen geometry: grating at left, screen at distance D; x is the distance from n=0 to the n=1 spot; θ = arctan(x/D) is substituted into d sin θ = nλ' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: 600 lines/mm Grating with Green Laser', text: 'A <strong>diffraction</strong> grating has 600 lines/mm. It is illuminated by a green laser (λ = 532 nm) and a screen is placed 1.20 m from the grating. Find the angle of the second-order maximum and its distance from the central spot on the screen.\n\nStep 1 — Slit spacing: d = 1/(600 × 10³) = 1.67 × 10⁻⁶ m.\n\nStep 2 — Second-order angle (n = 2): sin θ = nλ/d = (2 × 532 × 10⁻⁹) / (1.67 × 10⁻⁶) = 1.064 × 10⁻⁶ / 1.67 × 10⁻⁶ = 0.637; θ = arcsin(0.637) = 39.6°.\n\nStep 3 — Distance on screen: x = D tan θ = 1.20 × tan(39.6°) = 1.20 × 0.826 = 0.99 m.' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tips: Three Common Errors to Avoid', text: '1) Convert lines/mm to lines/m before finding d. For N = 600 lines/mm, d = 1/(600 × 10³) = 1.67 × 10⁻⁶ m. Forgetting the ×10³ conversion gives d 1000× too large, making λ 1000× out.\n\n2) Use sin θ (not tan θ) in d sin θ = nλ. From screen measurements you find θ via tan θ = x/D — compute θ as an angle first, then apply sin θ in the equation. Do not substitute x/D directly in place of sin θ.\n\n3) Check all claimed orders actually exist: if nλ/d > 1 for a given n, that maximum is physically absent (sin θ cannot exceed 1). For 600 lines/mm and λ = 532 nm, n = 4 gives sin θ = 1.27 > 1, so only n = 0, ±1, ±2, ±3 are visible.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Core Practical 8: Use tan \u03b8 = x/D for Small Angles",
        text: "Measure the distance x from central maximum to first-order maximum on the screen, and the distance D from grating to screen. Then tan \u03b8 \u2248 x/D. For the grating equation n\u03bb = d sin \u03b8, you can often approximate sin \u03b8 \u2248 tan \u03b8 when \u03b8 is small (less than 30\u00b0), so n\u03bb \u2248 d(x/D)."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Identify Order Correctly: Central Max is n=0",
        text: "The brightest central spot is the zero-order maximum (n=0, occurs at \u03b8=0\u00b0). The next bright spots on either side are first-order (n=\u00b11), then second-order (n=\u00b12), etc. Students sometimes miscounted by treating the central max as n=1 \u2014 always verify you're measuring from the correct reference."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'State the <strong>diffraction</strong> grating equation. Define each symbol and state the units.' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Describe how you measure the <strong>diffraction</strong> angle θ in this experiment. What two lengths do you measure?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'A 300 lines/mm grating gives a first-order maximum at 11.5°. Calculate the <strong>wavelength</strong> of the light.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
