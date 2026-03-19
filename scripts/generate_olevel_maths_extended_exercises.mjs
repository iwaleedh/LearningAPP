import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { oLevelMathsExtendedSyllabus } from '../src/data/oLevelMathsExtendedSyllabus.js';

const root = process.cwd();
const subject = 'olevel_maths_extended';
const outDir = path.join(root, 'src/data/exercises', subject);

const STOPWORDS = new Set([
  'the',
  'and',
  'for',
  'with',
  'from',
  'that',
  'this',
  'into',
  'using',
  'your',
  'have',
  'has',
  'had',
  'are',
  'was',
  'were',
  'can',
  'will',
  'what',
  'when',
  'where',
  'which',
  'while',
  'then',
  'than',
  'them',
  'they',
  'their',
  'there',
  'about',
  'each',
  'inside',
  'outside',
  'within',
  'between',
  'under',
  'over',
  'only',
  'also',
  'more',
  'most',
  'some',
  'such',
  'onto',
  'through',
  'across',
  'after',
  'before',
  'being',
  'been',
  'should',
  'could',
  'would',
  'does',
  'doing',
  'done',
  'because',
  'including',
  'include',
  'includes',
  'identify',
  'understand',
  'work',
  'working',
  'used',
  'use',
  'uses',
  'part',
  'parts',
  'topic',
  'subtopic',
  'note',
  'maths',
  'mathematics',
  'igcse',
  'extended',
  'level',
  'toolkit',
  'basic',
  'introduction',
  'problems',
  'problem',
  'solving',
  'calculate',
  'calculations',
]);

