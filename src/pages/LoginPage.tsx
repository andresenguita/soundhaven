import { useEffect, useState } from "react";
import GuideModal from "../components/GuideModal";

export default function LoginPage() {
  /* estado del modal */
  const [open, setOpen] = useState(false);

  /* mostrarlo automáticamente la 1.ª vez */
  useEffect(() => {
    if (!localStorage.getItem("guideSeen")) setOpen(true);
  }, []);

  function handleClose() {
    localStorage.setItem("guideSeen", "true");
    setOpen(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 relative">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
        Sound<span className="text-emerald-400">Haven</span>
      </h1>

      <button
        className="mt-10 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600
                   active:scale-95 transition-transform duration-150
                   text-black font-semibold py-3 px-6 rounded-full"
        onClick={() => console.log("TODO: Spotify login")}
      >
        <img
          src="/public/spotify_primary_logo_rgb_black.png"
          alt="Spotify logo"
          className="w-5 h-5"
        />
        Login with Spotify
      </button>

      {/* enlace por si lo quiere volver a ver */}
      <button
        className="mt-6 underline text-sm text-zinc-300 hover:text-emerald-400"
        onClick={() => setOpen(true)}
      >
        How does it work?
      </button>

      <footer className="text-xs text-zinc-400 absolute bottom-4">
        © {new Date().getFullYear()} SoundHaven
      </footer>

      <GuideModal open={open} onClose={handleClose} />
    </main>
  );
}
