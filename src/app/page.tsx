import Link from "next/link";

export default function Home() {
  return (

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Title with dramatic styling */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-4 tracking-wider">
            TALK TO..
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4"></div>
        </div>

        {/* Subtitle with serious tone */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6 leading-relaxed">
            마약 / 도박 중독 AI 챗봇과 대화해보세요
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            실제 중독자들의 경험을 바탕으로 한 AI와 대화하며<br/>
            <span className="text-red-400 font-semibold">중독의 위험성과 그들의 후회</span>를 직접 들어보세요
          </p>
        </div>

        {/* Warning section */}
        <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-red-400 font-semibold text-lg">주의사항</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            이 챗봇은 중독의 심각성을 알리기 위한 교육 목적으로 제작되었습니다.<br/>
            대화 내용이 충격적일 수 있으니 주의하시기 바랍니다.
          </p>
        </div>

        {/* Start button */}
        <Link href="/select">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-red-500/50">
          <span className="relative z-10">대화 시작하기</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button></Link>

        {/* Additional warning text */}
        <p className="text-gray-500 text-sm mt-8 max-w-md mx-auto">
          * 이 경험은 중독의 위험성을 이해하고 예방하기 위한 교육적 목적입니다
        </p>
      </div>
  );
}