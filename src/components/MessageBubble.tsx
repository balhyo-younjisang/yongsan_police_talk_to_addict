import { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
  isLastMessage: boolean;
}

export default function MessageBubble({ message, isLastMessage }: MessageBubbleProps) {
  const isUser = message.sender === "user";
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2 sm:mb-4`}>
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-700 text-gray-100 rounded-bl-none"
        } ${isLastMessage ? "animate-fade-in" : ""}`}
      >
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>
        <div className={`text-xs text-gray-300 mt-1 sm:mt-2 ${
          isUser ? "text-right" : "text-left"
        }`}>
          {message.timestamp.toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
} 