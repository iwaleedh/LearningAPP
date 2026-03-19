import { useEffect, useRef, useState } from 'react';

function PageThumbnail({ pdfDoc, pageNum, isActive, onClick }) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const renderedRef = useRef(false);

    useEffect(() => {
        if (!pdfDoc || !canvasRef.current || renderedRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    renderThumbnail();
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [pdfDoc]); // eslint-disable-line react-hooks/exhaustive-deps

    async function renderThumbnail() {
        if (renderedRef.current || !pdfDoc || !canvasRef.current) return;
        try {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 0.25 });
            const canvas = canvasRef.current;
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d');
            await page.render({ canvasContext: ctx, viewport }).promise;
            renderedRef.current = true;
        } catch {
            // failed render is non-fatal
        }
    }

    return (
        <div
            ref={containerRef}
            className={`annotate-thumbnail ${isActive ? 'annotate-thumbnail--active' : ''}`}
            onClick={onClick}
            title={`Page ${pageNum}`}
        >
            <canvas ref={canvasRef} className="annotate-thumbnail-canvas" />
            <span className="annotate-thumbnail-num">{pageNum}</span>
        </div>
    );
}

export default function ThumbnailSidebar({ pdfDoc, pageCount, currentPage, onPageSelect }) {
    const activeRef = useRef(null);

    // Scroll active thumbnail into view
    useEffect(() => {
        activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [currentPage]);

    return (
        <aside className="annotate-thumbnail-sidebar">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNum) => (
                <div key={pageNum} ref={pageNum === currentPage ? activeRef : null}>
                    <PageThumbnail
                        pdfDoc={pdfDoc}
                        pageNum={pageNum}
                        isActive={pageNum === currentPage}
                        onClick={() => onPageSelect(pageNum)}
                    />
                </div>
            ))}
        </aside>
    );
}
