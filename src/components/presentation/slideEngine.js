/**
 * slideEngine.js
 * Converts a seed-note blocks[] array into an array of slide objects
 * consumable by the Presentation player.
 */

// ── Subject accent colours ─────────────────────────────────────────────────────
export const SUBJECT_COLORS = {
  chemistry:   { primary: '#6366f1', light: '#e0e7ff', dark: '#4338ca', emoji: '⚗️' },
  physics:     { primary: '#0ea5e9', light: '#e0f2fe', dark: '#0369a1', emoji: '⚡' },
  biology:     { primary: '#22c55e', light: '#dcfce7', dark: '#15803d', emoji: '🧬' },
  mathematics: { primary: '#f59e0b', light: '#fef3c7', dark: '#b45309', emoji: '📐' },
  economics:   { primary: '#ef4444', light: '#fee2e2', dark: '#b91c1c', emoji: '📊' },
  business:    { primary: '#8b5cf6', light: '#ede9fe', dark: '#6d28d9', emoji: '💼' },
  accounting:  { primary: '#14b8a6', light: '#ccfbf1', dark: '#0f766e', emoji: '🧾' },
  english:     { primary: '#ec4899', light: '#fce7f3', dark: '#be185d', emoji: '📝' },
};

export function getSubjectTheme(subject) {
  return SUBJECT_COLORS[subject?.toLowerCase()] ?? SUBJECT_COLORS.chemistry;
}

// ── Block stripping helpers ────────────────────────────────────────────────────

