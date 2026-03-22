import json

bio_tips = {
  "note_1_2_0.js": [{"style": "warning", "title": "Fick's Law", "text": "Remember that the Rate of diffusion is proportional to (Surface Area x Concentration difference) / Thickness of membrane. Always specify 'concentration difference', not just 'concentration'."}],
  "note_1_2_1.js": [{"style": "tip", "title": "Linking Structure to Function", "text": "When explaining alveolar adaptations, always explicitly link the feature to the function (e.g., 'squamous epithelium is one cell thick, which provides a short diffusion distance')."}],
  "note_1_2_2.js": [{"style": "warning", "title": "Cystic Fibrosis Mechanism", "text": "State clearly that thick, sticky mucus physically blocks the airways, which reduces the effective surface area for gas exchange and increases the diffusion pathway."}],
  "note_1_2_3.js": [{"style": "key", "title": "Defining Fluid Mosaic", "text": "The 'fluid' part refers to the ability of phospholipids and some proteins to move laterally within their layers. 'Mosaic' refers to the random scattering of different proteins embedded in the bilayer."}],
  "note_1_2_4.js": [{"style": "tip", "title": "Molecule Types", "text": "Always state that polar, charged, or large molecules use channel/carrier proteins (facilitated diffusion), while small non-polar molecules like oxygen diffuse directly through the phospholipid bilayer."}],
  "note_1_2_5.js": [{"style": "warning", "title": "Active Transport Essentials", "text": "Active transport moves substances against the concentration gradient. You must explicitly mention that this requires energy in the form of ATP from respiration."}],
  "note_1_2_6.js": [{"style": "warning", "title": "Water Potential", "text": "Never say water moves from a 'high concentration' to a 'low concentration'. Say it moves from a region of higher (less negative) water potential to lower (more negative) water potential."}],
  "note_1_2_7.js": [{"style": "key", "title": "Peptide Bond Formation", "text": "Always specify that a peptide bond is formed by a condensation reaction between the amine group (-NH2) of one amino acid and the carboxyl group (-COOH) of another, releasing a molecule of water."}],
  "note_1_2_8.js": [{"style": "tip", "title": "Tertiary Bonds", "text": "When listing bonds maintaining tertiary structure, be specific: state hydrogen bonds, ionic bonds, and disulfide bridges (which only form between cysteine R-groups)."}],
  "note_1_2_9.js": [{"style": "warning", "title": "Enzymes", "text": "Never say an enzyme 'dies' when heated; say it denatures. For mechanism, state that it lowers the activation energy by providing an alternative reaction pathway upon forming an enzyme-substrate complex."}],
  "note_1_2_10.js": [{"style": "key", "title": "Inhibition Types", "text": "Competitive inhibitors bind to the active site (can be overcome by increasing substrate concentration). Non-competitive inhibitors bind to an allosteric site, permanently altering the active site's specific 3D shape."}],
  "note_1_2_11.js": [{"style": "key", "title": "Nucleotide Components", "text": "A DNA mononucleotide strictly has a deoxyribose sugar, a phosphate group, and a nitrogenous base. Phosphodiester bonds form between the sugar and phosphate to create the sugar-phosphate backbone."}],
  "note_1_2_12.js": [{"style": "warning", "title": "Semi-Conservative Replication", "text": "Define this as: each replicated DNA molecule contains one original 'parent' strand and one newly synthesised strand. Examiners look for these exact terms."}],
  "note_1_2_13.js": [{"style": "tip", "title": "Translation vs Transcription", "text": "Do not mix these up. Transcription happens in the nucleus to produce mRNA. Translation happens at the ribosomes where tRNA brings specific amino acids with matching anticodons."}],
  "note_1_2_14.js": [{"style": "warning", "title": "Genetic Code Vocab", "text": "Use the term 'degenerate' to explain that multiple codons can code for the same amino acid, and 'non-overlapping' to state each base is read only once. Remember that insertions/deletions cause a frameshift."}],
  "note_1_2_15.js": [{"style": "key", "title": "CFTR Explanation Step-by-Step", "text": "A mutated CFTR channel cannot pump chloride ions out of the cell. As a result, the water potential outside doesn't lower, so water does not leave the cells by osmosis, resulting in thick, sticky mucus."}],
  "note_1_2_16.js": [{"style": "warning", "title": "Sex Linkage", "text": "Sex linkage usually refers to genes on the X chromosome. Emphasize that males (XY) only have one copy, so they only need one recessive allele to express the condition, making them more vulnerable."}]
}

chem_tips = {
  "note_2_10_10.js": [{"style": "tip", "title": "Wavenumber Ranges", "text": "Always quote the exact wavenumber ranges from your data booklet when identifying bonds from an IR spectrum (e.g., O-H stretch at 3200-3600 cm^-1 for alcohols)."}],
  "note_2_10_8.js": [{"style": "warning", "title": "Carbocation Charges", "text": "When writing formulae for fragment ions in mass spectrometry, you MUST include the positive charge (e.g., [CH3]+). Without the '+' sign, you will lose the mark."}],
  "note_2_9_3.js": [{"style": "warning", "title": "Drawing Maxwell-Boltzmann", "text": "Your Maxwell-Boltzmann curve must start exactly at the origin (0,0) - because no particles have zero energy. It should never touch the x-axis again at higher energies as there is no maximum energy limit."}],
  "note_2_9_7.js": [{"style": "key", "title": "Industrial Compromises", "text": "For exothermic reversible reactions, lower temperatures offer a high theoretical yield but a very slow rate of reaction. A 'compromise temperature' balances a viable rate of production with a reasonable yield."}]
}

with open("tip_bio_1_2.json", "w") as f:
    json.dump(bio_tips, f, indent=2)

with open("tip_chem_missing.json", "w") as f:
    json.dump(chem_tips, f, indent=2)
