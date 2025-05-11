import { useNavigate } from "react-router-dom";
import GuideCarousel from "../components/GuideCarousel";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 relative">
      {/* Título */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-10">
        Sound<span className="text-emerald-400">Haven</span>
      </h1>

      {/* Botón login */}
      <button
        onClick={() => navigate("/cards")}
        className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600
                   active:scale-95 transition font-semibold text-black
                   py-3 px-7 rounded-full mb-1"
      >
        <img
          src="/spotify_primary_logo_rgb_black.png"
          alt="Spotify logo"
          className="w-6 h-6"
        />
        Login with Spotify
      </button>

      {/* Carrusel guía */}
      <GuideCarousel />

      {/* Pie */}
      <footer className="absolute bottom-4 text-xs text-zinc-400">
        © {new Date().getFullYear()} SoundHaven
      </footer>
    </main>
  );
}
