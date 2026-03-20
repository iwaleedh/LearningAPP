"""
inject_presentation_slides.py
Inserts presentationSlides into all Topic 2 and Topic 3 chemistry seed notes.
Run: python inject_presentation_slides.py
"""
import re, sys

BASE = 'src/data/seedNotes/chemistry/'

SLIDES = {

# ──────────────────────── TOPIC 2 ────────────────────────

'note_1_2_0.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Subatomic Particles',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.0',
      elements: [
        { delay: 0, colSpan: 1, icon: '\u26db\ufe0f', title: 'The Three Particles', html: '<strong>Proton</strong>: mass 1, charge +1 \u2014 in nucleus.<br/><strong>Neutron</strong>: mass 1, charge 0 \u2014 in nucleus.<br/><strong>Electron</strong>: mass \u22480, charge \u22121 \u2014 in shells.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udd22', title: 'Atomic Number (Z)', html: 'Number of <strong>protons</strong> in the nucleus.<br/>Identifies the element.<br/>= electrons in a neutral atom.' },
        { delay: 2, colSpan: 1, icon: '\u2696\ufe0f', title: 'Mass Number (A)', html: 'A = protons + neutrons (nucleons).<br/>Neutrons = A \u2212 Z.<br/>Almost all atomic mass is in the nucleus.' },
        { delay: 3, colSpan: 1, icon: '\ud83c\udff7\ufe0f', title: 'Nuclide Notation', html: '<sup>A</sup><sub>Z</sub>X \u2014 top is A, bottom is Z.<br/>e.g. <sup>12</sup><sub>6</sub>C: 6 protons, 6 neutrons, 6 electrons.' },
        { delay: 4, colSpan: 2, icon: '\u26a1', title: 'Ions \u2014 Electrons Changed', html: '<strong>Cation (+):</strong> atom has <em>lost</em> electrons. e.g. Na<sup>+</sup>: 11p, 10e\u207b.<br/><strong>Anion (\u2212):</strong> atom has <em>gained</em> electrons. e.g. Cl\u207b: 17p, 18e\u207b.<br/>Ion proton number is unchanged from the parent element.' },
      ]
    }
  ],
""",

'note_1_2_1.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Isotopes & Relative Atomic Mass',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.1',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udd04', title: 'Isotopes', html: 'Atoms with the <strong>same atomic number (Z)</strong> but <strong>different mass numbers (A)</strong>.<br/>Same element; different number of neutrons.<br/>e.g. \u00b9\u00b2C and \u00b9\u00b3C.' },
        { delay: 1, colSpan: 2, icon: '\u2696\ufe0f', title: 'Relative Isotopic Mass', html: 'Mass of one isotope atom relative to <strong>\u00b9\u2044\u2081\u2082 of \u00b9\u00b2C</strong>.<br/>Close to, but not exactly, the mass number (due to nuclear binding energy).<br/><strong>Examples:</strong> \u00b9\u00b2C = 12.000; \u00b3\u2075Cl \u2248 34.97; \u00b3\u2077Cl \u2248 36.97.' },
        { delay: 2, colSpan: 1, icon: '\ud83c\udfaf', title: 'Carbon-12 Standard', html: '<strong>\u00b9\u00b2C = exactly 12</strong> by definition (IUPAC, 1961).<br/>All relative masses are on this scale.<br/>Ensures consistent international measurements.' },
        { delay: 3, colSpan: 2, icon: '\ud83e\uddee', title: 'Calculating A\u1d63', html: '<strong>A\u1d63 = \u03a3 (isotopic mass \u00d7 % abundance) \u00f7 100</strong><br/><br/>e.g. Chlorine (75.77% \u00b3\u2075Cl; 24.23% \u00b3\u2077Cl):<br/>A\u1d63 = (34.97\u00d775.77 + 36.97\u00d724.23) \u00f7 100 = <strong>35.45</strong>' },
      ]
    }
  ],
""",

