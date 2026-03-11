const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_15_5.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Objective and title
content = content.replace(
  'four key reactions: reduction, neutralisation, halogenation, and esterification',
  'key reactions: reduction, neutralisation, halogenation, esterification, and decarboxylation'
);

content = content.replace(
  "data: { text: 'Four Key Reactions of Carboxylic Acids', level: 2 }",
  "data: { text: 'Key Reactions of Carboxylic Acids', level: 2 }"
);

content = content.replace(
  "text: 'For all four key reactions below",
  "text: 'For all the key reactions below"
);
content = content.replace(
  "any of these four reactions",
  "any of these reactions"
);

// 2. Summary Table heading / updates
content = content.replace(
  "data: { text: 'Summary: Four Key Reactions', level: 2 }",
  "data: { text: 'Summary: Key Reactions', level: 2 }"
);
content = content.replace(
  "Four key reactions of carboxylic acids — IAL Unit 4.",
  "Key reactions of carboxylic acids — IAL Unit 4."
);

content = content.replace(
  "['④ Esterification', 'Alcohol + conc. H₂SO₄ (cat.)', 'Heat, equilibrium (⇌)', 'Ester (RCOOR′) + H₂O']\n        ]",
  "['④ Esterification', 'Alcohol + conc. H₂SO₄ (cat.)', 'Heat, equilibrium (⇌)', 'Ester (RCOOR′) + H₂O'],\n          ['⑤ Decarboxylation', 'Soda lime (NaOH/CaO)', 'Heat with solid sodium salt', 'Alkane (R–H) + Na₂CO₃']\n        ]"
);

// 3. Inject new logic into table
const summaryIndex = content.indexOf("    // Summary table of all 4 reactions");
if (summaryIndex !== -1) {
  const newBlock = `    // Reaction 5: Decarboxylation
    {
      id: 'h-decarboxylation',
      type: 'heading',
      data: { text: 'Reaction 5 — Decarboxylation (using Soda Lime)', level: 3 }
    },
    {
      id: 'list-decarboxylation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**What is decarboxylation?** The –COOH or –COONa group is removed and replaced with a hydrogen atom, effectively shortening the carbon chain by losing CO₂.',
          '**Reagent:** Solid soda lime. (Soda lime is a mixture of sodium hydroxide and calcium oxide; it comes as white granules and is easier/safer to handle than solid NaOH).',
          'In equations, soda lime is almost always written simply as sodium hydroxide (NaOH).',
          '**Conditions:** The solid sodium salt of the carboxylic acid is mixed with solid soda lime and **heated** strongly.',
          '**Product:** An alkane (or a benzene ring if using benzoic acid) + sodium carbonate (Na₂CO₃).'
        ]
      }
    },
    {
      id: 'equation-decarbox',
      type: 'equation',
      data: {
        html: 'CH<sub>3</sub>COONa(s) + NaOH(s) → CH<sub>4</sub>(g) + Na<sub>2</sub>CO<sub>3</sub>(s)',
        caption: 'Sodium ethanoate + soda lime (treated as NaOH) → methane + sodium carbonate. This is a step-down reaction.'
      }
    },
    {
      id: 'callout-benzoic-decarbox',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Decarboxylating Acids directly',
        text: 'This reaction can also be done directly with certain solid carboxylic acids instead of their salts. For example, solid benzoic acid (C₆H₅COOH) heated with soda lime will produce benzene (C₆H₆).'
      }
    },

`;
  content = content.substring(0, summaryIndex) + newBlock + content.substring(summaryIndex);
  
  // Replace the things
  content = content.replace("    // Summary table of all 4 reactions", "    // Summary table of all reactions");
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Successfully replaced!");
} else {
  console.log("Could not find the index 'Summary table of all 4 reactions' :(");
}
