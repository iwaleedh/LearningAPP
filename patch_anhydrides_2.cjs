const fs = require('fs');

const path = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/chemistry/note_4_15_6.js';
let content = fs.readFileSync(path, 'utf8');

const target = `{
      id: 'callout-anhydride-reaction',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Making Esters using Acid Anhydrides',
        text: 'Acid anhydrides react with alcohols to form an ester and a carboxylic acid.<br/><br/><strong>Equation (e.g. ethanoic anhydride + ethanol):</strong><br/>$(CH_3CO)_2O + CH_3CH_2OH \\\\rightarrow CH_3COOCH_2CH_3 + CH_3COOH$<br/><br/><strong>Comparison to Acyl Chlorides:</strong><br/>• Slower reaction (needs gentle warming).<br/>• Less hazardous (produces ethanoic acid side-product rather than toxic $HCl$ gas).<br/>• Used industrially (e.g., aspirin synthesis) because it is cheaper and safer than acyl chlorides.'
      },
      terms: ['Aspirin']
    }`;

const replacement = `{
      id: 'h-anhydride-reactions',
      type: 'heading',
      data: { text: 'Reactions of Acid Anhydrides with –OH Compounds', level: 3 }
    },
    {
      id: 'p-anhydride-reactions-intro',
      type: 'paragraph',
      data: {
        text: 'The reactions of acid anhydrides with compounds containing an –OH group (water, alcohols, phenols) are very similar to those of acyl chlorides. However, the reactions are <strong>slower</strong>, less violently reactive, and produce <strong>ethanoic acid</strong> as the second product rather than toxic hydrogen chloride gas.'
      }
    },
    {
      id: 'list-anhydride-water',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Water:</strong> Happens slowly at room temperature (faster on gentle warming). Unlike the acyl chloride reaction, there is no dramatic fuming.',
          '<strong>Product:</strong> Two molecules of carboxylic acid.',
          '<strong>Example:</strong> Ethanoic anhydride + Water → Ethanoic acid<br/>$(CH_3CO)_2O + H_2O \\\\rightarrow 2CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-alcohols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Alcohols:</strong> Needs gentle heating for a reasonable rate.',
          '<strong>Product:</strong> An ester and ethanoic acid (as the byproduct). No catalyst is needed, unlike the reversible reaction between a normal acid and an alcohol.',
          '<strong>Example:</strong> Ethanoic anhydride + Ethanol → Ethyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + CH_3CH_2OH \\\\rightarrow CH_3COOCH_2CH_3 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'list-anhydride-phenols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          '<strong>Reaction with Phenols:</strong> Phenols ($C_6H_5OH$) also react to form esters, known as phenyl esters.',
          '<strong>Reaction type:</strong> Acylation (specifically, ethanoylation when ethanoic anhydride is used). The hydrogen of the phenol –OH group is replaced by an ethanoyl group ($CH_3CO–$).',
          '<strong>Example:</strong> Ethanoic anhydride + Phenol → Phenyl ethanoate + Ethanoic acid<br/>$(CH_3CO)_2O + C_6H_5OH \\\\rightarrow CH_3COOC_6H_5 + CH_3COOH$'
        ]
      }
    },
    {
      id: 'callout-aspirin',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Industrial Synthesis of Aspirin',
        text: 'Aspirin is manufactured by reacting <strong>2-hydroxybenzoic acid</strong> (salicylic acid) with <strong>ethanoic anhydride</strong> at 90°C.<br/><br/><strong>Why use ethanoic anhydride instead of ethanoyl chloride?</strong><br/>• <strong>Cheaper:</strong> Ethanoic anhydride costs less.<br/>• <strong>Safer:</strong> It is less corrosive and reacts slower with water.<br/>• <strong>No toxic fumes:</strong> It produces ethanoic acid rather than dangerous, corrosive hydrogen chloride fumes.'
      },
      terms: ['Aspirin']
    }`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Success! Patched');
} else {
  console.log('Error: target not found.');
  const index = content.indexOf('callout-anhydride-reaction');
  console.log('Index of callout-anhydride-reaction:', index);
}