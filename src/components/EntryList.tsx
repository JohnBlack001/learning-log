import type { LearningEntry } from '../data/entries';

type EntryListProps = {
  entries: LearningEntry[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function EntryList({ entries, selectedId, onSelect }: EntryListProps) {
  if (entries.length === 0) {
    return <p className="empty-state">没有匹配的学习记录。</p>;
  }

  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <button
          className={`entry-card ${entry.id === selectedId ? 'selected' : ''}`}
          key={entry.id}
          type="button"
          onClick={() => onSelect(entry.id)}
        >
          <span className="entry-date">{entry.date}</span>
          <strong>{entry.title}</strong>
          <span>{entry.summary}</span>
          <span className="entry-tags">
            {entry.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </button>
      ))}
    </div>
  );
}
