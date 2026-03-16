const fs = require('fs');
let code = fs.readFileSync('script_gen.js', 'utf8');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');
fs.writeFileSync('script_gen.js', code);
