export interface SeasonalFood {
  month: number;
  name: string;
  nutrients: string[];
  efficacyTitle: string;
  efficacyDesc: string;
  emoji: string;
  bgColor: string; // Tailwind class background
  textColor: string; // Tailwind class text
  accentColor: string; // Tailwind class border/ring/accent
  badgeColor: string; // Tailwind class badge background
}

export interface ScienceTip {
  id: string;
  title: string;
  ingredient: string;
  desc: string;
  tip: string;
  iconName: string;
  color: string;
}

export interface SafetyRule {
  id: number;
  title: string;
  desc: string;
  tip: string;
  iconName: string;
  badge: string;
}

export interface Quiz {
  id: number;
  type: "ox" | "choice";
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
  hint?: string;
}

export const seasonalFoods: SeasonalFood[] = [
  {
    month: 1,
    name: "우엉",
    nutrients: ["이눌린", "식이섬유"],
    efficacyTitle: "장 건강 대장",
    efficacyDesc: "식이섬유가 풍부해 배변 활동을 돕고 몸속 나쁜 찌꺼기를 내보내 줍니다.",
    emoji: "🫚",
    bgColor: "from-amber-50 to-amber-100/50",
    textColor: "text-amber-800",
    accentColor: "border-amber-200 text-amber-700 hover:bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    month: 2,
    name: "딸기",
    nutrients: ["비타민 C", "안토시아닌"],
    efficacyTitle: "피부 미인 & 면역 쑥쑥",
    efficacyDesc: "비타민 C가 많아 감기를 예방하고 공부에 지친 피로를 풀어줍니다.",
    emoji: "🍓",
    bgColor: "from-rose-50 to-rose-100/50",
    textColor: "text-rose-800",
    accentColor: "border-rose-200 text-rose-700 hover:bg-rose-50",
    badgeColor: "bg-rose-100 text-rose-800"
  },
  {
    month: 3,
    name: "달래",
    nutrients: ["알리신", "비타민 C"],
    efficacyTitle: "에너지 충전",
    efficacyDesc: '"알리신" 성분이 신진대사를 도와 봄철 나른함을 물리쳐 줍니다.',
    emoji: "🌱",
    bgColor: "from-green-50 to-green-100/50",
    textColor: "text-green-800",
    accentColor: "border-green-200 text-green-700 hover:bg-green-50",
    badgeColor: "bg-green-100 text-green-800"
  },
  {
    month: 4,
    name: "냉이",
    nutrients: ["칼슘", "철분", "단백질"],
    efficacyTitle: "뼈 튼튼 피 회복",
    efficacyDesc: "채소 중 단백질이 가장 많고 칼슘이 풍부해 키 성장에 도움을 줍니다.",
    emoji: "🌿",
    bgColor: "from-emerald-50 to-emerald-100/50",
    textColor: "text-emerald-800",
    accentColor: "border-emerald-200 text-emerald-700 hover:bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    month: 5,
    name: "양배추",
    nutrients: ["비타민 U", "설포라판"],
    efficacyTitle: "위(胃) 보호막",
    efficacyDesc: "위 점막을 튼튼하게 하고 뇌세포를 보호해 두뇌 발달을 돕습니다.",
    emoji: "🥬",
    bgColor: "from-lime-50 to-lime-100/50",
    textColor: "text-lime-800",
    accentColor: "border-lime-200 text-lime-700 hover:bg-lime-50",
    badgeColor: "bg-lime-100 text-lime-800"
  },
  {
    month: 6,
    name: "부추",
    nutrients: ["베타카로틴", "알리신"],
    efficacyTitle: "천연 피로 해소제",
    efficacyDesc: "비타민 B군 흡수를 도와 기운을 북돋우고 몸을 따뜻하게 해줍니다.",
    emoji: "🥗",
    bgColor: "from-teal-50 to-teal-100/50",
    textColor: "text-teal-800",
    accentColor: "border-teal-200 text-teal-700 hover:bg-teal-50",
    badgeColor: "bg-teal-100 text-teal-800"
  },
  {
    month: 7,
    name: "토마토",
    nutrients: ["라이코펜", "루틴"],
    efficacyTitle: "혈관 수호신",
    efficacyDesc: "몸속 나쁜 찌꺼기를 없애주고 혈관을 튼튼하게 만들어 줍니다.",
    emoji: "🍅",
    bgColor: "from-red-50 to-red-100/50",
    textColor: "text-red-800",
    accentColor: "border-red-200 text-red-700 hover:bg-red-50",
    badgeColor: "bg-red-100 text-red-800"
  },
  {
    month: 8,
    name: "복숭아",
    nutrients: ["유기산", "비타민"],
    efficacyTitle: "여름 활력제",
    efficacyDesc: "지친 몸에 수분과 에너지를 채워주고 스트레스 완화에 도움을 줍니다.",
    emoji: "🍑",
    bgColor: "from-orange-50 to-orange-100/50",
    textColor: "text-orange-800",
    accentColor: "border-orange-200 text-orange-700 hover:bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-800"
  },
  {
    month: 9,
    name: "고구마",
    nutrients: ["식이섬유", "칼륨"],
    efficacyTitle: "배변 활동 1등",
    efficacyDesc: "장 운동을 도와 변비를 예방하고 나트륨 배출을 도와줍니다.",
    emoji: "🍠",
    bgColor: "from-purple-50 to-purple-100/50",
    textColor: "text-purple-800",
    accentColor: "border-purple-200 text-purple-700 hover:bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-800"
  },
  {
    month: 10,
    name: "토란",
    nutrients: ["갈락탄", "칼륨"],
    efficacyTitle: "노화 방지 파수꾼",
    efficacyDesc: "간과 신장을 튼튼하게 하여 몸의 방어력을 높여줍니다.",
    emoji: "🥔",
    bgColor: "from-stone-50 to-stone-100/50",
    textColor: "text-stone-800",
    accentColor: "border-stone-200 text-stone-700 hover:bg-stone-50",
    badgeColor: "bg-stone-100 text-stone-800"
  },
  {
    month: 11,
    name: "시금치",
    nutrients: ["루테인", "엽산", "철분"],
    efficacyTitle: "눈과 피의 영양제",
    efficacyDesc: "공부하느라 지친 눈을 보호하고 빈혈 예방에 탁월합니다.",
    emoji: "🥬",
    bgColor: "from-sky-50 to-sky-100/50",
    textColor: "text-sky-800",
    accentColor: "border-sky-200 text-sky-700 hover:bg-sky-50",
    badgeColor: "bg-sky-100 text-sky-800"
  },
  {
    month: 12,
    name: "당근",
    nutrients: ["베타카로틴"],
    efficacyTitle: "눈 건강 수호신",
    efficacyDesc: "눈을 건강하게 하는 색소가 가득해 시력을 지키는 데 도움을 줍니다.",
    emoji: "🥕",
    bgColor: "from-amber-50 to-orange-100/50",
    textColor: "text-orange-900",
    accentColor: "border-orange-200 text-orange-800 hover:bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-950"
  }
];

