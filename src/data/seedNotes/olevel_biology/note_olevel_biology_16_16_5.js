export const note_olevel_biology_16_16_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/16 Reproduction/16-3-4-sexually-transmitted-infections.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define sexually transmitted infections (STIs). Describe the transmission, symptoms, and treatment of HIV and gonorrhoea. Explain methods of prevention of STIs.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'What is an STI?', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'A <strong>sexually transmitted infection (STI)</strong> is an infection that can be passed from one person to another through <strong>sexual contact</strong> (unprotected vaginal, anal, or oral sex). Some STIs can also be transmitted by other routes such as contaminated blood (shared needles), blood transfusions, or from mother to baby (during pregnancy, birth, or breastfeeding).' }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'HIV / AIDS', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'HIV (Human Immunodeficiency Virus)',
        text: '<strong>Pathogen:</strong> virus (HIV).<br/><strong>Transmission:</strong> unprotected sexual intercourse; sharing contaminated needles/syringes; infected blood transfusions; mother to baby (placenta, breast milk).<br/><strong>Action:</strong> HIV attacks and destroys <strong>T-helper lymphocytes</strong> (white blood cells), progressively weakening the immune system.<br/><strong>AIDS:</strong> when the immune system is so damaged the body cannot fight off infections/cancers that a healthy immune system would control (opportunistic infections).<br/><strong>Treatment:</strong> antiretroviral drugs (ARVs) slow HIV replication and delay progression to AIDS — there is <strong>no cure</strong>.<br/><strong>Prevention:</strong> use condoms; do not share needles; screen donated blood; mother-to-child transmission reduced by ARVs and avoiding breastfeeding.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Gonorrhoea', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Gonorrhoea',
        text: '<strong>Pathogen:</strong> bacterium (<em>Neisseria gonorrhoeae</em>).<br/><strong>Transmission:</strong> unprotected sexual intercourse; mother to baby during birth (eye infection in newborn).<br/><strong>Symptoms:</strong> painful urination; thick yellow/green discharge from penis or vagina; in females often no obvious symptoms (can be asymptomatic).<br/><strong>Complications if untreated:</strong> pelvic inflammatory disease, infertility, increased HIV risk.<br/><strong>Treatment:</strong> <strong>antibiotics</strong> (e.g. ceftriaxone) — but antibiotic-resistant strains are increasing.<br/><strong>Prevention:</strong> condoms; regular STI testing; contact tracing and partner treatment.'
      }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison: HIV vs Gonorrhoea',
        headers: ['Feature', 'HIV', 'Gonorrhoea'],
        rows: [
          ['Type of pathogen', 'Virus', 'Bacterium'],
          ['Transmission', 'Sexual contact, blood, mother-to-child', 'Sexual contact, mother-to-child (birth)'],
          ['Main target', 'T-helper lymphocytes (immune cells)', 'Mucous membranes (reproductive/urinary tract)'],
          ['Symptoms', 'Flu-like initially; immune failure leads to AIDS', 'Discharge, painful urination (often asymptomatic in females)'],
          ['Treatment', 'Antiretroviral drugs (no cure)', 'Antibiotics (curable if treated early)'],
          ['Long-term effect', 'Immune system failure, opportunistic infections', 'Infertility, pelvic inflammatory disease if untreated']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Syphilis', level: 2 }
    },
    {
      id: 'para-2',
      type: 'paragraph',
      data: { text: '<strong>Syphilis</strong> is caused by the bacterium <em>Treponema pallidum</em>. It progresses in stages: painless sore (chancre) at infection site → rash and flu-like symptoms → can affect heart and nervous system if untreated. Treated with <strong>penicillin</strong> (antibiotics). Can be passed from mother to baby during pregnancy (congenital syphilis).' }
    },
    {
      id: 'h-5',
      type: 'heading',
      data: { text: 'Prevention of STIs', level: 2 }
    },
    {
      id: 'list-1',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Condoms (barrier method):</strong> most effective physical barrier against STI transmission; also act as contraceptive.' },
          { text: '<strong>Regular STI testing and treatment:</strong> early diagnosis prevents spread and long-term complications.' },
          { text: '<strong>Abstinence or limiting sexual partners:</strong> reduces exposure risk.' },
          { text: '<strong>Not sharing needles/syringes:</strong> prevents blood-borne transmission (HIV, hepatitis).' },
          { text: '<strong>Screening of blood products:</strong> prevents HIV/hepatitis via transfusion.' },
          { text: '<strong>Antenatal screening:</strong> detecting and treating infections in pregnant women reduces mother-to-child transmission.' }
        ]
      }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Exam Distinction',
        text: 'HIV is a <strong>virus</strong> — it cannot be treated with antibiotics. Gonorrhoea and syphilis are <strong>bacteria</strong> — they can be treated with antibiotics. Always state the type of pathogen when asked.'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'HIV transmission routes (summary)',
        svg: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <rect width="480" height="220" fill="#fafafa" rx="8"/>
  <!-- Central label -->
  <ellipse cx="240" cy="110" rx="52" ry="32" fill="#e53935" opacity="0.85"/>
  <text x="240" y="105" text-anchor="middle" fill="white" font-weight="bold" font-size="13">HIV</text>
  <text x="240" y="120" text-anchor="middle" fill="white" font-size="11">Virus</text>
  <!-- Routes -->
  <!-- Sexual -->
  <rect x="20" y="48" width="120" height="36" rx="6" fill="#ffcdd2" stroke="#e57373"/>
  <text x="80" y="64" text-anchor="middle" fill="#b71c1c" font-size="11">Unprotected</text>
  <text x="80" y="78" text-anchor="middle" fill="#b71c1c" font-size="11">sexual contact</text>
  <line x1="140" y1="66" x2="188" y2="100" stroke="#e57373" stroke-width="1.5" marker-end="url(#arr)"/>
  <!-- Blood -->
  <rect x="20" y="135" width="120" height="36" rx="6" fill="#ffcdd2" stroke="#e57373"/>
  <text x="80" y="150" text-anchor="middle" fill="#b71c1c" font-size="11">Shared needles /</text>
  <text x="80" y="164" text-anchor="middle" fill="#b71c1c" font-size="11">blood transfusion</text>
  <line x1="140" y1="153" x2="188" y2="120" stroke="#e57373" stroke-width="1.5"/>
  <!-- Mother-baby -->
  <rect x="340" y="48" width="120" height="36" rx="6" fill="#ffcdd2" stroke="#e57373"/>
  <text x="400" y="64" text-anchor="middle" fill="#b71c1c" font-size="11">Mother to child</text>
  <text x="400" y="78" text-anchor="middle" fill="#b71c1c" font-size="11">(placenta/milk)</text>
  <line x1="340" y1="66" x2="292" y2="100" stroke="#e57373" stroke-width="1.5"/>
  <!-- Breastfeeding -->
  <rect x="340" y="135" width="120" height="36" rx="6" fill="#ffcdd2" stroke="#e57373"/>
  <text x="400" y="150" text-anchor="middle" fill="#b71c1c" font-size="11">Breastfeeding</text>
  <text x="400" y="164" text-anchor="middle" fill="#b71c1c" font-size="11">(breast milk)</text>
  <line x1="340" y1="153" x2="292" y2="120" stroke="#e57373" stroke-width="1.5"/>
  <text x="10" y="16" fill="#333" font-size="12" font-weight="bold">HIV Transmission Routes</text>
