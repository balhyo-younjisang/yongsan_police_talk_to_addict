import { ChatMessage } from "@/types/chat";

const STORAGE_KEY_PREFIX = "chat_history_";

export function saveChatHistory(scenarioId: string, messages: ChatMessage[]): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${scenarioId}`;
    const serializedMessages = messages.map(msg => ({
      ...msg,
      timestamp: msg.timestamp.toISOString() // Convert Date to string for storage
    }));
    localStorage.setItem(key, JSON.stringify(serializedMessages));
  } catch (error) {
    console.error("Error saving chat history:", error);
  }
}

export function loadChatHistory(scenarioId: string): ChatMessage[] {
  try {
    const key = `${STORAGE_KEY_PREFIX}${scenarioId}`;
    const storedData = localStorage.getItem(key);
    
    if (!storedData) return [];

    const messages = JSON.parse(storedData).map((msg: ChatMessage) => ({
      ...msg,
      timestamp: new Date(msg.timestamp) // Convert string back to Date
    }));

    return messages;
  } catch (error) {
    console.error("Error loading chat history:", error);
    return [];
  }
}

export function clearChatHistory(scenarioId: string): void {
  try {
    const key = `${STORAGE_KEY_PREFIX}${scenarioId}`;
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error clearing chat history:", error);
  }
} 