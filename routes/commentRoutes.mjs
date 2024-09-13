import express from "express";
import Comment from "../models/Comment.mjs";
const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
