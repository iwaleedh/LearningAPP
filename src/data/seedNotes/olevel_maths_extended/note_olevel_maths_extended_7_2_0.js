export const note_olevel_maths_extended_7_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Vectors And Transformations/translations.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and perform translations using column vectors and identify the properties preserved under translation.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Translations', level: 2 }
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'A <strong>translation</strong> is a transformation that moves every point of a shape by the same distance in the same direction. It is described by a <strong>column vector</strong>. The shape does not change size, orientation, or shape — it simply slides.' }
    },
    {
      id: 'callout-key-props',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Translations',
        text: '• The object and image are <strong>congruent</strong> (same size and shape)<br>• All points move the same distance in the same direction<br>• Lines remain parallel and equal in length<br>• Angles are unchanged<br>• <strong>No</strong> invariant points (every point moves)'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'Triangle ABC has vertices A(1, 2), B(4, 2), C(4, 5). Find the image after translation by vector (3, −1).<br><br><strong>Solution:</strong><br>A′ = (1+3, 2−1) = (4, 1)<br>B′ = (4+3, 2−1) = (7, 1)<br>C′ = (4+3, 5−1) = (7, 4)'
      }
    },
    {
      id: 'h-describe',
      type: 'heading',
      data: { text: 'Describing a Translation', level: 2 }
    },
    {
      id: 'p-describe',
      type: 'paragraph',
      data: { text: 'To describe a translation, you must state:<br>1. The word "<strong>translation</strong>"<br>2. The <strong>column vector</strong> (find it by subtracting object coordinates from image coordinates).' }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Finding the Vector',
        text: 'Shape P is mapped to shape Q. P has vertex (2, 5) and Q has corresponding vertex (−1, 3). Describe the transformation.<br><br><strong>Solution:</strong><br>Vector = (−1 − 2, 3 − 5) = (−3, −2)<br><strong>Translation by vector (−3, −2)</strong>'
      }
    },
    {
      id: 'callout-tip-desc',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'You must give both the <strong>name</strong> of the transformation ("translation") and the <strong>column vector</strong>. Just saying "3 left and 2 down" is not enough for full marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'A translation slides every point by the same column vector. The image is congruent to the object. Always describe a translation by naming it and giving the column vector.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'A translation moves every point by the same column vector, producing a congruent image.',
    cues: [
      { id: 'cue-1', blockId: 'p-def', prompt: 'What is a translation?', answer: 'A transformation that moves every point the same distance in the same direction, described by a column vector.' },
      { id: 'cue-2', blockId: 'callout-key-props', prompt: 'Are there any invariant points under a translation?', answer: 'No — every point moves.' },
      { id: 'cue-3', blockId: 'p-describe', prompt: 'What two things must you state to describe a translation?', answer: 'The word "translation" and the column vector.' },
      { id: 'cue-4', blockId: 'callout-worked-2', prompt: 'How do you find the translation vector from object to image?', answer: 'Subtract object coordinates from image coordinates.' }
    ]
  },
  evidence: []
};
