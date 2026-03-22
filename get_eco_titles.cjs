const fs = require("fs");
const files = fs.readdirSync("src/data/seedNotes/economics").filter(f => /^note_economics_1_1_\d+\.js$/.test(f)).sort((a,b) => {
    let n1 = parseInt(a.split('_')[4]);
    let n2 = parseInt(b.split('_')[4]);
    return n1 - n2;
});
files.forEach(f => {
    let c = fs.readFileSync("src/data/seedNotes/economics/" + f, "utf-8");
    let match = c.match(/type:\s*['"]heading['"],\s*data:\s*\{.*?text:\s*['"](.*?)['"]/s);
    let title = match ? match[1].substring(0,60).replace(/\n/g,"") : "No title";
    console.log(`${f}: ${title}`);
});
