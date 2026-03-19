import { oLevelMathsExtendedSyllabus } from "../../oLevelMathsExtendedSyllabus.js";
import { getSeedNote } from "../../seedNotes/index.js";

const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "in",
  "into",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "these",
  "this",
  "to",
  "using",
  "with",
]);

const ENTITY_MAP = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const topicCache = new Map();

function stripHtml(value) {
  if (!value) {
    return "";
  }

  return Object.entries(ENTITY_MAP)
    .reduce((text, [entity, replacement]) => text.replaceAll(entity, replacement), String(value))
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/(p|div|li|h\d|tr|td|th)>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractStrongTerms(value) {
  const matches = String(value || "").matchAll(/<strong>(.*?)<\/strong>/gi);
  return [...matches]
    .map((match) => stripHtml(match[1]))
    .map((term) => term.replace(/[:.,;!?]+$/g, "").trim())
    .filter(Boolean);
}

function toSentences(text) {
  return stripHtml(text)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 20);
}

function normalizeWord(value) {
  return value
    .toLowerCase()
    .replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "");
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function titleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function makeId(prefix, topicId, index) {
  return topicId === 1 ? `${prefix}-${index}` : `${prefix}-t${topicId}-${index}`;
}

function pickListText(item) {
  if (typeof item === "string") {
    return item;
  }

  return item?.text || "";
}

function collectBlockTexts(note) {
  const texts = [];
  const strongTerms = [];
  const headings = [];
  const listGroups = [];

  for (const block of note?.blocks || []) {
    switch (block.type) {
      case "objective":
      case "paragraph":
      case "summary":
      case "quote":
        if (block.data?.text) {
          texts.push(block.data.text);
          strongTerms.push(...extractStrongTerms(block.data.text));
        }
        break;
      case "heading":
        if (block.data?.text) {
          texts.push(block.data.text);
          headings.push(stripHtml(block.data.text));
        }
        break;
      case "callout":
        if (block.data?.title) {
          headings.push(stripHtml(block.data.title));
          texts.push(block.data.title);
        }
        if (block.data?.text) {
          texts.push(block.data.text);
          strongTerms.push(...extractStrongTerms(block.data.text));
        }
        break;
      case "list":
      case "checklist": {
        const items = (block.data?.items || [])
          .map(pickListText)
          .map(stripHtml)
          .filter(Boolean);
        if (items.length) {
          texts.push(items.join(". "));
          listGroups.push(items);
        }
        break;
      }
      case "comparisonTable":
        if (block.data?.caption) {
          texts.push(block.data.caption);
        }
        if (Array.isArray(block.data?.headers)) {
          texts.push(block.data.headers.join(" "));
        }
        if (Array.isArray(block.data?.rows)) {
          for (const row of block.data.rows) {
            texts.push(row.map(stripHtml).join(" "));
          }
        }
        break;
      case "equation":
        if (block.data?.caption) {
          texts.push(block.data.caption);
        }
        if (block.data?.html) {
          texts.push(block.data.html);
        }
        break;
      default:
        break;
    }
  }

  return {
    texts,
    strongTerms: unique(strongTerms),
    headings: unique(headings),
    listGroups,
  };
}

function keywordWords(values) {
  return unique(
    values
      .flatMap((value) => stripHtml(value).split(/\s+/))
      .map(normalizeWord)
      .filter((word) => word.length >= 3 && !STOPWORDS.has(word))
  );
}

function buildNoteContext(note, subtopicTitle, unitId, topicId, subtopicIndex) {
  const blockData = collectBlockTexts(note);
  const objectiveText =
    stripHtml(note?.blocks?.find((block) => block.type === "objective")?.data?.text) || "";
  const summaryBlockText =
    stripHtml(note?.blocks?.find((block) => block.type === "summary")?.data?.text) || "";
  const recallSummary = stripHtml(note?.recall?.summaryText);
  const summaryText =
    recallSummary ||
    summaryBlockText ||
    objectiveText ||
    toSentences(blockData.texts.join(". "))[0] ||
    `${subtopicTitle} is part of the IGCSE Mathematics Extended syllabus.`;

  const prompts = unique((note?.recall?.cues || []).map((cue) => stripHtml(cue.prompt)));
  const sentencePool = unique(
    [
      objectiveText,
      summaryBlockText,
      recallSummary,
      ...blockData.texts.flatMap((text) => toSentences(text)),
    ].map(stripHtml)
  ).filter((sentence) => sentence.length >= 15);

  const keywords = unique([
    ...blockData.strongTerms,
    ...blockData.headings,
    ...keywordWords([subtopicTitle, objectiveText, summaryText]).map(titleCase),
  ])
    .map((term) => stripHtml(term))
    .filter((term) => term && term.length <= 40)
    .slice(0, 6);

  return {
    note,
    unitId,
    topicId,
    subtopicIndex,
    subtopicTitle,
    summaryText,
    prompts,
    sentencePool,
    strongTerms: blockData.strongTerms,
    headings: blockData.headings,
    listGroups: blockData.listGroups,
    keywords,
  };
}

