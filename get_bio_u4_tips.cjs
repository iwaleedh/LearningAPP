const fs = require("fs");
const files = fs.readdirSync("src/data/seedNotes/biology").filter(f => /^note_4_(5|6)_\d+\.js$/.test(f)).sort();
let out = {};
files.forEach(f => {
    let c = fs.readFileSync("src/data/seedNotes/biology/" + f, "utf-8");
    let match = c.match(/type:\s*['"]objective['"],\s*data:\s*\{.*?text:\s*['"](.*?)['"]/s);
    if (!c.includes("callout-tip")) {
        out[f] = match ? match[1].substring(0,80).replace(/\n/g,"") : "";
    }
});
fs.writeFileSync("bio_u4_missing_tips.json", JSON.stringify(out, null, 2));
