import { ChatUser } from "@/types/chat";
import Link from "next/link";

interface ChatHeaderProps {
  addictUser: ChatUser;
  onClearHistory: () => void;
}

export default function ChatHeader({ addictUser, onClearHistory }: ChatHeaderProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-3 sm:p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white text-sm sm:text-lg font-semibold">
              {addictUser.name[0]}
            </span>
          </div>
          {addictUser.isOnline && (
            <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-gray-800" />
          )}
        </div>
        <div>
          <h2 className="text-white font-semibold text-sm sm:text-base">{addictUser.name}</h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            {addictUser.isOnline ? "온라인" : "오프라인"}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3">
        <Link href="/select">
          <button className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors">
            다른 대화
          </button>
        </Link>

        <button
          onClick={onClearHistory}
          className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
        >
          대화 내용 지우기
        </button>
      </div>
    </div>
  );
} 