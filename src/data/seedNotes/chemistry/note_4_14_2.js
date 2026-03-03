export const note_chemistry_4_14_2 = {
  blocks: [
    {
      id: 'obj-ph',
      type: 'objective',
      data: {
        text: 'Calculate and understand pH definition; use pH and pOH scales; apply Kw relationship; calculate pH of strong acids and bases'
      }
    },
    {
      id: 'h-ph-def',
      type: 'heading',
      data: { text: 'The pH Scale', level: 2 }
    },
    {
      id: 'p-ph-intro',
      type: 'paragraph',
      data: {
        text: 'pH is a measure of the concentration of hydrogen ions (H⁺) in solution. Because [H⁺] can vary over a huge range (from 10⁻¹⁴ to 10⁰ mol dm⁻³), the logarithmic pH scale is used for convenience. pH is defined as the negative logarithm (base 10) of the hydrogen ion concentration.'
      }
    },
    {
      id: 'eq-ph-def',
      type: 'equation',
      data: {
        html: 'pH = −log<sub>10</sub>[H<sup>+</sup>] &emsp; or &emsp; [H<sup>+</sup>] = 10<sup>−pH</sup>',
        caption: 'pH definition: logarithmic scale of hydrogen ion concentration'
      }
    },
    {
      id: 'p-ph-scale',
      type: 'paragraph',
      data: {
        text: 'The pH scale typically ranges from 0 to 14 at 25°C. pH < 7 indicates an acidic solution (excess H⁺). pH = 7 indicates a neutral solution (H⁺ = OH⁻). pH > 7 indicates a basic (alkaline) solution (excess OH⁻). Each unit change in pH represents a 10-fold change in [H⁺]: for example, pH 3 is 10 times more acidic than pH 4, and 100 times more acidic than pH 5.'
      }
    },
    {
      id: 'h-poh',
      type: 'heading',
      data: { text: 'pOH and the Kw Relationship', level: 2 }
    },
    {
      id: 'p-kw-intro',
      type: 'paragraph',
      data: {
        text: 'In aqueous solution, water autoionizes: H₂O ⇌ H⁺ + OH⁻. The equilibrium constant for this process is Kw (the ionic product of water). At 25°C, Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶. This constant is fundamental: in any aqueous solution at 25°C, the product of [H⁺] and [OH⁻] always equals 10⁻¹⁴, whether the solution is acidic, neutral, or basic.'
      }
    },
    {
      id: 'eq-kw',
      type: 'equation',
      data: {
        html: 'K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 1.0 × 10<sup>−14</sup> mol² dm<sup>−6</sup> (at 25°C)',
        caption: 'Ionic product of water at 25°C'
      }
    },
    {
      id: 'p-poh-def',
      type: 'paragraph',
      data: {
        text: 'Similar to pH, pOH is defined as pOH = −log₁₀[OH⁻]. From the Kw expression, we can derive a relationship between pH and pOH: taking logarithms of both sides of Kw = [H⁺][OH⁻] = 10⁻¹⁴ gives −log([H⁺]) − log([OH⁻]) = 14, or pH + pOH = 14 at 25°C.'
      }
    },
    {
      id: 'eq-ph-poh',
      type: 'equation',
      data: {
        html: 'pH + pOH = 14 (at 25°C)',
        caption: 'Relationship between pH and pOH'
      }
    },
    {
      id: 'ex-kw-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculate [OH⁻] from [H⁺]',
        text: 'In a solution with [H⁺] = 0.001 mol dm⁻³ = 10⁻³ mol dm⁻³: [OH⁻] = Kw / [H⁺] = 10⁻¹⁴ / 10⁻³ = 10⁻¹¹ mol dm⁻³. pH = −log(10⁻³) = 3. pOH = −log(10⁻¹¹) = 11. Check: pH + pOH = 3 + 11 = 14 ✓'
      }
    },
    {
      id: 'h-strong-acids',
      type: 'heading',
      data: { text: 'pH of Strong Acids', level: 2 }
    },
    {
      id: 'p-strong-acid-ph',
      type: 'paragraph',
      data: {
        text: 'Strong acids completely dissociate in water, so [H⁺] ≈ concentration of strong acid (for monoprotic acids like HCl and HNO₃). The pH is then calculated directly from the concentration. For polyprotic strong acids like H₂SO₄, the first dissociation is complete, but the second dissociation is partial, so you must account for both protons carefully.'
      }
    },
    {
      id: 'ex-strong-acid-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of Strong Monoprotic Acid',
        text: 'For a solution of 0.1 mol dm⁻³ HCl: HCl completely dissociates, so [H⁺] = 0.1 = 10⁻¹ mol dm⁻³. pH = −log(10⁻¹) = 1. This is an acidic solution.'
      }
    },
    {
      id: 'ex-strong-acid-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of Very Dilute Strong Acid',
        text: 'For a solution of 10⁻⁸ mol dm⁻³ HCl: At first glance, [H⁺] = 10⁻⁸. However, we must include the H⁺ from water autoionization. At pH 7 (neutral), [H⁺] = 10⁻⁷. For very dilute strong acid, the pH ≈ 6.5−7, not 8 (which would be basic). The solution remains slightly acidic.'
      }
    },
    {
      id: 'h-strong-bases',
      type: 'heading',
      data: { text: 'pH of Strong Bases', level: 2 }
    },
    {
      id: 'p-strong-base-ph',
      type: 'paragraph',
      data: {
        text: 'Strong bases completely dissociate to produce OH⁻ ions. For Group 1 hydroxides (NaOH, KOH), the concentration of OH⁻ equals the concentration of the base. For Group 2 hydroxides (Ca(OH)₂), each formula unit produces 2 OH⁻ ions. From [OH⁻], calculate pOH, then use pH = 14 − pOH to find pH.'
      }
    },
    {
      id: 'ex-strong-base-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of Strong Base (NaOH)',
        text: 'For 0.1 mol dm⁻³ NaOH: [OH⁻] = 0.1 = 10⁻¹ mol dm⁻³. pOH = −log(10⁻¹) = 1. pH = 14 − 1 = 13. This is a basic solution.'
      }
    },
    {
      id: 'ex-strong-base-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of Ca(OH)₂',
        text: 'For 0.05 mol dm⁻³ Ca(OH)₂: Ca(OH)₂ → Ca²⁺ + 2OH⁻, so [OH⁻] = 2 × 0.05 = 0.1 = 10⁻¹ mol dm⁻³. pOH = 1, pH = 14 − 1 = 13. Same pH as 0.1 M NaOH because both produce [OH⁻] = 0.1 M.'
      }
    },
    {
      id: 'tbl-ph-scale',
      type: 'comparisonTable',
      data: {
        headers: ['[H⁺] (mol dm⁻³)', '[OH⁻] (mol dm⁻³)', 'pH', 'pOH', 'Solution Type', 'Example'],
        rows: [
          ['10⁻¹ (0.1)', '10⁻¹³', '1', '13', 'Strongly acidic', '0.1 M HCl'],
          ['10⁻³', '10⁻¹¹', '3', '11', 'Acidic', 'Weak acid soln.'],
          ['10⁻⁷', '10⁻⁷', '7', '7', 'Neutral', 'Pure water at 25°C'],
          ['10⁻¹¹', '10⁻³', '11', '3', 'Basic', 'Weak base soln.'],
          ['10⁻¹³', '10⁻¹ (0.1)', '13', '1', 'Strongly basic', '0.1 M NaOH']
        ],
        caption: 'pH scale at 25°C'
      }
    },
    {
      id: 'checklist-ph',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can use pH = −log[H⁺] and calculate [H⁺] from pH', checked: false },
          { text: 'Understand Kw and [H⁺][OH⁻] = 10⁻¹⁴', checked: false },
          { text: 'Can use pH + pOH = 14', checked: false },
          { text: 'Can calculate pH of strong acids', checked: false },
          { text: 'Can calculate pH of strong bases', checked: false }
        ]
      }
    },
    // ── BLOOM'S TAXONOMY ─────────────────────────────────────────────────
    {
      id: 'bloom-understand',
      type: 'callout',
      data: {
        style: 'key',
        title: '🧠 Deeper Understanding — Why It Matters',
        text: 'Understand: pH = −log[H⁺] provides a logarithmic scale where each unit represents a 10-fold change in [H⁺]. Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C links pH and pOH.\n\nApply: Calculate the pH of 0.050 mol dm⁻³ NaOH at 25°C.\n\nAnalyze: Kw increases with temperature. What happens to the pH of pure water at 40°C? Is it still neutral?\n\nEvaluate: A student says "pH 7 always means neutral." Critique this statement for different temperatures.'
      },
      terms: []
    },
    {
      id: 'summary-ph',
      type: 'summary',
      data: {
        text: 'pH = −log₁₀[H⁺]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C. pH + pOH = 14. pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic. Strong acids: [H⁺] = acid concentration. Strong bases: [OH⁻] = n × base concentration (n = number of OH⁻ per formula unit).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-ph-def',
        prompt: 'Give the definition of pH and write the equation relating pH and [H⁺].'
      },
      {
        id: 'cue-2',
        blockId: 'eq-kw',
        prompt: 'What is Kw at 25°C and what does it mean?'
      },
      {
        id: 'cue-3',
        blockId: 'eq-ph-poh',
        prompt: 'What is the relationship between pH and pOH?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-strong-acid-1',
        prompt: 'Calculate the pH of 0.1 mol dm⁻³ HCl.'
      },
      {
        id: 'cue-5',
        blockId: 'ex-strong-base-2',
        prompt: 'Calculate the pH of 0.05 mol dm⁻³ Ca(OH)₂.'
      }
    ],
    summaryText: 'pH = −log[H⁺]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C. pH + pOH = 14. Strong acid: [H⁺] = concentration. Strong base: [OH⁻] = n × concentration (n = OH⁻ per formula unit). pH < 7 is acidic, pH > 7 is basic.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'pH and pOH Calculations',
      detail: 'Logarithmic scales for measuring acidity and basicity.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['pH', 'pOH', 'Kw', 'strong acid', 'strong base']
    }
  ]
};
