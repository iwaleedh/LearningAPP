import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/data/seedNotes/chemistry/note_5_*.js');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<rect[^>]*fill="([^"]+)"[^>]*>/g);
  if (match) {
    match.forEach(m => {
        const fill = m.match(/fill="([^"]+)"/)[1];
        if (fill.toLowerCase() === '#ffffff' || fill.toLowerCase() === '#fff' || fill.toLowerCase() === 'white') {
           console.log(`White background found in ${file}: ${m}`);
        }
    });
  }
}
console.log('Check finished');
