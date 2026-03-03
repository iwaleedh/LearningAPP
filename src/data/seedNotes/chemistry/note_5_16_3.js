export const note_chemistry_5_16_3 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand IUPAC cell notation and how to write and interpret cell diagrams, including salt bridges, phase boundaries, and worked examples.' } },
    { type: 'heading', id: 'h-iupac', data: { text: 'IUPAC Cell Notation', level: 2 } },
    { type: 'paragraph', id: 'p-intro', data: { text: 'Cell notation represents a galvanic cell compactly. Format: Anode | Anode solution || Cathode solution | Cathode. Single bars (|) show phase boundaries; double bars (||) show salt bridge. Anode (oxidation, negative) is on left; cathode (reduction, positive) is on right.' } },
    { type: 'equation', id: 'eq-format', data: { html: 'Anode | Anode solution || Cathode solution | Cathode', caption: 'IUPAC cell notation format' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Remember: Anode Left, Cathode Right', text: 'Anode (oxidation, more negative E°) is always on left. Cathode (reduction, more positive E°) is always on right. Salt bridge || is in the middle.' } },
    { type: 'heading', id: 'h-worked', data: { text: 'Worked Example: Zn/Cu Cell', level: 2 } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Zn/Cu Cell Notation', text: 'Setup: Zn electrode in ZnSO₄ solution, Cu electrode in CuSO₄ solution, connected by salt bridge. Zn (E° = −0.76 V) is anode; Cu (E° = +0.34 V) is cathode. Cell diagram: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). Overall reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s).' } },
    { type: 'heading', id: 'h-ecell', data: { text: 'Calculating E°cell from Cell Notation', level: 2 } },
    { type: 'equation', id: 'eq-cell-emf', data: { html: 'E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>', caption: 'Standard cell emf' } },
    { type: 'paragraph', id: 'p-ecell', data: { text: 'For Zn/Cu: E°cathode = +0.34 V (Cu), E°anode = −0.76 V (Zn). Therefore E°cell = 0.34 − (−0.76) = +1.10 V. Positive value confirms spontaneous reaction.' } },
    { type: 'heading', id: 'h-interpret', data: { text: 'Interpreting Cell Diagrams', level: 2 } },
    { type: 'list', id: 'list-steps', data: { style: 'numbered', items: [ 'Identify anode (left, more negative E°) and cathode (right, more positive E°)', 'Write oxidation half-equation (anode, left side)', 'Write reduction half-equation (cathode, right side)', 'Balance electrons in both half-equations', 'Combine to give overall equation, cancelling electrons and spectator ions' ] } },
    { type: 'callout', id: 'callout-tip-1', data: { style: 'tip', title: 'Exam Tip', text: 'Always check: anode = oxidation = more negative E°; cathode = reduction = more positive E°. Calculate E°cell = E°cathode − E°anode (more positive minus more negative).' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I understand | (phase boundary) and || (salt bridge)', checked: false }, { text: 'I know anode (oxidation, left) vs cathode (reduction, right)', checked: false }, { text: 'I can write cell diagrams from descriptions', checked: false }, { text: 'I can interpret cell diagrams and write half-equations', checked: false }, { text: 'I can calculate E°cell', checked: false } ] } },
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
    { type: 'summary', id: 'summary-1', data: { text: 'IUPAC notation: Anode | Anode solution || Cathode solution | Cathode. | = phase boundary; || = salt bridge. Anode (left) = oxidation, more negative; cathode (right) = reduction, more positive. Example: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). E°cell = E°cathode − E°anode. Inert electrodes (Pt) used when half-reactions involve dissolved ions or gases.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'callout-key-1', prompt: 'Which side is the anode and which is cathode?' }, { id: 'cue-2', blockId: 'eq-format', prompt: 'What does || represent?' }, { id: 'cue-3', blockId: 'callout-worked-1', prompt: 'Write the Zn/Cu cell diagram.' }, { id: 'cue-4', blockId: 'eq-cell-emf', prompt: 'How do you calculate E°cell?' }, { id: 'cue-5', blockId: 'list-steps', prompt: 'What are the first two steps to determine half-equations?' } ], summaryText: 'Anode | Anode solution || Cathode solution | Cathode. Anode (left) = oxidation, more negative; cathode (right) = reduction, more positive. Example: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). E°cell = E°cathode − E°anode.', ready: false },
  evidence: [ { id: 'ev-1', title: 'IUPAC cell notation and diagrams', detail: 'Notation conventions, anode/cathode identification, writing and interpreting cell diagrams, E°cell calculation.', year: '2024', source: 'chemguide.co.uk', tags: ['cell notation', 'cell diagram', 'IUPAC', 'E°cell'] } ],
};
