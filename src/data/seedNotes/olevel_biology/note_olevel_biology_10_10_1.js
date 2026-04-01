export const note_olevel_biology_10_10_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/10 Diseases And Immunity/10-1-2-body-defences-against-pathogens.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the body\'s non-specific and specific defences against pathogens, including the roles of skin, mucous membranes, stomach acid, phagocytes, and lymphocytes.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Levels of Defence', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The body has a layered defence system against pathogens. The first line of defence prevents pathogens from entering the body. If pathogens breach this, the second line involves non-specific immune responses. The third line is the specific immune response involving lymphocytes and antibodies.' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'First Line of Defence — Physical and Chemical Barriers', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Physical and chemical barriers that prevent pathogen entry',
        headers: ['Defence', 'Location', 'How it works'],
        rows: [
          ['Skin', 'Covers entire body surface', 'Tough, waterproof outer layer (keratin) — physical barrier. Sebaceous glands secrete sebum (slightly acidic, pH ~5.5) which inhibits bacterial growth.'],
          ['Mucus and goblet cells', 'Airways (nose, trachea, bronchi); gut lining', 'Goblet cells secrete sticky mucus that traps pathogens and dust particles before they reach the lungs or bloodstream.'],
          ['Cilia', 'Lining of trachea and bronchi', 'Tiny hair-like projections beat rhythmically to sweep mucus (with trapped pathogens) upward toward the throat to be swallowed or coughed out.'],
          ['Stomach acid', 'Stomach', 'Hydrochloric acid (HCl, pH ~2) kills most pathogens swallowed with food or swept from the airways.'],
          ['Lysozyme (enzyme)', 'Tears, saliva, mucus', 'Enzyme that breaks down bacterial cell walls, destroying many bacteria on mucous membranes and in tears.'],
          ['Blood clotting', 'At wound sites', 'When skin is cut, platelets and clotting factors form a clot (scab) sealing the wound to prevent pathogen entry.']
        ]
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Blood Clotting — Sealing the Barrier',
        text: 'When skin is damaged:<br/>1. <strong>Platelets</strong> are activated and clump at the wound site.<br/>2. A cascade of reactions converts <strong>fibrinogen</strong> (soluble plasma protein) into <strong>fibrin</strong> (insoluble fibres).<br/>3. Fibrin strands form a mesh that traps red blood cells, forming a <strong>clot</strong>.<br/>4. The clot dries to form a <strong>scab</strong>, preventing further pathogen entry and water loss.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Second Line of Defence — Non-Specific Immune Response', level: 2 }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Phagocytes and Phagocytosis', level: 3 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Phagocytosis',
        text: '<strong>Phagocytes</strong> (e.g. neutrophils, macrophages) are white blood cells that engulf and digest pathogens. This process is called <strong>phagocytosis</strong>:<br/>1. Phagocyte detects chemicals released by pathogens (chemotaxis) and moves toward them.<br/>2. Phagocyte surrounds the pathogen with extensions of its cell surface membrane, engulfing it into a <strong>vacuole</strong> (phagosome).<br/>3. <strong>Lysosomes</strong> (containing digestive enzymes) fuse with the vacuole.<br/>4. Enzymes digest and destroy the pathogen.<br/>5. Harmless products are absorbed or expelled from the cell.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Phagocytosis: a phagocyte engulfs and digests a pathogen',
        svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="680" height="320" fill="#0f172a" rx="12"/>
  <text x="340" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Phagocytosis — Step by Step</text>
  <!-- Step labels -->
  <text x="80" y="56" text-anchor="middle" font-size="11" fill="#64748b">Step 1: Detection</text>
  <text x="240" y="56" text-anchor="middle" font-size="11" fill="#64748b">Step 2: Engulfment</text>
  <text x="400" y="56" text-anchor="middle" font-size="11" fill="#64748b">Step 3: Vacuole forms</text>
  <text x="560" y="56" text-anchor="middle" font-size="11" fill="#64748b">Step 4: Digestion</text>
  <!-- Step 1: Phagocyte approaching -->
  <ellipse cx="80" cy="155" rx="52" ry="42" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <text x="80" y="148" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">Phagocyte</text>
  <text x="80" y="163" text-anchor="middle" font-size="9" fill="#1e40af">(nucleus)</text>
  <!-- nucleus -->
  <ellipse cx="80" cy="165" rx="16" ry="10" fill="#1250a0" stroke="#1d4ed8" stroke-width="1"/>
  <!-- pathogen -->
  <ellipse cx="140" cy="130" rx="14" ry="10" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="140" y="118" text-anchor="middle" font-size="9" fill="#dc2626">Bacterium</text>
  <!-- Step 2: Engulfing -->
  <path d="M200 120 Q232 80 270 110 Q300 95 310 120 Q340 90 340 155 Q340 210 270 210 Q200 210 200 155 Z" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <ellipse cx="254" cy="170" rx="16" ry="10" fill="#1250a0" stroke="#1d4ed8" stroke-width="1"/>
  <ellipse cx="275" cy="112" rx="14" ry="10" fill="#7f1d1d" stroke="#dc2626" stroke-width="1.5"/>
  <text x="270" y="88" text-anchor="middle" font-size="9" fill="#dc2626">Engulfing</text>
  <!-- arrow -->
  <line x1="148" y1="155" x2="192" y2="155" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <!-- Step 3: Vacuole -->
  <ellipse cx="400" cy="155" rx="52" ry="42" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <ellipse cx="400" cy="155" rx="18" ry="18" fill="#3d1212" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="400" y="159" text-anchor="middle" font-size="9" fill="#dc2626">Phagosome</text>
  <ellipse cx="415" cy="175" rx="13" ry="9" fill="#1250a0" stroke="#1d4ed8" stroke-width="1"/>
  <text x="400" y="215" text-anchor="middle" font-size="9" fill="#64748b">Vacuole seals</text>
  <!-- Lysosome -->
  <ellipse cx="380" cy="135" rx="10" ry="8" fill="#2d1b69" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="356" y="123" text-anchor="middle" font-size="8" fill="#1d4ed8">Lysosome</text>
  <line x1="341" y1="155" x2="344" y2="155" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <!-- Step 4: Digestion -->
  <ellipse cx="560" cy="155" rx="52" ry="42" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
  <ellipse cx="560" cy="148" rx="18" ry="18" fill="#0a3020" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="560" y="146" text-anchor="middle" font-size="8.5" fill="#15803d" font-weight="bold">Digested</text>
  <text x="560" y="158" text-anchor="middle" font-size="8" fill="#15803d">products</text>
  <ellipse cx="575" cy="175" rx="13" ry="9" fill="#1250a0" stroke="#1d4ed8" stroke-width="1"/>
  <text x="560" y="215" text-anchor="middle" font-size="9" fill="#64748b">Enzymes digest pathogen</text>
  <line x1="457" y1="155" x2="503" y2="155" stroke="#475569" stroke-width="1.5" marker-end="url(#a1)"/>
  <defs>
    <marker id="a1" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#475569"/></marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Third Line of Defence — Lymphocytes and Specific Immunity', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Lymphocytes',
        text: '<strong>Lymphocytes</strong> are white blood cells that carry out the specific immune response. There are two main types:<br/><strong>B-lymphocytes</strong> — produce <strong>antibodies</strong> (proteins that bind specifically to antigens on pathogens, marking them for destruction).<br/><strong>T-lymphocytes</strong> — coordinate the immune response and destroy infected cells directly.'
      }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'When a pathogen enters the body, lymphocytes recognise its <strong>antigens</strong> (foreign proteins on the pathogen\'s surface). B-lymphocytes then rapidly divide (clonal expansion) and differentiate into <strong>plasma cells</strong> that secrete large quantities of specific antibodies, and <strong>memory cells</strong> that persist long-term.' }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of phagocytes and lymphocytes',
        headers: ['Feature', 'Phagocytes', 'Lymphocytes'],
        rows: [
          ['Type of response', 'Non-specific (attack any pathogen)', 'Specific (tailored to one antigen)'],
          ['Main action', 'Engulf and digest pathogens (phagocytosis)', 'Produce antibodies (B cells) or destroy infected cells (T cells)'],
          ['Speed of response', 'Fast — first responders at infection site', 'Slower — takes days for full antibody production'],
          ['Memory', 'No immunological memory', 'Produce memory cells for long-term immunity'],
          ['Location', 'Blood and tissues (move to infection site)', 'Lymph nodes, spleen, blood']
        ]
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Antibodies',
        text: 'Antibodies are <strong>proteins</strong> made by lymphocytes (B cells). They are <strong>specific</strong> — each antibody shape matches one particular antigen, like a lock and key. Antibodies can: agglutinate (clump) pathogens, neutralise toxins, or flag pathogens for phagocytosis.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The body defends against pathogens through: (1) Barriers — skin (physical + acidic sebum), mucus, cilia, stomach acid. (2) Non-specific — phagocytes engulf and digest any pathogen by phagocytosis. (3) Specific — lymphocytes: B cells produce antibodies matching specific antigens; T cells coordinate the response and destroy infected cells. Memory cells provide long-term protection.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Body defences: skin/mucus/cilia (physical barriers), stomach acid (chemical barrier), phagocytes (engulf pathogens), lymphocytes (antibodies + memory cells).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Describe how cilia defend against pathogens in the airways.', answer: 'Cilia are tiny hair-like projections lining the trachea and bronchi. They beat rhythmically to sweep mucus (which has trapped pathogens and dust) upward toward the throat, where it is swallowed and killed by stomach acid.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Outline the four steps of phagocytosis.', answer: '1. Phagocyte detects and moves toward pathogen. 2. Cell surface membrane engulfs the pathogen into a vacuole (phagosome). 3. Lysosomes fuse with the vacuole, releasing digestive enzymes. 4. Enzymes digest and destroy the pathogen; harmless products are expelled or absorbed.' },
      { id: 'cue-3', blockId: 'call-3', prompt: 'What is the difference between B-lymphocytes and T-lymphocytes?', answer: 'B-lymphocytes produce antibodies that bind to specific antigens on pathogens, marking them for destruction. T-lymphocytes coordinate the immune response and directly destroy infected host cells.' },
      { id: 'cue-4', blockId: 'tbl-1', prompt: 'Why is sebum on the skin important as a defence?', answer: 'Sebum is a slightly acidic secretion (pH ~5.5) from sebaceous glands. Its acidity inhibits the growth of bacteria and fungi on the skin surface, preventing infection.' },
      { id: 'cue-5', blockId: 'tbl-2', prompt: 'How do phagocytes and lymphocytes differ in their immune responses?', answer: 'Phagocytes provide a fast, non-specific response — they engulf any pathogen. Lymphocytes provide a slower, specific response — they produce antibodies tailored to one antigen and create memory cells for long-term immunity.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_10_10_1;
