/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 1
 * "Half-life analysis"
 */

export const note_chemistry_4_11_1 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Understand the concept of half-life (t½), deduce the order of a reaction from a concentration-time graph, and calculate k using k = ln(2) / t½.'
      },
      terms: []
    },
    // ── HALF LIFE DEFINITION ───────────────────────────────────────────────
    {
      id: 'h-halflife',
      type: 'heading',
      data: { text: 'What is Half-life?', level: 2 },
      terms: []
    },
    {
      id: 'callout-halflife',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Half-life (t½)',
        text: 'The half-life of a reactant is the <strong>time taken</strong> for the concentration of that reactant to fall to exactly half of its original value.'
      },
      terms: ['Half-life']
    },
    {
      id: 'p-halflife-intro',
      type: 'paragraph',
      data: {
        text: 'Half-life is a visual tool used on <strong>Concentration vs Time</strong> graphs. By measuring the time it takes for the concentration to drop from 100% to 50%, and then measuring the time it takes to drop from 50% to 25%, we can easily deduce the order of the reaction.'
      },
      terms: []
    },
    // ── DEDUCING ORDER FROM GRAPHS ─────────────────────────────────────────
    {
      id: 'h-graphs',
      type: 'heading',
      data: { text: 'Deducing Order from Half-life', level: 2 },
      terms: []
    },
    {
      id: 'table-halflife',
      type: 'comparisonTable',
      data: {
        caption: 'Concentration-Time Graph Rules',
        headers: ['Order', 'Shape of [Conc] vs Time Graph', 'Behavior of Half-life (t½)'],
        rows: [
          ['<strong>Zero Order</strong>', 'A straight downward diagonal line.', 'The half-life <strong>decreases</strong> as the reaction proceeds. (The second half-life is shorter than the first).'],
          ['<strong>First Order</strong>', 'A gentle downward curve.', 'The half-life remains exactly <strong>constant</strong>! (It takes the same amount of time to go from 1.0M→0.5M as it does to go from 0.5M→0.25M).'],
          ['<strong>Second Order</strong>', 'A very steep downward curve, leveling out quickly.', 'The half-life <strong>increases</strong> as the reaction proceeds. (The second half-life is twice as long as the first).']
        ]
      },
      terms: []
    },
    {
      id: 'warning-exam',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Proof',
        text: 'If an exam question asks you to prove a reaction is first order from a graph, you MUST read at least <strong>two</strong> separate half-lives from the graph (e.g. at [Conc]/2 and [Conc]/4) and state explicitly: "The first and second half-lives are both [X] minutes. Because the half-life is constant, the reaction is first order."'
      },
      terms: []
    },
    // ── CALCULATING THE RATE CONSTANT ──────────────────────────────────────
    {
      id: 'h-calc',
      type: 'heading',
      data: { text: 'Calculating k from Half-life', level: 2 },
      terms: []
    },
    {
      id: 'p-calc',
      type: 'paragraph',
      data: {
        text: 'For a <strong>first-order reaction only</strong>, because the half-life is perfectly constant, there is a direct mathematical relationship between the half-life (t½) and the rate constant (k).'
      },
      terms: []
    },
    {
      id: 'eq-halflife',
      type: 'equation',
      data: {
        html: 'k = <span class="nb-frac"><span class="nb-num">ln(2)</span><span class="nb-den">t½</span></span>',
        caption: 'Equation linking the rate constant (k) to half-life for a first-order reaction. Note: ln(2) = 0.693.'
      },
      terms: []
    },
    {
      id: 'bloom-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example Calculation',
        text: '<strong>Q:</strong> From a concentration-time graph, the half-life of a first-order reaction is found to be 200 seconds. Calculate the rate constant, k, and state its units.<br/><br/><strong>A:</strong><br/>t½ = 200 s<br/>k = ln(2) / 200<br/>k = 0.693 / 200<br/>k = <strong>3.47 × 10⁻³ s⁻¹</strong>'
      },
      terms: []
    },
    // ── CONCENTRATION-TIME GRAPHS ──────────────────────────────────────────
    {
      id: 'h-conc-graphs',
      type: 'heading',
      data: { text: 'Concentration-Time Graphs for Each Order', level: 2 },
      terms: []
    },
    {
      id: 'svg-conc-time',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 555 195" xmlns="http://www.w3.org/2000/svg" font-family="Arial,sans-serif"><defs><marker id="arrC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><rect x="0" y="0" width="555" height="195" rx="8" fill="#0a2e1a" stroke="#bbf7d0" stroke-width="1"/><text x="277" y="17" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Concentration-Time Graphs: Half-life Behaviour</text><g transform="translate(12,26)"><text x="84" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#4f46e5">Zero Order</text><line x1="32" y1="135" x2="32" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><line x1="32" y1="135" x2="158" y2="135" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><text x="95" y="153" text-anchor="middle" font-size="10" fill="#64748b">Time</text><text x="14" y="83" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,14,83)">[Conc]</text><line x1="37" y1="28" x2="148" y2="130" stroke="#4f46e5" stroke-width="2.5"/><text x="30" y="30" text-anchor="end" font-size="8" fill="#4f46e5">A₀</text><text x="95" y="113" text-anchor="middle" font-size="9" fill="#4f46e5">t½ <tspan font-weight="bold">decreases</tspan></text><text x="95" y="127" text-anchor="middle" font-size="9" fill="#4f46e5">over time ↓</text></g><g transform="translate(197,26)"><text x="82" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">1st Order</text><line x1="32" y1="135" x2="32" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><line x1="32" y1="135" x2="158" y2="135" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><text x="95" y="153" text-anchor="middle" font-size="10" fill="#64748b">Time</text><text x="14" y="83" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,14,83)">[Conc]</text><path d="M37,28 C55,38 75,62 95,85 C112,103 130,120 150,130" fill="none" stroke="#059669" stroke-width="2.5"/><text x="30" y="30" text-anchor="end" font-size="8" fill="#059669">A₀</text><text x="30" y="57" text-anchor="end" font-size="8" fill="#059669">A₀/2</text><line x1="32" y1="55" x2="70" y2="55" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/><line x1="70" y1="55" x2="70" y2="135" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/><text x="30" y="97" text-anchor="end" font-size="8" fill="#059669">A₀/4</text><line x1="32" y1="81" x2="108" y2="81" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/><line x1="108" y1="81" x2="108" y2="135" stroke="#059669" stroke-width="1" stroke-dasharray="3,2"/><text x="51" y="148" text-anchor="middle" font-size="8" fill="#059669">t½</text><text x="89" y="148" text-anchor="middle" font-size="8" fill="#059669">t½</text><text x="95" y="103" text-anchor="middle" font-size="9" fill="#059669" font-weight="bold">t½₁ = t½₂ = CONSTANT</text><text x="95" y="116" text-anchor="middle" font-size="9" fill="#059669">→ proves 1st order!</text></g><g transform="translate(382,26)"><text x="82" y="14" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Second Order</text><line x1="32" y1="135" x2="32" y2="22" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><line x1="32" y1="135" x2="158" y2="135" stroke="#374151" stroke-width="1.5" marker-end="url(#arrC)"/><text x="95" y="153" text-anchor="middle" font-size="10" fill="#64748b">Time</text><text x="14" y="83" text-anchor="middle" font-size="10" fill="#64748b" transform="rotate(-90,14,83)">[Conc]</text><path d="M37,28 C42,52 52,85 70,108 C88,123 115,131 150,134" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="30" y="30" text-anchor="end" font-size="8" fill="#dc2626">A₀</text><text x="95" y="113" text-anchor="middle" font-size="9" fill="#dc2626">t½ <tspan font-weight="bold">increases</tspan></text><text x="95" y="127" text-anchor="middle" font-size="9" fill="#dc2626">over time ↑</text></g></svg>',
        caption: 'Concentration-Time graph shapes for each order. The KEY diagnostic: only a first-order reaction shows a CONSTANT half-life. Measure two half-lives and compare them to prove the order.'
      },
      terms: []
    },
    {
      id: 'summary-halflife',
      type: 'summary',
      data: {
        text: 'Half-life diagnostic: Zero order → t½ decreases | First order → t½ is CONSTANT | Second order → t½ increases. Only first-order reactions obey k = ln(2)/t½.'
      },
      terms: []
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-halflife',
        prompt: 'Define the term half-life.'
      },
      {
        id: 'cue-2',
        blockId: 'svg-conc-time',
        prompt: 'From a [Conc] vs Time graph, the 1st half-life is 40s and the 2nd half-life is 40s. What order is the reaction? How do you know?'
      },
      {
        id: 'cue-3',
        blockId: 'warning-exam',
        prompt: 'How must you prove a reaction is first-order from a concentration-time graph in an exam? What must you show?'
      },
      {
        id: 'cue-4',
        blockId: 'eq-halflife',
        prompt: 'Write the formula linking the rate constant k to half-life t½ for a first-order reaction. What are the units of k?'
      },
      {
        id: 'cue-5',
        blockId: 'bloom-calc',
        prompt: 'The half-life of a first-order reaction is 500 s. Calculate the rate constant k (give units).'
      }
    ],
    summaryText: 'Half-life is the time for concentration to halve. CONSTANT half-life → first order. Decreasing t½ → zero order. Increasing t½ → second order. For first order only: k = ln(2)/t½ = 0.693/t½.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_1;
