export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2 sm:mb-4">
      <div className="bg-gray-700 text-gray-100 rounded-lg rounded-bl-none px-3 sm:px-4 py-2 sm:py-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="flex space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
} 