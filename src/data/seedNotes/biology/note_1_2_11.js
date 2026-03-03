export const note_biology_1_2_11 = {
  blocks: [
    {
      id: 'obj-cf',
      type: 'objective',
      data: {
        text: 'Understand cystic fibrosis genetics, CFTR protein function, phenotype, and treatment options.'
      }
    },
    {
      id: 'h-cf-genetics',
      type: 'heading',
      data: {
        text: 'Cystic Fibrosis: Autosomal Recessive Inheritance',
        level: 2
      }
    },
    {
      id: 'p-cf-gene',
      type: 'paragraph',
      data: {
        text: 'Cystic fibrosis (CF) is caused by mutations in the CFTR gene (cystic fibrosis transmembrane conductance regulator) located on chromosome 7. Over 1000 mutations have been identified. The most common is ΔF508 (deletion of phenylalanine at position 508), accounting for ~70% of CF alleles globally. CF is autosomal recessive: an individual must inherit two mutant alleles (one from each parent) to have CF disease. Heterozygous carriers (one mutant allele) are phenotypically normal. CF has a carrier frequency of ~1 in 25 in Caucasians; ~1 in 2500 are affected. Consanguineous relationships (related parents) increase CF risk because both parents are more likely to carry the same recessive allele.'
      }
    },
    {
      id: 'h-cftr-protein',
      type: 'heading',
      data: {
        text: 'CFTR Protein and Chloride Channel Function',
        level: 2
      }
    },
    {
      id: 'p-cftr-function',
      type: 'paragraph',
      data: {
        text: 'The CFTR protein is a chloride (Cl⁻) ion channel in epithelial cell membranes. It is an ABC transporter protein that actively transports Cl⁻ from the cytoplasm into the lumen of ducts in various organs: lungs (airways), pancreas, small intestine, sweat glands, and reproductive tract. In normal individuals, CFTR-mediated Cl⁻ secretion is followed passively by water and sodium via osmosis, producing a thin, watery secretion. The ΔF508 mutation causes CFTR protein misfolding; the mutant protein is recognised by cellular quality control (unfolded protein response) and is degraded before reaching the cell membrane. Some mutant CFTR protein may reach the membrane but is non-functional (defective chloride transport). As a result, Cl⁻ secretion is severely reduced or absent.'
      }
    },
    {
      id: 'h-cf-phenotype',
      type: 'heading',
      data: {
        text: 'CF Phenotype: Multiple Organ Systems',
        level: 2
      }
    },
    {
      id: 'p-lungs-cf',
      type: 'paragraph',
      data: {
        text: 'The lungs are severely affected in CF. Without CFTR-mediated Cl⁻ and water secretion, airway secretions become thick, sticky, and dehydrated. Thick mucus accumulates in bronchi and bronchioles, obstructing airflow. The ciliated epithelium cannot clear this mucus effectively; bacteria colonise the airway. Chronic Pseudomonas aeruginosa and Staphylococcus aureus infections cause progressive inflammation and tissue damage (bronchiectasis). Inflammation destroys the bronchial walls, widening airways (bronchiectasis), trapping infection. Recurrent infections and inflammation lead to progressive lung damage, respiratory failure, and early death (median survival historically ~30 years; now ~50+ years with modern treatment). CF is the leading genetic cause of death in children in developed countries.'
      }
    },
    {
      id: 'p-pancreas-cf',
      type: 'paragraph',
      data: {
        text: 'The pancreas is also severely affected. The pancreas secretes digestive enzymes (amylase, lipase, proteases) via ducts into the small intestine. In CF, thick secretions block the pancreatic ducts, preventing enzyme secretion. Enzymes accumulate in the pancreas, causing autodigestion and inflammation (pancreatitis). Over time, pancreatic tissue is destroyed (pancreatic insufficiency), and enzyme production decreases. Result: malabsorption of fats and proteins, steatorrhoea (fatty stools), nutritional deficiencies, and failure to thrive. CF-related diabetes can also develop if the remaining islet cells are destroyed. Treatment includes pancreatic enzyme replacement (taken with meals) and high-calorie diet.'
      }
    },
    {
      id: 'p-other-organs',
      type: 'paragraph',
      data: {
        text: 'Other organs affected by CF: sweat glands (excessive sodium loss in sweat, leading to high sweat electrolytes—diagnostic sweat chloride test ≥60 mmol/L confirms CF), small intestine (thick secretions, meconium ileus in newborns—intestinal obstruction), and reproductive tract (males with CF typically infertile due to absent vas deferens [CBAVD], a developmental defect; females have reduced fertility due to thick cervical mucus). Liver involvement (biliary cirrhosis) occurs in 5–10% of CF patients.'
      }
    },
    {
      id: 'h-cf-treatment',
      type: 'heading',
      data: {
        text: 'CF Treatment and Management',
        level: 2
      }
    },
    {
      id: 'p-symptomatic-treatment',
      type: 'paragraph',
      data: {
        text: 'CF treatment is multifaceted and largely symptomatic (managing consequences rather than curing the genetic defect). Respiratory management: (1) Physiotherapy: chest percussion and vibration mobilise mucus for expectoration. Airway clearance techniques (autogenic drainage) clear secretions. (2) Mucolytics: DNase (deoxyribonuclease) degrades DNA in sputum (released from dead white blood cells), reducing viscosity. (3) Bronchodilators: albuterol relaxes bronchial muscle, improving airflow and clearance. (4) Antibiotics: chronic anti-Pseudomonas therapy (inhaled tobramycin, fluoroquinolones) controls airway infection. (5) Lung transplantation: for end-stage lung disease; improves lifespan but limited by donor availability and requires lifelong immunosuppression.'
      }
    },
    {
      id: 'p-nutritional-genetic',
      type: 'paragraph',
      data: {
        text: 'Nutritional management: pancreatic enzyme replacement therapy (PERT) with meals provides amylase, lipase, and proteases to aid digestion. Fat-soluble vitamins (A, D, E, K) supplementation compensates for malabsorption. High-calorie diet maintains weight and growth. Gene therapy is emerging: CFTR corrector molecules (VX-661, VX-770) help mutant CFTR fold correctly and reach the cell membrane, restoring partial chloride transport. Ivacaftor (VX-770) is approved for specific mutations; other agents are in development. Gene therapy (introducing normal CFTR cDNA into airway epithelium via viral or non-viral vectors) is being tested. While not yet curative, these therapies offer hope for improving CFTR function and disease progression.'
      }
    },
    {
      id: 'table-cf-organs',
      type: 'comparisonTable',
      data: {
        headers: ['Organ System', 'CFTR Defect', 'Consequence', 'Treatment'],
        rows: [
          ['Lungs', 'Reduced Cl⁻ secretion → thick mucus', 'Airway obstruction, infection, inflammation, bronchiectasis', 'Physiotherapy, DNase, bronchodilators, antibiotics'],
          ['Pancreas', 'Blocked enzyme ducts → autodigestion', 'Pancreatic insufficiency, malabsorption, malnutrition', 'Pancreatic enzyme replacement (PERT), high-calorie diet'],
          ['Sweat glands', 'Reduced Cl⁻ secretion', 'Excessive salt loss, high sweat Cl⁻', 'Sweat test diagnostic (≥60 mmol/L)'],
          ['Small intestine', 'Thick secretions', 'Meconium ileus (newborns), intestinal obstruction', 'Surgical intervention if severe'],
          ['Reproductive tract (male)', 'Absence of vas deferens (CBAVD)', 'Infertility', 'Assisted reproductive technology (ICSI)'],
          ['Reproductive tract (female)', 'Thick cervical mucus', 'Reduced fertility', 'Fertility management']
        ],
        caption: 'CF affects multiple organs; CFTR defects and treatments'
      }
    },
    {
      id: 'callout-worked-cf-genetics',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'CF Inheritance and Risk',
        text: 'Autosomal recessive: CF^CF (disease), CF^cf (carrier), cf^cf (normal). Two carrier parents (CF^cf × CF^cf): 25% disease (CF^CF), 50% carrier (CF^cf), 25% normal (cf^cf). One carrier, one normal: all children normal or carrier, no disease. Genetic counselling: affected individual has CF^CF; all children of CF^CF with normal partner are carriers (CF^cf).'
      }
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Why does a defective CFTR protein cause thick mucus in the lungs? Explain the mechanism: CFTR is a chloride ion channel; without it, Cl⁻ cannot leave the cell → water follows by osmosis → mucus becomes dehydrated and viscous, impairing mucociliary clearance.',
        apply: 'The commonest CF mutation (ΔF508) deletes phenylalanine at position 508, causing the CFTR protein to misfold and be degraded by the proteasome before reaching the membrane. Explain why this is a loss-of-function mutation and predict how the drug ivacaftor (a CFTR potentiator) might differ in mechanism from lumacaftor (a CFTR corrector).',
        analyze: 'Compare the phenotypic effects of CF in the lungs, pancreas, and reproductive system. Explain how the same molecular defect (loss of CFTR) produces such different manifestations in different organs.',
        evaluate: 'Evaluate the prospects and limitations of gene therapy for cystic fibrosis. Consider delivery vectors (viral vs liposome), expression duration, immune response, and why CF gene therapy has proved harder than anticipated despite 30 years of research.',
      },
      terms: [],
    },
    {
      id: 'checklist-cf',
      type: 'checklist',
      data: {
        items: [
          { text: 'CF autosomal recessive; CFTR gene on chromosome 7; >1000 mutations (ΔF508 most common)', checked: false },
          { text: 'CFTR is Cl⁻ ion channel; mutant CFTR misfolded, degraded, non-functional', checked: false },
          { text: 'Lungs: thick mucus, airway obstruction, Pseudomonas infection, bronchiectasis', checked: false },
          { text: 'Pancreas: blocked ducts, enzyme deficiency, malabsorption, malnutrition', checked: false },
          { text: 'Treatment: physiotherapy, DNase, antibiotics, PERT, gene therapy (emerging)', checked: false }
        ]
      }
    },
    {
      id: 'summary-cf',
      type: 'summary',
      data: {
        text: 'Cystic fibrosis is autosomal recessive (CFTR gene, chromosome 7; ΔF508 ~70%). Mutant CFTR protein is misfolded and non-functional; Cl⁻ secretion fails. Lungs: thick mucus, obstruction, Pseudomonas infection, bronchiectasis. Pancreas: enzyme insufficiency, malabsorption. Sweat glands: high electrolyte loss (diagnostic sweat test ≥60 mmol/L). Treatment: airway clearance (physiotherapy, DNase), antibiotics, pancreatic enzyme replacement, high-calorie diet. Gene therapy (CFTR correctors/potentiators) emerging. Median survival now ~50+ years with modern treatment.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-cf-gene',
        prompt: 'Describe CF genetics. What is the ΔF508 mutation and why is it common?'
      },
      {
        id: 'cue-2',
        blockId: 'p-cftr-function',
        prompt: 'Explain CFTR protein function. How does ΔF508 mutation affect CFTR?'
      },
      {
        id: 'cue-3',
        blockId: 'p-lungs-cf',
        prompt: 'Describe CF lung disease. Why does infection occur and what is bronchiectasis?'
      },
      {
        id: 'cue-4',
        blockId: 'p-pancreas-cf',
        prompt: 'Explain pancreatic involvement in CF. How does enzyme insufficiency develop?'
      },
      {
        id: 'cue-5',
        blockId: 'p-symptomatic-treatment',
        prompt: 'List five treatments for CF respiratory disease.'
      }
    ],
    summaryText: 'CF: autosomal recessive; CFTR gene chromosome 7; ΔF508 deletion ~70%. CFTR mutant protein misfolded, degraded, non-functional chloride channel. Lungs: ↓Cl⁻, ↓water secretion → thick mucus, obstruction, Pseudomonas infection, bronchiectasis, progressive damage. Pancreas: blocked ducts → enzyme deficiency, malabsorption, malnutrition. Sweat glands: high electrolyte (sweat test ≥60 mmol/L diagnostic). Treatment: airway clearance, DNase, antibiotics, PERT, high-calorie. Gene therapy emerging (CFTR correctors). Median survival ~50+ years.',
    ready: false
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Cystic Fibrosis: Genetics and Pathophysiology',
      detail: 'CF genetics, CFTR protein function, organ system effects, and current treatment strategies.',
      year: '2024',
      source: 'A-Level Biology Specification (WBI11)',
      tags: ['cystic-fibrosis', 'cftr', 'autosomal-recessive', 'gene-therapy', 'pancreatic-insufficiency']
    }
  ]
};
