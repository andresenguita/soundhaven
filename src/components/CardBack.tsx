// src/components/CardBack.tsx
import type { FC } from "react";

interface CardBackProps {
  title: string;
  artist: string;
  embedUrl: string; // p.ej. `https://open.spotify.com/embed/track/{TRACK_ID}`
  onAdd: () => void;
}

const CardBack: FC<CardBackProps> = ({ title, artist, embedUrl, onAdd }) => (
  <div className="w-full h-full bg-zinc-800 text-white flex flex-col justify-between p-6 rounded-md shadow-lg">
    {/* Título y artista */}
    <div className="space-y-1">
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-sm text-zinc-400">{artist}</p>
    </div>

    {/* Reproductor Spotify Embed */}
    <iframe
      title={`Reproductor ${title}`}
      src={embedUrl}
      width="100%"
      height="80"
      frameBorder="0"
      allow="encrypted-media"
      className="rounded-md overflow-hidden"
    />

    {/* Botón añadir */}
    <button
      onClick={onAdd}
      className="self-end bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-lg font-bold"
    >
      ＋ Añadir
    </button>
  </div>
);

export default CardBack;
