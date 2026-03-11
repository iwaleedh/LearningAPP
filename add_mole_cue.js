const fs = require('fs');

const file = 'src/data/seedNotes/chemistry/note_4_13_3.js';
let content = fs.readFileSync(file, 'utf8');

const newCue = `      {
        id: 'cue-mole-frac',
        blockId: 'co-mole-fraction-proof',
        prompt: 'Use mole fractions ($p = xP$) in the Kp expression for the Haber process to prove mathematically why an increase in total pressure shifts the position of equilibrium to the right.'
      },
`;

if (!content.includes('cue-mole-frac')) {
  // insert before 'ev-1' or at the end of cues
  content = content.replace(/(      \{\s*id:\s*'cue-5',[\s\S]*?\},)/, '$1\n' + newCue);
  fs.writeFileSync(file, content);
  console.log('Update successful');
} else {
  console.log('Block already exists');
}
