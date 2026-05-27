import type { LearningEntry } from '../data/entries';

type EntryDetailProps = {
  entry: LearningEntry | undefined;
};

export function EntryDetail({ entry }: EntryDetailProps) {
  if (!entry) {
    return (
      <section className="detail-panel">
        <p className="empty-state">选择一条记录查看详情。</p>
      </section>
    );
  }

  return (
    <section className="detail-panel">
      <div className="detail-heading">
        <span>{entry.date}</span>
        <h2>{entry.title}</h2>
        <p>{entry.summary}</p>
      </div>

      <div className="detail-section">
        <h3>关键收获</h3>
        <ul>
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h3>复盘</h3>
        <p>{entry.reflection}</p>
      </div>

      <div className="detail-section">
        <h3>下一步</h3>
        <ol>
          {entry.nextActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
