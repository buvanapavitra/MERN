import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: "./backend/.env" });

console.log("MONGO_URI:", process.env.MONGO_URI);

import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
console.log("__dirname is:", __dirname);

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

const staticPath = path.join(__dirname, "frontend", "dist");
console.log("Serving static files from:", staticPath);
app.use(express.static(staticPath));
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "frontend", "dist", "index.html");
  console.log("Serving index.html from:", indexPath);
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
