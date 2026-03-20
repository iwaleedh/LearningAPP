export const note_olevel_biology_13_13_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/13 Excretion In Humans/13-1-3-osmoregulation-liver.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain how ADH controls water reabsorption in the kidneys; describe the main functions of the liver including deamination, detoxification, glycogen storage, bile production and heat generation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Osmoregulation — Controlling Water Content of the Blood', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Osmoregulation</strong> is the control of the water content of the blood (and body fluids). It is essential because cells can shrink or burst if the water content of blood plasma changes significantly. The <strong>kidneys</strong> are the main osmoregulatory organs, controlled by the hormone <strong>ADH (antidiuretic hormone)</strong>.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Role of ADH', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'ADH — Antidiuretic Hormone',
        text: '<strong>Produced by:</strong> the hypothalamus (brain); released from the pituitary gland.<br/><strong>Target organ:</strong> collecting ducts (and distal tubules) of the kidneys.<br/><strong>Effect:</strong> makes collecting duct walls <em>more permeable</em> to water → more water reabsorbed by osmosis → less, more concentrated urine produced.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Negative feedback control of water balance by ADH',
        svg: `<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Central blood box -->
  <rect x="215" y="130" width="150" height="50" rx="8" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="2"/>
  <text x="290" y="150" text-anchor="middle" font-weight="bold" fill="#1e3a8a">BLOOD PLASMA</text>
  <text x="290" y="167" text-anchor="middle" fill="#1e3a8a" font-size="11">water concentration</text>

  <!-- Hypothalamus detector -->
  <rect x="215" y="20" width="150" height="50" rx="8" fill="#78350f" stroke="#d97706" stroke-width="2"/>
  <text x="290" y="40" text-anchor="middle" font-weight="bold" fill="#92400e">HYPOTHALAMUS</text>
  <text x="290" y="56" text-anchor="middle" fill="#92400e" font-size="11">detects change</text>

  <!-- Arrows from blood to hypothalamus -->
  <line x1="290" y1="130" x2="290" y2="70" stroke="#555" stroke-width="2" marker-end="url(#arrG)"/>

  <!-- HIGH concentration scenario — left -->
  <rect x="20" y="60" width="150" height="44" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="95" y="78" text-anchor="middle" fill="#991b1b" font-size="11" font-weight="bold">Blood too concentrated</text>
  <text x="95" y="94" text-anchor="middle" fill="#991b1b" font-size="11">(low water conc.)</text>

  <line x1="170" y1="82" x2="215" y2="45" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>

  <rect x="20" y="140" width="150" height="44" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="95" y="158" text-anchor="middle" fill="#991b1b" font-size="11" font-weight="bold">More ADH released</text>
  <text x="95" y="174" text-anchor="middle" fill="#991b1b" font-size="11">from pituitary</text>

  <rect x="20" y="220" width="150" height="44" rx="6" fill="#3d1212" stroke="#dc2626" stroke-width="1.5"/>
  <text x="95" y="238" text-anchor="middle" fill="#991b1b" font-size="11" font-weight="bold">Kidneys reabsorb</text>
  <text x="95" y="254" text-anchor="middle" fill="#991b1b" font-size="11">more water → small,</text>
  <!-- arrow chain -->
  <text x="95" y="268" text-anchor="middle" fill="#991b1b" font-size="10">concentrated urine</text>
  <line x1="95" y1="184" x2="95" y2="220" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrR)"/>
  <line x1="95" y1="104" x2="95" y2="140" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arrR)"/>

  <!-- LOW concentration scenario — right -->
  <rect x="410" y="60" width="150" height="44" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="485" y="78" text-anchor="middle" fill="#14532d" font-size="11" font-weight="bold">Blood too dilute</text>
  <text x="485" y="94" text-anchor="middle" fill="#14532d" font-size="11">(high water conc.)</text>

  <line x1="410" y1="82" x2="365" y2="45" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>

  <rect x="410" y="140" width="150" height="44" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="485" y="158" text-anchor="middle" fill="#14532d" font-size="11" font-weight="bold">Less ADH released</text>
  <text x="485" y="174" text-anchor="middle" fill="#14532d" font-size="11">from pituitary</text>

  <rect x="410" y="220" width="150" height="44" rx="6" fill="#0a2e1a" stroke="#16a34a" stroke-width="1.5"/>
  <text x="485" y="238" text-anchor="middle" fill="#14532d" font-size="11" font-weight="bold">Kidneys reabsorb</text>
  <text x="485" y="254" text-anchor="middle" fill="#14532d" font-size="11">less water → large,</text>
  <text x="485" y="268" text-anchor="middle" fill="#14532d" font-size="10">dilute urine</text>
  <line x1="485" y1="184" x2="485" y2="220" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrGr)"/>
  <line x1="485" y1="104" x2="485" y2="140" stroke="#16a34a" stroke-width="1.5" marker-end="url(#arrGr)"/>

  <!-- Restore normal label -->
  <text x="95" y="300" text-anchor="middle" fill="#555" font-size="10">→ blood returns to normal</text>
  <text x="485" y="300" text-anchor="middle" fill="#555" font-size="10">→ blood returns to normal</text>

  <defs>
    <marker id="arrG" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker>
    <marker id="arrR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/></marker>
    <marker id="arrGr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#16a34a"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Liver and Its Functions', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'The <strong>liver</strong> is the largest internal organ and performs over 500 functions. It receives blood via the <strong>hepatic artery</strong> (oxygenated) and the <strong>hepatic portal vein</strong> (carrying digested food from the small intestine). Blood leaves via the <strong>hepatic vein</strong>.' }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Key functions of the liver',
        headers: ['Function', 'Description'],
        rows: [
          ['Deamination', 'Breaking down excess amino acids → ammonia (toxic) → converted to urea (less toxic) → excreted by kidneys. Reaction: amino acid → keto acid + ammonia → urea + CO₂ + water.'],
          ['Detoxification', 'Breaks down toxic substances including alcohol (ethanol) and drugs into less harmful products.'],
          ['Glycogen storage', 'Converts excess glucose → glycogen for storage (glycogenesis). Converts glycogen back to glucose when blood glucose is low (glycogenolysis).'],
          ['Bile production', 'Produces bile (stored in the gall bladder) which emulsifies fats in the small intestine for easier digestion.'],
          ['Heat production', 'High metabolic activity generates large amounts of heat; helps maintain body temperature.'],
          ['Plasma protein synthesis', 'Makes fibrinogen (blood clotting), albumin (osmotic balance), and other blood proteins.']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Deamination — Key Equation',
        text: 'Excess amino acids cannot be stored. The <strong>amino group (–NH₂)</strong> is removed in the liver:<br/><br/><strong>Amino acid → keto acid + ammonia (NH₃)</strong><br/>Then: <strong>ammonia + CO₂ → urea + water</strong><br/><br/>Urea is less toxic than ammonia and is transported in the blood to the kidneys for excretion in urine.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Liver vs Kidney',
        text: 'The <strong>liver</strong> <em>makes</em> urea (from amino acids). The <strong>kidney</strong> <em>excretes</em> urea (in urine). Students often confuse which organ does what — remember: <strong>liver = manufactures urea; kidney = removes it from the body.</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Osmoregulation: ADH from pituitary makes kidney collecting ducts more permeable to water. High ADH → concentrated urine; low ADH → dilute urine. Liver functions: deamination (makes urea from excess amino acids), detoxification, glycogen storage, bile production, heat generation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'ADH controls water reabsorption in kidneys. Liver: deamination → urea; detoxification; glycogen storage; bile; heat.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is ADH and what does it do?', answer: 'ADH (antidiuretic hormone) is produced by the hypothalamus and released by the pituitary. It makes collecting duct walls more permeable to water, so more water is reabsorbed and concentrated urine is produced.' },
      { id: 'cue-2', blockId: 'svg-1', prompt: 'When blood is too concentrated, what happens to ADH secretion and urine volume?', answer: 'More ADH is released; kidneys reabsorb more water; urine volume is small and concentrated.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'What is deamination and where does it occur?', answer: 'Deamination is the removal of the amino group from excess amino acids in the liver. Ammonia is formed, then converted to urea, which is excreted by the kidneys.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Give three functions of the liver.', answer: 'Deamination (producing urea), detoxification (breaking down alcohol/drugs), glycogen storage, bile production, heat generation (any three).' },
      { id: 'cue-5', blockId: 'call-3', prompt: 'Which organ makes urea and which organ removes it from the body?', answer: 'The liver makes urea (by deamination of amino acids); the kidney removes urea from the body (in urine).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_13_13_2;