'note_1_2_2.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Mass Spectrometry',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.2',
      elements: [
        { delay: 0, colSpan: 3, icon: '\ud83d\udd2c', title: '5 Stages of a Mass Spectrometer', html: '<strong>1\u2009Vaporise</strong> \u2192 <strong>2\u2009Ionise</strong> (e\u207b gun or ESI) \u2192 <strong>3\u2009Accelerate</strong> (electric field) \u2192 <strong>4\u2009Deflect</strong> (magnetic field) \u2192 <strong>5\u2009Detect</strong> (current).<br/>Operates under <strong>high vacuum</strong> to prevent collisions.' },
        { delay: 1, colSpan: 1, icon: '\u26a1', title: 'Ionisation Methods', html: '<strong>Electron ionisation (EI):</strong> high-energy e\u207b knock one out \u2192 M<sup>+</sup>(g).<br/><strong>Electrospray (ESI):</strong> dissolve + spray; protonation \u2192 [M+H]<sup>+</sup>. Used for large molecules.' },
        { delay: 2, colSpan: 1, icon: '\ud83e\uddf2', title: 'm/z Ratio', html: '<strong>Mass-to-charge ratio.</strong><br/>Low m/z = deflected more; high m/z = deflected less.<br/>Each isotope gives a separate peak.' },
        { delay: 3, colSpan: 1, icon: '\ud83d\udcca', title: 'Reading a Spectrum', html: 'x-axis: m/z ratio.<br/>y-axis: relative abundance (%).<br/>Tallest peak = most abundant isotope.<br/>Use peak heights to calculate A\u1d63.' },
      ]
    }
  ],
""",

'note_1_2_3.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Electron Configuration',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.3',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83c\udf0a', title: 'Energy Levels (Shells)', html: '<strong>Shell 1:</strong> max 2e\u207b<br/><strong>Shell 2:</strong> max 8e\u207b<br/><strong>Shell 3:</strong> max 18e\u207b<br/>Electrons fill lowest available energy levels first (Aufbau principle).' },
        { delay: 1, colSpan: 1, icon: '\ud83e\udde9', title: 'Subshells (s, p, d, f)', html: '<strong>s:</strong> max 2e\u207b (1 orbital).<br/><strong>p:</strong> max 6e\u207b (3 orbitals).<br/><strong>d:</strong> max 10e\u207b (5 orbitals).<br/><strong>f:</strong> max 14e\u207b (7 orbitals).' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udccf', title: 'Filling Order', html: '1s \u2192 2s \u2192 2p \u2192 3s \u2192 3p \u2192 <strong>4s \u2192 3d</strong> \u2192 4p...<br/>4s fills before 3d.<br/><em>Note:</em> 4s empties before 3d when forming transition metal cations.' },
        { delay: 3, colSpan: 1, icon: '\ud83d\udd04', title: "Hund's Rule", html: 'Electrons fill orbitals <strong>singly</strong> before pairing up.<br/>All singly-filled orbitals have the same spin (parallel \u2191\u2191).<br/>Minimises electron-electron repulsion.' },
        { delay: 4, colSpan: 2, icon: '\ud83d\udeab', title: 'Pauli Exclusion Principle', html: 'Each orbital holds a <strong>maximum of 2 electrons</strong> with <strong>opposite spins</strong> (\u2191\u2193).<br/>No two electrons in the same atom can have the same set of four quantum numbers.<br/>e.g. 1s orbital: holds 1s\u00b2 (one spin-up, one spin-down).' },
      ]
    }
  ],
""",

'note_1_2_4.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Ionisation Energies',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.4',
      elements: [
        { delay: 0, colSpan: 2, icon: '\ud83d\udca1', title: 'First Ionisation Energy (IE\u2081)', html: '<strong>Energy required to remove 1 mol of electrons from 1 mol of gaseous atoms:</strong><br/>X(g) \u2192 X<sup>+</sup>(g) + e\u207b\u2003\u0394H = IE\u2081<br/>Always endothermic (+ve). Units: kJ mol\u207b\u00b9.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udcd0', title: '3 Factors Affecting IE\u2081', html: '1. <strong>Atomic radius:</strong> larger radius \u2192 lower IE\u2081.<br/>2. <strong>Electron shielding:</strong> more inner shells \u2192 lower IE\u2081.<br/>3. <strong>Nuclear charge (Z):</strong> more protons \u2192 higher IE\u2081.' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udcc8', title: 'Across Period 3', html: 'Generally <strong>increases</strong> Na \u2192 Ar.<br/><strong>Dip at Al</strong>: 3p electron screened by 3s \u2014 easier to remove.<br/><strong>Dip at S</strong>: paired 3p electron experiences extra repulsion.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udd0d', title: 'Successive IEs \u2014 Shell Evidence', html: 'IEs increase as each electron removed (atom becomes more positive).<br/><strong>Large jumps</strong> in successive IEs indicate an electron has been removed from an inner (lower energy) shell.<br/>e.g. For Na: IE\u2082/IE\u2081 ratio \u2248 10\u00d7 \u2014 confirms one electron in outer 3s shell.' },
      ]
    }
  ],
