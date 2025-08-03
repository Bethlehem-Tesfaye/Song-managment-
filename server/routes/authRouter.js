import express from "express";
import {
  forgetPassword,
  login,
  logout,
  register,
  resetPassword
} from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/forgot-password", forgetPassword);
authRouter.patch("/reset-password", resetPassword);

export default authRouter;
