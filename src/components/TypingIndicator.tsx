export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-xs lg:max-w-md">
        <div className="flex items-end space-x-2 mb-1">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        </div>
        
        <div className="relative">
          <div className="px-4 py-3 rounded-2xl bg-gray-700/50 text-gray-100 rounded-bl-md backdrop-blur-sm border border-gray-600">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          {/* Message tail */}
          </div>
      </div>
    </div>
  );
} 