""",

'note_1_2_5.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Atomic Model Development',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.5',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83e\udea8', title: 'Dalton (1803)', html: 'Atoms are <strong>indivisible solid spheres.</strong><br/>Each element has one type of atom.<br/>Compounds = atoms in fixed ratios.<br/><em>Disproved by discovery of sub-atomic particles.</em>' },
        { delay: 1, colSpan: 1, icon: '\ud83c\udf6e', title: 'Thomson (1897)', html: '<strong>Plum pudding model.</strong><br/>Discovered electrons (cathode ray tube).<br/>Model: positive charge spread uniformly; electrons embedded throughout.' },
        { delay: 2, colSpan: 1, icon: '\ud83c\udfaf', title: 'Rutherford (1911)', html: '<strong>Nuclear model</strong> from gold foil experiment.<br/>Most \u03b1-particles passed through \u2192 atom is mostly empty space.<br/>Small, dense, positively charged <strong>nucleus</strong> at centre.' },
        { delay: 3, colSpan: 1, icon: '\ud83d\udd35', title: 'Bohr (1913)', html: 'Electrons orbit in <strong>fixed energy levels (shells).</strong><br/>Explains hydrogen emission spectrum \u2014 electrons jump between shells, emitting/absorbing specific wavelengths.' },
        { delay: 4, colSpan: 2, icon: '\ud83c\udf00', title: 'Modern Quantum Model', html: 'Electrons exist in <strong>orbitals</strong> \u2014 probability regions, not fixed orbits.<br/>Sub-shells s, p, d, f with distinct shapes.<br/>Cannot simultaneously know exact position and momentum (Heisenberg uncertainty principle).' },
      ]
    }
  ],
""",

'note_1_2_6.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 's and p Orbitals',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.6',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udd2e', title: 'What is an Orbital?', html: 'A region of space where there is a <strong>\u226595% probability</strong> of finding an electron.<br/>Each orbital holds up to <strong>2 electrons</strong> with opposite spins.' },
        { delay: 1, colSpan: 1, icon: '\u2b55', title: 's Orbitals', html: '<strong>Spherical</strong> shape \u2014 one per s subshell.<br/>1s, 2s, 3s\u2026 increasing in size and energy.<br/>Holds a maximum of <strong>2 electrons.</strong>' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udcba', title: 'p Orbitals', html: '<strong>Dumbbell (figure-of-8)</strong> shape.<br/>Three orientations: p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> at 90\u00b0 to each other.<br/>3 orbitals \u00d7 2e\u207b = <strong>max 6e\u207b</strong> per p subshell.' },
        { delay: 3, colSpan: 1, icon: '\ud83d\udccb', title: 'Subshell Capacities', html: 's: 1 orbital \u2192 2e\u207b<br/>p: 3 orbitals \u2192 6e\u207b<br/>d: 5 orbitals \u2192 10e\u207b<br/>f: 7 orbitals \u2192 14e\u207b' },
        { delay: 4, colSpan: 2, icon: '\ud83d\udcd0', title: 'Key Rules', html: "<strong>Pauli Exclusion:</strong> max 2e\u207b per orbital, opposite spins (\u2191\u2193). Can't have same 4 quantum numbers.<br/><strong>Hund's Rule:</strong> fill each orbital singly before pairing (\u2191_ \u2191_ before \u2191\u2193) \u2014 minimises repulsion.<br/>e.g. C (2p\u00b2): two 2p orbitals each singly filled (\u2191_ \u2191_ _)." },
      ]
    }
  ],
