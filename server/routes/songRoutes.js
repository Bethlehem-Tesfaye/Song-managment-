import express from "express";
import {
  createSong,
  deleteSong,
  getSongs,
  updateSong
} from "../controllers/songController.js";

const router = express.Router();

router.post("/", createSong);
router.get("/", getSongs);
router.put("/:id", updateSong);
router.delete("/:id", deleteSong);

export default router;
