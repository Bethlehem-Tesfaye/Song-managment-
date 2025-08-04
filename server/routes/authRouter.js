import express from "express";
import {
  forgetPassword,
  login,
  logout,
  register,
  resetPassword
} from "../controllers/userController.js";
import { validate } from "../middlewares/validate.js";
import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema
} from "../schema/authSchema.js";

const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), register);
authRouter.post("/login", validate(loginSchema), login);
authRouter.post("/logout", logout);
authRouter.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  forgetPassword
);
authRouter.patch(
  "/reset-password",
  validate(resetPasswordSchema),
  resetPassword
);

export default authRouter;