export const scienceTips: ScienceTip[] = [
  {
    id: "sci-1",
    title: "눈 건강 성분(베타카로틴) 흡수 높이기",
    ingredient: "당근, 청경채, 부추 등",
    desc: "베타카로틴은 지용성 비타민이라 기름과 함께 만났을 때 흡수율이 수배로 높아집니다.",
    tip: "기름에 볶거나 요리할 때 기름 한 방울을 넣으면 영양소가 우리 몸에 훨씬 더 잘 흡수됩니다.",
    iconName: "Flame",
    color: "amber"
  },
  {
    id: "sci-2",
    title: "떫은맛과 독소 빼기",
    ingredient: "쑥갓, 죽순, 토란 등",
    desc: "떫고 아린 맛의 원인은 수산(옥살산) 성분 때문으로, 몸에 쌓이면 결석을 만들 수 있습니다.",
    tip: "쌀뜨물에 삶거나 요리하면 아린 맛과 수산 성분이 말끔히 사라져서 훨씬 부드럽고 안전해집니다.",
    iconName: "Droplet",
    color: "cyan"
  },
  {
    id: "sci-3",
    title: "비타민 C 지키기",
    ingredient: "양배추, 쑥갓 등",
    desc: "비타민 C는 열에 매우 약한 성질을 가지고 있어, 뜨거운 열에 오랫동안 노출되면 다 파괴됩니다.",
    tip: "가급적 생으로 상큼하게 먹거나, 익혀야 할 때는 짧은 시간(15초 내외)만 아주 살짝 데쳐서 드세요.",
    iconName: "Timer",
    color: "rose"
  },
  {
    id: "sci-4",
    title: "심지의 재발견",
    ingredient: "양배추 심지",
    desc: "보통 버려지는 심지 부분은 사실 잎보다 위 보호 성분인 비타민 U와 단맛(당도)이 가장 높은 엑기스입니다.",
    tip: "버리지 말고 얇게 썰어 새콤달콤 피클로 만들거나, 깊은 맛을 내는 국물 육수용으로 사용해 보세요.",
    iconName: "Sparkles",
    color: "emerald"
  }
];

