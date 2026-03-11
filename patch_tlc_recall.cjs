const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_15_7.js';
let data = fs.readFileSync(file, 'utf8');

data = data.replace(
  "id: 'cue-2',",
  `id: 'cue-tlc',
        blockId: 'list-tlc-adsorption',
        prompt: 'Explain the mechanism by which Thin Layer Chromatography (TLC) separates polar from non-polar molecules.'
      },
      {
        id: 'cue-2',`
);

data = data.replace(
  "Paper: stationary = water in fibres; Rf = dist(spot)/dist(front), no units, < 1; pencil baseline; solvent below baseline. TLC: silica/alumina on plate.",
  "Paper: stationary = water in fibres. TLC: silica/alumina on plate; separates via adsorption (polar molecules stick strongly via H-bonds, yielding lower Rf). Colourless spots found via UV/ninhydrin."
);

fs.writeFileSync(file, data);
