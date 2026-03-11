const fs = require('fs');
let file = fs.readFileSync('src/data/seedNotes/chemistry/note_5_19_0.js', 'utf8');

const target1 = `    {
      id: 'h-arylamine-names',
      type: 'heading',
      data: { text: 'Arylamine Nomenclature', level: 2 }
    },`;

const replacement1 = `    {
      id: 'h-amine-physical-props',
      type: 'heading',
      data: { text: 'Physical Properties of Amines', level: 2 }
    },
    {
      id: 'callout-amine-bp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Boiling Points of Amines',
        text: 'Primary > Secondary > Tertiary (for isomers). Primary and secondary amines can form hydrogen bonds with each other (they have N−H bonds). Tertiary amines lack N−H bonds, so they cannot form intermolecular hydrogen bonds, resulting in much lower boiling points.'
      }
    },
    {
      id: 'list-amine-physical-details',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Boiling points increase with chain length due to greater London dispersion forces' },
          { text: 'Primary amines have slightly higher boiling points than secondary isomers because the terminal N creates a stronger permanent dipole' },
          { text: 'Solubility: All small amines (1°, 2°, 3°) are very soluble in water because the nitrogen lone pair can form hydrogen bonds with water molecules' },
          { text: 'Solubility decreases as hydrocarbon chain length increases (non-polar chains disrupt water\\'s hydrogen bonds)' },
          { text: 'Smell: Small amines smell like ammonia; larger amines smell fishy or of decay (e.g., trimethylamine smells like decaying flesh)' }
        ]
      }
    },
    {
      id: 'h-arylamine-names',
      type: 'heading',
      data: { text: 'Arylamine Nomenclature', level: 2 }
    },`;

if (file.includes(target1)) {
  file = file.replace(target1, replacement1);
  console.log("Replaced target1");
} else {
  console.log("Target1 not found!");
}

const target2 = `          { text: 'Tertiary amine: R₃N (e.g., N,N−dimethylmethanamine)', checked: false },
          { text: 'Amide: RCONH₂ — all solids except methanamide (liquid); soluble in water via H-bonding', checked: false },`;

const replacement2 = `          { text: 'Tertiary amine: R₃N (e.g., N,N−dimethylmethanamine)', checked: false },
          { text: 'Amine properties: 1°/2° form H-bonds (higher bp); 3° cannot. Small amines are water-soluble', checked: false },
          { text: 'Amide: RCONH₂ — all solids except methanamide (liquid); soluble in water via H-bonding', checked: false },`;

if (file.includes(target2)) {
  file = file.replace(target2, replacement2);
  console.log("Replaced target2");
} else {
  console.log("Target2 not found!");
}

const target3 = `    summaryText: 'Alkylamines: primary RNH₂, secondary R₂NH, tertiary R₃N (−amine suffix). Arylamines: N on benzene ring (phenylamine). Amides: RCONH₂ — all solids EXCEPT methanamide (liquid); water-soluble via H-bonding (O and N both electronegative). Amino acids: H₂N−CHR−COOH (α-amino acid); IUPAC = "X-amino[carboxylic acid]" e.g. 2-aminoethanoic acid (glycine).',`;

const replacement3 = `    summaryText: 'Alkylamines: 1° RNH₂, 2° R₂NH, 3° R₃N (−amine). Bp: 1° > 2° > 3° (3° cannot H-bond). Small amines water-soluble. Arylamines: N on benzene. Amides: RCONH₂ — all solids EXCEPT methanamide (liquid). Amino acids: H₂N−CHR−COOH; IUPAC = "X-amino[carboxylic acid]".',`;

if (file.includes(target3)) {
  file = file.replace(target3, replacement3);
  console.log("Replaced target3");
} else {
  console.log("Target3 not found!");
}

const target4 = `      { id: 'cue-2', blockId: 'p-arylamine-1', prompt: 'What is phenylamine, and how does arylamine naming differ from alkylamine naming?' },`;

const replacement4 = `      { id: 'cue-amine-bp', blockId: 'callout-amine-bp', prompt: 'Why do primary amines have higher boiling points than their tertiary isomers?' },
      { id: 'cue-2', blockId: 'p-arylamine-1', prompt: 'What is phenylamine, and how does arylamine naming differ from alkylamine naming?' },`;

if (file.includes(target4)) {
  file = file.replace(target4, replacement4);
  console.log("Replaced target4");
} else {
  console.log("Target4 not found!");
}

fs.writeFileSync('src/data/seedNotes/chemistry/note_5_19_0.js', file);
