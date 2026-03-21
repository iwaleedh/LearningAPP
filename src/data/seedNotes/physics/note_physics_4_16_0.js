export const note_physics_4_16_0 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand <strong>Impulse</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "<strong>Impulse</strong>", level: 2 } },
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
      id: 'svg-physics_4_16_0-0',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="400" height="200" fill="#0f172a" rx="8"/>
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
  <rect x="0" y="0" width="400" height="220" fill="#0f172a" rx="8"/>
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
    {
      id: 'enr-svg-mom',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="220" fill="#0f172a" rx="8"/>
  <line x1="30" y1="165" x2="470" y2="165" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5 4"/>
  <rect x="55" y="92" width="80" height="65" fill="#3b82f6" rx="6"/>
  <text x="95" y="118" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">A</text>
  <text x="95" y="135" font-family="Arial" font-size="11" fill="#1e293b" text-anchor="middle">m = 2 kg</text>
  <path d="M 144 124 L 182 124" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#arr-b1)"/>
  <text x="163" y="115" font-family="Arial" font-size="11" fill="#1d4ed8" text-anchor="middle">3 m/s →</text>
  <rect x="365" y="92" width="80" height="65" fill="#ef4444" rx="6"/>
  <text x="405" y="118" font-family="Arial" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">B</text>
  <text x="405" y="135" font-family="Arial" font-size="11" fill="#1e293b" text-anchor="middle">m = 3 kg</text>
  <path d="M 356 124 L 318 124" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#arr-r1)"/>
  <text x="337" y="115" font-family="Arial" font-size="11" fill="#b91c1c" text-anchor="middle">← 1 m/s</text>
  <path d="M 75 177 L 135 177" stroke="#3b82f6" stroke-width="4.5" marker-end="url(#arr-b2)"/>
  <text x="105" y="197" font-family="Arial" font-size="10" fill="#3b82f6" text-anchor="middle">pₐ = 6 kg·m/s →</text>
  <path d="M 415 177 L 385 177" stroke="#ef4444" stroke-width="4.5" marker-end="url(#arr-r2)"/>
  <text x="400" y="197" font-family="Arial" font-size="10" fill="#ef4444" text-anchor="middle">← p_b = 3 kg·m/s</text>
  <text x="250" y="46" font-family="Arial" font-size="17" font-weight="bold" fill="#1e293b" text-anchor="middle">p = mv</text>
  <text x="250" y="65" font-family="Arial" font-size="11" fill="#475569" text-anchor="middle">Momentum before collision</text>
  <defs>
    <marker id="arr-b1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/>
    </marker>
    <marker id="arr-r1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b91c1c"/>
    </marker>
    <marker id="arr-b2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/>
    </marker>
    <marker id="arr-r2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/>
    </marker>
  </defs>
</svg>`,
        caption: 'Momentum p=mv. Direction matters — use + and − signs'
      }
    },
    {
      id: 'enr-worked-collision',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Snooker Ball Collision',
        text: 'Cue ball: m = 0.17 kg, u = 5 m/s hits stationary red ball m = 0.16 kg.<br/>After collision: cue ball v = 0.3 m/s. Find the red ball velocity.<br/><br/>Total p<sub>before</sub> = 0.17 × 5 = <strong>0.85 kg m/s</strong><br/>p<sub>after</sub>: 0.17 × 0.3 + 0.16 × v<sub>red</sub> = 0.85<br/>0.051 + 0.16 v<sub>red</sub> = 0.85<br/>v<sub>red</sub> = (0.85 − 0.051) / 0.16 = <strong>4.99 m/s</strong><br/><br/>Nearly complete transfer of <strong>momentum</strong> — demonstrates conservation of linear <strong>momentum</strong>.'
      }
    },
    {
      id: 'enr-tip-mom',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Conservation of Momentum',
        text: '<strong>Conservation of <strong>momentum</strong></strong> applies when no external forces act (net external force = 0). p<sub>before</sub> = p<sub>after</sub>. Always define a positive direction first. <strong>Momentum</strong> is a vector — include sign for direction. Units: kg m s<sup>−1</sup> = N s.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Impulse Area Under Graph",
        text: "Impulse = area under F-t graph \u2014 a useful graphical interpretation for exam problems."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'key',
        title: "Momentum Direction",
        text: "Momentum is a vector \u2014 always include sign for direction."
      }
    }
  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise <strong>Impulse</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
