export const note_chemistry_4_14_6 = {
  blocks: [
    {
      id: 'obj-titration',
      type: 'objective',
      data: {
        text: 'Understand titration curves for different acid-base combinations; identify equivalence point and steep region; select appropriate indicators; interpret pKind and half-equivalence point'
      }
    },
    {
      id: 'h-titration-intro',
      type: 'heading',
      data: { text: 'Titration Curves: Overview', level: 2 }
    },
    {
      id: 'p-titration-intro',
      type: 'paragraph',
      data: {
        text: 'A titration curve plots pH against the volume of titrant (acid or base) added during a titration. The shape depends on whether strong or weak acids/bases are involved. Key features are: initial pH, the buffer region, the steep region, and the equivalence point. Curves allow us to choose the correct indicator and determine pKa values.'
      }
    },
    {
      id: 'callout-endpoint-equiv',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Equivalence Point vs End Point vs Neutral Point',
        text: '• <strong>Equivalence point:</strong> the point where acid and base have reacted in the exact stoichiometric ratio. This is a theoretical point.\n• <strong>End point:</strong> the point where the indicator changes colour. This is what we observe experimentally, occurring just after the equivalence point.\n• <strong>Neutral point (pH 7):</strong> this is rarely the same as the equivalence point! It is only the same when a strong acid reacts with a strong base.'
      }
    },
    {
      id: 'tbl-equiv-summary',
      type: 'comparisonTable',
      data: {
        headers: ['Acid–Base Combination', 'Equivalence Point pH', 'Reason'],
        rows: [
          ['Strong acid + Strong base', 'pH = 7', 'Salt (e.g., NaCl) does not hydrolyse — neutral solution'],
          ['Weak acid + Strong base', 'pH > 7', 'Salt contains weak conjugate base — hydrolyses to give OH⁻'],
          ['Strong acid + Weak base', 'pH < 7', 'Salt contains weak conjugate acid — hydrolyses to give H⁺'],
          ['Weak acid + Weak base', 'No sharp change', 'Both partially dissociate — no clear equivalence point on graph']
        ],
        caption: 'Equivalence point pH depends on the relative strength of the acid and base used'
      }
    },
    {
      id: 'h-strong-strong',
      type: 'heading',
      data: { text: 'Strong Acid + Strong Base: HCl / NaOH', level: 2 }
    },
    {
      id: 'list-strong-strong',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Setup:</strong> acid (HCl) is added to base (NaOH) — start in the flask with NaOH, so initial pH ≈ 14',
          '<strong>As HCl is added:</strong> pH falls slowly at first, then drops steeply near the equivalence point',
          '<strong>Example:</strong> at 24.9 cm³ pH ≈ 11.3; at 25.1 cm³ pH ≈ 2.7 — adding just 0.2 cm³ causes huge change',
          '<strong>Equivalence point:</strong> pH = 7 (NaCl salt does not hydrolyse)',
          '<strong>After equivalence:</strong> excess HCl brings pH close to 0',
          '<strong>Indicators:</strong> any indicator with pH range in the steep region works — both <em>methyl orange</em> (pH 2.7–4.7) and <em>phenolphthalein</em> (pH 8.3–10.0) are suitable as both fall in the sharp drop region'
        ]
      }
    },
    {
      id: 'svg-strong-strong-curve',
      type: 'svg',
      data: {
        svg: '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis{stroke:black;stroke-width:2}.tick{stroke:black;stroke-width:1}.label{font-size:12px;font-family:Arial}</style></defs><line class="axis" x1="50" y1="250" x2="380" y2="250"/><line class="axis" x1="50" y1="20" x2="50" y2="250"/><text class="label" x="190" y="280">Volume of NaOH added (mL)</text><text class="label" x="10" y="135">pH</text><line x1="45" y1="50" x2="50" y2="50"/><text class="label" x="30" y="55">14</text><line x1="45" y1="150" x2="50" y2="150"/><text class="label" x="35" y="155">7</text><line x1="45" y1="250" x2="50" y2="250"/><text class="label" x="35" y="255">0</text><polyline points="60,245 100,240 140,230 180,200 220,150 240,100 260,50 300,30 340,25" style="fill:none;stroke:blue;stroke-width:2"/><circle cx="220" cy="150" r="3" fill="red"/><text class="label" x="220" y="170" text-anchor="middle">Equivalence (pH=7)</text></svg>',
        caption: 'Strong acid (HCl) titrated with strong base (NaOH): equivalence point at pH 7'
      }
    },
    {
      id: 'h-weak-strong',
      type: 'heading',
      data: { text: 'Weak Acid + Strong Base: CH₃COOH / NaOH', level: 2 }
    },
    {
      id: 'list-weak-strong',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Setup:</strong> acid (CH₃COOH) is added to base (NaOH) in the flask — initial pH ≈ 14',
          '<strong>Buffer region:</strong> as acid is added before equivalence point, a mixture of CH₃COOH + CH₃COO⁻ forms → acts as a buffer — pH rises gradually',
          '<strong>Half-equivalence point:</strong> pH = pKa of the weak acid (when exactly half the acid has been neutralised)',
          '<strong>Equivalence point:</strong> pH > 7 (typically 8–9) because CH₃COO⁻ (conjugate base) hydrolyses to give OH⁻',
          '<strong>After equivalence:</strong> excess acid added past equivalence creates acid/salt mixture continuing the buffer curve',
          '<strong>Suitable indicator:</strong> phenolphthalein only — its range (pH 8.3–10.0) falls in the steep region. Methyl orange (pH 2.7–4.7) changes colour far below the steep section → NOT suitable'
        ]
      }
    },
    {
      id: 'svg-weak-strong-curve',
      type: 'svg',
      data: {
        svg: '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis{stroke:black;stroke-width:2}.tick{stroke:black;stroke-width:1}.label{font-size:12px;font-family:Arial}</style></defs><line class="axis" x1="50" y1="250" x2="380" y2="250"/><line class="axis" x1="50" y1="20" x2="50" y2="250"/><text class="label" x="190" y="280">Volume of NaOH added (mL)</text><text class="label" x="10" y="135">pH</text><line x1="45" y1="50" x2="50" y2="50"/><text class="label" x="30" y="55">14</text><line x1="45" y1="150" x2="50" y2="150"/><text class="label" x="35" y="155">7</text><line x1="45" y1="250" x2="50" y2="250"/><text class="label" x="35" y="255">0</text><polyline points="60,220 100,200 140,175 180,130 220,100 240,70 260,40 300,25 340,22" style="fill:none;stroke:green;stroke-width:2"/><circle cx="220" cy="100" r="3" fill="red"/><text class="label" x="220" y="120" text-anchor="middle">Equivalence (pH≈9)</text><circle cx="110" cy="180" r="3" fill="orange"/><text class="label" x="110" y="160" text-anchor="middle">Half-equiv (pH=pKa)</text></svg>',
        caption: 'Weak acid (CH₃COOH) titrated with strong base (NaOH): equivalence point at pH > 7, half-equivalence at pH = pKa'
      }
    },
    {
      id: 'h-strong-weak',
      type: 'heading',
      data: { text: 'Strong Acid + Weak Base: HCl / Aqueous Ammonia', level: 2 }
    },
    {
      id: 'list-strong-weak',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Setup:</strong> NH₃ (weak base) is in the flask — initial pH ≈ 11',
          '<strong>When HCl is first added:</strong> pH drops sharply at first, then levels out into a buffer region (NH₃ + NH₄Cl buffer)',
          '<strong>Buffer region:</strong> a mixture of NH₃ and NH₄⁺ acts as a buffer — pH changes only slowly across a wide range of HCl added',
          '<strong>Near equivalence:</strong> another sharp drop in pH',
          '<strong>Equivalence point:</strong> pH < 7 (typically 5–6) because NH₄⁺ (conjugate acid) hydrolyses to give H⁺',
          '<strong>After equivalence:</strong> excess HCl brings pH close to 0',
          '<strong>Suitable indicator:</strong> methyl orange only — its range (pH 2.7–4.7) falls in the steep section. Phenolphthalein (pH 8.3–10.0) changes colour far above the steep section → NOT suitable'
        ]
      }
    },
    {
      id: 'svg-strong-weak-curve',
      type: 'svg',
      data: {
        svg: '<svg width="420" height="310" xmlns="http://www.w3.org/2000/svg"><defs><style>.ax{stroke:#333;stroke-width:2;fill:none}.lbl{font-size:11px;font-family:Arial;fill:#333}.curve{fill:none;stroke:#e07b00;stroke-width:2.5}.buf{stroke:#aaa;stroke-width:1;stroke-dasharray:4,3}</style></defs><rect width="420" height="310" fill="#0f172a"/><line class="ax" x1="55" y1="270" x2="400" y2="270"/><line class="ax" x1="55" y1="20" x2="55" y2="270"/><text class="lbl" x="190" y="295">Volume of HCl added (cm³)</text><text class="lbl" x="12" y="150" transform="rotate(-90,12,150)">pH</text><text class="lbl" x="38" y="32">13</text><line x1="50" y1="30" x2="55" y2="30"/><text class="lbl" x="38" y="100">9</text><line x1="50" y1="97" x2="55" y2="97"/><text class="lbl" x="38" y="155">7</text><line x1="50" y1="152" x2="55" y2="152"/><text class="lbl" x="38" y="205">5</text><line x1="50" y1="202" x2="55" y2="202"/><text class="lbl" x="38" y="270">1</text><line x1="50" y1="268" x2="55" y2="268"/><text class="lbl" x="68" y="285">0</text><text class="lbl" x="188" y="285">25</text><text class="lbl" x="308" y="285">50</text><polyline class="curve" points="60,42 80,58 100,80 120,100 140,110 160,115 180,120 200,122 220,125 230,130 240,175 250,225 260,248 280,258 300,262 320,264 350,265 380,266"/><line class="buf" x1="90" y1="20" x2="90" y2="270"/><line class="buf" x1="240" y1="20" x2="240" y2="270"/><text class="lbl" x="95" y="85" fill="#888">Buffer region</text><text class="lbl" x="95" y="98" fill="#888">(NH₃/NH₄⁺)</text><circle cx="240" cy="202" r="4" fill="red"/><text class="lbl" x="242" y="196" fill="red">Equiv. pt (pH≈5–6)</text></svg>',
        caption: 'Strong acid (HCl) added to weak base (NH₃): buffer region before equivalence, equivalence point pH 5–6'
      }
    },
    {
      id: 'h-weak-weak',
      type: 'heading',
      data: { text: 'Weak Acid + Weak Base: CH₃COOH / Aqueous Ammonia', level: 2 }
    },
    {
      id: 'list-weak-weak',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'There is <strong>no sharp change</strong> in pH — the curve rises gradually throughout without a steep section',
          'It is impossible to precisely identify the equivalence point from the graph',
          '<strong>Indicators cannot be used</strong> — no indicator pH range can fall within a steep section that does not exist',
          'The pH of the equivalence point depends on the relative Ka and Kb values',
          '<strong>Alternative methods</strong> needed: temperature change (calorimetry) or electrical conductivity — these are not required at A-level but explain why the method fails'
        ]
      }
    },
    {
      id: 'svg-weak-weak-curve',
      type: 'svg',
      data: {
        svg: '<svg width="420" height="310" xmlns="http://www.w3.org/2000/svg"><defs><style>.ax{stroke:#333;stroke-width:2;fill:none}.lbl{font-size:11px;font-family:Arial;fill:#333}.curve{fill:none;stroke:#9c27b0;stroke-width:2.5}</style></defs><rect width="420" height="310" fill="#0f172a"/><line class="ax" x1="55" y1="270" x2="400" y2="270"/><line class="ax" x1="55" y1="20" x2="55" y2="270"/><text class="lbl" x="190" y="295">Volume of acid added (cm³)</text><text class="lbl" x="12" y="150" transform="rotate(-90,12,150)">pH</text><text class="lbl" x="38" y="32">14</text><line x1="50" y1="30" x2="55" y2="30"/><text class="lbl" x="38" y="100">9</text><line x1="50" y1="97" x2="55" y2="97"/><text class="lbl" x="38" y="155">7</text><line x1="50" y1="152" x2="55" y2="152"/><text class="lbl" x="38" y="205">5</text><line x1="50" y1="202" x2="55" y2="202"/><text class="lbl" x="38" y="270">3</text><line x1="50" y1="268" x2="55" y2="268"/><polyline class="curve" points="60,35 90,55 120,80 150,105 180,130 210,152 240,170 270,188 300,205 330,220 360,233 390,243"/><text class="lbl" x="90" y="180" fill="#9c27b0">No steep section —</text><text class="lbl" x="90" y="195" fill="#9c27b0">equivalence point</text><text class="lbl" x="90" y="210" fill="#9c27b0">cannot be determined</text></svg>',
        caption: 'Weak acid + weak base: gradual pH change, no steep section — indicators cannot be used'
      }
    },
    {
      id: 'callout-weak-weak-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 Exam Tip: Weak Acid + Weak Base',
        text: 'In an exam you will NEVER be asked to determine the equivalence point of a weak acid / weak base titration. However, you could be asked WHY it is impossible. The answer is: there is an absence of a sharp/steep decrease in the pH curve, so the equivalence point cannot be pinpointed. No single indicator can be used because none of their pH ranges fall within a steep section.'
      }
    },
    {
      id: 'h-indicators',
      type: 'heading',
      data: { text: 'Indicators: Mechanism and Choice', level: 2 }
    },
    {
      id: 'list-indicator-mechanism',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'An indicator (HIn) is itself a weak acid: <strong>HIn ⇌ H⁺ + In⁻</strong>',
          'HIn and In⁻ must have <strong>different colours</strong> — otherwise it cannot function as an indicator',
          '<strong>In acid (high [H⁺]):</strong> equilibrium shifts LEFT → HIn predominates → colour of the acid form (e.g., red for methyl orange)',
          '<strong>In alkali (low [H⁺]):</strong> equilibrium shifts RIGHT → In⁻ predominates → colour of the conjugate base form (e.g., yellow for methyl orange)',
          '<strong>At equal concentrations</strong> [HIn] = [In⁻]: intermediate colour (e.g., orange for methyl orange) — this is the colour change point',
          'The pH at the colour change = pKind (defined by K<sub>in</sub> = [H⁺][In⁻]/[HIn] → when [HIn]=[In⁻], [H⁺] = K<sub>in</sub>)',
          '<strong>The pH range</strong> of an indicator spans approximately ±1 from pKind (roughly pKind − 1 to pKind + 1), derived when one form is 10× the other'
        ]
      }
    },
    {
      id: 'callout-methyl-orange-range',
      type: 'callout',
      data: {
        style: 'worked',
        title: '✏️ Worked: Deriving the pH Range of Methyl Orange (K<sub>in</sub> = 2.00 × 10⁻⁴)',
        text: 'Colour change mid-point: [HIn] = [In⁻] → [H⁺] = K<sub>in</sub> = 2.00 × 10⁻⁴ → pH = −log(2.00 × 10⁻⁴) = 3.70\n\nRed end (acid predominates, [HIn] = 10[In⁻]):\nK<sub>in</sub> = [H⁺] × [In⁻] / (10[In⁻]) = [H⁺]/10\n→ [H⁺] = 10 × K<sub>in</sub> = 10 × 2.00 × 10⁻⁴ = 2.00 × 10⁻³\n→ pH = 2.70 (red colour predominates below this)\n\nYellow end (base predominates, [In⁻] = 10[HIn]):\n[H⁺] = K<sub>in</sub>/10 = 2.00 × 10⁻⁵ → pH = 4.70 (yellow colour above this)\n\nResult: Methyl orange pH range = 2.70 to 4.70'
      }
    },
    {
      id: 'p-indicators-rule',
      type: 'paragraph',
      data: {
        text: 'A good indicator shows a complete colour change upon the addition of just ONE drop near the equivalence point. For this, the minimum pH change across the steep region must be at least as wide as the indicator\'s pH range. The indicator\'s range MUST fall entirely within the steep section of the titration curve.'
      }
    },
    {
      id: 'tbl-indicators',
      type: 'comparisonTable',
      data: {
        headers: ['Indicator', 'pH Range', 'Colour Change', 'Suitable For'],
        rows: [
          ['Methyl orange', '3.1–4.4', 'Red → Yellow', 'Strong acid + strong base; Strong acid + weak base'],
          ['Methyl red', '4.4–6.2', 'Red → Yellow', 'Strong acid + strong base; Strong acid + weak base'],
          ['Litmus', '5.0–8.0', 'Red → Blue', 'General acid-alkali testing (range is too wide/gradual for accurate titrations)'],
          ['Phenolphthalein', '8.3–10.0', 'Colourless → Pink', 'Weak acid + strong base; Strong acid + strong base'],
          ['Universal indicator', 'Full range', 'Multiple colours', 'NEVER suitable for titrations — range too wide']
        ],
        caption: 'Indicator pH ranges — values found in data booklet; choose based on titration type'
      }
    },
    {
      id: 'callout-endpoint-detection',
      type: 'callout',
      data: {
        style: 'tip',
        title: '💬 Practical Tip: Spotting the End Point',
        text: 'Because indicator color changes happen over a range, you rarely look for the exact "50/50" midpoint.\n\n• <strong>Phenolphthalein:</strong> The 50/50 mix is just a paler pink, which is very hard to detect consistently. Instead, titrate to the <em>very first permanent trace of pink</em> (when adding alkali) or until it <em>just goes completely colourless</em> (when adding acid), which happens around pH 8.3.\n• <strong>Methyl orange:</strong> Titrate until the <em>very first trace of orange</em> appears in the solution (usually around pH 4).'
      }
    },
    {
      id: 'tbl-indicator-choice',
      type: 'comparisonTable',
      data: {
        headers: ['Titration Type', 'Equiv. pH', 'Methyl Orange', 'Phenolphthalein'],
        rows: [
          ['Strong acid + Strong base', '= 7', '✓ Suitable (steep region covers its range)', '✓ Suitable'],
          ['Weak acid + Strong base', '> 7 (8–9)', '✗ NOT suitable (range below steep region)', '✓ Suitable'],
          ['Strong acid + Weak base', '< 7 (5–6)', '✓ Suitable', '✗ NOT suitable (range above steep region)'],
          ['Weak acid + Weak base', 'Varies', '✗ NOT suitable', '✗ NOT suitable — no steep section exists']
        ],
        caption: 'Indicator suitability depends on whether its pH range falls in the steep region'
      }
    },
    {
      id: 'ex-indicator-choice',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Indicator Selection',
        text: 'Titrating acetic acid (weak) with NaOH (strong): equivalence point at pH ≈ 9. The steep region spans roughly pH 8–10. Phenolphthalein (pKind 8.3, range 8.3–10.0) is perfect because its colour change overlaps the steep region. Methyl orange (range 3.1–4.4) would NOT work because it changes colour far below the steep region.'
      }
    },
    {
      id: 'h-half-equivalence',
      type: 'heading',
      data: { text: 'Half-Equivalence Point and Determining pKa', level: 2 }
    },
    {
      id: 'list-half-equiv',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Half-equivalence point</strong> = the volume at exactly half of the equivalence point volume',
          'At this point: [HA] = [A⁻] (equal concentrations of acid and conjugate base)',
          'Substituting into Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = <strong>pKa + 0 = pKa</strong>',
          'To find Ka from a titration curve: (1) find equivalence point volume V<sub>eq</sub>, (2) read pH at V<sub>eq</sub>/2 — this pH = pKa, (3) Ka = 10<sup>−pKa</sup>',
          '<strong>Example:</strong> equivalence point at 25 cm³ → half-equivalence at 12.5 cm³ → pH at 12.5 cm³ = 4.8 → pKa = 4.8 → Ka = 10⁻⁴·⁸ = 1.58 × 10⁻⁵'
        ]
      }
    },
    {
      id: 'h-diprotic',
      type: 'heading',
      data: { text: 'pH Curves of Diprotic Acids', level: 2 }
    },
    {
      id: 'list-diprotic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A <strong>diprotic acid</strong> (e.g., H₂SO₄, H₂CO₃) can donate <strong>two protons</strong> in two separate dissociation steps',
          'This produces <strong>two equivalence points</strong> on the titration curve',
          '<strong>First equivalence point</strong> = from the 1st dissociation (HA⁻ formed)',
          '<strong>Second equivalence point</strong> = from both dissociations combined (A²⁻ formed)',
          '<strong>Key relationship:</strong> Volume at 2nd equivalence point = exactly 2× the volume at the 1st equivalence point',
          'There are also two buffer regions and (for weak diprotic acids) two half-equivalence points'
        ]
      }
    },
    {
      id: 'svg-diprotic',
      type: 'svg',
      data: {
        svg: '<svg width="420" height="310" xmlns="http://www.w3.org/2000/svg"><defs><style>.ax{stroke:#333;stroke-width:2;fill:none}.lbl{font-size:11px;font-family:Arial;fill:#333}.curve{fill:none;stroke:#1565c0;stroke-width:2.5}.ev{stroke-dasharray:4,3;stroke:#c00;stroke-width:1}</style></defs><rect width="420" height="310" fill="#0f172a"/><line class="ax" x1="55" y1="270" x2="400" y2="270"/><line class="ax" x1="55" y1="20" x2="55" y2="270"/><text class="lbl" x="190" y="298">Volume of NaOH added (cm³)</text><text class="lbl" x="12" y="150" transform="rotate(-90,12,150)">pH</text><text class="lbl" x="38" y="32">14</text><line x1="50" y1="30" x2="55" y2="30"/><text class="lbl" x="38" y="155">7</text><line x1="50" y1="152" x2="55" y2="152"/><text class="lbl" x="38" y="270">1</text><line x1="50" y1="268" x2="55" y2="268"/><polyline class="curve" points="60,240 85,228 110,210 130,185 145,160 155,140 165,120 175,108 185,105 200,110 215,120 225,135 235,155 245,185 255,215 265,238 285,252 310,258 335,261 360,263"/><line class="ev" x1="160" y1="20" x2="160" y2="270"/><line class="ev" x1="260" y1="20" x2="260" y2="270"/><text class="lbl" x="140" y="285" fill="#c00">1st equiv.</text><text class="lbl" x="242" y="285" fill="#c00">2nd equiv.</text><text class="lbl" x="248" y="300" fill="#c00">(= 2× 1st)</text><text class="lbl" x="100" y="195" fill="#555">Buffer 1</text><text class="lbl" x="280" y="245" fill="#555">Buffer 2</text></svg>',
        caption: 'Diprotic acid titration: two equivalence points; 2nd volume = 2× 1st volume'
      }
    },
    {
      id: 'h-buffer-in-curves',
      type: 'heading',
      data: { text: 'Buffer Regions in Titration Curves', level: 2 }
    },
    {
      id: 'list-buffer-in-curves',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'In any titration involving a <strong>weak acid or weak base</strong>, a buffer region appears <em>before</em> the equivalence point',
          'In the buffer region, pH changes only gradually despite adding a significant volume of titrant',
          'The buffer region forms because a mixture of the weak acid and its conjugate base (or weak base and conjugate acid) exists in solution',
          'The flat plateau of the buffer region is centred at the <strong>half-equivalence point</strong> where pH = pKa',
          '<strong>Why the plateau is flat:</strong> [HA]/[A⁻] ratio stays roughly constant as long as both are in excess → [H⁺] = Ka × ([HA]/[A⁻]) stays roughly constant',
          'Strong acid + strong base has <strong>no buffer region</strong> — both fully dissociate with no reservoir to resist pH change'
        ]
      }
    },
    {
      id: 'h-complex-titrations',
      type: 'heading',
      data: { text: 'More Complicated Titration Curves', level: 2 }
    },
    {
      id: 'list-carbonate-titration',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Sodium carbonate with HCl:</strong> Involves a basic salt reacting with a strong acid in two stages.',
          '<strong>Stage 1:</strong> CO₃²⁻ + H⁺ → HCO₃⁻. The equivalence point is around pH 8.3. <strong>Phenolphthalein</strong> changes from pink to colourless at this exact point.',
          '<strong>Stage 2:</strong> HCO₃⁻ + H⁺ → CO₂ + H₂O. The equivalence point is around pH 3.7. <strong>Methyl orange</strong> changes from yellow to red at this point.',
          'If you use <strong>methyl orange from the start</strong>, you miss the first stage and only see the final complete neutralisation.',
          'If you use <strong>phenolphthalein</strong>, you only see the first stage completed.'
        ]
      }
    },
    {
      id: 'callout-polyprotic-pka',
      type: 'callout',
      data: {
        style: 'warning',
        title: '⚠️ Warning: Resolving Successive Equivalences',
        text: 'In diprotic acids like ethanedioic acid, the two pKₐ values are distinct enough (pKₐ₁ = 1.25, pKₐ₂ = 4.28) that two separate equivalence points can confidently be seen on a graph. For sulfuric acid, the first dissociation is strong (completely dissociated) and the second is weak (pKₐ ≈ 1.9), which means the curve usually appears with just one single large equivalence drop (reflecting both protons released) unless observed under very specific lab conditions.'
      }
    },
    {
      id: 'h-indicator-theory-uv',
      type: 'heading',
      data: { text: 'Why Indicators Change Colour: Conjugation Theory', level: 2 }
    },
    {
      id: 'p-indicator-conjugation',
      type: 'paragraph',
      data: {
        text: 'The colour of an indicator depends on exactly which wavelengths of light it absorbs in the visible spectrum. This absorption is driven by <strong>electronic transitions</strong> — usually starting from a π bonding orbital (or non-bonding n orbital) and jumping up to a π* anti-bonding orbital. The energy gap between these energy levels determines the wavelength of light absorbed (ΔE = hν = hc/λ).'
      }
    },
    {
      id: 'callout-methyl-orange-theory',
      type: 'callout',
      data: {
        style: 'key',
        title: '💡 Conjugation in Methyl Orange',
        text: 'In indicators like <strong>methyl orange</strong>, the entire molecule contains an extended system of delocalised electrons (a <strong>chromophore</strong>). When you add an acid, a hydrogen ion attaches to the structure. This structurally modifies the delocalised system, causing a noticeable change in the HOMO-LUMO energy gap. Because the gap changes, the molecule absorbs a different wavelength of visible light. Thus, picking up or losing a proton shifts the structural conjugation, manifesting macroscopically as a colour change.'
      }
    },
    {
      id: 'checklist-titration',
      type: 'checklist',
      data: {
        items: [
          { text: 'Can distinguish end point from equivalence point', checked: false },
          { text: 'Can describe and sketch all 4 types of titration curves (strong/strong, weak/strong, strong/weak, weak/weak)', checked: false },
          { text: 'Understand why weak+weak shows no steep section and indicators cannot be used', checked: false },
          { text: 'Understand indicator mechanism (HIn ⇌ H⁺ + In⁻) and how to derive pH range from Kin', checked: false },
          { text: 'Can select appropriate indicators (methyl orange vs phenolphthalein) for different titrations', checked: false },
          { text: 'Understand the half-equivalence point: pH = pKa, and can find Ka from a titration curve', checked: false },
          { text: 'Know that diprotic acids give two equivalence points; 2nd volume = 2× 1st volume', checked: false },
          { text: 'Can identify and explain the buffer region in titration curves involving weak acids/bases', checked: false },
          { text: 'Understand that indicator colour changes are fundamentally caused by structural changes to a delocalised π electron system, shifting the absorption wavelength', checked: false }
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
        text: 'Understand: Titration curves show pH vs volume of titrant. The steep region around the equivalence point determines appropriate indicator choice — the indicator\'s pKind must lie within this range.\n\nApply: Sketch the titration curve for weak acid + strong base. Identify the equivalence point pH and explain why it is above 7.\n\nAnalyze: Why is methyl orange unsuitable for weak acid/strong base titrations but phenolphthalein works? Furthermore, relate the observed colour change physically to changes in the molecule\'s extended conjugated system.\n\nEvaluate: A diprotic acid like H₂SO₄ shows two equivalence points. How does this affect indicator choice?'
      },
      terms: []
    },
    {
      id: 'summary-titration',
      type: 'summary',
      data: {
        text: 'End point ≠ equivalence point. Strong+strong: equiv pH = 7, any indicator. Weak acid+strong base: equiv pH > 7 (8–9), phenolphthalein only. Strong acid+weak base: equiv pH < 7 (5–6), methyl orange only. Weak+weak: no steep section, no indicator. Indicators work via HIn ⇌ H⁺ + In⁻; range ≈ pKind ± 1. Half-equivalence: pH = pKa. Diprotic: 2 equivalence points; 2nd = 2× 1st.'
      }
    },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'key',
        title: "Equivalence \u2260 pH 7 (Except Strong+Strong)",
        text: "Strong acid + strong base \u2192 equivalence at pH 7. Weak acid + strong base \u2192 equivalence at pH > 7 (salt is weak base). Strong acid + weak base \u2192 equivalence at pH < 7 (salt is weak acid). Weak+weak \u2192 NO sharp equivalence point. Exams test selection of wrong indicator."
      }
    },
    {
      id: 'callout-tip-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Indicator Selection: Match to Steep Region",
        text: "For weak acid + strong base (equivalence ~pH 9), use phenolphthalein (pH 8.3\u201310.0), NOT methyl orange (pH 2.7\u20134.7). Methyl orange changes colour way below the steep section where it's useless. Students pick indicators by name, not pH range \u2014 leading mistake."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'callout-endpoint-equiv',
        prompt: 'What is the difference between the end point and the equivalence point in a titration?'
      },
      {
        id: 'cue-2',
        blockId: 'tbl-equiv-summary',
        prompt: 'State the equivalence point pH for each of the four acid-base combinations and explain why.'
      },
      {
        id: 'cue-3',
        blockId: 'list-indicator-mechanism',
        prompt: 'Explain how an acid-base indicator works using the equilibrium HIn ⇌ H⁺ + In⁻.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-indicator-choice',
        prompt: 'Which indicator(s) are suitable for: (a) strong acid + strong base, (b) weak acid + strong base, (c) strong acid + weak base?'
      },
      {
        id: 'cue-5',
        blockId: 'list-half-equiv',
        prompt: 'How can you determine pKa of a weak acid from a titration curve? What is the half-equivalence point?'
      },
      {
        id: 'cue-6',
        blockId: 'list-diprotic',
        prompt: 'How does a diprotic acid titration curve differ from a monoprotic acid? How are the two equivalence point volumes related?'
      },
      {
        id: 'cue-7',
        blockId: 'list-carbonate-titration',
        prompt: 'In a titration of sodium carbonate with HCl, why are there two equivalence points, and which indicators are used for each stage?'
      },
      {
        id: 'cue-8',
        blockId: 'callout-methyl-orange-theory',
        prompt: 'In terms of bonding and delocalised electrons, explain why an indicator like methyl orange changes colour when it gains or loses a proton.'
      }
    ],
    summaryText: 'Equivalence point (stoichiometric) ≠ End point (colour change) ≠ Neutral point (pH 7). Strong+strong: equiv pH=7. Weak acid+strong base: equiv pH>7, phenolphthalein. Strong acid+weak base: equiv pH<7, methyl orange. Weak+weak: no steep section, no indicator. HIn ⇌ H⁺ + In⁻ — range ≈ pKind ± 1. Colour changes are caused by structural changes to the conjugated delocalised electron system (chromophore) when a proton is added/removed, shifting the energy gap and λ_{max}. Half-equiv: [HA]=[A⁻], pH = pKa. Diprotic/Carbonates: 2 equivalences, 2nd volume = 2× 1st volume.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Titration Curves and Indicator Selection',
      detail: 'Shape depends on acid-base types; equivalence point pH varies. Includes physical origin of colour via structure and conjugation.',
      year: '2023',
      source: 'A-Level Chemistry Specification (WCH14)',
      tags: ['titration', 'titration curve', 'indicators', 'pKind', 'equivalence point', 'chromophore', 'conjugation']
    }
  ]
};
