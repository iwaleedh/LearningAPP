const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_5_16_5.js';
let content = fs.readFileSync(file, 'utf8');

const targetRegex = /({ id: 'cue-6'.*?\},\n\s*)\]\, summaryText:/g;
const newStr = `$1    { id: 'cue-7', blockId: 'callout-limit-cond-cr2o7', prompt: 'Potassium dichromate(VI) cannot oxidise chloride ions under standard conditions. Explain why it can when concentrated HCl is used.' },\n  ], summaryText:`;

if (targetRegex.test(content)) {
  fs.writeFileSync(file, content.replace(targetRegex, newStr));
  console.log('Patched correctly!');
} else {
  console.log('Not found');
}
