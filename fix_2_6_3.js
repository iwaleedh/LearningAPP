const fs = require('fs');
const filepath = 'src/data/seedNotes/chemistry/note_2_6_3.js';
let content = fs.readFileSync(filepath, 'utf8');

// There are two svgs with id 'svg-cooling-curve'
// We can use a regex to match the second one and remove it
let parts = content.split(`id: 'svg-cooling-curve'`);
if (parts.length > 2) {
    // found duplicates
    console.log("Found duplicate cooling curves. Fixing.");
    // We'll just replace the last occurrence entirely
    // Wait, the duplicate might have a comma before it.
    let count = 0;
    content = content.replace(/\{\s*id:\s*'svg-cooling-curve'[\s\S]*?terms:\s*\[\]\s*\},?\s*/g, (match) => {
        count++;
        if (count === 1) return match; // keep first
        return ''; // remove subsequent
    });
    fs.writeFileSync(filepath, content);
} else {
    console.log("No duplicates found, or syntax different.");
}
