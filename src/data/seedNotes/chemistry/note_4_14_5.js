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
        text: 'A buffer solution is one that <strong>minimises change in pH</strong> when a <strong>small amount</strong> of either acid or base is added. Critical exam wording: (1) use \'minimises\' — NOT \'prevents\' — the pH does change, just by very little; (2) \'small amount\' — a large addition will overwhelm the buffer and cause a large pH change. An acidic buffer = weak acid + its conjugate base salt (e.g., CH₃COOH + CH₃COONa). A basic buffer = weak base + its conjugate acid salt (e.g., NH₃ + NH₄Cl).'
      }
    },
    {
      id: 'callout-buffer-def-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Exam Language: Do NOT say \'prevents\'',
        text: '✗ Wrong: "A buffer prevents pH change."\n✓ Correct: "A buffer minimises (resists / keeps roughly constant) significant changes in pH."\n\nThe pH does change slightly — the buffer simply prevents drastic changes that would occur in pure water or an unbuffered solution.'
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
      id: 'h-exam-worked',
      type: 'heading',
      data: { text: 'Exam Worked Examples: Buffer pH Calculations', level: 2 }
    },
    {
      id: 'callout-exam-type1',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Exam Type 1: Weak Acid + Salt (Direct Mix)',
        text: '<strong>Q: 45 cm³ of 0.100 mol dm⁻³ CH₃COOH is mixed with 50 cm³ of 0.150 mol dm⁻³ CH₃COONa. Ka = 1.70 × 10⁻⁵ mol dm⁻³. Calculate the pH.</strong><br/><br/>Step 1: Calculate moles<br/>n(acid) = 0.100 × 45/1000 = 4.50 × 10⁻³ mol<br/>n(salt) = 0.150 × 50/1000 = 7.50 × 10⁻³ mol<br/><br/>Step 2: Find concentrations (total V = 95 cm³ = 0.095 dm³)<br/>[acid] = 4.50 × 10⁻³ / 0.095 = 0.0474 mol dm⁻³<br/>[salt] = 7.50 × 10⁻³ / 0.095 = 0.0789 mol dm⁻³<br/><br/>Step 3: Calculate [H⁺]<br/>[H⁺] = Ka × [acid]/[salt] = (1.70 × 10⁻⁵) × (0.0474/0.0789) = 1.02 × 10⁻⁵ mol dm⁻³<br/><br/>pH = −log(1.02 × 10⁻⁵) = <strong>4.99</strong>'
      }
    },
    {
      id: 'callout-exam-type2',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Exam Type 2: Weak Acid + Strong Base (Partial Neutralisation)',
        text: '<strong>Q: 55 cm³ of 0.500 mol dm⁻³ CH₃COOH + 25 cm³ of 0.350 mol dm⁻³ NaOH. Ka = 1.70 × 10⁻⁵ mol dm⁻³. Calculate pH.</strong><br/><br/>Step 1: Moles<br/>n(CH₃COOH) = 0.500 × 55/1000 = 0.0275 mol<br/>n(NaOH) = 0.350 × 25/1000 = 8.75 × 10⁻³ mol<br/><br/>Step 2: Reaction — NaOH is the limiting reagent<br/>CH₃COOH + NaOH → CH₃COONa + H₂O<br/>n(acid remaining) = 0.0275 − 8.75×10⁻³ = 0.01875 mol (excess acid ✓ buffer forms)<br/>n(salt formed) = 8.75 × 10⁻³ mol<br/><br/>Step 3: Total V = 80 cm³ = 0.080 dm³<br/>[acid] = 0.01875/0.080 = 0.2344 mol dm⁻³<br/>[salt] = 8.75×10⁻³/0.080 = 0.1094 mol dm⁻³<br/><br/>Step 4: [H⁺] = (1.70 × 10⁻⁵) × (0.2344/0.1094) = 3.64 × 10⁻⁵<br/><br/>pH = −log(3.64 × 10⁻⁵) = <strong>4.44</strong>'
      }
    },
    {
      id: 'callout-exam-type3',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Exam Type 3: Adding Alkali to an Existing Buffer',
        text: '<strong>Q: 0.050 mol NaOH is added to 500 cm³ of a buffer where [CH₃COOH] = 0.200 mol dm⁻³ and [CH₃COO⁻] = 0.250 mol dm⁻³. Ka = 1.70 × 10⁻⁵. Calculate new pH.</strong><br/><br/>Step 1: Initial moles<br/>n(acid) = 0.200 × 0.500 = 0.100 mol<br/>n(salt) = 0.250 × 0.500 = 0.125 mol<br/><br/>Step 2: NaOH reacts with the weak acid: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O<br/>n(acid) = 0.100 − 0.050 = 0.050 mol<br/>n(salt) = 0.125 + 0.050 = 0.175 mol<br/><br/>Step 3: Key shortcut — volume is the same for both, so use mole ratio directly<br/>[H⁺] = Ka × n(acid)/n(salt) = (1.70 × 10⁻⁵) × (0.050/0.175) = 4.86 × 10⁻⁶<br/><br/>pH = −log(4.86 × 10⁻⁶) = <strong>5.31</strong>'
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
      id: 'callout-buffer-sanity',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 Exam Sanity Check: Acidic Buffer pH',
        text: 'An acidic buffer (weak acid + conjugate base salt) should always give pH in the range 4–6.\n\n• If your calculated pH is 1–2 → something is wrong (check mole ratios)\n• If your pH > 7 for an "acidic" buffer → definite error\n• The pH should be within ±1 of the pKa of the weak acid used\n• pKa of ethanoic acid = 4.76 → expect pH 3.76–5.76 for CH₃COOH/CH₃COO⁻ buffers'
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
      id: 'tbl-buffer-vs-water',
      type: 'comparisonTable',
      data: {
        headers: ['Scenario', '0.01 mol HCl added', 'pH before', 'pH after', 'ΔpH'],
        rows: [
          ['Buffer (0.1 mol dm⁻³ CH₃COOH/CH₃COO⁻)', '[H⁺] barely changes (A⁻ consumes the H⁺)', '4.76', '≈ 4.74', '≈ 0.02'],
          ['Pure water', 'All H⁺ remains free in solution', '7.00', '≈ 2.00', '≈ 5.00']
        ],
        caption: 'Buffer vs water comparison: adding 0.01 mol HCl — buffer barely changes, water drops dramatically'
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
      id: 'h-buffer-target-ph',
      type: 'heading',
      data: { text: 'Making a Buffer of a Specific Target pH', level: 2 }
    },
    {
      id: 'list-target-ph-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Calculate the target [H⁺]: [H⁺] = 10<sup>−pH</sup>',
          'Rearrange Ka expression: [acid]/[salt] = [H⁺] / Ka',
          'Calculate the ratio: this gives you the required ratio of weak acid to conjugate base',
          'Choose convenient concentrations that satisfy this ratio and mix equal volumes (or adjust volumes for the ratio)'
        ]
      }
    },
    {
      id: 'callout-target-ph-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked: Make a Buffer of pH 5.00 using CH₃COOH/CH₃COO⁻ (Ka = 1.74 × 10⁻⁵)',
        text: 'Step 1: [H⁺] = 10⁻⁵ = 1.00 × 10⁻⁵ mol dm⁻³\n\nStep 2: [H⁺] = Ka × [acid]/[salt]\n→ [acid]/[salt] = [H⁺]/Ka = (1.00 × 10⁻⁵)/(1.74 × 10⁻⁵) = 0.575\n\nStep 3: Interpretation — for every 1 mol dm⁻³ of sodium ethanoate, you need 0.575 mol dm⁻³ of ethanoic acid\n\nStep 4: Mix equal volumes of 0.575 mol dm⁻³ CH₃COOH and 1.000 mol dm⁻³ CH₃COONa\n(Or equivalently: any ratio of acid:salt = 0.575:1)'
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
        text: 'Blood pH must remain in the narrow range <strong>7.35–7.45</strong> for healthy function (outside this range causes acidosis or alkalosis — both potentially fatal). The primary buffer is the carbonic acid/bicarbonate system: H₂CO₃ ⇌ H⁺ + HCO₃⁻. The pKa of H₂CO₃ is 6.35. Blood pH 7.4 is maintained at a [HCO₃⁻]/[H₂CO₃] ratio of approximately 20:1. The respiratory system adjusts CO₂ concentration (CO₂ + H₂O ⇌ H₂CO₃) and the kidneys adjust [HCO₃⁻] to fine-tune the ratio. Haemoglobin and plasma proteins also act as secondary buffers.'
      }
    },
    {
      id: 'callout-blood-lactic',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Example: Lactic Acid and Blood pH During Exercise',
        text: 'During intense exercise, muscles produce lactic acid (CH₃CH(OH)COOH). This releases H⁺ ions into blood, which are consumed by HCO₃⁻:\nH⁺ + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O\n\nThe CO₂ is carried to the lungs and exhaled, preventing large pH drops.\n\nBlood pH stays near 7.4 rather than dropping dramatically — this is buffering in action. Without this mechanism, lactic acid produced in a sprint would be lethal.'
      }
    },
    {
      id: 'ex-blood-ph',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Blood pH Calculation',
        text: 'Using Henderson-Hasselbalch with pKa = 6.35, [HCO₃⁻] ≈ 24 mmol/L, [H₂CO₃] ≈ 1.2 mmol/L:\npH = 6.35 + log(24/1.2) = 6.35 + log(20) = 6.35 + 1.30 = 7.65\n\nThe slight discrepancy from actual blood pH (7.40) is because haemoglobin and plasma proteins contribute additional buffering capacity.'
      }
    },
    {
      id: 'h-food-buffers',
      type: 'heading',
      data: { text: 'Buffers in Food Science', level: 2 }
    },
    {
      id: 'list-food-buffers',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Buffer capacity</strong> of a food = the amount of acid or base required to significantly change the pH of that food',
          'Higher protein content → higher buffer capacity (amino acids have both acidic −COOH and basic −NH₂ groups, acting as both acid and base — i.e., they are amphoteric / zwitterionic)',
          'Foods maintained at <strong>pH < 4.4</strong> (acidic — e.g.  vinegar-pickled foods, jams) or <strong>pH > 9</strong> (alkaline — e.g. cured eggs in lye) prevent microorganism growth',
          'Most bacteria cannot survive below pH 4.4 — this is why citrus-preserved or fermented foods are shelf-stable',
          'Food manufacturers control and buffer pH to extend shelf life and ensure safety — an important application of buffer chemistry'
        ]
      }
    },
    {
      id: 'checklist-buffer',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can define a buffer solution using the word \'minimises\' (not \'prevents\')', checked: false },
          { text: 'Can make a buffer by direct mix (acid + salt) or partial neutralisation (excess acid + strong base)', checked: false },
          { text: 'Understand the mechanism of pH buffering (A⁻ + H⁺ → HA; HA + OH⁻ → A⁻ + H₂O)', checked: false },
          { text: 'Can use Ka expression and Henderson-Hasselbalch to calculate buffer pH', checked: false },
          { text: 'Can complete all 3 exam types: acid+salt, acid+strong base, modifying existing buffer', checked: false },
          { text: 'Can calculate required acid:salt ratio to achieve a target pH', checked: false },
          { text: 'Know that blood pH must stay 7.35–7.45; H₂CO₃/HCO₃⁻ buffer with [HCO₃⁻]/[H₂CO₃] ≈ 20:1', checked: false },
          { text: 'Can explain buffers in food: buffer capacity, amino acids, pH < 4.4 or > 9 prevents microorganism growth', checked: false }
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
        text: 'Buffer minimises (NOT prevents) pH change. Acidic buffer = weak acid + conjugate base salt. Made by direct mix or partial neutralisation with excess weak acid. Buffer action: A⁻ + H⁺ → HA (resists acid); HA + OH⁻ → A⁻ + H₂O (resists alkali). [H⁺] = Ka × [acid]/[salt]. Most effective at pH ≈ pKa ± 1. Blood pH 7.35–7.45: H₂CO₃/HCO₃⁻, ratio ≈20:1. Food buffers: pH < 4.4 or > 9 prevents microorganism growth.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-buffer-intro',
        prompt: 'Give the exact exam definition of a buffer solution. What key word must you use instead of \'prevents\'?'
      },
      {
        id: 'cue-2',
        blockId: 'list-buffer-make',
        prompt: 'What are the two ways to make an acidic buffer? Which requires excess weak acid and why?'
      },
      {
        id: 'cue-3',
        blockId: 'p-buffer-mechanism',
        prompt: 'Write the two equations that show how a buffer resists addition of (a) acid and (b) alkali.'
      },
      {
        id: 'cue-4',
        blockId: 'callout-exam-type2',
        prompt: 'In the Type 2 buffer calculation: 55 cm³ of 0.5 mol dm⁻³ CH₃COOH + 25 cm³ of 0.35 mol dm⁻³ NaOH. Walk through the steps to find pH.'
      },
      {
        id: 'cue-5',
        blockId: 'callout-target-ph-worked',
        prompt: 'How do you calculate the acid:salt ratio needed to make a buffer of a specific target pH?'
      },
      {
        id: 'cue-6',
        blockId: 'p-blood-buffer',
        prompt: 'State the exact blood pH range. Which buffer system maintains it? What happens when lactic acid is produced during exercise?'
      },
      {
        id: 'cue-7',
        blockId: 'list-food-buffers',
        prompt: 'What pH values prevent microorganism growth in food? How does protein content affect buffer capacity?'
      }
    ],
    summaryText: 'Buffer minimises (not prevents) pH change. Acidic buffer: weak acid + conjugate base salt. Two exam types: acid+salt, partial neutralisation. [H⁺] = Ka × [acid]/[salt]. Blood pH 7.35–7.45: H₂CO₃/HCO₃⁻ at 20:1 ratio. Food: pH < 4.4 or > 9 prevents microbial growth. Buffer capacity increases with concentration and protein content.',
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
