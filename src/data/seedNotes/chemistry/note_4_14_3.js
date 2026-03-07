export const note_chemistry_4_14_3 = {
  blocks: [
    {
      id: 'obj-weak',
      type: 'objective',
      data: {
        text: 'Understand the difference between strong and weak acids; compare pH of strong vs weak acids at the same concentration; explain degree of dissociation'
      }
    },
    {
      id: 'h-strong-vs-weak',
      type: 'heading',
      data: { text: 'Strong vs Weak Acids: Key Differences', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Strong acids completely dissociate in water (nearly 100%), while weak acids only partially dissociate (typically 1−10%). This difference fundamentally affects the pH of solutions at the same concentration. A 0.1 mol dm⁻³ strong acid has pH ≈ 1, while a 0.1 mol dm⁻³ weak acid has pH typically between 2 and 5, depending on its strength.'
      }
    },
    {
      id: 'tbl-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Property', 'Strong Acid (e.g., HCl)', 'Weak Acid (e.g., CH₃COOH)'],
        rows: [
          ['Dissociation', 'Complete (~100%)', 'Partial (1−10%)'],
          ['Equilibrium', 'HCl → H⁺ + Cl⁻ (goes to completion)', 'HA ⇌ H⁺ + A⁻ (equilibrium established)'],
          ['[H⁺] in 0.1 M soln', '[H⁺] = 0.1 mol dm⁻³', '[H⁺] << 0.1 mol dm⁻³ (much less)'],
          ['pH of 0.1 M soln', 'pH = 1', 'pH = 2 to 5 (depends on Ka)'],
          ['Conductivity', 'High (all ions)', 'Lower (fewer ions)'],
          ['Ka or pKa', 'Ka >> 1; pKa << 0 or negative', 'Ka < 1; pKa > 0'],
          ['Reversibility', 'One-way arrow (→)', 'Equilibrium arrow (⇌)']
        ],
        caption: 'Comparison of strong and weak acids'
      }
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Examples of Weak Acids', level: 2 }
    },
    {
      id: 'p-examples',
      type: 'paragraph',
      data: {
        text: 'Common weak acids include carboxylic acids (RCOOH such as CH₃COOH, HCOOH, benzoic acid C₆H₅COOH), weak mineral acids (HF, H₂S, HCN), and some amino acids. These acids establish equilibria in water; you can measure or calculate their Ka values to quantify their strength. In general, weak acids have Ka values from 10⁻³ to 10⁻¹⁰ or so, and pKa values from roughly 3 to 10.'
      }
    },
    {
      id: 'h-pH-comparison',
      type: 'heading',
      data: { text: 'pH Comparison: Same Concentration', level: 2 }
    },
    {
      id: 'p-ph-comp',
      type: 'paragraph',
      data: {
        text: 'When a strong acid and weak acid are both 0.1 mol dm⁻³, the strong acid produces more H⁺ ions and has a lower pH. For example, 0.1 M HCl has pH = 1 because [H⁺] = 0.1. In contrast, 0.1 M acetic acid (CH₃COOH, Ka ≈ 1.8 × 10⁻⁵) has pH ≈ 2.87 because only a small fraction of the acid molecules dissociate. The weak acid\'s pH is higher (less acidic) because fewer H⁺ ions are in solution.'
      }
    },
    {
      id: 'ex-ph-strong-vs-weak',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: pH of 0.1 M HCl vs 0.1 M CH₃COOH',
        text: 'HCl (strong): [H⁺] = 0.1, pH = −log(0.1) = 1. CH₃COOH (weak): Only a fraction α dissociates. If α = 0.013 (1.3%), then [H⁺] = 0.1 × 0.013 = 0.0013 = 1.3 × 10⁻³, pH = −log(0.0013) ≈ 2.89. The weak acid is much less acidic at the same concentration.'
      }
    },
    {
      id: 'tbl-ph-comparison',
      type: 'comparisonTable',
      data: {
        headers: ['Acid (0.10 mol dm⁻³)', 'Type', 'pH (25°C)', 'Reason'],
        rows: [
          ['HCl', 'Strong', '1.00', '[H⁺] = 0.10 mol dm⁻³ (complete dissociation)'],
          ['Ethanoic acid (CH₃COOH)', 'Weak', '2.87', '[H⁺] << 0.10 mol dm⁻³ (partial dissociation)'],
          ['Propanoic acid (CH₃CH₂COOH)', 'Weak', '2.93', 'Weaker than ethanoic → fewer H⁺ → higher pH']
        ],
        caption: 'pH comparison of strong vs weak acids at the same concentration (0.10 mol dm⁻³)'
      }
    },
    {
      id: 'h-degree-dissociation',
      type: 'heading',
      data: { text: 'Degree of Dissociation (α)', level: 2 }
    },
    {
      id: 'p-degree-intro',
      type: 'paragraph',
      data: {
        text: 'The degree of dissociation α (alpha) is the fraction of acid molecules that have dissociated at equilibrium. It ranges from 0 (no dissociation) to 1 (complete dissociation). For a weak acid HA with initial concentration c, if α is the degree of dissociation: [H⁺] = [A⁻] = αc and [HA] = c(1−α).'
      }
    },
    {
      id: 'p-degree-calc',
      type: 'paragraph',
      data: {
        text: 'The degree of dissociation depends on the acid strength (Ka) and its concentration. Strong acids have α ≈ 1 (or nearly 1). Weak acids have α << 1, typically 0.01 to 0.1 or less. For dilute weak acids, the degree of dissociation increases (by Le Chatelier\'s principle: dilution shifts the equilibrium right).'
      }
    },
    {
      id: 'ex-degree',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Degree of Dissociation of Weak Acid',
        text: 'For 0.1 M acetic acid with Ka = 1.8 × 10⁻⁵: If α = 0.013, then [H⁺] = 0.1 × 0.013 = 0.0013. The fraction dissociated is 1.3%, so α = 0.013. If the acid were diluted to 0.01 M, the degree of dissociation increases to about 4% (α ≈ 0.04) because dilution favours dissociation.'
      }
    },
    {
      id: 'h-conductivity',
      type: 'heading',
      data: { text: 'Conductivity Differences', level: 2 }
    },
    {
      id: 'p-conductivity',
      type: 'paragraph',
      data: {
        text: 'Strong acids and weak acids of the same concentration have different molar conductivities. A strong acid at 0.1 M produces many ions (0.1 M H⁺ and 0.1 M conjugate base), so it is a good conductor. A weak acid at 0.1 M produces relatively few ions (perhaps 0.001 M H⁺ and 0.001 M conjugate base), so it is a poorer conductor. This difference can be detected experimentally using a conductivity meter.'
      }
    },
    {
      id: 'p-weak-base-comparison',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Weak Bases: Analogous to Weak Acids',
        text: 'Weak bases (like NH₃) only partially accept protons: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. A 0.1 M NH₃ solution has pH around 11 (basic, but not as basic as 0.1 M NaOH with pH = 13). The degree of ionization of weak bases is low, similar to weak acids.'
      }
    },
    {
      id: 'h-salt-solutions',
      type: 'heading',
      data: { text: 'pH of Salt Solutions', level: 2 }
    },
    {
      id: 'tbl-salt-ph',
      type: 'comparisonTable',
      data: {
        headers: ['Salt formed from', 'Example', 'Solution pH', 'Reason'],
        rows: [
          ['Strong acid + strong base', 'NaCl (from HCl + NaOH)', '7', 'Neither ion hydrolyses'],
          ['Weak acid + strong base', 'CH₃COONa (from CH₃COOH + NaOH)', '> 7 (basic)', 'CH₃COO⁻ is a weak base; hydrolyses to give OH⁻'],
          ['Strong acid + weak base', 'NH₄Cl (from HCl + NH₃)', '< 7 (acidic)', 'NH₄⁺ is a weak acid; donates H⁺'],
          ['Weak acid + weak base', 'CH₃COONH₄', 'Depends on Ka vs Kb', 'pH ≈ 7 if Ka ≈ Kb; note: Kb not calculated in exam']
        ],
        caption: 'pH of salt solutions — determined by the strength of the parent acid and base'
      }
    },
    {
      id: 'h-dilution',
      type: 'heading',
      data: { text: 'Effect of Dilution on pH', level: 2 }
    },
    {
      id: 'callout-dilution',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Dilution Rule: Strong vs Weak Acids',
        text: '• <strong>Strong acid</strong> diluted ×10 → pH increases by exactly <strong>1</strong>\n  (because [H⁺] decreases by ×10 → pH = −log([H⁺]/10) = pH + 1)\n\n• <strong>Weak acid</strong> diluted ×10 → pH increases by only ~<strong>0.5</strong>\n  (because dilution shifts equilibrium right → more dissociation → [H⁺] doesn\'t drop as much)\n\n• Diluting a weak acid increases its degree of (% ) dissociation (Le Chatelier\'s principle)'
      }
    },
    {
      id: 'checklist-weak',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can explain why weak acids only partially dissociate', checked: false },
          { text: 'Can compare pH of strong vs weak acids at same concentration', checked: false },
          { text: 'Know common weak acids (carboxylic acids, HF, etc.)', checked: false },
          { text: 'Can calculate or estimate degree of dissociation', checked: false },
          { text: 'Can relate conductivity to degree of dissociation', checked: false }
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
        text: 'Understand: Strong acids fully dissociate (high Ka); weak acids partially dissociate (low Ka). At the same concentration, a weak acid has higher pH than a strong acid.\n\nApply: Compare pH of 0.10 mol dm⁻³ HCl vs 0.10 mol dm⁻³ CH₃COOH (Ka = 1.8 × 10⁻⁵).\n\nAnalyze: Why does diluting a weak acid change its degree of dissociation but diluting a strong acid does not?\n\nEvaluate: Ethanoic acid is "weak" but concentrated ethanoic acid can cause severe burns. Distinguish between strength and concentration.'
      },
      terms: []
    },
    {
      id: 'summary-weak',
      type: 'summary',
      data: {
        text: 'Strong acids: ~100% dissociation, lower pH. Weak acids: partial dissociation (α << 1), higher pH at same concentration. Degree of dissociation α increases with dilution. Examples of weak acids: CH₃COOH, HF, HCOOH. Conductivity is lower for weak acids due to fewer ions.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-intro',
        prompt: 'What is the main difference between a strong acid and a weak acid?'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-comparison',
        prompt: 'Compare the dissociation of HCl vs CH₃COOH. What fraction of each dissociates?'
      },
      {
        id: 'cue-3',
        blockId: 'ex-ph-strong-vs-weak',
        prompt: 'Calculate and compare the pH of 0.1 M HCl and 0.1 M acetic acid.'
      },
      {
        id: 'cue-4',
        blockId: 'p-degree-intro',
        prompt: 'Define degree of dissociation (α) and give an example.'
      },
      {
        id: 'cue-5',
        blockId: 'p-conductivity',
        prompt: 'Why does a weak acid solution conduct electricity less well than a strong acid at the same concentration?'
      }
    ],
    summaryText: 'Strong acids: ~100% dissociation, lower pH. Weak acids: partial dissociation (α << 1), higher pH at same concentration. Weak acids have Ka < 1; degree of dissociation increases with dilution. Weak acid solutions have lower conductivity.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Strong vs Weak Acids',
      detail: 'Fundamental distinction based on degree of dissociation and pH.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['weak acid', 'strong acid', 'dissociation', 'degree of dissociation', 'pH']
    }
  ]
};
