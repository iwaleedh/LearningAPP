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

// 1. Deprotonation Mechanism
const svgDeprot = `{ type: 'svg', id: 'svg-deprotonation-mechanism', data: { caption: 'Deprotonation of Hexaaqua ions by OH⁻', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 160" width="100%" height="auto"><defs><marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;text-anchor:middle;} .bond{stroke:#1e293b;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .title{font-size:14px;font-weight:bold;fill:#4338ca;} .charge{font-weight:bold;fill:#ef4444;}</style><g transform="translate(100, 70)"><text x="0" y="0" font-size="18px">M</text><text x="35" y="0">OH₂</text><path class="bond" d="M 15 -5 L 22 -5" /><text x="-35" y="0">H₂O</text><path class="bond" d="M -15 -5 L -22 -5" /><text x="0" y="35">OH₂</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="-35">H₂O</text><path class="bond" d="M 0 -15 L 0 -22" /><text x="25" y="-35" class="charge">2+</text><text x="0" y="70" class="lbl">[M(H₂O)₆]²⁺ (Soluble)</text></g><path d="M 180 65 L 240 65" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)" /><text x="210" y="55" font-size="12px" fill="#ef4444">+ 2OH⁻</text><g transform="translate(320, 70)"><text x="0" y="0" font-size="18px">M</text><text x="35" y="0">OH</text><path class="bond" d="M 15 -5 L 22 -5" /><text x="-35" y="0">HO</text><path class="bond" d="M -15 -5 L -22 -5" /><text x="0" y="35">OH₂</text><path class="bond" d="M 0 5 L 0 15" /><text x="0" y="-35">H₂O</text><path class="bond" d="M 0 -15 L 0 -22" /><text x="25" y="-35" font-weight="bold" fill="#10b981">0</text><text x="0" y="70" class="lbl">[M(H₂O)₄(OH)₂]↓ (Precipitate)</text></g><path d="M 390 65 L 430 65" stroke="#64748b" stroke-width="2" marker-end="url(#arr1)" /><text x="410" y="55" font-size="12px" fill="#ef4444">+ 2H₂O</text><text x="260" y="20" class="title">OH⁻ removes H⁺ from H₂O ligands (Base behaviour)</text><g transform="translate(500, 70)"><text x="0" y="-10" font-size="18px" fill="#3b82f6">H₂O</text><text x="0" y="15" font-size="18px" fill="#3b82f6">H₂O</text></g></svg>' } },`;

// 2. Carbonate Reactions
const svgCarbonate = `{ type: 'svg', id: 'svg-carbonate-reactions', data: { caption: 'Reaction of Carbonate ions with 2+ vs 3+ Hexaaqua Ions', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="100%" height="auto"><defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs><style>text{font-family:sans-serif;font-size:14px;fill:#1e293b;text-anchor:middle;} .box{fill:none;stroke:#cbd5e1;stroke-width:2;} .lbl{font-size:12px;fill:#64748b;} .title{font-size:16px;font-weight:bold;fill:#4338ca;} .col-ppt{fill:#10b981;font-weight:bold;} .col-gas{fill:#3b82f6;font-weight:bold;}</style><rect x="10" y="10" width="580" height="105" rx="6" class="box" /><text x="300" y="30" class="title">M³⁺ Ions (Highly Acidic)</text><text x="120" y="65">2[M(H₂O)₆]³⁺ (aq)</text><text x="210" y="65" font-weight="bold">+</text><text x="260" y="65">3CO₃²⁻ (aq)</text><path d="M 310 60 L 350 60" stroke="#64748b" stroke-width="2" marker-end="url(#arr2)" /><text x="440" y="55" class="col-ppt">2[M(H₂O)₃(OH)₃]↓</text><text x="440" y="75" class="lbl">Hydroxide Precipitate</text><text x="510" y="55" font-weight="bold">+</text><text x="545" y="55" class="col-gas">3CO₂↑</text><text x="545" y="75" class="lbl">Effervescence</text><rect x="10" y="125" width="580" height="105" rx="6" class="box" /><text x="300" y="145" class="title">M²⁺ Ions (Less Acidic)</text><text x="120" y="180">[M(H₂O)₆]²⁺ (aq)</text><text x="210" y="180" font-weight="bold">+</text><text x="260" y="180">CO₃²⁻ (aq)</text><path d="M 310 175 L 350 175" stroke="#64748b" stroke-width="2" marker-end="url(#arr2)" /><text x="440" y="170" class="col-ppt">MCO₃↓</text><text x="440" y="190" class="lbl">Carbonate Precipitate</text><text x="510" y="170" font-weight="bold">+</text><text x="545" y="170" fill="#64748b">6H₂O</text><text x="545" y="190" class="lbl">No Gas</text></svg>' } },`;

insertSVG('src/data/seedNotes/chemistry/note_6_6A_2.js', 'table-naoh-tests', svgDeprot);
insertSVG('src/data/seedNotes/chemistry/note_6_6A_2.js', 'table-carbonate-tests', svgCarbonate);
