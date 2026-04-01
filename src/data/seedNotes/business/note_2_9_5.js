export const note_business_2_9_5 = {
  blocks: [
    {
      id: "obj-2-9-5",
      type: "objective",
      data: { text: "Understand capacity utilisation, calculate it, and evaluate the implications of over- and under-utilisation." }
    },
    {
      id: "h-def",
      type: "heading",
      data: { text: "Capacity Utilisation", level: 2 }
    },
    {
      id: "p-def",
      type: "paragraph",
      data: { text: "Capacity utilisation measures the extent to which a firm's potential operational capacity is actually being used. It is expressed as a percentage." }
    },
    {
      id: "callout-formula-cap",
      type: "callout",
      data: {
        style: "worked",
        title: "Formula: Capacity Utilisation",
        text: "(Current Output / Maximum possible output) × 100"
      }
    },
    {
      id: "h-under",
      type: "heading",
      data: { text: "Under-utilisation (Spare Capacity)", level: 3 }
    },
    {
      id: "p-under",
      type: "paragraph",
      data: { text: "Operating below 100%. While having some spare capacity allows flexibility for sudden orders and time for machine maintenance, operating at a very low percentage means fixed costs are spread over fewer units, driving up unit costs." }
    },
    {
      id: "h-over",
      type: "heading",
      data: { text: "Over-utilisation (Overstretching)", level: 3 }
    },
    {
      id: "p-over",
      type: "paragraph",
      data: { text: "Operating at 100% or beyond standard maximum (using overtime). While unit costs are minimized, it leads to machine breakdowns, staff burnout, and an inability to accept new, unexpected orders." }
    },
    {
      id: "list-improving",
      type: "list",
      data: {
        style: "bullet",
        items: [
          { text: "To fix under-utilisation: Subcontract spare space, increase marketing to pull demand, rationalize (downsize)." },
          { text: "To fix over-utilisation: Outsource work, invest in larger premises/more machines, hire more shift workers." }
        ]
      }
    },
    {
      id: "sum-2-9-5",
      type: "summary",
      data: { text: "The ideal capacity utilisation is often around 90-95%, balancing low unit costs with enough slack to maintain equipment and handle unexpected spikes in demand." }
    },
    {
      "id": "enr-t9b-h-worked",
      "type": "heading",
      "data": { "text": "Worked Example: Calculating Capacity Utilisation", "level": 3 }
    },
    {
      "id": "enr-t9b-callout-worked-lola",
      "type": "callout",
      "data": {
        "style": "worked",
        "title": "Lola Bakery — Two-Step Calculation",
        "text": "Factory maximum output = 68,400 units/month. May output = 51,420 units.<br><strong>Step 1:</strong> 51,420 ÷ 68,400 = 0.75<br><strong>Step 2:</strong> 0.75 × 100 = <strong>75% capacity utilisation</strong><br><br>Reverse calculation: If August utilisation = 92%, units produced = 0.92 × 68,400 = <strong>62,928 units</strong>."
      }
    },
    {
      "id": "enr-t9b-p-motivation",
      "type": "paragraph",
      "data": { "text": "Capacity utilisation also affects employee motivation. At very low utilisation, workers feel underdeployed and fear redundancy — morale and productivity both fall. Conversely, extremely high utilisation puts staff under relentless pressure, increasing absenteeism and staff turnover. The 90–95% 'sweet spot' keeps workers productively busy and secure without the burnout risk." }
    },
    {
      "id": "enr-t9b-h-lean-bridge",
      "type": "heading",
      "data": { "text": "Improving Efficiency: The Lean Approach", "level": 3 }
    },
    {
      "id": "enr-t9b-p-lean-bridge",
      "type": "paragraph",
      "data": { "text": "Businesses aiming to raise capacity utilisation sustainably often adopt lean production principles — eliminating waste so that the same resource base produces more output. The four-stage flow below shows how lean tools chain together to reduce unit costs and improve quality simultaneously." }
    },
    {
      "id": "enr-t9b-svg-lean-flow",
      "type": "svg",
      "data": {
        "svg": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 180' font-family='Arial,sans-serif'><rect width='420' height='180' fill='#0f172a' rx='8'/><text x='210' y='18' text-anchor='middle' font-size='12' font-weight='bold' fill='#1e293b'>Lean Production Principles</text><rect x='15' y='50' width='70' height='50' rx='5' fill='#0a2e1a'/><text x='50' y='72' text-anchor='middle' font-size='9' font-weight='bold' fill='#166534'>Eliminate</text><text x='50' y='86' text-anchor='middle' font-size='9' fill='#166534'>Waste</text><defs><marker id='a2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L0,6 L8,3 z' fill='#3b82f6'/></marker></defs><line x1='85' y1='75' x2='100' y2='75' stroke='#3b82f6' stroke-width='2' marker-end='url(#a2)'/><rect x='100' y='50' width='70' height='50' rx='5' fill='#0c4a6e'/><text x='135' y='72' text-anchor='middle' font-size='9' font-weight='bold' fill='#075985'>Just-In-</text><text x='135' y='86' text-anchor='middle' font-size='9' fill='#075985'>Time (JIT)</text><line x1='170' y1='75' x2='185' y2='75' stroke='#3b82f6' stroke-width='2' marker-end='url(#a2)'/><rect x='185' y='50' width='70' height='50' rx='5' fill='#44370a'/><text x='220' y='72' text-anchor='middle' font-size='9' font-weight='bold' fill='#92400e'>Kaizen</text><text x='220' y='86' text-anchor='middle' font-size='9' fill='#92400e'>Continuous</text><text x='220' y='98' text-anchor='middle' font-size='9' fill='#92400e'>Improvement</text><line x1='255' y1='75' x2='270' y2='75' stroke='#3b82f6' stroke-width='2' marker-end='url(#a2)'/><rect x='270' y='50' width='70' height='50' rx='5' fill='#4a1040'/><text x='305' y='72' text-anchor='middle' font-size='9' font-weight='bold' fill='#9d174d'>Total</text><text x='305' y='86' text-anchor='middle' font-size='9' fill='#9d174d'>Quality</text><text x='305' y='98' text-anchor='middle' font-size='9' fill='#9d174d'>Mgmt</text><line x1='340' y1='75' x2='355' y2='75' stroke='#3b82f6' stroke-width='2' marker-end='url(#a2)'/><rect x='355' y='50' width='55' height='50' rx='5' fill='#3b82f6'/><text x='382' y='72' text-anchor='middle' font-size='9' font-weight='bold' fill='#1e293b'>Lower</text><text x='382' y='86' text-anchor='middle' font-size='9' fill='#1e293b'>Costs +</text><text x='382' y='98' text-anchor='middle' font-size='9' fill='#1e293b'>Quality</text><text x='210' y='140' text-anchor='middle' font-size='9' fill='#64748b'>Toyota Production System is the global benchmark for lean manufacturing</text></svg>",
        "caption": "Lean production principles: waste elimination → JIT → Kaizen → TQM → lower costs and higher quality"
      }
    },
    {
      "id": "enr-t9b-callout-brand-airlines",
      "type": "callout",
      "data": {
        "style": "key",
        "title": "Real World: Airlines & COVID-19 (2020)",
        "text": "When international travel collapsed in 2020, major airlines such as <strong>British Airways</strong> and <strong>Ryanair</strong> found themselves operating at below 10% capacity utilisation. With enormous fixed costs (aircraft leases, hangar fees, ground staff), unit costs per passenger rocketed. BA alone cut 10,000+ jobs to reduce its fixed cost base — a direct consequence of near-zero capacity utilisation."
      }
    },
    {
      "id": "enr-t9b-callout-student-classroom",
      "type": "callout",
      "data": {
        "style": "tip",
        "title": "Relatable: Your Classroom at 40% Capacity",
        "text": "Imagine your school books a 30-seat classroom for a lesson where only 12 students turn up. The teacher is still paid, the heating is still on, and the room rental is still charged — but across only 12 students instead of 30. This is exactly why low capacity utilisation drives up cost per unit: fixed costs don't shrink, but fewer units share them."
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Examiner Tip",
        text: "Calculate capacity utilisation: (Actual Output / Maximum Output) \u00d7 100%. Show why over-utilisation (>100% on paper) is unsustainable (quality drops, staff burn out, machinery breaks). Under-utilisation wastes overheads."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Assuming optimal capacity = 100%. In reality, 80% is often optimal (buffer for maintenance, demand spikes, quality control). Going all-in to 100% leaves no flexibility and increases failure risk. 100% \u2260 efficient."
      }
    }
  ],
  recall: {
    enabled: true,
    summaryText: "Capacity utilisation measures how much of maximum output is actually produced.",
    cues: [
      { id: "c1", prompt: "What is the formula for capacity utilisation?", answer: "(Current Output / Maximum possible output) × 100." },
      { id: "c2", prompt: "What is a disadvantage of 100% capacity utilisation?", answer: "No time for machinery maintenance and zero flexibility to take rush orders." },
      { id: "c3", prompt: "Why does low capacity utilisation increase unit costs?", answer: "Fixed costs are spread over fewer units." },
      { id: "c4", prompt: "Name one way to reduce under-utilisation.", answer: "Rationalisation (downsizing resources) or aggressive marketing to increase demand." }
    ]
  }
};