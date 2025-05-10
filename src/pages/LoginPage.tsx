import GuideCarousel from "../components/GuideCarousel";

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center
                     bg-zinc-900 text-white px-4 relative"
    >
      {/* Logo */}
      <h1
        className="text-5xl sm:text-6xl font-extrabold tracking-tight
                     drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]"
      >
        Sound<span className="text-emerald-400">Haven</span>
      </h1>

      {/* Botón Login */}
      <button
        className="mt-10 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600
                   active:scale-95 transition-transform duration-150
                   text-black font-semibold py-3 px-6 rounded-full"
        onClick={() => console.log("TODO: Spotify login")}
      >
        <img
          src="/public/Spotify_Primary_Logo_RGB_Black.png"
          alt="Spotify logo"
          className="w-5 h-5"
        />
        Login with Spotify
      </button>

      {/* Carrusel guía */}
      <GuideCarousel />

      {/* Footer */}
      <footer className="text-xs text-zinc-400 absolute bottom-4">
        © {new Date().getFullYear()} SoundHaven
      </footer>
    </main>
  );
}
