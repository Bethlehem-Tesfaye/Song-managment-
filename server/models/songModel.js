import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String }
  },
  { timestamps: true }
);

const songModel = mongoose.models.Song || mongoose.model("Song", songSchema);

export default songModel;
