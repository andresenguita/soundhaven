import { useState } from "react";

/* mock slides – pon tus capturas reales (1920×1080 o 1280×720) */
const slides = [
  { img: "/guide/step1.png", caption: "Flip one of the three daily cards" },
  { img: "/guide/step2.png", caption: "Listen to the track it reveals" },
  { img: "/guide/step3.png", caption: "Add it to your SoundHaven playlist" },
];

export default function GuideCarousel() {
  const [idx, setIdx] = useState(0);
  const go = (dir: -1 | 1) =>
    setIdx((i) => (i + dir + slides.length) % slides.length);

  return (
    <section
      className="mt-12 inline-flex flex-col items-center gap-6
                 bg-zinc-800/30 border border-zinc-700/60
                 px-10 py-8 rounded-2xl"
    >
      {/* --- Carrusel: imagen + flechas --- */}
      <div className="relative flex items-center">
        {/* ← Flecha */}
        <ArrowButton dir="prev" onClick={() => go(-1)} />

        {/* Imagen 16:9, suficientemente ancha */}
        <img
          src={slides[idx].img}
          alt=""
          className="w-[28rem]   lg:w-[34rem]   /* 448 px → 544 px */
                     aspect-video     /* 16 : 9 */
                     rounded-md shadow-md object-cover"
        />

        {/* Flecha → */}
        <ArrowButton dir="next" onClick={() => go(1)} />
      </div>

      {/* Caption */}
      <p className="text-center text-sm md:text-base">{slides[idx].caption}</p>

      {/* Dots */}
      <div className="flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full transition
              ${
                i === idx
                  ? "bg-emerald-400 scale-110"
                  : "bg-zinc-500/40 hover:bg-zinc-400/70"
              }`}
            aria-label={`go to step ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function ArrowButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = dir === "prev";
  return (
    <button
      onClick={onClick}
      className={`
          hidden md:flex items-center justify-center
          w-10 h-24 bg-zinc-600 hover:bg-zinc-500 transition
          ${
            isPrev ? "rounded-l-md" : "rounded-r-md"
          }   /* ← solo un borde redondeado */
        `}
      aria-label={isPrev ? "previous" : "next"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 text-white ${isPrev ? "" : "rotate-180"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.293 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
