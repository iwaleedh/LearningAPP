export const note_olevel_biology_16_16_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Biology/16 Reproduction/16-3-3-sex-hormones-in-humans.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the roles of FSH, oestrogen, LH and progesterone in the menstrual cycle. State the role of testosterone in males. Explain puberty changes in males and females. Describe how hormones are used in contraception.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Female Sex Hormones and the Menstrual Cycle', level: 2 }
    },
    {
      id: 'call-1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Four Female Hormones',
        text: '<strong>FSH</strong> (Follicle-Stimulating Hormone) — secreted by pituitary gland; stimulates follicle development in ovary; causes oestrogen secretion.<br/><strong>Oestrogen</strong> — secreted by follicle/ovary; repairs and thickens uterus lining (endometrium); at high levels inhibits FSH (negative feedback) and stimulates LH release.<br/><strong>LH</strong> (Luteinising Hormone) — secreted by pituitary gland; surge triggers <strong>ovulation</strong> (egg release, day ~14); stimulates corpus luteum formation.<br/><strong>Progesterone</strong> — secreted by corpus luteum; maintains thickened uterus lining for possible implantation; inhibits FSH and LH; if no pregnancy, corpus luteum degenerates, progesterone falls, lining shed (menstruation).'
      }
    },
    {
      id: 'svg-1',
      type: 'svg',
      data: {
        caption: 'Hormone levels during the 28-day menstrual cycle',
        svg: `<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <rect width="520" height="260" fill="#fafafa" rx="8"/>
  <!-- Axes -->
  <line x1="55" y1="20" x2="55" y2="210" stroke="#555" stroke-width="1.5"/>
  <line x1="55" y1="210" x2="490" y2="210" stroke="#555" stroke-width="1.5"/>
  <text x="8" y="120" fill="#555" transform="rotate(-90 8 120)" font-size="10">Hormone level</text>
  <text x="270" y="230" text-anchor="middle" fill="#555">Day of cycle</text>
  <!-- Day markers -->
  <text x="55" y="225" text-anchor="middle" fill="#777" font-size="10">1</text>
  <text x="161" y="225" text-anchor="middle" fill="#777" font-size="10">8</text>
  <text x="213" y="225" text-anchor="middle" fill="#777" font-size="10">14</text>
  <text x="330" y="225" text-anchor="middle" fill="#777" font-size="10">21</text>
  <text x="490" y="225" text-anchor="middle" fill="#777" font-size="10">28</text>
  <!-- Vertical day 14 line -->
  <line x1="213" y1="20" x2="213" y2="210" stroke="#ccc" stroke-width="1" stroke-dasharray="4"/>
  <text x="213" y="15" text-anchor="middle" fill="#e57373" font-size="10">Ovulation</text>
  <!-- Oestrogen curve (peaks before day 14) -->
  <path d="M55,190 Q100,185 130,160 Q160,100 213,55 Q240,80 260,175 Q300,185 490,188" stroke="#ab47bc" stroke-width="2" fill="none"/>
  <!-- LH spike -->
  <path d="M185,200 Q200,120 213,35 Q226,120 240,200" stroke="#1e88e5" stroke-width="2" fill="none"/>
  <!-- Progesterone curve -->
  <path d="M55,200 Q213,200 240,200 Q260,165 330,80 Q370,100 400,145 Q450,185 490,200" stroke="#43a047" stroke-width="2" fill="none"/>
  <!-- FSH curve -->
  <path d="M55,175 Q80,155 120,110 Q140,90 160,140 Q180,180 490,190" stroke="#f4511e" stroke-width="2" fill="none"/>
  <!-- Legend -->
  <rect x="320" y="22" width="165" height="90" fill="white" stroke="#ddd" rx="4"/>
  <line x1="328" y1="38" x2="358" y2="38" stroke="#ab47bc" stroke-width="2"/>
  <text x="364" y="42" fill="#555">Oestrogen</text>
  <line x1="328" y1="55" x2="358" y2="55" stroke="#1e88e5" stroke-width="2"/>
  <text x="364" y="59" fill="#555">LH</text>
  <line x1="328" y1="72" x2="358" y2="72" stroke="#43a047" stroke-width="2"/>
  <text x="364" y="76" fill="#555">Progesterone</text>
  <line x1="328" y1="89" x2="358" y2="89" stroke="#f4511e" stroke-width="2"/>
  <text x="364" y="93" fill="#555">FSH</text>
  <text x="10" y="14" fill="#333" font-size="12" font-weight="bold">Menstrual Cycle Hormones</text>
</svg>`
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Male Sex Hormone', level: 2 }
    },
    {
      id: 'call-2',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testosterone',
        text: '<strong>Produced by:</strong> testes (interstitial cells), stimulated by LH from pituitary.<br/><strong>Functions:</strong> stimulates sperm production (spermatogenesis); controls development of male secondary sexual characteristics during puberty; promotes muscle growth and bone density.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Puberty Changes', level: 2 }
    },
    {
      id: 'tbl-1',
      type: 'comparisonTable',
      data: {
        caption: 'Secondary Sexual Characteristics at Puberty',
        headers: ['Feature', 'Males (testosterone)', 'Females (oestrogen)'],
        rows: [
          ['Body hair', 'Pubic, underarm, facial, body hair', 'Pubic and underarm hair'],
          ['Growth spurt', 'Rapid increase in height and muscle mass', 'Rapid increase in height'],
          ['Voice', 'Voice breaks / deepens', 'Slight deepening'],
          ['Reproductive system', 'Testes enlarge, sperm production begins', 'Ovaries begin releasing eggs (menstruation starts)'],
          ['Body shape', 'Shoulders broaden, increased muscle', 'Hips widen, breast development'],
          ['Skin', 'Increased sebum production (acne possible)', 'Increased sebum production (acne possible)']
        ]
      }
    },
    {
      id: 'h-4',
      type: 'heading',
      data: { text: 'Hormonal Contraception', level: 2 }
    },
    {
      id: 'para-1',
      type: 'paragraph',
      data: { text: 'The <strong>combined oral contraceptive pill</strong> contains synthetic <strong>oestrogen and progesterone</strong>. These hormones raise blood levels sufficiently to inhibit FSH secretion from the pituitary (negative feedback). Without FSH, no follicle develops and no egg matures — therefore <strong>ovulation is prevented</strong>. The pill is taken for 21 days then stopped for 7 days (allowing a withdrawal bleed).' }
    },
    {
      id: 'call-3',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Progesterone-Only Pill (Mini-pill)',
        text: 'This pill thickens cervical mucus (preventing sperm reaching egg) and thins the endometrium. It does not reliably suppress ovulation. It is often prescribed for women who cannot tolerate oestrogen.'
      }
    },
    {
      id: 'call-4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Exam Tip: Linking Hormones to Events',
        text: '<strong>FSH up →</strong> follicle grows → oestrogen rises.<br/><strong>Oestrogen high →</strong> inhibits FSH (stops another follicle growing) + triggers LH surge.<br/><strong>LH surge →</strong> ovulation (day 14).<br/><strong>Corpus luteum →</strong> progesterone → maintains lining.<br/><strong>No implantation →</strong> progesterone falls → lining shed = menstruation.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'FSH (pituitary) stimulates follicle and oestrogen production. Oestrogen rebuilds uterus lining and triggers LH surge. LH triggers ovulation. Progesterone (corpus luteum) maintains lining. Testosterone controls male sexual development and sperm production. Contraceptive pill uses oestrogen/progesterone to inhibit FSH and prevent ovulation.' }
    }
  ],
  recall: {
    enabled: true,
    ready: false,
    summaryText: 'FSH → follicle → oestrogen → LH surge → ovulation → corpus luteum → progesterone. Pill contains oestrogen/progesterone → inhibits FSH → no ovulation.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'What are the roles of FSH and LH in the menstrual cycle?', answer: 'FSH: stimulates follicle development and oestrogen secretion. LH: surge on day 14 triggers ovulation and stimulates corpus luteum formation.' },
      { id: 'cue-2', blockId: 'call-1', prompt: 'How does oestrogen regulate FSH levels (negative feedback)?', answer: 'High oestrogen levels inhibit FSH secretion from the pituitary gland, preventing another follicle from developing during the same cycle.' },
      { id: 'cue-3', blockId: 'call-2', prompt: 'State two functions of testosterone.', answer: 'Stimulates sperm production; controls development of male secondary sexual characteristics (e.g. facial hair, voice breaking, muscle growth).' },
      { id: 'cue-4', blockId: 'para-1', prompt: 'How does the combined contraceptive pill prevent pregnancy?', answer: 'It contains oestrogen and progesterone which inhibit FSH secretion. Without FSH, no follicle develops and no egg is released — ovulation is prevented.' }
    ]
  },
  evidence: [],
  mentions: []
};

export default note_olevel_biology_16_16_4;
