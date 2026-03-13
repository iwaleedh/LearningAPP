export const note_biology_5_8_7 = {
  blocks: [
    {
      id: 'obj-7',
      type: 'objective',
      data: { text: 'Understand how medical imaging techniques (CT, MRI, fMRI, and PET scans) are used to investigate brain structure and function without surgical intervention.' }
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Techniques to Investigate the Brain', level: 2 }
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'The brain is complex, incredibly delicate, and encased in the skull, making it difficult to study its functions in isolation. Specialised medical scanners bypass surgical intervention to reveal the physical structures or real-time activities of the brain.' }
    },
    {
      id: 'h-ct',
      type: 'heading',
      data: { text: 'CT (Computerised Tomography) Scans', level: 3 }
    },
    {
      id: 'p-ct',
      type: 'paragraph',
      data: { text: 'CT scans use x-ray radiation to produce cross-sectional images of the brain. A beam of x-rays is fired from multiple angles, and the amount of radiation absorbed is detected.' }
    },
    {
      id: 'list-ct',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Denser tissues absorb more x-ray radiation and appear lighter on the scan.',
          'Reveals physical structures and tissue damage (e.g. bleeding from a stroke, as blood is less dense than brain tissue).',
          'Shows structure only, not function. However, doctors can match visible structural damage to a patient\'s symptoms to deduce brain region functions.',
          'Uses higher-level x-ray radiation, meaning it is not recommended for pregnant patients or children due to low but present radiation risks.'
        ]
      }
    },
    {
      id: 'h-mri',
      type: 'heading',
      data: { text: 'MRI (Magnetic Resonance Imaging)', level: 3 }
    },
    {
      id: 'p-mri',
      type: 'paragraph',
      data: { text: 'MRI scanners generate images using a strong magnetic field and radio waves. The patient must remain perfectly still during the process.' }
    },
    {
      id: 'list-mri',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Produces higher-resolution images than CT scans.',
          'Particularly clear for visualising soft tissues, allowing accurate location of tumours.',
          'Uses no ionising radiation, making it the preferred method for repeated imaging during long-term therapies.',
          'Cannot be used on patients with internal metal implants (e.g. pacemakers or insulin pumps) due to the highly powerful magnets.'
        ]
      }
    },
    {
      id: 'h-fmri',
      type: 'heading',
      data: { text: 'Functional MRI (fMRI)', level: 3 }
    },
    {
      id: 'p-fmri',
      type: 'paragraph',
      data: { text: 'While standard MRI shows structure, functional MRI (fMRI) allows brain function to be studied in real-time.' }
    },
    {
      id: 'list-fmri',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Highlights areas of oxygenated blood in the brain by measuring the ratio of oxygenated to deoxygenated haemoglobin.',
          'Patients can be given a task or asked to think about a specific topic while in the scanner, causing regions associated with that activity to "light up" from increased blood flow.',
          'Widely used in psychology research and medical diagnoses (e.g., finding the focal source of seizures).'
        ]
      }
    },
    {
      id: 'h-pet',
      type: 'heading',
      data: { text: 'PET (Positron Emission Tomography)', level: 3 }
    },
    {
      id: 'p-pet',
      type: 'paragraph',
      data: { text: 'PET scans track the movement of radioactive tracers introduced into the patient\'s blood before the scan.' }
    },
    {
      id: 'list-pet',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The scanner detects areas of high radioactivity where the tracer has accumulated.',
          'Tracers often consist of radioactively labelled glucose. Highly metabolically active areas pull in this glucose, indicating high brain activity.',
          'Crucial for understanding diseases where region-specific brain activity decreases, such as Alzheimer\'s disease.'
        ]
      }
    },
    {
      id: 'table-scanning',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of Neurological Scanners',
        headers: ['Scan Type', 'Uses radiation?', 'Shows Function?', 'Key Feature'],
        rows: [
          ['CT', 'Yes (X-rays)', 'No', 'Good for seeing major bleeds/damage, lower res.'],
          ['MRI', 'No (Magnetic field)', 'No', 'High resolution, safe for repeated soft-tissue imaging.'],
          ['fMRI', 'No (Magnetic field)', 'Yes', 'Measures oxygenated vs deoxygenated haemoglobin in active areas.'],
          ['PET', 'Yes (Radioactive tracer)', 'Yes', 'Detects labelled glucose to measure metabolic rate in real-time.']
        ]
      }
    },
    {
      id: 'summary-7',
      type: 'summary',
      data: { text: 'Neurologists use different imaging techniques depending on the need: CT offers quick structural checks despite radiation risks, MRI provides safe, high-resolution soft-tissue maps, fMRI dynamically maps blood flow to active brain zones, and PET traces radioactive glucose to directly measure tissue metabolism.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'q1', blockId: 'list-ct', prompt: 'Why might a doctor choose to use an MRI over a CT scan for a child?' },
      { id: 'q2', blockId: 'table-scanning', prompt: 'Which two imaging techniques can measure brain activity in real time?' },
      { id: 'q3', blockId: 'list-fmri', prompt: 'Explain how an fMRI scan detects active regions of the brain.' },
      { id: 'q4', blockId: 'list-pet', prompt: 'Describe how a PET scan tracks metabolic activity across the cerebrum.' }
    ],
    summaryText: 'CT scans show structure via X-rays; MRI shows high-resolution structure via magnets. fMRI tracks oxygenated blood to show function dynamically; PET uses radioactive tracers to map active metabolism.',
    ready: true
  },
  evidence: []
};