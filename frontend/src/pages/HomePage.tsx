// src/pages/HomePage.tsx
import { useArtworks } from "../context/ArtworksContext";
import { ArtworkGallery } from "../components/gallery/ArtworkGallery";

export function HomePage() {
  const { artworks, loading, error } = useArtworks();

  if (loading) {
    return <div className="text-white">Loading artworks...</div>;
  }

  if (error) {
    return (
      <div className="text-white">
        <p>Failed to load artworks.</p>
        <pre className="text-red-400">{error}</pre>
      </div>
    );
  }
  return (
    <div>

      <div className="hero-image w-full">
        <img
          src="art/nexus.png"
          alt="Featured artwork"
          className="w-full max-h-[60vh] min-h-[45vh] object-cover block"
        />
      </div>

      <div className="px-1 w-full">
        <header className="px-2 mb-4 mt-4">
          <h1 className="text-3xl mb-1 text-white font-bold">
            Null — Art Portfolio
          </h1>
          <p className="text-gray-400">
            A selection of sketches and illustrations.
          </p>
        </header>

        <ArtworkGallery artworks={artworks} />
      </div>
    </div>
  );
}
