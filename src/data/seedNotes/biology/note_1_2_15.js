export const note_biology_1_2_15 = {
  blocks: [
    {
      id: 'obj-cf',
      type: 'objective',
      data: {
        text: 'Describe the genetic basis of cystic fibrosis (autosomal recessive, CFTR gene). Explain how the ΔF508 mutation affects protein processing and function. Relate the molecular defect to the symptoms of CF (thick mucus, lung infections, digestive problems, infertility). Evaluate treatments including physiotherapy, DNase, and CFTR modulators.',
      },
    },
    {
      id: 'h-genetic-basis',
      type: 'heading',
      data: { text: 'Genetic Basis of Cystic Fibrosis', level: 2 },
    },
    {
      id: 'p-cftr-gene',
      type: 'paragraph',
      data: {
        text: 'Cystic fibrosis (CF) is caused by mutations in the CFTR gene (cystic fibrosis transmembrane conductance regulator) on chromosome 7. The CFTR protein functions as a chloride ion channel in the plasma membrane of epithelial cells lining the airways, gut, pancreatic ducts, and sweat glands. Over 2000 mutations in the CFTR gene are known, but the most common (responsible for ~70% of UK cases) is the ΔF508 mutation — a deletion of 3 base pairs that removes phenylalanine at position 508 of the protein.',
      },
    },
    {
      id: 'callout-key-inheritance',
      type: 'callout',
      data: {
        style: 'key',
        title: 'CF Inheritance Pattern',
        text: 'Autosomal recessive: Located on chromosome 7 (autosome, not sex chromosome). Two copies of CFTR mutation needed to have CF (homozygous recessive, F/F). Carriers have one normal and one mutated allele (F/f) — they do not have CF but can pass it on. UK incidence: ~1 in 2500 live births affected; ~1 in 25 people are carriers.',
      },
    },
    {
      id: 'h-cftr-protein',
      type: 'heading',
      data: { text: 'CFTR Protein — Normal Function and ΔF508 Defect', level: 2 },
    },
    {
      id: 'p-cftr-normal',
      type: 'paragraph',
      data: {
        text: 'The normal CFTR protein is a chloride channel (Cl⁻ ion channel) in the apical plasma membrane of epithelial cells. When open, Cl⁻ ions pass out of the cell → water follows by osmosis → this keeps the surface lining (mucus layer) thin and watery, allowing cilia to beat and sweep pathogens away.',
      },
    },
    {
      id: 'p-delta508',
      type: 'paragraph',
      data: {
        text: 'The ΔF508 mutation removes a single phenylalanine residue. This causes the protein to misfold during synthesis. Misfolded CFTR is recognised by the cell\'s quality control machinery (ER-associated degradation) and targeted for proteasomal degradation — it never reaches the plasma membrane. The result: no functional Cl⁻ channels at the cell surface.',
      },
    },
    {
      id: 'table-cftr-effect',
      type: 'comparisonTable',
      data: {
        caption: 'Consequences of non-functional CFTR channel',
        headers: ['Location', 'Normal CFTR', 'CF effect', 'Consequence'],
        rows: [
          ['Lungs (bronchioles)', 'Cl⁻ pumped out → thin watery mucus', 'Cl⁻ trapped inside cells → thick, sticky mucus', 'Mucus clogs airways; cilia cannot beat; bacteria colonise; chronic infections (P. aeruginosa, S. aureus); progressive lung damage → fibrosis'],
          ['Pancreas', 'Cl⁻/HCO₃⁻ secretion thins pancreatic juice', 'Thick viscous juice blocks pancreatic ducts', 'Digestive enzymes cannot reach duodenum → malabsorption of fats and proteins; malnutrition; steatorrhoea'],
          ['Liver', 'Bile ducts kept patent by fluid secretion', 'Blocked bile ducts', 'Biliary cirrhosis in ~5% of CF patients'],
          ['Sweat glands', 'Cl⁻ reabsorbed from sweat duct', 'Cl⁻ not reabsorbed; Na⁺ stays in sweat too', 'Sweat is very salty — used in diagnosis (sweat Cl⁻ > 60 mmol dm⁻³ = positive)'],
          ['Reproductive system (males)', 'Normal vas deferens development', 'Vas deferens absent (CBAVD) — blocks sperm transport', '98% of CF males are infertile; females with CF have reduced fertility (thicker cervical mucus)'],
        ],
      },
    },
    {
      id: 'h-diagnosis',
      type: 'heading',
      data: { text: 'Diagnosis', level: 2 },
    },
    {
      id: 'list-diagnosis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Neonatal screening (heel-prick test at birth): measures immunoreactive trypsinogen (IRT); raised IRT → genetic test for CFTR mutations',
          'Sweat test: pilocarpine iontophoresis stimulates sweating; sweat Cl⁻ > 60 mmol dm⁻³ confirms diagnosis (CF sweat has 3–5× normal Cl⁻ concentration)',
          'Genetic testing: direct DNA analysis for CFTR mutations — used to identify carriers; prenatal diagnosis by amniocentesis or chorionic villus sampling',
        ],
      },
    },
    {
      id: 'h-treatments',
      type: 'heading',
      data: { text: 'Management and Treatments', level: 2 },
    },
    {
      id: 'table-cf-treatments',
      type: 'comparisonTable',
      data: {
        caption: 'Treatments for cystic fibrosis',
        headers: ['Treatment', 'Mechanism', 'Target'],
        rows: [
          ['Physiotherapy (chest percussion)', 'Manual vibration of chest/back loosens mucus so it can be coughed up; daily regimen', 'Lungs — clear sticky mucus'],
          ['DNase (Dornase alfa, Pulmozyme)', 'Inhaled enzyme that breaks down DNA from dead neutrophils; DNA contributes to viscosity of CF sputum; DNase reduces sputum viscosity', 'Lungs — reduces sputum thickness'],
          ['Antibiotics (e.g. ciprofloxacin, tobramycin)', 'Kill colonising bacteria (Pseudomonas aeruginosa); can be inhaled, oral, or IV', 'Lungs — treat/prevent infections'],
          ['Pancreatic enzyme supplements (Creon)', 'Capsules of lipase, protease, amylase taken with every meal', 'Gut — compensate for blocked pancreatic ducts; improve fat and protein digestion'],
          ['CFTR modulators — potentiators: ivacaftor (Kalydeco)', 'Opens misrouted or partially functional CFTR channels at cell surface; only works if some CFTR reaches membrane (e.g. G551D mutation)', 'Molecular — restores Cl⁻ channel function'],
          ['CFTR modulators — correctors: lumacaftor, elexacaftor (Trikafta)', 'Helps misfolded ΔF508 CFTR fold correctly → allows it to traffic to plasma membrane; combined with potentiator for maximum effect', 'Molecular — addresses root cause in ΔF508 patients; transformative therapy (>90% of CF patients respond to Trikafta)'],
          ['Lung transplantation', 'Transplant of healthy donor lungs when respiratory failure occurs', 'End-stage CF — last resort'],
        ],
      },
    },
    {
      id: 'callout-tip-gene-therapy',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Gene Therapy for CF',
        text: 'Gene therapy aims to deliver a normal copy of the CFTR gene to airway epithelial cells. Challenges: airway lining has thick mucus; cells turn over rapidly (need repeat dosing); immune response to viral vectors. UK Gene Therapy Consortium is conducting clinical trials using non-viral lipid nanoparticle delivery of CFTR mRNA. This is distinct from CFTR modulators — gene therapy targets DNA/RNA whereas modulators target the protein directly.',
      },
    },
    {
      id: 'checklist-cf',
      type: 'checklist',
      data: {
        items: [
          { text: 'State the chromosome location of CFTR and describe the ΔF508 mutation', checked: false },
          { text: 'Explain how ΔF508 prevents CFTR from reaching the plasma membrane', checked: false },
          { text: 'Describe the consequences of non-functional CFTR in the lungs (thick mucus, infection)', checked: false },
          { text: 'Explain how sweat test confirms CF diagnosis and why CF sweat is salty', checked: false },
          { text: 'State that CF is autosomal recessive; distinguish affected (F/F), carrier (F/f), unaffected (f/f)', checked: false },
          { text: 'Evaluate three treatments: physiotherapy, DNase, and CFTR modulators (correctors vs potentiators)', checked: false },
        ],
      },
    },
    {
      id: 'summary-cf',
      type: 'summary',
      data: {
        text: 'CF: autosomal recessive, chromosome 7, CFTR gene. Most common mutation: ΔF508 (3 bp deletion → removes Phe508 → misfolded protein → degraded → no Cl⁻ channels). Consequence: Cl⁻ stays in cells → thick mucus in lungs (infections, fibrosis), pancreas (malabsorption), CF sweat is salty (diagnostic). Diagnosis: heel-prick IRT + sweat test (Cl⁻ > 60) + genetic test. Treatments: physiotherapy, DNase, antibiotics, pancreatic enzymes, CFTR correctors (lumacaftor/elexacaftor fix folding of ΔF508) + potentiators (ivacaftor keeps channel open) — Trikafta is transformative for ΔF508 patients.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-cftr-gene', prompt: 'What is the ΔF508 mutation? What type of mutation is it?' },
      { id: 'cue-2', blockId: 'p-delta508', prompt: 'Why does the ΔF508 mutation result in NO functional CFTR at the plasma membrane? Describe what happens to the misfolded protein.' },
      { id: 'cue-3', blockId: 'table-cftr-effect', prompt: 'Explain how non-functional CFTR leads to thick mucus in the lungs. What are the consequences for the patient?' },
      { id: 'cue-4', blockId: 'table-cf-treatments', prompt: 'Distinguish between a CFTR corrector and a CFTR potentiator. What does each do?' },
      { id: 'cue-5', blockId: 'callout-key-inheritance', prompt: 'What is the inheritance pattern of CF? What genotype do carriers have?' },
    ],
    summaryText: 'CF = autosomal recessive, chr7, CFTR gene. ΔF508: 3bp deletion, removes Phe508 → misfolded protein → ER degradation → no Cl⁻ channels. Thick mucus: lungs (infection/fibrosis), pancreas (malabsorption), salty sweat (diagnosis). Treatments: physiotherapy, DNase, antibiotics, enzymes, CFTR modulators (correctors fix folding; potentiators open channels).',
    ready: false,
  },
  evidence: [
    { id: 'ev-1', title: 'Trikafta (elexacaftor/tezacaftor/ivacaftor) clinical trial', detail: 'Phase 3 trial (2019, n=403) showed Trikafta produced mean 14.3 percentage point improvement in lung function (ppFEV₁) in ΔF508 homozygous patients vs. placebo. >90% of CF patients are eligible. Represents transformation in CF treatment from symptom management to addressing the root molecular cause.', year: '2019', source: 'Middleton PG et al., NEJM 2019;381:1809-1819', tags: ['CF', 'CFTR modulators', 'clinical trial'] },
  ],
};
