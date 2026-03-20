export const note_olevel_chemistry_10_10_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-1-4-fertilisers.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the essential elements plants need, describe how fertilisers provide them, and explain the problem of eutrophication caused by fertiliser run-off.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Fertilisers', level: 2 }
    },
    {
      id: 'call-npk',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Essential Elements for Plant Growth (NPK)',
        text: 'Plants need three principal mineral elements:<br/><br/><strong>N (Nitrogen)</strong> — for making proteins and chlorophyll; needed for leaf/shoot growth<br/>Supplied as: ammonium salts (NH₄NO₃, (NH₄)₂SO₄), urea, nitrates (KNO₃, NaNO₃)<br/><br/><strong>P (Phosphorus)</strong> — for root development and energy transfer (ATP)<br/>Supplied as: phosphate fertilisers (superphosphate, ammonium phosphate)<br/><br/><strong>K (Potassium)</strong> — for enzyme function and resistance to disease<br/>Supplied as: potassium chloride (KCl), potassium nitrate (KNO₃)<br/><br/><strong>Compound (NPK) fertilisers</strong> contain all three — e.g. ammonium nitrate + potassium phosphate mixes.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Eutrophication', level: 2 }
    },
    {
      id: 'svg-eutrophication',
      type: 'svg',
      data: {
        caption: 'The process of eutrophication caused by fertiliser run-off.',
        svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Land and Lake -->
  <path d="M 0 100 Q 50 100, 100 120 T 150 160 L 600 160 L 600 300 L 0 300 Z" fill="#1250a0" opacity="0.4" />
  <path d="M 0 100 Q 50 100, 100 120 T 150 160 L 150 300 L 0 300 Z" fill="#84cc16" opacity="0.3" />
  
  <text x="50" y="80" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#4d7c0f">Farm Land</text>
  <text x="350" y="280" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1d4ed8" opacity="0.5">Lake</text>

  <!-- Step 1: Run-off -->
  <path d="M 60 110 Q 100 130, 140 150" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,4" marker-end="url(#arrow-red)"/>
  <rect x="25" y="115" width="20" height="20" rx="10" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="35" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">1</text>
  <text x="65" y="105" font-family="var(--font-sans)" font-size="10" fill="#ef4444">Fertiliser run-off</text>
  <text x="65" y="117" font-family="var(--font-sans)" font-size="10" fill="#ef4444">(Nitrates & Phosphates)</text>

  <!-- Step 2: Algal Bloom -->
  <path d="M 150 160 Q 300 160, 450 160" fill="none" stroke="#22c55e" stroke-width="15" opacity="0.8"/>
  <rect x="235" y="125" width="20" height="20" rx="10" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="245" y="140" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#22c55e" text-anchor="middle">2</text>
  <text x="270" y="135" font-family="var(--font-sans)" font-size="10" fill="#166534" font-weight="bold">Algal bloom on surface</text>
  <text x="270" y="147" font-family="var(--font-sans)" font-size="10" fill="#166534">blocks sunlight</text>

  <!-- Sun & blocked rays -->
  <circle cx="500" cy="50" r="20" fill="#44370a" />
  <path d="M 500 70 L 500 140" fill="none" stroke="#facc15" stroke-width="2" stroke-dasharray="4,2"/>
  <path d="M 480 65 L 430 140" fill="none" stroke="#facc15" stroke-width="2" stroke-dasharray="4,2"/>
  <path d="M 460 145 L 510 145" fill="none" stroke="#ef4444" stroke-width="3"/> <!-- X blocking sunlight -->

  <!-- Step 3: Plants Die -->
  <path d="M 300 240 Q 310 210, 305 180" fill="none" stroke="#166534" stroke-width="3"/>
  <path d="M 350 250 Q 340 200, 360 170" fill="none" stroke="#166534" stroke-width="3"/>
  <path d="M 320 220 L 340 240 L 310 240 Z" fill="#ea580c"/> <!-- Dead plants -->
  
  <rect x="375" y="215" width="20" height="20" rx="10" fill="#532407" stroke="#ea580c" stroke-width="2"/>
  <text x="385" y="230" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ea580c" text-anchor="middle">3</text>
  <text x="405" y="225" font-family="var(--font-sans)" font-size="10" fill="#c2410c" font-weight="bold">Underwater plants die</text>
  <text x="405" y="237" font-family="var(--font-sans)" font-size="10" fill="#c2410c">(no light for photosynthesis)</text>

  <!-- Step 4 & 5: Bacteria & O2 drop -->
  <circle cx="200" cy="220" r="15" fill="#7f1d1d" stroke="#dc2626" stroke-width="2"/>
  <text x="200" y="224" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">4/5</text>
  <text x="170" y="245" font-family="var(--font-sans)" font-size="10" fill="#dc2626" font-weight="bold">Decomposing bacteria multiply</text>
  <text x="170" y="257" font-family="var(--font-sans)" font-size="10" fill="#dc2626">and use up dissolved O₂</text>

  <!-- Step 6 & 7: Fish die -->
  <!-- Dead Fish -->
  <path d="M 450 200 C 470 190, 490 190, 510 200 L 525 190 L 525 210 Z" fill="#9ca3af" transform="scale(1, -1) translate(0, -400)"/>
  <text x="480" y="200" font-family="var(--font-sans)" font-size="8" font-weight="bold" fill="#111827">X X</text>
  
  <rect x="525" y="225" width="20" height="20" rx="10" fill="#0f172a" stroke="#4b5563" stroke-width="2"/>
  <text x="535" y="240" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#4b5563" text-anchor="middle">7</text>
  <text x="500" y="260" font-family="var(--font-sans)" font-size="10" fill="#1f2937" font-weight="bold">Fish suffocate & die</text>

  <defs>
    <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ef4444"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'call-eu',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Eutrophication — Environmental Problem',
        text: '<strong>Cause:</strong> Excess nitrates and phosphates from agricultural fertilisers leach into rivers and lakes via run-off or rainwater.<br/><br/><strong>Process (step-by-step):</strong><br/>1. Nutrients (NO₃⁻, PO₄³⁻) accumulate in the water.<br/>2. Algae and water plants grow rapidly — an <strong>algal bloom</strong> forms, blocking sunlight.<br/>3. Plants below cannot photosynthesise → they die.<br/>4. Decomposing bacteria feed on dead plants, reproducing rapidly.<br/>5. Bacteria consume large amounts of dissolved O₂ (aerobic decomposition).<br/>6. Dissolved O₂ levels drop drastically.<br/>7. Fish and other aquatic organisms suffocate and die.<br/><br/><strong>Effects:</strong> Loss of biodiversity; dead, foul-smelling water; unsightly algal scum on surface.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Plants need N (proteins), P (roots/ATP), K (enzymes). Fertilisers supply these as ammonium/nitrate/phosphate/potassium salts. Eutrophication: excess fertiliser run-off → algal bloom → blocks light → plants die → bacteria decompose → O₂ depleted → fish die.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Plants need N, P, K from fertilisers. Excess fertiliser run-off → eutrophication: algal bloom → O₂ depleted → fish die.',
    cues: [
      { id: 'cue-1', blockId: 'call-npk', prompt: 'State what N, P, and K do in plants, and name a fertiliser that supplies nitrogen.', answer: 'N — protein/chlorophyll production (growth). P — root development, ATP. K — enzymes, disease resistance. Nitrogen supplied by ammonium nitrate (NH₄NO₃).' },
      { id: 'cue-2', blockId: 'call-eu', prompt: 'Describe the process of eutrophication following fertiliser run-off into a lake.', answer: 'Nitrates/phosphates build up → algal bloom blocks sunlight → underwater plants die → bacteria decompose dead matter → bacteria consume dissolved O₂ → O₂ levels drop → fish and aquatic organisms suffocate and die.' },
      { id: 'cue-3', blockId: 'call-eu', prompt: 'What is the key step in eutrophication that directly causes fish to die?', answer: 'Decomposing bacteria use up dissolved oxygen. This oxygen depletion causes fish to asphyxiate.' }
    ]
  },
  evidence: [],
  mentions: []
};
