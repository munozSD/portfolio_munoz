import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Configuración de path para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializar Express PRIMERO
const app = express();

// Configuración de variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Servir archivos estáticos (AHORA SÍ app está definida)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Ruta raíz de prueba
app.get("/", (req, res) => res.send("API funcionando correctamente!"));

// Rutas de posts
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));