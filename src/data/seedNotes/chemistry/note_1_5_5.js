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
      id: 'h-mechanism',
      type: 'heading',
      data: { text: 'Free Radical Addition Mechanism', level: 3 },
      terms: []
    },
    {
      id: 'p-mechanism',
      type: 'list',
      data: {
        style: 'unordered',
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
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'callout-def', prompt: 'Define addition polymerisation, state the conditions required, and write a general equation using ethene.' },
      { id: 'c-mech', blockId: 'p-mechanism', prompt: 'Describe the three stages of the free radical addition polymerisation mechanism for ethene.' },
      { id: 'c2', blockId: 'table-polymers', prompt: 'Name the monomer used to make: (a) PVC (b) PTFE (c) polystyrene.' },
      { id: 'c3', blockId: 'callout-how-to', prompt: 'Draw the repeat unit of the addition polymer formed from propene (CH₃CH=CH₂).' },
      { id: 'c4', blockId: 'callout-find-monomer', prompt: 'Describe how to deduce the structure of a monomer given a section of an addition polymer chain.' },
      { id: 'c5', blockId: 'table-disposal', prompt: 'Discuss the problems associated with disposing of polymers via landfill and incineration. Describe one advantage and one disadvantage of using biopolymers.' }
    ],
    summaryText: 'Addition polymerisation: n alkene molecules → polymer chain (high temp/pressure). Common examples: poly(ethene), PVC, PTFE, poly(propene). Find monomer by taking 2-carbon repeat unit and restoring C=C. Disposal: unreactive/non-biodegradable → landfill build-up. Incineration → gives off toxic fumes/CO₂. Biopolymers → biodegradable but require crop land and don\'t recycle atoms easily.',
    ready: false
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