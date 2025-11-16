// src/pages/HomePage.tsx
import { useArtworks } from "../context/ArtworksContext";

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
          className="w-full max-h-[60vh] object-cover block"
        />
      </div>

      <div className="container px-6">
        <header className="mb-4 mt-4">
          <h1 className="text-3xl mb-1 text-white font-bold">
            Null — Art Portfolio
          </h1>
          <p className="text-gray-400">
            A selection of sketches and illustrations.
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {artworks.map((art) => (
            <article
              key={art.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={art.thumbnailUrl}
                  alt={art.title}
                  className="w-full h-64 object-cover block"
                />
              </div>
              <div className="p-3">
                <h2 className="text-base mb-1 text-white font-medium">
                  {art.title}
                </h2>
                {art.year && (
                  <p className="text-xs text-gray-500">{art.year}</p>
                )}
                {art.description && (
                  <p className="mt-2 text-sm text-gray-400">
                    {art.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
