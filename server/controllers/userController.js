import { passwordResetTokenModel } from "../models/passwordResetTokenModel.js";
import userModel from "../models/userModel.js";
import CustomError from "../utils/customError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import transporter from "../config/nodeMailer.js";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // HTTPS only in production
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // cross-site cookie in prod
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: "/"
};

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new CustomError("all fields required", 400));
  }
  try {
    const existEmail = await userModel.findOne({ email });
    if (existEmail) {
      return next(new CustomError("emaild already exisits", 409));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.cookie("token", token, cookieOptions);

    return res.json({
      userData: {
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new CustomError("all fields required", 400));
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new CustomError("cant login pls try again", 404));
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return next(new CustomError("cant login pls try again", 401));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, cookieOptions);

    res.json({
      userData: {
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return next(error);
  }
};
export const logout = (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ message: "Logged out successfully" });
};
export const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new CustomError("email required", 400));
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ message: "reset link has been sent to email." });
    }

    await passwordResetTokenModel.deleteMany({ userId: user._id });
    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const newToken = new passwordResetTokenModel({
      userId: user._id,
      token: hashedToken,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000)
    });

    await newToken.save();
    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}&userId=${user._id}`;

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "password reset link",
      text: `Click to reset: ${resetLink}\n\n
            This link will expire in 15 minutes.`
    };
    await transporter.sendMail(mailOption);

    return res
      .status(200)
      .json({ message: "reset link has been sent to email." });
  } catch (error) {
    return next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const { token, userId, newPassword } = req.body;

  if (!token || !userId || !newPassword) {
    return next(new CustomError("All fields are required", 400));
  }

  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const tokenDoc = await passwordResetTokenModel.findOne({
      userId,
      token: hashedToken,
      expiresAt: { $gt: Date.now() },
      used: false
    });

    if (!tokenDoc) {
      return next(new CustomError("Invalid or expired token", 400));
    }

    const user = await userModel.findById(userId);
    const hashNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashNewPassword;
    await user.save();

    tokenDoc.used = true;
    await tokenDoc.save();

    return res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    return next(error);
  }
};
