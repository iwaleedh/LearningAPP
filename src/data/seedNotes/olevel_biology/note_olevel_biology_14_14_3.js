export const note_olevel_biology_14_14_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/14 Coordination And Response/14-1-4-hormones-endocrine-system.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define hormone and endocrine gland; name key glands and their hormones; compare nervous and hormonal coordination; describe the role of adrenaline, insulin, glucagon, and sex hormones.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is a Hormone?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'A <strong>hormone</strong> is a <strong>chemical messenger</strong> produced by an <strong>endocrine gland</strong> and secreted directly into the <strong>bloodstream</strong>. Hormones are transported in the blood to <strong>target organs</strong>, where they produce a specific effect. Because they travel in the blood, hormonal responses are generally <strong>slower</strong> but <strong>longer lasting</strong> than nervous responses.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition — Hormone',
        text: 'A hormone is a chemical substance produced by an <strong>endocrine (ductless) gland</strong>, secreted <strong>directly into the blood</strong>, and carried to a <strong>target organ</strong> where it produces a specific response.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Key Endocrine Glands and Hormones', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Major endocrine glands, their hormones, and effects',
        headers: ['Gland', 'Hormone(s)', 'Target / Effect'],
        rows: [
          ['Pituitary gland (brain)', 'ADH, FSH, LH, growth hormone', 'Master gland — controls many other glands; ADH acts on kidneys; FSH/LH control reproductive system'],
          ['Thyroid gland (neck)', 'Thyroxine', 'Regulates metabolic rate (how fast cells use energy); controls growth and development'],
          ['Adrenal glands (above kidneys)', 'Adrenaline', 'Prepares body for \'fight or flight\': increases heart rate, breathing rate, blood glucose; diverts blood to muscles'],
          ['Pancreas (abdomen)', 'Insulin (beta cells)', 'Lowers blood glucose — stimulates liver/muscle cells to take up glucose and convert to glycogen'],
          ['Pancreas (abdomen)', 'Glucagon (alpha cells)', 'Raises blood glucose — stimulates liver to convert glycogen back to glucose (glycogenolysis)'],
          ['Ovaries (females)', 'Oestrogen', 'Develops female secondary sexual characteristics; controls menstrual cycle (with FSH and LH)'],
          ['Testes (males)', 'Testosterone', 'Develops male secondary sexual characteristics; stimulates sperm production']
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Location of key endocrine glands in the human body',
        svg: `<svg viewBox="0 0 380 520" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Body outline (simplified) -->
  <!-- Head -->
  <ellipse cx="190" cy="55" rx="45" ry="50" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <!-- Neck -->
  <rect x="175" y="100" width="30" height="30" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <!-- Torso -->
  <rect x="130" y="128" width="120" height="180" rx="20" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <!-- Arms -->
  <rect x="80" y="130" width="50" height="130" rx="15" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <rect x="250" y="130" width="50" height="130" rx="15" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <!-- Legs -->
  <rect x="140" y="305" width="40" height="160" rx="15" fill="#532407" stroke="#c0902a" stroke-width="2"/>
  <rect x="200" y="305" width="40" height="160" rx="15" fill="#532407" stroke="#c0902a" stroke-width="2"/>

  <!-- Pituitary (brain, small) -->
  <circle cx="190" cy="65" r="9" fill="#7c3aed" stroke="#5b21b6" stroke-width="2"/>
  <text x="235" y="55" fill="#7c3aed" font-size="10" font-weight="bold">Pituitary</text>
  <line x1="230" y1="57" x2="200" y2="65" stroke="#7c3aed" stroke-width="1"/>

  <!-- Thyroid -->
  <ellipse cx="190" cy="118" rx="18" ry="9" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
  <text x="220" y="100" fill="#15803d" font-size="10" font-weight="bold">Thyroid</text>
  <line x1="218" y1="102" x2="207" y2="112" stroke="#15803d" stroke-width="1"/>

  <!-- Adrenal glands (above kidneys) -->
  <ellipse cx="155" cy="220" rx="12" ry="8" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
  <ellipse cx="225" cy="220" rx="12" ry="8" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
  <text x="60" y="208" fill="#dc2626" font-size="10" font-weight="bold">Adrenal</text>
  <text x="65" y="219" fill="#dc2626" font-size="10">glands</text>
  <line x1="100" y1="215" x2="143" y2="218" stroke="#dc2626" stroke-width="1"/>

  <!-- Pancreas -->
  <rect x="155" y="240" width="50" height="15" rx="6" fill="#78350f" stroke="#d97706" stroke-width="2"/>
  <text x="215" y="255" fill="#d97706" font-size="10" font-weight="bold">Pancreas</text>
  <line x1="212" y1="253" x2="205" y2="250" stroke="#d97706" stroke-width="1"/>

  <!-- Ovaries (female) -->
  <ellipse cx="165" cy="290" rx="11" ry="8" fill="#ec4899" stroke="#be185d" stroke-width="2"/>
  <ellipse cx="215" cy="290" rx="11" ry="8" fill="#ec4899" stroke="#be185d" stroke-width="2"/>
  <text x="60" y="290" fill="#be185d" font-size="10" font-weight="bold">Ovaries</text>
  <text x="65" y="301" fill="#be185d" font-size="9">(female)</text>
  <line x1="100" y1="291" x2="154" y2="290" stroke="#be185d" stroke-width="1"/>

  <!-- Testes (male) -->
  <ellipse cx="170" cy="360" rx="11" ry="10" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
  <ellipse cx="210" cy="360" rx="11" ry="10" fill="#1d4ed8" stroke="#1e40af" stroke-width="2"/>
  <text x="240" y="365" fill="#1e40af" font-size="10" font-weight="bold">Testes</text>
  <text x="245" y="376" fill="#1e40af" font-size="9">(male)</text>
  <line x1="243" y1="367" x2="221" y2="362" stroke="#1e40af" stroke-width="1"/>
</svg>`
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Nervous vs Hormonal Coordination', level: 2 }
    },
    {
      id: 'tbl-2',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of nervous and hormonal coordination',
        headers: ['Feature', 'Nervous System', 'Hormonal System'],
        rows: [
          ['Speed of response', 'Very fast (up to 100 m/s)', 'Slower (hormone travels in blood)'],
          ['Duration of effect', 'Short-lived (seconds)', 'Long-lasting (minutes to hours/days)'],
          ['Transmission medium', 'Nerve impulses (electrical)', 'Hormones in blood (chemical)'],
          ['Specificity', 'Localised — specific nerves to specific cells', 'Widespread — can affect many target organs'],
          ['Nature of response', 'Very precise and rapid', 'Broader, more sustained response']
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Adrenaline — Fight or Flight Response',
        text: '<strong>Produced by:</strong> adrenal glands (above kidneys)<br/><strong>Stimulus:</strong> stress, fear, excitement<br/><strong>Effects:</strong><br/>• Increases <strong>heart rate</strong> → more blood to muscles<br/>• Increases <strong>breathing rate</strong> → more oxygen<br/>• Raises <strong>blood glucose</strong> → more energy available<br/>• Dilates <strong>pupils</strong> → better vision<br/>• Diverts blood <strong>away</strong> from digestive system <strong>to</strong> muscles<br/>• Causes <strong>body hair to stand on end</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hormones are chemical messengers from endocrine glands, transported in blood to target organs. Key hormones: adrenaline (fight or flight), insulin/glucagon (blood glucose), thyroxine (metabolic rate), oestrogen/testosterone (sex characteristics). Hormonal responses are slower but longer lasting than nervous responses.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Hormones: chemical messengers in blood from endocrine glands. Slower/longer than nervous. Key: insulin, glucagon, adrenaline, thyroxine, sex hormones.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Define the term \'hormone\'.', answer: 'A hormone is a chemical substance produced by an endocrine gland, secreted directly into the blood, and carried to a target organ where it produces a specific effect.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Name the gland that produces adrenaline and state one effect of adrenaline.', answer: 'Adrenal glands. Effects include: increased heart rate, increased breathing rate, raised blood glucose, dilated pupils (any one).' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'What are the roles of insulin and glucagon?', answer: 'Insulin (from pancreas beta cells) lowers blood glucose — promotes uptake of glucose and glycogen storage. Glucagon (from alpha cells) raises blood glucose — promotes breakdown of glycogen to glucose.' },
      { id: 'cue-4', blockId: 'tbl-2', prompt: 'Give two differences between nervous and hormonal coordination.', answer: 'Nervous responses are faster; hormonal responses are slower. Nervous effects are short-lived; hormonal effects are longer lasting. Nervous impulses travel along nerves; hormones travel in the blood (any two).' },
      { id: 'cue-5', blockId: 'tbl-1', prompt: 'What hormone does the thyroid gland produce and what does it control?', answer: 'Thyroxine — it regulates metabolic rate (how fast cells use energy) and controls growth and development.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_14_14_3;