""",

'note_1_2_7.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Electronic Configuration',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.7',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udcdd', title: 'Full Configuration', html: 'List all subshells in energy order.<br/>e.g. Na: <strong>1s\u00b2 2s\u00b2 2p\u2076 3s\u00b9</strong><br/>e.g. Fe: <strong>1s\u00b2 2s\u00b2 2p\u2076 3s\u00b2 3p\u2076 3d\u2076 4s\u00b2</strong>' },
        { delay: 1, colSpan: 1, icon: '\ud83c\udff7\ufe0f', title: 'Abbreviated (Noble Gas)', html: 'Replace inner-shell electrons with the noble gas symbol.<br/>e.g. Na: <strong>[Ne] 3s\u00b9</strong><br/>e.g. Fe: <strong>[Ar] 3d\u2076 4s\u00b2</strong><br/>Shows valence electrons clearly.' },
        { delay: 2, colSpan: 1, icon: '\u26a1', title: '4s vs 3d: Ions', html: '4s fills before 3d, but <strong>4s empties first</strong> when forming transition metal cations.<br/>Fe\u00b2\u207a: [Ar] 3d\u2076 (loses both 4s electrons).<br/>Fe\u00b3\u207a: [Ar] 3d\u2075 (loses an additional 3d electron).' },
        { delay: 3, colSpan: 2, icon: '\ud83d\uddfa\ufe0f', title: 'Blocks of the Periodic Table', html: '<strong>s-block:</strong> Groups 1 & 2 (valence electrons in s subshell).<br/><strong>p-block:</strong> Groups 3\u20138/0 (valence electrons in p subshell).<br/><strong>d-block:</strong> Transition metals (filling d subshell).<br/><strong>f-block:</strong> Lanthanides & Actinides (filling f subshell).' },
      ]
    }
  ],
""",

'note_1_2_8.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Periodic Trends in Properties',
      subtitle: 'WCH11 \u2014 Chemistry Topic 2.8',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udccf', title: 'Atomic Radius', html: '<strong>Across Period:</strong> decreases left \u2192 right (more protons, same shielding, stronger pull on electrons).<br/><strong>Down Group:</strong> increases (extra electron shells added).' },
        { delay: 1, colSpan: 1, icon: '\u26a1', title: 'Ionisation Energy', html: '<strong>Across Period:</strong> generally increases (greater nuclear charge, smaller radius).<br/><strong>Down Group:</strong> decreases (more shielding, greater distance from nucleus).' },
        { delay: 2, colSpan: 1, icon: '\ud83e\uddf2', title: 'Electronegativity', html: '<strong>Across Period:</strong> increases left \u2192 right.<br/><strong>Down Group:</strong> decreases.<br/>Fluorine (F) is the most electronegative element (Pauling: 4.0).' },
        { delay: 3, colSpan: 3, icon: '\ud83c\udf21\ufe0f', title: 'Period 3 Melting Points', html: '<strong>Na \u2192 Al:</strong> increases \u2014 metallic bonding strengthens with more delocalised electrons and higher nuclear charge.<br/><strong>Si:</strong> very high (\u22481410\u00b0C) \u2014 giant covalent lattice; many strong covalent bonds.<br/><strong>P\u2084, S\u2088, Cl\u2082, Ar:</strong> low \u2014 simple molecular; only weak van der Waals forces to overcome.' },
      ]
    }
  ],
""",

# ──────────────────────── TOPIC 3 ────────────────────────

'note_1_3_0.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Ionic Bonding',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.0',
      elements: [
        { delay: 0, colSpan: 1, icon: '\u26a1', title: 'Ion Formation', html: '<strong>Metals</strong> lose electrons \u2192 positive cations.<br/><strong>Non-metals</strong> gain electrons \u2192 negative anions.<br/>Driven by achieving stable noble gas electron configuration.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udd17', title: 'Ionic Bond', html: 'Strong <strong>electrostatic attraction</strong> between oppositely charged ions.<br/>Non-directional \u2014 acts equally in all directions.<br/>e.g. Na\u207a + Cl\u207b \u2192 NaCl.' },
        { delay: 2, colSpan: 1, icon: '\u270f\ufe0f', title: 'Dot-Cross Diagrams', html: 'Show outer-shell electrons only.<br/>Use dots (\u2022) for one atom, crosses (\u00d7) for the other.<br/>Draw brackets with charge outside: [Na]\u207a [\u2758Cl\u2758]\u207b.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udd2c', title: 'Evidence for Ionic Species', html: 'X-ray diffraction \u2192 regular lattice of alternating +/\u2212 ions confirmed.<br/>High melting points \u2192 strong ionic forces require lots of energy to break.<br/>Molten/aqueous solutions conduct electricity \u2192 free-moving ions carry charge.<br/>Crystals shatter when struck (like charges align at slip plane and repel).' },
      ]
    }
  ],
""",

