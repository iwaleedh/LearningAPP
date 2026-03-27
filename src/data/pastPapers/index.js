const subjectModuleLoaders = {
  chemistry: () => import('../chemistryPastPapers.js'),
  physics: () => import('../physicsPastPapers.js'),
  biology: () => import('../biologyPastPapers.js'),
  mathematics: () => import('../mathematicsPastPapers.js'),
  business: () => import('../businessPastPapers.js'),
  economics: () => import('../economicsPastPapers.js'),
  accounting: () => import('../accountingPastPapers.js'),
  cae: () => import('../caePastPapers.js'),
  cpe: () => import('../cpePastPapers.js'),
  'olevel-chemistry': () => import('../oLevelChemistryPastPapers.js'),
  'olevel-physics': () => import('../oLevelPhysicsPastPapers.js'),
  'olevel-biology': () => import('../oLevelBiologyPastPapers.js'),
  'olevel-mathematics': () => import('../oLevelMathematicsPastPapers.js'),
  'olevel-business': () => import('../oLevelBusinessPastPapers.js'),
  'olevel-accounting': () => import('../oLevelAccountingPastPapers.js'),
  'olevel-economics': () => import('../oLevelEconomicsPastPapers.js'),
};

const subjectResolvers = {
  chemistry: (module) => ({
    papers: module.chemistryPastPapers,
    years: module.availableYears,
    units: module.availableUnits,
    isOLevel: false,
  }),
  physics: (module) => ({
    papers: module.physicsPastPapers,
    years: module.physicsAvailableYears,
    units: module.physicsAvailableUnits,
    isOLevel: false,
  }),
  biology: (module) => ({
    papers: module.biologyPastPapers,
    years: module.biologyAvailableYears,
    units: module.biologyAvailableUnits,
    isOLevel: false,
  }),
  mathematics: (module) => ({
    papers: module.mathematicsPastPapers,
    years: module.mathsAvailableYears,
    units: module.mathsAvailableUnits,
    isOLevel: false,
  }),
  business: (module) => ({
    papers: module.businessPastPapers,
    years: module.businessAvailableYears,
    units: module.businessAvailableUnits,
    isOLevel: false,
  }),
  economics: (module) => ({
    papers: module.economicsPastPapers,
    years: module.economicsAvailableYears,
    units: module.economicsAvailableUnits,
    isOLevel: false,
  }),
  accounting: (module) => ({
    papers: module.accountingPastPapers,
    years: module.accountingAvailableYears,
    units: module.accountingAvailableUnits,
    isOLevel: false,
  }),
  cae: (module) => ({
    papers: module.caePastPapers,
    years: [2022],
    units: module.caeComponents.map((component) => ({
      code: component.id,
      name: component.name,
      type: 'C1 Advanced',
    })),
    isOLevel: false,
  }),
  cpe: (module) => ({
    papers: module.cpePastPapers,
    years: [2022],
    units: module.cpeComponents.map((component) => ({
      code: component.id,
      name: component.name,
      type: 'C2 Proficiency',
    })),
    isOLevel: false,
  }),
  'olevel-chemistry': (module) => ({
    papers: module.oLevelChemistryPastPapers,
    years: module.oLevelChemistryAvailableYears,
    units: module.oLevelChemistryAvailableUnits,
    isOLevel: true,
  }),
  'olevel-physics': (module) => ({
    papers: module.oLevelPhysicsPastPapers,
    years: module.oLevelPhysicsAvailableYears,
    units: module.oLevelPhysicsAvailableUnits,
    isOLevel: true,
  }),
  'olevel-biology': (module) => ({
    papers: module.oLevelBiologyPastPapers,
    years: module.oLevelBiologyAvailableYears,
    units: module.oLevelBiologyAvailableUnits,
    isOLevel: true,
  }),
  'olevel-mathematics': (module) => ({
    papers: module.oLevelMathematicsPastPapers,
    years: module.oLevelMathematicsAvailableYears,
    units: module.oLevelMathematicsAvailableUnits,
    isOLevel: true,
  }),
  'olevel-business': (module) => ({
    papers: module.oLevelBusinessPastPapers,
    years: module.oLevelBusinessAvailableYears,
    units: module.oLevelBusinessAvailableUnits,
    isOLevel: true,
  }),
  'olevel-accounting': (module) => ({
    papers: module.oLevelAccountingPastPapers,
    years: module.oLevelAccountingAvailableYears,
    units: module.oLevelAccountingAvailableUnits,
    isOLevel: true,
  }),
  'olevel-economics': (module) => ({
    papers: module.oLevelEconomicsPastPapers,
    years: module.oLevelEconomicsAvailableYears,
    units: module.oLevelEconomicsAvailableUnits,
    isOLevel: true,
  }),
};

const paperIdPrefixes = [
  { prefix: 'olevel-maths-', subjectId: 'olevel-mathematics' },
  { prefix: 'olevel-chem-', subjectId: 'olevel-chemistry' },
  { prefix: 'olevel-phys-', subjectId: 'olevel-physics' },
  { prefix: 'olevel-bio-', subjectId: 'olevel-biology' },
  { prefix: 'olevel-bus-', subjectId: 'olevel-business' },
  { prefix: 'olevel-acc-', subjectId: 'olevel-accounting' },
  { prefix: 'olevel-econ-', subjectId: 'olevel-economics' },
  { prefix: 'accounting-', subjectId: 'accounting' },
  { prefix: 'economics-', subjectId: 'economics' },
  { prefix: 'business-', subjectId: 'business' },
  { prefix: 'maths-', subjectId: 'mathematics' },
  { prefix: 'phys-', subjectId: 'physics' },
  { prefix: 'chem-', subjectId: 'chemistry' },
  { prefix: 'bio-', subjectId: 'biology' },
  { prefix: 'cae-', subjectId: 'cae' },
  { prefix: 'cpe-', subjectId: 'cpe' },
];

const subjectDataCache = new Map();

export const pastPaperSubjectIds = Object.freeze(Object.keys(subjectModuleLoaders));
export const subjectPaperCounts = Object.freeze({
  chemistry: 124,
  physics: 92,
  biology: 88,
  mathematics: 152,
  business: 66,
  economics: 66,
  accounting: 36,
  cae: 8,
  cpe: 3,
  'olevel-chemistry': 285,
  'olevel-physics': 285,
  'olevel-biology': 214,
  'olevel-mathematics': 426,
  'olevel-business': 142,
  'olevel-accounting': 142,
  'olevel-economics': 142,
});

function resolveSubjectIdFromPaperId(paperId) {
  const normalizedId = String(paperId || '');
  return paperIdPrefixes.find(({ prefix }) => normalizedId.startsWith(prefix))?.subjectId || null;
}

export async function loadPastPaperSubject(subjectId) {
  if (!subjectModuleLoaders[subjectId]) {
    return { papers: [], years: [], units: [], isOLevel: false };
  }

  if (!subjectDataCache.has(subjectId)) {
    subjectDataCache.set(
      subjectId,
      subjectModuleLoaders[subjectId]().then((module) => subjectResolvers[subjectId](module)),
    );
  }

  return subjectDataCache.get(subjectId);
}

export async function getPaperById(paperId) {
  const subjectId = resolveSubjectIdFromPaperId(paperId);

  if (subjectId) {
    const { papers } = await loadPastPaperSubject(subjectId);
    return papers.find((paper) => paper.id === paperId) || null;
  }

  for (const id of pastPaperSubjectIds) {
    const { papers } = await loadPastPaperSubject(id);
    const match = papers.find((paper) => paper.id === paperId);
    if (match) return match;
  }

  return null;
}
