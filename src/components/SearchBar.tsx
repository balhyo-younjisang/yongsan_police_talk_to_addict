interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="mb-6 sm:mb-8 max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="중독자 검색..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 sm:px-5 py-2 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm text-sm sm:text-base"
        />
        <div className="absolute right-3 top-3 text-gray-400">
          🔍
        </div>
      </div>
    </div>
  );
} 