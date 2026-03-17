export const note_olevel_maths_extended_7_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/magnitude-of-a-vector.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the magnitude of a vector from its components using Pythagoras\' theorem and find unit vectors.' }
    },
    {
      id: 'h-mag',
      type: 'heading',
      data: { text: 'Magnitude of a Vector', level: 2 }
    },
    {
      id: 'p-mag',
      type: 'paragraph',
      data: { text: 'The <strong>magnitude</strong> (or <strong>modulus</strong>) of a vector is its length. For the column vector (x, y), the magnitude is found using Pythagoras\' theorem.' }
    },
    {
      id: 'eq-mag',
      type: 'equation',
      data: {
        html: '|<strong>a</strong>| = √(x² + y²)',
        caption: 'Magnitude of vector a = (x, y)'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Find the magnitude of <strong>a</strong> = (3, 4).<br><br><strong>Solution:</strong><br>|<strong>a</strong>| = √(3² + 4²) = √(9 + 16) = √25 = <strong>5</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'Find the magnitude of <strong>b</strong> = (−5, 12).<br><br><strong>Solution:</strong><br>|<strong>b</strong>| = √((−5)² + 12²) = √(25 + 144) = √169 = <strong>13</strong>'
      }
    },
    {
      id: 'h-unit',
      type: 'heading',
      data: { text: 'Unit Vectors', level: 2 }
    },
    {
      id: 'p-unit',
      type: 'paragraph',
      data: { text: 'A <strong>unit vector</strong> has magnitude 1. To find the unit vector in the direction of <strong>a</strong>, divide <strong>a</strong> by its magnitude:' }
    },
    {
      id: 'eq-unit',
      type: 'equation',
      data: {
        html: '<strong>â</strong> = <span class="nb-frac"><span class="nb-num"><strong>a</strong></span><span class="nb-den">|<strong>a</strong>|</span></span>',
        caption: 'Unit vector in the direction of a'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: 'Find the unit vector in the direction of (6, 8).<br><br><strong>Solution:</strong><br>|<strong>a</strong>| = √(36 + 64) = √100 = 10<br><strong>â</strong> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">10</span></span>(6, 8) = (0.6, 0.8)'
      }
    },
    {
      id: 'h-dist',
      type: 'heading',
      data: { text: 'Distance Between Two Points', level: 2 }
    },
    {
      id: 'p-dist',
      type: 'paragraph',
      data: { text: 'The distance between points A(x₁, y₁) and B(x₂, y₂) is the magnitude of vector <span style="text-decoration:overline">AB</span> = (x₂ − x₁, y₂ − y₁):' }
    },
    {
      id: 'eq-dist',
      type: 'equation',
      data: {
        html: 'AB = √((x₂ − x₁)² + (y₂ − y₁)²)',
        caption: 'Distance formula'
      }
    },
    {
      id: 'callout-tip-surd',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Exact vs Decimal',
        text: 'Leave your answer as a surd (e.g. √13) unless the question says "correct to 3 significant figures" or similar. Exact answers score full marks every time.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'The magnitude of vector (x, y) is √(x² + y²). A unit vector has magnitude 1 and is found by dividing the vector by its magnitude. The distance between two points equals the magnitude of the displacement vector.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use Pythagoras to find magnitudes: |a| = √(x² + y²). Unit vectors have magnitude 1.',
    cues: [
      { id: 'cue-1', blockId: 'eq-mag', prompt: 'What is the formula for the magnitude of vector (x, y)?', answer: '|a| = √(x² + y²).' },
      { id: 'cue-2', blockId: 'callout-worked-1', prompt: 'Find the magnitude of (3, 4).', answer: '√(9 + 16) = √25 = 5.' },
      { id: 'cue-3', blockId: 'eq-unit', prompt: 'How do you find the unit vector in the direction of a?', answer: 'Divide a by its magnitude: â = a / |a|.' },
      { id: 'cue-4', blockId: 'eq-dist', prompt: 'What is the distance formula between two points?', answer: 'AB = √((x₂−x₁)² + (y₂−y₁)²).' },
      { id: 'cue-5', blockId: 'callout-tip-surd', prompt: 'Should you give magnitude answers as decimals or surds?', answer: 'Leave as surds unless told otherwise — exact answers always score full marks.' }
    ]
  },
  evidence: []
};
