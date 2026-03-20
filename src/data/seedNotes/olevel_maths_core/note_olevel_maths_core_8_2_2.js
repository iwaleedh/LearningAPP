export const note_olevel_maths_core_8_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Probability/probabilities-from-venn-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the notation for sets, intersection, union, and complement in a Venn diagram. Read probabilities from Venn diagrams. Use the addition rule P(A∪B) = P(A) + P(B) − P(A∩B). Fill in Venn diagrams from given information.',
      },
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Venn Diagram Notation', level: 2 },
    },
    {
      id: 'p-notation',
      type: 'paragraph',
      data: {
        text: 'A <b>Venn diagram</b> uses overlapping circles inside a rectangle to show the relationship between sets. The key symbols are:<br>• <b>ξ</b> (or &epsilon;) — the <b>universal set</b>: everything being considered<br>• <b>A, B</b> — individual sets (circles)<br>• <b>A∩B</b> — <b>intersection</b>: elements in both A and B (the overlap)<br>• <b>A∪B</b> — <b>union</b>: elements in A or B or both<br>• <b>A′</b> — <b>complement</b>: elements <i>not</i> in A',
      },
    },
    {
      id: 'svg-venn',
      type: 'svg',
      data: {
        caption: 'Venn diagram: 40 students, Set A = plays football, Set B = plays tennis (numbers in each region)',
        svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,sans-serif">
  <!-- Universal set rectangle -->
  <rect x="10" y="10" width="380" height="200" rx="8" fill="#1c3a64" stroke="#6366f1" stroke-width="2"/>
  <text x="380" y="28" text-anchor="end" fill="#6366f1" font-size="13" font-weight="bold">ξ = 40</text>

  <!-- Circle A (football) - left -->
  <circle cx="155" cy="110" r="75" fill="#3d1212" fill-opacity="0.7" stroke="#ef4444" stroke-width="2"/>
  <!-- Circle B (tennis) - right -->
  <circle cx="245" cy="110" r="75" fill="#1e3a8a" fill-opacity="0.7" stroke="#3b82f6" stroke-width="2"/>

  <!-- Labels -->
  <text x="105" y="90"  text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="14">A</text>
  <text x="95"  y="108" text-anchor="middle" fill="#374151" font-size="12">Football</text>

  <text x="295" y="90"  text-anchor="middle" fill="#3b82f6" font-weight="bold" font-size="14">B</text>
  <text x="305" y="108" text-anchor="middle" fill="#374151" font-size="12">Tennis</text>

  <!-- Numbers in regions -->
  <!-- A only (left region) -->
  <text x="120" y="118" text-anchor="middle" fill="#ef4444" font-size="22" font-weight="bold">12</text>
  <!-- Intersection (middle) -->
  <text x="200" y="118" text-anchor="middle" fill="#7c3aed" font-size="22" font-weight="bold">8</text>
  <!-- B only (right region) -->
  <text x="280" y="118" text-anchor="middle" fill="#3b82f6" font-size="22" font-weight="bold">14</text>
  <!-- Outside both (corners) -->
  <text x="45"  y="185" text-anchor="middle" fill="#9ca3af" font-size="18" font-weight="bold">6</text>

  <!-- Region annotation labels -->
  <text x="120" y="150" text-anchor="middle" fill="#9ca3af" font-size="10">only A</text>
  <text x="200" y="150" text-anchor="middle" fill="#9ca3af" font-size="10">A∩B</text>
  <text x="280" y="150" text-anchor="middle" fill="#9ca3af" font-size="10">only B</text>
  <text x="45"  y="198" text-anchor="middle" fill="#9ca3af" font-size="10">neither</text>
</svg>`,
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Reading from the Venn Diagram',
        text: 'Using the diagram above (40 students: 12 only football, 8 both, 14 only tennis, 6 neither):<br><br>Total = 12 + 8 + 14 + 6 = 40 ✓<br><br>P(A) = P(football) = (12 + 8)/40 = 20/40 = <b>1/2</b><br>P(B) = P(tennis) = (8 + 14)/40 = 22/40 = <b>11/20</b><br>P(A∩B) = P(both) = 8/40 = <b>1/5</b><br>P(A∪B) = P(football or tennis) = (12+8+14)/40 = 34/40 = <b>17/20</b><br>P(A′) = P(not football) = (14+6)/40 = 20/40 = <b>1/2</b>',
      },
    },
    {
      id: 'h-addition',
      type: 'heading',
      data: { text: 'The Addition Rule', level: 2 },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Addition Rule for Any Two Events',
        text: 'P(A∪B) = P(A) + P(B) − P(A∩B)<br>We subtract P(A∩B) because it is counted in both P(A) and P(B) — we must not double-count it.',
      },
    },
    {
      id: 'eq-addition',
      type: 'equation',
      data: {
        html: 'P(A∪B) = P(A) + P(B) − P(A∩B)',
        caption: 'Addition rule (general)',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Using the Addition Rule',
        text: 'P(A) = 0.5, P(B) = 0.55, P(A∩B) = 0.2. Find P(A∪B).<br><br>P(A∪B) = 0.5 + 0.55 − 0.2 = <b>0.85</b><br><br>Verify with the Venn diagram: A only = 0.5−0.2 = 0.30, B only = 0.55−0.2 = 0.35, neither = 1−0.85 = 0.15.<br>Total: 0.30+0.20+0.35+0.15 = 1.00 ✓',
      },
    },
    {
      id: 'h-filling',
      type: 'heading',
      data: { text: 'Filling in a Venn Diagram', level: 2 },
    },
    {
      id: 'list-filling',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Always fill in the <b>intersection (A∩B) first</b>.' },
          { text: 'Then find "A only" = n(A) − n(A∩B).' },
          { text: 'Then find "B only" = n(B) − n(A∩B).' },
          { text: 'Finally, "neither" = total − (A only) − (A∩B) − (B only).' },
        ],
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Filling in a Venn Diagram',
        text: 'In a class of 30 students: 18 study French, 12 study Spanish, 5 study both. Fill in the Venn diagram and find P(studies neither).<br><br>Intersection = 5<br>French only = 18 − 5 = 13<br>Spanish only = 12 − 5 = 7<br>Neither = 30 − 13 − 5 − 7 = 5<br><br>P(neither) = 5/30 = <b>1/6</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always write numbers in the regions, not probabilities, unless told otherwise. The four regions in a two-set Venn diagram must add up to the total.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<b>Venn diagrams use ξ (universal), A∩B (both), A∪B (either), A′ (not A).</b> P(A∪B) = P(A) + P(B) − P(A∩B). Fill in intersection first, then "only" regions, then "neither". Numbers in four regions must sum to total.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Venn diagrams: fill intersection first; P(A∪B) = P(A) + P(B) − P(A∩B); four regions must sum to total.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-notation',
        prompt: 'What does A∩B mean in a Venn diagram?',
        answer: 'A∩B is the intersection — elements that are in both set A and set B (the overlapping region).',
      },
      {
        id: 'cue-2',
        blockId: 'eq-addition',
        prompt: 'State the addition rule for probability.',
        answer: 'P(A∪B) = P(A) + P(B) − P(A∩B). We subtract P(A∩B) to avoid double-counting.',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we1',
        prompt: 'A Venn diagram shows: A only = 12, A∩B = 8, B only = 14, neither = 6. What is P(A)?',
        answer: 'P(A) = (12+8)/40 = 20/40 = 1/2.',
      },
      {
        id: 'cue-4',
        blockId: 'list-filling',
        prompt: 'When filling a Venn diagram from given totals, which region should you fill in first?',
        answer: 'The intersection (A∩B) first, then "A only" and "B only", then "neither".',
      },
      {
        id: 'cue-5',
        blockId: 'callout-we3',
        prompt: '30 students: 18 French, 12 Spanish, 5 both. How many study neither?',
        answer: 'French only = 13, Spanish only = 7. Neither = 30 − 13 − 5 − 7 = 5.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
