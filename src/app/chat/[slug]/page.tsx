"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { ChatMessage, ChatUser } from "@/types/chat";
import { getScenarioById, createInitialMessage, generateChatGPTResponse } from "@/utils/chatHelpers";
import { saveChatHistory, loadChatHistory, clearChatHistory } from "@/utils/storageHelpers";
import ChatHeader from "@/components/ChatHeader";
import MessageBubble from "@/components/MessageBubble";
import TypingIndicator from "@/components/TypingIndicator";
import ChatInput from "@/components/ChatInput";

export default function Chat() {
  const params = useParams();
  const scenarioId = params.slug as string;
  const scenario = getScenarioById(scenarioId);
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Create addict user
  const addictUser: ChatUser = {
    id: scenarioId,
    name: scenario?.title.split(" (")[0] || "중독자",
    isOnline: true
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Load chat history on mount
  useEffect(() => {
    if (scenario) {
      const savedMessages = loadChatHistory(scenarioId);
      if (savedMessages.length > 0) {
        setMessages(savedMessages);
      } else {
        // Initialize with addict's first message if no history exists
        const initialMessage: ChatMessage = {
          id: "initial",
          content: createInitialMessage(scenario),
          sender: "addict",
          timestamp: new Date()
        };
        setMessages([initialMessage]);
      }
    }
  }, [scenario, scenarioId]);

  // Save chat history whenever messages change
  useEffect(() => {
    if (scenario && messages.length > 0) {
      saveChatHistory(scenarioId, messages);
    }
  }, [messages, scenario, scenarioId]);

  // Handle sending message
  const handleSendMessage = async (content: string) => {
    if (!scenario) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    try {
      // Generate addict response using ChatGPT
      const responseContent = await generateChatGPTResponse(content, scenario, messages);
      
      const addictResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        sender: "addict",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, addictResponse]);
    } catch (error) {
      console.error("Error generating response:", error);
      // Add error message
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "죄송합니다. 응답을 생성하는데 문제가 발생했습니다.",
        sender: "addict",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle clearing chat history
  const handleClearHistory = () => {
    if (window.confirm("대화 내용을 모두 지우시겠습니까?")) {
      clearChatHistory(scenarioId);
      // Initialize with addict's first message
      const initialMessage: ChatMessage = {
        id: "initial",
        content: createInitialMessage(scenario!),
        sender: "addict",
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  };

  if (!scenario) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">시나리오를 찾을 수 없습니다</h1>
          <p className="text-gray-400">올바른 경로로 접근해주세요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Chat Header */}
      <ChatHeader 
        addictUser={addictUser} 
        onClearHistory={handleClearHistory}
      />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <MessageBubble
              key={message.id}
              message={message}
              isLastMessage={index === messages.length - 1 && !isTyping}
            />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}
          
          {/* Auto-scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
}