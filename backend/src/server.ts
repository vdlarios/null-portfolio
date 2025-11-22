// src/server.ts t
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 4000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const FRONTEND_URLS =
  (process.env.FRONTEND_URLS || FRONTEND_URL)
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);

// Basic request logger for visibility in logs
app.use((req, _res, next) => {
  const origin = req.headers.origin || "no-origin-header";
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.path} (origin: ${origin})`
  );
  next();
});

// Allow configured frontends to call this API, with detailed CORS logging
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        // e.g., curl or same-origin requests without Origin header
        console.log("CORS: no Origin header, allowing request.");
        return callback(null, true);
      }

      if (FRONTEND_URLS.includes(origin)) {
        console.log(`CORS: allowed origin ${origin}`);
        return callback(null, true);
      }

      console.warn(`CORS: blocked origin ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
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

// Global error handler for safer responses and better logging
app.use((err: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled error:", err?.message || err);
  if (NODE_ENV !== "production" && err?.stack) {
    console.error(err.stack);
  }

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (${NODE_ENV})`);
  console.log(`Allowed frontend origins: ${FRONTEND_URLS.join(", ")}`);
});
