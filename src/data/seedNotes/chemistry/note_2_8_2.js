/**
 * Seed note: Chemistry · Unit 2 · Topic 8 · Subtopic 2
 * "Writing Ionic Equations for Redox Reactions & Disproportionation"
 * Source: Pearson Edexcel IAL Chemistry — Sections 8A.1, 8A.5
 * Enhanced: full half-equation writing method, 3 worked examples (Cl₂/Fe²⁺, MnO₄⁻/H₂O₂, Cr₂O₇²⁻/ethanol), combining steps, disproportionation, balancing by oxidation numbers.
 */
export const note_chemistry_2_8_2 = {
    blocks: [

        // ── Objective ─────────────────────────────────────────────────────────
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Write electron half-equations for oxidation and reduction processes; combine half-equations to produce full ionic equations; understand disproportionation as simultaneous oxidation and reduction of the same element.' },
            terms: []
        },

        // ── What is a Half-Equation? ──────────────────────────────────────────
        {
            id: 'h-half',
            type: 'heading',
            data: { text: 'Electron Half-Equations', level: 2 },
            terms: []
        },
        {
            id: 'list-half-def',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'A <strong>half-equation</strong> (also called electron-half-equation, ionic-half-equation, or half-reaction) shows either the oxidation <em>or</em> the reduction part of a redox reaction on its own.',
                    'Any redox reaction is made up of <strong>two half-reactions</strong>: one showing electron loss (oxidation), one showing electron gain (reduction).',
                    '<strong>Oxidation half-equation</strong>: electrons appear on the <em>right</em> (they are lost by the species). e.g. Mg → Mg²⁺ + 2e⁻',
                    '<strong>Reduction half-equation</strong>: electrons appear on the <em>left</em> (they are gained by the species). e.g. Cu²⁺ + 2e⁻ → Cu'
                ]
            },
            terms: ['Half-equation']
        },

        // ── What Can Be Added ────────────────────────────────────────────────
        {
            id: 'callout-rules',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: What Can You Add to a Half-Equation?',
                text: 'To balance a half-equation you may <strong>only</strong> add:<br/>' +
                    '• <strong>Electrons (e⁻)</strong> — to balance overall charge<br/>' +
                    '• <strong>Water (H₂O)</strong> — to balance oxygen atoms<br/>' +
                    '• <strong>Hydrogen ions (H⁺)</strong> — to balance hydrogen atoms (acid / neutral conditions)<br/>' +
                    '• <strong>Hydroxide ions (OH⁻)</strong> — instead of H⁺ in alkaline conditions (rare at A-Level)<br/><br/>' +
                    '⚠ <strong>Nothing else.</strong> Never add O₂, H₂, or any other species.'
            },
            terms: []
        },

        // ── 4-Step Method ─────────────────────────────────────────────────────
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'The 4-Step Method for Building a Half-Equation', level: 2 },
            terms: []
        },
        {
            id: 'list-4step',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    '<strong>Balance all atoms other than O and H.</strong> (Always do this first — getting it wrong here wastes all subsequent work.)',
                    '<strong>Balance oxygen atoms</strong> by adding H₂O molecules to the side that needs more O.',
                    '<strong>Balance hydrogen atoms</strong> by adding H⁺ ions to the side that needs more H.',
                    '<strong>Balance the overall charge</strong> by adding electrons (e⁻) to the more positive side.'
                ]
            },
            terms: []
        },
        {
            id: 'svg-4step',
            type: 'svg',
            data: {
                caption: 'Flowchart: 4-step method for writing a half-equation in acid conditions',
                svg: `<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <rect width="480" height="330" rx="10" fill="#0f172a"/>
  <text x="240" y="22" text-anchor="middle" font-weight="700" font-size="14" fill="#1e293b">4-Step Method: Building a Half-Equation</text>

  <!-- Step 1 -->
  <rect x="90" y="35" width="300" height="48" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="240" y="55" text-anchor="middle" font-weight="700" fill="#1e40af">Step 1</text>
  <text x="240" y="72" text-anchor="middle" fill="#1d4ed8" font-size="11">Balance all atoms EXCEPT O and H</text>
  <line x1="240" y1="83" x2="240" y2="103" stroke="#475569" stroke-width="1.5" marker-end="url(#aS)"/>

  <!-- Step 2 -->
  <rect x="90" y="103" width="300" height="48" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="240" y="123" text-anchor="middle" font-weight="700" fill="#15803d">Step 2</text>
  <text x="240" y="140" text-anchor="middle" fill="#166534" font-size="11">Balance O atoms — add H₂O to the O-deficient side</text>
  <line x1="240" y1="151" x2="240" y2="171" stroke="#475569" stroke-width="1.5" marker-end="url(#aS)"/>

  <!-- Step 3 -->
  <rect x="90" y="171" width="300" height="48" rx="8" fill="#78350f" stroke="#d97706" stroke-width="1.5"/>
  <text x="240" y="191" text-anchor="middle" font-weight="700" fill="#92400e">Step 3</text>
  <text x="240" y="208" text-anchor="middle" fill="#78350f" font-size="11">Balance H atoms — add H⁺ to the H-deficient side</text>
  <line x1="240" y1="219" x2="240" y2="239" stroke="#475569" stroke-width="1.5" marker-end="url(#aS)"/>

  <!-- Step 4 -->
  <rect x="90" y="239" width="300" height="48" rx="8" fill="#4a1040" stroke="#ec4899" stroke-width="1.5"/>
  <text x="240" y="259" text-anchor="middle" font-weight="700" fill="#be185d">Step 4</text>
  <text x="240" y="276" text-anchor="middle" fill="#9d174d" font-size="11">Balance charge — add e⁻ to the more positive side</text>

  <!-- Final check -->
  <rect x="140" y="298" width="200" height="26" rx="6" fill="#0c4a6e" stroke="#0284c7" stroke-width="1"/>
  <text x="240" y="315" text-anchor="middle" fill="#0c4a6e" font-size="11" font-weight="600">✓ Check: atoms and charges must balance</text>

  <defs>
    <marker id="aS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#475569"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Worked Example 1 ─────────────────────────────────────────────────
        {
            id: 'h-ex1',
            type: 'heading',
            data: { text: 'Worked Example 1: Cl₂ Oxidises Fe²⁺ to Fe³⁺ (Simple)', level: 2 },
            terms: []
        },
        {
            id: 'callout-ex1a',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for Cl₂ (reduction)',
                text: '<strong>Start:</strong> Cl₂ → Cl⁻<br/>' +
                    '<strong>Step 1:</strong> Balance Cl atoms: Cl₂ → 2Cl⁻<br/>' +
                    '<strong>Steps 2 & 3:</strong> No O or H involved — skip.<br/>' +
                    '<strong>Step 4:</strong> Balance charge. Left = 0; right = –2. Add 2e⁻ to left:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>Cl₂ + 2e⁻ → 2Cl⁻</strong> ✓ (Cl is reduced; Cl₂ is the oxidising agent)'
            },
            terms: []
        },
        {
            id: 'callout-ex1b',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for Fe²⁺ (oxidation)',
                text: '<strong>Start:</strong> Fe²⁺ → Fe³⁺<br/>' +
                    '<strong>Step 1:</strong> Fe already balanced.<br/>' +
                    '<strong>Steps 2 & 3:</strong> No O or H — skip.<br/>' +
                    '<strong>Step 4:</strong> Balance charge. Left = +2; right = +3. Add 1e⁻ to right:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fe²⁺ → Fe³⁺ + e⁻</strong> ✓ (Fe is oxidised; Fe²⁺ is the reducing agent)'
            },
            terms: []
        },

        // ── Combining Half-Equations ─────────────────────────────────────────
        {
            id: 'h-combine',
            type: 'heading',
            data: { text: 'Combining Half-Equations into a Full Ionic Equation', level: 2 },
            terms: []
        },
        {
            id: 'list-combine',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    '<strong>Count electrons</strong> on each side — they must be equal.',
                    '<strong>Multiply</strong> one or both half-equations by whole numbers until the electron counts match (find LCM of electron numbers).',
                    '<strong>Add</strong> the two half-equations together (all left-hand species on the left, all right-hand species on the right).',
                    '<strong>Cancel</strong> electrons (they will always be equal and cancel). Also cancel any H⁺ or H₂O that appear on both sides.',
                    '<strong>Check</strong> that atoms and total charge balance on both sides.'
                ]
            },
            terms: ['Ionic equation']
        },
        {
            id: 'callout-ex1c',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Combining Example 1: Cl₂ + Fe²⁺',
                text: '<strong>Reduction:</strong> Cl₂ + 2e⁻ → 2Cl⁻ (involves 2e⁻)<br/>' +
                    '<strong>Oxidation:</strong> Fe²⁺ → Fe³⁺ + e⁻ (involves 1e⁻)<br/><br/>' +
                    'LCM = 2. Multiply oxidation half-equation × 2:<br/>' +
                    '&nbsp;&nbsp;2Fe²⁺ → 2Fe³⁺ + 2e⁻<br/><br/>' +
                    'Add the two equations:<br/>' +
                    '&nbsp;&nbsp;Cl₂ + 2e⁻ + 2Fe²⁺ → 2Cl⁻ + 2Fe³⁺ + 2e⁻<br/><br/>' +
                    'Cancel 2e⁻ from both sides:<br/>' +
                    '&nbsp;&nbsp;<strong>Cl₂ + 2Fe²⁺ → 2Cl⁻ + 2Fe³⁺</strong><br/><br/>' +
                    '✓ Left charge: 0 + 4+ = 4+. Right charge: 2– + 6+ = 4+. Balanced!'
            },
            terms: []
        },

        // ── Worked Example 2 ─────────────────────────────────────────────────
        {
            id: 'h-ex2',
            type: 'heading',
            data: { text: 'Worked Example 2: MnO₄⁻ Oxidises H₂O₂ (Complex — needs H⁺ and H₂O)', level: 2 },
            terms: []
        },
        {
            id: 'list-ex2-context',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Conditions:</strong> Acidified with dilute H₂SO₄.',
                    '<strong>MnO₄⁻ (manganate(VII)) is reduced</strong> to Mn²⁺.',
                    '<strong>H₂O₂ is oxidised</strong> to O₂.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-ex2a',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for H₂O₂ (oxidation)',
                text: '<strong>Start:</strong> H₂O₂ → O₂<br/>' +
                    '<strong>Step 1:</strong> O already balanced (2 O each side).<br/>' +
                    '<strong>Step 2:</strong> O balanced — skip H₂O.<br/>' +
                    '<strong>Step 3:</strong> H: 2 on left, 0 on right → add 2H⁺ to <em>right</em>: H₂O₂ → O₂ + 2H⁺<br/>' +
                    '<strong>Step 4:</strong> Charge: left = 0; right = 2+. Add 2e⁻ to right:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>H₂O₂ → O₂ + 2H⁺ + 2e⁻</strong> ✓'
            },
            terms: []
        },
        {
            id: 'callout-ex2b',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for MnO₄⁻ (reduction)',
                text: '<strong>Start:</strong> MnO₄⁻ → Mn²⁺<br/>' +
                    '<strong>Step 1:</strong> Mn balanced.<br/>' +
                    '<strong>Step 2:</strong> O: 4 on left, 0 on right → add 4H₂O to <em>right</em>: MnO₄⁻ → Mn²⁺ + 4H₂O<br/>' +
                    '<strong>Step 3:</strong> H: 0 on left, 8 on right → add 8H⁺ to <em>left</em>: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O<br/>' +
                    '<strong>Step 4:</strong> Charge: left = –1 + 8+ = 7+; right = 2+. Add 5e⁻ to left:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</strong> ✓'
            },
            terms: []
        },
        {
            id: 'callout-ex2c',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Combining Example 2: MnO₄⁻ + H₂O₂',
                text: '<strong>Oxidation:</strong> H₂O₂ → O₂ + 2H⁺ + 2e⁻ &nbsp; &nbsp;(2e⁻)<br/>' +
                    '<strong>Reduction:</strong> MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O &nbsp; &nbsp;(5e⁻)<br/><br/>' +
                    'LCM of 2 and 5 = 10. Multiply: oxidation × 5, reduction × 2:<br/>' +
                    '&nbsp;&nbsp;5H₂O₂ → 5O₂ + 10H⁺ + 10e⁻<br/>' +
                    '&nbsp;&nbsp;2MnO₄⁻ + 16H⁺ + 10e⁻ → 2Mn²⁺ + 8H₂O<br/><br/>' +
                    'Add and cancel 10e⁻:<br/>' +
                    '&nbsp;&nbsp;2MnO₄⁻ + 16H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂ + 10H⁺<br/><br/>' +
                    '⚠ H⁺ appears on BOTH sides! Subtract 10H⁺ from both sides:<br/>' +
                    '&nbsp;&nbsp;<strong>2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂</strong><br/><br/>' +
                    '✓ Always check for H⁺ or H₂O on both sides and simplify!'
            },
            terms: []
        },

        // ── Worked Example 3 ─────────────────────────────────────────────────
        {
            id: 'h-ex3',
            type: 'heading',
            data: { text: 'Worked Example 3: Cr₂O₇²⁻ Oxidises Ethanol to Ethanoic Acid (Organic)', level: 2 },
            terms: []
        },
        {
            id: 'list-ex3-context',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    '<strong>Conditions:</strong> Acidified K₂Cr₂O₇ (dichromate(VI)) / dilute H₂SO₄ under reflux.',
                    '<strong>Cr₂O₇²⁻ is reduced</strong> to Cr³⁺ (the orange solution turns green).',
                    '<strong>CH₃CH₂OH (ethanol) is oxidised</strong> to CH₃COOH (ethanoic acid).'
                ]
            },
            terms: ['Potassium dichromate(VI)']
        },
        {
            id: 'callout-ex3a',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for ethanol → ethanoic acid (oxidation)',
                text: '<strong>Start:</strong> CH₃CH₂OH → CH₃COOH<br/>' +
                    '<strong>Step 2:</strong> O: 1 on left, 2 on right → add 1H₂O to left:<br/>' +
                    '&nbsp;&nbsp;CH₃CH₂OH + H₂O → CH₃COOH<br/>' +
                    '<strong>Step 3:</strong> H: 8 on left (6 in ethanol + 2 in H₂O), 4 on right → add 4H⁺ to right:<br/>' +
                    '&nbsp;&nbsp;CH₃CH₂OH + H₂O → CH₃COOH + 4H⁺<br/>' +
                    '<strong>Step 4:</strong> Charge: left = 0; right = 4+. Add 4e⁻ to right:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>CH₃CH₂OH + H₂O → CH₃COOH + 4H⁺ + 4e⁻</strong> ✓'
            },
            terms: []
        },
        {
            id: 'callout-ex3b',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Half-equation for Cr₂O₇²⁻ → Cr³⁺ (reduction) ⚠ Balance Cr first!',
                text: '<strong>Start:</strong> Cr₂O₇²⁻ → Cr³⁺<br/>' +
                    '⚠ <strong>Common mistake:</strong> Forgetting to balance the <em>two</em> Cr atoms first!<br/>' +
                    '<strong>Step 1:</strong> 2 Cr on left → Cr₂O₇²⁻ → 2Cr³⁺<br/>' +
                    '<strong>Step 2:</strong> O: 7 on left, 0 on right → add 7H₂O to right:<br/>' +
                    '&nbsp;&nbsp;Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O<br/>' +
                    '<strong>Step 3:</strong> H: 0 on left, 14 on right → add 14H⁺ to left:<br/>' +
                    '&nbsp;&nbsp;Cr₂O₇²⁻ + 14H⁺ → 2Cr³⁺ + 7H₂O<br/>' +
                    '<strong>Step 4:</strong> Charge: left = –2 + 14+ = 12+; right = 6+. Add 6e⁻ to left:<br/>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<strong>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</strong> ✓'
            },
            terms: []
        },
        {
            id: 'callout-ex3c',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Combining Example 3: Cr₂O₇²⁻ + Ethanol',
                text: '<strong>Oxidation:</strong> CH₃CH₂OH + H₂O → CH₃COOH + 4H⁺ + 4e⁻ &nbsp; &nbsp;(4e⁻)<br/>' +
                    '<strong>Reduction:</strong> Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O &nbsp; &nbsp;(6e⁻)<br/><br/>' +
                    'LCM of 4 and 6 = 12. Multiply: oxidation × 3, reduction × 2:<br/>' +
                    '&nbsp;&nbsp;3CH₃CH₂OH + 3H₂O → 3CH₃COOH + 12H⁺ + 12e⁻<br/>' +
                    '&nbsp;&nbsp;2Cr₂O₇²⁻ + 28H⁺ + 12e⁻ → 4Cr³⁺ + 14H₂O<br/><br/>' +
                    'Add and cancel 12e⁻, then simplify H⁺ (subtract 12H⁺ from both sides) and H₂O (subtract 3H₂O from both sides):<br/>' +
                    '&nbsp;&nbsp;<strong>3CH₃CH₂OH + 2Cr₂O₇²⁻ + 16H⁺ → 3CH₃COOH + 4Cr³⁺ + 11H₂O</strong><br/><br/>' +
                    '✓ Left charge: 3(0) + 2(–2) + 16(+1) = +12. Right charge: 3(0) + 4(+3) + 11(0) = +12. Balanced!'
            },
            terms: []
        },

        // ── Combining SVG Summary ─────────────────────────────────────────────
        {
            id: 'svg-combine',
            type: 'svg',
            data: {
                caption: 'Combining two half-equations into a full ionic equation — process overview',
                svg: `<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <rect width="520" height="240" rx="10" fill="#1c3a64"/>
  <text x="260" y="21" text-anchor="middle" font-weight="700" font-size="14" fill="#0c4a6e">Combining Half-Equations: General Approach</text>

  <!-- Oxidation half -->
  <rect x="15" y="34" width="225" height="52" rx="8" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="127" y="52" text-anchor="middle" font-weight="700" fill="#92400e" font-size="12">OXIDATION half-equation</text>
  <text x="127" y="70" text-anchor="middle" fill="#78350f" font-size="11">A → B + ne⁻</text>
  <text x="127" y="82" text-anchor="middle" fill="#78350f" font-size="10">(electrons on RIGHT)</text>

  <!-- Reduction half -->
  <rect x="280" y="34" width="225" height="52" rx="8" fill="#2d1b69" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="392" y="52" text-anchor="middle" font-weight="700" fill="#4c1d95" font-size="12">REDUCTION half-equation</text>
  <text x="392" y="70" text-anchor="middle" fill="#4c1d95" font-size="11">C + me⁻ → D</text>
  <text x="392" y="82" text-anchor="middle" fill="#5b21b6" font-size="10">(electrons on LEFT)</text>

  <!-- Multiply step -->
  <rect x="15" y="105" width="490" height="36" rx="8" fill="#0c4a6e" stroke="#0284c7" stroke-width="1.5"/>
  <text x="260" y="121" text-anchor="middle" fill="#0c4a6e" font-weight="600">Multiply each half-equation so electrons balance (find LCM of n and m)</text>
  <text x="260" y="135" text-anchor="middle" fill="#0369a1" font-size="11">e.g. n=2, m=5 → multiply oxidation ×5, reduction ×2 → 10e⁻ each side</text>

  <!-- Arrows down -->
  <line x1="260" y1="141" x2="260" y2="157" stroke="#475569" stroke-width="1.5" marker-end="url(#aC2)"/>

  <!-- Add step -->
  <rect x="15" y="157" width="490" height="26" rx="8" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="260" y="174" text-anchor="middle" fill="#14532d" font-weight="600">Add the two (multiplied) equations together; cancel electrons</text>
  <line x1="260" y1="183" x2="260" y2="199" stroke="#475569" stroke-width="1.5" marker-end="url(#aC2)"/>

  <!-- Check step -->
  <rect x="15" y="199" width="490" height="34" rx="8" fill="#4a1040" stroke="#ec4899" stroke-width="1.5"/>
  <text x="260" y="217" text-anchor="middle" fill="#9d174d" font-weight="600">Simplify: cancel any H⁺ or H₂O on both sides</text>
  <text x="260" y="231" text-anchor="middle" fill="#be185d" font-size="10">Check: total atoms balance ✓ &amp; total charge balance ✓ on both sides</text>

  <defs>
    <marker id="aC2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#475569"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Common Mistakes ──────────────────────────────────────────────────
        {
            id: 'callout-mistakes',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes — Avoid These!',
                text: '• <strong>Forgetting to balance the main atom first</strong> (e.g. Cr₂O₇²⁻ → must give 2Cr³⁺, not just Cr³⁺) — causes completely wrong electron counts and wrong multiplying factors.<br/>' +
                    '• <strong>Not simplifying H⁺ or H₂O</strong> appearing on both sides — always check after combining.<br/>' +
                    '• <strong>Adding species not allowed</strong> (e.g. O₂, H₂) to balance atoms — only e⁻, H₂O, H⁺ (or OH⁻ in alkaline conditions).<br/>' +
                    '• <strong>Incorrect charge check</strong> — always verify: total charge on left = total charge on right in the final equation.'
            },
            terms: []
        },

        // ── Disproportionation ────────────────────────────────────────────────
        {
            id: 'h-disproportionation',
            type: 'heading',
            data: { text: 'Disproportionation Reactions', level: 2 },
            terms: []
        },
        {
            id: 'callout-disproportionation',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Disproportionation — Definition',
                text: 'A <strong>disproportionation</strong> reaction is a redox reaction in which the <strong>same element</strong> in a <strong>single substance</strong> is <em>simultaneously</em> oxidised and reduced.<br/><br/>' +
                    'To identify it: assign oxidation numbers to the element before and after the reaction — it increases (oxidised) for one product AND decreases (reduced) for another.'
            },
            terms: ['Disproportionation']
        },
        {
            id: 'svg-disproportionation',
            type: 'svg',
            data: {
                caption: 'Disproportionation: Cl₂ in water and Cu⁺ ions — same element simultaneously oxidised and reduced',
                svg: `<svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="12">
  <rect width="520" height="205" rx="10" fill="#0f172a"/>
  <text x="260" y="20" text-anchor="middle" font-weight="700" font-size="14" fill="#1e293b">Disproportionation Examples</text>

  <!-- Example 1: Cl₂ in water -->
  <rect x="10" y="30" width="240" height="155" rx="8" fill="#1c3a64" stroke="#0284c7" stroke-width="1.5"/>
  <text x="130" y="50" text-anchor="middle" font-weight="700" fill="#0c4a6e">Example 1: Cl₂ + H₂O</text>
  <text x="130" y="68" text-anchor="middle" fill="#0369a1" font-size="11">Cl₂ + H₂O ⇌ HCl + HClO</text>

  <rect x="20" y="78" width="100" height="38" rx="6" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1"/>
  <text x="70" y="95" text-anchor="middle" font-weight="700" fill="#1e40af" font-size="13">Cl₂</text>
  <text x="70" y="110" text-anchor="middle" fill="#1e40af" font-size="11">Cl = 0</text>

  <path d="M 123 95 L 155 80" stroke="#dc2626" stroke-width="1.5" marker-end="url(#aD1)"/>
  <path d="M 123 102 L 155 137" stroke="#16a34a" stroke-width="1.5" marker-end="url(#aD2)"/>

  <rect x="155" y="68" width="85" height="32" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1"/>
  <text x="197" y="83" text-anchor="middle" fill="#7f1d1d" font-weight="700" font-size="11">HClO</text>
  <text x="197" y="97" text-anchor="middle" fill="#7f1d1d" font-size="10">Cl = +1 ↑ OXIDISED</text>

  <rect x="155" y="122" width="85" height="32" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1"/>
  <text x="197" y="137" text-anchor="middle" fill="#14532d" font-weight="700" font-size="11">HCl</text>
  <text x="197" y="151" text-anchor="middle" fill="#14532d" font-size="10">Cl = –1 ↓ REDUCED</text>

  <text x="130" y="178" text-anchor="middle" fill="#475569" font-size="10">Cl goes from 0 → +1 AND 0 → –1</text>

  <!-- Example 2: Cu⁺ -->
  <rect x="270" y="30" width="240" height="155" rx="8" fill="#44370a" stroke="#d97706" stroke-width="1.5"/>
  <text x="390" y="50" text-anchor="middle" font-weight="700" fill="#92400e">Example 2: Cu⁺ ions</text>
  <text x="390" y="68" text-anchor="middle" fill="#b45309" font-size="11">2Cu⁺ → Cu²⁺ + Cu</text>

  <rect x="280" y="78" width="100" height="38" rx="6" fill="#44370a" stroke="#d97706" stroke-width="1"/>
  <text x="330" y="95" text-anchor="middle" font-weight="700" fill="#92400e" font-size="13">Cu⁺</text>
  <text x="330" y="110" text-anchor="middle" fill="#92400e" font-size="11">Cu = +1</text>

  <path d="M 383 95 L 415 80" stroke="#dc2626" stroke-width="1.5" marker-end="url(#aD1)"/>
  <path d="M 383 102 L 415 137" stroke="#16a34a" stroke-width="1.5" marker-end="url(#aD2)"/>

  <rect x="415" y="68" width="85" height="32" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1"/>
  <text x="457" y="83" text-anchor="middle" fill="#7f1d1d" font-weight="700" font-size="11">Cu²⁺</text>
  <text x="457" y="97" text-anchor="middle" fill="#7f1d1d" font-size="10">Cu = +2 ↑ OXIDISED</text>

  <rect x="415" y="122" width="85" height="32" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1"/>
  <text x="457" y="137" text-anchor="middle" fill="#14532d" font-weight="700" font-size="11">Cu</text>
  <text x="457" y="151" text-anchor="middle" fill="#14532d" font-size="10">Cu = 0 ↓ REDUCED</text>

  <text x="390" y="178" text-anchor="middle" fill="#475569" font-size="10">Cu goes from +1 → +2 AND +1 → 0</text>

  <defs>
    <marker id="aD1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
    <marker id="aD2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
  </defs>
</svg>`
            },
            terms: []
        },

        // ── Balancing via Oxidation Numbers ────────────────────────────────────
        {
            id: 'h-balancing-on',
            type: 'heading',
            data: { text: 'Alternative Method: Balancing by Oxidation Number Change', level: 2 },
            terms: []
        },
        {
            id: 'list-on-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Assign oxidation numbers to the element being oxidised and the element being reduced.',
                    'Work out the <strong>change</strong> in oxidation number for each element.',
                    'Multiply species so that total electrons lost = total electrons gained (cross-multiply the changes).',
                    'Balance remaining atoms (O, H) by adding H₂O and H⁺ by inspection.'
                ]
            },
            terms: []
        },
        {
            id: 'callout-balancing-on',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Example: Balancing with Oxidation Numbers (SO₂ + Ag⁺)',
                text: '<strong>Skeleton:</strong> SO₂ + Ag⁺ + H₂O → SO₄²⁻ + Ag + H⁺<br/><br/>' +
                    '• S: +4 (in SO₂) → +6 (in SO₄²⁻): change = +2 (oxidised, lost 2e⁻)<br/>' +
                    '• Ag: +1 (in Ag⁺) → 0 (in Ag): change = –1 (reduced, gained 1e⁻)<br/><br/>' +
                    'To balance: 2e⁻ lost must equal 2e⁻ gained → need 2 Ag⁺ per 1 SO₂.<br/>' +
                    'SO₂ + 2Ag⁺ + H₂O → SO₄²⁻ + 2Ag + H⁺<br/><br/>' +
                    'Balance O: 2 O on left (SO₂), 4 O on right → add 2H₂O: SO₂ + 2Ag⁺ + 2H₂O → ...<br/>' +
                    'Balance H: 4H on left → add 4H⁺ on right:<br/>' +
                    '<strong>Final: SO₂ + 2Ag⁺ + 2H₂O → SO₄²⁻ + 2Ag + 4H⁺</strong>'
            },
            terms: []
        },

        // ── Checklist ──────────────────────────────────────────────────────────
        {
            id: 'checklist-eq',
            type: 'checklist',
            data: {
                items: [
                    { text: 'State what is meant by an electron half-equation and give one example of an oxidation and one reduction half-equation.', checked: false },
                    { text: 'List the only three species you are allowed to add when building a half-equation in acid conditions.', checked: false },
                    { text: 'Use the 4-step method to construct the half-equation for Cr₂O₇²⁻ → Cr³⁺ in acid.', checked: false },
                    { text: 'Combine the half-equations for Cl₂ + Fe²⁺ to give the full ionic equation.', checked: false },
                    { text: 'Combine the MnO₄⁻ and H₂O₂ half-equations to give the full ionic equation, simplifying H⁺ on both sides.', checked: false },
                    { text: 'Define disproportionation and give one example, showing the oxidation number changes.', checked: false }
                ]
            },
            terms: []
        },

        // ── Summary ────────────────────────────────────────────────────────────
        {
            id: 'summary',
            type: 'summary',
            data: {
                text: '• A half-equation shows either oxidation (e⁻ on right) or reduction (e⁻ on left) alone.\n• Only add: electrons, H₂O, H⁺ (or OH⁻ in alkaline conditions).\n• 4-step method: (1) balance main atoms, (2) add H₂O for O, (3) add H⁺ for H, (4) add e⁻ for charge.\n• To combine: multiply so electrons are equal → add → cancel e⁻ → simplify any H⁺ or H₂O on both sides → check atoms and charges.\n• Disproportionation: same element in one species is simultaneously oxidised and reduced (e.g. Cl₀ → Cl⁺¹ and Cl⁻¹).'
            },
            terms: []
        }
    ],

    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-rules', prompt: 'What are the only three things you are allowed to add to a half-equation (in acidic conditions)?' },
            { id: 'c2', blockId: 'list-4step', prompt: 'State the 4-step method for building a half-equation. In what order must the steps be done?' },
            { id: 'c3', blockId: 'callout-ex1c', prompt: 'Write the full ionic equation for the reaction of Cl₂ with Fe²⁺ ions.' },
            { id: 'c4', blockId: 'callout-ex2b', prompt: 'Write the half-equation for MnO₄⁻ being reduced to Mn²⁺ in acidic solution. What must you add and why?' },
            { id: 'c5', blockId: 'callout-ex3b', prompt: 'Why must Cr₂O₇²⁻ → 2Cr³⁺ and not Cr₂O₇²⁻ → Cr³⁺? What goes wrong if you forget this?' },
            { id: 'c6', blockId: 'callout-disproportionation', prompt: 'Define disproportionation. Show for Cl₂ + H₂O ⇌ HCl + HClO that this is a disproportionation reaction.' }
        ],
        summaryText: 'Half-equations show either oxidation (e⁻ on right) or reduction (e⁻ on left). Build them in 4 steps: balance atoms, add H₂O for O, add H⁺ for H, add e⁻ for charge. Combine by multiplying to equalise electrons then adding; cancel e⁻ and simplify any H⁺/H₂O on both sides. Always check atoms and charges balance. Disproportionation is when the same element is simultaneously oxidised and reduced (e.g. Cl₂ → HCl + HClO, or 2Cu⁺ → Cu + Cu²⁺).',
        ready: false
    },
    evidence: []
};
export default note_chemistry_2_8_2;
