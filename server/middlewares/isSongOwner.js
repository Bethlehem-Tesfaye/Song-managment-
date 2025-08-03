import songModel from "../models/songModel.js";
import CustomError from "../utils/customError.js";

export const isSongOwner = async (req, res, next) => {
  const { userId } = req;
  const { id: songId } = req.params;

  try {
    if (!songId) {
      return next(new CustomError("Song ID is required", 400));
    }

    const song = await songModel.findById(songId);

    if (!song) {
      return next(new CustomError("Song not found", 404));
    }

    if (song.userId.toString() !== userId) {
      return next(new CustomError("Forbidden: You do not own this song", 403));
    }

    req.song = song;
    next();
  } catch (error) {
    next(error);
  }
};
