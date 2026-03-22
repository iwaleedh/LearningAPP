const fs = require('fs');

function insertSVG(filePath, afterId, svgBlock) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(svgBlock.substring(0, 40))) { console.log('Already in ' + filePath); return; }
  
  const searchStr = `id: '${afterId}'`;
  let idx = content.indexOf(searchStr);
  if (idx === -1) { console.error('Not found: ' + afterId + ' in ' + filePath); return; }
  
  let nextBlock = content.indexOf('\n        {\n', idx);
  if (nextBlock === -1) nextBlock = content.indexOf('\n        { type: ', idx + searchStr.length);
  if (nextBlock === -1) nextBlock = content.indexOf('\n    ],\n    recall:', idx);
  
  if (nextBlock !== -1) {
    const finalContent = content.substring(0, nextBlock) + '\n        ' + svgBlock + content.substring(nextBlock);
    fs.writeFileSync(filePath, finalContent);
    console.log('Successfully injected into ' + filePath + ' after ' + afterId);
  } else {
    console.error('Failed to find boundary in ' + filePath);
  }
}

const svgScn = `{ type: 'svg', id: 'svg-scn-test', data: { caption: 'Iron(III) Thiocyanate Complex Formation', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 130" width="100%" height="auto"><defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker><marker id="arr-rev-L" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 10 0 L 0 5 L 10 10 z" fill="#64748b" /></marker><marker id="arr-rev-R" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:16px;fill:#1e293b;text-anchor:middle;} .eq{stroke:#64748b;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .charge{font-weight:bold;fill:#ef4444;}</style><g transform="translate(130, 50)"><rect x="-70" y="-30" width="140" height="40" fill="#fef08a" rx="4" /><text x="0" y="-5">[Fe(H₂O)₆]<tspan class="charge" dy="-10" font-size="12px">3+</tspan></text><text x="0" y="30" class="lbl">Yellow-brown ppt/soln</text></g><text x="230" y="45" font-weight="bold">+</text><g transform="translate(280, 50)"><text x="0" y="-5">SCN<tspan class="charge" dy="-10" font-size="12px">-</tspan></text><text x="0" y="30" class="lbl">Thiocyanate</text></g><path class="eq" d="M 325 35 L 365 35" marker-end="url(#arr-rev-R)" /><path class="eq" d="M 365 45 L 325 45" marker-end="url(#arr-rev-L)" /><g transform="translate(450, 50)"><rect x="-70" y="-30" width="140" height="40" fill="#f87171" rx="4" /><text x="0" y="-5" fill="#7f1d1d" font-weight="bold">[Fe(SCN)(H₂O)₅]<tspan class="charge" dy="-10" font-size="12px">2+</tspan></text><text x="0" y="30" class="lbl">Blood-red solution</text></g></svg>' } },`;

insertSVG('src/data/seedNotes/chemistry/note_6_6A_2.js', 'list-scn-test', svgScn);
