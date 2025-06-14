import { AddictionScenario } from "@/types/addiction";

export const scenarios: AddictionScenario[] = [
  // 마약 중독자들 (청소년/대학생 위주)
  {
    id: "drug-college-student",
    type: "drug",
    title: "김민수 (22세, 대학생)",
    subtitle: "친구들과의 만남이 시작된 중독",
    description: "대학교 2학년, 처음에는 친구들과 함께 가볍게 시작했지만 점점 더 강한 약물을 찾게 된 케이스",
    age: "20대 초반",
    background: "친구들과의 만남 → 마리화나 → 합성대마 → 더 강한 약물",
    severity: "medium",
    warning: "친구 관계와 학업에 미치는 영향"
  },
  {
    id: "drug-high-school-student",
    type: "drug",
    title: "이서연 (17세, 고등학생)",
    subtitle: "SNS와 온라인을 통한 접근",
    description: "고등학생, SNS를 통해 쉽게 접할 수 있는 약물에 중독되어 학교생활과 가정이 무너진 케이스",
    age: "10대 후반",
    background: "SNS 접촉 → 필로폰 시도 → 중독 → 학교 중퇴",
    severity: "high",
    warning: "성장기 신체 발달 저해, 학업 포기"
  },
  {
    id: "drug-college-freshman",
    type: "drug",
    title: "박지원 (19세, 대학생)",
    subtitle: "새로운 환경에서의 유혹",
    description: "대학교 1학년, 기숙사 생활 중 선배들의 권유로 약물을 시작했지만 이제는 중독 상태",
    age: "10대 후반",
    background: "기숙사 생활 → 선배 권유 → 약물 시도 → 중독",
    severity: "high",
    warning: "학업 중단, 가족과의 단절"
  },
  {
    id: "drug-high-school-dropout",
    type: "drug",
    title: "최준호 (16세, 중퇴생)",
    subtitle: "학교 부적응이 만든 선택",
    description: "고등학교 중퇴생, 학교생활에 적응하지 못하고 만난 친구들로 인해 약물에 빠진 상황",
    age: "10대 중반",
    background: "학교 부적응 → 중퇴 → 약물 친구 → 중독",
    severity: "high",
    warning: "성장기 발달 저해, 사회적 고립"
  },
  {
    id: "drug-college-senior",
    type: "drug",
    title: "윤수진 (23세, 대학생)",
    subtitle: "취업 스트레스와 각성제",
    description: "대학교 4학년, 취업 준비와 학업 스트레스로 각성제를 복용하기 시작했지만 중독이 된 케이스",
    age: "20대 초반",
    background: "취업 스트레스 → 각성제 복용 → 의존 → 중독",
    severity: "medium",
    warning: "신체적 피해, 취업 실패"
  },
  
  // 도박 중독자들 (청소년/대학생 위주)
  {
    id: "gambling-college-student",
    type: "gambling",
    title: "정현우 (21세, 대학생)",
    subtitle: "용돈으로 시작한 온라인 도박",
    description: "대학교 3학년, 용돈으로 작은 금액부터 시작했지만 점점 더 큰 금액을 걸게 된 케이스",
    age: "20대 초반",
    background: "용돈으로 시작 → 작은 승리 → 큰 손실 → 빚더미",
    severity: "medium",
    warning: "학비 낭비, 학업 중단 위기"
  },
  {
    id: "gambling-high-school-student",
    type: "gambling",
    title: "강동훈 (18세, 고등학생)",
    subtitle: "스마트폰 게임이 시작된 악몽",
    description: "고등학교 3학년, 스마트폰 게임의 랜덤박스와 가챠 시스템에 빠져 용돈을 모두 쓴 상황",
    age: "10대 후반",
    background: "스마트폰 게임 → 랜덤박스 → 가챠 → 도박적 행동",
    severity: "medium",
    warning: "학업 집중력 저하, 가족과의 갈등"
  },
  {
    id: "gambling-college-freshman",
    type: "gambling",
    title: "한준호 (20세, 대학생)",
    subtitle: "대학생활과 함께 시작된 도박",
    description: "대학교 2학년, 대학생활 중 만난 친구들과 함께 스포츠토토를 시작했지만 중독이 된 케이스",
    age: "20대 초반",
    background: "대학생활 → 친구들과 스포츠토토 → 중독 → 학업 포기",
    severity: "high",
    warning: "학업 중단, 가족과의 단절"
  },
  {
    id: "gambling-teenager",
    type: "gambling",
    title: "이영희 (15세, 중학생)",
    subtitle: "온라인 도박의 함정",
    description: "중학교 3학년, 인터넷을 통해 접한 온라인 도박에 빠져 부모님의 카드로 결제한 상황",
    age: "10대 중반",
    background: "인터넷 접촉 → 온라인 도박 → 카드 결제 → 가족 발각",
    severity: "high",
    warning: "가족 관계 파괴, 법적 문제 가능성"
  }
]; 