import express from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment,
} from "../controllers/commentController.mjs";

const router = express.Router();

router.use(express.json());

router.get("/:commentId", getCommentById);
router.post("/new-comment", createComment);
router.patch("/:commentId", updateComment);
router.delete("/:commentId", deleteComment);
router.get("/", getAllComments);

export default router;
