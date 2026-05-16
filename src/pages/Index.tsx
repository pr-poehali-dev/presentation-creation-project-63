import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const IMAGES = {
  slide1: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/d509bbce-8839-4c68-8a0e-29e777450eb7.jpg",
  slide2: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/c19499bb-ac35-4d79-aa60-d9866a13e190.jpg",
  slide3: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/52ed0702-546f-4a51-b4b6-1ff436c03ca8.jpg",
  slide4: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/48c4696e-c763-4627-a04d-a5c6231a5004.jpg",
  slide5: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/606451ba-19b2-4e5e-bb11-2834e70c847b.jpg",
  slide6: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/d6849ddb-2e04-44cf-8e87-6a458038a58c.jpg",
  slide7: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/d73bb2b6-3ccb-4bbb-b7ee-4bcb8ebb549e.jpg",
  slide8: "https://cdn.poehali.dev/projects/85b8eb9c-9fea-4de1-9ebb-88a877eea460/files/092c770c-f77d-4daa-92a6-12d9db7c19de.jpg",
};

const slides = [
  {
    id: 1,
    component: "Slide1",
  },
  {
    id: 2,
    component: "Slide2",
  },
  {
    id: 3,
    component: "Slide3",
  },
  {
    id: 4,
    component: "Slide4",
  },
  {
    id: 5,
    component: "Slide5",
  },
  {
    id: 6,
    component: "Slide6",
  },
  {
    id: 7,
    component: "Slide7",
  },
  {
    id: 8,
    component: "Slide8",
  },
];

function Slide1() {
  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 50%, #0d2137 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4fc3f7, transparent)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #81c784, transparent)", transform: "translate(30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #ffb74d, transparent)" }} />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center items-start w-1/2 px-16 py-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4" style={{ background: "rgba(79,195,247,0.15)", color: "#4fc3f7", border: "1px solid rgba(79,195,247,0.3)" }}>
              Проектная работа · 2026
            </span>
          </div>
          <h1 className="text-4xl font-black leading-tight mb-8 text-white" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 2px 20px rgba(79,195,247,0.3)" }}>
            Виды языковых<br />
            <span style={{ color: "#4fc3f7" }}>систем</span><br />
            у животных
          </h1>
          <div className="space-y-2 mt-4" style={{ borderLeft: "3px solid rgba(79,195,247,0.5)", paddingLeft: "16px" }}>
            <p className="text-white text-sm opacity-90">Выполнила: <span className="font-semibold" style={{ color: "#81c784" }}>Авдеева Каролина, 10 класс</span></p>
            <p className="text-white text-sm opacity-90">Руководитель: <span className="font-semibold" style={{ color: "#81c784" }}>Климова Н. Ю.</span></p>
            <p className="text-white text-sm opacity-80">Лицей «Магистр», 2026</p>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="relative w-full h-full max-h-96">
            <img src={IMAGES.slide1} alt="Животные" className="w-full h-full object-cover rounded-2xl shadow-2xl" style={{ border: "2px solid rgba(79,195,247,0.3)" }} />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to right, rgba(13,27,42,0.4), transparent)" }} />
          </div>
        </div>
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet" />
    </div>
  );
}

