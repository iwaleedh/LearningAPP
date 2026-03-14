export const note_physics_4_16_5 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Energy-Momentum Relation" } },
    { id: 'head-1', type: 'heading', data: { text: "Energy-Momentum Relation", level: 2 } },
    { id: 'para-2', type: 'paragraph', data: { text: "Impulse Impulse Force is defined as the rate of change of momentum on a body The change in momentum is defined as the final momentum minus the initial" } },
    { id: 'para-3', type: 'paragraph', data: { text: "momentum These can be expressed as follows: Defining Impulse The force and momentum equation can be rearranged to find the impulse of a force" } },
    { id: 'para-4', type: 'paragraph', data: { text: "Impulse, I, is equal to the change in momentum: I = FΔt = Δ p = mv – mu Where: I = impulse (N s)" } },
    { id: 'para-5', type: 'paragraph', data: { text: "F = force (N) t = time (s) Δp = change in momentum (kg m s) m = mass (kg)" } },
    { id: 'para-6', type: 'paragraph', data: { text: "v = final velocity (m s) u = initial velocity (m s) –1 –1" } },
    { id: 'para-7', type: 'paragraph', data: { text: "This equation is only used when the force is constant Since the impulse is proportional to the force, it is also a vector The impulse is in the same direction as the force The unit of impulse is N s" } },
    { id: 'para-8', type: 'paragraph', data: { text: "The impulse quantifies the effect of a force acting over a time interval This means a small force acting over a long time has the same effect as a large force acting over a short time Examples of Impulse" } },
    { id: 'para-9', type: 'paragraph', data: { text: "An example in everyday life of impulse is when standing under an umbrella when it is raining, compared to hail (frozen water droplets) When rain hits an umbrella, the water droplets tend to splatter and fall off it and there is only a very small change in momentum" } },
    { id: 'para-10', type: 'paragraph', data: { text: "However, hailstones have a larger mass and tend to bounce back off the umbrella, creating a greater change in momentum Therefore, the impulse on an umbrella is greater in hail than in rain This means that more force is required to hold an umbrella upright in hail compared" } },
    { id: 'para-11', type: 'paragraph', data: { text: "to rain Since hailstones bounce back off an umbrella, compared to water droplets from rain, there is a greater impulse on an umbrella in hail than in rain Worked Example" } },

  
    {
      id: 'svg-physics_4_16_5-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <text x="200" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">Energy-Momentum Equation</text>
  <rect x="80" y="70" width="240" height="60" fill="#e0e7ff" rx="8" stroke="#10b981" stroke-width="3"/>
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
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
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
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Energy-Momentum Relation' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
