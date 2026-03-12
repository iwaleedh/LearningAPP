/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 4
 * "Markovnikov's rule and carbocation stability"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.2
 */
export const note_chemistry_1_5_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Apply Markovnikov\'s rule to predict the major product of addition reactions to asymmetric alkenes. Explain the rule in terms of carbocation stability.' },
      terms: []
    },
    {
      id: 'h-markov',
      type: 'heading',
      data: { text: 'Markovnikov\'s Rule', level: 2 },
      terms: []
    },
    {
      id: 'callout-markov',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Markovnikov\'s Rule',
        text: 'When an asymmetric alkene reacts with a hydrogen halide HX (e.g. HBr), the hydrogen atom attaches to the <strong>less substituted</strong> carbon (the one with more hydrogens), and the halogen attaches to the <strong>more substituted</strong> carbon (the one with fewer hydrogens).<br/><br/>In other words: "hydrogen goes to the carbon with more hydrogens."<br/><br/><strong>Example:</strong><br/>Propene (CH₂=CHCH₃) + HBr:<br/>Major product: <strong>2-bromopropane</strong> (Br on C-2) — NOT 1-bromopropane'
      },
      terms: ['Markovnikov\'s rule', 'Major product', 'Minor product']
    },
    {
      id: 'h-stab',
      type: 'heading',
      data: { text: 'Explaining Markovnikov via Carbocation Stability', level: 2 },
      terms: []
    },
    {
      id: 'p-stab',
      type: 'paragraph',
      data: { text: 'The major product of unsymmetrical additions is formed via the more stable carbocation intermediate. Alkyl groups are <strong>electron-donating</strong>, which means they reduce the positive charge on the carbon they are attached to. The more you can spread the charge around, the more stable the ion becomes.' },
      terms: ['Carbocation stability']
    },
    {
      id: 'callout-induct-vs-hyper',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why do alkyl groups stabilise the positive charge?',
        text: 'There are two ways to describe how alkyl groups help spread out the positive charge:<br/><br/><strong>1. Positive Inductive Effect (Traditional):</strong> Alkyl groups "push" electrons away from themselves towards the positively charged carbon. The alkyl groups become slightly positive (δ+) and decrease the full positive charge on the central carbon.<br/><br/><strong>2. Hyperconjugation (Accurate):</strong> Involves temporary orbital interaction. Because the C-C single bonds are constantly rotating, empty p-orbitals on the positive carbon can briefly align and interact with the σ (sigma) bond electrons of adjacent C-H bonds in the alkyl group. This shares the electron density and helps spread the positive charge over a wider area.'
      },
      terms: ['Positive inductive effect', 'Hyperconjugation']
    },
    {
      id: 'callout-rsc-2025',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Guidance (2025): Which Explanation Should You Use?',
        text: 'In late 2024, the <strong>Royal Society of Chemistry (RSC)</strong> wrote to UK exam boards stating that the traditional "positive inductive effect" (electron-pushing) explanation of carbocation stability is technically incorrect at an orbital level — the accurate explanation is hyperconjugation.<br/><br/><strong>What this means for your exam:</strong><br/>• <strong>Edexcel IAL:</strong> Will continue accepting the traditional positive inductive effect until new syllabuses are published. Check recent mark schemes.<br/>• <strong>AQA:</strong> Confirmed they will accept <em>either</em> explanation until further notice.<br/>• <strong>Other boards:</strong> Use whatever your teacher or recent mark scheme specifies.<br/><br/><strong>Safe answer for all boards:</strong> <em>"Alkyl groups donate electron density towards the positive carbon, spreading the charge over a greater number of atoms. The more alkyl groups, the more dispersed the charge and the more stable the carbocation."</em><br/><br/>This phrasing is valid under both frameworks and does not commit to a specific mechanism for <em>why</em> alkyl groups donate, just that they do.'
      },
      terms: ['Positive inductive effect', 'Hyperconjugation']
    },
    {
      id: 'p-energy-ladder',
      type: 'paragraph',
      data: { text: '<strong>Energetic stability:</strong> Secondary carbocations are lower down an energy "ladder" than primary ones. It takes less activation energy to form a secondary intermediate compared to a primary intermediate, making the secondary pathway much faster and deciding the major product.' },
      terms: ['Activation energy']
    },
    {
      id: 'table-stab',
      type: 'comparisonTable',
      data: {
        caption: 'Order of carbocation stability',
        headers: ['Carbocation type', 'Structure', 'Stability', 'Example'],
        rows: [
          ['Tertiary (3°)', 'C⁺ bonded to 3 alkyl groups', 'Most stable', 'C(CH₃)₃⁺'],
          ['Secondary (2°)', 'C⁺ bonded to 2 alkyl groups', 'Intermediate', 'CH₃CH⁺CH₃'],
          ['Primary (1°)', 'C⁺ bonded to 1 alkyl group', 'Least stable', 'CH₃CH₂⁺'],
          ['Methyl', 'CH₃⁺ (no alkyl groups)', 'Very unstable', '—']
        ]
      },
      terms: ['Tertiary carbocation', 'Secondary carbocation', 'Primary carbocation']
    },
    {
      id: 'svg-carb-types',
      type: 'svg',
      data: {
        caption: 'Carbocation types: count the number of C–C bonds from the positive carbon to classify as primary, secondary or tertiary',
        svg: `<svg viewBox="0 0 600 215" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .lbl { fill:#1e40af; font-size:13px; font-weight:700; }
      .cap { fill:#1f2937; font-size:11px; }
      .sub { fill:#6b7280; font-size:10px; }
      .div { stroke:#e2e8f0; stroke-width:1; }
    </style>
  </defs>

  <!-- Section dividers -->
  <line x1="200" y1="18" x2="200" y2="183" class="div"/>
  <line x1="400" y1="18" x2="400" y2="183" class="div"/>

  <!-- PRIMARY (1°) -->
  <text x="100" y="33" class="lbl" text-anchor="middle">1° (Primary)</text>
  <text x="78" y="97" class="atm" text-anchor="middle">CH₃</text>
  <path d="M 91 94 L 108 94" class="bnd"/>
  <text x="122" y="97" class="atm" text-anchor="middle">CH₂</text>
  <text x="134" y="81" class="chg" text-anchor="start">+</text>
  <text x="100" y="125" class="cap" text-anchor="middle">1 C–C bond to C⁺</text>
  <text x="100" y="140" class="cap" text-anchor="middle">(1 alkyl group)</text>
  <text x="100" y="158" class="sub" text-anchor="middle">general: R–CH₂⁺</text>

  <!-- SECONDARY (2°) -->
  <text x="300" y="33" class="lbl" text-anchor="middle">2° (Secondary)</text>
  <text x="258" y="97" class="atm" text-anchor="middle">CH₃</text>
  <path d="M 271 94 L 285 94" class="bnd"/>
  <text x="293" y="97" class="atm" text-anchor="middle">CH</text>
  <text x="303" y="81" class="chg" text-anchor="start">+</text>
  <path d="M 304 94 L 322 94" class="bnd"/>
  <text x="335" y="97" class="atm" text-anchor="middle">CH₃</text>
  <text x="300" y="125" class="cap" text-anchor="middle">2 C–C bonds to C⁺</text>
  <text x="300" y="140" class="cap" text-anchor="middle">(2 alkyl groups)</text>
  <text x="300" y="158" class="sub" text-anchor="middle">general: R–C⁺H–R′</text>

  <!-- TERTIARY (3°) -->
  <text x="500" y="33" class="lbl" text-anchor="middle">3° (Tertiary)</text>
  <text x="500" y="64" class="atm" text-anchor="middle">CH₃</text>
  <path d="M 500 68 L 500 83" class="bnd"/>
  <text x="500" y="97" class="atm" text-anchor="middle">C</text>
  <text x="510" y="81" class="chg" text-anchor="start">+</text>
  <path d="M 489 94 L 468 94" class="bnd"/>
  <text x="455" y="97" class="atm" text-anchor="middle">CH₃</text>
  <path d="M 511 94 L 532 94" class="bnd"/>
  <text x="545" y="97" class="atm" text-anchor="middle">CH₃</text>
  <text x="500" y="125" class="cap" text-anchor="middle">3 C–C bonds to C⁺</text>
  <text x="500" y="140" class="cap" text-anchor="middle">(3 alkyl groups)</text>
  <text x="500" y="158" class="sub" text-anchor="middle">general: R–C⁺(R′)–R″</text>

  <!-- Stability bar -->
  <rect x="20" y="170" width="560" height="40" rx="4" fill="#fef3c7" stroke="#fcd34d" stroke-width="1"/>
  <text x="300" y="187" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Stability order:  1° &lt; 2° &lt; 3°</text>
  <text x="300" y="202" text-anchor="middle" font-size="10" fill="#92400e">More alkyl groups → more charge spreading → lower energy → more stable</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'svg-carb-energy',
      type: 'svg',
      data: {
        caption: 'Energy ladder: tertiary carbocations sit lowest in energy and are easiest to form; primary sit highest and are hardest to form',
        svg: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm  { fill:#111827; font-size:13px; font-weight:700; }
      .lbl  { fill:#1f2937; font-size:12px; }
      .dim  { fill:#6b7280; font-size:10px; }
      .hd   { fill:#1e40af; font-size:11px; font-weight:700; }
      .ax   { stroke:#94a3b8; stroke-width:1.5; fill:none; }
      .plat { stroke-width:2.5; fill:none; stroke-linecap:round; }
      .arr  { stroke:#64748b; stroke-width:1.4; fill:none; }
    </style>
    <marker id="ae-stab" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
      <polygon points="0 0,6 2.5,0 5" fill="#64748b"/>
    </marker>
  </defs>

  <!-- Y-axis -->
  <path d="M 80 20 L 80 240" class="ax"/>
  <text x="78" y="22" class="dim" text-anchor="end">higher</text>
  <text x="78" y="240" class="dim" text-anchor="end">lower</text>
  <text x="40" y="132" class="hd" text-anchor="middle" transform="rotate(-90 40 132)">Relative Energy</text>

  <!-- Primary platform -->
  <path d="M 105 65 L 295 65" class="plat" stroke="#ef4444"/>
  <text x="200" y="58" class="atm" text-anchor="middle" fill="#ef4444">1° Primary</text>
  <text x="200" y="80" class="dim" text-anchor="middle">e.g. CH₃CH₂⁺</text>
  <text x="308" y="63" class="lbl" text-anchor="start">least stable</text>
  <text x="308" y="76" class="dim" text-anchor="start">hardest to form</text>

  <!-- Arrow down to secondary -->
  <path d="M 200 88 L 200 132" class="arr" marker-end="url(#ae-stab)"/>
  <text x="210" y="114" class="dim" text-anchor="start">more stable</text>

  <!-- Secondary platform -->
  <path d="M 105 140 L 295 140" class="plat" stroke="#f59e0b"/>
  <text x="200" y="133" class="atm" text-anchor="middle" fill="#b45309">2° Secondary</text>
  <text x="200" y="155" class="dim" text-anchor="middle">e.g. (CH₃)₂CH⁺</text>
  <text x="308" y="138" class="lbl" text-anchor="start">intermediate</text>

  <!-- Arrow down to tertiary -->
  <path d="M 200 163 L 200 207" class="arr" marker-end="url(#ae-stab)"/>
  <text x="210" y="189" class="dim" text-anchor="start">more stable</text>

  <!-- Tertiary platform -->
  <path d="M 105 215 L 295 215" class="plat" stroke="#22c55e"/>
  <text x="200" y="208" class="atm" text-anchor="middle" fill="#15803d">3° Tertiary</text>
  <text x="200" y="230" class="dim" text-anchor="middle">e.g. (CH₃)₃C⁺</text>
  <text x="308" y="213" class="lbl" text-anchor="start">most stable</text>
  <text x="308" y="226" class="dim" text-anchor="start">easiest to form</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Propene + HBr — which product and why?',
        text: 'CH₂=CH–CH₃: The C=C carbons are C1 (CH₂=) and C2 (=CHCH₃).<br/><br/>Path A: H⁺ adds to C2 → carbocation on C1 (primary: CH₂⁺CH₂CH₃) → 1-bromopropane (minor)<br/>Path B: H⁺ adds to C1 → carbocation on C2 (secondary: CH₃CH⁺CH₃) → 2-bromopropane (major)<br/><br/>Secondary carbocation (Path B) is more stable → lower activation energy → <strong>major product is 2-bromopropane</strong>.'
      },
      terms: []
    },
    {
      id: 'svg-propene-hx-paths',
      type: 'svg',
      data: {
        caption: 'Propene + HX: two competing mechanism pathways. Path B (top, major) forms the more stable secondary carbocation. Path A (bottom, minor) forms the less stable primary carbocation. Both products form — but the major product is always the one via the secondary intermediate.',
        svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; font-weight:700; }
      .chg { fill:#dc2626; font-size:11px; font-weight:700; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#64748b; stroke-width:1.5; fill:none; }
      .cur { fill:none; stroke:#2563eb; stroke-width:1.8; }
      .hd  { font-size:12px; font-weight:700; }
      .lbl { fill:#1f2937; font-size:11px; }
      .dim { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-prop" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#64748b"/>
    </marker>
    <marker id="ca-prop" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#2563eb"/>
    </marker>
  </defs>

  <!-- PATH B background (major, green) -->
  <rect x="10" y="15" width="620" height="135" rx="5" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
  <!-- PATH A background (minor, red) -->
  <rect x="10" y="158" width="620" height="133" rx="5" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.2"/>

  <!-- Headers -->
  <text x="22" y="35" class="hd" fill="#15803d" text-anchor="start">Path B (MAJOR) &#x2014; H&#x207a; adds to C1 (CH&#x2082; end, more H&#x2019;s)</text>
  <text x="22" y="178" class="hd" fill="#dc2626" text-anchor="start">Path A (minor) &#x2014; H&#x207a; adds to C2 (CH end, fewer H&#x2019;s)</text>

  <!-- ROW 1: PATH B at y=90 -->
  <text x="55" y="93" class="atm" text-anchor="middle">CH&#x2082;</text>
  <line x1="68" y1="86" x2="84" y2="86" class="bnd"/>
  <line x1="68" y1="93" x2="84" y2="93" class="bnd"/>
  <text x="97" y="93" class="atm" text-anchor="middle">CH</text>
  <line x1="106" y1="90" x2="120" y2="90" class="bnd"/>
  <text x="133" y="93" class="atm" text-anchor="middle">CH&#x2083;</text>
  <text x="157" y="93" class="lbl" text-anchor="middle">+</text>
  <text x="173" y="82" class="dim" text-anchor="middle">&#x3b4;+</text>
  <text x="173" y="93" class="atm" text-anchor="middle">H</text>
  <line x1="180" y1="90" x2="193" y2="90" class="bnd"/>
  <text x="200" y="82" class="dim" text-anchor="middle">&#x3b4;&#x2212;</text>
  <text x="200" y="93" class="atm" text-anchor="middle">X</text>
  <!-- Curly arrow: from C1 end of pi bond, arcs up to H -->
  <path d="M 67 84 Q 112 50 170 88" class="cur" marker-end="url(#ca-prop)"/>
  <!-- Reaction arrow -->
  <line x1="216" y1="90" x2="254" y2="90" class="rxn" marker-end="url(#ah-prop)"/>
  <!-- Intermediate: CH3-CH(+)-CH3 (secondary) -->
  <text x="272" y="93" class="atm" text-anchor="middle">CH&#x2083;</text>
  <line x1="284" y1="90" x2="298" y2="90" class="bnd"/>
  <text x="309" y="93" class="atm" text-anchor="middle">CH</text>
  <text x="319" y="78" class="chg" text-anchor="start">+</text>
  <line x1="319" y1="90" x2="333" y2="90" class="bnd"/>
  <text x="344" y="93" class="atm" text-anchor="middle">CH&#x2083;</text>
  <text x="309" y="112" class="dim" text-anchor="middle">secondary (2&#xb0;)</text>
  <text x="363" y="91" class="lbl" text-anchor="start">+ X&#x207b;</text>
  <line x1="393" y1="90" x2="425" y2="90" class="rxn" marker-end="url(#ah-prop)"/>
  <text x="431" y="89" fill="#15803d" font-size="13" font-weight="700" text-anchor="start">2-halopropane</text>
  <text x="444" y="107" fill="#15803d" font-size="11" font-weight="600" text-anchor="start">MAJOR product &#x2713;</text>

  <!-- ROW 2: PATH A at y=235 -->
  <text x="55" y="238" class="atm" text-anchor="middle">CH&#x2082;</text>
  <line x1="68" y1="231" x2="84" y2="231" class="bnd"/>
  <line x1="68" y1="238" x2="84" y2="238" class="bnd"/>
  <text x="97" y="238" class="atm" text-anchor="middle">CH</text>
  <line x1="106" y1="235" x2="120" y2="235" class="bnd"/>
  <text x="133" y="238" class="atm" text-anchor="middle">CH&#x2083;</text>
  <text x="157" y="238" class="lbl" text-anchor="middle">+</text>
  <text x="173" y="227" class="dim" text-anchor="middle">&#x3b4;+</text>
  <text x="173" y="238" class="atm" text-anchor="middle">H</text>
  <line x1="180" y1="235" x2="193" y2="235" class="bnd"/>
  <text x="200" y="227" class="dim" text-anchor="middle">&#x3b4;&#x2212;</text>
  <text x="200" y="238" class="atm" text-anchor="middle">X</text>
  <!-- Curly arrow: from C2 end of pi bond, arcs down to H -->
  <path d="M 84 240 Q 128 268 170 238" class="cur" marker-end="url(#ca-prop)"/>
  <!-- Reaction arrow -->
  <line x1="216" y1="235" x2="254" y2="235" class="rxn" marker-end="url(#ah-prop)"/>
  <!-- Intermediate: (+)CH2-CH2-CH3 (primary) -->
  <text x="261" y="222" class="chg" text-anchor="start">+</text>
  <text x="272" y="238" class="atm" text-anchor="middle">CH&#x2082;</text>
  <line x1="284" y1="235" x2="298" y2="235" class="bnd"/>
  <text x="311" y="238" class="atm" text-anchor="middle">CH&#x2082;</text>
  <line x1="322" y1="235" x2="336" y2="235" class="bnd"/>
  <text x="349" y="238" class="atm" text-anchor="middle">CH&#x2083;</text>
  <text x="311" y="258" class="dim" text-anchor="middle">primary (1&#xb0;)</text>
  <text x="367" y="236" class="lbl" text-anchor="start">+ X&#x207b;</text>
  <line x1="393" y1="235" x2="425" y2="235" class="rxn" marker-end="url(#ah-prop)"/>
  <text x="431" y="234" fill="#dc2626" font-size="13" font-weight="700" text-anchor="start">1-halopropane</text>
  <text x="458" y="252" fill="#dc2626" font-size="11" font-weight="600" text-anchor="start">minor product</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-minor-product',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Important: The Minor Product Does Still Form — Never Say "Only"',
        text: 'Chemguide states: <em>"There will be small amounts of CH&#x2083;CH&#x2082;CH&#x2082;X despite what Markovnikov\'s Rule says!"</em><br/><br/>Both pathways operate simultaneously in every reaction. Path A (primary carbocation) is slower — higher activation energy — but it is <strong>not impossible</strong>. Small amounts of 1-halopropane always form alongside the major product.<br/><br/>In exam answers:<br/>&#x2714; Write: "The <strong>major</strong> product is 2-bromopropane" (formed via the secondary carbocation)<br/>&#x2714; Write: "A <strong>minor</strong> amount of 1-bromopropane is also formed" (primary carbocation route)<br/>&#x2718; Do NOT write: the reaction "only" gives 2-bromopropane, or that 1-bromopropane "cannot" be formed'
      },
      terms: ['Major product', 'Minor product']
    },
    {
      id: 'callout-worked-h2so4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Propene + Concentrated H₂SO₄',
        text: 'The exact same rule applies when propene reacts with <strong>cold concentrated</strong> sulphuric acid (H₂SO₄).<br/><br/>The electrophile is the δ+ hydrogen in the H–O bond of H-OSO₃H. It adds to the C1 carbon (which has more hydrogens) to form the more stable <strong>secondary carbocation</strong> on C2.<br/><br/>The remaining hydrogensulphate ion (HSO₄⁻) then attaches to C2, forming <strong>isopropyl hydrogensulphate</strong> [CH₃CH(OSO₃H)CH₃] as the major product rather than propyl hydrogensulphate.'
      },
      terms: ['Isopropyl hydrogensulphate']
    },
    {
      id: 'callout-sym-reagents',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Symmetrical Reagents (e.g. Br₂) + Unsymmetrical Alkenes',
        text: 'What happens if you add a symmetrical reagent like <strong>pure liquid bromine (Br₂)</strong> to an unsymmetrical alkene like propene?<br/><br/>The reaction proceeds exactly identically to symmetrical alkenes (via an <strong>induced dipole</strong> mechanism). The double bond breaks, and a bromine atom becomes attached to <em>each</em> carbon, forming <strong>1,2-dibromopropane</strong>.<br/><br/>Because you are adding the <em>same</em> atom (Br) to both carbons, there is no major/minor product distinction and <strong>Markovnikov\'s rule does not apply</strong>.'
      },
      terms: ['Symmetrical reagent']
    },
    {
      id: 'callout-but1ene-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: But-1-ene + HBr — applying Markovnikov logic to an unfamiliar alkene',
        text: 'But-1-ene: <strong>CH&#x2082;=CH&#x2013;CH&#x2082;&#x2013;CH&#x2083;</strong> (C1 = CH&#x2082;= with 2 H\'s directly on it; C2 = =CH&#x2013; with 1 H on it directly)<br/><br/><strong>Path B (major):</strong> H&#x207a; adds to C1 (more H\'s) &#x2192; carbocation forms on C2. C2 is bonded to &#x2013;CH&#x2083; (from C1 side) and &#x2013;CH&#x2082;CH&#x2083; (C3&#x2013;C4) &#x2014; two alkyl groups &#x2014; so C2&#x207a; is <strong>secondary</strong>. X&#x207b; attacks C2 &#x2192; <strong>2-bromobutane</strong> (major product).<br/><br/><strong>Path A (minor):</strong> H&#x207a; adds to C2 &#x2192; carbocation forms on C1. C1 is bonded to only one alkyl group (the C2&#x2013;C3&#x2013;C4 chain) &#x2014; so C1&#x207a; is <strong>primary</strong>. X&#x207b; attacks C1 &#x2192; 1-bromobutane (minor).<br/><br/>The secondary carbocation (Path B) is more stable &#x2192; lower activation energy &#x2192; <strong>2-bromobutane is the major product</strong>.'
      },
      terms: ['But-1-ene', '2-bromobutane']
    },
    {
      id: 'callout-exam-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: How to Explain Regioselectivity',
        text: 'When asked why a specific product is the major product of addition of HX to an unsymmetrical alkene, <strong>never just quote Markovnikov\'s Rule</strong> — most mark schemes award no marks for the rule alone.<br/><br/><strong>Model answer structure (5 marks):</strong><br/>1. State that H⁺ can add to C1 or C2, producing two possible carbocation intermediates.<br/>2. Identify which intermediate is <strong>secondary</strong> (or tertiary) and which is <strong>primary</strong>.<br/>3. State: "A secondary carbocation is more stable than a primary carbocation because alkyl groups donate electron density via the positive inductive effect, dispersing the positive charge over more atoms."<br/>4. State: "The more stable (secondary) intermediate is lower in energy, so it has a lower activation energy and forms faster."<br/>5. Conclude: "Therefore the product formed via the secondary carbocation is the major product."'
      },
      terms: ['Regioselectivity', 'Positive inductive effect']
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-markov', prompt: 'State Markovnikov\'s rule in your own words. Use propene + HBr as an example.' },
      { id: 'c2', blockId: 'table-stab', prompt: 'State the order of stability of carbocations from most to least stable.' },
      { id: 'c-svg-carb', blockId: 'svg-carb-types', prompt: 'Draw the structural formula of a primary, secondary and tertiary carbocation. How do you classify a carbocation as 1°, 2° or 3°?' },
      { id: 'c2_a', blockId: 'callout-induct-vs-hyper', prompt: 'Explain the positive inductive effect and how it contributes to carbocation stability.' },
      { id: 'c3', blockId: 'callout-worked', prompt: 'Explain why 2-bromopropane is the major product when propene reacts with HBr, using carbocation stability.' },
      { id: 'c-fork-svg', blockId: 'svg-propene-hx-paths', prompt: 'Describe the two competing mechanism pathways for propene + HX. Which path gives the primary carbocation and which gives the secondary? Why does the minor product still form in small amounts?' },
      { id: 'c3_a', blockId: 'callout-exam-tip', prompt: 'In an exam, what is the best way to explain why a specific product is formed in the addition of HX to an unsymmetrical alkene?' },
      { id: 'c4', blockId: 'callout-worked-h2so4', prompt: 'What is the major product of the reaction between propene and cold concentrated sulphuric acid, and why?' },
      { id: 'c5', blockId: 'callout-sym-reagents', prompt: 'Does Markovnikov\'s rule apply to the addition of bromine to propene? Explain why.' },
      { id: 'c-but1ene', blockId: 'callout-but1ene-worked', prompt: 'But-1-ene reacts with HBr. Identify C1 and C2, state which carbocation is secondary and which is primary, and explain why 2-bromobutane is the major product.' }
    ],
    summaryText: 'Markovnikov\'s rule: H adds to the carbon with more H attached (X adds to the more substituted C). Two competing pathways always operate: Path B (H to the more H-bearing C → secondary carb) gives the major product; Path A (H to the other C → primary carb) gives the minor product — both products form, but in very different amounts. For propene + HBr: major = 2-bromopropane (via 2° carb on C2), minor = 1-bromopropane (via 1° carb on C1). For but-1-ene + HBr: major = 2-bromobutane (H to C1 → 2° carb on C2). Stability order: tertiary > secondary > primary. Alkyl groups stabilise via +I effect / hyperconjugation. Major product forms via more stable carbocation (lower activation energy).',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Markovnikov Addition — both pathways operate; minor product always forms',
      detail: 'Two competing mechanism pathways exist for propene + HX. Path B (H to C1 → secondary carbocation on C2) is faster and gives the major product (2-halopropane). Path A (H to C2 → primary carbocation on C1) gives the minor product (1-halopropane) — it still forms, just in small amounts. Chemguide: "There will be small amounts of CH3CH2CH2X despite what Markovnikov\'s Rule says!" Same logic for but-1-ene + HBr: H to C1 → secondary carb on C2 → 2-bromobutane (major). Never state a minor product cannot form — only that it is the minor product.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/unsymprob.html'
    },
    {
      id: 'ev-2',
      title: 'Carbocations (Carbonium Ions) — Structure and Stability',
      detail: 'Primary (1 C–C bond to C⁺), secondary (2), tertiary (3). Stability order: 1° < 2° < 3° — more alkyl groups spread the positive charge over more atoms. Traditional explanation: positive inductive effect. Accurate explanation (RSC 2024): hyperconjugation — σ(C–H) bonds of adjacent alkyl groups interact with the empty p orbital on C⁺. Most UK boards still accept the traditional version; check your mark scheme.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/carbonium.html'
    }
  ]
};
export default note_chemistry_1_5_4;