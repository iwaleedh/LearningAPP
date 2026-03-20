export const note_olevel_biology_17_17_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-2-inheritance-of-sex.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe how sex is determined in humans using sex chromosomes. Explain why males and females are produced in approximately equal numbers using a Punnett square.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Sex Chromosomes in Humans', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'Humans have 23 pairs of chromosomes. The 23rd pair are the <strong>sex chromosomes</strong>, which determine whether a person is biologically male or female. Unlike the other 22 pairs (autosomes), the sex chromosomes may differ in size and gene content.' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Sex Chromosome Combinations',
        text: '<strong>Female: XX</strong> — two X chromosomes (homogametic; all eggs carry one X).<br/><strong>Male: XY</strong> — one X and one Y chromosome (heterogametic; sperm carry either X or Y).<br/>The <strong>Y chromosome</strong> carries the SRY gene which triggers male development. Without it, the embryo develops as female.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Gamete Production and Sex Determination', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: 'During meiosis, sex chromosomes are separated into gametes. Since females are XX, <strong>every egg carries one X chromosome</strong>. Since males are XY, sperm can carry <strong>either X or Y</strong> — approximately 50% carry X and 50% carry Y. The sex of the offspring is determined by <strong>which sperm fertilises the egg</strong>.' }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Punnett square showing inheritance of sex in humans',
        svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13">
  <rect width="440" height="300" fill="#0f172a" rx="8"/>
  <!-- Title -->
  <text x="220" y="22" text-anchor="middle" fill="#333" font-size="13" font-weight="bold">Sex Determination — Punnett Square</text>
  <!-- Parents labels -->
  <text x="100" y="50" text-anchor="middle" fill="#555" font-size="12">Mother (XX)</text>
  <text x="330" y="50" text-anchor="middle" fill="#555" font-size="12">Father (XY)</text>
  <!-- Punnett square grid -->
  <!-- Header row: sperm types -->
  <text x="220" y="78" text-anchor="middle" fill="#1565c0" font-size="12" font-weight="bold">Sperm (from father)</text>
  <rect x="155" y="85" width="100" height="40" fill="#1c3a64" stroke="#90caf9" stroke-width="1.5"/>
  <text x="205" y="110" text-anchor="middle" fill="#0d47a1" font-weight="bold" font-size="16">X</text>
  <rect x="255" y="85" width="100" height="40" fill="#0e4a56" stroke="#80cbc4" stroke-width="1.5"/>
  <text x="305" y="110" text-anchor="middle" fill="#004d40" font-weight="bold" font-size="16">Y</text>
  <!-- Left column header: egg types -->
  <text x="78" y="160" text-anchor="end" fill="#880e4f" font-size="12" font-weight="bold">Eggs</text>
  <text x="78" y="175" text-anchor="end" fill="#880e4f" font-size="11">(from</text>
  <text x="78" y="188" text-anchor="end" fill="#880e4f" font-size="11">mother)</text>
  <rect x="85" y="125" width="68" height="50" fill="#4a1040" stroke="#f48fb1" stroke-width="1.5"/>
  <text x="119" y="155" text-anchor="middle" fill="#880e4f" font-weight="bold" font-size="16">X</text>
  <rect x="85" y="175" width="68" height="50" fill="#4a1040" stroke="#f48fb1" stroke-width="1.5"/>
  <text x="119" y="205" text-anchor="middle" fill="#880e4f" font-weight="bold" font-size="16">X</text>
  <!-- Result cells -->
  <!-- XX = female -->
  <rect x="155" y="125" width="100" height="50" fill="#4a1040" stroke="#f06292" stroke-width="1.5"/>
  <text x="205" y="155" text-anchor="middle" fill="#ad1457" font-weight="bold" font-size="16">XX</text>
  <!-- XY = male -->
  <rect x="255" y="125" width="100" height="50" fill="#1c3a64" stroke="#64b5f6" stroke-width="1.5"/>
  <text x="305" y="155" text-anchor="middle" fill="#1565c0" font-weight="bold" font-size="16">XY</text>
  <!-- XX = female -->
  <rect x="155" y="175" width="100" height="50" fill="#4a1040" stroke="#f06292" stroke-width="1.5"/>
  <text x="205" y="205" text-anchor="middle" fill="#ad1457" font-weight="bold" font-size="16">XX</text>
  <!-- XY = male -->
  <rect x="255" y="175" width="100" height="50" fill="#1c3a64" stroke="#64b5f6" stroke-width="1.5"/>
  <text x="305" y="205" text-anchor="middle" fill="#1565c0" font-weight="bold" font-size="16">XY</text>
  <!-- Labels -->
  <text x="205" y="240" text-anchor="middle" fill="#ad1457" font-size="11">Female</text>
  <text x="305" y="240" text-anchor="middle" fill="#1565c0" font-size="11">Male</text>
  <!-- Ratio -->
  <text x="220" y="268" text-anchor="middle" fill="#333" font-size="12">Ratio: 2 XX (female) : 2 XY (male) = <tspan font-weight="bold">50% female : 50% male</tspan></text>
  <text x="220" y="285" text-anchor="middle" fill="#555" font-size="11">The father\'s sperm determines the sex of the offspring.</text>
