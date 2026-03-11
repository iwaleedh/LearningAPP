const fs = require('fs');
const file = 'src/data/seedNotes/chemistry/note_4_15_6.js';
let content = fs.readFileSync(file, 'utf8');

const anchorIndex = content.indexOf('    // Reaction 3: Ammonia');

if (anchorIndex !== -1) {
const phenolBlock = `    // Reaction with Phenols
    {
      id: 'h-acyl-phenol',
      type: 'heading',
      data: { text: 'Reaction with Phenols', level: 4 }
    },
    {
      id: 'list-acyl-phenol',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Phenols have an –OH group attached directly to a benzene ring.',
          'They react with acyl chlorides to form **phenyl esters** (e.g. phenyl ethanoate) and HCl gas.',
          'The reaction is **less vigorous** than with aliphatic alcohols because the benzene ring modifies the reactivity of the –OH group.',
          'This reaction is described as an **acylation** (or specifically **ethanoylation** if using ethanoyl chloride) because the hydrogen of the phenol –OH is replaced by an acyl group (RCO–).'
        ]
      }
    },
    {
      id: 'eq-acyl-phenol',
      type: 'equation',
      data: {
        html: 'C₆H₅OH + CH₃COCl → CH₃COOC₆H₅ + HCl↑',
        caption: 'Phenol + ethanoyl chloride → phenyl ethanoate + hydrogen chloride.'
      }
    },
    {
      id: 'callout-aspirin-phenol',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Making Aspirin (via Ethanoylation)',
        text: 'Aspirin is made by a very similar reaction using 2-hydroxybenzoic acid (salicylic acid) instead of plain phenol.<br/><br/>The –OH group on the benzene ring reacts with ethanoyl chloride just like phenol does, producing the ester group in aspirin and giving off HCl.<br/><br/>*Note: As mentioned later, industrially, ethanoic anhydride is preferred over ethanoyl chloride for making aspirin because it is cheaper and safer (produces ethanoic acid instead of toxic HCl).*'
      }
    },

`;
  
    content = content.substring(0, anchorIndex) + phenolBlock + content.substring(anchorIndex);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Phenol patch successful");
} else {
    console.log("Could not find anchor to inject phenol block");
}
