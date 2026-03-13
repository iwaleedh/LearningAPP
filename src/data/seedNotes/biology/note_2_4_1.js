export const note_biology_2_4_1 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-polysaccharides',
      data: {
        text: 'Explain how cellulose and starch structure relates to function, and compare their roles in plants and other organisms.',
      },
    },
    {
      type: 'heading',
      id: 'h-cellulose',
      data: { text: 'Cellulose: Structural Support', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cellulose-structure',
      data: {
        text: 'Cellulose is a polysaccharide composed of glucose (specifically β-glucose) units linked by β-1,4-glycosidic bonds. Unlike starch (α-glucose), cellulose\'s β-linkages produce a linear, unbranched polymer. Cellulose chains form straight molecules that can pack closely together, forming hydrogen bonds between adjacent chains and between adjacent glucose units within a chain. This extensive hydrogen bonding creates highly ordered, insoluble crystalline structures called microfibrils. Each microfibril is composed of ~36 cellulose chains arranged in parallel, creating a rope-like structure with enormous tensile strength (resistant to pulling forces).',
      },
    },
    {
      type: 'paragraph',
      id: 'p-cellulose-function',
      data: {
        text: 'Cellulose functions as the primary structural component of plant cell walls. The high tensile strength of cellulose allows it to be stretched without breaking, which makes it possible for cell walls to withstand turgor pressure as well as the mechanical stresses of plant growth and environmental forces (wind, rain). Cellulose microfibrils and other molecules (e.g. lignin) form a network (matrix), often oriented in different directions in different wall layers, providing reinforcement in all directions. The cell wall\'s rigidity depends on cellulose; plants deficient in cellulose synthesis are dwarfed and weak. Cellulose is also the most abundant organic compound on Earth: estimates suggest ~50% of plant dry mass is cellulose, and forests represent a vast carbon reservoir in cellulose.',
      },
    },
    {
      type: 'heading',
      id: 'h-starch',
      data: { text: 'Starch: Energy Storage', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-starch-structure',
      data: {
        text: 'Starch is a polysaccharide composed of α-glucose units. It exists in two forms: (1) Amylose—unbranched chains of α-glucose linked by α-1,4-glycosidic bonds, forming a helical coil. (2) Amylopectin—branched chains with α-1,4 bonds in the linear chain and α-1,6 bonds at branch points (~every 20–25 glucose units), creating a bush-like, branched structure. Most plant starch is ~80% amylopectin and ~20% amylose. The branched structure of amylopectin means more glucose units are accessible to starch-degrading enzymes (amylases), allowing rapid glucose release when energy is needed.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-starch-function',
      data: {
        text: 'Starch functions as the primary energy storage molecule in plants. It is synthesised during photosynthesis when glucose is abundant, and degraded during respiration when glucose is needed for ATP production and biosynthesis. Starch is insoluble and compact: a gram of starch stores less glucose than a gram of glucose would if stored in solution, but takes up much less space and doesn\'t affect cell osmotic potential. This makes starch ideal for long-term energy storage in storage tissues (potato tubers, grain seeds). Starch is digestible by animals; humans obtain significant energy from plant starch (rice, wheat, potatoes).',
      },
    },
    {
      type: 'heading',
      id: 'h-glycogen',
      data: { text: 'Glycogen: Animal Energy Storage', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-glycogen-struct',
      data: {
        text: 'Glycogen is the storage polysaccharide in animals, structurally similar to amylopectin but more highly branched: α-1,4 bonds form linear chains with α-1,6 branch points approximately every 8–12 glucose units (compared to 20–25 in amylopectin). This increased branching means glycogen has more non-reducing ends (the ends of chains where enzymes attach), allowing very rapid glucose mobilisation. Glycogen is stored primarily in the liver (~100–120 grams in humans) and muscles (~400–500 grams), providing energy reserves for short-term needs (hours to a day). When blood glucose drops, liver glycogen is broken down and glucose is released into the bloodstream; muscle glycogen is used locally in muscle cells.',
      },
    },
    {
      type: 'heading',
      id: 'h-comparison',
      data: { text: 'Comparison of Cellulose, Starch, and Glycogen', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-polysaccharides',
      data: {
        headers: ['Feature', 'Cellulose', 'Starch (Amylose + Amylopectin)', 'Glycogen'],
        rows: [
          ['Monosaccharide unit', 'β-glucose', 'α-glucose', 'α-glucose'],
          ['Main linkage', 'β-1,4-glycosidic', 'α-1,4-glycosidic (and α-1,6 in amylopectin)', 'α-1,4-glycosidic (and α-1,6 branching)'],
          ['Branching', 'Unbranched (linear)', 'Limited (amylopectin branched ~every 20–25 units)', 'Highly branched (~every 8–12 units)'],
          ['Structure', 'Straight chains, hydrogen bonding, crystalline microfibrils', 'Compact, helical (amylose) or branched (amylopectin)', 'Compact, highly branched, many chain ends'],
          ['Solubility', 'Insoluble in water', 'Insoluble in water', 'Insoluble in water (exists as granules)'],
          ['Main function', 'Structural support (cell walls)', 'Energy storage (plants)', 'Energy storage (animals)'],
          ['Glucose release rate', 'Very slow (enzymatic degradation not rapid)', 'Moderate (branching allows faster access)', 'Very fast (many chain ends for rapid enzymatic attack)'],
          ['Location', 'Plant cell walls', 'Plant storage tissues (seeds, tubers)', 'Animal liver and muscles'],
        ],
        caption: 'Structural and functional comparison of cellulose, starch, and glycogen.',
      },
    },
    {
      type: 'heading',
      id: 'h-structure-function',
      data: { text: 'Structure-Function Relationships', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-sf',
      data: {
        text: 'The different structures of these polysaccharides directly reflect their functions: Cellulose\'s unbranched, linear structure and extensive hydrogen bonding create crystalline microfibrils with exceptional tensile strength—perfect for structural support. Starch\'s modest branching (amylopectin) balances compact storage with moderate glucose availability—suited for daily energy needs. Glycogen\'s high branching provides many sites for rapid enzymatic degradation—suited for quick energy mobilisation in animals. This exemplifies the principle that biological structure determines function.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-bonding',
      data: {
        style: 'key',
        title: 'α- versus β-Linkages Matter',
        text: 'Cellulose (β-glucose, β-1,4 bonds) is rigid and structural. Starch and glycogen (α-glucose, α-1,4 bonds) are flexible and digestible. Humans cannot digest cellulose (we lack cellulase enzymes), so it passes through our gut as fibre. Herbivores have symbiotic gut bacteria that produce cellulase. This fundamental difference—the orientation of one chemical bond—divides the biological world into those that can and cannot digest structural polysaccharides.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-branching',
      data: {
        style: 'tip',
        title: 'Branching = Faster Glucose Release',
        text: 'More branching means more chain ends for enzymes to attack, enabling faster glucose mobilisation. Glycogen (most branched) enables rapid ATP production in animal muscles during exercise. Starch (moderately branched) provides slower, sustained glucose supply in plants. Cellulose (unbranched) is not meant to be broken down quickly—it\'s structural, not metabolic.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why is cellulose stronger than starch despite both being made of glucose? In cellulose, beta-1,4-glycosidic bonds force alternating glucose units to flip 180°, producing straight chains that hydrogen-bond to adjacent chains forming crystalline microfibrils — giving high tensile strength. Starch's alpha-1,4 bonds produce a helix with no inter-chain bonding, ideal for compact storage but not structural support.",
        apply: "A cellulose microfibril contains 36 parallel cellulose chains, each with 8,000 glucose units. Calculate: (a) the total number of glycosidic bonds in the microfibril, (b) the total number of water molecules released during its biosynthesis from glucose monomers.",
        analyze: "Compare the molecular structure of cellulose, amylose, amylopectin, and glycogen. For each, state: monomer, bond type(s), branching pattern, and primary function. Explain how structure relates to function in each case.",
        evaluate: "Evaluate the use of cellulose-based materials (cotton, paper, biofuels) versus synthetic polymers (polyester, polypropylene) from environmental and functional perspectives. Consider biodegradability, carbon footprint, tensile strength, and resource use.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-polysaccharides',
      data: {
        items: [
          { text: 'Explain cellulose structure (β-glucose, β-1,4 bonds, unbranched, hydrogen bonding) and its structural function', checked: false },
          { text: 'Describe starch structure (amylose unbranched, amylopectin branched) and its energy storage role in plants', checked: false },
          { text: 'Know glycogen is more highly branched than starch, enabling rapid glucose mobilisation in animals', checked: false },
          { text: 'Understand why humans cannot digest cellulose but can digest starch', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-polysaccharides',
      data: {
        text: 'Cellulose: β-glucose, β-1,4 bonds, unbranched, extensive hydrogen bonding → crystalline microfibrils with tensile strength → plant cell wall structural support. Starch: α-glucose, α-1,4 bonds; amylose (unbranched), amylopectin (branched ~every 20–25 units) → compact, insoluble energy storage in plant seeds/tubers. Glycogen: α-glucose, α-1,4 and α-1,6 bonds, highly branched (~every 8–12 units) → very rapid glucose mobilisation in animal liver/muscles. Structure-function: β-linkages create rigid cellulose; α-linkages create flexible, digestible starch/glycogen. Branching determines glucose release rate: unbranched cellulose (not metabolised), amylopectin (moderate), glycogen (very fast). Humans lack cellulase (cannot digest cellulose); herbivores have symbiotic cellulase-producing bacteria.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-cellulose-structure',
        prompt: 'Describe cellulose structure and explain how its β-linkages affect its properties.',
      },
      {
        id: 'cue-2',
        blockId: 'p-starch-structure',
        prompt: 'Compare amylose and amylopectin in structure and function.',
      },
      {
        id: 'cue-3',
        blockId: 'p-glycogen-struct',
        prompt: 'How does glycogen\'s branching structure relate to its role in rapid energy mobilisation?',
      },
      {
        id: 'cue-4',
        blockId: 'callout-key-bonding',
        prompt: 'Why can humans digest starch but not cellulose?',
      },
    ],
    summaryText: 'Cellulose: β-glucose, β-1,4 bonds, unbranched, extensive H-bonding → crystalline microfibrils → structural support (plant cell walls). Cannot be digested by humans (no cellulase). Starch: α-glucose; amylose (unbranched), amylopectin (branched ~every 20–25 units, more accessible to enzymes) → compact energy storage (plant seeds). Digestible by humans. Glycogen: α-glucose, α-1,4 and α-1,6 bonds, highly branched (~every 8–12 units, many chain ends) → rapid glucose mobilisation (animal liver, muscles). Structure-function: β-linkages = rigid, non-metabolic; α-linkages = flexible, metabolic. Branching = faster glucose release. Humans: cellulase absent (cellulose passes as fibre); herbivores have symbiotic bacteria producing cellulase.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Polysaccharide Structure and Function',
      detail: 'The chemical structure of glucose linkages (α vs. β) determines whether a polysaccharide is metabolically active (digestible) or structural (indigestible), illustrating how molecular structure underlies biological function.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['polysaccharides', 'structure-function', 'metabolism'],
    },
  ],
};
