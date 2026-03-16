export const note_olevel_chemistry_7_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-1-properties-of-acids-and-bases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and compare the properties of acids and bases, and use indicators and pH to classify solutions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The pH Scale and Indicators', level: 2 }
    },
    {
      id: 'call-ph',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The pH Scale',
        text: 'pH is a measure of the acidity or alkalinity of a solution (scale 0–14).<br/><br/>• pH 0–6: <strong>acidic</strong> (lower = more acidic)<br/>• pH 7: <strong>neutral</strong><br/>• pH 8–14: <strong>alkaline</strong> (higher = more alkaline)<br/><br/>Measured with: universal indicator (produces a range of colours), pH meter, or litmus.'
      }
    },
    {
      id: 'tbl-indicators',
      type: 'comparisonTable',
      data: {
        caption: 'Indicators and their colours',
        headers: ['Indicator', 'Colour in Acid', 'Colour in Neutral', 'Colour in Alkali'],
        rows: [
          ['Litmus', 'Red', 'Purple', 'Blue'],
          ['Phenolphthalein', 'Colourless', 'Colourless', 'Pink'],
          ['Methyl orange', 'Red', 'Orange', 'Yellow'],
          ['Universal indicator', 'Red/orange', 'Green', 'Blue/violet']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Properties of Acids', level: 2 }
    },
    {
      id: 'call-acids',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Acids',
        text: '• Turn litmus <strong>red</strong>; pH &lt; 7<br/>• React with reactive metals → salt + hydrogen: Mg + 2HCl → MgCl₂ + H₂<br/>• React with metal oxides or hydroxides (bases) → salt + water (neutralisation)<br/>• React with metal carbonates → salt + water + CO₂: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂<br/>• Common acids: HCl (hydrochloric), H₂SO₄ (sulfuric), HNO₃ (nitric), CH₃COOH (ethanoic), H₂CO₃ (carbonic)'
      }
    },
    {
      id: 'h-2b',
      type: 'heading',
      data: { text: 'Properties of Bases and Alkalis', level: 2 }
    },
    {
      id: 'call-bases',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Bases and Alkalis',
        text: 'A <strong>base</strong> is a substance that neutralises an acid → produces salt + water.<br/>An <strong>alkali</strong> is a <strong>soluble base</strong> — dissolves in water to give OH⁻ ions.<br/><br/>• Turn litmus <strong>blue</strong>; pH &gt; 7<br/>• React with acids → salt + water (neutralisation)<br/>• Common bases: NaOH, Ca(OH)₂, NH₃(aq), MgO, CuO<br/>• Common alkalis: NaOH (sodium hydroxide), KOH, Ca(OH)₂ (limewater), NH₃(aq) (ammonia solution)<br/><br/>Not all bases are alkalis (e.g. CuO is a base but it is insoluble so it is not an alkali).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'pH < 7 = acid; pH 7 = neutral; pH > 7 = alkaline. Acids react with metals/bases/carbonates. Bases neutralise acids. Alkali = soluble base (gives OH⁻ in water). Litmus is the key indicator: red in acid, blue in alkali.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'pH: <7 acid, 7 neutral, >7 alkali. Acids react with metals/carbonates/bases. Alkali = soluble base. Lit-mus: RED acid, BLUE alkali.',
    cues: [
      { id: 'cue-1', blockId: 'call-ph', prompt: 'What colour does universal indicator turn in a solution with pH 3, pH 7, and pH 12?', answer: 'pH 3: red/orange (acid); pH 7: green (neutral); pH 12: blue/violet (alkaline).' },
      { id: 'cue-2', blockId: 'call-acids', prompt: 'Write a word equation for the reaction of calcium carbonate with hydrochloric acid.', answer: 'Calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide.' },
      { id: 'cue-3', blockId: 'call-bases', prompt: 'State the difference between a base and an alkali.', answer: 'A base is any substance that neutralises an acid to form salt and water. An alkali is a soluble base — one that dissolves in water to produce hydroxide ions (OH⁻).' }
    ]
  },
  evidence: [],
  mentions: []
};
