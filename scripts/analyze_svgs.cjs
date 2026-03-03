const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/seedNotes/chemistry');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && (f.startsWith('note_1_') || f.startsWith('note_2_') || f.startsWith('note_3_')));

const issues = [];

for (const f of files) {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    const regex = /<svg([^>]*)>([\s\S]*?)<\/svg>/g;
    let match;
    let svgIndex = 0;

    while ((match = regex.exec(code)) !== null) {
        svgIndex++;
        const svgTag = match[1];
        const svgBody = match[2];
        const fullSvg = match[0];

        const fileReport = { file: f, index: svgIndex, viewBox: null, width: null, height: null, texts: [], issues: [] };

        const vbMatch = svgTag.match(/viewBox=["']([^"']+)["']/);
        if (vbMatch) fileReport.viewBox = vbMatch[1];
        else fileReport.issues.push('Missing viewBox');

        const wMatch = svgTag.match(/width=["']([^"']+)["']/);
        const hMatch = svgTag.match(/height=["']([^"']+)["']/);
        if (wMatch) fileReport.width = wMatch[1];
        if (hMatch) fileReport.height = hMatch[1];

        // If no width/height or weird viewBox, size might be too large
        if (!vbMatch && (!wMatch || !hMatch)) fileReport.issues.push('No size constraints');

        // Look at <text> elements
        const textRegex = /<text([^>]*)>([\s\S]*?)<\/text>/g;
        let textMatch;
        while ((textMatch = textRegex.exec(svgBody)) !== null) {
            const textTag = textMatch[1];
            const textContent = textMatch[2];
            const hasAnchor = /text-anchor/.test(textTag);
            const hasDominant = /(dominant-baseline|alignment-baseline)/.test(textTag);
            const hasDy = /dy=/.test(textTag);
            const yMatch = textTag.match(/\by=["']([^"']+)["']/);

            if (!hasAnchor && !hasDominant && !hasDy) {
                fileReport.issues.push(`Text without proper alignment: "${textContent.trim().substring(0, 30)}"`);
            }
        }

        if (fileReport.issues.length > 0 || fileReport.viewBox === '0 0 800 600' /* typical oversized */) {
            issues.push(fileReport);
        }
    }
}

console.log(JSON.stringify(issues, null, 2));
