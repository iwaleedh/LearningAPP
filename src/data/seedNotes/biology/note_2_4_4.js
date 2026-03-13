export const note_biology_2_4_4 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-plant-fibres',
      data: {
        text: 'Understand plant fibre types, their structural properties, and their role in sustainable alternatives to synthetic fibres.',
      },
    },
    {
      type: 'heading',
      id: 'h-plant-fibres-intro',
      data: { text: 'Plant Fibres as Sustainable Materials', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro',
      data: {
        text: 'Plant fibres are elongated, lignified cells or cell aggregates that provide structural support in plants. Many plant fibres are harvested and used by humans for textiles, rope, paper, and composites. Plant fibres are renewable (regrown annually in many cases), biodegradable, and have low environmental impact compared to synthetic fibres (polyester, nylon), which are petroleum-derived and persist in the environment. Common plant fibres include bast fibres (flax, hemp, jute) from the phloem region, seed fibres (cotton), and leaf fibres (sisal, agave).',
      },
    },
    {
      type: 'heading',
      id: 'h-bast-fibres',
      data: { text: 'Bast Fibres: Flax, Hemp, Jute', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-bast-structure',
      data: {
        text: 'Bast fibres are elongated sclerenchyma cells derived from the phloem tissue of the stem. Flax (Linum usitatissimum) is the classic example: the stem contains phloem cells, and associated sclerenchyma fibres (bast fibres) form a tight bundle. Each individual flax fibre cell is ~2 cm long and ~20 μm in diameter, with a thick, lignified secondary wall and minimal lumen. Fibres are bound together by pectin in the middle lamella; retting (soaking) and mechanical processing separate individual fibres. Hemp (Cannabis sativa) and jute (Corchorus olitorius) are similar; their bast fibres are slightly coarser and often less uniform than flax.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-bast-properties',
      data: {
        text: 'Bast fibres have excellent mechanical properties: tensile strength (resistance to pulling) of flax is ~500–900 MPa (megapascals), comparable to glass fibres (~1500 MPa) and stronger than most synthetic polymers. Young\'s modulus (a measure of stiffness) is ~50–70 GPa, making flax stiffer than many plastics. These properties arise from the high cellulose content (~70% in flax), the linear, hydrogen-bonded cellulose chains, and the protective lignin sheath. Flax fibres are used in linen textiles (soft, breathable, cooling), canvas, rope, and composite materials (flax-reinforced plastics for automotive and aerospace applications).',
      },
    },
    {
      type: 'heading',
      id: 'h-cotton-sisal',
      data: { text: 'Seed and Leaf Fibres', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-cotton',
      data: {
        text: 'Cotton fibres are derived from the seed coat hairs of the cotton plant (Gossypium species). Each cotton fibre is actually a single, enormously elongated cell, ~20–30 mm long and ~20 μm in diameter, with thin, cellulose-rich walls (nearly pure cellulose, ~90%, with little lignin). The lack of lignin makes cotton softer and more flexible than bast fibres; tensile strength is lower (~300–400 MPa) than flax. Cotton is highly absorbent (hygroscopic) due to its structure, making it ideal for clothing and towels. Sisal (Agave sisalana) and other leaf fibres are extracted from leaf tissues; they are stiffer and coarser than cotton, suitable for cordage and decorative purposes.',
      },
    },
    {
      type: 'heading',
      id: 'h-mechanical-testing',
      data: { text: 'Mechanical Testing of Fibres', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-tensile-test',
      data: {
        text: 'The tensile strength of a fibre is determined by a tensile test: the fibre is clamped at both ends and subjected to increasing tension until it breaks. The breaking force (in Newtons) is recorded; tensile strength = breaking force / cross-sectional area (expressed in MPa or Pa). Young\'s modulus (stiffness) is calculated from the stress-strain curve: Young\'s modulus = stress / strain = (force/area) / (extension/original length). A steep stress-strain curve indicates high stiffness (small extension before breaking); a shallow curve indicates flexibility (large extension before breaking).',
      },
    },
    {
      type: 'equation',
      id: 'eq-youngs',
      data: {
        html: 'Young\'s modulus (E) = <span class="nb-frac"><span class="nb-num">Stress</span><span class="nb-den">Strain</span></span> = <span class="nb-frac"><span class="nb-num">Force/Area</span><span class="nb-den">Extension/Original length</span></span>',
        caption: 'Young\'s modulus measures stiffness; higher values indicate stiffer materials.',
      },
    },
    {
      type: 'heading',
      id: 'h-sustainability',
      data: { text: 'Plant Fibres and Sustainability', level: 2 },
    },
    {
      type: 'list',
      id: 'list-sustainability',
      data: {
        style: 'bullet',
        items: [
          'Sustainability means using resources to meet current needs without depleting them for future generations (using renewable resources rather than finite fossil fuels).',
          'Using plant fibres to make ropes and fabrics is more sustainable, biodegradable, and often cheaper to process than oil-based plastics (though plant fibres may not be as strong).',
          'Plant fibres are biodegradable because they can be broken down by microbes, unlike most oil-based plastics, which minimises environmental pollution.',
          'Starch and cellulose can be used to make bioplastics; this replaces traditional oil-based plastics and decreases plastic pollution.',
          'Starch can also be used as a renewable resource to produce bioethanol, a more sustainable biofuel alternative to oil-derived vehicle fuels.'
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-comparison',
      data: { text: 'Plant versus Synthetic Fibres', level: 2 },
    },
    {
      type: 'comparisonTable',
      id: 'table-fibres',
      data: {
        headers: ['Property', 'Plant Fibres (Flax, Hemp)', 'Cotton', 'Synthetic (Polyester, Nylon)'],
        rows: [
          ['Source', 'Renewable (phloem sclerenchyma)', 'Renewable (seed coat hairs)', 'Petroleum (non-renewable)'],
          ['Tensile strength', '500–900 MPa', '300–400 MPa', '500–1000 MPa'],
          ['Young\'s modulus', '50–70 GPa', '5–15 GPa', '2–5 GPa'],
          ['Flexibility', 'Stiff, limited elongation', 'Soft, moderate elongation', 'Flexible, high elongation'],
          ['Absorbency', 'Low (hydrophobic due to lignin)', 'High (hygroscopic)', 'Low (hydrophobic)'],
          ['Biodegradability', 'Yes (months to years)', 'Yes (months to years)', 'No (100+ years)'],
          ['Thermal properties', 'Thermally insulating', 'Thermally insulating, breathable', 'Thermally insulating'],
          ['Cost', 'Moderate to high (processing)', 'Low to moderate', 'Low (bulk production)'],
          ['Uses', 'Canvas, rope, composites, linen', 'Clothing, towels, denim', 'General textiles, outdoor gear'],
        ],
        caption: 'Comparison of plant and synthetic fibres.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-sustainability',
      data: {
        style: 'key',
        title: 'Plant Fibres and Environmental Responsibility',
        text: 'Plant fibres offer a sustainable alternative to synthetic fibres, reducing reliance on petroleum and enabling biodegradable products. However, sustainable production requires responsible farming (organic, crop rotation, water conservation) and improved processing (enzymatic retting, reduced chemical use). A holistic approach—combining plant fibres, synthetic recycling, and circular economy principles—is essential for truly sustainable textiles.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-youngs',
      data: {
        style: 'tip',
        title: 'Young\'s Modulus: Stiffness vs. Strength',
        text: 'Don\'t confuse tensile strength (how hard it is to break) with Young\'s modulus (resistance to bending/stretching). A rope might have high tensile strength but low modulus (stretches easily under load). A steel rod has both high strength and high modulus. Flax has high modulus (stiff) but slightly lower strength than synthetic fibres; cotton has lower modulus (soft) but still reasonable strength.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why do bast fibres (flax, hemp) have much higher tensile strength than parenchyma cells? Bast fibres are sclerenchyma cells with thick secondary cell walls composed of cellulose microfibrils oriented helically — this arrangement maximises resistance to tensile stress, analogous to the way steel cables are helically wound to resist pulling forces.",
        apply: "A flax fibre bundle has a cross-sectional area of 0.5 mm² and breaks under a load of 250 N. Calculate the tensile strength (stress at breaking point) in N/mm² (MPa). Compare this to steel (~400 MPa) and explain why flax composites are used in car body panels despite lower strength.",
        analyze: "Compare the environmental impact of producing 1 kg of cotton fibre, 1 kg of flax fibre, and 1 kg of polyester fibre. Consider water use, land use, CO₂ emissions, biodegradability, and energy input. Which is most sustainable overall?",
        evaluate: "Evaluate the claim that plant-based fibres will replace synthetic fibres in textiles and construction by 2050. Consider technical barriers (consistency, moisture sensitivity, fire resistance), economic factors, and the pace of required change in global supply chains.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-fibres',
      data: {
        items: [
          { text: 'Know bast fibres (flax, hemp, jute) are from phloem sclerenchyma; elongated, lignified cells', checked: false },
          { text: 'Understand cotton is seed fibre (seed coat hairs), mostly cellulose, softer than bast fibres', checked: false },
          { text: 'Can define and distinguish tensile strength and Young\'s modulus', checked: false },
          { text: 'Appreciate advantages of plant fibres: renewable, biodegradable, low carbon footprint', checked: false },
          { text: 'Know challenges: pesticide use, water demands, competing land use, processing pollution', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-fibres',
      data: {
        text: 'Bast fibres (flax ~500–900 MPa strength, ~70% cellulose, ~50–70 GPa stiffness; hemp, jute similar) from phloem sclerenchyma. Cotton (seed coat hairs, ~90% cellulose, ~300–400 MPa strength, softer) and leaf fibres (sisal, coarser). Tensile strength = breaking force/area; Young\'s modulus = stress/strain (stiffness). Plant fibres: renewable, biodegradable (months–years), low carbon footprint, insulating, but variable and higher cost. Synthetic fibres (polyester, nylon): petroleum-derived, non-renewable, stronger/flexible, non-biodegradable (100+ years), cheaper bulk production. Sustainability: plant fibres reduce petroleum dependence; require responsible farming (organic, water conservation) and clean processing (enzymatic retting). Circular economy approach needed.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-bast-structure',
        prompt: 'Where do bast fibres come from, and what are their structural features?',
      },
      {
        id: 'cue-2',
        blockId: 'p-bast-properties',
        prompt: 'Why do flax fibres have high tensile strength, and what are their applications?',
      },
      {
        id: 'cue-3',
        blockId: 'eq-youngs',
        prompt: 'Define Young\'s modulus and explain how it differs from tensile strength.',
      },
      {
        id: 'cue-4',
        blockId: 'list-sustainability',
        prompt: 'Discuss the environmental advantages and challenges of plant fibre production.',
      },
    ],
    summaryText: 'Bast fibres: phloem sclerenchyma cells (flax ~2 cm long, ~20 μm diameter, thick lignified walls, minimal lumen); flax tensile strength ~500–900 MPa, modulus ~50–70 GPa (stiff, strong; used in canvas, rope, composites). Hemp, jute similar but coarser. Cotton: seed coat hairs (elongated single cells, ~90% cellulose, ~20–30 mm long, soft, absorbent, ~300–400 MPa strength; used in clothing, towels). Leaf fibres (sisal): coarse, strong. Tensile strength = breaking force / cross-sectional area (MPa). Young\'s modulus = stress/strain = force/area ÷ extension/original length (measure of stiffness, GPa). Plant fibres: renewable (annual crops), biodegradable (months–years), low carbon footprint (sequester CO₂), insulating. Challenges: pesticide use (conventional cotton), water demands, land competition, processing pollution (chemical retting). Synthetic fibres: non-renewable (petroleum), non-biodegradable (100+ years), flexible, cheaper. Sustainability needs: organic farming, crop rotation, enzymatic retting, circular economy.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Plant Fibres as Sustainable Materials',
      detail: 'Flax and hemp fibres offer renewable, biodegradable alternatives to synthetic polymers, with mechanical properties competitive with glass fibres, supporting the shift toward sustainable, bio-based materials in textiles and composites.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['plant fibres', 'sustainability', 'materials science'],
    },
  ],
};
