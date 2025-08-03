import express from "express";
import {
  createSong,
  deleteSong,
  getSongs,
  updateSong
} from "../controllers/songController.js";
import authMiddelware from "../middlewares/authMiddleware.js";
import { isSongOwner } from "../middlewares/isSongOwner.js";

const router = express.Router();

router.post("/", authMiddelware, createSong);
router.get("/", authMiddelware, getSongs);
router.put("/:id", authMiddelware, isSongOwner, updateSong);
router.delete("/:id", authMiddelware, isSongOwner, deleteSong);

export default router;
