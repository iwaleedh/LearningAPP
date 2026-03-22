const fs = require('fs');
const path = require('path');

const dir = 'src/data/seedNotes/chemistry';
const files = Array.from({length: 11}, (_, i) => `note_1_1_${i}.js`);

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('id: "tip-exam')) {
    const tipBlock = `
    {
      id: "tip-exam-topic-${file.replace('.js', '')}",
      type: "callout",
      data: {
        style: "tip",
        title: "Exam Tip",
        text: "Always show full working for calculations, including intermediate steps and units. Significant figures should match the least precise given data."
      }
    },`;
    
    // Find the last summary block and insert before it
    content = content.replace(/({\s*id:\s*['"]sum-1['"],\s*type:\s*['"]summary['"],)/, tipBlock + '\n    $1');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Enhanced ${file}`);
  }
});
