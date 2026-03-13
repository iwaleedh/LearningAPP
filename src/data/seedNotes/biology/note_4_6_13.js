export const note_biology_4_6_13 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Core Practical 14: Investigate the effect of different antibiotics on bacterial growth using aseptic techniques.' }
    },
    {
      id: 'h-aseptic',
      type: 'heading',
      data: { text: 'Aseptic Techniques', level: 2 }
    },
    {
      id: 'p-aseptic',
      type: 'paragraph',
      data: { text: 'Aseptic techniques involve maintaining a sterile environment to prevent contamination from unwanted microorganisms, both to protect the experimenter and to ensure the results are reliable. Key practices include:' }
    },
    {
      id: 'list-aseptic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Working close to a lit Bunsen burner, which creates a convection updraft that prevents airborne microorganisms from landing in the workspace.',
          'Wiping down all work surfaces with antibacterial disinfectant before and after the practical.',
          'Sterilising equipment, such as passing a metal inoculating loop through a roaring Bunsen flame to kill any residing bacteria.',
          'Washing plastic tools or disposing of them safely.'
        ]
      }
    },
    {
      id: 'h-method',
      type: 'heading',
      data: { text: 'Method', level: 2 }
    },
    {
      id: 'list-method',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '**Inoculate:** Transfer a known, specific bacterial culture onto a sterile agar plate using a pipette. Use a sterilised spreader or inoculating loop to spread the culture evenly across the agar surface.',
          '**Prepare discs:** Soak similar-sized paper discs in different types of, or varying concentrations of, antibiotics.',
          '**Control:** Soak one disc in sterile distilled water to act as a negative control. This proves the antibiotic, not the paper disc itself, is affecting growth.',
          '**Placement:** Using sterilised forceps, place the discs evenly spaced upon the agar plate.',
          '**Incubation preparation:** Lightly tape a lid onto the petri dish. Do not seal it fully, because the bacteria require oxygen to respire aerobically. Invert the dish (store upside down) to prevent any condensation dripping down onto the agar and contaminating it.',
          '**Incubation:** Incubate at 25°C for 24–48 hours. This lower temperature is safer; incubating at human body temperature (37°C) risks cultivating harmful human pathogens.'
        ]
      }
    },
    {
      id: 'h-interpreting',
      type: 'heading',
      data: { text: 'Interpreting Results', level: 2 }
    },
    {
      id: 'p-interpreting',
      type: 'paragraph',
      data: { text: 'After incubation, the bacteria will have grown to form a cloudy \"lawn\" covering the surface of the agar. Around effective antibiotic discs, there will be a clear patch, called the **zone of inhibition** (or clear zone).' }
    },
    {
      id: 'list-interpreting',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'The larger the clear zone, the more effective the antibiotic was at killing or inhibiting the growth of the bacteria.',
          'If no clear zone forms around a specific antibiotic, the bacteria are resistant to it.',
          'Comparing the diameters (or cross-sectional areas) of these clear zones allows for quantitative data analysis between different antibiotics or concentrations.'
        ]
      }
    },
    {
      id: 'callout-safety',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Tip',
        text: 'A common exam question tests understanding of why plates are incubated at 25°C. Remember: 25°C prevents the growth of human-specific pathogenic bacteria that thrive at 37°C!'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why is it important to work near a lit Bunsen burner during this core practical?' },
      { id: 'cue-2', prompt: 'Why must the petri dish not be completely sealed with tape?' },
      { id: 'cue-3', prompt: 'Why are plates typically incubated at 25°C instead of 37°C in school laboratories?' }
    ],
    summaryText: 'The Bunsen burner creates a convection updraft that prevents airborne microorganisms from contaminating the workspace. The petri dish is only lightly taped to ensure oxygen can enter, allowing the bacteria to respire aerobically (preventing anaerobic pathogens from growing). Plates are incubated at 25°C to avoid cultivating dangerous pathogenic bacteria that thrive at normal human body temperature (37°C).'
  }
};