</svg>`
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why the Father Determines Sex',
        text: 'The mother can only contribute an <strong>X chromosome</strong> (from her XX). The father can contribute either <strong>X</strong> (→ daughter XX) or <strong>Y</strong> (→ son XY). Therefore it is the father\'s sperm — not the mother\'s egg — that determines whether the child is male or female. Each pregnancy has a <strong>50% chance</strong> of producing a male or female.'
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why It Is Not Always Exactly 50:50',
        text: 'The theoretical ratio from the Punnett square is 1:1 (50% male : 50% female). In practice, slight deviations occur in real families because each fertilisation is an independent random event — like a coin flip. The 50:50 ratio holds on a population scale, not necessarily for any one family.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Summary of Key Points', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Females have sex chromosomes <strong>XX</strong>; males have <strong>XY</strong>.' },
          { text: 'All eggs contain one <strong>X</strong> chromosome.' },
          { text: 'Sperm contain either <strong>X</strong> (produces female) or <strong>Y</strong> (produces male).' },
          { text: 'The probability of a male or female child from any single pregnancy is <strong>50%</strong>.' },
          { text: 'The sex of the child is determined by the <strong>father\'s sperm</strong>.' }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Sex is determined by sex chromosomes: females are XX, males are XY. All eggs carry X; sperm carry X or Y (50:50). If X sperm fertilises egg → XX (female); if Y sperm fertilises egg → XY (male). The father determines the sex of the offspring. Theoretical ratio: 50% male : 50% female per pregnancy.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Female = XX, male = XY. Eggs always carry X. Sperm carry X or Y. Father determines sex. 50% chance of each sex per pregnancy.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What are the sex chromosome combinations in human females and males?', answer: 'Females: XX. Males: XY.' },
      { id: 'cue-2', blockId: 'para-2', prompt: 'Why does the father (not the mother) determine the sex of the child?', answer: 'The mother can only contribute an X chromosome (XX). The father can contribute either X (producing a daughter, XX) or Y (producing a son, XY). So it is the father\'s sperm that determines sex.' },
      { id: 'cue-3', blockId: 'svg-1', prompt: 'Draw or describe a Punnett square for sex determination showing the expected ratio.', answer: 'Eggs (all X) × Sperm (X or Y) → XX (female) and XY (male). Expected ratio: 1XX : 1XY = 50% female : 50% male.' },
      { id: 'cue-4', blockId: 'call-2', prompt: 'What is the probability of a male child in any single pregnancy, and why?', answer: '50%, because half of the father\'s sperm carry X (→ female) and half carry Y (→ male), and each fertilisation is an independent random event.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_1;
