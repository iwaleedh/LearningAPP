export const note_physics_1_10_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define elastic strain energy, calculate it from a force-extension graph, apply the formula E = 1/2 kx^2, and explain loading and unloading behaviour" } },
    { id: 'head-1', type: 'heading', data: { text: "Elastic Strain Energy", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "When a material is stretched or compressed, work is done on it by the applied <strong>force</strong>." },
      { text: "If the material is elastic (i.e. it returns to its original shape when the <strong>force</strong> is removed), this work is stored as elastic <strong>strain</strong> energy (also called elastic <strong>potential energy</strong>)" },
      { text: "This energy can be recovered when the material springs back." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Work Done</strong> in Stretching The <strong>work done</strong> in stretching a material is equal to the area under the <strong>force</strong>-extension graph." },
      { text: "For a material obeying <strong>Hooke's Law</strong> (linear region), the <strong>force</strong>-extension graph is a straight line through the origin, and the area under it is a triangle: <strong>Work done</strong> = 1/2 x F x x = 1/2 x (kx) x x = 1/2 k x^2." },
      { text: "Where k is the spring constant (N/m) and x is the extension (m)." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="240" fill="#0f172a"/><line x1="55" y1="195" x2="330" y2="195" stroke="#212529" stroke-width="2"/><line x1="55" y1="195" x2="55" y2="30" stroke="#212529" stroke-width="2"/><text x="192" y="220" font-family="sans-serif" font-size="13" fill="#212529" text-anchor="middle">Extension x / m</text><text x="28" y="113" font-family="sans-serif" font-size="13" fill="#212529" text-anchor="middle" transform="rotate(-90 28,113)">Force F / N</text><polygon points="55,195 250,195 250,60" fill="#1c3a64" opacity="0.6"/><line x1="55" y1="195" x2="250" y2="60" stroke="#339af0" stroke-width="3"/><text x="162" y="160" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">Area = 1/2 F x</text><text x="162" y="176" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">= 1/2 kx&#178;</text><line x1="250" y1="195" x2="250" y2="60" stroke="#ced4da" stroke-width="1.5" stroke-dasharray="4,3"/><text x="250" y="210" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">x</text><line x1="55" y1="60" x2="250" y2="60" stroke="#ced4da" stroke-width="1.5" stroke-dasharray="4,3"/><text x="38" y="63" font-family="sans-serif" font-size="12" fill="#495057">F</text><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Area Under F-x Graph = Elastic Strain Energy</text></svg>', caption: 'Elastic strain energy = area under the force-extension graph = 1/2 kx squared' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "The elastic <strong>strain</strong> energy stored in a stretched spring or wire obeying <strong>Hooke's Law</strong> is: E_el = 1/2 k x^2." },
      { text: "This can also be written as E_el = 1/2 F x (since F = kx at the point of maximum extension)" },
      { text: "Both forms are equivalent for materials in the elastic (<strong>Hooke's Law</strong>) region." },
      { text: "The energy has SI units of joules (J)." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Loading and Unloading For a material that obeys <strong>Hooke's Law</strong> throughout, the loading and unloading curves are the same straight line." },
      { text: "All the elastic <strong>strain</strong> energy stored during loading is returned when the load is removed." },
      { text: "This is completely elastic behaviour." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="220" fill="#0f172a"/><line x1="55" y1="180" x2="340" y2="180" stroke="#212529" stroke-width="2"/><line x1="55" y1="180" x2="55" y2="25" stroke="#212529" stroke-width="2"/><text x="197" y="205" font-family="sans-serif" font-size="12" fill="#212529" text-anchor="middle">Extension</text><text x="28" y="103" font-family="sans-serif" font-size="12" fill="#212529" text-anchor="middle" transform="rotate(-90 28,103)">Force</text><path d="M 55 180 L 220 65" stroke="#339af0" stroke-width="3" fill="none"/><path d="M 220 65 L 55 180" stroke="#fa5252" stroke-width="3" fill="none" stroke-dasharray="8,4"/><text x="170" y="80" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Loading</text><text x="130" y="140" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Unloading</text><text x="200" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#212529" text-anchor="middle">Elastic material: loading = unloading (no energy lost)</text><path d="M 55 180 Q 130 140 220 65" stroke="#be4bdb" stroke-width="2.5" fill="none" stroke-dasharray="4,3"/><path d="M 220 65 Q 165 150 55 180" stroke="#fa5252" stroke-width="3" fill="none"/><polygon points="55,195 270,195 270,150 55,150" fill="#7f1d1d" opacity="0.3"/><text x="163" y="178" font-family="sans-serif" font-size="10" fill="#862e9c">Hysteresis loop</text><text x="163" y="190" font-family="sans-serif" font-size="10" fill="#862e9c">(inelastic material)</text></svg>', caption: 'Elastic material: same loading and unloading path. Inelastic: hysteresis loop (shaded area = energy dissipated as heat)' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Hysteresis For materials that do not return completely to their original shape (e.g. rubber or <strong>ductile</strong> metals above the <strong>elastic limit</strong>), the unloading curve lies below the loading curve." },
      { text: "The area enclosed between the loading and unloading curves (the hysteresis loop) represents the energy dissipated as heat during one loading-unloading cycle." },
      { text: "This is called hysteresis." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Applications of Elastic <strong>Strain</strong> Energy Bows and crossbows store elastic <strong>strain</strong> energy in the bent limb, which is released rapidly to the arrow." },
      { text: "Vehicle suspension springs and shock absorbers store and release <strong>strain</strong> energy to absorb road bumps." },
      { text: "Catapults and slingshots work on the same principle." },
      { text: "In each case: more extension, larger spring constant, and higher stiffness all lead to more stored energy." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Elastic Strain Energy Summary</text><rect x="20" y="35" width="170" height="55" rx="6" fill="#1c3a64" stroke="#339af0" stroke-width="2"/><text x="105" y="57" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">E_el = 1/2 kx&#178;</text><text x="105" y="75" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">= 1/2 Fx</text><text x="105" y="90" font-family="sans-serif" font-size="10" fill="#1864ab" text-anchor="middle">(Hooke region only)</text><rect x="210" y="35" width="170" height="55" rx="6" fill="#0a2e1a" stroke="#40c057" stroke-width="2"/><text x="295" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2b8a3e" text-anchor="middle">= Area under</text><text x="295" y="72" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2b8a3e" text-anchor="middle">F-x graph</text><text x="295" y="87" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">(any shape)</text><rect x="95" y="110" width="210" height="45" rx="6" fill="#44370a" stroke="#fab005" stroke-width="2"/><text x="200" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e67700" text-anchor="middle">Hysteresis loop area</text><text x="200" y="147" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">= energy lost as heat per cycle</text></svg>', caption: 'Summary of elastic strain energy formulas and the meaning of the hysteresis loop' } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A spring with spring constant 250 N/m is compressed by 8.0 cm." },
      { text: "Calculate the elastic <strong>strain</strong> energy stored." },
      { text: "Convert extension: x = 8.0 cm = 0.080 m." },
      { text: "E_el = 1/2 k x^2 = 0.5 x 250 x (0.080)^2 = 0.5 x 250 x 0.0064 = 0.80 J." },
      { text: "This energy is available to do work when the spring is released." }
    ] } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State and apply the formula E_el = 1/2 kx^2 for elastic strain energy", checked: false },
      { text: "Explain why elastic strain energy equals the area under the force-extension graph", checked: false },
      { text: "Describe the difference between elastic and inelastic loading-unloading behaviour", checked: false },
      { text: "Explain what the area of a hysteresis loop represents", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Elastic <strong>strain</strong> energy E_el = 1/2 kx^2 = 1/2 Fx = area under the F-x graph. For a <strong>Hooke's Law</strong> material, loading and unloading follow the same line and no energy is lost. Hysteresis occurs in inelastic materials; the loop area equals energy dissipated as heat per cycle." } },
    { id: 'enr-1', type: 'callout', data: { style: 'worked', title: "Core Practical: Measuring Young's Modulus of a Wire", text: "Equipment: long copper wire (~2 m), masses (up to 2 kg), micrometer, metre ruler. Method: measure starting length L and diameter d (multiple measurements, take mean). Add masses, measure extension Δl each time. Plot F vs Δl graph → gradient = k = F/Δl. Then E = kL/(πd²/4). Percentage uncertainty: largest contribution comes from d (used to the <strong>power</strong> 2): if %u(d) = 2%, then %u(d²) = 4% — use micrometer carefully and take multiple readings across different positions and orientations of the wire." } },
    { id: 'enr-2', type: 'callout', data: { style: 'warning', title: "Experimental Errors in Young's Modulus Practical", text: "(1) Wire kinks reduce effective length → use a straight wire with a small preload. (2) Parallax error in ruler reading → use a pointer/marker on the wire at eye level. (3) Wire not uniform diameter → take multiple micrometer readings in different planes and positions. (4) Material yielding at high loads → do not exceed the <strong>elastic limit</strong> (check loading and unloading curves overlap). (5) Wire <strong>mass</strong> ignored → accounts for a few percent error in longer wires." } },
    { id: 'enr-3', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Core Practical Answer Pattern', text: "For any core practical question, know: (1) the equation used and which quantities are measured, (2) how to find each variable from the graph (gradient, y-intercept, area), (3) the main sources of uncertainty and how to reduce them, (4) why the method may give an inaccurate result (systematic errors). This four-point pattern applies to all core practicals in the A-Level Physics course." } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Elastic Strain Energy from Any F-x Graph",
        text: "Elastic strain energy E_el = \u00bdkx\u00b2 = \u00bdFx = area under the force-extension graph. This area formula works for ANY shape (not just linear Hooke's Law). For curved graphs above elastic limit, you can still find elastic PE by calculating the triangular area up to the elastic limit."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Interpreting the Hysteresis Loop",
        text: "For inelastic materials, loading and unloading curves form a closed loop. The area enclosed by this loop = energy dissipated as heat per loading-unloading cycle. This shows why rubber gets warm when compressed and released repeatedly \u2014 energy is lost to heat, not recovered."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Why does the elastic strain energy equal the area under the force-extension graph?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Write the two forms of the elastic strain energy equation for a Hooke\'s Law material' },
    { id: 'cue-3', blockId: 'para-6', prompt: 'What is hysteresis? What does the hysteresis loop area represent?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
