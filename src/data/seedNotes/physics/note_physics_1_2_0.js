export const note_physics_1_2_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "State and apply the four SUVAT equations of motion to objects moving with constant acceleration; identify which equation to use from the given and unknown variables" } },
    { id: 'head-1', type: 'heading', data: { text: "Equations of Motion (SUVAT)", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "The kinematic equations of motion — commonly called the SUVAT equations — describe the motion of any object moving with constant (uniform) <strong>acceleration</strong> in a straight line." },
      { text: "They are derived from the definitions of <strong>velocity</strong> and <strong>acceleration</strong> and express relationships between five variables: s (<strong>displacement</strong>, m), u (initial <strong>velocity</strong>, m/s), v (final <strong>velocity</strong>, m/s), a (<strong>acceleration</strong>, m/s²), and t (time, s)" },
      { text: "All five variables except time are <strong>vector</strong> quantities and can be positive or negative depending on the chosen positive direction." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "The Four SUVAT Equations: (1) v = u + at — relates v, u, a, t (no s)" },
      { text: "(2) s = ut + ½at² — relates s, u, a, t (no v)" },
      { text: "(3) v² = u² + 2as — relates v, u, a, s (no t)" },
      { text: "(4) s = ½(u + v)t — relates s, u, v, t (no a)" },
      { text: "Each equation contains four of the five variables." },
      { text: "To use them: identify which variables are given in the problem, identify the unknown, then choose the equation that contains exactly those four variables." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">The Four SUVAT Equations</text><rect x="15" y="30" width="370" height="30" rx="4" fill="#e7f5ff" stroke="#339af0" stroke-width="1.5"/><text x="22" y="50" font-family="sans-serif" font-size="12" fill="#1864ab" font-weight="bold">v = u + at</text><text x="200" y="50" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">no s | use when displacement not needed</text><rect x="15" y="65" width="370" height="30" rx="4" fill="#d3f9d8" stroke="#40c057" stroke-width="1.5"/><text x="22" y="85" font-family="sans-serif" font-size="12" fill="#2b8a3e" font-weight="bold">s = ut + &#189;at&#178;</text><text x="200" y="85" font-family="sans-serif" font-size="11" fill="#2b8a3e" text-anchor="middle">no v | use when final velocity not needed</text><rect x="15" y="100" width="370" height="30" rx="4" fill="#fff3bf" stroke="#fab005" stroke-width="1.5"/><text x="22" y="120" font-family="sans-serif" font-size="12" fill="#e67700" font-weight="bold">v&#178; = u&#178; + 2as</text><text x="200" y="120" font-family="sans-serif" font-size="11" fill="#e67700" text-anchor="middle">no t | use when time not needed</text><rect x="15" y="135" width="370" height="30" rx="4" fill="#ffe3e3" stroke="#fa5252" stroke-width="1.5"/><text x="22" y="155" font-family="sans-serif" font-size="12" fill="#c92a2a" font-weight="bold">s = &#189;(u + v)t</text><text x="200" y="155" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">no a | use when acceleration not needed</text></svg>', caption: 'The four SUVAT equations: each omits one of the five variables — choose based on what is given and unknown' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "When to Use SUVAT The SUVAT equations apply whenever the <strong>acceleration</strong> is constant and non-zero." },
      { text: "In exam questions this is signalled by: the object is 'uniformly accelerating' or 'uniformly decelerating'; freefall with 'air resistance negligible'; or a constant resultant <strong>force</strong> (since F = ma, constant F → constant a)" },
      { text: "They do NOT apply when <strong>acceleration</strong> is changing (e.g. falling with air resistance increasing)." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Choosing a Positive Direction Before applying any SUVAT equation, choose a positive direction (e.g. upward, or to the right) and be consistent throughout." },
      { text: "Displacements and velocities in the opposite direction are negative." },
      { text: "For objects thrown upward: take upward as positive, so u is positive and a = -9.81 m/s² (downward)" },
      { text: "An object decelerating has <strong>acceleration</strong> with the opposite sign to its <strong>velocity</strong>." }
    ] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Freefall Under Gravity Any object falling freely under gravity (no air resistance) has <strong>acceleration</strong> a = g = 9.81 m/s² downward." },
      { text: "Taking downward as positive: a = +9.81 m/s²" },
      { text: "Taking upward as positive: a = -9.81 m/s²" },
      { text: "An object thrown upward reaches maximum height when v = 0." },
      { text: "An object starting from rest has u = 0." },
      { text: "An object returning to the same height has net <strong>displacement</strong> s = 0 (useful for finding time of flight: s = ut + ½at² = 0 gives two solutions)." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">SUVAT Strategy: How to Choose an Equation</text><rect x="15" y="30" width="370" height="138" rx="6" fill="#f1f3f5" stroke="#ced4da" stroke-width="1.5"/><text x="200" y="52" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">Step 1: List given variables (e.g. u, a, t known)</text><text x="200" y="70" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">Step 2: Identify unknown (e.g. find s)</text><text x="200" y="88" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">Step 3: Pick equation with those 4 variables</text><text x="200" y="108" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Example: u=0, a=9.81, t=3 s, find s</text><text x="200" y="125" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">No v given or needed &#8594; use s = ut + &#189;at&#178;</text><text x="200" y="143" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">s = 0 + &#189;(9.81)(3&#178;) = 44.1 m</text><text x="200" y="160" font-family="sans-serif" font-size="11" fill="#868e96" text-anchor="middle">Always assign signs before substituting</text></svg>', caption: 'Four-step strategy: list known variables, identify unknown, choose equation, substitute with signs' } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A car accelerates from rest at 2.5 m/s² along a straight road." },
      { text: "Find: (a) its <strong>velocity</strong> after 6 s, and (b) the distance covered." },
      { text: "Given: u = 0, a = 2.5 m/s², t = 6 s." },
      { text: "(a) v = u + at = 0 + 2.5 × 6 = 15 m/s." },
      { text: "(b) s = ut + ½at² = 0 + ½(2.5)(36) = 45 m." },
      { text: "Check using v² = u² + 2as: 15² = 0 + 2(2.5)(45) = 225 ✓." }
    ] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example 2 (Deceleration) A train travelling at 30 m/s decelerates at 1.5 m/s²" },
      { text: "How far does it travel before stopping? Given: u = 30 m/s, v = 0 (stops), a = -1.5 m/s², find s." },
      { text: "No t needed → use v² = u² + 2as: 0 = 900 + 2(-1.5)s, so 3s = 900, s = 300 m." },
      { text: "The deceleration is negative because it opposes the direction of motion." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Point', text: 'SUVAT only applies for CONSTANT <strong>acceleration</strong>. All five variables (s, u, v, a, t) must be in the same direction. Assign a positive direction first; any <strong>vector</strong> in the opposite direction is negative.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State all four SUVAT equations and identify which variable each omits", checked: false },
      { text: "Choose the correct SUVAT equation given three known variables", checked: false },
      { text: "Apply SUVAT to freefall problems, correctly assigning signs to g", checked: false },
      { text: "Solve a two-stage problem using SUVAT (e.g. ball thrown upward then falls back)", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "SUVAT equations apply for constant <strong>acceleration</strong> only. Variables: s, u, v, a, t. Equations: (1) v=u+at, (2) s=ut+½at², (3) v²=u²+2as, (4) s=½(u+v)t. Choose by identifying which equation contains exactly the given and unknown variables. Always assign a positive direction and use negative values for opposite directions." } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'State all four SUVAT equations. Which variable does each omit?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Under what conditions do SUVAT equations apply? Give two exam clues that indicate constant acceleration.' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'A car starts from rest with acceleration 2.5 m/s². Find velocity after 6 s and distance covered.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
