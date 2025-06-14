import Link from "next/link";
import { AddictionScenario } from "@/types/addiction";

interface StartConversationButtonProps {
  selectedScenario: string | null;
  scenarios: AddictionScenario[];
}

export default function StartConversationButton({ selectedScenario, scenarios }: StartConversationButtonProps) {
  if (!selectedScenario) return null;

  const selectedScenarioData = scenarios.find(s => s.id === selectedScenario);

  return (
    <div className="text-center mt-12">
      <Link href={`/chat/${selectedScenario}`}>
        <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-red-500/50">
          <span className="relative z-10">대화 시작하기</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </Link>
      <p className="text-gray-500 text-sm mt-4">
        {selectedScenarioData?.title}와의 대화를 시작합니다
      </p>
    </div>
  );
} 