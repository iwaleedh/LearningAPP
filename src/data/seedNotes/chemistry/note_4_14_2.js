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
      id: 'callout-exam-ph-def',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Exam Tip: Defining pH',
        text: 'If asked to define pH in an exam, simply write down the expression: <strong>pH = −log₁₀[H⁺]</strong>. Never try to define it in words. Examiners often reject worded definitions if they miss subtle details (like specifying that the concentration is in mol dm⁻³). The square brackets imply the units natively.'
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
      id: 'callout-negative-ph',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Negative pH is Real!',
        text: '• pH = −log[H⁺], so if [H⁺] > 1 mol dm⁻³ → pH is negative\n• This is NOT an error — it happens at very high strong acid concentrations\n• Example: 2 mol dm⁻³ HCl → pH = −log(2) = −0.30\n• In the exam, a negative pH answer is acceptable if the calculation supports it'
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
      id: 'callout-kw-water',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Why is [H₂O] omitted?',
        text: 'You may wonder why water isn\'t written on the bottom of the Kw expression as normal equilibrium constants do ([H⁺][OH⁻] / [H₂O]). So little of the water is ionized at any one time that its concentration remains virtually unchanged—effectively a constant. Kw is defined to avoid including this constant, combining it into Kw.'
      }
    },
    {
      id: 'callout-pkw',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 pKw',
        text: 'The relationship between Kw and pKw is exactly the same as that between [H⁺] and pH:\n\n<strong>pKw = −log₁₀(Kw)</strong>\n\nAt 25°C, where Kw = 1.00 × 10⁻¹⁴, pKw is 14.'
      }
    },
    {
      id: 'callout-le-chatelier-kw',
      type: 'callout',
      data: {
        style: 'tip',
        title: '🔥 Temperature & Le Chatelier\'s Principle',
        text: 'The autoionization of water is an <strong>endothermic</strong> process. According to Le Chatelier\'s Principle, increasing the temperature will cause the equilibrium to shift to counter the change by absorbing extra heat (favouring the forward reaction). This produces more H⁺ and OH⁻ ions, meaning <strong>Kw increases as temperature increases</strong>.'
      }
    },
    {
      id: 'tbl-kw-temperature',
      type: 'comparisonTable',
      data: {
        headers: ['Temperature', 'Kw (mol² dm⁻⁶)', 'Neutral pH', 'Meaning'],
        rows: [
          ['0°C (273 K)', '0.11 × 10⁻¹⁴', '7.47', 'Neutral solution has pH 7.47'],
          ['25°C (298 K)', '1.00 × 10⁻¹⁴', '7.00', 'Neutral solution has pH 7.00'],
          ['40°C (313 K)', '3.00 × 10⁻¹⁴', '6.77', 'Neutral solution has pH 6.77']
        ],
        caption: 'Kw increases with temperature → neutral pH decreases with temperature'
      }
    },
    {
      id: 'callout-neutral-not-7',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Key Point: Neutral ≠ Always pH 7',
        text: '• NEUTRAL means [H⁺] = [OH⁻] — NOT necessarily pH 7\n• At 25°C: [H⁺] = [OH⁻] = 10⁻⁷ → pH = 7 ✓\n• At 40°C: [H⁺] = [OH⁻] → each = √(3.00 × 10⁻¹⁴) → pH = 6.77 (still neutral!)\n• pH 6.77 at 40°C is neutral — the solution is neither acidic nor basic\n• Neutral = [H⁺] = [OH⁻] at whatever temperature you are at'
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
      id: 'list-strong-acid-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Write the dissociation: e.g. HCl → H⁺ + Cl⁻ (complete for strong acids)',
          'Identify [H⁺]: for monoprotic strong acids, [H⁺] = concentration of acid',
          'Apply: pH = −log[H⁺]'
        ]
      }
    },
    {
      id: 'ex-strong-acid-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Standard Strong Acid',
        text: 'Q: Calculate the pH of 0.150 mol dm⁻³ HBr.\n\nHBr → H⁺ + Br⁻ (complete dissociation)\n[H⁺] = 0.150 mol dm⁻³\npH = −log(0.150) = <strong>0.82</strong>'
      }
    },
    {
      id: 'ex-strong-acid-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Negative pH (Exam Trap)',
        text: 'Q: 10 mol dm⁻³ HCl is 55% dissociated. Calculate the pH.\n\n[H⁺] = 0.55 × 10 = 5.50 mol dm⁻³\npH = −log(5.50) = <strong>−0.74</strong> (negative pH — this is correct!)\n\n⚠️ Not all strong acids fully dissociate at very high concentrations — always use the given % if provided.'
      }
    },
    {
      id: 'ex-strong-acid-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 3: Reverse — pH to [H⁺]',
        text: 'Q: A solution has pH = 4.8. Calculate [H⁺].\n\n[H⁺] = 10<sup>−pH</sup> = 10<sup>−4.8</sup> = <strong>1.58 × 10⁻⁵ mol dm⁻³</strong>\n\nTip: On a calculator press: 10^(−4.8) or use the 10ˣ key.'
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
      id: 'list-strong-base-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Find [OH⁻]: for Group 1 hydroxides, [OH⁻] = concentration; for Ca(OH)₂, [OH⁻] = 2 × concentration',
          'Find [H⁺]: [H⁺] = Kw ÷ [OH⁻] = 10⁻¹⁴ ÷ [OH⁻]',
          'Apply: pH = −log[H⁺]'
        ]
      }
    },
    {
      id: 'ex-strong-base-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: KOH (Group 1 hydroxide)',
        text: 'Q: Calculate the pH of 0.020 mol dm⁻³ KOH.\n\nKOH → K⁺ + OH⁻\n[OH⁻] = 0.020 mol dm⁻³\n[H⁺] = 10⁻¹⁴ ÷ 0.020 = 5.0 × 10⁻¹³ mol dm⁻³\npH = −log(5.0 × 10⁻¹³) = <strong>12.3</strong>'
      }
    },
    {
      id: 'ex-strong-base-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Ca(OH)₂ — REMEMBER: 2 OH⁻ per formula unit',
        text: 'Q: Calculate the pH of 0.050 mol dm⁻³ Ca(OH)₂.\n\nCa(OH)₂ → Ca²⁺ + 2OH⁻\n[OH⁻] = 2 × 0.050 = 0.10 mol dm⁻³\n[H⁺] = 10⁻¹⁴ ÷ 0.10 = 1.0 × 10⁻¹³ mol dm⁻³\npH = −log(1.0 × 10⁻¹³) = <strong>13.00</strong>\n\n⚠️ Common mistake: forgetting to multiply by 2 for Ca(OH)₂'
      }
    },
    {
      id: 'ex-strong-base-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 3: NaOH reverse calculation',
        text: 'Q: A NaOH solution has pH = 12.50. Calculate [NaOH].\n\npH = 12.50 → [H⁺] = 10⁻¹²·⁵⁰ = 3.16 × 10⁻¹³ mol dm⁻³\n[OH⁻] = Kw ÷ [H⁺] = 10⁻¹⁴ ÷ 3.16 × 10⁻¹³ = 0.031 mol dm⁻³\n[NaOH] = [OH⁻] = <strong>0.031 mol dm⁻³</strong>'
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
      },
      {
        id: 'cue-6',
        blockId: 'callout-exam-ph-def',
        prompt: 'What is the most precise way to answer the exam question "Define pH"?'
      },
      {
        id: 'cue-7',
        blockId: 'callout-kw-water',
        prompt: 'Why is the concentration of water [H₂O] not included in the equilibrium expression for Kw?'
      },
      {
        id: 'cue-8',
        blockId: 'callout-pkw',
        prompt: 'How is pKw calculated from Kw, and what is its value at 25°C?'
      },
      {
        id: 'cue-9',
        blockId: 'callout-le-chatelier-kw',
        prompt: 'Using Le Chatelier\'s Principle, explain why Kw increases as temperature increases.'
      }
    ],
    summaryText: 'pH = −log[H⁺]. Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C. pKw = −log₁₀(Kw). pH + pOH = 14. Autoionization of water is endothermic, so Kw increases with temperature. Strong acid: [H⁺] = concentration. Strong base: [OH⁻] = n × concentration (n = OH⁻ per formula unit). pH < 7 is acidic, pH > 7 is basic.',
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
