// Service for handling past paper downloads and marking schemes

/**
 * Download a file from a URL
 * @param {string} url - The URL to download from
 * @param {string} filename - The filename to save as
 */
export async function downloadFile(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(blobUrl);

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
