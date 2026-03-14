const fs = require('fs');
const index = fs.readFileSync('src/data/seedNotes/index.js', 'utf8');
const subjects = ['biology', 'chemistry', 'physics'];
let toDelete = [];
subjects.forEach(subject => {
  const dir = 'src/data/seedNotes/' + subject;
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
    files.forEach(f => {
      const p = f.replace('.js', '');
      if (!index.includes(p)) {
        toDelete.push(dir + '/' + f);
      }
    });
  }
});
console.log('Found ' + toDelete.length + ' unmapped files.');
if (toDelete.length > 0) {
  // toDelete.forEach(f => fs.unlinkSync(f));
  // console.log('Deleted.');
  console.log(toDelete);
}
