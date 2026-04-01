export const note_olevel_maths_core_5_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/similar-lengths.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Apply the relationships between linear, area, and volume scale factors for similar shapes. Given any scale factor, calculate corresponding lengths, areas, or volumes.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Scale Factors for Length, Area and Volume', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'When two similar shapes have linear scale factor <b>k</b> (lengths of the larger shape are k times the lengths of the smaller shape), then areas and volumes scale by different amounts:',
      },
    },
    {
      id: 'tbl-scale',
      type: 'comparisonTable',
      data: {
        caption: 'Scale factors for similar shapes',
        headers: ['Dimension', 'Scale Factor', 'Example (k = 3)'],
        rows: [
          ['Lengths (1D)', 'k', 'Length × 3'],
          ['Areas (2D)', 'k²', 'Area × 9'],
          ['Volumes (3D)', 'k³', 'Volume × 27'],
        ],
      },
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Three Scale Factor Rules',
        text: 'If the linear scale factor is k:<br>• New length = k × old length<br>• New area = k² × old area<br>• New volume = k³ × old volume<br><br>To find k: k = new length ÷ old length<br>To find k from areas: k = √(new area ÷ old area)<br>To find k from volumes: k = ∛(new volume ÷ old volume)',
      },
    },
    {
      id: 'svg-scale',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial" font-size="11">
  <!-- Small square -->
  <rect x="20" y="40" width="60" height="60" fill="#2d1b69" stroke="#3b82f6" stroke-width="2"/>
  <text x="50" y="115" text-anchor="middle" fill="#3b82f6">s = 4 cm</text>
  <text x="50" y="130" text-anchor="middle" fill="#374151">Area = 16 cm²</text>
  <text x="50" y="145" text-anchor="middle" fill="#374151">Vol = 64 cm³</text>

  <!-- Arrow with scale factor -->
  <text x="165" y="75" text-anchor="middle" fill="#f59e0b" font-weight="bold" font-size="14">k = 2</text>
  <line x1="130" y1="70" x2="200" y2="70" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrhead)"/>

  <!-- Large square -->
  <rect x="220" y="20" width="120" height="120" fill="#0a2e1a" stroke="#10b981" stroke-width="2"/>
  <text x="280" y="155" text-anchor="middle" fill="#10b981">s = 8 cm (×2)</text>
  <text x="280" y="170" fill="none"/>

  <!-- Labels under -->
  <text x="50" y="160" text-anchor="middle" fill="#374151" font-size="10">Small</text>
  <text x="280" y="160" text-anchor="middle" fill="#374151" font-size="10">Large: Area = 64 cm² (×4), Vol = 512 cm³ (×8)</text>
</svg>`,
        caption: 'Scale factor k = 2: sides double, area quadruples (×4), volume octuples (×8)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find area from scale factor',
        text: 'Two similar rectangles have corresponding sides 5 cm and 15 cm. The area of the small rectangle is 20 cm². Find the area of the large rectangle.<br><br>k = 15 ÷ 5 = 3<br>Area scale factor = k² = 9<br>Large area = 9 × 20 = <b>180 cm²</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find volume from scale factor',
        text: 'Two similar cylinders have heights 4 cm and 12 cm. The volume of the small cylinder is 50 cm³. Find the volume of the large cylinder.<br><br>k = 12 ÷ 4 = 3<br>Volume scale factor = k³ = 27<br>Large volume = 27 × 50 = <b>1350 cm³</b>',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Find length from area scale factor',
        text: 'Two similar triangles have areas 25 cm² and 100 cm². A side of the small triangle is 6 cm. Find the corresponding side of the large triangle.<br><br>Area scale factor = 100 ÷ 25 = 4<br>Linear scale factor k = √4 = 2<br>Large side = 6 × 2 = <b>12 cm</b>',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Find length from volume scale factor',
        text: 'Two similar spheres have volumes 54 cm³ and 128 cm³. Find the ratio of their radii.<br><br>Volume scale factor = 128 ÷ 54 = 64/27<br>Linear scale factor k = ∛(64/27) = 4/3<br>Ratio of radii = 4 : 3 (or k = 4/3, meaning large is 4/3 times the small)',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'If you are given two lengths, divide to find k (linear). If given two areas, divide then square root to find k. If given two volumes, divide then cube root to find k. Then power up as needed.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do NOT use the linear scale factor directly for area questions, or the area scale factor for volume questions. Always apply the correct power: k for lengths, k² for areas, k³ for volumes.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I know that lengths scale by k, areas by k², volumes by k³', checked: false },
          { text: 'I can find k from two corresponding lengths, then apply to area or volume', checked: false },
          { text: 'I can work backwards: given areas, find k = √(ratio); given volumes, find k = ∛(ratio)', checked: false },
          { text: 'I can solve problems involving all three types of scale', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Linear scale factor k: lengths ×k, areas ×k², volumes ×k³. To find k from areas: k = √(area ratio). To find k from volumes: k = ∛(volume ratio). Always apply the correct power.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Scale factors: lengths ×k, areas ×k², volumes ×k³. Find k from areas via √; from volumes via ∛.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-scale', prompt: 'If the linear scale factor is k, what is the area scale factor?' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'How do you find the linear scale factor if you are given two corresponding areas?' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'Two similar shapes have corresponding sides 5 cm and 15 cm. The small one has area 20 cm². Find the area of the large one.' },
      { id: 'cue-4', blockId: 'callout-we3', prompt: 'Two similar triangles have areas 25 cm² and 100 cm². How do you find the linear scale factor?' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why is it wrong to use the linear scale factor directly for area problems?' },
    ],
  },
  evidence: [],
  mentions: [],
};
