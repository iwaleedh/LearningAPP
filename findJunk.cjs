const fs = require('fs');
const index = fs.readFileSync('src/data/seedNotes/index.js', 'utf8');

function checkJunk(subject) {
  const dir = 'src/data/seedNotes/' + subject;
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  const junk = [];
  for (let f of files) {
    if (!index.includes(f.replace('.js', ''))) {
      junk.push(`${subject}/${f}`);
    }
  }
  console.log(subject, 'junk files:', junk.length);
  if (junk.length > 0) {
    console.log(junk.join('\n'));
  }
}
checkJunk('biology');
checkJunk('chemistry');
checkJunk('physics');
