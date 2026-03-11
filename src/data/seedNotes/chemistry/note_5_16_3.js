export const note_chemistry_5_16_3 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand IUPAC cell notation and how to write and interpret cell diagrams, including salt bridges, phase boundaries, and worked examples.' } },
    { type: 'heading', id: 'h-iupac', data: { text: 'IUPAC Cell Notation', level: 2 } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'Cell notation represents a galvanic cell compactly. Format: Anode | Anode solution || Cathode solution | Cathode. Single bars (|) show phase boundaries; double bars (||) show salt bridge. Anode (oxidation, negative) is on left; cathode (reduction, positive) is on right.' } },
    { type: 'equation', id: 'eq-format', data: { html: 'Anode | Anode solution || Cathode solution | Cathode', caption: 'IUPAC cell notation format' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'IAL Convention: Three Key Rules for Cell Notation', text: '1. Reduced forms of each species are written on the OUTSIDE (far left and far right) of the full cell notation\n2. The more positive E° electrode is always written on the RIGHT\n3. Phase boundaries → single vertical bar | ; Salt bridge → double vertical dashed bar ||' } },
    { type: 'heading', id: 'h-worked', data: { text: 'Worked Example: Zn/Cu Cell', level: 2 } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Zn/Cu Cell Notation — Step by Step', text: 'Half-cell equations (from data book):\n  Zn²⁺(aq) + 2e⁻ ⇌ Zn(s)   E° = −0.76 V  ← more negative = LEFT side (oxidation)\n  Cu²⁺(aq) + 2e⁻ ⇌ Cu(s)   E° = +0.34 V  ← more positive = RIGHT side (reduction)\n\nRules applied:\n• Reduced forms (Zn and Cu metal) go on the OUTSIDE\n• Cu (more positive) goes on the RIGHT\n\nFull cell notation:\n  Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)\n\nWith E° values displayed underneath:\n  Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)\n  E° = −0.76 V               E° = +0.34 V\n\nE°cell = E°(right) − E°(left) = (+0.34) − (−0.76) = +1.10 V' } },
    {
      type: 'svg',
      id: 'svg-cell-notation',
      data: {
        caption: 'Zn/Cu electrochemical cell — full shorthand notation with E° values',
        svg: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="480" height="220" fill="#f8fafc" rx="10" stroke="#e2e8f0" stroke-width="1"/>
  <!-- Title -->
  <text x="240" y="22" text-anchor="middle" font-weight="bold" font-size="13" fill="#0f172a">Electrochemical Cell Shorthand Notation</text>
  <!-- Notation row -->
  <text x="30" y="75" font-size="14" font-weight="bold" fill="#1e40af">Zn(s)</text>
  <text x="88" y="75" font-size="16" fill="#475569">|</text>
  <text x="100" y="75" font-size="14" fill="#64748b">Zn²⁺(aq)</text>
  <text x="178" y="75" font-size="16" fill="#475569">‖</text>
  <text x="196" y="75" font-size="14" fill="#64748b">Cu²⁺(aq)</text>
  <text x="276" y="75" font-size="16" fill="#475569">|</text>
  <text x="288" y="75" font-size="14" font-weight="bold" fill="#1e40af">Cu(s)</text>
  <!-- E° labels -->
  <text x="30" y="96" font-size="11" fill="#dc2626">E° = −0.76 V</text>
  <text x="230" y="96" font-size="11" fill="#16a34a">E° = +0.34 V</text>
  <!-- Arrows & labels -->
  <line x1="40" y1="105" x2="40" y2="120" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="305" y1="105" x2="305" y2="120" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="15" y="138" font-size="10" fill="#6366f1">LEFT: Oxidation</text>
  <text x="255" y="138" font-size="10" fill="#6366f1">RIGHT: Reduction</text>
  <text x="15" y="152" font-size="10" fill="#6366f1">(Anode, −ve)</text>
  <text x="255" y="152" font-size="10" fill="#6366f1">(Cathode, +ve)</text>
  <!-- Electron flow arrow -->
  <line x1="60" y1="65" x2="280" y2="65" stroke="#f59e0b" stroke-width="2" marker-end="url(#earr)"/>
  <text x="140" y="55" text-anchor="middle" font-size="11" fill="#b45309" font-weight="bold">e⁻ flow (external circuit)</text>
  <!-- E°cell -->
  <text x="240" y="178" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">E°cell = E°(right) − E°(left) = +0.34 − (−0.76) = +1.10 V</text>
  <!-- Legend -->
  <text x="150" y="200" text-anchor="middle" font-size="10" fill="#64748b">| = phase boundary (change in state)     ‖ = salt bridge</text>
  <!-- Arrow defs -->
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#6366f1"/>
    </marker>
    <marker id="earr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/>
    </marker>
  </defs>
</svg>`,
      },
    },
    { type: 'heading', id: 'h-ecell', data: { text: 'Calculating E°cell — The Right-Minus-Left Rule', level: 2 } },
    { type: 'equation', id: 'eq-cell-emf', data: { html: 'E°<sub>cell</sub> = E°<sub>right</sub> − E°<sub>left</sub>', caption: 'Always: right minus left — do NOT change any signs' } },
    { type: 'callout', id: 'callout-sign-rule', data: { style: 'warning', title: 'Critical: E° Values Never Change Sign', text: 'The standard electrode potential of a substance is FIXED — it does NOT change based on which direction the half-equation runs.\n• Do NOT flip the sign when an electrode is acting as anode (oxidation)\n• Simply take E°(right) − E°(left) as they appear in the data book\n• For Zn/Cu: E°cell = (+0.34) − (−0.76) = +1.10 V\n• The negative sign of Zn stays negative even though Zn is being oxidised' } },
    { type: 'paragraph', id: 'p-ecell', data: { text: 'For Zn/Cu: E°cell = (+0.34) − (−0.76) = +1.10 V. The positive result confirms the reaction is spontaneous (thermodynamically feasible).' } },
    { type: 'heading', id: 'h-she-convention', data: { text: 'Special Rule: Standard Hydrogen Electrode (SHE) Measurements', level: 2 } },
    { type: 'callout', id: 'callout-she', data: { style: 'key', title: 'SHE Always On The Left', text: 'When measuring standard electrode potentials against the SHE, the convention is:\n• SHE (H⁺/H₂ electrode) is ALWAYS written on the LEFT — regardless of whether E° is positive or negative\n• The metal half-cell being measured is ALWAYS on the RIGHT\n\nExamples:\n  Pt | H₂(g) | H⁺(aq) || Cu²⁺(aq) | Cu(s)    → E°cell = +0.34 V (Cu more positive)\n  Pt | H₂(g) | H⁺(aq) || Zn²⁺(aq) | Zn(s)    → E°cell = −0.76 V (Zn more negative)\n\nNote: For Zn, the SHE is still on the left even though Zn has a negative value.' } },
    { type: 'heading', id: 'h-electron-flow', data: { text: 'Charge Flow in an Electrochemical Cell', level: 2 } },
    { type: 'list', id: 'list-charge-flow', data: { style: 'bullet', items: [
      'Electrons flow through the EXTERNAL CIRCUIT (wires) — from the more negative electrode (left) to the more positive electrode (right)',
      'Ions flow through the SALT BRIDGE — carrying charge to maintain electrical neutrality in both half-cells',
      'Electrons CANNOT flow through liquid (the solutions); they can only flow through the metal wires',
      'Both processes (electron flow + ion flow) contribute to the overall current',
      'In the Zn/Cu cell: electrons flow from Zn → external circuit → Cu; ions migrate through the KNO₃ salt bridge'
    ] } },
    { type: 'heading', id: 'h-interpret', data: { text: 'Interpreting Cell Diagrams', level: 2 } },
    { type: 'list', id: 'list-steps', data: { style: 'numbered', items: [ 'Identify anode (left, more negative E°) and cathode (right, more positive E°)', 'Write oxidation half-equation (anode, left side)', 'Write reduction half-equation (cathode, right side)', 'Balance electrons in both half-equations', 'Combine to give overall equation, cancelling electrons and spectator ions' ] } },
    { type: 'callout', id: 'callout-tip-1', data: { style: 'tip', title: 'Exam Tip: Inert Electrodes (Pt)', text: 'When both species in a half-reaction are in solution (e.g. Fe³⁺/Fe²⁺) or one is a gas (H⁺/H₂), there is no solid metal to act as electrode. Use a platinum (Pt) inert electrode.\n\nIn notation, Pt appears at the outer LEFT or outer RIGHT:\n  Pt | Fe²⁺(aq), Fe³⁺(aq) || ...   (comma = no phase boundary between dissolved ions)\n\nFor the hydrogen half-cell:\n  Pt | H₂(g) | H⁺(aq) || ... (two phase boundaries: Pt/gas and gas/solution)' } },
    { type: 'callout', id: 'callout-half-cell-examples', data: { style: 'worked', title: 'Half-Cell Notation Examples', text: 'Metal/ion half-cell (phase boundary between solid and solution):\n  Zn²⁺(aq) | Zn(s)         E° = −0.76 V\n  Mg²⁺(aq) | Mg(s)         E° = −2.37 V\n  Cu²⁺(aq) | Cu(s)         E° = +0.34 V\n\nTwo ions in solution (comma; no phase boundary between ions):\n  Pt | Fe³⁺(aq), Fe²⁺(aq)  (inert Pt electrode needed)\n\nHydrogen half-cell (two phase boundaries):\n  Pt | H₂(g) | H⁺(aq)      E° = 0.00 V (reference)' } },
    {
      type: 'callout',
      id: 'callout-complex-notation',
      data: {
        style: 'tip',
        title: 'Notation for Non-Metals & Complex Ions',
        text: '• Non-Metal Gas / Ion: The gas is bubbled over Platinum. The species with lowest oxidation state goes nearer the electrode.\n  Example (Chlorine as anode): Pt | Cl⁻(aq) | Cl₂(g) ||\n  Example (Chlorine as cathode): || Cl₂(g) | Cl⁻(aq) | Pt\n\n• Complex Ions: When multiple ions AND H⁺ are present, they are separated by commas. Some conventions use square brackets to keep them tidy:\n  Pt | [Cr₂O₇²⁻(aq), H⁺(aq), Cr³⁺(aq)] || ...\n\nRemember: Pt must always remain on the far outside edge.',
      },
    },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I understand | (phase boundary) and || (salt bridge)', checked: false }, { text: 'I know: reduced forms go on the OUTSIDE of full cell notation', checked: false }, { text: 'I know: more positive E° goes on the RIGHT', checked: false }, { text: 'I know: SHE is always written on the LEFT when measuring E°', checked: false }, { text: 'I can write cell notation for metal/ion, ion/ion, and gas half-cells', checked: false }, { text: 'I know E°cell = E°(right) − E°(left), never changing signs', checked: false }, { text: 'I understand electrons flow through wires, ions through salt bridge', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Cell notation follows the convention: anode | anode solution || cathode solution | cathode. Phase boundaries are shown with |, salt bridges with ||.\n\nApply: Write the cell notation for Fe(s)|Fe²⁺(aq)||Ag⁺(aq)|Ag(s). Calculate E°cell.\n\nAnalyze: Why does the convention place the more negative electrode on the left?\n\nEvaluate: Cell notation cannot show all details (concentrations, temperatures). Discuss its limitations as a communication tool.'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: '• | = phase boundary (change in state); || = salt bridge (dashed)\n• Reduced forms go on the OUTSIDE (far left and far right)\n• More positive E° electrode always on the RIGHT\n• SHE always on the LEFT when measuring standard electrode potentials\n• E°cell = E°(right) − E°(left) — DO NOT change any signs\n• Electrons flow through external circuit (wires): negative → positive\n• Ions flow through salt bridge to maintain charge neutrality\n• Inert Pt electrode used when no solid metal is present (ion/ion, gas)\n• Zn/Cu example: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)   E°cell = +1.10 V' } },
  ],
  recall: { enabled: true, cues: [
    { id: 'cue-1', blockId: 'callout-key-1', prompt: 'State the three key IAL rules for writing cell notation.' },
    { id: 'cue-2', blockId: 'eq-format', prompt: 'What does | represent? What does || represent?' },
    { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'Write the full shorthand notation for the Zn/Cu cell with E° values shown.' },
    { id: 'cue-4', blockId: 'callout-sign-rule', prompt: 'Why must you NOT change the sign of E° when an electrode acts as anode?' },
    { id: 'cue-5', blockId: 'callout-she', prompt: 'Where is the SHE written when measuring standard electrode potentials? Give a rule and example.' },
    { id: 'cue-6', blockId: 'list-charge-flow', prompt: 'Distinguish between what flows through the wires and what flows through the salt bridge.' },
    { id: 'cue-7', blockId: 'callout-complex-notation', prompt: 'How do you structure the IUPAC cell notation for reading a complex non-metal half cell like Potassium Dichromate, and what electrode goes on the outer edge?' },
  ], summaryText: 'Reduced forms on the outside. More positive E° on the right. SHE always on left. E°cell = E°(right) − E°(left); never change signs. Electrons through wires (−ve to +ve); ions through salt bridge. Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s), E°cell = +1.10 V.', ready: false },
  evidence: [ { id: 'ev-1', title: 'IUPAC cell notation and diagrams', detail: 'Notation conventions, anode/cathode identification, writing and interpreting cell diagrams, E°cell calculation.', year: '2024', source: 'chemguide.co.uk', tags: ['cell notation', 'cell diagram', 'IUPAC', 'E°cell'] } ],
};
