export const note_olevel_maths_core_5_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/arc-lengths-and-sector-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the arc length and sector area of a circle given the radius and the angle at the centre. Find the perimeter of a sector and solve reverse problems to find radius or angle.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Sectors and Arcs', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'A <b>sector</b> is a "slice" of a circle — the region bounded by two radii and an arc. The <b>arc</b> is the curved part of the boundary. The angle θ at the centre determines how large a fraction of the full circle the sector is: the fraction is <b>θ/360</b>.',
      },
    },
    {
      id: 'svg-sector',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="12">
  <!-- full circle outline faint -->
  <circle cx="140" cy="120" r="90" fill="none" stroke="#d1d5db" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- sector fill -->
  <path d="M140,120 L140,30 A90,90 0 0,1 225,165 Z" fill="#2d1b69" stroke="#6366f1" stroke-width="2"/>
  <!-- angle arc -->
  <path d="M140,120 m30,0 A30,30 0 0,1 140,90" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <!-- labels -->
  <text x="165" y="105" fill="#f59e0b" font-weight="bold">θ</text>
  <text x="87" y="75" fill="#6366f1">r</text>
  <text x="188" y="152" fill="#6366f1">r</text>
  <text x="175" y="80" fill="#10b981" font-style="italic">arc length</text>
  <line x1="140" y1="120" x2="140" y2="30" stroke="#6366f1" stroke-width="2"/>
  <line x1="140" y1="120" x2="225" y2="165" stroke="#6366f1" stroke-width="2"/>
  <circle cx="140" cy="120" r="3" fill="#374151"/>
  <text x="140" y="210" text-anchor="middle" fill="#374151" font-size="11">Sector with radius r and angle θ at centre</text>
</svg>`,
        caption: 'A sector of a circle: the fraction of the full circle is θ/360',
      },
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Arc Length and Sector Area Formulas', level: 2 },
    },
    {
      id: 'eq-arc',
      type: 'equation',
      data: {
        html: 'Arc length = <span class="nb-frac"><span class="nb-num">θ</span><span class="nb-den">360</span></span> × 2πr',
        caption: 'Arc length (θ = angle at centre in degrees)',
      },
    },
    {
      id: 'eq-sector',
      type: 'equation',
      data: {
        html: 'Sector area = <span class="nb-frac"><span class="nb-num">θ</span><span class="nb-den">360</span></span> × πr²',
        caption: 'Area of a sector',
      },
    },
    {
      id: 'callout-perim',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Perimeter of a Sector',
        text: 'The perimeter of a sector is the arc length PLUS the two straight radii:<br><b>Perimeter = arc length + 2r</b>',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Arc length',
        text: 'A sector has radius 8 cm and angle 90° at the centre. Find the arc length.<br><br>Arc length = (90/360) × 2π × 8 = ¼ × 16π = 4π ≈ <b>12.6 cm</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Sector area',
        text: 'A sector has radius 10 cm and angle 72°. Find its area.<br><br>Area = (72/360) × π × 10² = (1/5) × 100π = 20π ≈ <b>62.8 cm²</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Full perimeter of a sector',
        text: 'A sector has radius 6 cm and angle 120°. Find the full perimeter of the sector.<br><br>Arc length = (120/360) × 2π × 6 = (1/3) × 12π = 4π ≈ 12.57 cm<br>Perimeter = arc + 2r = 12.57 + 12 = <b>24.6 cm</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Find angle from arc length',
        text: 'A sector has radius 9 cm and arc length 12 cm. Find the angle at the centre.<br><br>Arc length = (θ/360) × 2πr<br>12 = (θ/360) × 2π × 9<br>12 = (θ/360) × 18π<br>θ/360 = 12 ÷ (18π) = 0.2122<br>θ = 0.2122 × 360 ≈ <b>76.4°</b>',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Remember: arc length and sector area are just a <b>fraction of the whole circle</b>. The fraction is always θ/360. Apply it to the full circumference (2πr) for arc length, and to the full area (πr²) for sector area.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Perimeter of Sector',
        text: 'The perimeter of a sector is NOT just the arc length. It includes the two straight radii. Always add 2r to the arc length when asked for the full perimeter.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can apply arc length = (θ/360) × 2πr', checked: false },
          { text: 'I can apply sector area = (θ/360) × πr²', checked: false },
          { text: 'I can find the perimeter of a sector (arc + 2r)', checked: false },
          { text: 'I can find the angle given arc length or sector area', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr². Both are fractions of the full circle. Perimeter of sector = arc length + 2r. To find θ, rearrange: θ = (arc length × 360) ÷ (2πr).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Arc length = (θ/360)×2πr; Sector area = (θ/360)×πr². Sector perimeter = arc + 2r.',
    cues: [
      { id: 'cue-1', blockId: 'eq-arc', prompt: 'Write the formula for arc length of a sector.' },
      { id: 'cue-2', blockId: 'eq-sector', prompt: 'Write the formula for the area of a sector.' },
      { id: 'cue-3', blockId: 'callout-perim', prompt: 'What three parts make up the perimeter of a sector?' },
      { id: 'cue-4', blockId: 'callout-we1', prompt: 'A sector has r = 8 cm and θ = 90°. What is the arc length?' },
      { id: 'cue-5', blockId: 'callout-we4', prompt: 'If you know the arc length and radius, how do you find the angle?' },
    ],
  },
  evidence: [],
  mentions: [],
};
