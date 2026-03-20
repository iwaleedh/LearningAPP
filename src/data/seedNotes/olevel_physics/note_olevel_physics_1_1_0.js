export const note_olevel_physics_1_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-1-1-measurement.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand SI base units and prefixes; use measuring instruments (ruler, vernier calliper, micrometer, stopwatch, ticker tape timer) correctly; express measurements with appropriate significant figures and uncertainty.' },
    },
    {
      id: 'h-si-units',
      type: 'heading',
      data: { text: 'SI Base Units', level: 2 },
    },
    {
      id: 'para-si',
      type: 'paragraph',
      data: { text: 'The International System of Units (SI) provides a universal language for measurement. Every physical quantity can be expressed in terms of <strong>seven base units</strong>. For IGCSE Physics, you need to know six of them.' },
    },
    {
      id: 'tbl-si',
      type: 'comparisonTable',
      data: {
        caption: 'SI Base Units',
        headers: ['Quantity', 'Unit', 'Symbol'],
        rows: [
          ['Length', 'metre', 'm'],
          ['Mass', 'kilogram', 'kg'],
          ['Time', 'second', 's'],
          ['Electric current', 'ampere', 'A'],
          ['Temperature', 'kelvin', 'K'],
          ['Amount of substance', 'mole', 'mol'],
        ],
      },
    },
    {
      id: 'h-prefixes',
      type: 'heading',
      data: { text: 'SI Prefixes', level: 2 },
    },
    {
      id: 'tbl-prefixes',
      type: 'comparisonTable',
      data: {
        caption: 'Common SI Prefixes',
        headers: ['Prefix', 'Symbol', 'Multiplier', 'Example'],
        rows: [
          ['giga', 'G', '× 10⁹', '1 GHz = 10⁹ Hz'],
          ['mega', 'M', '× 10⁶', '1 MHz = 10⁶ Hz'],
          ['kilo', 'k', '× 10³', '1 km = 1000 m'],
          ['centi', 'c', '× 10⁻²', '1 cm = 0.01 m'],
          ['milli', 'm', '× 10⁻³', '1 mm = 0.001 m'],
          ['micro', 'μ', '× 10⁻⁶', '1 μm = 10⁻⁶ m'],
          ['nano', 'n', '× 10⁻⁹', '1 nm = 10⁻⁹ m'],
        ],
      },
    },
    {
      id: 'h-measuring-length',
      type: 'heading',
      data: { text: 'Measuring Length', level: 2 },
    },
    {
      id: 'para-ruler',
      type: 'paragraph',
      data: { text: 'A <strong>metre ruler</strong> measures lengths to the nearest 1 mm (precision ± 0.5 mm). Always read from directly above to avoid <em>parallax error</em> — the apparent shift in position when viewed from an angle.' },
    },
    {
      id: 'svg-vernier',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="460" height="220" fill="#0f172a" rx="10"/>
  <text x="230" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b">Vernier Calliper</text>
  <!-- main scale body -->
  <rect x="30" y="60" width="320" height="30" fill="#1e293b" rx="3"/>
  <!-- main scale markings -->
  <line x1="50" y1="60" x2="50" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="70" y1="60" x2="70" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="90" y1="60" x2="90" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="110" y1="60" x2="110" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="130" y1="60" x2="130" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="150" y1="60" x2="150" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="170" y1="60" x2="170" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="190" y1="60" x2="190" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="210" y1="60" x2="210" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="230" y1="60" x2="230" y2="55" stroke="#1e293b" stroke-width="1"/>
  <line x1="250" y1="60" x2="250" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50" y="45" text-anchor="middle" font-size="10" fill="#1e293b">0</text>
  <text x="150" y="45" text-anchor="middle" font-size="10" fill="#1e293b">1</text>
  <text x="250" y="45" text-anchor="middle" font-size="10" fill="#1e293b">2</text>
  <text x="200" y="115" text-anchor="middle" font-size="11" fill="#475569">Main scale (cm)</text>
  <!-- vernier scale (sliding jaw) -->
  <rect x="130" y="90" width="120" height="22" fill="#1250a0" rx="2" opacity="0.8"/>
  <line x1="140" y1="90" x2="140" y2="100" stroke="#1e40af" stroke-width="1"/>
  <line x1="152" y1="90" x2="152" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="164" y1="90" x2="164" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="176" y1="90" x2="176" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="188" y1="90" x2="188" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="200" y1="90" x2="200" y2="100" stroke="#1e40af" stroke-width="1.5"/>
  <line x1="212" y1="90" x2="212" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="224" y1="90" x2="224" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="236" y1="90" x2="236" y2="98" stroke="#1e40af" stroke-width="1"/>
  <line x1="248" y1="90" x2="248" y2="98" stroke="#1e40af" stroke-width="1"/>
  <text x="190" y="128" text-anchor="middle" font-size="11" fill="#1e40af">Vernier scale (× 0.1 mm)</text>
  <!-- labels -->
  <text x="40" y="175" font-size="12" fill="#1e293b" font-weight="bold">Reading:</text>
  <text x="40" y="195" font-size="12" fill="#0ea5e9">Main scale: 1.3 cm + Vernier: 0.06 cm = 1.36 cm</text>
  <text x="40" y="213" font-size="11" fill="#64748b">Precision: ± 0.01 cm (0.1 mm)</text>
</svg>`,
        caption: 'Vernier calliper — reads to 0.01 cm (0.1 mm) precision',
      },
    },
    {
      id: 'para-micro',
      type: 'paragraph',
      data: { text: 'A <strong>micrometer screw gauge</strong> measures to 0.01 mm precision. It has a thimble scale (0.01 mm divisions) and a sleeve scale (0.5 mm divisions). The combined reading gives the measurement.' },
    },
    {
      id: 'h-measuring-time',
      type: 'heading',
      data: { text: 'Measuring Time', level: 2 },
    },
    {
      id: 'para-time',
      type: 'paragraph',
      data: { text: 'A <strong>stopwatch</strong> measures time intervals. Digital stopwatches read to 0.01 s. A <strong>ticker tape timer</strong> makes 50 dots per second (50 Hz), so time between adjacent dots = 0.02 s. By measuring distances between dots, both speed and acceleration can be calculated.' },
    },
    {
      id: 'call-uncertainty',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Expressing Uncertainty',
        text: 'A measurement is written as: <em>a</em> ± Δ<em>a</em>, where <em>a</em> is the measured value and Δ<em>a</em> is the absolute uncertainty (half the smallest division of the instrument). Example: 2.35 ± 0.05 cm.',
      },
    },
    {
      id: 'call-tip-parallax',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Parallax Error',
        text: 'Always look straight at the scale, not from an angle. For a liquid in a measuring cylinder, read from the <strong>bottom of the meniscus</strong> at eye level to avoid parallax error.',
      },
    },
    {
      id: 'h-sigfig',
      type: 'heading',
      data: { text: 'Significant Figures', level: 2 },
    },
    {
      id: 'list-sigfig',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'All non-zero digits are significant: 345 has 3 s.f.' },
          { text: 'Zeros between non-zero digits are significant: 3045 has 4 s.f.' },
          { text: 'Leading zeros are NOT significant: 0.0045 has 2 s.f.' },
          { text: 'Trailing zeros after a decimal point ARE significant: 3.40 has 3 s.f.' },
          { text: 'Final answers should match the least number of s.f. in the data given.' },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'SI base units (m, kg, s, A, K, mol) with prefixes from nano (10⁻⁹) to giga (10⁹); length measured by ruler (±0.5 mm), vernier (±0.1 mm) or micrometer (±0.01 mm); ticker tape at 50 Hz gives 0.02 s per interval; measurements expressed as a ± Δa.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SI units, prefixes, measuring instruments and uncertainty expression for IGCSE Physics.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-si', prompt: 'State the SI unit for mass, length, time and temperature.', answer: 'Mass: kilogram (kg); Length: metre (m); Time: second (s); Temperature: kelvin (K).' },
      { id: 'cue-2', blockId: 'tbl-prefixes', prompt: 'What multiplier does the prefix "micro" (μ) represent?', answer: '× 10⁻⁶ (one millionth). Example: 1 μm = 10⁻⁶ m.' },
      { id: 'cue-3', blockId: 'svg-vernier', prompt: 'What is the precision of a vernier calliper?', answer: '±0.01 cm (0.1 mm). It reads the main scale (mm) plus a vernier scale that gives the tenth of a mm.' },
      { id: 'cue-4', blockId: 'para-time', prompt: 'A ticker tape timer runs at 50 Hz. What is the time between consecutive dots?', answer: '1 ÷ 50 = 0.02 s between consecutive dots.' },
      { id: 'cue-5', blockId: 'call-uncertainty', prompt: 'How do you write a measurement with uncertainty?', answer: 'As a ± Δa, e.g. 2.35 ± 0.05 cm, where Δa is half the smallest scale division.' },
    ],
  },
  evidence: [],
  mentions: [],
};
