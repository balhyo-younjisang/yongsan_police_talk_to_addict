"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { ChatMessage, ChatUser } from "@/types/chat";
import { getScenarioById, generateAddictResponse, createInitialMessage } from "@/utils/chatHelpers";
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

  // Create current user
  const currentUser: ChatUser = {
    id: "user",
    name: "사용자",
    isOnline: true
  };

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initialize chat with addict's first message
  useEffect(() => {
    if (scenario && messages.length === 0) {
      const initialMessage: ChatMessage = {
        id: "initial",
        content: createInitialMessage(scenario),
        sender: "addict",
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }
  }, [scenario, messages.length]);

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

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Generate addict response
      const addictResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: generateAddictResponse(content, scenario),
        sender: "addict",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, addictResponse]);
    }, 1500 + Math.random() * 2000); // Random delay between 1.5-3.5 seconds
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
      <ChatHeader addictUser={addictUser} />

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