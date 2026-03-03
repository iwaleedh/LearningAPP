export const note_biology_2_4_6 = {
  blocks: [
    {
      type: 'objective',
      id: 'obj-antimicrobials',
      data: {
        text: 'Understand plant antimicrobial compounds, explain their ecological roles, and describe methods for testing antimicrobial efficacy.',
      },
    },
    {
      type: 'heading',
      id: 'h-plant-defences',
      data: { text: 'Plant Secondary Metabolites as Antimicrobials', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-intro-compounds',
      data: {
        text: 'Plants produce numerous bioactive compounds to defend against pathogens (fungi, bacteria) and herbivores. These secondary metabolites (compounds not directly involved in primary metabolism like photosynthesis or respiration) include terpenes, phenolics, and alkaloids. Many have antimicrobial properties, and some have been harnessed by humans as medicines. Historically, plants were the primary source of pharmaceuticals; even today, ~25% of pharmaceutical drugs are derived from plants.',
      },
    },
    {
      type: 'heading',
      id: 'h-terpenes',
      data: { text: 'Terpenes and Essential Oils', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-terpenes',
      data: {
        text: 'Terpenes are hydrocarbons built from isoprene units, giving antimicrobial and antifungal properties. Examples: menthol (Mentha × piperita, peppermint), eucalyptol (Eucalyptus, eucalyptus oil), limonene (citrus peels). These volatile oils are often found in specialized cells (trichomes, oil glands) on leaves and flowers, giving plants their characteristic aromas. When a plant is damaged (e.g. by herbivores), terpenes are released, repelling insects and inhibiting pathogen growth. Eucalyptus oil and tea tree oil (from Melaleuca alternifolia) are used topically for antiseptic and antifungal effects. Menthol is used in cough drops and topical analgesics.',
      },
    },
    {
      type: 'heading',
      id: 'h-phenolics',
      data: { text: 'Phenolic Compounds', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-phenolics-def',
      data: {
        text: 'Phenolic compounds (or polyphenols) are aromatic compounds containing one or more hydroxyl (-OH) groups on a benzene ring. Examples include flavonoids (quercetin, catechin in tea and wine), tannins (compounds in oak bark and tea), and salicylic acid (a phenolic acid, precursor to aspirin). Phenolics have antioxidant and antimicrobial properties. In plants, phenolics accumulate in response to pathogen infection or UV stress, inhibiting pathogen growth and providing photoprotection. Salicylic acid is both a plant hormone (signalling pathogen presence) and a direct antimicrobial agent. Aspirin (acetylsalicylic acid), derived from willow bark (Salix species), was one of the first plant-derived pharmaceuticals widely used by humans.',
      },
    },
    {
      type: 'heading',
      id: 'h-alkaloids',
      data: { text: 'Alkaloids', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-alkaloids',
      data: {
        text: 'Alkaloids are nitrogenous organic compounds with potent biological activities. Examples: quinine (from Cinchona officinalis, the cinchona tree), antimalarial drug; morphine and codeine (from Papaver somniferum, opium poppy), pain relief and cough suppressants; caffeine (Camellia sinensis, tea plant), stimulant; capsaicin (Capsicum peppers), creates "hot" sensation, antimicrobial. Many alkaloids are toxic to herbivores and pathogens, providing the plant defensive benefit. However, several are addictive or dangerous to humans (morphine, cocaine). Quinine was essential for treating malaria in tropical regions, enabling colonisation of malaria-endemic areas; it remains in use today, though artemisinin (from sweet wormwood, Artemisia annua) is now the preferred antimalarial.',
      },
    },
    {
      type: 'heading',
      id: 'h-drug-testing',
      data: { text: 'Testing Antimicrobial Efficacy: In Vitro Methods', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-disk-diffusion',
      data: {
        text: 'The disk diffusion method (also called the Kirby-Bauer method) is a standard in vitro (outside living organism) technique for testing antimicrobial activity. Procedure: (1) Prepare a bacterial culture (e.g. E. coli, Staphylococcus aureus) and spread uniformly on an agar plate (nutrient agar or Mueller-Hinton agar). (2) Cut sterile filter paper disks (~6 mm diameter) and soak them in the plant extract (or antibiotic solution). (3) Place the disks on the agar surface, pressing gently to ensure contact. (4) Incubate the plate at 25°C (or 37°C for human pathogens) for 24–48 hours. (5) Examine the plate for zones of inhibition (clear rings around the disk where bacteria have not grown, indicating antimicrobial activity). (6) Measure the diameter of each zone (mm). Larger zones indicate greater antimicrobial potency.',
      },
    },
    {
      type: 'paragraph',
      id: 'p-zone-interpretation',
      data: {
        text: 'Zone diameter interpretation: a zone <6 mm (no inhibition) indicates the extract is inactive or weakly active. A zone 6–10 mm indicates weak activity. A zone 10–20 mm indicates moderate activity. A zone >20 mm indicates strong activity. These thresholds vary with the bacteria tested and the antibiotic standard. Controls are essential: (1) Positive control—a disk with a known antibiotic (e.g. penicillin) should produce a substantial zone, confirming the bacteria are susceptible and the method is working. (2) Negative control—a disk with sterile water or plain solvent should produce no zone, confirming the solvent itself has no antimicrobial effect. Only zones around the test extract (beyond negative control) are attributed to the extract.',
      },
    },
    {
      type: 'heading',
      id: 'h-in-vivo-testing',
      data: { text: 'In Vivo and Clinical Testing', level: 2 },
    },
    {
      type: 'paragraph',
      id: 'p-animal-models',
      data: {
        text: 'In vivo testing involves living organisms. Animal models (e.g. mice, rats) are used to test efficacy and toxicity. A candidate drug (plant extract or pure compound) is administered orally, intravenously, or topically, and effects are monitored: Does it cure the infection? What is the minimum effective dose? What are toxic effects (side effects, organ damage)? Does it harm beneficial microbiota? Animal testing is essential before human trials but raises ethical concerns (pain, death, replacement alternatives). The 3Rs principle guides ethical animal testing: Replace (use alternatives like in vitro, computer models), Reduce (minimise numbers), Refine (minimise suffering).',
      },
    },
    {
      type: 'paragraph',
      id: 'p-clinical-trials',
      data: {
        text: 'Clinical trials in humans proceed through phases: Phase I (safety, dose range, ~20–100 healthy volunteers), Phase II (efficacy, side effects, ~100–300 patient volunteers with the condition), Phase III (efficacy confirmation, comparison to standard treatment, ~1000–3000 patients, often randomised and blinded), Phase IV (long-term monitoring post-approval). The gold standard is a double-blind, placebo-controlled trial: neither patients nor doctors know who receives the drug versus placebo, eliminating bias. For antimicrobial drugs, clinical trials demonstrate whether the plant extract (or derived drug) actually treats the infection in humans, with acceptable side effects and cost.',
      },
    },
    {
      type: 'callout',
      id: 'callout-key-plant-drugs',
      data: {
        style: 'key',
        title: 'From Plants to Pharmaceuticals',
        text: 'Many life-saving drugs originated from plants: quinine (malaria), aspirin (inflammation, pain), artemisinin (malaria), digoxin (heart failure from Digitalis purpurea), vincristine (leukaemia from Catharanthus roseus). Ethnobotany (studying traditional plant use by indigenous peoples) has guided pharmaceutical discovery; many modern drug candidates come from plants used traditionally for healing. Biodiversity conservation is thus not just ecological—it is medically and economically important.',
      },
    },
    {
      type: 'callout',
      id: 'callout-tip-controls',
      data: {
        style: 'tip',
        title: 'Controls in Disk Diffusion Testing',
        text: 'Always include: (1) Positive control (known antibiotic disc) to confirm bacteria are susceptible. (2) Negative control (sterile water or solvent disc) to ensure the solvent/medium has no activity. (3) Blank agar (no bacteria) to confirm agar is sterile. Without proper controls, you cannot confidently attribute results to the test extract.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: "Why do plants produce secondary metabolites with antimicrobial properties? Unlike animals, plants cannot flee from pathogens or mount an immune response involving mobile cells. Secondary metabolites (terpenes, phenolics, alkaloids) are produced as chemical defences — some inhibit bacterial cell wall synthesis, others disrupt microbial membranes or inhibit key enzymes.",
        apply: "In a disk diffusion assay, garlic extract produces a zone of inhibition of 18 mm diameter, clove extract 22 mm, and water control 0 mm. Calculate the area of inhibition for each extract (area = πr²). Which is most effective? What further experiments would determine the minimum inhibitory concentration (MIC)?",
        analyze: "Compare the mechanisms of action of three plant-derived antimicrobials: allicin (garlic, disrupts thiol-containing enzymes), thymol (thyme, disrupts bacterial membranes), and quinine (cinchona bark, intercalates DNA). For each, explain why these mechanisms are more harmful to microorganisms than to human cells.",
        evaluate: "Evaluate the process of drug development from plant extract to approved medicine. Consider the stages (ethnobotany → extraction → bioassay → isolation → clinical trials → approval), the time and cost involved (~10–15 years, ~$1–2 billion), and why so few plant compounds become approved drugs.",
      },
      terms: [],
    },
    {
      type: 'checklist',
      id: 'check-antimicrobials',
      data: {
        items: [
          { text: 'Know plant secondary metabolites include terpenes, phenolics, alkaloids', checked: false },
          { text: 'Can give examples of plant-derived drugs: quinine (malaria), aspirin (Salix), artemisinin', checked: false },
          { text: 'Understand disk diffusion method: soak disc in extract, place on agar, incubate, measure inhibition zone', checked: false },
          { text: 'Know interpretation: larger zones = stronger activity; need positive and negative controls', checked: false },
          { text: 'Understand progression: in vitro → animal models → clinical trials (Phase I–IV)', checked: false },
        ],
      },
    },
    {
      type: 'summary',
      id: 'sum-antimicrobials',
      data: {
        text: 'Plant secondary metabolites: terpenes (essential oils, menthol, eucalyptol; antibiotic/antifungal), phenolics (flavonoids, tannins, salicylic acid; antioxidant, antimicrobial), alkaloids (quinine for malaria, morphine for pain, caffeine, capsaicin; variable toxicity). Ecological role: defense against pathogens and herbivores. Drug examples: quinine (Cinchona, malaria), aspirin (Salix bark, salicylic acid), artemisinin (Artemisia, malaria), digoxin (Digitalis, heart), vincristine (Catharanthus, leukaemia). Disk diffusion (Kirby-Bauer): culture bacteria on agar, place extract-soaked discs, incubate 24–48h, measure inhibition zone diameter (mm). Interpretation: >20 mm = strong, 10–20 mm = moderate, 6–10 mm = weak, <6 mm = inactive. Controls: positive (known antibiotic), negative (solvent only). In vivo: animal models (efficacy, toxicity, 3Rs principle). Clinical trials: Phase I (safety), Phase II (efficacy), Phase III (confirmation), Phase IV (long-term monitoring). Gold standard: double-blind, placebo-controlled.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-intro-compounds',
        prompt: 'What are plant secondary metabolites, and how do they serve as antimicrobials?',
      },
      {
        id: 'cue-2',
        blockId: 'p-alkaloids',
        prompt: 'Give three examples of alkaloid plant-derived drugs and their uses.',
      },
      {
        id: 'cue-3',
        blockId: 'p-disk-diffusion',
        prompt: 'Describe the disk diffusion method for testing antimicrobial activity.',
      },
      {
        id: 'cue-4',
        blockId: 'p-clinical-trials',
        prompt: 'Outline the four phases of clinical trials for a new antimicrobial drug.',
      },
    ],
    summaryText: 'Plant secondary metabolites: terpenes (menthol, eucalyptol; essential oils, volatile), phenolics (salicylic acid, aspirin, flavonoids; antioxidant), alkaloids (quinine, morphine, caffeine, capsaicin; nitrogenous, potent, variable toxicity). Defense: against pathogens, herbivores, UV stress. Drug examples: quinine (cinchona tree, malaria), aspirin (willow bark, pain/inflammation), artemisinin (sweet wormwood, malaria), digoxin (foxglove, heart failure), vincristine (periwinkle, leukaemia). Disk diffusion: culture bacteria uniformly on agar, place sterile filter discs soaked in plant extract, incubate 24–48h at 25–37°C, measure inhibition zone (clear ring around disc) in mm. Interpretation: >20 mm = strong activity, 10–20 mm = moderate, 6–10 mm = weak, <6 mm = inactive/resistant. Controls: positive (known antibiotic disc, must show large zone), negative (sterile water/solvent disc, must show no zone). In vivo: animal models (mice, rats) test efficacy and toxicity; 3Rs (Replace, Reduce, Refine). Clinical trials: Phase I (safety, small healthy group), Phase II (efficacy, patient volunteers), Phase III (confirm efficacy, large group, randomised blinded), Phase IV (long-term monitoring). Gold standard: double-blind placebo-controlled.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Plant-Derived Antimicrobial Compounds',
      detail: 'Natural products screening has identified many plant antimicrobials (terpenes, phenolics, alkaloids) with therapeutic potential; disk diffusion and other in vitro methods enable rapid evaluation of antimicrobial efficacy before costly animal and clinical trials.',
      year: '2024',
      source: 'A-Level Biology Specification',
      tags: ['plant antimicrobials', 'drug testing', 'natural products'],
    },
  ],
};
