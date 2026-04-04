import { useState } from 'react';
import { Download } from 'lucide-react';
import { loadStudentToolExportData } from '../../services/notes/studentToolAssets.js';
import { buildExportHtml } from './exportPdfUtils.js';
import './StudentTools.css';

export default function ExportPDF({ chapterId = 'default', chapterTitle = 'Chapter' }) {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        setIsExporting(true);

        try {
            const { highlights, notes } = await loadStudentToolExportData(chapterId);
            const html = buildExportHtml({ chapterTitle, highlights, notes });

            printWindow.document.write(html);
            printWindow.document.close();
            setTimeout(() => {
                printWindow.print();
            }, 300);
        } catch {
            printWindow.close();
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button className="btn btn-sm btn-ghost export-pdf-btn" onClick={handleExport} disabled={isExporting}>
            <Download size={14} /> {isExporting ? 'Exporting…' : 'Export PDF'}
        </button>
    );
}
