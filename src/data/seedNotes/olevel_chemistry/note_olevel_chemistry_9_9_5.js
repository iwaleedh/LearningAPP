export const note_olevel_chemistry_9_9_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-3-rusting-of-iron.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe rusting as requiring both water and oxygen, and explain experiments that demonstrate this.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Rusting of Iron', level: 2 }
    },
    {
      id: 'call-rust',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Conditions for Rusting',
        text: 'Rusting is the corrosion of iron/steel to form <strong>hydrated iron(III) oxide</strong> (Fe₂O₃·xH₂O).<br/><br/>Both conditions are <strong>essential</strong>:<br/>• Water (H₂O)<br/>• Oxygen (O₂)<br/><br/>In the absence of <strong>either</strong> condition, rusting does not occur.<br/><br/>Overall word equation:<br/>iron + oxygen + water → hydrated iron(III) oxide (rust)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Experiment to Show Both O₂ and H₂O Are Needed', level: 2 }
    },
    {
      id: 'call-exp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Three-tube experiment',
        text: '<strong>Tube A:</strong> Air + water (normal tap water and iron nail)<br/>Result: nail rusts ✓<br/><br/><strong>Tube B:</strong> Air only (nail in tube sealed with anhydrous calcium chloride to absorb moisture; also boil water and seal with oil)<br/>Result: nail does NOT rust ✗<br/><br/><strong>Tube C:</strong> Water only, no air (nail in boiled water; tube sealed with oil layer on surface to exclude O₂)<br/>Result: nail does NOT rust ✗<br/><br/>Conclusion: Both O₂ AND H₂O are needed for rusting.'
      }
    },
    {
      id: 'call-ferroxyl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ferroxyl Indicator Test',
        text: 'Ferroxyl indicator detects:<br/>• <strong>Fe²⁺ ions</strong> → turns <strong>blue</strong> (forms Prussian blue / turnbull\'s blue complex)<br/>• <strong>OH⁻ ions</strong> → turns <strong>pink/violet</strong><br/><br/>In the rusting process, Fe²⁺ forms first at the anode (iron loses electrons) and OH⁻ forms at the cathode (O₂ + H₂O gains electrons). These observations confirm the electrochemical nature of rusting.'
      }
    },
    {
      id: 'call-rate',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Factors that speed up rusting',
        text: '• <strong>Salt water</strong> speeds rusting — salt acts as an electrolyte, improving conductivity between anode and cathode regions on the iron surface.<br/>• <strong>Acid</strong> speeds rusting.<br/>• <strong>Contact with a less reactive metal</strong> (e.g. tin) speeds rusting if the coating is broken (tin only protects as a barrier; iron underneath rusts faster via galvanic corrosion).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Rusting requires both water AND oxygen — remove either and rusting stops. Rust is hydrated iron(III) oxide (Fe₂O₃·xH₂O). Ferroxyl indicator turns blue with Fe²⁺ and pink with OH⁻. Salt water accelerates rusting by acting as an electrolyte.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Rusting needs both O₂ and H₂O together. Remove either → no rusting. Ferroxyl indicator: Fe²⁺ → blue, OH⁻ → pink.',
    cues: [
      { id: 'cue-1', blockId: 'call-rust', prompt: 'State the two conditions necessary for iron to rust.', answer: 'Both water (H₂O) and oxygen (O₂) must be present together for iron to rust.' },
      { id: 'cue-2', blockId: 'call-exp', prompt: 'Describe how the three-tube experiment shows that both O₂ and H₂O are needed for rusting.', answer: 'Tube A (air + water) rusts. Tube B (air only — water removed) does not rust. Tube C (water only — O₂ excluded with oil) does not rust. Only when both are present does rusting occur.' },
      { id: 'cue-3', blockId: 'call-ferroxyl', prompt: 'What colour does ferroxyl indicator turn with Fe²⁺ ions, and why is this significant?', answer: 'Fe²⁺ turns ferroxyl indicator blue. This shows where iron is losing electrons (the anode region), confirming the electrochemical nature of rusting.' }
    ]
  },
  evidence: [],
  mentions: []
};
