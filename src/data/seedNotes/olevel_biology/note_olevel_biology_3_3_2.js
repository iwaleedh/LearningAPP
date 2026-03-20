export const note_olevel_biology_3_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/3 Movement Into And Out Of Cells/3-3-1-active-transport.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define active transport, explain why it requires energy, and describe biological examples including mineral ion absorption by root hair cells and glucose absorption in the small intestine.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Active Transport?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Active Transport',
        text: '<strong>Active transport</strong> is the movement of molecules or ions across a cell membrane <strong>against</strong> a concentration gradient (from low to high concentration), using <strong>energy released from respiration (ATP)</strong> and <strong>carrier proteins</strong>.<br/><br/>Unlike diffusion and osmosis, active transport moves substances <strong>against</strong> their concentration gradient — from where they are in lower concentration to where they are in higher concentration.'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Active transport requires two key components: (1) <strong>carrier proteins</strong> embedded in the cell membrane that bind to specific molecules and transport them across, and (2) <strong>ATP (adenosine triphosphate)</strong> — energy released from respiration — to power the process. The carrier proteins change shape to move molecules across the membrane.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Active transport — carrier proteins move molecules against the concentration gradient using ATP energy',
        svg: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="11">
  <rect width="500" height="260" fill="#2d1b69" rx="12"/>
  <text x="250" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#6d28d9">Active Transport</text>

  <!-- Membrane -->
  <rect x="220" y="36" width="60" height="185" fill="#2d1b69" rx="6" opacity="0.3"/>
  <rect x="220" y="36" width="60" height="185" fill="none" stroke="#7c3aed" stroke-width="2" rx="6"/>
  <text x="250" y="232" text-anchor="middle" font-size="9" fill="#5b21b6">Cell membrane</text>

  <!-- Phospholipid bilayer representation -->
  <circle cx="235" cy="60" r="6" fill="#2d1b69"/>
  <rect x="232" y="66" width="6" height="15" fill="#2d1b69"/>
  <circle cx="248" cy="60" r="6" fill="#2d1b69"/>
  <rect x="245" y="66" width="6" height="15" fill="#2d1b69"/>
  <circle cx="235" cy="205" r="6" fill="#2d1b69"/>
  <rect x="232" y="185" width="6" height="20" fill="#2d1b69"/>
  <circle cx="248" cy="205" r="6" fill="#2d1b69"/>
  <rect x="245" y="185" width="6" height="20" fill="#2d1b69"/>

  <!-- Carrier protein -->
  <ellipse cx="250" cy="130" rx="22" ry="50" fill="#7c3aed" opacity="0.8" rx="6"/>
  <text x="250" y="134" text-anchor="middle" font-size="9" fill="#1e293b" font-weight="bold">Carrier</text>
  <text x="250" y="145" text-anchor="middle" font-size="9" fill="#1e293b">protein</text>

  <!-- LOW concentration side (left) -->
  <text x="105" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">LOW</text>
  <text x="105" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">concentration</text>
  <circle cx="70" cy="120" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="110" cy="140" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="80" cy="165" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <text x="105" y="195" text-anchor="middle" font-size="10" fill="#374151">(outside cell /</text>
  <text x="105" y="207" text-anchor="middle" font-size="10" fill="#374151">low [ion])</text>

  <!-- HIGH concentration side (right) -->
  <text x="395" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">HIGH</text>
  <text x="395" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">concentration</text>
  <circle cx="340" cy="90" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="380" cy="110" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="420" cy="90" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="355" cy="140" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="400" cy="150" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="445" cy="130" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="360" cy="170" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <circle cx="430" cy="165" r="8" fill="#0a4a1a" stroke="#15803d" stroke-width="1.5"/>
  <text x="395" y="200" text-anchor="middle" font-size="10" fill="#374151">(inside cell /</text>
  <text x="395" y="212" text-anchor="middle" font-size="10" fill="#374151">high [ion])</text>

  <!-- Arrow (against gradient) -->
  <defs>
    <marker id="arrowAT" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/>
    </marker>
  </defs>
  <line x1="155" y1="128" x2="218" y2="128" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arrowAT)"/>
  <text x="185" y="120" text-anchor="middle" font-size="10" fill="#7c3aed" font-weight="bold">AGAINST gradient</text>

  <!-- ATP label -->
  <rect x="175" y="148" width="60" height="22" rx="6" fill="#44370a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="205" y="163" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">ATP needed</text>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Biological Examples', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Mineral ion absorption by root hair cells:</strong> Mineral ions (e.g. nitrate, magnesium) are present in very low concentrations in soil water compared to inside root cells. Active transport moves these ions against their concentration gradient into root hair cells, using energy from respiration.' },
          { text: '<strong>Glucose absorption in the small intestine:</strong> After digestion, glucose concentration in the intestinal lumen may fall lower than in the blood. Active transport ensures glucose is still absorbed by cells lining the small intestine (using carrier proteins and ATP), even when its concentration in the lumen is lower than in the blood.' },
          { text: '<strong>Reabsorption in kidney tubules:</strong> Useful substances (e.g. glucose, some mineral ions) are actively reabsorbed from the tubule fluid back into the blood, even against a concentration gradient.' }
        ]
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Comparison of Transport Mechanisms', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of diffusion, osmosis, and active transport',
        headers: ['Feature', 'Diffusion', 'Osmosis', 'Active Transport'],
        rows: [
          ['Substance moved', 'Molecules/ions (not water specifically)', 'Water molecules only', 'Molecules/ions (specific)'],
          ['Direction', 'High → low concentration (down gradient)', 'High → low water potential (down gradient)', 'Low → high concentration (against gradient)'],
          ['Energy (ATP) required?', 'No (passive)', 'No (passive)', 'Yes (active)'],
          ['Carrier proteins required?', 'Not usually', 'No', 'Yes — essential'],
          ['Membrane required?', 'Not always (gases can diffuse through air)', 'Yes — partially permeable', 'Yes — cell membrane'],
          ['Example', 'O₂ into alveoli', 'Water into root hair cells', 'Nitrate ions into root hair cells']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not confuse active transport with facilitated diffusion. Active transport requires <strong>ATP energy</strong> and moves substances <strong>against</strong> the concentration gradient. Facilitated diffusion uses carrier proteins but is still passive (no ATP, moves <strong>down</strong> the gradient). At IGCSE, the key distinguishing feature of active transport is that it requires <strong>energy from respiration</strong>.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If a question asks why a substance can still be absorbed even when its concentration is higher inside the cell than outside, the answer is <strong>active transport</strong>. You should state: (1) movement is against the concentration gradient, (2) carrier proteins are used, (3) energy from respiration (ATP) is required.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Active transport moves molecules or ions against a concentration gradient (low to high), using carrier proteins embedded in the cell membrane and energy released from respiration (ATP). It is essential where substances must be absorbed against a gradient — such as mineral ions into root hair cells and glucose absorption in the intestine. Unlike diffusion and osmosis, it requires metabolic energy.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Active transport: movement against concentration gradient, requires ATP and carrier proteins. Examples: mineral ions into root hairs, glucose in intestine.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define active transport.',
        answer: 'Active transport is the movement of molecules or ions across a cell membrane against a concentration gradient (from low to high concentration), using energy from respiration (ATP) and carrier proteins.'
      },
      {
        id: 'cue-2',
        blockId: 'list-1',
        prompt: 'Give TWO biological examples of active transport.',
        answer: '1. Mineral ions (e.g. nitrate) absorbed by root hair cells from dilute soil water. 2. Glucose absorbed from the small intestine into the blood when the glucose concentration in the lumen is lower than in the blood.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'State TWO differences between diffusion and active transport.',
        answer: '1. Diffusion moves substances down a concentration gradient; active transport moves them against it. 2. Diffusion requires no energy (passive); active transport requires ATP energy from respiration.'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'Why must root hair cells carry out active transport to absorb mineral ions?',
        answer: 'Mineral ions are present in very low concentrations in soil water but at higher concentrations inside root cells. Active transport is needed to move ions against this concentration gradient using energy from respiration.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_3_3_2;
