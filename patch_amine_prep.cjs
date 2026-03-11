const fs = require('fs');
let file = fs.readFileSync('src/data/seedNotes/chemistry/note_5_19_2.js', 'utf8');

const target1 = `    {
      id: 'p-haloalkane-1',
      type: 'paragraph',
      data: {
        text: 'Alkylamines can be prepared by heating a haloalkane (R−X) with a large excess of ammonia in a sealed tube under pressure. A sealed container is essential because ammonia is a gas at room temperature — it would escape from an open vessel. An alternative is to use concentrated aqueous ammonia (which provides a high concentration in solution without needing to seal the container). The ammonia acts as both a nucleophile and a base. The reaction involves SN2 nucleophilic substitution: the lone pair on ammonia attacks the carbon bonded to the halogen, displacing the halide as a leaving group and forming a C−N bond.'
      }
    },
    {
      id: 'eq-haloalkane-ammonia',
      type: 'equation',
      data: {
        html: 'R−X + NH₃ → R−NH₂ + HX (in sealed tube, heat, excess NH₃)<br />Example: CH₃Cl + NH₃ → CH₃NH₂ + HCl'
      }
    },`;

const replacement1 = `    {
      id: 'p-haloalkane-1',
      type: 'paragraph',
      data: {
        text: 'Alkylamines can be prepared by heating a haloalkane with a concentrated solution of ammonia in ethanol. The reaction must be carried out in a sealed tube. Heating under reflux is not possible because the ammonia gas would escape up the condenser. The ammonia acts as a nucleophile, replacing the halogen via nucleophilic substitution.'
      }
    },
    {
      id: 'p-haloalkane-salt',
      type: 'paragraph',
      data: {
        text: 'The reaction happens in stages. First, an alkylammonium salt is formed. Then, a reversible reaction occurs between this salt and the excess ammonia in the mixture, where ammonia removes a hydrogen ion to leave the primary amine.'
      }
    },
    {
      id: 'eq-haloalkane-ammonia',
      type: 'equation',
      data: {
        html: 'Step 1: CH₃CH₂Br + NH₃ → CH₃CH₂NH₃⁺Br⁻ (ethylammonium bromide)<br />Step 2: CH₃CH₂NH₃⁺Br⁻ + NH₃ ⇌ CH₃CH₂NH₂ + NH₄⁺Br⁻'
      }
    },`;

file = file.replace(target1, replacement1);

const target2 = `    {
      id: 'eq-multiple-substitution',
      type: 'equation',
      data: {
        html: 'R−NH₂ + R−X → R₂NH + HX (secondary amine forms)<br />R₂NH + R−X → R₃N + HX (tertiary amine forms)<br />R₃N + R−X → [R₄N]⁺X⁻ (quaternary ammonium salt)'
      }
    },
    {
      id: 'callout-excess-ammonia',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Excess Ammonia Solution',
        text: 'To favour primary amine formation, use a LARGE EXCESS of ammonia. This ensures most R−X collides with NH₃ rather than with the primary amine product, shifting the distribution towards RNH₂. Even so, some secondary and tertiary amines form, making separation necessary.'
      }
    },`;

const replacement2 = `    {
      id: 'eq-multiple-substitution',
      type: 'equation',
      data: {
        html: 'Step 1 (Salt): CH₃CH₂NH₂ + CH₃CH₂Br → (CH₃CH₂)₂NH₂⁺Br⁻<br />Step 2 (Free amine): (CH₃CH₂)₂NH₂⁺Br⁻ + NH₃ ⇌ (CH₃CH₂)₂NH + NH₄⁺Br⁻<br /><br />This repeats to form a tertiary amine, and then eventually tetraethylammonium bromide (a 4° ammonium salt).'
      }
    },
    {
      id: 'callout-excess-ammonia',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Controlling the Product Mixture',
        text: '• To favour the PRIMARY amine: use a very large excess of ammonia. This ensures the haloalkane is more likely to collide with ammonia than with a formed amine.<br />• To favour the QUATERNARY ammonium salt: use a large excess of the haloalkane, allowing the substitution to run to completion.'
      }
    },`;

