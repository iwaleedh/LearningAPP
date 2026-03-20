export const note_physics_1_9_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Describe the ball-bearing method for measuring viscosity; identify variables; apply Stokes' law to calculate viscosity coefficient η; evaluate sources of error" } },
    { id: 'head-1', type: 'heading', data: { text: "Core Practical 4: Investigating Viscosity", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "This core practical determines the dynamic <strong>viscosity</strong> η of a viscous liquid by measuring the <strong>terminal velocity</strong> of small ball bearings falling through the fluid." },
      { text: "The method is based on Stokes' Law, which relates the <strong>drag</strong> <strong>force</strong> on a sphere to its radius, <strong>velocity</strong>, and the <strong>viscosity</strong> of the fluid." },
      { text: "Understanding the procedure, variables, analysis, and limitations is required for A-Level Physics examinations." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Principle: Stokes' Law and <strong>Terminal Velocity</strong> When a small sphere falls through a viscous fluid, it experiences three forces: <strong>weight</strong> W = (4/3)πr³ρ_ball × g (downward), <strong>upthrust</strong> U = (4/3)πr³ρ_fluid × g (upward), and viscous <strong>drag</strong> F_drag = 6πηrv (upward, from Stokes' Law)" },
      { text: "At <strong>terminal velocity</strong> v_t, the forces are balanced: W = U + F_drag." },
      { text: "Rearranging: 6πηr v_t = (4/3)πr³(ρ_ball - ρ_fluid)g." },
      { text: "Solving for η: η = 2r²(ρ_ball - ρ_fluid)g / (9 v_t)." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Forces on Ball Bearing at Terminal Velocity</text><rect x="155" y="30" width="90" height="150" rx="4" fill="#0e4a56" stroke="#339af0" stroke-width="2"/><text x="200" y="48" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">viscous fluid</text><circle cx="200" cy="115" r="18" fill="#1e293b" stroke="#495057" stroke-width="2"/><text x="200" y="119" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">ball</text><line x1="200" y1="133" x2="200" y2="168" stroke="#fa5252" stroke-width="3"/><polygon points="200,168 195,156 205,156" fill="#fa5252"/><text x="230" y="162" font-family="sans-serif" font-size="11" fill="#c92a2a" font-weight="bold">W</text><line x1="200" y1="97" x2="200" y2="72" stroke="#40c057" stroke-width="2.5"/><polygon points="200,72 195,84 205,84" fill="#40c057"/><text x="225" y="80" font-family="sans-serif" font-size="11" fill="#2b8a3e" font-weight="bold">U</text><line x1="200" y1="103" x2="200" y2="62" stroke="#fab005" stroke-width="2.5"/><polygon points="200,62 195,73 205,73" fill="#fab005"/><text x="155" y="68" font-family="sans-serif" font-size="11" fill="#e67700" font-weight="bold">F_drag</text><rect x="255" y="65" width="130" height="70" rx="4" fill="#44370a" stroke="#fab005" stroke-width="1.5"/><text x="320" y="84" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e67700" text-anchor="middle">Terminal v:</text><text x="320" y="100" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">W = U + F_drag</text><text x="320" y="116" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">a = 0</text><text x="320" y="130" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">v = constant</text></svg>', caption: 'At terminal velocity, W = U + Fdrag; ball falls at constant speed a = 0' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Apparatus and Setup A tall measuring cylinder (at least 30 cm) is filled with the viscous liquid (e.g. glycerol or a thick oil)" },
      { text: "Rubber bands are placed around the cylinder at equal intervals (e.g. every 5 cm) to mark timing sections below the point where <strong>terminal velocity</strong> is reached." },
      { text: "A ball bearing is dropped centrally into the fluid using a thin tube or guide to ensure it falls along the centre of the cylinder (avoiding wall effects)" },
      { text: "A digital stopwatch (or light gates) is used to time the ball between bands." },
      { text: "Vernier calipers measure the diameter of the ball bearing; digital scales measure its <strong>mass</strong>." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Variables Independent variable: radius r of the ball bearing (use different sized balls)" },
      { text: "Dependent variable: <strong>terminal velocity</strong> v_t (measured as distance between rubber bands / time taken)" },
      { text: "Control variables: fluid type and temperature (<strong>viscosity</strong> of a liquid decreases significantly with increasing temperature — this is a major source of systematic error if not controlled); ensuring <strong>terminal velocity</strong> is reached before timing begins (check by timing over two equal sections — if equal, <strong>terminal velocity</strong> has been reached)." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="195" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Viscosity Experiment: v_t vs r&#178; Graph</text><line x1="50" y1="160" x2="365" y2="160" stroke="#212529" stroke-width="2"/><line x1="50" y1="160" x2="50" y2="30" stroke="#212529" stroke-width="2"/><text x="207" y="180" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">r&#178; / m&#178;</text><text x="22" y="97" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 22,97)">v_t / m/s</text><line x1="50" y1="160" x2="340" y2="45" stroke="#339af0" stroke-width="2.5"/><text x="70" y="156" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="120" y="135" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="185" y="107" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="255" y="76" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><text x="320" y="48" font-family="sans-serif" font-size="10" fill="#c92a2a">&#x2715;</text><rect x="60" y="28" width="210" height="30" rx="4" fill="#0a2e1a" stroke="#40c057" stroke-width="1.5"/><text x="165" y="42" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">gradient = 2(&#961;_ball - &#961;_fluid)g / 9&#951;</text><text x="165" y="54" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">so &#951; = 2(&#961;_ball - &#961;_fluid)g / (9 x gradient)</text></svg>', caption: 'v_t vs r² gives a straight line through the origin; viscosity η found from the gradient' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Procedure (1) Set up the cylinder of fluid and attach rubber bands at regular known intervals." },
      { text: "(2) Measure the diameter of each ball bearing using vernier calipers; calculate radius r and r²" },
      { text: "(3) Drop the ball centrally; record the time to fall between the lower timing marks (ensuring <strong>terminal velocity</strong> has been reached)" },
      { text: "(4) Repeat three times for each ball size; take a mean time and calculate v_t = distance / mean time." },
      { text: "(5) Plot a graph of v_t (y-axis) against r² (x-axis); draw a best-fit straight line through the origin." },
      { text: "(6) Measure the gradient; use η = 2(ρ_ball - ρ_fluid)g / (9 × gradient) to find <strong>viscosity</strong>." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Analysis: Why v_t is Proportional to r² From the equation v_t = 2r²(ρ_ball - ρ_fluid)g / (9η), the <strong>terminal velocity</strong> is directly proportional to r² (since all other quantities are constant for a given ball material and fluid)" },
      { text: "Therefore, a graph of v_t against r² should give a straight line through the origin with gradient = 2(ρ_ball - ρ_fluid)g / (9η)" },
      { text: "Rearranging for <strong>viscosity</strong>: η = 2(ρ_ball - ρ_fluid)g / (9 × gradient)." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Sources of Error and Improvements Systematic errors: the ball not reaching <strong>terminal velocity</strong> before timing begins (use lower rubber bands for timing section, and check by comparing times over equal intervals)" },
      { text: "Wall effects: if the ball is too close to the wall, <strong>drag</strong> is greater than Stokes' Law predicts (ensure cylinder is wide relative to ball; drop the ball centrally)" },
      { text: "Temperature changes during the experiment alter <strong>viscosity</strong> (conduct experiment at constant temperature; repeat measurements rapidly)" },
      { text: "Random errors: reaction time in manual timing (use light gates for more reliable measurements); imperfect spheres (check with vernier calipers; reject any that are not spherical)." }
    ] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Stokes\' Law (F = 6πηrv) only applies to: (1) small, smooth spheres; (2) low speeds; (3) laminar (non-<strong>turbulent</strong>) flow. Examiners may ask why the ball reaches <strong>terminal velocity</strong>, or why v_t is proportional to r² — always refer back to the <strong>force</strong> balance and the Stokes\' Law equation.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Describe the ball-bearing method for measuring viscosity, including apparatus and procedure", checked: false },
      { text: "State the three forces on a falling sphere and write the force balance at terminal velocity", checked: false },
      { text: "Explain why v_t is proportional to r², and describe the graph plotted and how η is found from it", checked: false },
      { text: "Identify two sources of error and suggest improvements", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Ball-bearing method: drop spheres through viscous fluid; measure <strong>terminal velocity</strong> v_t for different radii r. At <strong>terminal velocity</strong>: W = U + F_drag, giving v_t = 2r²(ρ_ball - ρ_fluid)g / (9η). Plot v_t vs r²: straight line through origin; η = 2(ρ_ball - ρ_fluid)g / (9 × gradient). Control temperature; use light gates; ensure <strong>terminal velocity</strong> before timing." } },
    { id: 'enr-worked-pressure', type: 'callout', data: { style: 'worked', title: 'Worked Example: Pressure at Depth', text: 'Pressure at 10 m depth in water: P=ρgh=1000×9.8×10=98,000 Pa (≈1 atm extra). At 100 m depth: P=980,000 Pa = 10 atm extra. Submarine hulls must withstand crushing pressures — titanium alloys rated to 100+ atm for research submersibles.' } },
    { id: 'enr-worked-hydraulic', type: 'callout', data: { style: 'worked', title: 'Worked Example: Hydraulic Car Lift', text: 'Hydraulic car <strong>lift</strong>: small piston area A₁=5 cm², <strong>force</strong> F₁=200 N gives pressure P=200/5=40 N/cm². Large piston area A₂=100 cm²: F₂=P×A₂=40×100=4000 N. <strong>Force</strong> multiplication factor=20. Same principle powers vehicle brakes, JCBs, aircraft landing gear.' } },
    { id: 'enr-tip-pressure', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Pressure Formulae', text: 'Exam tip: Pressure P=F/A=ρgh. Units: Pa=N/m². For fluid at depth: P_total=P₀+ρgh (include atmospheric if asked for absolute). Pascal\'s principle: pressure applied to enclosed fluid transmits equally in all directions.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Write the force balance at terminal velocity for a falling sphere. How is η derived from Stokes\' Law?' },
    { id: 'cue-2', blockId: 'para-7', prompt: 'Why is v_t proportional to r²? What graph is plotted and how is η found from it?' },
    { id: 'cue-3', blockId: 'para-8', prompt: 'State two sources of error in the viscosity experiment and how each can be reduced.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
