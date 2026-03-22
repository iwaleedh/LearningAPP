const fs = require("fs");
const files = fs.readdirSync("src/data/seedNotes/economics").filter(f => f.startsWith("note_economics_1_")).sort((a,b) => a.localeCompare(b, undefined, {numeric:true}));
files.forEach(f => {
    let c = fs.readFileSync("src/data/seedNotes/economics/" + f, "utf-8");
    let match = c.match(/type:\s*[\x27"]heading[\x27"],\s*data:\s*\{.*?text:\s*[\x27"](.*?)[\x27"]/s);
    console.log(f, match ? match[1].substring(0,80).replace(/\n/g,"") : "");
});
