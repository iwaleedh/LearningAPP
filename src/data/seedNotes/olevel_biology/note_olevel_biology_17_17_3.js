export const note_olevel_biology_17_17_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/17 Inheritance/17-4-mitosis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe mitosis as cell division that produces genetically identical daughter cells. State the purposes of mitosis in living organisms. Outline the stages of mitosis.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is Mitosis?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: '<strong>Mitosis</strong> is a type of cell division in which one parent cell divides to produce <strong>two daughter cells</strong> that are <strong>genetically identical</strong> to each other and to the parent cell. Both daughter cells are <strong>diploid</strong> — they contain the same number of chromosomes as the parent cell (46 in humans).' }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Purposes of Mitosis',
        text: '<strong>Growth:</strong> production of new cells as a multicellular organism develops from a fertilised egg.<br/><strong>Repair:</strong> replacement of damaged or dead cells (e.g. skin wound healing, red blood cell replacement).<br/><strong>Asexual reproduction:</strong> in organisms that reproduce without a sexual process (e.g. bacteria dividing, budding in yeast, runners in strawberry plants).<br/><strong>Cloning:</strong> mitosis is the basis of producing genetically identical organisms.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Stages of Mitosis (Simplified)', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Interphase (preparation — not mitosis itself):</strong> the cell grows; DNA is replicated (each chromosome is duplicated, creating two identical sister chromatids joined at the centromere). Cell organelles also replicate.' },
          { text: '<strong>Prophase:</strong> chromosomes condense and become visible under a microscope; the nuclear envelope starts to break down; spindle fibres begin to form.' },
          { text: '<strong>Metaphase:</strong> chromosomes line up along the <strong>equator (middle)</strong> of the cell; spindle fibres attach to the centromere of each chromosome.' },
          { text: '<strong>Anaphase:</strong> spindle fibres shorten and <strong>pull the sister chromatids apart</strong> toward opposite poles of the cell.' },
          { text: '<strong>Telophase:</strong> a nuclear envelope reforms around each set of chromosomes at the poles; chromosomes uncoil.' },
          { text: '<strong>Cytokinesis:</strong> the cytoplasm divides, producing <strong>two genetically identical diploid daughter cells</strong>.' }
        ]
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Summary diagram of mitosis — one cell divides into two identical cells',
        svg: `<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="520" height="200" fill="#fafafa" rx="8"/>
  <!-- Parent cell -->
  <ellipse cx="80" cy="100" rx="60" ry="55" fill="#e8eaf6" stroke="#3949ab" stroke-width="2"/>
  <text x="80" y="88" text-anchor="middle" fill="#1a237e" font-size="11" font-weight="bold">Parent Cell</text>
  <!-- Chromosomes in parent (simplified as X shapes) -->
  <text x="65" y="106" text-anchor="middle" fill="#5c6bc0" font-size="16" font-weight="bold">X</text>
  <text x="95" y="106" text-anchor="middle" fill="#5c6bc0" font-size="16" font-weight="bold">X</text>
  <text x="80" y="120" text-anchor="middle" fill="#555" font-size="10">diploid (2n=4)</text>
  <!-- Arrow with labels -->
  <line x1="142" y1="100" x2="195" y2="100" stroke="#555" stroke-width="2"/>
  <polygon points="195,94 205,100 195,106" fill="#555"/>
  <text x="172" y="88" text-anchor="middle" fill="#555" font-size="10">DNA</text>
  <text x="172" y="100" text-anchor="middle" fill="#555" font-size="10">replication</text>
  <text x="172" y="112" text-anchor="middle" fill="#555" font-size="10">+ mitosis</text>
  <!-- Cell dividing (hourglass) -->
  <ellipse cx="270" cy="100" rx="55" ry="50" fill="#e8eaf6" stroke="#3949ab" stroke-width="2" stroke-dasharray="5"/>
  <line x1="270" y1="55" x2="270" y2="145" stroke="#e57373" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="248" y="100" text-anchor="middle" fill="#5c6bc0" font-size="14" font-weight="bold">X</text>
  <text x="292" y="100" text-anchor="middle" fill="#5c6bc0" font-size="14" font-weight="bold">X</text>
  <text x="270" y="160" text-anchor="middle" fill="#555" font-size="10">chromosomes separating</text>
  <!-- Arrow -->
  <line x1="330" y1="100" x2="368" y2="100" stroke="#555" stroke-width="2"/>
  <polygon points="368,94 378,100 368,106" fill="#555"/>
  <!-- Daughter cells -->
  <ellipse cx="415" cy="70" rx="45" ry="38" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="415" y="62" text-anchor="middle" fill="#1b5e20" font-size="11" font-weight="bold">Daughter 1</text>
  <text x="400" y="76" text-anchor="middle" fill="#388e3c" font-size="13" font-weight="bold">X</text>
  <text x="428" y="76" text-anchor="middle" fill="#388e3c" font-size="13" font-weight="bold">X</text>
  <text x="415" y="90" text-anchor="middle" fill="#555" font-size="10">diploid, identical</text>
  <ellipse cx="415" cy="148" rx="45" ry="38" fill="#c8e6c9" stroke="#388e3c" stroke-width="2"/>
  <text x="415" y="140" text-anchor="middle" fill="#1b5e20" font-size="11" font-weight="bold">Daughter 2</text>
  <text x="400" y="154" text-anchor="middle" fill="#388e3c" font-size="13" font-weight="bold">X</text>
  <text x="428" y="154" text-anchor="middle" fill="#388e3c" font-size="13" font-weight="bold">X</text>
  <text x="415" y="168" text-anchor="middle" fill="#555" font-size="10">diploid, identical</text>
  <text x="10" y="16" fill="#333" font-size="12" font-weight="bold">Mitosis: 1 Cell → 2 Identical Diploid Cells</text>
</svg>`
      }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Key Facts to Remember',
        text: '<strong>Result of mitosis:</strong> 2 daughter cells.<br/><strong>Chromosome number:</strong> same as parent (diploid → diploid).<br/><strong>Genetic identity:</strong> daughter cells are genetically identical to each other and the parent (clones).<br/><strong>DNA replication happens before mitosis</strong> (during interphase), not during division itself.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Applications of Mitosis', level: 2 }
    },
    {
      id: 'list-2',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Tissue repair:</strong> when skin is cut, epidermal cells undergo mitosis to replace lost cells.' },
          { text: '<strong>Growth:</strong> a fertilised egg cell (zygote) grows into a multicellular organism through repeated mitotic divisions.' },
          { text: '<strong>Asexual reproduction:</strong> bacteria divide by binary fission (equivalent to mitosis); plants reproduce via runners, bulbs, or cuttings — all produce genetically identical offspring.' },
          { text: '<strong>Cloning in medicine:</strong> stem cells replicated by mitosis for potential therapeutic use.' }
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Mitosis vs Meiosis — Do Not Confuse',
        text: 'Mitosis produces <strong>2 genetically identical diploid cells</strong> for growth/repair. Meiosis produces <strong>4 genetically different haploid cells</strong> (gametes). If an exam question is about gamete production or sexual reproduction, the answer is <strong>meiosis, not mitosis</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Mitosis: one diploid cell divides once to produce two genetically identical diploid daughter cells. Used for growth, repair, and asexual reproduction. DNA is replicated in interphase first. Key stages: interphase → prophase → metaphase → anaphase → telophase → cytokinesis. Result: 2 identical cells, same chromosome number as parent.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Mitosis: 1 parent cell → 2 identical diploid daughter cells. Used for growth, repair, asexual reproduction. Stages: interphase (DNA replication) → chromosomes separate → 2 cells formed.',
    cues: [
      { id: 'cue-1', blockId: 'para-1', prompt: 'What are the key outcomes of mitosis in terms of cell number, chromosome number, and genetic identity?', answer: '2 daughter cells produced. Same chromosome number as parent (diploid). Genetically identical to parent and each other.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'State three purposes of mitosis in living organisms.', answer: 'Growth (new cells during development); tissue repair (replacement of damaged/dead cells); asexual reproduction (producing genetically identical offspring).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'What happens to DNA during interphase before mitosis begins?', answer: 'DNA is replicated — each chromosome is duplicated to form two identical sister chromatids joined at the centromere.' },
      { id: 'cue-4', blockId: 'call-3', prompt: 'How does mitosis differ from meiosis in terms of the number of cells produced and their genetic content?', answer: 'Mitosis: 2 genetically identical diploid cells. Meiosis: 4 genetically different haploid cells (gametes).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_17_17_3;
