"use client";

import { useState } from "react";
import Link from "next/link";
import { FilterType } from "@/types/addiction";
import { scenarios } from "@/data/scenarios";
import { filterScenarios } from "@/utils/filters";
import SearchBar from "@/components/SearchBar";
import FilterButtons from "@/components/FilterButtons";
import ScenarioCard from "@/components/ScenarioCard";
import NoResults from "@/components/NoResults";
import StartConversationButton from "@/components/StartConversationButton";

export default function Select() {
  const [selectedType, setSelectedType] = useState<FilterType>("all");
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredScenarios = filterScenarios(scenarios, selectedType, searchTerm);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedType("all");
  };

  return (
    <div className="relative z-10 text-center max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
          대화할 중독자를 선택하세요
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2">
          실제 중독자들의 경험을 바탕으로 한 다양한 상황을 선택하여<br className="hidden sm:block"/>
          중독의 위험성과 그들의 후회를 직접 들어보세요
        </p>
      </div>

      {/* Search bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Filter buttons */}
      <FilterButtons selectedType={selectedType} onTypeChange={setSelectedType} />

      {/* Results count */}
      <div className="text-center mb-4 sm:mb-6">
        <p className="text-gray-400 text-sm sm:text-base">
          {filteredScenarios.length}명의 중독자를 찾았습니다
          {searchTerm && ` (검색어: "${searchTerm}")`}
        </p>
      </div>

      {/* Scenarios grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredScenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            isSelected={selectedScenario === scenario.id}
            onClick={() => setSelectedScenario(scenario.id)}
          />
        ))}
      </div>

      {/* No results message */}
      {filteredScenarios.length === 0 && <NoResults onReset={handleReset} />}

      {/* Start conversation button */}
      <StartConversationButton 
        selectedScenario={selectedScenario} 
        scenarios={scenarios} 
      />

      {/* Back button */}
      <div className="text-center mt-6 sm:mt-8">
        <Link href="/">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-600 text-sm sm:text-base">
            ← 메인으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}