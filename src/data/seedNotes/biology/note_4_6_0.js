export const note_biology_4_6_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the principles of culturing microorganisms, including the use of growth media, inoculation, and isolation of pure cultures.' }
    },
    {
      id: 'h-culturing',
      type: 'heading',
      data: { text: 'Culturing Microorganisms', level: 2 }
    },
    {
      id: 'p-culturing-intro',
      type: 'paragraph',
      data: { text: 'Most microorganisms are only visible using a microscope. To investigate them, it is necessary to culture (grow) them. For example, bacteria reproduce by cloning themselves; when grown on an agar gel, they form a colony of identical individuals visible to the naked eye.' }
    },
    {
      id: 'h-requirements',
      type: 'heading',
      data: { text: 'Growth Requirements', level: 3 }
    },
    {
      id: 'list-requirements',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Nutrients:** Carbon, nitrogen, and minerals provided in a nutrient growth medium.',
          '**Oxygen:** For aerobic microorganisms (anaerobic microorganisms require the absence of oxygen).',
          '**Optimum pH** and **favourable temperature**.'
        ]
      }
    },
    {
      id: 'callout-safety',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Health and Safety Precautions',
        text: 'Culturing carries the risk of mutations forming pathogenic strains, or atmospheric pathogenic bacteria contaminating the culture. Always:\n- Sterilise all equipment before use (high heat or antimicrobial chemicals).\n- Keep cultures sealed safely in the lab.\n- Seal cultures in plastic bags and sterilise at high temperature and pressure before disposal.'
      }
    },
    {
      id: 'h-steps',
      type: 'heading',
      data: { text: 'Culturing Steps', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          '**Prepare Medium:** Use a liquid culture (broth) or solid nutrient agar (a gel extracted from seaweed) containing carbon, nitrogen, and minerals. Keep it sterile before use.',
          '**Inoculation:** Introduce the microorganisms using a sterilised metal inoculation loop (sterilised in a Bunsen burner flame between uses). This transfers them between media (e.g. broth to agar).',
          '**Sealing:** Cover the new medium to prevent airborne contamination. For aerobic organisms, the seal (like a cotton wool stopper or petri lid) **must not be airtight**.',
          '**Incubation:** Label clearly and incubate at around $20^\circ C$ in schools to prevent growing human pathogens. Pathogens grow best near $37^\circ C$ (human body temperature), which might be used in hospitals for faster diagnostic results.'
        ]
      }
    },
    {
      id: 'h-pure-cultures',
      type: 'heading',
      data: { text: 'Growing a Pure Culture', level: 2 }
    },
    {
      id: 'p-pure-cultures',
      type: 'paragraph',
      data: { text: 'A pure culture contains only one type of microorganism. To achieve this, the specific microorganism must be isolated by tailoring conditions to its specific needs:' }
    },
    {
      id: 'list-isolation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Aerobic/Anaerobic Conditions:** Grow the culture in the appropriate oxygen environment to suppress unwanted microbes.',
          '**Selective Media:** Adjust the nutrients to create conditions for the optimal growth of only a certain type of microorganism (e.g. to identify antibiotic-resistant strains or genetically modified organisms).',
          '**Indicator Media:** Add substances that cause a colour change to help distinguish the desired colonies from the rest.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Why are school incubators usually set to $20^\circ C$ max?' },
      { id: 'cue-2', prompt: 'What is a selective medium?' },
      { id: 'cue-3', prompt: 'Why should the seal on an aerobic culture not be airtight?' },
      { id: 'cue-4', prompt: 'How is an inoculating loop sterilised between uses?' }
    ],
    summaryText: 'Incubating at $20^\circ C$ prevents the growth of human pathogens, which prefer $37^\circ C$. Selective media contain specific nutrients tailored to allow only the desired microbe to grow. Aerobic seals should not be airtight to allow oxygen in. Inoculating loops are sterilised by passing through a Bunsen burner flame.'
  }
};
