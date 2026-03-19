export const exercises_olevel_maths_core_1_14 = {

  mcq: [
    { id: 'mcq-1', stem: 'What does the symbol ∈ mean?', options: ['Is a subset of', 'Is a member of', 'Is not a member of', 'Union'], correctAnswer: 1, rationale: '∈ means "is a member of" or "belongs to" a set.', topic: 'Set Notation' },
    { id: 'mcq-2', stem: 'What does the symbol ∉ mean?', options: ['Is a member of', 'Intersection', 'Is not a member of', 'Is a subset of'], correctAnswer: 2, rationale: '∉ means "is not a member of" a set.', topic: 'Set Notation' },
    { id: 'mcq-3', stem: 'Which symbol represents the universal set?', options: ['∅', 'ξ', '∪', '⊂'], correctAnswer: 1, rationale: 'ξ (or ℰ) represents the universal set containing all elements under consideration.', topic: 'Set Notation' },
    { id: 'mcq-4', stem: 'What does ∅ represent?', options: ['The universal set', 'The complement', 'The empty set', 'The intersection'], correctAnswer: 2, rationale: '∅ represents the empty set — a set with no elements.', topic: 'Set Notation' },
    { id: 'mcq-5', stem: 'A ∩ B means:', options: ['All elements in A or B', 'All elements in both A and B', 'All elements not in A', 'A is a subset of B'], correctAnswer: 1, rationale: '∩ is the intersection — elements that belong to both A and B.', topic: 'Set Notation' },
    { id: 'mcq-6', stem: 'A ∪ B means:', options: ['Elements in both A and B only', 'Elements in A or B or both', 'Elements not in A or B', 'A is a subset of B'], correctAnswer: 1, rationale: '∪ is the union — all elements in A or B or both, without repeats.', topic: 'Set Notation' },
    { id: 'mcq-7', stem: 'If A = {1, 3, 5} and B = {3, 5, 7}, what is A ∩ B?', options: ['{1, 7}', '{3, 5}', '{1, 3, 5, 7}', '{1}'], correctAnswer: 1, rationale: 'A ∩ B contains elements common to both: {3, 5}.', topic: 'Venn Diagrams' },
    { id: 'mcq-8', stem: 'If A = {1, 3, 5} and B = {3, 5, 7}, what is A ∪ B?', options: ['{3, 5}', '{1, 7}', '{1, 3, 5, 7}', '{1, 3, 5}'], correctAnswer: 2, rationale: 'A ∪ B contains all elements from both sets: {1, 3, 5, 7}.', topic: 'Venn Diagrams' },
    { id: 'mcq-9', stem: 'If ξ = {1,2,3,4,5,6} and A = {2, 4, 6}, what is A′?', options: ['{2, 4, 6}', '{1, 3, 5}', '{1, 2, 3, 4, 5, 6}', '∅'], correctAnswer: 1, rationale: 'A′ is the complement of A — all elements in ξ not in A: {1, 3, 5}.', topic: 'Set Notation' },
    { id: 'mcq-10', stem: 'What does n(A) represent?', options: ['The complement of A', 'The number of elements in A', 'The probability of A', 'The universal set'], correctAnswer: 1, rationale: 'n(A) is the notation for the number of elements in set A.', topic: 'Set Notation' },
    { id: 'mcq-11', stem: 'If n(ξ) = 20 and n(A) = 8, what is P(A)?', options: ['8/20', '20/8', '8', '12/20'], correctAnswer: 0, rationale: 'P(A) = n(A) / n(ξ) = 8/20.', topic: 'Venn Diagrams' },
    { id: 'mcq-12', stem: 'If P(A) = 0.3, what is P(A′)?', options: ['0.3', '0.7', '1.3', '0'], correctAnswer: 1, rationale: 'P(A) + P(A′) = 1, so P(A′) = 1 − 0.3 = 0.7.', topic: 'Set Notation' },
    { id: 'mcq-13', stem: 'Which symbol means "is a subset of"?', options: ['∈', '∪', '⊂', '∩'], correctAnswer: 2, rationale: '⊂ means A is a subset of B — every element of A is also in B.', topic: 'Set Notation' },
    { id: 'mcq-14', stem: 'In a Venn diagram, where do elements belonging to neither A nor B go?', options: ['In the overlap of the two circles', 'Inside circle A only', 'Outside both circles but inside the rectangle', 'They are not shown'], correctAnswer: 2, rationale: 'Elements in neither set go outside both circles but inside the rectangle representing ξ.', topic: 'Venn Diagrams' },
    { id: 'mcq-15', stem: 'When constructing a Venn diagram, which region should you fill first?', options: ['A only', 'B only', 'A ∩ B (the intersection)', 'The region outside both circles'], correctAnswer: 2, rationale: 'Always start with the intersection A ∩ B, then work outwards to avoid placing elements twice.', topic: 'Venn Diagrams' },
    { id: 'mcq-16', stem: 'If A = {2, 4, 6, 8, 10} and B = {3, 6, 9}, what is n(A ∩ B)?', options: ['1', '2', '3', '7'], correctAnswer: 0, rationale: 'A ∩ B = {6}, so n(A ∩ B) = 1.', topic: 'Venn Diagrams' },
    { id: 'mcq-17', stem: 'If A = {2, 4, 6, 8, 10} and B = {3, 6, 9}, what is n(A ∪ B)?', options: ['5', '6', '7', '8'], correctAnswer: 2, rationale: 'A ∪ B = {2, 3, 4, 6, 8, 9, 10} → n(A ∪ B) = 7.', topic: 'Venn Diagrams' },
    { id: 'mcq-18', stem: 'If ξ = {1–10}, A = {even numbers}, B = {multiples of 3}, what is P(A ∩ B)?', options: ['1/10', '7/10', '5/10', '3/10'], correctAnswer: 0, rationale: 'A ∩ B = {6}, so P(A ∩ B) = 1/10.', topic: 'Venn Diagrams' },
    { id: 'mcq-19', stem: 'Which of these is the correct way to write "5 is a member of set A"?', options: ['A ∈ 5', '5 ∉ A', '5 ∈ A', '5 ⊂ A'], correctAnswer: 2, rationale: 'The element goes first, then ∈, then the set: 5 ∈ A.', topic: 'Set Notation' },
    { id: 'mcq-20', stem: 'If A ⊂ B, which statement is always true?', options: ['B is inside A', 'Every element of A is also in B', 'A and B have no common elements', 'A = B'], correctAnswer: 1, rationale: 'A ⊂ B means A is a subset of B, so every element of A is also in B.', topic: 'Set Notation' },
    { id: 'mcq-21', stem: 'In a Venn diagram, the rectangle represents:', options: ['Set A', 'Set B', 'The universal set ξ', 'The empty set'], correctAnswer: 2, rationale: 'The rectangle in a Venn diagram always represents the universal set ξ.', topic: 'Venn Diagrams' },
    { id: 'mcq-22', stem: 'If n(ξ) = 30, n(A) = 12, n(B) = 10, and n(A ∩ B) = 4, what is n(A ∪ B)?', options: ['18', '22', '26', '14'], correctAnswer: 0, rationale: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 12 + 10 − 4 = 18.', topic: 'Venn Diagrams' },
    { id: 'mcq-23', stem: 'Using the previous question, how many elements are in neither A nor B?', options: ['18', '12', '30', '12'], correctAnswer: 1, rationale: 'Neither = n(ξ) − n(A ∪ B) = 30 − 18 = 12.', topic: 'Venn Diagrams' },
    { id: 'mcq-24', stem: 'What is {1, 2, 3} ∩ {4, 5, 6}?', options: ['{1, 2, 3, 4, 5, 6}', '{1, 2, 3}', '∅', '{3, 4}'], correctAnswer: 2, rationale: 'The two sets share no common elements, so their intersection is the empty set ∅.', topic: 'Set Notation' },
    { id: 'mcq-25', stem: 'If A and B are disjoint sets, which is true?', options: ['A ∩ B = ξ', 'A ∩ B = ∅', 'A ∪ B = ∅', 'A ⊂ B'], correctAnswer: 1, rationale: 'Disjoint sets have no elements in common, so A ∩ B = ∅.', topic: 'Set Notation' },
    { id: 'mcq-26', stem: 'If ξ = {1–10}, A = {1,2,3,4,5}, what is n(A′)?', options: ['5', '10', '0', '3'], correctAnswer: 0, rationale: 'A′ = {6,7,8,9,10}, so n(A′) = 5.', topic: 'Set Notation' },
    { id: 'mcq-27', stem: 'The shaded region of a Venn diagram shows only the part inside circle A but outside circle B. This represents:', options: ['A ∩ B', 'A ∪ B', 'A ∩ B′', 'A′ ∩ B'], correctAnswer: 2, rationale: 'In A but not in B is written as A ∩ B′ (elements in A and in the complement of B).', topic: 'Venn Diagrams' },
    { id: 'mcq-28', stem: 'If n(ξ) = 25 and n(A ∪ B) = 20, what is P(A ∪ B)?', options: ['20/25', '25/20', '5/25', '20'], correctAnswer: 0, rationale: 'P(A ∪ B) = n(A ∪ B) / n(ξ) = 20/25.', topic: 'Venn Diagrams' },
    { id: 'mcq-29', stem: 'Which memory aid helps distinguish ∩ from ∪?', options: ['∩ looks like a cup that holds everything', '∪ looks like "and"', '∩ looks like ∧ (and); ∪ is a cup that holds everything', 'There is no difference'], correctAnswer: 2, rationale: '∩ resembles ∧ (logical AND) for intersection; ∪ looks like a cup collecting all elements (union).', topic: 'Set Notation' },
    { id: 'mcq-30', stem: 'If P(B) = 3/8, what is P(B′)?', options: ['3/8', '5/8', '8/3', '1'], correctAnswer: 1, rationale: 'P(B′) = 1 − P(B) = 1 − 3/8 = 5/8.', topic: 'Set Notation' }
  ],

  fillblank: [
    { id: 'fb-1', stem: 'Complete: The symbol ∈ means "is a ____ of".', template: 'The symbol ∈ means "is a __BLANK__ of".', blanks: [{ answer: 'member' }], rationale: '∈ means "is a member of" a set.' },
    { id: 'fb-2', stem: 'Complete: A ∩ B represents the ____ of sets A and B.', template: 'A ∩ B represents the __BLANK__ of sets A and B.', blanks: [{ answer: 'intersection' }], rationale: '∩ stands for intersection — elements common to both sets.' },
    { id: 'fb-3', stem: 'Complete: A ∪ B represents the ____ of sets A and B.', template: 'A ∪ B represents the __BLANK__ of sets A and B.', blanks: [{ answer: 'union' }], rationale: '∪ stands for union — all elements in either set.' },
    { id: 'fb-4', stem: 'Complete: The complement of A is written as ____.', template: 'The complement of A is written as __BLANK__.', blanks: [{ answer: 'A′' }], rationale: 'A′ denotes the complement — all elements in ξ that are not in A.' },
    { id: 'fb-5', stem: 'Complete: The symbol ∅ represents the ____ set.', template: 'The symbol ∅ represents the __BLANK__ set.', blanks: [{ answer: 'empty' }], rationale: '∅ is the empty set — a set containing no elements.' },
    { id: 'fb-6', stem: 'Complete: P(A) = n(A) / n(____).', template: 'P(A) = n(A) / n(__BLANK__).', blanks: [{ answer: 'ξ' }], rationale: 'Probability of A equals the number of elements in A divided by the total number of elements in ξ.' },
    { id: 'fb-7', stem: 'Complete: In a Venn diagram, the rectangle represents the ____ set.', template: 'In a Venn diagram, the rectangle represents the __BLANK__ set.', blanks: [{ answer: 'universal' }], rationale: 'The rectangle always represents the universal set ξ.' },
    { id: 'fb-8', stem: 'Complete: n(A ∪ B) = n(A) + n(B) − n(A ____ B).', template: 'n(A ∪ B) = n(A) + n(B) − n(A __BLANK__ B).', blanks: [{ answer: '∩' }], rationale: 'The inclusion–exclusion formula subtracts n(A ∩ B) to avoid double-counting.' },
    { id: 'fb-9', stem: 'Complete: If P(A) = 0.4, then P(A′) = ____.', template: 'If P(A) = 0.4, then P(A′) = __BLANK__.', blanks: [{ answer: '0.6' }], rationale: 'P(A′) = 1 − P(A) = 1 − 0.4 = 0.6.' },
    { id: 'fb-10', stem: 'Complete: A ⊂ B means A is a ____ of B.', template: 'A ⊂ B means A is a __BLANK__ of B.', blanks: [{ answer: 'subset' }], rationale: '⊂ means "is a subset of" — every element of A is also in B.' },
    { id: 'fb-11', stem: 'Complete: When filling a Venn diagram, always start with the ____.', template: 'When filling a Venn diagram, always start with the __BLANK__.', blanks: [{ answer: 'intersection' }], rationale: 'Start with A ∩ B, then work outwards to avoid placing elements twice.' },
    { id: 'fb-12', stem: 'Complete: If two sets have no elements in common, they are called ____ sets.', template: 'If two sets have no elements in common, they are called __BLANK__ sets.', blanks: [{ answer: 'disjoint' }], rationale: 'Disjoint sets have A ∩ B = ∅.' },
    { id: 'fb-13', stem: 'Complete: n(A) stands for the ____ of elements in set A.', template: 'n(A) stands for the __BLANK__ of elements in set A.', blanks: [{ answer: 'number' }], rationale: 'n(A) is the notation for the count of elements in set A.' },
    { id: 'fb-14', stem: 'Complete: P(A) + P(A′) always equals ____.', template: 'P(A) + P(A′) always equals __BLANK__.', blanks: [{ answer: '1' }], rationale: 'The probabilities of an event and its complement always sum to 1.' },
    { id: 'fb-15', stem: 'Complete: Elements in A but not in B can be written as A ∩ ____.', template: 'Elements in A but not in B can be written as A ∩ __BLANK__.', blanks: [{ answer: 'B′' }], rationale: 'A ∩ B′ represents elements that are in A and in the complement of B.' }
  ],

  dragdrop: [
    {
      id: 'dd-1',
      stem: 'Classify each symbol by its meaning.',
      categories: ['Set relationship', 'Set operation'],
      items: [
        { text: '∈ (is a member of)', category: 'Set relationship' },
        { text: '⊂ (is a subset of)', category: 'Set relationship' },
        { text: '∉ (is not a member of)', category: 'Set relationship' },
        { text: '∩ (intersection)', category: 'Set operation' },
        { text: '∪ (union)', category: 'Set operation' }
      ]
    },
    {
      id: 'dd-2',
      stem: 'Given ξ = {1,2,3,4,5,6,7,8}, A = {2,4,6,8}, B = {1,2,3,4}. Sort each element into the correct Venn diagram region.',
      categories: ['A only', 'B only', 'A ∩ B', 'Neither'],
      items: [
        { text: '6', category: 'A only' },
        { text: '8', category: 'A only' },
        { text: '1', category: 'B only' },
        { text: '3', category: 'B only' },
        { text: '2', category: 'A ∩ B' },
        { text: '4', category: 'A ∩ B' },
        { text: '5', category: 'Neither' },
        { text: '7', category: 'Neither' }
      ]
    },
    {
      id: 'dd-3',
      stem: 'Match each notation to its meaning.',
      categories: ['Symbol', 'Meaning'],
      items: [
        { text: 'A′', category: 'Complement of A' },
        { text: '∅', category: 'Empty set' },
        { text: 'ξ', category: 'Universal set' },
        { text: 'n(A)', category: 'Number of elements in A' }
      ]
    },
    {
      id: 'dd-4',
      stem: 'Classify each description as intersection or union.',
      categories: ['Intersection (∩)', 'Union (∪)'],
      items: [
        { text: 'Elements in both A and B', category: 'Intersection (∩)' },
        { text: 'Elements in A or B or both', category: 'Union (∪)' },
        { text: 'The overlap region', category: 'Intersection (∩)' },
        { text: 'All elements from either circle', category: 'Union (∪)' }
      ]
    },
    {
      id: 'dd-5',
      stem: 'Given ξ = {1–10}, A = {even numbers}, B = {multiples of 3}. Sort each element.',
      categories: ['A only', 'B only', 'A ∩ B', 'Neither'],
      items: [
        { text: '2', category: 'A only' },
        { text: '4', category: 'A only' },
        { text: '8', category: 'A only' },
        { text: '10', category: 'A only' },
        { text: '3', category: 'B only' },
        { text: '9', category: 'B only' },
        { text: '6', category: 'A ∩ B' },
        { text: '1', category: 'Neither' },
        { text: '5', category: 'Neither' },
        { text: '7', category: 'Neither' }
      ]
    },
    {
      id: 'dd-6',
      stem: 'Classify these probability statements as true or false.',
      categories: ['True', 'False'],
      items: [
        { text: 'P(A) + P(A′) = 1', category: 'True' },
        { text: 'P(A ∪ B) can be greater than 1', category: 'False' },
        { text: 'P(∅) = 0', category: 'True' },
        { text: 'P(ξ) = 1', category: 'True' },
        { text: 'P(A′) = P(A)', category: 'False' }
      ]
    },
    {
      id: 'dd-7',
      stem: 'Classify each set expression by the shaded Venn diagram region it represents.',
      categories: ['Inside A only', 'Inside B only', 'Overlap', 'Outside both'],
      items: [
        { text: 'A ∩ B′', category: 'Inside A only' },
        { text: 'A′ ∩ B', category: 'Inside B only' },
        { text: 'A ∩ B', category: 'Overlap' },
        { text: '(A ∪ B)′', category: 'Outside both' }
      ]
    },
    {
      id: 'dd-8',
      stem: 'Match each statement to the correct symbol.',
      categories: ['∈', '∉', '⊂'],
      items: [
        { text: '3 belongs to {1,2,3}', category: '∈' },
        { text: '7 does not belong to {1,2,3}', category: '∉' },
        { text: '{1,2} is contained within {1,2,3,4}', category: '⊂' },
        { text: '5 is a member of {5,10,15}', category: '∈' }
      ]
    },
    {
      id: 'dd-9',
      stem: 'Sort these values: Given n(ξ) = 20, n(A) = 9, n(B) = 7, n(A ∩ B) = 3.',
      categories: ['Correct', 'Incorrect'],
      items: [
        { text: 'n(A ∪ B) = 13', category: 'Correct' },
        { text: 'n(A only) = 6', category: 'Correct' },
        { text: 'n(B only) = 4', category: 'Correct' },
        { text: 'n(neither) = 7', category: 'Correct' },
        { text: 'n(A ∪ B) = 16', category: 'Incorrect' },
        { text: 'n(neither) = 11', category: 'Incorrect' }
      ]
    },
    {
      id: 'dd-10',
      stem: 'Classify each Venn diagram feature.',
      categories: ['Part of the diagram', 'Not a standard feature'],
      items: [
        { text: 'Rectangle for ξ', category: 'Part of the diagram' },
        { text: 'Circles for each set', category: 'Part of the diagram' },
        { text: 'Overlap for A ∩ B', category: 'Part of the diagram' },
        { text: 'Triangle for complement', category: 'Not a standard feature' },
        { text: 'Pentagon for union', category: 'Not a standard feature' }
      ]
    }
  ],

  sequence: [
    {
      id: 'seq-1',
      stem: 'Order the steps for filling in a two-set Venn diagram.',
      steps: [
        'Identify the elements in A ∩ B and place them in the overlap',
        'Place remaining elements of A in the A-only region',
        'Place remaining elements of B in the B-only region',
        'Place any leftover elements outside both circles'
      ]
    },
    {
      id: 'seq-2',
      stem: 'Order the steps to find P(A) from a Venn diagram.',
      steps: [
        'Count the total number of elements in ξ to find n(ξ)',
        'Count all elements inside circle A to find n(A)',
        'Calculate P(A) = n(A) / n(ξ)',
        'Simplify the fraction if possible'
      ]
    },
    {
      id: 'seq-3',
      stem: 'Order the steps to find n(A ∪ B) using the formula.',
      steps: [
        'Find n(A)',
        'Find n(B)',
        'Find n(A ∩ B)',
        'Calculate n(A) + n(B) − n(A ∩ B)'
      ]
    },
    {
      id: 'seq-4',
      stem: 'Order the steps to find the number of elements in neither A nor B.',
      steps: [
        'Find n(A ∪ B) by adding all elements in A, B, and their overlap',
        'Identify n(ξ)',
        'Subtract: n(ξ) − n(A ∪ B)',
        'State the answer as the number in neither set'
      ]
    },
    {
      id: 'seq-5',
      stem: 'Order the steps to determine if A ⊂ B.',
      steps: [
        'List all elements of set A',
        'List all elements of set B',
        'Check whether every element of A is also in B',
        'If yes, conclude A ⊂ B'
      ]
    },
    {
      id: 'seq-6',
      stem: 'Order the steps to find A′ (the complement of A).',
      steps: [
        'List all elements in the universal set ξ',
        'List all elements in set A',
        'Remove elements of A from ξ',
        'The remaining elements form A′'
      ]
    },
    {
      id: 'seq-7',
      stem: 'Order the steps to calculate P(A′) when given P(A).',
      steps: [
        'Identify the value of P(A)',
        'Use the rule P(A) + P(A′) = 1',
        'Rearrange to P(A′) = 1 − P(A)',
        'Substitute and calculate'
      ]
    },
    {
      id: 'seq-8',
      stem: 'Order the steps to draw a two-set Venn diagram from scratch.',
      steps: [
        'Draw a rectangle and label it ξ',
        'Draw two overlapping circles inside and label them A and B',
        'Place elements in A ∩ B in the overlap first',
        'Fill in remaining regions and elements outside both circles'
      ]
    }
  ],

  keyword: [
    { id: 'kw-1', stem: 'Explain what A ∩ B means. [2 marks]', marks: 2, keywords: ['intersection', 'both'], modelAnswer: 'A ∩ B is the intersection of sets A and B — the set of elements that belong to both A and B.' },
    { id: 'kw-2', stem: 'Explain what A ∪ B means. [2 marks]', marks: 2, keywords: ['union', 'either'], modelAnswer: 'A ∪ B is the union of sets A and B — the set of all elements in either A or B or both.' },
    { id: 'kw-3', stem: 'What does the complement A′ represent? [2 marks]', marks: 2, keywords: ['complement', 'not in A'], modelAnswer: 'A′ is the complement of A — it contains all elements in the universal set ξ that are not in A.' },
    { id: 'kw-4', stem: 'State the formula for P(A) using set notation. [2 marks]', marks: 2, keywords: ['n(A)', 'n(ξ)'], modelAnswer: 'P(A) = n(A) / n(ξ), where n(A) is the number of elements in A and n(ξ) is the total number of elements.' },
    { id: 'kw-5', stem: 'What is the relationship between P(A) and P(A′)? [2 marks]', marks: 2, keywords: ['sum', '1'], modelAnswer: 'P(A) + P(A′) = 1, so P(A′) = 1 − P(A). The probabilities of an event and its complement always sum to 1.' },
    { id: 'kw-6', stem: 'Describe where elements of A ∩ B go on a Venn diagram. [1 mark]', marks: 1, keywords: ['overlap'], modelAnswer: 'Elements of A ∩ B are placed in the overlap region where the two circles intersect.' },
    { id: 'kw-7', stem: 'State the formula for n(A ∪ B). [2 marks]', marks: 2, keywords: ['n(A)', 'n(B)', 'subtract', 'n(A ∩ B)'], modelAnswer: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B). You subtract the intersection to avoid double-counting.' },
    { id: 'kw-8', stem: 'What does ∅ mean and give an example. [2 marks]', marks: 2, keywords: ['empty', 'no elements'], modelAnswer: '∅ is the empty set — a set with no elements. For example, the set of months with 32 days is ∅.' },
    { id: 'kw-9', stem: 'What does it mean if A ⊂ B? [2 marks]', marks: 2, keywords: ['subset', 'every element'], modelAnswer: 'A ⊂ B means A is a subset of B — every element of A is also an element of B.' },
    { id: 'kw-10', stem: 'Why should you fill the intersection first when drawing a Venn diagram? [2 marks]', marks: 2, keywords: ['intersection', 'avoid', 'double'], modelAnswer: 'You fill the intersection first to avoid placing elements twice, since those elements belong to both sets and must only appear once.' },
    { id: 'kw-11', stem: 'Explain what ξ represents in set notation. [1 mark]', marks: 1, keywords: ['universal'], modelAnswer: 'ξ represents the universal set — the set of all elements being considered in a particular problem.' },
    { id: 'kw-12', stem: 'How do you find the number of elements in neither A nor B? [2 marks]', marks: 2, keywords: ['n(ξ)', 'subtract', 'n(A ∪ B)'], modelAnswer: 'Subtract n(A ∪ B) from n(ξ). The number in neither set = n(ξ) − n(A ∪ B).' }
  ],

  flashcards: [
    { id: 'fc-1', front: 'What does ∈ mean?', back: '"Is a member of" — e.g. 4 ∈ A means 4 belongs to set A.', topic: 'Set Notation' },
    { id: 'fc-2', front: 'What does ∉ mean?', back: '"Is not a member of" — e.g. 3 ∉ A means 3 does not belong to set A.', topic: 'Set Notation' },
    { id: 'fc-3', front: 'What does ξ represent?', back: 'The universal set — the set of all elements under consideration.', topic: 'Set Notation' },
    { id: 'fc-4', front: 'What does ∅ represent?', back: 'The empty set — a set with no elements. Also written as {}.', topic: 'Set Notation' },
    { id: 'fc-5', front: 'What does A′ mean?', back: 'The complement of A — all elements in ξ that are not in A.', topic: 'Set Notation' },
    { id: 'fc-6', front: 'What does A ∩ B mean?', back: 'The intersection of A and B — elements in both A and B.', topic: 'Set Notation' },
    { id: 'fc-7', front: 'What does A ∪ B mean?', back: 'The union of A and B — elements in A or B or both.', topic: 'Set Notation' },
    { id: 'fc-8', front: 'What does A ⊂ B mean?', back: 'A is a subset of B — every element of A is also in B.', topic: 'Set Notation' },
    { id: 'fc-9', front: 'What does n(A) mean?', back: 'The number of elements in set A.', topic: 'Set Notation' },
    { id: 'fc-10', front: 'Memory aid: How to distinguish ∩ from ∪?', back: '∩ looks like ∧ (AND) → intersection. ∪ looks like a cup → holds everything (union).', topic: 'Set Notation' },
    { id: 'fc-11', front: 'What does the rectangle in a Venn diagram represent?', back: 'The universal set ξ.', topic: 'Venn Diagrams' },
    { id: 'fc-12', front: 'What does the overlapping region of two circles represent?', back: 'A ∩ B — the intersection (elements common to both sets).', topic: 'Venn Diagrams' },
    { id: 'fc-13', front: 'Where do elements in neither A nor B go on a Venn diagram?', back: 'Outside both circles, but inside the rectangle.', topic: 'Venn Diagrams' },
    { id: 'fc-14', front: 'When filling a Venn diagram, where should you start?', back: 'Start with the intersection (A ∩ B), then work outwards.', topic: 'Venn Diagrams' },
    { id: 'fc-15', front: 'Formula: P(A) = ?', back: 'P(A) = n(A) / n(ξ)', topic: 'Venn Diagrams' },
    { id: 'fc-16', front: 'If P(A) = 0.3, what is P(A′)?', back: 'P(A′) = 1 − 0.3 = 0.7', topic: 'Set Notation' },
    { id: 'fc-17', front: 'Formula: n(A ∪ B) = ?', back: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', topic: 'Venn Diagrams' },
    { id: 'fc-18', front: 'What does it mean for two sets to be disjoint?', back: 'They have no elements in common — A ∩ B = ∅.', topic: 'Set Notation' },
    { id: 'fc-19', front: 'If ξ = {1–10}, A = {even}, B = {multiples of 3}, what is A ∩ B?', back: '{6} — the only number that is both even and a multiple of 3 in the range 1–10.', topic: 'Venn Diagrams' },
    { id: 'fc-20', front: 'If ξ = {1–10}, A = {even}, B = {multiples of 3}, what is n(A ∪ B)?', back: '7 — A ∪ B = {2, 3, 4, 6, 8, 9, 10}.', topic: 'Venn Diagrams' },
    { id: 'fc-21', front: 'What is P(A) + P(A′)?', back: 'Always equals 1.', topic: 'Set Notation' },
    { id: 'fc-22', front: 'How do you find the number of elements in "only A"?', back: 'n(A only) = n(A) − n(A ∩ B)', topic: 'Venn Diagrams' },
    { id: 'fc-23', front: 'How do you find the number in neither set?', back: 'n(neither) = n(ξ) − n(A ∪ B)', topic: 'Venn Diagrams' },
    { id: 'fc-24', front: 'What does A ∩ B′ represent on a Venn diagram?', back: 'The region inside circle A but outside circle B (A only).', topic: 'Venn Diagrams' },
    { id: 'fc-25', front: 'What does (A ∪ B)′ represent?', back: 'The complement of the union — everything outside both circles (in neither A nor B).', topic: 'Venn Diagrams' }
  ]

};
