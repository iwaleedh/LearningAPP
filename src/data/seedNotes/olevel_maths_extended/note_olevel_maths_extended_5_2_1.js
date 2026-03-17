export const note_olevel_maths_extended_5_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/arc-lengths-and-sector-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate arc lengths and sector areas using the angle at the centre, and find the area of a segment.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Arc Lengths and Sector Areas', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>sector</strong> is a "slice" of a circle formed by two radii and an arc. The <strong>arc length</strong> is the curved edge of the sector. Both depend on the angle θ at the centre.' }
    },
    {
      id: 'h-arc',
      type: 'heading',
      data: { text: 'Arc Length', level: 2 }
    },
    {
      id: 'eq-arc',
      type: 'equation',
      data: {
        html: 'Arc length = <span class="nb-frac"><span class="nb-num">θ</span><span class="nb-den">360</span></span> × 2πr',
        caption: 'Arc length formula (θ in degrees)'
      }
    },
    {
      id: 'h-sector',
      type: 'heading',
      data: { text: 'Sector Area', level: 2 }
    },
    {
      id: 'eq-sector',
      type: 'equation',
      data: {
        html: 'Sector area = <span class="nb-frac"><span class="nb-num">θ</span><span class="nb-den">360</span></span> × πr²',
        caption: 'Sector area formula (θ in degrees)'
      }
    },
    {
      id: 'callout-key-frac',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — The Fraction of a Circle',
        text: 'Both formulae use the fraction <span class="nb-frac"><span class="nb-num">θ</span><span class="nb-den">360</span></span>. This tells you what proportion of the full circle the sector represents.'
      }
    },
    {
      id: 'callout-worked-arc',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Arc Length',
        text: 'A sector has radius 10 cm and angle 72°. Find the arc length.<br><br><strong>Solution:</strong><br>Arc = (72/360) × 2π × 10<br>Arc = 0.2 × 20π<br>Arc = 4π<br>Arc = <strong>12.6 cm</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-worked-sector',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Sector Area',
        text: 'Find the area of a sector with radius 8 cm and angle 135°.<br><br><strong>Solution:</strong><br>A = (135/360) × π × 8²<br>A = 0.375 × 64π<br>A = 24π<br>A = <strong>75.4 cm²</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-segment',
      type: 'heading',
      data: { text: 'Segment Area', level: 2 }
    },
    {
      id: 'p-segment',
      type: 'paragraph',
      data: { text: 'A <strong>segment</strong> is the region between a chord and the arc. To find the area of a segment, subtract the triangle from the sector.' }
    },
    {
      id: 'eq-segment',
      type: 'equation',
      data: {
        html: 'Segment area = Sector area − Triangle area',
        caption: 'Area of a segment'
      }
    },
    {
      id: 'p-segment-tri',
      type: 'paragraph',
      data: { text: 'The triangle formed by the two radii and the chord has area = ½r² sin θ (using the sine rule for area).' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The perimeter of a sector is arc length + 2r (don\'t forget the two straight radii). For a segment perimeter, it is arc length + chord length.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr². Segment area = sector area − triangle area. The fraction θ/360 represents the proportion of the full circle.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-arc', prompt: 'State the formula for arc length.', answer: 'Arc length = (θ/360) × 2πr.' },
      { id: 'cue-2', blockId: 'eq-sector', prompt: 'State the formula for sector area.', answer: 'Sector area = (θ/360) × πr².' },
      { id: 'cue-3', blockId: 'p-segment', prompt: 'How do you find the area of a segment?', answer: 'Segment area = sector area − triangle area.' },
      { id: 'cue-4', blockId: 'callout-key-frac', prompt: 'What does the fraction θ/360 represent?', answer: 'The proportion of the full circle that the sector covers.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What is the perimeter of a sector?', answer: 'Arc length + 2r (the two radii plus the curved arc).' }
    ],
    summaryText: 'Use the fraction θ/360 of the full circle formula for arc lengths and sector areas; segment area = sector − triangle.',
    ready: true
  },
  evidence: []
};
