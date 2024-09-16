import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.mjs";

const router = express.Router();

router.use(express.json());

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/new-user", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
