import { z } from "zod";

export const songSchema = z.object({
  title: z.string().min(1, "Title is required"),
  artist: z.string().min(1, "Artist is required"),
  album: z.string().min(1, "Album is required"),
  year: z
    .number({
      required_error: "Year is required",
      invalid_type_error: "Year must be a number"
    })
    .int()
    .min(1000, "Year must be valid")
    .max(9999, "Year must be valid"),
  genre: z.string().optional()
});
