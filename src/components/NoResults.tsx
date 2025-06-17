interface NoResultsProps {
  onReset: () => void;
}

export default function NoResults({ onReset }: NoResultsProps) {
  return (
    <div className="text-center py-8 sm:py-12">
      <div className="text-gray-400 text-lg sm:text-xl mb-4 sm:mb-6">
        검색 결과가 없습니다
      </div>
      <button
        onClick={onReset}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-600 text-sm sm:text-base"
      >
        필터 초기화
      </button>
    </div>
  );
} 