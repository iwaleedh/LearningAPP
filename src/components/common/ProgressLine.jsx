// A thin read-progress track with its label ("3 of 11 read").
export default function ProgressLine({ value, total, label }) {
    const clamped = Math.min(value, total);
    const ratio = total ? clamped / total : 0;
    return (
        <span className="outline-progress">
            <span className="outline-progress-track" aria-hidden="true">
                <span className="outline-progress-fill" style={{ transform: `scaleX(${ratio})` }} />
            </span>
            <span className="outline-progress-label">{label ?? `${clamped} of ${total} read`}</span>
        </span>
    );
}
