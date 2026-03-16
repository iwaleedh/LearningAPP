export const note_olevel_chemistry_12_12_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/12 Experimental Techniques And Chemical Analysis/12-3-1-identification-of-anions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe chemical tests to identify carbonate, sulfate, halide and nitrate anions, and state the observations for each positive result.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Test for Carbonate Ion (CO₃²⁻)', level: 2 }
    },
    {
      id: 'call-carb',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Carbonate Test',
        text: '<strong>Reagent:</strong> Add dilute hydrochloric acid (or any dilute acid)<br/><strong>Observation:</strong> Effervescence (fizzing); colourless gas produced<br/><strong>Confirm gas:</strong> Pass gas into limewater (Ca(OH)₂ solution) → limewater turns milky/cloudy (CO₂ forms CaCO₃ precipitate)<br/><br/>CO₃²⁻ + 2H⁺ → CO₂ + H₂O<br/>CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Test for Sulfate Ion (SO₄²⁻)', level: 2 }
    },
    {
      id: 'call-sulf',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sulfate Test',
        text: '<strong>Reagent:</strong> Add dilute hydrochloric acid (to acidify), then add barium chloride solution (BaCl₂)<br/><strong>Observation:</strong> White precipitate of barium sulfate (BaSO₄) forms immediately<br/><strong>Confirm:</strong> White precipitate is <strong>insoluble in dilute HCl</strong> (this rules out sulfite and carbonate)<br/><br/>Ba²⁺ + SO₄²⁻ → BaSO₄↓ (white, insoluble in acid)<br/><br/><em>Why acidify first?</em> The HCl removes CO₃²⁻ and SO₃²⁻ ions which would also give white precipitates with Ba²⁺.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Tests for Halide Ions (Cl⁻, Br⁻, I⁻)', level: 2 }
    },
    {
      id: 'call-halide',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Halide Tests (Using Silver Nitrate)',
        text: '<strong>Reagent:</strong> Add dilute nitric acid (to acidify), then add silver nitrate solution (AgNO₃)<br/><br/>• <strong>Cl⁻:</strong> White precipitate (AgCl) — dissolves in dilute ammonia (NH₃)<br/>• <strong>Br⁻:</strong> Cream/pale yellow precipitate (AgBr) — partially dissolves in dilute ammonia; fully dissolves in concentrated ammonia<br/>• <strong>I⁻:</strong> Yellow precipitate (AgI) — insoluble in both dilute and concentrated ammonia<br/><br/><em>Why acidify with HNO₃?</em> Removes CO₃²⁻ and SO₄²⁻ that would react with Ag⁺ to give misleading precipitates.'
      }
    },
    {
      id: 'tbl-halides',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of halide precipitate tests',
        headers: ['Halide ion', 'Precipitate colour', 'Formula', 'Solubility in dilute NH₃', 'Solubility in conc NH₃'],
        rows: [
          ['Cl⁻ (chloride)', 'White', 'AgCl', 'Soluble (dissolves)', 'Soluble'],
          ['Br⁻ (bromide)', 'Cream', 'AgBr', 'Partially soluble', 'Soluble'],
          ['I⁻ (iodide)', 'Yellow', 'AgI', 'Insoluble', 'Insoluble']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Test for Nitrate Ion (NO₃⁻)', level: 2 }
    },
    {
      id: 'call-nitrate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Nitrate Test (Brown Ring / Aluminium Reduction)',
        text: '<strong>Reagent:</strong> Add aluminium powder (or Devarda\'s alloy) and sodium hydroxide solution; warm gently<br/><strong>Observation:</strong> NH₃ gas is produced (the NO₃⁻ is reduced to NH₄⁺, then NH₃ in alkali)<br/><strong>Confirm NH₃:</strong> Damp red litmus paper turns blue; white fumes form with HCl<br/><br/>NO₃⁻ + 8[H] → NH₃ + 3H₂O (reduction by aluminium in alkali)<br/><br/><em>Note:</em> NH₄⁺ already present would also give NH₃ on warming with NaOH — test for NH₄⁺ first separately.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'CO₃²⁻: dilute acid → CO₂ (limewater milky). SO₄²⁻: dilute HCl + BaCl₂ → white ppt (BaSO₄, insoluble in acid). Halides: dilute HNO₃ + AgNO₃ → Cl⁻ (white/dissolves in NH₃), Br⁻ (cream/partial), I⁻ (yellow/insoluble). NO₃⁻: Al + NaOH → NH₃ (red litmus → blue).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'CO₃²⁻: add acid → CO₂ (limewater milky). SO₄²⁻: BaCl₂ → white ppt insoluble in HCl. Halides: AgNO₃ → white(Cl), cream(Br), yellow(I). NO₃⁻: Al+NaOH → NH₃.',
    cues: [
      { id: 'cue-1', blockId: 'call-sulf', prompt: 'How would you test for sulfate ions? Why must you acidify the solution first?', answer: 'Add dilute HCl then BaCl₂ solution — white precipitate (BaSO₄) insoluble in HCl confirms SO₄²⁻. Acidify first to remove CO₃²⁻ and SO₃²⁻ ions which would also give white precipitates with Ba²⁺.' },
      { id: 'cue-2', blockId: 'tbl-halides', prompt: 'State the colour of the precipitate formed when testing for iodide ions with acidified silver nitrate, and describe its solubility in ammonia.', answer: 'AgI gives a yellow precipitate. It is insoluble in both dilute and concentrated ammonia solution.' },
      { id: 'cue-3', blockId: 'call-halide', prompt: 'Why is the halide solution acidified with dilute nitric acid (not hydrochloric acid) before adding silver nitrate?', answer: 'Dilute HNO₃ is used to acidify because Cl⁻ in HCl would itself react with Ag⁺ to give a white precipitate, giving a false positive result for chloride.' }
    ]
  },
  evidence: [],
  mentions: []
};