export const safetyRules: SafetyRule[] = [
  {
    id: 1,
    title: "잔류농약 안녕! 세척법",
    desc: "양배추처럼 여러 겹인 채소는 농약 성분이 남기 쉬운 겉잎을 과감히 2~3장 떼어내고 세척합니다.",
    tip: "깻잎이나 상추처럼 주름이 많은 잎채소는 물에 5분 정도 푹 담가두었다가, 흐르는 물에 30초 이상 충분히 흔들어 헹궈주면 미세 농약 걱정 끝!",
    iconName: "ShieldAlert",
    badge: "세척관리"
  },
  {
    id: 2,
    title: "신선도 지키는 온도",
    desc: "신선한 채소와 과일, 육류는 상온에 두면 식중독을 일으키는 유해 세균이 급격히 번식하기 쉽습니다.",
    tip: "세균의 활성화를 막고 신선함을 오랫동안 안전하게 유지하기 위해 구매 직후 반드시 5℃ 이하의 냉장 온도로 차갑게 보관해 주세요.",
    iconName: "ThermometerSnowflake",
    badge: "온도관리"
  },
  {
    id: 3,
    title: "손질 시 주의사항",
    desc: "토란 표면의 껍질을 까거나 맨손으로 직접 만지면 옥살산 칼슘 성분 때문에 심한 가려움증을 유발할 수 있습니다.",
    tip: "토란을 손질할 때는 피부 보호를 위해 반드시 비닐장갑이나 고무장갑을 끼거나, 미리 손에 굵은 소금을 촉촉히 묻힌 뒤 손질해야 가렵지 않습니다.",
    iconName: "Hand",
    badge: "손질관리"
  },
  {
    id: 4,
    title: "교차오염 방지",
    desc: "육류나 어패류 표면에 살던 세균이 칼과 도마를 타고 상큼한 샐러드나 채소류로 고스란히 옮겨가 식중독을 유발합니다.",
    tip: "주방 내 위생 안전을 위해 세균 교차전파를 철저히 차단하도록 채소용, 육류용, 어패류용 칼과 도마를 철저히 개별 구분하여 사용하세요.",
    iconName: "Grid",
    badge: "위생관리"
  }
];

export const quizzes: Quiz[] = [
  {
    id: 1,
    type: "ox",
    question: "쑥갓을 데칠 때 결석을 만들 수 있는 성분(옥살산)을 없애려면 냄비 뚜껑을 꼭 닫아야 한다.",
    options: ["O", "X"],
    answer: "X",
    explanation: "뚜껑을 열고 데쳐야 나쁜 성분이 열과 함께 공기 중으로 휘발되어 깨끗하게 날아갑니다. 꼭 뚜껑을 열고 조리해 주시는 점 잊지 마세요!",
    hint: "독소 성분이 하늘로 날아갈 수 있게 숨통을 열어주어야 합니다."
  },
  {
    id: 2,
    type: "choice",
    question: "양배추에서 위를 보호하는 성분(비타민 U)이 가장 풍부하게 들어있는 부위는 어디일까요?",
    options: ["겉잎 부분", "중간 잎 부분", "심지 부분"],
    answer: "심지 부분",
    explanation: "양배추 심지는 질겨서 자주 버려지곤 하지만, 실은 위 보호막을 튼튼히 하는 '비타민 U'와 단맛 성분이 가장 가득 숨겨진 보물 상자랍니다!",
    hint: "대다수 사람들이 딱딱하고 질겨서 버리는 가장 단단한 핵심 부분입니다."
  }
];
