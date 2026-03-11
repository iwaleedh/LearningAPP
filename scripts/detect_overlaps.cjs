const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/seedNotes/chemistry');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
let totalIssues = 0;

for (const f of files) {
    const code = fs.readFileSync(path.join(dir, f), 'utf8');
    const regex = /<svg([^>]*)>([\s\S]*?)<\/svg>/g;
    let match;
    let svgIndex = 0;

    while ((match = regex.exec(code)) !== null) {
        svgIndex++;
        const svgBody = match[2];
        const textRegex = /<text[^>]*x=["']([^"']+)["'][^>]*y=["']([^"']+)["'][^>]*>(.*?)<\/text>/gi;
        
        let textMatch;
        const texts = [];
        
        while ((textMatch = textRegex.exec(svgBody)) !== null) {
            const x = parseFloat(textMatch[1]);
            const y = parseFloat(textMatch[2]);
            const content = textMatch[3].replace(/<[^>]+>/g, '').trim(); 
            
            if (!isNaN(x) && !isNaN(y) && content.length > 0) {
                texts.push({ x, y, content, raw: textMatch[0] });
            }
        }
        
        const textRegex2 = /<text[^>]*y=["']([^"']+)["'][^>]*x=["']([^"']+)["'][^>]*>(.*?)<\/text>/gi;
        while ((textMatch = textRegex2.exec(svgBody)) !== null) {
            const y = parseFloat(textMatch[1]);
            const x = parseFloat(textMatch[2]);
            const content = textMatch[3].replace(/<[^>]+>/g, '').trim(); 
            if (!isNaN(x) && !isNaN(y) && content.length > 0) {
                texts.push({ x, y, content, raw: textMatch[0] });
            }
        }

        const uniqueTexts = [];
        const seen = new Set();
        for (const t of texts) {
            const id = t.x + '_' + t.y + '_' + t.content;
            if (!seen.has(id)) {
                seen.add(id);
                uniqueTexts.push(t);
            }
        }

        let overlapFound = false;
        for (let i = 0; i < uniqueTexts.length; i++) {
            for (let j = i + 1; j < uniqueTexts.length; j++) {
                const t1 = uniqueTexts[i];
                const t2 = uniqueTexts[j];
                
                if (Math.abs(t1.y - t2.y) < 10) {
                    const left = t1.x < t2.x ? t1 : t2;
                    const right = t1.x < t2.x ? t2 : t1;
                    
                    const estWidth = left.content.length * 7; 
                    
                    if (left.x + estWidth > right.x && left.content !== right.content) {
                        if (!overlapFound) {
                            console.log(`\n==== File: ${f} | SVG #${svgIndex} ====`);
                            overlapFound = true;
                            totalIssues++;
                        }
                        console.log(`Potential Overlap!`);
                        console.log(`  1: [x:${left.x}, y:${left.y}] "${left.content}" (est end: ${left.x + estWidth})`);
                        console.log(`  2: [x:${right.x}, y:${right.y}] "${right.content}"`);
                    }
                }
            }
        }
    }
}
console.log(`\nTotal SVG overlapping text issues found: ${totalIssues}`);
