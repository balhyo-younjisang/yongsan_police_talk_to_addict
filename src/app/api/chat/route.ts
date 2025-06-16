import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatMessage } from "@/types/chat";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message, scenario, messageHistory } = await req.json();

    // Convert message history to ChatGPT format
    const messages = [
      {
        role: "system",
        content: scenario.promptSettings.systemPrompt,
      },
      ...messageHistory.map((msg: ChatMessage) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content,
      })),
      {
        role: "user",
        content: message,
      },
    ];

    // Add additional context from promptSettings
    const systemMessage = {
      role: "system",
      content: `
        ${scenario.promptSettings.systemPrompt}
        
        성격 특성:
        ${scenario.promptSettings.personalityTraits.join(", ")}
        
        응답 스타일:
        - 톤: ${scenario.promptSettings.responseStyle.tone}
        - 언어: ${scenario.promptSettings.responseStyle.language}
        - 감정 상태: ${scenario.promptSettings.responseStyle.emotionalState}
        
        주요 주제:
        ${scenario.promptSettings.keyTopics.join(", ")}
        
        응답 가이드라인:
        ${scenario.promptSettings.responseGuidelines.join("\n")}
      `,
    };

    // Replace the first system message with the detailed one
    messages[0] = systemMessage;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
} 