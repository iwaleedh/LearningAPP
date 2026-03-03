export const note_biology_2_4_16 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-core-prac-9',
      data: {
        text: 'Understand antimicrobial assay methods and aseptic technique for testing plant antimicrobials.',
      },
    },
    {
      type: 'heading',
      id: 'h-core-prac-9',
      data: { text: 'Core Practical 9: Plant Antimicrobial Assay', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-9',
      data: {
        text: 'Core Practical 9 tests antimicrobial activity of plant extracts using disk diffusion (Kirby-Bauer) method on bacterial lawns. Aims: (1) prepare plant extracts, (2) culture bacteria aseptically, (3) test antimicrobial efficacy by measuring inhibition zones, (4) compare different plant species or extract concentrations.',
      },
    },
    {
      type: 'heading',
      id: 'h-method-9',
      data: { text: 'Method', level: 2 },
    },
    {
      type: 'list',
      id: 'list-method-9',
      data: {
        style: 'numbered',
        items: [
          'Prepare plant extract: fresh plant material (leaves, stems, roots) ground in sterile mortar with pestle, extracted in sterile water or ethanol, filtered through Whatman paper to remove debris',
          'Culture bacteria: streak Bacillus subtilis or E. coli from stock culture onto nutrient agar plate using sterile inoculation loop, incubate 24h at 25°C (or 37°C for E. coli) until colonies form',
          'Prepare bacterial lawn: inoculate fresh nutrient agar plate with bacteria using sterile swab; swab in overlapping lines to cover entire surface uniformly. This creates a bacterial lawn (confluent growth)',
          'Prepare discs: cut sterile filter paper discs (~6mm diameter) using sterile scissors; soak discs in plant extract (or antibiotic control) using sterile forceps; place on bacterial lawn',
          'Incubate: place plate in incubator at 25–37°C for 24–48 hours',
          'Measure inhibition zones: examine plate for clear rings (zones of inhibition) around discs; measure diameter (mm) of each zone using ruler. Zones indicate antimicrobial activity',
          'Controls: include positive control (disc soaked in known antibiotic, e.g. penicillin; must show large zone) and negative control (disc soaked in sterile water/solvent; must show no zone)',
        ],
      },
    },
    {
      type: 'heading',
      id: 'h-aseptic',
      data: { text: 'Aseptic Technique', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-aseptic',
      data: {
        text: 'Aseptic technique prevents contamination by unwanted microorganisms. Key practices: (1) Work near a Bunsen burner flame (heat sterilises air, rising air prevents contamination). (2) Sterilise inoculation loops/needles in flame until red-hot, cool before use. (3) Flame bottle mouths before and after opening. (4) Use sterile pipettes, swabs, forceps from sealed packages. (5) Minimise time caps are off bottles/plates. (6) Never touch sterile surfaces with unsterilised objects. (7) Dispose of contaminated materials (plates, swabs) in autoclave-safe bags for sterilisation before disposal.',
      },
    },
    {
      type: 'heading',
      id: 'h-results-9',
      data: { text: 'Interpreting Results', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-results-9',
      data: {
        text: 'Inhibition zone diameter (mm) indicates antimicrobial potency: >20mm = strong activity, 10–20mm = moderate, 6–10mm = weak, <6mm = inactive. Compare zones between different plant extracts to rank antimicrobial efficacy. Compare across different bacterial species to assess spectrum (broad-spectrum = inhibits multiple species; narrow-spectrum = inhibits few). Positive control must show large zone (>15mm for typical antibiotics); if not, bacterial culture may be resistant or technique failed. Negative control must show no zone; if it does, the solvent may have antimicrobial activity (invalidates test).',
      },
    },
    {
      type: 'heading',
      id: 'h-safety-9',
      data: { text: 'Safety and Microbial Handling', level: 2 },
    },
    {
      type: 'list',
      id: 'list-safety-9',
      data: {
        style: 'bullet',
        items: [
          'Use only COSHH-approved organisms (typically Biosafety Level 1: e.g. Bacillus subtilis, non-pathogenic E. coli K12)',
          'Wear appropriate PPE: lab coat, gloves, eye protection',
          'Wash hands thoroughly after practical',
          'Do not eat, drink, or apply cosmetics in microbiology lab',
          'Sterilise all contaminated materials before disposal (use autoclave or bleach)',
          'Report spills or exposures to supervisor immediately',
        ],
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why do plant fibres have a helical arrangement of cellulose microfibrils rather than parallel alignment? A helical arrangement distributes tensile stress more evenly along the fibre length, similar to the helical construction of a rope. When the fibre is stretched, the helix partially unwinds, absorbing energy before breaking — increasing toughness as well as strength.",
        apply: "A student tests five flax fibres and records breaking forces of: 2.1, 2.3, 1.9, 2.2, 2.0 N. Each fibre has a cross-sectional area of 0.04 mm². Calculate: (a) mean tensile strength (N/mm²), (b) standard deviation, (c) coefficient of variation (SD/mean × 100%). What does a high CV tell you about reproducibility?",
        analyze: "Compare the molecular basis of tensile strength in: (a) cellulose microfibrils (H-bonds between parallel chains), (b) collagen fibres (triple helix + covalent cross-links), and (c) steel (metallic bonds + crystal structure). Rank these in terms of tensile strength and explain the structural basis.",
        evaluate: "Evaluate the validity of using a simple mass-loading apparatus to measure tensile strength of plant fibres, compared to a calibrated universal testing machine (UTM). Consider precision of force measurement, strain rate control, whether Young's modulus can be accurately determined, and comparability between studies.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-prac-9',
      data: {
        items: [
          { text: 'Can prepare plant extracts aseptically', checked: false },
          { text: 'Can perform disk diffusion assay correctly', checked: false },
          { text: 'Know positive control (antibiotic) and negative control (solvent) are essential', checked: false },
          { text: 'Can measure inhibition zones and interpret results', checked: false },
          { text: 'Follow aseptic technique: flame sterilisation, minimal exposure, sterile equipment', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-prac-9',
      data: {
        text: 'Core Practical 9: prepare plant extract (grind tissue, extract in solvent, filter), culture bacteria (streak on agar, incubate), prepare lawn (swab bacteria uniformly), soak filter discs in extract, place on lawn, incubate 24–48h, measure inhibition zones (mm). Interpretation: >20mm = strong, 10–20mm = moderate, 6–10mm = weak, <6mm = inactive. Controls: positive (antibiotic, must show zone), negative (solvent, must show no zone). Aseptic: flame equipment, work near Bunsen, minimise exposure, sterile items, autoclave waste. Safety: use COSHH-approved organisms, PPE, no eating/drinking, hand washing, report spills.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'list-method-9',
        prompt: 'Describe the disk diffusion method for testing antimicrobial activity.',
      },
      {
        id: 'cue-2',
        blockId: 'p-aseptic',
        prompt: 'List five key aseptic technique practices.',
      },
      {
        id: 'cue-3',
        blockId: 'p-results-9',
        prompt: 'How do you interpret inhibition zone diameter, and what is the role of controls?',
      },
      {
        id: 'cue-4',
        blockId: 'list-safety-9',
        prompt: 'What biosafety and hygiene precautions are essential in microbiology practicals?',
      },
    ],
    summaryText: 'Method: prepare plant extract (grind+solvent, filter), culture bacteria (streak on nutrient agar, incubate 24h), prepare lawn (swab bacteria uniformly on fresh plate), soak filter discs in extract, place on lawn, incubate 24–48h, measure inhibition zones (mm). Interpretation: >20mm strong, 10–20mm moderate, 6–10mm weak, <6mm inactive. Positive control (antibiotic, e.g. penicillin, must show zone), negative control (sterile water/solvent, must show no zone). Aseptic: work near flame, flame inoculation loops (sterilise), flame bottle mouths, use sterile pipettes/swabs/forceps, minimise exposure, autoclave waste. Safety: COSHH organisms (Biosafety Level 1), PPE (lab coat, gloves, eye protection), no eating/drinking, hand washing, report spills, autoclave contaminated materials.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Disk Diffusion Assay for Plant Antimicrobials',
      detail: 'Disk diffusion (Kirby-Bauer) method is standard for rapid screening of plant antimicrobial extracts; inhibition zone size reflects antimicrobial potency and enables comparison across plant species.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['antimicrobial assay', 'practical skills', 'microbiology'],
    },
  ],
};
