const fs = require('fs');

const files = [
    {
        name: 'src/data/seedNotes/chemistry/note_4_11_2.js',
        regex: /(id:\s*'callout-quenching'[\s\S]*?\},)/,
        svg: `
        {
            id: 'svg-quenching',
            type: 'svg',
            data: {
                caption: 'Quenching: Stopping a reaction quickly so a sample can be titrated.',
                svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ice" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="100%" stop-color="#7dd3fc"/></linearGradient></defs><rect width="400" height="200" fill="#ffffff" rx="10"/><g transform="translate(100, 40)"><path d="M -30 0 L -30 100 C -30 130, 30 130, 30 100 L 30 0" fill="none" stroke="#64748b" stroke-width="3"/><path d="M -25 50 L -25 100 C -25 120, 25 120, 25 100 L 25 50 Z" fill="#fca5a5" opacity="0.6"/><text x="0" y="145" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Reaction Sample</text></g><g transform="translate(250, 40)"><path d="M -40 30 L -40 120 C -40 140, 40 140, 40 120 L 40 30 Z" fill="url(#ice)" stroke="#38bdf8" stroke-width="2"/><path d="M -25 0 L -25 100 C -25 120, 25 120, 25 100 L 25 0" fill="none" stroke="#64748b" stroke-width="3"/><path d="M -20 50 L -20 100 C -20 115, 20 115, 20 100 L 20 50 Z" fill="#fca5a5" opacity="0.6"/><path d="M-30 40 L-15 50 L-25 60 Z" fill="#fff" opacity="0.8"/><path d="M20 50 L35 45 L30 65 Z" fill="#fff" opacity="0.8"/><path d="M -10 100 L 0 110 L 10 95" fill="#fff" opacity="0.8"/><text x="0" y="155" font-family="sans-serif" font-size="14" fill="#0369a1" text-anchor="middle">Ice Bath (Quenching)</text></g><line x1="160" y1="90" x2="190" y2="90" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/><polygon points="190,85 200,90 190,95" fill="#94a3b8"/><text x="175" y="75" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Rapid cool</text></svg>'
            }
        },`
    },
    {
        name: 'src/data/seedNotes/chemistry/note_4_12_1.js',
        regex: /(id:\s*'co-boltzmann-gas-jar'[\s\S]*?\},)/,
        svg: `
        {
            id: 'svg-entropy-disorder',
            type: 'svg',
            data: {
                caption: 'Comparing entropy: A solid lattice has low disorder (low entropy), while a gas has high disorder (high entropy) due to randomly moving particles spreading through the available volume.',
                svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#ffffff" rx="10"/><g transform="translate(100, 100)"><rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#94a3b8" stroke-width="2"/><circle cx="-20" cy="-20" r="6" fill="#3b82f6"/><circle cx="0" cy="-20" r="6" fill="#3b82f6"/><circle cx="20" cy="-20" r="6" fill="#3b82f6"/><circle cx="-20" cy="0" r="6" fill="#3b82f6"/><circle cx="0" cy="0" r="6" fill="#3b82f6"/><circle cx="20" cy="0" r="6" fill="#3b82f6"/><circle cx="-20" cy="20" r="6" fill="#3b82f6"/><circle cx="0" cy="20" r="6" fill="#3b82f6"/><circle cx="20" cy="20" r="6" fill="#3b82f6"/><text x="0" y="60" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Solid</text><text x="0" y="80" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">Low Entropy (S)</text></g><g transform="translate(300, 100)"><rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#94a3b8" stroke-width="2"/><circle cx="-25" cy="-30" r="6" fill="#ef4444"/><line x1="-20" y1="-25" x2="-10" y2="-15" stroke="#ef4444" stroke-width="1"/><circle cx="25" cy="-20" r="6" fill="#ef4444"/><line x1="20" y1="-20" x2="5" y2="-20" stroke="#ef4444" stroke-width="1"/><circle cx="-10" cy="15" r="6" fill="#ef4444"/><line x1="-10" y1="20" x2="-10" y2="35" stroke="#ef4444" stroke-width="1"/><circle cx="30" cy="10" r="6" fill="#ef4444"/><line x1="30" y1="5" x2="30" y2="-10" stroke="#ef4444" stroke-width="1"/><circle cx="10" cy="-5" r="6" fill="#ef4444"/><line x1="15" y1="0" x2="30" y2="15" stroke="#ef4444" stroke-width="1"/><text x="0" y="60" font-family="sans-serif" font-size="14" fill="#333" text-anchor="middle">Gas</text><text x="0" y="80" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">High Entropy (S)</text></g><path d="M 160 100 L 230 100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/><polygon points="230,95 240,100 230,105" fill="#94a3b8"/></svg>'
            }
        },`
    },
    {
        name: 'src/data/seedNotes/chemistry/note_4_14_0.js',
        regex: /(id:\s*'list-bl-examples'[\s\S]*?\},)/,
        svg: `
        {
            id: 'svg-bronsted-lowry',
            type: 'svg',
            data: {
                caption: 'Brønsted-Lowry Model: A proton (H⁺) is transferred from the acid to the base.',
                svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="200" fill="#ffffff" rx="10"/><g transform="translate(100, 100)"><text x="0" y="0" font-family="sans-serif" font-size="24" fill="#ef4444" font-weight="bold" text-anchor="middle">HCl</text><text x="0" y="30" font-family="sans-serif" font-size="12" fill="#ef4444" text-anchor="middle">Acid</text></g><g transform="translate(200, 100)"><text x="0" y="0" font-family="sans-serif" font-size="24" fill="#333" font-weight="bold" text-anchor="middle">+</text></g><g transform="translate(300, 100)"><text x="0" y="0" font-family="sans-serif" font-size="24" fill="#3b82f6" font-weight="bold" text-anchor="middle">NH₃</text><text x="0" y="30" font-family="sans-serif" font-size="12" fill="#3b82f6" text-anchor="middle">Base</text></g><g transform="translate(100, 100)"><path d="M 20 -20 C 60 -60, 160 -60, 200 -20" fill="none" stroke="#8b5cf6" stroke-width="3"/><polygon points="210,-10 190,-10 200,-20" fill="#8b5cf6"/><text x="110" y="-45" font-family="sans-serif" font-size="14" fill="#8b5cf6" font-weight="bold" text-anchor="middle">H⁺ transfer</text></g></svg>'
            }
        },`
    }
];

files.forEach(f => {
    let c = fs.readFileSync(f.name, 'utf8');
    if (f.regex.test(c)) {
        c = c.replace(f.regex, "$1\n" + f.svg);
        fs.writeFileSync(f.name, c);
        console.log("Updated: " + f.name);
    } else {
        console.log("Not found in: " + f.name);
    }
});
