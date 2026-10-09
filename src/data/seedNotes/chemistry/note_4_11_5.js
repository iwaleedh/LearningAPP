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
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Derive rate-constant units instead of memorising them",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Rearrange k = rate divided by the concentration terms. If rate is in mol dm⁻³ s⁻¹ and concentration in mol dm⁻³, a total order r gives units (mol dm⁻³)¹⁻ʳ s⁻¹. Zero-order k therefore has rate units; first-order k has s⁻¹; second-order k has dm³ mol⁻¹ s⁻¹; third-order k has dm⁶ mol⁻² s⁻¹.<br/><br/>At fixed temperature and for the same pathway, changing reactant concentrations changes rate but not k. Raising temperature usually changes k. A catalyst supplies a different pathway and can alter the rate law; do not treat it simply as changing reactant concentrations."
  }
},
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "k Units Change With Overall Order",
        text: "The units of k are NOT fixed. They depend entirely on the overall order. 0th order: mol dm\u207b\u00b3 s\u207b\u00b9 | 1st order: s\u207b\u00b9 | 2nd order: dm\u00b3 mol\u207b\u00b9 s\u207b\u00b9 | 3rd order: dm\u2076 mol\u207b\u00b2 s\u207b\u00b9. Exams always mark this specifically."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Quick Units Check",
        text: "Rearrange the rate equation to isolate k, then substitute mol dm\u207b\u00b3 s\u207b\u00b9 for Rate and mol dm\u207b\u00b3 for each [concentration]. Cancel and flip negative indices in denominator to positive in numerator."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "For rate = k[A][B] and rate = 6.0 × 10⁻⁴ mol dm⁻³ s⁻¹ when [A] = 0.20 and [B] = 0.10 mol dm⁻³: k = (6.0 × 10⁻⁴)/(0.20 × 0.10) = <strong>0.030 dm³ mol⁻¹ s⁻¹</strong>. Write the unit division explicitly: (mol dm⁻³ s⁻¹)/(mol² dm⁻⁶) = dm³ mol⁻¹ s⁻¹."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Units of k depend on the rate definition and concentration units. Do not quote s⁻¹ for every rate constant, or claim k increases because concentration increased at fixed temperature."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "What are k’s units for a first-order concentration rate law?",
        "checked": false
      },
      {
        "text": "What are k’s units for total order two?",
        "checked": false
      },
      {
        "text": "How are k’s units found?",
        "checked": false
      },
      {
        "text": "Does changing [A] at fixed temperature normally change k?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Rearrange k = rate divided by the concentration terms. If rate is in mol dm⁻³ s⁻¹ and concentration in mol dm⁻³, a total order r gives units (mol dm⁻³)¹⁻ʳ s⁻¹. Zero-order k therefore has rate units; first-order k has s⁻¹; second-order k has dm³ mol⁻¹ s⁻¹; third-order k has dm⁶ mol⁻² s⁻¹."
  }
}
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "What are k’s units for a first-order concentration rate law?",
      "answer": "s⁻¹ when rate is measured in mol dm⁻³ s⁻¹."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "What are k’s units for total order two?",
      "answer": "dm³ mol⁻¹ s⁻¹ with the stated concentration and rate units."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "How are k’s units found?",
      "answer": "Divide the units of rate by the units of the full concentration product."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Does changing [A] at fixed temperature normally change k?",
      "answer": "No. It changes rate through the concentration terms for the same reaction pathway."
    }
  ],
  "summaryText": "Rearrange k = rate divided by the concentration terms. If rate is in mol dm⁻³ s⁻¹ and concentration in mol dm⁻³, a total order r gives units (mol dm⁻³)¹⁻ʳ s⁻¹. Zero-order k therefore has rate units; first-order k has s⁻¹; second-order k has dm³ mol⁻¹ s⁻¹; third-order k has dm⁶ mol⁻² s⁻¹.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};

export default note_chemistry_4_11_5;
