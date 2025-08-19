import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String }, // 👈 aquí va la URL de la imagen
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
