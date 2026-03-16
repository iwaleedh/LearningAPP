export const note_olevel_biology_2_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/2 Organisation Of The Organism/2-1-1-cell-structure.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify and describe the structures of animal, plant, and bacterial cells; compare their organelles; and distinguish between prokaryotic and eukaryotic cells.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Animal Cell Structure', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Animal Cell Organelles',
        text: '<strong>Cell membrane:</strong> thin, flexible layer surrounding the cell; controls what enters and exits (partially permeable).<br/><br/><strong>Cytoplasm:</strong> jelly-like fluid filling the cell; where many chemical reactions take place.<br/><br/><strong>Nucleus:</strong> large organelle containing DNA (genetic material); controls cell activities and protein synthesis.<br/><br/><strong>Mitochondria:</strong> site of aerobic respiration; where most ATP (energy) is produced. Has a folded inner membrane (cristae) to increase surface area.<br/><br/><strong>Ribosomes:</strong> tiny structures where proteins are synthesised (made); found in cytoplasm and on rough endoplasmic reticulum.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Plant Cell — Additional Structures', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Additional Plant Cell Structures (not in animal cells)',
        text: '<strong>Cell wall:</strong> rigid outer layer made of <strong>cellulose</strong>; provides support and shape; fully permeable (lets everything through).<br/><br/><strong>Large permanent vacuole:</strong> membrane-bound sac filled with cell sap (water and dissolved substances); maintains turgor pressure.<br/><br/><strong>Chloroplasts:</strong> contain <strong>chlorophyll</strong> (green pigment) which absorbs light for photosynthesis; have their own DNA and ribosomes; found mainly in leaf cells.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Bacterial Cell Structure', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bacterial Cell — Prokaryotic',
        text: '<strong>Cell wall:</strong> present but made of <strong>murein</strong> (not cellulose).<br/><strong>Cell membrane:</strong> controls entry/exit of substances.<br/><strong>Cytoplasm:</strong> contains all cellular contents.<br/><strong>Circular DNA:</strong> genetic material is a single circular chromosome, NOT enclosed in a nuclear membrane.<br/><strong>Ribosomes:</strong> smaller than eukaryotic ribosomes; site of protein synthesis.<br/><br/><strong>NOT present in bacteria:</strong> true nucleus, mitochondria, chloroplasts, vacuoles.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Labelled diagrams of animal cell (left) and plant cell (right)',
        svg: `<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="580" height="320" fill="#f0fdf4" rx="12"/>
  <!-- ANIMAL CELL -->
  <text x="140" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Animal Cell</text>
  <ellipse cx="140" cy="155" rx="110" ry="90" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <!-- nucleus -->
  <ellipse cx="125" cy="145" rx="38" ry="28" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
  <text x="125" y="149" text-anchor="middle" font-size="9" fill="#1e3a8a" font-weight="bold">Nucleus</text>
  <!-- mitochondria -->
  <ellipse cx="200" cy="120" rx="20" ry="10" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="226" y="118" font-size="9" fill="#92400e">Mitochondria</text>
  <!-- ribosomes -->
  <circle cx="170" cy="185" r="4" fill="#f87171"/>
  <circle cx="180" cy="178" r="4" fill="#f87171"/>
  <text x="186" y="194" font-size="9" fill="#991b1b">Ribosomes</text>
  <!-- Cell membrane label -->
  <text x="30" y="100" font-size="9" fill="#1d4ed8">Cell</text>
  <text x="26" y="112" font-size="9" fill="#1d4ed8">membrane</text>
  <line x1="52" y1="106" x2="74" y2="96" stroke="#1d4ed8" stroke-width="1"/>
  <!-- Cytoplasm label -->
  <text x="100" y="210" font-size="9" fill="#1e40af">Cytoplasm</text>

  <!-- PLANT CELL -->
  <text x="430" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#166534">Plant Cell</text>
  <rect x="305" y="48" width="240" height="198" rx="4" fill="#d1fae5" stroke="#166534" stroke-width="3"/>
  <!-- inner membrane -->
  <rect x="314" y="57" width="222" height="181" rx="2" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <!-- nucleus -->
  <ellipse cx="390" cy="140" rx="38" ry="28" fill="#a7f3d0" stroke="#059669" stroke-width="2"/>
  <text x="390" y="144" text-anchor="middle" font-size="9" fill="#065f46" font-weight="bold">Nucleus</text>
  <!-- chloroplasts -->
  <ellipse cx="470" cy="100" rx="18" ry="9" fill="#4ade80" stroke="#166534" stroke-width="1.5"/>
  <ellipse cx="470" cy="130" rx="18" ry="9" fill="#4ade80" stroke="#166534" stroke-width="1.5"/>
  <text x="494" y="116" font-size="9" fill="#166534">Chloroplasts</text>
  <!-- vacuole -->
  <ellipse cx="430" cy="185" rx="42" ry="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="430" y="189" text-anchor="middle" font-size="9" fill="#0c4a6e">Vacuole</text>
  <!-- cell wall label -->
  <text x="290" y="148" font-size="9" fill="#166534" text-anchor="end">Cell</text>
  <text x="292" y="160" font-size="9" fill="#166534" text-anchor="end">wall</text>
  <line x1="295" y1="154" x2="310" y2="148" stroke="#166534" stroke-width="1"/>
  <!-- mitochondria -->
  <ellipse cx="350" cy="100" rx="16" ry="8" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="330" y="86" font-size="9" fill="#92400e">Mitochondria</text>
</svg>`
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of animal, plant, and bacterial cells',
        headers: ['Feature', 'Animal Cell', 'Plant Cell', 'Bacterial Cell'],
        rows: [
          ['Cell wall', 'Absent', 'Present (cellulose)', 'Present (murein, not cellulose)'],
          ['Cell membrane', 'Present', 'Present', 'Present'],
          ['Nucleus (with membrane)', 'Present', 'Present', 'Absent (circular DNA only)'],
          ['Cytoplasm', 'Present', 'Present', 'Present'],
          ['Mitochondria', 'Present', 'Present', 'Absent'],
          ['Chloroplasts', 'Absent', 'Present (in leaf cells)', 'Absent'],
          ['Large permanent vacuole', 'Absent (small temporary vacuoles may exist)', 'Present', 'Absent'],
          ['Ribosomes', 'Present (large)', 'Present (large)', 'Present (smaller)'],
          ['Cell type', 'Eukaryotic', 'Eukaryotic', 'Prokaryotic']
        ]
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Prokaryotic vs Eukaryotic Cells',
        text: '<strong>Eukaryotic cells</strong> (animals, plants, fungi, protoctists): have a <strong>true nucleus</strong> enclosed by a nuclear membrane; have membrane-bound organelles (mitochondria, etc.).<br/><br/><strong>Prokaryotic cells</strong> (bacteria): have <strong>NO true nucleus</strong>; genetic material (circular DNA) floats freely in cytoplasm; NO membrane-bound organelles. Generally much smaller than eukaryotic cells.'
      }
    },
    {
      id: 'call-5',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not say bacteria have "no nucleus" — be precise: they have <strong>no membrane-bound nucleus</strong>. Their circular DNA is present but not enclosed by a membrane. Also, plant cells do NOT always have chloroplasts — only cells exposed to light (e.g. leaf cells) have them. Root cells and other non-photosynthetic plant cells lack chloroplasts.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Animal cells have a membrane, cytoplasm, nucleus, mitochondria and ribosomes. Plant cells have all of these plus a cellulose cell wall, large permanent vacuole, and chloroplasts. Bacterial cells lack a true nucleus and membrane-bound organelles (prokaryotic). Animal and plant cells are eukaryotic.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Animal cells: membrane, cytoplasm, nucleus, mitochondria, ribosomes. Plant cells add: cellulose cell wall, permanent vacuole, chloroplasts. Bacteria: prokaryotic — no true nucleus, no mitochondria.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-2',
        prompt: 'State THREE structures found in plant cells but NOT in animal cells.',
        answer: 'Cell wall (cellulose), large permanent vacuole, and chloroplasts.'
      },
      {
        id: 'cue-2',
        blockId: 'call-4',
        prompt: 'State the difference between prokaryotic and eukaryotic cells.',
        answer: 'Eukaryotic cells have a true nucleus enclosed by a membrane and have membrane-bound organelles. Prokaryotic cells have no true nucleus (DNA is circular and free in cytoplasm) and no membrane-bound organelles.'
      },
      {
        id: 'cue-3',
        blockId: 'call-1',
        prompt: 'What is the function of mitochondria in a cell?',
        answer: 'Mitochondria are the site of aerobic respiration, where most ATP (energy) is produced from glucose.'
      },
      {
        id: 'cue-4',
        blockId: 'tbl-1',
        prompt: 'What material makes up the cell wall of plant cells, and how does this differ from bacterial cell walls?',
        answer: 'Plant cell walls are made of cellulose. Bacterial cell walls are made of murein (not cellulose).'
      },
      {
        id: 'cue-5',
        blockId: 'call-5',
        prompt: 'Do all plant cells have chloroplasts? Explain your answer.',
        answer: 'No. Only plant cells exposed to light (e.g. leaf mesophyll cells) have chloroplasts. Root cells and other non-photosynthetic plant cells do not have chloroplasts.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_2_2_0;
