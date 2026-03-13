export const note_biology_4_6_8 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the difference between self and non-self antigens, and describe the structure and function of antibodies (immunoglobulins).' }
    },
    {
      id: 'h-antigens',
      type: 'heading',
      data: { text: 'Self and Non-Self Antigens', level: 2 }
    },
    {
      id: 'p-antigens-intro',
      type: 'paragraph',
      data: { text: 'Every cell has unique markers on its cell surface membrane called **antigens** (often glycoproteins or glycolipids) that allow for cell-to-cell recognition.' }
    },
    {
      id: 'list-antigen-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Self-antigens:** Produced by the organism\'s own body cells. They do not stimulate an immune response.',
          '**Non-self antigens:** Not produced by the organism\'s own cells (e.g., on pathogenic bacteria, viruses, or transplanted organs). These *do* stimulate an immune response.'
        ]
      }
    },
    {
      id: 'p-apc-recap',
      type: 'paragraph',
      data: { text: 'After macrophages (phagocytes) engulf and digest pathogens, they present the non-self antigens on their own cell surface membrane. These Antigen-Presenting Cells (APCs) activate **lymphocytes**, triggering the specific immune response.' }
    },
    {
      id: 'h-antibody-structure',
      type: 'heading',
      data: { text: 'Antibody Structure', level: 2 }
    },
    {
      id: 'p-antibody-intro',
      type: 'paragraph',
      data: { text: 'Antibodies (immunoglobulins) are Y-shaped molecules secreted by specialised white blood cells known as **plasma cells**.' }
    },
    {
      id: 'list-antibody-structure',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Four polypeptide chains:** Two identical long \"heavy\" chains and two identical short \"light\" chains.',
          '**Disulfide bonds:** Hold the heavy chains together and attach the light chains to the heavy chains.',
          '**Constant region:** The amino acid sequence does not vary within a class of antibody. Determines the mechanism used to destroy the antigen.',
          '**Variable region:** The ends of the arms. The amino acid sequence differs for each uniquely specific antibody.',
          '**Antigen-binding site:** Located at the end of the variable region. Its highly specific 3D shape is complementary to one specific antigen, allowing them to bind and form an **antigen-antibody complex**.',
          '**Hinge region:** Gives the antibody flexibility, allowing the two binding sites to attach to multiple antigens at different angles.'
        ]
      }
    },
    {
      id: 'h-antibody-function',
      type: 'heading',
      data: { text: 'Antibody Function', level: 2 }
    },
    {
      id: 'p-antibody-function',
      type: 'paragraph',
      data: { text: 'Antibodies bind to specific antigens and disable pathogens in several ways:' }
    },
    {
      id: 'list-antibody-function',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Preventing infection:** Pathogens enter host cells by binding with surface receptors. Antibodies bind to pathogens, blocking these receptors and preventing them from attaching to host cells.',
          '**Neutralisation (Anti-toxins):** Antibodies can bind directly to harmful toxins produced by pathogens (like tetanus or diphtheria bacteria), neutralising their effects.',
          '**Agglutination:** Because antibodies have two binding sites, they can cross-link multiple pathogens together. This clumps them into a large mass, making it harder for them to spread and much easier for phagocytes to engulf many pathogens at once.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'What type of bond holds the heavy and light chains of an antibody together?' },
      { id: 'cue-2', prompt: 'Which part of an antibody binds to the antigen?' },
      { id: 'cue-3', prompt: 'Why is the hinge region of an antibody important?' },
      { id: 'cue-4', prompt: 'Explain the process of agglutination.' }
    ],
    summaryText: 'Antibodies are held together by disulfide bonds. The variable region containing the antigen-binding site binds specifically to complementary antigens. The hinge region provides flexibility to bind multiple antigens. Agglutination is when antibodies cross-link pathogens, clumping them together to prevent spread and increase the efficiency of phagocytosis.'
  }
};
