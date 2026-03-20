export const note_olevel_physics_4_3_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/4 Electricity And Magnetism/4-3-6-logic-gates.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the truth tables for AND, OR, NOT, NAND, and NOR gates and trace outputs through combined logic circuits.' },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Logic Gates — Introduction', level: 2 },
    },
    {
      id: 'para-intro',
      type: 'paragraph',
      data: {
        text: 'A <strong>logic gate</strong> is a digital circuit with one or two binary inputs (0 or 1) and a single output determined by the gate type. Logic gates are the building blocks of all digital electronics — computers, phones, and controllers.',
      },
    },
    {
      id: 'h-and',
      type: 'heading',
      data: { text: 'AND Gate', level: 2 },
    },
    {
      id: 'para-and',
      type: 'paragraph',
      data: { text: 'Output is 1 <strong>only if A AND B are both 1</strong>. Symbol: D-shape flat on left.' },
    },
    {
      id: 'table-and',
      type: 'comparisonTable',
      data: {
        caption: 'AND Gate Truth Table',
        headers: ['A', 'B', 'Output (A AND B)'],
        rows: [['0','0','0'],['0','1','0'],['1','0','0'],['1','1','1']],
      },
    },
    {
      id: 'h-or',
      type: 'heading',
      data: { text: 'OR Gate', level: 2 },
    },
    {
      id: 'para-or',
      type: 'paragraph',
      data: { text: 'Output is 1 if <strong>A OR B (or both) are 1</strong>. Symbol: curved D-shape.' },
    },
    {
      id: 'table-or',
      type: 'comparisonTable',
      data: {
        caption: 'OR Gate Truth Table',
        headers: ['A', 'B', 'Output (A OR B)'],
        rows: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','1']],
      },
    },
    {
      id: 'h-not',
      type: 'heading',
      data: { text: 'NOT Gate (Inverter)', level: 2 },
    },
    {
      id: 'para-not',
      type: 'paragraph',
      data: { text: 'ONE input only. Output is the <strong>inverse</strong> of input. Symbol: triangle with small circle at output.' },
    },
    {
      id: 'table-not',
      type: 'comparisonTable',
      data: {
        caption: 'NOT Gate Truth Table',
        headers: ['A', 'Output (NOT A)'],
        rows: [['0','1'],['1','0']],
      },
    },
    {
      id: 'h-nand',
      type: 'heading',
      data: { text: 'NAND Gate', level: 2 },
    },
    {
      id: 'para-nand',
      type: 'paragraph',
      data: { text: 'NOT-AND. Output is <strong>0 only when both inputs are 1</strong> (AND then inverted). Symbol: AND gate with circle at output.' },
    },
    {
      id: 'table-nand',
      type: 'comparisonTable',
      data: {
        caption: 'NAND Gate Truth Table',
        headers: ['A', 'B', 'Output (A NAND B)'],
        rows: [['0','0','1'],['0','1','1'],['1','0','1'],['1','1','0']],
      },
    },
    {
      id: 'h-nor',
      type: 'heading',
      data: { text: 'NOR Gate', level: 2 },
    },
    {
      id: 'para-nor',
      type: 'paragraph',
      data: { text: 'NOT-OR. Output is <strong>1 only when both inputs are 0</strong> (OR then inverted). Symbol: OR gate with circle at output.' },
    },
    {
      id: 'table-nor',
      type: 'comparisonTable',
      data: {
        caption: 'NOR Gate Truth Table',
        headers: ['A', 'B', 'Output (A NOR B)'],
        rows: [['0','0','1'],['0','1','0'],['1','0','0'],['1','1','0']],
      },
    },
    {
      id: 'svg-gates',
      type: 'svg',
      data: {
        caption: 'Logic gate symbols: AND, OR, NOT, NAND, NOR',
        svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <!-- AND gate -->
  <g transform="translate(10,10)">
    <text x="20" y="12" fill="#6366f1" font-weight="bold" font-size="11">AND</text>
    <line x1="0" y1="35" x2="20" y2="35" stroke="#333" stroke-width="2"/>
    <line x1="0" y1="55" x2="20" y2="55" stroke="#333" stroke-width="2"/>
    <path d="M20,25 L20,65 C50,65 65,55 65,45 C65,35 50,25 20,25 Z" fill="#2d2f72" stroke="#6366f1" stroke-width="2"/>
    <line x1="65" y1="45" x2="80" y2="45" stroke="#333" stroke-width="2"/>
    <text x="25" y="49" fill="#6366f1">AND</text>
  </g>
  <!-- OR gate -->
  <g transform="translate(110,10)">
    <text x="22" y="12" fill="#10b981" font-weight="bold" font-size="11">OR</text>
    <line x1="0" y1="35" x2="18" y2="35" stroke="#333" stroke-width="2"/>
    <line x1="0" y1="55" x2="18" y2="55" stroke="#333" stroke-width="2"/>
    <path d="M10,25 Q30,25 65,45 Q30,65 10,65 Q25,45 10,25 Z" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
    <line x1="65" y1="45" x2="80" y2="45" stroke="#333" stroke-width="2"/>
    <text x="28" y="49" fill="#10b981">OR</text>
  </g>
  <!-- NOT gate -->
  <g transform="translate(215,10)">
    <text x="18" y="12" fill="#f59e0b" font-weight="bold" font-size="11">NOT</text>
    <line x1="0" y1="45" x2="15" y2="45" stroke="#333" stroke-width="2"/>
    <polygon points="15,25 55,45 15,65" fill="#44370a" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="59" cy="45" r="5" fill="#44370a" stroke="#f59e0b" stroke-width="2"/>
    <line x1="64" y1="45" x2="80" y2="45" stroke="#333" stroke-width="2"/>
    <text x="22" y="49" fill="#f59e0b">NOT</text>
  </g>
  <!-- NAND gate -->
  <g transform="translate(10,110)">
    <text x="18" y="12" fill="#ef4444" font-weight="bold" font-size="11">NAND</text>
    <line x1="0" y1="35" x2="20" y2="35" stroke="#333" stroke-width="2"/>
    <line x1="0" y1="55" x2="20" y2="55" stroke="#333" stroke-width="2"/>
    <path d="M20,25 L20,65 C50,65 63,55 63,45 C63,35 50,25 20,25 Z" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
    <circle cx="67" cy="45" r="5" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
    <line x1="72" y1="45" x2="85" y2="45" stroke="#333" stroke-width="2"/>
    <text x="25" y="49" fill="#ef4444">NAND</text>
  </g>
  <!-- NOR gate -->
  <g transform="translate(130,110)">
    <text x="22" y="12" fill="#8b5cf6" font-weight="bold" font-size="11">NOR</text>
    <line x1="0" y1="35" x2="18" y2="35" stroke="#333" stroke-width="2"/>
    <line x1="0" y1="55" x2="18" y2="55" stroke="#333" stroke-width="2"/>
    <path d="M10,25 Q30,25 63,45 Q30,65 10,65 Q25,45 10,25 Z" fill="#2d1b69" stroke="#8b5cf6" stroke-width="2"/>
    <circle cx="67" cy="45" r="5" fill="#2d1b69" stroke="#8b5cf6" stroke-width="2"/>
    <line x1="72" y1="45" x2="85" y2="45" stroke="#333" stroke-width="2"/>
    <text x="22" y="49" fill="#8b5cf6">NOR</text>
  </g>
  <!-- Summary tip -->
  <text x="250" y="135" fill="#374151" font-size="10">NAND = AND + NOT (circle)</text>
  <text x="250" y="155" fill="#374151" font-size="10">NOR  = OR  + NOT (circle)</text>
  <text x="250" y="175" fill="#374151" font-size="10">NAND/NOR: output mostly 1</text>
</svg>`,
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Memory Tricks',
        text: 'AND: all inputs must be 1 → output 1\nOR: at least one 1 → output 1\nNOT: flip it\nNAND: AND then flip → output 0 only if BOTH are 1\nNOR: OR then flip → output 1 only if BOTH are 0',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Five logic gates: AND (both 1→1), OR (any 1→1), NOT (inverse), NAND (AND inverted), NOR (OR inverted). Truth tables determine all possible outputs for all input combinations.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'AND: output 1 only if A=B=1. OR: output 1 if any input is 1. NOT: inverts. NAND: output 0 only if A=B=1. NOR: output 1 only if A=B=0.',
    cues: [
      { id: 'cue-1', blockId: 'table-and', prompt: 'For an AND gate with inputs A=1, B=0, what is the output?', answer: '0 (AND requires both inputs = 1).' },
      { id: 'cue-2', blockId: 'table-nor', prompt: 'For a NOR gate, when is the output 1?', answer: 'Only when both inputs are 0 (NOR = OR then invert; OR gives 0 only when both inputs are 0).' },
      { id: 'cue-3', blockId: 'table-nand', prompt: 'NAND gate: A=1, B=1. What is output?', answer: '0 (NAND = AND then NOT; AND gives 1, NOT 1 = 0).' },
      { id: 'cue-4', blockId: 'para-or', prompt: 'OR gate: what combination of inputs gives output 0?', answer: 'A=0 and B=0 (only case where OR gate output is 0).' },
    ],
  },
  evidence: [],
  mentions: [],
};
