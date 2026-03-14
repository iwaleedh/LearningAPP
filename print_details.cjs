const { note_chemistry_1_1_0 } = require('./src/data/seedNotes/chemistry/note_1_1_0.js');
note_chemistry_1_1_0.blocks.forEach(b => {
  if (b.type === 'comparisonTable' || b.type === 'list' || b.type === 'callout') {
    console.log(b.id, JSON.stringify(b.data, null, 2));
  }
});
