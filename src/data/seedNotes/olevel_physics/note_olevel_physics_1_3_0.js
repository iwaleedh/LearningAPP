export const note_olevel_physics_1_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-3-1-mass-and-weight.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define mass and weight; distinguish between them; use W = mg; state g = 10 N/kg on Earth; explain why weight varies with location but mass does not.' },
    },
    {
      id: 'h-mass',
      type: 'heading',
      data: { text: 'Mass', level: 2 },
    },
    {
      id: 'para-mass',
      type: 'paragraph',
      data: { text: '<strong>Mass</strong> is the amount of matter in an object. It is a <em>scalar</em> quantity measured in <strong>kilograms (kg)</strong>. Mass does not change with location — it is the same on Earth, the Moon, or in space. Mass is measured using a <strong>balance</strong>.' },
    },
    {
      id: 'h-weight',
      type: 'heading',
      data: { text: 'Weight', level: 2 },
    },
    {
      id: 'para-weight',
      type: 'paragraph',
      data: { text: '<strong>Weight</strong> is the gravitational force exerted on an object. It is a <em>vector</em> quantity directed toward the centre of the Earth (or other gravitational body), measured in <strong>newtons (N)</strong>. Weight is measured using a <strong>newton-meter (spring balance)</strong>.' },
    },
    {
      id: 'eq-weight',
      type: 'equation',
      data: {
        html: 'W = m × g',
        caption: 'W = weight (N), m = mass (kg), g = gravitational field strength (N/kg); g = 10 N/kg on Earth',
      },
    },
    {
      id: 'tbl-mw',
      type: 'comparisonTable',
      data: {
        caption: 'Mass vs Weight',
        headers: ['Feature', 'Mass', 'Weight'],
        rows: [
          ['Definition', 'Amount of matter', 'Gravitational force on an object'],
          ['Type', 'Scalar', 'Vector'],
          ['Unit', 'kilogram (kg)', 'newton (N)'],
          ['Measured with', 'Balance', 'Newton-meter / spring balance'],
          ['Changes with location?', 'No (same everywhere)', 'Yes (less on Moon, zero in deep space)'],
          ['On Earth (70 kg person)', '70 kg', '700 N'],
          ['On Moon (g = 1.6 N/kg)', '70 kg (unchanged)', '112 N'],
        ],
      },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gravitational Field Strength g',
        text: '<strong>On Earth:</strong> g = 10 N/kg (or 10 m/s²)<br><strong>On the Moon:</strong> g ≈ 1.6 N/kg<br>g tells you how many newtons of weight per kilogram of mass. A larger g means stronger gravity and greater weight for the same mass.',
      },
    },
    {
      id: 'svg-weight',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="420" height="200" fill="#3d1212" rx="10"/>
  <text x="210" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#7f1d1d">Weight Changes, Mass Does Not</text>
  <!-- Earth panel -->
  <rect x="30" y="40" width="160" height="140" fill="#1e3a8a" rx="8" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="110" y="63" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Earth</text>
  <text x="110" y="83" text-anchor="middle" font-size="12" fill="#1e40af">g = 10 N/kg</text>
  <circle cx="110" cy="120" r="20" fill="#60a5fa"/>
  <text x="110" y="124" text-anchor="middle" font-size="11" fill="#1e293b">m = 60 kg</text>
  <line x1="110" y1="140" x2="110" y2="165" stroke="#ef4444" stroke-width="2"/>
  <polygon points="110,165 106,155 114,155" fill="#ef4444"/>
  <text x="110" y="180" text-anchor="middle" font-size="11" fill="#ef4444">W = 600 N</text>
  <!-- Moon panel -->
  <rect x="230" y="40" width="160" height="140" fill="#0a2e1a" rx="8" stroke="#16a34a" stroke-width="1.5"/>
  <text x="310" y="63" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Moon</text>
  <text x="310" y="83" text-anchor="middle" font-size="12" fill="#15803d">g = 1.6 N/kg</text>
  <circle cx="310" cy="120" r="20" fill="#0a2e1a"/>
  <text x="310" y="124" text-anchor="middle" font-size="11" fill="#1e293b">m = 60 kg</text>
  <line x1="310" y1="140" x2="310" y2="165" stroke="#ef4444" stroke-width="2"/>
  <polygon points="310,165 306,155 314,155" fill="#ef4444"/>
  <text x="310" y="180" text-anchor="middle" font-size="11" fill="#ef4444">W = 96 N</text>
</svg>`,
        caption: 'Mass is the same on Earth and Moon (60 kg); weight differs because g is different',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> An astronaut has a mass of 80 kg. Calculate (a) their weight on Earth (g = 10 N/kg) and (b) their weight on Mars (g = 3.7 N/kg).<br><br><strong>a)</strong> W = mg = 80 × 10 = <strong>800 N</strong><br><strong>b)</strong> W = 80 × 3.7 = <strong>296 N</strong>',
      },
    },
    {
      id: 'call-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A common error is saying "weight = 70 kg" — this is wrong. Weight is always in <strong>newtons</strong> (since it is a force). If a question says mass = 5 kg, weight = 5 × 10 = 50 N on Earth.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Mass (kg, scalar) = amount of matter — constant everywhere. Weight (N, vector) = gravitational force = mg — varies with location. On Earth g = 10 N/kg; on Moon g = 1.6 N/kg. Weight measured with a newton-meter; mass with a balance.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Mass (kg) is constant; weight W = mg (N) varies with gravitational field strength g.',
    cues: [
      { id: 'cue-1', blockId: 'eq-weight', prompt: 'Write the equation relating weight, mass, and gravitational field strength.', answer: 'W = mg; W in newtons (N), m in kg, g in N/kg (10 N/kg on Earth).' },
      { id: 'cue-2', blockId: 'tbl-mw', prompt: 'List three differences between mass and weight.', answer: 'Mass: scalar, kg, constant at all locations. Weight: vector, newtons, varies with location (depends on g).' },
      { id: 'cue-3', blockId: 'svg-weight', prompt: 'An object has a mass of 60 kg on Earth. What is its mass and weight on the Moon (g = 1.6 N/kg)?', answer: 'Mass remains 60 kg (unchanged); Weight = 60 × 1.6 = 96 N.' },
      { id: 'cue-4', blockId: 'call-key', prompt: 'What does gravitational field strength g represent?', answer: 'g is the gravitational force per unit mass (N/kg). On Earth g = 10 N/kg, meaning each kilogram experiences 10 N of gravitational force.' },
    ],
  },
  evidence: [],
  mentions: [],
};
