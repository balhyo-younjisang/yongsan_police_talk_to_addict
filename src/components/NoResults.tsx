interface NoResultsProps {
  onReset: () => void;
}

export default function NoResults({ onReset }: NoResultsProps) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">😔</div>
      <h3 className="text-xl font-bold text-white mb-2">검색 결과가 없습니다</h3>
      <p className="text-gray-400 mb-4">
        다른 검색어를 입력하거나 필터를 변경해보세요
      </p>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-600"
      >
        모든 결과 보기
      </button>
    </div>
  );
} 