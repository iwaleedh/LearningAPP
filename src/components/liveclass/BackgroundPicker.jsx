const BG_OPTIONS = [
  { id: 'white',  label: 'Blank'   },
  { id: 'lined',  label: 'Lined'   },
  { id: 'grid',   label: 'Graph'   },
  { id: 'dotted', label: 'Dotted'  },
  { id: 'yellow', label: 'Notepad' },
];

export default function BackgroundPicker({ current, onChange }) {
  return (
    <div className="lc-bg-picker">
      {BG_OPTIONS.map(opt => (
        <button
          key={opt.id}
          className={`lc-bg-thumb ${current === opt.id ? 'lc-bg-thumb--active' : ''}`}
          onClick={() => onChange(opt.id)}
          title={opt.label}
        >
          <span className="lc-bg-preview" data-bg={opt.id}></span>
        </button>
      ))}
    </div>
  );
}
