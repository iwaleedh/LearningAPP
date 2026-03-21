export const note_physics_5_32_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Write and apply the equations x = A cos(ωt) and x = A sin(ωt) for SHM displacement; derive expressions for velocity and acceleration; sketch x, v, and a vs time graphs; relate the phase differences between displacement, velocity, and acceleration" } },
    { id: 'head-1', type: 'heading', data: { text: "Displacement-Time Graph for an SHM Oscillator", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "In simple harmonic motion, the displacement x from the equilibrium position varies sinusoidally with time." },
      { text: "The exact form depends on the starting condition: if the oscillator starts at maximum displacement (amplitude A) at t = 0: x = A cos(ωt)" },
      { text: "If the oscillator starts at equilibrium moving in the positive direction at t = 0: x = A sin(ωt)" },
      { text: "Here A is the amplitude (maximum displacement) and ω = 2π/T = 2πf is the angular frequency (rad s⁻¹)" },
      { text: "These equations describe the positions of a mass on a spring or a pendulum bob as functions of time." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Velocity and Acceleration from Differentiation Differentiating x = A cos(ωt) gives the velocity: v = dx/dt = −Aω sin(ωt)" },
      { text: "The maximum speed is v_max = Aω (occurs at x = 0, the equilibrium position)" },
      { text: "Differentiating again gives acceleration: a = dv/dt = −Aω² cos(ωt) = −ω²x." },
      { text: "This confirms the SHM condition (a = −ω²x): the acceleration is proportional to displacement and opposite in sign." },
      { text: "Maximum acceleration: a_max = Aω² (at x = ±A, the extremes of motion)." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 175" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="175" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">x, v, and a vs Time for SHM (starts at x = A)</text><line x1="20" y1="88" x2="390" y2="88" stroke="#adb5bd" stroke-width="1"/><line x1="20" y1="88" x2="20" y2="25" stroke="#212529" stroke-width="1.5"/><path d="M 20 45 Q 50 25 80 45 Q 110 65 140 45 Q 170 25 200 45 Q 230 65 260 45 Q 290 25 320 45 Q 350 65 380 45" stroke="#339af0" stroke-width="2" fill="none"/><text x="385" y="48" font-family="sans-serif" font-size="9" fill="#1864ab">x</text><path d="M 20 88 Q 50 65 80 88 Q 110 111 140 88 Q 170 65 200 88 Q 230 111 260 88 Q 290 65 320 88 Q 350 111 380 88" stroke="#40c057" stroke-width="2" fill="none" stroke-dasharray="4,2"/><text x="385" y="72" font-family="sans-serif" font-size="9" fill="#2b8a3e">v</text><path d="M 20 131 Q 50 111 80 131 Q 110 151 140 131 Q 170 111 200 131 Q 230 151 260 131 Q 290 111 320 131 Q 350 151 380 131" stroke="#fa5252" stroke-width="2" fill="none" stroke-dasharray="2,2"/><text x="385" y="120" font-family="sans-serif" font-size="9" fill="#c92a2a">a</text><text x="200" y="155" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">x = A cos(&#969;t) &#8192; v leads x by &#960;/2 &#8192; a = &#8722;&#969;&#178;x (antiphase to x)</text></svg>', caption: 'x = A cos(ωt) (blue), v = −Aω sin(ωt) (green, leads x by π/2), a = −Aω²cos(ωt) (red, antiphase to x).' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Phase Relationships When x = A cos(ωt): v = −Aω sin(ωt) = Aω cos(ωt + π/2)" },
      { text: "Velocity leads displacement by π/2 (90°). a = −Aω² cos(ωt) = Aω² cos(ωt + π)" },
      { text: "Acceleration is in antiphase (180° out of phase) with displacement." },
      { text: "Summary: when displacement is maximum (x = +A), velocity is zero and acceleration is maximum negative (a = −Aω²)" },
      { text: "When displacement is zero (x = 0), velocity is maximum (v = ±Aω) and acceleration is zero." },
      { text: "The maximum magnitudes: x_max = A; v_max = Aω; a_max = Aω²." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Velocity-Displacement Relationship From x = A cos(ωt) and v = −Aω sin(ωt): Using the identity sin²(ωt) + cos²(ωt) = 1: (v/Aω)² + (x/A)² = 1." },
      { text: "Rearranging: v² = ω²(A² − x²), so v = ±ω√(A² − x²)" },
      { text: "This gives velocity at any displacement x without needing to know t." },
      { text: "At x = 0: v = ±ωA (maximum speed)" },
      { text: "At x = ±A: v = 0." },
      { text: "This is used to draw the v vs x graph — an ellipse." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="165" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">v vs x and Energy in SHM</text><line x1="30" y1="90" x2="185" y2="90" stroke="#212529" stroke-width="2"/><line x1="107" y1="28" x2="107" y2="150" stroke="#212529" stroke-width="2"/><text x="107" y="162" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">x (displacement)</text><text x="190" y="94" font-family="sans-serif" font-size="9" fill="#495057">+A</text><text x="22" y="94" font-family="sans-serif" font-size="9" fill="#495057">&#8722;A</text><ellipse cx="107" cy="90" rx="75" ry="55" fill="none" stroke="#40c057" stroke-width="2.5"/><text x="155" y="76" font-family="sans-serif" font-size="9" fill="#2b8a3e">v = &#177;&#969;&#8730;(A&#178;&#8722;x&#178;)</text><text x="107" y="37" font-family="sans-serif" font-size="8" fill="#2b8a3e" text-anchor="middle">v_max = &#969;A (at x=0)</text><line x1="215" y1="148" x2="380" y2="148" stroke="#212529" stroke-width="2"/><line x1="215" y1="148" x2="215" y2="28" stroke="#212529" stroke-width="2"/><text x="298" y="162" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">x (displacement)</text><text x="196" y="92" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle" transform="rotate(-90 196,92)">Energy</text><path d="M 215 148 Q 240 38 298 38 Q 356 38 380 148" stroke="#fa5252" stroke-width="2" fill="none"/><path d="M 215 38 Q 240 148 298 148 Q 356 148 380 38" stroke="#339af0" stroke-width="2" fill="none"/><line x1="215" y1="38" x2="380" y2="38" stroke="#2b8a3e" stroke-width="2"/><text x="385" y="42" font-family="sans-serif" font-size="8" fill="#2b8a3e">E_T</text><text x="340" y="78" font-family="sans-serif" font-size="8" fill="#fa5252">PE</text><text x="240" y="78" font-family="sans-serif" font-size="8" fill="#1864ab">KE</text></svg>', caption: 'v vs x: ellipse (v = ±ω√(A²−x²)). Energy: KE = ½mω²(A²−x²); PE = ½mω²x²; Total E = ½mω²A² (constant).' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Energy in SHM The total mechanical energy in SHM is constant (no energy loss in ideal SHM): E_total = ½mω²A² = ½kA² (constant)" },
      { text: "This energy alternates between kinetic and potential forms." },
      { text: "At x = 0 (equilibrium): all KE, no PE." },
      { text: "KE = ½mv² = ½mω²A²" },
      { text: "At x = ±A (extremes): all PE, no KE." },
      { text: "PE = ½kA² = ½mω²A²" },
      { text: "At intermediate displacement x: KE = ½mω²(A² − x²); PE = ½mω²x² = ½kx²" },
      { text: "The total energy is proportional to A² — doubling the amplitude quadruples the total energy." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Sketching the Graphs A correct displacement-time graph for SHM starting at maximum displacement: starts at x = +A at t = 0; crosses zero at t = T/4; reaches x = −A at t = T/2; returns to x = +A at t = T." },
      { text: "The velocity graph is the derivative of x: cosine → negative sine." },
      { text: "Starts at zero, maximum negative at T/4, zero at T/2, maximum positive at 3T/4." },
      { text: "The acceleration graph is proportional to −x and therefore in antiphase with x: starts at −Aω² (pointing towards equilibrium), zero at T/4, +Aω² at T/2." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="155" fill="#0f172a"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Key Values at Notable Points in SHM</text><rect x="15" y="28" width="370" height="115" rx="5" fill="#1e293b" stroke="#dee2e6" stroke-width="1"/><text x="60" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#495057" text-anchor="middle">Position</text><text x="145" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1864ab" text-anchor="middle">x</text><text x="220" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2b8a3e" text-anchor="middle">v</text><text x="295" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c92a2a" text-anchor="middle">a</text><text x="355" y="46" font-family="sans-serif" font-size="10" font-weight="bold" fill="#495057" text-anchor="middle">KE</text><line x1="20" y1="51" x2="380" y2="51" stroke="#dee2e6" stroke-width="1"/><text x="60" y="68" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Equilibrium</text><text x="145" y="68" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">0</text><text x="220" y="68" font-family="sans-serif" font-size="9" fill="#2b8a3e" text-anchor="middle">&#177;&#969;A (max)</text><text x="295" y="68" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">0</text><text x="355" y="68" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Max</text><text x="60" y="86" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Extreme (+A)</text><text x="145" y="86" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">+A</text><text x="220" y="86" font-family="sans-serif" font-size="9" fill="#2b8a3e" text-anchor="middle">0</text><text x="295" y="86" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">&#8722;&#969;&#178;A (max)</text><text x="355" y="86" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">0</text><text x="60" y="104" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Extreme (&#8722;A)</text><text x="145" y="104" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">&#8722;A</text><text x="220" y="104" font-family="sans-serif" font-size="9" fill="#2b8a3e" text-anchor="middle">0</text><text x="295" y="104" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">+&#969;&#178;A (max)</text><text x="355" y="104" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">0</text><text x="60" y="122" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">Intermediate</text><text x="145" y="122" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">x</text><text x="220" y="122" font-family="sans-serif" font-size="9" fill="#2b8a3e" text-anchor="middle">&#177;&#969;&#8730;(A&#178;&#8722;x&#178;)</text><text x="295" y="122" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">&#8722;&#969;&#178;x</text><text x="355" y="122" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">&#189;m&#969;&#178;(A&#178;&#8722;x&#178;)</text></svg>', caption: 'Key values: at equilibrium (x=0): v max, a=0. At extremes (x=±A): v=0, a max. v = ±ω√(A²−x²) at any x.' } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Equations', text: 'x = A cos(ωt) (starts at max displacement). v = −Aω sin(ωt) = ±ω√(A²−x²). a = −Aω²cos(ωt) = −ω²x. Phase: v leads x by π/2; a antiphase to x. Maxima: x_max = A; v_max = Aω; a_max = Aω². Energy: E_total = ½mω²A²; KE = ½mω²(A²−x²); PE = ½mω²x².' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Write x = A cos(ωt) and derive expressions for v and a by differentiation; state the phase relationship between x, v, and a", checked: false },
      { text: "Apply v = ±ω√(A²−x²) to find the speed at any given displacement", checked: false },
      { text: "Sketch qualitatively correct x, v, and a vs time graphs for SHM, labelling the amplitudes and period", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "SHM displacement: x = A cos(ωt) (start at max) or x = A sin(ωt) (start at equilibrium). Velocity: v = −Aω sin(ωt); leads x by π/2. Acceleration: a = −Aω²cos(ωt) = −ω²x; antiphase to x. Speed at displacement x: v = ±ω√(A²−x²). At x = 0: v = ±Aω (max), a = 0. At x = ±A: v = 0, a = ∓Aω² (max). E_total = ½mω²A² = constant; alternates between KE and PE." } },
    { id: 'enr-svg-1', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#0f172a"/><line x1="20" y1="100" x2="390" y2="100" stroke="#adb5bd" stroke-width="1"/><path d="M 20 60 Q 60 20 100 60 Q 140 100 180 60 Q 220 20 260 60 Q 300 100 340 60 Q 380 20 390 60" stroke="#339af0" stroke-width="2.5" fill="none"/><path d="M 20 100 Q 60 60 100 100 Q 140 140 180 100 Q 220 60 260 100 Q 300 140 340 100 Q 380 60 390 100" stroke="#40c057" stroke-width="2" fill="none" stroke-dasharray="5,3"/><path d="M 20 140 Q 60 100 100 140 Q 140 180 180 140 Q 220 100 260 140 Q 300 180 340 140 Q 380 100 390 140" stroke="#fa5252" stroke-width="2" fill="none" stroke-dasharray="2,3"/><text x="200" y="193" font-family="sans-serif" font-size="9" fill="#495057" text-anchor="middle">x (blue) &#8212; v leads x by &#960;/2 (green dashed) &#8212; a antiphase to x (red dotted)</text></svg>', caption: 'Phase relationships: displacement x (blue), velocity v (green, π/2 ahead of x), acceleration a (red, antiphase to x).' } },
    { id: 'enr-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example: Speed at a Given Displacement', text: 'A mass oscillates with A = 0.08 m and T = 0.40 s. Find the speed when x = 0.06 m.\nω = 2π/T = 2π/0.40 = 5π ≈ 15.7 rad s⁻¹.\nv = ω√(A² − x²) = 15.7 × √(0.08² − 0.06²) = 15.7 × √(0.0028) ≈ 0.83 m s⁻¹.\nNote: v_max = Aω = 0.08 × 15.7 ≈ 1.26 m s⁻¹ (at x = 0).' } },
    { id: 'enr-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Phase & Energy', text: 'Remember: a is always antiphase to x (a = −ω²x), so acceleration and displacement graphs are mirror images. Energy ∝ A² — if the amplitude doubles, total energy quadruples. On graph sketches, v must be zero wherever the gradient of the x–t graph is zero (i.e. at the peaks and troughs).' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip: SHM Graphs",
        text: "Remember the phase relationships: At maximum displacement, velocity is zero and acceleration is at a maximum. As the oscillator passes through the equilibrium position, displacement and acceleration are zero, but velocity is at a maximum."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Starting from x = A cos(ωt), differentiate to find v and a. What are the maximum values of each?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'State the phase relationship between x, v, and a in SHM. When is velocity maximum and when is it zero?' },
    { id: 'cue-3', blockId: 'para-5', prompt: 'Derive v = ±ω√(A²−x²). An oscillator has amplitude 0.1 m and ω = 10 rad s⁻¹. Find the speed at x = 0.06 m.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
