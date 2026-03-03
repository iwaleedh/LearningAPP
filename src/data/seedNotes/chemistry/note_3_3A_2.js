export const note_chemistry_3_3A_2 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Record qualitative observations precisely; set up and complete quantitative results tables correctly; identify anomalous results and calculate means.' },
    },
    {
      id: 'h-qualitative',
      type: 'heading',
      data: { text: 'Qualitative Observations', level: 2 },
    },
    {
      id: 'callout-key-qual',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Qualitative Observations — Definition',
        text: 'Qualitative observations describe what you can see, hear or smell without numerical measurement. They should be precise, use correct scientific language, and describe changes (initial → final state).',
      },
    },
    {
      id: 'table-observations',
      type: 'comparisonTable',
      data: {
        caption: 'How to write precise qualitative observations',
        headers: ['Poor observation', 'Improved observation', 'Why better'],
        rows: [
          ['Goes orange', 'Solution turns from colourless to orange-brown', 'States initial AND final colour; specifies it is the solution'],
          ['Bubbles', 'Colourless gas bubbles rapidly evolved; gas extinguishes a glowing splint', 'Describes colour, rate, and confirmatory test'],
          ['Gets hot', 'Temperature rises from 20 °C to 45 °C; flask feels warm to touch', 'Quantifies the change; uses correct language'],
          ['White solid forms', 'White precipitate forms immediately on mixing', 'States "precipitate"; states when it forms'],
          ['Smells', 'Pungent/fruity smell detected', 'Describes the quality of the smell'],
          ['Nothing happens', 'No visible change observed; solution remains colourless', 'Explicitly states no change — do not just leave blank'],
        ],
      },
    },
    {
      id: 'h-gas-tests',
      type: 'heading',
      data: { text: 'Gas Tests — Observations and Inferences', level: 2 },
    },
    {
      id: 'table-gas-tests',
      type: 'comparisonTable',
      data: {
        caption: 'Gas tests required for WCH11/WCH12',
        headers: ['Gas', 'Test', 'Positive result', 'Equation (if needed)'],
        rows: [
          ['H₂ (hydrogen)', 'Hold lit splint at mouth of test tube', 'Squeaky pop', 'H₂ + ½O₂ → H₂O'],
          ['O₂ (oxygen)', 'Hold glowing splint at mouth of tube', 'Splint relights', '—'],
          ['CO₂ (carbon dioxide)', 'Bubble through limewater (Ca(OH)₂(aq))', 'Limewater turns milky/cloudy', 'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O'],
          ['Cl₂ (chlorine)', 'Hold damp litmus paper at mouth', 'Turns red then bleaches white', 'Cl₂ + H₂O ⇌ HCl + HClO'],
          ['HCl (hydrogen chloride)', 'Hold damp blue litmus paper, or ammonia gas near tube', 'Litmus turns red; or white smoke of NH₄Cl forms', 'NH₃ + HCl → NH₄Cl'],
          ['NH₃ (ammonia)', 'Hold damp red litmus paper', 'Turns blue (alkaline gas)', '—'],
          ['SO₂ (sulfur dioxide)', 'Bubble through acidified K₂Cr₂O₇ solution', 'Orange → green (Cr³⁺)', 'SO₂ reduces Cr₂O₇²⁻'],
        ],
      },
    },
    {
      id: 'h-results-table',
      type: 'heading',
      data: { text: 'Setting Up a Results Table', level: 2 },
    },
    {
      id: 'list-table-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Column headings must include the quantity AND its unit, separated by "/" or in brackets: e.g. "Volume of NaOH / cm³".',
          'The independent variable goes in the first (left) column.',
          'The dependent variable(s) go in subsequent columns.',
          'Include columns for repeats AND a mean.',
          'All values in a column must be recorded to the same number of decimal places (consistent with instrument precision).',
          'Do NOT include units in the body of the table — only in the heading.',
          'Draw ruled lines with a ruler — no hand-drawn squiggles.',
        ],
      },
    },
    {
      id: 'callout-worked-table',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Titration Results Table',
        text: 'Titration of HCl with 0.100 mol dm⁻³ NaOH\n\n| Titration | Initial burette reading / cm³ | Final burette reading / cm³ | Volume of NaOH / cm³ |\n|-----------|------------------------------|-----------------------------|-----------------------|\n| Rough     | 0.00                         | 24.65                       | 24.65                 |\n| 1         | 0.00                         | 24.10                       | 24.10                 |\n| 2         | 0.15                         | 24.25                       | 24.10                 |\n| 3         | 0.20                         | 24.30                       | 24.10                 |\n| Mean      |                              |                             | 24.10                 |\n\nNote: Rough titre excluded from mean. Titres 1, 2, 3 agree within 0.10 cm³ → mean = 24.10 cm³.',
      },
    },
    {
      id: 'h-anomalous',
      type: 'heading',
      data: { text: 'Anomalous Results', level: 2 },
    },
    {
      id: 'callout-key-anomalous',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Anomalous Result — Definition',
        text: 'An anomalous result (outlier) is a data point that lies significantly outside the pattern or range of the other results. It should be identified, circled on a graph or flagged in a table, and excluded from the mean calculation. Always suggest a possible reason for the anomaly.',
      },
    },
    {
      id: 'list-anomalous',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'In titrations: a titre that differs by more than 0.10 cm³ from concordant titres is anomalous.',
          'On a graph: a point that does not lie on or near the best-fit line/curve.',
          'Common causes: misreading instrument, spillage, contaminated solution, calculation error, recording error.',
          'Do NOT discard without reason — always suggest why the anomaly might have occurred.',
          'If time allows, repeat the measurement to check.',
        ],
      },
    },
    {
      id: 'h-decimal-places',
      type: 'heading',
      data: { text: 'Decimal Places and Precision in Recording', level: 2 },
    },
    {
      id: 'table-dp',
      type: 'comparisonTable',
      data: {
        caption: 'Recording data to appropriate precision',
        headers: ['Instrument', 'Precision', 'Record data to...', 'Example'],
        rows: [
          ['Burette', '±0.05 cm³', '2 decimal places', '24.10 cm³ (not 24.1)'],
          ['Pipette', '±0.06 cm³', '1 decimal place (fixed volume)', '25.0 cm³'],
          ['Measuring cylinder', '±0.5 cm³', '0 or 1 d.p.', '25 cm³'],
          ['Analytical balance', '±0.001 g', '3 decimal places', '1.234 g'],
          ['Thermometer (±0.5 °C)', '±0.5 °C', '1 decimal place', '23.5 °C'],
          ['Digital thermometer (±0.1 °C)', '±0.1 °C', '1 decimal place', '23.4 °C'],
          ['Gas syringe (±0.5 cm³)', '±0.5 cm³', '0 or 1 d.p.', '48 cm³'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '• Always describe initial AND final state in observations: "orange → colourless", not just "goes colourless".\n• In a results table, units go in the heading only — never in the body of the table.\n• For titrations, "concordant" means two results agree within 0.10 cm³ — learn this term.\n• When recording burette readings, always give 2 decimal places (e.g. 0.00, 24.10) — even if the second decimal is 0.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Recording burette readings to 1 d.p. (e.g. 24.1) — always 2 d.p. (24.10).\n• Including units in the body of the table (e.g. writing "24.10 cm³" in a cell) — units belong in the heading only.\n• Using vague language: "the solution changed colour" — state what colour to what colour.\n• Calculating a mean that includes an anomalous result — always exclude outliers.',
      },
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can write precise qualitative observations stating initial and final state.', checked: false },
          { text: 'I can set up a results table with correct headings (quantity / unit) and no units in cells.', checked: false },
          { text: 'I know the gas tests for H₂, O₂, CO₂, Cl₂, HCl, NH₃ and SO₂.', checked: false },
          { text: 'I can identify an anomalous result and explain why it should be excluded from the mean.', checked: false },
          { text: 'I can record data to the correct number of decimal places for each instrument.', checked: false },
        ],
      },
    },
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    // ── BLOOM'S TAXONOMY — HIGHER-ORDER THINKING ─────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Qualitative data describes observations (colour, smell, state); quantitative data involves numerical measurements. Both types must be recorded precisely — vague descriptions like "it changed colour" are insufficient.\n\nApply: You observe a white precipitate forming when BaCl₂ is added to a solution. Record this observation precisely, including what the precipitate looks like and what it indicates.\n\nAnalyze: A student collects 5 titre values: 24.30, 24.25, 24.35, 27.10, 24.20 cm³. Identify the anomalous result and calculate the mean of the concordant values. Explain why the anomaly should be excluded.\n\nEvaluate: "More decimal places always means more accurate results." Assess this claim considering the precision of the measuring instrument and significant figures.'
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Qualitative observations: precise, initial→final, use correct chemical language. Gas tests: H₂ (squeaky pop), O₂ (relights splint), CO₂ (milky limewater), Cl₂ (bleaches litmus), NH₃ (turns litmus blue). Results tables: heading = quantity / unit; body = numbers only; same d.p. throughout; include repeats and mean; exclude anomalous results. Burette: always 2 d.p.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-observations', prompt: 'How should you describe a colour change in an observation? Give an example of a poor vs improved observation.' },
      { id: 'cue-2', blockId: 'table-gas-tests', prompt: 'State the test and positive result for CO₂, H₂, and Cl₂.' },
      { id: 'cue-3', blockId: 'list-table-rules', prompt: 'What must a results table column heading always include?' },
      { id: 'cue-4', blockId: 'callout-key-anomalous', prompt: 'Define anomalous result and state what to do with it.' },
      { id: 'cue-5', blockId: 'table-dp', prompt: 'To how many decimal places should burette readings be recorded? Why?' },
    ],
    summaryText: 'Observations: initial→final, precise language. Gas tests: H₂=squeaky pop, O₂=relights splint, CO₂=milky limewater, Cl₂=bleaches litmus. Tables: heading=quantity/unit, body=numbers only, same d.p. Anomalies: identify, exclude from mean, suggest reason. Burette: always 2 d.p.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel WCH13 Specification', detail: 'Observation and data recording are assessed skills in WCH13.', year: '2018', source: 'Pearson Edexcel', tags: ['observations', 'data recording', 'gas tests'] },
  ],
};
