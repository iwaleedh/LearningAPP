const fs = require("fs");
const files = fs.readdirSync("src/data/seedNotes/biology").filter(f => /^note_5_8_([8-9]|1[0-5])\.js$/.test(f)).sort((a,b) => {
    let numA = parseInt(a.split("_")[3]);
    let numB = parseInt(b.split("_")[3]);
    return numA - numB;
});
files.forEach(f => {
    let c = fs.readFileSync("src/data/seedNotes/biology/" + f, "utf-8");
    let match = c.match(/type:\s*['"]heading['"],\s*data:\s*\{.*?text:\s*['"](.*?)['"]/s);
    console.log(f, match ? match[1].substring(0,80).replace(/
/g,"") : "");
});
