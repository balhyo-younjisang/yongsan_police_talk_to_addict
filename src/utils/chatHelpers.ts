import { AddictionScenario } from "@/types/addiction";
import { scenarios } from "@/data/scenarios";
import { ChatMessage } from "@/types/chat";

export const getScenarioById = (id: string): AddictionScenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};

export const generateAddictResponse = (userMessage: string, scenario: AddictionScenario): string => {
  const responses = {
    "drug-college-student": [
      "처음에는 정말 가벼운 마음이었어... 친구들이 다 하는데 나만 안 하면 이상한 것 같았거든.",
      "마리화나부터 시작했는데, 점점 더 강한 걸 원하게 됐어. 지금 생각해보면 정말 바보 같아.",
      "학업에 집중할 수가 없어. 머리가 항상 흐릿하고 기억력도 나빠졌어.",
      "부모님께서 얼마나 걱정하시는지 모르겠어. 정말 후회스러워.",
      "친구들도 다 떠나갔어. 이제는 약물만이 내 친구가 됐어."
    ],
    "drug-high-school-student": [
      "SNS에서 너무 쉽게 접할 수 있었어. 처음엔 호기심이었는데...",
      "학교생활이 너무 힘들었어. 약물이 도피처가 됐던 것 같아.",
      "성장기인데 약물 때문에 키도 안 크고 몸도 안 좋아졌어.",
      "부모님께 정말 미안해. 이렇게 될 줄 몰랐어.",
      "학교도 중퇴했어. 이제는 집에만 있어. 정말 외로워."
    ],
    "gambling-college-student": [
      "용돈으로 시작했는데, 점점 더 큰 금액을 걸게 됐어.",
      "작은 승리에 도취되어서 큰 손실은 무시했어. 정말 바보 같았어.",
      "학비까지 써버렸어. 이제 어떻게 학교를 다닐지 모르겠어.",
      "부모님께 거짓말을 너무 많이 했어. 정말 미안해.",
      "도박 때문에 친구들과도 다 틀어졌어. 이제는 혼자야."
    ],
    "gambling-high-school-student": [
      "스마트폰 게임의 랜덤박스에 빠졌어. 처음엔 재미로 시작했는데...",
      "용돈을 다 써버렸어. 이제는 부모님 카드까지 몰래 써.",
      "게임 때문에 공부도 안 돼. 성적이 떨어지고 있어.",
      "부모님께 발각되면 어떡하지... 너무 무서워.",
      "이제는 게임 없이는 못 살 것 같아. 정말 중독이야."
    ]
  };

  const scenarioResponses = responses[scenario.id as keyof typeof responses] || [
    "정말 후회스러워...",
    "이렇게 될 줄 몰랐어.",
    "도움을 받고 싶어.",
    "가족들이 너무 걱정하시는 것 같아.",
    "이제는 어떻게 해야 할지 모르겠어."
  ];

  // Simple response selection based on message content
  const messageLower = userMessage.toLowerCase();
  if (messageLower.includes("어떻게") || messageLower.includes("왜")) {
    return scenarioResponses[0] || "정말 후회스러워...";
  } else if (messageLower.includes("가족") || messageLower.includes("부모")) {
    return scenarioResponses[3] || "가족들이 너무 걱정하시는 것 같아.";
  } else if (messageLower.includes("학교") || messageLower.includes("학업")) {
    return scenarioResponses[2] || "도움을 받고 싶어.";
  } else {
    // Random response
    const randomIndex = Math.floor(Math.random() * scenarioResponses.length);
    return scenarioResponses[randomIndex];
  }
};

export const createInitialMessage = (scenario: AddictionScenario): string => {
  const initialMessages = {
    "drug-college-student": "안녕... 나는 김민수야. 대학교 2학년인데... 약물 중독에 대해 이야기하고 싶어.",
    "drug-high-school-student": "이서연이야... 고등학생인데 SNS로 약물을 접하게 됐어. 정말 후회스러워.",
    "gambling-college-student": "정현우라고 해. 대학생인데 온라인 도박에 빠져서 학비까지 다 써버렸어.",
    "gambling-high-school-student": "강동훈이야. 고등학생인데 스마트폰 게임에 중독됐어. 용돈을 다 써버렸어."
  };

  return initialMessages[scenario.id as keyof typeof initialMessages] || 
    "안녕... 나는 중독자야. 도움이 필요해.";
};

export async function generateChatGPTResponse(
  userMessage: string,
  scenario: AddictionScenario,
  messageHistory: ChatMessage[]
): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        scenario: scenario,
        messageHistory: messageHistory,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate response");
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error generating ChatGPT response:", error);
    return "죄송합니다. 응답을 생성하는데 문제가 발생했습니다.";
  }
} 