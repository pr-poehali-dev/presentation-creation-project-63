import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMG = {
  s1_collage: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/84cfdc1b-afca-4806-b15e-559d1f379dc1.jpg",
  s3_chimp:   "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/b4108e4b-2ab4-448f-a1d1-4e142cc66c99.jpg",
  s4_lion:    "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/7e4f9620-46c8-47e0-b661-23fbc1d9c566.jpg",
  s5_peacock: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/c733fa07-6c2e-4a33-92db-838f1af62223.jpg",
  s6_dolphin: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/4e49ba06-c62c-40d6-99ab-a0e8c05cfeaf.jpg",
  s6_bees:    "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/206c1dc2-d1a6-47f9-985d-f9cb799ad334.jpg",
  s7_elephant:"https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/89d3da99-4f5a-4e83-8478-106e18774f00.jpg",
  s8_savanna: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/b49a7364-32e5-4d2b-9d39-0bb701e4965f.jpg",
};

function BgImg({ src, tint = "rgba(0,0,0,0.45)" }: { src: string; tint?: string }) {
  return (
    <>
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
      <div className="absolute inset-0" style={{ background: tint, zIndex: 1 }} />
    </>
  );
}

function Tag({ children, color = "#fff" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
      style={{ background: "rgba(255,255,255,0.12)", color, border: `1px solid ${color}55`, backdropFilter: "blur(4px)" }}>
      {children}
    </span>
  );
}

