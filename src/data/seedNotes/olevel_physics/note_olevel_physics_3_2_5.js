export const note_olevel_physics_3_2_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-2-6-dispersion-of-light.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain dispersion of white light by a prism. State the order of colours in the visible spectrum. Explain why violet refracts most and red the least. Describe rainbows as a natural example.' },
    },
    {
      id: 'h-white',
      type: 'heading',
      data: { text: 'White Light and the Visible Spectrum', level: 2 },
    },
    {
      id: 'para-white',
      type: 'paragraph',
      data: { text: 'White light is <em>not</em> a single colour — it is a mixture of all the colours of the visible spectrum. Each colour corresponds to light of a different <strong>wavelength</strong> (and frequency). The human eye detects wavelengths roughly from 400 nm (violet) to 700 nm (red).' },
    },
    {
      id: 'h-dispersion',
      type: 'heading',
      data: { text: 'Dispersion Through a Prism', level: 2 },
    },
    {
      id: 'para-dispersion',
      type: 'paragraph',
      data: { text: 'When white light enters a glass prism, different wavelengths (colours) travel at slightly different speeds in glass and therefore have slightly different refractive indices. Shorter wavelengths (violet) slow down more → larger refractive index → greater bending. Longer wavelengths (red) slow down less → smaller refractive index → less bending. This separates white light into its constituent colours — <strong>dispersion</strong>.' },
    },
    {
      id: 'callout-order',
      type: 'callout',
      data: {
        style: 'key',
        title: 'ROYGBIV — Visible Spectrum Order',
        text: 'Red → Orange → Yellow → Green → Blue → Indigo → Violet\n\nRed: longest λ (≈700 nm), lowest f, least refraction\nViolet: shortest λ (≈400 nm), highest f, most refraction',
      },
    },
    {
      id: 'svg-prism',
      type: 'svg',
      data: {
        caption: 'White light dispersed into ROYGBIV spectrum by a glass prism — violet bends most, red least',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="480" height="300">
  <defs>
    <marker id="aw25" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#1e293b"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:11px;fill:#1e293b;}</style>
  <!-- Prism -->
  <polygon points="200,40 120,240 280,240" fill="#0e4a56" opacity="0.5" stroke="#0e7490" stroke-width="2"/>
  <text x="185" y="165" fill="#0e7490" font-weight="bold">Glass</text>
  <text x="182" y="178" fill="#0e7490" font-weight="bold">Prism</text>
  <!-- Incoming white ray -->
  <line x1="30" y1="100" x2="156" y2="130" stroke="#e2e8f0" stroke-width="5"/>
  <line x1="30" y1="100" x2="156" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="none"/>
  <text x="5" y="95" fill="#374151">White</text>
  <text x="5" y="108" fill="#374151">light</text>
  <!-- Dispersed rays exiting prism right face -->
  <!-- Red (least bending) -->
  <line x1="230" y1="188" x2="440" y2="160" stroke="#dc2626" stroke-width="2.5"/>
  <text x="443" y="164" fill="#dc2626">Red</text>
  <!-- Orange -->
  <line x1="228" y1="190" x2="440" y2="175" stroke="#ea580c" stroke-width="2"/>
  <text x="443" y="179" fill="#ea580c">Orange</text>
  <!-- Yellow -->
  <line x1="226" y1="193" x2="440" y2="192" stroke="#ca8a04" stroke-width="2"/>
  <text x="443" y="196" fill="#ca8a04">Yellow</text>
  <!-- Green -->
  <line x1="224" y1="196" x2="440" y2="210" stroke="#16a34a" stroke-width="2"/>
  <text x="443" y="214" fill="#16a34a">Green</text>
  <!-- Blue -->
  <line x1="222" y1="198" x2="440" y2="227" stroke="#2563eb" stroke-width="2"/>
  <text x="443" y="231" fill="#2563eb">Blue</text>
  <!-- Indigo -->
  <line x1="220" y1="200" x2="440" y2="244" stroke="#4338ca" stroke-width="2"/>
  <text x="443" y="248" fill="#4338ca">Indigo</text>
  <!-- Violet (most bending) -->
  <line x1="218" y1="202" x2="440" y2="261" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="443" y="265" fill="#1d4ed8">Violet</text>
  <!-- Labels -->
  <text x="24" y="230" fill="#374151" font-size="10">Violet bends most →</text>
  <text x="24" y="243" fill="#374151" font-size="10">higher n, shorter λ</text>
</svg>`,
      },
    },
    {
      id: 'h-rainbow',
      type: 'heading',
      data: { text: 'Rainbows — Natural Dispersion', level: 2 },
    },
    {
      id: 'para-rainbow',
      type: 'paragraph',
      data: { text: 'A rainbow forms when sunlight enters spherical water droplets in the atmosphere. Inside each droplet, light refracts on entry, undergoes total internal reflection at the back, and refracts again on exit. Dispersion occurs at each refraction, separating colours. Red appears at the top of the arc (least refracted) and violet at the bottom (most refracted).' },
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked why violet bends more than red in a prism, don\'t just say "it has a shorter wavelength". You must explain: violet has a shorter wavelength and higher frequency → travels more slowly in glass → has a larger refractive index → bends more at the boundary.',
      },
    },
    {
      id: 'callout-warning1',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Dispersion does NOT occur in a vacuum or in air (all wavelengths travel at c = 3 × 10⁸ m/s). It only occurs in a medium (like glass or water) where different wavelengths travel at different speeds.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'White light is a mixture of all visible wavelengths (ROYGBIV). In glass, different wavelengths travel at different speeds → different refractive indices → dispersed by a prism. Violet (shortest λ, highest f) bends most; red (longest λ, lowest f) bends least. Rainbows result from refraction and TIR inside water droplets.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'ROYGBIV: Red (least bending, longest λ) to Violet (most bending, shortest λ). Dispersion occurs because different wavelengths have different speeds in glass.',
    cues: [
      { id: 'cue-1', blockId: 'callout-order', prompt: 'State the order of colours in the visible spectrum from longest to shortest wavelength.', answer: 'Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV). Red has the longest wavelength (≈700 nm); violet has the shortest (≈400 nm).' },
      { id: 'cue-2', blockId: 'para-dispersion', prompt: 'Explain why violet light is refracted more than red light by a glass prism.', answer: 'Violet light has a shorter wavelength and higher frequency. It travels more slowly in glass than red light does, so it has a larger refractive index. Therefore it bends more at the air–glass boundary.' },
      { id: 'cue-3', blockId: 'svg-prism', prompt: 'What is dispersion?', answer: 'Dispersion is the separation of white light into its constituent colours (wavelengths) because different wavelengths travel at different speeds in a medium, causing different amounts of refraction.' },
      { id: 'cue-4', blockId: 'para-rainbow', prompt: 'Why does a rainbow form and what processes occur inside each water droplet?', answer: 'Sunlight enters water droplets, refracts (dispersion occurs), undergoes TIR at the back of the droplet, and refracts again on exit. Violet exits at a different angle to red, spreading the colours across the sky into an arc.' },
    ],
  },
  evidence: [],
  mentions: [],
};
