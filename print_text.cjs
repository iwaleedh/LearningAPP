const { note_chemistry_1_1_0 } = require('./src/data/seedNotes/chemistry/note_1_1_0.js');
note_chemistry_1_1_0.blocks.forEach(b => {
  if (b.type !== 'svg') {
    console.log(`[${b.type}] ${b.id}`);
    console.log(JSON.stringify(b.data, null, 2));
    console.log('-'.repeat(40));
  }
});
