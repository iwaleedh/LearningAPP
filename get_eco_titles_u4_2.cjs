const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/data/seedNotes/economics/note_economics_4_{21,22,23}_*.js');
for (const f of files) {
    const c = fs.readFileSync(f, 'utf-8');
    const m = c.match(/data:\s*\{\s*text:\s*['"]([^'"]+)['"]/);
    if (m) {
        console.log(`${f}: ${m[1]}`);
    } else {
        console.log(`${f}: Unknown`);
    }
}
