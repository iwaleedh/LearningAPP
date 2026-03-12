export const note_biology_1_1_3 = {
  blocks: [
    {
      id: 'obj-cholesterol',
      type: 'objective',
      data: {
        text: 'Understand the structure and roles of cholesterol, high-density lipoprotein (HDL) and low-density lipoprotein (LDL), and their relationship to cardiovascular disease risk.'
      }
    },
    {
      id: 'h-cholesterol-struct',
      type: 'heading',
      data: {
        text: 'Cholesterol Structure',
        level: 2
      }
    },
    {
      id: 'p-cholesterol-struct',
      type: 'paragraph',
      data: {
        text: 'Cholesterol is a steroid lipid consisting of four fused carbon rings (the steroid nucleus) with a short hydrocarbon tail and a hydroxyl (−OH) group at carbon 3 of the A-ring. The four-ring system is largely non-polar and hydrophobic, making cholesterol lipid-soluble. The −OH group is weakly polar, allowing limited interaction with water or phospholipid head groups. Unlike triglycerides and phospholipids, cholesterol does not contain fatty acids and is not formed by esterification — it is biosynthesised from acetyl-CoA via the mevalonate pathway, primarily in the liver. Cholesterol is found in all animal cell membranes and is absent from plant cells and prokaryotes.'
      }
    },
    {
      id: 'svg-cholesterol',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><style>.lbl{fill:#1f2937;font-size:12px;}.muted{fill:#6b7280;font-size:10px;}</style></defs><text x="260" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e1b4b">Cholesterol Structure (Simplified)</text><polygon points="55,135 80,107 120,107 145,135 120,163 80,163" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/><text x="100" y="137" text-anchor="middle" font-size="11" fill="#1e1b4b">A</text><polygon points="145,135 170,107 210,107 235,135 210,163 170,163" fill="#ddd6fe" stroke="#6366f1" stroke-width="1.5"/><text x="190" y="137" text-anchor="middle" font-size="11" fill="#1e1b4b">B</text><polygon points="235,135 260,107 300,107 325,135 300,163 260,163" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/><text x="280" y="137" text-anchor="middle" font-size="11" fill="#1e1b4b">C</text><polygon points="325,135 355,112 385,128 385,155 355,168" fill="#ddd6fe" stroke="#6366f1" stroke-width="1.5"/><text x="357" y="141" text-anchor="middle" font-size="11" fill="#1e1b4b">D</text><path d="M 385 143 L 425 130 L 455 145 L 485 130" stroke="#374151" stroke-width="1.5" fill="none"/><text x="455" y="118" text-anchor="middle" class="muted">Hydrocarbon</text><text x="455" y="130" text-anchor="middle" class="muted">tail</text><path d="M 68 135 L 52 160" stroke="#374151" stroke-width="1.5"/><text x="40" y="174" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">−OH</text><text x="40" y="187" text-anchor="middle" class="muted">(polar)</text><text x="260" y="195" text-anchor="middle" class="muted" font-style="italic">Four fused steroid rings — mostly hydrophobic; −OH group is weakly hydrophilic</text></svg>',
        caption: 'Cholesterol: four fused carbon rings (A–D) with a hydrocarbon tail at D and a polar −OH group at A'
      }
    },
    {
      id: 'h-cholesterol-roles',
      type: 'heading',
      data: {
        text: 'Roles of Cholesterol in Cells',
        level: 2
      }
    },
    {
      id: 'list-cholesterol-roles',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Membrane fluidity regulation — cholesterol inserts between phospholipid tails; at high temperatures it reduces excessive fluidity; at low temperatures it prevents the membrane becoming too rigid (acts as a fluidity buffer)',
          'Reduced membrane permeability — by filling gaps between phospholipid tails, cholesterol reduces the permeability of the bilayer to small polar molecules and ions',
          'Precursor for steroid hormones — testosterone, oestrogen, progesterone, and cortisol are all synthesised from cholesterol',
          'Precursor for vitamin D — cholesterol is converted to calciferol (vitamin D₃) in skin cells upon UV exposure',
          'Precursor for bile acids — bile salts are derived from cholesterol in the liver and are needed to emulsify dietary fats in the small intestine for absorption'
        ]
      }
    },
    {
      id: 'callout-key-cholesterol',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Cholesterol in the Phospholipid Bilayer',
        text: 'Cholesterol intercalates between phospholipid tails (its −OH anchors near the hydrophilic head region; its hydrophobic rings and tail align with the fatty acid chains). This buffers membrane fluidity: preventing liquid-crystalline → gel transition at low temperatures, and preventing excessive fluidity at high temperatures. Cholesterol is essential in animal cell membranes but absent from prokaryote membranes.'
      }
    },
    {
      id: 'h-lipoproteins',
      type: 'heading',
      data: {
        text: 'Lipoproteins: Transporting Cholesterol in Blood',
        level: 2
      }
    },
    {
      id: 'p-lipoproteins-intro',
      type: 'paragraph',
      data: {
        text: 'Cholesterol is not soluble in blood plasma (which is aqueous). To be transported, cholesterol and other lipids are packaged into lipoprotein particles — spherical structures with a hydrophobic core (cholesterol esters and triglycerides) surrounded by a phospholipid monolayer and embedded apoprotein molecules. Apoproteins act as recognition signals for cell surface receptors and activate enzymes involved in lipid metabolism. The two types most relevant to cardiovascular health are Low-Density Lipoprotein (LDL) and High-Density Lipoprotein (HDL).'
      }
    },
    {
      id: 'h-ldl',
      type: 'heading',
      data: {
        text: 'Low-Density Lipoprotein (LDL)',
        level: 2
      }
    },
    {
      id: 'p-ldl',
      type: 'paragraph',
      data: {
        text: 'LDL transports cholesterol from the liver to peripheral tissues (muscles, organs). LDL particles are relatively large (~22 nm diameter) and have a high lipid:protein ratio — approximately 45% cholesterol and 25% protein by mass. Cells take up LDL by receptor-mediated endocytosis: the LDL particle binds to an LDL receptor on the cell surface and is internalised in a vesicle. Lysosomes digest the LDL particle and release free cholesterol for membrane synthesis. When LDL levels are chronically elevated, or if LDL receptor activity is reduced (e.g. in familial hypercholesterolaemia), excess LDL accumulates in the blood. In the presence of oxidative stress, LDL is oxidised (oxLDL) and is taken up by macrophages in artery walls, leading to foam cell formation and atherosclerotic plaques.'
      }
    },
    {
      id: 'h-hdl',
      type: 'heading',
      data: {
        text: 'High-Density Lipoprotein (HDL)',
        level: 2
      }
    },
    {
      id: 'p-hdl',
      type: 'paragraph',
      data: {
        text: 'HDL transports cholesterol from peripheral tissues back to the liver for excretion or recycling — this is called reverse cholesterol transport. HDL particles are smaller (~8–11 nm) and denser than LDL because they contain a higher proportion of protein (~50% protein) and less cholesterol. In the liver, cholesterol delivered by HDL is converted to bile acids for excretion in bile. By removing excess cholesterol from artery walls and tissues, HDL reduces the risk of cholesterol accumulation in arterial plaques. This is why HDL is commonly called "good cholesterol" and LDL is called "bad cholesterol".'
      }
    },
    {
      id: 'table-ldl-hdl',
      type: 'comparisonTable',
      data: {
        headers: ['Feature', 'LDL', 'HDL'],
        rows: [
          ['Full name', 'Low-Density Lipoprotein', 'High-Density Lipoprotein'],
          ['Size', 'Larger (~22 nm)', 'Smaller (~8–11 nm)'],
          ['Density', 'Lower (more lipid)', 'Higher (more protein)'],
          ['Protein content', '~25%', '~50%'],
          ['Direction of transport', 'Liver → peripheral tissues', 'Peripheral tissues → liver'],
          ['Function', 'Delivers cholesterol to cells', 'Returns cholesterol to liver (reverse transport)'],
          ['Effect on CVD risk', 'High LDL ↑ risk (plaque formation)', 'High HDL ↓ risk (clears arteries)'],
          ['Nickname', '"Bad cholesterol"', '"Good cholesterol"']
        ],
        caption: 'Comparison of LDL and HDL — structure, transport direction, and cardiovascular effects'
      }
    },
    {
      id: 'svg-ldl-hdl',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif" font-size="13"><defs><marker id="arr-chol" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><polygon points="0 0, 6 2, 0 4" fill="#6366f1"/></marker></defs><text x="280" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e1b4b">Cholesterol Transport: LDL vs HDL</text><ellipse cx="90" cy="145" rx="70" ry="42" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="90" y="140" text-anchor="middle" font-size="12" fill="#92400e" font-weight="bold">Liver</text><text x="90" y="156" text-anchor="middle" font-size="10" fill="#92400e">makes LDL + HDL</text><rect x="370" y="110" width="160" height="55" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><text x="450" y="135" text-anchor="middle" font-size="12" fill="#991b1b" font-weight="bold">Peripheral</text><text x="450" y="152" text-anchor="middle" font-size="12" fill="#991b1b" font-weight="bold">Tissues</text><path d="M 158 130 C 260 75 320 75 370 115" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#arr-chol)"/><text x="262" y="75" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">LDL →</text><text x="262" y="90" text-anchor="middle" font-size="10" fill="#dc2626">cholesterol to tissues ("bad")</text><path d="M 370 152 C 310 200 245 210 158 162" stroke="#16a34a" stroke-width="2.5" fill="none" marker-end="url(#arr-chol)"/><text x="262" y="218" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">← HDL</text><text x="262" y="233" text-anchor="middle" font-size="10" fill="#16a34a">returns excess cholesterol to liver ("good")</text><text x="280" y="270" text-anchor="middle" font-size="11" fill="#6b7280" font-style="italic">High LDL:HDL ratio → increased CVD risk</text></svg>',
        caption: 'LDL carries cholesterol from liver to tissues; HDL returns excess cholesterol from tissues to liver'
      }
    },
    {
      id: 'h-diet-risk',
      type: 'heading',
      data: {
        text: 'Diet, LDL:HDL Ratio and CVD Risk',
        level: 2
      }
    },
    {
      id: 'p-diet-risk',
      type: 'paragraph',
      data: {
        text: 'The LDL:HDL ratio is used clinically as an indicator of cardiovascular disease (CVD) risk. A high ratio (high LDL, low HDL) indicates more cholesterol being deposited in artery walls than removed. Diet strongly influences plasma lipid levels:\n\n• Saturated fats (butter, red meat, palm oil) raise LDL cholesterol\n• Trans fats (processed foods, partially hydrogenated oils) raise LDL and lower HDL — the most harmful dietary fat\n• Unsaturated fats (olive oil, oily fish) lower LDL and raise HDL\n• Soluble fibre (oats, pulses) binds cholesterol in the gut, reducing LDL absorption\n• Omega-3 fatty acids (oily fish) lower triglycerides and reduce arterial inflammation\n\nStatins are drugs that inhibit HMG-CoA reductase, a key enzyme in the mevalonate pathway, reducing liver cholesterol synthesis and increasing LDL receptor expression — thereby lowering blood LDL concentration.'
      }
    },
    {
      id: 'table-diet-effects',
      type: 'comparisonTable',
      data: {
        headers: ['Dietary Factor', 'Effect on LDL', 'Effect on HDL', 'Net CVD Risk'],
        rows: [
          ['Saturated fats (butter, red meat)', 'Raises LDL ↑', 'Minimal', 'Increases risk'],
          ['Trans fats (processed foods)', 'Raises LDL ↑↑', 'Lowers HDL ↓', 'Greatly increases risk'],
          ['Monounsaturated fats (olive oil)', 'Lowers LDL ↓', 'Raises HDL ↑', 'Reduces risk'],
          ['Polyunsaturated / omega-3 fats', 'Lowers LDL ↓', 'Raises HDL ↑', 'Reduces risk'],
          ['Soluble fibre (oats, beans)', 'Lowers LDL ↓', 'No major effect', 'Reduces risk'],
          ['Statins (HMG-CoA reductase inhibitor)', 'Lowers LDL ↓↓', 'Mild raise ↑', 'Significantly reduces risk']
        ],
        caption: 'Effects of diet and statins on cholesterol levels and CVD risk'
      }
    },
    {
      id: 'callout-warning-cholesterol',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Exam Mistakes — Cholesterol & Lipoproteins',
        text: '1. "Cholesterol is always harmful" — FALSE. Cholesterol is essential for membranes, steroid hormones, vitamin D, and bile acids. Excess LDL specifically causes problems.\n2. "HDL carries cholesterol from liver to tissues" — FALSE. That is LDL. HDL carries cholesterol FROM tissues BACK to the liver.\n3. "HDL is mostly fat" — FALSE. HDL has ~50% protein content, which is why it is denser than LDL (~25% protein). Density comes from the protein:lipid ratio.'
      }
    },
    {
      id: 'callout-tip-cholesterol',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: LDL vs HDL Memory Aid',
        text: '"L in LDL = Lousy — carries cholesterol TO tissues and can cause plaques. H in HDL = Healthy — carries cholesterol BACK to the liver." For CVD risk: think of LDL as a delivery van (deposits cholesterol everywhere) and HDL as a cleaner (removes excess from artery walls).'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Familial hypercholesterolaemia (FH) is caused by a genetic defect in the LDL receptor gene. Without functional LDL receptors, cells cannot take up LDL from blood, so LDL accumulates — plasma LDL can be 2–6 times higher than normal. FH patients develop atherosclerosis early and have greatly increased MI/stroke risk without statin treatment.',
        apply: 'A patient has total cholesterol of 6.4 mmol/L, LDL of 4.8 mmol/L, and HDL of 0.9 mmol/L. Calculate their LDL:HDL ratio and explain whether this indicates high CVD risk (reference: ratio > 3.5 is elevated).',
        analyze: 'Explain why measuring only total cholesterol is less useful than measuring the LDL:HDL ratio as a CVD risk indicator.',
        evaluate: 'Evaluate the evidence for and against recommending dietary changes versus statin therapy as the first-line intervention for elevated LDL in a 40-year-old with no other risk factors.'
      },
      terms: []
    },
    {
      id: 'checklist-cholesterol',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe cholesterol structure: 4 fused carbon rings, hydrocarbon tail, −OH group', checked: false },
          { text: 'State three roles of cholesterol: membrane fluidity, steroid hormone precursor, bile acid precursor', checked: false },
          { text: 'Explain LDL function: transports cholesterol from liver to tissues; high LDL raises CVD risk', checked: false },
          { text: 'Explain HDL function: reverse cholesterol transport (tissues → liver); high HDL lowers CVD risk', checked: false },
          { text: 'Distinguish LDL from HDL: size, density, protein content, direction of transport', checked: false },
          { text: 'Explain how saturated fats and trans fats raise LDL; unsaturated fats raise HDL', checked: false }
        ]
      }
    },
    {
      id: 'summary-cholesterol',
      type: 'summary',
      data: {
        text: 'Cholesterol is a steroid lipid (4 fused rings, −OH group, hydrocarbon tail) essential for membrane fluidity and as a precursor for steroid hormones, vitamin D, and bile acids. In blood, cholesterol is carried by lipoproteins: LDL (high lipid, low protein, "bad") delivers cholesterol from liver to tissues; HDL (high protein, low lipid, "good") returns excess cholesterol from tissues to the liver. A high LDL:HDL ratio increases CVD risk. Saturated and trans fats raise LDL; unsaturated fats and statins lower LDL. CVD risk is best assessed using the LDL:HDL ratio rather than total cholesterol alone.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-cholesterol-struct',
        prompt: 'Describe the structure of cholesterol. Why is it mostly hydrophobic?'
      },
      {
        id: 'cue-2',
        blockId: 'list-cholesterol-roles',
        prompt: 'State three important roles of cholesterol in cells (other than energy storage).'
      },
      {
        id: 'cue-3',
        blockId: 'p-ldl',
        prompt: 'What is the function of LDL and why can chronically elevated LDL be harmful?'
      },
      {
        id: 'cue-4',
        blockId: 'p-hdl',
        prompt: 'Explain how HDL reduces the risk of cardiovascular disease.'
      },
      {
        id: 'cue-5',
        blockId: 'p-diet-risk',
        prompt: 'Compare the effects of saturated fats and trans fats on LDL and HDL levels.'
      },
      {
        id: 'cue-6',
        blockId: 'table-diet-effects',
        prompt: 'Why is the LDL:HDL ratio a more useful CVD risk indicator than total cholesterol alone?'
      }
    ],
    summaryText: 'Cholesterol: 4 fused steroid rings, essential for membrane fluidity, steroid hormone synthesis, vitamin D, bile acids. LDL: large, low density, carries cholesterol liver→tissues ("bad" — high LDL → atherosclerosis). HDL: small, high density, carries cholesterol tissues→liver ("good" — clears artery walls). Diet: saturated/trans fats raise LDL; unsaturated fats lower LDL, raise HDL. Statins: inhibit HMG-CoA reductase → reduce LDL. CVD risk assessed by LDL:HDL ratio.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cholesterol, LDL, HDL and Cardiovascular Disease Risk',
      detail: 'Lipoprotein transport of cholesterol, dietary influences and CVD risk assessment.',
      year: '2024',
      source: 'Pearson Edexcel IAL Biology Specification (WBI11)',
      tags: ['cholesterol', 'LDL', 'HDL', 'CVD', 'lipoproteins', 'statins', 'diet']
    }
  ]
};
