import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authroutes.js";
import todoRoutes from "./routes/todoroutes.js";
import authMiddleware from "./middleware/authmiddleware.js";
import "dotenv/config";
import prisma from "./lib/prisma.js";

const app = express();
const PORT = process.env.PORT || 5003;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

// Test DB Route
app.get("/test-db", async (req, res) => {
  console.log("GET /test-db was hit");
  try {
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`;
    res.json({ message: "Database connected!", result });
  } catch (error) {
    console.error("Database connection error:", error);
    res
      .status(500)
      .json({ message: "Database connection failed", error: error.message });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