function Slide2() {
  const items = [
    { num: "01", text: "Введение" },
    { num: "§1", text: "Теоретические основы коммуникации животных" },
    { num: "§2", text: "Формы и механизмы биологической коммуникации" },
    { num: "§3", text: "Языковое поведение животных" },
    { num: "§4", text: "Современные исследования и открытия" },
    { num: "→", text: "Заключение" },
    { num: "→", text: "Список источников" },
    { num: "→", text: "Приложения" },
  ];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f0fdf4 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img src={IMAGES.slide2} alt="bg" className="w-full h-full object-cover" style={{ filter: "blur(2px)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(240,249,255,1) 40%, rgba(240,249,255,0.7) 100%)" }} />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-full px-16 py-12">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0284c7" }}>Структура работы</span>
            <h2 className="text-4xl font-black mt-2" style={{ color: "#0c4a6e", fontFamily: "'Montserrat', sans-serif" }}>Содержание</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-3xl">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl transition-all" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(2,132,199,0.15)", backdropFilter: "blur(4px)" }}>
                <span className="text-sm font-black w-8 flex-shrink-0 text-center" style={{ color: "#0284c7" }}>{item.num}</span>
                <span className="text-sm font-medium" style={{ color: "#0c4a6e" }}>{item.text}</span>
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
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={IMAGES.slide3} alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.7) 60%, rgba(15,52,96,0.5) 100%)" }} />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-3/5 px-16 py-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: "rgba(250,204,21,0.15)", color: "#facc15", border: "1px solid rgba(250,204,21,0.3)" }}>
            Введение
          </span>
          <p className="text-white text-lg mb-6 opacity-90 leading-relaxed">
            Коммуникация играет ключевую роль в жизни каждого живого существа.
          </p>

          <div className="mb-5 p-4 rounded-xl" style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#facc15" }}>Цель</p>
            <p className="text-white text-sm leading-relaxed">Исследовать различные формы и механизмы коммуникации у животных, понять их значение для жизни и адаптации видов.</p>
          </div>

          <div className="mb-5 p-4 rounded-xl" style={{ background: "rgba(129,199,132,0.08)", border: "1px solid rgba(129,199,132,0.2)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#81c784" }}>Актуальность</p>
            <p className="text-white text-sm leading-relaxed">Проект важен для формирования целостного представления о животном мире, его адаптации и эволюции.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4fc3f7" }}>Задачи</p>
            <div className="space-y-2">
              {tasks.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "rgba(79,195,247,0.2)", color: "#4fc3f7" }}>{i + 1}</span>
                  <span className="text-white text-sm opacity-85">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-center p-8">
          <img src={IMAGES.slide3} alt="Коммуникация" className="w-full h-80 object-cover rounded-2xl shadow-2xl" style={{ border: "2px solid rgba(250,204,21,0.3)" }} />
        </div>
      </div>
    </div>
  );
}