function stripHtml(value = '') {
  return String(value)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function firstSentence(text = '') {
  const clean = stripHtml(text);
  const parts = clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  return (parts[0] || clean).trim();
}

function shorten(text = '', limit = 120) {
  const clean = stripHtml(text);
  if (clean.length <= limit) return clean;
  return `${clean.slice(0, limit - 1).trimEnd()}...`;
}

function unique(items) {
  const seen = new Set();
  const out = [];

  for (const item of items) {
    if (!item) continue;
    const key = item.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }

  return out;
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function titlePhraseCandidates(title = '') {
  const clean = stripHtml(title);
  const direct = clean
    .split(/[,:/]/)
    .map((part) => part.trim())
    .filter(Boolean);
  const extra = clean
    .split(/\band\b|\bof\b|\bwith\b|\bin\b|\bon\b/gi)
    .map((part) => part.trim())
    .filter((part) => part && part.split(/\s+/).length <= 3);
  const words = clean.match(/[A-Za-z]+(?:['-][A-Za-z]+)*/g) || [];
  const singles = words.filter((word) => word.length > 3);
  const pairs = [];

  for (let i = 0; i < words.length - 1; i += 1) {
    const pair = `${words[i]} ${words[i + 1]}`;
    if (pair.split(/\s+/).length <= 3) pairs.push(pair);
  }

  return unique([...direct, ...extra, ...pairs, ...singles]).filter(
    (part) => part.split(/\s+/).length <= 3
  );
}

function sourcePhraseCandidates(source = '') {
  const words = stripHtml(source).match(/[A-Za-z]+(?:['-][A-Za-z]+)*/g) || [];
  const filtered = words.filter((word) => word.length > 3 && !STOPWORDS.has(word.toLowerCase()));
  const phrases = [];

  for (let i = 0; i < filtered.length - 1; i += 1) {
    phrases.push(`${filtered[i]} ${filtered[i + 1]}`);
  }

  phrases.push(...filtered);
  return unique(phrases).filter((part) => part.split(/\s+/).length <= 3);
}

function extractKeywordPhrases(meta) {
  const phrases = [];
  phrases.push(...titlePhraseCandidates(meta.subtopicTitle));
  phrases.push(...meta.headings.filter((heading) => heading.split(/\s+/).length <= 3));

  const words =
    `${meta.objective} ${meta.summary} ${meta.firstParagraph}`.match(
      /[A-Za-z]+(?:['-][A-Za-z]+)*/g
    ) || [];

  for (const word of words) {
    const lower = word.toLowerCase();
    if (word.length <= 3 || STOPWORDS.has(lower)) continue;
    phrases.push(word);
  }

  return unique(phrases).slice(0, 8);
}

function chooseBlank(meta, sourceText) {
  const source = stripHtml(sourceText);
  const phraseCandidates = unique([
    ...titlePhraseCandidates(meta.subtopicTitle),
    ...sourcePhraseCandidates(source),
    ...meta.keywordPhrases,
  ]);

  for (const phrase of phraseCandidates) {
    if (!phrase || phrase.split(/\s+/).length > 3) continue;
    const regex = new RegExp(`\\b${escapeRegex(phrase)}\\b`, 'i');

    if (regex.test(source)) {
      const match = source.match(regex)?.[0] || phrase;
      return {
        answer: match,
        template: source.replace(regex, '__BLANK__'),
      };
    }
  }

  const answer =
    meta.keywordPhrases.find((phrase) => phrase.split(/\s+/).length > 1) ||
    meta.keywordPhrases[0] ||
    meta.subtopicTitle;
  return {
    answer,
    template: `A key idea in ${meta.subtopicTitle} is __BLANK__.`,
  };
}

function makeId(prefix, topicId, index) {
  return topicId === 1 ? `${prefix}-${index}` : `${prefix}-t${topicId}-${index}`;
}

async function loadNote(unitId, topicId, subtopicIndex) {
  const notePath = path.join(
    root,
    'src/data/seedNotes',
    subject,
    `note_${subject}_${unitId}_${topicId}_${subtopicIndex}.js`
  );
  const mod = await import(pathToFileURL(notePath).href);
  const note = Object.values(mod).find(
    (value) => value && typeof value === 'object' && Array.isArray(value.blocks)
  );

  if (!note) {
    throw new Error(`No note export found in ${notePath}`);
  }

  return note;
}

function buildMeta(unit, topic, subtopicIndex, note) {
  const objective = stripHtml(
    note.blocks.find((block) => block.type === 'objective')?.data?.text || ''
  );
  const firstParagraph = stripHtml(
    note.blocks.find((block) => block.type === 'paragraph')?.data?.text || ''
  );
  const summary = stripHtml(
    note.recall?.summaryText ||
      note.blocks.find((block) => block.type === 'summary')?.data?.text ||
      objective ||
      firstParagraph
  );
  const headings = note.blocks
    .filter((block) => block.type === 'heading')
    .map((block) => stripHtml(block.data?.text))
    .filter(Boolean);
  const cues = (note.recall?.cues || [])
    .map((cue) => ({
      prompt: stripHtml(cue.prompt || ''),
      answer: stripHtml(cue.answer || ''),
    }))
    .filter((cue) => cue.prompt || cue.answer);

  const meta = {
    unitId: unit.id,
    unitTitle: unit.title,
    topicId: topic.id,
    topicTitle: topic.title,
    subtopicIndex,
    subtopicTitle: topic.subtopics[subtopicIndex],
    objective,
    firstParagraph,
    summary,
    headings: unique(headings),
    cues,
  };

  meta.keywordPhrases = extractKeywordPhrases(meta);
  meta.description = shorten(
    firstSentence(summary || objective || firstParagraph || meta.subtopicTitle),
    120
  );
  meta.answerText = shorten(
    summary || objective || firstParagraph || `Key ideas for ${meta.subtopicTitle}.`,
    260
  );

  return meta;
}

function buildMcq(topic, metas, unitPool) {
  const mcq = [];

  metas.forEach((meta, index) => {
    const distractors = unitPool
      .filter((item) => item.subtopicTitle !== meta.subtopicTitle)
      .slice(index, index + 12);
    const wrongDescriptions = unique(distractors.map((item) => item.description)).slice(0, 3);

    while (wrongDescriptions.length < 3) {
      const fallback = unitPool.find(
        (item) =>
          item.subtopicTitle !== meta.subtopicTitle &&
          !wrongDescriptions.includes(item.description)
      );
      if (!fallback) break;
      wrongDescriptions.push(fallback.description);
    }

    mcq.push({
      id: makeId('mcq', topic.id, mcq.length + 1),
      stem: `Which description best matches "${meta.subtopicTitle}"?`,
      options: [meta.description, ...wrongDescriptions].slice(0, 4),
      correctAnswer: 0,
      rationale: `${meta.subtopicTitle} is best matched by: ${meta.description} The other options describe different ideas from the same unit.`,
      topic: meta.subtopicTitle,
    });
  });

  return mcq;
}

function buildFillBlanks(topic, metas) {
  return metas.map((meta, index) => {
    const source = firstSentence(
      meta.summary || meta.objective || meta.firstParagraph || meta.subtopicTitle
    );
    const blank = chooseBlank(meta, source);

    return {
      id: makeId('fb', topic.id, index + 1),
      stem: `Complete the statement about ${meta.subtopicTitle}.`,
      template: blank.template,
      blanks: [{ answer: blank.answer }],
      rationale: source,
    };
  });
}

function buildKeywords(topic, metas) {
  return metas.map((meta, index) => ({
    id: makeId('kw', topic.id, index + 1),
    stem: `Explain ${meta.subtopicTitle}. [3 marks]`,
    marks: 3,
    keywords: unique([
      ...meta.keywordPhrases,
      ...titlePhraseCandidates(meta.subtopicTitle),
    ]).slice(0, 5),
    modelAnswer: meta.answerText,
  }));
}

function buildFlashcards(topic, metas) {
  const cards = [];

  metas.forEach((meta) => {
    const cues = meta.cues.slice(0, 2);

    if (cues.length) {
      cues.forEach((cue) => {
        cards.push({
          id: makeId('fc', topic.id, cards.length + 1),
          front: cue.prompt || `What is ${meta.subtopicTitle}?`,
          back: cue.answer || meta.answerText,
          topic: meta.subtopicTitle,
        });
      });
      return;
    }

    cards.push({
      id: makeId('fc', topic.id, cards.length + 1),
      front: `What is ${meta.subtopicTitle}?`,
      back: meta.answerText,
      topic: meta.subtopicTitle,
    });
  });

  return cards;
}

function buildDragDrops(topic, metas) {
  const dragdrop = [];

  if (metas.length >= 2) {
    const groups = [];
    let index = 0;

    while (index < metas.length) {
      const remaining = metas.length - index;
      let size;

      if (remaining <= 4) {
        size = remaining;
      } else if (remaining <= 7) {
        size = 3;
      } else {
        size = 4;
      }

      groups.push(metas.slice(index, index + size));
      index += size;
    }

    for (const group of groups) {
      if (!group.length) continue;

      const categories = group.map((meta) => meta.subtopicTitle);
      const items = [];

      for (const meta of group) {
        const phrasePool = unique([
          ...meta.headings.filter((heading) => heading !== meta.subtopicTitle),
          ...meta.keywordPhrases,
        ]);
        const perCategory = group.length === 2 ? 3 : 2;

        phrasePool.slice(0, perCategory).forEach((text) => {
          items.push({ text, category: meta.subtopicTitle });
        });
      }

      if (items.length) {
        dragdrop.push({
          id: makeId('dd', topic.id, dragdrop.length + 1),
          stem: `Sort these ideas into the correct ${topic.title.toLowerCase()} subtopics.`,
          categories,
          items,
        });
      }
    }
  }

  if (!dragdrop.length) {
    const meta = metas[0];
    dragdrop.push({
      id: makeId('dd', topic.id, 1),
      stem: `Sort these prompts for ${meta.subtopicTitle} into key terms and core ideas.`,
      categories: ['Key terms', 'Core ideas'],
      items: [
        ...meta.keywordPhrases.slice(0, 3).map((text) => ({
          text,
          category: 'Key terms',
        })),
        ...unique([meta.description, ...meta.headings]).slice(0, 3).map((text) => ({
          text,
          category: 'Core ideas',
        })),
      ],
    });
  }

  return dragdrop;
}

function buildSequences(topic, metas) {
  const sequence = [];

  if (metas.length >= 4) {
    for (let i = 0; i < metas.length; i += 4) {
      const steps = metas.slice(i, i + 4).map((meta) => meta.subtopicTitle);
      if (steps.length >= 4) {
        sequence.push({
          id: makeId('seq', topic.id, sequence.length + 1),
          stem: `Put these ${topic.title.toLowerCase()} subtopics into the syllabus order.`,
          steps,
        });
      }
    }
  }

  if (!sequence.length) {
    metas.slice(0, 2).forEach((meta) => {
      const steps = meta.headings.slice(0, 4);
      if (steps.length >= 4) {
        sequence.push({
          id: makeId('seq', topic.id, sequence.length + 1),
          stem: `Put these sections of ${meta.subtopicTitle} into the order used in the note.`,
          steps,
        });
      }
    });
  }

  if (!sequence.length) {
    const meta = metas[0];
    sequence.push({
      id: makeId('seq', topic.id, 1),
      stem: `Put this study flow for ${meta.subtopicTitle} into order.`,
      steps: [
        `Read the definition of ${meta.subtopicTitle}`,
        'Work through a short example',
        'Check the key rule or method',
        'Summarise the main idea',
      ],
    });
  }

  return sequence;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const unitPools = new Map();
  const topicRecords = [];

  for (const unit of oLevelMathsExtendedSyllabus.units) {
    const pool = [];

    for (const topic of unit.topics) {
      const metas = [];

      for (let subtopicIndex = 0; subtopicIndex < topic.subtopics.length; subtopicIndex += 1) {
        const note = await loadNote(unit.id, topic.id, subtopicIndex);
        const meta = buildMeta(unit, topic, subtopicIndex, note);
        metas.push(meta);
        pool.push(meta);
      }

      topicRecords.push({ unit, topic, metas });
    }

    unitPools.set(unit.id, pool);
  }

  for (const { unit, topic, metas } of topicRecords) {
    const exerciseSet = {
      mcq: buildMcq(topic, metas, unitPools.get(unit.id) || []),
      fillblank: buildFillBlanks(topic, metas),
      dragdrop: buildDragDrops(topic, metas),
      sequence: buildSequences(topic, metas),
      keyword: buildKeywords(topic, metas),
      flashcards: buildFlashcards(topic, metas),
    };

    const exportName = `exercises_${subject}_${unit.id}_${topic.id}`;
    const filePath = path.join(outDir, `${exportName}.js`);
    const fileText = `export const ${exportName} = ${JSON.stringify(
      exerciseSet,
      null,
      2
    )};\n`;

    fs.writeFileSync(filePath, fileText, 'utf8');
  }

  console.log(`Generated ${topicRecords.length} ${subject} exercise files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
