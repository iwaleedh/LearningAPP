export const note_olevel_physics_1_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-1-3-calculating-with-vectors.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Add vectors graphically using the tip-to-tail method; find the resultant of perpendicular vectors using Pythagoras; resolve a vector into components.' },
    },
    {
      id: 'h-adding',
      type: 'heading',
      data: { text: 'Adding Vectors: Tip-to-Tail Method', level: 2 },
    },
    {
      id: 'para-tip-tail',
      type: 'paragraph',
      data: { text: 'To add two vectors graphically, draw the first vector as an arrow, then draw the second vector starting from the <em>tip</em> of the first. The <strong>resultant</strong> is the single arrow drawn from the <em>tail</em> of the first to the <em>tip</em> of the second.' },
    },
    {
      id: 'call-resultant',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Resultant Vector',
        text: 'The <strong>resultant</strong> is the single vector that produces the same effect as all the original vectors combined. It is found by placing vectors tip-to-tail and drawing from the start to the final tip.',
      },
    },
    {
      id: 'h-pythagoras',
      type: 'heading',
      data: { text: 'Perpendicular Vectors: Pythagoras and Trigonometry', level: 2 },
    },
    {
      id: 'para-pythagoras',
      type: 'paragraph',
      data: { text: 'When two vectors are at <strong>right angles</strong> to each other, the magnitude of the resultant is found using Pythagoras\' theorem. The direction is found using trigonometry (tan, sin, or cos).' },
    },
    {
      id: 'eq-pythagoras',
      type: 'equation',
      data: {
        html: 'R = √(A² + B²)',
        caption: 'Resultant of two perpendicular vectors A and B',
      },
    },
    {
      id: 'eq-angle',
      type: 'equation',
      data: {
        html: 'tan θ = <span class="nb-frac"><span class="nb-num">B</span><span class="nb-den">A</span></span>',
        caption: 'Direction of resultant (θ measured from A)',
      },
    },
    {
      id: 'svg-vector-add',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="280" fill="#fef9f0" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">Tip-to-Tail Vector Addition: 3 N East + 4 N North</text>
  <!-- East vector (3N) -->
  <line x1="80" y1="200" x2="200" y2="200" stroke="#ef4444" stroke-width="3"/>
  <polygon points="200,200 188,194 188,206" fill="#ef4444"/>
  <text x="140" y="220" text-anchor="middle" font-size="12" fill="#ef4444" font-weight="bold">3 N east</text>
  <!-- North vector (4N) from tip of east -->
  <line x1="200" y1="200" x2="200" y2="80" stroke="#3b82f6" stroke-width="3"/>
  <polygon points="200,80 194,92 206,92" fill="#3b82f6"/>
  <text x="225" y="145" font-size="12" fill="#3b82f6" font-weight="bold">4 N north</text>
  <!-- Resultant (5N) -->
  <line x1="80" y1="200" x2="200" y2="80" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="7,3"/>
  <polygon points="200,80 190,95 203,90" fill="#16a34a"/>
  <text x="115" y="130" font-size="12" fill="#16a34a" font-weight="bold">R = 5 N</text>
  <!-- Angle arc -->
  <path d="M 113 200 A 33 33 0 0 1 113 175" stroke="#16a34a" fill="none" stroke-width="1.5"/>
  <text x="120" y="186" font-size="11" fill="#166534">53°</text>
  <!-- Calculation box -->
  <rect x="240" y="80" width="165" height="100" fill="white" rx="6" stroke="#d1d5db" stroke-width="1"/>
  <text x="322" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">Calculation</text>
  <text x="255" y="118" font-size="11" fill="#374151">R = √(3² + 4²)</text>
  <text x="255" y="135" font-size="11" fill="#374151">R = √(9 + 16) = √25</text>
  <text x="255" y="152" font-size="11" fill="#16a34a" font-weight="bold">R = 5 N</text>
  <text x="255" y="169" font-size="11" fill="#374151">tan θ = 4/3 → θ = 53°</text>
  <!-- N/S/E/W compass -->
  <text x="52" y="168" font-size="12" fill="#4b5563">N ↑</text>
  <text x="52" y="205" font-size="12" fill="#4b5563">→ E</text>
</svg>`,
        caption: 'Tip-to-tail addition of 3 N east and 4 N north gives resultant 5 N at 53° N of E',
      },
    },
    {
      id: 'h-worked',
      type: 'heading',
      data: { text: 'Worked Example', level: 2 },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Finding a Resultant',
        text: '<strong>Problem:</strong> A boat travels 3 N east, then 4 N north. Find the resultant force and direction.<br><br><strong>Step 1:</strong> Identify vectors are perpendicular (east ⊥ north).<br><strong>Step 2:</strong> R = √(3² + 4²) = √(9 + 16) = √25 = <strong>5 N</strong><br><strong>Step 3:</strong> tan θ = 4/3 = 1.33 → θ = tan⁻¹(1.33) = <strong>53° north of east</strong><br><strong>Answer:</strong> Resultant = 5 N at 53° north of east.',
      },
    },
    {
      id: 'h-non-perp',
      type: 'heading',
      data: { text: 'Non-Perpendicular Vectors', level: 2 },
    },
    {
      id: 'para-non-perp',
      type: 'paragraph',
      data: { text: 'For vectors that are <em>not</em> at right angles, use a <strong>scale drawing</strong> (tip-to-tail on graph paper) and measure the resultant with a ruler and protractor. At IGCSE, you are expected to be able to do accurate scale drawings and read off the resultant\'s magnitude and direction.' },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Scale Drawings',
        text: 'When doing scale drawings: <strong>(1)</strong> state your scale clearly (e.g. 1 cm represents 10 N); <strong>(2)</strong> draw vectors with a ruler; <strong>(3)</strong> measure the resultant arrow from start to final tip; <strong>(4)</strong> use a protractor to measure the angle. Show all construction lines.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Vectors add tip-to-tail; the resultant goes from first tail to last tip. For perpendicular vectors: R = √(A² + B²) and θ = tan⁻¹(B/A). For non-perpendicular vectors, use a scale drawing with ruler and protractor.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Vectors add tip-to-tail; perpendicular resultants use Pythagoras: R = √(A² + B²).',
    cues: [
      { id: 'cue-1', blockId: 'para-tip-tail', prompt: 'Describe the tip-to-tail method for adding vectors.', answer: 'Draw the first vector, then place the tail of the next vector at the tip of the first. The resultant is the arrow from the first tail to the final tip.' },
      { id: 'cue-2', blockId: 'eq-pythagoras', prompt: 'What formula gives the magnitude of the resultant of two perpendicular vectors A and B?', answer: 'R = √(A² + B²) (Pythagoras\' theorem).' },
      { id: 'cue-3', blockId: 'svg-vector-add', prompt: 'A force of 3 N east and 4 N north act simultaneously. Find the resultant.', answer: 'R = √(3² + 4²) = 5 N; direction: tan⁻¹(4/3) = 53° north of east.' },
      { id: 'cue-4', blockId: 'para-non-perp', prompt: 'How do you find the resultant of vectors that are NOT perpendicular?', answer: 'Use a scale drawing (tip-to-tail on graph paper) and measure the resultant with a ruler and protractor.' },
    ],
  },
  evidence: [],
  mentions: [],
};