function Slide4() {
  const signals = [
    { emoji: "🦫", title: "Территориальные", desc: "Бобр метит границы" },
    { emoji: "🐺", title: "Социальные", desc: "Волк — поза подчинения" },
    { emoji: "🎶", title: "Репродуктивные", desc: "Соловей поёт" },
    { emoji: "🙊", title: "Предупредительные", desc: "Обезьяна — крик тревоги" },
    { emoji: "🐝", title: "Координационные", desc: "Танец пчёл" },
  ];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fff7ed 50%, #fef9ee 100%)" }}>
      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-full px-16 py-10">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#d97706" }}>§ 1</span>
            <h2 className="text-3xl font-black mt-1" style={{ color: "#78350f", fontFamily: "'Montserrat', sans-serif" }}>
              Теоретические основы<br />коммуникации животных
            </h2>
            <p className="mt-3 text-base" style={{ color: "#92400e" }}>
              <strong>Коммуникация</strong> — процесс передачи информации с помощью сигналов.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#d97706" }}>Классификация сигналов</p>
              <div className="grid grid-cols-1 gap-3">
                {signals.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(217,119,6,0.2)" }}>
                    <span className="text-2xl">{s.emoji}</span>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#78350f" }}>{s.title}</p>
                      <p className="text-xs opacity-70" style={{ color: "#92400e" }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <img src={IMAGES.slide4} alt="Сигналы" className="w-full h-full max-h-80 object-cover rounded-2xl shadow-xl" style={{ border: "2px solid rgba(217,119,6,0.3)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide5() {
  const channels = [
    { icon: "🔊", name: "Акустическая", example: "Рык льва" },
    { icon: "⚙️", name: "Механическая", example: "Сверчок трёт крылья" },
    { icon: "🌊", name: "Гидродинамическая", example: "Свист дельфина" },
    { icon: "🧪", name: "Химическая", example: "След муравьёв" },
    { icon: "👁️", name: "Визуальная", example: "Хвост павлина" },
    { icon: "✋", name: "Тактильная", example: "Слон и детёныш" },
    { icon: "⚡", name: "Электромагнитная", example: "Электрический угорь" },
  ];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)" }}>
      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-full px-16 py-10">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#059669" }}>§ 2</span>
            <h2 className="text-3xl font-black mt-1" style={{ color: "#064e3b", fontFamily: "'Montserrat', sans-serif" }}>
              Формы и механизмы<br />биологической коммуникации
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#065f46" }}>Коммуникация реализуется через сенсорные каналы:</p>
          </div>

          <div className="flex gap-6">
            <div className="flex-1 grid grid-cols-2 gap-3">
              {channels.map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(5,150,105,0.2)" }}>
                  <span className="text-xl">{c.icon}</span>
                  <div>
                    <p className="font-bold text-xs" style={{ color: "#064e3b" }}>{c.name}</p>
                    <p className="text-xs opacity-60" style={{ color: "#065f46" }}>{c.example}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex items-center">
              <img src={IMAGES.slide5} alt="Каналы коммуникации" className="w-full h-full max-h-80 object-cover rounded-2xl shadow-xl" style={{ border: "2px solid rgba(5,150,105,0.3)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide6() {
  const examples = [
    { animal: "🐬 Дельфины", detail: "Свист-имя для каждой особи" },
    { animal: "🦜 Попугай Алекс", detail: "Понимание 100+ слов" },
    { animal: "🐝 Пчёлы", detail: "Танец и оценка нектара" },
    { animal: "🐒 Шимпанзе", detail: "80+ жестов" },
    { animal: "🐧 Пингвины", detail: "Голосовая идентификация" },
    { animal: "🐘 Слоны", detail: "Инфразвук и траур" },
    { animal: "🐦 Кукушки", detail: "Наследование песен" },
    { animal: "🦑 Кальмары", detail: "Изменение окраски" },
  ];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.slide6} alt="bg" className="w-full h-full object-cover" style={{ filter: "blur(3px)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(30,27,75,0.95) 0%, rgba(30,27,75,0.7) 60%, rgba(30,58,95,0.5) 100%)" }} />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-3/5 px-16 py-10">
          <span className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#a78bfa" }}>§ 3</span>
          <h2 className="text-3xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Языковое поведение животных
          </h2>
          <p className="text-sm mb-5 opacity-80 text-white">Передача информации, формирование связей, адаптация.</p>

          <div className="grid grid-cols-2 gap-2">
            {examples.map((e, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
                <p className="font-bold text-sm text-white">{e.animal}</p>
                <p className="text-xs opacity-70 text-white mt-0.5">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-center p-8">
          <img src={IMAGES.slide6} alt="Языковое поведение" className="w-full h-80 object-cover rounded-2xl shadow-2xl" style={{ border: "2px solid rgba(167,139,250,0.4)" }} />
        </div>
      </div>
    </div>
  );
}

function Slide7() {
  const discoveries = [
    { icon: "🤖", title: "ИИ + дельфины", text: "Анализ свистов — обнаружены «звукоединицы»" },
    { icon: "🌿", title: "Шимпанзе и мангабеи", text: "Понимают крики друг друга" },
    { icon: "🌸", title: "Пчёлы обобщают", text: "Выбирают похожий цвет — абстрактное мышление" },
    { icon: "🗺️", title: "Слоны — диалекты", text: "Разные «языки» в Кении и Ботсване" },
    { icon: "🦇", title: "Летучие мыши", text: "«Семейные акценты» в колонии" },
  ];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f2942 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.slide7} alt="bg" className="w-full h-full object-cover" style={{ filter: "blur(2px)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.85) 100%)" }} />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full px-16 py-10">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#38bdf8" }}>§ 4</span>
          <h2 className="text-3xl font-black mt-1 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Современные исследования и открытия
          </h2>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 space-y-3">
            {discoveries.map((d, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(56,189,248,0.07)", border: "1px solid rgba(56,189,248,0.2)" }}>
                <span className="text-2xl mt-0.5">{d.icon}</span>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#38bdf8" }}>{d.title}</p>
                  <p className="text-white text-sm opacity-80 mt-0.5">{d.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex items-center">
            <img src={IMAGES.slide7} alt="Исследования" className="w-full h-80 object-cover rounded-2xl shadow-2xl" style={{ border: "2px solid rgba(56,189,248,0.3)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide8() {
  const signals = ["Звуковые", "Химические", "Визуальные", "Тактильные"];

  return (
    <div className="slide-container" style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #0c4a6e 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={IMAGES.slide8} alt="bg" className="w-full h-full object-cover" style={{ filter: "blur(1px)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,78,59,0.97) 0%, rgba(6,78,59,0.8) 50%, rgba(6,78,59,0.5) 100%)" }} />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center w-3/5 px-16 py-10">
          <span className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#6ee7b7" }}>Заключение</span>
          <h2 className="text-3xl font-black mb-6 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Единый язык природы
          </h2>

          <p className="text-white text-base leading-relaxed mb-6 opacity-90">
            Исследование языковых систем у животных открывает удивительный мир общения.
          </p>

          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6ee7b7" }}>Коммуникация включает:</p>
            <div className="grid grid-cols-2 gap-2">
              {signals.map((s, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: "rgba(110,231,183,0.1)", border: "1px solid rgba(110,231,183,0.25)" }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#6ee7b7" }} />
                  <span className="text-white text-sm font-medium">{s} сигналы</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-white text-sm opacity-80 leading-relaxed">
              Каждое животное обладает уникальными механизмами передачи информации — ключ к пониманию эволюции языка у человека.
            </p>
            <p className="text-sm font-semibold" style={{ color: "#6ee7b7" }}>
              Сохраняйте биологическое разнообразие — каждый вид вносит вклад в гармонию природы.
            </p>
          </div>
        </div>

        <div className="w-2/5 flex items-center justify-center p-8">
          <img src={IMAGES.slide8} alt="Природа" className="w-full h-80 object-cover rounded-2xl shadow-2xl" style={{ border: "2px solid rgba(110,231,183,0.4)" }} />
        </div>
      </div>
    </div>
  );
}

const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];
const SLIDE_TITLES = [
  "Титульный слайд",
  "Содержание",
  "Введение",
  "§ 1. Теоретические основы",
  "§ 2. Формы коммуникации",
  "§ 3. Языковое поведение",
  "§ 4. Современные исследования",
  "Заключение",
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(SLIDE_COMPONENTS.length - 1, c + 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
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

  const CurrentSlide = SLIDE_COMPONENTS[current];

  return (
    <div className="h-screen w-screen bg-black flex flex-col overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0">
          <CurrentSlide />
        </div>
      </div>

      {/* Navigation bar */}
      <div
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Slide thumbnails strip */}
        <div className="flex gap-1.5 overflow-x-auto">
          {SLIDE_COMPONENTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="flex-shrink-0 transition-all"
              style={{
                width: i === current ? "80px" : "40px",
                height: "28px",
                borderRadius: "6px",
                background: i === current ? "rgba(79,195,247,0.3)" : "rgba(255,255,255,0.1)",
                border: i === current ? "1px solid rgba(79,195,247,0.6)" : "1px solid rgba(255,255,255,0.1)",
                color: i === current ? "#4fc3f7" : "rgba(255,255,255,0.5)",
                fontSize: "10px",
                fontWeight: "600",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Center: slide title */}
        <div className="text-center flex-1 px-4">
          <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
            {SLIDE_TITLES[current]}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.6)", minWidth: "40px", textAlign: "center" }}>
            {current + 1} / {SLIDE_COMPONENTS.length}
          </span>
          <button
            onClick={next}
            disabled={current === SLIDE_COMPONENTS.length - 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
          >
            <Icon name="ChevronRight" size={16} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 rounded-lg flex items-center justify-center ml-2 transition-all"
            style={{ background: "rgba(79,195,247,0.15)", color: "#4fc3f7", border: "1px solid rgba(79,195,247,0.3)" }}
          >
            <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
