/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 6
 * "Rate equations and mechanisms"
 */

export const note_chemistry_4_11_6 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Explain the Rate-Determining Step (RDS) and predict reaction mechanisms based on the experimental rate equation.'
      },
      terms: []
    },
    // ── RATE DETERMINING STEP ──────────────────────────────────────────────
    {
      id: 'h-rds',
      type: 'heading',
      data: { text: 'The Rate-Determining Step (RDS)', level: 2 },
      terms: []
    },
    {
      id: 'p-rds-intro',
      type: 'paragraph',
      data: {
        text: 'Most chemical reactions do NOT happen in a single step where all reactant molecules smash together simultaneously (this is statistically almost impossible). Instead, they occur in a <strong>multi-step mechanism</strong>, which is a sequence of simpler reactions.'
      },
      terms: []
    },
    {
      id: 'callout-rds',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Bottleneck: Rate-Determining Step',
        text: 'Different steps in a mechanism happen at wildly different speeds. One step is always significantly slower than the rest. This slowest step acts as a bottleneck and governs the total speed of the entire reaction. <br/><br/>This slowest step is called the <strong>Rate-Determining Step (RDS)</strong>.'
      },
      terms: ['Rate-Determining Step', 'RDS']
    },
    // ── LINKING TO THE RATE EQUATION ───────────────────────────────────────
    {
      id: 'h-link',
      type: 'heading',
      data: { text: 'The Golden Rule of Mechanisms', level: 2 },
      terms: []
    },
    {
      id: 'p-link',
      type: 'paragraph',
      data: {
        text: 'The order of a reaction with respect to a reactant tells us exactly <strong>how many molecules</strong> of that specific reactant are involved in (or before) the Rate-Determining Step!'
      },
      terms: []
    },
    {
      id: 'list-golden',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Zero Order [A]⁰:</strong> Reactant A does NOT affect the rate at all. This means Reactant A must only join the reaction <em>after</em> the RDS has already happened.',
          '<strong>First Order [A]¹:</strong> Exactly ONE molecule of Reactant A is involved in the RDS (or in a fast step directly before it).',
          '<strong>Second Order [A]²:</strong> Exactly TWO molecules of Reactant A must collide in the RDS (or before it).'
        ]
      },
      terms: []
    },
    // ── SN1 vs SN2 MECHANISMS ──────────────────────────────────────────────
    {
      id: 'h-example',
      type: 'heading',
      data: { text: 'Classic Example: SN1 vs SN2 in Halogenoalkanes', level: 2 },
      terms: []
    },
    {
      id: 'p-sn1',
      type: 'paragraph',
      data: {
        text: '<strong>SN1 Mechanism (Tertiary Halogenoalkanes)</strong><br/>The reaction happens in two steps. The first step is the slow breaking of the C-Br bond. The second step is the fast attack by the OH⁻ nucleophile. <br/><br/>Because the OH⁻ only attacks <em>after</em> the slow step (RDS), it has zero effect on the overall rate! Therefore, it does not appear in the rate equation:<br/><strong>Rate = k[R-Br]¹</strong>'
      },
      terms: ['SN1']
    },
    {
      id: 'p-sn2',
      type: 'paragraph',
      data: {
        text: '<strong>SN2 Mechanism (Primary Halogenoalkanes)</strong><br/>The reaction happens in just one single, explosive step. The OH⁻ nucleophile attacks the carbon at the exact same moment the Br⁻ is leaving. <br/><br/>Because both molecules are involved in this single slow step (which is the RDS by default), both appear in the rate equation:<br/><strong>Rate = k[R-Br]¹[OH⁻]¹</strong>'
      },
      terms: ['SN2']
    },
    {
      id: 'bloom-mechanisms',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Predicting a Mechanism',
        text: '<strong>Overall Reaction:</strong> 2NO(g) + O₂(g) → 2NO₂(g)<br/><strong>Experimental Rate Equation:</strong> Rate = k[NO]²[O₂]¹<br/><br/><strong>Proposed Mechanism:</strong><br/>Step 1: NO + NO → N₂O₂ (Slow RDS)<br/>Step 2: N₂O₂ + O₂ → 2NO₂ (Fast)<br/><br/><strong>Is this mechanism consistent with the Rate Equation?</strong><br/><strong>No!</strong> The rate equation tells us that two molecules of NO and one molecule of O₂ must be involved in or before the RDS. In the proposed mechanism, the O₂ does not get involved until Step 2 (after the RDS). Therefore, the proposed mechanism is mathematically <strong>incorrect/inconsistent</strong>.'
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
        blockId: 'list-mechanism-intro',
        prompt: 'Define the term "Rate-Determining Step" (RDS).'
      },
      {
        id: 'cue-2',
        blockId: 'list-golden',
        prompt: 'If a reactant is zero order with respect to the reaction rate, what does this tell you about its role in the reaction mechanism?'
      },
      {
        id: 'cue-3',
        blockId: 'table-sn1-sn2',
        prompt: 'State the rate equation for an SN1 nucleophilic substitution mechanism, and explain why [OH⁻] is missing from it.'
      },
      {
        id: 'cue-4',
        blockId: 'bloom-mechanisms-complex',
        prompt: 'The rate equation for a reaction is Rate = k[A]¹[B]¹. Explain why a proposed mechanism where Step 1 (Slow) is simply A → C cannot be correct.'
      }
    ],
    summaryText: 'The Rate-Determining Step (RDS) is the notoriously slow "bottleneck" step of a multi-step reaction. The order of each reactant in the experimental rate equation tells us exactly how many molecules of that reactant are involved in or prior to the RDS.',
    ready: false
  },
  evidence: []
};

export default note_chemistry_4_11_6;
