/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 3
 * "Electrophilic addition mechanism and curly arrows"
 * Source: Pearson Edexcel IAL Chemistry — Section 5B.2
 */
export const note_chemistry_1_5_3 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Draw the electrophilic addition mechanism for alkenes using curly arrows. Show formation of the carbocation intermediate and the final product.' },
      terms: []
    },
    {
      id: 'h-what-is-eladd',
      type: 'heading',
      data: { text: 'Understanding Electrophilic Addition', level: 2 },
      terms: []
    },
    {
      id: 'p-add-reaction-def',
      type: 'paragraph',
      data: { text: 'An <strong>addition reaction</strong> occurs when two molecules join together to make a larger one. In an alkene addition reaction, the double bond converts to a single bond as new atoms are added. Nothing is lost in the process.' },
      terms: ['Addition reaction']
    },
    {
      id: 'callout-pi-bond',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Exposed π Bond',
        text: 'The carbon-carbon double bond consists of a normal <strong>sigma (σ) bond</strong> and a <strong>pi (π) bond</strong>. The π bond is formed by sideways overlap of p-orbitals, which means its electron pair is held in molecular orbitals <em>above and below</em> the plane of the molecule. Because these electrons lie exposed, they create a region of extremely high electron density, making them highly attractive targets for positively charged species.'
      },
      terms: ['Sigma bond', 'Pi bond']
    },
    {
      id: 'callout-electrophile-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Electrophile?',
        text: 'An <strong>electrophile</strong> ("electron-lover") is an atom or group of atoms that is attracted to electron-rich regions. Because it is attracted to negative areas, it must be an electron-pair acceptor—generally carrying either a full positive charge (like a carbocation) or a slight partial positive charge (δ+), such as the slightly positive hydrogen atom in a polar H–Br bond.'
      },
      terms: ['Electrophile']
    },
    {
      id: 'h-curly',
      type: 'heading',
      data: { text: 'Curly Arrows', level: 2 },
      terms: []
    },
    {
      id: 'callout-curly',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Curly Arrow Rules',
        text: 'A <strong>curly arrow</strong> represents the movement of an electron pair.<br/>• The arrow starts where electrons <em>are</em> (a bond or lone pair) and points to where they <em>go</em>.<br/>• A full curly arrow (← with full head) = movement of a pair (2 electrons).<br/>• A half-arrow (fishhook, ⇀) = movement of a single electron (used in radical mechanisms).'
      },
      terms: ['Curly arrow', 'Carbocation', 'Electrophilic addition']
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Mechanism: Addition of HBr to Ethene', level: 2 },
      terms: []
    },
    {
      id: 'callout-naming-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Naming Tip: −ene → −ane',
        text: 'When naming the product of an electrophilic addition reaction, <strong>change the suffix from <em>−ene</em> to <em>−ane</em></strong> to show the double bond has been replaced by a single bond, then add the halogen substituent prefix and locant.<br/><br/>Examples:<br/>• eth<strong>ene</strong> + HBr → brometh<strong>ane</strong> (i.e. <strong>bromoethane</strong>)<br/>• cyclohex<strong>ene</strong> + HBr → bromocyclohex<strong>ane</strong> (i.e. <strong>bromocyclohexane</strong>)<br/>• prop<strong>ene</strong> + HCl → 2-chloroprop<strong>ane</strong> (for asymmetric case — see Markovnikov\'s rule)'
      },
      terms: ['Naming addition products']
    },
    {
      id: 'callout-mech1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 1: Electrophile approaches π bond',
        text: 'The π electron cloud of the C=C <strong>attacks the partially positive H</strong> in H–Br (HBr is a polar molecule: H<sup>δ+</sup>–Br<sup>δ−</sup>).<br/><br/>Arrow 1: from C=C π bond → to the H of HBr.<br/>Arrow 2: from the H–Br bond → to the Br atom.<br/><br/>This breaks the C=C π bond and also breaks the H–Br bond. Result: <strong>carbocation</strong> CH₃CH₂⁺ + Br⁻ (heterolytic fission of H–Br).'
      },
      terms: ['Heterolytic fission', 'Carbocation']
    },
    {
      id: 'callout-mech2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 2: Nucleophile attacks carbocation',
        text: 'The bromide ion (Br⁻) acts as a <strong>nucleophile</strong> and donates a lone pair to the positively charged carbon.<br/><br/>Arrow 3: from lone pair on Br⁻ → to the C⁺.<br/><br/>Result: C–Br bond forms → <strong>product</strong> CH₃CH₂Br (bromoethane).'
      },
      terms: ['Nucleophile']
    },
    {
      id: 'svg-hbr-mechanism',
      type: 'svg',
      data: {
        caption: 'Two-step electrophilic addition of HBr to ethene: Step 1 forms the carbocation intermediate; Step 2 Br⁻ attacks it.',
        svg: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; }
      .hd  { fill:#1e40af; font-weight:bold; font-size:13px; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#111827; stroke-width:1.5; fill:none; }
      .dlt { fill:#6b7280; font-size:11px; }
      .chg { fill:#dc2626; font-size:12px; font-weight:bold; }
      .dim { fill:#6b7280; font-size:11px; }
      .cur { stroke:#dc2626; stroke-width:1.5; fill:none; }
      .lbl { fill:#1f2937; font-size:13px; }
    </style>
    <marker id="ah-hbr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#111827"/>
    </marker>
    <marker id="ca-hbr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#dc2626"/>
    </marker>
  </defs>
  <text x="20" y="26" class="hd" text-anchor="start">Step 1 — π electrons attack δ⁺H; H–Br undergoes heterolytic fission</text>
  <text x="52" y="88" class="atm" text-anchor="end" dominant-baseline="central">H₂C</text>
  <path d="M 54 82 L 84 82" class="bnd"/>
  <path d="M 54 92 L 84 92" class="bnd"/>
  <text x="87" y="88" class="atm" text-anchor="start" dominant-baseline="central">CH₂</text>
  <text x="132" y="88" class="lbl" text-anchor="middle" dominant-baseline="central">+</text>
  <text x="162" y="70" class="dlt" text-anchor="middle">δ+</text>
  <text x="162" y="88" class="atm" text-anchor="middle" dominant-baseline="central">H</text>
  <path d="M 170 87 L 188 87" class="bnd"/>
  <text x="200" y="70" class="dlt" text-anchor="middle">δ−</text>
  <text x="200" y="88" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <path d="M 67 78 Q 112 56 155 79" class="cur" marker-end="url(#ca-hbr)"/>
  <path d="M 179 80 Q 188 66 195 79" class="cur" marker-end="url(#ca-hbr)"/>
  <path d="M 222 87 L 258 87" class="rxn" marker-end="url(#ah-hbr)"/>
  <text x="268" y="88" class="atm" text-anchor="start" dominant-baseline="central">CH₃</text>
  <path d="M 296 87 L 316 87" class="bnd"/>
  <text x="328" y="88" class="atm" text-anchor="middle" dominant-baseline="central">CH₂</text>
  <text x="343" y="74" class="chg" text-anchor="start">+</text>
  <text x="366" y="88" class="lbl" text-anchor="middle" dominant-baseline="central">+</text>
  <text x="392" y="88" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <text x="404" y="74" class="chg" text-anchor="start">−</text>
  <text x="86" y="112" class="dim" text-anchor="middle">ethene</text>
  <text x="328" y="112" class="dim" text-anchor="middle">ethyl carbocation</text>
  <text x="20" y="158" class="hd" text-anchor="start">Step 2 — Br⁻ donates lone pair to the positively charged carbon</text>
  <text x="54" y="228" class="atm" text-anchor="end" dominant-baseline="central">CH₃</text>
  <path d="M 56 227 L 76 227" class="bnd"/>
  <text x="87" y="228" class="atm" text-anchor="middle" dominant-baseline="central">CH₂</text>
  <text x="102" y="214" class="chg" text-anchor="start">+</text>
  <text x="124" y="228" class="lbl" text-anchor="middle" dominant-baseline="central">+</text>
  <text x="153" y="228" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <text x="165" y="214" class="chg" text-anchor="start">−</text>
  <path d="M 146 219 Q 118 202 105 215" class="cur" marker-end="url(#ca-hbr)"/>
  <path d="M 179 227 L 217 227" class="rxn" marker-end="url(#ah-hbr)"/>
  <text x="229" y="228" class="atm" text-anchor="start" dominant-baseline="central">CH₃</text>
  <path d="M 257 227 L 277 227" class="bnd"/>
  <text x="289" y="228" class="atm" text-anchor="middle" dominant-baseline="central">CH₂</text>
  <path d="M 304 227 L 324 227" class="bnd"/>
  <text x="335" y="228" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <text x="285" y="250" class="dim" text-anchor="middle">bromoethane (product)</text>
  <rect x="20" y="274" width="610" height="34" rx="6" fill="#0a2e1a" stroke="#86efac" stroke-width="1"/>
  <text x="325" y="295" class="lbl" text-anchor="middle" dominant-baseline="central">Overall: CH₂=CH₂ + HBr → CH₃CH₂Br</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-hx-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity of Hydrogen Halides',
        text: 'The mechanism is exactly the same for all hydrogen halides (HF, HCl, HBr, HI). However, the rate of reaction increases down the group: <strong>HF &lt; HCl &lt; HBr &lt; HI (fastest)</strong>.<br/><br/>This is because the H–X bond strength decreases as the halogen gets larger (e.g., H–F is 568 kJ mol⁻¹ while H–I is 298 kJ mol⁻¹). A weaker bond breaks more readily in the first step of the mechanism, leading to a faster reaction.'
      },
      terms: ['Bond strength', 'Rate of reaction']
    },
    {
      id: 'table-hx-bond-strength',
      type: 'comparisonTable',
      data: {
        caption: 'H–X bond strengths and relative reaction rates with alkenes',
        headers: ['Hydrogen halide', 'H–X bond strength / kJ mol⁻¹', 'Relative rate with alkenes'],
        rows: [
          ['HF', '568', 'Slowest (bond very strong, resists breaking in Step 1)'],
          ['HCl', '432', 'Slow'],
          ['HBr', '366', 'Fast'],
          ['HI', '298', 'Fastest (bond weakest, breaks most readily in Step 1)']
        ]
      },
      terms: ['H–X bond strength']
    },
    {
      id: 'h-bromine',
      type: 'heading',
      data: { text: 'Mechanism: Addition of Halogens (Br₂)', level: 2 },
      terms: []
    },
    {
      id: 'p-halogens-context',
      type: 'paragraph',
      data: { text: 'Alkenes react in the cold with pure liquid bromine, or with a solution of bromine in an organic solvent (like tetrachloromethane). The double bond breaks and a bromine atom is added to each carbon. For example, ethene yields 1,2-dibromoethane. A cyclic alkene like cyclohexene reacts identically to form 1,2-dibromocyclohexane.<br/><br/><em>Note:</em> Chlorine (Cl₂) reacts in exactly the same way to form dichlorides. Fluorine is too explosive, and iodine is generally too unreactive.' },
      terms: []
    },
    {
      id: 'callout-br2-decolourisation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Decolourisation — The Standard Test for a C=C Double Bond',
        text: 'When alkenes react with bromine, the mixture turns from <strong>red-brown (or orange) to colourless</strong>. This rapid colour change happens because the Br₂ is consumed by addition across the double bond — there is no Br₂ left to show its colour.<br/><br/><strong>In exams:</strong> "Decolourisation of bromine" (or "turns from orange/brown to colourless") is the standard observation used to <strong>identify the presence of a C=C double bond</strong> in unknown organic compounds.<br/><br/><strong>Conditions for the clean mechanism:</strong><br/>• Use <strong>pure liquid Br₂</strong> or <strong>Br₂ dissolved in an organic solvent</strong> (e.g. tetrachloromethane, CCl₄)<br/>• Cold; no catalyst; no water'
      },
      terms: ['Decolourisation', 'Test for C=C double bond']
    },
    {
      id: 'callout-br2-mech1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 1: Induced Dipole',
        text: 'Bromine (Br₂) is a non-polar molecule, but as it approaches the electron-rich π bond, an <strong>induced dipole</strong> is created (Br<sup>δ+</sup>–Br<sup>δ−</sup>).<br/><br/>The π electrons attack the Br<sup>δ+</sup> atom. The Br–Br bond breaks by heterolytic fission (both electrons go to the Br<sup>δ−</sup> atom).<br/><br/>This forms a <strong>carbocation</strong> (CH₂BrCH₂⁺) and a bromide ion (Br⁻).'
      },
      terms: ['Induced dipole', 'Heterolytic fission']
    },
    {
      id: 'callout-br2-examtip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Always Label the Induced Dipole',
        text: '<strong>Always write "induced dipole" next to the Br–Br bond</strong> in your mechanism diagram. Without this label, many mark schemes deduct the mark because bromine is a non-polar molecule and you must demonstrate you understand <em>why</em> it becomes an electrophile in this reaction.<br/><br/><strong>Simplified vs detailed mechanism:</strong><br/>Two versions of this mechanism exist:<br/>• <strong>Simplified (carbocation route):</strong> Brδ⁺ attacks the π bond directly; Br⁻ leaves; Br⁻ then attacks C⁺. This is accepted by Edexcel IAL and most other UK A-Level mark schemes.<br/>• <strong>Detailed (bromonium ion route):</strong> Both Br atoms attach to the two carbons simultaneously, forming a cyclic 3-membered bromonium ion intermediate, which is then attacked from the back by Br⁻. This is a university-level mechanism — do not learn it unless your teacher explicitly confirms your exam board requires it.'
      },
      terms: ['Induced dipole', 'Bromonium ion']
    },
    {
      id: 'callout-br2-water-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Bromine Water ≠ Pure Bromine in Mechanism Questions',
        text: 'If <strong>aqueous bromine (bromine water)</strong>, Br₂(aq), is used instead of pure Br₂ or Br₂/CCl₄, water acts as a competing nucleophile in Step 2. This produces a <strong>mixture of products</strong> (bromohydrin and dibromide) — the mechanism is far more complex and is <strong>beyond A-level</strong>.<br/><br/>• For mechanism questions: assume <strong>pure Br₂ or Br₂ in organic solvent</strong> unless the question specifically states bromine water<br/>• For observation/testing questions: stating "bromine water is decolourised" is correct — you only need the observation, not the mechanism<br/>• Do not attempt to draw the bromine water mechanism in an exam'
      },
      terms: ['Bromine water', 'Bromohydrin']
    },
    {
      id: 'callout-br2-mech2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Step 2: Nucleophilic Attack',
        text: 'The bromide ion (Br⁻) uses a lone pair to attack the positive carbon of the carbocation.<br/><br/>Result: forms 1,2-dibromoethane (CH₂BrCH₂Br).<br/><br/><em>Note:</em> In university chemistry, a cyclic bromonium ion intermediate is often used instead, but the simple carbocation mechanism is widely accepted for A-Level exams.'
      },
      terms: []
    },
    {
      id: 'svg-br2-mechanism',
      type: 'svg',
      data: {
        caption: 'Electrophilic addition of Br₂ to ethene: an induced dipole makes the nearer Br δ⁺ (Step 1); Br⁻ then attacks the carbocation (Step 2).',
        svg: `<svg viewBox="0 0 650 268" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; }
      .hd  { fill:#1e40af; font-weight:bold; font-size:13px; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .rxn { stroke:#111827; stroke-width:1.5; fill:none; }
      .dlt { fill:#6b7280; font-size:11px; }
      .chg { fill:#dc2626; font-size:12px; font-weight:bold; }
      .dim { fill:#6b7280; font-size:11px; }
      .cur { stroke:#dc2626; stroke-width:1.5; fill:none; }
      .lbl { fill:#1f2937; font-size:13px; }
      .tip { fill:#92400e; font-size:11px; font-style:italic; }
    </style>
    <marker id="ah-br2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#111827"/>
    </marker>
    <marker id="ca-br2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#dc2626"/>
    </marker>
  </defs>
  <text x="20" y="26" class="hd" text-anchor="start">Step 1 — π electrons induce a dipole in Br₂; attack δ⁺Br</text>
  <text x="325" y="46" class="tip" text-anchor="middle">★ Write "induced dipole" next to Br₂ in your exam answer</text>
  <text x="52" y="102" class="atm" text-anchor="end" dominant-baseline="central">H₂C</text>
  <path d="M 54 96 L 84 96" class="bnd"/>
  <path d="M 54 106 L 84 106" class="bnd"/>
  <text x="87" y="102" class="atm" text-anchor="start" dominant-baseline="central">CH₂</text>
  <text x="134" y="102" class="lbl" text-anchor="middle" dominant-baseline="central">+</text>
  <text x="162" y="84" class="dlt" text-anchor="middle">δ+</text>
  <text x="162" y="102" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <path d="M 170 101 L 196 101" class="bnd"/>
  <text x="207" y="84" class="dlt" text-anchor="middle">δ−</text>
  <text x="207" y="102" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <text x="184" y="122" class="tip" text-anchor="middle">induced dipole</text>
  <path d="M 69 92 Q 112 70 156 92" class="cur" marker-end="url(#ca-br2)"/>
  <path d="M 183 94 Q 194 80 202 93" class="cur" marker-end="url(#ca-br2)"/>
  <path d="M 232 101 L 268 101" class="rxn" marker-end="url(#ah-br2)"/>
  <text x="278" y="102" class="atm" text-anchor="start" dominant-baseline="central">BrCH₂</text>
  <path d="M 316 101 L 336 101" class="bnd"/>
  <text x="348" y="102" class="atm" text-anchor="middle" dominant-baseline="central">CH₂</text>
  <text x="363" y="88" class="chg" text-anchor="start">+</text>
  <text x="385" y="102" class="lbl" text-anchor="middle" dominant-baseline="central">+</text>
  <text x="412" y="102" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <text x="424" y="88" class="chg" text-anchor="start">−</text>
  <text x="348" y="122" class="dim" text-anchor="middle">carbocation</text>
  <text x="20" y="162" class="hd" text-anchor="start">Step 2 — Br⁻ attacks carbocation → 1,2-dibromoethane</text>
  <text x="50" y="210" class="atm" text-anchor="start" dominant-baseline="central">BrCH₂CH₂⁺  +  Br⁻</text>
  <path d="M 228 209 L 264 209" class="rxn" marker-end="url(#ah-br2)"/>
  <text x="276" y="210" class="atm" text-anchor="start" dominant-baseline="central">BrCH₂</text>
  <path d="M 314 209 L 334 209" class="bnd"/>
  <text x="346" y="210" class="atm" text-anchor="middle" dominant-baseline="central">CH₂Br</text>
  <text x="311" y="230" class="dim" text-anchor="middle">1,2-dibromoethane</text>
  <rect x="20" y="242" width="610" height="24" rx="5" fill="#0a2e1a" stroke="#86efac" stroke-width="1"/>
  <text x="325" y="257" class="lbl" text-anchor="middle" dominant-baseline="central">Overall: CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (1,2-dibromoethane)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-cyclohexene',
      type: 'heading',
      data: { text: 'Cyclohexene Addition Reactions', level: 2 },
      terms: []
    },
    {
      id: 'callout-cyclohexene-hbr',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Cyclohexene + HBr → bromocyclohexane',
        text: 'Cyclic alkenes like <strong>cyclohexene</strong> undergo exactly the same electrophilic addition as open-chain alkenes. The ring stays intact; the double bond within the ring breaks and the two atoms of HBr add across it.<br/><br/><strong>Equation:</strong><br/>C₆H₁₀ + HBr → C₆H₁₁Br (bromocyclohexane)<br/><br/><strong>Mechanism (curly arrows):</strong><br/>Step 1 — The π electrons of the ring C=C attack H<sup>δ+</sup> in HBr. H–Br undergoes heterolytic fission → H adds to one ring carbon, forming a secondary ring carbocation, and Br⁻ is released.<br/>Step 2 — Br⁻ lone pair attacks the carbocation carbon → C–Br bond forms → bromocyclohexane.<br/><br/>The mechanism and curly arrow directions are <strong>identical</strong> to the ethene + HBr mechanism. A cyclic alkene is still a symmetrical alkene, so there is only one possible product.'
      },
      terms: ['Cyclohexene', 'Bromocyclohexane']
    },
    {
      id: 'svg-cyclohexene-hbr',
      type: 'svg',
      data: {
        caption: 'Overall equation and product for cyclohexene + HBr. For the mechanism, apply the same two curly arrows as for the ethene + HBr diagram.',
        svg: `<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .rnf { stroke:#111827; stroke-width:1.8; fill:none; }
      .lbl { fill:#1f2937; font-size:13px; }
      .dim { fill:#6b7280; font-size:11px; }
      .hd  { fill:#1e40af; font-weight:bold; font-size:13px; }
    </style>
    <marker id="ah-cyc" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#111827"/>
    </marker>
  </defs>
  <!-- Cyclohexene ring (left) -->
  <!-- Regular hexagon centred at (100,80), radius 42 -->
  <!-- Vertices: top(100,38), TR(136,59), BR(136,101), bot(100,122), BL(64,101), TL(64,59) -->
  <polygon points="100,38 136,59 136,101 100,122 64,101 64,59" fill="none" stroke="#111827" stroke-width="1.8"/>
  <!-- Double bond on top edge (extra inner line) -->
  <line x1="103" y1="42" x2="133" y2="63" stroke="#111827" stroke-width="1.8"/>
  <text x="100" y="140" class="dim" text-anchor="middle">cyclohexene</text>
  <!-- Plus sign -->
  <text x="158" y="84" class="lbl" text-anchor="middle" dominant-baseline="central" font-size="18">+</text>
  <!-- HBr -->
  <text x="200" y="80" class="atm" text-anchor="middle" dominant-baseline="central">H</text>
  <path d="M 207 79 L 220 79" class="bnd"/>
  <text x="230" y="80" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <!-- Arrow -->
  <path d="M 258 79 L 295 79" stroke="#111827" stroke-width="1.5" fill="none" marker-end="url(#ah-cyc)"/>
  <!-- Bromocyclohexane ring (right) -->
  <!-- Regular hexagon centred at (390,80) -->
  <polygon points="390,38 426,59 426,101 390,122 354,101 354,59" fill="none" stroke="#111827" stroke-width="1.8"/>
  <!-- Br substituent on top-right carbon -->
  <line x1="426" y1="59" x2="455" y2="44" stroke="#111827" stroke-width="1.8"/>
  <text x="464" y="44" class="atm" text-anchor="start" dominant-baseline="central">Br</text>
  <!-- H substituent (implied, shown for clarity) -->
  <line x1="390" y1="38" x2="390" y2="18" stroke="#111827" stroke-width="1.8"/>
  <text x="390" y="13" class="atm" text-anchor="middle" dominant-baseline="central">H</text>
  <text x="390" y="140" class="dim" text-anchor="middle">bromocyclohexane</text>
  <!-- Summary bar -->
  <rect x="20" y="148" width="520" height="0" rx="4" fill="none"/>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-cyclohexene-br2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: Cyclohexene + Br₂ → 1,2-Dibromocyclohexane',
        text: '<strong>Equation:</strong>  C₆H₁₀  +  Br₂  →  C₆H₁₀Br₂  (1,2-dibromocyclohexane)<br/><br/><strong>Conditions:</strong> cold; pure liquid Br₂ or Br₂ in CCl₄; no catalyst<br/><br/><strong>Mechanism (2 steps — same as ethene + Br₂):</strong><br/>• Step 1 — π electrons of the ring C=C <strong>induce a dipole</strong> in Br₂ (δ+Br–Brδ−); π bond electrons attack Brδ⁺; Br–Br breaks heterolytically → ring carbocation + Br⁻. <em>Label "induced dipole" on your diagram.</em><br/>• Step 2 — Br⁻ lone pair attacks the carbocation ring carbon → new C–Br bond forms; 1,2-dibromocyclohexane is produced<br/><br/><strong>Observation:</strong> Red-brown Br₂ <strong>decolourises</strong> (turns colourless) — the same test as for open-chain alkenes<br/><strong>Product:</strong> Both Br atoms add to adjacent ring carbons (C1 and C2); the ring remains intact'
      },
      terms: ['1,2-dibromocyclohexane']
    },
    {
      id: 'svg-cyclohexene-br2',
      type: 'svg',
      data: {
        caption: 'Overall equation: cyclohexene + Br₂ → 1,2-dibromocyclohexane (cold; no catalyst; Br₂ in CCl₄)',
        svg: `<svg viewBox="0 0 560 182" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <style>
      .atm { fill:#111827; font-size:14px; }
      .bnd { stroke:#111827; stroke-width:1.8; fill:none; }
      .lbl { fill:#1f2937; font-size:12px; }
      .dim { fill:#6b7280; font-size:11px; }
      .dlt { fill:#6b7280; font-size:10px; }
    </style>
    <marker id="ah-cbr" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0,6 2,0 4" fill="#111827"/>
    </marker>
  </defs>

  <!-- ── Cyclohexene ring centred (85,95) r=40 ── -->
  <!-- vertices: top(85,55) TR(120,75) BR(120,115) bot(85,135) BL(50,115) TL(50,75) -->
  <polygon points="85,55 120,75 120,115 85,135 50,115 50,75" fill="none" stroke="#111827" stroke-width="1.8"/>
  <!-- double bond on TL→top edge (inner line, offset 4px inward) -->
  <line x1="52" y1="79" x2="87" y2="59" stroke="#111827" stroke-width="1.8"/>
  <text x="85" y="153" class="dim" text-anchor="middle">cyclohexene</text>

  <!-- ── Plus sign ── -->
  <text x="148" y="97" class="lbl" text-anchor="middle" dominant-baseline="central" font-size="18">+</text>

  <!-- ── Br₂ ── -->
  <text x="166" y="87" class="dlt" text-anchor="middle">δ+</text>
  <text x="166" y="97" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <path d="M 177 96 L 194 96" class="bnd"/>
  <text x="204" y="87" class="dlt" text-anchor="middle">δ−</text>
  <text x="204" y="97" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>

  <!-- ── Arrow → ── -->
  <path d="M 232 96 L 272 96" stroke="#111827" stroke-width="1.5" fill="none" marker-end="url(#ah-cbr)"/>

  <!-- ── 1,2-dibromocyclohexane centred (420,95) r=40 ── -->
  <!-- vertices: top(420,55) TR(455,75) BR(455,115) bot(420,135) BL(385,115) TL(385,75) -->
  <polygon points="420,55 455,75 455,115 420,135 385,115 385,75" fill="none" stroke="#111827" stroke-width="1.8"/>
  <!-- Br on top carbon (C1) -->
  <line x1="420" y1="55" x2="420" y2="33" stroke="#111827" stroke-width="1.8"/>
  <text x="420" y="27" class="atm" text-anchor="middle" dominant-baseline="central">Br</text>
  <!-- Br on TR carbon (C2, adjacent) -->
  <line x1="455" y1="75" x2="477" y2="62" stroke="#111827" stroke-width="1.8"/>
  <text x="487" y="59" class="atm" text-anchor="start" dominant-baseline="central">Br</text>
  <text x="420" y="153" class="dim" text-anchor="middle">1,2-dibromocyclohexane</text>

  <!-- ── Overall equation bar ── -->
  <rect x="20" y="163" width="520" height="17" rx="3" fill="#0a2e1a" stroke="#86efac" stroke-width="1"/>
  <text x="280" y="173" class="lbl" text-anchor="middle" dominant-baseline="central">C₆H₁₀ + Br₂ → C₆H₁₀Br₂ (1,2-dibromocyclohexane; cold; no catalyst)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'h-h2so4',
      type: 'heading',
      data: { text: 'Mechanism: Addition of Concentrated Sulphuric Acid', level: 2 },
      terms: []
    },
    {
      id: 'callout-h2so4-mech',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Mechanism Steps for H₂SO₄',
        text: 'When alkenes react with <strong>cold concentrated sulphuric acid</strong>, the acid acts as an electrophile. The H₂SO₄ molecule features an H–O bond where the hydrogen is δ+ and oxygen is δ−.<br/><br/><strong>Step 1:</strong> The π bond attacks the δ+ hydrogen atom on H₂SO₄. The H–O bond breaks, sending both electrons to the oxygen (heterolytic fission). This forms a carbocation (CH₃CH₂⁺ for ethene) and a hydrogensulphate ion (HSO₄⁻, specifically ⁻OSO₃H).<br/><br/><strong>Step 2:</strong> A lone pair on the negative oxygen of the hydrogensulphate ion attacks the positive carbon.<br/><br/><strong>Product:</strong> An alkyl hydrogensulphate. Ethene yields <strong>ethyl hydrogensulphate</strong> (CH₃CH₂OSO₃H). Cyclohexene yields cyclohexyl hydrogensulphate, following the exact same mechanism rules.'
      },
      terms: ['Sulphuric acid', 'Ethyl hydrogensulphate']
    },
    {
      id: 'callout-h2so4-structure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'H₂SO₄ Structure — The Key to the Mechanism',
        text: 'Sulphuric acid has the structure <strong>HO–SO₂–OH</strong>: a central sulphur atom double-bonded to two oxygens, with two –OH groups attached. Both H–O bonds exist, but <strong>only ONE H participates</strong> in the addition — the other is too far away from the C=C. Because oxygen is far more electronegative than hydrogen, the O–H bond is polarised so H is δ+ and O is δ−, making H₂SO₄ an effective electrophile in the same way as HBr.<br/><br/>The product can be written in several equivalent ways — all represent <strong>ethyl hydrogensulphate</strong>:<br/>• <strong>CH₃CH₂OSO₃H</strong> — preferred (shows C–O–S bonding explicitly)<br/>• CH₃CH₂OSO₂OH — fully expanded form<br/>• CH₃CH₂HSO₄ — shorthand notation<br/><br/>In exams, use the O-linked form (CH₃CH₂OSO₃H) unless otherwise stated.'
      },
      terms: ['Ethyl hydrogensulphate', 'Alkyl hydrogensulphate']
    },
    {
      id: 'svg-h2so4-mechanism',
      type: 'svg',
      data: {
        caption: 'Two-step curly arrow mechanism: ethene + cold concentrated H₂SO₄',
        svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13">
  <defs>
    <style>
      .atm { font-size: 14px; font-weight: 700; fill: #1e293b; }
      .hd  { font-size: 12px; font-weight: 600; fill: #1e293b; }
      .chg { font-size: 10px; font-weight: 700; fill: #dc2626; }
      .dlt { font-size: 11px; fill: #6b7280; }
      .bnd { stroke: #1e293b; stroke-width: 2; fill: none; stroke-linecap: round; }
      .cur { stroke: #2563eb; stroke-width: 1.8; fill: none; stroke-linecap: round; }
      .lbl { font-size: 11px; fill: #374151; }
      .rxn { stroke: #64748b; stroke-width: 1.8; fill: none; stroke-linecap: round; }
    </style>
    <marker id="ah-h2s" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2563eb"/>
    </marker>
    <marker id="arh-h2s" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#64748b"/>
    </marker>
  </defs>

  <!-- ═══════════════ STEP 1 ═══════════════ -->
  <text x="20" y="28" font-size="12" font-weight="700" fill="#2563eb">Step 1</text>

  <!-- Ethene C=C -->
  <text x="50"  y="100" class="atm">CH₂</text>
  <text x="107" y="100" class="atm">CH₂</text>
  <!-- single bond -->
  <path d="M 80 94 L 107 94" class="bnd"/>
  <!-- double bond (second line above) -->
  <path d="M 80 89 L 107 89" class="bnd"/>

  <!-- plus sign -->
  <text x="155" y="100" font-size="16" fill="#6b7280">+</text>

  <!-- H₂SO₄ label -->
  <text x="178" y="93" class="atm">H</text>
  <!-- δ+ on H -->
  <text x="178" y="81" class="dlt">δ+</text>
  <!-- O–S bond -->
  <path d="M 193 90 L 210 90" class="bnd"/>
  <text x="211" y="93" class="atm">O</text>
  <path d="M 226 90 L 243 90" class="bnd"/>
  <text x="244" y="93" class="atm">SO₃H</text>
  <!-- δ− on O -->
  <text x="213" y="81" class="dlt">δ−</text>

  <!-- Curly arrow 1: π bond → H -->
  <path d="M 93 83 Q 140 55 177 80" class="cur" marker-end="url(#ah-h2s)"/>

  <!-- Curly arrow 2: H–O bond → O -->
  <path d="M 192 85 Q 201 70 211 80" class="cur" marker-end="url(#ah-h2s)"/>

  <!-- Arrow → products -->
  <path d="M 300 92 L 340 92" class="rxn" marker-end="url(#arh-h2s)"/>

  <!-- Carbocation CH₃CH₂⁺ -->
  <text x="350" y="100" class="hd">CH₃CH₂</text>
  <text x="406" y="95" class="chg">+</text>

  <!-- plus sign -->
  <text x="422" y="100" font-size="16" fill="#6b7280">+</text>

  <!-- ⁻OSO₃H ion -->
  <text x="435" y="95" class="chg">−</text>
  <text x="443" y="100" class="hd">OSO₃H</text>

  <!-- ═══════════════ STEP 2 ═══════════════ -->
  <text x="20" y="178" font-size="12" font-weight="700" fill="#2563eb">Step 2</text>

  <!-- CH₃CH₂⁺ -->
  <text x="50"  y="220" class="hd">CH₃CH₂</text>
  <text x="106" y="215" class="chg">+</text>

  <!-- plus sign -->
  <text x="122" y="220" font-size="16" fill="#6b7280">+</text>

  <!-- ⁻OSO₃H -->
  <text x="135" y="215" class="chg">−</text>
  <text x="143" y="220" class="hd">OSO₃H</text>

  <!-- Curly arrow: lone pair on O → C+ -->
  <path d="M 141 210 Q 130 195 112 210" class="cur" marker-end="url(#ah-h2s)"/>

  <!-- Arrow → product -->
  <path d="M 220 213 L 260 213" class="rxn" marker-end="url(#arh-h2s)"/>

  <!-- Product: ethyl hydrogensulphate -->
  <text x="270" y="220" class="hd">CH₃CH₂OSO₃H</text>
  <text x="270" y="238" class="lbl">(ethyl hydrogensulphate)</text>

  <!-- ═══════════════ OVERALL EQUATION ═══════════════ -->
  <line x1="20" y1="260" x2="660" y2="260" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20"  y="280" class="lbl">Overall:  CH₂=CH₂  +  H₂SO₄  →  CH₃CH₂OSO₃H</text>
  <text x="20"  y="295" class="lbl" fill="#6b7280">(cold concentrated; electrophilic addition)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-cyclohexene-h2so4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Cyclohexene + Concentrated H₂SO₄',
        text: '<strong>Equation:</strong>  C₆H₁₀  +  H₂SO₄  →  C₆H₁₁OSO₃H<br/><br/><strong>Mechanism:</strong> Identical to the ethene case — the δ+ hydrogen in H₂SO₄ attacks the π bond of the ring.<br/>• Step 1: π electrons attack H (δ+) → secondary carbocation at one ring carbon + ⁻OSO₃H<br/>• Step 2: lone pair on O of ⁻OSO₃H attacks the C⁺ → ring C now bears –OSO₃H group<br/><br/><strong>Product name:</strong> cyclohexyl hydrogensulphate<br/><strong>Key point:</strong> The ring stays intact; only one C–H and one C–O bond are formed. A secondary carbocation (ring carbon flanked by two C–C bonds) is formed in Step 1, making this slightly more stable than a primary carbocation.'
      },
      terms: ['Cyclohexyl hydrogensulphate']
    },
    {
      id: 'h-heterolytic',
      type: 'heading',
      data: { text: 'Heterolytic vs Homolytic Fission', level: 2 },
      terms: []
    },
    {
      id: 'table-fission',
      type: 'comparisonTable',
      data: {
        caption: 'Bond fission types',
        headers: ['Fission type', 'How electrons are distributed', 'Ions/Radicals formed', 'Where it occurs'],
        rows: [
          ['<strong>Homolytic</strong>', 'One electron to each atom (both get one).', 'Free radicals (unpaired electrons, •)', 'FRS of alkanes; initiation step; Cl₂ + UV'],
          ['<strong>Heterolytic</strong>', 'BOTH electrons go to ONE atom.', 'Ions (cation + anion)', 'Electrophilic addition; nucleophilic substitution']
        ]
      },
      terms: ['Homolytic fission', 'Heterolytic fission']
    }
  ,
    {
      id: 'callout-exam-5-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Precision with Curly Arrows",
        text: "Curly arrows must be drawn accurately! An arrow representing electrophilic attack must start <strong>exactly at the C=C double bond line</strong> and point directly to the electrophilic atom (e.g. the \u03b4+ Br)."
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c0', blockId: 'callout-electrophile-def', prompt: 'Define what an electrophile is, and explain why the structure of the C=C double bond is highly susceptible to electrophilic attack.' },
      { id: 'c1', blockId: 'callout-curly', prompt: 'What does a curly arrow represent in a mechanism, and where does it start and end?' },
      { id: 'c2', blockId: 'callout-mech1', prompt: 'Describe step 1 of the electrophilic addition of HBr to ethene. What intermediate forms?' },
      { id: 'c2_5', blockId: 'callout-hx-reactivity', prompt: 'Explain the trend in the rate of reaction of different hydrogen halides (HF to HI) with alkenes.' },
      { id: 'c-table-hx', blockId: 'table-hx-bond-strength', prompt: 'Give the approximate H–X bond strengths for HF, HCl, HBr and HI (in kJ mol⁻¹). Which reacts fastest with alkenes, and why?' },
      { id: 'c2_8', blockId: 'p-halogens-context', prompt: 'What conditions are typically used for adding bromine to an alkene to study the pure addition mechanism, and what is the product with cyclohexene?' },
      { id: 'c3', blockId: 'callout-br2-mech1', prompt: 'How does bromine (a non-polar molecule) act as an electrophile towards alkenes?' },
      { id: 'c-cyclohexene', blockId: 'callout-cyclohexene-hbr', prompt: 'Describe the mechanism for cyclohexene reacting with HBr. How does this differ from the ethene + HBr mechanism?' },
      { id: 'c-svg-hbr', blockId: 'svg-hbr-mechanism', prompt: 'Sketch the two-step curly arrow mechanism for HBr adding to ethene. What intermediate forms in Step 1, and what attacks it in Step 2?' },
      { id: 'c-svg-br2', blockId: 'svg-br2-mechanism', prompt: 'What label must you write next to Br₂ in the bromine addition mechanism, and what does it explain about bromine acting as an electrophile?' },
      { id: 'c-br2-decolour', blockId: 'callout-br2-decolourisation', prompt: 'What colour change is observed when bromine reacts with an alkene, and what does this observation test for? What conditions (solvent/state) should be used to observe the clean addition mechanism?' },
      { id: 'c4', blockId: 'callout-h2so4-mech', prompt: 'What is the product formed when ethene reacts with concentrated sulphuric acid, and which part acts as the electrophile?' },
      { id: 'c-h2so4-svg', blockId: 'svg-h2so4-mechanism', prompt: 'Draw the two-step curly arrow mechanism for ethene + cold concentrated H₂SO₄. Name the product and write its formula in two different notations. Explain why only ONE hydrogen in H₂SO₄ reacts.' },
      { id: 'c5', blockId: 'table-fission', prompt: 'Distinguish between homolytic and heterolytic fission. What types of intermediate does each produce?' }
    ],
    summaryText: 'Electrophilic addition mechanisms: 1) HBr: addition across C=C involves attack on δ+ H, forming carbocation, then nucleophilic attack by Br⁻. 2) Br₂: π electrons induce a dipole in Br₂, attacking Brδ+, forming carbocation + Br⁻. 3) H₂SO₄: attack on δ+ H forms carbocation, then HSO₄⁻ attacks forming alkyl hydrogensulphate.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Electrophilic Addition — Hydrogen Halides with Symmetrical Alkenes',
      detail: 'Ethene and cyclohexene react with HBr (and other HX) via a 2-step electrophilic addition: Step 1 forms a carbocation; Step 2 the halide ion attacks. Rate order HF < HCl < HBr < HI due to decreasing H–X bond strength (568 → 298 kJ/mol).',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/symhbr.html'
    },
    {
      id: 'ev-2',
      title: 'Electrophilic Addition — Concentrated Sulphuric Acid with Alkenes',
      detail: 'Alkenes react with cold concentrated H₂SO₄ via identical 2-step mechanism to HBr. Product for ethene is ethyl hydrogensulphate (CH₃CH₂OSO₃H = CH₃CH₂HSO₄). Only one of the two H–O bonds in H₂SO₄ reacts (the other is too far from the C=C). Cyclohexene gives cyclohexyl hydrogensulphate via a secondary carbocation intermediate.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/symh2so4.html'
    },
    {
      id: 'ev-3',
      title: 'Electrophilic Addition — Bromine with Symmetrical Alkenes',
      detail: 'Alkenes decolourise bromine (red-brown → colourless) without catalyst in the cold. Use pure Br₂ or Br₂/CCl₄ for the clean 2-step mechanism; bromine water gives a mixture (beyond A-level). Induced dipole (δ+Br–Brδ−) must be labelled in exam diagrams. Ethene + Br₂ → 1,2-dibromoethane; cyclohexene + Br₂ → 1,2-dibromocyclohexane. Decolourisation is the standard test for the presence of a C=C double bond.',
      source: 'https://www.chemguide.co.uk/mechanisms/eladd/symbr2.html'
    }
  ]
};
export default note_chemistry_1_5_3;