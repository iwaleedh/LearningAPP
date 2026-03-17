export const note_olevel_maths_extended_8_2_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Probability/probabilities-from-venn-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use Venn diagrams to find probabilities involving union, intersection, and complement of sets.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Probabilities from Venn Diagrams', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>Venn diagram</strong> shows sets as overlapping circles inside a rectangle (the universal set ξ). Numbers in each region tell you how many elements are in that part. To find probabilities, divide the count in a region by the total.' }
    },
    {
      id: 'callout-key-notation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Set Notation for Probability',
        text: '• A ∩ B — intersection: elements in <strong>both</strong> A and B<br>• A ∪ B — union: elements in A <strong>or</strong> B (or both)<br>• A\' — complement: elements <strong>not</strong> in A<br>• n(A) — the number of elements in set A'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'In a class of 30: 18 play football (F), 12 play tennis (T), 5 play both.<br><br>Venn regions: Only F = 13, F∩T = 5, Only T = 7, Neither = 5<br>Check: 13 + 5 + 7 + 5 = 30 ✓<br><br>(a) P(F ∩ T) = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">30</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span><br>(b) P(F ∪ T) = <span class="nb-frac"><span class="nb-num">25</span><span class="nb-den">30</span></span> = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">6</span></span><br>(c) P(neither) = <span class="nb-frac"><span class="nb-num">5</span><span class="nb-den">30</span></span> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">6</span></span>'
      }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Addition Rule (General)',
        text: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<br><br>This avoids double-counting the overlap.'
      }
    },
    {
      id: 'callout-tip-fill',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Filling In a Venn Diagram',
        text: 'Always start by filling in the <strong>intersection</strong> first. Then calculate the "only A" and "only B" regions by subtracting the intersection from the totals. Finally, find the "neither" region.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Venn diagrams show sets as overlapping circles. Fill the intersection first. P(region) = count in region ÷ total. Use n(A∪B) = n(A) + n(B) − n(A∩B) to avoid double-counting.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Venn diagrams show set relationships. Fill intersections first. P = region count ÷ total.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-notation', prompt: 'What does A ∩ B mean?', answer: 'The intersection — elements in both A and B.' },
      { id: 'cue-2', blockId: 'callout-key-notation', prompt: 'What does A ∪ B mean?', answer: 'The union — elements in A or B or both.' },
      { id: 'cue-3', blockId: 'callout-key-formula', prompt: 'State the addition rule for sets.', answer: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B).' },
      { id: 'cue-4', blockId: 'callout-tip-fill', prompt: 'Which region should you fill in first on a Venn diagram?', answer: 'The intersection (overlap) region.' }
    ]
  },
  evidence: []
};
