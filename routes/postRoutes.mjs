import express from "express";
import {
  getPostsByUserId,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPosts,
} from "../controllers/postsController.mjs";

const router = express.Router();

router.use(express.json());

router.get("/user-post/:userId", getPostsByUserId);
router.post("/new-post", createPost);
router.get("/:id", getPostById);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/", getAllPosts);

export default router;
