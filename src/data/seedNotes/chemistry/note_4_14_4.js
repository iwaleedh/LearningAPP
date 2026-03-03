export const note_chemistry_4_14_4 = {
  blocks: [
    {
      id: 'obj-ka',
      type: 'objective',
      data: {
        text: 'Understand Ka expressions for weak acids; calculate Ka and pKa values; use Ka to determine pH of weak acids; apply the simplifying approximation for weak acids'
      }
    },
    {
      id: 'h-ka-def',
      type: 'heading',
      data: { text: 'The Acid Dissociation Constant (Ka)', level: 2 }
    },
    {
      id: 'p-ka-intro',
      type: 'paragraph',
      data: {
        text: 'For a weak acid HA in equilibrium with its conjugate base A⁻ and protons, the acid dissociation constant Ka is defined as the equilibrium constant for the dissociation reaction. Ka quantifies the strength of the weak acid: a larger Ka means a stronger acid (more dissociation), while a smaller Ka means a weaker acid (less dissociation).'
      }
    },
    {
      id: 'eq-ka-general',
      type: 'equation',
      data: {
        html: 'HA ⇌ H<sup>+</sup> + A<sup>−</sup> &emsp; K<sub>a</sub> = <span class="nb-frac"><span class="nb-num">[H<sup>+</sup>][A<sup>−</sup>]</span><span class="nb-den">[HA]</span></span>',
        caption: 'Acid dissociation constant for weak acid HA'
      }
    },
    {
      id: 'p-ka-units',
      type: 'paragraph',
      data: {
        text: 'Ka has units of mol dm⁻³ (or mol L⁻¹). This is because the numerator has concentration² and the denominator has concentration¹, giving a net of concentration¹. Weak acids typically have Ka values from 10⁻³ to 10⁻¹⁰, reflecting a wide range of acid strengths.'
      }
    },
    {
      id: 'h-pka',
      type: 'heading',
      data: { text: 'pKa: Logarithmic Scale for Acid Strength', level: 2 }
    },
    {
      id: 'p-pka',
      type: 'paragraph',
      data: {
        text: 'Similar to pH, pKa is defined as pKa = −log₁₀(Ka). The pKa scale is convenient because it converts very small Ka values into manageable numbers. For example, if Ka = 1.8 × 10⁻⁵, then pKa = −log(1.8 × 10⁻⁵) ≈ 4.74. Lower pKa means stronger acid; higher pKa means weaker acid. Very weak acids have pKa values above 5; moderately weak acids have pKa around 3−5.'
      }
    },
    {
      id: 'eq-pka',
      type: 'equation',
      data: {
        html: 'pK<sub>a</sub> = −log<sub>10</sub> K<sub>a</sub> &emsp; or &emsp; K<sub>a</sub> = 10<sup>−pK<sub>a</sub></sup>',
        caption: 'pKa definition: logarithmic scale for acid strength'
      }
    },
    {
      id: 'tbl-pka-examples',
      type: 'comparisonTable',
      data: {
        headers: ['Weak Acid', 'Ka (mol dm⁻³)', 'pKa', 'Acid Strength'],
        rows: [
          ['Acetic acid (CH₃COOH)', '1.8 × 10⁻⁵', '4.74', 'Weak'],
          ['Formic acid (HCOOH)', '1.6 × 10⁻⁴', '3.80', 'Moderately weak'],
          ['Hydrofluoric acid (HF)', '6.8 × 10⁻⁴', '3.17', 'Moderately weak'],
          ['Hydrogen cyanide (HCN)', '4.9 × 10⁻¹⁰', '9.31', 'Very weak'],
          ['Phenol (C₆H₅OH)', '1.0 × 10⁻¹⁰', '10.0', 'Very weak']
        ],
        caption: 'Ka and pKa values for common weak acids'
      }
    },
    {
      id: 'h-calculating-ph',
      type: 'heading',
      data: { text: 'Calculating pH of Weak Acids from Ka', level: 2 }
    },
    {
      id: 'p-ph-method',
      type: 'paragraph',
      data: {
        text: 'To find the pH of a weak acid solution, set up an ICE table with initial concentration c, change −x (for acid dissociation), and equilibrium concentrations. Then substitute into the Ka expression: Ka = [H⁺][A⁻] / [HA] = x² / (c−x). Solve for x (usually [H⁺]). Finally, calculate pH = −log[H⁺].'
      }
    },
    {
      id: 'h-approximation',
      type: 'heading',
      data: { text: 'The Simplifying Approximation: [HA] ≈ c', level: 2 }
    },
    {
      id: 'p-approx-intro',
      type: 'paragraph',
      data: {
        text: 'For many weak acids, the amount of acid that dissociates (x) is very small compared to the initial concentration (c). This allows a simplifying approximation: c − x ≈ c. The Ka expression becomes Ka ≈ x² / c, which gives x ≈ √(Ka × c). This simplification makes calculations much faster and is valid when x << c (typically when Ka < 10⁻⁴ and c > 0.01 mol dm⁻³).'
      }
    },
    {
      id: 'p-approx-validity',
      type: 'paragraph',
      data: {
        text: 'After solving for x, check the approximation: if x < 5% of c (i.e., x < 0.05c), the approximation is valid. If x > 5% of c, you must solve the quadratic equation without the approximation. Always verify your answer makes sense: for a weak acid, x should be small.'
      }
    },
    {
      id: 'ex-weak-acid-approx',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of Weak Acid with Approximation',
        text: 'For 0.1 mol dm⁻³ acetic acid (Ka = 1.8 × 10⁻⁵): Ka = [H⁺]² / (0.1 − [H⁺]) ≈ [H⁺]² / 0.1 (using approximation). [H⁺]² ≈ 1.8 × 10⁻⁵ × 0.1 = 1.8 × 10⁻⁶. [H⁺] ≈ √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³ mol dm⁻³. Check: 1.34 × 10⁻³ / 0.1 = 0.0134 = 1.34%, which is < 5%, so approximation is valid. pH = −log(1.34 × 10⁻³) ≈ 2.87.'
      }
    },
    {
      id: 'ex-weak-acid-no-approx',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Weak Acid Without Approximation (if needed)',
        text: 'For 0.01 mol dm⁻³ acetic acid (Ka = 1.8 × 10⁻⁵): Using approximation: [H⁺] ≈ √(1.8 × 10⁻⁵ × 0.01) ≈ 4.24 × 10⁻⁴. Check: 4.24 × 10⁻⁴ / 0.01 = 0.0424 = 4.24%, which is < 5%, so approximation is valid. If the acid were stronger (Ka = 0.01) or concentration much lower, we\'d need the quadratic formula: Ka = x² / (c − x), where x² + Ka × x − Ka × c = 0.'
      }
    },
    {
      id: 'h-kb-relation',
      type: 'heading',
      data: { text: 'Relationship Between Ka, Kb, and Kw', level: 2 }
    },
    {
      id: 'p-kb-relation',
      type: 'paragraph',
      data: {
        text: 'For a weak acid HA and its conjugate base A⁻, the product Ka × Kb (where Kb is the base dissociation constant of A⁻) equals Kw: Ka × Kb = Kw = 10⁻¹⁴ at 25°C. This relationship shows the inverse nature of acid and base strength: a strong acid has a weak conjugate base (small Kb), while a weak acid has a relatively strong conjugate base (larger Kb).'
      }
    },
    {
      id: 'eq-ka-kb',
      type: 'equation',
      data: {
        html: 'K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub> = 10<sup>−14</sup> (at 25°C)',
        caption: 'Relationship between Ka, Kb, and Kw'
      }
    },
    {
      id: 'ex-kb-from-ka',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculate Kb from Ka',
        text: 'For acetic acid, Ka = 1.8 × 10⁻⁵. Its conjugate base, acetate ion (CH₃COO⁻), has Kb = Kw / Ka = 10⁻¹⁴ / 1.8 × 10⁻⁵ = 5.6 × 10⁻¹⁰. This shows acetate is a weak base, but stronger than it would be if acetic acid were even weaker.'
      }
    },
    {
      id: 'checklist-ka',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can write Ka expressions for weak acids', checked: false },
          { text: 'Can calculate Ka from equilibrium concentrations', checked: false },
          { text: 'Can calculate pH from Ka using the approximation or quadratic formula', checked: false },
          { text: 'Understand when the approximation is valid (x < 5% of c)', checked: false },
          { text: 'Can use Ka × Kb = Kw relationship', checked: false }
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
        text: 'Understand: Ka quantifies the extent of dissociation. A small Ka means very little dissociation. The approximation [HA]_eq ≈ [HA]_initial works when Ka/c < 0.05.\n\nApply: Calculate the pH of 0.20 mol dm⁻³ CH₃COOH (Ka = 1.8 × 10⁻⁵). Verify the approximation is valid.\n\nAnalyze: When does the weak acid approximation break down? What must you do instead?\n\nEvaluate: Compare two methods of finding Ka: from pH measurement vs from titration curve half-equivalence point. Which is more accurate?'
      },
      terms: []
    },
    {
      id: 'summary-ka',
      type: 'summary',
      data: {
        text: 'Ka = [H⁺][A⁻]/[HA] for weak acid HA. pKa = −log Ka. Larger Ka (lower pKa) = stronger acid. For dilute weak acids, use approximation [H⁺] ≈ √(Ka × c) if x < 5% of c. Ka × Kb = 10⁻¹⁴ at 25°C. Calculate pH from [H⁺] = 10^(−pH).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-ka-general',
        prompt: 'Write the expression for Ka of a weak acid HA.'
      },
      {
        id: 'cue-2',
        blockId: 'eq-pka',
        prompt: 'Define pKa and explain the relationship between Ka and pKa.'
      },
      {
        id: 'cue-3',
        blockId: 'ex-weak-acid-approx',
        prompt: 'Calculate the pH of 0.1 mol dm⁻³ acetic acid (Ka = 1.8 × 10⁻⁵) using the approximation.'
      },
      {
        id: 'cue-4',
        blockId: 'p-approx-validity',
        prompt: 'What is the criterion for the approximation c − x ≈ c to be valid?'
      },
      {
        id: 'cue-5',
        blockId: 'eq-ka-kb',
        prompt: 'Give the relationship between Ka, Kb, and Kw. Calculate Kb for the conjugate base of acetic acid.'
      }
    ],
    summaryText: 'Ka = [H⁺][A⁻]/[HA]. pKa = −log Ka. For weak acids, use [H⁺] ≈ √(Ka × c) if x << c. pH = −log[H⁺]. Ka × Kb = 10⁻¹⁴. Larger Ka = stronger acid; lower pKa = stronger acid.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Acid Dissociation Constant (Ka)',
      detail: 'Quantifies weak acid strength; used to calculate pH and pKa.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['Ka', 'pKa', 'weak acid', 'dissociation constant', 'pH calculation']
    }
  ]
};
