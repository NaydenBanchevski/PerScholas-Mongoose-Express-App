import express from "express";
import Comment from "../models/Comment.mjs";
const router = express.Router();

router.use(express.json());

router.get("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  Comment.findById(commentId)
    .then((comment) => {
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.json(comment);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/new-comment", async (req, res) => {
  const { content, user, post } = req.body;

  if (!content || !user || !post) {
    return res
      .status(400)
      .json({ message: "Content, user, and post are required." });
  }

  try {
    const newComment = new Comment({
      content,
      user,
      post,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  const { content, user, post } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { content, user, post },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.json(updatedComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found." });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
