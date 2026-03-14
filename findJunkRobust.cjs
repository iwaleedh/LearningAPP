const fs = require('fs');
const index = fs.readFileSync('src/data/seedNotes/index.js', 'utf8');

const subjects = ['biology', 'chemistry', 'physics'];
let junkFiles = [];

subjects.forEach(subject => {
  const dir = 'src/data/seedNotes/' + subject;
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  
  files.forEach(f => {
    // E.g. 'note_biology_1_3_3'
    const objName = f.replace('note_', 'note_' + subject + '_').replace('.js', '');
    if (!index.includes(objName)) {
      junkFiles.push(dir + '/' + f);
    }
  });
});

console.log('Junk files:', junkFiles.length);
if (junkFiles.length > 0) {
  junkFiles.forEach(f => fs.unlinkSync(f));
  console.log('Deleted robust junk files.');
}
