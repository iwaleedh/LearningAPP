export const note_olevel_maths_core_2_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/representing-inequalities-on-a-number-line.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Represent inequalities on a number line using open and closed circles, and read inequalities from a number line diagram.' }
    },
    {
      id: 'h-circles',
      type: 'heading',
      data: { text: 'Open and Closed Circles', level: 2 }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key: Circle Types on a Number Line',
        text: '<strong>Open circle ○</strong>: the value at that point is <em>not</em> included. Used for strict inequalities < and >.<br><br><strong>Closed circle ●</strong>: the value at that point <em>is</em> included. Used for ≤ and ≥.<br><br>After the circle, shade (draw an arrow or line) in the direction of valid values.'
      }
    },
    {
      id: 'h-single',
      type: 'heading',
      data: { text: 'Drawing Single Inequalities', level: 2 }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Number line representations',
        headers: ['Inequality', 'Circle at value', 'Arrow direction'],
        rows: [
          ['x > 3', 'Open ○ at 3', '→ (to the right, towards +∞)'],
          ['x ≥ 3', 'Closed ● at 3', '→ (to the right)'],
          ['x < −1', 'Open ○ at −1', '← (to the left, towards −∞)'],
          ['x ≤ 5', 'Closed ● at 5', '← (to the left)'],
        ]
      }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Drawing Number Lines',
        text: 'Draw a number line for each inequality:<br><br><strong>(a)</strong> x > 2<br>Draw an open circle at 2, then a solid line/arrow extending right (2, 3, 4, ...).<br><br><strong>(b)</strong> x ≤ −3<br>Draw a closed circle at −3, then a solid line/arrow extending left (..., −5, −4, −3).<br><br><strong>(c)</strong> −1 ≤ x < 4<br>Draw a <strong>closed</strong> circle at −1 and an <strong>open</strong> circle at 4, with a solid line connecting them.<br>This represents: −1, 0, 1, 2, 3 if x is an integer.'
      }
    },
    {
      id: 'h-reading',
      type: 'heading',
      data: { text: 'Reading Inequalities from a Number Line', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Reading from a Number Line',
        text: 'From a number line diagram, write the inequality for x:<br><br><strong>(a)</strong> Open circle at 1, arrow pointing right → <strong>x > 1</strong><br><br><strong>(b)</strong> Closed circle at −2, arrow pointing left → <strong>x ≤ −2</strong><br><br><strong>(c)</strong> Closed circle at 0, open circle at 5, line between them → <strong>0 ≤ x < 5</strong><br><br><strong>(d)</strong> Open circle at −3, closed circle at 3, line between them → <strong>−3 < x ≤ 3</strong>'
      }
    },
    {
      id: 'h-double',
      type: 'heading',
      data: { text: 'Double Inequalities', level: 2 }
    },
    {
      id: 'p-double',
      type: 'paragraph',
      data: { text: 'A double inequality like −2 < x ≤ 5 is shown on a number line with <strong>two circles</strong>, one at each boundary, connected by a solid line (no arrows at the ends). Check which circle is open and which is closed:' }
    },
    {
      id: 'list-double',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The < sign at x = −2 → <strong>open circle</strong> at −2' },
          { text: 'The ≤ sign at x = 5 → <strong>closed circle</strong> at 5' },
          { text: 'Solid line drawn from −2 to 5' },
        ]
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Marking the Diagram Clearly',
        text: 'In exams, before drawing make sure to:<br>1. Mark the number line scale with at least a few values (e.g. −2, −1, 0, 1, 2, 3).<br>2. Identify which endpoint(s) need open or closed circles.<br>3. Draw the arrow or solid line clearly in the right direction.<br>A missing arrow or the wrong circle type costs marks!'
      }
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake: Swapping Open and Closed Circles',
        text: '❌ Drawing a closed ● circle for x > 3 (should be open ○).<br>❌ Drawing an open ○ circle for x ≥ 3 (should be closed ●).<br><br>Always match the symbol: <strong>strict</strong> (< or >) = open ○; <strong>or equal to</strong> (≤ or ≥) = closed ●.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I draw open circles ○ for strict inequalities (< and >)', checked: false },
          { text: 'I draw closed circles ● for inclusive inequalities (≤ and ≥)', checked: false },
          { text: 'I shade/draw the line in the correct direction', checked: false },
          { text: 'I can draw double inequalities with the correct two circles', checked: false },
          { text: 'I can read an inequality from a number line diagram', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'On a number line: use an <strong>open circle ○</strong> for strict inequalities (< or >) and a <strong>closed circle ●</strong> for "or equal to" (≤ or ≥). Shade in the direction of valid values. For double inequalities, use two circles connected by a solid line.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the difference between an open circle and a closed circle on a number line?' },
      { id: 'cue-2', blockId: 'tbl-examples', prompt: 'How do you represent x ≥ 3 on a number line? Which circle do you use?' },
      { id: 'cue-3', blockId: 'callout-worked1', prompt: 'Describe the number line diagram for −1 ≤ x < 4.' },
      { id: 'cue-4', blockId: 'callout-worked2', prompt: 'A number line has a closed circle at 0 and an open circle at 5 with a line between them. What inequality does this show?' },
      { id: 'cue-5', blockId: 'callout-warning1', prompt: 'What is the most common mistake when drawing inequalities on a number line?' },
    ],
    summaryText: 'Open circle ○ for strict inequalities (</>); closed circle ● for ≤/≥. Shade in the direction of valid values. Double inequalities need two correctly-typed circles.',
    ready: true,
  },
  evidence: [],
};
