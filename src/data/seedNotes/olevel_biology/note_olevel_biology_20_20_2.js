export const note_olevel_biology_20_20_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/20 Human Influences On Ecosystems/20-3-1-pollution.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the sources and effects of different types of pollution on ecosystems and human health.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Types of Pollution and Their Effects', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Types of pollution, sources, and environmental effects',
        headers: ['Pollution type', 'Source', 'Effect'],
        rows: [
          ['Water pollution — sewage', 'Untreated human/animal waste in waterways', 'Eutrophication → oxygen depletion → aquatic organisms die'],
          ['Water pollution — pesticides', 'Agricultural run-off containing pesticides', 'Bioaccumulation in food chains; kills non-target organisms'],
          ['Water pollution — oil spills', 'Oil tanker accidents; oil drilling', 'Coats feathers/fur of wildlife; kills marine organisms'],
          ['Air pollution — CO₂', 'Burning fossil fuels, deforestation', 'Enhanced greenhouse effect → global warming/climate change'],
          ['Air pollution — SO₂', 'Burning coal and oil in power stations', 'Dissolves in rain → acid rain → damages trees and aquatic life'],
          ['Air pollution — CFCs', 'Aerosols, old refrigerators', 'Destroys ozone layer → increased UV radiation reaching Earth'],
          ['Land pollution — plastics', 'Non-biodegradable plastic waste', 'Harms wildlife (ingestion, entanglement); persists for centuries']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Bioaccumulation', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bioaccumulation',
        text: '<strong>Bioaccumulation</strong> (also called biomagnification) is the increase in concentration of a toxic substance at each trophic level in a food chain.<br/><br/>Example: DDT (a pesticide) is absorbed in small amounts by plants → accumulated by herbivores eating many plants → further concentrated in carnivores → top predators (e.g. eagles) reach toxic concentrations → reproductive failure, death.<br/><br/><strong>Why it increases:</strong> The substance is not broken down; each organism must eat many organisms of the level below, accumulating more toxin each time.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Acid Rain', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'How Acid Rain Forms and Its Effects',
        text: '1. Fossil fuels burned in power stations release <strong>sulphur dioxide (SO₂)</strong> and nitrogen oxides (NOₓ).<br/>2. These gases dissolve in water vapour in clouds → form dilute <strong>sulphuric acid</strong> and nitric acid.<br/>3. Acid rain falls, <strong>lowering pH</strong> of lakes and rivers.<br/>4. Most aquatic organisms cannot survive below pH 5 → fish die.<br/>5. Acid damages tree leaves and roots → forests die.<br/>6. Acid dissolves minerals from soil → soil becomes infertile.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Know the chain: <strong>SO₂ → acid rain → low pH lakes → fish die</strong>. Also know: <strong>CO₂ → greenhouse effect → global warming</strong>. These are frequently examined cause-and-effect chains.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Pollution types: water (sewage/eutrophication, pesticides/bioaccumulation, oil spills), air (CO₂/greenhouse effect, SO₂/acid rain, CFCs/ozone depletion), land (non-biodegradable plastics). Bioaccumulation concentrates toxins up the food chain.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Pollution: water (eutrophication, bioaccumulation, oil spills), air (CO₂ greenhouse effect, SO₂ acid rain, CFCs ozone depletion), land (plastics). Bioaccumulation: toxin concentrations increase up food chain.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Explain bioaccumulation with an example.', answer: 'Bioaccumulation is the increase in concentration of a toxic substance at each trophic level. Example: DDT pesticide concentrates from plants to herbivores to carnivores, reaching harmful levels in top predators.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'How does SO₂ cause acid rain, and what are its effects?', answer: 'SO₂ from burning fossil fuels dissolves in water vapour to form sulphuric acid in clouds. Acid rain lowers pH of lakes (killing fish), damages trees, and makes soil infertile.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What effect do CFCs have on the environment?', answer: 'CFCs destroy the ozone layer in the upper atmosphere, allowing more UV radiation to reach Earth\'s surface, increasing the risk of skin cancer and damaging ecosystems.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_20_20_2;
