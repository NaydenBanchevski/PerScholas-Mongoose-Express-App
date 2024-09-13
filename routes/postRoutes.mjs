import express from "express";
import Post from "../models/Posts.mjs";
const router = express.Router();

router.use(express.json());

router.get("/user-post/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find();
    const userPost = posts.filter((post) => post.user.toString() === userId);
    res.json(userPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/new-post", async (req, res) => {
  const { title, content, user } = req.body;

  if (!title || !content || !user) {
    return res
      .status(400)
      .json({ message: "Title, content, and userId are required." });
  }

  try {
    const newPost = new Post({
      title,
      content,
      user: user,
    });

    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json({ message: "Post deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
