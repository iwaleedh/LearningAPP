
const fs = require('fs');
for (let i = 9; i <= 17; i++) {
  try {
    let raw = fs.readFileSync('src/data/seedNotes/biology/note_2_4_' + i + '.js', 'utf8');
    let title = raw.match(/text:\s*'(.*?)',\s*level:\s*2/);
    console.log('note_2_4_' + i + '.js : ' + (title ? title[1] : ''));
  } catch(e){}
}

