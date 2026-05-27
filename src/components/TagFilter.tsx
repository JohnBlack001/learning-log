type TagFilterProps = {
  tags: string[];
  selectedTag: string;
  onSelect: (tag: string) => void;
};

export function TagFilter({ tags, selectedTag, onSelect }: TagFilterProps) {
  return (
    <div className="tag-filter" aria-label="标签筛选">
      <button
        className={selectedTag === 'all' ? 'active' : ''}
        type="button"
        onClick={() => onSelect('all')}
      >
        全部
      </button>
      {tags.map((tag) => (
        <button
          className={selectedTag === tag ? 'active' : ''}
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
