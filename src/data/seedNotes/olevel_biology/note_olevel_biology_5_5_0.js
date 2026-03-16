export const note_olevel_biology_5_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/5 Enzymes/5-1-1-enzyme-structure-and-function.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Define enzymes as biological catalysts, describe the lock-and-key model of enzyme action, explain enzyme specificity, and describe what denaturation means and when it occurs.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What are Enzymes?', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Definition: Enzyme',
        text: 'An <strong>enzyme</strong> is a <strong>biological catalyst</strong> — a protein that <strong>speeds up the rate of a chemical reaction</strong> without being used up or permanently changed in the reaction.<br/><br/>Key properties:<br/>• Made of <strong>protein</strong> (a polypeptide chain folded into a specific 3D shape)<br/>• <strong>Not consumed</strong> in the reaction — can be reused<br/>• Each enzyme is <strong>specific</strong> to one substrate (or type of substrate)<br/>• Function best at a specific <strong>optimum temperature</strong> and <strong>optimum pH</strong>'
      }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: 'Enzymes lower the <strong>activation energy</strong> of a reaction — the minimum energy needed for a reaction to occur. By lowering activation energy, enzymes allow reactions to proceed much faster and at lower temperatures than they would otherwise. Enzymes are essential for almost all metabolic reactions in living organisms, from digestion to respiration to DNA replication.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Active Site', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Term: Active Site',
        text: 'The <strong>active site</strong> is a specifically shaped region on the enzyme where the substrate binds. The shape of the active site is determined by the enzyme\'s protein structure and is <strong>complementary</strong> to the shape of the substrate.<br/><br/>Only one specific substrate (or type of substrate) fits into the active site — this is why enzymes are <strong>specific</strong>.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'The Lock-and-Key Model', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'The <strong>lock-and-key model</strong> explains enzyme specificity. The enzyme is the "lock" and the substrate is the "key". Just as only one key fits a specific lock, only one substrate fits the active site of a specific enzyme. The substrate binds to the active site to form an <strong>enzyme-substrate complex</strong>. The reaction takes place, products are released, and the enzyme is free to be used again.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'The lock-and-key model of enzyme action — substrate binds to the active site, products are released',
        svg: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="11">
  <rect width="520" height="260" fill="#fdf4ff" rx="12"/>
  <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#4c1d95">Lock-and-Key Model of Enzyme Action</text>

  <!-- Step 1: Enzyme + Substrate approaching -->
  <text x="90" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Step 1: Approach</text>
  <!-- Enzyme (lock) -->
  <path d="M 30,65 Q 30,55 40,55 L 140,55 Q 150,55 150,65 L 150,155 Q 150,165 140,165 L 40,165 Q 30,165 30,155 Z" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 65,110 Q 65,90 90,90 Q 115,90 115,110 Q 115,130 90,130 Q 65,130 65,110 Z" fill="#f0fdf4" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="90" y="183" text-anchor="middle" font-size="10" fill="#4c1d95" font-weight="bold">Enzyme</text>
  <text x="90" y="195" text-anchor="middle" font-size="9" fill="#374151">(lock)</text>
  <!-- Label active site -->
  <text x="90" y="114" text-anchor="middle" font-size="8" fill="#374151">Active</text>
  <text x="90" y="124" text-anchor="middle" font-size="8" fill="#374151">site</text>
  <!-- Substrate -->
  <ellipse cx="90" cy="55" rx="22" ry="22" fill="#86efac" stroke="#16a34a" stroke-width="2" transform="translate(100,0)"/>
  <text x="190" y="55" text-anchor="middle" font-size="9" fill="#15803d" dy="4">Substrate</text>
  <text x="190" y="68" text-anchor="middle" font-size="9" fill="#374151">(key)</text>
  <!-- Arrow -->
  <text x="90" y="45" text-anchor="middle" font-size="16" fill="#7c3aed" dy="1">↓</text>

  <!-- Step 2: Enzyme-substrate complex -->
  <text x="270" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Step 2: Complex forms</text>
  <path d="M 210,65 Q 210,55 220,55 L 320,55 Q 330,55 330,65 L 330,155 Q 330,165 320,165 L 220,165 Q 210,165 210,155 Z" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
  <!-- Substrate fills active site -->
  <ellipse cx="270" cy="110" rx="28" ry="26" fill="#86efac" stroke="#16a34a" stroke-width="2"/>
  <text x="270" y="107" text-anchor="middle" font-size="8" fill="#15803d">Enzyme-</text>
  <text x="270" y="118" text-anchor="middle" font-size="8" fill="#15803d">substrate</text>
  <text x="270" y="129" text-anchor="middle" font-size="8" fill="#15803d">complex</text>
  <text x="270" y="183" text-anchor="middle" font-size="10" fill="#4c1d95" font-weight="bold">E-S Complex</text>
  <text x="270" y="195" text-anchor="middle" font-size="9" fill="#374151">Reaction occurs</text>

  <!-- Step 3: Products released -->
  <text x="445" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#374151">Step 3: Products released</text>
  <path d="M 385,65 Q 385,55 395,55 L 495,55 Q 505,55 505,65 L 505,155 Q 505,165 495,165 L 395,165 Q 385,165 385,155 Z" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
  <path d="M 415,110 Q 415,90 440,90 Q 465,90 465,110 Q 465,130 440,130 Q 415,130 415,110 Z" fill="#f0fdf4" stroke="#7c3aed" stroke-width="1.5"/>
  <!-- Two products -->
  <ellipse cx="430" cy="55" rx="14" ry="14" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="430" y="59" text-anchor="middle" font-size="8" fill="#92400e">P1</text>
  <ellipse cx="460" cy="55" rx="14" ry="14" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="460" y="59" text-anchor="middle" font-size="8" fill="#92400e">P2</text>
  <text x="445" y="183" text-anchor="middle" font-size="10" fill="#4c1d95" font-weight="bold">Enzyme free</text>
  <text x="445" y="195" text-anchor="middle" font-size="9" fill="#374151">Products released</text>
  <text x="445" y="207" text-anchor="middle" font-size="9" fill="#374151">Enzyme reused</text>

  <!-- Arrows between steps -->
  <text x="180" y="115" text-anchor="middle" font-size="18" fill="#7c3aed">→</text>
  <text x="355" y="115" text-anchor="middle" font-size="18" fill="#7c3aed">→</text>

  <!-- Bottom label -->
  <text x="260" y="235" text-anchor="middle" font-size="10" fill="#374151">The enzyme is <tspan font-weight="bold">not consumed</tspan> — its active site is unchanged and can bind more substrate.</text>
