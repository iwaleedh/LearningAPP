export const note_physics_1_3_3 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "State and apply Newton's Third Law of Motion, identify action-reaction pairs, and distinguish them from pairs of balanced equilibrium forces" } },
    { id: 'head-1', type: 'heading', data: { text: "Newton's Third Law of Motion", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "Newton's Third Law states: If object A exerts a <strong>force</strong> on object B, then object B exerts an equal and opposite <strong>force</strong> on object A." },
      { text: "This is commonly summarised as: every action has an equal and opposite reaction." },
      { text: "It applies to all types of <strong>force</strong> — gravitational, contact, electromagnetic — and always involves two objects." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Key Characteristics of a Newton Third Law Pair The two forces in a Newton Third Law pair always have four defining properties: (1) They are equal in magnitude." },
      { text: "(2) They are opposite in direction." },
      { text: "(3) They are the same type of <strong>force</strong> (e.g. both gravitational, or both normal contact forces)" },
      { text: "(4) They act on different objects — never on the same object." },
      { text: "If any of these four properties is not met, the pair of forces is NOT a Newton Third Law pair." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="180" fill="#f8f9fa"/><rect x="30" y="70" width="110" height="50" rx="6" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="85" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">Object A</text><rect x="260" y="70" width="110" height="50" rx="6" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="315" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c92a2a" text-anchor="middle">Object B</text><line x1="140" y1="90" x2="260" y2="90" stroke="#fa5252" stroke-width="3"/><polygon points="260,90 248,84 248,96" fill="#fa5252"/><text x="200" y="82" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">Force by A on B</text><line x1="260" y1="105" x2="140" y2="105" stroke="#339af0" stroke-width="3"/><polygon points="140,105 152,99 152,111" fill="#339af0"/><text x="200" y="120" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">Force by B on A (equal &amp; opposite)</text><text x="200" y="22" font-family="sans-serif" font-size="14" font-weight="bold" fill="#212529" text-anchor="middle">Newton Third Law: Action-Reaction Pair</text><text x="200" y="165" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Same magnitude, opposite direction, same force type, different objects</text></svg>', caption: "Newton's Third Law: the two forces in a pair act on DIFFERENT objects" } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Example 1: Book on a Table The Earth exerts a gravitational <strong>force</strong> (<strong>weight</strong> W) downward on the book." },
      { text: "By Newton's Third Law, the book exerts an equal gravitational <strong>force</strong> upward on the Earth." },
      { text: "This pair consists of two gravitational forces on two different objects." },
      { text: "Separately, the table exerts a normal <strong>force</strong> N upward on the book, and the book exerts an equal and opposite normal <strong>force</strong> downward on the table." },
      { text: "This is a second Newton Third Law pair." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Common Misconception: Third Law vs <strong>Equilibrium</strong> Students often confuse Newton Third Law pairs with balanced <strong>equilibrium</strong> forces." },
      { text: "In the book example, the <strong>weight</strong> W (Earth on book, gravitational) and the normal <strong>force</strong> N (table on book, contact) are equal and opposite — but they are NOT a Newton Third Law pair because they are different types of <strong>force</strong> and both act on the same object." },
      { text: "A genuine Newton Third Law pair always involves two different objects and the same type of <strong>force</strong>." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#f8f9fa"/><rect x="148" y="85" width="104" height="50" rx="4" fill="#fff3bf" stroke="#fab005" stroke-width="2"/><text x="200" y="115" font-family="sans-serif" font-size="13" font-weight="bold" fill="#e67700" text-anchor="middle">BOOK</text><rect x="98" y="135" width="204" height="28" rx="4" fill="#dee2e6" stroke="#adb5bd" stroke-width="2"/><text x="200" y="153" font-family="sans-serif" font-size="12" fill="#495057" text-anchor="middle">TABLE</text><line x1="200" y1="85" x2="200" y2="45" stroke="#339af0" stroke-width="3"/><polygon points="200,45 193,58 207,58" fill="#339af0"/><text x="280" y="60" font-family="sans-serif" font-size="10" fill="#1864ab">N (table on book)</text><line x1="200" y1="135" x2="200" y2="175" stroke="#fa5252" stroke-width="3"/><polygon points="200,175 193,163 207,163" fill="#fa5252"/><text x="275" y="178" font-family="sans-serif" font-size="10" fill="#c92a2a">W (Earth on book)</text><rect x="10" y="75" width="120" height="30" rx="4" fill="#ffe3e3" stroke="#fa5252" stroke-width="1" stroke-dasharray="3,2"/><text x="70" y="88" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">NOT a Newton 3 pair:</text><text x="70" y="101" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">N and W act on SAME object</text><text x="200" y="20" font-family="sans-serif" font-size="12" font-weight="bold" fill="#212529" text-anchor="middle">N and W are balanced forces, NOT a Newton 3 pair</text></svg>', caption: 'N and W both act on the book — balanced forces in equilibrium but not a Newton Third Law pair' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Example 2: Swimming A swimmer pushes backward on the water with their hands (<strong>force</strong> by swimmer on water, contact)" },
      { text: "By Newton's Third Law, the water exerts an equal and opposite <strong>force</strong> forward on the swimmer's hands." },
      { text: "This propels the swimmer through the water." },
      { text: "The reaction <strong>force</strong> is what drives the swimmer — without it, there would be no forward motion." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Example 3: Rocket Propulsion A rocket engine expels hot exhaust gases downward." },
      { text: "By Newton's Third Law, the gases exert an equal and opposite <strong>force</strong> upward on the rocket — this is the thrust." },
      { text: "Crucially, this principle works in the vacuum of space because the rocket does not push against the ground or air; it only needs to push on the exhaust gases, which push back." }
    ] } },
    { id: 'svg-103', type: 'svg', data: { svg: '<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="190" fill="#f8f9fa"/><circle cx="110" cy="95" r="35" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="110" y="92" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Skater A</text><text x="110" y="107" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">60 kg</text><circle cx="290" cy="95" r="35" fill="#ffe3e3" stroke="#fa5252" stroke-width="2"/><text x="290" y="92" font-family="sans-serif" font-size="12" font-weight="bold" fill="#c92a2a" text-anchor="middle">Skater B</text><text x="290" y="107" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">80 kg</text><line x1="145" y1="85" x2="255" y2="85" stroke="#fa5252" stroke-width="3"/><polygon points="255,85 243,79 243,91" fill="#fa5252"/><text x="200" y="75" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">F = 120 N</text><line x1="255" y1="105" x2="145" y2="105" stroke="#339af0" stroke-width="3"/><polygon points="145,105 157,99 157,111" fill="#339af0"/><text x="200" y="120" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">F = 120 N (reaction)</text><text x="110" y="155" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">a = 120/60 = 2.0 m/s&#178;</text><text x="290" y="155" font-family="sans-serif" font-size="11" fill="#c92a2a" text-anchor="middle">a = 120/80 = 1.5 m/s&#178;</text><text x="200" y="15" font-family="sans-serif" font-size="12" font-weight="bold" fill="#212529" text-anchor="middle">Worked Example: Two Ice Skaters</text><text x="200" y="178" font-family="sans-serif" font-size="10" fill="#495057" text-anchor="middle">Forces equal; accelerations differ (different masses)</text></svg>', caption: 'Two skaters: equal and opposite forces but different accelerations due to different masses' } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example Two ice skaters face each other." },
      { text: "Skater A (60 kg) pushes skater B (80 kg) with a <strong>force</strong> of 120 N to the right." },
      { text: "By Newton's Third Law, B pushes A with 120 N to the left." },
      { text: "<strong>Acceleration</strong> of A = 120 / 60 = 2.0 m/s^2 to the left." },
      { text: "<strong>Acceleration</strong> of B = 120 / 80 = 1.5 m/s^2 to the right." },
      { text: "The forces are equal but the accelerations differ because the masses differ." }
    ] } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "State Newton's Third Law and list all four properties of a Newton Third Law pair", checked: false },
      { text: "Identify genuine Newton Third Law pairs in examples (swimming, rockets, collisions)", checked: false },
      { text: "Explain why the normal force N and weight W on a stationary book are NOT a Newton Third Law pair", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "Newton's Third Law: if A exerts a <strong>force</strong> on B, then B exerts an equal and opposite <strong>force</strong> on A. The pair is equal in magnitude, opposite in direction, the same type of <strong>force</strong>, and acts on different objects. Do not confuse with balanced <strong>equilibrium</strong> forces, which act on the same object." } },
    { id: 'enr-svg-triangle', type: 'svg', data: { svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg"><rect width="460" height="260" fill="#f8f9fa"/><text x="230" y="22" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#212529">Triangle of Forces</text><line x1="260" y1="65" x2="260" y2="193" stroke="#2f9e44" stroke-width="3"/><polygon points="260,205 254,193 266,193" fill="#2f9e44"/><text x="283" y="140" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2f9e44">W</text><line x1="260" y1="205" x2="211" y2="132" stroke="#1971c2" stroke-width="3"/><polygon points="204,122 216,129 206,135" fill="#1971c2"/><text x="216" y="183" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1971c2">T₁</text><line x1="204" y1="122" x2="252" y2="74" stroke="#e03131" stroke-width="3"/><polygon points="260,65 256,78 247,69" fill="#e03131"/><text x="211" y="82" font-family="sans-serif" font-size="13" font-weight="bold" fill="#e03131">T₂</text><text x="355" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#495057">Closed triangle</text><text x="355" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#495057">= equilibrium</text><text x="80" y="133" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#868e96">Head-to-tail</text><text x="80" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#868e96">arrangement</text></svg>', caption: 'Three forces in equilibrium form a closed triangle' } },
    { id: 'enr-worked-cables', type: 'callout', data: { style: 'worked', title: 'Cable Junction: Two-Cable System', text: 'Cable junction: <strong>weight</strong> = 200 N, cables at 40° and 60° to horizontal.\nHorizontal: T₁ × cos 40° = T₂ × cos 60°\nVertical: T₁ × sin 40° + T₂ × sin 60° = 200 N\nSolving: T₁ = 87.9 N, T₂ = 126.8 N.\nBridge and crane engineers solve these every day.' } },
    { id: 'enr-tip-equil', type: 'callout', data: { style: 'tip', title: 'Exam Tip: 3 Forces in Equilibrium', text: 'For 3 forces in <strong>equilibrium</strong> — either resolve into 2 components (ΣFx = 0, ΣFy = 0) or draw triangle of forces and apply the sine rule. Always define a sign convention before resolving.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: "State Newton's Third Law of Motion" },
    { id: 'cue-2', blockId: 'para-3', prompt: "List the four characteristics that define a Newton Third Law force pair" },
    { id: 'cue-3', blockId: 'para-5', prompt: "Why are the normal force N and weight W on a book NOT a Newton Third Law pair?" }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
