import express from "express";
import multer from "multer";
import { createPost } from "../controllers/postController.js";

const router = express.Router();

// Configuración de multer para guardar imágenes en carpeta "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // carpeta donde guardar imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // nombre único
  },
});

const upload = multer({ storage });

// Ruta para crear post con imagen
router.post("/", upload.single("image"), createPost);

export default router;
