export const note_olevel_physics_1_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-7-2-kinetic-energy.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recall and apply the equation KE = ½mv²; understand how kinetic energy depends on mass and velocity; solve problems involving KE.' },
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'What is Kinetic Energy?', level: 2 },
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'Kinetic energy (KE) is the energy an object has <strong>because of its motion</strong>. Any moving object has kinetic energy. The greater the mass and the greater the speed, the more kinetic energy the object stores.' },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Kinetic Energy Formula',
        text: 'KE = ½mv²<br><br>KE = kinetic energy (J)<br>m = mass (kg)<br>v = speed (m/s)',
      },
    },
    {
      id: 'eq-ke',
      type: 'equation',
      data: {
        html: 'KE = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> mv²',
        caption: 'Kinetic energy in joules (J)',
      },
    },
    {
      id: 'h-examples',
      type: 'heading',
      data: { text: 'Worked Examples', level: 2 },
    },
    {
      id: 'call-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 1: Calculate KE of a Car',
        text: 'A car of mass 1200 kg travels at 20 m/s. Find its kinetic energy.<br><br>KE = ½mv² = ½ × 1200 × 20² = ½ × 1200 × 400 = <strong>240 000 J = 240 kJ</strong>',
      },
    },
    {
      id: 'call-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example 2: Find Speed from KE',
        text: 'A ball of mass 0.5 kg has KE = 25 J. Find its speed.<br><br>25 = ½ × 0.5 × v²<br>v² = 25 ÷ 0.25 = 100<br>v = √100 = <strong>10 m/s</strong>',
      },
    },
    {
      id: 'svg-ke',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="400" height="210" fill="#1c3a64" rx="10"/>
  <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">How KE Depends on Speed</text>
  <!-- Axes -->
  <line x1="55" y1="170" x2="370" y2="170" stroke="#374151" stroke-width="2"/>
  <line x1="55" y1="170" x2="55" y2="30" stroke="#374151" stroke-width="2"/>
  <text x="210" y="195" text-anchor="middle" font-size="11" fill="#374151">Speed (m/s)</text>
  <text x="14" y="100" text-anchor="middle" font-size="11" fill="#374151" transform="rotate(-90,14,100)">KE (J)</text>
  <!-- KE = ½mv² curve — parabola -->
  <polyline points="55,170 80,162 105,140 130,107 155,64 180,32" stroke="#6366f1" stroke-width="2.5" fill="none"/>
  <text x="185" y="28" font-size="10" fill="#6366f1">KE ∝ v²</text>
  <!-- Axis marks -->
  <text x="55" y="184" text-anchor="middle" font-size="10" fill="#374151">0</text>
  <line x1="130" y1="167" x2="130" y2="173" stroke="#374151"/>
  <text x="130" y="183" text-anchor="middle" font-size="10" fill="#374151">2v</text>
  <line x1="180" y1="167" x2="180" y2="173" stroke="#374151"/>
  <text x="180" y="183" text-anchor="middle" font-size="10" fill="#374151">3v</text>
  <!-- Annotations -->
  <line x1="80" y1="162" x2="80" y2="170" stroke="#e2e8f0" stroke-dasharray="3,3"/>
  <line x1="55" y1="162" x2="80" y2="162" stroke="#e2e8f0" stroke-dasharray="3,3"/>
  <circle cx="80" cy="162" r="3" fill="#6366f1"/>
  <line x1="130" y1="107" x2="130" y2="170" stroke="#e2e8f0" stroke-dasharray="3,3"/>
  <line x1="55" y1="107" x2="130" y2="107" stroke="#e2e8f0" stroke-dasharray="3,3"/>
  <circle cx="130" cy="107" r="3" fill="#6366f1"/>
  <text x="200" y="115" font-size="9" fill="#374151">Double speed →</text>
  <text x="200" y="125" font-size="9" fill="#374151">4× the KE</text>
</svg>`,
        caption: 'KE is proportional to v² — doubling speed quadruples kinetic energy.',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: v² means speed squared',
        text: 'At twice the speed, KE is FOUR times bigger (2² = 4). At three times the speed, KE is NINE times bigger. This is why speed limits save lives — a car at 60 mph has <em>four times</em> the KE of a car at 30 mph.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Kinetic energy = ½mv². KE depends on both mass and speed. Because v is squared, doubling speed quadruples KE. Rearrange to find mass or speed when KE is given. Units: KE in J, m in kg, v in m/s.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'KE = ½mv². Doubling speed → 4× KE. Units: J, kg, m/s.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'Write the equation for kinetic energy. What are the units of each quantity?', answer: 'KE = ½mv². KE in joules (J), m in kilograms (kg), v in metres per second (m/s).' },
      { id: 'cue-2', blockId: 'call-we1', prompt: 'A car of mass 1200 kg travels at 20 m/s. Calculate its kinetic energy.', answer: 'KE = ½ × 1200 × 20² = ½ × 1200 × 400 = 240 000 J = 240 kJ.' },
      { id: 'cue-3', blockId: 'svg-ke', prompt: 'If an object doubles its speed, what happens to its kinetic energy?', answer: 'KE is proportional to v², so doubling the speed multiplies KE by 2² = 4. Kinetic energy becomes four times greater.' },
      { id: 'cue-4', blockId: 'call-we2', prompt: 'A ball of mass 0.5 kg has kinetic energy 25 J. Find its speed.', answer: '25 = ½ × 0.5 × v², so v² = 25 ÷ 0.25 = 100, giving v = 10 m/s.' },
    ],
  },
  evidence: [],
  mentions: [],
};
