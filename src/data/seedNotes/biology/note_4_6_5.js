export const note_biology_4_6_5 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the transmission, infection phases, and symptoms of Tuberculosis (TB) and Human Immunodeficiency Virus (HIV).' }
    },
    {
      id: 'h-tb',
      type: 'heading',
      data: { text: 'Tuberculosis (TB)', level: 2 }
    },
    {
      id: 'p-tb-intro',
      type: 'paragraph',
      data: { text: '*Mycobacterium tuberculosis* is a pathogenic bacterium that causes the disease tuberculosis (TB). Infectious diseases caused by pathogens are transmissible between individuals.' }
    },
    {
      id: 'h-tb-transmission',
      type: 'heading',
      data: { text: 'Transmission of TB', level: 3 }
    },
    {
      id: 'list-tb',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'When infected people with active TB cough or sneeze, the bacteria enter the air in tiny liquid droplets from the lungs.',
          'Uninfected people inhale these infected droplets.',
          'TB spreads more quickly among people living in overcrowded conditions or with compromised immune systems.'
        ]
      }
    },
    {
      id: 'h-tb-development',
      type: 'heading',
      data: { text: 'Development of TB in the Body', level: 3 }
    },
    {
      id: 'list-tb-dev',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Once inside the lungs, TB bacteria are engulfed by phagocytes.',
          'The bacteria can survive and reproduce inside these phagocytes.',
          '**Primary Infection:** Individuals with a healthy immune system will not develop full TB at this stage. Infected phagocytes become encased in structures called **tubercles** in the lungs, where the bacteria remain **dormant**.',
          '**Active Phase:** The bacteria can become activated and overpower the immune system at a later stage (e.g., if the immune system becomes compromised by HIV). The person then develops the active disease.'
        ]
      }
    },
    {
      id: 'p-tb-symptoms',
      type: 'paragraph',
      data: { text: 'The first symptoms of TB include fever, fatigue, a persistent cough, and lung inflammation. If left untreated, the bacteria cause extensive lung damage, potentially leading to respiratory failure and death. It can also spread to other organs resulting in organ failure.' }
    },
    {
      id: 'h-hiv',
      type: 'heading',
      data: { text: 'Human Immunodeficiency Virus (HIV)', level: 2 }
    },
    {
      id: 'p-hiv-intro',
      type: 'paragraph',
      data: { text: 'HIV contains RNA and is a retrovirus. It eventually leads to Acquired Immune Deficiency Syndrome (AIDS).' }
    },
    {
      id: 'h-hiv-transmission',
      type: 'heading',
      data: { text: 'Transmission of HIV', level: 3 }
    },
    {
      id: 'p-hiv-trans',
      type: 'paragraph',
      data: { text: 'HIV cannot survive outside the human body. It is transmitted via exchange of body fluids (blood, semen, vaginal fluids, breast milk):' }
    },
    {
      id: 'list-hiv-trans',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Unprotected sexual intercourse',
          'Blood donation and transfusions (now heavily screened)',
          'Sharing of needles used by intravenous drug users',
          'From mother to child across the placenta during pregnancy',
          'Mixing of blood between mother and child during birth',
          'From mother to child through breast milk'
        ]
      }
    },
    {
      id: 'h-hiv-replication',
      type: 'heading',
      data: { text: 'Replication of HIV', level: 3 }
    },
    {
      id: 'list-hiv-repl',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          'HIV binds to a receptor protein (CD4) on the surface of T helper cells.',
          'The virus envelope fuses with the host cell membrane, releasing viral RNA and enzymes (reverse transcriptase and integrase) into the host cytoplasm.',
          '**Reverse transcriptase** uses the viral RNA to synthesise a complementary strand of DNA.',
          'The new viral DNA is integrated into the host cell\'s genome by **integrase**.',
          'The host cell transcribes the viral DNA back into viral RNA and translates it to produce viral proteins.',
          'These components are assembled into new viruses that bud out of the T helper cell, taking some of the host cell membrane to form their lipid envelope.',
          'The repeated budding eventually destroys the T helper cell.'
        ]
      }
    },
    {
      id: 'h-aids',
      type: 'heading',
      data: { text: 'Progression to AIDS', level: 3 }
    },
    {
      id: 'p-aids-prog',
      type: 'paragraph',
      data: { text: 'The initial infection (acute HIV syndrome) may cause flu-like symptoms. Eventually, as T helper cell numbers drop severely, the immune system fails:' }
    },
    {
      id: 'list-aids-prog',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'T helper cells normally activate B cells. Without them, B cells do not produce sufficient antibodies.',
          'T killer cells cannot be fully activated effectively.',
          'The patient enters the symptomatic stage of **AIDS** (Acquired Immune Deficiency Syndrome).',
          'The individual becomes highly susceptible to **opportunistic infections** (like TB, pneumonia, and rare cancers like Kaposi\'s sarcoma) that would not normally harm a healthy person.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'In what structures do Mycobacterium tuberculosis bacteria lay dormant during primary infection?' },
      { id: 'cue-2', prompt: 'Name three methods by which HIV can be transmitted.' },
      { id: 'cue-3', prompt: 'What is the role of reverse transcriptase in HIV replication?' },
      { id: 'cue-4', prompt: 'Why does HIV eventually lead to a lack of antibody production?' }
    ],
    summaryText: 'TB bacteria lay dormant inside tubercles in the lungs. HIV is transmitted via body fluid transfer (sexual intercourse, sharing needles, mother to child). Reverse transcriptase converts the viral RNA into complementary DNA. HIV destroys T helper cells over time, which are necessary to activate B cells; without them, antibody production fails, leading to AIDS.'
  }
};
