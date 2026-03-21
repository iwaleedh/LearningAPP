export const note_physics_4_16_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Energy-<strong>Momentum</strong> Relation" } },
    { id: 'head-1', type: 'heading', data: { text: "Energy-<strong>Momentum</strong> Relation", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Impulse</strong> <strong>Impulse</strong> Force is defined as the rate of change of <strong>momentum</strong> on a body The change in <strong>momentum</strong> is defined as the final <strong>momentum</strong> minus the initial" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>momentum</strong> These can be expressed as follows: Defining <strong>Impulse</strong> The force and <strong>momentum</strong> equation can be rearranged to find the <strong>impulse</strong> of a force" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Impulse</strong>, I, is equal to the change in <strong>momentum</strong>: I = FΔt = Δ p = mv – mu Where: I = <strong>impulse</strong> (N s)" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "F = force (N) t = time (s) Δp = change in <strong>momentum</strong> (kg m s) m = mass (kg)" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "v = final velocity (m s) u = initial velocity (m s) –1 –1" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "This equation is only used when the force is constant Since the <strong>impulse</strong> is proportional to the force, it is also a vector The <strong>impulse</strong> is in the same direction as the force The unit of <strong>impulse</strong> is N s" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>impulse</strong> quantifies the effect of a force acting over a time interval This means a small force acting over a long time has the same effect as a large force acting over a short time Examples of <strong>Impulse</strong>" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "An example in everyday life of <strong>impulse</strong> is when standing under an umbrella when it is raining, compared to hail (frozen water droplets) When rain hits an umbrella, the water droplets tend to splatter and fall off it and there is only a very small change in <strong>momentum</strong>" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "However, hailstones have a larger mass and tend to bounce back off the umbrella, creating a greater change in <strong>momentum</strong> Therefore, the <strong>impulse</strong> on an umbrella is greater in hail than in rain This means that more force is required to hold an umbrella upright in hail compared" }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "to rain Since hailstones bounce back off an umbrella, compared to water droplets from rain, there is a greater <strong>impulse</strong> on an umbrella in hail than in rain Worked Example" }] } },

  
    {
      id: 'svg-physics_4_16_5-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <text x="200" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Energy-Momentum Equation</text>
  <rect x="80" y="70" width="240" height="60" fill="#2d2f72" rx="8" stroke="#10b981" stroke-width="3"/>
  <text x="200" y="100" font-family="Arial" font-size="24" fill="#047857" font-style="italic" text-anchor="middle">Eₖ = p² / 2m</text>
  <text x="200" y="160" font-family="Arial" font-size="14" fill="#475569" text-anchor="middle">Where p = mv</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_5'
      }
    },
    {
      id: 'svg-physics_4_16_5-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
  <circle cx="100" cy="100" r="20" fill="#ef4444"/>
  <circle cx="300" cy="100" r="40" fill="#3b82f6"/>
  <text x="100" y="150" font-family="Arial" font-size="14" fill="#ef4444" text-anchor="middle">Small Mass (m)</text>
  <text x="300" y="160" font-family="Arial" font-size="14" fill="#3b82f6" text-anchor="middle">Large Mass (M)</text>
  <path d="M 130 100 L 190 100" stroke="#334155" stroke-width="3" marker-end="url(#arrow-dark)"/>
  <path d="M 250 100 L 210 100" stroke="#334155" stroke-width="3" marker-end="url(#arrow-dark)"/>
  <text x="200" y="40" font-family="Arial" font-size="16" fill="#1e293b" font-weight="bold" text-anchor="middle">Same Momentum (p)</text>
  <text x="200" y="190" font-family="Arial" font-size="12" fill="#047857" font-weight="bold" text-anchor="middle">Small mass has HIGHER Kinetic Energy (Eₖ ∝ 1/m)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_5'
      }
    },
    { id: 'enr-svg-2', type: 'svg', data: { svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a"/><text x="250" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#212529" text-anchor="middle">Impulse = Area Under Force&#x2013;Time Graph</text><text x="115" y="44" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1864ab" text-anchor="middle">Large force, short time</text><line x1="28" y1="180" x2="200" y2="180" stroke="#495057" stroke-width="1.5"/><line x1="28" y1="52" x2="28" y2="183" stroke="#495057" stroke-width="1.5"/><text x="208" y="184" font-family="sans-serif" font-size="10" fill="#495057">t</text><text x="20" y="56" font-family="sans-serif" font-size="10" fill="#495057">F</text><rect x="55" y="80" width="45" height="100" fill="#1e3a8a" opacity="0.55" stroke="#1864ab" stroke-width="1.5"/><text x="77" y="136" font-family="sans-serif" font-size="9" fill="#1864ab" text-anchor="middle">Area = I</text><line x1="28" y1="80" x2="55" y2="80" stroke="#1864ab" stroke-width="1" stroke-dasharray="3,2"/><text x="17" y="83" font-family="sans-serif" font-size="8" fill="#1864ab">F&#x2081;</text><text x="55" y="194" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">t&#x2081;</text><text x="100" y="194" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">t&#x2082;</text><text x="365" y="44" font-family="sans-serif" font-size="10" font-weight="bold" fill="#c92a2a" text-anchor="middle">Smaller force, longer time</text><line x1="268" y1="180" x2="470" y2="180" stroke="#495057" stroke-width="1.5"/><line x1="268" y1="52" x2="268" y2="183" stroke="#495057" stroke-width="1.5"/><text x="474" y="184" font-family="sans-serif" font-size="10" fill="#495057">t</text><text x="260" y="56" font-family="sans-serif" font-size="10" fill="#495057">F</text><rect x="295" y="130" width="120" height="50" fill="#7f1d1d" opacity="0.55" stroke="#c92a2a" stroke-width="1.5"/><text x="355" y="160" font-family="sans-serif" font-size="9" fill="#c92a2a" text-anchor="middle">Same Area = I</text><line x1="268" y1="130" x2="295" y2="130" stroke="#c92a2a" stroke-width="1" stroke-dasharray="3,2"/><text x="257" y="133" font-family="sans-serif" font-size="8" fill="#c92a2a">F&#x2082;</text><text x="295" y="194" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">t&#x2083;</text><text x="415" y="194" font-family="sans-serif" font-size="8" fill="#495057" text-anchor="middle">t&#x2084;</text><text x="250" y="220" font-family="sans-serif" font-size="10" fill="#2b8a3e" text-anchor="middle">I = F&#x394;t = &#x394;p &#x2014; same impulse regardless of how force is applied</text></svg>', caption: 'Impulse equals the area under a Force\u2013time graph. A large force acting briefly produces the same impulse (and \u0394p) as a smaller force acting for a longer time.' } },
    { id: 'enr-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example: <strong>Impulse</strong> and Average Force', text: 'A 0.50 kg ball hits a wall at 8.0 m/s and bounces straight back at 6.0 m/s. Contact time is 0.025 s. Find (a) the <strong>impulse</strong> on the ball and (b) the average force the wall exerts. Take initial direction (towards wall) as positive. (a) <strong>Impulse</strong> = \u0394p = mv \u2212 mu = (0.50)(\u22126.0) \u2212 (0.50)(+8.0) = \u22123.0 \u2212 4.0 = \u22127.0 N s. The <strong>impulse</strong> is 7.0 N s directed away from the wall. (b) Average force: F = I / \u0394t = \u22127.0 / 0.025 = \u2212280 N. The wall exerts 280 N on the ball directed away from the wall. By Newton\'s 3rd law, the ball exerts 280 N on the wall in the positive direction.' } },
    { id: 'enr-tip-2', type: 'callout', data: { style: 'tip', title: 'Exam Tip: <strong>Impulse</strong> and Force\u2013Time Graphs', text: '<strong>Impulse</strong> is a vector \u2014 always define a positive direction first. If a ball reverses direction, both velocities carry opposite signs; the change in <strong>momentum</strong> is larger than if the ball had simply stopped. On force\u2013time graphs, <strong>impulse</strong> equals the area under the curve for any force profile (constant or varying). Units of <strong>impulse</strong> are N s or kg m s\u207b\u00b9 \u2014 both are equivalent and acceptable in exams. When finding average force, use F = I / \u0394t = \u0394p / \u0394t rather than trying to read a peak force from the graph.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Energy-Momentum Relation",
        text: "For same momentum p, smaller mass has HIGHER kinetic energy since E_k \u221d 1/m \u2014 often overlooked relationship."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Energy-<strong>Momentum</strong> Relation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
