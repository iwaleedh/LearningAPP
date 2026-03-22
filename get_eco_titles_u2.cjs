const fs = require('fs');
const path = require('path');
const p = 'src/data/seedNotes/economics';
let titles = [];
fs.readdirSync(p).filter(f => f.match(/^note_economics_2_\d+_\d+\.js$/)).sort((a,b) => {
    let partsA = a.split('_');
    let partsB = b.split('_');
    return parseInt(partsA[3]) - parseInt(partsB[3]) || parseInt(partsA[4]) - parseInt(partsB[4]);
}).forEach(f => {
    let html = fs.readFileSync(path.join(p, f), 'utf-8');
    let titleMatch = html.match(/type:\s*'heading'.*?text:\s*'([^']+)'/s);
    if(titleMatch) titles.push(f + ': ' + titleMatch[1]);
});
console.log(titles.join('\n'));
