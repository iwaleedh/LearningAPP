const fs = require("fs");

const files = [
"src/data/seedNotes/biology/note_5_8_7.js",
"src/data/seedNotes/biology/note_5_7_4.js",
"src/data/seedNotes/biology/note_1_2_2.js",
"src/data/seedNotes/biology/note_5_8_3.js",
"src/data/seedNotes/biology/note_5_7_21.js",
"src/data/seedNotes/biology/note_5_7_15.js",
"src/data/seedNotes/biology/note_1_2_6.js",
"src/data/seedNotes/biology/note_5_8_2.js",
"src/data/seedNotes/biology/note_5_7_14.js",
"src/data/seedNotes/biology/note_5_7_5.js",
"src/data/seedNotes/biology/note_5_8_6.js",
"src/data/seedNotes/biology/note_6_6A_5.js",
"src/data/seedNotes/biology/note_5_7_10.js",
"src/data/seedNotes/biology/note_1_2_12.js",
"src/data/seedNotes/biology/note_1_2_16.js",
"src/data/seedNotes/biology/note_5_8_12.js",
"src/data/seedNotes/biology/note_5_8_13.js",
"src/data/seedNotes/biology/note_5_8_10.js",
"src/data/seedNotes/biology/note_5_7_8.js",
"src/data/seedNotes/biology/note_1_1_9.js",
"src/data/seedNotes/biology/note_5_8_14.js",
"src/data/seedNotes/biology/note_5_7_19.js",
"src/data/seedNotes/biology/note_5_8_15.js",
"src/data/seedNotes/biology/note_5_7_18.js",
"src/data/seedNotes/biology/note_5_8_11.js",
"src/data/seedNotes/biology/note_5_7_9.js",
"src/data/seedNotes/biology/note_6_6A_2.js",
"src/data/seedNotes/biology/note_5_8_1.js",
"src/data/seedNotes/biology/note_5_7_13.js",
"src/data/seedNotes/biology/note_1_1_7.js",
"src/data/seedNotes/biology/note_5_8_4.js",
"src/data/seedNotes/biology/note_5_7_7.js",
"src/data/seedNotes/biology/note_6_6A_3.js",
"src/data/seedNotes/biology/note_5_8_0.js",
"src/data/seedNotes/biology/note_5_7_16.js",
"src/data/seedNotes/biology/note_1_2_5.js"
];

let out = {};
files.forEach(f => {
    let basename = f.split('/').pop();
    let c = fs.readFileSync(f, "utf-8");
    let match = c.match(/type:\s*['"]objective['"],\s*data:\s*\{.*?text:\s*['"](.*?)['"]/s);
    if (!c.includes("callout-tip")) {
        // Find first text heading or paragraph to use alternatively if no objective
        let textMatch = match ? match[1] : "";
        if (!textMatch) {
            let hMatch = c.match(/text:\s*['"](.*?)['"]/);
            if (hMatch) textMatch = hMatch[1];
        }
        out[basename] = textMatch.substring(0,80).replace(/\n/g,"");
    }
});
fs.writeFileSync("bio_remaining.json", JSON.stringify(out, null, 2));