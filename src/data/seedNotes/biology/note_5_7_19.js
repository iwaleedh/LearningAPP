export const note_biology_5_7_19 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Core Practical 15: Investigate the rate of respiration in yeast using redox indicators.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Yeast Respiration & Redox Indicators', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A redox indicator is a substance that undergoes a visually distinct colour change when it is reduced or oxidised. In this core practical, dyes like **DCPIP** or **methylene blue** are used to measure the rate of respiration in yeast suspensions.' }
    },
    {
      id: 'h-mech',
      type: 'heading',
      data: { text: 'Mechanism of Action', level: 3 }
    },
    {
      id: 'list-mech',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Dehydrogenation occurs regularly throughout aerobic and anaerobic respiration (e.g. during glycolysis when *dehydrogenase* produces reduced NAD).',
          'When DCPIP/methylene blue is present, it acts as an artificial electron acceptor, stealing the hydrogen instead of NAD.',
          'Upon accepting hydrogen (being reduced), both indicators turn from **blue** to **colourless**.',
          'The faster the respiration rate, the faster dehydrogenase removes hydrogen, meaning the time taken for the solution to turn colourless decreases.'
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
          'Add a set volume of yeast suspension to several test tubes containing an identical concentration of glucose.',
          'Place the tubes in a temperature-controlled water bath (e.g., set to 30°C, 35°C, 40°C). Allow 5 minutes for temperature equilibration.',
          'Add a standard volume of DCPIP to the tube and start a stopwatch immediately.',
          'Halt the stopwatch the moment all blue colour fades out of the solution.',
          'Repeat the procedure across the range of independent variables. **Rate is calculated as 1 ÷ time taken**.'
        ]
      }
    },
    {
      id: 'h-controls',
      type: 'heading',
      data: { text: 'Control Variables', level: 3 }
    },
    {
      id: 'list-controls',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Volume of dye added:** More dye molecules linearly increase the time required to complete the colour change.',
          '**Volume of yeast:** A higher concentration of yeast cells artificially inflates respiration speed.',
          '**Substrate concentration/type:** Limiting glucose curtails respiration outputs.',
          '**pH:** Buffer solutions are used to prevent changing pH levels from denaturing crucial yeast enzymes.'
        ]
      }
    },
    {
      id: 'callout-tips',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Subjectivity & Controls',
        text: 'Deciding the exact moment the liquid turns completely colourless is highly subjective. It is best practice to have the same student be the designated judge across repeated tests. Additionally, the yeast itself is often naturally yellowish—not plain water-clear. It is useful to run a "control" tube containing only yeast and glucose without any dye to accurately benchmark the target end-colour.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What function does DCPIP perform in this investigation?' },
      { id: 'cue-2', prompt: 'What colour change is witnessed when methylene blue is reduced?' },
      { id: 'cue-3', prompt: 'How do you calculate the rate of respiration from raw experimental data?' }
    ],
    summaryText: 'DCPIP acts as an artificial electron acceptor, substituting for NAD by picking up hydrogen atoms released by dehydrogenase enzymes during respiration. The dye undergoes a colour change from blue to colourless as it is reduced. The mathematical rate of respiration is determined by calculating strictly: 1 ÷ time taken in seconds.'
  }
};