/** Strip HTML tags, return plain text (for titles) */
function stripHtml(html = '') {
  return String(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

/** Convert a list block's items into element objects */
function listToElements(items = [], startDelay = 0) {
  return items.map((item, i) => ({
    type: 'bullet',
    html: typeof item === 'string' ? item : item.text || '',
    delay: startDelay + i,
  }));
}

/** Convert a comparisonTable block into elements (header + rows) */
function tableToElements(data) {
  const elements = [
    { type: 'table-header', headers: data.headers || [], delay: 0 },
    ...(data.rows || []).map((row, i) => ({
      type: 'table-row',
      cells: row,
      delay: i + 1,
    })),
  ];
  if (data.caption) {
    elements.push({ type: 'caption', text: data.caption, delay: elements.length });
  }
  return elements;
}

// ── Main conversion function ────────────────────────────────────────────────────

/**
 * Convert a seed note blocks[] → slides[].
 *
 * @param {Array}  blocks    - seed note blocks array
 * @param {string} subject   - e.g. 'chemistry'
 * @param {object} meta      - { unitTitle, topicTitle, subtopicTitle }
 * @returns {Array} slides
 */
export function blocksToSlides(blocks = [], subject = 'chemistry', meta = {}) {
  const theme = getSubjectTheme(subject);
  const slides = [];

  // Slide 0: cover / objective
  const objectiveBlock = blocks.find(b => b.type === 'objective');
  slides.push({
    id: 'slide-cover',
    layout: 'cover',
    title: meta.subtopicTitle || meta.topicTitle || 'Lesson',
    subtitle: meta.topicTitle || '',
    unit: meta.unitTitle || '',
    objectiveText: objectiveBlock?.data?.text || '',
    theme,
    elements: [],
  });

  // Process the remaining blocks
  let currentSlide = null;
  let slideCount = 1;

  const flushSlide = () => {
    if (currentSlide) slides.push(currentSlide);
    currentSlide = null;
  };

  const newSlide = (layout, title, extraFields = {}) => {
    flushSlide();
    slideCount++;
    currentSlide = {
      id: `slide-${slideCount}`,
      layout,
      title,
      elements: [],
      theme,
      ...extraFields,
    };
  };

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    // Skip objective — already handled
    if (block.type === 'objective') continue;

    switch (block.type) {

      // ── Headings open new slides ────────────────────────────────────────────
      case 'heading': {
        flushSlide();
        slideCount++;
        currentSlide = {
          id: `slide-${slideCount}`,
          layout: 'bullets',
          title: stripHtml(block.data?.text || ''),
          level: block.data?.level || 2,
          elements: [],
          theme,
        };
        break;
      }

      // ── Paragraph → bullet element in current slide ─────────────────────────
      case 'paragraph': {
        if (!currentSlide) newSlide('bullets', '');
        currentSlide.elements.push({
          type: 'paragraph',
          html: block.data?.text || '',
          delay: currentSlide.elements.length,
        });
        break;
      }

      // ── List → animated bullet items ────────────────────────────────────────
      case 'list': {
        if (!currentSlide) newSlide('bullets', '');
        const items = listToElements(block.data?.items || [], currentSlide.elements.length);
        currentSlide.elements.push(...items);
        break;
      }

      // ── Checklist → its own slide ────────────────────────────────────────────
      case 'checklist': {
        flushSlide();
        slideCount++;
        currentSlide = {
          id: `slide-${slideCount}`,
          layout: 'checklist',
          title: 'Exam Checklist',
          items: block.data?.items || [],
          elements: (block.data?.items || []).map((item, i) => ({
            type: 'checklist-item',
            text: item.text || '',
            checked: item.checked || false,
            delay: i,
          })),
          theme,
        };
        flushSlide();
        break;
      }

      // ── comparisonTable → table slide ────────────────────────────────────────
      case 'comparisonTable': {
        flushSlide();
        slideCount++;
        slides.push({
          id: `slide-${slideCount}`,
          layout: 'table',
          title: stripHtml(block.data?.caption || 'Comparison Table'),
          caption: block.data?.caption || '',
          headers: block.data?.headers || [],
          rows: block.data?.rows || [],
          elements: tableToElements(block.data),
          theme,
        });
        currentSlide = null;
        break;
      }

      // ── SVG diagram → diagram slide ───────────────────────────────────────────
      case 'svg': {
        flushSlide();
        slideCount++;
        slides.push({
          id: `slide-${slideCount}`,
          layout: 'diagram',
          title: 'Diagram',
          caption: block.data?.caption || '',
          svgContent: block.data?.svg || '',
          elements: [
            { type: 'svg', svg: block.data?.svg || '', delay: 0 },
            ...(block.data?.caption ? [{ type: 'caption', text: block.data.caption, delay: 1 }] : []),
          ],
          theme,
        });
        currentSlide = null;
        break;
      }

      // ── Equation → equation slide ────────────────────────────────────────────
      case 'equation': {
        flushSlide();
        slideCount++;
        slides.push({
          id: `slide-${slideCount}`,
          layout: 'equation',
          title: 'Equation',
          html: block.data?.html || block.data?.latex || '',
          caption: block.data?.caption || '',
          elements: [
            { type: 'equation', html: block.data?.html || block.data?.latex || '', delay: 0 },
            ...(block.data?.caption ? [{ type: 'caption', text: block.data.caption, delay: 1 }] : []),
          ],
          theme,
        });
        currentSlide = null;
        break;
      }

      // ── Callout → layout determined by style ─────────────────────────────────
      case 'callout': {
        const style = block.data?.style || 'key';
        const layoutMap = {
          key: 'infographic',
          worked: 'worked-example',
          tip: 'tip',
          warning: 'warning',
        };
        flushSlide();
        slideCount++;

        // For 'worked' examples, split the text into steps on <br/> boundaries
        let elements = [];
        if (style === 'worked') {
          const lines = (block.data?.text || '').split(/<br\s*\/?>/i).filter(l => l.trim());
          elements = lines.map((line, i) => ({
            type: 'step',
            html: line.trim(),
            delay: i,
          }));
        } else {
          elements = [
            { type: 'callout-text', html: block.data?.text || '', delay: 0 },
          ];
        }

        slides.push({
          id: `slide-${slideCount}`,
          layout: layoutMap[style] || 'infographic',
          title: block.data?.title || '',
          text: block.data?.text || '',
          calloutStyle: style,
          elements,
          theme,
        });
        currentSlide = null;
        break;
      }

      // ── Summary → final slide ─────────────────────────────────────────────────
      case 'summary': {
        flushSlide();
        slideCount++;
        // Wrap summary text into bullet-like chunks at '. ' boundaries (max 6 chunks)
        const raw = block.data?.text || '';
        const sentences = raw.split(/(?<=\.)\s+/).filter(Boolean);
        const chunkSize = Math.ceil(sentences.length / Math.min(sentences.length, 6));
        const chunks = [];
        for (let j = 0; j < sentences.length; j += chunkSize) {
          chunks.push(sentences.slice(j, j + chunkSize).join(' '));
        }
        slides.push({
          id: `slide-${slideCount}`,
          layout: 'summary',
          title: 'Summary',
          elements: chunks.map((text, i) => ({ type: 'summary-point', text, delay: i })),
          theme,
        });
        currentSlide = null;
        break;
      }

      // ── Quote ─────────────────────────────────────────────────────────────────
      case 'quote': {
        if (!currentSlide) newSlide('bullets', '');
        currentSlide.elements.push({
          type: 'quote',
          html: block.data?.text || '',
          source: block.data?.source || '',
          delay: currentSlide.elements.length,
        });
        break;
      }

      // ── Code ──────────────────────────────────────────────────────────────────
      case 'code': {
        if (!currentSlide) newSlide('bullets', '');
        currentSlide.elements.push({
          type: 'code',
          code: block.data?.code || block.data?.text || '',
          delay: currentSlide.elements.length,
        });
        break;
      }

      default:
        break;
    }

    // Auto-split large slides (> 7 elements) by inserting continuation
    if (currentSlide && currentSlide.elements.length > 7) {
      const overflow = currentSlide.elements.splice(7);
      flushSlide();
      slideCount++;
      currentSlide = {
        id: `slide-${slideCount}`,
        layout: 'bullets',
        title: slides[slides.length - 1]?.title + ' (cont.)',
        elements: overflow.map((el, i) => ({ ...el, delay: i })),
        theme,
      };
    }
  }

  flushSlide();

  // ── Post-processing: eliminate empty heading-only slides ─────────────────────
  // Strategy:
  //   1. For each bullets slide with 0 elements, try to propagate its title
  //      as a prefix onto the very next slide (if the next slide has no title
  //      or a generic one like 'Equation'/'Diagram').
  //   2. If propagation isn't possible, just drop the empty slide.
  const processed = [];
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const isEmpty =
      slide.layout === 'bullets' &&
      slide.layout !== 'cover' &&
      (!slide.elements || slide.elements.length === 0);

    if (!isEmpty) {
      processed.push(slide);
      continue;
    }

    // Attempt to donate this heading's title to the next non-empty slide
    const next = slides[i + 1];
    if (next && slide.title) {
      const genericTitles = ['Equation', 'Diagram', 'Comparison Table', ''];
      if (!next.title || genericTitles.includes(next.title)) {
        // Replace the next slide's title with this heading
        next.title = slide.title;
      } else {
        // Prepend heading as a sub-label (e.g. "Ionic Bonding — Key Concept")
        next.title = `${slide.title} — ${next.title}`;
      }
    }
    // Either way, drop the empty slide
  }

  return processed;
}

/**
 * Count total animation steps in a slide
 * (i.e. max delay + 1, or 1 if no elements)
 */
export function totalSteps(slide) {
  if (!slide.elements || slide.elements.length === 0) return 1;
  const maxDelay = Math.max(...slide.elements.map(e => e.delay ?? 0));
  return maxDelay + 1;
}
