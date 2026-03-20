/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 2
 * "Full and ionic equation balancing"
 * Source: Pearson Edexcel IAL Chemistry Student Book — Sections 1B.1
 */
export const note_chemistry_1_1_2 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Write balanced full, ionic and half equations including state symbols. Use correct arrow types. Know the four common lab acids and their formulae. Write equations for acid reactions with metals, metal oxides, metal hydroxides, alkalis, carbonates and hydrogencarbonates.' },
      terms: []
    },
    {
      id: 'h-lab-acids',
      type: 'heading',
      data: { text: 'The Four Common Lab Acids', level: 2 },
      terms: []
    },
    {
      id: 'table-lab-acids',
      type: 'comparisonTable',
      data: {
        caption: 'You must know these four acids — their names, formulae and uses throughout the course',
        headers: ['Acid Name', 'Formula', 'Notes'],
        rows: [
          ['Hydrochloric acid', 'HCl', 'Strong acid; used in many displacement and neutralisation reactions'],
          ['Sulfuric acid', 'H₂SO₄', 'Strong diprotic acid; used as a reagent and sometimes as a catalyst'],
          ['Nitric acid', 'HNO₃', 'Strong acid; forms nitrate salts in reactions'],
          ['Phosphoric acid', 'H₃PO₄', 'Weak acid; forms phosphate salts; appears in biochemistry contexts']
        ]
      },
      terms: ['Hydrochloric acid', 'Sulfuric acid', 'Nitric acid', 'Phosphoric acid']
    },
    {
      id: 'callout-acid-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Acid Formulae',
        text: 'These four acids appear throughout the A-Level course as reagents, catalysts and sources of ions. You must memorise their names and formulae. Hydrochloric (HCl), Sulfuric (H₂SO₄), Nitric (HNO₃), Phosphoric (H₃PO₄).'
      },
      terms: []
    },
    {
      id: 'h-acid-reactions',
      type: 'heading',
      data: { text: 'Types of Acid Reactions — General Rules', level: 2 },
      terms: []
    },
    {
      id: 'table-acid-reactions',
      type: 'comparisonTable',
      data: {
        caption: 'Reaction patterns for acids with different types of bases',
        headers: ['Acid reacts with…', 'Products', 'Example', 'Key test/observation'],
        rows: [
          ['Metal', 'Salt + Hydrogen gas (H₂)', 'Mg + 2HCl → MgCl₂ + H₂', 'H₂ burns with a squeaky pop'],
          ['Metal oxide', 'Salt + Water', 'CuO + H₂SO₄ → CuSO₄ + H₂O', 'Black solid (CuO) dissolves; blue solution forms'],
          ['Metal hydroxide (insoluble)', 'Salt + Water', 'Zn(OH)₂(s) + H₂SO₄(aq) → ZnSO₄(aq) + 2H₂O(l)', 'White solid dissolves; solution is colourless'],
          ['Alkali (soluble hydroxide)', 'Salt + Water', 'NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)', 'No visible change; temperature rises'],
          ['Metal carbonate', 'Salt + Water + Carbon dioxide (CO₂)', 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂', 'Effervescence; CO₂ turns limewater cloudy'],
          ['Metal hydrogencarbonate', 'Salt + Water + Carbon dioxide (CO₂)', 'NaHCO₃ + HCl → NaCl + H₂O + CO₂', 'Effervescence; CO₂ turns limewater cloudy']
        ]
      },
      terms: ['Neutralisation', 'Effervescence']
    },
    {
      id: 'callout-carbonate-hco3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbonate vs Hydrogencarbonate',
        text: 'The carbonate ion is CO₃²⁻ (charge −2). The hydrogencarbonate ion is HCO₃⁻ (charge −1). Both react with acids to give the same products (salt + water + CO₂) but with different stoichiometry:<br/><br/>CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g)<br/>HCO₃⁻(aq) + H⁺(aq) → H₂O(l) + CO₂(g)'
      },
      terms: ['Carbonate', 'Hydrogencarbonate']
    },
    {
      id: 'h-state',
      type: 'heading',
      data: { text: 'State Symbols', level: 2 },
      terms: []
    },
    {
      id: 'table-states',
      type: 'comparisonTable',
      data: {
        caption: 'State symbols used in chemical equations',
        headers: ['Symbol', 'Meaning'],
        rows: [
          ['(s)', 'solid'],
          ['(l)', 'liquid'],
          ['(g)', 'gas'],
          ['(aq)', 'aqueous — dissolved in water']
        ]
      },
      terms: []
    },
    {
      id: 'callout-state-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: (l) vs (aq)',
        text: 'A common error is to write H₂O(aq) instead of H₂O(l). Water is (l) unless specifically dissolved in another medium. Also note (g) must be used after atoms and ions when writing ionisation energy equations.'
      },
      terms: []
    },
    {
      id: 'h-balancing',
      type: 'heading',
      data: { text: 'Balancing Equations', level: 2 },
      terms: []
    },
    {
      id: 'list-balancing',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Equations are balanced using whole-number <strong>coefficients</strong> placed in front of formulae — formulae themselves must never be altered.',
          'Fractional coefficients (e.g. ½) are acceptable in thermochemical and combustion equations.',
          'The number of atoms of <strong>each element</strong> must be equal on both sides.',
          'The total <strong>charge</strong> must also be equal on both sides — critical for ionic and half equations.',
          'A useful balancing order: metals → non-metals → oxygen → hydrogen.'
        ]
      }
    },
    {
      id: 'callout-balance-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Balancing H₂O₂ decomposition',
        text: 'Description: hydrogen peroxide decomposes to water and oxygen.<br/><br/>First attempt (unbalanced):<br/>H₂O₂ → H₂O + O₂<br/><br/>Check: 2 H on each side ✓ but O: 2 left, 3 right ✗<br/><br/>Balanced:<br/><strong>2H₂O₂ → 2H₂O + O₂</strong>'
      },
      terms: []
    },
    {
      id: 'callout-arrows',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Arrow Types in Equations',
        text: '• <strong>→</strong> (single-headed arrow) — used for <em>irreversible reactions</em> that go to completion.<br/>• <strong>⇌</strong> (double-headed / reversible arrow) — used for <em>equilibrium reactions</em>, where products can reform reactants.<br/>• Use → in both half equations and ionic equations.<br/>• Never use ⇌ unless the context explicitly involves a reversible equilibrium.'
      }
    },
    {
      id: 'h-ionic',
      type: 'heading',
      data: { text: 'Writing Ionic Equations', level: 2 },
      terms: []
    },
    {
      id: 'list-ionic-intro',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'An <strong>ionic equation</strong> shows only the species that actually change in a reaction.',
          '<strong>Spectator ions</strong> are ions that appear unchanged on both sides — they take no part in the reaction and are cancelled out.',
          'A <strong>full ionic equation</strong> shows all dissolved species (including spectators) as separate ions.',
          'The <strong>simplest ionic equation</strong> (net ionic equation) has all spectator ions removed.'
        ]
      }
    },
    {
      id: 'list-ionic-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Write the full, balanced equation with correct state symbols.',
          'Split any soluble ionic compounds labelled (aq), and any strong acids and strong alkalis in (aq), into their separate ions.',
          'Cancel any ions that appear identically and unchanged on both sides — these are <strong>spectator ions</strong>.',
          'What remains is the <strong>simplest ionic equation</strong>. Check charge is balanced on both sides.'
        ]
      }
    },
    {
      id: 'callout-split-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rule: When to Split Compounds into Ions',
        text: '<strong>Split into ions (aq solution only):</strong><br/>• Soluble ionic salts: NaCl(aq) → Na⁺(aq) + Cl⁻(aq)<br/>• Strong acids: HCl(aq) → H⁺(aq) + Cl⁻(aq); H₂SO₄(aq) → 2H⁺(aq) + SO₄²⁻(aq)<br/>• Strong alkalis: NaOH(aq) → Na⁺(aq) + OH⁻(aq)<br/><br/><strong>Do NOT split:</strong><br/>• Solids (s): CaCO₃(s), Cu(s) — keep as complete formula<br/>• Water: H₂O(l) — always written as H₂O(l), never as ions<br/>• Gases (g): CO₂(g), H₂(g) — keep as formula<br/>• Weak acids: CH₃COOH(aq) — mostly un-ionised in solution'
      }
    },
    {
      id: 'svg-ionic-steps',
      type: 'svg',
      data: {
        caption: 'Four-step process for writing a simplest ionic equation',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 180" width="760" height="180"><rect x="10" y="20" width="155" height="80" rx="8" fill="#2d1b69" stroke="#6d28d9" stroke-width="1.5"/><text x="88" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#7c3aed" font-weight="bold">STEP 1</text><text x="88" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#4c1d95">Full equation</text><text x="88" y="76" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">Balance atoms &amp;</text><text x="88" y="90" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">add state symbols</text><line x1="165" y1="60" x2="197" y2="60" stroke="#6d28d9" stroke-width="2"/><polygon points="197,55 205,60 197,65" fill="#6d28d9"/><rect x="205" y="20" width="155" height="80" rx="8" fill="#1e3a8a" stroke="#2563eb" stroke-width="1.5"/><text x="282" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#1d40af" font-weight="bold">STEP 2</text><text x="282" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a">Expand ionic</text><text x="282" y="76" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">Split (aq) ionic</text><text x="282" y="90" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">compounds into ions</text><line x1="360" y1="60" x2="392" y2="60" stroke="#6d28d9" stroke-width="2"/><polygon points="392,55 400,60 392,65" fill="#6d28d9"/><rect x="400" y="20" width="155" height="80" rx="8" fill="#78350f" stroke="#d97706" stroke-width="1.5"/><text x="477" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#92400e" font-weight="bold">STEP 3</text><text x="477" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#78350f">Cancel spectators</text><text x="477" y="76" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">Remove ions on</text><text x="477" y="90" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">both sides unchanged</text><line x1="555" y1="60" x2="587" y2="60" stroke="#6d28d9" stroke-width="2"/><polygon points="587,55 595,60 587,65" fill="#6d28d9"/><rect x="595" y="20" width="155" height="80" rx="8" fill="#0a2e1a" stroke="#059669" stroke-width="1.5"/><text x="672" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#065f46" font-weight="bold">STEP 4</text><text x="672" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#064e3b">Simplest ionic eq.</text><text x="672" y="76" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">Check charge</text><text x="672" y="90" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">balanced both sides</text><text x="380" y="148" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#1e40af" font-weight="bold">e.g. NaOH(aq) + HNO&#x2083;(aq) &#x2192; NaNO&#x2083;(aq) + H&#x2082;O(l) simplifies to: H&#x207A;(aq) + OH&#x207B;(aq) &#x2192; H&#x2082;O(l)</text><text x="380" y="165" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#374151">Na&#x207A; and NO&#x2083;&#x207B; are spectator ions and cancel out</text></svg>'
      }
    },
    {
      id: 'callout-ionic-w1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Neutralisation of NaOH by HNO₃',
        text: 'Full: NaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l)<br/><br/>Expanded: Na⁺(aq) + OH⁻(aq) + H⁺(aq) + NO₃⁻(aq) → Na⁺(aq) + NO₃⁻(aq) + H₂O(l)<br/><br/>Cancel spectators (Na⁺ and NO₃⁻):<br/><strong>H⁺(aq) + OH⁻(aq) → H₂O(l)</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ionic-w2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Precipitation of lead(II) sulfate',
        text: 'Full: Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s) + 2NaNO₃(aq)<br/><br/>Expanded: Pb²⁺(aq) + 2NO₃⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → PbSO₄(s) + 2Na⁺(aq) + 2NO₃⁻(aq)<br/><br/>Cancel spectators (Na⁺ and NO₃⁻):<br/><strong>Pb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)</strong>'
      },
      terms: []
    },
    {
      id: 'callout-ionic-w3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: CO₂ + Ca(OH)₂ (no spectators)',
        text: 'Full: CO₂(g) + Ca(OH)₂(aq) → CaCO₃(s) + H₂O(l)<br/><br/>Expanded: CO₂(g) + Ca²⁺(aq) + 2OH⁻(aq) → CaCO₃(s) + H₂O(l)<br/><br/>No ions appear identically on both sides, so this <strong>IS already the simplest ionic equation</strong>.<br/>(CO₂ and H₂O are molecules, not ions — their formulae are not split.)'
      },
      terms: []
    },
    {
      id: 'h-half-eq',
      type: 'heading',
      data: { text: 'Half Equations', level: 2 }
    },
    {
      id: 'list-half-eq',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A <strong>half equation</strong> shows one half of a redox reaction — either the <em>oxidation</em> or <em>reduction</em> step — including the electrons transferred.',
          '<strong>Oxidation half equation</strong> — electrons appear on the <em>right</em> (electrons are lost). OIL — Oxidation Is Loss.',
          '<strong>Reduction half equation</strong> — electrons appear on the <em>left</em> (electrons are gained). RIG — Reduction Is Gain.',
          'Balance atoms first, then balance charge by adding electrons (e⁻) to the appropriate side.',
          'To combine two half equations: multiply each by a factor so the number of electrons cancels exactly (electrons lost = electrons gained), then add them together.'
        ]
      }
    },
    {
      id: 'callout-half-eq-w1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1: Mg reacting with Cl₂',
        text: '<strong>Oxidation (Mg loses 2e⁻):</strong><br/>Mg(s) → Mg²⁺(aq) + 2e⁻<br/><br/><strong>Reduction (Cl₂ gains 2e⁻):</strong><br/>Cl₂(g) + 2e⁻ → 2Cl⁻(aq)<br/><br/><strong>Combined (2e⁻ cancel directly):</strong><br/>Mg(s) + Cl₂(g) → Mg²⁺(aq) + 2Cl⁻(aq)'
      }
    },
    {
      id: 'callout-half-eq-w2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2: Fe displacing Cu²⁺',
        text: '<strong>Oxidation (Fe loses 2e⁻):</strong><br/>Fe(s) → Fe²⁺(aq) + 2e⁻<br/><br/><strong>Reduction (Cu²⁺ gains 2e⁻):</strong><br/>Cu²⁺(aq) + 2e⁻ → Cu(s)<br/><br/><strong>Combined (2e⁻ cancel — no scaling needed):</strong><br/>Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s)'
      }
    },
    {
      id: 'callout-half-eq-w3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3: Al³⁺ and Cu²⁺ (unequal electrons — scale up)',
        text: '<strong>Oxidation (Al loses 3e⁻):</strong><br/>Al(s) → Al³⁺(aq) + 3e⁻<br/><br/><strong>Reduction (Cu²⁺ gains 2e⁻):</strong><br/>Cu²⁺(aq) + 2e⁻ → Cu(s)<br/><br/><strong>Scale to cancel electrons (LCM of 2 and 3 = 6):</strong><br/>×2: 2Al(s) → 2Al³⁺(aq) + 6e⁻<br/>×3: 3Cu²⁺(aq) + 6e⁻ → 3Cu(s)<br/><br/><strong>Combined (6e⁻ cancel):</strong><br/>2Al(s) + 3Cu²⁺(aq) → 2Al³⁺(aq) + 3Cu(s)'
      }
    },
    {
      id: 'callout-half-eq-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Half Equation Exam Tips',
        text: '• Always check that <strong>charge is balanced</strong> on both sides of each half equation.<br/>• If electron counts differ (e.g. 3e⁻ vs 2e⁻), multiply each half equation by the LCM factor (e.g. ×2 and ×3 to give 6e⁻ cancelling).<br/>• State symbols are required in half equations in exam answers.<br/>• <strong>e⁻ must never appear in the final combined ionic equation</strong> — they must cancel completely.'
      }
    },
    {
      id: 'svg-equation-taxonomy',
      type: 'svg',
      data: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 420" font-family="system-ui,sans-serif"><text x="350" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b" letter-spacing="1">TYPES OF CHEMICAL EQUATIONS</text><!-- Root box --><rect x="220" y="36" width="260" height="50" rx="10" fill="rgba(99,102,241,0.3)" stroke="#818cf8" stroke-width="2"/><text x="350" y="58" text-anchor="middle" font-size="13" font-weight="800" fill="#1e293b">Chemical Equation</text><text x="350" y="75" text-anchor="middle" font-size="9.5" fill="#2d2d72">Must be balanced — atoms AND charge equal on both sides</text><!-- Trunk down to 3 branches --><line x1="350" y1="86" x2="350" y2="110" stroke="#818cf8" stroke-width="1.5"/><line x1="140" y1="110" x2="560" y2="110" stroke="#818cf8" stroke-width="1.5"/><line x1="140" y1="110" x2="140" y2="130" stroke="#818cf8" stroke-width="1.5"/><line x1="350" y1="110" x2="350" y2="130" stroke="#818cf8" stroke-width="1.5"/><line x1="560" y1="110" x2="560" y2="130" stroke="#818cf8" stroke-width="1.5"/><!-- LEFT: Full equation --><rect x="30" y="130" width="220" height="100" rx="8" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><text x="140" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="#34d399">FULL (Molecular) Equation</text><text x="140" y="169" text-anchor="middle" font-size="9" fill="#065f46">All species written as full formulae</text><text x="140" y="185" text-anchor="middle" font-size="9" fill="#065f46">State symbols required</text><text x="140" y="201" text-anchor="middle" font-size="9" fill="#065f46">Coefficients to balance atoms</text><text x="140" y="218" text-anchor="middle" font-size="8.5" fill="#065f46">e.g. NaOH(aq) + HNO₃(aq) →</text><text x="140" y="230" text-anchor="middle" font-size="8.5" fill="#065f46">NaNO₃(aq) + H₂O(l)</text><!-- CENTRE: Full ionic --><rect x="270" y="130" width="160" height="100" rx="8" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="1.5"/><text x="350" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa">FULL IONIC</text><text x="350" y="169" text-anchor="middle" font-size="9" fill="#1250a0">Split all (aq) ionic species</text><text x="350" y="185" text-anchor="middle" font-size="9" fill="#1250a0">into individual ions</text><text x="350" y="201" text-anchor="middle" font-size="9" fill="#1250a0">Spectator ions still shown</text><text x="350" y="218" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Na⁺ + OH⁻ + H⁺ + NO₃⁻ →</text><text x="350" y="230" text-anchor="middle" font-size="8.5" fill="#1e3a8a">Na⁺ + NO₃⁻ + H₂O</text><!-- RIGHT: Simplest ionic --><rect x="452" y="130" width="220" height="100" rx="8" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="1.5"/><text x="562" y="151" text-anchor="middle" font-size="11" font-weight="700" fill="#fb923c">SIMPLEST / NET IONIC</text><text x="562" y="169" text-anchor="middle" font-size="9" fill="#532407">Cancel spectator ions</text><text x="562" y="185" text-anchor="middle" font-size="9" fill="#532407">Shows only reacting species</text><text x="562" y="201" text-anchor="middle" font-size="9" fill="#532407">⭐ Most commonly tested</text><text x="562" y="218" text-anchor="middle" font-size="8.5" fill="#44370a">H⁺(aq) + OH⁻(aq) →</text><text x="562" y="230" text-anchor="middle" font-size="8.5" fill="#44370a">H₂O(l)   ← spectators removed</text><!-- HALF EQUATIONS branch down from full ionic --><line x1="350" y1="230" x2="350" y2="254" stroke="#e879f9" stroke-width="1.5" stroke-dasharray="4,3"/><rect x="246" y="254" width="208" height="96" rx="8" fill="rgba(232,121,249,0.15)" stroke="#e879f9" stroke-width="1.5"/><text x="350" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="#e879f9">HALF EQUATIONS</text><text x="350" y="289" text-anchor="middle" font-size="9" fill="#4a1040">Show electron transfer in redox</text><text x="350" y="305" text-anchor="middle" font-size="9" fill="#4a1040">OIL: Oxidation → e⁻ on right</text><text x="350" y="320" text-anchor="middle" font-size="9" fill="#4a1040">RIG: Reduction → e⁻ on left</text><text x="350" y="336" text-anchor="middle" font-size="8.5" fill="#2d1b69">Mg → Mg²⁺ + 2e⁻  (oxidation)</text><text x="350" y="348" text-anchor="middle" font-size="8.5" fill="#2d1b69">Cl₂ + 2e⁻ → 2Cl⁻  (reduction)</text><!-- Arrow types row --><line x1="10" y1="374" x2="690" y2="374" stroke="#374151" stroke-width="1"/><text x="350" y="392" text-anchor="middle" font-size="9" fill="#2d2d72" font-weight="600">Arrow guide:  → irreversible (goes to completion)   ⇌ reversible / equilibrium   (never use ⇌ in half equations or ionic equations)</text></svg>',
        caption: 'Equation taxonomy — all 4 types compared. The simplest ionic equation (net ionic) is the most tested in A-Level exams. Half equations are used exclusively in redox reactions.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-states', prompt: 'What do the four state symbols (s), (l), (g) and (aq) mean?' },
      { id: 'c2', blockId: 'list-ionic-steps', prompt: 'Describe the four steps for deriving a simplest ionic equation from a full equation.' },
      { id: 'c3', blockId: 'callout-ionic-w2', prompt: 'Write the simplest ionic equation for: Pb(NO₃)₂(aq) + Na₂SO₄(aq) → PbSO₄(s) + 2NaNO₃(aq).' },
      { id: 'c4', blockId: 'callout-split-rules', prompt: 'State three types of substance you must NOT split into ions when writing ionic equations, and explain why.' },
      { id: 'c5', blockId: 'table-lab-acids', prompt: 'State the names and formulae of the four common lab acids.' },
      { id: 'c6', blockId: 'table-acid-reactions', prompt: 'What products form when an acid reacts with (a) a metal, (b) a carbonate?' },
      { id: 'c7', blockId: 'callout-carbonate-hco3', prompt: 'Write the ionic equations for carbonate and hydrogencarbonate reacting with acid. What is the key difference?' },
      { id: 'c8', blockId: 'callout-half-eq-w1', prompt: 'Write the oxidation and reduction half equations for Mg reacting with Cl₂, then combine them.' },
      { id: 'c9', blockId: 'callout-half-eq-w3', prompt: 'Write the half equations for Al and Cu²⁺ reacting, and explain why you need to scale them before combining.' }
    ],
    summaryText: 'Four lab acids: HCl, H₂SO₄, HNO₃, H₃PO₄. Acid+Metal → salt+H₂ (squeaky pop). Acid+Metal oxide/hydroxide → salt+H₂O. Acid+Alkali → salt+H₂O (ionic: H⁺+OH⁻→H₂O). Acid+Carbonate/HCO₃⁻ → salt+H₂O+CO₂ (turns limewater cloudy). State symbols: (s)(l)(g)(aq). → irreversible; ⇌ equilibrium. Ionic equations: expand (aq) ionic compounds, cancel spectator ions. Never split solids, liquids, gases, weak acids or water. Half equations: OIL (oxidation — e⁻ on right); RIG (reduction — e⁻ on left). Combine by making e⁻ counts equal (LCM), then cancel. Final equation must have no e⁻.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_2;