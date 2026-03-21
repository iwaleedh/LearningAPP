export const note_physics_2_8_2 = {
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: "Distinguish between <strong>electromotive force</strong> and terminal <strong>potential difference</strong>; explain why terminal PD is less than e.m.f. when <strong>current</strong> flows; apply V = ε − Ir to circuit problems" }, terms: [] },
    { id: 'head-1', type: 'heading', data: { text: "E.M.F. vs. Terminal <strong>Potential Difference</strong>", level: 2 }, terms: [] },
    { id: 'para-2', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>terminal <strong>potential difference</strong> (terminal p.d.) is the <strong>potential difference</strong> measured directly across the terminals of a cell or battery when <strong>current</strong> is flowing. It represents the <strong>voltage</strong> actually available</strong> to the external circuit. If a cell had no <strong>internal resistance</strong>, the terminal p.d. would always equal the <strong>electromotive force</strong> (e.m.f.)</strong>. In reality, all cells have <strong>internal resistance</strong>, so the terminal p.d. is always lower than the e.m.f. whenever <strong>current</strong> is drawn." }] } },
    { id: 'callout-1', type: 'callout', data: { style: 'key', title: 'Key Distinction', text: '<strong>E.M.F. (ε)</strong>: total energy supplied per coulomb by the source (includes energy lost inside the cell).<br/><strong>Terminal PD (V)</strong>: energy delivered per coulomb to the external circuit.<br/><strong>Relationship:</strong> V = ε − Ir, where Ir = "lost volts" dissipated inside the cell.<br/>When I = 0: V = ε (open circuit — they are equal).' }, terms: [] },
    { id: 'para-3', type: 'list', data: { style: 'bullet', items: [{ text: "When a <strong>load resistor R</strong> is connected across the cell's terminals, <strong>current</strong> flows and a <strong>potential difference</strong> develops across the <strong>internal resistance</strong> r</strong>. This <strong>voltage</strong> drop (Ir, the 'lost volts') is not available to the rest of the circuit. The <strong>voltage</strong> actually delivered to R is the terminal p.d.: V = IR (from <strong>Ohm's law</strong> applied to the external <strong>resistance</strong>). The <strong>internal resistance</strong> r sits in series with the load R, so the full e.m.f. drives <strong>current</strong> through the combined <strong>resistance</strong> R + r." }] } },
    { id: 'callout-2', type: 'callout', data: { style: 'warning', title: 'Common Mistake: Lost Volts', text: 'Students often forget that "lost volts" (Ir) are lost <em>inside</em> the battery — they do not appear across R. The terminal PD equals the <strong>voltage</strong> across R, not the e.m.f.<br/>Remember: ε = V_R + V_r = IR + Ir = I(R + r)<br/>The more <strong>current</strong> drawn, the greater the lost volts, and the lower the terminal PD.' }, terms: [] },
    { id: 'para-4', type: 'list', data: { style: 'bullet', items: [{ text: "The <strong>circuit equation</strong> that connects all these quantities is: ε = I(R + r). This can be rearranged to find the <strong>current</strong>: I = ε/(R + r). The terminal p.d. is then: V = IR = ε − Ir. The <strong>lost volts</strong> (the <strong>voltage</strong> drop across the <strong>internal resistance</strong>) is: V_lost = Ir = ε − V. As <strong>current</strong> increases (by reducing R), the lost volts increase and the terminal p.d. decreases. At very low currents (R very large), the terminal p.d. approaches ε." }] } },
    { id: 'comparisonTable-1', type: 'comparisonTable', data: {
      caption: 'E.M.F. vs Terminal PD: Open and Closed Circuit Comparison',
      headers: ['Property', 'Open Circuit (I = 0)', 'Closed Circuit (I > 0)'],
      rows: [
        ['Terminal PD (V)', 'V = ε', 'V = ε − Ir < ε'],
        ['Lost volts (Ir)', '0 V', 'Ir > 0 (increases with I)'],
        ['Current', '0 A', 'I = ε/(R + r)'],
        ['Energy per coulomb to external circuit', 'ε (no current, no transfer)', 'ε − Ir (some lost to r)'],
        ['What voltmeter reads across terminals', 'ε (accurate measurement)', 'V < ε (depends on R and r)']
      ]
    }, terms: [] },
    { id: 'callout-3', type: 'callout', data: { style: 'worked', title: 'Worked Example: Terminal PD Calculation', text: 'A battery has ε = 12.0 V and r = 2.0 Ω. It is connected to a load R = 10.0 Ω.<br/><strong>Step 1:</strong> <strong>Current</strong>: I = ε/(R + r) = 12.0/(10.0 + 2.0) = 1.0 A<br/><strong>Step 2:</strong> Terminal PD: V = IR = 1.0 × 10.0 = 10.0 V<br/><strong>Step 3:</strong> Lost volts: Ir = 1.0 × 2.0 = 2.0 V<br/><strong>Check:</strong> 10.0 + 2.0 = 12.0 V = ε ✓<br/>The terminal PD (10.0 V) is less than the e.m.f. (12.0 V) by the lost volts (2.0 V).' }, terms: [] },
    { id: 'para-5', type: 'list', data: { style: 'bullet', items: [{ text: "A practical illustration is a <strong>phone charger</strong>: the charger's e.m.f. is slightly higher than the phone's battery <strong>voltage</strong> to allow <strong>current</strong> to flow in. As the phone charges and <strong>current</strong> decreases, the terminal p.d. of the charger approaches its e.m.f. more closely. Similarly, a <strong>torch battery</strong> that appears dead (low terminal p.d. under load) may actually show a higher <strong>voltage</strong> when disconnected — the e.m.f. has not dropped as much as the terminal p.d. under load suggests." }] } },
    { id: 'callout-4', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Measuring E.M.F.', text: 'To measure the true e.m.f. of a cell, use a <strong>high-<strong>resistance</strong> voltmeter</strong> connected directly across the terminals with no other load connected (open circuit).<br/>A high-<strong>resistance</strong> voltmeter draws negligible <strong>current</strong> → Ir ≈ 0 → reading ≈ ε.<br/>If a standard voltmeter is used with a low load <strong>resistance</strong>, the reading will underestimate ε.' }, terms: [] },
    { id: 'svg-v-vs-i', type: 'svg', data: {
      caption: 'Graph of Terminal P.D. against Current (V = ε - Ir)',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><path d="M50 250 L50 50 M50 250 L350 250" fill="none" stroke="#1e293b" stroke-width="3"/><text x="300" y="280" font-family="Arial" font-size="18" fill="#1e293b">Current, I (A)</text><text x="30" y="150" font-family="Arial" font-size="18" fill="#1e293b" transform="rotate(-90 30,150)">Terminal P.D., V (V)</text><path d="M50 80 L300 250" fill="none" stroke="#3b82f6" stroke-width="4"/><circle cx="50" cy="80" r="5" fill="#ef4444"/><text x="60" y="75" font-family="Arial" font-size="20" font-weight="bold" font-style="italic" fill="#ef4444">&#949; (E.M.F.)</text><path d="M150 148 L220 148 L220 195" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4"/><text x="228" y="170" font-family="Arial" font-size="16" fill="#475569">Gradient = -r</text><circle cx="300" cy="250" r="5" fill="#10b981"/><text x="310" y="240" font-family="Arial" font-size="16" fill="#10b981">Short-circuit I</text></svg>'
    }, terms: [] },
    { id: 'checklist-1', type: 'checklist', data: { items: [
      { text: "Explain the difference between e.m.f. and terminal <strong>potential difference</strong>", checked: false },
      { text: "Calculate the terminal PD, lost volts, and <strong>current</strong> for a cell with known ε, r, and R", checked: false },
      { text: "Explain why the terminal PD approaches ε when the external <strong>resistance</strong> is very large", checked: false }
    ]}, terms: [] },
    { id: 'summary-1', type: 'summary', data: { text: "E.M.F. (ε): total energy per coulomb from the source. Terminal PD (V = ε − Ir): energy per coulomb delivered to the external circuit. Lost volts (Ir): energy per coulomb dissipated inside the cell. Open circuit: V = ε. Closed circuit: V < ε. Circuit equation: ε = I(R + r); I = ε/(R + r). Measure e.m.f. with a high-<strong>resistance</strong> voltmeter on open circuit." }, terms: [] },
    { id: 'enr-worked-cells', type: 'callout', data: { style: 'worked', title: 'Worked Example: Cells in Series vs Parallel', text: 'Two AA cells (ε = 1.5 V, r = 0.5 Ω each) in <strong>series</strong>: total <strong>EMF</strong> = 3.0 V, total r = 1.0 Ω. With R = 5 Ω: I = 3.0/6.0 = 0.5 A. Terminal PD = 3.0 − 0.5 × 1 = 2.5 V.<br/>In <strong>parallel</strong>: <strong>EMF</strong> = 1.5 V, r = 0.25 Ω. With R = 5 Ω: I = 1.5/5.25 = 0.286 A, terminal PD = 1.43 V.<br/>Use <strong>series</strong> for higher <strong>voltage</strong>; use <strong>parallel</strong> for lower <strong>internal resistance</strong> and higher <strong>current</strong>.' }, terms: [] },
    { id: 'enr-worked-ev', type: 'callout', data: { style: 'worked', title: 'Real-World Example: EV Battery Pack', text: 'Tesla Model 3 battery: ~100 lithium cells in series (each ~3.7 V). Total <strong>EMF</strong> = 370 V, total r ≈ 0.1 Ω. At full power 200 A: lost volts = 200 × 0.1 = 20 V, terminal <strong>voltage</strong> = 350 V, output power = 350 × 200 = 70 kW.<br/>Battery management system prevents excessive <strong>current</strong> draw to protect cells from overheating.' }, terms: [] },
    { id: 'enr-tip-cells', type: 'callout', data: { style: 'tip', title: 'Exam Tip: Series vs Parallel Cells', text: '<strong>Cells in series:</strong> <strong>EMF</strong><sub>total</sub> = sum of EMFs; r<sub>total</sub> = sum of internal resistances.<br/><strong>Cells in parallel (n identical):</strong> <strong>EMF</strong><sub>total</sub> = same as one cell; r<sub>total</sub> = r/n.<br/>Use <strong>series</strong> for higher <strong>EMF</strong> (e.g. car battery — 6 cells). Use <strong>parallel</strong> to reduce <strong>internal resistance</strong> (e.g. solar cell arrays).' }, terms: [] },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "EMF \u2260 Terminal PD When Current Flows",
        text: "Terminal potential difference V = \u03b5 \u2212 Ir is always less than EMF when current flows (lost volts = Ir). As current increases, terminal PD decreases linearly. A 1.5 V cell on open circuit has \u03b5 = 1.5 V, but when drawing current it shows V < 1.5 V."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip: Calculating Lost Volts",
        text: "Lost volts = Ir = I \u00d7 internal resistance. This energy is dissipated as heat inside the battery (wasted as thermal energy). The external circuit receives energy at rate P = IV = I(\u03b5 \u2212 Ir) = I\u03b5 \u2212 I\u00b2r."
      }
    }
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'para-2', prompt: 'What is terminal <strong>potential difference</strong> and how does it differ from e.m.f.?' },
    { id: 'cue-2', blockId: 'para-4', prompt: 'Write the circuit equation and explain what "lost volts" are. When are lost volts zero?' },
    { id: 'cue-3', blockId: 'para-5', prompt: 'Why might a "dead" torch battery show a higher <strong>voltage</strong> when disconnected from the torch?' }
  ], summaryText: '', ready: true },
  evidence: [],
  mentions: []
};
