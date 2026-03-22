const fs = require('fs');
const path = require('path');

const dir = 'src/data/seedNotes/chemistry';
const files = fs.readdirSync(dir).filter(f => f.startsWith('note_3_') && f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('fill="#ffffff"')) {
        let newContent = content.replace(/<rect([^>]*?)fill="#ffffff"([^>]*)>/g, '<rect$1fill="transparent"$2>');
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed white background in: ${file}`);
        } else {
            console.log(`Failed to replace regex in: ${file}`);
        }
    }
});