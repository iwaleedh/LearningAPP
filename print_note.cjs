const { note_chemistry_1_1_0 } = require('./src/data/seedNotes/chemistry/note_1_1_0.js');
console.log(JSON.stringify(note_chemistry_1_1_0.blocks.map(b => b.type + ' ' + b.id), null, 2));
