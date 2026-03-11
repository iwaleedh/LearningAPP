const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_2_9_4.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    `            terms: ['Esterification', 'Hydration', 'Nitration']\n        },\n    recall: {`,
    `            terms: ['Esterification', 'Hydration', 'Nitration']\n        }\n    ],\n    recall: {`
);

content = content.replace(
    `            terms: ['Esterification', 'Hydration', 'Nitration']\n        },    recall: {`,
    `            terms: ['Esterification', 'Hydration', 'Nitration']\n        }\n    ],\n    recall: {`
);

fs.writeFileSync(file, content);
console.log("Brackets fixed.");
