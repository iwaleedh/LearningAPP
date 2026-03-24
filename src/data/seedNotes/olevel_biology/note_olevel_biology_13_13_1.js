export const note_olevel_biology_13_13_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/13 Excretion In Humans/13-1-2-kidney-structure-urine-formation.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the gross structure of the kidney; name the parts of a nephron; explain ultrafiltration and selective reabsorption; state the composition of urine.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Gross Structure of the Kidney', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Humans have two <strong>kidneys</strong>, each supplied by a <strong>renal artery</strong> (carrying blood with waste products) and drained by a <strong>renal vein</strong> (carrying filtered blood). Urine produced by the kidney passes down the <strong>ureter</strong> to the <strong>bladder</strong>, where it is stored before being expelled through the <strong>urethra</strong>.' }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Key regions of the kidney',
        headers: ['Region', 'Description / Function'],
        rows: [
          ['Cortex', 'Outer layer; contains the Bowman\'s capsules and glomeruli where filtration occurs'],
          ['Medulla', 'Inner region; contains the loops of Henle and collecting ducts'],
          ['Renal pelvis', 'Central funnel-shaped space; collects urine and channels it to the ureter'],
          ['Renal artery', 'Brings oxygenated blood carrying waste (urea) to the kidney'],
          ['Renal vein', 'Carries filtered, deoxygenated blood away from the kidney'],
          ['Ureter', 'Tube carrying urine from kidney to bladder']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Nephron', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'The functional unit of the kidney is the <strong>nephron</strong>. Each kidney contains approximately <strong>one million nephrons</strong>. Each nephron consists of several regions, each with a specific role in producing urine.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Diagram of a nephron showing key regions and blood supply',
        svg: `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Bowman's capsule -->
  <circle cx="120" cy="80" r="40" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="120" cy="80" r="22" fill="#1e3a8a" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="120" y="77" text-anchor="middle" fill="#1e3a8a" font-size="10" font-weight="bold">Bowman's</text>
  <text x="120" y="90" text-anchor="middle" fill="#1e3a8a" font-size="10">capsule</text>
  <!-- Glomerulus label -->
  <text x="35" y="55" fill="#1d4ed8" font-size="10">Glomerulus</text>
  <line x1="78" y1="66" x2="100" y2="74" stroke="#1d4ed8" stroke-width="1"/>

  <!-- Afferent arteriole (in) -->
  <path d="M20 70 Q60 68 98 76" fill="none" stroke="#dc2626" stroke-width="3" marker-end="url(#arrR)"/>
  <text x="5" y="58" fill="#dc2626" font-size="10">Afferent</text>
  <text x="5" y="70" fill="#dc2626" font-size="10">arteriole</text>

  <!-- Efferent arteriole (out) -->
  <path d="M98 86 Q55 100 20 105" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#arrR)"/>
  <text x="5" y="118" fill="#dc2626" font-size="10">Efferent arteriole</text>

  <!-- Proximal convoluted tubule -->
  <path d="M155 72 Q200 40 240 70 Q270 90 260 130 Q250 165 220 165" fill="none" stroke="#059669" stroke-width="3"/>
  <text x="230" y="45" fill="#059669" font-size="10" font-weight="bold">Proximal</text>
  <text x="228" y="57" fill="#059669" font-size="10">convoluted</text>
  <text x="235" y="69" fill="#059669" font-size="10">tubule</text>

  <!-- Loop of Henle (descending and ascending) -->
  <path d="M220 165 Q215 220 220 280 Q225 330 240 340 Q255 350 270 340 Q285 330 290 280 Q300 220 295 165" fill="none" stroke="#7c3aed" stroke-width="3"/>
  <text x="230" y="360" fill="#7c3aed" font-size="10" font-weight="bold">Loop of Henle</text>
  <line x1="255" y1="356" x2="255" y2="342" stroke="#7c3aed" stroke-width="1"/>

  <!-- Distal convoluted tubule -->
  <path d="M295 165 Q320 140 360 160 Q390 175 390 210 Q390 240 360 245" fill="none" stroke="#d97706" stroke-width="3"/>
  <text x="370" y="145" fill="#d97706" font-size="10" font-weight="bold">Distal convoluted</text>
  <text x="380" y="158" fill="#d97706" font-size="10">tubule</text>

  <!-- Collecting duct -->
  <path d="M360 245 Q365 290 368 340 L368 390" fill="none" stroke="#64748b" stroke-width="4"/>
  <text x="375" y="310" fill="#64748b" font-size="10" font-weight="bold">Collecting</text>
  <text x="380" y="322" fill="#64748b" font-size="10">duct</text>

  <!-- CORTEX / MEDULLA dividing line -->
  <line x1="0" y1="190" x2="600" y2="190" stroke="#aaa" stroke-width="1.5" stroke-dasharray="8 4"/>
  <text x="440" y="185" fill="#888" font-size="11">CORTEX</text>
  <text x="440" y="210" fill="#888" font-size="11">MEDULLA</text>

  <!-- Peritubular capillaries / reabsorption arrows -->
  <path d="M270 120 Q310 110 340 120" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="305" y="105" fill="#dc2626" font-size="10">Peritubular</text>
  <text x="310" y="116" fill="#dc2626" font-size="10">capillaries</text>

  <defs>
    <marker id="arrR" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'How Urine is Formed — Two Key Processes', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Step 1 — Ultrafiltration (in Bowman\'s capsule / glomerulus)',
        text: 'High <strong>blood pressure</strong> in the glomerulus forces small molecules out of the blood into the Bowman\'s capsule.<br/><br/><strong>Filtered (passes through):</strong> water, glucose, urea, mineral ions, uric acid<br/><br/><strong>Retained in blood (too large):</strong> red blood cells, white blood cells, platelets, plasma proteins<br/><br/>The fluid that enters the Bowman\'s capsule is called <strong>glomerular filtrate</strong>.'
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Step 2 — Selective Reabsorption (in proximal tubule, loop of Henle, distal tubule)',
        text: 'As filtrate flows through the tubule, <strong>useful substances are reabsorbed</strong> back into surrounding capillaries:<br/><br/>• <strong>All glucose</strong> — reabsorbed by active transport (none should appear in urine)<br/>• <strong>Most water</strong> — reabsorbed by osmosis<br/>• <strong>Useful mineral ions</strong> — reabsorbed by active transport<br/><br/><strong>Not reabsorbed:</strong> urea (small amounts reabsorbed, most remains in filtrate and is excreted in urine)'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Composition of Urine', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Water</strong> — the main component (~95%)' },
          { text: '<strong>Urea</strong> — the main nitrogenous waste product (~2%)' },
          { text: '<strong>Mineral salts</strong> — sodium chloride and other ions (~2%)' },
          { text: '<strong>No glucose</strong> — all glucose is reabsorbed (glucose in urine indicates diabetes mellitus)' },
          { text: '<strong>No protein</strong> — proteins are too large to be filtered' },
          { text: '<strong>No red blood cells</strong> — these remain in the blood (blood in urine indicates kidney damage)' }
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Clinical Significance',
        text: '<strong>Glucose in urine</strong> → suggests <strong>diabetes mellitus</strong> (blood glucose too high; kidneys cannot reabsorb all of it).<br/><strong>Protein in urine</strong> → suggests <strong>kidney damage</strong> (glomerular membrane damaged, large molecules leak through).<br/><strong>Blood in urine</strong> → suggests <strong>kidney damage or infection</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The kidney filters blood by ultrafiltration (forcing small molecules into Bowman\'s capsule), then selectively reabsorbs all glucose, most water and useful ions back into the blood. Urea remains and is excreted in urine. Urine contains water, urea, and salts — no glucose or protein normally.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Nephron: ultrafiltration → filtrate in Bowman\'s capsule; selective reabsorption → glucose/water returned to blood; urea excreted in urine.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What is ultrafiltration, and where does it occur?', answer: 'High blood pressure forces small molecules (glucose, water, urea, ions) from the glomerulus into the Bowman\'s capsule. Occurs in the cortex of the kidney.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Which substances are selectively reabsorbed in the nephron?', answer: 'All glucose (by active transport), most water (by osmosis), and useful mineral ions.' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What does normal urine contain?', answer: 'Water, urea, and mineral salts. No glucose, protein, or blood cells.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'What does glucose in urine suggest, and why does it occur?', answer: 'It suggests diabetes mellitus. Blood glucose is too high for all of it to be reabsorbed, so some is excreted in urine.' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'Name the three main regions of the kidney.', answer: 'Cortex, medulla, and renal pelvis.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_13_13_1;