'note_1_3_1.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Ionic Lattice Structure',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.1',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83c\udfd7\ufe0f', title: 'Giant Ionic Lattice', html: 'Regular 3D arrangement of alternating cations and anions.<br/><strong>NaCl:</strong> each Na\u207a surrounded by 6 Cl\u207b (6:6 coordination).<br/>Held by electrostatic attractions in all directions.' },
        { delay: 1, colSpan: 1, icon: '\ud83c\udf21\ufe0f', title: 'High Melting Points', html: 'Large amounts of energy needed to break all ionic bonds.<br/><strong>Higher charge ions \u2192 higher mp:</strong> MgO (mp 2852\u00b0C) &gt;&gt; NaCl (mp 801\u00b0C).<br/><strong>Smaller ions \u2192 shorter bonds \u2192 stronger \u2192 higher mp.</strong>' },
        { delay: 2, colSpan: 1, icon: '\u26a1', title: 'Electrical Conductivity', html: '<strong>Solid:</strong> Does NOT conduct \u2014 ions fixed in lattice positions.<br/><strong>Molten or aqueous:</strong> DOES conduct \u2014 ions are free to move and carry charge.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udd2c', title: 'Physical Properties', html: '<strong>Hard and brittle:</strong> lattice resists distortion; planes of like charges repel when shifted \u2192 shatters.<br/><strong>Soluble in water:</strong> polar water molecules solvate (surround and pull apart) the ions.<br/><strong>Insoluble in non-polar solvents</strong> \u2014 insufficient energy from non-polar interactions.' },
      ]
    }
  ],
""",

'note_1_3_2.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Covalent Bonding',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.2',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83e\udd1d', title: 'Covalent Bond', html: 'A <strong>shared pair of electrons</strong> between two atoms.<br/>Both atoms\u2019 nuclei attract the shared electrons.<br/>Occurs between non-metals.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udd22', title: 'Bond Types', html: '<strong>Single:</strong> 1 shared pair (e.g. H\u2012H, Cl\u2012Cl).<br/><strong>Double:</strong> 2 shared pairs (e.g. O=O, C=O).<br/><strong>Triple:</strong> 3 shared pairs (e.g. N\u2261N, C\u2261C).' },
        { delay: 2, colSpan: 1, icon: '\u27a1\ufe0f', title: 'Dative (Coordinate) Bond', html: 'Both electrons in the shared pair from the <strong>same atom</strong>.<br/>Shown by an arrow (\u2192) from donor to acceptor.<br/>e.g. NH\u2084\u207a: N donates a lone pair to H\u207a; Al\u2082Cl\u2086, CO.' },
        { delay: 3, colSpan: 2, icon: '\u270f\ufe0f', title: 'Dot-Cross Diagram Rules', html: '\u2022 Show outer-shell electrons only.<br/>\u2022 Use dots (\u2022) from one atom, crosses (\u00d7) from another.<br/>\u2022 Shared pairs in overlapping region between atoms.<br/>\u2022 Lone pairs on the atom (not shared).<br/>e.g. H\u2082O: 2 bonding pairs + 2 lone pairs on O.' },
      ]
    }
  ],
""",

'note_1_3_3.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Metallic Bonding',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.3',
      elements: [
        { delay: 0, colSpan: 2, icon: '\ud83c\udf0a', title: 'Sea of Delocalised Electrons', html: 'Metal ions (cations) in a <strong>regular close-packed lattice</strong>, surrounded by a <strong>sea of delocalised electrons.</strong><br/>Metallic bond = electrostatic attraction between cations and the electron sea.' },
        { delay: 1, colSpan: 1, icon: '\u26a1', title: 'Electrical Conductivity', html: 'Delocalised electrons are free to move \u2192 conducts electricity in <strong>all states</strong> (unlike ionic substances).<br/>Also conducts heat.' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udd28', title: 'Malleability & Ductility', html: 'Layers of metal cations can slide over each other \u2014 the electron sea readjusts.<br/>No brittle fracture (unlike ionic lattice).' },
        { delay: 3, colSpan: 2, icon: '\ud83c\udf21\ufe0f', title: 'Strength & Melting Point', html: '<strong>More delocalised electrons \u2192 stronger metallic bond \u2192 higher mp.</strong><br/>e.g. Mg (2+, 2 delocalised e\u207b): mp 650\u00b0C &gt;&gt; Na (1+, 1 delocalised e\u207b): mp 98\u00b0C.<br/>Tungsten (W): mp 3422\u00b0C \u2014 highest of all metals.' },
      ]
    }
  ],
