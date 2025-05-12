import GuideCarousel from "../components/GuideCarousel";

// Pantalla inicial de login
export default function LoginPage() {
  // Redirige a tu backend, que a su vez redirige a Spotify
  const handleLogin = () => {
    window.location.href = "http://localhost:4000/api/auth/login";
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 relative">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-10">
        Sound<span className="text-emerald-400">Haven</span>
      </h1>

      <button
        onClick={handleLogin}
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

      <GuideCarousel />

      <footer className="absolute bottom-4 text-xs text-zinc-400">
        © {new Date().getFullYear()} SoundHaven
      </footer>
    </main>
  );
}
