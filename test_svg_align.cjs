const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/data/seedNotes/chemistry/note_2_6_*.js');

for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const svgMatches = content.match(/svg: '(<svg.*?<\/svg>)'/g);
    if (!svgMatches) continue;

    console.log(`File: ${file}`);
    svgMatches.forEach((svgStr, i) => {
        console.log(`  SVG ${i+1}:`);
        const textPattern = /<text[^>]*>.*?<\/text>/g;
        let match;
        while ((match = textPattern.exec(svgStr)) !== null) {
            const textTag = match[0];
            // Check for potential alignment issues: missing text-anchor, overlapping x/y, rotated text
            if (!textTag.includes('text-anchor') || textTag.includes('transform')) {
                 console.log(`    Suspicious Element: ${textTag}`);
            } else {
                 console.log(`    ${textTag}`);
            }
        }
    });
}
