/**
 * Seed note: Chemistry · Unit 4 · Topic 11 · Subtopic 8
 * "Core Practicals 9a, 9b and 10"
 */

export const note_chemistry_4_11_8 = {
  blocks: [
    {
      id: 'objective-block',
      type: 'objective',
      data: {
        text: 'Detail the methods for Core Practicals 9a (Iodine-Propanone titrimetric method), 9b (Iodine Clock initial-rates method), and 10 (Finding Activation Energy using the Arrhenius equation); interpret results to deduce reaction order; perform PPQ-style calculations for concentration, moles, and mean rate.'
      },
      terms: []
    },
    // ── CORE PRACTICAL 9A: CONTINUOUS MONITORING ───────────────────────────
    {
      id: 'h-cp9a',
      type: 'heading',
      data: { text: 'Core Practical 9a: Iodine-Propanone Reaction (Titrimetric/Continuous Method)', level: 2 },
      terms: []
    },
    {
      id: 'p-cp9a-reaction',
      type: 'paragraph',
      data: {
        text: 'Reaction: CH₃COCH₃(aq) + I₂(aq) → CH₃COCH₂I(aq) + H⁺(aq) + I⁻(aq) [acid catalysed]. This is a continuous monitoring experiment — one large batch of the reaction is made and samples withdrawn at timed intervals. The falling concentration of I₂ is tracked over time by titrating each sample.'
      },
      terms: []
    },
    {
      id: 'h-cp9a-objective',
      type: 'heading',
      data: { text: 'Objective', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9a-objective',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Determine the order of reaction with respect to iodine using a concentration–time graph',
          'Plot [I₂] vs time; calculate half-lives; constant half-life → zero order with respect to iodine',
          'This is a version of the continuous method (one experiment, samples taken throughout)'
        ]
      }
    },
    {
      id: 'h-cp9a-apparatus',
      type: 'heading',
      data: { text: 'Apparatus & Reagents', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9a-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Propanone (CH₃COCH₃) — reactant',
          'Iodine solution (I₂(aq)) — reactant being monitored',
          'Sulfuric acid (H₂SO₄) — acid catalyst',
          'Potassium iodide (KI) — used in preparation of iodine solution',
          'Sodium thiosulfate (Na₂S₂O₃) — standard solution for titrating iodine',
          'Sodium hydrogen carbonate (NaHCO₃) — quenching agent',
          'Starch solution — indicator (turns blue-black with I₂)',
          'Beaker (large, for reaction mixture), conical flasks (for quenching), graduated cylinders',
          '10 cm³ pipette — to withdraw samples accurately',
          'Burette — for sodium thiosulfate titration',
          'Stopwatch'
        ]
      }
    },
    {
      id: 'h-cp9a-safety',
      type: 'heading',
      data: { text: 'Safety', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9a-safety',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Eye protection must be worn — propanone is an irritant; vapour causes eyes to water',
          'Propanone is highly flammable — ensure room is extremely well ventilated; no naked flames',
          'Sodium thiosulfate can release sulfur dioxide (SO₂) if acidified — keep ventilated',
          'Avoid skin contact with all reactants and products — wear gloves',
          'Dispose of propanone by rinsing with large volumes of water'
        ]
      }
    },
    {
      id: 'h-cp9a-method',
      type: 'heading',
      data: { text: 'Method — Step by Step', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9a',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Add sulfuric acid (H₂SO₄) of specified volume and concentration to a beaker',
          'Add propanone (CH₃COCH₃) to the beaker',
          'Add iodine solution (I₂) and START the stopwatch immediately; stir well to ensure thorough mixing',
          'Every 5 minutes: use a 10 cm³ pipette to withdraw a sample from the reaction mixture',
          'Transfer the sample into a conical flask containing an excess of sodium hydrogen carbonate (NaHCO₃) — this QUENCHES (stops) the reaction by neutralising the acid catalyst',
          'Record the time when the sample was added — specifically, record the time when HALF of the sample has been transferred (i.e. when 5 cm³ of the 10 cm³ aliquot has entered the flask)',
          'Titrate the iodine in the quenched sample against standard sodium thiosulfate (Na₂S₂O₃); when the solution turns pale yellow, add starch indicator',
          'Continue titrating until the solution changes from blue-black to colourless — this is the endpoint; record the volume of Na₂S₂O₃ used',
          'Repeat every 5 minutes for at least 6–7 timed samples to collect enough data to plot a graph',
          'Calculate [I₂] at each time point from the titration results; plot [I₂] vs time'
        ]
      },
      terms: ['Quenching', 'Sodium hydrogencarbonate']
    },
    {
      id: 'svg-cp9a-flowchart',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 540 200' style='font-family:Arial,sans-serif;background:#f0f9ff;border-radius:8px'>
  <text x='160' y='20' font-size='13' font-weight='bold' fill='#1e3a5f'>CP9a: Sampling &amp; Quenching Workflow</text>
  <!-- Box 1 -->
  <rect x='10' y='35' width='105' height='44' rx='6' fill='#dbeafe' stroke='#1d4ed8' stroke-width='1.5'/>
  <text x='62' y='54' font-size='9' text-anchor='middle' fill='#1e3a5f' font-weight='bold'>Large reaction beaker</text>
  <text x='62' y='66' font-size='8' text-anchor='middle' fill='#374151'>propanone + I₂ + H₂SO₄</text>
  <text x='62' y='77' font-size='8' text-anchor='middle' fill='#374151'>Start stopwatch</text>
  <!-- Arrow 1→2 -->
  <line x1='115' y1='57' x2='137' y2='57' stroke='#374151' stroke-width='1.5'/>
  <polygon points='130,53 138,57 130,61' fill='#374151'/>
  <text x='118' y='50' font-size='8' fill='#374151'>every</text>
  <text x='118' y='62' font-size='8' fill='#374151'>5 min</text>
  <!-- Box 2 -->
  <rect x='138' y='35' width='105' height='44' rx='6' fill='#fef9c3' stroke='#ca8a04' stroke-width='1.5'/>
  <text x='190' y='51' font-size='9' text-anchor='middle' fill='#78350f' font-weight='bold'>Withdraw 10 cm³</text>
  <text x='190' y='63' font-size='8' text-anchor='middle' fill='#374151'>with pipette</text>
  <text x='190' y='75' font-size='8' text-anchor='middle' fill='#374151'>record time at 5 cm³ mark</text>
  <!-- Arrow 2→3 -->
  <line x1='243' y1='57' x2='265' y2='57' stroke='#374151' stroke-width='1.5'/>
  <polygon points='258,53 266,57 258,61' fill='#374151'/>
  <!-- Box 3 -->
  <rect x='266' y='35' width='113' height='44' rx='6' fill='#dcfce7' stroke='#16a34a' stroke-width='1.5'/>
  <text x='322' y='51' font-size='9' text-anchor='middle' fill='#14532d' font-weight='bold'>Add to NaHCO₃(aq)</text>
  <text x='322' y='63' font-size='8' text-anchor='middle' fill='#374151'>QUENCH — neutralises</text>
  <text x='322' y='75' font-size='8' text-anchor='middle' fill='#374151'>H₂SO₄ catalyst → stops rxn</text>
  <!-- Arrow 3→4 -->
  <line x1='379' y1='57' x2='401' y2='57' stroke='#374151' stroke-width='1.5'/>
  <polygon points='394,53 402,57 394,61' fill='#374151'/>
  <!-- Box 4 -->
  <rect x='402' y='35' width='128' height='44' rx='6' fill='#ede9fe' stroke='#7c3aed' stroke-width='1.5'/>
  <text x='466' y='51' font-size='9' text-anchor='middle' fill='#4c1d95' font-weight='bold'>Titrate with Na₂S₂O₃</text>
  <text x='466' y='63' font-size='8' text-anchor='middle' fill='#374151'>add starch at pale yellow</text>
  <text x='466' y='75' font-size='8' text-anchor='middle' fill='#374151'>endpoint: blue-black → colourless</text>
  <!-- Collection phase -->
  <text x='10' y='110' font-size='10' font-weight='bold' fill='#1e3a5f'>After ≥6 data points → Plot [I₂] vs time:</text>
  <!-- Mini graph area -->
  <line x1='20' y1='180' x2='20' y2='125' stroke='#374151' stroke-width='1.5'/>
  <line x1='20' y1='180' x2='200' y2='180' stroke='#374151' stroke-width='1.5'/>
  <text x='5' y='154' font-size='8' fill='#374151'>[I₂]</text>
  <text x='100' y='196' font-size='8' fill='#374151'>time (min)</text>
  <!-- Zero-order line: straight diagonal -->
  <line x1='25' y1='130' x2='195' y2='175' stroke='#dc2626' stroke-width='2'/>
  <text x='110' y='145' font-size='9' fill='#dc2626' font-weight='bold'>straight line → ZERO ORDER</text>
  <text x='205' y='155' font-size='8' fill='#374151'>half-life is</text>
  <text x='205' y='166' font-size='8' fill='#374151'>CONSTANT →</text>
  <text x='205' y='177' font-size='8' fill='#dc2626'>zero order</text>
  <text x='205' y='188' font-size='8' fill='#374151'>w.r.t. I₂</text>
</svg>`,
        caption: 'CP9a workflow: sample every 5 min → quench with NaHCO₃ → titrate with Na₂S₂O₃ → plot [I₂] vs time. A straight descending line confirms zero order with respect to iodine.'
      }
    },
    {
      id: 'h-cp9a-results',
      type: 'heading',
      data: { text: 'Results Interpretation', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9a-results',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '[I₂] vs time graph gives a straight negative line → zero order with respect to iodine',
          'Constant half-life confirms zero order (half-life is independent of concentration for zero order)',
          'Rate equation for this reaction: rate = k[CH₃COCH₃][H⁺] — iodine does NOT appear',
          'Iodine is zero order because it is NOT in the rate-determining step — it is involved in a subsequent (faster) step',
          'The rate-determining step contains ONE molecule of propanone and ONE H⁺ ion',
          'If the propanone concentration is halved → rate is halved (first order w.r.t. propanone)',
          'If H⁺ concentration is halved → rate is halved (first order w.r.t. H⁺)',
          'Iodine is zero order → changing [I₂] has no effect on the rate at all'
        ]
      }
    },
    {
      id: 'h-cp9a-ppq',
      type: 'heading',
      data: { text: 'PPQ — June 2018 (Core Practical 9a)', level: 3 },
      terms: []
    },
    {
      id: 'callout-cp9a-ppq-ab',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2018 Parts A & B',
        text: 'Part A: Suggest a solution that could be used to stop the reaction (quench it)\n→ Sodium hydrogen carbonate (NaHCO₃) [or potassium hydrogen carbonate]\n   Reason: neutralises the acid catalyst (H₂SO₄), stopping the catalysed reaction\n\nPart B: At what point in step 4 should the time be recorded?\n→ When HALF of the reaction mixture has been transferred to the quenching solution\n   i.e. when 5 cm³ of the 10 cm³ pipette has entered the conical flask\n   Reason: this gives a single, reproducible time point midway through the transfer'
      }
    },
    {
      id: 'callout-cp9a-ppq-cd',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2018 Part C: Concentration After Mixing',
        text: 'Given: 50 cm³ of I₂ at 0.02 mol dm⁻³ is mixed with 25 cm³ propanone + 25 cm³ H₂SO₄\nTotal volume = 50 + 25 + 25 = 100 cm³\n\nConcentration has been diluted: original volume = 50 cm³, new volume = 100 cm³ → diluted by factor of 2\n\n[I₂] after mixing = 0.02 ÷ 2 = 0.01 mol dm⁻³\n\nKey rule: when volume doubles, concentration halves'
      }
    },
    {
      id: 'callout-cp9a-ppq-ef',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2018 Parts D & E: Concentration at 70 s and Mean Rate',
        text: 'Given: 10 cm³ sample taken at t = 70 s; titrated with 0.01 mol dm⁻³ Na₂S₂O₃; titre = 18.5 cm³\nReaction: 2Na₂S₂O₃ + I₂ → Na₂S₄O₆ + 2NaI  (2:1 ratio, thiosulfate:iodine)\n\nStep 1 — Moles of Na₂S₂O₃:\n  n(Na₂S₂O₃) = 0.01 × 18.5/1000 = 1.85 × 10⁻⁴ mol\n\nStep 2 — Moles of I₂ (ratio 2:1):\n  n(I₂) = 1.85 × 10⁻⁴ ÷ 2 = 9.25 × 10⁻⁵ mol\n\nStep 3 — [I₂] in 10 cm³ sample:\n  [I₂] = 9.25 × 10⁻⁵ ÷ 0.010 = 9.25 × 10⁻³ mol dm⁻³\n\nStep 4 — Mean rate of change of [I₂]:\n  Δ[I₂] = [I₂]₀ − [I₂]₇₀ = 0.01 − 9.25 × 10⁻³ = 7.5 × 10⁻⁴\n  Rate = Δ[I₂] / Δt = 7.5 × 10⁻⁴ / 70 = 1.07 × 10⁻⁵ mol dm⁻³ s⁻¹'
      }
    },
    {
      id: 'callout-cp9a-ppq-g',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PPQ June 2018 Part F & G: Explaining the Graph and the Repeat Experiment',
        text: 'Part F: The graph of volume Na₂S₂O₃ vs time is a straight line. Use the rate equation to explain.\n→ Iodine does NOT appear in the rate equation (rate = k[CH₃COCH₃][H⁺])\n→ Reaction is zero order with respect to iodine\n→ Therefore rate is constant and does not depend on [I₂]\n→ Constant rate → straight line on a [I₂] vs time graph\n\nPart G: The experiment is repeated using 25 cm³ of 0.5 mol dm⁻³ propanone (half the original concentration).\nPredict the appearance of the new line on the [I₂] vs time graph.\n→ Rate is halved because propanone is first order (rate ∝ [propanone])\n→ Halving [propanone] halves the rate\n→ New line: same starting point; gradient is LESS steep (less negative) by a factor of 2\n→ Iodine is still zero order so rate is still constant — still a straight line, just shallower'
      }
    },
    {
      id: 'callout-cp9a-titration-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Titration Indicator Protocol for CP9a',
        text: 'Indicator: starch solution\nWhen to add: when the solution turns PALE YELLOW (most iodine has been consumed by thiosulfate)\nDo NOT add starch at the start — it binds irreversibly to I₂ at high concentrations\nColour change at endpoint: dark blue-black → COLOURLESS\nRecord the burette reading at this point as the final titre'
      }
    },
    // ── CORE PRACTICAL 9B: IODINE CLOCK ────────────────────────────────────
    {
      id: 'h-cp9b',
      type: 'heading',
      data: { text: 'Core Practical 9b: The Iodine Clock (Initial Rates Method)', level: 2 },
      terms: []
    },
    {
      id: 'p-cp9b-reactions',
      type: 'paragraph',
      data: {
        text: '<strong>Reaction 1 (slow — rate-determining):</strong> H₂O₂(aq) + 2I⁻(aq) + 2H⁺(aq) → I₂(aq) + 2H₂O(l)<br/><strong>Reaction 2 (very fast):</strong> I₂(aq) + 2S₂O₃²⁻(aq) → 2I⁻(aq) + S₄O₆²⁻(aq)<br/><br/>The clock uses a known, small, constant amount of sodium thiosulfate to "trap" the iodine being produced. Only when all the thiosulfate is consumed does I₂ accumulate → reacts with starch → sudden blue-black colour. Time to colour change = time to produce a fixed amount of I₂ ∝ 1/initial rate.'
      },
      terms: []
    },
    {
      id: 'h-cp9b-apparatus',
      type: 'heading',
      data: { text: 'Apparatus & Reagents', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9b-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Hydrogen peroxide (H₂O₂) — oxidising agent; wear eye protection',
          'Potassium iodide (KI) — supplies I⁻ ions; reactant whose concentration is varied',
          'Sulfuric acid (H₂SO₄) — provides H⁺; volume kept CONSTANT in all runs',
          'Sodium thiosulfate (Na₂S₂O₃) — constant, small, precisely known volume in all runs (e.g. 5 cm³ of 0.01 mol dm⁻³)',
          'Starch solution — indicator; turns blue-black when I₂ accumulates',
          'Distilled water — to keep total volume constant at e.g. 25 cm³ across all runs',
          'Measuring cylinders, graduated pipettes, beakers, stop clock'
        ]
      }
    },
    {
      id: 'h-cp9b-method',
      type: 'heading',
      data: { text: 'Method — Step by Step', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9b',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare a series of solutions with DIFFERENT volumes of KI(aq) — e.g. 10, 8, 6, 4, 2 cm³ — and top up each with distilled water to keep TOTAL VOLUME constant at 25 cm³ (critical for a fair test)',
          'Add the SAME small volume of Na₂S₂O₃ (e.g. 5 cm³) and several drops of starch to each beaker',
          'Add the SAME volume of H₂O₂ and H₂SO₄; START the stopwatch immediately',
          'Watch for the sudden blue-black colour change; STOP the clock and record time t',
          'Repeat for all KI concentrations; also prepare sets varying [H₂O₂] while keeping [KI] constant',
          'Calculate initial rate ≈ 1/t for each run',
          'Plot 1/t on y-axis vs [KI] on x-axis (or [H₂O₂]) to determine the order'
        ]
      },
      terms: []
    },
    {
      id: 'h-cp9b-graphs',
      type: 'heading',
      data: { text: 'Graph Shapes — Identifying Order from 1/t Plots', level: 3 },
      terms: []
    },
    {
      id: 'svg-cp9b-graphs',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 520 230' style='font-family:Arial,sans-serif;background:#fafafa;border-radius:8px'>
  <text x='130' y='16' font-size='13' font-weight='bold' fill='#1e3a5f' text-anchor='middle'>Graph Shapes: 1/t vs [Reactant]</text>
  <!-- ZERO ORDER panel -->
  <g transform='translate(10,25)'>
    <rect x='0' y='0' width='150' height='150' rx='6' fill='#f0fdf4' stroke='#16a34a' stroke-width='1.2'/>
    <text x='75' y='14' font-size='10' font-weight='bold' fill='#14532d' text-anchor='middle'>Zero Order</text>
    <!-- axes -->
    <line x1='18' y1='125' x2='18' y2='25' stroke='#374151' stroke-width='1.2'/>
    <line x1='18' y1='125' x2='138' y2='125' stroke='#374151' stroke-width='1.2'/>
    <text x='8' y='80' font-size='8' fill='#374151' text-anchor='middle' transform='rotate(-90,8,80)'>1/t (rate)</text>
    <text x='78' y='141' font-size='8' fill='#374151' text-anchor='middle'>[reactant]</text>
    <!-- flat horizontal line -->
    <line x1='22' y1='75' x2='134' y2='75' stroke='#16a34a' stroke-width='2'/>
    <text x='75' y='90' font-size='8' fill='#16a34a' text-anchor='middle'>flat line</text>
    <text x='75' y='100' font-size='8' fill='#374151' text-anchor='middle'>rate unaffected</text>
    <text x='75' y='110' font-size='8' fill='#374151' text-anchor='middle'>by concentration</text>
  </g>
  <!-- FIRST ORDER panel -->
  <g transform='translate(185,25)'>
    <rect x='0' y='0' width='150' height='150' rx='6' fill='#eff6ff' stroke='#2563eb' stroke-width='1.2'/>
    <text x='75' y='14' font-size='10' font-weight='bold' fill='#1e3a8a' text-anchor='middle'>First Order</text>
    <!-- axes -->
    <line x1='18' y1='125' x2='18' y2='25' stroke='#374151' stroke-width='1.2'/>
    <line x1='18' y1='125' x2='138' y2='125' stroke='#374151' stroke-width='1.2'/>
    <text x='8' y='80' font-size='8' fill='#374151' text-anchor='middle' transform='rotate(-90,8,80)'>1/t (rate)</text>
    <text x='78' y='141' font-size='8' fill='#374151' text-anchor='middle'>[reactant]</text>
    <!-- straight line through origin -->
    <line x1='22' y1='120' x2='134' y2='30' stroke='#2563eb' stroke-width='2'/>
    <text x='75' y='90' font-size='8' fill='#2563eb' text-anchor='middle'>straight line</text>
    <text x='75' y='100' font-size='8' fill='#374151' text-anchor='middle'>through origin</text>
    <text x='75' y='110' font-size='8' fill='#374151' text-anchor='middle'>doubling [c] → double rate</text>
  </g>
  <!-- SECOND ORDER panel -->
  <g transform='translate(360,25)'>
    <rect x='0' y='0' width='150' height='150' rx='6' fill='#fff7ed' stroke='#ea580c' stroke-width='1.2'/>
    <text x='75' y='14' font-size='10' font-weight='bold' fill='#9a3412' text-anchor='middle'>Second Order</text>
    <!-- axes -->
    <line x1='18' y1='125' x2='18' y2='25' stroke='#374151' stroke-width='1.2'/>
    <line x1='18' y1='125' x2='138' y2='125' stroke='#374151' stroke-width='1.2'/>
    <text x='8' y='80' font-size='8' fill='#374151' text-anchor='middle' transform='rotate(-90,8,80)'>1/t (rate)</text>
    <text x='78' y='141' font-size='8' fill='#374151' text-anchor='middle'>[reactant]</text>
    <!-- curve -->
    <path d='M 22 122 Q 60 105 90 70 Q 115 42 134 28' stroke='#ea580c' stroke-width='2' fill='none'/>
    <text x='75' y='95' font-size='8' fill='#ea580c' text-anchor='middle'>curve (quadratic)</text>
    <text x='75' y='105' font-size='8' fill='#374151' text-anchor='middle'>re-plot 1/t vs [c]²</text>
    <text x='75' y='115' font-size='8' fill='#374151' text-anchor='middle'>→ straight line</text>
  </g>
  <!-- label at bottom -->
  <text x='260' y='198' font-size='9' fill='#374151' text-anchor='middle'>Keep: Na₂S₂O₃ constant | total volume constant (25 cm³) | only 1 variable changes per series</text>
</svg>`,
        caption: '1/t vs [reactant] graph shapes: flat = zero order; straight line through origin = first order; curve = second order (re-plot vs [c]² to linearise).'
      }
    },
    {
      id: 'h-cp9b-key',
      type: 'heading',
      data: { text: 'Key Points & Common Errors', level: 3 },
      terms: []
    },
    {
      id: 'list-cp9b-key',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'CRITICAL: total volume must ALWAYS be 25 cm³ — use distilled water to compensate when KI volume decreases (e.g. 10 cm³ KI + 0 cm³ water, 8 cm³ KI + 2 cm³ water, etc.)',
          'Na₂S₂O₃ volume must be CONSTANT and SMALL — it is NOT a reactant being varied; it is the timer mechanism',
          'Starch must be present from the start — it reacts instantly when I₂ builds up',
          'Initial rate ≈ 1/t — this is only valid if the fixed amount of thiosulfate is small, so t reflects the initial reaction period',
          'Mixing order: add H₂O₂ last; start clock at the first drop of H₂O₂',
          'Error: not maintaining constant temperature — use temperature-controlled water bath for precision',
          'Error: reaction mixture not stirred — swirl or stir immediately on mixing to ensure homogeneity',
          'If graph is linear through origin: first order. Flat: zero order. Curved: second (try plotting vs [c]²)'
        ]
      }
    },
    // ── CORE PRACTICAL 10: ACTIVATION ENERGY ───────────────────────────────
    {
      id: 'h-cp10',
      type: 'heading',
      data: { text: 'Core Practical 10: Finding Activation Energy (Eₐ) — Arrhenius Method', level: 2 },
      terms: []
    },
    {
      id: 'p-cp10-arrhenius',
      type: 'paragraph',
      data: {
        text: '<strong>Arrhenius equation:</strong> k = A e<sup>−Eₐ/RT</sup><br/>Taking natural logarithm: <strong>ln k = −Eₐ/R × (1/T) + ln A</strong><br/>This is in the form y = mx + c, where y = ln k, x = 1/T, gradient m = −Eₐ/R<br/>So: <strong>Eₐ = −gradient × R</strong> (R = 8.314 J mol⁻¹ K⁻¹)'
      },
      terms: []
    },
    {
      id: 'h-cp10-reaction',
      type: 'heading',
      data: { text: 'Reaction & Principle', level: 3 },
      terms: []
    },
    {
      id: 'p-cp10',
      type: 'paragraph',
      data: {
        text: '<strong>Reaction used in CP10:</strong> Phenol (in H₂SO₄) reacts with an amine compound solution containing methyl red indicator (initially orange-red). When the reaction is complete, the methyl red colour DISAPPEARS (becomes colourless). Time to colour disappearance, t, is used to approximate the rate: rate ≈ 1/t.<br/><br/>By running the reaction at different temperatures and plotting ln(1/t) vs 1/T, the gradient gives −Eₐ/R.'
      },
      terms: []
    },
    {
      id: 'h-cp10-apparatus',
      type: 'heading',
      data: { text: 'Apparatus & Reagents', level: 3 },
      terms: []
    },
    {
      id: 'list-cp10-apparatus',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Phenol solution in dilute H₂SO₄ (fixed volume, e.g. 10 cm³)',
          'Amine/bromopropylamine blue solution (fixed volume, e.g. 10 cm³)',
          'Methyl red indicator (only a few drops — timing marker)',
          'Water bath (controlled temperature) + thermometer × 2',
          'Two boiling tubes or beakers (one for each solution)',
          'Stop clock',
          'Measuring cylinders or pipettes for precise volumes',
          'Safety: wear eye protection; phenol and H₂SO₄ are corrosive; avoid skin contact'
        ]
      }
    },
    {
      id: 'h-cp10-method',
      type: 'heading',
      data: { text: 'Method — Step by Step', level: 3 },
      terms: []
    },
    {
      id: 'list-cp10',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare two separate tubes: Tube A = phenol in H₂SO₄ with methyl red indicator; Tube B = amine (blue) solution',
          'Place BOTH tubes in the water bath set to the TARGET TEMPERATURE (e.g. 40°C)',
          'Leave both tubes in the water bath until both solutions reach EXACTLY the same temperature — use two thermometers to confirm (thermal equilibration)',
          'Quickly pour both solutions together into one tube; START the stopwatch',
          'Watch until the methyl red colour DISAPPEARS (endpoint of reaction); STOP the clock; record time t',
          'Repeat at 5–6 different temperatures (e.g. 30, 40, 50, 60, 70°C)',
          'Data processing: convert T(°C) → T(K) = T(°C) + 273; calculate 1/T for each; calculate ln(1/t) as a proxy for ln k',
          'Plot ln(1/t) [y-axis] vs 1/T [x-axis]; draw line of best fit',
          'Calculate gradient of the graph — the line should be NEGATIVE (higher T → faster reaction → 1/t larger → ln(1/t) larger; lower 1/T)',
          'Eₐ = −gradient × 8.314; if gradient given in K, result in J mol⁻¹; divide by 1000 to get kJ mol⁻¹'
        ]
      },
      terms: ['Arrhenius graph']
    },
    {
      id: 'callout-cp10-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Calculation: Eₐ from Gradient',
        text: 'From a graph of ln(1/t) vs 1/T, the gradient is calculated as:\n\n  gradient = rise/run = Δ ln(1/t) / Δ(1/T)\n\nExample: gradient = −5680 K\n(negative because ln k decreases as 1/T increases, i.e. slower reaction at lower temperature)\n\nStep 1 — Rearrange Arrhenius: Eₐ = −gradient × R\n  Eₐ = −(−5680) × 8.314\n  Eₐ = 5680 × 8.314\n  Eₐ = 47,223 J mol⁻¹\n\nStep 2 — Convert to kJ mol⁻¹:\n  Eₐ = 47,223 ÷ 1000 = 47.2 kJ mol⁻¹\n\nKey checks:\n  • Gradient must be NEGATIVE for Arrhenius graphs (correct physics)\n  • Units of 1/T are K⁻¹; gradient units are K (dimensionally consistent)\n  • R = 8.314 J mol⁻¹ K⁻¹ (always)'
      }
    },
    {
      id: 'svg-cp10-arrhenius',
      type: 'svg',
      data: {
        svg: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 230' style='font-family:Arial,sans-serif;background:#fff7ed;border-radius:8px'>
  <text x='210' y='18' font-size='13' font-weight='bold' fill='#7c2d12' text-anchor='middle'>Arrhenius Graph: ln k vs 1/T</text>
  <!-- Axes -->
  <line x1='60' y1='195' x2='60' y2='35' stroke='#374151' stroke-width='2'/>
  <line x1='60' y1='195' x2='390' y2='195' stroke='#374151' stroke-width='2'/>
  <!-- Y axis label -->
  <text x='14' y='115' font-size='11' fill='#374151' text-anchor='middle' transform='rotate(-90,14,115)'>ln k (or ln 1/t)</text>
  <!-- X axis label -->
  <text x='225' y='218' font-size='11' fill='#374151' text-anchor='middle'>1/T (K⁻¹)  →  increasing 1/T = decreasing T</text>
  <!-- Best fit line (negative gradient) -->
  <line x1='70' y1='55' x2='375' y2='185' stroke='#dc2626' stroke-width='2.5'/>
  <!-- Data points -->
  <circle cx='95' cy='67' r='4' fill='#1d4ed8'/>
  <circle cx='145' cy='87' r='4' fill='#1d4ed8'/>
  <circle cx='200' cy='108' r='4' fill='#1d4ed8'/>
  <circle cx='265' cy='135' r='4' fill='#1d4ed8'/>
  <circle cx='330' cy='163' r='4' fill='#1d4ed8'/>
  <!-- Gradient triangle -->
  <line x1='150' y1='88' x2='310' y2='88' stroke='#374151' stroke-width='1' stroke-dasharray='4,3'/>
  <line x1='310' y1='88' x2='310' y2='160' stroke='#374151' stroke-width='1' stroke-dasharray='4,3'/>
  <text x='222' y='83' font-size='9' fill='#374151' text-anchor='middle'>Δ(1/T) = run</text>
  <text x='345' y='128' font-size='9' fill='#374151'>Δ(ln k)</text>
  <text x='345' y='138' font-size='9' fill='#374151'>= rise</text>
  <!-- Gradient label -->
  <text x='115' y='145' font-size='10' fill='#dc2626' font-weight='bold'>gradient = −Eₐ/R</text>
  <text x='115' y='158' font-size='10' fill='#374151'>(always negative)</text>
  <text x='115' y='170' font-size='10' fill='#374151'>Eₐ = −gradient × 8.314</text>
</svg>`,
        caption: 'Arrhenius graph: ln k (or ln 1/t) on y-axis vs 1/T on x-axis. Negative gradient = −Eₐ/R. Higher temperature = larger 1/t (faster) = larger ln k = corresponds to smaller 1/T (towards left of x-axis).'
      }
    },
    {
      id: 'callout-cp10-alternative',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Alternative Version — "Disappearing Cross" (Na₂S₂O₃ + HCl)',
        text: 'Some exam questions reference the disappearing cross method:\n• Reaction: Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)\n• S(s) precipitate makes solution cloudy\n• Place conical flask over a piece of paper with a cross drawn on it\n• Time until the cross is no longer visible when viewed from above; t → rate = 1/t\n• Same data processing: ln(1/t) vs 1/T gives Arrhenius graph\n• Same calculation: gradient = −Eₐ/R → Eₐ = −gradient × 8.314\nThe phenol/methyl red and disappearing cross methods are interchangeable exam answers; the graphing and calculation procedure is identical.'
      }
    },
    {
      id: 'h-cp10-errors',
      type: 'heading',
      data: { text: 'Sources of Error & Improvements', level: 3 },
      terms: []
    },
    {
      id: 'list-cp10-errors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Error: both solutions NOT at the same temperature before mixing → one solution pre-heats the other → wrong temperature recorded',
          'Improvement: use two thermometers; only mix when both read the target T',
          'Error: subjective endpoint judgment (colour change not sharp) → repeat 3 times; take average t',
          'Error: human reaction time when starting/stopping clock → systematic error cannot be eliminated; multiple repeats reduce random error',
          'Error: temperature drops during reaction if water bath poorly controlled → use thermostatically controlled bath',
          'Error: concentration changes if solutions not made up accurately → use calibrated pipettes/burettes'
        ]
      }
    },
    // ── CHECKLIST ──────────────────────────────────────────────────────────
    {
      id: 'checklist-cps',
      type: 'checklist',
      data: {
        items: [
          { text: 'CP9a: Quench each sample with excess NaHCO₃ immediately after withdrawal — this neutralises H₂SO₄ catalyst and stops the reaction', checked: false },
          { text: 'CP9a: Record time when HALF of the 10 cm³ sample has entered the quench flask (i.e. at 5 cm³)', checked: false },
          { text: 'CP9a: Add starch ONLY when the titrate is PALE YELLOW (not at the start) — avoid starch binding to excess I₂', checked: false },
          { text: 'CP9a: Endpoint = blue-black → colourless (NOT yellow → colourless directly)', checked: false },
          { text: 'CP9a: [I₂] vs time graph gives a straight negative line → zero order w.r.t. iodine; rate = k[CH₃COCH₃][H⁺]', checked: false },
          { text: 'CP9a: I₂ is zero order because it is NOT in the rate-determining step — it reacts in a faster subsequent step', checked: false },
          { text: 'CP9b: Total volume ALWAYS constant (e.g. 25 cm³) — make up with distilled water when [KI] is reduced', checked: false },
          { text: 'CP9b: Na₂S₂O₃ volume is CONSTANT and SMALL — it is the clock mechanism, NOT the variable being changed', checked: false },
          { text: 'CP9b: Rate ≈ 1/t; the sudden blue-black colour appears when all thiosulfate is consumed', checked: false },
          { text: 'CP9b: 1/t vs [c] graph: flat = zero order; straight line through origin = first order; curve = second (re-plot vs [c]²)', checked: false },
          { text: 'CP10: Both solutions MUST equilibrate to the same temperature in the water bath BEFORE mixing', checked: false },
          { text: 'CP10: Stop the clock when the methyl red (or cross) colour DISAPPEARS', checked: false },
          { text: 'CP10: Convert T(°C) to T(K) before calculating 1/T — a very common error', checked: false },
          { text: 'CP10: Plot ln(1/t) on y-axis vs 1/T on x-axis; gradient is NEGATIVE', checked: false },
          { text: 'CP10: Eₐ = −gradient × 8.314 (J mol⁻¹); divide by 1000 for kJ mol⁻¹', checked: false }
        ]
      }
    }
  ],
  // ── RECALL CUES ────────────────────────────────────────────────────────
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-cp9a',
        prompt: 'In CP9a, at what exact moment should the time be recorded when transferring the sample into the quench flask?'
      },
      {
        id: 'cue-2',
        blockId: 'list-cp9a-results',
        prompt: 'CP9a gives a straight negative line for [I₂] vs time. What does this tell you about the order with respect to iodine — and why does iodine not appear in the rate equation?'
      },
      {
        id: 'cue-3',
        blockId: 'callout-cp9a-ppq-ef',
        prompt: 'In CP9a PPQ June 2018, a 10 cm³ sample was taken at t = 70 s and titrated. The titre was 18.5 cm³ of 0.01 mol dm⁻³ Na₂S₂O₃. Calculate [I₂] in the sample and the mean rate of change of [I₂].'
      },
      {
        id: 'cue-4',
        blockId: 'p-cp9b-reactions',
        prompt: 'In CP9b, what is the role of sodium thiosulfate, and why does the blue-black colour suddenly appear rather than appearing gradually?'
      },
      {
        id: 'cue-5',
        blockId: 'svg-cp9b-graphs',
        prompt: 'In CP9b, what does the graph of 1/t vs [KI] look like for first order, and how do you confirm second order from a curved graph?'
      },
      {
        id: 'cue-6',
        blockId: 'callout-cp10-worked',
        prompt: 'In CP10, the gradient of the ln(1/t) vs 1/T graph is −5680 K. Calculate the activation energy in kJ mol⁻¹. State what the gradient represents.'
      }
    ],
    summaryText: 'CP9a (continuous monitoring): sample every 5 min from large beaker → quench aliquot in NaHCO₃ (neutralises H₂SO₄ catalyst) → titrate with Na₂S₂O₃ using starch indicator → plot [I₂] vs time → straight line → zero order w.r.t. iodine → rate = k[propanone][H⁺]. CP9b (initial rates): iodine clock uses fixed small Na₂S₂O₃ as a chemical timer → I₂ trapped until all thiosulfate consumed → sudden blue-black with starch → rate = 1/t → vary [KI] and [H₂O₂] in separate series; total volume CONSTANT (use distilled water); graph shapes identify order. CP10 (Eₐ): phenol + amine/methyl red; equilibrate both solutions at target T before mixing; time to colour disappearance = t; plot ln(1/t) vs 1/T; gradient = −Eₐ/R → Eₐ = −gradient × 8.314.',
    ready: false
  },
  evidence: []
};
