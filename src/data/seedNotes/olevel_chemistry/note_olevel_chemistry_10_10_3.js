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
