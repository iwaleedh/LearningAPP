export const note_olevel_maths_extended_7_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/enlargements.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Perform enlargements with positive, negative, and fractional scale factors from a given centre, and describe enlargements fully.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Enlargements', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'An <strong>enlargement</strong> changes the size of a shape by a <strong>scale factor</strong> from a fixed point called the <strong>centre of enlargement</strong>. The image is <strong>similar</strong> to the object (same shape, different size). Angles are preserved.' }
    },
    {
      id: 'callout-key-sf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Scale Factor Effects',
        text: '• SF > 1: image is <strong>larger</strong> than object<br>• 0 < SF < 1: image is <strong>smaller</strong> (reduction)<br>• SF < 0: image is on the <strong>opposite side</strong> of the centre and inverted<br>• SF = −1: equivalent to 180° rotation about centre<br>• SF = 1: identity (no change)'
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Performing an Enlargement', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Find the vector from the centre to each vertex of the object' },
          { text: 'Multiply each vector by the scale factor' },
          { text: 'Plot the image vertices from the centre using the new vectors' },
          { text: 'Join the image vertices' }
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — SF = 2',
        text: 'Enlarge triangle with vertices A(1, 1), B(3, 1), C(1, 3), scale factor 2, centre O(0, 0).<br><br><strong>Solution:</strong><br>Multiply each coordinate by 2:<br>A′ = (2, 2), B′ = (6, 2), C′ = (2, 6)'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Fractional SF',
        text: 'Enlarge with centre (0, 0) and scale factor <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>. Point P(6, 4).<br><br><strong>Solution:</strong><br>P′ = (6 × ½, 4 × ½) = <strong>(3, 2)</strong><br>The image is half the distance from the centre.'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Negative SF',
        text: 'Enlarge point A(2, 1) with scale factor −2, centre C(0, 0).<br><br><strong>Solution:</strong><br>Vector CA = (2, 1)<br>× (−2) = (−4, −2)<br>A′ = (0 + (−4), 0 + (−2)) = <strong>(−4, −2)</strong><br>The image is on the opposite side, twice as far.'
      }
    },
    {
      id: 'h-describe',
      type: 'heading',
      data: { text: 'Describing an Enlargement', level: 2 }
    },
    {
      id: 'p-describe',
      type: 'paragraph',
      data: { text: 'To describe an enlargement, state:<br>1. "<strong>Enlargement</strong>"<br>2. <strong>Scale factor</strong><br>3. <strong>Centre of enlargement</strong>' }
    },
    {
      id: 'callout-tip-find-sf',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Finding the Scale Factor',
        text: 'Scale factor = <span class="nb-frac"><span class="nb-num">image length</span><span class="nb-den">object length</span></span>. To find the centre, draw lines through corresponding vertices — they intersect at the centre.'
      }
    },
    {
      id: 'callout-key-area',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Area and Volume Scale Factors',
        text: 'If the linear scale factor is <em>k</em>:<br>• Area scale factor = <em>k</em>²<br>• Volume scale factor = <em>k</em>³<br><br>Example: SF = 3 &rarr; area is 9× bigger, volume is 27× bigger.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'An enlargement changes the size of a shape from a centre by a scale factor. The image is similar to the object. Describe an enlargement with: "enlargement", scale factor, and centre. Area scales by k² and volume by k³.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Enlargements scale shapes by a factor from a centre. Negative scale factors invert; fractional ones reduce.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-sf', prompt: 'What happens with a negative scale factor?', answer: 'The image is on the opposite side of the centre and inverted.' },
      { id: 'cue-2', blockId: 'callout-tip-find-sf', prompt: 'How do you calculate the scale factor?', answer: 'Scale factor = image length ÷ object length.' },
      { id: 'cue-3', blockId: 'p-describe', prompt: 'What must you state to describe an enlargement?', answer: '"Enlargement", the scale factor, and the centre of enlargement.' },
      { id: 'cue-4', blockId: 'callout-key-area', prompt: 'If the linear scale factor is k, what is the area scale factor?', answer: 'k².' },
      { id: 'cue-5', blockId: 'callout-key-sf', prompt: 'What does a scale factor between 0 and 1 do?', answer: 'It produces a smaller image (a reduction).' }
    ]
  },
  evidence: []
};
