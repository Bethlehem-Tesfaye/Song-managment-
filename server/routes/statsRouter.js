import express from "express";
import authMiddelware from "../middlewares/authMiddleware.js";
import { isSongOwner } from "../middlewares/isSongOwner.js";
import { getUserSongStats } from "../controllers/statsController.js";

const statsRouter = express.Router();

statsRouter.get("/", authMiddelware, getUserSongStats);

export default statsRouter;
