/**
 * Seed note: Chemistry · Unit 1 · Topic 5 · Subtopic 5
 * "Addition polymerisation"
 * Source: Pearson Edexcel IAL Chemistry — Section 5C.1
 */
export const note_chemistry_1_5_5 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Know the mechanism of addition polymerisation. Draw the repeat unit and the polymer structure for given monomers (alkenes). Know the names of common addition polymers.' },
      terms: []
    },
    {
      id: 'h-poly',
      type: 'heading',
      data: { text: 'Addition Polymerisation', level: 2 },
      terms: []
    },
    {
      id: 'callout-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Addition Polymerisation',
        text: '<strong>Addition polymerisation</strong> is a reaction in which many small monomer molecules (alkenes) join together to form a large polymer chain, with no other products formed. Each monomer contributes ALL its atoms to the polymer.<br/><br/>Conditions for ethene: Requires <strong>~200°C temperature, ~2000 atm pressure</strong>, and a small amount of oxygen (or organic peroxides) acting as an initiator.<br/><br/>General equation:<br/>n CH₂=CH₂ → –(CH₂–CH₂)ₙ–<br/><br/>The n represents a large number of repeat units (typically thousands).<br/>The polymer is drawn by putting the repeat unit in brackets with subscript n and bonds extending from each side.'
      },
      terms: ['Addition polymerisation', 'Monomer', 'Polymer', 'Repeat unit']
    },
    {
      id: 'list-poly-key',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Only monomers containing a C=C double bond (alkenes) can undergo addition polymerisation.',
          'The π bond in C=C breaks during the reaction; all atoms of every monomer are incorporated into the polymer — no by-products are formed.',
          'Conditions for poly(ethene): temperature ~200°C, pressure ~2000 atm, and a trace of O₂ or organic peroxide as free-radical initiator.',
          'A free radical (R•) is a species with an unpaired electron — highly reactive, it attacks the π bond of an alkene monomer to start chain growth.',
          'Degree of polymerisation (n) is typically thousands to hundreds of thousands of repeat units, giving a very high molar mass (10⁴ to 10⁶ g mol⁻¹).',
          'The polymer backbone consists entirely of C–C single bonds (σ bonds); all C=C π bonds have been used up in forming the chain.',
          'Addition polymers are thermoplastic — they can be softened by heating and remoulded without chemical decomposition.',
          'Unlike condensation polymerisation, no small molecule (e.g. H₂O) is eliminated — atom economy is 100%.'
        ]
      }
    },
    {
      id: 'svg-polymerisation',
      type: 'svg',
      data: {
        caption: 'Addition polymerisation: n alkene monomers join as C=C π bonds break; all atoms are retained in the polymer chain — no by-products are formed.',
        svg: `<svg viewBox="0 0 580 168" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13">
  <defs>
    <marker id="pm-a" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0,8 3,0 6" fill="#374151"/>
    </marker>
  </defs>
  <rect x="8" y="22" width="208" height="112" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
  <text x="112" y="42" font-size="12" font-weight="700" fill="#166534" text-anchor="middle">Monomer (n molecules)</text>
  <text x="34" y="86" font-size="14" font-weight="700" fill="#166534">n</text>
  <text x="66" y="86" font-size="14" font-weight="700" fill="#111827">CH&#x2082;</text>
  <line x1="82" y1="79" x2="102" y2="79" stroke="#111827" stroke-width="2.5"/>
  <line x1="82" y1="86" x2="102" y2="86" stroke="#111827" stroke-width="2.5"/>
  <text x="116" y="86" font-size="14" font-weight="700" fill="#111827">CH&#x2082;</text>
  <text x="112" y="108" font-size="11" fill="#6b7280" text-anchor="middle">alkene &#x2014; C=C &#x3c0; bond</text>
  <text x="112" y="122" font-size="11" fill="#6b7280" text-anchor="middle">breaks during reaction</text>
  <line x1="222" y1="80" x2="292" y2="80" stroke="#374151" stroke-width="2" marker-end="url(#pm-a)" fill="none"/>
  <text x="257" y="68" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">~200 &#xb0;C</text>
  <text x="257" y="81" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">~2000 atm</text>
  <text x="257" y="94" font-size="11" font-weight="700" fill="#1e40af" text-anchor="middle">O&#x2082; initiator</text>
  <rect x="302" y="22" width="270" height="112" rx="6" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="437" y="42" font-size="12" font-weight="700" fill="#7e22ce" text-anchor="middle">Polymer chain</text>
  <line x1="316" y1="81" x2="334" y2="81" stroke="#111827" stroke-width="2"/>
  <text x="336" y="93" font-size="24" fill="#7e22ce" font-weight="900">[</text>
  <text x="356" y="86" font-size="14" font-weight="700" fill="#111827">CH&#x2082;</text>
  <line x1="372" y1="81" x2="392" y2="81" stroke="#111827" stroke-width="2"/>
  <text x="404" y="86" font-size="14" font-weight="700" fill="#111827">CH&#x2082;</text>
  <text x="426" y="93" font-size="24" fill="#7e22ce" font-weight="900">]</text>
  <text x="444" y="99" font-size="14" font-weight="700" fill="#7e22ce">n</text>
  <line x1="454" y1="81" x2="472" y2="81" stroke="#111827" stroke-width="2"/>
  <text x="437" y="112" font-size="11" fill="#6b7280" text-anchor="middle">C=C broken &#x2192; C&#x2013;C bonds only</text>
  <text x="437" y="127" font-size="11" fill="#6b7280" text-anchor="middle">no by-products &#x2014; all atoms retained</text>
  <rect x="8" y="141" width="564" height="20" rx="4" fill="#fef9c3" stroke="#fde047" stroke-width="1"/>
  <text x="290" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">n = degree of polymerisation: typically thousands to hundreds of thousands</text>
</svg>`
      }
    },
    {
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Free Radical Addition Mechanism', level: 3 },
      terms: []
    },
    {
      id: 'p-mechanism',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>1. Initiation:</strong> The initiator (e.g. oxygen) reacts with some alkene to produce free radicals (Ra•).',
          '<strong>2. Propagation:</strong> A radical attacks the C=C double bond, forming a new, longer free radical.<br/>Ra• + CH₂=CH₂ → Ra–CH₂–CH₂•<br/>This new radical attacks another ethene molecule:<br/>Ra–CH₂–CH₂• + CH₂=CH₂ → Ra–CH₂–CH₂–CH₂–CH₂•<br/>This process repeats thousands of times, rapidly growing the chain.',
          '<strong>3. Termination:</strong> Two free radicals randomly collide and join together, terminating the chain reaction. Because the collision is random, the resulting polymer chains vary significantly in length.'
        ]
      },
      terms: ['Free radical addition']
    },
    {
      id: 'table-polymers',
      type: 'comparisonTable',
      data: {
        caption: 'Common addition polymers and their monomers',
        headers: ['Monomer name', 'Monomer formula', 'Polymer name', 'Polymer repeat unit', 'Uses'],
        rows: [
          ['Ethene', 'CH₂=CH₂', 'Poly(ethene) / Polythene', '–(CH₂–CH₂)–', 'Plastic bags, bottles'],
          ['Propene', 'CH₃CH=CH₂', 'Poly(propene) / Polypropylene', '–(CH(CH₃)–CH₂)–', 'Ropes, carpet, crates'],
          ['Chloroethene (vinyl chloride)', 'CH₂=CHCl', 'Poly(chloroethene) / PVC', '–(CHCl–CH₂)–', 'Pipes, window frames, flooring'],
          ['Tetrafluoroethene', 'CF₂=CF₂', 'PTFE (Teflon)', '–(CF₂–CF₂)–', 'Non-stick coatings'],
          ['Phenylethene (styrene)', 'CH₂=CHC₆H₅', 'Poly(phenylethene) / Polystyrene', '–(CH(C₆H₅)–CH₂)–', 'Packaging foam, cups']
        ]
      },
      terms: ['Poly(ethene)', 'PVC', 'PTFE']
    },
    {
      id: 'h-ldpe-hdpe',
      type: 'heading',
      data: { text: 'Low-Density vs High-Density Poly(ethene)', level: 3 }
    },
    {
      id: 'list-ldpe-hdpe',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'LDPE (low-density poly(ethene)): made by high-pressure free-radical polymerisation (~1000–3000 atm, ~200°C) → highly branched chains due to chain-transfer side reactions during propagation.',
          'HDPE (high-density poly(ethene)): made at lower pressure (~10–80 atm) using a Ziegler–Natta catalyst (TiCl₄ / aluminium alkyl) at ~60–70°C → linear, unbranched chains.',
          'Branching in LDPE prevents chains packing closely → lower density (~0.91–0.93 g cm⁻³), more flexible, lower melting point (~105°C); uses: plastic bags, cling film, squeeze bottles.',
          'Linear chains in HDPE pack tightly → higher density (~0.94–0.97 g cm⁻³), greater rigidity, higher melting point (~130°C); uses: pipes, rigid bottles, crates, containers.',
          'Both LDPE and HDPE are non-biodegradable: the unreactive C–C and C–H bonds resist enzyme attack by microorganisms.',
          'High molecular mass and chemical inertness also make both types insoluble under normal conditions.'
        ]
      }
    },
    {
      id: 'table-ldpe-hdpe',
      type: 'comparisonTable',
      data: {
        caption: 'LDPE vs HDPE: conditions, structure and properties',
        headers: ['Property', 'LDPE', 'HDPE'],
        rows: [
          ['Conditions', 'High pressure (~1000–3000 atm), ~200°C, O₂/peroxide initiator', 'Low pressure (~10–80 atm), ~60°C, Ziegler–Natta catalyst'],
          ['Chain structure', 'Highly branched', 'Linear, unbranched'],
          ['Density (g cm⁻³)', '0.91–0.93', '0.94–0.97'],
          ['Melting point (°C)', '~105', '~130'],
          ['Mechanical properties', 'Flexible, soft', 'Rigid, stiff'],
          ['Uses', 'Plastic bags, cling film, squeeze bottles', 'Pipes, rigid bottles, containers, crates']
        ]
      }
    },
    {
      id: 'callout-how-to',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How to draw a polymer from a monomer',
        text: '<strong>Given monomer: CH₂=CHCH₃ (propene)</strong><br/>Step 1: Break the C=C double bond to form two single bonds (extension points).<br/>Step 2: Each C now has a spare bond — these extend to adjacent repeat units.<br/>Step 3: Draw the repeat unit in square brackets with bonds at each end and subscript n.<br/><br/>Result: –(CH₂–CH(CH₃))ₙ–'
      },
      terms: []
    },
    {
      id: 'callout-find-monomer',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How to deduce the monomer from a polymer',
        text: 'If given a polymer chain, find the <strong>repeat unit</strong>:<br/>Step 1: Identify a repeating block of exactly <strong>two carbon atoms</strong> in the main chain.<br/>Step 2: Note the four groups attached to those two carbons.<br/>Step 3: Remove the extension bonds and replace the C–C single bond with a <strong>C=C double bond</strong> to form the monomer alkene.'
      },
      terms: []
    },
    {
      id: 'table-disposal',
      type: 'comparisonTable',
      data: {
        caption: 'Polymer Disposal & Solutions',
        headers: ['Method', 'Explanation / Pros', 'Problems / Cons'],
        rows: [
          ['<strong>Landfill</strong>', 'Cheap and easy way to dispose of waste.', 'Unsightly, smelly, takes up land. Addition polymers are <strong>non-biodegradable</strong> (do not decompose).'],
          ['<strong>Incineration</strong>', 'Burning waste can generate electricity.', 'Releases CO₂ (greenhouse gas) and potentially <strong>toxic gases</strong> depending on the plastic (e.g., HCl from PVC).'],
          ['<strong>Recycling</strong>', 'Plastics are sorted, melted, and remoulded. Conserves crude oil.', 'Requires sorting and transport; plastics degrade in quality after repeated melting.'],
          ['<strong>Biopolymers</strong>', 'Polymers typically derived from plants that are <strong>biodegradable</strong> (broken down by microbes).', 'Requires land to grow crops for production. When they break down, their H and C atoms cannot be easily directly reused like in standard recycling.']
        ]
      },
      terms: ['Non-biodegradable', 'Recycling', 'Biopolymer']
    },
    {
      id: 'checklist-poly',
      type: 'checklist',
      data: {
        items: [
          { text: 'Define addition polymerisation: n alkene monomers join together with no by-products; all monomer atoms incorporated into the polymer chain', checked: false },
          { text: 'State conditions for poly(ethene): ~200°C, ~2000 atm, O₂ or organic peroxide as free-radical initiator', checked: false },
          { text: 'Explain why no by-products form: the C=C π bond breaks and reforms as C–C σ bonds in the chain — no atoms are lost', checked: false },
          { text: 'State the three stages of free-radical mechanism: initiation → propagation → termination', checked: false },
          { text: 'State that termination produces polymer chains of variable length (random collision time)', checked: false },
          { text: 'Draw the repeat unit of poly(ethene): –(CH₂–CH₂)ₙ–', checked: false },
          { text: 'Draw the repeat unit of poly(propene): –(CH₂–CH(CH₃))ₙ– from CH₂=CHCH₃', checked: false },
          { text: 'Draw the repeat unit of PVC: –(CH₂–CHCl)ₙ– from CH₂=CHCl (chloroethene)', checked: false },
          { text: 'Draw the repeat unit of PTFE: –(CF₂–CF₂)ₙ– from CF₂=CF₂ (tetrafluoroethene)', checked: false },
          { text: 'Deduce the monomer from a polymer: identify 2-carbon repeat unit and restore the C=C double bond', checked: false },
          { text: 'Explain why addition polymers are non-biodegradable: unreactive C–C and C–H bonds resist enzyme attack', checked: false },
          { text: 'Describe disposal options: landfill (non-biodegradable build-up), incineration (CO₂ / toxic gases from PVC), recycling (sorting needed), biopolymers (biodegradable but needs crop land)', checked: false },
          { text: 'Compare LDPE (branched, flexible, lower density, ~105°C mp) vs HDPE (linear, rigid, higher density, ~130°C mp)', checked: false },
          { text: 'State that LDPE is made by high-pressure free-radical process; HDPE by lower-pressure catalytic (Ziegler–Natta) process', checked: false }
        ]
      }
    },
    {
      id: 'summary-poly',
      type: 'summary',
      data: {
        text: 'Addition polymerisation joins n alkene monomers (C=C double bond required) to form a long polymer chain with no by-products — 100% atom economy. Conditions: ~200°C, ~2000 atm, free-radical initiator. Mechanism: initiation → propagation (chain grows thousands of steps) → termination (random collision → variable chain lengths). Common polymers: poly(ethene), poly(propene), PVC, PTFE, polystyrene. All addition polymers are non-biodegradable (resistant C–C, C–H bonds) → disposal problems: landfill build-up, toxic incineration gases. LDPE (branched, flexible) vs HDPE (linear, rigid) differ in conditions and chain structure.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c0', blockId: 'list-poly-key', prompt: 'List three key features of addition polymerisation (conditions, by-products, bond type broken).' },
      { id: 'c1', blockId: 'callout-def', prompt: 'Define addition polymerisation, state the conditions required, and write a general equation using ethene.' },
      { id: 'c-mech', blockId: 'p-mechanism', prompt: 'Describe the three stages of the free radical addition polymerisation mechanism for ethene.' },
      { id: 'c2', blockId: 'table-polymers', prompt: 'Name the monomer used to make: (a) PVC (b) PTFE (c) polystyrene.' },
      { id: 'c-ldpe', blockId: 'table-ldpe-hdpe', prompt: 'Compare LDPE and HDPE: conditions of manufacture, chain structure, density and typical uses.' },
      { id: 'c3', blockId: 'callout-how-to', prompt: 'Draw the repeat unit of the addition polymer formed from propene (CH₃CH=CH₂).' },
      { id: 'c4', blockId: 'callout-find-monomer', prompt: 'Describe how to deduce the structure of a monomer given a section of an addition polymer chain.' },
      { id: 'c5', blockId: 'table-disposal', prompt: 'Discuss the problems associated with disposing of polymers via landfill and incineration. Describe one advantage and one disadvantage of using biopolymers.' }
    ],
    summaryText: 'Addition polymerisation: n alkene monomers join — C=C π bond breaks, no by-products, 100% atom economy. Conditions: ~200°C, ~2000 atm, O₂ initiator. Mechanism: initiation → propagation → termination (random → variable chain lengths). Common polymers: poly(ethene), PVC, PTFE, poly(propene), polystyrene. Deduce monomer from 2-carbon repeat unit + restore C=C. All are non-biodegradable. LDPE (high pressure, branched, flexible) vs HDPE (low pressure, catalyst, linear, rigid). Disposal: landfill (builds up), incineration (toxic gases), recycling, biopolymers.',
    ready: true
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Chemguide — Free Radical Addition Polymerisation',
      detail: 'Details the mechanism of ethene polymerisation via initiation (typically with an oxygen/peroxide initiator), propagation (forming progressively larger radicals), and termination (random length generation).',
      year: '2013',
      source: 'chemguide.co.uk',
      tags: ['polymerisation', 'free radical', 'addition']
    }
  ]
};
export default note_chemistry_1_5_5;