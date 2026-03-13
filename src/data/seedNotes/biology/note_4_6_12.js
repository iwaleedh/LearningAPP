export const note_biology_4_6_12 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the significance of Hospital Acquired Infections (HCAIs) and the protocols used to control their spread.' }
    },
    {
      id: 'h-hcai',
      type: 'heading',
      data: { text: 'Hospital Acquired Infections (HCAIs)', level: 2 }
    },
    {
      id: 'p-hcai',
      type: 'paragraph',
      data: { text: 'Hospital acquired infections (HCAIs) are infections that patients contract while receiving treatment in a medical facility. They are especially dangerous for the following reasons:' }
    },
    {
      id: 'list-risk-factors',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Many patients are older or have weakened immune systems.',
          'Surgical procedures or wounds provide direct entry points for pathogens.',
          'Hospitals frequently use antibiotics, creating a selection pressure that favours highly resistant bacterial strains, such as MRSA.'
        ]
      }
    },
    {
      id: 'h-transmission',
      type: 'heading',
      data: { text: 'Transmission and Contamination', level: 3 }
    },
    {
      id: 'p-transmission',
      type: 'paragraph',
      data: { text: 'Staff and visitors can inadvertently transmit pathogens by:' }
    },
    {
      id: 'list-transmission',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Not practicing adequate hand hygiene before touching patients or sterile surfaces.',
          'Sneezing or coughing, releasing infectious aerosols into the environment.',
          'Leaving contaminated medical equipment, bedding, or surfaces unsterilised.'
        ]
      }
    },
    {
      id: 'h-prevention',
      type: 'heading',
      data: { text: 'Infection Control Practices', level: 2 }
    },
    {
      id: 'p-prevention',
      type: 'paragraph',
      data: { text: 'Stringent protocols are required to prevent the spread of MRSA and other HCAIs:' }
    },
    {
      id: 'list-protocols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Hand hygiene:** Staff must wash hands thoroughly between patient interactions and use alcohol-based hand gels.',
          '**Clothing:** Specific dress codes are often enforced, banning items like long ties or watches which can trail over patients or surfaces.',
          '**Isolation:** Patients testing positive for MRSA are isolated in specific wards, and visitors are heavily monitored or restricted.',
          '**Sterilisation:** All bedding, surfaces, and non-disposable equipment must be actively disinfected to clear environmental reservoirs of the pathogen.'
        ]
      }
    },
    {
      id: 'callout-mrsa',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Screening for MRSA',
        text: 'New patients may be comprehensively screened for resistant bacteria upon admission. Doing this can ensure they are kept in isolation to control outbreaks before the patient begins exhibiting symptoms.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Give three reasons why HCAIs are more prevalent in hospitals.' },
      { id: 'cue-2', prompt: 'List three protocols used to control the spread of MRSA on hospital wards.' }
    ],
    summaryText: 'HCAIs are more common because patients often have weakened immune systems, possess open wounds/incisions for entry points, and the high antibiotic use creates a heavy selection pressure for resistant strains. Spread is controlled by strict hand washing between patients, isolating infected individuals, rigorous sterilisation of equipment and bedding, and restricting clothing items like ties or watches.'
  }
};
