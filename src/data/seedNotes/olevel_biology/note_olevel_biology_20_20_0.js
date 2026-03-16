export const note_olevel_biology_20_20_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/20 Human Influences On Ecosystems/20-1-1-food-supply-and-agriculture.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe methods used to increase food supply and evaluate their environmental impacts.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Methods to Increase Food Production', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Agricultural methods to increase food yield and their environmental impacts',
        headers: ['Method', 'How it increases yield', 'Environmental concern'],
        rows: [
          ['Fertilisers (artificial)', 'Add N, P, K to soil to boost plant growth', 'Run-off causes eutrophication of waterways'],
          ['Pesticides', 'Kill insects/fungi/pests that damage crops', 'Kill non-target species; bioaccumulation in food chains'],
          ['Herbicides', 'Kill weeds competing with crops for resources', 'Reduce plant biodiversity; run-off into waterways'],
          ['Selective breeding', 'Breed high-yield, disease-resistant crop/livestock varieties', 'Reduced genetic diversity; inbreeding'],
          ['Monoculture', 'Growing one crop species over large areas for efficiency', 'Loss of habitat/biodiversity; disease spreads easily'],
          ['Intensive farming', 'Factory farming of animals (battery hens, fish farms) for maximum output', 'Animal welfare concerns; pollution from waste']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Eutrophication — Fertiliser Run-off', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Eutrophication Process',
        text: '1. <strong>Fertilisers</strong> (nitrates/phosphates) wash off fields into rivers/lakes.<br/>2. Algae feed on extra nutrients → rapid growth (<strong>algal bloom</strong>).<br/>3. Algae block sunlight → plants below die.<br/>4. Decomposers (bacteria) break down dead plants → <strong>bacteria multiply rapidly</strong>.<br/>5. Bacteria use up <strong>dissolved oxygen</strong> by aerobic respiration.<br/>6. Oxygen levels fall → <strong>fish and other aquatic organisms die</strong>.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Biological Pest Control', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Biological Pest Control',
        text: 'Using a natural predator, parasite, or pathogen to reduce pest population. Examples:<br/>• Ladybirds eat aphids (greenfly).<br/>• Myxomatosis virus to control rabbits.<br/>• Parasitic wasps that lay eggs in caterpillars.<br/><br/><strong>Advantages:</strong> No chemical pollution; self-sustaining; target-specific.<br/><strong>Disadvantages:</strong> Slower acting; control agent may become a pest itself.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Food production is increased through fertilisers, pesticides, selective breeding, and intensive farming. These methods cause environmental problems including eutrophication, biodiversity loss, and pollution. Biological pest control is a sustainable alternative to pesticides.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Food production methods: fertilisers, pesticides, selective breeding, monoculture, intensive farming. Key problem: eutrophication from fertiliser run-off depletes oxygen in waterways.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Describe the process of eutrophication.', answer: 'Fertiliser nitrates run into water → algal bloom → algae block light → aquatic plants die → decomposers multiply → oxygen used up → fish and other organisms die from lack of oxygen.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'Give one advantage and one disadvantage of biological pest control.', answer: 'Advantage: no chemical pollution; target-specific. Disadvantage: slower acting; the control organism may itself become a pest.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What is monoculture and what are its disadvantages?', answer: 'Monoculture is growing one crop species over large areas. Disadvantages: loss of biodiversity and habitat; disease can spread rapidly through genetically uniform crop.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_20_20_0;
