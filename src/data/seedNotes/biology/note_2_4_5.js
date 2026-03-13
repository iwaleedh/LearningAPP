export const note_biology_2_4_5 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-minerals',
      data: {
        text: 'Understand how mineral ions are absorbed and transported, explain the effects of mineral deficiencies, and describe how plants regulate mineral uptake.',
      },
    },
    {
      type: 'heading',
      id: 'h-mineral-uptake',
      data: { text: 'Mineral Ion Uptake in Plants', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-uptake-mechanism',
      data: {
        text: 'Mineral ions (nitrate NO₃⁻, phosphate PO₄³⁻, potassium K⁺, magnesium Mg²⁺, calcium Ca²⁺, and others) are essential for plant growth and function. They are absorbed from soil solution through root hair cells (elongated epidermal cells on roots with large surface area for absorption). Uptake occurs via active transport: ion channels and transporters in the root hair cell membrane use ATP (from mitochondrial respiration) to pump ions against their concentration gradient from the soil (low concentration) into the cell (higher concentration). Root hair cells are metabolically very active, containing many mitochondria to provide ATP. The selectively permeable cell membranes mean only ions needed by the plant are efficiently transported; unwanted ions are excluded.',
      },
    },
    {
      type: 'heading',
      id: 'h-mineral-functions',
      data: { text: 'Roles of Water and Key Mineral Ions', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-water',
      data: {
        text: 'Water is an important component required for photosynthesis. It provides a transport medium for minerals, maintains turgidity in plant cells through pressure in cell vacuoles, and regulates temperature to ensure that enzymes can function at their optimum rate.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-nitrogen',
      data: {
        text: 'Nitrate (NO₃⁻) is the primary nitrogen source for plants. Without nitrate ions, the plant would be unable to synthesise DNA, proteins and chlorophyll. Enzymes are important proteins for which nitrate ions are needed. These molecules are essential for plant growth, as well as the production of fruit and seeds. Nitrate-deficient plants show stunted growth and yellowing leaves.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-magnesium',
      data: {
        text: 'Magnesium (Mg²⁺) is an important requirement for the production of chlorophyll, acting as the central atom in chlorophyll molecules. This provides the green colour of stems and leaves and is essential for photosynthesis. Magnesium also acts as a cofactor for many enzymes. Magnesium deficiency causes chlorosis (yellowing) primarily in older leaves in a characteristic pattern: veins remain green while interveinal tissue turns yellow.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-calcium',
      data: {
        text: 'Calcium ions (Ca²⁺) form important cell wall components (e.g. calcium pectate in the middle lamella, which holds plant cells together). Plants require calcium ions for proper growth. A deficiency in calcium leads to stunted growth, necrotic leaf margins, and poor root development.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-phosphate',
      data: {
        text: 'Phosphate (PO₄³⁻) is crucial for: (1) ATP and energy metabolism—phosphate is in ATP, energy currency; without it, cellular respiration cannot proceed. (2) DNA and RNA synthesis—phosphate is the backbone of nucleic acids; deficiency impairs growth and development. (3) Lipid synthesis—phosphate is in phospholipids of cell membranes. Phosphate deficiency is often visible as purple or reddish discolouration of leaves and stems, caused by anthocyanin accumulation (an antioxidant pigment that increases under stress); growth is stunted, with small, dark leaves.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-potassium',
      data: {
        text: 'Potassium (K⁺) is essential for: (1) Enzyme cofactor—many enzymes require K⁺; it stabilises enzyme structure and activity. (2) Osmoregulation—K⁺ is the major cation in plant cells, regulating osmotic potential and turgor pressure. (3) Guard cell function—K⁺ uptake/loss in guard cells controls stomatal aperture; K⁺ deficiency reduces photosynthetic gas exchange. (4) Protein synthesis—K⁺ supports ribosomal function. Potassium deficiency causes necrosis (death) of leaf margins and tips (marginal scorch) and weak stems (poor structural support due to reduced fibre development). Fruits produced are small and poor quality.',
      },
    },
    {
      type: 'heading',
      id: 'h-transport',
      data: { text: 'Transport of Mineral Ions Through Plants', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-xylem-transport',
      data: {
        text: 'Once absorbed into root hair cells, mineral ions are transported through the root via the symplast (cytoplasmic continuity via plasmodesmata) to the xylem in vascular bundles. From the xylem, ions are transported upward in the transpiration stream alongside water, reaching all parts of the plant (leaves, stems, fruits). This transport is passive, driven by the water potential gradient (water moves up due to transpiration; ions move with it). Ions are accumulated in leaves and other tissues, and some are translocated back toward roots via the phloem if re-mobilised during senescence (leaf aging) or if there is mineral deficiency in roots.',
      },
    },
    {
      type: 'heading',
      id: 'h-active-transport',
      data: { text: 'Active Transport and Selective Uptake', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-active-mechanism',
      data: {
        text: 'Root cells use active transport to selectively absorb mineral ions. A proton pump (H⁺-ATPase) expends ATP to pump H⁺ ions out of the cell, creating an electrochemical gradient. Symporters (cotransporters) then use this gradient to drive uptake of mineral ions against their concentration gradient. For example, a nitrate-proton symporter uses the inward proton gradient to drive nitrate uptake. This mechanism allows roots to accumulate high concentrations of essential minerals (up to 100× the soil concentration) despite low soil availability. The selectivity is determined by which transporters are present; a plant lacking a phosphate transporter will not absorb phosphate efficiently, even if available.',
      },
    },
    {
      type: 'heading',
      id: 'h-deficiency-summary',
      data: { text: 'Mineral Deficiency Symptoms Summary', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-deficiencies',
      data: {
        headers: ['Mineral', 'Function', 'Deficiency Symptoms'],
        rows: [
          ['Nitrate (NO₃⁻)', 'Protein and nucleic acid synthesis, chlorophyll', 'Stunted growth, general yellowing (older leaves first if mobile)'],
          ['Magnesium (Mg²⁺)', 'Chlorophyll central atom, enzyme cofactor', 'Interveinal chlorosis (yellow between veins, green veins) in older leaves'],
          ['Phosphate (PO₄³⁻)', 'ATP, nucleic acids, phospholipids', 'Purple/reddish discolouration, stunted growth, small dark leaves'],
          ['Potassium (K⁺)', 'Enzyme cofactor, osmoregulation, stomatal control', 'Marginal scorch (necrosis of leaf margins), weak stems, poor fruit quality'],
          ['Calcium (Ca²⁺)', 'Cell wall pectin, enzyme cofactor', 'Distorted new growth (cell wall weakness), tip burn in leaves'],
        ],
        caption: 'Mineral ion functions and deficiency symptoms.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-uptake',
      data: {
        style: 'key',
        title: 'Active Transport in Root Hairs',
        text: 'Root hair cells are metabolically hyperactive: they contain numerous mitochondria, maintain a very high respiration rate, and consume ~20% of plant ATP just for ion uptake. This high metabolic cost reflects the critical importance of mineral acquisition to plant survival. Blocking respiration (e.g. with cyanide, which inhibits ATP synthesis) immediately halts ion uptake, demonstrating the ATP-dependence of the process.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-deficiency',
      data: {
        style: 'tip',
        title: 'Identifying Mineral Deficiencies',
        text: 'Key diagnostic features: (1) Magnesium—interveinal yellowing (yellow between veins, veins stay green). (2) Nitrogen—general yellowing starting in older leaves. (3) Phosphate—purple/reddish discolouration. (4) Potassium—marginal scorch (brown edges). (5) Iron—interveinal yellowing in young leaves (young leaves affected because Fe is immobile). These patterns help distinguish deficiencies in agricultural and horticultural contexts.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why do plants actively transport nitrate ions from soil into root hair cells against a concentration gradient? Soil nitrate concentrations are typically very low (0.1–1 mM) while root cells can accumulate much higher concentrations; passive diffusion would be too slow to meet nitrogen demand for protein and nucleic acid synthesis, so energy-dependent H⁺/NO₃⁻ co-transporters are used.",
        apply: "A hydroponics experiment grows wheat in solutions: (a) all minerals, (b) no nitrate, (c) no magnesium, (d) no phosphate. Predict the specific visual symptoms and biochemical deficiencies for each condition. Explain why nitrogen deficiency affects older leaves first (nitrogen is mobile in phloem).",
        analyze: "Compare the roles of nitrogen (N), phosphorus (P), potassium (K), and magnesium (Mg) in plant biology. For each: state the molecular compound it forms, its primary biochemical role, and the visual deficiency symptom.",
        evaluate: "Evaluate the environmental impact of artificial nitrogen fertilisers (Haber process) compared to biological nitrogen fixation (Rhizobium in legume root nodules). Consider energy use, greenhouse gas emissions (N₂O), eutrophication risk, cost, and crop yield.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-minerals',
      data: {
        items: [
          { text: 'Know nitrate is absorbed via active transport in root hair cells', checked: false },
          { text: 'Understand roles: nitrate (proteins, chlorophyll), magnesium (chlorophyll, enzyme cofactor), phosphate (ATP, nucleic acids), potassium (enzyme, osmoregulation, stomata)', checked: false },
          { text: 'Can describe deficiency symptoms for each major mineral', checked: false },
          { text: 'Know magnesium deficiency causes interveinal chlorosis (characteristic yellow between green veins)', checked: false },
          { text: 'Understand active transport mechanism: H⁺ pump creates gradient, symporter uses it for ion uptake', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-minerals',
      data: {
        text: 'Mineral absorption: root hair cells actively transport ions (NO₃⁻, PO₄³⁻, K⁺, Mg²⁺) via H⁺-ATPase pump creating proton gradient, and symporters coupling ion uptake to this gradient. Nitrate: protein/nucleic acid/chlorophyll synthesis; deficiency = stunted growth, yellowing. Magnesium: chlorophyll central atom, enzyme cofactor; deficiency = interveinal chlorosis (yellow between veins). Phosphate: ATP, nucleic acids, lipids; deficiency = purple/red discolouration, stunted growth. Potassium: enzyme cofactor, osmoregulation, stomatal control; deficiency = marginal scorch, weak stems. Transport: symplast to xylem, upward via transpiration stream (passive). Active transport is ATP-expensive (~20% plant ATP in root hairs). Selective uptake determined by transporter proteins present.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-uptake-mechanism',
        prompt: 'Explain how mineral ions are actively transported into root hair cells.',
      },
      {
        id: 'cue-2',
        blockId: 'p-nitrogen',
        prompt: 'What are the roles of nitrogen in plants, and what does nitrogen deficiency look like?',
      },
      {
        id: 'cue-3',
        blockId: 'p-magnesium',
        prompt: 'Describe the characteristic symptom of magnesium deficiency and explain why it occurs.',
      },
      {
        id: 'cue-4',
        blockId: 'p-active-mechanism',
        prompt: 'Explain the proton pump mechanism for active mineral ion uptake.',
      },
    ],
    summaryText: 'Mineral ion uptake: root hair cells (large surface area) actively transport ions via H⁺-ATPase pump (expends ATP, pumps H⁺ out), creating electrochemical gradient. Symporters (mineral-proton cotransporters) use this gradient to drive ion uptake against concentration gradient; selective (only transporters present absorbed). Nitrate (NO₃⁻): amino acid/protein synthesis, nucleic acids, chlorophyll; deficiency = stunted growth, general yellowing. Magnesium (Mg²⁺): chlorophyll central atom, enzyme cofactor; deficiency = interveinal chlorosis (yellow between green veins, characteristic of Mg deficiency, older leaves first). Phosphate (PO₄³⁻): ATP, nucleic acids, phospholipids; deficiency = purple/reddish discolouration, small dark leaves. Potassium (K⁺): enzyme cofactor, osmoregulation, guard cell function; deficiency = marginal scorch (brown leaf edges), weak stems. Transport: symplast to xylem → upward in transpiration stream (passive). Root hair cells = ~20% of plant ATP for mineral uptake (metabolically expensive).',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Mineral Ion Deficiencies in Agriculture',
      detail: 'Mineral deficiency symptoms are used diagnostically in agriculture to identify nutrient problems and guide fertiliser application, improving crop yield and quality.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['mineral nutrition', 'plant physiology', 'agriculture'],
    },
  ],
};
