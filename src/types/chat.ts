export interface ChatMessage {
  id: string;
  content: string;
  sender: "user" | "addict";
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  currentUser: ChatUser;
  addictUser: ChatUser;
  isTyping: boolean;
} 