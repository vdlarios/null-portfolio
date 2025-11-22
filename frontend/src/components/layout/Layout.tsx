import type React from "react";
import { Navbar } from "./Navbar/Navbar";
import { ArtworksProvider } from "../../context/ArtworksContext";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-black font-sans">
      <ArtworksProvider>
        <Navbar />
        <main className="mx-auto">{children}</main>
        {/* Footer later */}
      </ArtworksProvider>
    </div>
  );
}
