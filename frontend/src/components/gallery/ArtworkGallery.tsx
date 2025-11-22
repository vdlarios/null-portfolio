// src/components/gallery/ArtworkGallery.tsx
export type Artwork = {
  id: string | number;
  title: string;
  thumbnailUrl: string;
  year?: string | number;
  description?: string;
};

export function ArtworkGallery({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-0">
      {artworks.map((art) => (
        <article
          key={art.id}
          className="rounded-mdshadow-md shadow-black/20 p-1"
        >
          <div className="overflow-hidden">
            <img
              src={art.thumbnailUrl}
              alt={art.title}
              className="w-full h-auto block transition-transform duration-300 ease-out hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </div>
  );
}