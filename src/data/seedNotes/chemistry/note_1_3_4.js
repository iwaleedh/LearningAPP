/**
 * Seed note: Chemistry · Unit 1 · Topic 3 · Subtopic 4
 * "Shapes of molecules — VSEPR theory"
 * Source: Pearson Edexcel IAL Chemistry — Section 3B.2
 */
export const note_chemistry_1_3_4 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Use VSEPR theory to predict and explain the shapes of simple molecules and ions. Know the bond angles for all common shapes. Understand the effect of lone pairs on bond angles.' },
      terms: []
    },
    {
      id: 'h-vsepr',
      type: 'heading',
      data: { text: 'VSEPR Theory', level: 2 },
      terms: []
    },
    {
      id: 'callout-vsepr',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Valence Shell Electron Pair Repulsion (VSEPR)',
        text: 'Electron pairs (both bonding pairs and lone pairs) around a central atom repel each other and <strong>arrange themselves to be as far apart as possible</strong>, minimising repulsion. This determines the shape of the molecule.<br/><br/>Repulsion order: <strong>lone pair–lone pair > lone pair–bonding pair > bonding pair–bonding pair</strong><br/><br/>Each lone pair reduces bond angles by approximately 2.5°.'
      },
      terms: ['VSEPR', 'Lone pair', 'Bonding pair']
    },
    {
      id: 'h-shapes',
      type: 'heading',
      data: { text: 'Common Shapes and Bond Angles', level: 2 },
      terms: []
    },
    {
      id: 'table-shapes',
      type: 'comparisonTable',
      data: {
        caption: 'Molecular shapes (VSEPR) — from the textbook',
        headers: ['Shape', 'Bonding Pairs', 'Lone Pairs', 'Bond Angle', 'Example'],
        rows: [
          ['Linear', '2', '0', '180°', 'CO₂, BeCl₂'],
          ['Trigonal planar', '3', '0', '120°', 'BF₃, SO₃'],
          ['Tetrahedral', '4', '0', '109.5°', 'CH₄, CCl₄, NH₄⁺'],
          ['Pyramidal (trigonal pyramidal)', '3', '1', '107°', 'NH₃, PCl₃'],
          ['Bent (V-shaped)', '2', '2', '104.5°', 'H₂O'],
          ['Trigonal bipyramidal', '5', '0', '90°/120°', 'PCl₅'],
          ['Octahedral', '6', '0', '90°', 'SF₆']
        ]
      },
      terms: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Pyramidal', 'Bent', 'Octahedral']
    },
    {
      id: 'svg-shapes',
      type: 'svg',
      data: {
        caption: 'Figure: Common molecular shapes — bond angles and lone pairs',
        svg: `<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="11">

  <!-- LINEAR: CO₂ -->
  <text x="68" y="15" text-anchor="middle" fill="#1e40af" font-weight="bold" font-size="12">Linear</text>
  <text x="68" y="27" text-anchor="middle" fill="#64748b" font-size="10">180°</text>
  <circle cx="20" cy="70" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="20" y="74" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <line x1="34" y1="70" x2="54" y2="70" stroke="#334155" stroke-width="2"/>
  <circle cx="68" cy="70" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="68" y="74" text-anchor="middle" fill="#1e40af" font-size="10">C</text>
  <line x1="82" y1="70" x2="102" y2="70" stroke="#334155" stroke-width="2"/>
  <circle cx="116" cy="70" r="14" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="116" y="74" text-anchor="middle" fill="#7f1d1d" font-size="10">O</text>
  <text x="68" y="100" text-anchor="middle" fill="#64748b" font-size="10">e.g. CO₂, BeCl₂</text>

  <!-- TRIGONAL PLANAR: BF₃ -->
  <text x="220" y="15" text-anchor="middle" fill="#15803d" font-weight="bold" font-size="12">Trigonal Planar</text>
  <text x="220" y="27" text-anchor="middle" fill="#64748b" font-size="10">120°</text>
  <circle cx="220" cy="70" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="220" y="74" text-anchor="middle" fill="#1e40af" font-size="10">B</text>
  <line x1="220" y1="56" x2="220" y2="36" stroke="#334155" stroke-width="2"/>
  <circle cx="220" cy="24" r="12" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="220" y="42" text-anchor="middle" fill="#166534" font-size="10">F</text>
  <line x1="208" y1="77" x2="190" y2="93" stroke="#334155" stroke-width="2"/>
  <circle cx="181" cy="100" r="12" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="181" y="104" text-anchor="middle" fill="#166534" font-size="10">F</text>
  <line x1="232" y1="77" x2="250" y2="93" stroke="#334155" stroke-width="2"/>
  <circle cx="259" cy="100" r="12" fill="#0a3020" stroke="#16a34a" stroke-width="1.5"/>
  <text x="259" y="104" text-anchor="middle" fill="#166534" font-size="10">F</text>
  <text x="220" y="120" text-anchor="middle" fill="#64748b" font-size="10">e.g. BF₃, SO₃</text>

  <!-- TETRAHEDRAL: CH₄ -->
  <text x="370" y="15" text-anchor="middle" fill="#7c3aed" font-weight="bold" font-size="12">Tetrahedral</text>
  <text x="370" y="27" text-anchor="middle" fill="#64748b" font-size="10">109.5°</text>
  <circle cx="370" cy="70" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="370" y="74" text-anchor="middle" fill="#1e40af" font-size="10">C</text>
  <line x1="370" y1="56" x2="370" y2="36" stroke="#334155" stroke-width="2"/>
  <circle cx="370" cy="24" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="370" y="42" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <line x1="358" y1="63" x2="335" y2="50" stroke="#334155" stroke-width="2"/>
  <circle cx="325" cy="44" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="325" y="48" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <line x1="382" y1="63" x2="405" y2="50" stroke="#334155" stroke-width="2"/>
  <circle cx="415" cy="44" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="415" y="48" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <line x1="370" y1="84" x2="370" y2="104" stroke="#334155" stroke-width="2" stroke-dasharray="4,2"/>
  <circle cx="370" cy="116" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="370" y="120" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <text x="370" y="136" text-anchor="middle" fill="#64748b" font-size="10">e.g. CH₄, NH₄⁺</text>

  <!-- PYRAMIDAL: NH₃ -->
  <text x="525" y="15" text-anchor="middle" fill="#b45309" font-weight="bold" font-size="12">Pyramidal</text>
  <text x="525" y="27" text-anchor="middle" fill="#64748b" font-size="10">107°</text>
  <circle cx="525" cy="70" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="525" y="74" text-anchor="middle" fill="#1e40af" font-size="10">N</text>
  <!-- Lone pair arc -->
  <path d="M515,58 Q525,45 535,58" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="525" y="44" text-anchor="middle" fill="#b45309" font-size="9">LP</text>
  <line x1="513" y1="77" x2="495" y2="98" stroke="#334155" stroke-width="2"/>
  <circle cx="487" cy="107" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="487" y="111" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <line x1="525" y1="84" x2="525" y2="104" stroke="#334155" stroke-width="2"/>
  <circle cx="525" cy="116" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="525" y="120" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <line x1="537" y1="77" x2="555" y2="98" stroke="#334155" stroke-width="2"/>
  <circle cx="563" cy="107" r="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="563" y="111" text-anchor="middle" fill="#334155" font-size="10">H</text>
  <text x="525" y="136" text-anchor="middle" fill="#64748b" font-size="10">e.g. NH₃, PCl₃</text>

  <!-- BENT: H₂O -->
  <text x="645" y="15" text-anchor="middle" fill="#be185d" font-weight="bold" font-size="12">Bent</text>
  <text x="645" y="27" text-anchor="middle" fill="#64748b" font-size="10">104.5°</text>
  <circle cx="645" cy="70" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="645" y="74" text-anchor="middle" fill="#1e40af" font-size="10">O</text>
  <!-- 2 lone pairs -->
  <path d="M633,58 Q640,46 650,58" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <path d="M638,54 Q645,42 655,54" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="645" y="42" text-anchor="middle" fill="#b45309" font-size="9">2LP</text>
  <line x1="633" y1="77" x2="615" y2="98" stroke="#334155" stroke-width="2"/>
  <circle cx="607" cy="107" r="12" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="607" y="111" text-anchor="middle" fill="#7f1d1d" font-size="10">H</text>
  <line x1="657" y1="77" x2="675" y2="98" stroke="#334155" stroke-width="2"/>
  <circle cx="683" cy="107" r="12" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="683" y="111" text-anchor="middle" fill="#7f1d1d" font-size="10">H</text>
  <text x="645" y="136" text-anchor="middle" fill="#64748b" font-size="10">e.g. H₂O</text>

  <!-- Legend -->
  <rect x="10" y="155" width="680" height="1" fill="#1e293b"/>
  <text x="350" y="172" text-anchor="middle" fill="#64748b" font-size="10">LP = lone pair (not shown as atoms but takes up space and pushes bonding pairs closer)</text>
  <text x="350" y="185" text-anchor="middle" fill="#64748b" font-size="10">More lone pairs → smaller bond angle: CH₄ (109.5°) → NH₃ (107°) → H₂O (104.5°)</text>
</svg>`
      },
      terms: []
    },
    {
      id: 'callout-nh3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked: NH₃ and H₂O bond angles explained',
        text: '<strong>NH₃ (ammonia):</strong><br/>4 electron pairs around N (3 bonding, 1 lone pair).<br/>Based on 4 pairs → starts as tetrahedral arrangement BUT shape (based only on atoms) = <strong>trigonal pyramidal</strong>.<br/>1 lone pair pushes bonding pairs closer together → bond angle = <strong>107°</strong> (less than 109.5°).<br/><br/><strong>H₂O (water):</strong><br/>4 electron pairs around O (2 bonding, 2 lone pairs).<br/>Shape = <strong>bent/V-shaped</strong>.<br/>2 lone pairs push bonding pairs even more → bond angle = <strong>104.5°</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-double',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Double and triple bonds count as ONE electron pair',
        text: 'For the purpose of VSEPR, a double bond counts as one region of electron density (one pair), not two. So CO₂ has 2 regions around C → linear (180°). This is why CO₂ is linear despite having 4 bonding pairs from the two double bonds.'
      },
      terms: []
    },
    {
      id: 'h-practice-vsepr',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-vsepr1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Predict Shape and Bond Angle of PCl₃',
        text: '<strong>Question:</strong> Using VSEPR theory, predict the shape and bond angle of PCl₃.<br/><br/><strong>Step 1 — Count electron pairs around P:</strong><br/>P has 5 outer electrons. It forms 3 bonds with Cl (3 bonding pairs) + 1 lone pair = 4 electron pairs total.<br/><br/><strong>Step 2 — Base shape:</strong><br/>4 pairs → tetrahedral arrangement of electron pairs.<br/><br/><strong>Step 3 — Shape from atom positions only:</strong><br/>1 lone pair present → shape = <strong>trigonal pyramidal</strong> (same as NH₃)<br/><br/><strong>Step 4 — Bond angle:</strong><br/>Lone pair exerts more repulsion than bonding pairs → bond angle <strong>&lt; 109.5°, approximately 107°</strong>.<br/><br/><em>In exam: always state the shape name AND the bond angle, and justify why the angle is reduced from the ideal.</em>'
      },
      terms: []
    },
    {
      id: 'callout-pq-vsepr2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Why Does Bond Angle Decrease CH₄ > NH₃ > H₂O?',
        text: '<strong>Question:</strong> Explain why the bond angle decreases in the order CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°).<br/><br/><strong>All three molecules have 4 electron pairs around the central atom.</strong><br/><br/>• CH₄: 4 bonding pairs, 0 lone pairs → perfectly tetrahedral → 109.5°<br/>• NH₃: 3 bonding pairs, 1 lone pair → lone pair takes up more space, pushes bonding pairs together → 107°<br/>• H₂O: 2 bonding pairs, 2 lone pairs → two lone pairs each exert greater repulsion → bonding pairs pushed even closer → 104.5°<br/><br/><strong>Key rule:</strong> lone pair–lone pair repulsion &gt; lone pair–bonding pair &gt; bonding pair–bonding pair. Each lone pair reduces the bond angle.'
      },
      terms: []
    },
    {
      id: 'callout-pq-vsepr3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Outer Configuration of Arsenic (Video Past Paper)',
        text: '<strong>Question:</strong> The outer electron configuration of carbon is 2s² 2p². Write the outer configuration of arsenic (As) and explain how you deduced it.<br/><br/><strong>Step 1 — Locate As on periodic table:</strong><br/>As is in Period 4, Group 5.<br/><br/><strong>Step 2 — Determine which subshells:</strong><br/>Group 5 → As is in the p-block. Period 4 → outer electrons are in quantum shell 4.<br/>Group 5 means 5 outer electrons: 2 in 4s and 3 in 4p.<br/><br/><strong>Outer electronic configuration: 4s² 4p³</strong><br/><br/><strong>Box notation for 4p:</strong> [↑][↑][↑] — three separate orbitals each with one electron (Hund\'s rule), same as the 2p³ arrangement in N.<br/><br/><em>Since As is in the same group as N and P, they all have the same outer shell configuration (just in higher quantum shells).</em>'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-vsepr', prompt: 'State the core principle of VSEPR theory.' },
      { id: 'c2', blockId: 'callout-vsepr', prompt: 'State the order of repulsion strength: lone pair vs bonding pair.' },
      { id: 'c3', blockId: 'table-shapes', prompt: 'Give the shape and bond angle of: (a) CH₄, (b) NH₃, (c) H₂O, (d) BF₃.' },
      { id: 'c4', blockId: 'callout-nh3', prompt: 'Why is the bond angle in NH₃ (107°) less than in CH₄ (109.5°)?' },
      { id: 'c5', blockId: 'callout-pq-vsepr2', prompt: 'Explain why bond angle decreases in the order CH₄ > NH₃ > H₂O, using repulsion theory.' },
      { id: 'c6', blockId: 'callout-pq-vsepr1', prompt: 'Predict the shape and bond angle of PCl₃. Justify your answer using VSEPR.' }
    ],
    summaryText: 'VSEPR: electron pairs repel and spread as far as possible. LP-LP > LP-BP > BP-BP repulsion. Each lone pair reduces bond angles ≈ 2.5°. Shapes: 0LP=tetrahedral(109.5°), 1LP=pyramidal(107°), 2LP=bent(104.5°), 3=trigonal planar(120°), 2bp=linear(180°). Double bond counts as one region of electron density.',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_3_4;