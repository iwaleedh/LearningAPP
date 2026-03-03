export const note_biology_5_8_11 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: { text: 'Understand gene expression and recombinant protein production: expression vectors with strong promoters, Shine-Dalgarno sequence (prokaryotes), Kozak sequence (eukaryotes), terminators; producing human insulin in E. coli: cDNA from mRNA → expression vector → transformed E. coli → fermentation → purification; post-translational modification problems in prokaryotes; use of yeast as alternative.' },
    },
    {
      id: 'h1',
      type: 'heading',
      data: { text: 'Gene Expression and Recombinant Protein Production', level: 2 },
    },
    {
      id: 'p1',
      type: 'paragraph',
      data: { text: 'Recombinant protein production uses genetic engineering to produce large quantities of therapeutic or research proteins. Instead of extracting proteins from natural sources (expensive and limited), cloned genes are inserted into expression vectors and transformed into host cells, which are then cultured to produce the desired protein. Human insulin production in E. coli was the first major success, revolutionising diabetes treatment.' },
    },
    {
      id: 'h2',
      type: 'heading',
      data: { text: 'Expression Vectors', level: 3 },
    },
    {
      id: 'p2',
      type: 'paragraph',
      data: { text: 'Expression vectors are specialised plasmids designed for high-level protein production. Key features: (1) Strong promoter: drives high transcription rates (e.g., T7 promoter for high expression). (2) Ribosome binding site (RBS): ensures efficient translation. In prokaryotes, this is the Shine-Dalgarno sequence (AGGAGGU consensus). In eukaryotes, it is the Kozak sequence (GCCRCCAUGG consensus). (3) Terminator: stops transcription (e.g., rrnB terminator for E. coli).' },
    },
    {
      id: 'p3',
      type: 'paragraph',
      data: { text: 'The gene must be in-frame with the start codon (ATG) and lack internal stop codons that would truncate the protein. Some vectors include tags (e.g., His-tag, FLAG-tag) for easy protein purification and detection.' },
    },
    {
      id: 'callout1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Prokaryotic vs Eukaryotic Expression Elements',
        text: 'Prokaryotes: Shine-Dalgarno sequence (AGGAGGU), ribosome binding ~8 bp upstream of start codon. Eukaryotes: Kozak sequence (GCCRCCAUGG), encompasses start codon. This difference ensures correct translation in each system.',
      },
    },
    {
      id: 'h3',
      type: 'heading',
      data: { text: 'Human Insulin Production in E. coli', level: 3 },
    },
    {
      id: 'p4',
      type: 'paragraph',
      data: { text: 'Insulin is a 51-amino acid peptide hormone essential for glucose regulation. Historically, insulin was extracted from pancreases of slaughtered animals. This was expensive, limited supply, and risked contamination. Genetic engineering solved this: Step 1: Isolate mRNA from human pancreatic β-cells encoding preproinsulin. Step 2: Use reverse transcriptase to synthesise cDNA (complementary DNA) from the mRNA template. Step 3: Insert cDNA into an expression vector with strong prokaryotic promoter and Shine-Dalgarno sequence.' },
    },
    {
      id: 'p5',
      type: 'paragraph',
      data: { text: 'Step 4: Transform the recombinant plasmid into E. coli competent cells. Step 5: Grow transformed E. coli in fermentation tanks (batch or continuous culture) at 37 °C, inducing expression with IPTG (isopropyl β-D-1-thiogalactopyranoside) when culture reaches optimal density. Step 6: Harvest cells and lyse (break open) to release recombinant insulin. Step 7: Purify insulin via chromatography (gel filtration, ion-exchange) and high-performance liquid chromatography (HPLC). Step 8: Quality control: verify identity and purity by mass spectrometry, amino acid sequencing, and sterility testing.' },
    },
    {
      id: 'equation1',
      type: 'equation',
      data: {
        html: 'mRNA (insulin) → Reverse transcriptase → cDNA → Insert into expression vector → Transform E. coli → Fermentation (IPTG induction) → Lysis → Purification → Recombinant insulin',
        caption: 'Workflow for recombinant human insulin production',
      },
    },
    {
      id: 'callout2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Why cDNA, Not Genomic DNA?',
        text: 'Human insulin gene contains introns. E. coli lacks machinery to splice introns, so genomic DNA would produce non-functional protein (introns remain). cDNA is synthesised from mature mRNA (introns already removed), so it encodes only the coding sequence. E. coli can express cDNA correctly.',
      },
    },
    {
      id: 'h4',
      type: 'heading',
      data: { text: 'Post-Translational Modifications in Prokaryotes', level: 3 },
    },
    {
      id: 'p6',
      type: 'paragraph',
      data: { text: 'A major limitation of using E. coli for eukaryotic protein production is that bacteria lack the machinery for post-translational modifications (PTMs) that often occur in eukaryotic proteins. Common PTMs include: phosphorylation (addition of phosphate groups), glycosylation (addition of carbohydrate chains), ubiquitination, disulphide bond formation, and proteolytic cleavage.' },
    },
    {
      id: 'p7',
      type: 'paragraph',
      data: { text: 'Example: secreted eukaryotic proteins often receive N-linked glycosylation in the ER. E. coli cannot perform this modification. Without correct glycosylation, the protein may be unstable, poorly secreted, or non-functional. Additionally, E. coli accumulates proteins in inclusion bodies (misfolded aggregates) when expressing high levels of eukaryotic proteins, requiring in vitro refolding steps.' },
    },
    {
      id: 'h5',
      type: 'heading',
      data: { text: 'Yeast as an Alternative Expression System', level: 3 },
    },
    {
      id: 'p8',
      type: 'paragraph',
      data: { text: 'Yeast (Saccharomyces cerevisiae) is eukaryotic and can perform many post-translational modifications, including glycosylation (though with different patterns than mammalian cells). Yeast advantages: (1) Eukaryotic, capable of PTMs. (2) Grows quickly, easy to culture. (3) Can secrete recombinant proteins into culture medium (simplifying purification). (4) Generally recognised as safe (GRAS) for food/pharmaceutical applications. (5) Low cost.' },
    },
    {
      id: 'p9',
      type: 'paragraph',
      data: { text: 'Yeast limitations: (1) Hyperglycosylation: yeast adds more carbohydrate chains than mammalian proteins, potentially altering function or immunity. (2) Slower protein production than E. coli. (3) Some eukaryotic proteins do not fold correctly in yeast. Yeast has been used for insulin production (Novo Nordisk) and hepatitis B vaccine production.' },
    },
    {
      id: 'table1',
      type: 'comparisonTable',
      data: {
        headers: ['Criterion', 'E. coli', 'Yeast', 'Mammalian Cells'],
        rows: [
          ['Post-translational modifications', 'None/limited', 'Partial (hyperglycosylation)', 'Full, authentic'],
          ['Protein yield', 'Very high', 'High', 'Moderate'],
          ['Culture cost', 'Low', 'Low', 'High'],
          ['Expression speed', 'Very fast', 'Fast', 'Slow'],
          ['Protein secretion', 'Rare (inclusion bodies)', 'Good', 'Good'],
          ['Suitable proteins', 'Intracellular, simple', 'Secreted, some PTMs', 'Complex, fully PTM-modified'],
        ],
        caption: 'Comparison of prokaryotic, yeast, and mammalian expression systems',
      },
    },
    {
      id: 'h6',
      type: 'heading',
      data: { text: 'Fermentation Scale-Up', level: 3 },
    },
    {
      id: 'p10',
      type: 'paragraph',
      data: { text: 'From lab-scale plasmid cloning to commercial protein production requires fermentation scale-up. Batch fermentation: cells grow in closed tank with fixed nutrients; growth follows exponential phase, stationary phase, and death phase. Cells are harvested when expression is optimal (typically late exponential). Continuous fermentation (chemostat): fresh medium is continuously added, spent medium removed, maintaining constant cell density and prolonged exponential growth.' },
    },
    {
      id: 'p11',
      type: 'paragraph',
      data: { text: 'Fermentation parameters: temperature, pH, dissolved oxygen, and agitation are carefully controlled to maximise protein yield. Large fermentation tanks (1000–10,000 litres) are used commercially. Fed-batch fermentation allows controlled nutrient addition, extending growth phase and maximising biomass and protein yield.' },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Expression vectors: strong promoter, Shine-Dalgarno (prokaryote) or Kozak (eukaryote), terminator. Insulin: cDNA from mRNA (no introns) → expression vector → E. coli → fermentation → purification. E. coli: no PTMs, inclusion bodies. Yeast: eukaryotic, PTMs, secretion, safer.',
        apply: 'Design an expression strategy for a human antibody: (a) would you use E. coli, yeast, or mammalian cells? (b) why? (c) what modifications are needed?',
        analyze: 'Why is cDNA essential for expressing eukaryotic genes in E. coli? What would happen if genomic DNA were used?',
        evaluate: 'Discuss the cost-benefit trade-offs between using E. coli (high yield, no PTMs) and mammalian cells (low yield, full PTMs) for therapeutic protein production.',
      },
      terms: [],
    },
    {
      id: 'check1',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe features of expression vectors', checked: false },
          { text: 'Explain Shine-Dalgarno and Kozak sequences', checked: false },
          { text: 'Outline the workflow for recombinant insulin production', checked: false },
          { text: 'Explain why cDNA is used instead of genomic DNA', checked: false },
          { text: 'Discuss post-translational modification limitations in E. coli', checked: false },
          { text: 'Compare E. coli, yeast, and mammalian expression systems', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Expression vectors: strong promoter, Shine-Dalgarno (prokaryote)/Kozak (eukaryote), terminator. Recombinant insulin: pancreatic β-cell mRNA → reverse transcriptase → cDNA → expression vector → E. coli → fermentation (IPTG induction) → purification. E. coli advantages: high yield, fast; disadvantages: no PTMs, inclusion bodies. Yeast: eukaryotic, PTMs, secretion; slower than E. coli.' },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h2', prompt: 'What are the key features of expression vectors?' },
      { id: 'cue-2', blockId: 'h3', prompt: 'Outline the steps for producing recombinant insulin in E. coli.' },
      { id: 'cue-3', blockId: 'callout2', prompt: 'Why is cDNA used for expressing eukaryotic genes in bacteria?' },
      { id: 'cue-4', blockId: 'h4', prompt: 'What post-translational modifications does E. coli lack?' },
      { id: 'cue-5', blockId: 'h5', prompt: 'Compare yeast and E. coli as expression systems.' },
    ],
    summaryText: 'Expression vectors: strong promoter, Shine-Dalgarno (prokaryote) or Kozak (eukaryote), terminator. Insulin: mRNA → cDNA (no introns) → expression vector → E. coli → fermentation → purification. E. coli: high yield, no PTMs, inclusion bodies. Yeast: eukaryotic, partial PTMs, secretion, slower.',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Recombinant human insulin (Humulin)', detail: 'FDA approved 1982; first recombinant drug produced in E. coli', year: '1982', source: 'Genentech/Eli Lilly', tags: ['recombinant insulin', 'biotechnology milestone'] },
  ],
};
