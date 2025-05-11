import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import Card3D from "../components/Card3D";
import ModalCard from "../components/ModalCard";
import { useCountdown } from "../hooks/useCountdown";

/* Dummy data (replace with API data later) */
const dummy = [
  { img: "/art/art1.png", title: "Spirits in the Night" },
  { img: "/art/art2.jpg", title: "In a Sentimental Mood" },
  { img: "/art/art3.png", title: "Neon Genesis" },
];

export default function CardsPage() {
  const navigate = useNavigate();
  const time = useCountdown();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white flex flex-col">
      {/* ---------- Header ---------- */}
      <header className="relative flex items-start justify-between p-8">
        <button
          onClick={() => navigate("/")}
          className="underline text-sm text-zinc-400 hover:text-zinc-200"
        >
          ← Log out
        </button>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mt-7 mx-auto">
          Sound<span className="text-emerald-400">Haven</span>
        </h1>

        <div className="w-7 h-7" />
      </header>

      <LayoutGroup>
        {/* ---------- Cards ---------- */}
        <section className="flex-grow flex justify-center items-center">
          <div className="flex gap-14">
            {dummy.map((c, i) => (
              <Card3D
                key={i}
                id={`card-${i}`}
                front={
                  <img
                    src={c.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                }
                back={
                  <div className="w-full h-full bg-zinc-800 text-white flex flex-col justify-center items-center gap-5 p-6">
                    <p className="text-center font-semibold">{c.title}</p>
                    <div className="flex gap-4">
                      <button className="bg-emerald-500 px-5 py-2 rounded">
                        ▶︎
                      </button>
                      <button className="bg-zinc-600 px-4 py-2 rounded">
                        ＋
                      </button>
                    </div>
                  </div>
                }
                isFlipped={i === selected}
                onSelect={() => setSelected(i)}
              />
            ))}
          </div>
        </section>

        {/* ---------- Reveal Modal ---------- */}
        {selected !== null && (
          <ModalCard
            open
            id={`card-${selected}`}
            onClose={() => setSelected(null)}
          >
            <div className="w-full h-full bg-zinc-800 text-white flex flex-col justify-center items-center gap-5 p-6">
              <p className="text-center font-semibold">
                {dummy[selected].title}
              </p>
              <div className="flex gap-4">
                <button className="bg-emerald-500 px-5 py-2 rounded">▶︎</button>
                <button className="bg-zinc-600 px-4 py-2 rounded">＋</button>
              </div>
            </div>
          </ModalCard>
        )}
      </LayoutGroup>

      {/* ---------- Countdown ---------- */}
      <footer className="py-8 text-center text-zinc-400 text-2xl">
        Our next sound voyage in: <span className="font-medium">{time}</span>
      </footer>
    </main>
  );
}
