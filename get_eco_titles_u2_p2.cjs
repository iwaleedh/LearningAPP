const fs = require('fs');
const glob = require('glob');
const files = glob.sync('src/data/seedNotes/economics/note_economics_2_{10,11,12}_*.js');
let out = '';
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let title = '';
  const match = content.match(/data:\s*\{\s*text:\s*'([^']+)',\s*level:\s*2\s*\}/);
  if (match) title = match[1];
  out += `${f}\nTitle: ${title}\n---\n`;
});
console.log(out);