function getTopicDefinition(unitId, topicId) {
  for (const unit of oLevelMathsExtendedSyllabus.units) {
    if (String(unit.id) !== String(unitId)) {
      continue;
    }

    const topic = unit.topics.find((candidate) => String(candidate.id) === String(topicId));
    if (topic) {
      return { unit, topic };
    }
  }

  throw new Error(`Unknown olevel_maths_extended topic: ${unitId}:${topicId}`);
}

function getTopicContexts(unitId, topicId) {
  const cacheKey = `${unitId}:${topicId}`;
  if (topicCache.has(cacheKey)) {
    return topicCache.get(cacheKey);
  }

  const { unit, topic } = getTopicDefinition(unitId, topicId);
  const noteContexts = topic.subtopics.map((subtopicTitle, subtopicIndex) =>
    buildNoteContext(
      getSeedNote(`olevel_maths_extended:${unitId}:${topicId}:${subtopicIndex}`),
      subtopicTitle,
      unitId,
      topicId,
      subtopicIndex
    )
  );
  const value = { unit, topic, noteContexts };
  topicCache.set(cacheKey, value);
  return value;
}

function getFallbackSummaries(unitId, topicId) {
  const { unit } = getTopicDefinition(unitId, topicId);
  return unit.topics
    .filter((topic) => String(topic.id) !== String(topicId))
    .flatMap((topic) => getTopicContexts(unitId, topic.id).noteContexts.map((context) => context.summaryText))
    .filter(Boolean);
}

function pickPrompt(context) {
  return (
    context.prompts[0] ||
    `Which statement best matches ${context.subtopicTitle.toLowerCase()}?`
  );
}

function buildMcq(topicId, noteContexts) {
  const fallbackSummaries = getFallbackSummaries(noteContexts[0]?.unitId, topicId);
  const summaryPool = unique([...noteContexts.map((context) => context.summaryText), ...fallbackSummaries]);

  return noteContexts.slice(0, Math.max(1, Math.min(6, noteContexts.length))).map((context, index) => {
    const distractors = summaryPool
      .filter((summary) => summary !== context.summaryText)
      .slice(0, 3);

    while (distractors.length < 3) {
      distractors.push(`This statement describes a different idea from ${context.subtopicTitle.toLowerCase()}.`);
    }

    return {
      id: makeId("mcq", topicId, index + 1),
      stem: pickPrompt(context),
      options: [context.summaryText, ...distractors],
      correctAnswer: 0,
      rationale: `${context.summaryText} This matches ${context.subtopicTitle.toLowerCase()}; the other options describe different ideas from the same unit.`,
      topic: context.subtopicTitle,
    };
  });
}

function chooseBlankAnswer(context) {
  return (
    context.strongTerms.find((term) => term.split(/\s+/).length <= 3) ||
    context.keywords.find((term) => term.split(/\s+/).length <= 3) ||
    context.subtopicTitle.split(/\s+/).filter(Boolean).slice(0, 3).join(" ")
  );
}

