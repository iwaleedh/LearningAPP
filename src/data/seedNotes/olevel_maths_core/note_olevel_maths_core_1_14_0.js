export const note_olevel_maths_core_1_14_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/set-notation-and-venn-diagrams.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use set notation (∈, ∉, ⊂, ∩, ∪, ξ, ∅, A′); draw and interpret two-set Venn diagrams; use n(A) notation and calculate probabilities from Venn diagrams.' }
    },
    {
      id: 'h-notation',
      type: 'heading',
      data: { text: 'Set Notation', level: 2 }
    },
    {
      id: 'tbl-symbols',
      type: 'comparisonTable',
      data: {
        caption: 'Set Notation Symbols',
        headers: ['Symbol', 'Meaning', 'Example'],
        rows: [
          ['ξ', 'Universal set (all elements)', 'ξ = {1, 2, 3, 4, 5, 6}'],
          ['A', 'A set', 'A = {2, 4, 6}'],
          ['∈', 'Is a member of', '4 ∈ A'],
          ['∉', 'Is not a member of', '3 ∉ A'],
          ['n(A)', 'Number of elements in A', 'n(A) = 3'],
          ['∅ or {}', 'Empty set', 'Set with no elements'],
          ['A′', 'Complement of A (not in A)', 'A′ = {1, 3, 5}'],
          ['A ∩ B', 'Intersection (in both A and B)', 'A ∩ B = {4}'],
          ['A ∪ B', 'Union (in A or B or both)', 'A ∪ B = {2, 3, 4, 6}'],
          ['A ⊂ B', 'A is a subset of B', 'All of A is inside B']
        ]
      }
    },
    {
      id: 'callout-key-symbols',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction: ∩ vs ∪',
        text: '<strong>∩ (intersection)</strong> = AND → only elements in <em>both</em> sets<br><strong>∪ (union)</strong> = OR → all elements in <em>either</em> set (no repeats)<br><br>Memory: ∩ looks like ∧ (and); ∪ looks like a cup that holds everything.'
      }
    },
    {
      id: 'h-venn',
      type: 'heading',
      data: { text: 'Two-Set Venn Diagrams', level: 2 }
    },
    {
      id: 'p-venn',
      type: 'paragraph',
      data: { text: 'A Venn diagram uses a rectangle for ξ and circles for each set. Elements in <em>only</em> A go in the left part; elements in <em>only</em> B go in the right part; elements in <em>both</em> go in the overlap; elements in <em>neither</em> go outside both circles.' }
    },
    {
      id: 'callout-worked-venn',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Venn Diagram',
        text: 'ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}<br>A = {even numbers} = {2, 4, 6, 8, 10}<br>B = {multiples of 3} = {3, 6, 9}<br><br>A only: {2, 4, 8, 10}<br>B only: {3, 9}<br>A ∩ B: {6}<br>Neither: {1, 5, 7}<br><br>n(A ∪ B) = 4 + 2 + 1 = <strong>7</strong>'
      }
    },
    {
      id: 'h-probability',
      type: 'heading',
      data: { text: 'Probability from Venn Diagrams', level: 2 }
    },
    {
      id: 'eq-prob',
      type: 'equation',
      data: {
        html: 'P(A) = <span class="nb-frac"><span class="nb-num">n(A)</span><span class="nb-den">n(ξ)</span></span>',
        caption: 'P(A) = number of elements in A ÷ total number of elements'
      }
    },
    {
      id: 'callout-worked-prob',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Probability',
        text: 'Using the Venn diagram above (ξ = {1..10}):<br>P(A ∩ B) = n(A ∩ B)/n(ξ) = 1/10<br>P(A ∪ B) = 7/10<br>P(A′) = n(A′)/10 = 5/10 = <strong>1/2</strong>'
      }
    },
    {
      id: 'h-complement',
      type: 'heading',
      data: { text: 'Complement', level: 2 }
    },
    {
      id: 'p-complement',
      type: 'paragraph',
      data: { text: 'The <strong>complement</strong> A′ is everything in ξ that is <em>not</em> in A. P(A) + P(A′) = 1, so P(A′) = 1 − P(A).' }
    },
    {
      id: 'callout-tip-venn',
      type: 'callout',
      data: { style: 'tip', title: 'Exam Tip', text: 'When filling a Venn diagram, always start with the intersection (A ∩ B) first, then work outwards. Make sure all elements are placed exactly once.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '∩ = intersection (AND, both sets). ∪ = union (OR, either set). A′ = complement (not in A). P(A) = n(A)/n(ξ). Fill from the intersection outward.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'tbl-symbols', prompt: 'Write the set notation symbol for: "4 is in set A", "A and B have no common elements", "all elements in A or B".' },
      { id: 'cue-2', blockId: 'callout-key-symbols', prompt: 'What is the difference between A ∩ B and A ∪ B?' },
      { id: 'cue-3', blockId: 'callout-worked-venn', prompt: 'If A = {2,4,6,8,10} and B = {3,6,9} in ξ = {1–10}, find A ∩ B, A ∪ B, and n(A ∪ B).' },
      { id: 'cue-4', blockId: 'eq-prob', prompt: 'State the formula for P(A) using n(A) and n(ξ).' },
      { id: 'cue-5', blockId: 'callout-tip-venn', prompt: 'When constructing a Venn diagram, where should you start placing elements?' },
      { id: 'cue-6', blockId: 'h-complement', prompt: 'What is the complement A′? If P(A) = 0.3, what is P(A′)?' }
    ],
    summaryText: '∩ = AND (both). ∪ = OR (either). A′ = not in A. P(A) = n(A)/n(ξ). Always fill intersection first in Venn diagrams.',
    ready: true
  },
  evidence: []
};
