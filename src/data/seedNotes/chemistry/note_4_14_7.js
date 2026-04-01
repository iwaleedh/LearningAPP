export const note_chemistry_4_14_7 = {
  blocks: [
    {
      id: 'obj-cp11',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 11: determination of Ka of a weak acid by titration with standard NaOH solution; use pH measurements and graphical methods to find pKa'
      }
    },
    {
      id: 'h-cp11-intro',
      type: 'heading',
      data: { text: 'Core Practical 11: Determination of Ka of a Weak Acid', level: 2 }
    },
    {
      id: 'p-cp11-overview',
      type: 'paragraph',
      data: {
        text: 'In this core practical, the acid dissociation constant (Ka) of a weak acid (typically acetic acid, CH₃COOH) is determined experimentally by titrating a known concentration of the weak acid with a standard solution of NaOH. The key insight is that at the half-equivalence point, the concentrations of the weak acid [HA] and its conjugate base [A⁻] are equal, so pH = pKa (from the Henderson-Hasselbalch equation). By measuring the pH at this point, the pKa is determined, and Ka can be calculated.'
      }
    },
    {
      id: 'h-apparatus',
      type: 'heading',
      data: { text: 'Apparatus and Chemicals', level: 2 }
    },
    {
      id: 'list-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Data logger with pH probe — for continuous, accurate pH measurement',
          '100 cm³ burette containing standard NaOH solution (e.g. 0.1 mol dm⁻³)',
          'Conical flask — for the ethanoic acid + NaOH reaction mixture',
          'Pipette (25 cm³) + pipette filler — to measure exact volumes of weak acid',
          'Phenolphthalein indicator — to detect the equivalence point (colourless → permanent pink)',
          'Standard NaOH solution (0.1 mol dm⁻³) — strong base titrant',
          'Ethanoic acid (CH₃COOH) solution — weak acid being studied',
          'Clamp stand with boss and clamp — to hold burette securely'
        ]
      }
    },
    {
      id: 'h-safety-cp11',
      type: 'heading',
      data: { text: 'Safety', level: 3 }
    },
    {
      id: 'list-safety-cp11',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Wear eye protection throughout — NaOH is corrosive; ethanoic acid is irritant',
          'Avoid skin contact with all reactants and products — wash immediately with water if contact occurs',
          'BURETTE HANDLING: take care when clamping the burette — do not overtighten (can crack glass); ensure clamp stand is stable so burette does not topple'
        ]
      }
    },
    {
      id: 'svg-cp11-setup',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 290' style='font-family:Arial,sans-serif;background:#f0fdf4;border-radius:8px'>
  <text x='210' y='18' font-size='13' font-weight='bold' fill='#14532d' text-anchor='middle'>CP11: Titration Setup — Finding Ka of Ethanoic Acid</text>
  <!-- Burette stand -->
  <rect x='60' y='30' width='8' height='200' rx='2' fill='#6b7280'/>
  <rect x='30' y='228' width='68' height='8' rx='2' fill='#6b7280'/>
  <!-- Burette -->
  <rect x='82' y='32' width='18' height='160' rx='3' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='1.5'/>
  <rect x='87' y='192' width='8' height='20' rx='2' fill='#1e3a8a' stroke='#1d4ed8' stroke-width='1'/>
  <!-- NaOH label -->
  <text x='108' y='80' font-size='9' fill='#1d4ed8' font-weight='bold'>NaOH(aq)</text>
  <text x='108' y='91' font-size='8' fill='#374151'>0.1 mol dm⁻³</text>
  <text x='108' y='102' font-size='8' fill='#374151'>in burette</text>
  <!-- Clamp -->
  <rect x='53' y='75' width='36' height='10' rx='2' fill='#9ca3af' stroke='#4b5563' stroke-width='1'/>
  <text x='25' y='83' font-size='8' fill='#374151'>boss +</text>
  <text x='25' y='92' font-size='8' fill='#374151'>clamp</text>
  <!-- Conical flask -->
  <polygon points='75,215 91,215 105,260 61,260' fill='#0a2e1a' stroke='#059669' stroke-width='1.5'/>
  <rect x='79' y='205' width='12' height='12' rx='1' fill='#0a2e1a' stroke='#059669' stroke-width='1'/>
  <text x='83' y='248' font-size='8' fill='#059669' text-anchor='middle'>CH₃COOH</text>
  <text x='83' y='260' font-size='8' fill='#374151' text-anchor='middle'>+ phenolphthalein</text>
  <!-- pH probe -->
  <line x1='200' y1='35' x2='200' y2='250' stroke='#1d4ed8' stroke-width='2'/>
  <rect x='185' y='250' width='30' height='10' rx='3' fill='#2d1b69' stroke='#1d4ed8' stroke-width='1.5'/>
  <text x='200' y='257' font-size='7' fill='#1d4ed8' text-anchor='middle'>pH probe</text>
  <!-- Data logger box -->
  <rect x='175' y='20' width='70' height='30' rx='5' fill='#2d1b69' stroke='#1d4ed8' stroke-width='1.5'/>
  <text x='210' y='33' font-size='9' font-weight='bold' fill='#4c1d95' text-anchor='middle'>DATA LOGGER</text>
  <text x='210' y='43' font-size='8' fill='#6d28d9' text-anchor='middle'>continuous pH</text>
  <!-- Steps panel -->
  <rect x='255' y='30' width='155' height='240' rx='6' fill='#44370a' stroke='#ca8a04' stroke-width='1'/>
  <text x='332' y='47' font-size='10' font-weight='bold' fill='#78350f' text-anchor='middle'>Exam Method</text>
  <text x='263' y='63' font-size='8' fill='#374151'>① Calibrate pH probe</text>
  <text x='263' y='75' font-size='8' fill='#374151'>② Pipette 25 cm³ CH₃COOH</text>
  <text x='263' y='87' font-size='8' fill='#374151'>   into conical flask</text>
  <text x='263' y='99' font-size='8' fill='#374151'>③ Add phenolphthalein drops</text>
  <text x='263' y='111' font-size='8' fill='#374151'>④ Fill burette with NaOH</text>
  <text x='263' y='123' font-size='8' fill='#374151'>⑤ Titrate → permanent pink</text>
  <text x='263' y='135' font-size='8' fill='#dc2626' font-weight='bold'>   (equivalence point)</text>
  <text x='263' y='151' font-size='8' fill='#374151'>⑥ Add FURTHER 25 cm³</text>
  <text x='263' y='163' font-size='8' fill='#374151'>   ethanoic acid</text>
  <text x='263' y='179' font-size='8' fill='#374151'>⑦ Record pH with data</text>
  <text x='263' y='191' font-size='8' fill='#374151'>   logger/probe</text>
  <text x='263' y='207' font-size='8' fill='#dc2626' font-weight='bold'>⑧ Ka = [H⁺] = 10⁻ᵖᴴ</text>
  <line x1='263' y1='218' x2='400' y2='218' stroke='#ca8a04' stroke-width='0.8' stroke-dasharray='3,2'/>
  <text x='263' y='230' font-size='7.5' fill='#374151'>At this point exactly half</text>
  <text x='263' y='241' font-size='7.5' fill='#374151'>the acid has been neutralised</text>
  <text x='263' y='252' font-size='7.5' fill='#374151'>→ [HA] = [A⁻] → Ka = [H⁺]</text>
  <text x='263' y='263' font-size='7.5' fill='#374151'>(pH = pKa at this point)</text>
</svg>`,
        caption: 'CP11 setup: NaOH in burette, ethanoic acid in conical flask with phenolphthalein indicator, pH probe connected to data logger. Titrate to permanent pink (equivalence), then add a further 25 cm³ weak acid → measure pH → Ka = [H⁺].'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Exam Method: Titrate then Add Equal Volume of Acid', level: 2 }
    },
    {
      id: 'callout-cp11-principle',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Principle: Why Ka = [H⁺] at Half-Neutralisation',
        text: 'At the equivalence point: all the acid has been neutralised by NaOH\nAdd back an EQUAL volume of original acid: exactly half the total acid is now neutralised\n→ half remains as HA, half has become A⁻ salt\n→ [HA] = [A⁻]\n\nFrom Ka = [H⁺][A⁻] / [HA]\nWhen [HA] = [A⁻]: Ka = [H⁺]\n\nTherefore: measure pH at this half-neutralisation point → Ka = 10⁻ᵖᴴ'
      }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Calibrate the pH probe/data logger using buffer solutions of known pH before starting — essential for accurate readings',
          'Using a pipette and pipette filler, transfer exactly 25 cm³ of ethanoic acid (CH₃COOH) into a conical flask',
          'Fill the 100 cm³ burette with standard NaOH solution; record the initial burette reading',
          'Add a few drops of phenolphthalein indicator to the conical flask; swirl',
          'Titrate the ethanoic acid with NaOH, swirling continuously; the endpoint is a PERMANENT PINK colour — if it goes pink then back to colourless when swirled, the endpoint has NOT been reached',
          'Record the volume of NaOH used at the endpoint — this is the equivalence volume (V_eq)',
          'Now pipette a FURTHER 25 cm³ of the same ethanoic acid solution into the same flask',
          'Record the pH of the mixture using the pH probe/data logger',
          'Calculate Ka: Ka = [H⁺] = 10⁻ᵖᴴ (since [HA] = [A⁻] at this point, Ka simplifies directly to [H⁺])'
        ]
      }
    },
    {
      id: 'h-why-further-acid',
      type: 'heading',
      data: { text: 'Why Add a Further Equal Volume of Acid?', level: 3 }
    },
    {
      id: 'list-why-further',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'At equivalence point: all 25 cm³ of acid has been neutralised by NaOH → solution contains only sodium ethanoate (A⁻)',
          'Adding a further 25 cm³ of the same acid: now total acid = 50 cm³, but only 25 cm³ worth has been neutralised',
          'Result: exactly HALF the acid is present as HA and half as A⁻ (conjugate base)',
          '[HA] = [A⁻] → by Henderson-Hasselbalch: pH = pKa → Ka = [H⁺] = 10⁻ᵖᴴ',
          'This avoids the need to plot a full titration curve — single pH measurement is sufficient'
        ]
      }
    },
    {
      id: 'h-solid-acid-method',
      type: 'heading',
      data: { text: 'Alternative: Ka from Solid Acid (No Titration)', level: 2 }
    },
    {
      id: 'p-solid-acid-intro',
      type: 'paragraph',
      data: {
        text: 'If the weak acid is a solid (e.g. benzoic acid, C₆H₅COOH), Ka can be found simply by dissolving a known mass in a known volume and measuring the pH — no titration required.'
      }
    },
    {
      id: 'list-solid-acid-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Weigh out a precise mass of the solid weak acid using a balance',
          'Dissolve the acid in approximately 200 cm³ of distilled water in a beaker',
          'Transfer quantitatively to a 250 cm³ volumetric flask — rinse the beaker several times with distilled water and add all washings to the flask',
          'Add distilled water up to the 250 cm³ graduation mark; stopper the flask',
          'Invert and shake repeatedly to ensure complete mixing and thorough dissolution',
          'Withdraw a small sample into a clean beaker using a pipette',
          'Measure the pH of the sample using a calibrated pH probe/data logger',
          'Calculate [acid] from the mass and Mr; find [H⁺] = 10⁻ᵖᴴ; then Ka = [H⁺]² / [acid]'
        ]
      }
    },
    {
      id: 'h-alt-method-note',
      type: 'heading',
      data: { text: 'Alternative Method: Full Titration Curve (Graphical)', level: 2 }
    },
    {
      id: 'p-alt-method',
      type: 'paragraph',
      data: {
        text: 'An alternative (and more detailed) approach is to record pH after every addition of NaOH throughout the titration and plot a full titration curve (pH vs volume of NaOH). The equivalence point is identified from the steepest part; the half-equivalence point is at V_eq/2, and the pH at that point = pKa.'
      }
    },
    {
      id: 'h-analysis',
      type: 'heading',
      data: { text: 'Data Analysis: Finding Ka', level: 2 }
    },
    {
      id: 'p-analysis-intro',
      type: 'paragraph',
      data: {
        text: 'From the titration curve, several methods can be used to determine Ka. The most straightforward is to find the half-equivalence point and read the pH at that volume, which equals pKa by the Henderson-Hasselbalch equation. Alternatively, the equivalence point can be identified from the curve, and the volume at half of the equivalence point volume is the half-equivalence point.'
      }
    },
    {
      id: 'p-method-1-half-equiv',
      type: 'paragraph',
      data: {
        text: 'Method 1 (Half-Equivalence Point): From the titration curve, locate the equivalence point (the midpoint of the steep region, where pH jumps most rapidly). Record the volume of NaOH at the equivalence point (V_eq). The half-equivalence point occurs at V_eq/2. Read the pH at this volume from the curve—this pH equals pKa. For example, if the equivalence point is at 25 mL, the half-equivalence is at 12.5 mL. If the pH at 12.5 mL is 4.74, then pKa = 4.74 and Ka = 10^(−4.74) ≈ 1.8 × 10⁻⁵.'
      }
    },
    {
      id: 'ex-analysis-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Calculating Ka from Titration Data',
        text: 'In a titration of 25 mL of 0.1 M acetic acid with 0.1 M NaOH: The equivalence point is found at 25 mL of NaOH added (because 0.1 × 25 = 0.1 × V_NaOH, so V_NaOH = 25). The half-equivalence point is at 12.5 mL. From the graph, the pH at 12.5 mL is 4.74. Therefore, pKa = 4.74 and Ka = 10^(−4.74) = 1.8 × 10⁻⁵ mol dm⁻³. This matches literature values for acetic acid.'
      }
    },
    {
      id: 'p-method-2-calculation',
      type: 'paragraph',
      data: {
        text: 'Method 2 (Calculation from Concentrations): If you accurately record the volume and concentrations throughout the titration, you can calculate [HA] and [A⁻] at any point using stoichiometry. Once [HA] and [A⁻] are known, Ka = [H⁺][A⁻]/[HA]. By measuring pH, [H⁺] = 10^(−pH). This method requires more calculation but allows Ka to be found at any point on the curve, not just at the half-equivalence point.'
      }
    },
    {
      id: 'h-simple-ka-from-ph',
      type: 'heading',
      data: { text: 'Simple Ka Determination from pH (No Titration)', level: 2 }
    },
    {
      id: 'p-simple-ka',
      type: 'paragraph',
      data: {
        text: 'Ka can also be determined without a full titration — simply by dissolving a known mass of weak acid in a known volume and measuring the pH of the resulting solution.'
      }
    },
    {
      id: 'ex-benzoic-ka',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Ka of Benzoic Acid from pH',
        text: 'Q: 0.49 g of benzoic acid (C₆H₅COOH, Mr = 122) is dissolved in water to make 250 cm³ of solution. The pH is measured as 3.00. Calculate Ka.\n\nStep 1: Find moles of benzoic acid\nn = 0.49 ÷ 122 = 4.02 × 10⁻³ mol\n\nStep 2: Find concentration\nc = 4.02 × 10⁻³ ÷ 0.250 = 0.0161 mol dm⁻³ (≈ 0.016 mol dm⁻³)\n\nStep 3: Find [H⁺] from pH\n[H⁺] = 10⁻³·⁰⁰ = 1.00 × 10⁻³ mol dm⁻³\n\nStep 4: Apply Ka = [H⁺]² / [HA]\nKa = (1.00 × 10⁻³)² ÷ 0.0161 = 6.21 × 10⁻⁵ mol dm⁻³\n\n<strong>Ka ≈ 6.2 × 10⁻⁵ mol dm⁻³</strong>'
      }
    },
    {
      id: 'h-ppq',
      type: 'heading',
      data: { text: 'Past Paper Style Questions', level: 2 }
    },
    {
      id: 'ex-methanoic-ppq',
      type: 'callout',
      data: {
        style: 'worked',
        title: '5-Mark PPQ: Methanoic Acid pH Calculation',
        text: 'Q: A solution of methanoic acid (HCOOH) has a concentration of 30 g dm⁻³. Ka = 1.70 × 10⁻⁴ mol dm⁻³. Calculate the pH of this solution.\n\n[1 mark] Step 1: Convert g dm⁻³ to mol dm⁻³\nMr(HCOOH) = 1 + 12 + 16 + 16 + 1 = 46\nc = 30 ÷ 46 = 0.652 mol dm⁻³\n\n[1 mark] Step 2: Write Ka expression with simplification\nKa = [H⁺]² / c → [H⁺]² = Ka × c\n\n[1 mark] Step 3: Calculate [H⁺]²\n[H⁺]² = 1.70 × 10⁻⁴ × 0.652 = 1.108 × 10⁻⁴\n\n[1 mark] Step 4: Find [H⁺]\n[H⁺] = √(1.108 × 10⁻⁴) = 1.053 × 10⁻² mol dm⁻³\n\n[1 mark] Step 5: Calculate pH\npH = −log(1.053 × 10⁻²) = <strong>1.98</strong>'
      }
    },
    {
      id: 'callout-two-assumptions-ppq',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 PPQ: "State the two assumptions made in the above calculation"',
        text: '1. The equilibrium concentration of the weak acid [HA] is approximately equal to its initial concentration (dissociation is so small it is negligible).\n\n2. The concentration of H⁺ ions from the ionisation of water is negligible; all H⁺ comes from the dissociation of the weak acid only.\n\n⚠️ These two assumptions appear frequently — practise writing them in full sentences!'
      }
    },
    {
      id: 'h-sources-error',
      type: 'heading',
      data: { text: 'Sources of Error and Improvements', level: 2 }
    },
    {
      id: 'list-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Incomplete mixing: Solution may not reach equilibrium between additions. Improvement: Stir thoroughly and allow time for equilibration.',
          'pH meter calibration: Uncalibrated meter gives inaccurate readings. Improvement: Calibrate the pH meter using buffer solutions of known pH (e.g., pH 4.0 and pH 7.0) before each set of measurements.',
          'CO₂ absorption: NaOH solution can absorb atmospheric CO₂, forming Na₂CO₃, which affects concentration. Improvement: Store NaOH under oil or use freshly prepared solution; cover the burette with soda lime tube.',
          'Parallax error in reading burette: Misreading the meniscus. Improvement: Read at eye level and from the bottom of the meniscus consistently.',
          'Temperature changes: pH varies slightly with temperature. Improvement: Perform the titration at room temperature and allow time for temperature equilibration.',
          'Inadequate precision near equivalence point: Large pH changes for small volume additions make it hard to pinpoint exactly. Improvement: Add NaOH very slowly (0.5–1 mL at a time) near the equivalence point.',
          'Indicator colour obscuring pH meter reading: If an indicator is used (not recommended with a pH meter), its colour may interfere. Improvement: Use only a pH meter, no indicator.'
        ]
      }
    },
    {
      id: 'h-safety',
      type: 'heading',
      data: { text: 'Safety Considerations', level: 2 }
    },
    {
      id: 'list-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Wear safety goggles and a lab coat to protect against acid and base splashes.',
          'NaOH is caustic and can cause severe burns. Handle with care and wash hands immediately if contact occurs.',
          'Acetic acid (vinegar-like) is irritating; avoid inhalation of vapours.',
          'If any chemical enters your eyes, flush immediately with water for at least 15 minutes and seek medical attention.',
          'Clean up any spills immediately using appropriate absorbent material.'
        ]
      }
    },
    {
      id: 'h-results',
      type: 'heading',
      data: { text: 'Expected Results and Discussion', level: 2 }
    },
    {
      id: 'p-expected',
      type: 'paragraph',
      data: {
        text: 'For acetic acid (pKa ≈ 4.74, Ka ≈ 1.8 × 10⁻⁵), the half-equivalence point pH should be around 4.7–4.8, giving pKa close to this value. The titration curve should show: (1) a low initial pH (around 2.9 for 0.1 M acetic acid), (2) a gradual rise as the buffer region is entered, (3) a sharp rise at the equivalence point (pH ≈ 8.7 for weak acid with strong base), and (4) a plateau at high pH. Any deviation from expected values might indicate experimental error or an unusual acid strength.'
      }
    },
    {
      id: 'ex-discussion',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Discussion Points for Your Report',
        text: 'Compare your experimental Ka to literature values. Comment on agreement or sources of discrepancy. Discuss how the titration curve shape matches theory. Explain why pH changes more rapidly near the equivalence point. Suggest improvements for better accuracy. Consider whether using an indicator (methyl orange vs phenolphthalein) would have affected results.'
      }
    },
    {
      id: 'h-graph-tips',
      type: 'heading',
      data: { text: 'Graphing Tips', level: 2 }
    },
    {
      id: 'list-graphing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Plot pH (y-axis, range 0–14) against cumulative volume of NaOH added (x-axis, in mL).',
          'Use graph paper or spreadsheet software for accuracy.',
          'Plot all data points and draw a smooth curve (not connecting dots with straight lines).',
          'Clearly label the axes with units and title: "Titration of Weak Acid with Standard NaOH".',
          'Identify and mark the equivalence point (steepest part of the curve) with a vertical line.',
          'Mark the half-equivalence point (half the x-coordinate of equivalence point) and read the pH value.',
          'From the pH at half-equivalence, state the pKa and calculate Ka.'
        ]
      }
    },
    {
      id: 'checklist-cp11',
      type: 'checklist',
      data: {
        items: [
          { text: 'Calibrate pH probe with buffer solutions before use — essential for accurate Ka', checked: false },
          { text: 'Use data logger and pH probe (not just pH paper) for continuous accurate readings', checked: false },
          { text: 'Permanent pink = equivalence point; pink → colourless on swirling = NOT endpoint yet', checked: false },
          { text: 'Add further 25 cm³ ethanoic acid AFTER reaching equivalence → creates half-neutralisation mixture', checked: false },
          { text: 'At half-neutralisation: [HA] = [A⁻] → Ka = [H⁺] = 10⁻ᵖᴴ', checked: false },
          { text: 'For solid acid: dissolve known mass in 250 cm³ volumetric flask; measure pH; Ka = [H⁺]² / [acid]', checked: false },
          { text: 'Safety: eye protection; care when clamping burette (do not crack glass; ensure stand is stable)', checked: false },
          { text: 'Can identify sources of error (uncalibrated pH meter, CO₂ absorption by NaOH, parallax error on burette)', checked: false }
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
        text: 'Understand: At the half-equivalence point, [HA] = [A⁻], so pH = pKa. This provides a direct experimental method for determining Ka of a weak acid.\n\nApply: A weak acid titrated with NaOH reaches half-equivalence at pH 4.2. Calculate Ka.\n\nAnalyze: Why does pH change very little around the half-equivalence point? Relate to buffer capacity.\n\nEvaluate: Compare using a pH meter vs an indicator for titrating a weak acid. Which gives more information?'
      },
      terms: []
    },
    {
      id: 'summary-cp11',
      type: 'summary',
      data: {
        text: 'Core Practical 11: Titrate weak acid with standard NaOH. Measure pH at each volume. Plot titration curve. Find half-equivalence point (volume at V_eq/2). pH at half-equivalence = pKa. Calculate Ka = 10^(−pKa). Calibrate pH meter before use. Add NaOH slowly near equivalence point for accuracy.'
      }
    },
    {
      id: 'svg-acid-base-map',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 440" font-family="system-ui,sans-serif"><text x="350" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">ACID-BASE CALCULATION MAP</text><!-- LEFT: strong vs weak acid --><rect x="10" y="32" width="330" height="394" rx="10" fill="rgba(239,68,68,0.08)" stroke="#ef4444" stroke-width="1.5"/><text x="175" y="52" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700">ACID pH CALCULATIONS</text><!-- Strong acid --><rect x="22" y="60" width="306" height="90" rx="8" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="1"/><text x="175" y="78" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="700">STRONG ACID (fully ionised)</text><text x="30" y="95" font-size="9" fill="#7f1d1d">HCl, HNO₃, H₂SO₄</text><text x="30" y="110" font-size="9" fill="#1e293b">[H⁺] = concentration of acid</text><text x="30" y="124" font-size="10" font-weight="700" fill="#1e293b">pH = −log₁₀[H⁺]</text><text x="30" y="140" font-size="8.5" fill="#7f1d1d">e.g. 0.1 mol dm⁻³ HCl → pH = −log(0.1) = 1</text><!-- Weak acid --><rect x="22" y="158" width="306" height="130" rx="8" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="1.5"/><text x="175" y="176" text-anchor="middle" font-size="10" fill="#fb923c" font-weight="700">WEAK ACID (partial ionisation)</text><text x="30" y="193" font-size="9" fill="#532407">HA ⇌ H⁺ + A⁻</text><text x="30" y="208" font-size="9" fill="#532407">Ka = [H⁺][A⁻] / [HA] = [H⁺]² / [HA] (if [A⁻]=[H⁺])</text><text x="30" y="223" font-size="10" font-weight="700" fill="#1e293b">[H⁺] = √(Ka × [HA])    then pH = −log[H⁺]</text><text x="30" y="240" font-size="9" fill="#532407">pKa = −log Ka   →   Ka = 10^(−pKa)</text><text x="30" y="255" font-size="8.5" fill="#78350f">Approximation valid when Ka &lt;&lt; [HA] (check!)</text><text x="30" y="272" font-size="8.5" fill="#532407">e.g. 0.1 M ethanoic acid Ka = 1.8×10⁻⁵</text><text x="30" y="280" font-size="8.5" fill="#1e293b">pH = −log(√(1.8×10⁻⁵ × 0.1)) = 2.87</text><!-- Buffer --><rect x="22" y="298" width="306" height="118" rx="8" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><text x="175" y="316" text-anchor="middle" font-size="10" fill="#34d399" font-weight="700">BUFFER SOLUTION (resists pH change)</text><text x="30" y="333" font-size="9" fill="#065f46">Weak acid + its conjugate base (salt)</text><text x="30" y="348" font-size="9" fill="#065f46">e.g. CH₃COOH + CH₃COONa</text><text x="175" y="366" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">pH = pKa + log([A⁻]/[HA])</text><text x="175" y="381" text-anchor="middle" font-size="8.5" fill="#065f46">Henderson-Hasselbalch equation</text><text x="30" y="397" font-size="8.5" fill="#065f46">When [A⁻] = [HA]: pH = pKa (half-equivalence point)</text><text x="30" y="409" font-size="8.5" fill="#065f46">Used in blood (pH 7.4), shampoo, enzyme lab reactions</text><!-- RIGHT: Titration curves --><rect x="360" y="32" width="330" height="394" rx="10" fill="rgba(96,165,250,0.08)" stroke="#60a5fa" stroke-width="1.5"/><text x="525" y="52" text-anchor="middle" font-size="11" fill="#60a5fa" font-weight="700">TITRATION CURVES</text><!-- Strong acid + strong base --><rect x="374" y="60" width="302" height="90" rx="8" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1"/><text x="525" y="78" text-anchor="middle" font-size="9.5" fill="#ef4444" font-weight="700">STRONG ACID + STRONG BASE</text><text x="380" y="94" font-size="8.5" fill="#7f1d1d">Start pH ~1  |  End pH ~13  |  Equiv. point pH = 7</text><text x="380" y="108" font-size="8.5" fill="#7f1d1d">Sharp vertical section near equivalence (pH 3→11 in drops)</text><text x="380" y="122" font-size="8.5" fill="#7f1d1d">Indicators: methyl orange or phenolphthalein both ok</text><text x="380" y="136" font-size="8.5" fill="#7f1d1d">Salt: NaCl (neutral), ppt of Mg(OH)₂ if Mg²⁺</text><!-- Weak acid + strong base --><rect x="374" y="158" width="302" height="108" rx="8" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="1"/><text x="525" y="176" text-anchor="middle" font-size="9.5" fill="#fb923c" font-weight="700">WEAK ACID + STRONG BASE</text><text x="380" y="193" font-size="8.5" fill="#532407">Start pH ~3  |  End pH ~13  |  Equiv. point pH &gt; 7</text><text x="380" y="207" font-size="8.5" fill="#532407">pH &gt; 7 at equiv.: salt hydrolysis (CH₃COO⁻ + H₂O)</text><text x="380" y="221" font-size="8.5" fill="#532407">Half-equiv. point: pH = pKa (read off Ka directly)</text><text x="380" y="235" font-size="8.5" fill="#532407">Buffer region: gradual pH change around half-equiv.</text><text x="380" y="249" font-size="8.5" fill="#78350f">Use phenolphthalein (not methyl orange) as indicator</text><!-- Strong acid + weak base --><rect x="374" y="274" width="302" height="86" rx="8" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="1"/><text x="525" y="292" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-weight="700">STRONG ACID + WEAK BASE</text><text x="380" y="308" font-size="8.5" fill="#1e3a8a">Equiv. point pH &lt; 7 (NH₄⁺ is acidic)</text><text x="380" y="322" font-size="8.5" fill="#1e3a8a">Steep section less pronounced than strong+strong</text><text x="380" y="336" font-size="8.5" fill="#1e3a8a">Use methyl orange (not phenolphthalein)</text><!-- Kw box --><rect x="374" y="368" width="302" height="50" rx="8" fill="rgba(99,102,241,0.2)" stroke="#60a5fa" stroke-width="1"/><text x="525" y="386" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="700">Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C  |  pKw = 14</text><text x="525" y="402" text-anchor="middle" font-size="9" fill="#2d2d72">pH + pOH = 14  |  Neutral: pH = 7 (at 25°C only)</text><text x="525" y="416" text-anchor="middle" font-size="8.5" fill="#60a5fa">Kw increases with temperature → neutral pH decreases above 25°C</text></svg>',
        caption: 'Acid-Base Calculation Map — strong acids: pH = −log[H⁺]. Weak acids: [H⁺] = √(Ka × [HA]). Buffers: pH = pKa + log([A⁻]/[HA]). Titration curves differ for strong/weak combinations — choose the indicator that changes in the steep section.'
      },
      terms: []
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Half-Neutralisation: [HA] = [A\u207b] \u2192 Ka = [H\u207a]",
        text: "At half-neutralisation, exactly half the acid is converted to salt. [HA] = [A\u207b]. From Ka = [H\u207a][A\u207b]/[HA], the [A\u207b]/[HA] term = 1, so Ka = [H\u207a]. Therefore [H\u207a] = Ka, and Ka can be calculated directly from pH measurement. This is the trick to CP11."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: "CP11 Method: Add Acid After Titration",
        text: "Titrate to equivalence with NaOH (equivalence volume = V_eq noted). Then pipette a FURTHER 25 cm\u00b3 of the ORIGINAL ethanoic acid into the same flask. At this point, [HA] = [A\u207b] because exactly half the original acid is now unreacted, and half is neutralised salt. Measure pH \u2192 Ka = 10^(\u2212pH)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-cp11-principle',
        prompt: 'In CP11, why does adding a further equal volume of weak acid after reaching the equivalence point mean that Ka = [H⁺]? Show the algebraic reasoning.'
      },
      {
        id: 'cue-2',
        blockId: 'list-method',
        prompt: 'Describe the exam method for CP11 step by step. What indicator is used and what is the endpoint colour? What happens after the endpoint?'
      },
      {
        id: 'cue-3',
        blockId: 'list-solid-acid-method',
        prompt: 'Describe how to determine Ka from a solid weak acid (e.g. benzoic acid) without a full titration. Why must the beaker washings be added to the volumetric flask?'
      },
      {
        id: 'cue-4',
        blockId: 'ex-benzoic-ka',
        prompt: '0.49 g of benzoic acid (Mr = 122) is dissolved in 250 cm³ of distilled water. pH = 3.00. Calculate Ka step by step.'
      },
      {
        id: 'cue-5',
        blockId: 'list-errors',
        prompt: 'Name three sources of error in CP11 and give a specific improvement for each.'
      },
      {
        id: 'cue-6',
        blockId: 'callout-two-assumptions-ppq',
        prompt: 'State the two assumptions made when calculating Ka from the simplified expression Ka = [H⁺]² / [HA].'
      }
    ],
    summaryText: 'CP11 exam method: calibrate pH probe → titrate 25 cm³ ethanoic acid with NaOH (phenolphthalein indicator) until permanent pink (equivalence point) → add further 25 cm³ ethanoic acid → measure pH with data logger → Ka = [H⁺] = 10⁻ᵖᴴ. Works because [HA] = [A⁻] at half-neutralisation. Solid acid alternative: known mass dissolved in 250 cm³ volumetric flask → measure pH → Ka = [H⁺]² / [acid]. Errors: uncalibrated pH probe, CO₂ absorbed by NaOH, parallax on burette.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Core Practical 11: Ka Determination by Titration',
      detail: 'Experimental method to measure weak acid strength using pH measurements.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['core practical', 'Ka', 'titration', 'pH meter', 'half-equivalence']
    }
  ]
};
