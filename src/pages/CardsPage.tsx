import { useNavigate } from "react-router-dom";
import Card3D from "../components/Card3D";
import { useCountdown } from "../hooks/useCountdown";

/* Imágenes de ejemplo */
const dummy = [
  { img: "/art/art1.png", title: "Spirits in the Night" },
  { img: "/art/art2.jpg", title: "In a Sentimental Mood" },
  { img: "/art/art3.png", title: "Neon Genesis" },
];

export default function CardsPage() {
  const navigate = useNavigate();
  const time = useCountdown();

  return (
    <main className="min-h-screen bg-zinc-200 text-black flex flex-col">
      {/* Header */}
      <header className="flex items-start justify-between p-8">
        <button
          onClick={() => navigate("/")}
          className="underline text-sm text-zinc-600"
        >
          ← Home
        </button>

        <h1 className="text-5xl font-serif font-bold">SoundHaven</h1>

        <button className="text-zinc-700 hover:text-zinc-900" aria-label="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Cartas – centradas vertical y horizontalmente */}
      <section className="flex-grow flex justify-center items-center">
        <div className="flex gap-14">
          {dummy.map((c, i) => (
            <Card3D
              key={i}
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
            />
          ))}
        </div>
      </section>

      {/* Contador */}
      <footer className="py-8 text-center text-zinc-600">
        Our next sound voyage in: <span className="font-medium">{time}</span>
      </footer>
    </main>
  );
}
