import { useLayoutEffect, useRef } from 'react';
import SubjectIcon from './SubjectIcon.jsx';

/**
 * Qualification tabs plus one row of subject chips. Shared by Practice and Past papers so
 * subjects look and behave the same everywhere.
 * groups: [{ id, label, subjects: [{ id, name, count? }] }]
 */
export default function SubjectPicker({ groups, groupId, subjectId, onGroupChange, onSubjectChange, onSubjectIntent }) {
    const rowRef = useRef(null);
    const group = groups.find((item) => item.id === groupId) || groups[0];

    // On phones the chip row scrolls sideways: keep the chosen subject in view.
    useLayoutEffect(() => {
        const row = rowRef.current;
        const active = row?.querySelector('[aria-pressed="true"]');
        if (!row || !active || row.scrollWidth <= row.clientWidth) return;
        row.scrollLeft = Math.max(0, active.offsetLeft - row.offsetLeft - 16);
    }, [groupId, subjectId]);

    return (
        <div className="subject-picker">
            <div className="segmented subject-picker-tabs" role="tablist" aria-label="Qualification">
                {groups.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={item.id === group.id}
                        className="segmented-option"
                        onClick={() => onGroupChange(item)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div ref={rowRef} className="subject-picker-chips" role="group" aria-label={`${group.label} subjects`}>
                {group.subjects.map((subject) => (
                    <button
                        key={subject.id}
                        type="button"
                        className="chip subject-chip"
                        aria-pressed={subject.id === subjectId}
                        onClick={() => onSubjectChange(subject.id)}
                        onMouseEnter={onSubjectIntent ? () => onSubjectIntent(subject.id) : undefined}
                        onFocus={onSubjectIntent ? () => onSubjectIntent(subject.id) : undefined}
                    >
                        <SubjectIcon subject={subject.id} size={16} />
                        <span>{subject.name}</span>
                        {subject.count != null && <span className="chip-count">{subject.count}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}
