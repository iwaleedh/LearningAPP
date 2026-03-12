export const note_biology_1_2_5 = {
  blocks: [
    {
      id: 'obj-active',
      type: 'objective',
      data: { text: 'Describe active transport and endocytosis/exocytosis as mechanisms for moving substances across cell membranes against a concentration gradient, and explain the energy requirement.' },
    },
    {
      id: 'h-active',
      type: 'heading',
      data: { text: 'Active Transport', level: 2 },
    },
    {
      id: 'p-active',
      type: 'paragraph',
      data: { text: 'Active transport is the movement of molecules or ions across a cell membrane <strong>against</strong> their concentration gradient (from low to high concentration). Unlike diffusion, active transport requires energy in the form of ATP.' },
    },
    {
      id: 'list-active',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Movement is <strong>against the concentration gradient</strong> \u2014 from low to high concentration.',
          'Energy required: <strong>ATP</strong> (from respiration). ATP is hydrolysed to ADP and inorganic phosphate (Pi) to drive the process.',
          'Requires specific <strong>carrier proteins</strong> (pumps) in the membrane. These are similar to the carrier proteins used in facilitated diffusion but require ATP to function.',
          'The carrier protein binds the molecule or ion, phosphorylation by ATP causes a conformational change, and the molecule/ion is released on the other side of the membrane.',
          'Cells with high rates of active transport contain many <strong>mitochondria</strong> \u2014 needed to generate ATP by aerobic respiration.',
        ],
      },
    },
    {
      id: 'callout-active-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Active Transport vs Facilitated Diffusion',
        text: 'Both use carrier proteins in the membrane.\nFacilitated diffusion: down concentration gradient; no ATP needed.\nActive transport: against concentration gradient; ATP required.\n\nIf you inhibit respiration (stopping ATP production), active transport stops, but facilitated diffusion continues.',
      },
    },
    {
      id: 'callout-tip-carrier',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Carrier Proteins, Not Channel Proteins',
        text: 'Active transport uses CARRIER proteins \u2014 NOT channel proteins. Carrier proteins change shape (conformational change) when ATP is hydrolysed, using this energy to move molecules against their concentration gradient. Channel proteins are passive pores that only allow diffusion DOWN a gradient and cannot use ATP. Writing \u201cchannel proteins\u201d for active transport is a common error that loses marks.',
      },
    },
    {
      id: 'svg-active',
      type: 'svg',
      data: {
        caption: 'Active transport: carrier protein (pump) uses ATP energy to move a molecule against its concentration gradient.',
        svg: '<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="500" height="220" fill="#f8f9ff" rx="8"/><rect x="0" y="80" width="500" height="60" fill="#dbeafe" opacity="0.35"/><text x="250" y="18" fill="#888" font-size="11" text-anchor="middle">LOW concentration (inside)</text><text x="250" y="210" fill="#888" font-size="11" text-anchor="middle">HIGH concentration (outside)</text><g fill="#6c8ebf"><circle cx="30" cy="80" r="9"/><circle cx="60" cy="80" r="9"/><circle cx="90" cy="80" r="9"/><circle cx="120" cy="80" r="9"/><circle cx="150" cy="80" r="9"/><circle cx="210" cy="80" r="9"/><circle cx="240" cy="80" r="9"/><circle cx="270" cy="80" r="9"/><circle cx="330" cy="80" r="9"/><circle cx="360" cy="80" r="9"/><circle cx="390" cy="80" r="9"/><circle cx="420" cy="80" r="9"/><circle cx="450" cy="80" r="9"/><circle cx="480" cy="80" r="9"/><circle cx="30" cy="140" r="9"/><circle cx="60" cy="140" r="9"/><circle cx="90" cy="140" r="9"/><circle cx="120" cy="140" r="9"/><circle cx="150" cy="140" r="9"/><circle cx="210" cy="140" r="9"/><circle cx="240" cy="140" r="9"/><circle cx="270" cy="140" r="9"/><circle cx="330" cy="140" r="9"/><circle cx="360" cy="140" r="9"/><circle cx="390" cy="140" r="9"/><circle cx="420" cy="140" r="9"/><circle cx="450" cy="140" r="9"/><circle cx="480" cy="140" r="9"/></g><ellipse cx="300" cy="110" rx="35" ry="38" fill="#e67e22" opacity="0.9"/><text x="300" y="106" fill="white" font-size="10" text-anchor="middle">Carrier</text><text x="300" y="118" fill="white" font-size="10" text-anchor="middle">protein</text><text x="300" y="130" fill="white" font-size="10" text-anchor="middle">(pump)</text><circle cx="300" cy="33" r="11" fill="#3498db"/><text x="314" y="36" fill="#3498db" font-size="10">Ion / molecule</text><line x1="300" y1="44" x2="300" y2="72" stroke="#3498db" stroke-width="2"/><polygon points="300,72 295,62 305,62" fill="#3498db"/><rect x="168" y="28" width="52" height="22" rx="5" fill="#e74c3c"/><text x="194" y="42" fill="white" font-size="10" text-anchor="middle">ATP</text><line x1="220" y1="39" x2="265" y2="85" stroke="#e74c3c" stroke-width="1.5" stroke-dasharray="4,3"/><text x="240" y="75" fill="#e74c3c" font-size="10">energy</text></svg>',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Examples of Active Transport', level: 2 },
    },
    {
      id: 'list-examples',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Plant root hair cells</strong> absorbing mineral ions (e.g. nitrate, phosphate) from soil water. Mineral ion concentration in soil is very low, so active transport is needed to absorb ions against the gradient. Root hair cells have many mitochondria.',
          '<strong>Intestinal epithelial cells</strong> absorbing glucose from the small intestine (after most glucose has been absorbed by diffusion, active transport picks up the remainder against the gradient). These cells also have many mitochondria and microvilli (to increase surface area).',
          '<strong>Sodium-potassium pump (Na\u207a/K\u207a pump)</strong> in nerve and muscle cells \u2014 pumps 3 Na\u207a out and 2 K\u207a in per ATP molecule, maintaining resting membrane potential.',
          '<strong>Reabsorption in kidney tubules</strong> \u2014 glucose and amino acids are actively transported back into the blood from the tubule filtrate.',
          '<strong>Phloem loading</strong> \u2014 sucrose produced by photosynthesis in leaf mesophyll cells is actively transported into phloem sieve tubes against a concentration gradient, for distribution throughout the plant. Companion cells (packed with mitochondria) supply the ATP required.',
        ],
      },
    },
    {
      id: 'h-endo',
      type: 'heading',
      data: { text: 'Endocytosis and Exocytosis', level: 2 },
    },
    {
      id: 'p-endo',
      type: 'paragraph',
      data: { text: 'Some substances are too large to be moved by carrier proteins. Instead, the cell membrane itself engulfs them (endocytosis) or releases them (exocytosis). Both processes require ATP.' },
    },
    {
      id: 'list-endo',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Endocytosis</strong> \u2014 the cell-surface membrane folds inward around a particle or droplet, pinching off to form a vesicle inside the cell. Two types: <em>phagocytosis</em> (large particles, e.g. bacteria engulfed by white blood cells) and <em>pinocytosis</em> (small droplets of fluid).',
          '<strong>Exocytosis</strong> \u2014 the Golgi apparatus packages secreted substances (hormones, enzymes, lipids) into secretory vesicles. These vesicles travel to and fuse with the cell-surface membrane, releasing their contents to the outside of the cell. Examples: secretion of insulin (from pancreatic \u03b2 cells), digestive enzymes (from pancreatic acinar cells), and mucus. Exocytosis is an active process requiring ATP.',
          'Both processes involve vesicle formation/fusion and require energy from ATP.',
        ],
      },
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Root Hair Cells',
        text: 'Soil water contains nitrate ions at a concentration of 0.1 mmol dm\u207b\u00b3. Inside the root hair cell, the nitrate concentration is 2.5 mmol dm\u207b\u00b3.\n\nCan nitrate enter by diffusion? No \u2014 the concentration inside (2.5) is much higher than outside (0.1). The ion would have to move against the concentration gradient.\n\nHow does nitrate enter? By active transport, using carrier proteins and ATP generated by mitochondria in the root hair cell.',
      },
    },
    {
      id: 'checklist-active',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe active transport and explain why it requires ATP', checked: false },
          { text: 'Compare active transport with facilitated diffusion (both use carrier proteins; only active needs ATP)', checked: false },
          { text: 'Explain why cells with high rates of active transport have many mitochondria', checked: false },
          { text: 'Give two examples of active transport in biology', checked: false },
          { text: 'Describe endocytosis and exocytosis and state what they are used for', checked: false },
        ],
      },
    },
    {
      id: 'summary-active',
      type: 'summary',
      data: { text: 'Active transport moves molecules/ions against their concentration gradient (low \u2192 high), using ATP energy and specific carrier proteins (pumps). Cells with high active transport rates have many mitochondria (ATP source). Examples: root hair cells absorbing mineral ions; intestinal cells absorbing glucose; Na\u207a/K\u207a pump in nerve cells. Endocytosis (phagocytosis/pinocytosis) engulfs large molecules by membrane folding; exocytosis secretes molecules via vesicle fusion with the membrane. Both require ATP.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-active', prompt: 'Define active transport. How does it differ from facilitated diffusion?' },
      { id: 'cue-2', blockId: 'list-active', prompt: 'Why do cells with high rates of active transport contain many mitochondria?' },
      { id: 'cue-3', blockId: 'list-examples', prompt: 'Give two biological examples of active transport and explain why diffusion is not sufficient in each case.' },
      { id: 'cue-4', blockId: 'h-endo', prompt: 'What is the difference between endocytosis and exocytosis? Give an example of each.' },
      { id: 'cue-5', blockId: 'callout-active-key', prompt: 'You add a respiratory inhibitor to a cell. Which transport processes are affected, and which are not? Explain.' },
    ],
    summaryText: 'Active transport: against concentration gradient; requires ATP; uses carrier protein pumps. Both active and facilitated use carrier proteins \u2014 only active needs ATP. Many mitochondria = lots of active transport. Examples: root hair cells (mineral ions), intestinal cells (glucose), Na\u207a/K\u207a pump. Endocytosis (phagocytosis \u2014 large particles; pinocytosis \u2014 droplets) and exocytosis (secretion via vesicles) both use ATP.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Active transport in intestinal and root cells', detail: 'AQA textbook describes active transport mechanisms in root hair cells and intestinal epithelial cells, emphasising the need for many mitochondria.', year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 3, p58', tags: ['active-transport', 'membrane-transport'] },
  ],
};
