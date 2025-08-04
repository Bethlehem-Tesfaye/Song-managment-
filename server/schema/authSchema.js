import { z } from "zod";

// Register schema
export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required")
});

// Forgot password schema
export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email")
});

// Reset password schema
export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  userId: z.string().min(1, "User ID is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters")
});
