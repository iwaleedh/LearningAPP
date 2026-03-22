const fs = require('fs');
let content = fs.readFileSync('src/data/seedNotes/chemistry/note_1_3_0.js', 'utf8');
console.log(content.includes('presentationSlides:'));
console.log(content.match(/\s*],\s*(presentationSlides:|recall:)/) !== null);

// A sure-fire way to inject into the blocks array before the end:
content = content.replace(/(\{\s*id:\s*'c1',)/, '    { id: "test", type: "test" },\n    $1');
console.log(content.includes('test'));
