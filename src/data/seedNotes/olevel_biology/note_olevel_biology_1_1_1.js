export const note_olevel_biology_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/1 Characteristics And Classification Of Living Organisms/1-1-2-concept-and-uses-of-classification-systems.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the principles of classification, recall the taxonomic hierarchy, use binomial nomenclature correctly, and identify features of the five kingdoms.'
      }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Why Do We Classify Organisms?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: {
        text: '<strong>Classification</strong> is the process of grouping organisms based on shared features. It helps scientists <strong>identify organisms</strong>, <strong>study relationships</strong> between species, predict characteristics of newly discovered species, and communicate precisely using a universal system.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Taxonomic Hierarchy', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: {
        text: 'Organisms are sorted into groups at different levels called <strong>taxa</strong>. From largest (most inclusive) to smallest (most specific), the hierarchy is:'
      }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Taxonomic Hierarchy — King Philip Came Over For Good Soup',
        text: '<strong>Kingdom</strong> → <strong>Phylum</strong> → <strong>Class</strong> → <strong>Order</strong> → <strong>Family</strong> → <strong>Genus</strong> → <strong>Species</strong><br/><br/>Mnemonic: <em>King Philip Came Over For Good Soup</em><br/><br/>As you move down the hierarchy: fewer organisms in each group, organisms become more similar, more characteristics are shared.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Binomial Nomenclature', level: 2 }
    },
    {
      id: 'para-3',
      type: 'paragraph',
      data: {
        text: 'Every species is given a <strong>two-part Latin name</strong> (binomial nomenclature), devised by Carl Linnaeus. The first part is the <strong>genus</strong> (capital letter); the second part is the <strong>species</strong> (lower case). The name is written in <em>italics</em> or underlined when handwritten.'
      }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Homo sapiens</strong> — modern human (Genus: <em>Homo</em>, Species: <em>sapiens</em>)' },
          { text: '<strong>Panthera leo</strong> — lion' },
          { text: '<strong>Panthera tigris</strong> — tiger (same genus as lion → closely related)' },
          { text: '<strong>Canis lupus</strong> — grey wolf' },
          { text: '<strong>Canis familiaris</strong> — domestic dog (same genus → closely related to wolf)' }
        ]
      }
    },
    {
      id: 'call-2',
      type: 'callout',
        data: {
        style: 'tip',
        title: 'Exam Tip: Writing Scientific Names',
        text: 'Always capitalise the <strong>genus</strong> name and use lower case for the <strong>species</strong> name. Write in italics (typed) or underline (handwritten). Two organisms in the same genus are more closely related than two in different genera.'
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'The Five Kingdoms', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'The five kingdoms — features and examples',
        headers: ['Kingdom', 'Cell Type', 'Key Features', 'Examples'],
        rows: [
          ['Prokaryotae (Bacteria)', 'Prokaryotic (no true nucleus)', 'No membrane-bound organelles; circular DNA; cell wall (not cellulose); very small', 'Escherichia coli, Streptococcus'],
          ['Protoctista', 'Eukaryotic', 'Mostly single-celled; do not fit into other kingdoms; some photosynthesise', 'Amoeba, Euglena, Algae'],
          ['Fungi', 'Eukaryotic', 'Cell walls made of chitin (not cellulose); absorb food from environment (saprotrophic); hyphae (thread-like); no chlorophyll', 'Mushrooms, Moulds, Yeast'],
          ['Plantae', 'Eukaryotic', 'Multicellular; cellulose cell walls; chloroplasts (photosynthesise); autotrophic', 'Ferns, mosses, flowering plants, conifers'],
          ['Animalia', 'Eukaryotic', 'Multicellular; no cell wall; heterotrophic (ingest food); most can move', 'Fish, mammals, insects, worms']
        ]
      }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Viruses — Not in Any Kingdom', level: 2 }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Viruses are NOT classified as living organisms',
        text: 'Viruses are <strong>not placed in any kingdom</strong> because they are not considered truly alive. They have no cells, no cytoplasm, no organelles, and cannot carry out any life processes on their own. They can only reproduce by invading a host cell and using its machinery.<br/><br/>Virus structure: <strong>protein coat (capsid)</strong> surrounding <strong>genetic material</strong> (DNA or RNA). Examples: influenza virus, HIV, coronavirus.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Classification groups organisms by shared features using the hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species. Binomial nomenclature gives each species a unique two-part Latin name. The five kingdoms are Prokaryotae, Protoctista, Fungi, Plantae, and Animalia. Viruses are not living and belong to no kingdom.'
      }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'Taxonomic hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species. Five kingdoms: Prokaryotae, Protoctista, Fungi, Plantae, Animalia. Viruses are not living.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'call-1',
        prompt: 'State the correct order of the taxonomic hierarchy from largest to smallest group.',
        answer: 'Kingdom → Phylum → Class → Order → Family → Genus → Species.'
      },
      {
        id: 'cue-2',
        blockId: 'para-3',
        prompt: 'Describe the rules for writing a binomial name correctly.',
        answer: 'The genus name has a capital letter, the species name is lower case; both are written in italics (or underlined when handwritten), e.g. Homo sapiens.'
      },
      {
        id: 'cue-3',
        blockId: 'tbl-1',
        prompt: 'State TWO features that distinguish Fungi from Plantae.',
        answer: 'Fungi have cell walls made of chitin (not cellulose) and are heterotrophic (absorb nutrients); plants have cellulose cell walls and are autotrophic (photosynthesise).'
      },
      {
        id: 'cue-4',
        blockId: 'call-3',
        prompt: 'Explain why viruses are not classified in any kingdom.',
        answer: 'Viruses are not living — they have no cells, cannot carry out life processes independently, and can only reproduce inside a host cell.'
      },
      {
        id: 'cue-5',
        blockId: 'tbl-1',
        prompt: 'What type of cell do Prokaryotae have, and how does it differ from eukaryotic cells?',
        answer: 'Prokaryotae have prokaryotic cells — they have no true membrane-bound nucleus and no membrane-bound organelles. Eukaryotic cells have a true nucleus enclosed by a membrane.'
      }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_1_1_1;
