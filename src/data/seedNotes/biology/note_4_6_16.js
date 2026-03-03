export const note_biology_4_6_16 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand Core Practical 14: antibiotic sensitivity testing using the disk diffusion (Kirby-Bauer) method, measurement of zones of inhibition, and interpretation of results using clinical breakpoints.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Core Practical 14: Antibiotic Sensitivity Testing', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'This core practical introduces the disk diffusion (Kirby-Bauer) method, the standard technique for testing bacterial susceptibility to antibiotics. It demonstrates how antibiotic resistance is detected and forms the basis for clinical antibiotic selection in patient care.'
      },
      terms: []
    },
    {
      id: 'h-kirby-bauer-method',
      type: 'heading',
      data: { text: 'Kirby-Bauer (Disk Diffusion) Method', level: 2 },
      terms: []
    },
    {
      id: 'p-kirby-bauer-1',
      type: 'paragraph',
      data: {
        text: 'The Kirby-Bauer method (also called disk diffusion or disk sensitivity method) tests bacterial susceptibility to antibiotics. Paper disks impregnated with antibiotics are placed on a bacterial lawn (standardised suspension of bacteria on agar). Antibiotic diffuses from the disk into the agar. If the bacterium is susceptible, the antibiotic kills bacteria, creating a clear zone (halo) around the disk. If resistant, bacteria grow right up to the disk (no zone).'
      },
      terms: []
    },
    {
      id: 'h-procedure',
      type: 'heading',
      data: { text: 'Practical Procedure', level: 2 },
      terms: []
    },
    {
      id: 'list-procedure',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'Prepare test organism: Grow the bacterium to be tested on nutrient agar (overnight culture). Using a sterile loop, suspend a few colonies in sterile saline or peptone water. Adjust turbidity to a standard (McFarland standard 0.5, which equals ~1.5 × 10⁸ CFU/mL).',
          'Prepare Mueller-Hinton agar plate: Pour ~15 mL sterile Mueller-Hinton agar into a Petri dish; allow to solidify. Mueller-Hinton is preferred because pH, divalent cation concentration, and thickness are standardised for reliable results.',
          'Inoculate plate: Using a sterile cotton swab, dip into the bacterial suspension and squeeze against the tube wall to remove excess. Swab the entire agar surface in three directions (streaking pattern) to create a uniform bacterial lawn. Avoid standing water or dry patches.',
          'Apply antibiotic disks: Using sterile tweezers or a disk dispenser, place antibiotic disks onto the inoculated plate. Space disks evenly (usually ≥2.4 cm apart) to prevent diffusion zones from overlapping. Common antibiotics: ampicillin, penicillin, tetracycline, erythromycin, chloramphenicol, streptomycin, gentamicin, cephalosporins. Press each disk gently to ensure contact with agar.',
          'Incubate: Incubate at 35–37degreesC (NOT 25degreesC like standard plate cultures, as different organism optimal growth temperatures may affect results; standardisation uses 35–37degreesC) for 18–24 hours. Place plates inverted (lid down) to prevent condensation.',
          'Measure zones: After incubation, measure the diameter of each clear zone (including the disk) using a ruler or callipers. Measure from the edge of the disk to the edge of the clear zone (most distant measurable inhibition). Report in millimetres.',
          'Interpret results: Compare zone diameters to standardised breakpoints (provided by CLSI—Clinical and Laboratory Standards Institute, or EUCAST—European Committee on Antimicrobial Susceptibility Testing) to classify bacteria as Susceptible (S), Intermediate (I), or Resistant (R).'
        ]
      },
      terms: []
    },
    {
      id: 'h-zone-measurement',
      type: 'heading',
      data: { text: 'Measurement and Interpretation', level: 2 },
      terms: []
    },
    {
      id: 'p-zone-measurement-1',
      type: 'paragraph',
      data: {
        text: 'Zone diameters are compared to CLSI breakpoints (tabulated reference values) to determine susceptibility. Breakpoints vary by antibiotic and organism.'
      },
      terms: []
    },
    {
      id: 'list-zone-interpretation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Susceptible (S): Zone diameter ≥ breakpoint value. The bacterium is inhibited at clinically achievable antibiotic concentrations; the antibiotic is likely to work therapeutically.',
          'Intermediate (I): Zone diameter between lower and upper breakpoints. Uncertain clinical outcome; antibiotic may or may not work depending on infection site and dose.',
          'Resistant (R): Zone diameter < lower breakpoint. The bacterium is not inhibited by clinically achievable concentrations; the antibiotic will not work.',
          'Example (ampicillin vs E. coli, CLSI breakpoints): S ≥17 mm, R ≤13 mm. A zone of 15 mm = Intermediate; a zone of 20 mm = Susceptible; a zone of 12 mm = Resistant.'
        ]
      },
      terms: []
    },
    {
      id: 'tbl-example-breakpoints',
      type: 'comparisonTable',
      data: {
        headers: ['Antibiotic', 'Organism', 'Susceptible (mm)', 'Intermediate (mm)', 'Resistant (mm)'],
        rows: [
          ['Ampicillin', 'E. coli', '≥17', '14–16', '≤13'],
          ['Penicillin G', 'S. aureus', '≥29', '—', '≤28'],
          ['Tetracycline', 'E. coli', '≥19', '15–18', '≤14'],
          ['Gentamicin', 'E. coli', '≥20', '16–19', '≤15'],
          ['Chloramphenicol', 'E. coli', '≥18', '13–17', '≤12']
        ],
        caption: 'Example CLSI breakpoints for common antibiotics (zone diameter in mm)'
      },
      terms: []
    },
    {
      id: 'h-aseptic-technique-emphasis',
      type: 'heading',
      data: { text: 'Aseptic Technique Throughout', level: 2 },
      terms: []
    },
    {
      id: 'p-aseptic-emphasis',
      type: 'paragraph',
      data: {
        text: 'Aseptic technique is critical to prevent contamination of plates. Contamination makes results uninterpretable. Key practices:'
      },
      terms: []
    },
    {
      id: 'list-aseptic-practice',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Flame loop: Use a sterile inoculation loop; flame it to redness in a Bunsen burner before and after use to sterilise.',
          'Work near flame: Work within ~15 cm of the Bunsen burner flame to reduce contaminating air currents.',
          'Swab sterility: Use sterile cotton swabs provided by the supplier; do not reuse swabs.',
          'Disk sterility: Keep antibiotic disks in their sealed container; open only briefly when retrieving disks.',
          'Avoid touching agar surface: Ensure swabs, loops, and hands do not touch the agar surface after inoculation.',
          'Close plates promptly: Minimise exposure time of open plates to the air.'
        ]
      },
      terms: []
    },
    {
      id: 'h-factors-affecting-results',
      type: 'heading',
      data: { text: 'Factors Affecting Zone Size', level: 2 },
      terms: []
    },
    {
      id: 'list-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Inoculum standardisation: Inoculum size (bacterial density) must match the McFarland standard (0.5). Too dense → smaller zones (more bacteria survive antibiotic); too dilute → larger zones (fewer bacteria competing with diffusion). This is why standardisation is critical.',
          'Medium type: Mueller-Hinton agar is required; other media (e.g. nutrient agar, blood agar) have different diffusion properties and give unreliable results.',
          'Medium thickness: Agar thickness should be ~4 mm (standard depth). Thicker agar → smaller zones; thinner agar → larger zones.',
          'pH: Agar pH should be 7.0 ± 0.1. pH affects antibiotic charge and diffusion; pH <6.5 or >8.0 gives unreliable results.',
          'Incubation temperature: 35–37degreesC is standard. Different temperatures affect antibiotic diffusion and bacterial growth rate.',
          'Incubation time: 18–24 hours is standard. <18 hours may give false resistance (zone not yet fully developed); >24 hours may show zone diffusion artifacts.'
        ]
      },
      terms: []
    },
    {
      id: 'h-quality-control',
      type: 'heading',
      data: { text: 'Quality Control Organisms', level: 2 },
      terms: []
    },
    {
      id: 'p-quality-control-1',
      type: 'paragraph',
      data: {
        text: 'Standardised quality control organisms (reference strains) are tested in parallel with unknown isolates to ensure the method is working correctly. Example control organisms:'
      },
      terms: []
    },
    {
      id: 'list-quality-control',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'E. coli ATCC 25922: Gram-negative, susceptible to most antibiotics. Expected zone sizes for each antibiotic are tabulated (CLSI/EUCAST). If observed zones fall outside expected ranges, the method failed.',
          'S. aureus ATCC 25923: Gram-positive, used for penicillins, macrolides, etc.',
          'P. aeruginosa ATCC 27853: Gram-negative, naturally resistant to many antibiotics; used for testing agents effective against Pseudomonas.'
        ]
      },
      terms: []
    },
    {
      id: 'h-limitations',
      type: 'heading',
      data: { text: 'Limitations of Disk Diffusion Method', level: 2 },
      terms: []
    },
    {
      id: 'list-limitations',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Semiquantitative: Zone size is an indirect measure of MIC (minimum inhibitory concentration). Exact MIC requires broth microdilution or E-test method.',
          'Organism-specific: Different organisms have different diffusion kinetics and growth rates. Breakpoints are organism-specific; same zone diameter means different things for different bacteria.',
          'Slow turnaround: 18–24 hours incubation time. Faster methods (MALDI-TOF, molecular testing) are available but more expensive.',
          'Requires cultured bacteria: Cannot directly test specimens; must isolate and culture pure organism first.',
          'Anaerobes: Method is designed for aerobes; anaerobes require special media and conditions.'
        ]
      },
      terms: []
    },
    {
      id: 'h-result-recording',
      type: 'heading',
      data: { text: 'Recording and Reporting Results', level: 2 },
      terms: []
    },
    {
      id: 'p-result-recording-1',
      type: 'paragraph',
      data: {
        text: 'Results should be clearly recorded and interpreted according to clinical standards.'
      },
      terms: []
    },
    {
      id: 'list-recording',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Record zone diameter: Measure zone for each antibiotic disk to nearest 1 mm.',
          'Compare to breakpoints: Use standardised tables (CLSI or EUCAST) to classify as S, I, or R.',
          'Report profile: Typically report as a sensitivity profile (e.g. "Ampicillin: S; Tetracycline: R; Gentamicin: S; Erythromycin: I").',
          'Clinical interpretation: Clinicians use this to select appropriate antibiotics for treatment. Resistance patterns help identify organism type (e.g. MRSA resistant to beta-lactams but sensitive to vancomycin).',
          'Surveillance data: Population-level resistance trends are tracked; increasing resistance prompts antibiotic stewardship interventions.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-clinical-context',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Clinical Application',
        text: 'Sensitivity testing guides empiric antibiotic therapy. In severe infections (bloodstream, meningitis), broad-spectrum antibiotics are started immediately, then narrowed based on culture and sensitivity results. This reduces mortality and limits resistance development. Sensitivity results must be interpreted alongside infection site (e.g. CNS penetration, lung penetration, tissue levels).'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Disk diffusion method: standardised inoculum (McFarland 0.5) on Mueller-Hinton agar → antibiotic disks applied → incubate 35–37degreesC/18–24h → measure clear zone diameter → compare to CLSI breakpoints (S/I/R). Zone size reflects antibiotic diffusion and bacterial growth inhibition. Smaller zones = more resistance. Quality control organisms (E. coli ATCC 25922, S. aureus ATCC 25923) verify method validity. Breakpoints are organism- and antibiotic-specific.',
        apply: 'E. coli test shows zone diameters: ampicillin 12 mm, tetracycline 20 mm, gentamicin 22 mm. Using CLSI breakpoints, classify each as S/I/R. (Ampicillin ≤13 mm = R; Tetracycline ≥19 mm = S; Gentamicin ≥20 mm = S)',
        analyze: 'Why is inoculum standardisation (McFarland 0.5) critical for accurate results? What happens if inoculum is too dense or too dilute?',
        evaluate: 'A student\'s control organism (E. coli ATCC 25922) shows zone sizes outside expected ranges. What factors could cause this? How would you troubleshoot?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can prepare a standardised bacterial inoculum using McFarland standard', checked: false },
          { text: 'I understand why Mueller-Hinton agar is required for this method', checked: false },
          { text: 'I can correctly inoculate a plate with a bacterial swab', checked: false },
          { text: 'I can properly apply and place antibiotic disks on the plate', checked: false },
          { text: 'I can measure zone diameters accurately', checked: false },
          { text: 'I can interpret zone diameters using CLSI breakpoints', checked: false },
          { text: 'I can classify results as Susceptible, Intermediate, or Resistant', checked: false },
          { text: 'I understand why quality control organisms are used', checked: false },
          { text: 'I can explain factors affecting zone size (inoculum, medium, pH, temperature)', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Core Practical 14: Prepare standardised bacterial inoculum (McFarland 0.5 = ~1.5 × 10⁸ CFU/mL). Inoculate Mueller-Hinton agar plate using sterile swab (streaking pattern). Apply antibiotic disks (evenly spaced ≥2.4 cm apart). Incubate 35–37degreesC/18–24h (inverted). Measure zone diameter (clear halo including disk edge). Compare to CLSI breakpoints: Susceptible (S, large zone), Intermediate (I, medium zone), Resistant (R, no zone or small zone). Use quality control organisms (E. coli ATCC 25922, S. aureus ATCC 25923) to verify method. Key factors: inoculum standardisation, Mueller-Hinton medium, pH 7.0, incubation temperature/time.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-kirby-bauer-method', prompt: 'Describe the principle of the Kirby-Bauer disk diffusion method.' },
      { id: 'cue-2', blockId: 'list-procedure', prompt: 'List the seven main steps of the disk diffusion procedure.' },
      { id: 'cue-3', blockId: 'list-zone-interpretation', prompt: 'Explain the three zone size classifications (S, I, R) and their clinical meaning.' },
      { id: 'cue-4', blockId: 'list-factors', prompt: 'Name four factors affecting zone size and why each matters.' },
      { id: 'cue-5', blockId: 'list-quality-control', prompt: 'What are quality control organisms and why are they used?' }
    ],
    summaryText: 'Disk diffusion (Kirby-Bauer): inoculum McFarland 0.5 → Mueller-Hinton agar streaked → antibiotic disks placed (≥2.4 cm apart) → incubate 35–37degreesC/18–24h (inverted) → measure zone diameter (mm). Classify by CLSI breakpoints: Susceptible (large zone, clinically effective), Intermediate (uncertain), Resistant (no zone or small, clinically ineffective). Key standardisation: McFarland 0.5 inoculum, Mueller-Hinton pH 7.0, temperature 35–37degreesC, 18–24h incubation. QC organisms: E. coli ATCC 25922, S. aureus ATCC 25923 verify method validity.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Disk Diffusion Susceptibility Testing', detail: 'CLSI Performance Standards for Antimicrobial Susceptibility Testing (M100). Clinical and Laboratory Standards Institute', year: '2023', source: 'CLSI', tags: ['antibiotic susceptibility', 'disk diffusion', 'Kirby-Bauer', 'MIC', 'breakpoints'] }
  ]
};
