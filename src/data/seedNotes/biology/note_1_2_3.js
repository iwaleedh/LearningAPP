export const note_biology_1_2_3 = {
  blocks: [
    {
      id: 'obj-fmm',
      type: 'objective',
      data: { text: 'Describe the fluid mosaic model of membrane structure, including the roles of phospholipids, intrinsic and extrinsic proteins, glycoproteins, glycolipids, and cholesterol.' },
    },
    {
      id: 'h-phospholipid',
      type: 'heading',
      data: { text: 'Phospholipid Structure', level: 2 },
    },
    {
      id: 'p-phospholipid',
      type: 'paragraph',
      data: { text: 'A phospholipid has three parts: a glycerol backbone, a phosphate group (forming the hydrophilic head), and two fatty acid tails. The phosphate head is polar and hydrophilic (water-loving) — it interacts readily with water. The fatty acid tails are non-polar and hydrophobic (water-hating) — they are repelled by water. On a water surface, phospholipids form a monolayer: heads pointing into the water, tails projecting outward into air. In the cell membrane they form a bilayer: two layers arranged tail-to-tail, so all hydrophilic heads face the aqueous environments on either side (cytoplasm + extracellular fluid) and all hydrophobic tails are hidden in the non-aqueous interior. This self-assembly into a bilayer is the structural basis of all cell membranes.' },
    },
    {
      id: 'svg-phospholipid',
      type: 'svg',
      data: {
        caption: 'A single phospholipid molecule: hydrophilic phosphate head and glycerol backbone (top), and two hydrophobic fatty acid tails (below).',
        svg: '<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11"><rect width="300" height="230" fill="#f8f9ff" rx="8"/><text x="150" y="16" fill="#1f2937" font-size="12" font-weight="bold" text-anchor="middle">Phospholipid Molecule</text><circle cx="150" cy="55" r="25" fill="#6366f1"/><text x="150" y="51" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Phosphate</text><text x="150" y="63" fill="white" font-size="9" text-anchor="middle">head</text><rect x="128" y="80" width="44" height="12" rx="3" fill="#8b5cf6"/><text x="150" y="90" fill="white" font-size="9" text-anchor="middle">Glycerol</text><line x1="138" y1="92" x2="112" y2="185" stroke="#d97706" stroke-width="7" stroke-linecap="round"/><line x1="162" y1="92" x2="188" y2="185" stroke="#d97706" stroke-width="7" stroke-linecap="round"/><text x="150" y="210" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">Fatty acid tails (x2)</text><text x="184" y="57" fill="#6366f1" font-size="9" text-anchor="start">Hydrophilic</text><text x="184" y="69" fill="#6366f1" font-size="9" text-anchor="start">(water-loving)</text><text x="184" y="140" fill="#d97706" font-size="9" text-anchor="start">Hydrophobic</text><text x="184" y="152" fill="#d97706" font-size="9" text-anchor="start">(water-hating)</text></svg>',
      },
    },
    {
      id: 'h-model',
      type: 'heading',
      data: { text: 'The Fluid Mosaic Model', level: 2 },
    },
    {
      id: 'p-model',
      type: 'paragraph',
      data: { text: 'The fluid mosaic model (Singer and Nicolson, 1972) describes the structure of all cell membranes. All membranes \u2014 the cell-surface membrane, nuclear envelope, and organelle membranes \u2014 share this basic structure.' },
    },
    {
      id: 'callout-names',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why "Fluid Mosaic"?',
        text: '"Fluid" \u2014 phospholipid molecules and some proteins are free to move laterally within the bilayer; the membrane is not rigid.\n"Mosaic" \u2014 different protein molecules are distributed throughout the phospholipid bilayer, like tiles in a mosaic pattern.',
      },
    },
    {
      id: 'svg-membrane',
      type: 'svg',
      data: {
        caption: 'The fluid mosaic model: phospholipid bilayer with embedded intrinsic proteins, extrinsic proteins, glycoproteins, and cholesterol.',
        svg: '<svg viewBox="0 0 660 290" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12"><rect width="660" height="290" fill="#f8f9ff" rx="8"/><text x="330" y="22" fill="#888" font-size="11" text-anchor="middle">Outside cell</text><text x="330" y="280" fill="#888" font-size="11" text-anchor="middle">Inside cell</text><rect x="0" y="90" width="660" height="110" fill="#dbeafe" opacity="0.25"/><g fill="#6c8ebf"><circle cx="30" cy="90" r="12"/><circle cx="75" cy="90" r="12"/><circle cx="120" cy="90" r="12"/><circle cx="220" cy="90" r="12"/><circle cx="265" cy="90" r="12"/><circle cx="310" cy="90" r="12"/><circle cx="390" cy="90" r="12"/><circle cx="435" cy="90" r="12"/><circle cx="510" cy="90" r="12"/><circle cx="555" cy="90" r="12"/><circle cx="600" cy="90" r="12"/><circle cx="640" cy="90" r="12"/><circle cx="30" cy="200" r="12"/><circle cx="75" cy="200" r="12"/><circle cx="120" cy="200" r="12"/><circle cx="220" cy="200" r="12"/><circle cx="265" cy="200" r="12"/><circle cx="310" cy="200" r="12"/><circle cx="390" cy="200" r="12"/><circle cx="435" cy="200" r="12"/><circle cx="510" cy="200" r="12"/><circle cx="555" cy="200" r="12"/><circle cx="600" cy="200" r="12"/><circle cx="640" cy="200" r="12"/></g><g stroke="#aac8f0" stroke-width="2" fill="none"><line x1="25" y1="102" x2="18" y2="135"/><line x1="35" y1="102" x2="42" y2="135"/><line x1="70" y1="102" x2="63" y2="135"/><line x1="80" y1="102" x2="87" y2="135"/><line x1="115" y1="102" x2="108" y2="135"/><line x1="125" y1="102" x2="132" y2="135"/><line x1="215" y1="102" x2="208" y2="135"/><line x1="225" y1="102" x2="232" y2="135"/><line x1="260" y1="102" x2="253" y2="135"/><line x1="270" y1="102" x2="277" y2="135"/><line x1="305" y1="102" x2="298" y2="135"/><line x1="315" y1="102" x2="322" y2="135"/><line x1="385" y1="102" x2="378" y2="135"/><line x1="395" y1="102" x2="402" y2="135"/><line x1="430" y1="102" x2="423" y2="135"/><line x1="440" y1="102" x2="447" y2="135"/><line x1="505" y1="102" x2="498" y2="135"/><line x1="515" y1="102" x2="522" y2="135"/><line x1="550" y1="102" x2="543" y2="135"/><line x1="560" y1="102" x2="567" y2="135"/><line x1="595" y1="102" x2="588" y2="135"/><line x1="605" y1="102" x2="612" y2="135"/><line x1="25" y1="188" x2="18" y2="155"/><line x1="35" y1="188" x2="42" y2="155"/><line x1="70" y1="188" x2="63" y2="155"/><line x1="80" y1="188" x2="87" y2="155"/><line x1="115" y1="188" x2="108" y2="155"/><line x1="125" y1="188" x2="132" y2="155"/><line x1="215" y1="188" x2="208" y2="155"/><line x1="225" y1="188" x2="232" y2="155"/><line x1="260" y1="188" x2="253" y2="155"/><line x1="270" y1="188" x2="277" y2="155"/><line x1="305" y1="188" x2="298" y2="155"/><line x1="315" y1="188" x2="322" y2="155"/><line x1="385" y1="188" x2="378" y2="155"/><line x1="395" y1="188" x2="402" y2="155"/><line x1="430" y1="188" x2="423" y2="155"/><line x1="440" y1="188" x2="447" y2="155"/><line x1="505" y1="188" x2="498" y2="155"/><line x1="515" y1="188" x2="522" y2="155"/><line x1="550" y1="188" x2="543" y2="155"/><line x1="560" y1="188" x2="567" y2="155"/><line x1="595" y1="188" x2="588" y2="155"/><line x1="605" y1="188" x2="612" y2="155"/></g><rect x="145" y="76" width="48" height="138" rx="10" fill="#e67e22" opacity="0.88"/><text x="169" y="225" fill="#c0392b" font-size="10" text-anchor="middle">Intrinsic</text><text x="169" y="237" fill="#c0392b" font-size="10" text-anchor="middle">(channel)</text><rect x="335" y="96" width="18" height="98" rx="4" fill="#27ae60" opacity="0.85"/><text x="344" y="207" fill="#1a7a45" font-size="10" text-anchor="middle">Chol.</text><rect x="455" y="70" width="44" height="120" rx="10" fill="#9b59b6" opacity="0.88"/><path d="M460,70 Q464,48 473,38 Q482,30 492,38 Q502,48 497,70" fill="none" stroke="#9b59b6" stroke-width="2.5"/><text x="477" y="207" fill="#7d3c98" font-size="10" text-anchor="middle">Glyco-</text><text x="477" y="219" fill="#7d3c98" font-size="10" text-anchor="middle">protein</text><ellipse cx="570" cy="200" rx="32" ry="14" fill="#e74c3c" opacity="0.88"/><text x="570" y="204" fill="white" font-size="10" text-anchor="middle">Extrinsic</text><text x="570" y="216" fill="#c0392b" font-size="10" text-anchor="middle">protein</text></svg>',
      },
    },
    {
      id: 'h-components',
      type: 'heading',
      data: { text: 'Components and Their Roles', level: 2 },
    },
    {
      id: 'list-components',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Phospholipid bilayer</strong> \u2014 two layers of phospholipids. Hydrophilic (water-loving) phosphate heads face outward (towards aqueous cytoplasm and extracellular fluid); hydrophobic (water-hating) fatty acid tails face inward. Forms the basic barrier of the membrane.',
          '<strong>Intrinsic (transmembrane) proteins</strong> \u2014 large proteins that span the full width of the bilayer. Function as channel proteins (water-filled pores for ions/water) or carrier proteins (bind and transport specific molecules by changing shape).',
          '<strong>Extrinsic (peripheral) proteins</strong> \u2014 proteins on the inner or outer surface only. Function as enzymes, structural support, or receptor molecules.',
          '<strong>Glycoproteins</strong> \u2014 protein with a short polysaccharide chain on the outer surface. Act as receptor molecules for hormones and neurotransmitters, and as cell-recognition markers (cell signalling and immune recognition of self/non-self).',
          '<strong>Glycolipids</strong> \u2014 lipid with a polysaccharide chain on the outer surface. Also involved in cell recognition and cell signalling.',
          '<strong>Cholesterol</strong> \u2014 hydrophobic molecules embedded between phospholipid tails. Stabilises fluidity: at high temperature prevents membrane becoming too fluid; at low temperature prevents tails packing too tightly and membrane solidifying.',
        ],
      },
    },
    {
      id: 'h-permeability',
      type: 'heading',
      data: { text: 'Selective Permeability', level: 2 },
    },
    {
      id: 'table-permeability',
      type: 'comparisonTable',
      data: {
        caption: 'Which molecules can cross the cell-surface membrane, and by which route.',
        headers: ['Substance', 'Can it cross freely?', 'Route', 'Example'],
        rows: [
          ['Small non-polar molecules', 'Yes', 'Directly through lipid bilayer', 'O\u2082, CO\u2082, ethanol'],
          ['Water', 'Yes (slowly / via aquaporins)', 'Lipid bilayer or aquaporin channel proteins', 'H\u2082O'],
          ['Ions (charged)', 'No (without protein)', 'Ion channel proteins', 'Na\u207a, K\u207a, Cl\u207b'],
          ['Large polar molecules', 'No (without protein)', 'Carrier proteins (facilitated diffusion)', 'Glucose, amino acids'],
        ],
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Selectively Permeable',
        text: 'Say "selectively permeable" not "semi-permeable". The membrane allows many different types of molecule through (not just water), so selectively permeable is the correct term. Marks can be lost for using semi-permeable in an exam context about cell membranes.',
      },
    },
    {
      id: 'h-models-history',
      type: 'heading',
      data: { text: 'Development of Membrane Models', level: 2 },
    },
    {
      id: 'p-models-intro',
      type: 'paragraph',
      data: { text: 'The fluid mosaic model was not the first description of membrane structure. Earlier models were developed using the evidence available at the time; each was revised when new experimental techniques — especially electron microscopy — produced evidence that did not fit the existing model. This is a classic example of how scientific understanding develops.' },
    },
    {
      id: 'table-models',
      type: 'comparisonTable',
      data: {
        caption: 'Evolution of membrane models driven by new experimental evidence.',
        headers: ['Scientists (era)', 'Model proposed', 'Supporting evidence', 'Why it was revised / Problem'],
        rows: [
          ['Gorter & Grendel (1920s)', 'Phospholipid bilayer — lipids form two layers', 'Extracted lipids from red blood cell membranes; the lipid layer covered twice the surface area of the RBCs, showing lipids must be two molecules thick', 'Could not explain how lipid-insoluble substances crossed the membrane; did not account for the role of proteins'],
          ['Davson & Danielli (1930s)', '"Protein–lipid–protein sandwich" — bilayer coated on both outer surfaces by protein layers', 'Electron micrographs showed two dark outer lines with a lighter central band — consistent with protein layers on either side of a lipid core', 'Freeze-etch electron microscopy revealed globular proteins distributed throughout the interior of the bilayer, not just on the surface; biochemical analysis showed membrane proteins have hydrophobic regions that must be buried inside the bilayer'],
          ['Singer & Nicolson (1970s)', 'Fluid mosaic model — proteins are embedded at various depths in a fluid phospholipid bilayer', 'Freeze-etch EM showed proteins extending into the centre of the bilayer; biochemical evidence showed proteins can diffuse laterally within the membrane', 'Still the accepted model today'],
        ],
      },
    },
    {
      id: 'callout-tip-models',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Why Models Change',
        text: 'You do not need to memorise specific dates or scientists\' names. The key principle is: scientific models are revised when new evidence cannot be explained by the existing model. The Davson–Danielli model was replaced because freeze-etch electron microscopy showed globular proteins embedded throughout the bilayer interior — not just coating the surface as the sandwich model predicted. New technology → new evidence → model revised.',
      },
    },
    {
      id: 'checklist-fmm',
      type: 'checklist',
      data: {
        items: [
          { text: 'Name the three components of a phospholipid and state which is hydrophilic and which is hydrophobic', checked: false },
          { text: 'Describe the arrangement of phospholipids in the bilayer and explain why the tails face inward', checked: false },
          { text: 'Distinguish between intrinsic and extrinsic proteins and give a function for each', checked: false },
          { text: 'Explain the roles of glycoproteins and glycolipids in cell recognition', checked: false },
          { text: 'Describe how cholesterol stabilises membrane fluidity at both high and low temperatures', checked: false },
          { text: 'State which molecules can pass directly through the bilayer and which require proteins', checked: false },
          { text: 'Explain what "fluid" and "mosaic" mean in the fluid mosaic model', checked: false },
          { text: 'Explain why the Davson–Danielli model was revised and what evidence led to the fluid mosaic model', checked: false },
        ],
      },
    },
    {
      id: 'summary-fmm',
      type: 'summary',
      data: { text: 'The fluid mosaic model describes the cell membrane as a phospholipid bilayer (hydrophilic heads outward, hydrophobic tails inward) that is fluid (lipids and proteins can move laterally) and mosaic (proteins are distributed throughout). Intrinsic proteins span the bilayer as channels and carriers; extrinsic proteins sit on the surface. Glycoproteins and glycolipids on the outer surface function in cell recognition and signalling. Cholesterol stabilises fluidity. Small non-polar molecules (O\u2082, CO\u2082) pass directly through; ions and large polar molecules require protein channels or carriers (selectively permeable).' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-phospholipid', prompt: 'Name the three parts of a phospholipid molecule. Which part is hydrophilic and which is hydrophobic?' },
      { id: 'cue-2', blockId: 'callout-names', prompt: 'What does "fluid" mean in the fluid mosaic model? What does "mosaic" mean?' },
      { id: 'cue-3', blockId: 'list-components', prompt: 'Name the six main components of the cell-surface membrane and a function for each.' },
      { id: 'cue-4', blockId: 'table-permeability', prompt: 'Which small molecules can pass directly through the phospholipid bilayer? What route do ions take?' },
      { id: 'cue-5', blockId: 'list-components', prompt: 'Describe two roles of cholesterol in the cell-surface membrane.' },
      { id: 'cue-6', blockId: 'table-models', prompt: 'Explain why the Davson–Danielli sandwich model was replaced by the fluid mosaic model. What experimental evidence triggered the change?' },
    ],
    summaryText: 'Phospholipid structure: glycerol + phosphate head (hydrophilic, polar) + 2 fatty acid tails (hydrophobic, non-polar). Bilayer = tails hidden inside, heads face aqueous environments on both sides. Fluid mosaic model (Singer & Nicolson, 1972): fluid = phospholipids + proteins move laterally; mosaic = proteins scattered throughout. Intrinsic proteins span bilayer (channels + carriers); extrinsic on surface only (enzymes, receptors). Glycoproteins/glycolipids on outer surface = cell recognition. Cholesterol = stabilises fluidity. Model history: Gorter & Grendel (1920s) \u2192 bilayer; Davson & Danielli (1930s) \u2192 sandwich (proteins on surface); Singer & Nicolson (1970s) \u2192 fluid mosaic (proteins embedded throughout \u2014 freeze-etch EM evidence). Small non-polar (O\u2082, CO\u2082) cross freely; ions/large polar need protein channels/carriers.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Singer-Nicolson fluid mosaic model 1972', detail: 'Proposed based on electron microscopy and freeze-fracture evidence showing proteins embedded at various depths in the lipid bilayer.', year: '1972', source: 'AQA A Level Biology Student Book 1, Chapter 3, pp52-53', tags: ['membrane', 'fluid-mosaic', 'cell-biology'] },
  ],
};
