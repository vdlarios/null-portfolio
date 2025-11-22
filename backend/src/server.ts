// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

//Allow frontend (Vite dev server) to call this API
app.use(
  cors({
    origin: FRONTEND_URL,
    // or origin: FRONTEND_URLS
    credentials: true,
  })
);

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
      thumbnailUrl: "/art/E.horizon.png",
    },
    {
      id: "2",
      title: "Embrace Yourself",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/embrace_yourself.png",
    },
    {
      id: "3",
      title: "Hollow Greetings",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/hollow_greetings.png",
    },
    {
      id: "4",
      title: "Nexus",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/nexus.png",
    },
    {
      id: "5",
      title: "Tezv Mig",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/tezvMig.png",
    },
    {
      id: "6",
      title: "Weightless",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/weightless.png",
    },
    {
      id: "7",
      title: "Xovic Celestial",
      year: "2025",
      description: "",
      thumbnailUrl: "/art/xovic-celestial.png",
    },
  ];

  res.json(artworks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${NODE_ENV})`);
  console.log(`Allowed frontend origin: ${FRONTEND_URL}`);
});