function Slide1() {
  return (
    <div className="slide-container">
      <BgImg src={IMG.s1_collage} tint="rgba(5,20,45,0.55)" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-16">
        <Tag color="#7dd3fc">Проектная работа · 2026</Tag>
        <h1 className="text-6xl font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 40px rgba(0,0,0,0.7)" }}>
          Виды языковых<br />
          <span style={{ color: "#7dd3fc" }}>систем</span> у животных
        </h1>
        <div className="flex gap-4">
          {[
            { label: "Выполнила", value: "Авдеева Каролина, 10 класс" },
            { label: "Руководитель", value: "Климова Н. Ю." },
            { label: "Учреждение", value: "Лицей «Магистр»" },
          ].map((item, i) => (
            <div key={i} className="px-5 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <p className="text-white text-xs opacity-60 mb-0.5">{item.label}</p>
              <p className="text-white font-bold text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  const items = [
    { num: "Введение" },
    { num: "§ 1", text: "Теоретические основы коммуникации животных" },
    { num: "§ 2", text: "Формы и механизмы биологической коммуникации" },
    { num: "§ 3", text: "Языковое поведение животных" },
    { num: "§ 4", text: "Современные исследования и открытия" },
    { num: "→", text: "Заключение" },
    { num: "→", text: "Список источников" },
    { num: "→", text: "Приложения" },
  ];
  return (
    <div className="slide-container">
      <img src={IMG.s5_peacock} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,15,30,0.97) 52%, rgba(10,15,30,0.45) 100%)", zIndex: 1 }} />
      <div className="relative z-10 h-full flex items-center px-16">
        <div className="w-1/2">
          <Tag color="#a78bfa">Структура работы</Tag>
          <h2 className="text-5xl font-black text-white mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Содержание</h2>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-2 px-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-xs font-black w-10 flex-shrink-0" style={{ color: "#a78bfa" }}>{item.num}</span>
                <span className="text-white text-sm font-medium">{item.text || item.num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  const tasks = [
    "Изучить основные виды коммуникации",
    "Рассмотреть примеры сложных языковых систем",
    "Проанализировать роль в повседневной жизни",
    "Исследовать современные открытия",
  ];
  return (
    <div className="slide-container">
      <BgImg src={IMG.s3_chimp} tint="rgba(5,30,10,0.58)" />
      <div className="relative z-10 h-full flex items-center px-16">
        <div className="w-1/2">
          <Tag color="#86efac">Введение</Tag>
          <h2 className="text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Коммуникация —<br />основа жизни
          </h2>
          <div className="space-y-3 mb-5">
            <div className="p-4 rounded-2xl" style={{ background: "rgba(134,239,172,0.12)", border: "1px solid rgba(134,239,172,0.25)", backdropFilter: "blur(6px)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#86efac" }}>Цель проекта</p>
              <p className="text-white text-sm leading-relaxed">Исследовать формы и механизмы коммуникации у животных, понять их значение для жизни и адаптации видов.</p>
            </div>
            <div className="p-4 rounded-2xl" style={{ background: "rgba(253,224,71,0.08)", border: "1px solid rgba(253,224,71,0.2)", backdropFilter: "blur(6px)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#fde047" }}>Актуальность</p>
              <p className="text-white text-sm leading-relaxed">Важен для понимания животного мира, его адаптации и эволюции.</p>
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#7dd3fc" }}>Задачи</p>
          <div className="grid grid-cols-2 gap-2">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-xl"
                style={{ background: "rgba(125,211,252,0.08)", border: "1px solid rgba(125,211,252,0.15)" }}>
                <span className="text-xs font-black mt-0.5 flex-shrink-0" style={{ color: "#7dd3fc" }}>0{i+1}</span>
                <span className="text-white text-xs leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide4() {
  const signals = [
    { emoji: "🦫", title: "Территориальные", desc: "Бобр метит бревно" },
    { emoji: "🐺", title: "Социальные", desc: "Поза подчинения волка" },
    { emoji: "🎶", title: "Репродуктивные", desc: "Песня соловья" },
    { emoji: "🙊", title: "Предупредительные", desc: "Крик тревоги обезьяны" },
    { emoji: "🐝", title: "Координационные", desc: "Танец пчелы" },
  ];
  return (
    <div className="slide-container">
      <BgImg src={IMG.s4_lion} tint="rgba(30,10,0,0.5)" />
      <div className="relative z-10 h-full flex items-end pb-10 px-16">
        <div className="w-full">
          <Tag color="#fbbf24">§ 1 · Теоретические основы</Tag>
          <h2 className="text-5xl font-black text-white mb-5 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
            Коммуникация —<br /><span style={{ color: "#fbbf24" }}>передача сигналов</span>
          </h2>
          <div className="flex gap-3">
            {signals.map((s, i) => (
              <div key={i} className="flex-1 p-4 rounded-2xl text-center"
                style={{ background: "rgba(0,0,0,0.52)", border: "1px solid rgba(251,191,36,0.3)", backdropFilter: "blur(8px)" }}>
                <div className="text-2xl mb-1">{s.emoji}</div>
                <p className="text-white text-xs font-bold">{s.title}</p>
                <p className="text-white text-xs opacity-55 mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide5() {
  const channels = [
    { icon: "🔊", name: "Акустическая", example: "Рык льва" },
    { icon: "⚙️", name: "Механическая", example: "Сверчок" },
    { icon: "🌊", name: "Гидродинамическая", example: "Свист дельфина" },
    { icon: "🧪", name: "Химическая", example: "След муравьёв" },
    { icon: "👁️", name: "Визуальная", example: "Хвост павлина" },
    { icon: "✋", name: "Тактильная", example: "Слон и детёныш" },
    { icon: "⚡", name: "Электромагнитная", example: "Угорь" },
  ];
  return (
    <div className="slide-container">
      <BgImg src={IMG.s5_peacock} tint="rgba(0,10,30,0.52)" />
      <div className="relative z-10 h-full flex items-end pb-10 px-16">
        <div className="w-full">
          <Tag color="#34d399">§ 2 · Формы коммуникации</Tag>
          <h2 className="text-5xl font-black text-white mb-5" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
            Сенсорные каналы<br /><span style={{ color: "#34d399" }}>передачи информации</span>
          </h2>
          <div className="grid grid-cols-7 gap-2">
            {channels.map((c, i) => (
              <div key={i} className="p-3 rounded-2xl text-center"
                style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(52,211,153,0.25)", backdropFilter: "blur(8px)" }}>
                <div className="text-xl mb-1">{c.icon}</div>
                <p className="text-white text-xs font-bold leading-tight">{c.name}</p>
                <p className="text-white text-xs opacity-50 mt-0.5 leading-tight">{c.example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide6() {
  const examples = [
    { animal: "🐬 Дельфины", detail: "Свист-имя" },
    { animal: "🦜 Попугай Алекс", detail: "100+ слов" },
    { animal: "🐝 Пчёлы", detail: "Танец восьмёрка" },
    { animal: "🐒 Шимпанзе", detail: "80+ жестов" },
    { animal: "🐧 Пингвины", detail: "Голос-ID" },
    { animal: "🐘 Слоны", detail: "Инфразвук" },
    { animal: "🐦 Кукушки", detail: "Песня по наследству" },
    { animal: "🦑 Кальмары", detail: "Смена окраски" },
  ];
  return (
    <div className="slide-container">
      <div className="absolute inset-0 flex" style={{ zIndex: 0 }}>
        <img src={IMG.s6_dolphin} alt="" className="w-1/2 h-full object-cover" />
        <img src={IMG.s6_bees} alt="" className="w-1/2 h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "rgba(10,5,30,0.60)", zIndex: 1 }} />
      <div className="relative z-10 h-full flex flex-col justify-end pb-10 px-16">
        <Tag color="#c4b5fd">§ 3 · Языковое поведение</Tag>
        <h2 className="text-5xl font-black text-white mb-5" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
          Языковое поведение<br /><span style={{ color: "#c4b5fd" }}>животных</span>
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {examples.map((e, i) => (
            <div key={i} className="p-3 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(196,181,253,0.25)", backdropFilter: "blur(8px)" }}>
              <p className="text-white text-sm font-bold">{e.animal}</p>
              <p className="text-white text-xs opacity-60 mt-0.5">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide7() {
  const discoveries = [
    { icon: "🤖", title: "ИИ + дельфины", text: "Анализ свистов — обнаружены «звукоединицы»" },
    { icon: "🌿", title: "Шимпанзе и мангабеи", text: "Понимают сигналы разных видов" },
    { icon: "🌸", title: "Пчёлы обобщают", text: "Выбирают похожий цвет — абстракция" },
    { icon: "🗺️", title: "Слоны — диалекты", text: "Разные «языки» в Кении и Ботсване" },
    { icon: "🦇", title: "Летучие мыши", text: "«Семейные акценты» в колонии" },
  ];
  return (
    <div className="slide-container">
      <BgImg src={IMG.s7_elephant} tint="rgba(5,15,35,0.52)" />
      <div className="relative z-10 h-full flex items-end pb-10 px-16">
        <div className="w-full">
          <Tag color="#38bdf8">§ 4 · Современные исследования</Tag>
          <h2 className="text-5xl font-black text-white mb-5" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
            Открытия науки<br /><span style={{ color: "#38bdf8" }}>о языке животных</span>
          </h2>
          <div className="flex gap-3">
            {discoveries.map((d, i) => (
              <div key={i} className="flex-1 p-4 rounded-2xl"
                style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(56,189,248,0.25)", backdropFilter: "blur(8px)" }}>
                <div className="text-2xl mb-2">{d.icon}</div>
                <p className="text-sm font-bold mb-1" style={{ color: "#38bdf8" }}>{d.title}</p>
                <p className="text-white text-xs opacity-75 leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide8() {
  const signals = ["🔊 Звуковые", "🧪 Химические", "👁️ Визуальные", "✋ Тактильные"];
  return (
    <div className="slide-container">
      <BgImg src={IMG.s8_savanna} tint="rgba(5,20,5,0.42)" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-14 px-16">
        <Tag color="#86efac">Заключение</Tag>
        <h2 className="text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 4px 40px rgba(0,0,0,0.8)" }}>
          Единый язык<br /><span style={{ color: "#86efac" }}>природы</span>
        </h2>
        <p className="text-white text-lg mb-5 max-w-2xl leading-relaxed opacity-90">
          Каждое животное обладает уникальными механизмами передачи информации — ключ к пониманию эволюции языка человека.
        </p>
        <div className="flex gap-3 mb-4">
          {signals.map((s, i) => (
            <div key={i} className="px-4 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: "rgba(134,239,172,0.15)", border: "1px solid rgba(134,239,172,0.4)", backdropFilter: "blur(6px)" }}>
              {s}
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold" style={{ color: "#86efac" }}>
          Сохраняйте биологическое разнообразие — каждый вид вносит вклад в гармонию природы.
        </p>
      </div>
    </div>
  );
}

const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
const TITLES = [
  "Титульный слайд", "Содержание", "Введение",
  "§ 1. Теоретические основы", "§ 2. Формы коммуникации",
  "§ 3. Языковое поведение", "§ 4. Современные исследования", "Заключение",
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1)), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const Cur = SLIDES[current];

  return (
    <div className="h-screen w-screen bg-black flex flex-col overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

      <div className="flex-1 relative overflow-hidden">
        <Cur />
      </div>

      <div className="flex-shrink-0 flex items-center justify-between px-5 py-2"
        style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex gap-1.5 items-center">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: i === current ? "28px" : "10px", height: "6px", background: i === current ? "#7dd3fc" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>

        <p className="text-xs font-medium flex-1 text-center px-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {TITLES[current]}
        </p>

        <div className="flex items-center gap-2">
          <button onClick={prev} disabled={current === 0}
            className="w-7 h-7 rounded-lg flex items-center justify-center disabled:opacity-25"
            style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>
            <Icon name="ChevronLeft" size={14} />
          </button>
          <span className="text-xs font-bold w-10 text-center" style={{ color: "rgba(255,255,255,0.45)" }}>
            {current + 1}/{SLIDES.length}
          </span>
          <button onClick={next} disabled={current === SLIDES.length - 1}
            className="w-7 h-7 rounded-lg flex items-center justify-center disabled:opacity-25"
            style={{ background: "rgba(255,255,255,0.08)", color: "white" }}>
            <Icon name="ChevronRight" size={14} />
          </button>
          <button onClick={toggleFullscreen}
            className="w-7 h-7 rounded-lg flex items-center justify-center ml-1"
            style={{ background: "rgba(125,211,252,0.12)", color: "#7dd3fc", border: "1px solid rgba(125,211,252,0.25)" }}>
            <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
