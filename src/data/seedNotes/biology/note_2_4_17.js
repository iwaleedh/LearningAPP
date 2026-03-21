export const note_biology_2_4_17 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Plan and carry out Core Practicals 7, 8 and 9: plant tissue sections, tensile strength of plant fibres, and plant antimicrobial assay; evaluate data and sources of error.' },
      terms: ['aseptic technique', 'tensile strength', 'zone of inhibition'],
    },
    {
      id: 'h-cp7',
      type: 'heading',
      data: { text: 'Core Practical 7: Plant Tissue Sections', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp7',
      type: 'paragraph',
      data: { text: 'Transverse sections of plant stems or roots are prepared using a razor blade or microtome. The section is stained with phloroglucinol (turns lignified tissue red) or safranin, mounted in water, and observed under a light microscope. You should be able to identify epidermis, cortex, vascular bundles (xylem and phloem), and pith. Magnification is calculated as image size divided by actual size.' },
      terms: ['phloroglucinol', 'xylem', 'phloem'],
    },
    {
      id: 'callout-cp7-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Tissue Identification',
        text: 'In cross-section, xylem is innermost in the vascular bundle (stains red with phloroglucinol), phloem is outer. Palisade mesophyll has many chloroplasts and is nearest the upper epidermis in leaf sections.',
      },
      terms: [],
    },
    {
      id: 'h-cp8',
      type: 'heading',
      data: { text: 'Core Practical 8: Tensile Strength of Plant Fibres', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp8',
      type: 'paragraph',
      data: { text: 'Plant fibres (e.g. celery petiole, flax, or hemp) are clamped at both ends. Masses are added gradually until the fibre breaks. The breaking force (in Newtons) is recorded. Young\'s modulus (E) can be calculated from the stress-strain graph. Results compare the tensile strength of natural plant fibres with synthetic materials.' },
      terms: ['tensile strength', 'Young\'s modulus'],
    },
    {
      id: 'eq-youngs',
      type: 'equation',
      data: {
        html: 'Young\'s Modulus (E) = <span class="nb-frac"><span class="nb-num">stress (Pa)</span><span class="nb-den">strain (no units)</span></span> = <span class="nb-frac"><span class="nb-num">F / A</span><span class="nb-den">Δl / l</span></span>',
        caption: 'E in Pa (Pascals); F = force (N), A = cross-sectional area (m²), Δl = extension (m), l = original length (m)',
      },
      terms: [],
    },
    {
      id: 'callout-cp8-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sources of Error — Tensile Strength',
        text: 'Fibres may not be uniform in diameter → measure cross-section at multiple points and use mean. Fibres may slip from clamp → ensure secure clamping. Add masses slowly and steadily to avoid sudden jerks. Repeat with multiple fibres and calculate mean breaking force.',
      },
      terms: [],
    },
    {
      id: 'h-cp9',
      type: 'heading',
      data: { text: 'Core Practical 9: Plant Antimicrobial Assay', level: 2 },
      terms: [],
    },
    {
      id: 'p-cp9',
      type: 'paragraph',
      data: { text: 'Plant extracts are tested for antimicrobial activity using the disk diffusion method. Filter paper disks are soaked in different plant extracts (e.g. garlic, clove, mint) and placed on agar plates inoculated with bacteria (e.g. Micrococcus luteus). Plates are incubated at 25°C for 24–48 hours. The zone of inhibition (clear area around disk) is measured in mm — a larger zone indicates stronger antimicrobial activity.' },
      terms: ['zone of inhibition', 'aseptic technique'],
    },
    {
      id: 'callout-cp9-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Aseptic Technique is Essential',
        text: 'Always: flame wire loop until red hot; work near a Bunsen flame; do not touch agar surface; seal plates with tape (not airtight — prevents anaerobic pathogens). Incubate at 25°C (not 37°C — avoids culturing human pathogens). Autoclave all waste before disposal.',
      },
      terms: ['aseptic technique'],
    },
    {
      id: 'table-cp-compare',
      type: 'comparisonTable',
      data: {
        headers: ['Practical', 'Key Technique', 'Key Measurement', 'Main Error Source'],
        rows: [
          ['CP7: Plant sections', 'Staining + microscopy', 'Cell size, tissue identification', 'Uneven section thickness'],
          ['CP8: Tensile strength', 'Load to breaking', 'Breaking force (N), extension (m)', 'Non-uniform fibre diameter'],
          ['CP9: Antimicrobial assay', 'Disk diffusion on agar', 'Zone of inhibition diameter (mm)', 'Contamination, uneven disk soaking'],
        ],
        caption: 'Summary of Core Practicals 7, 8 and 9',
      },
      terms: [],
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why is aseptic technique essential in CP9 (antimicrobial assay) but not required for CP7 (plant sections) or CP8 (tensile strength)? In CP9, bacteria are actively cultured; contamination by airborne microorganisms would produce false positive inhibition zones or overgrow the test organism, invalidating results. In CP7 and CP8, no living microorganisms are cultivated, so contamination poses no experimental risk.",
        apply: "In CP9, a student tests three plant extracts and measures inhibition zones: extract A = 12 mm diameter, extract B = 20 mm diameter, extract C = 8 mm diameter. The disk itself has a diameter of 6 mm. Calculate the net inhibition area (πr² − disk area) for each extract. Rank by antimicrobial effectiveness.",
        analyze: "Compare the experimental controls needed in CP7 (plant sections), CP8 (fibre tensile strength), and CP9 (antimicrobial assay). For each practical: identify the appropriate control, explain what it tests for, and describe what result would indicate the control has failed.",
        evaluate: "Evaluate whether the disk diffusion method (CP9) gives a reliable measure of antimicrobial potency that could predict clinical effectiveness. Consider agar diffusion rate effects on apparent zone size, the difference between bacteriostatic and bactericidal effects, and why MIC broth dilution is preferred in clinical microbiology.",
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can prepare and stain a plant tissue section and identify key tissues', checked: false },
          { text: 'I can set up a tensile strength test and calculate Young\'s modulus', checked: false },
          { text: 'I can perform a disk diffusion assay using full aseptic technique', checked: false },
          { text: 'I can measure and interpret zones of inhibition', checked: false },
          { text: 'I can identify and suggest improvements for sources of error in each practical', checked: false },
        ],
      },
      terms: [],
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'CP7: prepare stained cross-sections of plant tissue, identify xylem/phloem/epidermis under microscope. CP8: load plant fibres to breaking point, record force, calculate Young\'s modulus — compare natural vs synthetic. CP9: disk diffusion assay on agar — soak disks in plant extract, incubate at 25°C, measure zone of inhibition. Aseptic technique essential throughout CP9.' },
      terms: [],
    },
{ 'id': 'callout-examiner-d7bfdd89', 'type': 'callout', 'data': { 'style': 'warning', 'title': 'Staining Vascular Tissue', 'text': 'Students frequently forget the function of the stain. State that stains like phloroglucinol or safranin bind to lignin, making the xylem vessels distinct and easier to distinguish from surrounding phloem or parenchyma.' } },
{ 'id': 'callout-examiner-ed099453', 'type': 'callout', 'data': { 'style': 'tip', 'title': 'Calculating Magnifications', 'text': 'When deriving magnification, remember the formula is Magnification = Image Size / Actual Size. Double-check your units (convert mm to µm by multiplying by 1000) before dividing to avoid classic magnitude errors.' } }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-cp7', prompt: 'What stain is used to identify lignified tissue in plant sections, and what colour does it turn?' },
      { id: 'cue-2', blockId: 'eq-youngs', prompt: 'Write the formula for Young\'s modulus and state the units.' },
      { id: 'cue-3', blockId: 'p-cp9', prompt: 'Describe how the disk diffusion method works and what the zone of inhibition indicates.' },
      { id: 'cue-4', blockId: 'callout-cp9-warning', prompt: 'Why is incubation temperature kept at 25°C rather than 37°C in the antimicrobial assay?' },
    ],
    summaryText: 'CP7: stain (phloroglucinol→red lignin), identify tissues. CP8: tensile test, Young\'s modulus = stress/strain. CP9: disk diffusion, zone of inhibition measures antimicrobial activity; aseptic technique essential.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Edexcel IAL Biology Core Practicals 7–9', detail: 'Plant tissue microscopy, fibre tensile strength testing, and plant antimicrobial disk diffusion assay as specified in the WBI12 core practical list.', year: '2024', source: 'Edexcel IAL Biology Specification', tags: ['core practical', 'plant biology', 'aseptic technique', 'microscopy'] },
  ],
};