""",

'note_1_3_4.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'VSEPR & Molecular Shapes',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.4',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udd04', title: 'VSEPR Rule', html: '<strong>Valence Shell Electron Pair Repulsion:</strong><br/>Electron pairs around a central atom repel each other and arrange to maximise separation (minimise repulsion).' },
        { delay: 1, colSpan: 2, icon: '\ud83d\udcd0', title: 'Shapes & Bond Angles', html: '<strong>2 bp:</strong> Linear \u2014 180\u00b0 (CO\u2082, BeCl\u2082).<br/><strong>3 bp:</strong> Trigonal planar \u2014 120\u00b0 (BF\u2083, AlCl\u2083).<br/><strong>4 bp:</strong> Tetrahedral \u2014 109.5\u00b0 (CH\u2084, CCl\u2084).<br/><strong>3 bp + 1 lp:</strong> Trigonal pyramidal \u2014 \u2248107\u00b0 (NH\u2083).<br/><strong>2 bp + 2 lp:</strong> Bent (V-shape) \u2014 \u2248104.5\u00b0 (H\u2082O).' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udc41\ufe0f', title: 'Lone Pair Effect', html: 'Lone pairs repel more than bonding pairs.<br/>Each lone pair reduces bond angles by \u22482.5\u00b0.<br/>Order of repulsion: lp\u2013lp > lp\u2013bp > bp\u2013bp.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udca1', title: 'Exam Tips', html: 'Count: <strong>bonding pairs + lone pairs</strong> on central atom to determine shape.<br/>State the shape name AND the bond angle.<br/>SF\u2086: 6 bp around S \u2192 octahedral, 90\u00b0.<br/>PCl\u2085: 5 bp \u2192 trigonal bipyramidal, 90\u00b0/120\u00b0.' },
      ]
    }
  ],
""",

'note_1_3_5.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Bond Polarity & Electronegativity',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.5',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83e\uddf2', title: 'Electronegativity', html: 'Ability of an atom to <strong>attract bonding electrons</strong> towards itself in a covalent bond.<br/>Pauling scale: F = 4.0 (highest); Cs/Fr \u22480.7 (lowest).<br/>Increases across a period; decreases down a group.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udd04', title: 'Polar Bonds', html: 'Different electronegativities \u2192 unequal electron sharing.<br/>More electronegative atom gains partial negative charge (<strong>\u03b4\u2212</strong>); the other gains <strong>\u03b4+</strong>.<br/>e.g. H\u207a\u03b4\u2013F\u207b\u03b4 bond in HF.' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udd00', title: 'Polar vs Non-Polar Molecules', html: '<strong>Non-polar:</strong> symmetrical \u2014 dipoles cancel. (CO\u2082, CCl\u2084, BF\u2083).<br/><strong>Polar:</strong> asymmetrical \u2014 net dipole moment. (H\u2082O, HCl, NH\u2083, SO\u2082).' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udca1', title: 'Dipole Moments & Symmetry', html: 'A <strong>dipole moment (\u03bc)</strong> indicates overall polarity \u2014 magnitude and direction.<br/>Molecules with polar bonds can still be <em>non-polar</em> if their geometry causes dipoles to cancel.<br/>e.g. BF\u2083: 3 polar B\u2013F bonds, trigonal planar \u2192 dipoles cancel exactly \u2192 non-polar molecule.' },
      ]
    }
  ],
""",

'note_1_3_6.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Simple Molecular Substances',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.6',
      elements: [
        { delay: 0, colSpan: 2, icon: '\ud83d\udd2c', title: 'Key Properties', html: '<strong>Low melting and boiling points</strong> \u2014 only weak intermolecular forces to overcome (not covalent bonds themselves).<br/><strong>Non-conductors</strong> \u2014 no free ions or electrons.<br/><strong>Solubility:</strong> \u201alike dissolves like\u201d \u2014 polar dissolves in polar solvents; non-polar in non-polar.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udcc8', title: 'Boiling Point Trend', html: 'Increases with molecular mass \u2014 more electrons \u2192 stronger London dispersion forces.<br/>e.g. Noble gases: He < Ne < Ar < Kr (bp increases down Group 0).' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udca7', title: 'Water & HF Exception', html: 'H\u2082O (bp 100\u00b0C) and HF (bp 20\u00b0C) are anomalously high due to <strong>hydrogen bonding.</strong><br/>Compare: H\u2082S bp = \u221260\u00b0C (only van der Waals forces).' },
        { delay: 3, colSpan: 2, icon: '\u26db\ufe0f', title: 'Examples', html: '<strong>Non-polar:</strong> I\u2082 (sublimes at 184\u00b0C), CH\u2084 (\u2212161\u00b0C), Cl\u2082 (\u221234\u00b0C).<br/><strong>Polar:</strong> HCl (\u221285\u00b0C), SO\u2082 (\u221210\u00b0C), H\u2082O (100\u00b0C \u2014 hydrogen bonding elevates bp substantially).<br/>Covalent bonds NOT broken during melting/boiling.' },
      ]
    }
  ],
""",

