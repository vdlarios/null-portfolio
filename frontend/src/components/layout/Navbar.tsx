// src/components/layout/Navbar.tsx
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-b-gray-950 bg-black sticky top-0 z-10">
      <Link to="/" className="no-underline text-white font-semibold">
        Null Portfolio
      </Link>

      <div className="flex gap-4 text-sm">
        <Link
          to="/"
          className="no-underline text-gray-300 hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className="no-underline text-gray-300 hover:text-white transition-colors"
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="no-underline text-gray-300 hover:text-white transition-colors"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
