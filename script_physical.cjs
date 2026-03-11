const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_15_6.js';
let content = fs.readFileSync(file, 'utf8');

const anchorIndex = content.indexOf('    // ── Reactivity');
if (anchorIndex !== -1) {
  const newSection = `    // ── Physical Properties ──────────────────────────────────────────────────
    {
      id: 'h-acyl-physical',
      type: 'heading',
      data: { text: 'Physical Properties', level: 3 }
    },
    {
      id: 'list-acyl-physical',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '**Appearance & Smell:** Ethanoyl chloride is a colourless, fuming liquid. It has a strong smell that is a mixture of vinegar (ethanoic acid) and the acrid stench of hydrogen chloride gas.',
          '**Fuming:** The fumes (and smell) occur because acyl chlorides react vigorously with trace water vapour in the air to form HCl fumes and the corresponding carboxylic acid.',
          '**Boiling Points:** They have dipole-dipole attractions and London dispersion forces, but **no hydrogen bonding** (as they lack H attached to O, N, or F). Consequently, their boiling points are higher than similar-sized alkanes but much lower than their parent carboxylic acids (which do form hydrogen bonds).',
          '**Solubility:** Acyl chlorides do not simply "dissolve" in water—they react violently with it instead, so simple aqueous solutions cannot be made.'
        ]
      }
    },
    {
      id: 'callout-methanoyl-chloride',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'The unstable Methanoyl Chloride',
        text: 'Methanoyl chloride (HCOCl) is almost never encountered in the lab because it is highly unstable. At room temperature, it spontaneously decomposes into carbon monoxide (CO) and hydrogen chloride (HCl).'
      }
    },

`;
  content = content.substring(0, anchorIndex) + newSection + content.substring(anchorIndex);
  
  // also update that table in the structure section
  content = content.replace("['Methanoyl chloride',", "['Methanoyl chloride*',");
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success!");
} else {
  console.log("Failed to find anchor!");
}
