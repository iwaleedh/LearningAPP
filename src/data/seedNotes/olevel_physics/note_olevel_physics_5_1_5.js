export const note_olevel_physics_5_1_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/5 Nuclear Physics/5-1-6-half-life-calculations.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Read half-life from an activity-time graph; perform half-life calculations using the step method and the equation; interpret exponential decay curves.' } },
    { id: 'h-graph', type: 'heading', data: { text: 'Reading Half-Life from a Graph', level: 2 } },
    { id: 'para-graph', type: 'paragraph', data: { text: 'A radioactive decay curve is an <strong>exponential decay</strong> of activity (Bq) against time. The half-life is the same time interval regardless of starting point — it is constant for a given isotope. To find the half-life from a graph: read the initial activity A₀; find the time when activity = A₀/2; the time difference is the half-life. Verify by repeating from A₀/2 to A₀/4.' } },
    { id: 'svg-decay', type: 'svg', data: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 290" width="480" height="290">
  <rect width="480" height="290" fill="#0a2e1a" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Radioactive Decay Curve (t₁/₂ = 10 s)</text>
  <!-- Axes -->
  <line x1="65" y1="250" x2="445" y2="250" stroke="#334155" stroke-width="2"/>
  <line x1="65" y1="40" x2="65" y2="250" stroke="#334155" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="255" y="275" text-anchor="middle" font-size="11" fill="#334155">Time (s)</text>
  <text x="16" y="150" text-anchor="middle" font-size="11" fill="#334155" transform="rotate(-90,16,150)">Activity (Bq)</text>
  <!-- Y ticks + labels -->
  <line x1="60" y1="50" x2="70" y2="50" stroke="#334155" stroke-width="1.5"/>
  <text x="55" y="54" text-anchor="end" font-size="10" fill="#334155">800</text>
  <line x1="60" y1="100" x2="70" y2="100" stroke="#334155" stroke-width="1.5"/>
  <text x="55" y="104" text-anchor="end" font-size="10" fill="#334155">400</text>
  <line x1="60" y1="145" x2="70" y2="145" stroke="#334155" stroke-width="1.5"/>
  <text x="55" y="149" text-anchor="end" font-size="10" fill="#334155">200</text>
  <line x1="60" y1="175" x2="70" y2="175" stroke="#334155" stroke-width="1.5"/>
  <text x="55" y="179" text-anchor="end" font-size="10" fill="#334155">100</text>
  <!-- X ticks + labels -->
  <line x1="155" y1="245" x2="155" y2="255" stroke="#334155" stroke-width="1.5"/>
  <text x="155" y="268" text-anchor="middle" font-size="10" fill="#334155">10</text>
  <line x1="250" y1="245" x2="250" y2="255" stroke="#334155" stroke-width="1.5"/>
  <text x="250" y="268" text-anchor="middle" font-size="10" fill="#334155">20</text>
  <line x1="345" y1="245" x2="345" y2="255" stroke="#334155" stroke-width="1.5"/>
  <text x="345" y="268" text-anchor="middle" font-size="10" fill="#334155">30</text>
  <line x1="440" y1="245" x2="440" y2="255" stroke="#334155" stroke-width="1.5"/>
  <text x="440" y="268" text-anchor="middle" font-size="10" fill="#334155">40</text>
  <!-- Decay curve -->
  <path d="M65,50 C90,58 120,80 155,100 C185,118 215,136 250,145 C280,153 310,162 345,175 C375,185 410,200 445,215" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <!-- Construction lines t½ = 0→10 -->
  <line x1="65" y1="100" x2="155" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5"/>
  <line x1="155" y1="100" x2="155" y2="250" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5"/>
  <!-- Construction lines t½ = 10→20 -->
  <line x1="65" y1="145" x2="250" y2="145" stroke="#f97316" stroke-width="1.5" stroke-dasharray="5"/>
  <line x1="250" y1="145" x2="250" y2="250" stroke="#f97316" stroke-width="1.5" stroke-dasharray="5"/>
  <!-- Construction lines t½ = 20→30 -->
  <line x1="65" y1="175" x2="345" y2="175" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="5"/>
  <line x1="345" y1="175" x2="345" y2="250" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="5"/>
  <!-- Half-life brackets -->
  <text x="107" y="240" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold">t½ = 10 s</text>
  <text x="202" y="240" text-anchor="middle" font-size="9" fill="#f97316" font-weight="bold">t½ = 10 s</text>
  <text x="297" y="240" text-anchor="middle" font-size="9" fill="#2d1b69" font-weight="bold">t½ = 10 s</text>
  <text x="430" y="44" font-size="10" fill="#16a34a">Decay</text>
  <text x="430" y="56" font-size="10" fill="#16a34a">curve</text>
</svg>`, caption: 'Exponential decay curve showing constant half-life of 10 s at each step: 800→400→200→100 Bq.' } },
    { id: 'h-methods', type: 'heading', data: { text: 'Two Calculation Methods', level: 2 } },
    { id: 'list-methods', type: 'list', data: { style: 'numbered', items: [
      { text: '<strong>Step method:</strong> divide activity by 2 for each half-life step. Count the steps to find n. Use n = total time ÷ t½ if steps are not obvious.' },
      { text: '<strong>Equation method:</strong> A = A₀ × (½)ⁿ or N = N₀ × (½)ⁿ, where n = t ÷ t½.' },
    ]}},
    { id: 'call-worked1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1 — Find the Half-Life', text: 'A corrected count-rate falls from 480 Bq to 60 Bq in 30 minutes. Find the half-life.\n\n480 → 240 → 120 → 60  (3 halvings in 30 min)\n\nt½ = 30 ÷ 3 = 10 minutes' } },
    { id: 'call-worked2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2 — Find Remaining Activity', text: 'Initial activity = 3200 Bq; t½ = 8 days. Activity after 32 days?\n\nn = 32 ÷ 8 = 4\nA = 3200 × (½)⁴ = 3200 ÷ 16 = 200 Bq' } },
    { id: 'call-worked3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3 — Find Elapsed Time', text: 'Iodine-131 (t½ = 8 days): activity falls from 1600 Bq to 100 Bq. How long?\n\n1600 → 800 → 400 → 200 → 100  (4 halvings)\n\nTime = 4 × 8 = 32 days' } },
    { id: 'call-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'If given a graph, always use construction lines. Draw a horizontal line from the y-axis to the curve, then a vertical line down to the x-axis. Show these lines in your answer — they earn marks even if you read the value slightly wrong.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Half-life can be found from a decay graph (time for activity to halve — a constant interval). Calculation methods: step-by-step halving, or A = A₀ × (½)ⁿ. Always subtract background radiation first.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Read half-life from graph; step halving; or A = A₀ × (½)ⁿ. Always subtract background first.',
    cues: [
      { id: 'cue-1', blockId: 'para-graph', prompt: 'How do you determine the half-life from an activity-time graph?', answer: 'Find time for activity to fall to half its value (draw construction lines); the time interval is the half-life.' },
      { id: 'cue-2', blockId: 'svg-decay', prompt: 'What shape is a radioactive decay curve and why is the half-life constant?', answer: 'Exponential decay. The rate of decay is always proportional to N; as N halves, the rate halves, taking the same time to halve again.' },
      { id: 'cue-3', blockId: 'call-worked1', prompt: 'Activity falls from 480 Bq to 60 Bq in 30 min. What is the half-life?', answer: 'Three halvings (480→240→120→60) in 30 min: t½ = 30÷3 = 10 minutes.' },
      { id: 'cue-4', blockId: 'call-worked2', prompt: 'A = 3200 Bq, t½ = 8 days. Find activity after 32 days.', answer: 'n = 32÷8 = 4; A = 3200 × (½)⁴ = 200 Bq.' },
      { id: 'cue-5', blockId: 'call-worked3', prompt: 'I-131 (t½ = 8 d): activity falls 1600→100 Bq. How long?', answer: '4 halvings × 8 days = 32 days.' },
    ],
  },
  evidence: [], mentions: [],
};
