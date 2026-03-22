const fs = require('fs');
const glob = require('glob');

const unit = process.argv[2] || '1';

const files = glob.sync(`src/data/seedNotes/mathematics/note_${unit}_*.js`);
files.sort((a,b) => {
    const pA = a.match(/_(\d+)_(\d+)_(\d+)\.js$/);
    const pB = b.match(/_(\d+)_(\d+)_(\d+)\.js$/);
    if (!pA || !pB) return 0;
    if (parseInt(pA[1]) !== parseInt(pB[1])) return parseInt(pA[1]) - parseInt(pB[1]);
    if (parseInt(pA[2]) !== parseInt(pB[2])) return parseInt(pA[2]) - parseInt(pB[2]);
    return parseInt(pA[3]) - parseInt(pB[3]);
});

let outText = '';
for (const file of files) {
    const code = fs.readFileSync(file, 'utf8');
    const match = code.match(/type:\s*['"]objective['"][\s\S]*?text:\s*['"`](.*?)['"`]/);
    if (match) {
        let text = match[1].replace(/<\/?[^>]+(>|$)/g, "").trim();
        outText += `${file}: ${text}\n`;
    }
}

// split into two
const lines = outText.split('\n').filter(l => l.trim());
const mid = Math.floor(lines.length / 2);
fs.writeFileSync(`titles_math_u${unit}_p1.txt`, lines.slice(0, mid).join('\n'));
fs.writeFileSync(`titles_math_u${unit}_p2.txt`, lines.slice(mid).join('\n'));
console.log(`Generated titles_math_u${unit}_p1.txt (${mid}) and titles_math_u${unit}_p2.txt (${lines.length - mid})`);