function replaceFirstInsensitive(text, search) {
  if (!search) {
    return null;
  }

  const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\b${escaped}\\b`, "i");
  if (!pattern.test(text)) {
    return null;
  }

  return text.replace(pattern, "__BLANK__");
}

function buildFillBlank(topicId, noteContexts) {
  return noteContexts.slice(0, Math.max(1, Math.min(5, noteContexts.length))).map((context, index) => {
    const answer = chooseBlankAnswer(context);
    const sentence = context.sentencePool.find((candidate) =>
      answer && new RegExp(answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(candidate)
    ) || context.summaryText;
    const template =
      replaceFirstInsensitive(sentence, answer) ||
      `${context.subtopicTitle} is linked to __BLANK__ in this topic.`;

    return {
      id: makeId("fb", topicId, index + 1),
      stem: `Complete the statement about ${context.subtopicTitle.toLowerCase()}.`,
      template,
      blanks: [{ answer }],
      rationale: context.summaryText,
    };
  });
}

function buildDragDrop(topicId, noteContexts) {
  const categories =
    noteContexts.length >= 2
      ? noteContexts.slice(0, Math.min(4, noteContexts.length)).map((context) => context.subtopicTitle)
      : noteContexts[0]?.headings.slice(0, 4);

  const safeCategories = categories?.filter(Boolean) || ["Core ideas", "Examples"];
  const items = [];

  if (noteContexts.length >= 2) {
    for (const context of noteContexts.slice(0, safeCategories.length)) {
      const terms = unique([
        ...context.strongTerms,
        ...context.keywords,
        ...context.headings,
      ]).slice(0, 2);

      for (const term of terms) {
        items.push({ text: term, category: context.subtopicTitle });
      }
    }
  } else if (noteContexts[0]) {
    const context = noteContexts[0];
    const facts = unique([...context.keywords, ...context.strongTerms]).slice(0, 6);
    facts.forEach((fact, index) => {
      items.push({
        text: fact,
        category: safeCategories[index % safeCategories.length],
      });
    });
  }

  return [
    {
      id: makeId("dd", topicId, 1),
      stem: `Sort each idea into the most suitable part of ${noteContexts[0]?.subtopicTitle ? noteContexts[0].topicId === topicId ? getTopicDefinition(noteContexts[0].unitId, topicId).topic.title : "this topic" : "this topic"}.`,
      categories: safeCategories,
      items: items.slice(0, 8),
    },
  ];
}

function buildSequence(topicId, topic, noteContexts) {
  const listSteps = noteContexts.flatMap((context) =>
    context.listGroups.filter((group) => group.length >= 4).map((group) => group.slice(0, 5))
  );
  const headingSteps = noteContexts
    .map((context) => context.headings.slice(0, 5))
    .filter((group) => group.length >= 4);

  const steps =
    listSteps[0] ||
    headingSteps[0] ||
    (topic.subtopics.length >= 4 ? topic.subtopics.slice(0, 5) : [
      `Read the problem carefully`,
      `Identify the rule or relationship from ${topic.title}`,
      `Apply the method accurately`,
      `Check the final answer is sensible`,
    ]);

  return [
    {
      id: makeId("seq", topicId, 1),
      stem: `Put these ideas for ${topic.title.toLowerCase()} in order.`,
      steps,
    },
  ];
}

function buildKeyword(topicId, noteContexts) {
  return noteContexts.slice(0, Math.max(1, Math.min(4, noteContexts.length))).map((context, index) => {
    const keywords = unique([
      ...context.keywords,
      ...keywordWords([context.summaryText]).map(titleCase),
    ]).slice(0, 5);
    const marks = Math.max(2, Math.min(4, keywords.length));

    return {
      id: makeId("kw", topicId, index + 1),
      stem: `${context.prompts[0] || `Explain ${context.subtopicTitle.toLowerCase()}.`} [${marks} marks]`,
      marks,
      keywords,
      modelAnswer: context.summaryText,
    };
  });
}

function buildFlashcards(topicId, noteContexts) {
  return noteContexts.map((context, index) => ({
    id: makeId("fc", topicId, index + 1),
    front: context.prompts[0] || `What should you remember about ${context.subtopicTitle.toLowerCase()}?`,
    back: context.summaryText,
    topic: context.subtopicTitle,
  }));
}

export function buildOLevelMathsExtendedExerciseSet(unitId, topicId) {
  const { topic, noteContexts } = getTopicContexts(unitId, topicId);

  return {
    mcq: buildMcq(topicId, noteContexts),
    fillblank: buildFillBlank(topicId, noteContexts),
    dragdrop: buildDragDrop(topicId, noteContexts),
    sequence: buildSequence(topicId, topic, noteContexts),
    keyword: buildKeyword(topicId, noteContexts),
    flashcards: buildFlashcards(topicId, noteContexts),
  };
}
