import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  ChefHat, 
  Calendar, 
  ShieldAlert, 
  ThermometerSnowflake, 
  Hand, 
  Grid, 
  Utensils, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Droplet, 
  Timer, 
  Smile, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  Info, 
  Check, 
  RotateCcw,
  CheckSquare
} from "lucide-react";

import { 
  seasonalFoods, 
  scienceTips, 
  safetyRules, 
  quizzes, 
  SeasonalFood, 
  ScienceTip, 
  SafetyRule, 
  Quiz 
} from "./data";

export default function App() {
  const currentSystemMonth = 7; // July based on current local time: 2026-07-14
  
  // Interactive States
  const [selectedMonth, setSelectedMonth] = useState<number>(currentSystemMonth);
  const [selectedScienceId, setSelectedScienceId] = useState<string>("sci-1");
  const [completedSafety, setCompletedSafety] = useState<number[]>([]);
  const [studentName, setStudentName] = useState<string>("");
  const [nameSubmitted, setNameSubmitted] = useState<boolean>(false);
  
  // Quiz states
  const [quiz1Answer, setQuiz1Answer] = useState<string | null>(null);
  const [quiz2Answer, setQuiz2Answer] = useState<string | null>(null);
  const [showQuiz1Hint, setShowQuiz1Hint] = useState<boolean>(false);
  const [showQuiz2Hint, setShowQuiz2Hint] = useState<boolean>(false);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  // Active spotlight food
  const activeFood = seasonalFoods.find(f => f.month === selectedMonth) || seasonalFoods[6];

  // Handlers
  const handleMonthPrev = () => {
    setSelectedMonth(prev => (prev === 1 ? 12 : prev - 1));
  };

  const handleMonthNext = () => {
    setSelectedMonth(prev => (prev === 12 ? 1 : prev + 1));
  };

  const toggleSafetyComplete = (id: number) => {
    setCompletedSafety(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAllSafetyComplete = () => {
    if (completedSafety.length === safetyRules.length) {
      setCompletedSafety([]);
    } else {
      setCompletedSafety(safetyRules.map(r => r.id));
    }
  };

  const handleQuizSubmit = () => {
    let tempScore = 0;
    if (quiz1Answer === quizzes[0].answer) tempScore += 50;
    if (quiz2Answer === quizzes[1].answer) tempScore += 50;
    setScore(tempScore);
    setQuizSubmitted(true);
    if (tempScore === 100) {
      setShowCertificate(true);
    }
  };

  const resetQuiz = () => {
    setQuiz1Answer(null);
    setQuiz2Answer(null);
    setQuizSubmitted(false);
    setScore(0);
    setShowCertificate(false);
    setShowQuiz1Hint(false);
    setShowQuiz2Hint(false);
  };

  // Icon mappings
  const getScienceIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-5 h-5 text-amber-400" />;
      case "Droplet": return <Droplet className="w-5 h-5 text-cyan-400" />;
      case "Timer": return <Timer className="w-5 h-5 text-rose-400" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getSafetyIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-emerald-600" />;
      case "ThermometerSnowflake": return <ThermometerSnowflake className="w-5 h-5 text-sky-600" />;
      case "Hand": return <Hand className="w-5 h-5 text-amber-600" />;
      case "Grid": return <Grid className="w-5 h-5 text-teal-600" />;
      default: return <Utensils className="w-5 h-5 text-emerald-600" />;
    }
  };

  // Border top mapping for the 12 month cards
  const getMonthTheme = (m: number) => {
    switch (m) {
      case 1: return { border: "border-t-blue-400", text: "text-blue-500", bg: "bg-blue-50/10" };
      case 2: return { border: "border-t-pink-400", text: "text-pink-500", bg: "bg-pink-50/10" };
      case 3: return { border: "border-t-emerald-400", text: "text-emerald-500", bg: "bg-emerald-50/10" };
      case 4: return { border: "border-t-green-500", text: "text-green-600", bg: "bg-green-50/10" };
      case 5: return { border: "border-t-yellow-400", text: "text-yellow-500", bg: "bg-yellow-50/10" };
      case 6: return { border: "border-t-lime-500", text: "text-lime-600", bg: "bg-lime-50/10" };
      case 7: return { border: "border-t-red-500", text: "text-red-500", bg: "bg-red-50/10" };
      case 8: return { border: "border-t-orange-400", text: "text-orange-500", bg: "bg-orange-50/10" };
      case 9: return { border: "border-t-amber-600", text: "text-amber-700", bg: "bg-amber-50/10" };
      case 10: return { border: "border-t-stone-400", text: "text-stone-500", bg: "bg-stone-50/10" };
      case 11: return { border: "border-t-teal-600", text: "text-teal-700", bg: "bg-teal-50/10" };
      case 12: return { border: "border-t-orange-600", text: "text-orange-700", bg: "bg-orange-50/10" };
      default: return { border: "border-t-stone-400", text: "text-stone-500", bg: "bg-stone-50/10" };
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Poster Board Container mimicking a elegant printed publication/desktop workspace */}
      <div className="w-full max-w-6xl bg-slate-50 flex flex-col p-6 sm:p-8 rounded-3xl border-8 border-white shadow-xl overflow-hidden">
        
        {/* HEADER SECTION - Styled exactly matching Professional Polish */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-4 border-emerald-600 pb-4 mb-8 gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-bold rounded-full tracking-tighter shadow-sm">
                15년 차 베테랑 영양교사 노하우
              </span>
              <span className="text-emerald-700 font-extrabold text-xs sm:text-sm tracking-tight flex items-center gap-1">
                🏆 전국 영양교육 우수 가이드 선정
              </span>
            </div>
            <h1 className="text-2xl sm:text-4.5xl font-black text-slate-800 tracking-tight leading-none mt-1">
              열두 달 제철 건강 영양 교육 가이드
            </h1>
          </div>
          
          <div className="text-left md:text-right w-full md:w-auto shrink-0 space-y-1">
            <p className="text-xs text-slate-400 font-mono">업데이트: 2026.07 / ver 1.5</p>
            <p className="text-sm font-semibold text-slate-600 italic underline decoration-emerald-300 decoration-2">
              우리 땅에서 자란 제철 식재료의 힘 🌱
            </p>
          </div>
        </header>

        {/* PROFILE IDENTIFICATION BANNER */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 font-bold shrink-0">
              👩‍🏫
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-800">영양교사의 따뜻한 잔소리</p>
              <p className="text-xs text-slate-500 leading-tight">청소년기 건강을 지켜주는 365일 비법서입니다. 이름을 등록해 보세요!</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 w-full sm:w-auto">
            <User className="w-4 h-4 text-slate-400" />
            {nameSubmitted ? (
              <div className="flex items-center justify-between gap-4 w-full">
                <p className="text-xs font-bold text-slate-800">
                  <span className="text-emerald-600 font-black">{studentName}</span> 학생용 맞춤 모드
                </p>
                <button 
                  onClick={() => setNameSubmitted(false)}
                  className="text-[11px] text-slate-400 hover:text-slate-600 hover:underline font-bold"
                >
                  수정
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (studentName.trim()) setNameSubmitted(true);
                }}
                className="flex items-center gap-2 w-full"
              >
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="학생 이름 입력"
                  className="text-xs bg-transparent border-0 p-0 focus:ring-0 focus:outline-none text-slate-800 placeholder-slate-400 font-bold w-full sm:w-40"
                  maxLength={10}
                />
                <button 
                  type="submit"
                  disabled={!studentName.trim()}
                  className="text-xs bg-emerald-600 text-white font-bold px-2.5 py-1 rounded-lg hover:bg-emerald-700 transition disabled:opacity-40 shrink-0"
                >
                  등록
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MAIN MULTI-COLUMN INTERACTIVE CONTENT */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 12-Month Poster Grid + Interactive Spotlight (8 Columns in Desktop) */}
          <section className="lg:col-span-8 flex flex-col space-y-6">
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-6 bg-emerald-600"></div>
              <h2 className="text-xl font-bold tracking-tight text-slate-800">
                [이달의 제철 건강 파트너] <span className="text-xs text-slate-400 font-normal ml-2">카드를 클릭해 상세 분석을 열어보세요!</span>
              </h2>
            </div>

            {/* 12 Months Poster Grid exactly mapped to the visual styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {seasonalFoods.map((f) => {
                const isSelected = selectedMonth === f.month;
                const isCurrent = f.month === currentSystemMonth;
                const theme = getMonthTheme(f.month);
                
                return (
                  <button
                    key={f.month}
                    onClick={() => setSelectedMonth(f.month)}
                    className={`text-left bg-white p-3.5 rounded-xl border-t-4 shadow-sm flex flex-col justify-between transition-all relative cursor-pointer ${theme.border} ${
                      isSelected 
                        ? "ring-2 ring-emerald-500 scale-[1.03] shadow-md z-10" 
                        : "hover:scale-[1.01] hover:shadow-xs opacity-90 hover:opacity-100"
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <span className={`font-black text-lg ${theme.text}`}>
                        {f.month < 10 ? `0${f.month}` : f.month}
                      </span>
                      <span className="text-xl">{f.emoji}</span>
                    </div>
                    
                    <div className="mt-2">
                      <p className="font-extrabold text-slate-800 text-sm sm:text-base">{f.name}</p>
                      <p className="text-[10px] leading-tight text-slate-500 mt-1 line-clamp-2">
                        {f.nutrients.join("/")}을 풍부히 함유한 <span className="font-semibold text-slate-700">{f.efficacyTitle}</span>
                      </p>
                    </div>

                    {isCurrent && (
                      <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* INTERACTIVE SPOTLIGHT DETAIL VIEW */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMonth}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4`}
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">👩‍⚕️</span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-800">
                        {activeFood.month}월 식재료 집중 분석 : <span className="text-emerald-700 font-black">{activeFood.name}</span>
                      </h4>
                      <p className="text-[11px] text-slate-400">성장기 핵심 비타민과 영양 설계</p>
                    </div>
                  </div>
                  
                  {/* Dial Switchers */}
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={handleMonthPrev}
                      className="p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
                      title="이전 달"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono font-bold text-slate-500 min-w-[32px] text-center">
                      {activeFood.month}월
                    </span>
                    <button 
                      onClick={handleMonthNext}
                      className="p-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
                      title="다음 달"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 shrink-0">
                    <span className="text-5xl mb-2 select-none">{activeFood.emoji}</span>
                    <span className="text-xs font-bold text-slate-800 bg-slate-200/60 px-2 py-0.5 rounded-md">
                      {activeFood.month}월의 수호식품
                    </span>
                  </div>

                  <div className="md:col-span-9 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {activeFood.nutrients.map((n, i) => (
                        <span key={i} className="text-xs font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100">
                          🎯 {n}
                        </span>
                      ))}
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-600">
                      <h5 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        <Smile className="w-4 h-4 text-emerald-600" />
                        영양교사 해설: <strong className="text-emerald-700">{activeFood.efficacyTitle}</strong>
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {activeFood.efficacyDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </section>

          {/* RIGHT COLUMN: Cooking Science + Safety Checklist + Quiz Challenge (4 Columns in Desktop) */}
          <aside className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* 1. Cooking Science Lab - Sophisticated Slate Dark Style */}
            <div className="bg-slate-800 text-slate-200 p-5 rounded-2xl shadow-md border-l-8 border-emerald-500 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  똑똑한 조리 과학실
                </h4>
                <span className="text-[9px] font-mono bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
                  CHEMISTRY
                </span>
              </div>

              {/* Mini Quick Switcher / Reader List */}
              <div className="space-y-3">
                {scienceTips.map((tip) => {
                  const isSelected = selectedScienceId === tip.id;
                  return (
                    <button
                      key={tip.id}
                      onClick={() => setSelectedScienceId(tip.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition duration-200 border border-transparent flex gap-3 text-xs ${
                        isSelected 
                          ? "bg-slate-700/80 text-white font-bold border-slate-600 shadow-xs" 
                          : "text-slate-300 hover:bg-slate-700/30"
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {getScienceIcon(tip.iconName)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-slate-100">{tip.title}</span>
                          <span className="text-[9px] text-emerald-400 font-semibold">{tip.ingredient}</span>
                        </div>
                        {isSelected && (
                          <p className="text-[11px] font-medium text-slate-300 leading-normal bg-slate-900/50 p-2 rounded-lg mt-1.5">
                            {tip.desc} <br />
                            <span className="text-amber-400 font-bold block mt-1">💡 꿀팁: {tip.tip}</span>
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Safety Rules List - Crisp layout with red dot header and checkbox list */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                  <span className="text-red-500 animate-pulse">●</span> 안전한 식탁 수칙
                </h4>
                <span className="text-[10px] text-slate-400 font-semibold">보관 &amp; 손질</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {safetyRules.map((rule) => {
                  const isChecked = completedSafety.includes(rule.id);
                  return (
                    <button
                      key={rule.id}
                      onClick={() => toggleSafetyComplete(rule.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition duration-200 flex gap-3 items-start relative overflow-hidden ${
                        isChecked 
                          ? "bg-emerald-50/40 border-emerald-200 text-slate-800" 
                          : "bg-slate-50/50 border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {getSafetyIcon(rule.iconName)}
                      </div>
                      
                      <div className="space-y-1 flex-grow pr-4">
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-slate-800">{rule.title}</span>
                          <span className="text-[9px] bg-slate-200 text-slate-600 font-bold px-1 py-0.5 rounded">
                            {rule.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {rule.desc}
                        </p>
                        <p className="text-[10px] text-emerald-800 font-semibold leading-normal pt-1 italic">
                          👉 {rule.tip}
                        </p>
                      </div>

                      <div className="absolute right-2.5 top-2.5 text-slate-300">
                        <div className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center ${
                          isChecked ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Individual Progress Meter */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-700">안전 학습 달성률</span>
                <div className="flex items-center gap-2 w-1/2">
                  <div className="flex-grow bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-600 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${(completedSafety.length / safetyRules.length) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono font-bold text-emerald-700">
                    {Math.round((completedSafety.length / safetyRules.length) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Quick Quiz (Fixed bottom style matching Design HTML, but interactive!) */}
            <div className="bg-emerald-50 border-2 border-emerald-200 p-5 rounded-2xl flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black bg-emerald-200 text-emerald-800 px-2.5 py-0.5 rounded">
                  🎓 도전! 영양 퀴즈
                </span>
                <span className="text-[10px] text-emerald-600 font-bold">인증 수료 테스트</span>
              </div>

              {/* Combined simple interactive block for Quiz 2 as displayed in mockup */}
              <p className="text-xs font-bold text-slate-700 leading-snug">
                Q. 양배추의 위 보호 성분(비타민U)이 가장 풍부한 부위는 어디일까요?
              </p>

              <div className="grid grid-cols-3 gap-1.5">
                {["겉잎", "중간 잎", "심지 부분"].map((opt) => {
                  const isSelected = quiz2Answer === opt;
                  return (
                    <button
                      key={opt}
                      disabled={quizSubmitted}
                      onClick={() => setQuiz2Answer(opt)}
                      className={`py-2 text-[10px] text-center rounded-lg border transition-all duration-150 font-bold ${
                        isSelected 
                          ? "bg-emerald-600 border-emerald-700 text-white font-extrabold" 
                          : "bg-white border-emerald-100 hover:bg-emerald-100/30 text-slate-600"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* OX Question in mini quiz block */}
              <p className="text-xs font-bold text-slate-700 leading-snug pt-1">
                Q. 쑥갓 데칠 땐 결석 옥살산 예방을 위해 뚜껑을 꼭 닫는다?
              </p>

              <div className="grid grid-cols-2 gap-1.5">
                {["O", "X"].map((opt) => {
                  const isSelected = quiz1Answer === opt;
                  return (
                    <button
                      key={opt}
                      disabled={quizSubmitted}
                      onClick={() => setQuiz1Answer(opt)}
                      className={`py-1.5 text-[10px] text-center rounded-lg border transition-all duration-150 font-bold ${
                        isSelected 
                          ? "bg-emerald-600 border-emerald-700 text-white font-extrabold" 
                          : "bg-white border-emerald-100 hover:bg-emerald-100/30 text-slate-600"
                      }`}
                    >
                      {opt === "O" ? "O (뚜껑 닫기)" : "X (뚜껑 열기)"}
                    </button>
                  );
                })}
              </div>

              {/* Submit & Reset actions */}
              <div className="pt-2 flex justify-between items-center gap-2 border-t border-emerald-100">
                {quizSubmitted ? (
                  <div className="text-[10px] text-slate-700 leading-tight w-full flex justify-between items-center">
                    <span>점수: <strong className="text-emerald-700">{score}점</strong></span>
                    <button 
                      onClick={resetQuiz} 
                      className="text-[10px] text-slate-500 underline font-bold"
                    >
                      다시하기
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={!quiz1Answer || !quiz2Answer}
                    onClick={handleQuizSubmit}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition disabled:opacity-50"
                  >
                    정답 확인하기
                  </button>
                )}
              </div>

              {quizSubmitted && (
                <p className="text-[10px] text-emerald-800 leading-relaxed font-semibold bg-emerald-100/40 p-2.5 rounded-lg border border-emerald-200">
                  {score === 100 
                    ? "💯 정답: 1번 X (열고 날려보내기) / 2번 심지 부분! 완벽하게 맞혔습니다!" 
                    : "⚠️ 1번 X / 2번 심지 부분이 정답입니다. 한 번 더 도전해서 100점을 채워보세요!"
                  }
                </p>
              )}
            </div>

          </aside>
        </main>

        {/* DYNAMIC NUTRITIONIST CERTIFICATE */}
        <AnimatePresence>
          {showCertificate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-8 border-4 border-double border-amber-300 bg-amber-50/20 rounded-3xl p-6 flex flex-col items-center text-center space-y-4 relative overflow-hidden"
            >
              {/* Decorative dashed lines for certificate style */}
              <div className="absolute top-4 bottom-4 left-4 right-4 border border-dashed border-amber-300/40 pointer-events-none" />

              <div className="bg-amber-100 p-2.5 rounded-full text-amber-700">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-[10px] font-black tracking-widest text-amber-800">
                  NUTRITION MASTER DIPLOMA
                </h4>
                <h3 className="text-xl font-black text-slate-800">
                  명예 1등급 청소년 영양 박사 수료증
                </h3>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-amber-200 max-w-lg shadow-sm">
                <p className="text-sm font-bold text-slate-800 mb-2">
                  성명: <span className="text-emerald-700 underline text-base font-black decoration-wavy">{studentName.trim() || "성실한 영양가족"}</span>
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  위 학생은 15년 차 학교 영양교사의 ‘열두 달 제철 건강 영양 교육 가이드’의 모든 교육 항목을 완벽히 소화하고 최종 영양 퀴즈대회에서 만점(100점)을 기록하였으므로 이 명예로운 수료증을 드립니다.
                </p>
                <div className="pt-4 text-[10px] text-slate-400 font-mono">
                  발급일자: {new Date().toLocaleDateString('ko-KR')} / 학교 영양교사 지혜 👩‍🍳 (인)
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER SECTION */}
        <footer className="mt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] border-t border-slate-200 pt-4 text-slate-400 gap-2">
          <p>© 2026 School Nutrition Teacher's Monthly Guide. All Rights Reserved.</p>
          <p>본 자료는 식약처 위생 매뉴얼 및 월별 제철 가이드를 기반으로 제작되었습니다.</p>
        </footer>

      </div>
    </div>
  );
}
