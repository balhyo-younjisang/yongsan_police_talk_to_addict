interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="이름, 직업, 상황으로 검색..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300 backdrop-blur-sm"
        />
        <div className="absolute right-3 top-3 text-gray-400">
          🔍
        </div>
      </div>
    </div>
  );
} 