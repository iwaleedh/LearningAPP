const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const directoryPath = path.join(__dirname, '../src/data/seedNotes/chemistry');

function splitIntoSentences(text) {
    // A simple regex to split by sentence-ending punctuation followed by space or end of string
    // It handles simple cases but might not be perfect for all edge cases like "e.g." or "Mr."
    // For chemistry notes, it should be decent.
    const regex = /([^.!?]+[.!?]+)(?=\s|$)/g;
    let matches = text.match(regex);
    if (!matches) {
        return [text.trim()];
    }
    return matches.map(s => s.trim()).filter(s => s.length > 0);
}

function processFile(filePath) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = parser.parse(code, {
            sourceType: 'module',
            plugins: ['jsx'] // Just in case, though mostly basic JS
        });

        let modified = false;

        traverse(ast, {
            ObjectExpression(path) {
                // Look for an object that has type: 'paragraph' and data: { text: ... }
                const properties = path.node.properties;
                let isParagraphBlock = false;
                let dataPropPath = null;

                for (const prop of path.get('properties')) {
                    if (t.isObjectProperty(prop.node) && t.isIdentifier(prop.node.key, { name: 'type' })) {
                        if (t.isStringLiteral(prop.node.value, { value: 'paragraph' })) {
                            isParagraphBlock = true;
                        }
                    }
                    if (t.isObjectProperty(prop.node) && t.isIdentifier(prop.node.key, { name: 'data' })) {
                        dataPropPath = prop;
                    }
                }

                if (isParagraphBlock && dataPropPath) {
                    // Find the text property inside data
                    let textValue = null;
                    for (const dataProp of dataPropPath.get('value.properties')) {
                        if (t.isObjectProperty(dataProp.node) && t.isIdentifier(dataProp.node.key, { name: 'text' })) {
                            if (t.isStringLiteral(dataProp.node.value)) {
                                textValue = dataProp.node.value.value;
                            }
                        }
                    }

                    if (textValue) {
                        const sentences = splitIntoSentences(textValue);
                        // If there's more than one sentence, or even just one, convert to list

                        // Change type to 'list'
                        for (const prop of path.get('properties')) {
                            if (t.isObjectProperty(prop.node) && t.isIdentifier(prop.node.key, { name: 'type' })) {
                                prop.node.value = t.stringLiteral('list');
                            }
                        }

                        // Replace data object with { style: 'unordered', items: [...] }
                        const listItems = sentences.map(s => t.stringLiteral(s));
                        const newDataObj = t.objectExpression([
                            t.objectProperty(t.identifier('style'), t.stringLiteral('unordered')),
                            t.objectProperty(t.identifier('items'), t.arrayExpression(listItems))
                        ]);

                        dataPropPath.get('value').replaceWith(newDataObj);
                        modified = true;
                    }
                }
            }
        });

        if (modified) {
            // Only save if we changed something
            const output = generate(ast, {}, code);
            fs.writeFileSync(filePath, output.code, 'utf8');
            console.log(`Updated ${path.basename(filePath)}`);
        } else {
            //console.log(`No changes needed for ${path.basename(filePath)}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}:`, e);
    }
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    let count = 0;
    files.forEach(function (file) {
        if (file.startsWith('note_1_1_') || file.startsWith('note_1_2_') || file.startsWith('note_1_3_') || file.startsWith('note_1_4_') || file.startsWith('note_1_5_')) {
            // This matches Unit 1 files (note_1_*_*.js)
            processFile(path.join(directoryPath, file));
            count++;
        }
    });
    console.log(`Processed ${count} WCH11 files.`);
});