file = file.replace(target2, replacement2);


const target3 = `    {
      id: 'p-nitrile-2',
      type: 'paragraph',
      data: {
        text: 'The reduction can be carried out with hydrogen gas and a nickel or platinum catalyst at moderate pressure and temperature. Alternatively, a strong reducing agent like lithium aluminium hydride (LiAlH₄) in DRY ETHER can be used. Dry ether (e.g., diethyl ether or dry THF) is essential because LiAlH₄ reacts VIOLENTLY with water and any protic solvent — using a wet or protic solvent would destroy the LiAlH₄ and cause a dangerous reaction. The LiAlH₄ method is faster but requires strict anhydrous conditions and careful handling.'
      }
    },`;

const replacement3 = `    {
      id: 'p-nitrile-2',
      type: 'paragraph',
      data: {
        text: 'The reduction can be carried out with hydrogen gas and a metal catalyst (commonly palladium, platinum, or nickel) at a raised temperature and pressure. Alternatively, a strong reducing agent like lithium aluminium hydride (LiAlH₄) dissolved in ethoxyethane (dry ether) can be used, followed by treatment with a dilute acid to liberate the amine. Note: NaBH₄ is not a strong enough reducing agent to reduce nitriles.'
      }
    },`;

file = file.replace(target3, replacement3);

const target4 = `          { text: 'Haloalkane + excess NH₃ (sealed tube, heat) → mixture of amines', checked: false },
          { text: 'Nitrile + H₂ (Ni catalyst) or LiAlH₄ → pure primary amine', checked: false },`;

const replacement4 = `          { text: 'Haloalkane + excess NH₃ in ethanol (sealed tube, heat) → mixture of amines favors primary', checked: false },
          { text: 'Haloalkane + excess haloalkane → favors quaternary ammonium salt', checked: false },
          { text: 'Nitrile + H₂ (Pd/Pt/Ni catalyst) or LiAlH₄ → pure primary amine (NaBH₄ is too weak)', checked: false },`;

file = file.replace(target4, replacement4);

const target5 = `      { id: 'cue-2', blockId: 'p-haloalkane-2', prompt: 'Why does haloalkane + ammonia give a mixture of products, and how can this be minimised?' },
      { id: 'cue-3', blockId: 'eq-nitrile-reduction', prompt: 'How are primary amines prepared from nitriles? What are the reducing agents?' },`;

const replacement5 = `      { id: 'cue-2', blockId: 'callout-excess-ammonia', prompt: 'How can you favour the formation of a primary amine vs a quaternary ammonium salt when reacting a haloalkane with ammonia?' },
      { id: 'cue-3', blockId: 'p-nitrile-2', prompt: 'How are primary amines prepared from nitriles? Can NaBH₄ be used?' },`;

file = file.replace(target5, replacement5);

// Update summaryText
const target6 = `summaryText: 'Haloalkane + excess NH₃ (sealed tube, heat) → mixture of 1°/2°/3°/quaternary amines. Nitrile + H₂ (Ni) or LiAlH₄ → pure primary amine. Nitrobenzene + Sn + conc HCl → phenylammonium salt, then NaOH → free phenylamine (oil). Iron alternative to tin. Nitrile reduction cleanest for primary amines.',`;

const replacement6 = `summaryText: 'Haloalkane + excess NH₃ in ethanol (sealed tube, heat) → mixes (excess NH₃ favors 1°, excess R−X favors 4° salt). Steps form alkylammonium salt then free amine. Nitrile + H₂ (Pd/Pt/Ni) or LiAlH₄ in dry ether + dilute acid → 1° amine (NaBH₄ too weak). Nitrobenzene + Sn/conc HCl → phenylammonium salt, then NaOH → free phenylamine.',`;

file = file.replace(target6, replacement6);

fs.writeFileSync('src/data/seedNotes/chemistry/note_5_19_2.js', file);
