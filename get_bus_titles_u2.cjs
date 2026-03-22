const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/data/seedNotes/business/note_2_*_*.js');
for (const f of files) {
    const c = fs.readFileSync(f, 'utf-8');
    const m = c.match(/type:\s*['"]objective['"],\s*data:\s*\{\s*text:\s*['"]([^'"]+)['"]/);
    if (m) {
        console.log(`${f}: ${m[1]}`);
    } else {
        const m2 = c.match(/"type":\s*"objective",\s*"data":\s*\{\s*"text":\s*"([^"\\]*(?:\\.[^"\\]*)*)"/);
        if (m2) {
             console.log(`${f}: ${m2[1]}`);
        } else {
             console.log(`${f}: Unknown`);
        }
    }
}
