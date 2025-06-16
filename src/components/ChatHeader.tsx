import { ChatUser } from "@/types/chat";
import Link from "next/link";

interface ChatHeaderProps {
  addictUser: ChatUser;
  onClearHistory: () => void;
}

export default function ChatHeader({ addictUser, onClearHistory }: ChatHeaderProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {addictUser.name.charAt(0)}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
            addictUser.isOnline ? 'bg-green-500' : 'bg-gray-500'
          }`}></div>
        </div>
        
        {/* User Info */}
        <div>
          <h2 className="text-white font-semibold text-lg">{addictUser.name}</h2>
          <p className="text-gray-400 text-sm">
            {addictUser.isOnline ? '🟢 온라인' : '🔴 오프라인'}
          </p>
        </div>
      </div>
      
      {/* Back Button */}
      <Link href="/select">
        <button className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-lg transition-all duration-300 backdrop-blur-sm border border-gray-600">
          ← 목록으로
        </button>
      </Link>

      <button
        onClick={onClearHistory}
        className="px-3 py-1 text-sm text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
      >
        대화 내용 지우기
      </button>
    </div>
  );
} 