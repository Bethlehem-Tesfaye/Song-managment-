import songModel from "../models/songModel.js";
import CustomError from "../utils/customError.js";

export const createSong = async (req, res, next) => {
  const { title, artist, album, year, genre } = req.body;

  if (!title || !artist || !album || !year) {
    return next(new CustomError("all fields required", 400));
  }
  try {
    const newSong = new songModel({
      title,
      artist,
      album,
      year,
      genre
    });
    await newSong.save();
    return res.status(200).json({ success: true, message: "Song added" });
  } catch (error) {
    return next(error);
  }
};

export const getSongs = async (req, res, next) => {
  const page = req.query.page || 0;
  const songPerPage = 5;

  try {
    const songs = await songModel
      .find()
      .skip(page * songPerPage)
      .limit(songPerPage);
    if (songs.length === 0) {
      return next(new CustomError("no song found", 404));
    }

    return res.status(200).json({
      success: true,
      songs: songs,
      page,
      songPerPage,
      message: "song retrived"
    });
  } catch (error) {
    return next(error);
  }
};

export const updateSong = async (req, res, next) => {
  const id = req.params.id;
  const updateSong = req.body;
  try {
    const song = await songModel.findByIdAndUpdate(id, updateSong, {
      new: true
    });
    if (!song) {
      return next(new CustomError("song not found", 404));
    }
    return res.status(200).json({
      success: true,
      song: song,
      message: "Song updated successfully"
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteSong = async (req, res, next) => {
  const id = req.params.id;
  try {
    const song = await songModel.findByIdAndDelete(id);
    if (!song) {
      return next(new CustomError("song not found", 404));
    }
    return res
      .status(200)
      .json({ success: true, message: "Song deleted successfully" });
  } catch (error) {
    return next(error);
  }
};
