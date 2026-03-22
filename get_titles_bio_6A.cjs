const fs = require("fs"); const files = fs.readdirSync("src/data/seedNotes/biology").filter(f => /^note_6_6A_\d+\.js$/.test(f)).sort(); files.forEach(f => { let c = fs.readFileSync("src/data/seedNotes/biology/" + f, "utf-8"); let match = c.match(/type:\s*['"]heading['"],\s*data:\s*\{.*?text:\s*['"](.*?)['"]/s); console.log(f, match ? match[1].substring(0,60).replace(/
/g,"") : ""); });
