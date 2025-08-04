import express from "express";
import {
  createSong,
  deleteSong,
  getSongs,
  updateSong
} from "../controllers/songController.js";
import authMiddelware from "../middlewares/authMiddleware.js";
import { isSongOwner } from "../middlewares/isSongOwner.js";
import { validate } from "../middlewares/validate.js";
import { songSchema } from "../schema/songSchema.js";

const router = express.Router();

router.post("/", authMiddelware, validate(songSchema), createSong);
router.get("/", authMiddelware, getSongs);
router.put(
  "/:id",
  authMiddelware,
  isSongOwner,
  validate(songSchema),
  updateSong
);
router.delete("/:id", authMiddelware, isSongOwner, deleteSong);

export default router;
