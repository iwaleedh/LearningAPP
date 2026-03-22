const fs = require('fs');
const path = './src/data/seedNotes/chemistry/note_2_10_6.js';

let content = fs.readFileSync(path, 'utf8');

const svgCode = `            {
                id: 'svg-separating-funnel',
                type: 'svg',
                data: {
                    caption: 'Using a separating funnel to remove aqueous impurities and collect the organic layer.',
                    svg: '<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="orgLayer" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#fdba74"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient><linearGradient id="aqLayer" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><g transform="translate(100, 30)"><path d="M 0 50 C 40 50, 70 80, 70 140 L 40 250 L 40 300 L 20 300 L 20 250 L -10 140 C -10 80, 20 50, 60 50 Z" fill="none" stroke="#64748b" stroke-width="4"/><path d="M -8 110 C 20 110, 40 100, 68 110 L 40 250 L 20 250 L -8 140 Z" fill="url(#aqLayer)" opacity="0.8"/><path d="M -8 140 C 20 140, 40 130, 68 140 L 40 250 L 20 250 L -8 140 Z" fill="url(#orgLayer)" opacity="0.8"/><path d="M 15 280 L 45 280 L 45 290 L 15 290 Z" fill="#475569"/><circle cx="30" cy="285" r="5" fill="#f8fafc"/></g><text x="210" y="160" font-family="sans-serif" font-size="14" fill="#3b82f6">Aqueous layer (impurities)</text><line x1="170" y1="155" x2="200" y2="155" stroke="#3b82f6" stroke-width="2"/><text x="210" y="210" font-family="sans-serif" font-size="14" fill="#d97706">Organic layer (product)</text><line x1="150" y1="205" x2="200" y2="205" stroke="#d97706" stroke-width="2"/><text x="210" y="320" font-family="sans-serif" font-size="14" fill="#475569">Glass tap to release layers</text><line x1="140" y1="315" x2="200" y2="315" stroke="#475569" stroke-width="2"/><g transform="translate(100, 350)"><path d="M 10 0 L 50 0 L 60 60 L 0 60 Z" fill="none" stroke="#64748b" stroke-width="3"/></g><text x="30" y="20" font-family="sans-serif" font-size="16" font-weight="bold" fill="#333">Separating Funnel</text></svg>'
                }
            },`;

content = content.replace(/(id:\s*'list-purification',\s*\n\s*type:\s*'list',\s*\n\s*data:\s*\{[\s\S]*?\]\s*\n\s*\}\s*\n\s*\}),/m, '$1\n' + svgCode);

fs.writeFileSync(path, content);
console.log('Injected safely');
