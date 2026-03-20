/**
 * Seed note: Chemistry · Unit 1 · Topic 1 · Subtopic 9
 * "Equations from test-tube observations"
 * Source: Pearson Edexcel IAL Chemistry — Sections 1B.2, 1B.3, 1B.4
 * Updated with flame test, halide identification and decomposition content from video analysis.
 */
export const note_chemistry_1_1_9 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Relate ionic and full equations to observations from simple test-tube reactions: reactions of acids (with metals, alkalis, carbonates), displacement reactions, precipitation reactions, flame tests, and halide/sulfate identification.' },
      terms: []
    },
    {
      id: 'h-acids',
      type: 'heading',
      data: { text: 'Reactions of Acids', level: 2 },
      terms: []
    },
    {
      id: 'table-acids',
      type: 'comparisonTable',
      data: {
        caption: 'Acid reactions — observations, full and ionic equations',
        headers: ['Reaction Type', 'Observation', 'General Equation', 'Ionic Equation'],
        rows: [
          ['<strong>Acid + Metal</strong>', 'Bubbles of colourless gas (H₂). Metal dissolves. Solution forms if salt soluble.<br/><em>(Test: gas burns with a squeaky pop)</em>', 'Mg + 2HCl → MgCl₂ + H₂', 'Mg(s) + 2H⁺(aq) → Mg²⁺(aq) + H₂(g)'],
          ['<strong>Acid + Alkali</strong>', 'No visible change. Temperature rise.', 'NaOH + HCl → NaCl + H₂O', 'H⁺(aq) + OH⁻(aq) → H₂O(l)'],
          ['<strong>Acid + Metal Oxide</strong>', 'Solid dissolves in acid. Solution forms.', 'CuO + H₂SO₄ → CuSO₄ + H₂O', 'CuO(s) + 2H⁺(aq) → Cu²⁺(aq) + H₂O(l)'],
          ['<strong>Acid + Carbonate</strong>', 'Effervescence (bubbles of CO₂). Solid/solution dissolves.<br/><em>(Test: gas turns limewater cloudy)</em>', 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂', 'CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g)'],
          ['<strong>Acid + Hydrogencarbonate</strong>', 'Effervescence (bubbles of CO₂).<br/><em>(Test: gas turns limewater cloudy)</em>', 'NaHCO₃ + HCl → NaCl + H₂O + CO₂', 'HCO₃⁻(aq) + H⁺(aq) → H₂O(l) + CO₂(g)']
        ]
      },
      terms: ['Neutralisation', 'Displacement']
    },
    {
      id: 'h-displacement',
      type: 'heading',
      data: { text: 'Metal Displacement Reactions', level: 2 },
      terms: []
    },
    {
      id: 'list-displacement',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'A more reactive element displaces a less reactive element from its compound.',
          'These are <strong>redox reactions</strong> — electrons transfer from the reactive metal (oxidised) to the metal ion (reduced).',
          'Metal displacement in solution occurs spontaneously at room temperature when the reactivity difference is sufficient.',
          'Solid-state displacement (e.g. thermite) requires external heating to initiate because solids cannot mix at a molecular level at room temperature.',
          'Halogen displacement: a more reactive halogen displaces a less reactive halide ion from its aqueous salt solution.',
          'Reactivity of metals (most reactive at top): K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au.',
          'Reactivity of halogens: F₂ > Cl₂ > Br₂ > I₂ (reactivity decreases down Group 7).'
        ]
      },
      terms: ['Displacement reaction']
    },
    {
      id: 'callout-thermite',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Thermite Reaction (Solid-State Displacement)',
        text: 'A highly exothermic solid-state displacement between aluminium powder and iron(III) oxide. Because it involves two solids, it requires very high heat (e.g., from a burning magnesium ribbon) to kickstart the reaction.<br/><br/><strong>Equation:</strong> 2Al(s) + Fe₂O₃(s) → Al₂O₃(s) + 2Fe(l)<br/><br/>The incredibly high temperatures produced melt the iron product, which is used practically to weld railway lines together.'
      },
      terms: ['Thermite reaction']
    },
    {
      id: 'callout-reactivity-series',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Displacement and the Reactivity Series',
        text: 'Displacement reactions follow the <strong>reactivity series</strong>: a more reactive metal (or halogen) replaces a less reactive one from its compound.<br/><br/>Key points:<br/>• Metal + aqueous salt solution → no energy input needed if the more reactive metal is sufficiently above the other.<br/>• Solid-state displacement (e.g. thermite) requires high temperatures to begin.<br/>• The more reactive metal is <strong>oxidised</strong> (loses electrons); the less reactive metal ion is <strong>reduced</strong> (gains electrons) — these are <em>redox</em> reactions (covered in depth in Topic 8).'
      },
      terms: ['Reactivity series']
    },
    {
      id: 'callout-halogens',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Halogen Displacement',
        text: 'A more reactive halogen will displace a less reactive halogen from its halide solution. Reactivity decreases down Group 7 (F₂ > Cl₂ > Br₂ > I₂).<br/><br/>Example: Chlorine gas passed through potassium bromide solution.<br/><strong>Equation:</strong> Cl₂(g) + 2KBr(aq) → 2KCl(aq) + Br₂(aq)<br/><strong>Ionic:</strong> Cl₂(g) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)<br/><em>Observation: Colourless solution turns orange/brown due to the formation of aqueous bromine.</em>'
      },
      terms: ['Halogen displacement']
    },
    {
      id: 'table-halogen-disp',
      type: 'comparisonTable',
      data: {
        caption: 'Halogen displacement — which reactions occur (✓) or do not (✗)',
        headers: ['Halogen Added', 'KF(aq)', 'KCl(aq)', 'KBr(aq)', 'KI(aq)'],
        rows: [
          ['F₂', '✗ (F₂ itself not used in school lab)', '✓ → Cl⁻ + F₂ product', '✓ → Br₂ formed', '✓ → I₂ formed'],
          ['Cl₂', 'N/A', '✗ (same element)', '✓ → orange-brown Br₂', '✓ → dark brown I₂'],
          ['Br₂', 'N/A', 'N/A', '✗ (same element)', '✓ → dark brown I₂'],
          ['I₂', 'N/A', 'N/A', 'N/A', '✗ (same element)']
        ]
      },
      terms: []
    },
    {
      id: 'callout-halogen-obs',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Colour Changes in Halogen Displacement Reactions',
        text: 'Colour observations (aqueous layer; organic solvent layer colours noted in brackets):<br/><br/>• <strong>Cl₂ into KBr(aq):</strong> colourless → orange-brown (Br₂ produced in aqueous layer)<br/>• <strong>Cl₂ into KI(aq):</strong> colourless → dark brown (I₂ produced); violet/purple in organic solvent layer<br/>• <strong>Br₂ into KI(aq):</strong> orange-brown solution → darker brown (I₂ produced)<br/><br/>Ionic equations:<br/>• Cl₂(g) + 2Br⁻(aq) → 2Cl⁻(aq) + Br₂(aq)<br/>• Cl₂(g) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq)<br/>• Br₂(aq) + 2I⁻(aq) → 2Br⁻(aq) + I₂(aq)<br/><br/><em>In each case the more reactive halogen is reduced (gains electrons); the halide ion is oxidised (loses electrons).</em>'
      },
      terms: []
    },
    {
      id: 'callout-displacement',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Mg displacing Cu from CuSO₄(aq)',
        text: '<strong>Observation:</strong> Blue solution becomes colourless. Brown solid (copper metal) forms on the magnesium.<br/><br/>Full: Mg(s) + CuSO₄(aq) → Cu(s) + MgSO₄(aq)<br/>Ionic: Mg(s) + Cu²⁺(aq) → Cu(s) + Mg²⁺(aq)<br/><br/>Mg is oxidised (loses 2e⁻); Cu²⁺ is reduced (gains 2e⁻).<br/><br/><em>No heating required — Mg is higher than Cu on the reactivity series so the reaction occurs spontaneously at room temperature.</em>'
      },
      terms: []
    },
    {
      id: 'callout-cu-ag',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: Cu wire + Silver Nitrate Solution',
        text: '<strong>Setup:</strong> A copper wire is placed into colourless silver nitrate solution, AgNO₃(aq).<br/><br/><strong>Observations:</strong><br/>• A grey/silver metallic deposit forms on the copper wire (solid silver metal displaced).<br/>• The colourless solution gradually turns <strong>blue</strong> (Cu²⁺ ions forming copper nitrate in solution).<br/><br/><strong>Full equation:</strong> Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)<br/><strong>Ionic equation:</strong> Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)<br/><br/>Copper (higher on reactivity series) displaces silver. This is a <strong>2:1 mole ratio</strong> (2 mol Ag produced per 1 mol Cu) — a common exam calculation.'
      },
      terms: []
    },
    {
      id: 'svg-cu-ag',
      type: 'svg',
      data: {
        caption: 'Cu wire in AgNO₃(aq): observations before and after',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" font-family="sans-serif" font-size="13">
  <!-- BEFORE beaker -->
  <rect x="20" y="60" width="180" height="130" rx="6" fill="#1c3a64" stroke="#90caf9" stroke-width="2"/>
  <text x="110" y="50" text-anchor="middle" font-weight="bold" fill="#1565c0">BEFORE</text>
  <!-- solution -->
  <rect x="25" y="100" width="170" height="85" rx="4" fill="#1c3a64" stroke="none"/>
  <text x="110" y="145" text-anchor="middle" fill="#1565c0" font-size="12">AgNO₃(aq)</text>
  <text x="110" y="162" text-anchor="middle" fill="#546e7a" font-size="11">colourless</text>
  <!-- copper wire before -->
  <rect x="100" y="65" width="8" height="90" rx="3" fill="#b87333"/>
  <text x="130" y="90" fill="#b87333" font-size="11">Cu wire</text>

  <!-- arrow -->
  <text x="230" y="130" font-size="28" fill="#555">→</text>

  <!-- AFTER beaker -->
  <rect x="280" y="60" width="180" height="130" rx="6" fill="#1c3a64" stroke="#42a5f5" stroke-width="2"/>
  <text x="370" y="50" text-anchor="middle" font-weight="bold" fill="#1565c0">AFTER</text>
  <!-- blue solution -->
  <rect x="285" y="100" width="170" height="85" rx="4" fill="#1c3a64" stroke="none"/>
  <text x="370" y="145" text-anchor="middle" fill="#1565c0" font-size="12">Cu(NO₃)₂(aq)</text>
  <text x="370" y="162" text-anchor="middle" fill="#1565c0" font-size="11">BLUE solution</text>
  <!-- copper wire with silver deposit -->
  <rect x="360" y="65" width="8" height="90" rx="3" fill="#b87333"/>
  <!-- silver deposit blobs -->
  <ellipse cx="358" cy="80" rx="7" ry="4" fill="#1e293b"/>
  <ellipse cx="370" cy="95" rx="6" ry="3.5" fill="#1e293b"/>
  <ellipse cx="356" cy="110" rx="8" ry="4" fill="#bdbdbd"/>
  <ellipse cx="368" cy="125" rx="5" ry="3" fill="#1e293b"/>
  <text x="390" y="88" fill="#757575" font-size="11">Ag(s)</text>
  <text x="390" y="102" fill="#757575" font-size="11">deposit</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-gastests',
      type: 'heading',
      data: { text: 'Gas Tests', level: 2 },
      terms: []
    },
    {
      id: 'table-gastests',
      type: 'comparisonTable',
      data: {
        caption: 'Tests for common gases produced in reactions',
        headers: ['Gas', 'Test Method', 'Positive Result'],
        rows: [
          ['H₂ (hydrogen)', 'Hold a lit splint at the mouth of the test tube', 'Burns with a squeaky pop'],
          ['O₂ (oxygen)', 'Insert a glowing splint into the test tube', 'Glowing splint relights'],
          ['CO₂ (carbon dioxide)', 'Bubble the gas through Ca(OH)₂(aq) — limewater', 'Limewater turns milky/cloudy; white precipitate of CaCO₃ forms'],
          ['Cl₂ (chlorine)', 'Hold damp blue litmus paper at the mouth of the tube', 'Litmus paper is bleached — turns white/colourless; yellow-green colour visible'],
          ['NH₃ (ammonia)', 'Hold damp red litmus paper at the mouth of the tube', 'Litmus paper turns blue; sharp, pungent smell'],
          ['SO₂ (sulfur dioxide)', 'Bubble through acidified KMnO₄(aq) in fume hood', 'Purple KMnO₄ solution decolourises; sharp, choking smell']
        ]
      },
      terms: []
    },
    {
      id: 'h-precip',
      type: 'heading',
      data: { text: 'Precipitation Reactions', level: 2 },
      terms: []
    },
    {
      id: 'table-precip',
      type: 'comparisonTable',
      data: {
        caption: 'Common precipitation reactions and their uses as tests',
        headers: ['Test for…', 'Reagent Added', 'Observation', 'Ionic Equation'],
        rows: [
          ['CO₂ gas', 'Bubble through Ca(OH)₂ (limewater)', 'Milky-white precipitate', 'Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)'],
          ['Sulfate ions', 'BaCl₂(aq) in acidified HCl', 'White precipitate of BaSO₄', 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)'],
          ['Chloride ions', 'AgNO₃(aq) in dilute HNO₃', 'White precipitate of AgCl', 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)'],
          ['Bromide ions', 'AgNO₃(aq) in dilute HNO₃', 'Cream precipitate of AgBr', 'Ag⁺(aq) + Br⁻(aq) → AgBr(s)'],
          ['Iodide ions', 'AgNO₃(aq) in dilute HNO₃', 'Yellow precipitate of AgI', 'Ag⁺(aq) + I⁻(aq) → AgI(s)'],
          ['Lead(II) ions / Iodide ions', 'Mix Pb(NO₃)₂(aq) with KI(aq)', 'Bright yellow precipitate of PbI₂', 'Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s)']
        ]
      },
      terms: ['Precipitation reaction']
    },
    {
      id: 'callout-carbonate-test',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testing for Carbonate Ions (CO₃²⁻)',
        text: '<strong>Method:</strong><br/>1. Add dilute HCl (or other dilute acid) to the sample.<br/>2. Effervescence — bubbles of CO₂ gas are produced.<br/>3. Bubble the gas through Ca(OH)₂(aq) (limewater).<br/>4. Limewater turns <strong>milky/cloudy</strong> — confirms CO₂ and therefore carbonate ions.<br/><br/><strong>Ionic equation (acid + carbonate):</strong> CO₃²⁻(aq) + 2H⁺(aq) → H₂O(l) + CO₂(g)<br/><strong>Limewater precipitation equation:</strong> Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)<br/><br/><em>Note: Sulfite ions (SO₃²⁻) also produce a gas with acid, but SO₂ does not turn limewater milky — use the limewater test to distinguish CO₂ from SO₂.</em>'
      },
      terms: ['Carbonate']
    },
    {
      id: 'h-halide-ammonia',
      type: 'heading',
      data: { text: 'Distinguishing Halide Precipitates with Ammonia', level: 2 },
      terms: []
    },
    {
      id: 'callout-halide-ammonia',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Halide Identification Using Ammonia',
        text: 'After adding AgNO₃, all three halides give a precipitate — but their colours are similar enough to be confused. Add ammonia solution to distinguish them:<br/><br/><strong>AgCl (white)</strong> — dissolves in <em>dilute</em> NH₃(aq) ✓<br/><strong>AgBr (cream)</strong> — dissolves only in <em>concentrated</em> NH₃(aq) ✓<br/><strong>AgI (yellow)</strong> — <em>insoluble</em> in both dilute and concentrated NH₃(aq) ✗<br/><br/><em>Exam tip: Be very specific — "dilute" and "concentrated" ammonia give different results. Writing just "ammonia" is not sufficient for full marks.</em>'
      },
      terms: ['Silver chloride', 'Silver bromide', 'Silver iodide']
    },
    {
      id: 'h-sulfate-test',
      type: 'heading',
      data: { text: 'The Sulfate Test in Detail', level: 2 },
      terms: []
    },
    {
      id: 'callout-sulfate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testing for Sulfate Ions (SO₄²⁻)',
        text: '<strong>Method:</strong><br/>1. Acidify the test solution with dilute HCl (this removes carbonate and sulfite ions which would give false positives).<br/>2. Add barium chloride solution, BaCl₂(aq).<br/>3. If a <strong>white precipitate</strong> of barium sulfate (BaSO₄) forms, sulfate ions are present.<br/>4. The BaSO₄ precipitate is insoluble in dilute HCl — this confirms sulfate (unlike BaCO₃ or BaSO₃ which dissolve).<br/><br/><strong>Ionic equation:</strong> Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)'
      },
      terms: []
    },
    {
      id: 'h-naoh-tests',
      type: 'heading',
      data: { text: 'Identifying Metal Ions with NaOH', level: 2 },
      terms: []
    },
    {
      id: 'table-naoh',
      type: 'comparisonTable',
      data: {
        caption: 'Metal ion identification by adding NaOH(aq) to a solution',
        headers: ['Metal Ion', 'Observation', 'Precipitate Colour', 'Ionic Equation'],
        rows: [
          ['Fe²⁺ (iron(II))', 'Green gelatinous precipitate; turns rust-brown on standing in air (atmospheric oxidation to Fe(OH)₃)', 'Green → rust-brown', 'Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)'],
          ['Fe³⁺ (iron(III))', 'Rust-brown (reddish-brown) gelatinous precipitate', 'Rust-brown', 'Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)'],
          ['Cu²⁺ (copper(II))', 'Pale blue gelatinous precipitate', 'Pale blue', 'Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)'],
          ['Al³⁺ (aluminium)', 'White gelatinous precipitate; <em>dissolves in excess NaOH</em> → amphoteric behaviour', 'White (dissolves in excess)', 'Al³⁺(aq) + 3OH⁻(aq) → Al(OH)₃(s)'],
          ['Mg²⁺ (magnesium)', 'White gelatinous precipitate; does <em>not</em> dissolve in excess NaOH', 'White (persists in excess)', 'Mg²⁺(aq) + 2OH⁻(aq) → Mg(OH)₂(s)'],
          ['Ca²⁺ (calcium)', 'Slight white precipitate (sparingly soluble at low concentration)', 'White (slight)', 'Ca²⁺(aq) + 2OH⁻(aq) → Ca(OH)₂(s)']
        ]
      },
      terms: []
    },
    {
      id: 'callout-naoh-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Distinguishing White Precipitates with Excess NaOH',
        text: '<strong>Al³⁺ vs Mg²⁺/Ca²⁺:</strong><br/>• Al(OH)₃ — white precipitate — <em>dissolves in excess NaOH</em>, forming the tetrahydroxoaluminate ion: Al(OH)₃(s) + OH⁻(aq) → [Al(OH)₄]⁻(aq). This is because Al(OH)₃ is <strong>amphoteric</strong> (reacts with both acids and bases).<br/>• Mg(OH)₂ and Ca(OH)₂ — white precipitates that do <em>not</em> dissolve in excess NaOH.<br/><br/><em>Exam tip: The solubility test with excess NaOH is the key distinction — always add excess and check if the white precipitate dissolves.</em>'
      },
      terms: []
    },
    {
      id: 'h-flame',
      type: 'heading',
      data: { text: 'Flame Tests', level: 2 },
      terms: []
    },
    {
      id: 'callout-flame-method',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Flame Test Procedure',
        text: '<strong>Method:</strong><br/>1. Clean a nichrome wire loop by dipping it in concentrated HCl and heating it in a hot Bunsen burner flame until no colour is seen.<br/>2. Dip the clean wire in the solid compound (or its solution).<br/>3. Hold it in the <em>hottest part</em> of the blue Bunsen flame and observe the colour.<br/><br/><em>One reason for cleaning the wire first: to prevent contamination from previous tests affecting the result.</em>'
      },
      terms: ['Flame test', 'Nichrome wire']
    },
    {
      id: 'table-flame',
      type: 'comparisonTable',
      data: {
        caption: 'Flame test colours for common metal cations',
        headers: ['Metal Ion (Cation)', 'Flame Colour'],
        rows: [
          ['Li⁺ (Lithium)', 'Crimson / scarlet red'],
          ['Na⁺ (Sodium)', 'Persistent yellow-orange'],
          ['K⁺ (Potassium)', 'Lilac (pale violet)'],
          ['Ca²⁺ (Calcium)', 'Brick red / orange-red'],
          ['Sr²⁺ (Strontium)', 'Crimson red'],
          ['Ba²⁺ (Barium)', 'Apple green'],
          ['Cu²⁺ (Copper)', 'Blue-green']
        ]
      },
      terms: ['Flame test']
    },
    {
      id: 'callout-flame-tip',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Watch out: Lithium vs Strontium',
        text: 'Both Li⁺ and Sr²⁺ give <strong>crimson red</strong> flames — they can be difficult to distinguish by observation alone. If the question specifies a "crimson" or "bright red" flame take note of which group the element belongs to (Li is Group 1, Sr is Group 2) for context.'
      },
      terms: []
    },
    {
      id: 'h-nitrate',
      type: 'heading',
      data: { text: 'Thermal Decomposition of Nitrates', level: 2 },
      terms: []
    },
    {
      id: 'callout-nitrate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Decomposition of Nitrates on Heating',
        text: 'Nitrates decompose on heating in different ways depending on which Group the metal belongs to:<br/><br/><strong>Group 1 (except Li)</strong> → nitrite + oxygen:<br/>e.g. 2KNO₃(s) → 2KNO₂(s) + O₂(g)<br/><em>Test: relights a glowing splint (O₂)</em><br/><br/><strong>Group 1 lithium and Group 2 metals</strong> → metal oxide + NO₂ + oxygen:<br/>e.g. 2Ca(NO₃)₂(s) → 2CaO(s) + 4NO₂(g) + O₂(g)<br/><em>Test: brown gas (NO₂) + relights glowing splint (O₂)</em><br/><br/><strong>Transition metals (e.g. Cu)</strong> → metal oxide + NO₂ + O₂<br/>e.g. 2Cu(NO₃)₂(s) → 2CuO(s) + 4NO₂(g) + O₂(g)'
      },
      terms: ['Thermal decomposition', 'Nitrate']
    },
    {
      id: 'h-pastpapers',
      type: 'heading',
      data: { text: 'Past Paper Worked Examples', level: 2 },
      terms: []
    },
    {
      id: 'callout-pp-2019',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Jan 2019 MCQ: H₂SO₄(aq) + BaCl₂(aq)',
        text: '<strong>Question:</strong> Dilute sulfuric acid is mixed with barium chloride solution. What type of reaction is this?<br/><br/><strong>Key reasoning:</strong><br/>• H₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2HCl(aq)<br/>• A <strong>white precipitate</strong> of BaSO₄ forms from two aqueous solutions.<br/>• This is both a <strong>precipitation reaction</strong> (solid forms from solution) and the standard test for sulfate ions.<br/><br/><strong>Ionic equation:</strong> Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)'
      },
      terms: []
    },
    {
      id: 'callout-pp-2018',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Jan 2018: Ionic Equation for HCl + NaOH',
        text: '<strong>Question:</strong> Write the simplest ionic equation for the reaction between dilute hydrochloric acid and sodium hydroxide solution.<br/><br/><strong>Step 1 — Full equation:</strong> HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)<br/><br/><strong>Step 2 — Expand all aqueous ionic compounds:</strong><br/>H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)<br/><br/><strong>Step 3 — Cancel spectator ions</strong> (Na⁺ and Cl⁻ appear unchanged on both sides):<br/><strong>H⁺(aq) + OH⁻(aq) → H₂O(l)</strong><br/><br/><em>All other answer options contain spectator ions — these are incorrect for an ionic equation.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pp-2017',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Jan 2017: Cu + AgNO₃ — Ionic Equation from Masses',
        text: '<strong>Question:</strong> 1.270 g of copper is added to excess silver nitrate solution. 4.13 g of silver forms. Write the ionic equation for this reaction.<br/><br/><strong>Step 1 — Identify silver is always Ag⁺ (charge +1):</strong> options showing Ag²⁺ are immediately incorrect.<br/><br/><strong>Step 2 — Calculate moles:</strong><br/>n(Cu) = 1.270 ÷ 63.5 = <strong>0.0200 mol</strong><br/>n(Ag) = 4.13 ÷ 107.9 = <strong>0.0383 mol ≈ 0.0400 mol</strong><br/><br/><strong>Step 3 — Find mole ratio:</strong><br/>n(Ag) : n(Cu) = 0.040 : 0.020 = <strong>2 : 1</strong><br/><br/><strong>Answer — Correct ionic equation:</strong><br/>Cu(s) + 2Ag⁺(aq) → Cu²⁺(aq) + 2Ag(s)<br/><br/><em>Cu is oxidised (0 → +2); Ag⁺ is reduced (+1 → 0). Two moles of silver form per mole of copper.</em>'
      },
      terms: []
    },
    {
      id: 'checklist-1-1-9',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the observation AND write both the full AND ionic equation for acid + metal, acid + carbonate, acid + alkali, and acid + metal oxide reactions', checked: false },
          { text: 'Give the test and positive result for H₂ (squeaky pop), O₂ (relights splint), CO₂ (limewater milky), Cl₂ (bleaches litmus), and NH₃ (turns red litmus blue)', checked: false },
          { text: 'Write the ionic equation for each metal displacement worked example and state which species is oxidised and which is reduced', checked: false },
          { text: 'Determine whether a halogen displacement occurs using the reactivity trend F₂ > Cl₂ > Br₂ > I₂; state the colour change expected', checked: false },
          { text: 'Describe the sulfate test (BaCl₂/HCl → white BaSO₄) and each halide test (AgNO₃/HNO₃ → white/cream/yellow precipitate; use dilute/concentrated NH₃ to distinguish)', checked: false },
          { text: 'Name the flame colour for Li⁺ (crimson), Na⁺ (yellow), K⁺ (lilac), Ca²⁺ (orange-red), Sr²⁺ (crimson), Ba²⁺ (apple green), Cu²⁺ (blue-green)', checked: false },
          { text: 'Predict the colour of metal hydroxide precipitate with NaOH: Fe²⁺ green, Fe³⁺ rust-brown, Cu²⁺ pale blue, Al³⁺/Mg²⁺/Ca²⁺ white — and state that Al(OH)₃ dissolves in excess NaOH', checked: false },
          { text: 'Write equations for thermal decomposition of Group 1 nitrates (→ nitrite + O₂) and Group 2/Li nitrates (→ oxide + NO₂ + O₂)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Acid reactions follow predictable patterns: metal → H₂ (squeaky pop); carbonate/hydrogencarbonate → CO₂ (limewater milky); alkali → no visible change, H⁺ + OH⁻ → H₂O. Gas tests: H₂ = squeaky pop, O₂ = relights splint, CO₂ = limewater milky, Cl₂ = bleaches litmus, NH₃ = turns red litmus blue. Displacement is redox — more reactive displaces less reactive; halogen trend F₂>Cl₂>Br₂>I₂, Cl₂+2Br⁻→2Cl⁻+Br₂ (orange-brown). Ion tests: BaCl₂/HCl → white BaSO₄ (SO₄²⁻); AgNO₃/HNO₃ → AgCl white/AgBr cream/AgI yellow (halides, distinguish with NH₃ solubility); yellow PbI₂. Flame tests: Na=yellow, K=lilac, Ca=orange-red, Ba=green, Li/Sr=crimson, Cu²⁺=blue-green. NaOH precipitate colours: Fe²⁺=green, Fe³⁺=rust-brown, Cu²⁺=pale blue, Al³⁺/Mg²⁺/Ca²⁺=white (Al³⁺ dissolves in excess). Nitrate decomposition: Group 1 (not Li) → nitrite+O₂; Li and Group 2 → oxide+NO₂+O₂.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'table-acids', prompt: 'Describe the observation AND write the ionic equation for the reaction of excess magnesium with dilute hydrochloric acid.' },
      { id: 'c2', blockId: 'table-acids', prompt: 'What ion is the same in all acid-alkali neutralisation reactions? Write the ionic equation.' },
      { id: 'c3', blockId: 'callout-displacement', prompt: 'Magnesium is added to copper(II) sulfate solution. Describe the observations and write the ionic equation. State what is oxidised and what is reduced.' },
      { id: 'c4', blockId: 'callout-thermite', prompt: 'Write the chemical equation for the thermite reaction. State why it requires an initial heat source, and give a practical use of the process.' },
      { id: 'c5', blockId: 'callout-halogens', prompt: 'Write the ionic equation and state the observation when chlorine gas is passed into an aqueous solution of potassium bromide.' },
      { id: 'c6', blockId: 'table-precip', prompt: 'What observation is made when aqueous lead(II) nitrate is mixed with aqueous potassium iodide? Write the ionic equation.' },
      { id: 'c7', blockId: 'table-precip', prompt: 'Describe the test for sulfate ions and write the ionic equation for the precipitation.' },
      { id: 'c8', blockId: 'callout-halide-ammonia', prompt: 'AgNO₃ is added to an unknown solution and a cream precipitate forms. What halide ion is present? How would you confirm this using ammonia?' },
      { id: 'c9', blockId: 'table-flame', prompt: 'What flame colour is given by potassium ions? What colour is sodium, and what is the main complication when both might be present?' },
      { id: 'c10', blockId: 'callout-nitrate', prompt: 'What gas is produced when a Group 1 nitrate (not Li) is heated? Write the equation for the thermal decomposition of KNO₃.' },
      { id: 'c11', blockId: 'callout-cu-ag', prompt: 'A copper wire is placed in silver nitrate solution. State the two observations with explanations, and write the ionic equation.' },
      { id: 'c12', blockId: 'callout-pp-2017', prompt: '1.270 g Cu reacts with excess AgNO₃ giving 4.13 g Ag. Calculate the mole ratio and write the ionic equation.' },
      { id: 'c13', blockId: 'table-gastests', prompt: 'Give the test and positive result for: (a) hydrogen gas, (b) oxygen gas, (c) carbon dioxide gas.' },
      { id: 'c14', blockId: 'table-naoh', prompt: 'NaOH(aq) is added to unknown solution X and a green precipitate forms. Slowly the precipitate turns rust-brown. Identify the ion present and write both ionic equations (formation and oxidation).' }
    ],
    summaryText: 'Acid+Metal → H₂ (squeaky pop); Acid+Alkali → H⁺+OH⁻→H₂O; Acid+Carbonate → CO₂ (limewater milky). Gas tests: H₂=squeaky pop, O₂=relights splint, CO₂=limewater milky, Cl₂=bleaches litmus, NH₃=turns red litmus blue. Displacement is redox — more reactive displaces less reactive. Halogen reactivity F₂>Cl₂>Br₂>I₂: Cl₂+2Br⁻→2Cl⁻+Br₂ (orange-brown); Cl₂+2I⁻→2Cl⁻+I₂ (dark brown); Br₂+2I⁻→2Br⁻+I₂. Metal displacement: Mg+Cu²⁺→Cu+Mg²⁺ (blue→colourless, brown solid); Cu+2Ag⁺→Cu²⁺+2Ag (colourless→blue, Ag deposit; 2:1 mole ratio). Precipitation: BaSO₄ white (BaCl₂/HCl) for SO₄²⁻; AgCl/AgBr/AgI white/cream/yellow for halides (distinguish with NH₃: AgCl dissolves in dilute, AgBr only in conc, AgI insoluble); yellow PbI₂. Flame tests: Na=yellow, K=lilac, Ca=orange-red, Ba=apple green, Li/Sr=crimson, Cu²⁺=blue-green. NaOH tests: Fe²⁺=green ppt→rust-brown on standing; Fe³⁺=rust-brown; Cu²⁺=pale blue; Al³⁺=white (dissolves in excess NaOH); Mg²⁺=white (persists). Group 1 (not Li) nitrates → nitrite+O₂; Li and Group 2 → oxide+NO₂+O₂.',
    ready: true
  },
  evidence: []
};
export default note_chemistry_1_1_9;