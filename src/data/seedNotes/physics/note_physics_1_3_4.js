export const note_physics_1_3_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Define momentum; use p = mv; relate impulse to change in momentum; apply Newton's Second Law in the form F = Δp/Δt" } },
    { id: 'head-1', type: 'heading', data: { text: "Momentum", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [
      { text: "<strong>Momentum</strong> is a <strong>vector</strong> quantity that describes the motion of an object and how difficult it is to stop." },
      { text: "It is fundamental to understanding collisions and explosions, and provides an alternative formulation of Newton's Second Law." },
      { text: "The <strong>conservation of momentum</strong> (covered in note 1_3_5) follows directly from Newton's Third Law and the definition of <strong>momentum</strong>." }
    ] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [
      { text: "Defining <strong>Momentum</strong> The <strong>momentum</strong> p of an object is defined as the product of its <strong>mass</strong> and <strong>velocity</strong>: p = mv, where p is <strong>momentum</strong> in kg m/s (or N s), m is <strong>mass</strong> in kg, and v is <strong>velocity</strong> in m/s." },
      { text: "<strong>Momentum</strong> is a <strong>vector</strong> — its direction is the same as the <strong>velocity</strong>." },
      { text: "A 1000 kg car moving at 20 m/s north has <strong>momentum</strong> 20 000 kg m/s north." },
      { text: "A 0.05 kg tennis ball moving at 60 m/s has <strong>momentum</strong> 3 kg m/s." },
      { text: "The SI unit of <strong>momentum</strong> is kg m/s, which is equivalent to N s." }
    ] } },
    { id: 'svg-101', type: 'svg', data: { svg: '<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="170" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Momentum p = mv</text><rect x="20" y="40" width="170" height="100" rx="6" fill="#e7f5ff" stroke="#339af0" stroke-width="2"/><text x="105" y="62" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Car: m = 1000 kg</text><text x="105" y="80" font-family="sans-serif" font-size="12" fill="#1864ab" text-anchor="middle">v = 20 m/s</text><text x="105" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1864ab" text-anchor="middle">p = 20 000 kg m/s</text><line x1="105" y1="112" x2="170" y2="112" stroke="#339af0" stroke-width="2.5"/><polygon points="170,112 160,107 160,117" fill="#339af0"/><rect x="210" y="40" width="170" height="100" rx="6" fill="#d3f9d8" stroke="#40c057" stroke-width="2"/><text x="295" y="62" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2b8a3e" text-anchor="middle">Ball: m = 0.05 kg</text><text x="295" y="80" font-family="sans-serif" font-size="12" fill="#2b8a3e" text-anchor="middle">v = 60 m/s</text><text x="295" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2b8a3e" text-anchor="middle">p = 3 kg m/s</text><line x1="295" y1="112" x2="360" y2="112" stroke="#40c057" stroke-width="2.5"/><polygon points="360,112 350,107 350,117" fill="#40c057"/><text x="200" y="155" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Momentum is a vector — same direction as velocity</text></svg>', caption: 'Momentum p = mv: car has much greater momentum than a ball despite lower speed' } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [
      { text: "Newton's Second Law as Rate of Change of <strong>Momentum</strong> Newton's Second Law can be stated more generally as: <strong>force</strong> equals the rate of change of <strong>momentum</strong>." },
      { text: "In equation form: F = Δp / Δt." },
      { text: "This is actually Newton's original formulation." },
      { text: "It reduces to F = ma when <strong>mass</strong> is constant (since Δp = mΔv = m(aΔt), so F = Δp/Δt = ma)" },
      { text: "This form is more general and applies even when <strong>mass</strong> is changing (e.g. a rocket burning fuel)" },
      { text: "In this form: F is in newtons (N), Δp is the change in <strong>momentum</strong> (kg m/s), and Δt is the time interval (s)." }
    ] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [
      { text: "Impulse Impulse J is defined as the product of <strong>force</strong> and the time for which it acts: J = FΔt." },
      { text: "The unit of impulse is N s, which equals kg m/s." },
      { text: "From Newton's Second Law: J = FΔt = Δp = mv - mu." },
      { text: "Therefore: impulse = change in <strong>momentum</strong>." },
      { text: "This is the impulse-<strong>momentum</strong> theorem." },
      { text: "It means: a large <strong>force</strong> applied for a short time produces the same change in <strong>momentum</strong> as a small <strong>force</strong> applied for a long time, as long as FΔt is the same." }
    ] } },
    { id: 'svg-102', type: 'svg', data: { svg: '<svg viewBox="0 0 400 185" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="185" fill="#f8f9fa"/><text x="200" y="18" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Impulse = Area Under F-t Graph</text><line x1="45" y1="155" x2="365" y2="155" stroke="#212529" stroke-width="2"/><line x1="45" y1="155" x2="45" y2="35" stroke="#212529" stroke-width="2"/><text x="205" y="175" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle">Time t / s</text><text x="20" y="97" font-family="sans-serif" font-size="11" fill="#495057" text-anchor="middle" transform="rotate(-90 20,97)">Force F / N</text><line x1="80" y1="155" x2="80" y2="85" stroke="#339af0" stroke-width="2.5"/><line x1="80" y1="85" x2="250" y2="85" stroke="#339af0" stroke-width="2.5"/><line x1="250" y1="85" x2="250" y2="155" stroke="#339af0" stroke-width="2.5"/><polygon points="250,155 80,155 80,85 250,85" fill="#d0ebff" opacity="0.7"/><text x="165" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1864ab" text-anchor="middle">Impulse = F x Dt</text><text x="165" y="143" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">= area under F-t graph</text><text x="165" y="108" font-family="sans-serif" font-size="11" fill="#1864ab" text-anchor="middle">= change in momentum</text><path d="M 250 85 Q 300 85 330 100 Q 350 115 340 155" stroke="#fa5252" stroke-width="2.5" fill="none"/><text x="305" y="75" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">Variable force:</text><text x="305" y="87" font-family="sans-serif" font-size="10" fill="#c92a2a" text-anchor="middle">area still = Dp</text></svg>', caption: 'Impulse = F × Δt = area under F-t graph = change in momentum (Δp)' } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [
      { text: "Worked Example A 0.8 kg ball is travelling at 12 m/s to the right." },
      { text: "It is struck by a bat and moves at 15 m/s to the left." },
      { text: "The contact time is 0.05 s." },
      { text: "(a) Find the change in <strong>momentum</strong>." },
      { text: "(b) Find the average <strong>force</strong> on the ball." },
      { text: "Taking right as positive: initial <strong>momentum</strong> = 0.8 × 12 = +9.6 kg m/s; final <strong>momentum</strong> = 0.8 × (-15) = -12 kg m/s." },
      { text: "(a) Δp = -12 - 9.6 = -21.6 kg m/s (i.e. 21.6 kg m/s to the left)" },
      { text: "(b) F = Δp/Δt = -21.6 / 0.05 = -432 N (i.e. 432 N to the left, since this is the direction of the change in <strong>momentum</strong>)." }
    ] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [
      { text: "Why Impulse Matters: Safety Applications The impulse-<strong>momentum</strong> theorem explains many safety features." },
      { text: "A car crumple zone increases the collision time Δt." },
      { text: "Since Δp is fixed (same change in <strong>momentum</strong>), a longer Δt means a smaller average <strong>force</strong> F = Δp/Δt." },
      { text: "This reduces the <strong>force</strong> on the car occupants, reducing injury." },
      { text: "Similarly: airbags, crash mats, padded helmets, and catching techniques in sports (e.g. following through when catching a ball) all work by increasing the contact time and thereby reducing peak <strong>force</strong>." }
    ] } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Key Formulae', text: 'p = mv (kg m/s). F = Δp/Δt (N). Impulse J = FΔt = Δp (N s = kg m/s). Impulse = area under a F-t graph. Change in <strong>momentum</strong>: Δp = mv - mu.' } },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Define momentum and state its equation, unit, and vector nature", checked: false },
      { text: "State Newton's Second Law in the form F = Δp/Δt and explain when it reduces to F = ma", checked: false },
      { text: "Define impulse; show that impulse equals change in momentum", checked: false },
      { text: "Apply impulse to explain the role of crumple zones and airbags in reducing injury", checked: false }
    ]}},
    { id: 'summary-1', type: 'summary', data: { text: "<strong>Momentum</strong> p = mv (<strong>vector</strong>, unit kg m/s). Newton's Second Law: F = Δp/Δt. Impulse J = FΔt = Δp (unit N s = kg m/s); impulse is the area under a <strong>force</strong>-time graph. Safety features (crumple zones, airbags) increase collision time, reducing <strong>force</strong> for the same impulse." } },
    { id: 'enr-worked-impulse', type: 'callout', data: { style: 'worked', title: 'Worked Example: Tennis Racket', text: 'Tennis racket applies F = 500 N for Δt = 0.004 s. Impulse = FΔt = 500 × 0.004 = 2 N·s. Ball m = 0.057 kg: Δv = Impulse/m = 2/0.057 ≈ 35 m/s. If ball approaching at 20 m/s, final speed = 15 m/s away. Same impulse at pro level (Δt ≈ 2 ms) produces much larger <strong>force</strong>.' } },
    { id: 'enr-worked-crumple', type: 'callout', data: { style: 'worked', title: 'Worked Example: Crumple Zone', text: 'Car crash: m = 1500 kg, v = 13 m/s. Without crumple zone Δt = 0.05 s: F = 1500 × 13/0.05 = 390 000 N. With crumple zone Δt = 0.2 s: F = 97 500 N (75% reduction). Same impulse (Δp = 19 500 N·s), longer time = much smaller <strong>force</strong> on occupants.' } },
    { id: 'enr-tip-impulse', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Impulse', text: 'Impulse = FΔt = Δ(mv) = area under F-t graph. Units N·s = kg·m·s⁻¹. "Why does longer contact time reduce <strong>force</strong>?" → rate of change of <strong>momentum</strong> is smaller. Link every answer to F = Δp/Δt.' } }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-3', prompt: 'Define momentum. What is its equation, unit, and direction?' },
    { id: 'cue-2', blockId: 'para-5', prompt: 'Define impulse. How is it related to change in momentum? What are its units?' },
    { id: 'cue-3', blockId: 'para-7', prompt: 'How do crumple zones reduce injury in a car crash? Use the impulse equation in your answer.' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
