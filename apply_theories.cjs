const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_14_0.js';
let content = fs.readFileSync(file, 'utf8');

// 1. Insert Arrhenius blocks before Brønsted heading
const arrheniusBlocks = `    {
      id: 'h-arrhenius',
      type: 'heading',
      data: { text: 'The Arrhenius Theory', level: 2 }
    },
    {
      id: 'list-arrhenius',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Acid</strong> = produces hydrogen ions (H⁺) in solution',
          '<strong>Base</strong> = produces hydroxide ions (OH⁻) in solution',
          'Neutralisation occurs because H⁺ react with OH⁻ to produce water.'
        ]
      }
    },
    {
      id: 'callout-limit-arrhenius',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Limitations of the Arrhenius Theory',
        text: 'The theory fails to explain gas-phase reactions and bases that do not contain hydroxide ions. For example, ammonia (NH₃) gas reacts directly with HCl gas to form solid ammonium chloride (NH₄Cl), an acid-base reaction that occurs entirely without water or hydroxide ions.'
      }
    },`;

// 2. Insert Lewis blocks before checklist
const lewisBlocks = `    {
      id: 'h-lewis',
      type: 'heading',
      data: { text: 'The Lewis Theory', level: 2 }
    },
    {
      id: 'list-lewis',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Lewis Acid</strong> = electron pair <strong>acceptor</strong> (must have an empty orbital)',
          '<strong>Lewis Base</strong> = electron pair <strong>donor</strong> (must have a lone pair of electrons)'
        ]
      }
    },
    {
      id: 'p-lewis-bl',
      type: 'paragraph',
      data: {
        text: 'The Lewis theory is the most broad and general definition. Every Brønsted-Lowry base is also a Lewis base because it uses a lone pair to accept a proton. However, Lewis acids extend far beyond H⁺. Molecules with empty orbitals, like BF₃ or AlCl₃, act as Lewis acids by accepting lone pairs to form co-ordinate (dative covalent) bonds.'
      }
    },
    {
      id: 'callout-lewis-hcl',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Lewis Acids vs Brønsted Acids',
        text: 'While the Lewis theory is incredibly powerful in organic chemistry, current A-Level syllabuses focus mainly on the Brønsted-Lowry definition. However, you must recognise that a species like BF₃ behaves as an acid (Lewis acid) even though it has no hydrogen ions to donate.'
      }
    },`;

// Check and replace
if (content.includes("id: 'h-brønsted-def'") && !content.includes("id: 'h-arrhenius'")) {
    content = content.replace(/({\s*id: 'h-brønsted-def',)/, arrheniusBlocks + '\n    $1');
}

if (content.includes("id: 'checklist-brønsted'") && !content.includes("id: 'h-lewis'")) {
    content = content.replace(/({\s*id: 'checklist-brønsted',)/, lewisBlocks + '\n    $1');
}

// Update cues
const newCues = `      {
        id: 'cue-6',
        blockId: 'callout-limit-arrhenius',
        prompt: 'Why is the Arrhenius theory considered limited compared to Brønsted-Lowry? Give an example reaction.'
      },
      {
        id: 'cue-7',
        blockId: 'list-lewis',
        prompt: 'Define an acid and a base according to the Lewis theory.'
      }
    ]`;

if (!content.includes('cue-6') && content.includes('id: \'cue-5\'')) {
    content = content.replace(/      \}\n    \]/, '      },\n' + newCues);
}

// Update summaryText
const newSummary = `summaryText: 'Arrhenius: Acid=H⁺ in solution, Base=OH⁻ in solution. Brønsted-Lowry: Acid=H⁺ donor, Base=H⁺ acceptor. Lewis: Acid=e⁻ pair acceptor, Base=e⁻ pair donor. Amphoteric species behave as both acid and base depending on the environment.',`;
content = content.replace(/summaryText: '[^']+',/, newSummary);

fs.writeFileSync(file, content);
console.log('Successfully added Arrhenius and Lewis theories!');