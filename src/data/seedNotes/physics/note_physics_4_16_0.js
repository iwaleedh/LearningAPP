export const note_physics_4_16_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Impulse" } },
    { id: 'head-1', type: 'heading', data: { text: "Impulse", level: 2 } },
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
      id: 'svg-physics_4_16_0-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#f8fafc" rx="8"/>
  <path d="M 50 150 L 350 150" stroke="#334155" stroke-width="2"/>
  <rect x="100" y="110" width="40" height="40" fill="#3b82f6" rx="4"/>
  <path d="M 150 130 L 220 130" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
  <text x="185" y="120" font-family="Arial" font-size="14" fill="#ef4444" text-anchor="middle">Force (F)</text>
  <text x="120" y="100" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Mass (m)</text>
  <text x="200" y="40" font-family="Arial" font-size="16" font-weight="bold" fill="#1e293b" text-anchor="middle">Impulse = F Δt</text>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
    </marker>
  </defs>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_0'
      }
    },
    {
      id: 'svg-physics_4_16_0-1',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="220" fill="#f8fafc" rx="8"/>
  <path d="M 50 180 L 350 180" stroke="#334155" stroke-width="2"/>
  <path d="M 50 180 L 50 50" stroke="#334155" stroke-width="2"/>
  <path d="M 100 180 Q 150 60 200 60 T 300 180" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <path d="M 100 180 Q 150 60 200 60 T 300 180" fill="#3b82f6" opacity="0.2"/>
  <text x="200" y="200" font-family="Arial" font-size="14" fill="#334155" text-anchor="middle">Time (t)</text>
  <text x="30" y="115" font-family="Arial" font-size="14" fill="#334155" transform="rotate(-90 30 115)" text-anchor="middle">Force (F)</text>
  <text x="200" y="130" font-family="Arial" font-size="14" fill="#1e293b" text-anchor="middle">Area = Impulse</text>
  <text x="200" y="150" font-family="Arial" font-size="12" fill="#64748b" text-anchor="middle">= Change in Momentum (Δp)</text>
</svg>`,
        caption: 'Diagram illustrating concepts of 16_0'
      }
    },
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Impulse' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
