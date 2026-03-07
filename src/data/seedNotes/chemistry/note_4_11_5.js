/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 5
 * "Rate constants and units"
 */

export const note_chemistry_4_11_5 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Show how to rearrange the rate equation to solve for the value of the rate constant (k), and how to deduce its mathematical units.'
      },
      terms: []
    },
    // ── CALCULATING THE RATE CONSTANT ──────────────────────────────────────
    {
      id: 'h-calc',
      type: 'heading',
      data: { text: 'Calculating the value of k', level: 2 },
      terms: []
    },
    {
      id: 'p-calc',
      type: 'paragraph',
      data: {
        text: 'Once you have deduced the full rate equation (e.g. Rate = k[A]¹[B]²) and you have a table of experimental data, finding the numerical value of the rate constant (k) is simple algebra.'
      },
      terms: []
    },
    {
      id: 'list-calc',
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          'Choose <strong>any single experiment</strong> (row) from your data table.',
          'Substitute the concentration values and the measured initial rate from that exact row into your newly discovered rate equation.',
          'Rearrange the equation to make k the subject.'
        ]
      },
      terms: []
    },
    // ── DEDUCING THE UNITS OF k ────────────────────────────────────────────
    {
      id: 'h-units',
      type: 'heading',
      data: { text: 'Deducing the units of k', level: 2 },
      terms: []
    },
    {
      id: 'p-units-intro',
      type: 'paragraph',
      data: {
        text: 'Unlike other constants, the mathematical units for the rate constant (k) are <strong>not fixed</strong>! The units change completely depending on the overall order of the reaction. Because of this, exam questions almost always allocate a specific mark just for calculating the correct units.'
      },
      terms: []
    },
    {
      id: 'bloom-units-example',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Deducing units',
        text: '<strong>Q: Find the units of k for the rate equation: Rate = k[A]¹[B]²</strong><br/><br/><strong>Step 1: Rearrange the equation for k</strong><br/>k = Rate / ([A][B]²)<br/><br/><strong>Step 2: Substitute the standard units into the equation</strong><br/>The unit for Rate is always <strong>mol dm⁻³ s⁻¹</strong>.<br/>The unit for Concentration [ ] is always <strong>mol dm⁻³</strong>.<br/><br/>k = (mol dm⁻³ s⁻¹) / (mol dm⁻³ × (mol dm⁻³)²)<br/>k = (mol dm⁻³ s⁻¹) / (mol³ dm⁻⁹)<br/><br/><strong>Step 3: Cancel out common terms</strong><br/>Cancel one (mol dm⁻³) from top and bottom.<br/>k = (s⁻¹) / (mol² dm⁻⁶)<br/><br/><strong>Step 4: Bring the bottom terms to the top (flip their signs)</strong><br/>k = <strong>dm⁶ mol⁻² s⁻¹</strong>'
      },
      terms: []
    },
    {
      id: 'table-cheat-sheet',
      type: 'comparisonTable',
      data: {
        caption: 'Unit Cheat Sheet (Memorise to self-check!)',
        headers: ['Overall Order of Reaction', 'Units of k'],
        rows: [
          ['Zero Order (0)', 'mol dm⁻³ s⁻¹'],
          ['First Order (1)', 's⁻¹'],
          ['Second Order (2)', 'dm³ mol⁻¹ s⁻¹'],
          ['Third Order (3)', 'dm⁶ mol⁻² s⁻¹']
        ]
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
        blockId: 'list-calc',
        prompt: 'Does it matter which experiment run/row from a data table you pick to calculate the value of the rate constant (k)?'
      },
      {
        id: 'cue-2',
        blockId: 'bloom-units-example',
        prompt: 'What are the standard units for the Rate of a reaction?'
      },
      {
        id: 'cue-3',
        blockId: 'table-cheat-sheet',
        prompt: 'Without doing the calculation, state the units of the rate constant (k) for an overall FIRST order reaction.'
      },
      {
        id: 'cue-4',
        blockId: 'table-cheat-sheet',
        prompt: 'Without doing the calculation, state the units of the rate constant (k) for an overall SECOND order reaction.'
      }
    ],
    summaryText: 'To find the value of k, substitute the data from any one experimental test into the deduced rate equation. The mathematical units of k change depending on the overall order of the reaction. Substitute mol dm⁻³ s⁻¹ for Rate and mol dm⁻³ for each concentration, cancel terms, and bring the denominator indices up by flipping their signs.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_5;
