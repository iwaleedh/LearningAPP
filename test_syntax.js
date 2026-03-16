import { readdir } from 'fs/promises';
import { resolve } from 'path';
const dir = './src/data/seedNotes/physics/';
const files = (await readdir(dir)).filter(f => f.startsWith('note_physics_5_') && f.endsWith('.js'));
let ok = 0, fail = 0;
for (const f of files) {
  try {
    await import('file://' + resolve(dir + f));
    ok++;
  } catch(e) {
    console.error('FAIL:', f, '-', e.message.split('\n')[0]);
    fail++;
  }
}
console.log('\nResult: ' + ok + ' OK, ' + fail + ' FAILED out of ' + files.length + ' files');
