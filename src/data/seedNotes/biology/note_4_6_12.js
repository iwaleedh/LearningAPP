export const note_biology_4_6_12 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand PCR (polymerase chain reaction) amplification, thermal cycling stages, gel electrophoresis separation, and applications in forensics, disease diagnosis, and paternity testing.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'PCR and DNA Gel Electrophoresis', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'The polymerase chain reaction (PCR) is a molecular biology technique that amplifies specific DNA sequences from minute amounts of starting material. Gel electrophoresis separates DNA fragments by size. Together, these techniques are fundamental to forensics, disease diagnosis, paternity testing, and research.'
      },
      terms: []
    },
    {
      id: 'h-pcr',
      type: 'heading',
      data: { text: 'PCR (Polymerase Chain Reaction)', level: 2 },
      terms: []
    },
    {
      id: 'p-pcr-1',
      type: 'paragraph',
      data: {
        text: 'PCR is an in vitro technique that amplifies a specific DNA sequence through repeated cycles of temperature-dependent steps. It requires: template DNA (the DNA to be amplified), primers (short DNA sequences complementary to the region being amplified), dNTPs (deoxynucleotide triphosphates—the building blocks of DNA), Taq polymerase (heat-stable DNA polymerase from Thermus aquaticus), and a thermocycler (machine that cycles temperature).'
      },
      terms: []
    },
    {
      id: 'h-pcr-cycles',
      type: 'heading',
      data: { text: 'PCR Thermal Cycles', level: 2 },
      terms: []
    },
    {
      id: 'p-pcr-cycles-1',
      type: 'paragraph',
      data: {
        text: 'Each PCR cycle consists of three temperature-dependent steps, repeated 25–35 cycles. Each cycle doubles the amount of target DNA, resulting in exponential amplification (2ⁿ copies after n cycles).'
      },
      terms: []
    },
    {
      id: 'list-pcr-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Denaturation (94–95degreesC, 15–30 seconds): High temperature breaks hydrogen bonds between DNA base pairs. Double-stranded DNA (dsDNA) separates into single-stranded DNA (ssDNA).',
          'Annealing (50–65degreesC, 30–60 seconds): Temperature lowered to allow primers to bind (anneal) to complementary sequences on template DNA. Primer Tm (melting temperature) determines annealing temperature.',
          'Extension (72degreesC, 1 min per kb of target): Taq polymerase binds to primers and synthesises new DNA strand by adding dNTPs complementary to template strand. Taq is thermostable and functions at 72degreesC (optimal activity ~72degreesC).'
        ]
      },
      terms: []
    },
    {
      id: 'eq-pcr-amp',
      type: 'equation',
      data: {
        html: 'Exponential amplification: Number of copies = initial template (usually 1) × 2<sup>n</sup><br>where n = number of PCR cycles<br>After 30 cycles: 1 × 2<sup>30</sup> ≈ 1 billion copies from a single template molecule'
      },
      terms: []
    },
    {
      id: 'ex-pcr',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'PCR Amplification Example',
        text: 'Starting with 1 DNA template molecule:\nAfter cycle 1: 2 copies\nAfter cycle 2: 4 copies\nAfter cycle 3: 8 copies\nAfter cycle 10: 1,024 copies\nAfter cycle 20: ~1 million copies\nAfter cycle 30: ~1 billion copies\n\nThis exponential amplification allows detection of a single DNA molecule starting amount.'
      },
      terms: []
    },
    {
      id: 'callout-taq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why Taq Polymerase is Essential',
        text: 'Taq is heat-stable (from thermophilic bacterium Thermus aquaticus, lives in hot springs at 72degreesC). It survives repeated cycling to 94degreesC without denaturing. Regular DNA polymerase (from E. coli) would denature at high temperature, requiring addition of fresh enzyme each cycle (impractical).'
      },
      terms: []
    },
    {
      id: 'h-gel-electro',
      type: 'heading',
      data: { text: 'Gel Electrophoresis: DNA Fragment Separation', level: 2 },
      terms: []
    },
    {
      id: 'p-gel-electro-1',
      type: 'paragraph',
      data: {
        text: 'Gel electrophoresis is a technique that separates DNA fragments by size using an electric field. DNA molecules are negatively charged (due to phosphate backbone); in an electric field, they migrate towards the positive electrode. Smaller fragments move faster through the gel matrix than larger fragments, resulting in separation by size.'
      },
      terms: []
    },
    {
      id: 'list-gel-electro-steps',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Gel preparation: Agarose gel (1–2% agarose in buffer) is cast with wells at one end. Agarose forms a matrix of pores; pore size determines separation resolution.',
          'Sample loading: DNA samples are mixed with loading dye (for visibility and density) and pipetted into wells.',
          'Electrophoresis: Electric field is applied (negative at wells, positive at other end). DNA migrates through gel towards positive electrode. Smaller fragments travel faster and farther.',
          'Staining and visualisation: DNA is stained with ethidium bromide (intercalates between base pairs, fluoresces under UV) or safer alternatives (SYBR Green, GelRed). Gel is photographed under UV light.',
          'Fragment size determination: Fragments are compared to a DNA ladder (known size markers) to determine exact sizes.'
        ]
      },
      terms: []
    },
    {
      id: 'svg-gel-electro',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg"><defs><style>.gel { fill: #fce7f3; stroke: #db2777; stroke-width: 2; } .band { fill: #9d174d; } .label { font-size: 11px; font-weight: bold; } .arrow { stroke: #333; stroke-width: 2; marker-end: url(#arrowhead); }</style><defs><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="#333"/></marker></defs></defs><text x="200" y="25" text-anchor="middle" class="label">GEL ELECTROPHORESIS</text><rect class="gel" x="80" y="50" width="240" height="250" rx="5"/><text x="70" y="160" text-anchor="end" class="label">-</text><text x="330" y="160" text-anchor="start" class="label">+</text><path class="arrow" d="M 100 160 L 320 160" stroke-dasharray="5,5"/><text x="200" y="180" text-anchor="middle" style="font-size: 10px; font-style: italic;">Migration direction</text><g id="lane1"><text x="100" y="60" text-anchor="middle" class="label">Ladder</text><rect class="band" x="95" y="240" width="10" height="8"/><rect class="band" x="95" y="220" width="10" height="8"/><rect class="band" x="95" y="195" width="10" height="8"/><rect class="band" x="95" y="165" width="10" height="8"/><rect class="band" x="95" y="125" width="10" height="8"/></g><g id="lane2"><text x="160" y="60" text-anchor="middle" class="label">Sample 1</text><rect class="band" x="155" y="140" width="10" height="8"/><rect class="band" x="155" y="90" width="10" height="8"/></g><g id="lane3"><text x="220" y="60" text-anchor="middle" class="label">Sample 2</text><rect class="band" x="215" y="230" width="10" height="8"/><rect class="band" x="215" y="160" width="10" height="8"/><rect class="band" x="215" y="70" width="10" height="8"/></g><g id="lane4"><text x="280" y="60" text-anchor="middle" class="label">Sample 3</text><rect class="band" x="275" y="145" width="10" height="8"/><rect class="band" x="275" y="95" width="10" height="8"/></g><text x="200" y="320" text-anchor="middle" style="font-size: 10px; font-style: italic;">Smaller fragments travel farther</text></svg>',
        caption: 'Gel electrophoresis: DNA fragments separate by size; smaller fragments (higher) travel farther towards positive electrode'
      },
      terms: []
    },
    {
      id: 'callout-gel',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gel Electrophoresis Principle',
        text: 'DNA is negatively charged → migrates towards positive electrode. Smaller fragments move faster through gel pores than larger fragments. After staining (EtBr, UV), bands are visible at different positions corresponding to different fragment sizes. DNA ladder provides size reference.'
      },
      terms: []
    },
    {
      id: 'h-applications',
      type: 'heading',
      data: { text: 'Applications: Forensics, Diagnosis, Paternity', level: 2 },
      terms: []
    },
    {
      id: 'h-forensics',
      type: 'heading',
      data: { text: 'Forensic DNA Analysis', level: 3 },
      terms: []
    },
    {
      id: 'p-forensics-1',
      type: 'paragraph',
      data: {
        text: 'PCR and gel electrophoresis are core forensic tools. Small amounts of DNA (blood, hair, saliva) from crime scenes are amplified using PCR targeting STRs (short tandem repeats). The resulting PCR products are separated by gel electrophoresis or capillary electrophoresis, creating a DNA profile (DNA fingerprint) that is highly specific to an individual. Matching DNA profiles link suspects to crime scenes.'
      },
      terms: []
    },
    {
      id: 'h-diagnosis',
      type: 'heading',
      data: { text: 'Disease Diagnosis', level: 3 },
      terms: []
    },
    {
      id: 'p-diagnosis-1',
      type: 'paragraph',
      data: {
        text: 'PCR detects pathogenic DNA or RNA in clinical samples (blood, sputum, swabs). For example, COVID-19 diagnosis uses RT-PCR (reverse transcription PCR) to amplify viral RNA from respiratory samples. Hepatitis C diagnosis uses PCR to amplify HCV RNA. Tuberculosis diagnosis uses PCR to detect M. tuberculosis DNA. PCR is rapid (results in hours), sensitive (detects single pathogenic molecules), and specific (primers target only the pathogen).'
      },
      terms: []
    },
    {
      id: 'h-paternity',
      type: 'heading',
      data: { text: 'Paternity Testing', level: 3 },
      terms: []
    },
    {
      id: 'p-paternity-1',
      type: 'paragraph',
      data: {
        text: 'PCR-based paternity testing compares STR profiles of mother, alleged father, and child. A child must inherit one allele from each parent at each STR locus. If the alleged father does not have a matching allele at multiple loci, paternity is excluded. With multiple STR loci, the probability of false exclusion is negligible.'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'PCR amplifies DNA through repeated cycles of denaturation (94degreesC, separate), annealing (50–65degreesC, primers bind), and extension (72degreesC, Taq synthesises). After n cycles, 2ⁿ copies are produced (exponential amplification). Gel electrophoresis separates DNA fragments by size: smaller fragments migrate faster towards positive electrode and travel farther. Together, these techniques are essential for forensics (STR profiling), disease diagnosis (pathogen detection), and paternity testing (STR matching).',
        apply: 'After 25 PCR cycles starting with 1 template molecule, how many copies are produced? (2²⁵ ≈ 33 million). If each cycle takes 3 minutes, how long does the entire PCR run take? (25 cycles × 3 min ≈ 75 minutes)',
        analyze: 'Why is Taq polymerase essential for PCR but regular E. coli polymerase is not?',
        evaluate: 'In forensic DNA analysis, why are multiple STR loci tested rather than just one? What is the advantage for paternity testing?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can name the three components of a PCR cycle', checked: false },
          { text: 'I understand the temperature and function of each PCR step', checked: false },
          { text: 'I can calculate the number of copies after n PCR cycles', checked: false },
          { text: 'I understand why Taq polymerase is heat-stable and essential', checked: false },
          { text: 'I can explain how DNA migrates in gel electrophoresis', checked: false },
          { text: 'I understand why smaller DNA fragments travel farther', checked: false },
          { text: 'I know what a DNA ladder is and its purpose', checked: false },
          { text: 'I can describe forensic DNA profiling using STRs', checked: false },
          { text: 'I can explain pathernity testing using STR matching', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'PCR: denaturation (94degreesC, separate DNA) → annealing (50–65degreesC, primers bind) → extension (72degreesC, Taq synthesises). After n cycles: 2ⁿ copies (exponential). Taq is heat-stable, allowing repeated cycles without degradation. Gel electrophoresis: DNA loaded into wells, migrates towards positive electrode; smaller fragments move faster and travel farther. Stained with ethidium bromide (UV visible) or alternatives. Applications: forensics (STR profiling), disease diagnosis (pathogen DNA/RNA detection), paternity testing (STR allele matching). PCR sensitivity allows detection of single pathogenic molecules.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-pcr-steps', prompt: 'Describe the three PCR cycle steps and their temperatures.' },
      { id: 'cue-2', blockId: 'eq-pcr-amp', prompt: 'Write the formula for PCR amplification and calculate copies after 25 cycles.' },
      { id: 'cue-3', blockId: 'callout-taq', prompt: 'Why is Taq polymerase essential for PCR?' },
      { id: 'cue-4', blockId: 'list-gel-electro-steps', prompt: 'Describe gel electrophoresis steps and why smaller fragments travel farther.' },
      { id: 'cue-5', blockId: 'h-applications', prompt: 'Give three applications of PCR and gel electrophoresis.' }
    ],
    summaryText: 'PCR: denaturation (94degreesC), annealing (50–65degreesC, primers), extension (72degreesC, Taq). Amplification: 2ⁿ copies after n cycles; 30 cycles ≈ 1 billion copies. Taq: heat-stable from Thermus aquaticus, survives 94degreesC. Gel electrophoresis: DNA migrates to + electrode; smaller fragments travel farther. Staining: ethidium bromide (EtBr, UV visible). Applications: forensics (STR profiling), diagnosis (pathogen detection), paternity (STR alleles).',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'PCR and Molecular Forensics', detail: 'Butler JM. Advanced Topics in Forensic DNA Typing: Interpretation (2nd ed.). Academic Press', year: '2014', source: 'Academic Press', tags: ['PCR', 'gel electrophoresis', 'forensics', 'DNA profiling'] }
  ]
};
