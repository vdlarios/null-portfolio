// src/server.ts
import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;

//Allow frontend (Vite dev server) to call this API
app.use(cors({
    origin: "http://localhost:5173"
}));

// Middleware to parse JSON bodies (for later)
app.use(express.json());

// Simple test route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// Temporary mock artworks route
app.get("/api/artworks", (_req, res) => {
  const artworks = [
    {
      id: "1",
      title: "E.horizon",
      year: "2025",
      description: "-",
      thumbnailUrl: "http://localhost:5173/art/E.horizon.png",
    },
    {
      id: "2",
      title: "Embrace Yourself",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/embrace_yourself.png",
    },
    {
      id: "3",
      title: "Hollow Greetings",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/hollow_greetings.png",
    },
    {
      id: "4",
      title: "",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/nexus.png",
    },
    {
      id: "5",
      title: "",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/tezvMig.png",
    },
    {
      id: "6",
      title: "",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/weightless.png",
    },
    {
      id: "7",
      title: "",
      year: "2025",
      description: "",
      thumbnailUrl: "http://localhost:5173/art/xovic-celestial.png",
    },
  ];

  res.json(artworks);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});