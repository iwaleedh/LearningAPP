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
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Deduce orders one variable at a time",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "For rate = k[A]ᵐ[B]ⁿ, reaction orders are obtained experimentally; they are not normally the coefficients in the overall equation. Compare experiments in which one concentration changes and the others remain fixed. A doubling that leaves rate unchanged suggests zero order; a doubling giving twice the rate suggests first order; a doubling giving four times the rate suggests second order.<br/><br/>If several concentrations change at once, account for an already known order before solving the unknown one. Total order is m + n. For clock experiments, use 1/t as a quantity proportional to initial rate only when the same small amount of product is needed for the endpoint under comparable conditions."
  }
},
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
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "All Other Concentrations Must Stay Constant",
        text: "When comparing experiments to find order w.r.t. reactant A, the concentrations of ALL OTHER reactants must be identical. If you cannot find such a pair, you must mathematically account for the effect of other concentration changes."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Quick Order Recognition",
        text: "Double concentration: no rate change = 0th order | rate doubles = 1st order | rate quadruples = 2nd order."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Experiment 1: [A] = 0.10, [B] = 0.10, rate = 2.0 × 10⁻⁴. Experiment 2 doubles [A] only and rate becomes 8.0 × 10⁻⁴: 2ᵐ = 4, so m = 2. Experiment 3 doubles [B] relative to experiment 1 and rate becomes 4.0 × 10⁻⁴: n = 1. Thus <strong>rate = k[A]²[B]</strong>, total order 3. k = (2.0 × 10⁻⁴)/(0.10² × 0.10) = 0.20 dm⁶ mol⁻² s⁻¹."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Using experiments where both concentrations change without allowing for both effects gives the wrong order. Check units for k after finding total order."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "How can second order be recognised in initial-rate data?",
        "checked": false
      },
      {
        "text": "Can overall equation coefficients be used as reaction orders?",
        "checked": false
      },
      {
        "text": "What is the total order of k[A]²[B]?",
        "checked": false
      },
      {
        "text": "When is 1/t proportional to initial rate in a clock investigation?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "For rate = k[A]ᵐ[B]ⁿ, reaction orders are obtained experimentally; they are not normally the coefficients in the overall equation. Compare experiments in which one concentration changes and the others remain fixed. A doubling that leaves rate unchanged suggests zero order; a doubling giving twice the rate suggests first order; a doubling giving four times the rate suggests second order."
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
      "prompt": "How can second order be recognised in initial-rate data?",
      "answer": "Doubling that reactant concentration at fixed other conditions makes rate four times larger."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Can overall equation coefficients be used as reaction orders?",
      "answer": "Not generally; orders must be determined experimentally unless an elementary-step context explicitly justifies them."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "What is the total order of k[A]²[B]?",
      "answer": "Three."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "When is 1/t proportional to initial rate in a clock investigation?",
      "answer": "When the endpoint corresponds to the same small amount of product and the other relevant conditions are comparable."
    }
  ],
  "summaryText": "For rate = k[A]ᵐ[B]ⁿ, reaction orders are obtained experimentally; they are not normally the coefficients in the overall equation. Compare experiments in which one concentration changes and the others remain fixed. A doubling that leaves rate unchanged suggests zero order; a doubling giving twice the rate suggests first order; a doubling giving four times the rate suggests second order.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}]
};

export default note_chemistry_4_11_4;
