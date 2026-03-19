const STAMPS = [
  { id: 'check',    label: '✓ Correct',    emoji: '✓'  },
  { id: 'cross',    label: '✗ Wrong',      emoji: '✗'  },
  { id: 'star',     label: '★ Star',       emoji: '★'  },
  { id: 'question', label: '? Question',   emoji: '?'  },
  { id: 'heart',    label: '❤ Well done',  emoji: '❤'  },
  { id: 'fire',     label: '🔥 Hot',       emoji: '🔥' },
  { id: 'eyes',     label: '👀 See this',  emoji: '👀' },
  { id: 'bulb',     label: '💡 Idea',      emoji: '💡' },
];

/**
 * StampPicker — floating palette.
 *
 * @param {{ onSelect: (stampId: string, emoji: string) => void, onClose: () => void }} props
 */
export default function StampPicker({ onSelect, onClose }) {
  return (
    <div className="lc-stamp-picker" onMouseLeave={onClose}>
      {STAMPS.map(s => (
        <button
          key={s.id}
          className="lc-stamp-btn"
          title={s.label}
          onClick={() => { onSelect(s.id, s.emoji); onClose(); }}
        >
          {s.emoji}
        </button>
      ))}
    </div>
  );
}
