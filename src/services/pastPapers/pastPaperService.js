// Service for handling past paper downloads and marking schemes
import { chemistryPastPapers } from '../../data/chemistryPastPapers';
import { physicsPastPapers } from '../../data/physicsPastPapers';
import { biologyPastPapers } from '../../data/biologyPastPapers';
import { mathematicsPastPapers } from '../../data/mathematicsPastPapers';
import { businessPastPapers } from '../../data/businessPastPapers';
import { economicsPastPapers } from '../../data/economicsPastPapers';
import { accountingPastPapers } from '../../data/accountingPastPapers';
import { caePastPapers } from '../../data/caePastPapers';
import { cpePastPapers } from '../../data/cpePastPapers';
import { oLevelChemistryPastPapers } from '../../data/oLevelChemistryPastPapers';
import { oLevelPhysicsPastPapers } from '../../data/oLevelPhysicsPastPapers';
import { oLevelBiologyPastPapers } from '../../data/oLevelBiologyPastPapers';
import { oLevelMathematicsPastPapers } from '../../data/oLevelMathematicsPastPapers';

let _paperMap = null;

function buildPaperMap() {
    _paperMap = new Map();
    const allArrays = [
        chemistryPastPapers, physicsPastPapers, biologyPastPapers,
        mathematicsPastPapers, businessPastPapers, economicsPastPapers,
        accountingPastPapers, caePastPapers, cpePastPapers,
        oLevelChemistryPastPapers, oLevelPhysicsPastPapers,
        oLevelBiologyPastPapers, oLevelMathematicsPastPapers,
    ];
    for (const arr of allArrays) {
        for (const paper of arr) {
            if (paper.id) _paperMap.set(paper.id, paper);
        }
    }
}

/**
 * Look up any past paper by its ID across all 13 paper arrays.
 * Map is built lazily on first call.
 * @param {string} paperId
 * @returns {object|null}
 */
export function getPaperById(paperId) {
    if (!_paperMap) buildPaperMap();
    return _paperMap.get(paperId) ?? null;
}

/**
 * Trigger a file download using a direct anchor click.
 * Must be called synchronously within a user-gesture handler to avoid
 * browser popup-blocker suppression.
 * @param {string} url - The relative or absolute URL of the file
 * @param {string} filename - The filename to save as
 */
export function downloadFile(url, filename) {
    try {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return { success: true };
    } catch (error) {
        console.error('Download failed:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Generate a filename for past paper files
 */
export function generateFileName(paper, type) {
    const { year, month, unit } = paper;
    const suffix = type === 'question' ? 'qp' : 'ms';
    // Derive subject prefix from unit code (WCH=chemistry, WPH=physics, WBI=biology, WMA/WME/WST=maths)
    const prefix = unit?.startsWith('WPH') ? 'phys'
        : unit?.startsWith('WBI') ? 'bio'
        : unit?.startsWith('WMA') || unit?.startsWith('WME') || unit?.startsWith('WST') ? 'maths'
        : unit?.startsWith('WBS') ? 'business'
        : unit?.startsWith('WEC') ? 'economics'
        : unit?.startsWith('WAC') ? 'accounting'
        : 'chem';
    return `${prefix}_${year}_${month?.toLowerCase()}_${unit}_${suffix}.pdf`;
}

/**
 * Generate a filename for O-Level past paper files
 */
export function generateOLevelFileName(paper, type) {
    const { year, month, code } = paper;
    const suffix = type === 'question' ? 'qp' : 'ms';
    // Derive subject prefix from code (0620=chemistry, 0625=physics, 0610=biology, 0580/0606=maths)
    const prefix = code?.startsWith('0625') ? 'olevel_phys'
        : code?.startsWith('0610') ? 'olevel_bio'
        : code?.startsWith('0580') || code?.startsWith('0606') ? 'olevel_maths'
        : code?.startsWith('0620') ? 'olevel_chem'
        : 'olevel';
    return `${prefix}_${year}_${month?.toLowerCase()}_${code}_${suffix}.pdf`;
}

/**
 * Marking scheme data structure
 * This can be populated manually or fetched from a structured source
 * For each question, we store the mark scheme information
 */
export function createMarkingSchemeEntry(questionNumber, marks, content, keywords = []) {
    return {
        questionNumber,
        marks,
        content,
        keywords,
    };
}

/**
 * Parse marking scheme from structured data
 * This is a simple parser for when marking schemes are stored as structured data
 */
export function parseMarkingScheme(markingSchemeData, questionNumber) {
    if (!markingSchemeData || !Array.isArray(markingSchemeData)) {
        return null;
    }

    return markingSchemeData.find(entry => entry.questionNumber === questionNumber) || null;
}

/**
 * Format marks for display
 */
export function formatMarks(marks) {
    if (marks === 1) return '1 mark';
    return `${marks} marks`;
}

/**
 * Get paper type badge color
 */
export function getPaperTypeBadge(type) {
    switch (type) {
        case 'AS':
            return 'badge-primary';
        case 'A2':
            return 'badge-warning';
        default:
            return 'badge-neutral';
    }
}

/**
 * Filter papers by criteria
 */
export function filterPapers(papers, { year, month, unit, type }) {
    return papers.filter(paper => {
        if (year && paper.year !== parseInt(year)) return false;
        if (month && paper.month !== month) return false;
        // Support both unit-based (IAL) and component-based (CAE/CPE) papers
        if (unit && paper.unit !== unit && paper.paper !== unit) return false;
        if (type && paper.type !== type) return false;
        return true;
    });
}

/**
 * Sort papers by date (newest first)
 */
export function sortPapersByDate(papers, ascending = false) {
    return [...papers].sort((a, b) => {
        const dateA = new Date(`${a.year}-${a.month}-01`);
        const dateB = new Date(`${b.year}-${b.month}-01`);
        return ascending ? dateA - dateB : dateB - dateA;
    });
}
