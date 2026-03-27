/**
 * Export annotated PDF via pdf-lib.
 * Renders each annotated page's fabric.js JSON as a transparent PNG overlay,
 * then embeds it onto the original PDF page.
 * Also exports a raw JSON file alongside the PDF for future re-import.
 */
import { Canvas as FabricCanvas } from 'fabric';

/**
 * Render a fabric.js JSON snapshot to a PNG ArrayBuffer at 2× resolution.
 */
async function fabricJsonToPng(fabricJson, width, height) {
    const el = document.createElement('canvas');
    const fc = new FabricCanvas(el, {
        width,
        height,
        enableRetinaScaling: false,
    });
    await fc.loadFromJSON(fabricJson);
    fc.renderAll();
    const dataUrl = fc.toDataURL({ format: 'png', multiplier: 2 });
    fc.dispose();

    // Convert data URL → ArrayBuffer
    const base64 = dataUrl.split(',')[1];
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
}

function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 5000);
}

/**
 * @param {object} paper - paper object { id, year, month, unit, questionPaperUrl }
 * @param {object} pageAnnotations - { [pageNumber]: fabricJson }
 * @param {{ width: number, height: number }} dimensions - logical canvas dimensions
 */
export async function exportAnnotatedPDF(paper, pageAnnotations, dimensions) {
    const basename = `${paper.unit}-${paper.year}-${paper.month}`;

    // Export raw JSON annotations
    const jsonStr = JSON.stringify({
        paperId: paper.id,
        exportedAt: new Date().toISOString(),
        pages: pageAnnotations,
    }, null, 2);
    triggerDownload(
        new Blob([jsonStr], { type: 'application/json' }),
        `${basename}-annotations.json`
    );

    // Load original PDF
    let pdfBytes;
    try {
        const res = await fetch(paper.questionPaperUrl);
        if (!res.ok) throw new Error('fetch failed');
        pdfBytes = await res.arrayBuffer();
    } catch {
        alert('Could not fetch the original PDF for export. The JSON file has been saved.');
        return;
    }

    const { PDFDocument } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();

    for (const [pageNumStr, fabricJson] of Object.entries(pageAnnotations)) {
        const pageNum = parseInt(pageNumStr, 10);
        if (!fabricJson || !fabricJson.objects?.length) continue;

        const pdfPage = pages[pageNum - 1];
        if (!pdfPage) continue;

        const pngBuffer = await fabricJsonToPng(fabricJson, dimensions.width, dimensions.height);
        const pngImage = await pdfDoc.embedPng(pngBuffer);

        pdfPage.drawImage(pngImage, {
            x: 0,
            y: 0,
            width: pdfPage.getWidth(),
            height: pdfPage.getHeight(),
        });
    }

    const outputBytes = await pdfDoc.save();
    triggerDownload(
        new Blob([outputBytes], { type: 'application/pdf' }),
        `${basename}-annotated.pdf`
    );
}
