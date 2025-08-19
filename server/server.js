import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Ruta raíz de prueba
app.get("/", (req, res) => res.send("API funcionando correctamente!"));

// Rutas de posts
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
