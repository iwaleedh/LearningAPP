export const note_olevel_maths_extended_1_13_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Number/set-notation-and-venn-diagrams.pdf',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Use set notation and Venn diagrams to represent sets, find intersections, unions, and complements, and solve problems involving two and three sets.' } },
    { id: 'h-intro', type: 'heading', data: { text: 'Set Notation and Venn Diagrams', level: 2 } },
    { id: 'p-intro', type: 'paragraph', data: { text: 'A <b>set</b> is a collection of objects (called <b>elements</b> or <b>members</b>). Sets are usually denoted by capital letters and their elements are listed inside curly brackets: A = {1, 3, 5, 7}.' } },

    { id: 'h-notation', type: 'heading', data: { text: 'Set Notation', level: 2 } },
    { id: 'table-notation', type: 'comparisonTable', data: {
      caption: 'Key set notation symbols',
      headers: ['Symbol', 'Meaning', 'Example'],
      rows: [
        ['∈', 'is an element of', '3 ∈ A means 3 is in set A'],
        ['∉', 'is not an element of', '4 ∉ A means 4 is not in set A'],
        ['n(A)', 'number of elements in A', 'If A = {1,3,5,7}, n(A) = 4'],
        ['𝒰 (or ξ)', 'universal set', 'The set of all elements under consideration'],
        ['∅ or { }', 'empty set', 'The set with no elements'],
        ['A′', 'complement of A', 'Everything in 𝒰 that is NOT in A'],
        ['A ∩ B', 'intersection', 'Elements in BOTH A and B'],
        ['A ∪ B', 'union', 'Elements in A OR B (or both)'],
        ['A ⊂ B', 'A is a proper subset of B', 'Every element of A is in B, but A ≠ B'],
        ['A ⊆ B', 'A is a subset of B', 'Every element of A is in B (A could equal B)']
      ]
    }},

    { id: 'h-venn', type: 'heading', data: { text: 'Venn Diagrams', level: 2 } },
    { id: 'p-venn', type: 'paragraph', data: { text: 'A Venn diagram uses overlapping circles inside a rectangle (the universal set). Each circle represents a set. The overlap shows the intersection. Regions outside all circles but inside the rectangle represent elements not in any set.' } },

    { id: 'callout-key-1', type: 'callout', data: { style: 'key', title: 'Venn Diagram Regions (2 sets)', text: 'For sets A and B, a Venn diagram has 4 regions:\n\n1. <b>A only</b> (A ∩ B′) — in A but not B\n2. <b>A ∩ B</b> — in both A and B\n3. <b>B only</b> (A′ ∩ B) — in B but not A\n4. <b>(A ∪ B)′</b> — in neither A nor B\n\nn(𝒰) = n(A only) + n(A ∩ B) + n(B only) + n(neither)' } },

    { id: 'callout-worked-1', type: 'callout', data: { style: 'worked', title: 'Worked Example 1', text: '𝒰 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}\nA = {2, 4, 6, 8, 10} (even numbers)\nB = {3, 6, 9} (multiples of 3)\n\n<b>A ∩ B</b> = {6} (in both)\n<b>A ∪ B</b> = {2, 3, 4, 6, 8, 9, 10}\n<b>A′</b> = {1, 3, 5, 7, 9}\n<b>(A ∪ B)′</b> = {1, 5, 7}' } },

    { id: 'h-filling', type: 'heading', data: { text: 'Filling in Venn Diagrams with Numbers', level: 2 } },
    { id: 'p-filling', type: 'paragraph', data: { text: 'When given totals for each set, always fill in the <b>intersection first</b>, then work outwards.' } },

    { id: 'callout-worked-2', type: 'callout', data: { style: 'worked', title: 'Worked Example 2', text: 'In a class of 30 students: 18 play football, 15 play cricket, and 7 play both.\n\n<b>Step 1:</b> A ∩ B = 7\n<b>Step 2:</b> Football only = 18 − 7 = 11\n<b>Step 3:</b> Cricket only = 15 − 7 = 8\n<b>Step 4:</b> Neither = 30 − (11 + 7 + 8) = 4\n\nCheck: 11 + 7 + 8 + 4 = 30 ✓' } },

    { id: 'h-three', type: 'heading', data: { text: 'Three-Set Venn Diagrams', level: 2 } },
    { id: 'p-three', type: 'paragraph', data: { text: 'With three sets A, B, and C, the diagram has 8 regions. Always start from the centre (A ∩ B ∩ C) and work outwards.' } },

    { id: 'callout-worked-3', type: 'callout', data: { style: 'worked', title: 'Worked Example 3', text: '50 students were surveyed about subjects they study.\n• 25 study Maths (M), 20 study Science (S), 18 study English (E)\n• 8 study M and S, 6 study M and E, 5 study S and E\n• 3 study all three\n• Find how many study none of these.\n\nStart from the centre:\nM ∩ S ∩ E = 3\nM ∩ S only = 8 − 3 = 5\nM ∩ E only = 6 − 3 = 3\nS ∩ E only = 5 − 3 = 2\nM only = 25 − 5 − 3 − 3 = 14\nS only = 20 − 5 − 3 − 2 = 10\nE only = 18 − 3 − 3 − 2 = 10\n\nTotal in at least one subject = 14 + 5 + 3 + 10 + 3 + 2 + 10 = 47\nNone = 50 − 47 = 3\n\n<b>Answer:</b> 3 students study none' } },

    { id: 'h-shading', type: 'heading', data: { text: 'Shading Regions', level: 2 } },
    { id: 'list-shading', type: 'list', data: { style: 'bullet', items: [
      { text: '<b>A ∩ B</b>: shade only the overlap region' },
      { text: '<b>A ∪ B</b>: shade everything inside either circle' },
      { text: '<b>A′</b>: shade everything outside A (but inside 𝒰)' },
      { text: '<b>(A ∩ B)′</b>: shade everything EXCEPT the overlap' },
      { text: '<b>A ∩ B′</b>: shade the part of A that does NOT overlap with B' },
      { text: '<b>A′ ∪ B</b>: shade everything outside A PLUS everything in B' }
    ] } },

    { id: 'h-formula', type: 'heading', data: { text: 'The Addition Formula', level: 2 } },
    { id: 'callout-key-2', type: 'callout', data: { style: 'key', title: 'n(A ∪ B) Formula', text: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)\n\nWe subtract the intersection because it is counted twice (once in A and once in B).' } },

    { id: 'callout-tip-1', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'For shading questions: work out each part of the expression separately. For A′ ∩ B, first identify A′ (outside A), then find where this overlaps with B. Practice with a pencil — lightly shade each part and see where they overlap.' } },

    { id: 'callout-warning-1', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'A ∪ B does NOT mean A + B. The union adds elements from both BUT counts shared elements only once. Use the formula: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).' } },

    { id: 'sum-1', type: 'summary', data: { text: 'Sets use curly brackets. Key operations: ∩ (intersection — both), ∪ (union — either), ′ (complement — not in). In Venn diagrams, always fill the intersection first. For two sets: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). For three sets, start from the centre and work outwards.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-notation', prompt: 'What do ∩, ∪, and ′ mean in set notation?' },
      { id: 'cue-2', blockId: 'callout-key-1', prompt: 'What are the 4 regions in a two-set Venn diagram?' },
      { id: 'cue-3', blockId: 'p-filling', prompt: 'When filling a Venn diagram with numbers, which region do you fill in first?' },
      { id: 'cue-4', blockId: 'callout-key-2', prompt: 'What is the formula for n(A ∪ B)?' },
      { id: 'cue-5', blockId: 'p-three', prompt: 'How many regions does a three-set Venn diagram have?' },
      { id: 'cue-6', blockId: 'callout-worked-3', prompt: 'In a three-set problem, where do you start filling in values?' }
    ],
    summaryText: '∩ = intersection (both), ∪ = union (either), ′ = complement (not in). Fill intersections first. n(A∪B) = n(A) + n(B) − n(A∩B).',
    ready: true
  },
  evidence: []
};