'note_1_3_7.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Giant Covalent Structures',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.7',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udc8e', title: 'Diamond', html: 'Each C bonded to <strong>4 C atoms</strong> (tetrahedral, 109.5\u00b0).<br/>Giant 3D covalent lattice.<br/><strong>Hardest natural substance</strong> \u2014 mp \u22483550\u00b0C.<br/>Non-conductor (no free electrons).' },
        { delay: 1, colSpan: 1, icon: '\u270f\ufe0f', title: 'Graphite', html: 'Each C bonded to <strong>3 C atoms</strong> (trigonal planar, 120\u00b0) in hexagonal layers.<br/>4th electron delocalised between layers \u2192 <strong>good electrical conductor.</strong><br/>Layers held by weak van der Waals forces \u2192 slippery/lubricant.' },
        { delay: 2, colSpan: 1, icon: '\ud83c\udfd6\ufe0f', title: 'Silicon Dioxide (SiO\u2082)', html: 'Each Si bonded to <strong>4 O atoms</strong> in giant tetrahedral lattice.<br/>mp \u22481650\u00b0C \u2014 very high.<br/>Hard, brittle, non-conductor. Forms quartz and sand.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udcca', title: 'Properties vs Simple Molecules', html: '<strong>Giant covalent:</strong> very high mp/bp, hard, non-conductor (except graphite), insoluble.<br/><strong>Simple molecular:</strong> low mp/bp, soft, always non-conductor, solubility depends on polarity.<br/><em>Key difference:</em> giant structures require breaking many strong covalent bonds to melt/boil.' },
      ]
    }
  ],
""",

'note_1_3_8.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Bond Length & Bond Strength',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.8',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83d\udccf', title: 'Bond Length', html: 'Distance between bonded nuclei.<br/><strong>Single > Double > Triple</strong> bond length (length decreases with bond order).<br/>e.g. C\u2013C: 154 pm; C=C: 134 pm; C\u2261C: 120 pm.' },
        { delay: 1, colSpan: 1, icon: '\ud83d\udcaa', title: 'Bond Enthalpy', html: 'Energy to break 1 mol of a bond in gaseous molecules (kJ mol\u207b\u00b9).<br/><strong>Higher bond order \u2192 greater bond enthalpy.</strong><br/>e.g. C\u2013C: 347; C=C: 612; C\u2261C: 838 kJ mol\u207b\u00b9.' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udd2c', title: 'Factors Affecting Strength', html: 'Bond order: triple > double > single.<br/>Atom size: smaller atoms \u2192 shorter bonds \u2192 stronger.<br/>e.g. H\u2013F (567) > H\u2013Cl (432) > H\u2013Br (366) > H\u2013I (298) kJ mol\u207b\u00b9.' },
        { delay: 3, colSpan: 2, icon: '\ud83e\uddee', title: 'Using Average Bond Enthalpies', html: '\u0394H \u2248 \u03a3(bonds broken) \u2212 \u03a3(bonds formed)<br/>Breaking bonds = endothermic (+ve); forming bonds = exothermic (\u2212ve).<br/>Values are <em>averages</em> \u2014 results are approximate because actual bond enthalpies vary with molecular environment.' },
      ]
    }
  ],
""",

'note_1_3_9.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Comparing Types of Structure',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.9',
      elements: [
        { delay: 0, colSpan: 1, icon: '\u26a7\ufe0f', title: 'Ionic', html: '<strong>High mp/bp</strong> \u2014 strong ionic bonds.<br/><strong>Conducts</strong> when molten or in aqueous solution only.<br/><strong>Hard &amp; brittle;</strong> soluble in polar solvents.' },
        { delay: 1, colSpan: 1, icon: '\ud83c\udf0a', title: 'Metallic', html: '<strong>Variable mp/bp</strong> (Na: 98\u00b0C; W: 3422\u00b0C).<br/><strong>Conducts in all states</strong> \u2014 delocalised electrons.<br/><strong>Malleable &amp; ductile.</strong>' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udc8e', title: 'Giant Covalent', html: '<strong>Very high mp/bp</strong> \u2014 many strong covalent bonds.<br/><strong>Non-conductor</strong> (except graphite).<br/>Hard; insoluble in most solvents.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udd2c', title: 'Simple Molecular', html: '<strong>Low mp/bp</strong> \u2014 only weak IMFs between molecules.<br/><strong>Non-conductor</strong> \u2014 no ions or free electrons.<br/>Solubility depends on polarity.<br/><em>Key:</em> covalent bonds within molecules are NOT broken on melting/boiling; only IMFs are overcome.' },
      ]
    }
  ],
