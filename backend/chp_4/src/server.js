import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authroutes.js";
import todoRoutes from "./routes/todoroutes.js";
import authMiddleware from "./middleware/authmiddleware.js";
import prisma from "./prismaclient.js";
const app = express();
const PORT = process.env.PORT || 5003;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Import routes
app.use("/auth", authRoutes);

// Use the todo routes
app.use("/todos", authMiddleware, todoRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
