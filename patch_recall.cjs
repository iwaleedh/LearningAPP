const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_5_16_5.js';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `    { id: 'cue-6', blockId: 'callout-alt-method', prompt: 'What is the exam-safe method for calculating E°cell? Why should you avoid reversing signs?' },
  ],`;
const newStr = `    { id: 'cue-6', blockId: 'callout-alt-method', prompt: 'What is the exam-safe method for calculating E°cell? Why should you avoid reversing signs?' },
    { id: 'cue-7', blockId: 'callout-limit-cond-cr2o7', prompt: 'Potassium dichromate(VI) cannot oxidise chloride ions under standard conditions. Explain why it can when concentrated HCl is used.' },
  ],`;

if (content.includes(targetStr)) {
  fs.writeFileSync(file, content.replace(targetStr, newStr));
  console.log('Patched correctly');
} else {
  console.log('Target string not found!');
}
