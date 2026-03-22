const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/data/seedNotes/business/note_1_*_*.js');
for (const f of files) {
    const c = fs.readFileSync(f, 'utf-8');
    const m = c.match(/data:\s*\{\s*text:\s*['"]([^'"]+)['"]/);
    if (m) {
        console.log(`${f}: ${m[1]}`);
    } else {
        console.log(`${f}: Unknown`);
    }
}
