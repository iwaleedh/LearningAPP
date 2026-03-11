export const note_chemistry_5_17_8 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-redox',
      data: {
        text: 'Understand redox chemistry of transition metals; write oxidation and reduction half-equations; explain the CrO₄²⁻ ↔ Cr₂O₇²⁻ pH equilibrium; predict feasibility of vanadium reduction with Zn using E° values; explain disproportionation with Cu⁺.'
      }
    },
    {
      type: 'heading',
      id: 'h-redox-principles',
      data: { text: 'Redox Chemistry and Oxidation States', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-redox-intro',
      data: {
        text: 'Transition metals undergo redox (oxidation-reduction) reactions because they can easily change oxidation states. A <strong>redox reaction</strong> involves the transfer of electrons from a reducing agent (oxidised) to an oxidising agent (reduced). Because transition metals have multiple accessible oxidation states, they readily participate in both oxidation and reduction. The variable oxidation states make transition metals central to redox chemistry in aqueous solution and in biological systems.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-half-equation-method',
      data: {
        text: '<strong>Half-equation method for balancing redox equations:</strong><br/>' +
        '1. Write the oxidation half-equation (showing loss of electrons)<br/>' +
        '2. Write the reduction half-equation (showing gain of electrons)<br/>' +
        '3. Balance atoms (excluding O and H)<br/>' +
        '4. Balance O by adding H₂O<br/>' +
        '5. Balance H by adding H⁺ (acidic) or OH⁻ (alkaline)<br/>' +
        '6. Balance charge by adding electrons<br/>' +
        '7. Multiply equations to equalise electrons<br/>' +
        '8. Add half-equations and cancel spectator ions'
      }
    },
    {
      type: 'heading',
      id: 'h-iron-redox',
      data: { text: 'Iron Redox: Fe²⁺ and Fe³⁺', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-iron-redox-intro',
      data: {
        text: 'Iron exhibits +2 and +3 oxidation states, which readily interconvert through redox reactions. Fe²⁺ is thermodynamically less stable than Fe³⁺ in aerated aqueous solution (O₂ oxidises Fe²⁺ to Fe³⁺), but kinetically, the oxidation is slow unless a catalyst (such as Fe³⁺ itself) is present.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-iron-oxidation-example',
      data: {
        text: '<strong>Example 1: Fe²⁺ oxidation by MnO₄⁻ in acidic solution</strong><br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Fe²⁺ → Fe³⁺ + e⁻<br/>' +
        'Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br/>' +
        '<strong>Balancing electrons:</strong> Multiply oxidation by 5<br/>' +
        '5Fe²⁺ → 5Fe³⁺ + 5e⁻<br/>' +
        '<strong>Overall equation:</strong> 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O<br/>' +
        '<strong>Observation:</strong> Purple MnO₄⁻ decolourises to colourless Mn²⁺ as Fe²⁺ is oxidised. This is a titrimetric analysis method.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-iron-reduction-example',
      data: {
        text: '<strong>Example 2: Fe³⁺ reduction by Cu</strong><br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Cu → Cu²⁺ + 2e⁻<br/>' +
        'Reduction: Fe³⁺ + e⁻ → Fe²⁺<br/>' +
        '<strong>Balancing electrons:</strong> Multiply reduction by 2<br/>' +
        '2Fe³⁺ + 2e⁻ → 2Fe²⁺<br/>' +
        '<strong>Overall equation:</strong> Cu + 2Fe³⁺ → Cu²⁺ + 2Fe²⁺<br/>' +
        '<strong>Observation:</strong> Brown Fe³⁺ solution + Cu metal → pale blue/green Cu²⁺ and pale Fe²⁺ solution.'
      }
    },
    {
      type: 'heading',
      id: 'h-chromium-redox',
      data: { text: 'Chromium Redox Reactions', level: 2 }
    },
    { type: 'callout', id: 'callout-chromate-dichromate', data: { style: 'key', title: 'CrO₄²⁻ ↔ Cr₂O₇²⁻ pH Equilibrium', text: 'These two Cr(VI) species interconvert via a pH-dependent equilibrium: 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O. CrO₄²⁻ (chromate, yellow) is stable in alkaline (basic) conditions. Cr₂O₇²⁻ (dichromate, orange) is stable in acidic conditions. Add acid → yellow turns orange. Add alkali → orange turns yellow. This is NOT a redox change — Cr stays at +6 throughout. It is a condensation/hydrolysis equilibrium.' } },
    {
      type: 'svg',
      id: 'svg-chromate-eq',
      data: {
        caption: 'Chromate/dichromate equilibrium based on pH',
        svg: `<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="background-color:var(--color-surface);border-radius:8px;">
  <rect x="50" y="30" width="140" height="60" rx="4" fill="#FFD700" opacity="0.8" />
  <rect x="310" y="30" width="140" height="60" rx="4" fill="#FF8C00" opacity="0.8" />
  <text x="120" y="55" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#000">2CrO₄²⁻</text>
  <text x="120" y="75" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#000">Chromate (Yellow)</text>
  <text x="380" y="55" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#000">Cr₂O₇²⁻ + H₂O</text>
  <text x="380" y="75" font-family="sans-serif" font-size="14" text-anchor="middle" fill="#000">Dichromate (Orange)</text>
  <path d="M200 50 L300 50" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M300 70 L200 70" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow)" />
  <text x="250" y="42" font-family="sans-serif" font-size="12" text-anchor="middle" fill="var(--color-text)">+ H⁺ (acid)</text>
  <text x="250" y="88" font-family="sans-serif" font-size="12" text-anchor="middle" fill="var(--color-text)">+ OH⁻ (alkali)</text>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--color-text)" />
    </marker>
  </defs>
</svg>`
      }
    },
    { type: 'callout', id: 'callout-cr-zn-reduction', data: { style: 'worked', title: 'Zinc Reduction of Chromium: Cr⁶⁺ → Cr³⁺ → Cr²⁺', text: 'Add Zn to acidified Cr₂O₇²⁻ (orange, Cr⁶⁺). Step 1 — Cr⁶⁺ → Cr³⁺: orange solution turns green; E°cell is positive so feasible; Zn → Zn²⁺ (reducing agent). Step 2 — Cr³⁺ → Cr²⁺: green solution turns blue; E°cell is positive so feasible (E°(Cr³⁺/Cr²⁺) = −0.41 V, more positive than E°(Zn²⁺/Zn) = −0.76 V). Colour sequence: orange → green → blue. Zn cannot reduce Cr²⁺ to Cr (Cr²⁺/Cr = −0.91 V, more negative than Zn — not feasible).' } },
    {
      type: 'paragraph',
      id: 'p-chromium-intro',
      data: {
        text: 'Chromium(III) (Cr³⁺, green) can be oxidised to chromium(VI) in the form of chromate ion (CrO₄²⁻, yellow) or dichromate ion (Cr₂O₇²⁻, orange). The direction of oxidation depends on pH and the oxidising agent used. In alkaline conditions, Cr³⁺ forms CrO₄²⁻ (yellow); in acidic conditions, it forms Cr₂O₇²⁻ (orange).'
      }
    },
    {
      type: 'paragraph',
      id: 'p-chromium-oxidation',
      data: {
        text: '<strong>Example: Cr³⁺ oxidation to CrO₄²⁻ in alkaline solution</strong><br/>' +
        '<strong>Equation:</strong> 2Cr³⁺ + 3H₂O₂ + 10OH⁻ → 2CrO₄²⁻ + 8H₂O<br/>' +
        'or using H₂O₂ (hydrogen peroxide) as oxidising agent:<br/>' +
        '<strong>Half-equations (in alkaline):</strong><br/>' +
        'Oxidation: Cr³⁺ + 4OH⁻ → CrO₄²⁻ + 6H⁺ + 3e⁻ (actually: Cr³⁺ + 4OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻, net: CrO₄²⁻ + 3H₂O)<br/>' +
        'Reduction: H₂O₂ + 2e⁻ → 2OH⁻<br/>' +
        '<strong>Observation:</strong> Green Cr³⁺ solution + H₂O₂ + NaOH → yellow CrO₄²⁻ solution. This is a classic test for Cr³⁺.'
      }
    },
    {
      type: 'list',
      id: 'list-dichromate-uses',
      data: {
        style: 'bullet',
        items: [
          '<strong>Testing for Chromate(VI):</strong> Adding BaCl₂ to a yellow chromate solution yields a yellow precipitate of BaCrO₄. Similarly, Pb(NO₃)₂ gives a yellow precipitate of PbCrO₄.',
          '<strong>Dichromate in Organic Chemistry:</strong> Acidified K₂Cr₂O₇ (with H₂SO₄) is a standard oxidising agent. Primary alcohols are oxidised to aldehydes (with distillation) or carboxylic acids (with reflux). Secondary alcohols are oxidised to ketones. In both cases, orange Cr₂O₇²⁻ is reduced to green Cr³⁺.',
          '<strong>Dichromate in Titrations:</strong> K₂Cr₂O₇ is a primary standard (stable, can be weighed accurately) and can be used to titrate Fe²⁺. Advantage over KMnO₄: can be used in the presence of Cl⁻ (does not oxidise Cl⁻ to Cl₂). Disadvantage: requires a redox indicator (like diphenylamine sulphonate, which turns violet-blue at the endpoint). Ratio: 1 mol Cr₂O₇²⁻ : 6 mol Fe²⁺.'
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-permanganate-redox',
      data: { text: 'Permanganate Redox: MnO₄⁻ Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-intro',
      data: {
        text: 'Permanganate ion (MnO₄⁻, Mn in +7 oxidation state) is a powerful oxidising agent. The product of reduction depends on the pH and the nature of the reducing agent. In different pH environments, MnO₄⁻ is reduced to different products.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-acidic',
      data: {
        text: '<strong>In acidic solution:</strong> MnO₄⁻ → Mn²⁺ (colourless)<br/>' +
        'Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O<br/>' +
        '<strong>Example:</strong> 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O<br/>' +
        '<strong>Observation:</strong> Deep purple MnO₄⁻ decolourises as it is reduced.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-neutral',
      data: {
        text: '<strong>In neutral solution:</strong> MnO₄⁻ → MnO₂ (brown precipitate)<br/>' +
        'Reduction: MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O (in neutral pH, equilibrium gives this approximately)<br/>' +
        '<strong>Observation:</strong> Purple solution → brown precipitate of MnO₂ forms.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-permanganate-alkaline',
      data: {
        text: '<strong>In alkaline solution:</strong> MnO₄⁻ → MnO₄²⁻ or MnO₂ (green or brown)<br/>' +
        'Reduction: MnO₄⁻ + e⁻ → MnO₄²⁻ (one-electron reduction to manganate, green)<br/>' +
        'or further: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (brown MnO₂)<br/>' +
        '<strong>Observation:</strong> Purple MnO₄⁻ → green MnO₄²⁻ or brown MnO₂ depending on conditions.'
      }
    },
    {
      type: 'callout',
      id: 'callout-permanganate-colours',
      data: {
        style: 'key',
        title: 'Permanganate Colour Changes',
        text: 'Purple (MnO₄⁻, +7) → Colourless (Mn²⁺, +2) in acidic<br/>Purple (MnO₄⁻, +7) → Brown precipitate (MnO₂, +4) in neutral<br/>Purple (MnO₄⁻, +7) → Green (MnO₄²⁻, +6) in alkaline<br/>These colour changes are diagnostic and widely used in qualitative analysis.'
      }
    },
    {
      type: 'list',
      id: 'list-permanganate-uses',
      data: {
        style: 'bullet',
        items: [
          '<strong>Permanganate in Organic Chemistry:</strong> In neutral/alkaline conditions, KMnO₄ oxidises C=C double bonds to form a diol (testing for unsaturation; purple → colourless/brown). It also violently oxidises alkyl side-chains on aromatic rings (e.g., methylbenzene) directly to benzoic acid.',
          '<strong>Permanganate in Titrations (Acidic):</strong> Used to titrate Fe²⁺, H₂O₂, and ethanedioic acid. Self-indicating (endpoint is the first permanent pale pink). MUST use dilute H₂SO₄ as the acid.',
          '<strong>Limitations of KMnO₄:</strong> It is NOT a primary standard (slowly decomposes water to form brown MnO₂ in the bottle). It must perform standardisation against ethanedioic acid. You CANNOT use HCl to acidify it because MnO₄⁻ oxidises Cl⁻ to Cl₂ gas, ruining the titration.'
        ]
      }
    },
    {
      type: 'heading',
      id: 'h-disproportionation',
      data: { text: 'Disproportionation Reactions', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-disproportionation-def',
      data: {
        text: '<strong>Disproportionation</strong> is a redox reaction in which a single element in one oxidation state is simultaneously oxidised and reduced, producing two different oxidation states. The element acts as both the reducing agent and the oxidising agent. This occurs most commonly with transition metals in intermediate oxidation states.'
      }
    },
    {
      type: 'paragraph',
      id: 'p-copper-disproportionation',
      data: {
        text: '<strong>Example: Copper(I) disproportionation</strong><br/>' +
        'Cu⁺ is unstable in aqueous solution and undergoes disproportionation:<br/>' +
        '2Cu⁺ → Cu + Cu²⁺<br/>' +
        '<strong>Half-equations:</strong><br/>' +
        'Oxidation: Cu⁺ → Cu²⁺ + e⁻<br/>' +
        'Reduction: Cu⁺ + e⁻ → Cu<br/>' +
        'Overall: 2Cu⁺ → Cu(0) + Cu(+2)<br/>' +
        '<strong>Explanation:</strong> Although Cu⁺ with its d¹⁰ configuration is electron-rich, it is thermodynamically unstable in aqueous solution. The disproportionation produces metallic Cu (red precipitate or metal) and Cu²⁺ (blue in solution). Cu⁺ compounds are stable in solid state (e.g., Cu₂O, CuCl) but disproportionate in solution.'
      }
    },
    {
     
      type: 'heading',
      id: 'h-copper-iodine-redox',
      data: { text: 'Copper(II) and Iodide Reaction', level: 2 }
    },
    {
      type: 'paragraph',
      id: 'p-copper-iodine',
      data: {
        text: 'When Cu²⁺ ions react with I⁻ ions, a redox reaction occurs where Cu²⁺ oxidises I⁻ to iodine (I₂), and is itself reduced to an off-white precipitate of copper(I) iodide (CuI).<br/>' +
        '<strong>Equation:</strong> 2Cu²⁺(aq) + 4I⁻(aq) → 2CuI(s) + I₂(aq)<br/>' +
        '<strong>Observation:</strong> Blue Cu²⁺ solution + colourless I⁻ solution → brown solution containing I₂ with an off-white/pale-brown solid (CuI).'
      }
    },
    {
      type: 'callout',
      id: 'callout-iodometric-titration',
      data: {
        style: 'worked',
        title: 'Iodometric Titration for Copper',
        text: 'This reaction is used analytically to determine the concentration of Cu²⁺ ions in an unknown sample:<br/>' +
        '1. Add excess KI to the Cu²⁺ solution to liberate I₂.<br/>' +
        '2. Titrate the liberated iodine with sodium thiosulfate (Na₂S₂O₃): 2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻<br/>' +
        '3. Add starch indicator near the endpoint. The iodine-starch complex is dark blue-black. At the endpoint, the blue-black colour sharply disappears, leaving the off-white CuI precipitate visible.<br/>' +
        '<strong>Ratio:</strong> 2 mol Cu²⁺ libates 1 mol I₂; 1 mol I₂ reacts with 2 mol S₂O₃²⁻. Therefore, 1 mol Cu²⁺ ≡ 1 mol S₂O₃²⁻.'
      }
    },
    { type: 'paragraph',
      id: 'p-sulphite-disproportionation',
      data: {
        text: '<strong>Example: Chlorine disproportionation (for comparison)</strong><br/>' +
        'Cl₂ + H₂O ⇌ HCl + HClO<br/>' +
        'Cl₂ (0) → Cl⁻ (−1) + ClO⁻ (+1)<br/>' +
        'Half-equations:<br/>' +
        'Reduction: Cl₂ + 2e⁻ → 2Cl⁻<br/>' +
        'Oxidation: Cl₂ → 2ClO⁻ + 4H⁺ + 4e⁻ (in basic: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O)<br/>' +
        'Disproportionation is common in halogens (Group 17) and transition metals in intermediate oxidation states.'
      }
    },
    { type: 'heading', id: 'h-vanadium-redox', data: { text: 'Vanadium Reduction with Zinc — E° Feasibility', level: 2 } },
    { type: 'paragraph', id: 'p-vanadium-intro', data: { text: 'Vanadium has four accessible oxidation states: +5 (VO₂⁺, yellow), +4 (VO²⁺, blue), +3 (V³⁺, green), +2 (V²⁺, purple). Zn (E° = −0.76 V) can act as a reducing agent to step vanadium through each state. At each step, E°cell = E°(cathode) − E°(anode). If E°cell > 0 the reaction is feasible.' } },
    { type: 'comparisonTable', id: 'table-vanadium-redox', data: { headers: ['Step', 'Reduction', 'E°(V⁽ⁿ⁺¹⁾/Vⁿ) / V', 'E°cell using Zn', 'Feasible?', 'Colour change'], rows: [
      ['V⁵⁺ → V⁴⁺', 'Zn + 2VO₂⁺ + 4H⁺ → Zn²⁺ + 2VO²⁺ + 2H₂O', '+1.00', '+1.00 − (−0.76) = +1.76 V', 'Yes', 'Yellow → blue'],
      ['V⁴⁺ → V³⁺', 'Zn + 2VO²⁺ + 4H⁺ → Zn²⁺ + 2V³⁺ + 2H₂O', '+0.34', '+0.34 − (−0.76) = +1.10 V', 'Yes', 'Blue → green'],
      ['V³⁺ → V²⁺', 'Zn + 2V³⁺ → Zn²⁺ + 2V²⁺', '−0.26', '−0.26 − (−0.76) = +0.50 V', 'Yes', 'Green → purple'],
      ['V²⁺ → V⁰', 'Not achievable with Zn', '−1.18', '−1.18 − (−0.76) = −0.42 V', 'No', 'No change']
    ], caption: 'Vanadium reduction steps with Zn as reducing agent (standard conditions, acidic solution)' } },
    { type: 'callout', id: 'callout-vanadium-tip', data: { style: 'tip', title: 'Exam Points — Vanadium E° Sequence', text: '1. Learn the colour sequence: yellow → blue → green → purple (V⁵⁺ → V²⁺). 2. Zn reduces all the way to V²⁺ but STOPS at V²⁺ — cannot reduce to V metal (E°cell negative). 3. You must show the full E°cell calculation: E°cell = E°(reduced species) − E°(Zn²⁺/Zn) = E° − (−0.76). 4. The overall colour change from yellow to purple is a classic observation in titration reactions.' } },
    {
      type: 'checklist',
      id: 'checklist-redox',
      data: {
        items: [
          { text: 'Redox: half-equation method — balance atoms, O (add H₂O), H (add H⁺), charge (add e⁻)', checked: false },
          { text: 'Fe²⁺ oxidised by MnO₄⁻: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O; purple disappears', checked: false },
          { text: 'Cr³⁺ (green) + H₂O₂ + NaOH → CrO₄²⁻ (yellow); oxidation +3 → +6', checked: false },
          { text: 'CrO₄²⁻ (yellow, alkaline) ↔ Cr₂O₇²⁻ (orange, acidic): NOT redox — Cr stays +6; acid shifts orange', checked: false },
          { text: 'Zn reduces Cr₂O₇²⁻: orange → green (Cr³⁺) → blue (Cr²⁺); both steps have positive E°cell', checked: false },
          { text: 'Vanadium with Zn: yellow(V⁵⁺) → blue(V⁴⁺) E°=+1.76 V → green(V³⁺) E°=+1.10 V → purple(V²⁺) E°=+0.50 V; stops at V²⁺', checked: false },
          { text: 'MnO₄⁻ by pH: acidic → Mn²⁺ (colourless); neutral → MnO₂ (brown); alkaline → MnO₄²⁻ (green)', checked: false },
          { text: 'Disproportionation: 2Cu⁺ → Cu + Cu²⁺; same element simultaneously oxidised and reduced', checked: false },
          { text: 'Copper/Iodide: 2Cu²⁺ + 4I⁻ → 2CuI(s) + I₂(aq); forms off-white ppt + brown solution', checked: false }
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
        text: 'Understand: Redox half-equations balance atoms, charges, and electrons. Apply: Write 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O from half-equations. Analyse: Explain why Cr₂O₇²⁻ turning yellow on adding NaOH is NOT a redox change. Evaluate: Use E° values to show Zn can reduce V³⁺ → V²⁺ but NOT V²⁺ → V.'
      },
      terms: []
    },
    {
      type: 'summary',
      id: 'summary-redox',
      data: {
        text: 'Transition metals undergo redox chemistry via variable oxidation states. Fe²⁺ → Fe³⁺ by MnO₄⁻: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Cr³⁺ (green) → CrO₄²⁻ (yellow) with H₂O₂/NaOH. CrO₄²⁻ ↔ Cr₂O₇²⁻ is a pH-dependent equilbrium (NOT redox, Cr stays +6). Zn reduces Cr₂O₇²⁻: orange→green→blue. Vanadium with Zn: yellow(V⁵⁺)→blue(V⁴⁺, E°=+1.76V)→green(V³⁺, +1.10V)→purple(V²⁺, +0.50V); stops at V²⁺ (−0.42V not feasible). MnO₄⁻: acidic→Mn²⁺; neutral→MnO₂; alkaline→MnO₄²⁻. Disproportionation: 2Cu⁺→Cu+Cu²⁺.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-half-equation-method',
        prompt: 'Outline the 8-step half-equation method for balancing redox equations.'
      },
      {
        id: 'cue-2',
        blockId: 'p-iron-oxidation-example',
        prompt: 'Write the equation for Fe²⁺ oxidation by MnO₄⁻ and describe the colour change.'
      },
      {
        id: 'cue-3',
        blockId: 'callout-chromate-dichromate',
        prompt: 'Write the equation for the CrO₄²⁻ ↔ Cr₂O₇²⁻ equilibrium. Why is this NOT a redox reaction?'
      },
      {
        id: 'cue-4',
        blockId: 'table-vanadium-redox',
        prompt: 'Give the E°cell values and colour sequence when Zn reduces vanadium from +5 to +2. Why does it stop at +2?'
      },
      {
        id: 'cue-5',
        blockId: 'p-copper-disproportionation',
        prompt: 'Define disproportionation and write the equation for Cu⁺ disproportionation with half-equations.'
      }
    ],
    summaryText: 'Half-equation method: balance O (H₂O), H (H⁺), charge (e⁻). Fe²⁺ + MnO₄⁻: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O. Cr³⁺ → CrO₄²⁻ (yellow) in alkali. CrO₄²⁻ ↔ Cr₂O₇²⁻: NOT redox. Zn+Cr₂O₇²⁻: orange→green→blue. V with Zn: yellow→blue(+1.76V)→green(+1.10V)→purple(+0.50V); stops at V²⁺. MnO₄⁻: Mn²⁺(acid)/MnO₂(neutral)/MnO₄²⁻(alkali). 2Cu⁺→Cu+Cu²⁺ (disproportionation).',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Transition Metal Redox Chemistry',
      detail: 'Redox reactions of transition metals are used extensively in analytical chemistry (permanganate titrations), industrial processes, and biological systems. The variable oxidation states enable reversible electron transfer.',
      year: '2023',
      source: 'A-Level Chemistry Redox',
      tags: ['redox', 'Fe', 'Cr', 'Mn', 'disproportionation']
    }
  ]
};
