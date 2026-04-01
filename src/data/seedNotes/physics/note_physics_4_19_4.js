export const note_physics_4_19_4 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Understand Exponential Discharge in a <strong>Capacitor</strong>" } },
    { id: 'head-1', type: 'heading', data: { text: "Exponential Discharge in a <strong>Capacitor</strong>", level: 2 } },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "<strong>Capacitance</strong> <strong>Capacitance</strong> Capacitors are electrical devices used to store energy in electronic circuits, commonly for a backup release of energy if the power fails" }] } },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "Capacitors do this by storing electric charge, which creates a build up of electric potentialenergy They are made in the form of two conductive metalplates connected to a voltage supply (parallel plate <strong>capacitor</strong>)" }] } },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "There is commonly a dielectric in between the plates, to ensure charge does not flow across them The <strong>capacitor</strong> circuit symbol is: The <strong>capacitor</strong> circuit symbol is two parallel lines" }] } },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "Capacitors are marked with a value of their <strong>capacitance</strong> <strong>Capacitance</strong> is defined as: The charge stored per unit <strong>potential difference</strong> (between the plates) The greater the <strong>capacitance</strong>, the greater the charge stored in the <strong>capacitor</strong>" }] } },
    { id: 'para-6', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>capacitance</strong> of a <strong>capacitor</strong> is defined by the equation: Where: C = <strong>capacitance</strong> (F) Q = charge stored (C)" }] } },
    { id: 'para-7', type: 'list', data: { style: 'bullet', items: [{ text: "V = <strong>potential difference</strong> across the <strong>capacitor</strong> plates (V) A <strong>capacitor</strong> used in small circuits <strong>Capacitance</strong> is measured in the unit Farad (F) In practice, 1 F is a very large unit" }] } },
    { id: 'para-8', type: 'list', data: { style: 'bullet', items: [{ text: "Often it will be quoted in the order of micro Farads ( μ F), nanofarads (nF) or picofarads (pF) If the <strong>capacitor</strong> is made of parallel plates, Q is the charge on the plates and V is the <strong>potential difference</strong> across the <strong>capacitor</strong>" }] } },
    { id: 'para-9', type: 'list', data: { style: 'bullet', items: [{ text: "The charge Q is not the charge of the <strong>capacitor</strong> itself, it is the charge stored on the plates This <strong>capacitance</strong> equation shows that an object's <strong>capacitance</strong> is the ratio of the charge stored by the <strong>capacitor</strong> to the <strong>potential difference</strong> between the plates" }] } },
    { id: 'para-10', type: 'list', data: { style: 'bullet', items: [{ text: "Worked Example A parallel plate <strong>capacitor</strong> has a <strong>capacitance</strong> of 1 nF and is connected to a voltage supply of 0.3 kV." }] } },
    { id: 'para-11', type: 'list', data: { style: 'bullet', items: [{ text: "Calculate the charge on the plates." }] } },
    {
      id: 'svg-parallel-capacitors',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="75" x2="100" y2="75" stroke="#000" stroke-width="2"/><line x1="100" y1="40" x2="100" y2="110" stroke="#000" stroke-width="2"/><line x1="100" y1="40" x2="140" y2="40" stroke="#000" stroke-width="2"/><line x1="100" y1="110" x2="140" y2="110" stroke="#000" stroke-width="2"/><line x1="140" y1="20" x2="140" y2="60" stroke="#3B82F6" stroke-width="4"/><line x1="160" y1="20" x2="160" y2="60" stroke="#EF4444" stroke-width="4"/><line x1="140" y1="90" x2="140" y2="130" stroke="#3B82F6" stroke-width="4"/><line x1="160" y1="90" x2="160" y2="130" stroke="#EF4444" stroke-width="4"/><line x1="160" y1="40" x2="200" y2="40" stroke="#000" stroke-width="2"/><line x1="160" y1="110" x2="200" y2="110" stroke="#000" stroke-width="2"/><line x1="200" y1="40" x2="200" y2="110" stroke="#000" stroke-width="2"/><line x1="200" y1="75" x2="250" y2="75" stroke="#000" stroke-width="2"/><text x="150" y="15" font-family="Arial" font-size="14" text-anchor="middle">C&#8321;</text><text x="150" y="145" font-family="Arial" font-size="14" text-anchor="middle">C&#8322;</text><text x="150" y="75" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">C_total = C&#8321; + C&#8322;</text></svg>',
        caption: 'Capacitors in Parallel'
      }
    },
    {
      id: 'svg-series-capacitors',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="75" x2="100" y2="75" stroke="#000" stroke-width="2"/><line x1="100" y1="55" x2="100" y2="95" stroke="#3B82F6" stroke-width="4"/><line x1="120" y1="55" x2="120" y2="95" stroke="#EF4444" stroke-width="4"/><line x1="120" y1="75" x2="180" y2="75" stroke="#000" stroke-width="2"/><line x1="180" y1="55" x2="180" y2="95" stroke="#3B82F6" stroke-width="4"/><line x1="200" y1="55" x2="200" y2="95" stroke="#EF4444" stroke-width="4"/><line x1="200" y1="75" x2="250" y2="75" stroke="#000" stroke-width="2"/><text x="110" y="45" font-family="Arial" font-size="14" text-anchor="middle">C&#8321;</text><text x="190" y="45" font-family="Arial" font-size="14" text-anchor="middle">C&#8322;</text><text x="150" y="130" font-family="Arial" font-size="14" text-anchor="middle" fill="#4B5563">1/C_total = 1/C&#8321; + 1/C&#8322;</text></svg>',
        caption: 'Capacitors in Series'
      }
    },
    {
      id: 'enr-svg-1',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="#0f172a" rx="6"/><line x1="60" y1="200" x2="468" y2="200" stroke="#374151" stroke-width="2"/><line x1="60" y1="200" x2="60" y2="12" stroke="#374151" stroke-width="2"/><polygon points="468,196 468,204 476,200" fill="#374151"/><polygon points="56,12 64,12 60,4" fill="#374151"/><line x1="160" y1="200" x2="160" y2="127" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="60" y1="127" x2="160" y2="127" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4"/><path d="M 60,20 C 90,82 130,112 160,127 S 220,159 260,170 S 320,182 360,188 S 420,194 460,196" fill="none" stroke="#3b82f6" stroke-width="2.5"/><line x1="160" y1="196" x2="160" y2="204" stroke="#374151" stroke-width="1.5"/><line x1="260" y1="196" x2="260" y2="204" stroke="#374151" stroke-width="1.5"/><line x1="360" y1="196" x2="360" y2="204" stroke="#374151" stroke-width="1.5"/><text x="36" y="24" font-family="Arial,sans-serif" font-size="12" fill="#374151">V&#8320;</text><text x="32" y="131" font-family="Arial,sans-serif" font-size="11" fill="#3b82f6">0.37V&#8320;</text><text x="153" y="218" font-family="Arial,sans-serif" font-size="13" fill="#3b82f6">&#964;</text><text x="251" y="218" font-family="Arial,sans-serif" font-size="12" fill="#374151">2&#964;</text><text x="351" y="218" font-family="Arial,sans-serif" font-size="12" fill="#374151">3&#964;</text><text x="46" y="216" font-family="Arial,sans-serif" font-size="12" fill="#374151">0</text><text x="474" y="204" font-family="Arial,sans-serif" font-size="13" fill="#374151">t</text><text x="50" y="10" font-family="Arial,sans-serif" font-size="13" fill="#374151">V</text><text x="285" y="72" font-family="Arial,sans-serif" font-size="13" fill="#3b82f6">V = V&#8320; e&#8315;&#7511;&#8725;&#7479;&#7580;</text><text x="110" y="15" font-family="Arial,sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1f2937">Capacitor Discharge Curve</text></svg>',
        caption: 'Exponential discharge — voltage drops to 37% of V₀ after one time constant τ = RC'
      }
    },
    {
      id: 'enr-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Exponential Discharge',
        text: '<strong>A 470 μF <strong>capacitor</strong> is charged to 12 V and discharged through a 10 kΩ resistor. Calculate the voltage after t = 5.0 s.</strong><br><br><strong>Step 1 — Find the <strong>time constant</strong>:</strong><br>τ = RC = (10 × 10³) × (470 × 10⁻⁶) = 4.7 s<br><br><strong>Step 2 — Apply the discharge equation:</strong><br>V = V₀ e<sup>−t/RC</sup> = 12 × e<sup>−5.0/4.7</sup><br>= 12 × e<sup>−1.064</sup> = 12 × 0.345<br><br><strong>Answer: V ≈ 4.1 V</strong><br><br><em>Note: Since t ≈ 1.06τ, the voltage has fallen to just above 37% of the initial 12 V, which is consistent with e<sup>−1</sup> ≈ 0.37.</em>'
      }
    },
    {
      id: 'enr-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Time Constant τ',
        text: 'The <strong>time constant</strong> τ = RC</strong> is the time for charge Q, voltage V, <em>or</em> current I to all fall to <strong>1/e ≈ 37%</strong> of their initial values — they all share the same τ. After <strong>5τ</strong> the <strong>capacitor</strong> is considered fully discharged (&lt;1% remains). Always convert units before substituting: R in Ω and C in F gives τ in seconds. On a log–linear graph, <strong>exponential decay</strong> appears as a straight line — useful if asked to verify the relationship experimentally.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Time Constant Definition",
        text: "Time constant \u03c4 = RC is the time for charge Q, voltage V, AND current I to all fall to 1/e \u2248 37% of initial values \u2014 single \u03c4 applies to all three."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Full Discharge Criterion",
        text: "After 5\u03c4 the capacitor is considered fully discharged (<1% remains). Always convert R to \u03a9 and C to F before substituting to get \u03c4 in seconds."
      }
    }

  ],
  recall: { enabled: true, cues: [{id: 'cue-1', blockId: 'para-2', prompt: 'Summarise Exponential Discharge in a <strong>Capacitor</strong>' }], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
