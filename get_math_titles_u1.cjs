const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("src/data/seedNotes/mathematics").filter(f => /^note_1_\d+_\d+\.js$/.test(f)).sort();

files.forEach(f => {
    let content = fs.readFileSync("src/data/seedNotes/mathematics/" + f, "utf-8");
    let match = content.match(/type:\s*[\x27"]objective[\x27"],\s*data:\s*\{\s*text:\s*[\x27"](.*?)[\x27"]/s);
    if(match) {
        console.log(`src/data/seedNotes/mathematics/${f}: ${match[1].replace(/\n/g, ' ')}`);
    } else {
        console.log(`src/data/seedNotes/mathematics/${f}: ???`);
    }
});
