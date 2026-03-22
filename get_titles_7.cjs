const fs = require("fs");
[15,16,17,18,19,20,21].forEach(i => {
  const fname = "src/data/seedNotes/biology/note_5_7_" + i + ".js";
  if(fs.existsSync(fname)){
    const content = fs.readFileSync(fname, "utf8");
    const titleMatch = content.match(/text:\s*['"](.*?)[x27"]/);
    console.log(`note_5_7_${i}.js`, ":", titleMatch ? titleMatch[1] : "No title");
  }
});
