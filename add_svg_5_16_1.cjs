const fs = require('fs');

function insertSVG(filePath, afterId, svgBlock) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const searchStr = `id: '${afterId}'`;
  const blockStart = content.indexOf(searchStr);
  if (blockStart === -1) {
    console.error(`Could not find block with id ${afterId} in ${filePath}`);
    return;
  }
  
  // Find the closing brace of the block, basically the next item.
  // A safe way is to find the next `{` or `// ──` after `blockStart`
  let nextBlockIdx = content.indexOf("{", blockStart + 20);
  
  if (nextBlockIdx !== -1) {
    const finalContent = content.substring(0, nextBlockIdx) + svgBlock + "\n    " + content.substring(nextBlockIdx);
    fs.writeFileSync(filePath, finalContent);
    console.log(`Successfully added SVG to ${filePath}`);
  } else {
    console.log(`Failed to find split index in ${filePath}`);
  }
}

const svgLeChatelier = `{
      type: 'svg',
      id: 'svg-le-chatelier-conc',
      data: {
        caption: "Le Chatelier's Principle and Electrode Potential",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="100%" height="auto"><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" /></marker><marker id="arrowRed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker></defs><style>text{font-family:sans-serif;fill:currentColor} .heading{font-weight:bold;font-size:16px;} .sub{font-size:12px;} .eq{font-size:18px;font-weight:bold;} </style><rect x="10" y="10" width="480" height="180" rx="10" fill="none" stroke="#cbd5e1" stroke-width="2" /><text x="250" y="40" text-anchor="middle" class="heading">Mⁿ⁺(aq) + ne⁻ ⇌ M(s)</text><rect x="30" y="70" width="200" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><text x="130" y="100" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Increase [Mⁿ⁺]</text><path d="M 130 110 L 130 130" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow)" /><text x="130" y="150" text-anchor="middle" fill="#1e3a8a" class="sub" font-weight="bold">Equilibrium shifts RIGHT</text><text x="130" y="165" text-anchor="middle" fill="#1e3a8a" class="sub">E becomes more positive</text><rect x="270" y="70" width="200" height="100" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="2" /><text x="370" y="100" text-anchor="middle" font-weight="bold" fill="#7f1d1d">Decrease [Mⁿ⁺]</text><path d="M 370 110 L 370 130" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)" /><text x="370" y="150" text-anchor="middle" fill="#7f1d1d" class="sub" font-weight="bold">Equilibrium shifts LEFT</text><text x="370" y="165" text-anchor="middle" fill="#7f1d1d" class="sub">E becomes less positive</text></svg>'
      }
    },`;

insertSVG('src/data/seedNotes/chemistry/note_5_16_1.js', 'p-conc-2', svgLeChatelier);
