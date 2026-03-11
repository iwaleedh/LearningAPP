const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_15_7.js';
let data = fs.readFileSync(file, 'utf8');

data = data.replace(/\{\s*id: 'cue-tlc',\s*blockId: 'list-tlc-adsorption',\s*prompt: 'Explain the mechanism by which Thin Layer Chromatography \(TLC\) separates polar from non-polar molecules\.'\s*},\s*\{\s*id: 'cue-tlc',/, "{ id: 'cue-tlc',");
fs.writeFileSync(file, data);
