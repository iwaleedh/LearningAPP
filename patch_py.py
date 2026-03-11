import sys

with open('src/data/seedNotes/chemistry/note_4_15_6.js', 'r') as f:
    text = f.read()

start_idx = text.find("id: 'table-acyl-summary'")
end_idx = text.find("// ════════════════════════════════════════════════════════════════════════\n    // PART 2 — ESTERS")

if start_idx == -1 or end_idx == -1:
    print("Not found", start_idx, end_idx)
    sys.exit(1)

start_idx -= 12

target = text[start_idx:end_idx]

replacement = """    {
      id: 'h-acyl-benzene',
      type: 'heading',
      data: { text: 'Reaction 5: Friedel-Crafts Acylation (Benzene)', level: 3 }
    },
    {
      id: 'list-acyl-benzene',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Acyl chlorides react with benzene to substitute an acyl group ($CH_3CO–$) onto the aromatic ring.',
          '**Conditions:** Heating to around 60°C under reflux.',
          '**Catalyst:** Aluminium chloride ($AlCl_3$).',
          '**Observation:** Misty fumes of $HCl$ gas are given off as the reaction proceeds.'
        ]
      }
    },
    {
      id: 'eq-acyl-benzene',
      type: 'equation',
      data: {
        html: 'C<sub>6</sub>H<sub>6</sub> + CH<sub>3</sub>COCl → C<sub>6</sub>H<sub>5</sub>COCH<sub>3</sub> + HCl',
        caption: 'Benzene + Ethanoyl chloride → Phenylethanone + Hydrogen chloride.'
      }
    },
    // Summary table for 5 reactions
    {
      id: 'table-acyl-summary',
      type: 'comparisonTable',
      data: {
        headers: ['Reaction', 'Reagent', 'Main product', 'Co-product(s)'],
        rows: [
          ['① + Water', 'H₂O (cold)', 'Carboxylic acid (R–COOH)', 'HCl↑ (misty fumes)'],
          ['② + Alcohol', 'R′–OH', 'Ester (R–COO–R′)', 'HCl↑ (misty fumes)'],
          ['③ + Ammonia', 'conc. NH₃', 'Primary amide (R–CONH₂)', 'HCl → reacts with NH₃ → NH₄Cl'],
          ['④ + Primary amine', 'R′–NH₂', 'N-substituted amide (R–CO–NHR′)', 'HCl↑'],
          ['④ + Secondary amine', 'R′₂NH', 'N,N-disubstituted amide (R–CO–NR′₂)', 'HCl↑'],
          ['⑤ + Benzene ($C_6H_6$)', 'Heat (60°C), $AlCl_3$', 'Ketone (Acylation)', '$HCl$'],
          ['Tertiary amine R′₃N', '—', 'No reaction', '(no N–H to remove)']
        ],
        caption: 'All five acyl chloride reactions — HCl is ALWAYS produced. No mechanisms required for IAL exam. Learn reagent + product for each.'
      }
    },

    // ════════════════════════════════════════════════════════════════════════
    // PART 1.5 — ACID ANHYDRIDES
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 'h-acid-anhydrides',
      type: 'heading',
      data: { text: 'Acid Anhydrides', level: 2 }
    },
    {
      id: 'list-anhydride-physical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Structure:** Formed by dehydrating two carboxylic acid molecules. Functional group: –CO–O–CO–',
          '**Naming:** Name the parent acid, but replace "acid" with "anhydride" (e.g. ethanoic anhydride).',
          '**Appearance:** Colourless liquid smelling strongly of vinegar (due to reacting with water vapour in the air to produce ethanoic acid).',
          '**Boiling point:** Ethanoic anhydride boils at 140°C. It is polar but **cannot** form hydrogen bonds to itself. Therefore, its boiling point is lower than a similarly sized carboxylic acid.',
          '**Reactivity:** Think of them as modified acyl chlorides. The "–O–CO–CH₃" part behaves just like the "–Cl" leaving group. Instead of HCl, they eliminate **carboxylic acid** as a byproduct (e.g., ethanoic acid).'
        ]
      }
    },
    {
      id: 'h-anhydride-reactions',
      type: 'heading',
      data: { text: 'Reactions of Acid Anhydrides with –OH Compounds', level: 3 }
    },
    {
      id: 'p-anhydride-reactions-intro',
      type: 'paragraph',
      data: {
        text: 'The reactions of acid anhydrides with compounds containing an –OH group (water, alcohols, phenols) are very similar to those of acyl chlorides. However, the reactions are <strong>slower</strong>, less violently reactive, and produce <strong>ethanoic acid</strong> as the second product rather than toxic hydrogen chloride gas.'
      }
    },
    {
      id: 'list-anhydride-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Water:</strong> Happens slowly at room temperature (faster on gentle warming). Unlike the acyl chloride reaction, there is no dramatic fuming.',
          '<strong>Product:</strong> Two molecules of carboxylic acid.',
          '<strong>Example:</strong> Ethanoic anhydride + Water → Ethanoic acid<br/>$(CH_3CO)_2O + H_2O \\\\rightarrow 2CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-alcohols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Alcohols:</strong> Needs gentle heating for a reasonable rate.',
          '<strong>Product:</strong> An ester and ethanoic acid (as the byproduct). No catalyst is needed, unlike the reversible reaction between a normal acid and an alcohol.',
          '<strong>Example:</strong> Ethanoic anhydride + Ethanol → Ethyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + CH_3CH_2OH \\\\rightarrow CH_3COOCH_2CH_3 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-phenols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Phenols:</strong> Phenols ($C_6H_5OH$) also react to form esters, known as phenyl esters.',
          '<strong>Reaction type:</strong> Acylation (specifically, ethanoylation when ethanoic anhydride is used). The hydrogen of the phenol –OH group is replaced by an ethanoyl group ($CH_3CO–$).',
          '<strong>Example:</strong> Ethanoic anhydride + Phenol → Phenyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + C_6H_5OH \\\\rightarrow CH_3COOC_6H_5 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'callout-aspirin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Industrial Synthesis of Aspirin',
        text: 'Aspirin is manufactured by reacting <strong>2-hydroxybenzoic acid</strong> (salicylic acid) with <strong>ethanoic anhydride</strong> at 90°C.<br/><br/><strong>Why use ethanoic anhydride instead of ethanoyl chloride?</strong><br/>• <strong>Cheaper:</strong> Ethanoic anhydride costs less.<br/>• <strong>Safer:</strong> It is less corrosive and reacts slower with water.<br/>• <strong>No toxic fumes:</strong> It produces ethanoic acid rather than dangerous, corrosive hydrogen chloride fumes.'
      },
      terms: ['Aspirin']
    },
"""

text = text.replace(target, replacement)

with open('src/data/seedNotes/chemistry/note_4_15_6.js', 'w') as f:
    f.write(text)

print("Patch applied")