import fs from 'fs';
import path from 'path';

const dir = 'src/data/seedNotes/chemistry';
const files = fs.readdirSync(dir).filter(f => f.startsWith('note_3_') && f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <rect ... fill="#ffffff" ... /> with fill="transparent" for backgrounds
    // or just change fill="#ffffff" inside <rect> to fill="var(--color-surface)" or "transparent"
    if (content.includes('fill="#ffffff"')) {
        let newContent = content.replace(/<rect([^>]+)fill="#ffffff"([^>]*)>/g, '<rect$1fill="transparent"$2>');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed white background in: ${file}`);
    }
});
