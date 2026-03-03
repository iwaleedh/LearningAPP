const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/seedNotes/chemistry');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && (f.startsWith('note_1_') || f.startsWith('note_2_') || f.startsWith('note_3_')));

let html = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; background: #e5e7eb; padding: 20px; }
        .card { 
            margin-bottom: 20px; 
            padding: 20px; 
            background: white; 
            border-radius: 8px; 
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); 
        }
        .card h3 { margin-top: 0; color: #4f46e5; }
        .svg-container {
            border: 1px dashed red;
            background: #fff;
            position: relative;
        }
    </style>
</head>
<body>
    <h1>WCH11-WCH13 SVG Viewer</h1>
`;

for (const f of files) {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    // Match the SVG blocks
    const regex = /<svg[\s\S]*?<\/svg>/g;
    const matches = [...code.matchAll(regex)];

    if (matches.length > 0) {
        html += `<div class="card">
      <h3>File: ${f} (${matches.length} SVGs)</h3>`;
        for (const m of matches) {
            html += `<div class="svg-container">${m[0]}</div><br/>`;
        }
        html += `</div>`;
    }
}

html += '</body></html>';
fs.writeFileSync(path.join(__dirname, '../public/svg-test.html'), html);
console.log('Extraction complete, saved to public/svg-test.html');
