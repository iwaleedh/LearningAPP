export const note_olevel_physics_3_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/3 Waves/3-1-1-general-wave-properties.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and use key wave terminology: amplitude, wavelength, frequency, period and wave speed. Apply the equations T = 1/f and v = fλ to solve problems.' },
    },
    {
      id: 'h-what',
      type: 'heading',
      data: { text: 'What is a Wave?', level: 2 },
    },
    {
      id: 'para-what',
      type: 'paragraph',
      data: { text: 'A <strong>wave</strong> is a periodic disturbance that transfers <strong>energy</strong> from one place to another <em>without</em> transferring matter. The particles of the medium oscillate about their equilibrium (rest) positions as the wave passes through.' },
    },
    {
      id: 'h-terms',
      type: 'heading',
      data: { text: 'Key Wave Quantities', level: 2 },
    },
    {
      id: 'tbl-terms',
      type: 'comparisonTable',
      data: {
        caption: 'Wave terminology, symbols, definitions and SI units',
        headers: ['Quantity', 'Symbol', 'Definition', 'Unit'],
        rows: [
          ['Amplitude', 'A', 'Maximum displacement of a particle from its equilibrium position', 'm'],
          ['Wavelength', 'λ', 'Distance between two consecutive points that are in phase (e.g. crest to crest, or trough to trough)', 'm'],
          ['Frequency', 'f', 'Number of complete wave cycles passing a fixed point per second', 'Hz (s⁻¹)'],
          ['Period', 'T', 'Time for one complete wave cycle to pass a fixed point', 's'],
          ['Wave speed', 'v', 'Distance the wave travels per unit time', 'm s⁻¹'],
        ],
      },
    },
    {
      id: 'svg-wave',
      type: 'svg',
      data: {
        caption: 'Labeled transverse wave showing amplitude (A), wavelength (λ), crest and trough',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" width="500" height="220">
  <defs>
    <marker id="ah0" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#6366f1"/></marker>
    <marker id="ar0" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ef4444"/></marker>
    <marker id="al0" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto"><polygon points="8 0,0 3,8 6" fill="#ef4444"/></marker>
  </defs>
  <style>text{font-family:Arial,sans-serif;font-size:12px;fill:#1e293b;}</style>
  <line x1="30" y1="110" x2="470" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 3"/>
  <text x="35" y="107" font-size="10" fill="#94a3b8">equilibrium</text>
  <path d="M40,110 C60,110 70,44 100,44 C130,44 140,110 160,110 C180,110 190,176 220,176 C250,176 260,110 280,110 C300,110 310,44 340,44 C370,44 380,110 400,110 C420,110 430,176 460,176" stroke="#6366f1" stroke-width="2.5" fill="none"/>
  <text x="100" y="36" text-anchor="middle" fill="#475569" font-size="11">Crest</text>
  <text x="340" y="36" text-anchor="middle" fill="#475569" font-size="11">Crest</text>
  <text x="220" y="196" text-anchor="middle" fill="#475569" font-size="11">Trough</text>
  <line x1="100" y1="44" x2="100" y2="108" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ar0)"/>
  <line x1="100" y1="112" x2="100" y2="48" stroke="#ef4444" stroke-width="1.5" marker-end="url(#al0)"/>
  <text x="110" y="80" fill="#ef4444" font-weight="bold" font-size="13">A</text>
  <line x1="100" y1="26" x2="338" y2="26" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ar0)"/>
  <line x1="340" y1="26" x2="102" y2="26" stroke="#ef4444" stroke-width="1.5" marker-end="url(#al0)"/>
  <text x="220" y="18" text-anchor="middle" fill="#ef4444" font-weight="bold">λ  (wavelength)</text>
  <line x1="40" y1="208" x2="455" y2="208" stroke="#6366f1" stroke-width="1.5" marker-end="url(#ah0)"/>
  <text x="230" y="220" text-anchor="middle" fill="#6366f1" font-size="11">direction of wave travel →</text>
</svg>`,
      },
    },
    {
      id: 'h-equations',
      type: 'heading',
      data: { text: 'Wave Equations', level: 2 },
    },
    {
      id: 'eq-period',
      type: 'equation',
      data: {
        html: 'T = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">f</span></span>',
        caption: 'Period (s) = 1 ÷ frequency (Hz)',
      },
    },
    {
      id: 'eq-speed',
      type: 'equation',
      data: {
        html: 'v = f × λ',
        caption: 'Wave speed (m/s) = frequency (Hz) × wavelength (m)',
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: 'A wave has frequency 200 Hz and wavelength 1.7 m. Calculate the wave speed.\n\nv = fλ = 200 × 1.7 = 340 m/s',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: 'A wave has speed 3.0 × 10⁸ m/s and frequency 5.0 × 10¹⁴ Hz. Find the wavelength.\n\nλ = v/f = (3.0 × 10⁸) ÷ (5.0 × 10¹⁴) = 6.0 × 10⁻⁷ m (600 nm — yellow-orange visible light)',
      },
    },
    {
      id: 'h-types',
      type: 'heading',
      data: { text: 'Introduction to Wave Types', level: 2 },
    },
    {
      id: 'para-transverse',
      type: 'paragraph',
      data: { text: 'In a <strong>transverse wave</strong>, particle oscillations are <em>perpendicular</em> to the direction of energy transfer. Examples: light waves, water surface waves.' },
    },
    {
      id: 'para-longitudinal',
      type: 'paragraph',
      data: { text: 'In a <strong>longitudinal wave</strong>, particle oscillations are <em>parallel</em> to the direction of energy transfer. The wave consists of alternating <strong>compressions</strong> and <strong>rarefactions</strong>. Example: sound.' },
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Principle',
        text: 'All waves transfer energy without transferring matter. Particles oscillate about fixed positions — they do not travel with the wave.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Waves transfer energy without transferring matter. Amplitude = max displacement; wavelength λ = crest-to-crest distance; frequency f = cycles per second; T = 1/f; wave speed v = fλ. Transverse waves have perpendicular oscillations; longitudinal waves have parallel oscillations (compressions and rarefactions).' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'v = fλ, T = 1/f. Amplitude = max displacement from equilibrium. Wavelength = distance between points in phase.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-terms', prompt: 'Define amplitude and wavelength and state their units.', answer: 'Amplitude (A): maximum displacement of a particle from its equilibrium position, measured in metres. Wavelength (λ): distance between two consecutive points in phase (e.g. crest to crest), measured in metres.' },
      { id: 'cue-2', blockId: 'eq-speed', prompt: 'State the wave equation and what each symbol represents.', answer: 'v = fλ, where v = wave speed (m/s), f = frequency (Hz) and λ = wavelength (m).' },
      { id: 'cue-3', blockId: 'eq-period', prompt: 'A wave has frequency 50 Hz. What is its period?', answer: 'T = 1/f = 1/50 = 0.02 s.' },
      { id: 'cue-4', blockId: 'para-transverse', prompt: 'What is the key difference between transverse and longitudinal waves?', answer: 'Transverse: oscillations perpendicular to direction of energy transfer (e.g. light). Longitudinal: oscillations parallel to direction of energy transfer, with compressions and rarefactions (e.g. sound).' },
    ],
  },
  evidence: [],
  mentions: [],
};
