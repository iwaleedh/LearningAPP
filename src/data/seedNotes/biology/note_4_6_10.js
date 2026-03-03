export const note_biology_4_6_10 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand infection control measures (hand hygiene, aseptic technique, PPE, isolation) and responsible antibiotic prescribing practices. Know examples of healthcare-associated infections (HCAI) such as MRSA and Clostridium difficile.'
      },
      terms: []
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Infection Control and Antibiotic Stewardship', level: 2 },
      terms: []
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Healthcare-associated infections (HCAIs), also called nosocomial infections, are serious and costly complications. Infection control measures prevent transmission of pathogens within healthcare settings. Responsible antibiotic prescribing (antibiotic stewardship) reduces selection of resistant bacteria. Together, these strategies protect patients and slow antibiotic resistance.'
      },
      terms: []
    },
    {
      id: 'h-hand-hygiene',
      type: 'heading',
      data: { text: 'Hand Hygiene', level: 2 },
      terms: []
    },
    {
      id: 'p-hand-hygiene-1',
      type: 'paragraph',
      data: {
        text: 'Hand hygiene is the single most effective infection control measure. Hands become contaminated by touching patients, bodily fluids, or contaminated surfaces. If not cleaned, hands transmit pathogens to other patients, equipment, or the same patient\'s mucous membranes. Simple handwashing with soap and water removes most pathogens mechanically.'
      },
      terms: []
    },
    {
      id: 'list-hand-hygiene',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'When to wash hands: before and after patient contact, before clean procedures, after exposure to bodily fluids, after touching contaminated surfaces, before eating/toileting, after removing gloves.',
          'Method: wet hands, apply soap, rub all surfaces (palms, backs, fingers, thumbs, under nails) for 20+ seconds, rinse thoroughly, dry with clean towel.',
          'Alcohol-based hand sanitiser: effective when hands are not visibly soiled; kills most bacteria and viruses by denaturing proteins.',
          'Impact: hand hygiene reduces HCAI by up to 50%. It is remarkably simple yet often neglected in healthcare settings.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-hand-hygiene',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hand Hygiene Effectiveness',
        text: 'Single most effective infection control measure; reduces HCAIs by 50%; simple and inexpensive; requires consistent adherence. WHO and CDC emphasize hand hygiene as a core patient safety intervention.'
      },
      terms: []
    },
    {
      id: 'h-aseptic',
      type: 'heading',
      data: { text: 'Aseptic Technique', level: 2 },
      terms: []
    },
    {
      id: 'p-aseptic-1',
      type: 'paragraph',
      data: {
        text: 'Aseptic technique is a set of practices that minimises microbial contamination during medical procedures. It involves creating and maintaining a sterile field (clean area free of pathogens) during procedures such as inserting catheters, conducting surgical procedures, or preparing injections.'
      },
      terms: []
    },
    {
      id: 'list-aseptic',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Sterilisation: Equipment is sterilised using heat (autoclave), chemicals (ethylene oxide), or radiation (gamma rays) to eliminate all microorganisms, including spores.',
          'Sterile field setup: Work on a clean, sterile surface; keep sterile items away from non-sterile items; keep hands above waist and away from sterile fields.',
          'Hand preparation: Hand hygiene before donning sterile gloves; sterile gloves protect both patient and healthcare worker.',
          'Minimal contamination: Keep procedure area isolated; use sterile drapes; avoid talking/coughing over sterile fields (aerosol transmission).',
          'Compliance: Any breach of aseptic technique requires restarting with fresh sterile equipment.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-aseptic',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Aseptic Technique Principles',
        text: 'Sterilise equipment; create sterile field; maintain asepsis throughout procedure; any contamination requires restart. Prevents surgical site infections, bloodstream infections from catheters, and other HCAIs. Critical in operating theatres, ICUs, and procedure rooms.'
      },
      terms: []
    },
    {
      id: 'h-ppe',
      type: 'heading',
      data: { text: 'Personal Protective Equipment (PPE)', level: 2 },
      terms: []
    },
    {
      id: 'p-ppe-1',
      type: 'paragraph',
      data: {
        text: 'Personal protective equipment (PPE) includes gloves, gowns, masks, and eye protection that protect healthcare workers and patients from pathogenic exposure. PPE effectiveness depends on correct selection, proper use, and appropriate removal.'
      },
      terms: []
    },
    {
      id: 'list-ppe',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Gloves: Prevent direct contact with blood and bodily fluids; must be changed between patients and procedures; nitrile preferred (latex allergy consideration).',
          'Gowns: Fluid-resistant gowns protect against splashing of blood or bodily fluids during procedures; must cover arms and torso.',
          'Masks: Surgical masks (procedure masks) protect the wearer from respiratory droplets and protect patients from the wearer\'s respiratory pathogens. N95 respirators provide higher protection for airborne pathogens.',
          'Eye protection: Face shields or goggles protect against splashing; important in emergency departments and operating theatres.',
          'Removal order: PPE must be removed in correct order to avoid contamination (gown, gloves, mask, eye protection) and hands washed immediately after.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-ppe',
      type: 'callout',
      data: {
        style: 'key',
        title: 'PPE Selection and Use',
        text: 'Must match transmission route of pathogen (contact, droplet, airborne). Improper use (reusing gloves, touching face in full PPE) reduces effectiveness. Essential during pandemics (COVID-19) and high-risk procedures (emergency, surgery).'
      },
      terms: []
    },
    {
      id: 'h-isolation',
      type: 'heading',
      data: { text: 'Patient Isolation', level: 2 },
      terms: []
    },
    {
      id: 'p-isolation-1',
      type: 'paragraph',
      data: {
        text: 'Isolation is the separation of patients with highly contagious pathogens to prevent transmission to other patients. Isolation type depends on the transmission route (contact, droplet, or airborne).'
      },
      terms: []
    },
    {
      id: 'list-isolation',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Contact isolation: Pathogens spread via direct/indirect contact (skin-to-skin, fomites). Example: MRSA (methicillin-resistant Staphylococcus aureus), C. difficile, norovirus. Measures: private room preferred, gloves and gowns, hand hygiene, dedicated equipment (blood pressure cuff).',
          'Droplet isolation: Pathogens spread via large droplets (>5 microm) from coughing/sneezing, transmission distance ~1–2 metres. Example: influenza, measles, pertussis. Measures: private room, surgical mask for healthcare workers, limited visitor exposure.',
          'Airborne isolation: Pathogens spread via small aerosolized particles (<5 microm) that remain suspended. Example: tuberculosis, measles, varicella. Measures: negative-pressure room (air flows into room), N95 respirators, minimal visitor exposure.'
        ]
      },
      terms: []
    },
    {
      id: 'callout-isolation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Isolation Precautions',
        text: 'Contact (MRSA, C. diff): gloves, gowns. Droplet (flu, measles): masks, distance. Airborne (TB, varicella): N95, negative-pressure room. Correct precautions prevent nosocomial spread and protect staff and other patients.'
      },
      terms: []
    },
    {
      id: 'h-antibiotic-stewardship',
      type: 'heading',
      data: { text: 'Responsible Antibiotic Prescribing', level: 2 },
      terms: []
    },
    {
      id: 'p-stewardship-1',
      type: 'paragraph',
      data: {
        text: 'Antibiotic stewardship is the judicious use of antibiotics to maximise efficacy while minimising resistance development and adverse effects. Key principles:'
      },
      terms: []
    },
    {
      id: 'list-stewardship',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Culture-guided therapy: Obtain culture and susceptibility before prescribing; use broad-spectrum antibiotics initially (empiric therapy), then narrow to organism and susceptibility results.',
          'Complete course: Always complete the full antibiotic course even if symptoms resolve; incomplete therapy allows resistant survivors to proliferate.',
          'Avoid unnecessary use: Do not prescribe antibiotics for viral infections (cold, flu, most sore throats, cough); antibiotics do not work and promote resistance.',
          'De-escalation: Use the narrowest-spectrum, shortest-duration antibiotic effective for the infection; avoid overly broad drugs like vancomycin unless necessary.',
          'Infection prevention: Hand hygiene and aseptic technique reduce infection rates, reducing antibiotic need.',
          'Education: Inform patients why antibiotics are not used for viruses; explain importance of completing courses.'
        ]
      },
      terms: []
    },
    {
      id: 'h-hcai-examples',
      type: 'heading',
      data: { text: 'Examples of Healthcare-Associated Infections', level: 2 },
      terms: []
    },
    {
      id: 'h-mrsa',
      type: 'heading',
      data: { text: 'MRSA (Methicillin-Resistant Staphylococcus aureus)', level: 3 },
      terms: []
    },
    {
      id: 'p-mrsa-1',
      type: 'paragraph',
      data: {
        text: 'MRSA is Staphylococcus aureus resistant to methicillin and most beta-lactam antibiotics. It produces altered penicillin-binding proteins (PBPs) that have low affinity for beta-lactams. MRSA is commonly acquired in healthcare settings (hospital-associated MRSA, HA-MRSA) or in the community (community-associated MRSA, CA-MRSA). It causes wound infections, bloodstream infections, and pneumonia. Treatment requires vancomycin or other alternatives (linezolid, daptomycin).'
      },
      terms: []
    },
    {
      id: 'h-cdiff',
      type: 'heading',
      data: { text: 'Clostridium difficile Infection', level: 3 },
      terms: []
    },
    {
      id: 'p-cdiff-1',
      type: 'paragraph',
      data: {
        text: 'Clostridium difficile (now Clostridioides difficile) is a toxin-producing anaerobic bacterium that proliferates when normal gut flora is disrupted, especially after broad-spectrum antibiotic use. C. difficile produces toxins (toxin A and B) that damage the colon, causing antibiotic-associated diarrhea (AAD) or pseudomembranous colitis. Risk factors include prolonged hospitalisation, older age, and immunosuppression. Prevention: minimise unnecessary antibiotics, maintain hand hygiene (alcohol hand sanitiser does not kill spores). Treatment: stop causative antibiotic, use vancomycin or fidaxomicin (oral).'
      },
      terms: []
    },
    {
      id: 'tbl-hcai',
      type: 'comparisonTable',
      data: {
        headers: ['HCAI', 'Causative Agent', 'Route of Transmission', 'Risk Factors', 'Isolation Type', 'Treatment'],
        rows: [
          ['MRSA infection', 'S. aureus (beta-lactam resistant)', 'Contact (skin, wounds)', 'Surgery, indwelling devices, prior abx', 'Contact precautions', 'Vancomycin, linezolid'],
          ['C. difficile infection', 'C. difficile (toxin-producing)', 'Contact, spores', 'Broad-spectrum antibiotics, older age', 'Contact precautions', 'Vancomycin, fidaxomicin'],
          ['Catheter-associated UTI', 'E. coli, Pseudomonas, Klebsiella', 'Ascending via catheter', 'Prolonged catheterisation, female', 'Standard precautions', 'Fluoroquinolone, cephalosporin']
        ],
        caption: 'Common healthcare-associated infections, routes, and management'
      },
      terms: []
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Hand hygiene is the most effective control measure (reduces HCAIs 50%). Aseptic technique prevents contamination during procedures. PPE protects based on transmission route (contact/droplet/airborne). Isolation prevents spread. Antibiotic stewardship (complete courses, culture-guided, avoid viruses) slows resistance. MRSA and C. difficile are major HCAIs; both require proper control and responsible prescribing.',
        apply: 'A healthcare worker removes PPE after caring for a COVID-19 patient. In what order should PPE be removed and why? (Gown first, then gloves, then mask, then eye protection, then hand hygiene—minimises self-contamination)',
        analyze: 'Why is C. difficile infection associated with broad-spectrum antibiotic use? What role does the normal gut flora play?',
        evaluate: 'Some patients demand antibiotics for viral infections (e.g. "I need antibiotics for this cold"). How would you educate the patient about ineffectiveness and harm, balancing empathy with public health?'
      },
      terms: []
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can explain why hand hygiene is the most effective control measure', checked: false },
          { text: 'I understand aseptic technique and when it is used', checked: false },
          { text: 'I know the three types of isolation and their indications', checked: false },
          { text: 'I can match pathogens to isolation types (contact, droplet, airborne)', checked: false },
          { text: 'I understand the principles of antibiotic stewardship', checked: false },
          { text: 'I know why complete antibiotic courses matter', checked: false },
          { text: 'I can explain why antibiotics should not be used for viral infections', checked: false },
          { text: 'I know the resistance mechanism of MRSA', checked: false },
          { text: 'I understand why C. difficile follows broad-spectrum antibiotic use', checked: false }
        ]
      },
      terms: []
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Infection control: hand hygiene (most effective, reduces HCAIs 50%), aseptic technique (sterilise equipment, maintain sterile field), PPE (gloves, gowns, masks—match transmission route), isolation (contact: MRSA, C. diff; droplet: flu; airborne: TB). Antibiotic stewardship: culture-guided therapy, complete courses, avoid unnecessary use (not for viruses), de-escalation. MRSA = altered PBPs, resistant to beta-lactams, requires vancomycin. C. difficile = overgrowth after antibiotic use, toxin-mediated colitis, requires toxin-targeting antibiotics (vancomycin, fidaxomicin).'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-hand-hygiene-1', prompt: 'Why is hand hygiene so effective at reducing HCAIs? What pathogens does it remove?' },
      { id: 'cue-2', blockId: 'list-isolation', prompt: 'Describe contact, droplet, and airborne isolation and give examples of each.' },
      { id: 'cue-3', blockId: 'list-stewardship', prompt: 'What are four principles of antibiotic stewardship?' },
      { id: 'cue-4', blockId: 'p-mrsa-1', prompt: 'What is MRSA and why is it resistant to beta-lactams?' },
      { id: 'cue-5', blockId: 'p-cdiff-1', prompt: 'Why does C. difficile infection follow broad-spectrum antibiotic use?' }
    ],
    summaryText: 'Hand hygiene: removes pathogens, reduces HCAIs 50%. Aseptic technique: sterilise, maintain sterile field. Isolation: contact (MRSA, C. diff, gloves/gowns), droplet (flu, masks), airborne (TB, N95/negative room). Stewardship: culture-guided, complete course, avoid viruses, de-escalate. MRSA: altered PBPs resist beta-lactams → vancomycin. C. difficile: disrupted flora + toxins → antibiotic-associated diarrhea → vancomycin/fidaxomicin.',
    ready: false
  },
  evidence: [
    { id: 'ev-1', title: 'Infection Prevention and Control', detail: 'CDC Guidelines for Isolation Precautions and Healthcare-Associated Infections', year: '2019', source: 'Centers for Disease Control and Prevention', tags: ['infection control', 'hand hygiene', 'isolation', 'HCAI'] }
  ]
};
