export const note_olevel_chemistry_10_10_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-1-3-water-treatment.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the stages in the treatment of water for domestic use, including screening, sedimentation, filtration, and chlorination.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Water Treatment', level: 2 }
    },
    {
      id: 'call-stages',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Stages in Water Treatment',
        text: '<strong>Stage 1 — Screening:</strong><br/>Large debris (sticks, leaves, fish) removed by mesh screens as water enters the treatment plant.<br/><br/><strong>Stage 2 — Sedimentation:</strong><br/>Water flows slowly into large tanks. Gravity causes larger suspended particles (silt, clay) to sink to the bottom forming sediment. This is made faster by adding <strong>aluminium sulfate Al₂(SO₄)₃</strong> (alum) — causes small particles to clump together (flocculation/coagulation), forming larger flocs that sink more rapidly.<br/><br/><strong>Stage 3 — Filtration:</strong><br/>Water passes through layers of sand and gravel, which filter out remaining fine particles and some bacteria. This produces clear (but not yet safe) water.<br/><br/><strong>Stage 4 — Chlorination:</strong><br/>Small amounts of chlorine gas (Cl₂) or chlorine compounds are added to the water. Chlorine <strong>kills bacteria and microorganisms</strong>, making the water safe to drink. The amount used is carefully controlled to be effective but not harmful.'
      }
    },
    {
      id: 'call-fluor',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Fluoridation (optional in some countries)',
        text: 'Small amounts of fluoride ions (F⁻) may be added to treated water to help prevent tooth decay (dental caries).<br/><br/>This is <strong>not a purification</strong> stage — it is an optional public health addition and is controversial in some regions.'
      }
    },
    {
      id: 'call-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Order matters in exams',
        text: 'Typical exam question: "Describe how water is treated to make it safe to drink."<br/><br/>State ALL stages in order: screening → sedimentation (+ flocculation) → filtration through sand/gravel → chlorination.<br/><br/>The most important stages for safety are <strong>filtration</strong> and <strong>chlorination</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Water treatment stages: 1) Screening (large debris) → 2) Sedimentation/flocculation (Al₂(SO₄)₃ added; particles clump and sink) → 3) Filtration (sand/gravel removes fine particles) → 4) Chlorination (Cl₂ kills bacteria). Optional: fluoridation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Water treatment: screen → sediment/floc (Al₂(SO₄)₃) → filter through sand → chlorinate (kill bacteria).',
    cues: [
      { id: 'cue-1', blockId: 'call-stages', prompt: 'List the four main stages in the treatment of water for domestic use, in order.', answer: '1. Screening (remove large debris). 2. Sedimentation / flocculation (particles settle; Al₂(SO₄)₃ added). 3. Filtration through sand and gravel. 4. Chlorination (kills bacteria).' },
      { id: 'cue-2', blockId: 'call-stages', prompt: 'What is the role of aluminium sulfate in water treatment?', answer: 'Aluminium sulfate causes small suspended particles to coagulate (flocculation), forming larger clumps (flocs) that sink under gravity during sedimentation, making the water clearer.' },
      { id: 'cue-3', blockId: 'call-stages', prompt: 'Why is chlorine added to treated water?', answer: 'Chlorine kills bacteria and microorganisms in the water, making it safe to drink.' }
    ]
  },
  evidence: [],
  mentions: []
};
