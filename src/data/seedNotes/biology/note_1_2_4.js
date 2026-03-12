export const note_biology_1_2_4 = {
  blocks: [
    {
      id: 'obj-diffusion',
      type: 'objective',
      data: { text: 'Describe simple diffusion, facilitated diffusion, and osmosis; explain how the rate of diffusion is affected by concentration gradient, surface area, and membrane thickness.' },
    },
    {
      id: 'h-diffusion',
      type: 'heading',
      data: { text: 'Simple Diffusion', level: 2 },
    },
    {
      id: 'p-diffusion',
      type: 'paragraph',
      data: { text: 'Diffusion is the net movement of molecules or ions from a region of higher concentration to a region of lower concentration (down a concentration gradient). It is a passive process: no energy (ATP) is needed. The driving force is the random kinetic energy of particles.' },
    },
    {
      id: 'list-diffusion',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Simple diffusion</strong> — molecules pass directly through the phospholipid bilayer without any protein assistance.',
          'Only <strong>small, non-polar</strong> molecules can do this (examples: O\u2082, CO\u2082, ethanol, steroid hormones).',
          'Large molecules, ions, and polar molecules cannot cross the hydrophobic lipid bilayer directly.',
          'Rate increases with a steeper concentration gradient, a higher temperature, a larger surface area, or a thinner membrane.',
        ],
      },
    },
    {
      id: 'callout-ficks',
      type: 'callout',
      data: {
        style: 'key',
        title: "Fick\u2019s Law",
        text: 'Rate of diffusion \u221d (surface area \u00d7 concentration difference) \u00f7 thickness of exchange surface\n\nHigher surface area \u2192 faster diffusion\nHigher concentration gradient \u2192 faster diffusion\nThicker membrane \u2192 slower diffusion\nHigher temperature \u2192 faster diffusion (increased kinetic energy)',
      },
    },
    {
      id: 'table-rate-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Factors affecting the rate of diffusion across a membrane.',
        headers: ['Factor', 'Effect on rate', 'Explanation'],
        rows: [
          ['Concentration gradient', 'Steeper \u2192 faster', 'More molecules on the high-concentration side at any moment \u2192 more cross per unit time; continues until equilibrium'],
          ['Temperature', 'Higher \u2192 faster', 'Molecules have greater kinetic energy \u2192 move faster and collide with membrane more frequently \u2192 more cross per second'],
          ['Surface area', 'Greater \u2192 faster', 'More membrane area available \u2192 more molecules can cross simultaneously (increased by folds: microvilli, cristae)'],
          ['Properties of molecule', 'Small, non-polar \u2192 fastest', 'Small uncharged non-polar molecules (O\u2082, CO\u2082) dissolve in the hydrophobic tails and pass freely; large, polar, or charged molecules require channel or carrier proteins'],
        ],
      },
    },
    {
      id: 'h-facilitated',
      type: 'heading',
      data: { text: 'Facilitated Diffusion', level: 2 },
    },
    {
      id: 'p-facilitated',
      type: 'paragraph',
      data: { text: 'Facilitated diffusion allows large, polar, or charged molecules to cross the membrane that cannot pass directly through the lipid bilayer. It is still passive (no ATP required) and movement is always down the concentration gradient.' },
    },
    {
      id: 'list-facilitated',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Channel proteins</strong> \u2014 form water-filled pores through the membrane. Ion channels are highly specific (e.g. only Na\u207a or only K\u207a pass through). Many channels have gates that open and close in response to signals.',
          '<strong>Carrier proteins</strong> \u2014 have a specific binding site for a particular molecule (e.g. glucose). On binding, the protein changes shape to carry the molecule across the membrane, then releases it on the other side.',
          'Different cells have different carrier and channel proteins \u2014 this determines which substances each cell can take up.',
          '<strong>Rate plateaus</strong> at high concentrations once all protein channels/carriers are occupied (unlike simple diffusion, which continues to increase linearly).',
        ],
      },
    },
    {
      id: 'svg-transport',
      type: 'svg',
      data: {
        caption: 'Channel proteins (ions) and carrier proteins (glucose) in facilitated diffusion. Both move molecules down the concentration gradient without ATP.',
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="580" height="240" fill="#f8f9ff" rx="8"/><rect x="0" y="88" width="580" height="64" fill="#dbeafe" opacity="0.35" rx="0"/><text x="290" y="20" fill="#888" font-size="11" text-anchor="middle">Outside cell (HIGH concentration)</text><text x="290" y="228" fill="#888" font-size="11" text-anchor="middle">Inside cell (LOW concentration)</text><g fill="#6c8ebf"><circle cx="30" cy="88" r="9"/><circle cx="58" cy="88" r="9"/><circle cx="86" cy="88" r="9"/><circle cx="114" cy="88" r="9"/><circle cx="142" cy="88" r="9"/><circle cx="200" cy="88" r="9"/><circle cx="228" cy="88" r="9"/><circle cx="256" cy="88" r="9"/><circle cx="284" cy="88" r="9"/><circle cx="340" cy="88" r="9"/><circle cx="368" cy="88" r="9"/><circle cx="396" cy="88" r="9"/><circle cx="424" cy="88" r="9"/><circle cx="452" cy="88" r="9"/><circle cx="510" cy="88" r="9"/><circle cx="538" cy="88" r="9"/><circle cx="566" cy="88" r="9"/><circle cx="30" cy="152" r="9"/><circle cx="58" cy="152" r="9"/><circle cx="86" cy="152" r="9"/><circle cx="114" cy="152" r="9"/><circle cx="142" cy="152" r="9"/><circle cx="200" cy="152" r="9"/><circle cx="228" cy="152" r="9"/><circle cx="256" cy="152" r="9"/><circle cx="284" cy="152" r="9"/><circle cx="340" cy="152" r="9"/><circle cx="368" cy="152" r="9"/><circle cx="396" cy="152" r="9"/><circle cx="424" cy="152" r="9"/><circle cx="452" cy="152" r="9"/><circle cx="510" cy="152" r="9"/><circle cx="538" cy="152" r="9"/><circle cx="566" cy="152" r="9"/></g><rect x="155" y="76" width="32" height="88" rx="10" fill="#e67e22" opacity="0.9"/><ellipse cx="171" cy="120" rx="8" ry="20" fill="#f39c12"/><text x="171" y="178" fill="#c0392b" font-size="10" text-anchor="middle">Channel</text><text x="171" y="190" fill="#c0392b" font-size="10" text-anchor="middle">protein</text><circle cx="171" cy="60" r="9" fill="#3498db"/><text x="185" y="64" fill="#3498db" font-size="10">Ion</text><line x1="171" y1="69" x2="171" y2="76" stroke="#3498db" stroke-width="2" marker-end="url(#a)"/><ellipse cx="420" cy="120" rx="26" ry="38" fill="#9b59b6" opacity="0.9"/><ellipse cx="420" cy="108" rx="13" ry="12" fill="#d7bde2" opacity="0.9"/><text x="420" y="178" fill="#7d3c98" font-size="10" text-anchor="middle">Carrier</text><text x="420" y="190" fill="#7d3c98" font-size="10" text-anchor="middle">protein</text><polygon points="420,28 433,46 427,68 413,68 407,46" fill="#27ae60" opacity="0.85"/><text x="420" y="52" fill="white" font-size="10" text-anchor="middle">Glu</text><line x1="420" y1="68" x2="420" y2="82" stroke="#27ae60" stroke-width="2"/></svg>',
      },
    },
    {
      id: 'h-osmosis',
      type: 'heading',
      data: { text: 'Osmosis', level: 2 },
    },
    {
      id: 'p-osmosis',
      type: 'paragraph',
      data: { text: 'Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential, through a selectively permeable membrane. It is a passive process.' },
    },
    {
      id: 'list-osmosis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Water potential (\u03c8)</strong> \u2014 a measure of the tendency of water molecules to move. Measured in kPa. Pure water has the highest water potential: \u03c8 = 0 kPa.',
          'Adding solutes lowers water potential (makes it more negative). Water moves from high \u03c8 (dilute) to low \u03c8 (concentrated).',
          'A <strong>selectively permeable membrane</strong> allows water through but not (or far fewer) solute molecules.',
          '<strong>Plant cell in dilute solution</strong> \u2014 water enters by osmosis \u2192 cell swells and becomes <strong>turgid</strong>. The rigid cell wall prevents bursting; it exerts a pressure that stops further water entry.',
          '<strong>Plant cell in concentrated solution</strong> \u2014 water leaves by osmosis \u2192 cell shrinks \u2192 <strong>plasmolysis</strong> (membrane pulls away from wall).',
          '<strong>Animal cell in distilled water</strong> \u2014 water enters by osmosis \u2192 cell bursts (<strong>lysis</strong>). No cell wall to resist the pressure.',
          '<strong>Animal cell in concentrated solution</strong> \u2014 water leaves \u2192 cell shrinks and becomes <strong>crenated</strong>.',
        ],
      },
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Summary comparison of the three types of passive membrane transport.',
        headers: ['Feature', 'Simple diffusion', 'Facilitated diffusion', 'Osmosis'],
        rows: [
          ['Substance moved', 'Small non-polar molecules', 'Large/polar/charged molecules; ions', 'Water only'],
          ['Direction', 'Down conc. gradient', 'Down conc. gradient', 'Down water potential gradient'],
          ['Protein needed?', 'No', 'Yes (channel or carrier)', 'No (or aquaporins)'],
          ['ATP required?', 'No', 'No', 'No'],
          ['Rate limited by?', 'Concentration gradient + surface area', 'Number of proteins available', 'Water potential gradient'],
        ],
      },
    },
    {
      id: 'callout-mistake',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not describe osmosis as movement "from dilute to concentrated". Always use the term water potential: "from a region of higher water potential to a region of lower water potential". Dilute solutions have higher water potential; concentrated solutions have lower (more negative) water potential.',
      },
    },
    {
      id: 'checklist-diff',
      type: 'checklist',
      data: {
        items: [
          { text: "Define diffusion and state three factors that affect its rate (Fick’s Law)", checked: false },
          { text: 'Distinguish simple diffusion from facilitated diffusion', checked: false },
          { text: 'Describe how channel proteins and carrier proteins work', checked: false },
          { text: 'Explain why facilitated diffusion rate plateaus at high substrate concentration', checked: false },
          { text: 'Define osmosis using the term water potential', checked: false },
          { text: 'Predict what happens to plant and animal cells in different solutions', checked: false },
        ],
      },
    },
    {
      id: 'summary-diff',
      type: 'summary',
      data: { text: 'Simple diffusion: small non-polar molecules (O\u2082, CO\u2082) pass directly through the lipid bilayer down a concentration gradient \u2014 passive, no proteins, rate \u221d (surface area \u00d7 conc. difference) \u00f7 thickness. Facilitated diffusion: large/polar/ions use channel proteins (ions; gated) or carrier proteins (glucose; shape-change); still passive and down gradient; rate saturates. Osmosis: net movement of water from higher to lower water potential (\u03c8) through selectively permeable membrane \u2014 passive. Plant cells: turgid in dilute, plasmolysed in concentrated. Animal cells: lyse in distilled water, crenate in concentrated solution.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-ficks', prompt: 'State Fick\u2019s Law and name three factors that affect the rate of diffusion.' },
      { id: 'cue-2', blockId: 'h-facilitated', prompt: 'What is the difference between channel proteins and carrier proteins in facilitated diffusion?' },
      { id: 'cue-3', blockId: 'list-facilitated', prompt: 'Why does the rate of facilitated diffusion plateau at high substrate concentrations, unlike simple diffusion?' },
      { id: 'cue-4', blockId: 'h-osmosis', prompt: "Define osmosis using the term 'water potential'." },
      { id: 'cue-5', blockId: 'list-osmosis', prompt: 'What happens to a plant cell and an animal cell when placed in distilled water? Why do they differ?' },
    ],
    summaryText: "Fick’s Law: rate \u221d (SA \u00d7 conc. difference) \u00f7 thickness. Simple diffusion: small non-polar through bilayer, no proteins. Facilitated diffusion: channel proteins (ions) or carrier proteins (glucose) \u2014 passive, down gradient, rate saturates. Osmosis: water from higher \u03c8 to lower \u03c8 through selectively permeable membrane. Plant cells: turgid (dilute) or plasmolysed (concentrated). Animal cells: lyse (water) or crenate (concentrated).",
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'AQA diffusion and facilitated diffusion', detail: "Channel proteins and carrier proteins in facilitated diffusion; Fick’s Law factors described in Chapter 3 of AQA A Level Biology Student Book 1.", year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 3, pp53-56', tags: ['diffusion', 'osmosis', 'membrane-transport'] },
  ],
};
