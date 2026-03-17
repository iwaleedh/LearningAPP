export const note_olevel_maths_extended_2_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Algebra And Sequences/forming-equations-from-shapes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Form and solve equations using properties of shapes such as perimeter, area, and angle rules.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Forming Equations from Shapes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Geometry questions often label sides or angles with algebraic expressions. You use <strong>known geometric facts</strong> (perimeter, area, angle sums, equal sides) to form an equation, then solve it.' }
    },
    {
      id: 'h-perimeter',
      type: 'heading',
      data: { text: 'Perimeter Problems', level: 2 }
    },
    {
      id: 'callout-worked-perim',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Rectangle Perimeter',
        text: 'A rectangle has length (3<em>x</em> + 1) cm and width (<em>x</em> + 4) cm. Its perimeter is 50 cm. Find <em>x</em>.<br><br>Perimeter = 2(length + width)<br>50 = 2[(3<em>x</em> + 1) + (<em>x</em> + 4)]<br>50 = 2(4<em>x</em> + 5)<br>50 = 8<em>x</em> + 10<br>40 = 8<em>x</em><br><em>x</em> = 5<br><br><strong>Length = 16 cm, Width = 9 cm.</strong>'
      }
    },
    {
      id: 'h-area',
      type: 'heading',
      data: { text: 'Area Problems', level: 2 }
    },
    {
      id: 'callout-worked-area',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Triangle Area',
        text: 'A triangle has base (2<em>x</em> + 3) cm and height (<em>x</em> − 1) cm. Its area is 14 cm². Find <em>x</em>.<br><br>Area = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × base × height<br><br>14 = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>(2<em>x</em> + 3)(<em>x</em> − 1)<br>28 = (2<em>x</em> + 3)(<em>x</em> − 1)<br>28 = 2<em>x</em>² − 2<em>x</em> + 3<em>x</em> − 3<br>28 = 2<em>x</em>² + <em>x</em> − 3<br>2<em>x</em>² + <em>x</em> − 31 = 0<br><br>Quadratic formula: <em>x</em> = <span class="nb-frac"><span class="nb-num">−1 ± √(1 + 248)</span><span class="nb-den">4</span></span> = <span class="nb-frac"><span class="nb-num">−1 ± √249</span><span class="nb-den">4</span></span><br><br><em>x</em> ≈ 3.70 (reject negative as dimensions must be positive)'
      }
    },
    {
      id: 'h-angles',
      type: 'heading',
      data: { text: 'Angle Problems', level: 2 }
    },
    {
      id: 'callout-key-angles',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Useful Angle Rules',
        text: '• Angles in a <strong>triangle</strong> sum to 180°<br>• Angles in a <strong>quadrilateral</strong> sum to 360°<br>• Angles on a <strong>straight line</strong> sum to 180°<br>• <strong>Isosceles</strong> triangles: two angles equal<br>• Interior angles of an <em>n</em>-sided polygon sum to (<em>n</em> − 2) × 180°'
      }
    },
    {
      id: 'callout-worked-angle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Triangle Angles',
        text: 'A triangle has angles (<em>x</em> + 10)°, (2<em>x</em> − 5)° and (3<em>x</em> + 25)°. Find each angle.<br><br>Sum = 180°:<br>(<em>x</em> + 10) + (2<em>x</em> − 5) + (3<em>x</em> + 25) = 180<br>6<em>x</em> + 30 = 180<br>6<em>x</em> = 150<br><em>x</em> = 25<br><br><strong>Angles: 35°, 45°, 100°.</strong> (Check: 35 + 45 + 100 = 180 ✓)'
      }
    },
    {
      id: 'h-equal-sides',
      type: 'heading',
      data: { text: 'Equal Lengths / Equal Areas', level: 2 }
    },
    {
      id: 'callout-worked-equal',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Equal Areas',
        text: 'A square has side (<em>x</em> + 1) cm. A rectangle has length (2<em>x</em> − 1) cm and width 3 cm. Their areas are equal. Find <em>x</em>.<br><br>(<em>x</em> + 1)² = 3(2<em>x</em> − 1)<br><em>x</em>² + 2<em>x</em> + 1 = 6<em>x</em> − 3<br><em>x</em>² − 4<em>x</em> + 4 = 0<br>(<em>x</em> − 2)² = 0<br><em>x</em> = 2<br><br><strong>Square side = 3 cm, Rectangle = 3 × 3 cm.</strong>'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistakes',
        text: '• Forgetting to double when using perimeter = 2(l + w)<br>• Not rejecting negative solutions when lengths must be positive<br>• Mixing up angle sum rules for different shapes'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'After finding <em>x</em>, substitute back to find actual lengths/angles. Check they are sensible (positive lengths, angles sum correctly). This can earn you checking marks.'
      }
    },
    {
      id: 'summary-1',
      type: 'summary',
      data: { text: 'Use geometric properties (perimeter, area, angle sums) to form equations from shapes. Solve the equation, reject invalid solutions (negative lengths), and give the final answer in context.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Use perimeter, area, and angle sum rules to form equations. Solve and check that solutions give valid dimensions.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key-angles', prompt: 'What do angles in a triangle sum to?', answer: '180°.' },
      { id: 'cue-2', blockId: 'callout-worked-perim', prompt: 'A rectangle has length (3x+1) and width (x+4). Perimeter is 50. Find x.', answer: '50 = 2(4x+5) &rarr; x = 5.' },
      { id: 'cue-3', blockId: 'callout-warning', prompt: 'Why must you reject negative solutions in shape problems?', answer: 'Because lengths and dimensions must be positive.' },
      { id: 'cue-4', blockId: 'callout-key-angles', prompt: 'What is the interior angle sum of a polygon with n sides?', answer: '(n − 2) × 180°.' },
      { id: 'cue-5', blockId: 'callout-worked-area', prompt: 'What type of equation can area problems lead to?', answer: 'Quadratic equations, because area involves multiplying two linear expressions.' }
    ]
  },
  evidence: []
};
