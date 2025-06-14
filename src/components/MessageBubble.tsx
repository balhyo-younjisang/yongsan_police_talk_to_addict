import { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
  isLastMessage: boolean;
}

export default function MessageBubble({ message, isLastMessage }: MessageBubbleProps) {
  const isUser = message.sender === "user";
  const timeString = message.timestamp.toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 ${isLastMessage ? 'mb-6' : ''}`}>
      <div className={`max-w-xs lg:max-w-md ${isUser ? 'order-2' : 'order-1'}`}>
        {/* Avatar for addict messages */}
        {!isUser && (
          <div className="flex items-end space-x-2 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {message.sender === "addict" ? "A" : "U"}
            </div>
          </div>
        )}
        
        {/* Message bubble */}
        <div className={`relative ${isUser ? 'ml-auto' : 'mr-auto'}`}>
          <div className={`px-4 py-3 rounded-2xl ${
            isUser 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-md' 
              : 'bg-gray-700/50 text-gray-100 rounded-bl-md backdrop-blur-sm border border-gray-600'
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          </div>
          
        </div>
        
        {/* Timestamp */}
        <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {timeString}
        </div>
      </div>
    </div>
  );
} 