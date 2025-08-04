import songModel from "../models/songModel.js";
import CustomError from "../utils/customError.js";

export const createSong = async (req, res, next) => {
  const { userId } = req;
  const { title, artist, album, year, genre } = req.body;

  try {
    const newSong = new songModel({
      title,
      artist,
      album,
      year,
      genre,
      userId
    });
    await newSong.save();
    return res
      .status(201)
      .json({ success: true, song: newSong, message: "Song added" });
  } catch (error) {
    return next(error);
  }
};

export const getSongs = async (req, res, next) => {
  const { userId } = req;
  const page = parseInt(req.query.page) || 1;
  const songPerPage = 5;

  try {
    const totalSongs = await songModel.countDocuments({ userId });
    const songs = await songModel
      .find({ userId })
      .skip((page - 1) * songPerPage)
      .limit(songPerPage);
    if (songs.length === 0) {
      return next(new CustomError("no song found", 404));
    }
    const totalPage = Math.ceil(totalSongs / songPerPage);

    return res.status(200).json({
      success: true,
      songs: songs,
      page,
      songPerPage,
      totalPage,
      message: "song retrived"
    });
  } catch (error) {
    return next(error);
  }
};

export const updateSong = async (req, res, next) => {
  const { song } = req;
  const { title, artist, album, year, genre } = req.body;

  if (!title || !artist || !album || !year) {
    return next(new CustomError("All fields required", 400));
  }
  try {
    song.title = title;
    song.artist = artist;
    song.album = album;
    song.year = year;
    song.genre = genre;

    await song.save();

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
  const { song } = req;
  try {
    await song.deleteOne();
    return res
      .status(200)
      .json({ success: true, message: "Song deleted successfully" });
  } catch (error) {
    return next(error);
  }
};