""",

'note_1_3_10.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Intermolecular Forces',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.10',
      elements: [
        { delay: 0, colSpan: 1, icon: '\u26a1', title: 'London Dispersion Forces', html: 'Present in <em>all</em> molecules.<br/>Caused by <strong>instantaneous dipoles</strong> inducing temporary dipoles in neighbours.<br/>Strength increases with number of electrons (more polarisable).' },
        { delay: 1, colSpan: 1, icon: '\u2295\u2296', title: 'Permanent Dipole\u2013Dipole', html: 'Between polar molecules with permanent \u03b4+ and \u03b4\u2212 ends.<br/>Stronger than London forces for molecules of similar mass.<br/>e.g. HCl, SO\u2082, CH\u2082Cl\u2082.' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udca7', title: 'Hydrogen Bonding', html: 'Special, <strong>strongest</strong> intermolecular force.<br/>Requires H directly bonded to <strong>F, O, or N</strong>.<br/>H interacts with a lone pair on another F/O/N.<br/>e.g. H\u2082O, HF, NH\u2083, carboxylic acids, DNA base pairs.' },
        { delay: 3, colSpan: 2, icon: '\ud83d\udcc8', title: 'Effect on Boiling Point', html: '<strong>Strength order:</strong> London < dipole\u2013dipole < hydrogen bonding.<br/>All IMFs increase with molecular size (more electrons).<br/>H\u2082O bp (100\u00b0C) &gt;&gt; H\u2082S bp (\u221260\u00b0C) despite higher M\u1d63 for H\u2082S \u2014 hydrogen bonding in H\u2082O dominates.' },
      ]
    }
  ],
""",

'note_1_3_11.js': """  presentationSlides: [
    {
      layout: 'bento',
      title: 'Core Practical 2: Calorimetry',
      subtitle: 'WCH11 \u2014 Chemistry Topic 3.11',
      elements: [
        { delay: 0, colSpan: 1, icon: '\ud83e\uddea', title: 'Aim', html: 'Measure the <strong>enthalpy change (\u0394H)</strong> of a reaction using a simple calorimeter.<br/>e.g. neutralisation of acid and alkali, or dissolving a salt.' },
        { delay: 1, colSpan: 1, icon: '\ud83e\uddee', title: 'Key Formula', html: '<strong>q = mc\u0394T</strong><br/>q = heat energy (J)<br/>m = mass of solution (g)<br/>c = specific heat capacity (4.18 J g\u207b\u00b9 K\u207b\u00b9)<br/>\u0394T = T\u2082 \u2212 T\u2081 (K or \u00b0C)' },
        { delay: 2, colSpan: 1, icon: '\ud83d\udccb', title: 'Method Summary', html: '1. Measure volumes/masses.<br/>2. Record initial temperature T\u2081.<br/>3. Mix reactants; stir; record max/min temperature T\u2082.<br/>4. Calculate \u0394T, then q = mc\u0394T.<br/>5. Convert q to \u0394H per mole.' },
        { delay: 3, colSpan: 2, icon: '\u26a0\ufe0f', title: 'Sources of Error & Improvements', html: '<strong>Heat loss to surroundings:</strong> use polystyrene cup, lid, draught shield.<br/><strong>Heat capacity of calorimeter ignored:</strong> leads to slight underestimate of \u0394H.<br/><strong>Extrapolation method:</strong> plot temperature vs time; extrapolate cooling curve back to mixing point for more accurate \u0394T.' },
      ]
    }
  ],
""",

}


def inject(filepath, slides_js):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    target = '  recall: {'
    if 'presentationSlides' in content:
        print(f'SKIP (already has slides): {filepath}')
        return
    if target not in content:
        print(f'ERROR (recall not found): {filepath}')
        return

    new_content = content.replace(target, slides_js + target, 1)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'OK: {filepath}')


for filename, slides in SLIDES.items():
    inject(BASE + filename, slides)

print('\nDone.')
