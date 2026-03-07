/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 4
 * "Deducing order from data"
 */

export const note_chemistry_4_11_4 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Provide rules and worked examples for deducing reaction orders from tables of initial rate data.'
      },
      terms: []
    },
    // ── THE METHOD ─────────────────────────────────────────────────────────
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'How to Deduce Orders from a Table', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Exams frequently provide a table showing the results of several different "Initial Rate" experiments. For each experiment, the starting concentration of one or more reactants has been changed. <br/><br/>Your goal is to compare two experiments where <strong>only one reactant\'s concentration changes</strong> while all others remain perfectly constant.'
      },
      terms: []
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Rule 1 (Zero Order):</strong> If you double [A], and the initial rate <strong>does not change</strong>, the reaction is zero order with respect to A.',
          '<strong>Rule 2 (First Order):</strong> If you double [A], and the initial rate <strong>doubles (×2)</strong>, the reaction is first order with respect to A.',
          '<strong>Rule 3 (Second Order):</strong> If you double [A], and the initial rate <strong>quadruples (×4)</strong>, the reaction is second order with respect to A.'
        ]
      },
      terms: []
    },
    // ── WORKED EXAMPLE ─────────────────────────────────────────────────────
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example: Deducing the Rate Equation', level: 2 },
      terms: []
    },
    {
      id: 'bloom-table',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Data Table Analysis',
        text: `<table style="width:100%; text-align:left; border-collapse:collapse; margin-top:10px;">
  <tr style="border-bottom: 1px solid #ccc;">
    <th style="padding: 5px;">Experiment</th>
    <th style="padding: 5px;">[A] (mol dm⁻³)</th>
    <th style="padding: 5px;">[B] (mol dm⁻³)</th>
    <th style="padding: 5px;">Initial Rate (mol dm⁻³ s⁻¹)</th>
  </tr>
  <tr>
    <td style="padding: 5px;">1</td>
    <td style="padding: 5px;">0.10</td>
    <td style="padding: 5px;">0.20</td>
    <td style="padding: 5px;">1.5 × 10⁻³</td>
  </tr>
  <tr>
    <td style="padding: 5px;">2</td>
    <td style="padding: 5px;">0.20</td>
    <td style="padding: 5px;">0.20</td>
    <td style="padding: 5px;">3.0 × 10⁻³</td>
  </tr>
  <tr>
    <td style="padding: 5px;">3</td>
    <td style="padding: 5px;">0.20</td>
    <td style="padding: 5px;">0.40</td>
    <td style="padding: 5px;">1.2 × 10⁻²</td>
  </tr>
</table><br/><strong>Step 1: Find the order w.r.t [A]</strong><br/>Compare Exp 1 and Exp 2. The concentration of [B] is held constant at 0.20.<br/>The concentration of [A] has doubled (0.10 → 0.20).<br/>The initial rate has also doubled (1.5 × 10⁻³ → 3.0 × 10⁻³).<br/>Because Rate ∝ [A]¹, the reaction is <strong>First Order</strong> with respect to A.<br/><br/><strong>Step 2: Find the order w.r.t [B]</strong><br/>Compare Exp 2 and Exp 3. The concentration of [A] is held constant at 0.20.<br/>The concentration of [B] has doubled (0.20 → 0.40).<br/>The initial rate has quadrupled (3.0 × 10⁻³ → 12.0 × 10⁻³).<br/>Because Rate ∝ [B]², the reaction is <strong>Second Order</strong> with respect to B.<br/><br/><strong>Step 3: Construct the Rate Equation</strong><br/>Rate = k[A]¹[B]²`
      },
      terms: []
    },
    {
      id: 'warning-complex',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Trick: No Constant Variables!',
        text: 'Sometimes, you cannot find two experiments where [A] changes but [B] is completely constant! If this happens, you must calculate the effect of [A] first, mathematically account for how MUCH the rate was supposed to change due to [A], and then attribute any "extra" change in the rate to [B].'
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
        blockId: 'list-rules',
        prompt: 'In an initial rate experiment, the concentration of reactant [X] is tripled, while all other reactants are held constant. The rate does not change at all. What is the order of reaction with respect to [X]?'
      },
      {
        id: 'cue-2',
        blockId: 'list-rules',
        prompt: 'If the concentration of a reactant is tripled (×3), and the overall rate increases by a factor of 9 (×9), what is the order of reaction with respect to that reactant?'
      },
      {
        id: 'cue-3',
        blockId: 'bloom-table',
        prompt: 'When deducing the order for reactant [A] from a data table, why must you select two experiments where the concentration of reactant [B] does not change?'
      }
    ],
    summaryText: 'To deduce order from a data table, isolate experiments where only one reactant’s concentration changes. If doubling the concentration: does nothing = Zero Order. Doubles the rate (×2) = First Order. Quadruples the rate (×4) = Second Order.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_4;