</svg>`
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Enzyme Specificity', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Each enzyme is <strong>specific</strong> to one substrate because only the correct substrate has a complementary shape that fits the enzyme\'s active site. For example, <strong>amylase</strong> only catalyses the breakdown of starch (not proteins or lipids), and <strong>protease</strong> only breaks peptide bonds in proteins. This specificity arises from the unique three-dimensional shape of the active site, which is determined by the protein\'s amino acid sequence.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Examples of digestive enzymes, their substrates, and products',
        headers: ['Enzyme', 'Substrate', 'Products', 'Site of production'],
        rows: [
          ['Amylase', 'Starch', 'Maltose (a sugar)', 'Salivary glands, pancreas'],
          ['Protease (e.g. pepsin)', 'Proteins', 'Amino acids', 'Stomach (pepsin), pancreas'],
          ['Lipase', 'Lipids (fats)', 'Fatty acids + glycerol', 'Pancreas, small intestine'],
          ['Maltase', 'Maltose', 'Glucose', 'Small intestine wall']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Denaturation', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Term: Denaturation',
        text: '<strong>Denaturation</strong> is the permanent change in the shape (tertiary structure) of an enzyme\'s active site, caused by high temperature or extreme pH.<br/><br/>When an enzyme is denatured:<br/>• The active site changes shape<br/>• The substrate can no longer fit into the active site<br/>• The enzyme <strong>can no longer catalyse</strong> the reaction<br/>• This change is <strong>irreversible</strong> (unlike inactivation at low temperatures)'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not say the enzyme is "killed" or "destroyed" when denatured. The correct statement is that the enzyme\'s <strong>active site changes shape</strong> (becomes denatured) so the substrate can no longer bind. Also, at <strong>low temperatures</strong> enzymes are not denatured — they are just <strong>inactivated</strong> (slowed down). Warming them up restores activity. Denaturation requires <strong>high temperature</strong> or <strong>extreme pH</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Enzymes are biological catalysts made of protein that speed up metabolic reactions without being consumed. The active site has a specific shape complementary to the substrate — explained by the lock-and-key model. The enzyme-substrate complex forms, products are released, and the enzyme is reused. Each enzyme is specific to one substrate. At high temperatures or extreme pH the active site changes shape permanently (denaturation) and the enzyme no longer functions.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Enzymes: biological protein catalysts. Active site is specific to one substrate (lock-and-key model). Denaturation = irreversible change in active site shape from heat or extreme pH.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'Define the term enzyme.',
        answer: 'An enzyme is a biological catalyst — a protein that speeds up the rate of a chemical reaction without being used up or permanently changed in the reaction.'
      },
      {
        id: 'cue-2',
        blockId: 'call-2',
        prompt: 'What is the active site of an enzyme?',
        answer: 'The active site is a specifically shaped region on the enzyme where the substrate binds. Its shape is complementary to the substrate, which is why each enzyme is specific to one substrate.'
      },
      {
        id: 'cue-3',
        blockId: 'para-2',
        prompt: 'Describe the lock-and-key model of enzyme action.',
        answer: 'The enzyme (lock) has an active site with a specific shape. The substrate (key) has a complementary shape and binds to the active site to form an enzyme-substrate complex. The reaction takes place, products are released, and the enzyme is free to catalyse another reaction.'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'What is denaturation and what causes it?',
        answer: 'Denaturation is the irreversible change in the shape of an enzyme\'s active site, caused by high temperature or extreme pH. The substrate can no longer fit the active site, so the enzyme cannot catalyse the reaction.'
      },
      {
        id: 'cue-5',
        blockId: 'tbl-1',
        prompt: 'Name the enzyme that digests starch and state its product.',
        answer: 'Amylase digests starch. The product is maltose (a disaccharide sugar). Amylase is produced in the salivary glands and pancreas.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_5_5_0;
