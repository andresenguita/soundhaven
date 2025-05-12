import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  type ReactNode,
} from "react";

interface SpotifyContextValue {
  /** OAuth access token (JWT) */
  token: string | null;
  /** Logout → clears cookie + token and redirects home */
  logout: () => Promise<void>;
  /** True once we tried exchanging / refreshing tokens */
  initialized: boolean;
}

const SpotifyContext = createContext<SpotifyContextValue>({
  token: null,
  logout: async () => {},
  initialized: false,
});

interface RefreshResponse {
  access_token: string;
  expires_in: number;
}

// Prefer env var; fall back to relative path when running behind Vite proxy
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";

export function SpotifyProvider({ children }: { children: ReactNode }) {
  /**
   * Keep the token in sessionStorage to survive soft reloads (F5) while
   * still clearing it when the tab/window closes, matching Spotify player.
   */
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem("sh_token");
  });
  const [initialized, setInitialized] = useState(false);

  // Persist token in sessionStorage whenever it changes
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("sh_token", token);
    } else {
      sessionStorage.removeItem("sh_token");
    }
  }, [token]);

  /** Bootstrap: ① access_token in URL ② cookie-based /auth/refresh */
  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const urlToken = params.get("access_token");

      if (urlToken) {
        setToken(urlToken);
        // Clean up querystring so we don’t leak the token in browser history
        window.history.replaceState({}, "", "/cards");
        setInitialized(true);
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/auth/refresh`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Not authenticated");

        const data: RefreshResponse = await res.json();
        setToken(data.access_token);
      } catch {
        setToken(null);
      } finally {
        setInitialized(true);
      }
    })();
  }, []);

  /** Logs out both client & server and navigates to landing page */
  const logout = useCallback(async () => {
    try {
      await fetch(`${API_BASE}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setToken(null);
      sessionStorage.removeItem("sh_token");
      window.location.href = "/";
    }
  }, []);

  return (
    <SpotifyContext.Provider value={{ token, logout, initialized }}>
      {children}
    </SpotifyContext.Provider>
  );
}

export const useSpotify = () => useContext(SpotifyContext);
