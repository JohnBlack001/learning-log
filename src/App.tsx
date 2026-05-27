import { useMemo, useState } from 'react';
import { EntryDetail } from './components/EntryDetail';
import { EntryList } from './components/EntryList';
import { SearchBox } from './components/SearchBox';
import { TagFilter } from './components/TagFilter';
import { entries } from './data/entries';

function App() {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedId, setSelectedId] = useState(entries[0]?.id ?? '');

  const tags = useMemo(
    () => Array.from(new Set(entries.flatMap((entry) => entry.tags))).sort(),
    [],
  );

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return entries.filter((entry) => {
      const matchesTag = selectedTag === 'all' || entry.tags.includes(selectedTag);
      const searchable = [
        entry.title,
        entry.date,
        entry.summary,
        entry.tags.join(' '),
        entry.points.join(' '),
        entry.reflection,
      ]
        .join(' ')
        .toLowerCase();

      return matchesTag && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [query, selectedTag]);

  const selectedEntry = filteredEntries.find((entry) => entry.id === selectedId) ?? filteredEntries[0];

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">
            LL
          </div>
          <div>
            <h1>Learning Log</h1>
            <p>每日学习记录</p>
          </div>
        </div>

        <SearchBox value={query} onChange={setQuery} />

        <div className="filter-block">
          <h2>标签</h2>
          <TagFilter tags={tags} selectedTag={selectedTag} onSelect={setSelectedTag} />
        </div>

        <div className="stats-strip" aria-label="学习统计">
          <div>
            <strong>{entries.length}</strong>
            <span>记录</span>
          </div>
          <div>
            <strong>{tags.length}</strong>
            <span>标签</span>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <div className="workspace-header">
          <div>
            <span className="eyebrow">Knowledge Journal</span>
            <h2>学习时间线</h2>
          </div>
          <span className="result-count">{filteredEntries.length} 条结果</span>
        </div>

        <div className="content-grid">
          <EntryList entries={filteredEntries} selectedId={selectedEntry?.id ?? ''} onSelect={setSelectedId} />
          <EntryDetail entry={selectedEntry} />
        </div>
      </section>
    </main>
  );
}

export default App;
