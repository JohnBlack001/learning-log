type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <label className="search-box">
      <span>搜索</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="关键词、标题、标签"
        type="search"
      />
    </label>
  );
}
