// src/components/layout/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { NavUnderlineItem } from "./NavUnderlineItem";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
<nav className="fixed left-1/2 -translate-x-1/2 top-1 z-10 w-[99%] flex justify-between rounded-2xl bg-transparent text-white">
      
      
      <div className="flex   px-1 rounded-md bg-black/90 shadow-md">
        <Link to="/" className="no-underline font-semibold" style={{ fontFamily: "'Science Gothic', sans-serif" }}>
          NULL
        </Link>
      </div>

      <ul className="items-center flex  rounded-md bg-black/80 px-1 text-sm justify-between uppercase tracking-tighter font-medium" role="menubar">
        {navLinks.map((link, index) => (
          <li key={link.path}>
            <NavUnderlineItem
              to={link.path}
              label={link.name}
              isActive={isActive(link.path)}
              onClick={() => {
                scrollToTop();
                console.log('Active:', link.path, isActive(link.path));
              }}
            >
            </NavUnderlineItem>
            {index < navLinks.length - 1 && (
              <span className="text-white text-sm mx-0.75">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