</svg>`
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'STIs are passed mainly through sexual contact. HIV (virus) destroys immune cells → AIDS; no cure, managed with ARVs. Gonorrhoea (bacterium) causes discharge and pain; curable with antibiotics. Prevention: condoms, testing, not sharing needles. Key distinction: viruses cannot be treated with antibiotics; bacteria can.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'HIV: virus, destroys T-lymphocytes, no cure, ARVs slow it. Gonorrhoea: bacterium, antibiotics cure it. STI prevention: condoms, testing, not sharing needles.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'How does HIV cause AIDS?', answer: 'HIV attacks and destroys T-helper lymphocytes (white blood cells), progressively weakening the immune system until it cannot fight off opportunistic infections or cancers — this stage is called AIDS.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Give two differences between HIV and gonorrhoea in terms of pathogen type and treatment.', answer: 'HIV is a virus (no antibiotic treatment, managed with ARVs, no cure). Gonorrhoea is a bacterium (treatable with antibiotics, curable if caught early).' },
      { id: 'cue-3', blockId: 'list-1', prompt: 'List three ways STIs can be prevented.', answer: 'Any three: using condoms; regular STI testing; abstinence/fewer partners; not sharing needles; screening blood products; antenatal screening.' },
      { id: 'cue-4', blockId: 'call-1', prompt: 'State two routes by which HIV can be transmitted other than sexual contact.', answer: 'Sharing contaminated needles/syringes; mother to child (via placenta, during birth, or through breast milk).' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_16_16_5;
