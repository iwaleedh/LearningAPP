const fs = require('fs');
const file = 'src/data/seedNotes/biology/note_2_4_4.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace("blockId: 'p-sustainability',", "blockId: 'list-sustainability',");
fs.writeFileSync(file, content);
