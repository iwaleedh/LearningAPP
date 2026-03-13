export const note_biology_4_6_9 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand the roles of T cells (T helper, T killer, T memory) and B cells (plasma and memory) in the specific immune response.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Lymphocytes: Types & Roles', level: 2 }
    },
    {
      id: 'p-lymph-intro',
      type: 'paragraph',
      data: { text: 'Lymphocytes are white blood cells that play a central role in the highly targeted specific immune response. There are two main types: **T cells** and **B cells**.' }
    },
    {
      id: 'h-tcells',
      type: 'heading',
      data: { text: 'T Cells (T lymphocytes)', level: 3 }
    },
    {
      id: 'p-tcells',
      type: 'paragraph',
      data: { text: 'Produced in the bone marrow and matured in the **thymus**. They have specific cell surface receptors (T cell receptors) that are similar in structure to antibodies, each specific to one type of antigen.' }
    },
    {
      id: 'list-tcells-activate',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'T cells interact with antigen-presenting cells (e.g. macrophages, infected cells, or pathogens displaying specific antigens).',
          'When a T cell with a complementary receptor binds to the specific antigen, it becomes **activated**.',
          'The activated T cell divides rapidly by mitosis (clonal expansion), producing genetically identical clones.'
        ]
      }
    },
    {
      id: 'p-tcell-types',
      type: 'paragraph',
      data: { text: 'There are three main types of T cells produced during clonal expansion:' }
    },
    {
      id: 'list-t-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**T helper cells:** Release chemical signalling molecules (cytokines) that activate B cells, activate T killer cells, and stimulate phagocytosis by macrophages.',
          '**T killer cells:** Bind to and directly destroy infected body cells displaying the relevant specific non-self antigen.',
          '**T memory cells:** Remain in the blood, providing immunological memory for a faster and stronger specific immune response if the same pathogen is encountered again.'
        ]
      }
    },
    {
      id: 'h-bcells',
      type: 'heading',
      data: { text: 'B Cells (B lymphocytes)', level: 3 }
    },
    {
      id: 'p-bcells',
      type: 'paragraph',
      data: { text: 'B cells remain in the **bone marrow** to mature. Their specific cell surface receptors are actually membrane-bound antibodies (antibody receptors).' }
    },
    {
      id: 'list-bcells-activate',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'If the corresponding antigen enters the body, a B cell with the specific antibody receptor binds to it, forming an antigen-antibody complex.',
          'This binding, along with stimulating cell signalling molecules released by **T helper cells**, fully **activates** the B cell.',
          'The activated B cell divides repeatedly by mitosis (clonal expansion) to produce clones.'
        ]
      }
    },
    {
      id: 'p-bcell-types',
      type: 'paragraph',
      data: { text: 'The cloned B cells differentiate into two main types:' }
    },
    {
      id: 'list-b-types',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Plasma cells (effector cells):** These cells secrete large quantities of specific antibodies into the blood to combat the current infection.',
          '**B memory cells:** Remain in the blood to allow a rapid and massive production of antibodies if the body encounters the exact same pathogen in the future.'
        ]
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', prompt: 'Where do T cells and B cells mature?' },
      { id: 'cue-2', prompt: 'What is the function of T helper cells?' },
      { id: 'cue-3', prompt: 'What combination of signals stimulates a B cell to undergo clonal expansion?' },
      { id: 'cue-4', prompt: 'What is the role of a B plasma cell?' }
    ],
    summaryText: 'T cells mature in the thymus, while B cells mature in the bone marrow. T helper cells release cytokines to activate both T killer cells and B cells, and stimulate phagocytosis. B cells require both binding to an antigen directly and chemical signals from a T helper cell to become fully activated for mitosis. Activated B cells can differentiate into plasma cells, which secrete large amounts of specific antibodies into the blood.'
  }
};
