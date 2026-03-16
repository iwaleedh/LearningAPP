export const note_olevel_chemistry_4_4_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-2-2-hydrogen-fuel-cells.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the operation of a hydrogen-oxygen fuel cell and evaluate its advantages and disadvantages.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Hydrogen Fuel Cell', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is a Fuel Cell?',
        text: 'A <strong>hydrogen fuel cell</strong> converts chemical energy from a reaction between hydrogen and oxygen into electrical energy continuously, as long as fuel is supplied.<br/><br/>Overall reaction: 2H₂ + O₂ → 2H₂O<br/><br/>Unlike a battery, a fuel cell does not "run flat" — it produces electricity as long as H₂ and O₂ are supplied.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'How the Fuel Cell Works', level: 2 }
    },
    {
      id: 'call-process',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Operation of an H₂-O₂ Fuel Cell',
        text: '<strong>Anode (−):</strong> hydrogen gas is fed in<br/>H₂ → 2H⁺ + 2e⁻ (oxidation)<br/><br/><strong>Cathode (+):</strong> oxygen gas is fed in<br/>O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction)<br/><br/><strong>Electrolyte:</strong> a proton-exchange membrane (PEM) — allows H⁺ ions to pass through<br/><br/>Electrons flow through the external circuit (from anode to cathode), producing electricity.<br/><br/>Only product: <strong>water (H₂O)</strong>'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Advantages and disadvantages of hydrogen fuel cells',
        headers: ['Advantages', 'Disadvantages'],
        rows: [
          ['Only product is water — no CO₂ or pollutants', 'Hydrogen is flammable and explosive — storage is difficult'],
          ['Quiet, efficient — no moving parts', 'Hydrogen is currently produced mainly from fossil fuels (not truly "green")'],
          ['Continuous electricity as long as H₂ supplied', 'Technology is expensive'],
          ['High energy efficiency (>60%)', 'Requires pure hydrogen — impurities damage the cell'],
          ['Lighter than batteries for same energy output', 'Infrastructure for H₂ distribution is not yet widespread']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The key advantage of a hydrogen fuel cell is that the only product is water — making it a clean energy source at point of use. However, the production of hydrogen still requires energy (often from fossil fuels). Examiners may ask you to evaluate both sides — always include environmental AND practical aspects.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hydrogen fuel cell: H₂ + O₂ → H₂O, producing electricity. Anode: H₂ oxidised; Cathode: O₂ reduced to water. Advantages: clean product (water), efficient. Disadvantages: H₂ storage, production cost, flammability.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Fuel cell: 2H₂ + O₂ → 2H₂O + electricity. Clean product only water. H₂ storage and production are challenges.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What is the overall reaction in a hydrogen fuel cell?', answer: '2H₂ + O₂ → 2H₂O. Chemical energy converted to electrical energy; only product is water.' },
      { id: 'cue-2', blockId: 'call-process', prompt: 'What happens at the anode and cathode of a hydrogen fuel cell?', answer: 'Anode: H₂ → 2H⁺ + 2e⁻ (oxidation). Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction).' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'Give one advantage and one disadvantage of hydrogen fuel cells.', answer: 'Advantage: only product is water — no pollutants/CO₂. Disadvantage: hydrogen is flammable and difficult to store safely (or: H₂ production still uses fossil fuels).' }
    ]
  },
  evidence: [],
  mentions: []
};
