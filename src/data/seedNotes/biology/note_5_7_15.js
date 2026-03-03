/**
 * WBI15 — Topic 7.15: Kidney Filtration, Reabsorption & Secretion
 * GFR, selective reabsorption, loop of Henle permeability, distal tubule fine-tuning
 */

export const note_biology_5_7_15 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand glomerular filtration, selective reabsorption in the proximal tubule, the loop of Henle\'s role in osmotic gradient formation, and fine-tuning in the distal tubule and collecting duct.',
      },
    },
    {
      id: 'h-overview',
      type: 'heading',
      data: { text: 'Three Processes: Filtration, Reabsorption, Secretion', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Kidney function involves three sequential processes: (1) glomerular filtration: formation of filtrate from blood; (2) tubular reabsorption: reclamation of useful substances; (3) tubular secretion: addition of waste/excess ions. The net result is urine: small volume, concentrated waste, controlled osmolarity.',
      },
    },
    {
      id: 'h-filtration',
      type: 'heading',
      data: { text: 'Glomerular Filtration', level: 3 },
    },
    {
      id: 'p-filtration-mechanism',
      type: 'paragraph',
      data: {
        text: 'Filtration occurs at the glomerulus due to high hydrostatic pressure in the glomerular capillaries (blood pressure ~60 mmHg). This pressure forces small molecules (<70 kDa, e.g., glucose, amino acids, ions, urea) through the basement membrane into Bowman\'s capsule. Large molecules (proteins, blood cells) are retained in blood.',
      },
    },
    {
      id: 'p-gfr',
      type: 'paragraph',
      data: {
        text: 'Glomerular filtration rate (GFR) is the volume of filtrate produced per minute. Normal GFR: ~125 mL/min or ~180 L/day. Despite huge volume, only ~1–2 L/day urine is produced; the remaining ~178 L is reabsorbed.',
      },
    },
    {
      id: 'table-filtrate-composition',
      type: 'comparisonTable',
      data: {
        headers: ['Substance', 'Plasma Conc.', 'Filtrate Conc.', 'Filterable?'],
        rows: [
          ['Water', '—', '—', 'Yes (by osmosis)'],
          ['Glucose', '5 mmol/L', '5 mmol/L', 'Yes (small molecule)'],
          ['Amino acids', '0.5 mmol/L', '0.5 mmol/L', 'Yes (small, not highly charged)'],
          ['Urea', '2.5 mmol/L', '2.5 mmol/L', 'Yes (small)'],
          ['Ions (Na⁺, Cl⁻, K⁺)', 'Variable', 'Similar to plasma', 'Yes'],
          ['Proteins', '70 g/L', '~0.01 g/L', 'No (large, charged)'],
          ['Blood cells', '—', '0', 'No'],
        ],
        caption: 'Composition of glomerular filtrate vs plasma',
      },
    },
    {
      id: 'h-reabsorption',
      type: 'heading',
      data: { text: 'Tubular Reabsorption', level: 3 },
    },
    {
      id: 'h-pct',
      type: 'heading',
      data: { text: 'Proximal Convoluted Tubule (PCT): Selective Reabsorption', level: 4 },
    },
    {
      id: 'p-pct',
      type: 'paragraph',
      data: {
        text: 'The PCT is the main site of selective reabsorption. Useful substances are actively or passively reabsorbed and returned to blood via peritubular capillaries. The PCT has abundant mitochondria (energy for active transport) and microvilli (large surface area).',
      },
    },
    {
      id: 'list-pct-reabsorption',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Glucose: 100% reabsorbed by active transport (SGLT1 co-transporter); filtered at 5 mmol/L, reabsorbed via Tm (transport maximum) of ~375 mg/min',
          'Amino acids: 100% reabsorbed by active transport',
          'Ions: ~65% Na⁺ reabsorbed actively; Cl⁻ follows passively; K⁺ reabsorbed (~80%)',
          'Water: ~65% reabsorbed osmotically, following ions (obligatory water reabsorption)',
          'Urea: ~50% reabsorbed by passive diffusion (concentration-dependent)',
        ],
      },
    },
    {
      id: 'callout-tm',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Transport Maximum (Tm)',
        text: 'Transport maximum is the maximum rate at which a carrier-mediated transport system can reabsorb a substance. If filtered load exceeds Tm (e.g., glucose >375 mg/min), excess spills into urine. This is why diabetic patients with high blood glucose have glucosuria (glucose in urine).',
      },
    },
    {
      id: 'h-loop-reabsorption',
      type: 'heading',
      data: { text: 'Loop of Henle: Osmotic Gradient Formation', level: 4 },
    },
    {
      id: 'p-loop-descending',
      type: 'paragraph',
      data: {
        text: 'Descending limb: permeable to water, impermeable to solutes. As filtrate descends from cortex to medulla, the surrounding medullary osmolarity increases (due to Na⁺ pumped out by ascending limb). Water leaves the filtrate osmotically, and solute concentration increases. At the loop hairpin, osmolarity reaches ~1200 mOsm/L.',
      },
    },
    {
      id: 'p-loop-ascending',
      type: 'paragraph',
      data: {
        text: 'Ascending limb: impermeable to water, actively pumps Na⁺ and Cl⁻ out via the Na⁺-K⁺-2Cl⁻ co-transporter (NKCC2). As the filtrate ascends, solutes are removed but water cannot follow (water impermeability). The filtrate becomes hypotonic (dilute), whilst the medulla becomes hypertonic. This creates the counter-current multiplier gradient.',
      },
    },
    {
      id: 'callout-counter-current',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Counter-Current Multiplier',
        text: 'The loop of Henle creates a steep osmolarity gradient: ~300 mOsm/L at cortex, ~1200 mOsm/L at medullary tip. This gradient is maintained by the counter-current arrangement: filtrate flows down and up in opposite directions, allowing the parallel flow to multiply osmolarity difference.',
      },
    },
    {
      id: 'h-dct-cd',
      type: 'heading',
      data: { text: 'Distal Convoluted Tubule & Collecting Duct: Fine-Tuning', level: 4 },
    },
    {
      id: 'p-dct-cd',
      type: 'paragraph',
      data: {
        text: 'DCT and collecting duct are the sites of fine-tuning osmoregulation (ADH and aldosterone control). Here, remaining ~30% of filtered water and ~35% of filtered Na⁺ are reabsorbed based on body needs. If ADH is high, water is reabsorbed and urine is concentrated. If ADH is low, water is not reabsorbed and urine is dilute.',
      },
    },
    {
      id: 'h-secretion',
      type: 'heading',
      data: { text: 'Tubular Secretion', level: 3 },
    },
    {
      id: 'p-secretion',
      type: 'paragraph',
      data: {
        text: 'Secretion is the active transport of substances from peritubular capillaries into the tubular lumen. Key secreted substances: (1) H⁺ ions (maintains blood pH); (2) K⁺ ions (controlled by aldosterone); (3) organic acids (e.g., urate, penicillin) (via organic anion transporters). Secretion supplements filtration in eliminating wastes and regulating electrolytes.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Filtration: ~180 L/day filtrate formed at glomerulus. PCT reabsorbs 100% glucose, amino acids, 65% Na⁺, 65% water. Loop of Henle: descending limb allows water loss (hypertonic medulla); ascending limb pumps Na⁺ (hypotonic filtrate), creating osmotic gradient. DCT/collecting duct: ADH and aldosterone fine-tune final water/Na⁺ reabsorption.',
        apply: 'A patient has GFR of 125 mL/min and blood glucose of 10 mmol/L (above normal 5 mmol/L). Calculate: (a) filtered load of glucose; (b) if Tm = 375 mg/min, how much glucose spills into urine?',
        analyze: 'Why is the loop of Henle essential for producing concentrated urine? What would happen if the loop were damaged?',
        evaluate: 'Discuss why 99% of filtrate is reabsorbed. What adaptive advantage does this provide?',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe glomerular filtration and explain the role of hydrostatic pressure', checked: false },
          { text: 'State the normal GFR and calculate daily filtrate volume', checked: false },
          { text: 'Describe selective reabsorption in the proximal tubule', checked: false },
          { text: 'Explain the counter-current multiplier and its role in osmotic gradient formation', checked: false },
          { text: 'Explain how ADH and aldosterone fine-tune reabsorption in DCT/collecting duct', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Filtration: ~125 mL/min GFR; hydrostatic pressure forces small molecules into Bowman\'s capsule. Reabsorption: PCT (100% glucose, amino acids, 65% Na⁺/water); loop of Henle (osmotic gradient: 300→1200 mOsm/L); DCT/collecting duct (ADH/aldosterone fine-tune remaining water/Na⁺). Result: ~1–2 L/day concentrated urine. Secretion: active transport of H⁺, K⁺, organic acids.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-gfr',
        prompt: 'State the normal GFR. How much filtrate is produced daily? How much urine?',
      },
      {
        id: 'cue-2',
        blockId: 'list-pct-reabsorption',
        prompt: 'List five substances reabsorbed in the PCT and describe the transport mechanism for each.',
      },
      {
        id: 'cue-3',
        blockId: 'p-loop-descending',
        prompt: 'Describe the descending limb of the loop of Henle. What is its permeability profile?',
      },
      {
        id: 'cue-4',
        blockId: 'p-loop-ascending',
        prompt: 'Describe the ascending limb of the loop of Henle. How does it differ from the descending limb?',
      },
      {
        id: 'cue-5',
        blockId: 'p-secretion',
        prompt: 'What is tubular secretion and give three examples of secreted substances.',
      },
    ],
    summaryText:
      'Filtration: GFR ~125 mL/min (180 L/day); hydrostatic pressure. PCT: 100% glucose/amino acids, 65% Na⁺/water reabsorbed (active). Loop: descending (water-permeable), ascending (Na⁺-pumped, water-impermeable) → osmotic gradient 300→1200 mOsm/L. DCT/collecting duct: ADH/aldosterone fine-tune final water/Na⁺. Secretion: active H⁺, K⁺, organic acids.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Clearance concept',
      detail: 'Renal clearance used to measure kidney function and drug metabolism',
      year: '—',
      source: 'Clinical nephrology',
      tags: ['clinical'],
    },
  ],
};
