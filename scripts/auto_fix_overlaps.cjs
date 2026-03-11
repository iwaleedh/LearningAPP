const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/seedNotes/chemistry');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
let fixedFilesCount = 0;

for (const f of files) {
    const filePath = path.join(dir, f);
    let code = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const regex = /<svg([^>]*)>([\s\S]*?)<\/svg>/g;
    let match;
    let newCode = code;

    // We will do a simple string replace for known overlapping patterns we found, 
    // or we can heuristically adjust any <text> that is too close to another.
    
    // Instead of complex parsing, let's just do a smart regex replacement 
    // to add a bit of Y spacing when X diff is small and Y is identical.

    while ((match = regex.exec(code)) !== null) {
        const svgBody = match[2];
        const textRegex = /<text[^>]*x=["']([^"']+)["'][^>]*y=["']([^"']+)["'][^>]*>(.*?)<\/text>/gi;
        
        let textMatch;
        const texts = [];
        
        while ((textMatch = textRegex.exec(svgBody)) !== null) {
            const x = parseFloat(textMatch[1]);
            const y = parseFloat(textMatch[2]);
            const content = textMatch[3].replace(/<[^>]+>/g, '').trim(); 
            
            if (!isNaN(x) && !isNaN(y) && content.length > 0) {
                texts.push({ x, y, content, raw: textMatch[0], fullMatch: textMatch[0] });
            }
        }

        let bodyModified = svgBody;
        let localModified = false;

        for (let i = 0; i < texts.length; i++) {
            for (let j = i + 1; j < texts.length; j++) {
                const t1 = texts[i];
                const t2 = texts[j];
                
                // If they have identical Y or very close Y (< 5)
                if (Math.abs(t1.y - t2.y) < 5) {
                    const left = t1.x < t2.x ? t1 : t2;
                    const right = t1.x < t2.x ? t2 : t1;
                    
                    const estWidth = left.content.length * 6; // conservative 6px per char
                    
                    // If true overlap with very close X
                    if (left.x + estWidth > right.x && left.content !== right.content) {
                        // Let's modify the Y of the left one a bit up, and right one a bit down, or just push right one down
                        if (left.content.includes('m/z') || right.content.includes('m/z') || 
                            Math.abs(left.x - right.x) < 20) {
                            
                            // Check if one has a small word and the other a large word
                            const target = right.content.length < left.content.length ? right : left;
                            
                            // Push target down by 14px
                            const newY = target.y + 14;
                            const replacement = target.raw.replace(/y=["'][0-9\.]+["']/, `y="${newY}"`);
                            
                            if (bodyModified.includes(target.raw)) {
                                bodyModified = bodyModified.replace(target.raw, replacement);
                                target.y = newY; // Update object so we don't move it again
                                localModified = true;
                            }
                        }
                    }
                }
            }
        }

        if (localModified) {
            newCode = newCode.replace(svgBody, bodyModified);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, newCode, 'utf8');
        fixedFilesCount++;
        console.log(`Auto-fixed SVG text coordinates in: ${f}`);
    }
}
console.log(`Total files fixed heuristically: ${fixedFilesCount}`);
