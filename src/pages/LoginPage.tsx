import GuideCarousel from "../components/GuideCarousel";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                     bg-zinc-900 text-white px-4 relative"
    >
      {/* Título */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
        Sound<span className="text-emerald-400">Haven</span>
      </h1>

      {/* Logo opcional – deja o quita según quieras */}
      {/* <img src="/logo-mark.svg" alt="" className="mt-4 w-20 h-20" /> */}

      {/* Botón login */}
      <button
        className="mt-10 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600
                   active:scale-95 transition-transform duration-150
                   text-black font-semibold py-3 px-6 rounded-full"
        onClick={() => navigate("/cards")}
      >
        <img
          src="/spotify_primary_logo_rgb_black.png"
          alt="Spotify logo"
          className="w-5 h-5"
        />
        Login with Spotify
      </button>

      {/* Carrusel embebido */}
      <GuideCarousel />

      <footer className="text-xs text-zinc-400 absolute bottom-4">
        © {new Date().getFullYear()} SoundHaven
      </footer>
    </main>
  );
}
