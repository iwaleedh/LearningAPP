export const note_chemistry_4_14_5 = {
  blocks: [
    {
      id: 'obj-buffer',
      type: 'objective',
      data: {
        text: 'Understand buffer solutions; explain how buffers resist pH change; use the Henderson-Hasselbalch equation; calculate pH of buffers; apply buffer principles to biological systems'
      }
    },
    {
      id: 'h-buffer-def',
      type: 'heading',
      data: { text: 'What is a Buffer Solution?', level: 2 }
    },
    {
      id: 'p-buffer-intro',
      type: 'paragraph',
      data: {
        text: 'A buffer solution is a solution that resists significant changes in pH when small amounts of acid or base are added. A typical buffer consists of a weak acid and its conjugate base salt (or a weak base and its conjugate acid salt). For example, a mixture of acetic acid (CH₃COOH) and sodium acetate (CH₃COONa) forms a buffer. Buffers are essential in biological systems (blood, cellular fluids) and in laboratory chemistry.'
      }
    },
    {
      id: 'ex-buffer-examples',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Common Buffer Systems',
        text: 'Acetic acid/acetate: CH₃COOH + CH₃COO⁻. Phosphoric acid system (biological): H₂PO₄⁻/HPO₄²⁻. Ammonia/ammonium: NH₃/NH₄⁺. Blood buffer: H₂CO₃/HCO₃⁻ (carbonic acid/bicarbonate). Each buffer operates around its pKa value.'
      }
    },
    {
      id: "h-buffer-create",
      type: "heading",
      data: { "text": "Creating an Acidic Buffer", "level": 2 }
    },
    {
      id: "p-buffer-create",
      type: "paragraph",
      data: { "text": "An acidic buffer requires two things: a large reservoir of Weak Acid (HA) and a large reservoir of its Conjugate Base (A⁻). There are two ways to make one:" }
    },
    {
      id: "list-buffer-make",
      type: "list",
      data: {
        style: "numbered",
        items: [
            "<strong>Direct mix:</strong> Mix a weak acid (e.g., Ethanoic acid) with the salt of its conjugate base (e.g., Sodium ethanoate).",
            "<strong>Partial neutralisation (The tricky one):</strong> Mix an <em>excess</em> of weak acid with a strong alkali (e.g., NaOH). The alkali reacts completely to form the conjugate base salt, but because the acid was in excess, plenty of unreacted weak acid remains."
        ]
      }
    },
    {
      id: "callout-buffer-part",
      type: "callout",
      data: {
        style: "worked",
        title: "Worked Example: Partial Neutralisation",
        text: "<strong>Q: 50 cm³ of 0.2 mol dm⁻³ ethanoic acid (CH₃COOH) is mixed with 25 cm³ of 0.1 mol dm⁻³ NaOH. Calculate the pH of the resulting buffer. (Ka = 1.74 × 10⁻⁵ mol dm⁻³)</strong><br/><br/><em>Step 1: Calculate initial moles.</em><br/>n(Acid_initial) = 50/1000 × 0.2 = 0.010 mol.<br/>n(NaOH) = 25/1000 × 0.1 = 0.0025 mol.<br/><br/><em>Step 2: Calculate moles after reaction.</em><br/>The NaOH reacts 1:1 with the acid to form the conjugate base (CH₃COO⁻).<br/>n(Conjugate Base formed) = 0.0025 mol.<br/>n(Acid_remaining) = 0.010 - 0.0025 = 0.0075 mol.<br/><br/><em>Step 3: Calculate new concentrations.</em><br/>Total volume = 50 + 25 = 75 cm³ = 0.075 dm³.<br/>[Acid] = 0.0075 / 0.075 = 0.10 mol dm⁻³.<br/>[Base] = 0.0025 / 0.075 = 0.033 mol dm⁻³.<br/><br/><em>Step 4: Use Ka expression or Henderson-Hasselbalch.</em><br/>[H⁺] = Ka × ([Acid] / [Base]) = (1.74 × 10⁻⁵) × (0.10 / 0.033) = 5.22 × 10⁻⁵ mol dm⁻³.<br/>pH = -log₁₀(5.22 × 10⁻⁵) = <strong>4.28</strong>."
      }
    },
    {
      id: 'h-buffer-action',
      type: 'heading',
      data: { text: 'How Buffers Work: Mechanism', level: 2 }
    },
    {
      id: 'p-buffer-mechanism',
      type: 'paragraph',
      data: {
        text: 'A buffer resists pH change through equilibrium shifts (Le Chatelier\'s principle). If acid (H⁺) is added, the conjugate base A⁻ in the buffer reacts with it: A⁻ + H⁺ → HA, consuming the added H⁺. If base (OH⁻) is added, the weak acid HA reacts with it: HA + OH⁻ → A⁻ + H₂O, consuming the added OH⁻. Both reactions remove the added acid or base, minimizing pH change. The buffer is most effective when the concentrations of HA and A⁻ are roughly equal (or at least within a factor of 10).'
      }
    },
    {
      id: 'ex-buffer-action',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Adding Acid to a Buffer',
        text: 'Consider a buffer of 0.1 M acetic acid and 0.1 M acetate. Initially, the solution is at pH ≈ 4.74 (equal HA and A⁻). If 0.01 mol of HCl is added per litre, the H⁺ is consumed by acetate: CH₃COO⁻ + H⁺ → CH₃COOH. After this, [HA] increases slightly and [A⁻] decreases slightly, but the ratio [A⁻]/[HA] remains roughly similar, so pH drops only slightly (perhaps to pH 4.64 instead of dropping to pH 2 without the buffer).'
      }
    },
    {
      id: 'h-henderson-hasselbalch',
      type: 'heading',
      data: { text: 'The Henderson-Hasselbalch Equation', level: 2 }
    },
    {
      id: 'p-hh-intro',
      type: 'paragraph',
      data: {
        text: 'The Henderson-Hasselbalch equation relates pH to pKa and the ratio of conjugate base to weak acid concentrations. It is derived from the Ka expression by taking logarithms and rearranging. This equation is extremely useful for calculating buffer pH and for understanding how the pH depends on the acid strength (pKa) and the relative amounts of acid and base.'
      }
    },
    {
      id: 'eq-hh',
      type: 'equation',
      data: {
        html: 'pH = pK<sub>a</sub> + log<sub>10</sub><span class="nb-frac"><span class="nb-num">[A<sup>−</sup>]</span><span class="nb-den">[HA]</span></span>',
        caption: 'Henderson-Hasselbalch equation for weak acid buffers'
      }
    },
    {
      id: 'p-hh-interpretation',
      type: 'paragraph',
      data: {
        text: 'If [A⁻] = [HA] (equal concentrations), the log term = log(1) = 0, so pH = pKa. This shows that a buffer is most effective (most buffering capacity) around its pKa. If [A⁻] > [HA], the pH is above pKa (more basic). If [A⁻] < [HA], the pH is below pKa (more acidic). The equation shows that pH depends on the ratio [A⁻]/[HA], not on the absolute concentrations.'
      }
    },
    {
      id: 'ex-hh-calc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculate Buffer pH Using Henderson-Hasselbalch',
        text: 'A buffer contains 0.1 M acetic acid (pKa = 4.74) and 0.15 M acetate. pH = 4.74 + log(0.15/0.1) = 4.74 + log(1.5) = 4.74 + 0.176 = 4.92. If the ratio were reversed, pH = 4.74 + log(0.1/0.15) = 4.74 − 0.176 = 4.56.'
      }
    },
    {
      id: "h-buffer-add",
      type: "heading",
      data: { "text": "Buffer Action: Adding Small Amounts of Acid/Alkali", "level": 2 }
    },
    {
      id: "callout-buffer-add",
      type: "callout",
      data: {
        style: "worked",
        title: "Worked Example: How pH resists change",
        text: "<strong>Q: A buffer contains 0.10 moles of HA and 0.10 moles of A⁻. (Ka = 1.0 × 10⁻⁵). 0.01 moles of HCl is added. Calculate the new pH.</strong><br/><br/><em>Step 1: Understand the reaction.</em><br/>Added H⁺ reacts with the conjugate base: A⁻ + H⁺ → HA.<br/><br/><em>Step 2: Update the moles.</em><br/>n(A⁻) <em>decreases</em> by 0.01: 0.10 - 0.01 = 0.09 mol.<br/>n(HA) <em>increases</em> by 0.01: 0.10 + 0.01 = 0.11 mol.<br/><br/><em>Step 3: Calculate new [H⁺]</em><br/>Because they are in the same total volume, the ratio of moles is exactly the same as the ratio of concentrations!<br/>[H⁺] = Ka × (n(HA) / n(A⁻)) = (1.0 × 10⁻⁵) × (0.11 / 0.09) = 1.22 × 10⁻⁵ mol dm⁻³.<br/>pH = <strong>4.91</strong>.<br/>(For context, the original pH was 5.00. Adding strong acid only dropped it by 0.09 units!)"
      }
    },
    {
      id: 'h-buffering-capacity',
      type: 'heading',
      data: { text: 'Buffer Capacity and Effectiveness', level: 2 }
    },
    {
      id: 'p-buffer-capacity',
      type: 'paragraph',
      data: {
        text: 'Buffer capacity refers to how much acid or base a buffer can neutralize while maintaining roughly constant pH. It depends on: (1) the absolute concentrations of HA and A⁻ (higher concentrations give greater capacity), and (2) the ratio [A⁻]/[HA] (maximum capacity near pKa when the ratio is close to 1). A buffer with 1.0 M acetic acid and 1.0 M acetate has much greater capacity than a buffer with 0.01 M of each, though both have the same pH if concentrations are equal.'
      }
    },
    {
      id: 'p-buffer-range',
      type: 'paragraph',
      data: {
        text: 'A buffer is effective when the ratio [A⁻]/[HA] is between 0.1 and 10, which corresponds to pH ≈ pKa ± 1. Outside this range, the buffer is no longer very effective. To buffer at a specific pH, choose an acid with pKa close to the desired pH.'
      }
    },
    {
      id: 'h-blood-buffer',
      type: 'heading',
      data: { text: 'Biological Example: Blood pH Regulation', level: 2 }
    },
    {
      id: 'p-blood-buffer',
      type: 'paragraph',
      data: {
        text: 'Blood pH is maintained at approximately 7.4 by the carbonic acid/bicarbonate buffer system: H₂CO₃ ⇌ H⁺ + HCO₃⁻. The pKa of carbonic acid is about 6.35, and the pH of blood is 7.4, so the ratio [HCO₃⁻]/[H₂CO₃] ≈ 20:1 (mostly bicarbonate). This is why the carbonic acid concentration is so much lower than bicarbonate. Respiratory and renal systems fine-tune this ratio to maintain pH. If blood becomes too acidic (acidosis) or too basic (alkalosis), medical intervention may be needed.'
      }
    },
    {
      id: 'ex-blood-ph',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Blood pH Calculation',
        text: 'Using Henderson-Hasselbalch with pKa = 6.35, [HCO₃⁻] ≈ 24 mmol/L, [H₂CO₃] ≈ 1.2 mmol/L: pH = 6.35 + log(24/1.2) = 6.35 + log(20) = 6.35 + 1.30 = 7.65. (The actual blood pH is 7.4, which accounts for additional buffering systems like haemoglobin and phosphate buffers.)'
      }
    },
    {
      id: 'checklist-buffer',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can define a buffer solution and give examples', checked: false },
          { text: 'Understand the mechanism of pH buffering (Le Chatelier)', checked: false },
          { text: 'Can use the Henderson-Hasselbalch equation to calculate buffer pH', checked: false },
          { text: 'Know that buffers are most effective at pH ≈ pKa', checked: false },
          { text: 'Can explain blood pH regulation using the carbonic acid/bicarbonate buffer', checked: false }
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
        text: 'Understand: Buffers resist pH changes by having both a weak acid (absorbs OH⁻) and its conjugate base (absorbs H⁺) in equilibrium. Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]).\n\nApply: Calculate the pH of a buffer made from 0.10 mol dm⁻³ CH₃COOH and 0.15 mol dm⁻³ CH₃COONa (pKa = 4.74).\n\nAnalyze: Why is blood buffered at pH 7.4? What would happen if this system failed?\n\nEvaluate: A buffer has maximum capacity when [HA] = [A⁻]. Why? What limits how much acid/base a buffer can absorb?'
      },
      terms: []
    },
    {
      id: 'summary-buffer',
      type: 'summary',
      data: {
        text: 'Buffer = weak acid + conjugate base salt. Resists pH change by consuming added H⁺ or OH⁻ via equilibrium shifts. pH = pKa + log([A⁻]/[HA]). Most effective at pH ≈ pKa. Blood pH 7.4 is maintained by H₂CO₃/HCO₃⁻ buffer with [HCO₃⁻]/[H₂CO₃] ≈ 20:1.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-buffer-intro',
        prompt: 'What is a buffer solution and what are its two main components?'
      },
      {
        id: 'cue-2',
        blockId: 'p-buffer-mechanism',
        prompt: 'Explain how a buffer resists pH change when acid is added.'
      },
      {
        id: 'cue-3',
        blockId: 'eq-hh',
        prompt: 'State the Henderson-Hasselbalch equation and explain what each term represents.'
      },
      {
        id: 'cue-4',
        blockId: 'ex-hh-calc',
        prompt: 'Calculate the pH of a buffer with 0.1 M acetic acid and 0.15 M acetate (pKa = 4.74).'
      },
      {
        id: 'cue-5',
        blockId: 'p-blood-buffer',
        prompt: 'Describe the blood buffer system and why blood pH remains at 7.4.'
      },
      {
        id: 'cue-6',
        blockId: 'list-buffer-make',
        prompt: 'What are the two ways to create an acidic buffer experimentally? Explain how "Partial Neutralisation" works.'
      },
      {
        id: 'cue-7',
        blockId: 'callout-buffer-add',
        prompt: 'If you add a small amount of strong acid H⁺ to a buffer, how do the moles of HA and A⁻ change?'
      }
    ],
    summaryText: 'Buffer = weak acid + salt. Made via direct mixing or partial neutralisation. pH = pKa + log([A⁻]/[HA]). When strong acid is added, A⁻ becomes HA. Most effective near pKa (±1 unit). Blood: H₂CO₃/HCO₃⁻ at pH 7.4.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Buffer Solutions and pH Control',
      detail: 'Weak acid/base pairs that resist pH change; essential in biology and chemistry.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['buffer', 'Henderson-Hasselbalch', 'pH regulation', 'blood pH']
    }
  ]
};
