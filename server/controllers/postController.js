import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newPost = new Post({
      title,
      content,
      category,
      image: req.file ? req.file.filename : null, // guardar nombre de la imagen
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el post" });
  }
};
