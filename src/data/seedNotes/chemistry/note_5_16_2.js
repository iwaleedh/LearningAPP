export const note_chemistry_5_16_2 = {
  blocks: [
    { type: 'objective', id: 'obj-1', data: { text: 'Understand the construction of the standard hydrogen electrode (SHE), explain why platinum is used, and describe how E° values are measured against the SHE.' } },
    { type: 'heading', id: 'h-construction', data: { text: 'Construction of the Standard Hydrogen Electrode', level: 2 } },
    { type: 'paragraph', id: 'p-constr-1', data: { text: 'The standard hydrogen electrode (SHE) is a half-cell consisting of a platinum electrode immersed in a solution of H⁺ ions, with hydrogen gas bubbled through the solution. Key components: Pt electrode (inert), H⁺ solution at pH 0 (1 mol dm⁻³), H₂ gas at 1 bar, 298 K, and half-reaction 2H⁺ + 2e⁻ ⇌ H₂ with E° = 0.00 V.' } },
    { type: 'callout', id: 'callout-key-1', data: { style: 'key', title: 'Why Platinum is Used', text: 'Platinum is inert (does not react with H⁺ or H₂) and catalytic (promotes the H⁺/H₂ equilibrium). Other metals would be oxidised or reduced by H⁺/H₂, contaminating the measurement.' } },
    { type: 'heading', id: 'h-measuring-e', data: { text: 'Measuring E° Against the SHE', level: 2 } },
    { type: 'paragraph', id: 'p-meas-1', data: { text: 'To measure the E° of any half-cell, connect it to a standard hydrogen electrode via a salt bridge. Use a high-resistance voltmeter (≥10 MΩ input impedance) to measure the potential difference. The measured voltage is the electrode potential of the test half-cell relative to E° = 0 V (the SHE). The high-resistance voltmeter minimises current flow, ensuring accurate measurement.' } },
    { type: 'callout', id: 'callout-worked-1', data: { style: 'worked', title: 'Measuring E° of Cu²⁺/Cu', text: 'Connect a copper electrode in 1 mol dm⁻³ CuSO₄ to the SHE via a salt bridge. Voltmeter reads +0.34 V with copper positive, establishing E° = +0.34 V for Cu²⁺ + 2e⁻ ⇌ Cu. Positive E° indicates copper is more easily reduced than H⁺.' } },
    { type: 'heading', id: 'h-salt-bridge', data: { text: 'The Salt Bridge: Function and Design', level: 3 } },
    { type: 'paragraph', id: 'p-sb-1', data: { text: 'A salt bridge (tube filled with inert electrolyte like KNO₃) connects the two half-cells. It completes the circuit by allowing ion flow between half-cells, balancing charge as electrons flow through the external circuit. The gel or agar matrix prevents solutions from mixing while permitting ion migration.' } },
    { type: 'checklist', id: 'checklist-1', data: { items: [ { text: 'I can describe SHE construction: Pt electrode, H₂ gas, 1 mol dm⁻³ H⁺, 298 K, 1 bar', checked: false }, { text: 'I understand why platinum is used (inert and catalytic)', checked: false }, { text: 'I know the SHE has E° = 0.00 V by definition', checked: false }, { text: 'I can explain the purpose of the salt bridge', checked: false }, { text: 'I can interpret positive and negative E° values', checked: false } ] } },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: Electrochemical cells convert chemical energy to electrical energy. The cell EMF depends on the difference in electrode potentials of the two half-cells.\n\nApply: Set up a Daniel cell (Zn|Zn²⁺||Cu²⁺|Cu). Calculate the EMF and identify electron flow direction.\n\nAnalyze: Why must a salt bridge be present for the cell to function? What happens if it is removed?\n\nEvaluate: Compare primary cells, secondary cells, and fuel cells. Which is most sustainable and why?'
      },
      terms: []
    },
    { type: 'summary', id: 'summary-1', data: { text: 'The SHE has a Pt electrode, 1 mol dm⁻³ H⁺, H₂ gas at 1 bar, 298 K; E° = 0.00 V by definition. Platinum is inert (no side reactions) and catalytic (promotes H⁺/H₂ equilibrium). Measure E° by connecting test half-cell to SHE via salt bridge; use high-resistance voltmeter to prevent current drain. Salt bridge allows ion flow without mixing solutions. Positive E° = easily reduced; negative E° = difficult to reduce.' } },
  ],
  recall: { enabled: true, cues: [ { id: 'cue-1', blockId: 'p-constr-1', prompt: 'What are the key components of the SHE?' }, { id: 'cue-2', blockId: 'callout-key-1', prompt: 'Why is platinum used instead of other metals?' }, { id: 'cue-3', blockId: 'p-meas-1', prompt: 'Why must the voltmeter have high resistance?' }, { id: 'cue-4', blockId: 'p-sb-1', prompt: 'What are the two functions of the salt bridge?' }, { id: 'cue-5', blockId: 'callout-worked-1', prompt: 'If voltmeter reads +0.34 V, what is E°?' } ], summaryText: 'SHE has Pt, 1 mol dm⁻³ H⁺, H₂ at 1 bar, 298 K; E° = 0.00 V. Pt is inert and catalytic. Measure E° using high-resistance voltmeter (≥10 MΩ) connected via salt bridge. Salt bridge allows ion flow without mixing.', ready: false },
  evidence: [ { id: 'ev-1', title: 'Standard hydrogen electrode and E° measurement', detail: 'SHE construction, platinum properties, measuring E° with salt bridge and voltmeter.', year: '2024', source: 'chemguide.co.uk', tags: ['SHE', 'platinum', 'measuring E°', 'salt bridge'] } ],
};
