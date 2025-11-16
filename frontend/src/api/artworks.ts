// src/api/artworks.ts
import type { Artwork } from "../types";
import { apiGet } from "./client";

export function getArtworks(): Promise<Artwork[]> {
  return apiGet<Artwork[]>("/api/artworks");
}