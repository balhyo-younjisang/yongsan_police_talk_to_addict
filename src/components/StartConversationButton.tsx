import Link from "next/link";
import { AddictionScenario } from "@/types/addiction";

interface StartConversationButtonProps {
  selectedScenario: string | null;
  scenarios: AddictionScenario[];
}

export default function StartConversationButton({ selectedScenario, scenarios }: StartConversationButtonProps) {
  const scenario = scenarios.find(s => s.id === selectedScenario);

  if (!selectedScenario || !scenario) {
    return (
      <div className="mt-8 sm:mt-12">
        <button
          disabled
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-600 text-gray-400 font-bold text-base sm:text-lg rounded-lg cursor-not-allowed opacity-50"
        >
          중독자를 선택해주세요
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-12">
      <Link href={`/chat/${selectedScenario}`}>
        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base sm:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-red-500/50">
          <span className="relative z-10">
            {scenario.title.split(" (")[0]}와 대화하기
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </Link>
    </div>
  );
} 