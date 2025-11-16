// src/context/ArtworksContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import type { Artwork } from "../types";
import { getArtworks } from "../api/artworks";

type ArtworksState =
  | { loading: true; error: null; artworks: Artwork[] }
  | { loading: false; error: string | null; artworks: Artwork[] };

const ArtworksContext = createContext<ArtworksState | undefined>(undefined);

export function ArtworksProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ArtworksState>({
    loading: true,
    error: null,
    artworks: [],
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await getArtworks();
        if (!cancelled) {
          setState({ loading: false, error: null, artworks: data });
        }
      } catch (err: any) {
        if (!cancelled) {
          setState({
            loading: false,
            error: err?.message ?? "Something went wrong",
            artworks: [],
          });
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <ArtworksContext.Provider value={state}>
      {children}
    </ArtworksContext.Provider>
  );
}

export function useArtworks() {
  const ctx = useContext(ArtworksContext);
  if (!ctx) {
    throw new Error("useArtworks must be used within ArtworksProvider");
  }
  return ctx;
}