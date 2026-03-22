const fs=require('fs');
let c=fs.readFileSync('src/data/seedNotes/chemistry/note_3_3A_1.js','utf8');
c=c.replace(/(id:\s*'list-standard'[\s\S]*?\}\s*\},)/, `$1
        {
            id: 'svg-volumetric-flask',
            type: 'svg',
            data: {
                caption: 'Using a volumetric flask to prepare a standard solution. The bottom of the meniscus must sit exactly on the graduation mark at eye level.',
                svg: '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="flaskLiq" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><rect width="400" height="320" fill="#ffffff" rx="10"/><g transform="translate(120, 30)"><path d="M -18 20 L -18 120 C -50 140, -70 180, -70 230 C -70 280, -35 290, 0 290 C 35 290, 70 280, 70 230 C 70 180, 50 140, 18 120 L 18 20 Z" fill="#f8fafc" stroke="#64748b" stroke-width="4" stroke-linejoin="round"/><path d="M -15 100 L -15 120 C -48 140, -66 180, -66 230 C -66 280, -35 285, 0 285 C 35 285, 66 280, 66 230 C 66 180, 48 140, 15 120 L 15 100 Z" fill="url(#flaskLiq)" opacity="0.6"/><path d="M -15 100 Q 0 110 15 100" fill="none" stroke="#1d4ed8" stroke-width="2"/><line x1="-30" y1="100" x2="30" y2="100" stroke="#ef4444" stroke-width="2"/><text x="130" y="105" font-family="sans-serif" font-size="14" fill="#b91c1c" text-anchor="middle">Graduation mark</text><line x1="40" y1="100" x2="80" y2="100" stroke="#b91c1c" stroke-width="1"/><text x="0" y="220" font-family="sans-serif" font-size="20" fill="#94a3b8" font-weight="bold" text-anchor="middle">250 cm³</text><path d="M -20 0 L 20 0 L 18 20 L -18 20 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/><rect x="-25" y="-15" width="50" height="15" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="3"/></g><g transform="translate(250, 150)"><path d="M 0 0 C -20 -10, -20 -30, 0 -40 C 30 -20, 30 0, 0 0" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="0" cy="-20" r="5" fill="#333"/><text x="30" y="-15" font-family="sans-serif" font-size="14" fill="#333">Eye level viewing</text></g></svg>'
            }
        },`);
fs.writeFileSync('src/data/seedNotes/chemistry/note_3_3A_1.js',c);
