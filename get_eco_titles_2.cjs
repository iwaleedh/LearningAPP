const fs = require('fs');
const path = require('path');
const p = 'src/data/seedNotes/economics';
let titles = [];
fs.readdirSync(p).filter(f => f.match(/^note_economics_1_[23]_\d+\.js$/)).forEach(f => {
    let html = fs.readFileSync(path.join(p, f), 'utf-8');
    let titleMatch = html.match(/type:\s*'heading'.*?text:\s*'([^']+)'/s);
    if(titleMatch) titles.push(f + ': ' + titleMatch[1]);
});
console.log(titles.join('\n'));
