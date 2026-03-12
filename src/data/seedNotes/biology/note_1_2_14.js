export const note_biology_1_2_14 = {
  blocks: [
    {
      id: 'obj-code',
      type: 'objective',
      data: { text: 'Describe the properties of the genetic code (triplet, degenerate, non-overlapping, universal) and explain how substitution and frameshift mutations affect protein structure and function.' },
    },
    {
      id: 'h-genetic-code',
      type: 'heading',
      data: { text: 'Properties of the Genetic Code', level: 2 },
    },
    {
      id: 'p-genetic-code',
      type: 'paragraph',
      data: { text: 'The <strong>genetic code</strong> is the set of rules by which DNA (via mRNA) encodes the amino acid sequence of a protein. A sequence of 3 bases on mRNA \u2014 a <strong>codon</strong> \u2014 specifies one amino acid. The code has four key properties.' },
    },
    {
      id: 'list-code-properties',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Triplet:</strong> each codon consists of 3 consecutive bases. There are 4<sup>3</sup> = 64 possible codons, more than enough to code for 20 amino acids + stop signals.',
          '<strong>Degenerate (redundant):</strong> most amino acids are encoded by more than one codon (e.g. leucine has 6 codons). The <strong>degenerate nature of the genetic code can limit the effect of mutations</strong> (as a substitution might still code for the same amino acid).',
          '<strong>Non-overlapping:</strong> each base is read in only one codon. The adjacent codons do not overlap; no single base can take part in the formation of more than one codon. The ribosome reads sequential triplets.',
          '<strong>Universal:</strong> almost every organism uses the same codons for the same amino acids. This is why <strong>genetic engineering</strong> (the transfer of genes from one species to another) is possible.',
        ],
      },
    },
    {
      id: 'h-special-codons',
      type: 'heading',
      data: { text: 'Start and Stop Codons', level: 2 },
    },
    {
      id: 'callout-codons',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Special Codons to Memorise',
        text: '<strong>Start codon:</strong> AUG \u2014 codes for methionine (Met); marks the start of the coding sequence. Every polypeptide begins with methionine (sometimes removed later).\n\n<strong>Stop codons:</strong> UAA, UAG, UGA \u2014 do not code for any amino acid. No tRNA has a matching anticodon; the ribosome detaches and the polypeptide is released.',
      },
    },
    {
      id: 'callout-tip-codons',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'You will not be required to memorise specific codons and the amino acids for which they code. The start (AUG) and stop (UAA, UAG, UGA) codons are the only ones worth knowing generally.',
      },
    },
    {
      id: 'h-codon-table',
      type: 'heading',
      data: { text: 'Example Codons', level: 3 },
    },
    {
      id: 'table-codons',
      type: 'comparisonTable',
      data: {
        caption: 'Selected mRNA codons and their amino acids, illustrating degeneracy.',
        headers: ['mRNA Codon(s)', 'Amino Acid', 'Notes'],
        rows: [
          ['AUG', 'Methionine (Met)', 'Start codon \u2014 unique; only one codon'],
          ['UUU, UUC', 'Phenylalanine (Phe)', '2 codons \u2014 differ only at 3rd base'],
          ['UUA, UUG, CUU, CUC, CUA, CUG', 'Leucine (Leu)', '6 codons \u2014 highly degenerate'],
          ['GGU, GGC, GGA, GGG', 'Glycine (Gly)', '4 codons \u2014 any 3rd base works'],
          ['UAA, UAG, UGA', 'STOP \u2014 no amino acid', 'Signal end of polypeptide'],
        ],
      },
    },
    {
      id: 'h-mutations',
      type: 'heading',
      data: { text: 'Gene Mutations', level: 2 },
    },
    {
      id: 'p-mutations',
      type: 'paragraph',
      data: { text: 'A <strong>gene mutation</strong> is a change in the base sequence of DNA. Mutations can arise spontaneously during DNA replication or be induced by mutagens (e.g. UV radiation, chemicals). The two main types affecting the reading of codons are substitutions and frameshifts.' },
    },
    {
      id: 'table-mutations',
      type: 'comparisonTable',
      data: {
        caption: 'Substitution vs insertion/deletion (frameshift) mutations.',
        headers: ['Feature', 'Substitution', 'Insertion / Deletion (Frameshift)'],
        rows: [
          ['What changes', 'One base replaced by another', 'One (or more) bases added or removed'],
          ['Effect on codons', 'Only the codon containing the substituted base changes', 'All codons downstream of the mutation shift \u2014 completely different amino acid sequence'],
          ['Effect on protein', 'May change one amino acid (missense) or no amino acid (silent, due to degeneracy)', 'Usually produces a non-functional protein \u2014 many amino acids altered'],
          ['Severity', 'Generally less severe \u2014 often silent or minor change', 'Usually severe \u2014 major disruption to protein function'],
          ['Example', 'Sickle-cell anaemia: GAG\u2192GUG in \u03b2-globin gene \u21921 amino acid change (Glu\u2192Val)', 'Addition of 1 base shifts reading frame; different amino acids coded from that point onwards'],
        ],
      },
    },
    {
      id: 'callout-sickle-cell',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Sickle-Cell Anaemia (Substitution)',
        text: 'Normal \u03b2-globin codon: <strong>GAG</strong> \u2192 Glutamic acid (Glu) \u2014 hydrophilic amino acid\n\nMutant \u03b2-globin codon: <strong>GUG</strong> \u2192 Valine (Val) \u2014 hydrophobic amino acid\n\nEffect: the hydrophobic valine causes HbS molecules to stick together under low O\u2082 conditions \u2192 haemoglobin polymerises \u2192 red blood cell distorts into sickle shape \u2192 blocked capillaries, reduced O\u2082 supply.',
      },
    },
    {
      id: 'callout-frameshift',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Frameshift Mutations are Usually Catastrophic',
        text: 'Original:   AUG-UUC-GGA-CCU-UAA\n             Met-Phe-Gly-Pro-stop\n\nInsert one base (X) after base 3:\n            AUG-XUU-CGG-ACC-UUA-A...\n             Met-?  - different codons all the way through\n\nAll downstream codons shift \u2192 completely different (usually nonsense) protein.',
      },
    },
    {
      id: 'checklist-code',
      type: 'checklist',
      data: {
        items: [
          { text: 'State and explain the four properties of the genetic code (triplet, degenerate, non-overlapping, universal)', checked: false },
          { text: 'Identify the start codon and the three stop codons', checked: false },
          { text: 'Explain why a substitution mutation may be silent', checked: false },
          { text: 'Explain why a frameshift mutation is usually more severe than a substitution', checked: false },
          { text: 'Describe the molecular basis of sickle-cell anaemia as an example of a substitution mutation', checked: false },
        ],
      },
    },
    {
      id: 'summary-code',
      type: 'summary',
      data: { text: 'The genetic code is: <strong>triplet</strong> (3 bases = 1 codon = 1 amino acid); <strong>degenerate</strong> (multiple codons per amino acid, especially 3rd base \u201cwobble\u201d); <strong>non-overlapping</strong> (each base belongs to one codon only); <strong>universal</strong> (same codons in almost all organisms). Start codon: AUG (Met). Stop codons: UAA, UAG, UGA. Substitution \u2192 may be silent (degeneracy) or change one amino acid; frameshift (insertion/deletion) \u2192 shifts all downstream codons \u2192 usually non-functional protein.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-code-properties', prompt: 'State and explain the four properties of the genetic code.' },
      { id: 'cue-2', blockId: 'callout-codons', prompt: 'What are the start codon and the three stop codons? What happens when a ribosome reaches a stop codon?' },
      { id: 'cue-3', blockId: 'table-mutations', prompt: 'Compare substitution and frameshift mutations. Why is a frameshift usually more severe?' },
      { id: 'cue-4', blockId: 'callout-sickle-cell', prompt: 'Explain at the molecular level how a single base substitution causes sickle-cell anaemia.' },
    ],
    summaryText: '4 properties: triplet, degenerate, non-overlapping, universal. Start codon = AUG; stop codons = UAA/UAG/UGA. Substitution \u2192 1 codon changes (may be silent due to degeneracy). Frameshift (insertion/deletion) \u2192 all downstream codons shift \u2192 usually non-functional protein. Sickle cell: GAG\u2192GUG \u2192 Glu\u2192Val \u2192 HbS stickiness.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Genetic code and mutations', detail: 'Properties of the genetic code, codon table, stop/start codons, and mutation types (substitution and frameshift) covered in AQA A Level Biology Student Book 1, Chapter 4.', year: '2023', source: 'AQA A Level Biology Student Book 1, Chapter 4, pp78-79', tags: ['genetic-code', 'mutations', 'substitution', 'frameshift'] },
  ],
};
