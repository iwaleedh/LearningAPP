import fs from 'fs';
import glob from 'glob';

const files = glob.sync('src/data/seedNotes/chemistry/note_5_*.js');
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('<svg')) {
    console.log(`SVG found in ${file}`);
  }
}
