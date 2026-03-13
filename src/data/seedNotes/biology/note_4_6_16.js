export const note_biology_4_6_16 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the principles of Polymerase Chain Reaction (PCR), gel electrophoresis, and DNA profiling for paternity and forensic science.' }
    },
    {
      id: 'h-pcr',
      type: 'heading',
      data: { text: 'Polymerase Chain Reaction (PCR)', level: 2 }
    },
    {
      id: 'p-pcr',
      type: 'paragraph',
      data: { text: 'PCR is an *in vitro* method of rapid DNA amplification. It creates billions of identical copies of a specific DNA fragment from a very small initial sample (e.g. from a crime scene).' }
    },
    {
      id: 'list-pcr-req',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**DNA Sample:** The target fragment to be amplified.',
          '**Primers:** Short sequences of single-stranded DNA complementary to the 3’ ends of the target sequence. They define the region to be amplified.',
          '**Taq Polymerase:** The DNA polymerase enzyme used to construct new strands. It is sourced from extremophile bacteria so it does not denature at high temperatures.',
          '**Free Nucleotides:** Building blocks for the new strands.',
          '**Buffer Solution:** To provide the optimum pH.'
        ]
      }
    },
    {
      id: 'h-pcr-stages',
      type: 'heading',
      data: { text: 'Stages of a PCR Cycle', level: 3 }
    },
    {
      id: 'list-stages',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '**Denaturation (95°C):** The high temperature breaks the hydrogen bonds holding the double-stranded DNA together, creating single strands.',
          '**Annealing (50–60°C):** The temperature is lowered, allowing primers to anneal (bind) to the ends of the single DNA strands.',
          '**Elongation (72°C):** The temperature is raised to the optimum for *Taq* polymerase, which builds the complementary DNA strands. Because the amount of DNA doubles every cycle, millions of copies are made rapidly.'
        ]
      }
    },
    {
      id: 'h-gel',
      type: 'heading',
      data: { text: 'Gel Electrophoresis', level: 2 }
    },
    {
      id: 'p-gel',
      type: 'paragraph',
      data: { text: 'Once the DNA has been amplified via PCR, it is treated with restriction endonuclease enzymes that cut the DNA at specific sites. The fragments are then separated using gel electrophoresis.' }
    },
    {
      id: 'list-gel',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'DNA fragments are inserted into wells at one end of an agarose gel plate.',
          'An electric current is applied. Because DNA molecules have a **negatively charged phosphate group**, they are drawn toward the positive anode.',
          'The fragments are separated by **length/mass**. Small fragments travel quickly through the gel pores and move further, while large fragments move slowly and stay closer to the wells.',
          'A DNA standard (with fragments of known lengths) is loaded into the first well for comparison.'
        ]
      }
    },
    {
      id: 'h-profiling',
      type: 'heading',
      data: { text: 'Analysing DNA Profiles', level: 2 }
    },
    {
      id: 'p-profiling',
      type: 'paragraph',
      data: { text: 'Every person (excluding identical twins) has a unique DNA sequence. Restriction endonucleases cut DNA between specific, non-coding repeated sequences called Variable Number Tandem Repeats (VNTRs).' }
    },
    {
      id: 'list-profiling',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Because different individuals possess different numbers of VNTRs, their DNA is cut into different length fragments.',
          'This produces a unique pattern of bands when separated by gel electrophoresis. This unique pattern is a **DNA profile**.',
          '**Forensics:** DNA from a crime scene is compared against suspect profiles. An exact band match identifies the individual.',
          '**Paternity:** A child inherits half their DNA from each parent. Therefore, any band present in the child\'s profile must match a band in either the biological mother\'s or the biological father\'s profile.',
          '**Captive Breeding:** Zoologists profile animals to select mates with the most genetic variation, preventing inbreeding and maintaining a diverse gene pool.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why is Taq polymerase used in PCR instead of human DNA polymerase?' },
      { id: 'cue-2', prompt: 'In gel electrophoresis, why do DNA molecules migrate towards the anode?' },
      { id: 'cue-3', prompt: 'What are VNTRs and how do they create unique DNA profiles?' }
    ],
    summaryText: 'Taq polymerase is extracted from thermophilic bacteria, meaning its optimal temperature is high and it will not denature during the 95°C denaturation stage of PCR. DNA migrates toward the positive anode during electrophoresis because DNA is negatively charged due to its phosphate groups. VNTRs (Variable Number Tandem Repeats) are repeated non-coding sequences; because individuals inherit vastly different repeat amounts, restriction enzymes cut the DNA into completely unique fragment lengths.'
  }
};
